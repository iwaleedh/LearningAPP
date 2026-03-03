export const note_physics_3_3A_2 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Select appropriate range, resolution and calibration for measuring instruments; understand sensitivity.' }, terms: ['range', 'resolution', 'calibration'] },
    { id: 'h-inst', type: 'heading', data: { text: 'Range, Resolution and Calibration', level: 2 }, terms: [] },
    { id: 'list-defs', type: 'list', data: { style: 'unordered', items: ['Range: the span of values an instrument can measure', 'Resolution: the smallest change an instrument can detect', 'Calibration: checking the instrument reads correctly against a known standard', 'Sensitivity: how much the reading changes per unit change in measured quantity'] }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can define range, resolution and calibration', checked: false }, { text: 'I can select instruments with appropriate range and resolution', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Resolution limits the smallest detectable change. An instrument with too large a range for the measurement has poor resolution relative to the reading.\n\nApply: Measuring 5.0 cm with a 30 cm ruler (1mm resolution) vs a 10 cm vernier (0.1mm). Compare % uncertainties.\n\nAnalyze: Why is calibration especially important for electronic sensors?\n\nEvaluate: High resolution does not guarantee high accuracy. Explain with an example of a systematic error.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Range: span of measurement. Resolution: smallest detectable change. Calibrate against known standard. Higher resolution \u2260 higher accuracy.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'list-defs', prompt: 'Define range, resolution, calibration and sensitivity.' }], summaryText: 'Range=span. Resolution=smallest change. Calibrate=check standard.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 WPH13', detail: 'Instrument selection', year: '2021', source: 'Pearson Edexcel', tags: ['instruments'] }],
};
