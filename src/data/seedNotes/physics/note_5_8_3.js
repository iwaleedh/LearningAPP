export const note_physics_5_8_3 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Derive and apply molecular kinetic theory results; relate pressure to molecular speed using pV=\u2153Nm<c\u00b2>.' }, terms: ['kinetic theory'] },
    { id: 'h-kt', type: 'heading', data: { text: 'Molecular Kinetic Theory', level: 2 }, terms: [] },
    { id: 'eq-kt', type: 'equation', data: { html: 'pV = \u2153Nm\u27e8c\u00b2\u27e9', caption: 'Kinetic theory equation' }, terms: [] },
    { id: 'eq-ke', type: 'equation', data: { html: '\u00bdm\u27e8c\u00b2\u27e9 = \u00bfkT', caption: 'Average translational KE per molecule' }, terms: [] },
    { id: 'p-rms', type: 'paragraph', data: { text: 'c_rms = \u221a\u27e8c\u00b2\u27e9 is the root-mean-square speed. Combining pV=\u2153Nm\u27e8c\u00b2\u27e9 with pV=NkT gives \u00bdm\u27e8c\u00b2\u27e9=3kT/2. Higher T \u2192 faster molecules.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can apply pV=\u2153Nm<c\u00b2>', checked: false }, { text: 'I can calculate c_rms from temperature', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Pressure arises from molecular collisions with walls. More collisions or harder hits = higher pressure.\n\nApply: Calculate c_rms of nitrogen molecules at 300 K (m=4.65\u00d710\u207b\u00b2\u2076 kg).\n\nAnalyze: Why is c_rms not the same as average speed?\n\nEvaluate: The derivation assumes elastic collisions and no intermolecular forces. How valid is this for real gases?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'pV=\u2153Nm\u27e8c\u00b2\u27e9. \u00bdm\u27e8c\u00b2\u27e9=3kT/2. c_rms=\u221a(3kT/m). Pressure from molecular impacts on walls.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-kt', prompt: 'State the kinetic theory equation.' }], summaryText: 'pV=\u2153Nm<c\u00b2>. \u00bdm<c\u00b2>=3kT/2. c_rms=\u221a(3kT/m).', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 8', detail: 'Kinetic theory', year: '2021', source: 'Pearson Edexcel', tags: ['kinetic theory'] }],
};
