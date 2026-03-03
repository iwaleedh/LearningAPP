export const note_physics_4_6_2 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define capacitance; calculate charge stored, energy stored, and understand the effect of dielectrics.' }, terms: ['capacitance'] },
    { id: 'h-cap', type: 'heading', data: { text: 'Capacitance and Stored Energy', level: 2 }, terms: [] },
    { id: 'eq-cap', type: 'equation', data: { html: 'C = Q/V', caption: 'Capacitance in farads (F)' }, terms: [] },
    { id: 'eq-ecap', type: 'equation', data: { html: 'E = \u00bdQV = \u00bdCV\u00b2 = Q\u00b2/(2C)', caption: 'Energy stored in a capacitor' }, terms: [] },
    { id: 'p-cap', type: 'paragraph', data: { text: 'A capacitor stores charge and energy. C = Q/V (farads). In series: 1/C_t = 1/C\u2081+1/C\u2082. In parallel: C_t = C\u2081+C\u2082. A dielectric increases capacitance by reducing the electric field between plates.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate C, Q and V', checked: false }, { text: 'I can calculate energy stored', checked: false }, { text: 'I can combine capacitors', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: E=\u00bdCV\u00b2 comes from the area under a Q-V graph. A capacitor stores energy in the electric field.\n\nApply: A 100\u03bcF capacitor charged to 12V. Find Q and E stored.\n\nAnalyze: Why does capacitance in parallel add (opposite to resistance)? Think about plate area.\n\nEvaluate: Compare energy density of capacitors vs batteries. Why are capacitors used for short bursts?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'C=Q/V (F). E=\u00bdQV=\u00bdCV\u00b2. Series: 1/C adds. Parallel: C adds. Dielectric increases C.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-cap', prompt: 'Define capacitance and state energy stored.' }], summaryText: 'C=Q/V. E=\u00bdCV\u00b2. Series: 1/C adds. Parallel: C adds.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 6', detail: 'Capacitance', year: '2021', source: 'Pearson Edexcel', tags: ['capacitance'] }],
};
