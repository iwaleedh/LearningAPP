export const note_economics_2_12_9 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the fiscal policy instruments available to government — government spending and taxation — and analyse how they affect AD.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Fiscal Policy Instruments', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Government spending (G)</strong>: direct injection into AD; subject to multiplier — expansionary when ↑G, contractionary when ↓G.' }, { text: '<strong>Taxation (T)</strong>: withdraws spending power from households/firms. ↓T → ↑disposable income → ↑C → ↑AD (expansionary). ↑T → contractionary.' }, { text: '<strong>Budget balance</strong>: budget deficit (G > T) = fiscal stimulus; budget surplus (T > G) = fiscal drag.' }] } },
    { id: 'h-2', type: 'heading', data: { text: 'Types of Taxation', level: 2 } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Direct taxes</strong>: paid directly to HMRC (income tax, corporation tax, capital gains tax). Progressive income tax: higher earners pay higher marginal rates.' }, { text: '<strong>Indirect taxes</strong>: paid via purchases (VAT, excise duty on tobacco/fuel). Regressive effect — lower-income households spend higher % of income on taxed goods.' }, { text: '<strong>Automatic stabilisers</strong>: income taxes rise automatically in boom (more tax revenue → reduces AD automatically); fall in recession.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Discretionary vs Automatic Fiscal Policy', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: '', headers: ['Type', 'Definition', 'Example'], rows: [['Discretionary', 'Deliberate changes in G or T', '2009 fiscal stimulus: ↑G, temporary VAT cut to 15%'], ['Automatic stabilisers', 'Built-in changes that respond to the cycle', 'Benefits rise / tax falls in recession without new legislation']] } },
    { id: 'sum-1', type: 'summary', data: { text: 'Fiscal instruments: government spending (G) and taxation (T). Direct vs indirect taxes. Automatic stabilisers cushion cycle. Discretionary policy requires deliberate action.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Confusing structural deficit (spending exceeds revenue at full employment) with cyclical deficit (deficit due to temporary downturn). A government with large structural deficit faces sustained high borrowing and debt accumulation, even during expansions. Evaluating fiscal sustainability requires separating these components\u2014failure to do so misleads policy analysis."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Fiscal instruments: G and T. Direct (income tax) and indirect taxes (VAT). Automatic stabilisers (benefits, tax) cushion cycle. Discretionary = deliberate changes.',
    cues: [
      { id: 'cue-1', blockId: 'list-2', prompt: 'Explain why indirect taxes are considered regressive.', answer: 'Indirect taxes (e.g. VAT, excise duty) take a higher proportion of income from lower-income households, who spend more of their income on consumption than wealthy households. Wealthy households save more, so a smaller percentage of their income is subject to indirect taxes.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'How do automatic fiscal stabilisers work in a recession?', answer: 'In a recession, incomes fall → income tax revenue falls automatically (less tax on lower earnings). Simultaneously, welfare spending rises automatically as more people claim benefits. Both effects cushion the fall in AD without any new legislation — stabilising the economy.' },
    ]
  },
  evidence: [], mentions: []
};
