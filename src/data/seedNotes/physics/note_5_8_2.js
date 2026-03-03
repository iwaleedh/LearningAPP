export const note_physics_5_8_2 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'State and apply the ideal gas equation pV=nRT; understand the mole and Avogadro constant.' }, terms: ['ideal gas', 'mole'] },
    { id: 'h-gas', type: 'heading', data: { text: 'Ideal Gas Equation', level: 2 }, terms: [] },
    { id: 'eq-gas', type: 'equation', data: { html: 'pV = nRT = NkT', caption: 'Ideal gas equation (R=8.31, k=1.38\u00d710\u207b\u00b2\u00b3)' }, terms: [] },
    { id: 'p-gas', type: 'paragraph', data: { text: 'n = number of moles. N = number of molecules. N_A = 6.02\u00d710\u00b2\u00b3 (Avogadro). k = R/N_A (Boltzmann). An ideal gas: no intermolecular forces, point particles, elastic collisions.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can apply pV=nRT', checked: false }, { text: 'I can convert between n and N', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: pV=nRT combines Boyle, Charles and pressure laws. Ideal gas assumptions simplify reality.\n\nApply: 2 mol of gas at 300 K in 0.05 m\u00b3. Find the pressure.\n\nAnalyze: Under what conditions do real gases deviate from ideal behaviour?\n\nEvaluate: Is the ideal gas model useful despite its simplifications? Discuss when it breaks down.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'pV=nRT=NkT. n=N/N_A. Ideal gas: no forces, point particles, elastic collisions. Real gases deviate at high p, low T.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-gas', prompt: 'State the ideal gas equation.' }], summaryText: 'pV=nRT=NkT. n=N/N_A. Ideal at low p, high T.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 8', detail: 'Ideal gas', year: '2021', source: 'Pearson Edexcel', tags: ['gas'] }],
};
