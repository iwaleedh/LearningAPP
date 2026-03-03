export const note_physics_4_6_0 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define electric field strength and electric potential; sketch field patterns for point charges and parallel plates.' }, terms: ['electric field', 'potential'] },
    { id: 'h-ef', type: 'heading', data: { text: 'Electric Field Strength and Potential', level: 2 }, terms: [] },
    { id: 'eq-E', type: 'equation', data: { html: 'E = F/Q = V/d (uniform)', caption: 'Electric field strength (N/C or V/m)' }, terms: [] },
    { id: 'p-field', type: 'paragraph', data: { text: 'Electric field strength E is force per unit positive charge. For parallel plates: E=V/d (uniform). Field lines go from + to \u2212. Closer lines = stronger field. At a point charge: E = kQ/r\u00b2.' }, terms: [] },
    { id: 'p-pot', type: 'paragraph', data: { text: 'Electric potential V at a point = work done per unit charge bringing a positive test charge from infinity. V = kQ/r for a point charge. Equipotential lines are perpendicular to field lines.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can define E and V', checked: false }, { text: 'I can sketch field patterns', checked: false }, { text: 'I can use E=V/d and E=kQ/r\u00b2', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: E = \u2212dV/dr. The field points from high to low potential, like a hill for positive charges.\n\nApply: Parallel plates 5 cm apart with 500 V across them. Find E and force on an electron.\n\nAnalyze: Why are equipotentials perpendicular to field lines?\n\nEvaluate: Compare gravity and electric fields: similarities (inverse square) and differences (attractive only vs both).' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'E=F/Q=V/d (uniform). E=kQ/r\u00b2 (radial). V=kQ/r. Field: +\u2192\u2212. E=\u2212dV/dr. Equipotentials \u22a5 field lines.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-E', prompt: 'Define electric field strength.' }], summaryText: 'E=F/Q=V/d. E=kQ/r\u00b2. V=kQ/r.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 6', detail: 'Electric fields', year: '2021', source: 'Pearson Edexcel', tags: ['electric field'] }],
};
