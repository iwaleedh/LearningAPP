export const note_economics_1_2_5 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Calculate and interpret price elasticity of demand (PED), understand what makes demand elastic or inelastic, and apply PED to real-world pricing and policy decisions.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'Price Elasticity of Demand — Definition and Formula', level: 2 }, terms: [] },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'PED Formula', text: '<strong>Price Elasticity of Demand (PED)</strong> measures the responsiveness of quantity demanded to a change in price.<br/><br/>PED = % change in quantity demanded ÷ % change in price<br/><br/>PED values are typically <strong>negative</strong> (inverse price–quantity relationship). Convention often uses the absolute value.' }, terms: [] },
    { id: 'eq-1', type: 'equation', data: { html: 'PED = <span class="nb-frac"><span class="nb-num">% ΔQd</span><span class="nb-den">% ΔP</span></span>', caption: 'Price elasticity of demand formula' } },
    { id: 'h-2', type: 'heading', data: { text: 'Interpreting PED Values', level: 2 }, terms: [] },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'PED value interpretation', headers: ['PED value (absolute)', 'Interpretation', 'Description'], rows: [['PED = 0', 'Perfectly inelastic', 'Quantity demanded does not respond at all to price changes (vertical demand curve)'], ['0 < PED < 1', 'Inelastic', 'Quantity demanded is relatively unresponsive to price changes'], ['PED = 1', 'Unit elastic', 'Percentage change in Qd equals percentage change in price; TR unchanged'], ['PED > 1', 'Elastic', 'Quantity demanded is highly responsive to price changes'], ['PED = ∞', 'Perfectly elastic', 'Any price increase causes demand to fall to zero (horizontal demand curve)']] }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: 'Determinants of PED', level: 2 }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Number and closeness of substitutes</strong>: more substitutes → more elastic. Petrol has few close substitutes → inelastic; Coca-Cola has many substitutes → elastic.' }, { text: '<strong>Necessity vs luxury</strong>: necessities (insulin, water) are inelastic; luxuries (designer clothes) are elastic.' }, { text: '<strong>Proportion of income spent</strong>: goods taking a large share of income (e.g. rent) tend to be more elastic.' }, { text: '<strong>Time period</strong>: demand becomes more elastic over time as consumers find substitutes. Short-run: inelastic; long-run: more elastic.' }, { text: '<strong>Habit and addiction</strong>: addictive goods (cigarettes) are highly inelastic.' }, { text: '<strong>Breadth of market definition</strong>: broadly defined goods (food) are inelastic; narrowly defined (Heinz baked beans) are elastic.' }] }, terms: [] },
    { id: 'h-4', type: 'heading', data: { text: 'Worked Example', level: 2 }, terms: [] },
    { id: 'call-2', type: 'callout', data: { style: 'worked', title: 'Worked Example: Calculating PED', text: 'The price of coffee rises from £2.00 to £2.50 (a 25% rise).<br/>Quantity demanded falls from 200 to 160 cups/day (a 20% fall).<br/><br/>PED = −20% ÷ +25% = −0.8<br/><br/>|PED| = 0.8 → <strong>inelastic</strong> (0 < 0.8 < 1).<br/>Interpretation: a 1% rise in price leads to only a 0.8% fall in quantity demanded.' }, terms: [] },
    { id: 'call-3', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Point PED on a Demand Curve', text: 'At the <strong>top</strong> of a straight-line demand curve, PED is elastic (|PED| > 1).<br/>At the <strong>midpoint</strong>, PED = 1 (unit elastic).<br/>At the <strong>bottom</strong>, PED is inelastic (|PED| < 1).<br/>This is because % change in price varies as you move along the curve.' }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'PED measures how responsive quantity demanded is to price changes. Key determinants: substitutes, necessity/luxury, time period, income proportion. Inelastic: |PED| < 1; elastic: |PED| > 1.' }, terms: [] },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'PED = %ΔQd ÷ %ΔP. Inelastic < 1, elastic > 1. Key factors: substitutes, necessity, time.',
    cues: [
      { id: 'cue-1', blockId: 'h-1', prompt: 'Write the formula for Price Elasticity of Demand.', answer: 'PED = % change in quantity demanded ÷ % change in price.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'What does a PED of −0.3 mean?', answer: 'Demand is inelastic — a 1% rise in price leads to only a 0.3% fall in quantity demanded.' },
      { id: 'cue-3', blockId: 'h-3', prompt: 'Name four factors that determine the price elasticity of demand.', answer: 'Number of substitutes, necessity vs luxury, proportion of income, time period.' },
      { id: 'cue-4', blockId: 'h-4', prompt: 'If PED = −0.8 and a firm raises price by 10%, what happens to quantity demanded?', answer: 'Quantity demanded falls by 8% (0.8 × 10%).' },
    ]
  },
  evidence: [],
  mentions: []
};
