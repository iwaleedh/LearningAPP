export const note_physics_2_4_0 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define current, charge, potential difference and electromotive force; apply Q = It and V = W/Q.' }, terms: ['current', 'charge', 'potential difference'] },
    { id: 'h-basics', type: 'heading', data: { text: 'Current, Charge and Potential Difference', level: 2 }, terms: [] },
    { id: 'eq-q', type: 'equation', data: { html: 'Q = It', caption: 'Charge = current \u00d7 time (coulombs)' }, terms: [] },
    { id: 'eq-v', type: 'equation', data: { html: 'V = W/Q', caption: 'Potential difference = energy transferred per unit charge (volts)' }, terms: [] },
    { id: 'list-defs', type: 'list', data: { style: 'unordered', items: ['Current (I): rate of flow of charge, in amperes (A). I = \u0394Q/\u0394t', 'Charge (Q): measured in coulombs. 1 C = 1 A \u00d7 1 s', 'Potential difference (V): energy transferred per unit charge between two points (V = J/C)', 'EMF (\u03b5): energy transferred per unit charge BY the source (total energy given to charge)'] }, terms: [] },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Conventional vs Electron Flow', text: 'Conventional current flows from + to \u2212. Electrons actually flow from \u2212 to +. In metals, current is carried by free (delocalised) electrons.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can define current, charge, pd and emf', checked: false }, { text: 'I can apply Q=It and V=W/Q', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Current is charge flow rate; pd is energy per charge transferred to components; emf is energy per charge from the source.\n\nApply: A 3 A current flows for 2 minutes. Calculate the charge. If pd = 12 V, find energy transferred.\n\nAnalyze: Why is EMF not actually a force? Discuss the historical naming.\n\nEvaluate: In a complete circuit, energy is conserved. Trace the energy changes from battery to bulb to surroundings.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Q=It. V=W/Q. Current=charge flow rate. PD=energy per charge to component. EMF=energy per charge from source. Conventional current: + to \u2212.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-q', prompt: 'Define current and state Q=It.' },
    { id: 'cue-2', blockId: 'list-defs', prompt: 'Distinguish pd from emf.' },
  ], summaryText: 'Q=It. V=W/Q. Current=\u0394Q/\u0394t. PD vs EMF.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 4', detail: 'Current, charge, pd', year: '2021', source: 'Pearson Edexcel', tags: ['electricity'] }],
};
