export const note_physics_4_6_3 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe capacitor charge and discharge curves; understand time constant \u03c4=RC.' }, terms: ['charge', 'discharge', 'time constant'] },
    { id: 'h-cd', type: 'heading', data: { text: 'Capacitor Charge and Discharge', level: 2 }, terms: [] },
    { id: 'eq-discharge', type: 'equation', data: { html: 'Q = Q\u2080e<sup>\u2212t/RC</sup>', caption: 'Charge during discharge (exponential decay)' }, terms: [] },
    { id: 'p-tau', type: 'paragraph', data: { text: 'Time constant \u03c4 = RC (seconds). After one time constant, Q drops to Q\u2080/e = 0.37Q\u2080. After 5\u03c4, capacitor is ~99% discharged. During charging: Q = Q\u2080(1\u2212e\u207b\u1d57/\u1d3f\u1d9c).' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can sketch charge and discharge curves', checked: false }, { text: 'I can calculate \u03c4=RC', checked: false }, { text: 'I can use exponential equations', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Exponential decay occurs because current \u221d V \u221d Q. As Q decreases, the driving force for current decreases.\n\nApply: C=470\u03bcF, R=10k\u03a9. Find \u03c4 and time to discharge to 10% of Q\u2080.\n\nAnalyze: Why is ln(Q) vs t a straight line? What does the gradient give?\n\nEvaluate: Flash photography uses rapid capacitor discharge. How would you design the circuit for a 5 ms flash?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Q=Q\u2080e\u207b\u1d57/\u1d3f\u1d9c. \u03c4=RC. After \u03c4: 37%. After 5\u03c4: ~0%. ln Q vs t: linear, gradient=\u22121/RC.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-discharge', prompt: 'State the discharge equation and define time constant.' }], summaryText: 'Q=Q\u2080e\u207b\u1d57/RC. \u03c4=RC. 37% after one \u03c4.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 6', detail: 'RC circuits', year: '2021', source: 'Pearson Edexcel', tags: ['capacitor', 'RC'] }],
};
