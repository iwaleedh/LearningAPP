export const note_physics_5_9_4 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Write nuclear equations for alpha, beta-minus and beta-plus decay; understand decay laws and activity.' }, terms: ['nuclear equations', 'decay'] },
    { id: 'h-eq', type: 'heading', data: { text: 'Nuclear Equations and Decay Laws', level: 2 }, terms: [] },
    { id: 'p-decay', type: 'paragraph', data: { text: 'Alpha: A decreases by 4, Z by 2. Beta-minus: neutron\u2192proton, Z+1, electron emitted. Beta-plus: proton\u2192neutron, Z\u22121, positron emitted. Activity A = \u03bbN (decays per second, Bq). \u03bb = decay constant.' }, terms: [] },
    { id: 'eq-act', type: 'equation', data: { html: 'A = \u03bbN = A\u2080e<sup>\u2212\u03bbt</sup>', caption: 'Activity decreases exponentially' }, terms: [] },
    { id: 'eq-N', type: 'equation', data: { html: 'N = N\u2080e<sup>\u2212\u03bbt</sup>', caption: 'Number of undecayed nuclei' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can write nuclear equations', checked: false }, { text: 'I can use N=N\u2080e^(\u2212\u03bbt)', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Decay is random and spontaneous. \u03bb is the probability of decay per unit time per nucleus.\n\nApply: Write equations for U-238 alpha decay and C-14 beta-minus decay.\n\nAnalyze: Why is nuclear decay exponential? Relate to the constant probability model.\n\nEvaluate: We cannot predict when a single nucleus decays but can predict the average rate for many nuclei. Discuss.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: '\u03b1: A\u22124, Z\u22122. \u03b2\u207b: Z+1. \u03b2\u207a: Z\u22121. A=\u03bbN. N=N\u2080e^(\u2212\u03bbt). \u03bb=probability per unit time per nucleus.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-act', prompt: 'State the exponential decay equation.' }], summaryText: 'N=N\u2080e^(\u2212\u03bbt). A=\u03bbN. \u03b1: Z\u22122. \u03b2\u207b: Z+1.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 9', detail: 'Nuclear decay', year: '2021', source: 'Pearson Edexcel', tags: ['decay'] }],
};
