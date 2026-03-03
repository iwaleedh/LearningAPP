export const note_physics_5_10_4 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand damping: light, heavy and critical; describe how damping affects amplitude and energy.' }, terms: ['damping'] },
    { id: 'h-damp', type: 'heading', data: { text: 'Damping and Forced Oscillations', level: 2 }, terms: [] },
    { id: 'table-damp', type: 'comparisonTable', data: { headers: ['Type', 'Description', 'Example'], rows: [['Light', 'Amplitude decreases gradually, oscillations continue', 'Pendulum in air'], ['Heavy', 'Amplitude decreases quickly, few oscillations', 'Pendulum in oil'], ['Critical', 'Returns to equilibrium as fast as possible, no overshoot', 'Car suspension']], caption: 'Types of damping' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can describe three types of damping', checked: false }, { text: 'I can explain how damping affects resonance', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Damping removes energy from the system. Critical damping returns to equilibrium fastest without oscillating.\n\nApply: Design a car suspension that uses critical damping. What happens if over-damped or under-damped?\n\nAnalyze: On a resonance curve, increasing damping lowers the peak and broadens it. Why?\n\nEvaluate: Skyscrapers use tuned mass dampers to counteract wind-induced swaying. Explain the physics.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Light: slow decay. Heavy: rapid decay. Critical: fastest return, no overshoot. Damping reduces resonance peak and broadens it.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'table-damp', prompt: 'Compare light, heavy and critical damping.' }], summaryText: 'Light: slow. Heavy: fast. Critical: optimal. Damping broadens resonance.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 10', detail: 'Damping', year: '2021', source: 'Pearson Edexcel', tags: ['damping'] }],
};
