export const note_physics_5_10_0 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define simple harmonic motion; state the conditions for SHM and identify SHM systems.' }, terms: ['SHM'] },
    { id: 'h-shm', type: 'heading', data: { text: 'Simple Harmonic Motion', level: 2 }, terms: [] },
    { id: 'eq-shm', type: 'equation', data: { html: 'a = \u2212\u03c9\u00b2x', caption: 'Defining equation of SHM' }, terms: [] },
    { id: 'p-shm', type: 'paragraph', data: { text: 'SHM occurs when acceleration is proportional to displacement from equilibrium and directed towards it. Examples: mass-spring, pendulum (small angle), vibrating column. The negative sign means acceleration opposes displacement.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can define SHM', checked: false }, { text: 'I can identify SHM systems', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: a=\u2212\u03c9\u00b2x means a restoring force proportional to displacement. This produces constant-period oscillation.\n\nApply: Show that a mass on a spring satisfies a=\u2212\u03c9\u00b2x with \u03c9=\u221a(k/m).\n\nAnalyze: Why does a pendulum only show SHM for small angles?\n\nEvaluate: SHM is an idealisation. Discuss how damping modifies real oscillations.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'a=\u2212\u03c9\u00b2x. Acceleration \u221d displacement, towards equilibrium. Constant period. Examples: spring, pendulum.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-shm', prompt: 'State the defining equation of SHM.' }], summaryText: 'a=\u2212\u03c9\u00b2x. Restoring force \u221d displacement.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 10', detail: 'SHM', year: '2021', source: 'Pearson Edexcel', tags: ['SHM'] }],
};
