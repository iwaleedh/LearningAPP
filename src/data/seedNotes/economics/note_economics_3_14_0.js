export const note_economics_3_14_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Define and distinguish between total revenue, average revenue, and marginal revenue, and explain how they relate to the demand curve.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Revenue Concepts', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Revenue Measures', headers: ['Concept', 'Formula', 'Description'], rows: [['Total Revenue (TR)', 'TR = P × Q', 'Total income from all sales at a given price'], ['Average Revenue (AR)', 'AR = TR / Q = P', 'Revenue per unit = price. AR curve = demand curve'], ['Marginal Revenue (MR)', 'MR = ΔTR / ΔQ', 'Revenue from selling one additional unit']] } },
    { id: 'h-2', type: 'heading', data: { text: 'AR, MR and the Demand Curve', level: 2 } },
    { id: 'list-1', data: { style: 'bullet', items: [{ text: '<strong>Perfect competition</strong>: horizontal demand (price taker) → AR = MR = P (constant).' }, { text: '<strong>Imperfect competition</strong> (monopoly, oligopoly): downward-sloping demand → to sell more, must lower price → MR falls below AR; MR < P.' }, { text: 'For a straight-line downward demand curve: MR bisects the horizontal axis at half the demand intercept → MR = 0 at midpoint of demand.' }, { text: '<strong>TR is maximised</strong> where MR = 0 (point of unit elasticity on demand).' }] }, type: 'list' },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'MR < AR (price) for any firm with downward-sloping demand because to sell extra unit, firm must reduce price on ALL units. AR curve = firm\'s demand curve. MR gradient is twice that of AR from a common intercept.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'TR = P×Q. AR = P = demand curve. MR = extra revenue from +1 unit. In imperfect competition MR < AR. MR = 0 at revenue maximum. MR < 0 inelastic region.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'TR=P×Q. AR=P (demand curve). MR=ΔTR/ΔQ. In imperfect comp: MR<AR. TR maximised where MR=0.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'Explain why Average Revenue equals the demand curve.', answer: 'Average Revenue = TR/Q = (P×Q)/Q = P — it is simply the price at each quantity. Since the demand curve relates quantity to price, the AR curve is the same as the demand curve.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Why is MR less than AR for a firm facing a downward-sloping demand curve?', answer: 'To sell an extra unit, the firm must lower the price on all units (not just the extra one). The revenue gained from the new unit is offset by the revenue lost on previous units from the price reduction — making MR < AR.' },
    ]
  },
  evidence: [], mentions: []
};
