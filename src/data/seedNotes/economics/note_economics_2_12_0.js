export const note_economics_2_12_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Identify the main macroeconomic objectives of government — growth, low inflation and low unemployment — and explain why they are targeted.' } },
    { id: 'h-1', type: 'heading', data: { text: 'The Main Macroeconomic Objectives', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Core Macroeconomic Objectives', headers: ['Objective', 'Target (UK)', 'Why Important'], rows: [['Economic growth', '~2–2.5% real GDP per year', 'Raises living standards, employment, tax revenues'], ['Low inflation', 'CPI ~2% (Bank of England target)', 'Preserves purchasing power, certainty for business planning'], ['Low unemployment', 'Near NAIRU (~4–5%)', 'Reduces poverty, maximises output potential'], ['Current account balance', 'Sustainable without crisis', 'Prevents excessive borrowing/debt'], ['Budget balance', 'Sustainable deficit/surplus', 'Ensures long-run fiscal sustainability']] } },
    { id: 'h-2', type: 'heading', data: { text: 'Why These Objectives?', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Growth</strong>: more output means higher average incomes; enables spending on public services and poverty reduction.' }, { text: '<strong>Low inflation</strong>: protects the value of money; reduces uncertainty for savers and investors; prevents redistributive effects (debtors gain over creditors in high inflation).' }, { text: '<strong>Low unemployment</strong>: waste of resources; social and psychological costs; creates fiscal burden through welfare payments.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Objectives often conflict — e.g. pursuing growth may increase inflation. Trade-offs between objectives are a major evaluation theme. Always ask: achieving one objective may make another harder.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Main objectives: growth (~2–2.5%), low inflation (~2% CPI), low unemployment (~NAIRU). These may conflict with each other and with the current account or budget balance.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Main objectives: growth ~2%, inflation ~2% CPI, low unemployment at NAIRU, sustainable current account and budget balance.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'State the UK Bank of England inflation target and explain why a low positive rate is targeted rather than zero.', answer: 'The Bank of England targets 2% CPI inflation. A small positive rate maintains room to cut interest rates when needed (avoids zero lower bound trap) and reduces risk of deflation, which causes consumers to delay spending and can trigger recession.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Why is unemployment costly even when individuals receive welfare payments?', answer: 'Beyond fiscal costs (benefits, lost tax revenue), unemployment wastes productive potential, causes skills depreciation (hysteresis), and has social and psychological costs — higher crime, mental health issues, community breakdown. These are external costs society bears.' },
    ]
  },
  evidence: [], mentions: []
};
