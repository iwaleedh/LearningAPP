export const note_physics_5_9_0 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define binding energy and mass defect; interpret a binding energy per nucleon curve; explain nuclear stability.' }, terms: ['binding energy', 'mass defect'] },
    { id: 'h-be', type: 'heading', data: { text: 'Binding Energy and Mass Defect', level: 2 }, terms: [] },
    { id: 'p-be', type: 'paragraph', data: { text: 'Mass defect \u0394m = total mass of separate nucleons \u2212 mass of nucleus. Binding energy = \u0394mc\u00b2 = energy released when nucleons bind together. Higher BE per nucleon = more stable nucleus. Iron-56 has the highest BE/nucleon.' }, terms: [] },
    { id: 'eq-be', type: 'equation', data: { html: 'BE = \u0394mc\u00b2', caption: 'Binding energy from mass defect' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate mass defect and binding energy', checked: false }, { text: 'I can interpret BE/nucleon curve', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: BE/nucleon curve peaks at Fe-56. Fusion of light nuclei and fission of heavy nuclei both move towards this peak, releasing energy.\n\nApply: Calculate the BE of He-4 given masses of proton, neutron and He-4 nucleus.\n\nAnalyze: Why is Fe-56 the most stable nucleus? What stops fusion beyond iron in normal stars?\n\nEvaluate: Both fusion and fission release energy. Compare their practical challenges and energy yields.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: '\u0394m = separate nucleon mass \u2212 nucleus mass. BE=\u0394mc\u00b2. Fe-56: highest BE/nucleon. Fusion/fission move toward peak.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-be', prompt: 'Define binding energy and mass defect.' }], summaryText: 'BE=\u0394mc\u00b2. Fe-56 most stable. Fusion+fission release energy.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 9', detail: 'Binding energy', year: '2021', source: 'Pearson Edexcel', tags: ['binding energy'] }],
};
