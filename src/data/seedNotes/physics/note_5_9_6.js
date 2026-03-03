export const note_physics_5_9_6 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe Core Practical 15: investigation of the absorption of gamma radiation by lead.' }, terms: ['core practical', 'gamma'] },
    { id: 'h-cp15', type: 'heading', data: { text: 'Core Practical 15: Gamma Absorption', level: 2 }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Method', text: '1. Place gamma source and GM tube at fixed distance.\n2. Insert lead sheets of increasing thickness between them.\n3. Record count rate for each thickness (correct for background).\n4. Plot ln(corrected count rate) vs thickness \u2192 straight line.\n5. Gradient gives \u2212\u03bc (absorption coefficient).' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can describe the gamma absorption practical', checked: false }, { text: 'I can find absorption coefficient from graph', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Gamma intensity decreases exponentially with thickness: I=I\u2080e^(\u2212\u03bcx).\n\nApply: Background=25 cpm. Source gives 425 cpm. With 2 cm lead: 225 cpm. Find corrected rates.\n\nAnalyze: Why is ln I vs x linear? What does a non-linear result suggest?\n\nEvaluate: Different materials have different \u03bc. Discuss which materials are best for radiation shielding.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'I=I\u2080e^(\u2212\u03bcx). ln I vs x: gradient=\u2212\u03bc. Subtract background first. Lead absorbs gamma well.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'callout-key', prompt: 'Describe the gamma absorption practical.' }], summaryText: 'I=I\u2080e^(\u2212\u03bcx). lnI vs x: gradient=\u2212\u03bc.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 CP15', detail: 'Gamma absorption', year: '2021', source: 'Pearson Edexcel', tags: ['practical', 'gamma'] }],
};
