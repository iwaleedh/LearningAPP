export const note_physics_2_3_4 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand wave speed on a stretched string; relate fundamental frequency to tension, length and mass per unit length.' }, terms: ['wave speed', 'string'] },
    { id: 'h-string', type: 'heading', data: { text: 'Wave Speed on Strings', level: 2 }, terms: [] },
    { id: 'eq-string', type: 'equation', data: { html: 'v = \u221a(T/\u03bc)', caption: 'Wave speed = \u221a(tension / mass per unit length)' }, terms: [] },
    { id: 'p-fund', type: 'paragraph', data: { text: 'For a string fixed at both ends, fundamental frequency f\u2081 = v/2L = (1/2L)\u221a(T/\u03bc). Higher tension \u2192 higher speed \u2192 higher frequency. Longer string \u2192 lower frequency. Heavier string \u2192 lower frequency.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can use v=\u221a(T/\u03bc)', checked: false }, { text: 'I can explain how tension and length affect frequency', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Wave speed on a string depends on tension (restoring force) and mass per unit length (inertia). f\u2081=v/2L.\n\nApply: Guitar string: L=0.65 m, \u03bc=0.003 kg/m, T=100 N. Find fundamental frequency.\n\nAnalyze: Violinists tune by adjusting tension. How much must T increase to raise pitch by one octave?\n\nEvaluate: Bass guitar strings are thicker. Explain why using \u03bc and its effect on v and f.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'v=\u221a(T/\u03bc). f\u2081=v/2L. Higher T \u2192 higher f. Greater \u03bc \u2192 lower f. Longer L \u2192 lower f.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-string', prompt: 'State the equation for wave speed on a string.' },
  ], summaryText: 'v=\u221a(T/\u03bc). f\u2081=v/2L.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 3', detail: 'Waves on strings', year: '2021', source: 'Pearson Edexcel', tags: ['strings'] }],
};
