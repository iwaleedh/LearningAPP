export const note_business_2_7_9 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Analyse variances from budgeted figures.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Variance Analysis', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: '**Variance analysis** is the process of calculating and investigating differences between the budgeted figures (the plan) and the actual figures that occurred.' } },
    { id: 'eq-1', type: 'equation', data: { html: 'Variance = Actual Figure − Budgeted Figure', caption: 'Calculating the gap' } },
    { id: 'h-2', type: 'heading', data: { text: 'Favourable and Adverse Variances', level: 3 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'Variances are broadly classified into two categories based on their effect on profit:' } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '**Favourable (F):** A difference that is good for the business. E.g., Actual revenue is *higher* than budgeted, or actual costs are *lower* than budgeted.' },
      { text: '**Adverse (A):** A difference that is bad for the business. E.g., Actual revenue is *lower* than budgeted, or actual costs are *higher* than budgeted.' }
    ]}},
    { id: 'call-1', type: 'callout', data: { style: 'worked', title: 'Example Analysis', text: '<p>A business budgets £5,000 for raw materials, but due to a shortage, supplier prices rise, and they actually spend £6,000.</p><ul>\n<li>Variance = £6,000 - £5,000 = £1,000</li>\n<li>Classification: £1,000 **Adverse** (because higher costs hurt profit).</li>\n</ul>' } },
    { id: 'h-2', type: 'heading', data: { text: 'Responding to Variances', level: 3 } },
    { id: 'p-3', type: 'paragraph', data: { text: 'Management must investigate significant variances to take corrective action:' } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [
      { text: 'Causes of Adverse Cost Variances: Supplier price hikes, staff overtime due to inefficiencies, or high stock wastage.' },
      { text: 'Causes of Favourable Sales Variances: Highly successful advertising, competitor going out of business, economic boom.' }
    ]}},
    { id: 'call-2', type: 'callout', data: { style: 'tip', title: 'Exam Trap', text: 'An "adverse" variance does not just mean a number went down, and "favourable" does not just mean it went up. You must think: *Did this change increase or decrease our profit?*' } },
    { "id": "enr-t7b-h-vartbl", "type": "heading", "data": { "text": "Favourable vs. Adverse — Quick Reference", "level": 3 } },
    { "id": "enr-t7b-tbl-variance", "type": "comparisonTable", "data": {
      "headers": ["Category", "Favourable Variance", "Adverse Variance"],
      "rows": [
        ["Sales Revenue", "Actual revenue > Budgeted (e.g. stronger demand, successful campaign)", "Actual revenue < Budgeted (e.g. weak demand, competitor price cuts)"],
        ["Costs", "Actual costs < Budgeted (e.g. cheaper supplier deal secured)", "Actual costs > Budgeted (e.g. raw material price hike, unplanned overtime)"],
        ["Profit", "Actual profit > Budgeted (combined positive effect)", "Actual profit < Budgeted (combined negative effect — requires urgent review)"]
      ],
      "caption": "Favourable and adverse variances across the main budget categories"
    }},
    { "id": "enr-t7b-p-budgetmonitor", "type": "paragraph", "data": { "text": "Variance analysis is only effective when budgets are <b>monitored regularly</b>. Monthly reviews allow managers to spot emerging problems and take corrective action — such as renegotiating supplier contracts to address an adverse cost variance, or running a promotional campaign to recover lagging revenue." } },
    { "id": "enr-t7b-call-brand", "type": "callout", "data": { "style": "worked", "title": "Real World: Tesco Regional Variance Reviews", "text": "Tesco store managers attend monthly regional review meetings and must present budget variance reports. A store reporting an adverse labour cost variance — say, actual wages £8,000 above budget — must explain whether the cause was unplanned overtime, high staff turnover, or scheduling errors. The regional manager then decides whether to adjust the budget or require an action plan. This is variance analysis driving real management decisions at scale." } },
    { "id": "enr-t7b-call-student", "type": "callout", "data": { "style": "tip", "title": "Relatable: Exam Score vs. Target", "text": "If you targeted 70% on a mock but scored 55%, that is a 15-mark adverse variance. The point is not just to notice the gap — it is to investigate <em>why</em>: Was it a revision gap, time pressure, or unfamiliar question style? Identifying the cause is the whole purpose of variance analysis, and the same logic applies to businesses investigating budget shortfalls." } },
    { id: 'sum-1', type: 'summary', data: { text: 'Variance analysis highlights the gaps between budgets and reality. Favourable variances boost profit; adverse variances reduce it and require investigation.' } }
  ],
  recall: {
    enabled: true,
    summaryText: 'Variance is actual vs budget. Favourable = good for profit, Adverse = bad for profit.',
    cues: [
      { id: 'c-1', blockId: 'p-1', prompt: 'What is variance analysis?', answer: 'Comparing actual financial outcomes against the original budgeted figures.' },
      { id: 'c-2', blockId: 'list-1', prompt: 'Define an adverse variance.', answer: 'A variance that reduces profit, such as actual costs being higher than expected, or sales being lower.' },
      { id: 'c-3', blockId: 'list-1', prompt: 'Define a favourable variance.', answer: 'A variance that increases profit, such as actual revenue being higher than budgeted, or costs being lower.' },
      { id: 'c-4', blockId: 'list-2', prompt: 'Why must management investigate adverse variances?', answer: 'To locate inefficiencies, control escalating costs, or adjust strategy to prevent the issue recurring next month.' }
    ]
  },
  evidence: []
};