export const note_economics_3_16_4 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain how labour market equilibrium is determined, and analyse how wage and employment levels respond to shifts in demand and supply.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Labour Market Equilibrium', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Competitive Equilibrium', text: 'In a <strong>competitive labour market</strong>, equilibrium is reached where <strong>labour demand = labour supply</strong>.<br/>Equilibrium wage = W*, Equilibrium employment = L*.<br/>At W*, the quantity of labour firms want to hire equals the quantity workers are willing to supply.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Shifts and Adjustments', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Labour Market Shift Analysis', headers: ['Shock', 'Curve', 'Effect on Wage', 'Effect on Employment'], rows: [['Rise in product demand', 'Labour demand shifts right', 'Rises', 'Rises'], ['Automation/technology', 'Labour demand shifts left', 'Falls', 'Falls'], ['Net immigration', 'Labour supply shifts right', 'Falls', 'Rises'], ['Emigration / population ageing', 'Labour supply shifts left', 'Rises', 'Falls'], ['Productivity improvement', 'Labour demand shifts right (higher MRP)', 'Rises', 'Rises or falls (depends on balance)']] } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Wage above equilibrium</strong> → excess supply of labour (unemployment) → downward pressure on wages.' }, { text: '<strong>Wage below equilibrium</strong> → excess demand for labour (labour shortages) → upward pressure on wages.' }, { text: '<strong>Real-world disequilibrium</strong>: wages may be sticky downward (contracts, minimum wages, union agreements) preventing full adjustment.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Draw the labour market diagram: axes are Wage (W) on vertical, Quantity of Labour (L) on horizontal. Demand = downward-sloping (MRP); Supply = upward-sloping. Show W*, L* intersection clearly. Then shift the relevant curve for your specific scenario.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Labour market equilibrium: labour demand = labour supply at wage W*, employment L*. Shifts in demand (MRP changes) or supply (immigration, participation) move W* and L*. Sticky wages can create persistent disequilibrium.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Equilibrium: labour demand = labour supply → W*, L*. Demand shifts: product demand, technology, MRP. Supply shifts: immigration, participation, training. Wages may be sticky preventing full adjustment.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'How is the equilibrium wage determined in a competitive labour market?', answer: 'It is determined by the intersection of the labour demand curve (MRP) and the labour supply curve. At the equilibrium wage W*, the quantity of labour demanded by firms equals the quantity workers are willing to supply — there is no excess demand or excess supply.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'What happens to wages and employment after net immigration into a country?', answer: 'Increased immigration shifts labour supply to the right. With a fixed (or less elastic) labour demand, this creates an excess supply at the old wage, driving wages down — while overall employment rises. This is the standard competitive labour market analysis, though wage effects in practice depend on skill composition of immigrants.' },
    ]
  },
  evidence: [], mentions: []
};
