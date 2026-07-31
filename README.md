<div align="center">

# 🌿 大健康CRM管理系统

**面向大健康行业（保健品 / 营养品 / 健康服务）的开源客户关系管理平台**

集成 **DeepSeek AI 智能助手 · 实时聊天 · 可视化报表自动生成**，开箱即用，可作为企业级健康 CRM 项目的起点。

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![DeepSeek](https://img.shields.io/badge/DeepSeek-4D6BFE?style=flat-square&logo=deepseek&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chart.js&logoColor=white)

</div>

---

## ✨ 核心功能

### 🤖 AI 智能助手
- 内置 **30+ 大健康线索数据**，支持语义问答与知识库 RAG 检索
- 支持 Markdown 排版（加粗 / 标题 / 列表），数据回复分点清晰
- 回复中的链接自动转成可点击超链接
- DeepSeek 风格历史会话：**按日期分组**（今天/昨天/7天内/30天内），支持**置顶 / 重命名 / 删除 / 恢复**
- 「新建会话」自动保存到历史，随时找回旧对话

### 📊 AI 报表自动生成
- 在 AI 助手里说一句 **"生成本月报表"**，自动生成可视化 HTML 报表
- 包含 6 张统计卡片 + 6 张 Chart.js 图表（线索状态 / 来源渠道 / 产品排行 / 年龄分布 / 预算分布 / 销售排行）
- 一键点击链接直接预览

### 💬 实时聊天（健康沟通系统）
- 三栏布局：**客户信息 / 对话流 / AI 健康监控**
- AI 自动识别客户症状（血压 / 睡眠 / 头痛）并给出**话术建议**
- 话术一键填入输入框
- 客户购买记录、身体症状标签、在线状态徽章

### 📦 业务管理
- **线索管理**：30 条大健康线索，含年龄 / 症状 / 意向产品 / 预算 / 跟进状态
- **成交客户**：客户档案 + 症状标签 + 购买记录
- **商品管理**：20+ 大健康产品库（ZB 系列，含功效 / 规格 / 价格）
- **订单管理**：完整订单流转状态
- **数据仪表盘**：运营数据总览

### 🔐 系统管理
- 角色权限管理、账号管理、系统设置

---

## 🛠️ 技术栈

| 层 | 技术 |
|----|------|
| 前端 | 原生 HTML / CSS / JavaScript（无框架依赖，纯静态） |
| 后端 | Node.js + Express |
| AI | DeepSeek API（兼容 OpenAI 流式 SSE） |
| 图表 | Chart.js 4.x（CDN） |
| 存储 | 本地内存知识库 + localStorage + 角色权限 |

---

## 🚀 快速开始

### 环境要求
- Node.js ≥ 18

### 安装运行

```bash
# 1. 克隆仓库
git clone https://github.com/nhym123/-crm-AI-.git
cd -crm-AI-

# 2. 安装依赖
npm install --prefix server

# 3. 启动服务
node server/server.js
```

### 访问系统

打开浏览器访问 **http://localhost:3000**

| 账号 | 密码 | 角色 |
|------|------|------|
| `13912345678` | `123123` | 管理员 |

---

## 📁 项目结构

```
├── login.html               # 登录页
├── dashboard.html           # 数据仪表盘
├── crm-leads-v3.html        # 线索管理
├── customer-management.html # 成交客户
├── product-management.html  # 商品管理
├── order-management.html    # 订单管理
├── chat.html                # 实时聊天（健康沟通系统）
├── settings.html            # 系统设置
├── role-management.html     # 角色与权限
├── account-management.html  # 账号管理
└── server/
    ├── server.js            # Express 服务 + AI 对话 API
    ├── knowledge-base.js    # 知识库数据 + RAG 检索
    ├── report-generator.js  # AI 报表生成器
    ├── package.json
    └── reports/             # 生成的报表（自动创建）
```

---

## 🔌 API 接口

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/api/chat` | AI 对话（JSON 返回） |
| POST | `/api/chat/stream` | AI 对话（SSE 流式返回） |
| GET | `/api/health` | 健康检查 |
| GET | `/reports/*.html` | 访问生成的报表 |

---

## ⚙️ 配置说明

AI 功能默认使用内置的 DeepSeek API Key，如需更换请在 `server/server.js` 中修改：

```javascript
const API_KEY = 'sk-你的DeepSeek-API-Key';
```

> ⚠️ 建议克隆后更换为你自己的 API Key，避免密钥泄露。

---

## 📄 开源协议

本项目仅供学习交流使用。

---

<div align="center">

**Made with ❤️ for the 大健康 industry**

⭐ 如果这个项目对你有帮助，欢迎 Star！

</div>
