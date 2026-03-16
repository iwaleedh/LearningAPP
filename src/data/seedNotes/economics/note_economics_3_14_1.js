export const note_economics_3_14_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the relationship between price elasticity of demand (PED) and revenue, and apply this to firm pricing decisions.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Elasticity and Revenue', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'PED and Revenue Relationship', headers: ['Demand Elasticity', 'Price Increase Effect', 'Price Decrease Effect'], rows: [['Elastic (PED > 1)', 'TR falls (↓ more Q sold)', 'TR rises (↑ quantity gain > price loss)'], ['Inelastic (PED < 1)', 'TR rises (volume falls proportionally less)', 'TR falls (price loss > volume gain)'], ['Unit elastic (PED = 1)', 'TR unchanged', 'TR unchanged']] } },
    { id: 'h-2', type: 'heading', data: { text: 'Revenue Max and the Midpoint', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: 'TR is <strong>maximised</strong> at the midpoint of a straight-line demand curve: PED = 1 → MR = 0.' }, { text: 'Above midpoint: elastic demand (PED > 1) → MR > 0 → lowering price increases TR.' }, { text: 'Below midpoint: inelastic demand (PED < 1) → MR < 0 → lowering price reduces TR.' }, { text: '<strong>Profit-maximising</strong> output is in the <strong>elastic region</strong> of demand (where MR > 0) — no profit-maximiser ever operates in the inelastic range.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'A key exam application: a monopolist raising price along the inelastic portion would increase TR and (with fixed costs) increase profit — so monopolists have incentive to restrict output to the elastic portion of demand.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Elastic demand: ↓price → ↑TR. Inelastic: ↑price → ↑TR. TR maximised at unit elasticity (PED=1, MR=0). Profit max always in elastic region.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Elastic: price falls → TR rises. Inelastic: price rises → TR rises. TR max at PED=1. Profit max firms operate in elastic region (MR>0).',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'What happens to total revenue if a firm with elastic demand lowers its price?', answer: 'TR rises — the proportional increase in quantity sold is greater than the proportional fall in price, so total spending on the good increases.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Why will a profit-maximising firm never produce in the inelastic region of its demand curve?', answer: 'In the inelastic region, MR < 0 — raising price increases TR. A profit-maximising firm (MR = MC) requires MR ≥ 0, so MC would need to be negative (impossible). The firm can always raise profit by reducing output until it reaches the elastic region.' },
    ]
  },
  evidence: [], mentions: []
};
