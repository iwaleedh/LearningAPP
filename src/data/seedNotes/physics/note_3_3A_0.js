export const note_physics_3_3A_0 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand IAS practical methods from Units 1 and 2; identify techniques for measuring length, mass, time, temperature, voltage and current.' }, terms: ['practical skills'] },
    { id: 'h-methods', type: 'heading', data: { text: 'IAS Practical Methods', level: 2 }, terms: [] },
    { id: 'table-inst', type: 'comparisonTable', data: { headers: ['Quantity', 'Instrument', 'Resolution'], rows: [['Length', 'Ruler / Vernier / Micrometer', '1mm / 0.1mm / 0.01mm'], ['Mass', 'Balance', '0.01g'], ['Time', 'Stopwatch / Light gates', '0.01s / 0.001s'], ['Temperature', 'Thermometer / Thermocouple', '0.5\u00b0C / 0.1\u00b0C'], ['Voltage', 'Voltmeter / CRO', '0.01V'], ['Current', 'Ammeter', '0.01A']], caption: 'Common instruments and their typical resolution' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can select appropriate instruments', checked: false }, { text: 'I can state resolution of common instruments', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Choosing the right instrument depends on the quantity, range, and precision needed.\n\nApply: You need to measure a wire diameter of ~0.3 mm. Which instrument gives the best precision?\n\nAnalyze: Why is a micrometer preferred over a ruler for small dimensions? Quantify the improvement in % uncertainty.\n\nEvaluate: Digital instruments give more decimal places but are they always more accurate? Discuss calibration.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Select instruments by quantity and precision needed. Ruler: 1mm, vernier: 0.1mm, micrometer: 0.01mm. Electronic timing reduces human error.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'table-inst', prompt: 'State instruments and resolutions for length, mass and time.' }], summaryText: 'Ruler 1mm, vernier 0.1mm, micrometer 0.01mm. Balance 0.01g. Stopwatch 0.01s.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 WPH13', detail: 'Practical methods', year: '2021', source: 'Pearson Edexcel', tags: ['practical'] }],
};
