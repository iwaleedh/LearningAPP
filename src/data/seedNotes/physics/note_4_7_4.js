export const note_physics_4_7_4 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand mass-energy equivalence E=mc\u00b2; calculate rest energy and relate to binding energy and mass defect.' }, terms: ['mass-energy', 'E=mc\u00b2'] },
    { id: 'h-me', type: 'heading', data: { text: 'Mass-Energy Equivalence', level: 2 }, terms: [] },
    { id: 'eq-mc2', type: 'equation', data: { html: 'E = mc\u00b2', caption: 'Mass-energy equivalence (c = 3\u00d710\u2078 m/s)' }, terms: [] },
    { id: 'p-me', type: 'paragraph', data: { text: 'Mass and energy are equivalent. Rest energy E\u2080 = mc\u00b2. 1 u = 931.5 MeV/c\u00b2. In nuclear reactions, mass defect \u0394m is converted to energy: \u0394E = \u0394mc\u00b2. This is the binding energy per nucleon concept.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate rest energy from mass', checked: false }, { text: 'I can convert between u and MeV/c\u00b2', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: E=mc\u00b2 means mass IS energy. Creating particles requires energy; annihilation releases it.\n\nApply: Calculate the rest energy of an electron (m=9.11\u00d710\u207b\u00b3\u00b9 kg) in MeV.\n\nAnalyze: Where does the mass come from in pair production? \n\nEvaluate: Nuclear weapons convert ~0.1% of mass to energy. Calculate the energy from 1 kg using E=mc\u00b2.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'E=mc\u00b2. 1 u = 931.5 MeV/c\u00b2. Mass defect \u2192 binding energy. Creating particles needs energy, annihilation releases it.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-mc2', prompt: 'State E=mc\u00b2 and the value of 1 u in MeV.' }], summaryText: 'E=mc\u00b2. 1u=931.5 MeV/c\u00b2.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 7', detail: 'Mass-energy', year: '2021', source: 'Pearson Edexcel', tags: ['E=mc2'] }],
};
