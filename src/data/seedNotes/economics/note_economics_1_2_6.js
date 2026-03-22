export const note_economics_1_2_6 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Calculate and interpret income elasticity of demand (YED), distinguish between normal, inferior, and luxury goods based on YED values, and apply YED to business and policy analysis.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'Income Elasticity of Demand — Definition and Formula', level: 2 }, terms: [] },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'YED Formula', text: '<strong>Income Elasticity of Demand (YED)</strong> measures the responsiveness of quantity demanded to a change in consumer income (Y).<br/><br/>YED = % change in quantity demanded ÷ % change in income<br/><br/>The <strong>sign</strong> of YED tells us whether the good is <strong>normal</strong> (positive) or <strong>inferior</strong> (negative).' }, terms: [] },
    { id: 'eq-1', type: 'equation', data: { html: 'YED = <span class="nb-frac"><span class="nb-num">% ΔQd</span><span class="nb-den">% ΔY</span></span>', caption: 'Income elasticity of demand formula (Y = income)' } },
    { id: 'h-2', type: 'heading', data: { text: 'Interpreting YED Values', level: 2 }, terms: [] },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Good types by YED value', headers: ['YED value', 'Good type', 'Interpretation', 'Examples'], rows: [['YED > 1', 'Luxury (income elastic)', 'Demand rises more than proportionally with income', 'Foreign holidays, sports cars, fine dining'], ['0 < YED < 1', 'Normal (income inelastic)', 'Demand rises but less than proportionally', 'Clothing, groceries, public transport'], ['YED = 0', 'Neutral', 'Demand does not change with income', 'Salt, matches'], ['YED < 0', 'Inferior good', 'Demand falls as income rises', 'Value supermarket brands, bus travel, instant noodles']] }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: 'Worked Example', level: 2 }, terms: [] },
    { id: 'call-2', type: 'callout', data: { style: 'worked', title: 'Worked Example: Calculating YED', text: 'Consumer income rises by 10%. Demand for foreign holidays rises from 200 to 260 thousand units (a 30% rise).<br/><br/>YED = +30% ÷ +10% = +3.0<br/><br/>YED = 3.0 > 1 → <strong>luxury good</strong> (income elastic normal good). Demand responds strongly to income changes.' }, terms: [] },
    { id: 'h-4', type: 'heading', data: { text: 'Business and Policy Applications', level: 2 }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Business planning</strong>: firms selling luxury goods (high YED) should expect large swings in demand during recessions or booms.' }, { text: '<strong>Recession risk</strong>: luxury producers (e.g. premium car makers) face sharp demand falls in downturns; producers of inferior goods may see demand rise.' }, { text: '<strong>Trend analysis</strong>: as incomes rise globally, demand for luxury goods and services rises disproportionately — explaining growth of luxury brands in emerging economies.' }, { text: '<strong>Government policy</strong>: support for industries producing inferior goods may be needed during periods of high income and low demand.' }] }, terms: [] },
    { id: 'h-5', type: 'heading', data: { text: 'Engel Curve', level: 2 }, terms: [] },
    { id: 'call-3', type: 'callout', data: { style: 'key', title: 'Engel Curve', text: 'An <strong>Engel curve</strong> plots the relationship between consumer income and quantity demanded of a good.<br/>• Upward-sloping, concave: <strong>normal good</strong><br/>• Upward-sloping, convex (steep): <strong>luxury good</strong><br/>• Downward-sloping: <strong>inferior good</strong>' }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'YED measures demand responsiveness to income changes. Positive YED = normal good; YED > 1 = luxury; negative YED = inferior good. Useful for business forecasting and understanding demand cyclicality.' }, terms: [] },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Always interpret the sign of YED. A negative YED indicates an inferior good, while a positive YED indicates a normal good (and > 1 means it is a luxury good). Explicitly state this in your analysis."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'YED = %ΔQd ÷ %ΔY. Positive = normal, >1 = luxury, negative = inferior.',
    cues: [
      { id: 'cue-1', blockId: 'h-1', prompt: 'Write the formula for Income Elasticity of Demand.', answer: 'YED = % change in quantity demanded ÷ % change in income.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'What type of good has a YED of −0.6?', answer: 'An inferior good — demand falls as income rises.' },
      { id: 'cue-3', blockId: 'h-4', prompt: 'Why should a luxury car manufacturer monitor YED carefully?', answer: 'High positive YED means demand falls sharply in recessions and rises strongly in booms, creating large revenue swings.' },
      { id: 'cue-4', blockId: 'h-5', prompt: 'What does a downward-sloping Engel curve indicate?', answer: 'The good is an inferior good — as income rises, demand falls.' },
    ]
  },
  evidence: [],
  mentions: []
};
