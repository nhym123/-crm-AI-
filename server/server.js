const express = require('express');
const http = require('http');
const path = require('path');
const { getSystemPrompt, getContextMessage, findDirectAnswer } = require('./knowledge-base');
const { isReportRequest, generateReport } = require('./report-generator');
const fs = require('fs');

const app = express();
const PORT = 3000;
const API_KEY = 'sk-3a2563ed9c894cf1aad62fd189e9c725';

app.use(express.json());
app.use('/reports', express.static(path.join(__dirname, 'reports')));
app.use(express.static(path.join(__dirname, '..')));

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// ============================================================
// AI 聊天 API — 基于知识库的 RAG 对话
// ============================================================
app.post('/api/chat', async (req, res) => {
  const { message, history } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({ error: '消息不能为空' });
  }

  // 0. 检测是否要求生成报表
  if (isReportRequest(message)) {
    try {
      const report = generateReport();
      const reportUrl = `http://localhost:3000${report.url}`;
      return res.json({
        success: true,
        reply: `📊 已为您生成数据报表！\n\n包含统计概览、6 张可视化图表及详细数据表格。\n\n👉 [点击查看报表](${reportUrl})`,
        reportUrl: reportUrl
      });
    } catch (e) {
      return res.json({ success: true, reply: '抱歉，报表生成时遇到了问题，请稍后再试。' });
    }
  }

  // 1. 先尝试直接答案匹配
  const directAnswer = findDirectAnswer(message);
  if (directAnswer) {
    return res.json({ success: true, reply: directAnswer, fromKnowledge: true });
  }

  // 2. 没有直接匹配，调用 LLM
  const messages = [
    { role: 'system', content: getSystemPrompt() }
  ];

  // 添加上文对话历史（最多6条）
  if (history && Array.isArray(history)) {
    const recent = history.slice(-6);
    recent.forEach(h => {
      if (h.role === 'user' || h.role === '我') {
        messages.push({ role: 'user', content: h.text || h.content || '' });
      } else if (h.role === 'assistant' || h.role === 'AI') {
        messages.push({ role: 'assistant', content: h.text || h.content || '' });
      }
    });
  }

  // 将知识库上下文和用户问题合并到一条 user 消息中
  const contextMsg = getContextMessage(message);
  let finalMessage = message;
  if (contextMsg) {
    finalMessage = contextMsg + '\n\n用户问题：' + message;
  }
  messages.push({ role: 'user', content: finalMessage });

  try {
    // 调用 DeepSeek API
    const apiResponse = await callDeepSeek(messages);

    res.json({
      success: true,
      reply: apiResponse
    });
  } catch (err) {
    console.error('API Error:', err.message);
    res.status(500).json({
      success: false,
      error: 'AI服务暂时不可用，请稍后再试',
      reply: '抱歉，我现在有点忙不过来，请稍后再试~'
    });
  }
});

// ============================================================
// 流式聊天 API — 支持打字机效果
// ============================================================
app.post('/api/chat/stream', async (req, res) => {
  const { message, history } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({ error: '消息不能为空' });
  }

  // 0. 检测是否要求生成报表
  if (isReportRequest(message)) {
    try {
      const report = generateReport();
      const reportUrl = `http://localhost:3000${report.url}`;
      const reply = `📊 已为您生成数据报表！\n\n包含统计概览、6 张可视化图表及详细数据表格。\n\n👉 [点击查看报表](${reportUrl})`;
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
      res.setHeader('Access-Control-Allow-Origin', '*');
      let idx = 0;
      const interval = setInterval(() => {
        if (idx < reply.length) {
          const chunk = reply.substring(idx, idx + 3);
          idx += 3;
          res.write(`data: ${JSON.stringify({ content: chunk, done: false })}\n\n`);
        } else {
          clearInterval(interval);
          res.write(`data: ${JSON.stringify({ content: '', done: true, fullContent: reply, reportUrl: reportUrl })}\n\n`);
          res.end();
        }
      }, 15);
      return;
    } catch (e) {
      // fall through to normal LLM
    }
  }

  // 1. 先尝试直接答案匹配（流式返回）
  const directAnswer = findDirectAnswer(message);
  if (directAnswer) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 逐字流式输出直接答案
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < directAnswer.length) {
        const chunk = directAnswer.substring(idx, idx + 3);
        idx += 3;
        res.write(`data: ${JSON.stringify({ content: chunk, done: false })}\n\n`);
      } else {
        clearInterval(interval);
        res.write(`data: ${JSON.stringify({ content: '', done: true, fullContent: directAnswer })}\n\n`);
        res.end();
      }
    }, 20);
    return;
  }

  // 2. 没有直接匹配，调用 LLM
  const systemPrompt = getSystemPrompt();
  const messages = [
    { role: 'system', content: systemPrompt }
  ];

  if (history && Array.isArray(history)) {
    const recent = history.slice(-6);
    recent.forEach(h => {
      if (h.role === 'user' || h.role === '我') {
        messages.push({ role: 'user', content: h.text || h.content || '' });
      } else if (h.role === 'assistant' || h.role === 'AI') {
        messages.push({ role: 'assistant', content: h.text || h.content || '' });
      }
    });
  }

  // 将知识库上下文和用户问题合并到一条 user 消息中
  const contextMsg = getContextMessage(message);
  let finalMessage2 = message;
  if (contextMsg) {
    finalMessage2 = contextMsg + '\n\n用户问题：' + message;
  }
  messages.push({ role: 'user', content: finalMessage2 });

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    await streamDeepSeek(messages, res);
  } catch (err) {
    console.error('Stream Error:', err.message);
    if (!res.headersSent) {
      res.status(500).json({ error: 'AI服务暂时不可用' });
    } else {
      res.write(`data: ${JSON.stringify({ error: 'AI服务暂时不可用', done: true })}\n\n`);
      res.end();
    }
  }
});

// ============================================================
// DeepSeek API 调用（非流式）
// ============================================================
async function callDeepSeek(messages) {
  const response = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: messages,
      temperature: 0.7,
      max_tokens: 2048
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`API ${response.status}: ${errText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// ============================================================
// DeepSeek API 调用（流式）
// ============================================================
async function streamDeepSeek(messages, res) {
  const response = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: messages,
      temperature: 0.7,
      max_tokens: 2048,
      stream: true
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`API ${response.status}: ${errText}`);
  }

  let fullContent = '';

  // 处理 SSE 流
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || !trimmed.startsWith('data: ')) continue;

      const data = trimmed.slice(6);
      if (data === '[DONE]') continue;

      try {
        const parsed = JSON.parse(data);
        const delta = parsed.choices?.[0]?.delta?.content;
        if (delta) {
          fullContent += delta;
          res.write(`data: ${JSON.stringify({ content: delta, done: false })}\n\n`);
        }

        // 检查是否结束
        if (parsed.choices?.[0]?.finish_reason === 'stop') {
          break;
        }
      } catch (e) {
        // 忽略解析错误
      }
    }
  }

  res.write(`data: ${JSON.stringify({ content: '', done: true, fullContent })}\n\n`);
  res.end();
}

// ============================================================
// 健康检查
// ============================================================
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// ============================================================
// 根路径默认跳转登录页
// ============================================================
app.get('/', (req, res) => {
  res.redirect('/login.html');
});

// ============================================================
// 启动服务器
// ============================================================
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`✅ CRM AI 服务器已启动: http://localhost:${PORT}`);
  console.log(`📡 API 端点: POST /api/chat 和 POST /api/chat/stream`);
  console.log(`🏥 健康检查: GET /api/health`);
});
