export const note_physics_1_2_5 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Distinguish elastic and plastic deformation; understand the behaviour of materials under loading and unloading.' }, terms: ['elastic', 'plastic'] },
    { id: 'h-ep', type: 'heading', data: { text: 'Elastic and Plastic Behaviour', level: 2 }, terms: [] },
    { id: 'list-ep', type: 'list', data: { style: 'unordered', items: ['Elastic deformation: object returns to original shape when force removed. Energy stored and fully recoverable.', 'Plastic deformation: permanent deformation remains after force removed. Energy is dissipated.', 'Elastic limit: the point beyond which deformation becomes plastic.', 'Metals: elastic up to yield point then plastic. Rubber: elastic over large strains.'] }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Loading and Unloading', text: 'For springs: loading and unloading follow the same path (fully elastic).\nFor rubber: hysteresis loop \u2014 unloading curve is below loading curve \u2192 energy lost as heat.\nFor metals beyond yield: unloading is parallel to original gradient but offset \u2192 permanent extension.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can distinguish elastic from plastic deformation', checked: false }, { text: 'I can interpret loading/unloading curves', checked: false }, { text: 'I can explain hysteresis energy loss', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Elastic deformation stores energy in atomic bonds; plastic deformation involves atoms sliding to new positions permanently.\n\nApply: A metal wire is stretched beyond its elastic limit then released. Sketch the loading/unloading graph and label permanent extension.\n\nAnalyze: Why does repeated loading/unloading of rubber cause it to heat up? Relate to hysteresis.\n\nEvaluate: Car body panels are designed to deform plastically in a crash. Explain why this is safer than elastic deformation.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Elastic: returns to original shape, energy stored. Plastic: permanent deformation, energy dissipated. Beyond elastic limit = plastic. Rubber shows hysteresis.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'list-ep', prompt: 'Distinguish elastic from plastic deformation.' },
    { id: 'cue-2', blockId: 'callout-key', prompt: 'Describe loading/unloading curves for rubber and metal.' },
  ], summaryText: 'Elastic: recoverable. Plastic: permanent. Hysteresis: energy lost as heat.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 2', detail: 'Elastic and plastic behaviour', year: '2021', source: 'Pearson Edexcel', tags: ['elastic', 'plastic'] }],
};
