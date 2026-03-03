export const note_physics_4_6_5 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define magnetic flux and flux linkage; calculate the force on a current-carrying conductor in a magnetic field.' }, terms: ['magnetic flux', 'flux linkage'] },
    { id: 'h-mag', type: 'heading', data: { text: 'Magnetic Flux and Forces', level: 2 }, terms: [] },
    { id: 'eq-flux', type: 'equation', data: { html: '\u03a6 = BA cos \u03b8', caption: 'Magnetic flux (Wb)' }, terms: [] },
    { id: 'eq-force', type: 'equation', data: { html: 'F = BIL sin \u03b8', caption: 'Force on current-carrying conductor' }, terms: [] },
    { id: 'p-flux', type: 'paragraph', data: { text: 'Magnetic flux density B (tesla, T) measures field strength. Flux \u03a6 = BA (when perpendicular). Flux linkage = N\u03a6 for N turns. Force on a wire: F = BIL (when \u22a5). Use Fleming\'s left-hand rule for direction.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate flux and flux linkage', checked: false }, { text: 'I can calculate force on a current-carrying wire', checked: false }, { text: 'I can use Fleming\'s left-hand rule', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Flux is a measure of how much field passes through an area. The force on a wire requires both current AND field to be non-zero and non-parallel.\n\nApply: A 0.5 m wire carries 3 A in a 0.2 T field at 90\u00b0. Find the force.\n\nAnalyze: Why is there no force when the wire is parallel to the field?\n\nEvaluate: Electric motors use F=BIL. How would you increase the torque produced?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: '\u03a6=BAcos\u03b8. F=BILsin\u03b8. Flux linkage=N\u03a6. Fleming\'s LHR for force direction. Force max when \u22a5.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-flux', prompt: 'Define magnetic flux.' }, { id: 'cue-2', blockId: 'eq-force', prompt: 'State F=BIL and when to use sin\u03b8.' }], summaryText: '\u03a6=BAcos\u03b8. F=BILsin\u03b8. N\u03a6=flux linkage.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 6', detail: 'Magnetic flux and forces', year: '2021', source: 'Pearson Edexcel', tags: ['magnetism'] }],
};
