export const note_business_3_15_5 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand and calculate labour productivity metrics as a measure of human resource efficiency.' } },
    { id: 'h-1', type: 'heading', data: { text: 'What is Labour Productivity?', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'Labour productivity measures the amount of output produced by an individual workforce or employee over a given period. High productivity is a major source of competitive advantage, as it lowers the average unit cost of production.' } },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Formula', text: 'Labour Productivity = Total Output (per period) ÷ Average Number of Employees (per period)' } },
    { id: 'h-2', type: 'heading', data: { text: 'Importance of Labour Productivity', level: 3 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '\**Lower Unit Costs:\** Higher output per worker means wage costs are spread over a greater number of units.' },
      { text: '\**Competitive Pricing:\** Lower unit costs enable the firm to reduce prices and gain market share.' },
      { text: '\**Higher Profit Margins:\** If prices are maintained while unit cost falls, profit margins expand.' },
      { text: '\**Wage Demands:\** Increases in productivity often justify higher employee wages without driving up overall costs.' }
    ] } },
    { id: 'h-2', type: 'heading', data: { text: 'Unit Labour Cost', level: 2 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'Unit labour cost is another vital metric that highlights the wage expense required to produce a single item.' } },
    { id: 'call-2', type: 'callout', data: { style: 'key', title: 'Formula', text: 'Unit Labour Cost = Total Labour Costs ÷ Total Output' } },
    { id: 'tbl-1', type: 'comparisonTable', data: {
      caption: 'Improving Productivity vs Quality',
      headers: ['Strategy for Output', 'Potential Risk'],
      rows: [
        ['Piece-rate pay systems', 'Rushed work leading to poor quality'],
        ['Automation / New tech', 'Initial high investment, staff resistance'],
        ['Staff training', 'Training costs, staff may leave for better jobs']
      ]
    } },
    { id: 'call-3', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'A factory produces 500,000 units a year with 50 workers. \nLabour Productivity = 500,000 ÷ 50 = 10,000 units per worker. \nIf total labour cost is £1.5m, Unit Labour Cost = £1,500,000 ÷ 500,000 = £3.00 per unit.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Labour productivity indicates HR efficiency by evaluating output per employee. Improving productivity lowers unit labour costs, thereby increasing competitiveness and profit margins.' } },
    {
      id: 'enr-svg-1',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" font-family="Arial,sans-serif"><text x="250" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Labour Productivity Comparison</text><text x="250" y="35" text-anchor="middle" font-size="11" fill="#475569">Labour vs Capital Intensive</text><text transform="rotate(-90,18,160)" x="18" y="160" text-anchor="middle" font-size="10" fill="#475569">Output per worker (units/day)</text><line x1="65" y1="250" x2="480" y2="250" stroke="#cbd5e1" stroke-width="1"/><line x1="65" y1="200" x2="480" y2="200" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/><line x1="65" y1="150" x2="480" y2="150" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/><line x1="65" y1="100" x2="480" y2="100" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/><line x1="65" y1="50" x2="480" y2="50" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/><line x1="65" y1="250" x2="65" y2="50" stroke="#94a3b8" stroke-width="1.5"/><text x="60" y="254" text-anchor="end" font-size="10" fill="#64748b">0</text><text x="60" y="204" text-anchor="end" font-size="10" fill="#64748b">50</text><text x="60" y="154" text-anchor="end" font-size="10" fill="#64748b">100</text><text x="60" y="104" text-anchor="end" font-size="10" fill="#64748b">150</text><text x="60" y="54" text-anchor="end" font-size="10" fill="#64748b">200</text><rect x="100" y="70" width="80" height="180" rx="4" fill="#6366f1" opacity="0.85"/><text x="140" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#4338ca">180</text><rect x="235" y="130" width="80" height="120" rx="4" fill="#818cf8" opacity="0.85"/><text x="275" y="125" text-anchor="middle" font-size="11" font-weight="bold" fill="#4338ca">120</text><rect x="370" y="170" width="80" height="80" rx="4" fill="#2d2d72" opacity="0.85"/><text x="410" y="165" text-anchor="middle" font-size="11" font-weight="bold" fill="#4338ca">80</text><text x="140" y="265" text-anchor="middle" font-size="10" fill="#1e293b">Car factory</text><text x="140" y="277" text-anchor="middle" font-size="10" fill="#1e293b">(automated)</text><text x="275" y="265" text-anchor="middle" font-size="10" fill="#1e293b">Car factory</text><text x="275" y="277" text-anchor="middle" font-size="10" fill="#1e293b">(manual)</text><text x="410" y="265" text-anchor="middle" font-size="10" fill="#1e293b">Service sector</text><text x="410" y="277" text-anchor="middle" font-size="10" fill="#1e293b">(call centre)</text></svg>',
        caption: 'Labour Productivity Comparison — Labour vs Capital Intensive. Automated factories achieve far higher output per worker than manual or service-sector operations.'
      }
    },
    { id: 'enr-callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Case Study: Toyota Kaizen', text: "Toyota's Kaizen approach: continuous improvement teams review assembly line processes weekly. Between 2010–2020, Toyota improved output per worker by 40% without increasing headcount. Kaizen = small, incremental productivity gains compounding over time." } },
    { id: 'enr-callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Productivity Formula & Improvement Methods', text: 'Exam tip: Labour productivity = Output / Number of workers. To IMPROVE: training (upskills staff), technology (automation), motivation (Herzberg hygiene+motivators), better management. Each improvement method has trade-offs (cost, time, worker resistance).' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'What is the formula for labour productivity?', answer: 'Total Output (per period) ÷ Average Number of Employees' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'How does high labour productivity increase competitiveness?', answer: 'It lowers average unit costs, allowing firms to reduce prices or achieve higher profit margins.' },
      { id: 'cue-3', blockId: 'call-2', prompt: 'How do you calculate Unit Labour Cost?', answer: 'Total Labour Costs ÷ Total Output' },
      { id: 'cue-4', blockId: 'tbl-1', prompt: 'What is a potential negative side-effect of linking pay directly to output speed?', answer: 'It may cause workers to rush, leading to a drop in quality or increased wastage.' }
    ],
    summaryText: 'Labour productivity tracks output per worker, and higher productivity leads to reduced unit labour costs and greater competitive advantage.'
  }
};