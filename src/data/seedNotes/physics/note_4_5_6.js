export const note_physics_4_5_6 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe Core Practical 10: investigation of 1D and 2D collisions using data loggers and video analysis.' }, terms: ['core practical', 'collision'] },
    { id: 'h-cp10', type: 'heading', data: { text: 'Core Practical 10: Collision Analysis', level: 2 }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Method', text: '1. Air track with two gliders (reduces friction).\n2. Light gates measure velocities before and after.\n3. Calculate total momentum before and after.\n4. Calculate total KE before and after.\n5. Classify as elastic or inelastic.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can measure velocities using light gates', checked: false }, { text: 'I can verify momentum conservation', checked: false }, { text: 'I can classify collisions', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Air tracks minimise friction, making external forces negligible so momentum is conserved.\n\nApply: Glider A (0.3 kg, 0.5 m/s) hits stationary B (0.2 kg). After: A=0.1 m/s. Is this elastic?\n\nAnalyze: Why is video analysis useful for 2D collisions where light gates only measure 1D?\n\nEvaluate: Even on air tracks, momentum may not be perfectly conserved. Discuss why.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Air track reduces friction. Light gates for velocity. Compare \u2211p before and after. Compare \u2211KE to classify elastic/inelastic.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'callout-key', prompt: 'Describe the collision analysis practical.' }], summaryText: 'Air track, light gates. Verify \u2211p conserved. Compare KE for classification.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 CP10', detail: 'Collision analysis', year: '2021', source: 'Pearson Edexcel', tags: ['practical', 'collision'] }],
};
