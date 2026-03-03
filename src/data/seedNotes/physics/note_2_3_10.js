export const note_physics_2_3_10 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe Core Practical 4: determination of the speed of sound using stationary waves in an air column.' }, terms: ['core practical', 'speed of sound'] },
    { id: 'h-cp4', type: 'heading', data: { text: 'Core Practical 4: Speed of Sound', level: 2 }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Method', text: '1. Hold a tuning fork of known frequency f over a resonance tube partly submerged in water.\n2. Adjust water level to find resonance positions (loud sound).\n3. First resonance: L\u2081 \u2248 \u03bb/4. Second: L\u2082 \u2248 3\u03bb/4.\n4. \u03bb = 2(L\u2082 \u2212 L\u2081).\n5. v = f\u03bb.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can describe the resonance tube method', checked: false }, { text: 'I can calculate speed of sound from data', checked: false }, { text: 'I can identify errors', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Resonance occurs at specific air column lengths where standing waves form with an antinode at the open end and node at the water surface.\n\nApply: f=512 Hz, L\u2081=0.160 m, L\u2082=0.496 m. Calculate v.\n\nAnalyze: Why is \u03bb=2(L\u2082\u2212L\u2081) more accurate than \u03bb=4L\u2081?\n\nEvaluate: The end correction means the antinode is slightly above the tube opening. How does this affect accuracy?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Resonance tube: find L\u2081 and L\u2082 for resonance. \u03bb=2(L\u2082\u2212L\u2081). v=f\u03bb. Expected: ~340 m/s in air at room temperature.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'callout-key', prompt: 'Describe the method for measuring speed of sound.' },
  ], summaryText: 'Resonance tube. \u03bb=2(L\u2082\u2212L\u2081). v=f\u03bb\u2248340 m/s.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 CP4', detail: 'Speed of sound', year: '2021', source: 'Pearson Edexcel', tags: ['practical', 'sound'] }],
};
