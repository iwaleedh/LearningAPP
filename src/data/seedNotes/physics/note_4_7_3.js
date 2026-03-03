export const note_physics_4_7_3 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Apply conservation laws (charge, baryon number, lepton number, strangeness) to particle interactions.' }, terms: ['conservation laws'] },
    { id: 'h-cons', type: 'heading', data: { text: 'Conservation Laws in Particle Interactions', level: 2 }, terms: [] },
    { id: 'table-cons', type: 'comparisonTable', data: { headers: ['Quantity', 'Conserved in'], rows: [['Charge (Q)', 'All interactions'], ['Baryon number (B)', 'All interactions'], ['Lepton number (L)', 'All interactions'], ['Strangeness (S)', 'Strong and EM only (NOT weak)']], caption: 'Conservation rules' }, terms: [] },
    { id: 'p-cons', type: 'paragraph', data: { text: 'Every particle interaction must conserve charge, baryon number and lepton number. Strangeness is conserved in strong interactions but can change by \u00b11 in weak interactions. These rules determine which reactions are allowed.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can check conservation laws for interactions', checked: false }, { text: 'I can identify allowed and forbidden reactions', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Conservation laws are the fundamental rules of nature that constrain which particle interactions can occur.\n\nApply: Check if p + p \u2192 p + p + \u03c0\u2070 is allowed using all conservation laws.\n\nAnalyze: Why can strange particles be produced in pairs (associated production)?\n\nEvaluate: Neutrinos were predicted before detection by conservation of lepton number. Discuss how conservation laws guide theoretical predictions.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Always conserved: Q, B, L. S conserved in strong/EM, not weak (\u0394S=\u00b11). Use these to check allowed reactions.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'table-cons', prompt: 'State which quantities are conserved in each interaction type.' }], summaryText: 'Q, B, L always conserved. S conserved in strong/EM only.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 7', detail: 'Conservation laws', year: '2021', source: 'Pearson Edexcel', tags: ['conservation'] }],
};
