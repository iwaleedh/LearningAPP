export const note_physics_3_3A_4 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Process data using graphs: plot best-fit lines, determine gradients and intercepts, use logarithmic plots to test power laws.' }, terms: ['graphs', 'gradient'] },
    { id: 'h-graph', type: 'heading', data: { text: 'Processing and Graphical Analysis', level: 2 }, terms: [] },
    { id: 'list-graph', type: 'list', data: { style: 'unordered', items: ['Axes labelled with quantity and unit', 'Sensible scales (use >50% of graph paper)', 'Plot points accurately with small crosses', 'Draw best-fit line (straight or curve)', 'Gradient = \u0394y/\u0394x using large triangle', 'Y-intercept: read from graph or calculate'] }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Logarithmic Graphs', text: 'If y = kx\u207f, then log y = log k + n log x. Plot log y vs log x: gradient = n, intercept = log k.\nIf y = Ae\u1d47\u02e3, then ln y = ln A + bx. Plot ln y vs x: gradient = b, intercept = ln A.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can plot graphs with correct conventions', checked: false }, { text: 'I can determine gradient and intercept', checked: false }, { text: 'I can use log plots to find power laws', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Graphical analysis reveals relationships that raw data cannot. Linearising curves (using logs) lets you test models and find constants.\n\nApply: Data suggests F \u221d v\u207f. Describe how to find n graphically.\n\nAnalyze: Why is a large gradient triangle more accurate than a small one?\n\nEvaluate: A student\'s best-fit line does not pass through the origin when theory predicts it should. What does this suggest?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Label axes, sensible scales, best-fit line. Gradient=\u0394y/\u0394x. Log plots linearise power laws and exponentials. Gradient and intercept give constants.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'callout-key', prompt: 'How do you linearise y=kx\u207f using logs?' }], summaryText: 'Gradient=\u0394y/\u0394x. log y vs log x: gradient=n. ln y vs x: gradient=b.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 WPH13', detail: 'Graphical analysis', year: '2021', source: 'Pearson Edexcel', tags: ['graphs'] }],
};
