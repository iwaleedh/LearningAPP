export const note_physics_5_8_6 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe Core Practical 14: investigation of the relationship between gas pressure and volume (Boyle\'s law).' }, terms: ['core practical', 'Boyle'] },
    { id: 'h-cp14', type: 'heading', data: { text: 'Core Practical 14: Gas Pressure-Volume', level: 2 }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Method', text: '1. Sealed syringe or Boyle\'s law apparatus with pressure gauge.\n2. Vary volume, measure pressure (constant T and mass of gas).\n3. Plot p vs 1/V \u2192 straight line through origin.\n4. Or pV = constant (verify).' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can describe the Boyle\'s law practical', checked: false }, { text: 'I can verify pV=constant', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Boyle\'s law (p\u221d1/V, constant T) is a special case of pV=nRT.\n\nApply: p=1.0\u00d710\u2075 Pa at V=100 cm\u00b3. Find p when V=50 cm\u00b3.\n\nAnalyze: Why must temperature remain constant? How does heating affect results?\n\nEvaluate: Graph doesn\'t pass through origin? Discuss systematic errors in gas volume (dead space).' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Boyle: pV=constant (const T). p vs 1/V: linear through origin. Keep T constant. Watch for dead space errors.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'callout-key', prompt: 'Describe the Boyle\'s law practical.' }], summaryText: 'pV=const (const T). p vs 1/V: linear. Dead space error.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 CP14', detail: 'Boyle\'s law', year: '2021', source: 'Pearson Edexcel', tags: ['practical', 'gas'] }],
};
