export const note_physics_4_6_6 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand electromagnetic induction; explain how a changing flux linkage induces an EMF.' }, terms: ['electromagnetic induction'] },
    { id: 'h-emi', type: 'heading', data: { text: 'Electromagnetic Induction', level: 2 }, terms: [] },
    { id: 'p-emi', type: 'paragraph', data: { text: 'An EMF is induced whenever the magnetic flux linkage through a circuit changes. This can happen by: moving a conductor through a field, changing the area, changing B, or rotating the coil.' }, terms: [] },
    { id: 'eq-emf', type: 'equation', data: { html: '\u03b5 = BLv', caption: 'EMF for a straight conductor moving at speed v' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can explain how EMF is induced', checked: false }, { text: 'I can calculate EMF from BLv', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: It is the CHANGE in flux linkage that induces EMF, not the flux itself.\n\nApply: A 0.3 m wire moves at 5 m/s through a 0.4 T field. Calculate EMF.\n\nAnalyze: Why does a stationary conductor in a constant field not generate EMF?\n\nEvaluate: Generators convert mechanical to electrical energy. Discuss the role of induction in power generation.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Changing flux linkage induces EMF. \u03b5=BLv for moving conductor. Change B, A, or \u03b8 to induce.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-emf', prompt: 'State \u03b5=BLv and when it applies.' }], summaryText: 'Changing flux\u2192EMF. \u03b5=BLv.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 6', detail: 'Induction', year: '2021', source: 'Pearson Edexcel', tags: ['induction'] }],
};
