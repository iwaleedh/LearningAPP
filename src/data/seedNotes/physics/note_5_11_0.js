export const note_physics_5_11_0 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define gravitational field strength and gravitational potential; sketch radial field patterns.' }, terms: ['gravitational field', 'potential'] },
    { id: 'h-gf', type: 'heading', data: { text: 'Gravitational Field and Potential', level: 2 }, terms: [] },
    { id: 'eq-g', type: 'equation', data: { html: 'g = GM/r\u00b2', caption: 'Gravitational field strength (radial)' }, terms: [] },
    { id: 'eq-vg', type: 'equation', data: { html: 'V = \u2212GM/r', caption: 'Gravitational potential (always negative)' }, terms: [] },
    { id: 'p-gf', type: 'paragraph', data: { text: 'g = force per unit mass. V = work per unit mass bringing mass from infinity. V is always negative (bound state). g = \u2212dV/dr. Field lines point towards mass (attractive only).' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate g and V at distance r', checked: false }, { text: 'I can sketch gravitational field patterns', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Gravity is always attractive, so V is always negative. Zero potential is at infinity.\n\nApply: Calculate g and V at the surface of Mars (M=6.4\u00d710\u00b2\u00b3 kg, r=3.4\u00d710\u2076 m).\n\nAnalyze: Why is gravitational potential always negative while electric potential can be positive or negative?\n\nEvaluate: Compare gravitational and electric fields: similarities (inverse square) and differences.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'g=GM/r\u00b2. V=\u2212GM/r. Always attractive. g=\u2212dV/dr. V<0 always. Field lines point inward.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-g', prompt: 'State equations for g and V.' }], summaryText: 'g=GM/r\u00b2. V=\u2212GM/r. Always \u2212ve. g=\u2212dV/dr.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 11', detail: 'Gravitational fields', year: '2021', source: 'Pearson Edexcel', tags: ['gravity'] }],
};
