export const note_physics_5_9_1 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe nuclear fusion and fission; explain conditions for each and calculate energy released.' }, terms: ['fusion', 'fission'] },
    { id: 'h-ff', type: 'heading', data: { text: 'Fusion and Fission', level: 2 }, terms: [] },
    { id: 'table-ff', type: 'comparisonTable', data: { headers: ['Property', 'Fusion', 'Fission'], rows: [['Process', 'Light nuclei join', 'Heavy nucleus splits'], ['Conditions', 'Very high T (~10\u2077 K)', 'Neutron absorption'], ['Products', 'Heavier nucleus + energy', 'Lighter nuclei + neutrons + energy'], ['Examples', 'Stars, H-bomb', 'Nuclear reactors, A-bomb']], caption: 'Fusion vs fission' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can describe fusion and fission', checked: false }, { text: 'I can calculate energy released from mass defect', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Both processes release energy because products have higher BE/nucleon than reactants.\n\nApply: Calculate energy released when U-235 fissions into Ba-141 + Kr-92 + 3n.\n\nAnalyze: Why does fusion require extreme temperatures? Relate to Coulomb barrier.\n\nEvaluate: Fusion power has been "30 years away" for decades. Discuss the engineering challenges.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Fusion: light\u2192heavier (stars, high T). Fission: heavy\u2192lighter (reactors, neutron trigger). Both release energy via \u0394mc\u00b2.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'table-ff', prompt: 'Compare fusion and fission.' }], summaryText: 'Fusion: light+light. Fission: heavy splits. Both release E=\u0394mc\u00b2.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 9', detail: 'Fusion and fission', year: '2021', source: 'Pearson Edexcel', tags: ['fusion', 'fission'] }],
};
