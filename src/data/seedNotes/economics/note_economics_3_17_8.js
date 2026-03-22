export const note_economics_3_17_8 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the use of tax interventions in labour markets, including income tax, National Insurance, and the effects on labour supply and employment.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Tax Interventions in Labour Markets', level: 2 } },
    { id: 'h-2', type: 'heading', data: { text: 'Income Tax', level: 2 } },
    { id: 'list-it', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Income tax</strong> reduces the net real wage received by workers → reduces incentive to work (substitution effect: work less attractive relative to leisure).' }, { text: 'But: income effect may dominate → workers work more to maintain living standards (ambiguous effect on labour supply).' }, { text: '<strong>Laffer Curve</strong>: beyond a threshold tax rate, higher income tax reduces total tax revenue (workers work less, or go underground economically).' }, { text: '<strong>Income tax reductions</strong>: incentivise work (rightward shift in labour supply), raise earnings and participation.' }] } },
    { id: 'h-2b', type: 'heading', data: { text: 'National Insurance Contributions (NICs)', level: 2 } },
    { id: 'list-nic', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Employer NICs</strong>: raise the cost of labour above the wage paid → shift labour demand left → reduce equilibrium employment.' }, { text: '<strong>Employee NICs</strong>: reduce net take-home pay → reduce labour supply (income effect) → labour market shrinks.' }, { text: 'Cut in employer NICs lowers non-wage costs → demand for labour rises → employment increases.' }, { text: 'UK 2024: Chancellor reduced employee NICs (6% to 8% rate reversal) to stimulate labour supply and support workers.' }] } },
    { id: 'h-2c', type: 'heading', data: { text: 'Tax Credits and Benefits', level: 2 } },
    { id: 'list-tc', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Working Tax Credit / Universal Credit top-up</strong>: supplement income of low-paid workers → incentivise work by reducing the poverty trap (higher income from working than not working).' }, { text: '<strong>Benefit withdrawal rates</strong>: if benefits are withdrawn too sharply as earnings rise → high effective marginal tax rate → poverty trap / unemployment trap → disincentive to work more hours.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: '<strong>Employer NICs are effectively a tax on jobs</strong> — they raise the cost of hiring, shifting labour demand left. This is distinct from employee NICs (tax on worker income). Both affect employment levels but through different mechanisms.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Income tax: ambiguous effect on labour supply (substitution vs income effect); Laffer curve. Employer NICs: tax on jobs → demand shift left → less employment. Working Tax Credit / UC: reduce poverty trap, incentivise labour market participation.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Tax incidence (final burden) falls on whichever side of the market is more inelastic. A labour tax burden falls more on inelastic workers than elastic employers \u2014 use supply and demand slopes to trace who really pays."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Taxation on incomes reduces the supply of labour (disincentive effect), particularly at the margins. Evaluate the 'Laffer curve' concept\u2014that taxing top earners too heavily might result in a brain drain and lower total tax revenue."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Income tax: reduces net wage → substitution effect (work less) vs income effect (work more) — ambiguous. Employer NICs: tax on employment → labour demand falls. Tax credits/UC: reduce poverty trap, raise participation.',
    cues: [
      { id: 'cue-1', blockId: 'list-nic', prompt: 'Why are employer National Insurance Contributions described as a tax on jobs?', answer: 'Employer NICs increase the total cost of employing a worker above the wage actually paid. This wedge between the wage received and the employment cost shifts labour demand to the left — at any given wage, firms want to hire fewer workers. Cutting employer NICs reduces this wedge and increases employment demand.' },
      { id: 'cue-2', blockId: 'list-tc', prompt: 'How can a high benefit withdrawal rate create a poverty trap?', answer: 'If benefits are withdrawn at a high rate as earned income rises, the effective marginal tax rate on additional earnings becomes very high (earning more loses benefits AND pays tax). This creates a poverty trap — the financial gain from working more hours is negligible or even negative, reducing the incentive to increase hours or take better-paid jobs.' },
    ]
  },
  evidence: [], mentions: []
};
