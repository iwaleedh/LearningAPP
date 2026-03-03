export const note_physics_5_8_4 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe Core Practical 12: calibration of a thermistor for use as a thermometer.' }, terms: ['core practical', 'thermistor'] },
    { id: 'h-cp12', type: 'heading', data: { text: 'Core Practical 12: Thermistor Calibration', level: 2 }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Method', text: '1. Place NTC thermistor in water bath with thermometer.\n2. Heat water gradually, recording T and R at regular intervals.\n3. Plot R vs T curve (or ln R vs 1/T for linear graph).\n4. Calibration curve allows thermistor to be used as thermometer.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can describe the calibration method', checked: false }, { text: 'I can explain why ln R vs 1/T gives a straight line', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: NTC thermistor: R decreases exponentially with T. ln R vs 1/T linearises this.\n\nApply: Use a calibration graph to find T when R=2.5 k\u03a9.\n\nAnalyze: Why is the thermistor response faster than a mercury thermometer?\n\nEvaluate: Compare thermistor and thermocouple for temperature measurement accuracy and range.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'NTC thermistor: R\u2193 as T\u2191. Calibrate by plotting R vs T. ln R vs 1/T gives linear graph. Thermistor = fast response sensor.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'callout-key', prompt: 'Describe thermistor calibration method.' }], summaryText: 'NTC: R\u2193 as T\u2191. Plot R vs T or ln R vs 1/T.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 CP12', detail: 'Thermistor calibration', year: '2021', source: 'Pearson Edexcel', tags: ['practical'] }],
};
