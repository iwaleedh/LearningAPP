export const note_physics_5_10_5 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe Core Practical 16: determination of unknown mass by resonant frequency method.' }, terms: ['core practical'] },
    { id: 'h-cp16', type: 'heading', data: { text: 'Core Practical 16: Resonant Mass', level: 2 }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Method', text: '1. Mass-spring system: known spring (k) with unknown mass m.\n2. Oscillate vertically and measure period T (time for 10 oscillations/10).\n3. T = 2\u03c0\u221a(m/k) \u2192 m = kT\u00b2/(4\u03c0\u00b2).\n4. Or plot T\u00b2 vs m for known masses: gradient = 4\u03c0\u00b2/k.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can describe the resonant mass method', checked: false }, { text: 'I can determine m from T and k', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: T\u00b2 \u221d m gives a linear graph, confirming the SHM model and allowing unknown mass determination.\n\nApply: T=0.8s, k=50 N/m. Calculate m.\n\nAnalyze: Why measure 10 oscillations and divide by 10?\n\nEvaluate: This method works in zero gravity (ISS). Discuss why this is an advantage over a balance.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'T=2\u03c0\u221a(m/k). m=kT\u00b2/4\u03c0\u00b2. T\u00b2 vs m: linear. Works in zero gravity. Time 10+oscillations for accuracy.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'callout-key', prompt: 'Describe the resonant mass practical.' }], summaryText: 'T=2\u03c0\u221a(m/k). m=kT\u00b2/4\u03c0\u00b2. T\u00b2 vs m: linear.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 CP16', detail: 'Resonant mass', year: '2021', source: 'Pearson Edexcel', tags: ['practical', 'SHM'] }],
};
