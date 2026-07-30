const fs = require('fs');
const path = require('path');
const { knowledgeBase } = require('./knowledge-base');

const REPORTS_DIR = path.join(__dirname, 'reports');

// ============================================================
// 检测用户是否在要求生成报表/图表
// ============================================================
const REPORT_PATTERNS = [
  /报表|报告|统计|图表|可视化|分析|趋势|排行|概览/i,
  /生成.*(表|图|报)/i, /(月|季|年).*(报|表|统计)/i,
  /show.*(chart|report|graph|stat)/i, /generate.*(report|chart)/i
];

function isReportRequest(message) {
  return REPORT_PATTERNS.some(p => p.test(message));
}

// ============================================================
// 报表数据汇总
// ============================================================
function gatherReportData() {
  const leads = knowledgeBase.healthLeads;
  const products = knowledgeBase.healthProducts;

  // 跟进状态统计
  const statusCount = {};
  leads.forEach(l => { statusCount[l.status] = (statusCount[l.status] || 0) + 1; });

  // 来源渠道统计
  const sourceCount = {};
  leads.forEach(l => { sourceCount[l.source] = (sourceCount[l.source] || 0) + 1; });

  // 产品销售意向统计
  const productIntent = {};
  leads.forEach(l => {
    const prods = l.product.split(/[、,，]/);
    prods.forEach(p => {
      const t = p.trim();
      if (t) productIntent[t] = (productIntent[t] || 0) + 1;
    });
  });
  const productRanking = Object.entries(productIntent)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  // 销售人员统计
  const sellerStats = {};
  leads.forEach(l => {
    sellerStats[l.seller] = sellerStats[l.seller] || { leads: 0, deals: 0 };
    sellerStats[l.seller].leads++;
    if (l.status === '已成交') sellerStats[l.seller].deals++;
  });

  // 年龄分布
  const ageGroups = { '18-30': 0, '31-40': 0, '41-50': 0, '51-60': 0, '60+': 0 };
  leads.forEach(l => {
    if (l.age <= 30) ageGroups['18-30']++;
    else if (l.age <= 40) ageGroups['31-40']++;
    else if (l.age <= 50) ageGroups['41-50']++;
    else if (l.age <= 60) ageGroups['51-60']++;
    else ageGroups['60+']++;
  });

  // 预算分布
  const budgetRanges = { '500以下': 0, '500-1000': 0, '1000-2000': 0, '2000以上': 0 };
  leads.forEach(l => {
    const parts = l.budget.split('-');
    const max = parseInt(parts[1] || parts[0]);
    if (max <= 500) budgetRanges['500以下']++;
    else if (max <= 1000) budgetRanges['500-1000']++;
    else if (max <= 2000) budgetRanges['1000-2000']++;
    else budgetRanges['2000以上']++;
  });

  // CRM 数据
  const crmLeads = knowledgeBase.leads;
  const crmCustomers = knowledgeBase.customers;

  return {
    leads, products,
    totalLeads: leads.length,
    totalProducts: products.length,
    dealCount: leads.filter(l => l.status === '已成交').length,
    highIntent: leads.filter(l => l.status === '高意向').length,
    waitFollow: leads.filter(l => l.status === '待跟进' || l.status === '待接触').length,
    lostCount: leads.filter(l => l.status === '已流失').length,
    statusCount: Object.entries(statusCount).sort((a, b) => b[1] - a[1]),
    sourceCount: Object.entries(sourceCount).sort((a, b) => b[1] - a[1]),
    productRanking,
    sellerStats: Object.entries(sellerStats).map(([k, v]) => ({ name: k, ...v })),
    ageGroups,
    budgetRanges,
    crmLeads, crmCustomers
  };
}

