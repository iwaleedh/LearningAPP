export const note_economics_2_8_4 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Distinguish between gross and net investment, and explain the role of investment in determining the capital stock and productive capacity of an economy.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Gross vs Net Investment', level: 2 } },
    { id: 'callout-def', type: 'callout', data: { style: 'key', title: 'Key Distinction', text: '<strong>Gross investment</strong>: total spending on capital goods (new capital + replacement capital).<br/><strong>Depreciation (capital consumption)</strong>: loss in value of the capital stock through wear and tear or obsolescence.<br/><strong>Net investment</strong> = Gross investment − Depreciation<br/>Net investment > 0 → capital stock grows → productive capacity expands.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Types of Investment', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Fixed capital investment</strong>: spending on plant, machinery, buildings, technology.' }, { text: '<strong>Working capital investment</strong>: changes in inventories (stocks of goods held).' }, { text: '<strong>Residential investment</strong>: construction of new homes (also a form of investment adding to the capital stock).' }, { text: '<strong>FDI (Foreign Direct Investment)</strong>: investment by foreign firms in domestic productive capacity (e.g. factories) — important for developing economies.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Why Investment Matters', level: 2 } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: 'Investment is both a component of AD (short-run demand effect) and a driver of <strong>LRAS</strong> (long-run supply effect — more capital → higher productive capacity).' }, { text: 'Positive net investment expands the capital stock → enables higher potential GDP.' }, { text: 'Investment is the <strong>most volatile AD component</strong> — highly sensitive to business confidence, interest rates, and expectations.' }] } },
    { id: 'sum-1', type: 'summary', data: { text: 'Gross investment − depreciation = net investment. Positive net investment grows the capital stock and productive capacity. Most volatile AD component.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Gross investment - depreciation = net investment. Positive net investment → capital stock grows. Investment is most volatile AD component.',
    cues: [
      { id: 'cue-1', blockId: 'callout-def', prompt: 'What is the formula for net investment?', answer: 'Net investment = Gross investment − Depreciation. Positive net investment means the capital stock is growing; negative means it is shrinking (capital consumption exceeds new investment).' },
      { id: 'cue-2', blockId: 'list-2', prompt: 'Why is investment important for both short-run AD and long-run AS?', answer: 'Investment adds to AD in the short run (increased spending on capital goods). In the long run, it expands the capital stock, increasing productive capacity and shifting LRAS to the right.' },
    ]
  },
  evidence: [], mentions: []
};
