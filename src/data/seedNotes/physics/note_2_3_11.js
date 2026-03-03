export const note_physics_2_3_11 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe Core Practical 5: investigation of the variation of frequency of a vibrating string with length, tension and mass per unit length.' }, terms: ['core practical', 'vibrating string'] },
    { id: 'h-cp5', type: 'heading', data: { text: 'Core Practical 5: Vibrating String', level: 2 }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Method', text: '1. Set up a sonometer or wire under tension T.\n2. Use a signal generator to drive the string via a vibration generator.\n3. Vary length L (or tension T) and find fundamental resonant frequency.\n4. Plot f vs 1/L (should be linear through origin).\n5. Or plot f\u00b2 vs T (linear, gradient = 1/4L\u00b2\u03bc).' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can describe the sonometer method', checked: false }, { text: 'I can explain expected graph relationships', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: f\u2081 = (1/2L)\u221a(T/\u03bc) predicts linear relationships: f\u221d1/L, f\u221d\u221aT, f\u221d1/\u221a\u03bc.\n\nApply: Predict how halving the length affects the fundamental frequency.\n\nAnalyze: Why must markers (paper riders) be used to confirm the mode of vibration?\n\nEvaluate: This practical tests three variables. Discuss which gives the most reliable results and why.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Sonometer: vary L or T, find resonant f. f=1/(2L)\u221a(T/\u03bc). f\u221d1/L, f\u221d\u221aT, f\u221d1/\u221a\u03bc.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'callout-key', prompt: 'Describe the vibrating string practical.' },
  ], summaryText: 'Sonometer: f=1/(2L)\u221a(T/\u03bc). f\u221d1/L, f\u221d\u221aT.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 CP5', detail: 'Vibrating string', year: '2021', source: 'Pearson Edexcel', tags: ['practical', 'string'] }],
};
