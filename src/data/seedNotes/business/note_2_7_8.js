export const note_business_2_7_8 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand different types of budgets used in businesses.' } },
    { id: 'h-1', type: 'heading', data: { text: 'What is a Budget?', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'A **budget** is a financial plan for the future concerning the revenues and costs of a business. Budgets are used to set targets, control expenditure, and delegate authority to individual departments.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Types of Budgets', level: 3 } },
    { id: 'tbl-1', type: 'comparisonTable', data: {
      headers: ['Budget Type', 'Description', 'Purpose'],
      rows: [
        ['Income/Sales Budget', 'A target forecasting the minimum amount of revenue that must be generated.', 'Acts as a target to motivate the sales team and estimates future income.'],
        ['Expenditure/Cost Budget', 'A limit placed on the amount a department can spend.', 'Ensures that costs stay under control and capital is not wasted. Requires authorization to exceed.'],
        ['Profit Budget', 'Calculated based on the sales and expenditure budgets (Sales - Expenditure).', 'Sets the overall financial target for the year and acts as a measure of success.']
      ]
    }},
    { id: 'h-2', type: 'heading', data: { text: 'Approaches to Budgeting', level: 3 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '**Historical Budgeting:** Setting budgets based on the previous year\'s figures, maybe adding a percentage for inflation. It is quick but assumes the market hasn\'t fundamentally changed.' },
      { text: '**Zero-Based Budgeting:** Every department starts with a budget of zero. Managers must justify every penny they request with a business case. This is time-consuming but prevents "budget slack" and wasted resources.' }
    ]}},
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Why use budgets?', text: 'They help coordinate different departments (ensuring Marketing isn\'t spending money that Production needs), measure management performance, and avoid overspending.' } },
    { "id": "enr-t7b-h-monitor", "type": "heading", "data": { "text": "Setting vs. Monitoring Budgets", "level": 3 } },
    { "id": "enr-t7b-p-monitor", "type": "paragraph", "data": { "text": "A budget is worthless if it is set in January and not checked until December. Effective budgeting requires <b>regular monitoring</b> — comparing actual figures against budgeted figures monthly so that managers can take corrective action before small variances become crises." } },
    { "id": "enr-t7b-list-monitor", "type": "list", "data": { "style": "bullet", "items": [
      { "text": "<b>Monthly variance reviews:</b> Department heads present actual vs. budget figures and explain significant differences." },
      { "text": "<b>Rolling budgets:</b> Rather than a fixed annual plan, budgets are updated each month to reflect current trading conditions." },
      { "text": "<b>KPI linkage:</b> Budget performance is tied to key performance indicators, triggering management reviews when thresholds are breached." }
    ]}},
    { "id": "enr-t7b-call-brand", "type": "callout", "data": { "style": "worked", "title": "Real World: Tesco Store Budget Management", "text": "Tesco sets monthly departmental budgets at store level covering staffing, food wastage, utilities, and sales targets. Store managers attend regional budget-review meetings where they must present variance reports. A store showing persistent adverse cost variances — for example, actual food waste costs 20% above budget — faces scrutiny and must submit an action plan. This illustrates how budget <em>monitoring</em>, not just setting, drives real operational management." } },
    { "id": "enr-t7b-call-student", "type": "callout", "data": { "style": "tip", "title": "Relatable: Monthly Spending Tracker", "text": "Setting a spending plan for food, transport, and entertainment takes ten minutes. Checking your bank app each week to see whether you are on track is what actually prevents overspending. The same logic applies to businesses: writing the budget is easy — the discipline is in the monitoring." } },
    { id: 'sum-1', type: 'summary', data: { text: 'Budgets are financial plans for income, expenditure, and profit. Businesses can use historical data or zero-based budgeting to assign funds.' } }
  ],
  recall: {
    enabled: true,
    summaryText: 'Budgets plan income, expenditure, and profit. Zero-based budgeting requires all spending to be justified.',
    cues: [
      { id: 'c-1', blockId: 'p-1', prompt: 'Define a budget.', answer: 'A quantitative financial plan estimating future revenues and expenditures over a given period.' },
      { id: 'c-2', blockId: 'tbl-1', prompt: 'What is the purpose of an expenditure budget?', answer: 'To set a strict limit on spending to ensure costs are controlled.' },
      { id: 'c-3', blockId: 'list-1', prompt: 'What is zero-based budgeting?', answer: 'An approach where budgets start at zero and managers must justify every request for funds based on needs.' },
      { id: 'c-4', blockId: 'call-1', prompt: 'State one benefit of budgeting.', answer: 'It provides targets, controls spending, or coordinates activities between departments.' }
    ]
  },
  evidence: []
};