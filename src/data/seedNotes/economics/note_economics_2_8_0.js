export const note_economics_2_8_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Identify and explain the four components of Aggregate Demand (AD), using the national income accounting identity C + I + G + (X – M).' } },
    { id: 'h-1', type: 'heading', data: { text: 'Aggregate Demand Defined', level: 2 } },
    { id: 'callout-def', type: 'callout', data: { style: 'key', title: 'Definition', text: '<strong>Aggregate Demand (AD)</strong> is the total spending on goods and services in an economy at a given price level over a given time period.<br/>AD = C + I + G + (X − M)' } },
    { id: 'h-2', type: 'heading', data: { text: 'The Four Components', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'AD Components Summary', headers: ['Component', 'Letter', 'Meaning', 'Typical % of UK AD'], rows: [['Consumption', 'C', 'Household spending on goods and services', '~60–65%'], ['Investment', 'I', 'Firm spending on capital goods; household investment', '~15–20%'], ['Government expenditure', 'G', 'State spending on public services, welfare, defence', '~20%'], ['Net exports', 'X – M', 'Exports minus imports of goods and services', 'Variable']] } },
    { id: 'h-3', type: 'heading', data: { text: 'Key Points on Each Component', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Consumption (C)</strong>: largest component; influenced by income, interest rates, confidence, wealth, credit availability.' }, { text: '<strong>Investment (I)</strong>: most volatile component; includes business capital (plant, machinery) and residential construction.' }, { text: '<strong>Government spending (G)</strong>: determined by fiscal policy decisions; includes current expenditure and capital investment.' }, { text: '<strong>Net exports (X – M)</strong>: positive when exports > imports (trade surplus); negative when imports > exports (trade deficit).' }, { text: 'If (X – M) is negative, it reduces AD — the UK typically runs a current account deficit, so this component is negative.' }] } },
    { id: 'callout-we1', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'If C = £1,400bn, I = £300bn, G = £400bn, X = £600bn, M = £700bn:<br/>AD = 1400 + 300 + 400 + (600 – 700) = 1400 + 300 + 400 – 100 = £2,000bn' } },
    { id: 'sum-1', type: 'summary', data: { text: 'AD = C + I + G + (X − M). Consumption is the largest component. Investment is the most volatile. Net exports can be negative if imports exceed exports.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'AD = C + I + G + (X-M). C=largest (~65%), I=most volatile, G=fiscal policy, net exports=X-M (often negative for UK).',
    cues: [
      { id: 'cue-1', blockId: 'callout-def', prompt: 'What is the formula for Aggregate Demand?', answer: 'AD = C + I + G + (X − M), where C=consumption, I=investment, G=government spending, X=exports, M=imports.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Which component of AD is the largest and which is the most volatile?', answer: 'Consumption (C) is the largest (~60–65% in the UK). Investment (I) is the most volatile because business confidence and borrowing conditions fluctuate significantly.' },
    ]
  },
  evidence: [], mentions: []
};
