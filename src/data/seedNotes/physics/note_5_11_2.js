export const note_physics_5_11_2 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand black-body radiation; apply Wien\u2019s displacement law and Stefan-Boltzmann law.' }, terms: ['black body', 'Wien', 'Stefan-Boltzmann'] },
    { id: 'h-bb', type: 'heading', data: { text: 'Black-Body Radiation', level: 2 }, terms: [] },
    { id: 'eq-wien', type: 'equation', data: { html: '\u03bb<sub>max</sub>T = 2.898\u00d710\u207b\u00b3 m K', caption: 'Wien\u2019s displacement law' }, terms: [] },
    { id: 'eq-stefan', type: 'equation', data: { html: 'L = 4\u03c0r\u00b2\u03c3T\u2074', caption: 'Stefan-Boltzmann law (\u03c3=5.67\u00d710\u207b\u2078)' }, terms: [] },
    { id: 'p-bb', type: 'paragraph', data: { text: 'A black body absorbs and emits all wavelengths. Wien: hotter = shorter \u03bb_max (blue-shifted). Stefan: luminosity \u221d T\u2074 \u00d7 area. Stars are approximate black bodies.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can apply Wien\u2019s law', checked: false }, { text: 'I can apply Stefan-Boltzmann law', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Wien tells temperature from colour. Stefan tells total power output from T and size.\n\nApply: Star has \u03bb_max=500 nm. Find T. If r=7\u00d710\u2078 m, find L.\n\nAnalyze: Why does a red star emit less power per unit area than a blue star?\n\nEvaluate: The cosmic microwave background peaks at \u03bb=1.06 mm. Calculate the temperature of the CMB.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Wien: \u03bb_max T = 2.898\u00d710\u207b\u00b3. Stefan: L=4\u03c0r\u00b2\u03c3T\u2074. Hotter=bluer, more luminous per area.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-wien', prompt: 'State Wien\u2019s and Stefan-Boltzmann laws.' }], summaryText: '\u03bb_maxT=2.9\u00d710\u207b\u00b3. L=4\u03c0r\u00b2\u03c3T\u2074.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 11', detail: 'Black-body radiation', year: '2021', source: 'Pearson Edexcel', tags: ['black body'] }],
};
