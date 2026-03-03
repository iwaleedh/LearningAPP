export const note_physics_2_4_1 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define resistance and resistivity; understand factors affecting resistance; apply R = \u03c1L/A.' }, terms: ['resistance', 'resistivity'] },
    { id: 'h-res', type: 'heading', data: { text: 'Resistance and Resistivity', level: 2 }, terms: [] },
    { id: 'eq-ohm', type: 'equation', data: { html: 'V = IR', caption: 'Ohm\'s law: V = current \u00d7 resistance' }, terms: [] },
    { id: 'eq-rho', type: 'equation', data: { html: 'R = \u03c1L/A', caption: 'Resistance = resistivity \u00d7 length / cross-sectional area' }, terms: [] },
    { id: 'p-res', type: 'paragraph', data: { text: 'Resistance (R) in ohms (\u03a9). Resistivity (\u03c1) in \u03a9 m \u2014 a material property. R increases with length, decreases with area. Temperature also affects R: for metals, R increases with T; for thermistors (NTC), R decreases with T.' }, terms: ['resistivity'] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can apply V=IR', checked: false }, { text: 'I can use R=\u03c1L/A', checked: false }, { text: 'I can explain how temperature affects resistance', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Resistivity is intrinsic to the material; resistance depends on geometry too. Metals have low \u03c1; insulators have very high \u03c1.\n\nApply: Copper wire: \u03c1=1.7\u00d710\u207b\u2078 \u03a9m, L=5 m, d=0.5 mm. Find R.\n\nAnalyze: Why does resistance of metals increase with temperature? (Hint: lattice vibrations scatter electrons.)\n\nEvaluate: Superconductors have \u03c1=0 below a critical temperature. Discuss practical applications and limitations.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'V=IR. R=\u03c1L/A (\u03c1 in \u03a9m). Metal: R\u2191 with T. Thermistor (NTC): R\u2193 with T. Resistivity is a material property.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-rho', prompt: 'State the equation linking R, \u03c1, L and A.' },
  ], summaryText: 'V=IR. R=\u03c1L/A. Metal R\u2191 with T. \u03c1 is material property.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 4', detail: 'Resistance and resistivity', year: '2021', source: 'Pearson Edexcel', tags: ['resistance'] }],
};
