export const note_economics_1_2_7 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Calculate and interpret cross elasticity of demand (XED) and use it to classify and analyse relationships between goods as substitutes, complements, or unrelated.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'Cross Elasticity of Demand — Definition and Formula', level: 2 }, terms: [] },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'XED Formula', text: '<strong>Cross Elasticity of Demand (XED)</strong> measures the responsiveness of demand for Good A to a change in the price of Good B.<br/><br/>The <strong>sign</strong> of XED reveals the relationship between the goods: positive = substitutes, negative = complements, zero = unrelated.' }, terms: [] },
    { id: 'eq-1', type: 'equation', data: { html: 'XED<sub>A,B</sub> = <span class="nb-frac"><span class="nb-num">% ΔQd of A</span><span class="nb-den">% ΔP of B</span></span>', caption: 'Cross elasticity of demand for Good A with respect to price of Good B' } },
    { id: 'h-2', type: 'heading', data: { text: 'Interpreting XED', level: 2 }, terms: [] },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'XED interpretation by sign and magnitude', headers: ['XED value', 'Relationship', 'Explanation', 'Example'], rows: [['XED > 0 (positive)', '<strong>Substitutes</strong>', 'Rise in price of B increases demand for A (consumers switch)', 'Pepsi & Coca-Cola, butter & margarine'], ['XED < 0 (negative)', '<strong>Complements</strong>', 'Rise in price of B reduces demand for A (both consumed together)', 'Cars & petrol, printers & ink cartridges'], ['XED = 0', '<strong>Unrelated goods</strong>', 'Price of B has no effect on demand for A', 'Pencils & hamburgers'], ['|XED| high', 'Close substitutes/complements', 'Strong relationship between the goods', 'Pepsi & Pepsi Max (XED very high)'], ['|XED| low', 'Weak substitutes/complements', 'Loose relationship', 'Butter & olive oil']] }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: 'Worked Example', level: 2 }, terms: [] },
    { id: 'call-2', type: 'callout', data: { style: 'worked', title: 'Worked Example: Calculating XED', text: 'The price of Pepsi rises by 20%.<br/>Demand for Coca-Cola rises from 500 to 560 cans/day (a 12% rise).<br/><br/>XED = +12% ÷ +20% = +0.6<br/><br/>XED = +0.6 → <strong>substitutes</strong>. As Pepsi becomes more expensive, consumers switch to Coca-Cola. The moderate value suggests they are fairly close but not perfect substitutes.' }, terms: [] },
    { id: 'h-4', type: 'heading', data: { text: 'Business Applications of XED', level: 2 }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Market definition</strong>: regulators (e.g. Competition and Markets Authority) use XED to define whether goods are in the same market. High positive XED = same market → potential competition concern.' }, { text: '<strong>Pricing strategy</strong>: firms producing complementary goods (e.g. printers and ink) can price printers cheaply and profit from ink cartridges.' }, { text: '<strong>Merger analysis</strong>: if two firms produce goods with high XED (close substitutes), a merger may reduce competition.' }, { text: '<strong>Demand forecasting</strong>: knowing XED helps firms predict how a rival\'s price change will affect their own sales.' }] }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'XED measures how demand for one good responds to another good\'s price change. Positive XED = substitutes; negative XED = complements; zero = unrelated. The magnitude indicates the closeness of the relationship.' }, terms: [] },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'XED: positive = substitutes, negative = complements. Formula: %ΔQd(A) ÷ %ΔP(B).',
    cues: [
      { id: 'cue-1', blockId: 'h-1', prompt: 'Write the formula for Cross Elasticity of Demand.', answer: 'XED = % change in quantity demanded of A ÷ % change in price of B.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'If XED between good A and good B is −2.5, what type of goods are they?', answer: 'Complementary goods — demand for A falls when the price of B rises.' },
      { id: 'cue-3', blockId: 'h-3', prompt: 'Calculate XED if price of Pepsi rises 20% and demand for Coke rises 12%.', answer: 'XED = 12/20 = +0.6 → substitutes.' },
      { id: 'cue-4', blockId: 'h-4', prompt: 'How do competition regulators use XED?', answer: 'High positive XED between two firms\' products suggests they are in the same market and compete directly — relevant for merger investigations.' },
    ]
  },
  evidence: [],
  mentions: []
};
