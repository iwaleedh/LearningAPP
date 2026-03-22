export const note_economics_2_12_8 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Distinguish between demand-side and supply-side policy, and identify the two main types of demand-side policy: fiscal and monetary.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Demand-Side Policy Types', level: 2 } },
    { id: 'callout-def', type: 'callout', data: { style: 'key', title: 'Definition', text: '<strong>Demand-side policies</strong> aim to manage the level of Aggregate Demand (AD) in the economy to achieve macroeconomic objectives (growth, unemployment, inflation).<br/>Two types: <strong>Fiscal policy</strong> (government spending and taxation) and <strong>Monetary policy</strong> (interest rates and money supply).' } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Fiscal vs Monetary Policy', headers: ['Feature', 'Fiscal Policy', 'Monetary Policy'], rows: [['Controlled by', 'Government / Treasury', 'Central bank (Bank of England)'], ['Main tools', 'Government spending (G), taxation (T)', 'Interest rates, QE, money supply'], ['Effect on AD', 'Direct via G or disposable income (T)', 'Via borrowing cost → C, I'], ['Speed of effect', 'Slower (legislation, contracts)', 'Faster (rate changes feed through quickly)'], ['Independence', 'Politically determined', 'Independent MPC sets rates']] } },
    { id: 'h-2', type: 'heading', data: { text: 'Expansionary vs Contractionary Stance', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Expansionary</strong>: ↑G or ↓T (fiscal); ↓interest rates (monetary) → stimulates AD → used in recession.' }, { text: '<strong>Contractionary</strong>: ↓G or ↑T (fiscal); ↑interest rates (monetary) → dampens AD → used to control inflation / positive output gap.' }] } },
    { id: 'sum-1', type: 'summary', data: { text: 'Demand-side policy: fiscal (G and T) or monetary (interest rates). Expansionary when AD too low; contractionary when AD too high. Fiscal is political; monetary is independent (Bank of England MPC).' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Demand-side policy includes both fiscal (government spending, taxation) and monetary (interest rates, quantitative easing) tools. Distinguish between expansionary policy (during recession, negative output gap) and contractionary policy (during boom, positive output gap). Examiners expect you to link policy choice to the economic cycle and inflation expectations."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Demand-side policy: fiscal (G/T by government) or monetary (rates by Bank of England). Expansionary in recession, contractionary when inflationary.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'Who controls fiscal policy and who controls monetary policy in the UK?', answer: 'Fiscal policy is controlled by the government (HM Treasury) — decisions on spending and taxation. Monetary policy is controlled by the Monetary Policy Committee (MPC) of the Bank of England — independent of government to prevent political short-termism causing inflation.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'What is an expansionary fiscal policy stance?', answer: 'Increasing government spending (G) and/or reducing taxation (T) — injecting more into AD. Used when the economy has a negative output gap (recession/spare capacity) to boost AD, employment, and growth.' },
    ]
  },
  evidence: [], mentions: []
};
