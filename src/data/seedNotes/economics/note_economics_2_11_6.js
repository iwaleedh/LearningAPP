export const note_economics_2_11_6 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Evaluate the economic and social benefits of sustained economic growth for individuals, firms, and governments.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Benefits of Economic Growth', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Higher living standards</strong>: real GDP per capita rises → households can afford more goods and services → higher material welfare.' }, { text: '<strong>Higher employment</strong>: rising output requires more workers → unemployment falls; vacancies increase.' }, { text: '<strong>Improved government finances</strong>: tax revenues rise (income tax, VAT, corporation tax); welfare spending falls → reduces budget deficit / enables debt reduction.' }, { text: '<strong>Business investment</strong>: economic confidence rises → firms invest more → further productivity gains (virtuous cycle).' }, { text: '<strong>Poverty reduction</strong>: growth "lifts all boats" — though distribution matters; sustained growth has historically reduced absolute poverty globally.' }, { text: '<strong>Funding public services</strong>: higher government revenues allow investment in health, education, infrastructure.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Evaluation Point', text: 'Benefits depend on how growth is distributed. Growth that increases inequality may not improve average living standards for the majority. Examine <strong>real GDP per capita</strong> (not just total GDP) and the Gini coefficient alongside growth data.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Growth benefits: higher living standards, employment, government revenues, business investment, poverty reduction. But benefits depend on distribution — growth ≠ automatic improvement for all.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Growth benefits: ↑living standards, ↑jobs, ↑tax revenues, ↓deficit, investment confidence. Distribution matters — growth must be inclusive.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'Explain two fiscal benefits of economic growth for the government.', answer: '1) Tax revenues rise automatically (income tax, VAT, corporation tax) as incomes and spending increase. 2) Welfare spending falls as unemployment decreases — both effects reduce the budget deficit and may allow debt reduction.' },
      { id: 'cue-2', blockId: 'callout-tip', prompt: 'Why should economic growth be evaluated alongside its distribution?', answer: 'If growth is concentrated among the wealthy, average living standards for the majority may not improve significantly. Measures like real GDP per capita and the Gini coefficient are needed to assess whether growth is broadly shared and actually raising welfare.' },
    ]
  },
  evidence: [], mentions: []
};
