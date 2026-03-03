export const note_physics_4_6_4 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Analyse exponential decay in RC circuits; use logarithmic methods to determine RC from experimental data.' }, terms: ['exponential decay'] },
    { id: 'h-exp', type: 'heading', data: { text: 'Exponential Decay in RC Circuits', level: 2 }, terms: [] },
    { id: 'p-log', type: 'paragraph', data: { text: 'Taking ln of Q = Q\u2080e\u207b\u1d57/RC gives: ln Q = ln Q\u2080 \u2212 t/RC. Plotting ln Q vs t gives a straight line with gradient = \u22121/RC and y-intercept = ln Q\u2080. Similarly for V and I.' }, terms: [] },
    { id: 'eq-half', type: 'equation', data: { html: 't<sub>\u00bd</sub> = RC ln 2 = 0.693RC', caption: 'Half-life of capacitor discharge' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can linearise exponential data using ln', checked: false }, { text: 'I can find RC from graph gradient', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Logarithmic plots convert exponentials into straight lines, making it easy to find constants.\n\nApply: ln V vs t has gradient \u221220. Find RC and \u03c4.\n\nAnalyze: Compare the half-life concept in RC circuits with radioactive decay. What parallels exist?\n\nEvaluate: Why is the ln plot method more reliable than reading \u03c4 directly from a curve?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'ln Q vs t: gradient=\u22121/RC. t\u00bd=0.693RC. Same for V and I. Logarithmic linearisation for accurate RC determination.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-half', prompt: 'State the half-life equation for RC discharge.' }], summaryText: 'lnQ vs t: gradient=\u22121/RC. t\u00bd=0.693RC.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 6', detail: 'Exponential decay', year: '2021', source: 'Pearson Edexcel', tags: ['exponential'] }],
};