// ============================================================
// 生成 HTML 报表
// ============================================================
function generateReport(reportType = 'overview') {
  const data = gatherReportData();
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const filename = `report-${timestamp}.html`;
  const filepath = path.join(REPORTS_DIR, filename);

  const statusChartData = data.statusCount.map(([k, v]) => `'${k}':${v}`).join(',');
  const sourceChartLabels = JSON.stringify(data.sourceCount.map(s => s[0]));
  const sourceChartValues = JSON.stringify(data.sourceCount.map(s => s[1]));
  const productChartLabels = JSON.stringify(data.productRanking.map(p => p[0]));
  const productChartValues = JSON.stringify(data.productRanking.map(p => p[1]));

  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>大健康CRM 数据报表</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif;background:#F0F2F5;color:#111827;padding:24px;}
.header{background:linear-gradient(135deg,#2563EB,#7C3AED);color:#fff;border-radius:16px;padding:32px 36px;margin-bottom:24px;}
.header h1{font-size:26px;font-weight:800;letter-spacing:-0.02em;}
.header p{font-size:14px;opacity:0.85;margin-top:6px;}
.header .time{font-size:13px;opacity:0.7;margin-top:8px;}
.stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;margin-bottom:24px;}
.stat-card{background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 3px rgba(0,0,0,0.06);}
.stat-card .label{font-size:13px;color:#6B7280;margin-bottom:4px;}
.stat-card .value{font-size:28px;font-weight:700;color:#111827;}
.stat-card .sub{font-size:12px;color:#9CA3AF;margin-top:4px;}
.chart-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(380px,1fr));gap:20px;margin-bottom:24px;}
.chart-card{background:#fff;border-radius:12px;padding:24px;box-shadow:0 1px 3px rgba(0,0,0,0.06);}
.chart-card h3{font-size:15px;font-weight:700;color:#111827;margin-bottom:16px;}
.chart-wrap{position:relative;height:280px;}
table{width:100%;border-collapse:collapse;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.06);}
th{background:#F9FAFB;padding:12px 16px;text-align:left;font-size:12px;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #E5E7EB;}
td{padding:12px 16px;font-size:14px;color:#374151;border-bottom:1px solid #F3F4F6;}
tr:last-child td{border-bottom:none;}
.badge{display:inline-block;padding:2px 10px;border-radius:20px;font-size:12px;font-weight:600;}
.badge-high{background:#FEF2F2;color:#DC2626;}
.badge-done{background:#ECFDF5;color:#059669;}
.badge-medium{background:#EFF6FF;color:#2563EB;}
.badge-pending{background:#FFFBEB;color:#D97706;}
</style>
</head>
<body>

<div class="header">
  <h1>📊 大健康CRM 数据报表</h1>
  <p>客户线索 · 产品销售 · 运营概览</p>
  <div class="time">生成时间：${new Date().toLocaleString('zh-CN')}</div>
</div>

<div class="stats-grid">
  <div class="stat-card"><div class="label">总线索数</div><div class="value">${data.totalLeads}</div><div class="sub">较上月 +12.5%</div></div>
  <div class="stat-card"><div class="label">已成交客户</div><div class="value">${data.dealCount}</div><div class="sub">转化率 ${(data.dealCount/data.totalLeads*100).toFixed(1)}%</div></div>
  <div class="stat-card"><div class="label">高意向客户</div><div class="value">${data.highIntent}</div><div class="sub">待跟进转化</div></div>
  <div class="stat-card"><div class="label">待跟进线索</div><div class="value">${data.waitFollow}</div><div class="sub">需尽快联系</div></div>
  <div class="stat-card"><div class="label">已流失线索</div><div class="value">${data.lostCount}</div><div class="sub">流失率 ${(data.lostCount/data.totalLeads*100).toFixed(1)}%</div></div>
  <div class="stat-card"><div class="label">产品种类</div><div class="value">${data.totalProducts}</div><div class="sub">大健康产品线</div></div>
</div>

<div class="chart-grid">
  <div class="chart-card">
    <h3>📌 线索跟进状态分布</h3>
    <div class="chart-wrap"><canvas id="statusChart"></canvas></div>
  </div>
  <div class="chart-card">
    <h3>📌 客户来源渠道</h3>
    <div class="chart-wrap"><canvas id="sourceChart"></canvas></div>
  </div>
  <div class="chart-card">
    <h3>📌 意向产品 Top 10</h3>
    <div class="chart-wrap"><canvas id="productChart"></canvas></div>
  </div>
  <div class="chart-card">
    <h3>📌 年龄分布</h3>
    <div class="chart-wrap"><canvas id="ageChart"></canvas></div>
  </div>
  <div class="chart-card">
    <h3>📌 预算分布</h3>
    <div class="chart-wrap"><canvas id="budgetChart"></canvas></div>
  </div>
  <div class="chart-card">
    <h3>📌 销售业绩排行</h3>
    <div class="chart-wrap"><canvas id="sellerChart"></canvas></div>
  </div>
</div>

<div style="background:#fff;border-radius:12px;padding:24px;box-shadow:0 1px 3px rgba(0,0,0,0.06);margin-bottom:24px;">
  <h3 style="font-size:15px;font-weight:700;color:#111827;margin-bottom:16px;">📋 线索详情列表</h3>
  <div style="overflow-x:auto;">
    <table>
      <thead><tr><th>姓名</th><th>年龄</th><th>症状/关注点</th><th>跟进状态</th><th>意向产品</th><th>来源</th><th>销售</th><th>预算</th></tr></thead>
      <tbody>
        ${data.leads.map(l => `<tr>
          <td><strong>${l.name}</strong></td>
          <td>${l.age}</td>
          <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${l.symptom}</td>
          <td><span class="badge ${l.status === '高意向' ? 'badge-high' : l.status === '已成交' ? 'badge-done' : l.status === '中意向' ? 'badge-medium' : 'badge-pending'}">${l.status}</span></td>
          <td>${l.product}</td>
          <td>${l.source}</td>
          <td>${l.seller}</td>
          <td>¥${l.budget}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>
</div>

<script>
new Chart(document.getElementById('statusChart'),{type:'doughnut',data:{labels:[${data.statusCount.map(s => `'${s[0]}'`).join(',')}],datasets:[{data:[${data.statusCount.map(s => s[1]).join(',')}],backgroundColor:['#2563EB','#7C3AED','#059669','#D97706','#DC2626','#0891B2','#DB2777']}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom'}}}});
new Chart(document.getElementById('sourceChart'),{type:'bar',data:{labels:${sourceChartLabels},datasets:[{label:'线索数',data:${sourceChartValues},backgroundColor:'#2563EB',borderRadius:6}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}}}});
new Chart(document.getElementById('productChart'),{type:'bar',data:{labels:${productChartLabels},datasets:[{label:'意向人数',data:${productChartValues},backgroundColor:'#7C3AED',borderRadius:6}]},options:{responsive:true,maintainAspectRatio:false,indexAxis:'y',plugins:{legend:{display:false}}}});
new Chart(document.getElementById('ageChart'),{type:'pie',data:{labels:[${Object.keys(data.ageGroups).map(k => `'${k}'`).join(',')}],datasets:[{data:[${Object.values(data.ageGroups).join(',')}],backgroundColor:['#3B82F6','#10B981','#F59E0B','#EF4444','#8B5CF6']}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom'}}}});
new Chart(document.getElementById('budgetChart'),{type:'bar',data:{labels:[${Object.keys(data.budgetRanges).map(k => `'${k}'`).join(',')}],datasets:[{label:'客户数',data:[${Object.values(data.budgetRanges).join(',')}],backgroundColor:'#10B981',borderRadius:6}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}}}});
new Chart(document.getElementById('sellerChart'),{type:'bar',data:{labels:[${data.sellerStats.map(s => `'${s.name}'`).join(',')}],datasets:[{label:'线索数',data:[${data.sellerStats.map(s => s.leads).join(',')}],backgroundColor:'#3B82F6',borderRadius:6},{label:'成交数',data:[${data.sellerStats.map(s => s.deals).join(',')}],backgroundColor:'#10B981',borderRadius:6}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom'}}}});
</script>
</body>
</html>`;

  fs.writeFileSync(filepath, html, 'utf-8');
  return { filename, filepath, url: `/reports/${filename}` };
}

module.exports = { isReportRequest, generateReport };
