export const note_physics_4_5_5 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe Core Practical 9: investigation of the relationship between force exerted on an object and its change of momentum.' }, terms: ['core practical'] },
    { id: 'h-cp9', type: 'heading', data: { text: 'Core Practical 9: Force and Momentum', level: 2 }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Method', text: '1. Trolley on a track, pulled by hanging masses via string.\n2. Light gate records velocity before and after force application.\n3. Force = weight of hanging mass (if friction compensated).\n4. Impulse = F\u0394t = \u0394p.\n5. Verify F = \u0394p/\u0394t.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can describe the apparatus and method', checked: false }, { text: 'I can analyse data to verify F=\u0394p/\u0394t', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: This practical verifies Newton\'s second law in its momentum form.\n\nApply: Calculate \u0394p from light gate data and compare with F\u0394t.\n\nAnalyze: Why must friction be compensated? How does a tilted track help?\n\nEvaluate: The hanging mass must be much less than the trolley mass. Explain why this assumption is needed.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Trolley + light gates. F\u0394t = \u0394p. Compensate friction with tilted track. Verify Newton\'s 2nd law.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'callout-key', prompt: 'Describe the force-momentum practical.' }], summaryText: 'Trolley, light gates, F\u0394t=\u0394p.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 CP9', detail: 'Force and momentum', year: '2021', source: 'Pearson Edexcel', tags: ['practical'] }],
};
