export const note_physics_4_6_1 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Apply Coulomb\'s Law to calculate forces between point charges; understand radial electric fields.' }, terms: ['Coulomb'] },
    { id: 'h-coul', type: 'heading', data: { text: 'Coulomb\'s Law', level: 2 }, terms: [] },
    { id: 'eq-coul', type: 'equation', data: { html: 'F = kQ\u2081Q\u2082/r\u00b2', caption: 'k = 1/(4\u03c0\u03b5\u2080) = 8.99\u00d710\u2079 N m\u00b2 C\u207b\u00b2' }, terms: [] },
    { id: 'p-coul', type: 'paragraph', data: { text: 'Like charges repel, unlike attract. Force is proportional to product of charges and inversely proportional to r\u00b2. The constant k = 1/(4\u03c0\u03b5\u2080) where \u03b5\u2080 is the permittivity of free space.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can apply Coulomb\'s law', checked: false }, { text: 'I can sketch radial field patterns', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Coulomb\'s law has the same form as Newton\'s gravitational law but can be attractive or repulsive.\n\nApply: Two charges +3\u03bcC and \u22122\u03bcC are 0.1 m apart. Calculate the force and state its direction.\n\nAnalyze: Why is the electric force between two protons much stronger than their gravitational attraction?\n\nEvaluate: Inside a conductor, E=0. Explain why using Coulomb\'s law and charge redistribution.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'F=kQ\u2081Q\u2082/r\u00b2. k=8.99\u00d710\u2079. Like repel, unlike attract. Inverse square law. E=kQ/r\u00b2.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-coul', prompt: 'State Coulomb\'s law.' }], summaryText: 'F=kQ\u2081Q\u2082/r\u00b2. k=8.99\u00d710\u2079. Inverse square.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 6', detail: 'Coulomb\'s law', year: '2021', source: 'Pearson Edexcel', tags: ['Coulomb'] }],
};
