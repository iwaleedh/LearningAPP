export const note_physics_2_4_2 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Sketch and explain I-V characteristics of ohmic conductors, filament lamps, diodes, thermistors and LDRs.' }, terms: ['I-V characteristics'] },
    { id: 'h-iv', type: 'heading', data: { text: 'I-V Characteristics', level: 2 }, terms: [] },
    { id: 'table-iv', type: 'comparisonTable', data: { headers: ['Component', 'I-V Shape', 'Behaviour'], rows: [['Ohmic conductor', 'Straight line through origin', 'R constant, obeys Ohm\'s law'], ['Filament lamp', 'Curve flattening at high V', 'R increases as it heats up'], ['Diode', 'Near-zero below ~0.6V, steep above', 'Conducts in forward bias only'], ['Thermistor (NTC)', '\u2014', 'R decreases as temperature rises'], ['LDR', '\u2014', 'R decreases as light intensity increases']], caption: 'I-V characteristics of common components' }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Ohm\'s Law', text: 'A component obeys Ohm\'s law if I is directly proportional to V (at constant temperature). Only ohmic conductors have a linear I-V graph through the origin.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can sketch I-V graphs for 5 components', checked: false }, { text: 'I can explain why filament lamp curve is non-linear', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Ohm\'s law is a special case. Most components are non-ohmic because resistance changes with conditions (temperature, voltage).\n\nApply: A filament lamp draws 0.5A at 6V and 0.8A at 12V. Calculate R at each voltage. Is it ohmic?\n\nAnalyze: Why does a filament lamp\'s resistance increase at higher V? Use temperature effects on R.\n\nEvaluate: LEDs have a threshold voltage (~2V). Compare LED and filament lamp for efficiency and I-V behaviour.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Ohmic: linear I-V, constant R. Filament: R increases with T (curved). Diode: forward bias >0.6V. Thermistor: R\u2193 with T. LDR: R\u2193 with light.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'table-iv', prompt: 'Sketch I-V graphs for an ohmic conductor, filament lamp and diode.' },
  ], summaryText: 'Ohmic: linear. Filament: curved (R\u2191). Diode: threshold ~0.6V.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 4', detail: 'I-V characteristics', year: '2021', source: 'Pearson Edexcel', tags: ['I-V'] }],
};
