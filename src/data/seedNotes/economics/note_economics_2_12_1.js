export const note_economics_2_12_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the current account and budget balance as macroeconomic objectives, and analyse their significance for economic stability.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Current Account Objective', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: 'A <strong>current account deficit</strong> means imports > exports — the economy is net borrowing from overseas (requires capital inflows to finance).' }, { text: 'A sustainable current account deficit is tolerable if financed by productive FDI.' }, { text: 'An unsustainable deficit risks: currency crisis (if capital flows reverse), rising external debt, loss of confidence.' }, { text: 'UK typically runs a current account deficit of ~2–5% of GDP — a persistent structural issue.' }] } },
    { id: 'h-2', type: 'heading', data: { text: 'Budget Balance Objective', level: 2 } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Budget deficit</strong>: G > T → government borrows (issues gilts). Adds to national debt over time.' }, { text: '<strong>Budget surplus</strong>: T > G → government repays debt.' }, { text: '<strong>Cyclically adjusted balance</strong>: focuses on the structural deficit (not the cyclical component that rises in recession).' }, { text: 'High national debt → large interest payments → crowd out other spending.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Distinguish between the budget <strong>deficit</strong> (annual flow) and national <strong>debt</strong> (stock accumulated over time). Deficits add to debt even in good years if the structural deficit persists.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Current account objective: avoid unsustainable deficits. Budget objective: control deficit to manage national debt. Both are long-run sustainability goals rather than strict targets.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Current account deficit: imports > exports → borrowing. Budget deficit: G > T → adds to national debt. Sustainability is the key criterion for both.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'When is a current account deficit sustainable?', answer: 'When it is financed by productive FDI (which generates future export income and growth), remains small relative to GDP, and does not require excessive short-term capital inflows that could reverse suddenly.' },
      { id: 'cue-2', blockId: 'callout-tip', prompt: 'Distinguish between the budget deficit and national debt.', answer: 'The budget deficit is the annual flow: the excess of government spending over tax revenue in one year. The national debt is the stock: the total accumulated borrowing from all past deficits. Successive deficits add to the debt, which generates ongoing interest obligations.' },
    ]
  },
  evidence: [], mentions: []
};
