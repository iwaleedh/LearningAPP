export const note_physics_5_9_3 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Compare alpha, beta and gamma radiation properties; understand ionising power, penetration and deflection.' }, terms: ['alpha', 'beta', 'gamma'] },
    { id: 'h-abg', type: 'heading', data: { text: 'Alpha, Beta and Gamma Properties', level: 2 }, terms: [] },
    { id: 'table-abg', type: 'comparisonTable', data: { headers: ['Property', 'Alpha (\u03b1)', 'Beta (\u03b2)', 'Gamma (\u03b3)'], rows: [['Nature', 'He-4 nucleus', 'Electron', 'EM wave'], ['Charge', '+2', '\u22121', '0'], ['Ionising', 'Strongest', 'Moderate', 'Weakest'], ['Penetration', 'Paper stops', 'Few mm Al', 'Thick lead/concrete'], ['Deflection in E/B', 'Small (heavy)', 'Large (light)', 'None']], caption: 'Comparison of radiation types' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can compare \u03b1, \u03b2, \u03b3 properties', checked: false }, { text: 'I can identify radiation type from absorption data', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: High ionising power = short range (energy lost quickly). Low ionising power = long range.\n\nApply: A source is unaffected by paper but stopped by aluminium. Identify the radiation type.\n\nAnalyze: Why is alpha most ionising but least penetrating?\n\nEvaluate: Alpha is harmless externally but lethal internally. Discuss the implications for safety.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: '\u03b1: He-4, +2, strong ioniser, stopped by paper. \u03b2: electron, \u22121, moderate, stopped by Al. \u03b3: EM wave, 0, weak ioniser, lead/concrete.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'table-abg', prompt: 'Compare alpha, beta and gamma radiation.' }], summaryText: '\u03b1: paper. \u03b2: Al. \u03b3: lead. Ionising: \u03b1>\u03b2>\u03b3. Penetration: \u03b3>\u03b2>\u03b1.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 9', detail: 'Radiation types', year: '2021', source: 'Pearson Edexcel', tags: ['radiation'] }],
};
