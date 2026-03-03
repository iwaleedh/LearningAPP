export const note_physics_4_7_0 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe the nuclear model of the atom; explain Rutherford alpha scattering and its conclusions.' }, terms: ['nuclear model', 'alpha scattering'] },
    { id: 'h-nuc', type: 'heading', data: { text: 'Nuclear Model and Alpha Scattering', level: 2 }, terms: [] },
    { id: 'p-ruth', type: 'paragraph', data: { text: 'Rutherford fired alpha particles at thin gold foil. Most passed straight through (atom is mostly empty space). Some deflected at large angles. A very few bounced back (nucleus is small, dense, positively charged).' }, terms: [] },
    { id: 'list-conclusions', type: 'list', data: { style: 'unordered', items: ['Atom is mostly empty space', 'Nucleus is tiny (~10\u207b\u00b9\u2075 m) compared to atom (~10\u207b\u00b9\u2070 m)', 'Nucleus contains most of the mass', 'Nucleus is positively charged', 'Nuclear charge determines the element'] }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can describe alpha scattering experiment', checked: false }, { text: 'I can state conclusions about nuclear model', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: The plum pudding model predicted uniform deflection. Large-angle scattering disproved this and required a concentrated positive core.\n\nApply: Calculate the closest approach of a 5 MeV alpha to a gold nucleus (Z=79).\n\nAnalyze: Why did most alphas pass undeflected? What does this tell us about atom structure?\n\nEvaluate: Electron diffraction gives more precise nuclear radii than alpha scattering. Explain why.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Rutherford: alpha at gold foil. Most pass through (empty space). Few bounce back (small dense + nucleus). Replaced plum pudding model.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'list-conclusions', prompt: 'State conclusions from alpha scattering.' }], summaryText: 'Rutherford: empty space, tiny dense positive nucleus.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 7', detail: 'Nuclear model', year: '2021', source: 'Pearson Edexcel', tags: ['nucleus'] }],
};
