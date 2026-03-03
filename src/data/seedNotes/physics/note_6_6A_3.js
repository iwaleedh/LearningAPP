export const note_physics_6_6A_3 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Use logarithmic and exponential graphs to analyse data; determine constants from straight-line graphs.' }, terms: ['logarithmic graphs'] },
    { id: 'h-log', type: 'heading', data: { text: 'Data Analysis and Logarithmic Graphs', level: 2 }, terms: [] },
    { id: 'table-log', type: 'comparisonTable', data: { headers: ['Relationship', 'Plot', 'Gradient', 'Intercept'], rows: [['y=kx\u207f', 'ln y vs ln x', 'n', 'ln k'], ['y=Ae\u1d47\u02e3', 'ln y vs x', 'b', 'ln A'], ['y=mx+c', 'y vs x', 'm', 'c']], caption: 'Linearising relationships' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can linearise power law and exponential data', checked: false }, { text: 'I can extract constants from gradients and intercepts', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Taking logarithms converts curves into straight lines, making analysis easier and more reliable.\n\nApply: Data suggests I \u221d e^(\u2212\u03bcx). Plot ln I vs x and find \u03bc from gradient.\n\nAnalyze: Why is a straight-line graph better than a curved graph for determining constants?\n\nEvaluate: When should you use ln vs log\u2081\u2080? Does it matter for finding gradients?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Power law: ln y vs ln x. Exponential: ln y vs x. Constants from gradient and intercept. Linearisation improves reliability.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'table-log', prompt: 'How do you linearise y=kx\u207f and y=Ae\u1d47\u02e3?' }], summaryText: 'ln y vs ln x: gradient=n. ln y vs x: gradient=b. Intercepts give k or A.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 WPH16', detail: 'Log graphs', year: '2021', source: 'Pearson Edexcel', tags: ['analysis'] }],
};
