export const note_economics_2_12_3 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Analyse the conflicts between macroeconomic policy objectives and evaluate the trade-offs that governments face when setting policy.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Conflicts Between Objectives', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Policy Objective Conflicts', headers: ['Objective Pair', 'Nature of Conflict'], rows: [['Growth ↔ Inflation', 'Rapid growth uses spare capacity → demand-pull inflation. Curbing inflation with higher rates → recession (recession slows growth).'], ['Growth ↔ Current account', 'Higher growth → higher incomes → higher imports → current account worsens.'], ['Unemployment ↔ Inflation', 'Lower unemployment → wage pressure → cost-push inflation (SHORT-RUN Phillips curve).'], ['Growth ↔ Environment', 'Higher output → more resource use and carbon emissions.'], ['Equality ↔ Growth', 'Redistribution may reduce incentives for work/investment → slows growth.'], ['Budget balance ↔ Growth', 'Austerity (cuts to G) reduces the deficit but lowers AD and growth.']] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Always relate trade-offs to policies: "pursuing X through policy Y causes conflict with objective Z." Chain: e.g. ↑G → ↑AD → ↑GDP growth ✓ but → ↑imports → worsening current account ✗.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Resolving Trade-offs', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Supply-side policies</strong> can reduce conflicts — improve productive capacity (LRAS shifts right) → growth with low inflation; reduce structural unemployment without boosting AD.' }, { text: '<strong>Independent central bank</strong>: separates inflation control from growth-biased political decisions.' }, { text: '<strong>Fiscal rules</strong>: constrain deficit to prevent unsustainable stimulus.' }] } },
    { id: 'sum-1', type: 'summary', data: { text: 'Objectives conflict: growth vs inflation, growth vs current account, unemployment vs inflation, equality vs incentives. Supply-side policies can reduce some trade-offs by shifting LRAS right.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Assuming macroeconomic objectives always conflict. While the Phillips Curve shows inflation-unemployment trade-off, other objectives can complement each other: supply-side improvements reduce inflation while raising growth; reducing inequality can boost growth via consumption. Show nuanced understanding by identifying which objectives conflict, which complement, and under what conditions."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Objectives conflict: growth↔inflation, unemployment↔inflation (Phillips curve), growth↔current account. Supply-side policy reduces trade-offs via LRAS shift.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'Explain the conflict between economic growth and inflation.', answer: 'When AD grows rapidly towards or beyond potential output, spare capacity runs out — demand-pull inflation occurs. Policymakers must then raise interest rates to control inflation, which reduces investment and slows growth.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'How can supply-side policies help resolve objective trade-offs?', answer: 'Supply-side policies shift LRAS right — increasing productive capacity allows AD to expand (growth) without inflationary pressure and without worsening structural unemployment. This is why long-run supply-side improvements are preferred over cyclical demand management.' },
    ]
  },
  evidence: [], mentions: []
};
