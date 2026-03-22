export const note_economics_2_12_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain income equality as a macroeconomic objective, analysing how it is measured and why reducing inequality may be a policy goal.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Income Equality Objective', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Income inequality</strong>: unequal distribution of earnings across households — measured by the <strong>Gini coefficient</strong> (0 = perfect equality, 1 = perfect inequality).' }, { text: '<strong>Lorenz curve</strong>: plots cumulative share of income against cumulative share of population; wider deviation from 45° line → higher inequality.' }, { text: 'UK Gini ~0.35; more unequal than most Western Europe (Germany ~0.29); less unequal than USA ~0.41.' }] } },
    { id: 'h-2', type: 'heading', data: { text: 'Why Equality is an Objective', level: 2 } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Social cohesion</strong>: high inequality is associated with crime, poor health outcomes, lower trust (Wilkinson & Pickett, "The Spirit Level").' }, { text: '<strong>Demand</strong>: more equal distribution raises consumption since low-income households have higher MPC.' }, { text: '<strong>Meritocracy</strong>: too much inequality reduces social mobility and equal opportunity.' }, { text: '<strong>Human capital</strong>: poverty limits access to education and healthcare — reduces growth potential.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Tools to Reduce Inequality', level: 2 } },
    { id: 'list-3', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Progressive taxation</strong>: higher-income earners pay higher marginal rates → redistributes income.' }, { text: '<strong>Benefits / transfers</strong>: welfare, working tax credits, child benefits → floor on low incomes.' }, { text: '<strong>Minimum wage</strong>: raises floor for workers.' }, { text: '<strong>Investment in education</strong>: narrows skill premium.' }] } },
    { id: 'callout-warning', type: 'callout', data: { style: 'warning', title: 'Trade-Off', text: 'Some redistribution reduces work incentives and entrepreneurship. Extreme equality may reduce economic dynamism. The optimal degree of inequality is debated — some inequality creates incentives for effort and innovation.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Income equality objective: measured by Gini coefficient. Lower inequality improves social cohesion, demand, and human capital. Tools: progressive tax, benefits, minimum wage. Trade-off: reduces work incentives if excessive.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Use the Gini coefficient (0 = perfect equality, 1 = perfect inequality) to measure inequality objectively, but acknowledge its limitations: it ignores intergenerational mobility, regional disparities, and relative deprivation. In exam answers, mention both quantitative measures (Gini, income ratios) and qualitative aspects (social mobility, poverty traps)."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Income equality: Gini coefficient measures. Lower inequality → social cohesion, ↑demand, ↑human capital. Tools: progressive tax, transfers, NMW, education.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'What does the Gini coefficient measure and what do values near 0 and 1 represent?', answer: 'The Gini coefficient measures income inequality from 0 (perfect equality — all households earn the same) to 1 (perfect inequality — one household earns all income). In practice, UK ≈ 0.35, with higher values indicating greater inequality.' },
      { id: 'cue-2', blockId: 'list-2', prompt: 'Give two economic (not social) reasons why the government targets lower income inequality.', answer: '1) Redistribution towards lower-income households (high MPC) raises consumption and AD. 2) Reducing poverty improves access to education and health (human capital), raising long-run productivity and LRAS.' },
    ]
  },
  evidence: [], mentions: []
};
