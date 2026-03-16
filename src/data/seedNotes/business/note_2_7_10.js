export const note_business_2_7_10 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Evaluate the limitations and drawbacks of budgeting.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Drawbacks of Budgeting', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'While essential for financial control, relying heavily on budgets can create operational and human resource problems within a business.' } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '**Inflexibility:** Overly strict budgets can stifle entrepreneurship. If an unexpected opportunity arises to bulk-buy cheap materials, managers may be unable to act if it exceeds their monthly budget limit.' },
      { text: '**Demotivation:** If budget targets are set unrealistically high (for sales) or unfairly low (for costs), employees may feel they are impossible to achieve, causing a drop in morale and productivity.' },
      { text: '**"Use it or lose it" culture:** In large organisations, if a department has money left in their budget near the end of the year, they may spend it recklessly to ensure their budget isn\'t cut the following year.' },
      { text: '**Time-Consuming:** Creating, negotiating, and continuously monitoring budgets (variance analysis) takes considerable management time, distracting them from strategic planning.' },
      { text: '**Inaccurate forecasts:** Budgets are based on predictions of the future. Rapid economic shifts, inflation, or supplier bankruptcies can render a budget entirely useless within weeks.' }
    ]}},
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Budget Conflict', text: 'Budgets can cause inter-departmental conflict. For example, marketing wants a larger budget to advertise, while finance demands cuts to improve profit margins.' } },
    { id: 'call-2', type: 'callout', data: { style: 'tip', title: 'Evaluation Structure', text: 'When critiquing budgeting, compare the benefits of control and target-setting against the costs of rigidity and demotivation. The success of budgeting often depends on *how* they are set (e.g. consulting staff vs forcing targets from the top).' } },
    { "id": "enr-t7b-h-improve", "type": "heading", "data": { "text": "Making Budgeting More Effective", "level": 3 } },
    { "id": "enr-t7b-p-participative", "type": "paragraph", "data": { "text": "<b>Participative (bottom-up) budgeting</b> addresses the motivational and accuracy drawbacks of traditional top-down targets. When managers and employees are consulted during budget-setting, resulting targets are more realistic and staff feel greater ownership over achieving them." } },
    { "id": "enr-t7b-list-improve", "type": "list", "data": { "style": "bullet", "items": [
      { "text": "<b>Participative budgeting:</b> Allow department managers to submit their own spending proposals, improving accuracy and staff buy-in." },
      { "text": "<b>Flexible budgets:</b> Build tolerance ranges (e.g. ±5%) into budgets so minor fluctuations do not trigger unnecessary alarm or costly reviews." },
      { "text": "<b>Rolling budgets:</b> Update forecasts quarterly rather than once a year, so the budget reflects current trading reality rather than stale year-ago assumptions." },
      { "text": "<b>Beyond Budgeting:</b> A management philosophy advocating rolling forecasts and relative performance targets instead of fixed annual budgets — adopted by companies such as Handelsbanken and aspects of Unilever's internal planning." }
    ]}},
    { "id": "enr-t7b-call-brand", "type": "callout", "data": { "style": "key", "title": "Real World: Unilever and Flexible Planning", "text": "Unilever, one of the world's largest consumer goods companies with operations in over 190 countries, has moved towards rolling quarterly forecasts and flexible budget reviews. This allows business units to respond to local economic shifts — such as currency devaluation in emerging markets — without being bound by figures set a year in advance. It is a real-world application of the 'Beyond Budgeting' philosophy that addresses the rigidity drawback directly." } },
    { "id": "enr-t7b-call-student", "type": "callout", "data": { "style": "tip", "title": "Relatable: Revision Planning That Actually Works", "text": "A rigid revision timetable that says 'study 3 hours every day' collapses the moment sports fixtures, family events, or illness occur. A participative approach — designing your own plan around your real commitments with flexibility built in — is more realistic and easier to stick to. Students who own their schedule perform better, just as employees who help set their own budgets are more motivated to hit them." } },
    { id: 'sum-1', type: 'summary', data: { text: 'Budgets can be inflexible, time-consuming, demotivating, and inaccurate if the business environment changes rapidly.' } }
  ],
  recall: {
    enabled: true,
    summaryText: 'Budgets face issues of inflexibility, poor forecasting, time costs, and potential staff demotivation.',
    cues: [
      { id: 'c-1', blockId: 'list-1', prompt: 'How might strict budgets be inflexible?', answer: 'They may prevent managers from exploiting sudden opportunities because they operate under rigid spending limits.' },
      { id: 'c-2', blockId: 'list-1', prompt: 'How can budgeting demotivate staff?', answer: 'If targets are imposed aggressively and are deemed unrealistic, staff may feel failure is inevitable and lose motivation.' },
      { id: 'c-3', blockId: 'list-1', prompt: 'What is the "use it or lose it" effect?', answer: 'Departments unnecessarily spending remaining budget at the end of the year to prevent their budget being reduced next year.' },
      { id: 'c-4', blockId: 'list-1', prompt: 'Why are budgets often inaccurate?', answer: 'They rely on forecasting. Shifts in inflation, consumer demand, or competitor actions can quickly outdate the figures.' }
    ]
  },
  evidence: []
};