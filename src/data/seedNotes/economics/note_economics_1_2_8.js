export const note_economics_1_2_8 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand the relationship between price elasticity of demand and total revenue (TR), and explain how TR changes when price changes for elastic, inelastic, and unit-elastic demand.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'Total Revenue and Its Relationship with PED', level: 2 }, terms: [] },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Total Revenue Formula', text: '<strong>Total Revenue (TR) = Price (P) × Quantity Demanded (Q)</strong><br/><br/>When price changes, the effect on TR depends on whether the <strong>price effect</strong> (higher price per unit) or the <strong>quantity effect</strong> (fewer units sold) dominates — and this is determined by PED.' }, terms: [] },
    { id: 'h-2', type: 'heading', data: { text: 'The PED–TR Relationship', level: 2 }, terms: [] },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Effect on Total Revenue when price rises', headers: ['PED', 'Demand type', 'Effect of price rise on TR', 'Explanation'], rows: [['|PED| > 1', 'Elastic', 'TR <strong>falls</strong>', '% fall in Qd > % rise in P → less revenue overall'], ['|PED| = 1', 'Unit elastic', 'TR <strong>unchanged</strong>', '% fall in Qd = % rise in P → revenue stays constant'], ['|PED| < 1', 'Inelastic', 'TR <strong>rises</strong>', '% fall in Qd < % rise in P → more revenue overall']] }, terms: [] },
    { id: 'call-2', type: 'callout', data: { style: 'key', title: 'Simple Rule', text: 'When demand is <strong>elastic</strong>: price and TR move in <strong>opposite</strong> directions.<br/>When demand is <strong>inelastic</strong>: price and TR move in the <strong>same</strong> direction.' }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: 'Worked Example', level: 2 }, terms: [] },
    { id: 'call-3', type: 'callout', data: { style: 'worked', title: 'Worked Example: Elastic Demand', text: 'A cinema ticket costs £10. At this price, 500 tickets are sold per week.<br/>TR = £10 × 500 = <strong>£5,000</strong><br/><br/>Price rises to £12 (+20%). Demand falls from 500 to 350 (−30%). PED = −30/+20 = −1.5 → elastic.<br/><br/>New TR = £12 × 350 = <strong>£4,200</strong><br/><br/>TR falls from £5,000 to £4,200 → down <strong>£800</strong>. Elastic demand means price rise reduces revenue.' }, terms: [] },
    { id: 'h-4', type: 'heading', data: { text: 'TR Along a Straight-Line Demand Curve', level: 2 }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: 'At the top of the demand curve (high P, low Q): demand is <strong>elastic</strong> → TR is low and rising as price falls.' }, { text: 'At the midpoint: demand is <strong>unit elastic</strong> → TR is at its <strong>maximum</strong>.' }, { text: 'At the bottom (low P, high Q): demand is <strong>inelastic</strong> → TR falls as price falls further.' }, { text: 'This creates an <strong>inverted-U shaped TR curve</strong> when plotted against quantity.' }] }, terms: [] },
    { id: 'call-4', type: 'callout', data: { style: 'tip', title: 'Exam Application', text: 'A <strong>profit-maximising firm</strong> never sells in the inelastic region of its demand curve (MR < 0 there). Revenue is maximised at unit elasticity (MR = 0). Always explain <em>why</em> TR changes using PED logic, not just stating it goes up or down.' }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'TR = P × Q. When elastic, a price rise reduces TR (quantity effect dominates). When inelastic, a price rise raises TR (price effect dominates). TR is maximised at unit elasticity.' }, terms: [] },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'TR = P × Q. Elastic demand: price rise → TR falls. Inelastic: price rise → TR rises. Unit elastic: TR unchanged.',
    cues: [
      { id: 'cue-1', blockId: 'h-1', prompt: 'What is the formula for Total Revenue?', answer: 'TR = Price × Quantity Demanded.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'If demand is elastic and a firm lowers its price, what happens to total revenue?', answer: 'TR rises — the percentage increase in quantity demanded exceeds the percentage fall in price.' },
      { id: 'cue-3', blockId: 'h-4', prompt: 'At what point on a straight-line demand curve is total revenue maximised?', answer: 'At the midpoint where price elasticity of demand equals 1 (unit elastic).' },
      { id: 'cue-4', blockId: 'call-2', prompt: 'State the simple rule linking PED and TR for a price increase.', answer: 'Elastic: price and TR move opposite (TR falls). Inelastic: price and TR move same direction (TR rises).' },
    ]
  },
  evidence: [],
  mentions: []
};
