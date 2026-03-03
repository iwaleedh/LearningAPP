export const note_physics_6_6A_4 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Distinguish accuracy, precision and sensitivity; understand their roles in experimental design.' }, terms: ['accuracy', 'precision', 'sensitivity'] },
    { id: 'h-aps', type: 'heading', data: { text: 'Accuracy, Precision and Sensitivity', level: 2 }, terms: [] },
    { id: 'table-aps', type: 'comparisonTable', data: { headers: ['Term', 'Meaning', 'Improved by'], rows: [['Accuracy', 'Closeness to true value', 'Better technique, calibration'], ['Precision', 'Closeness of repeats to each other', 'Better instrument, more repeats'], ['Sensitivity', 'Smallest detectable change', 'Higher resolution instrument']], caption: 'Key measurement qualities' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can distinguish accuracy, precision and sensitivity', checked: false }, { text: 'I can suggest how to improve each', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: These three qualities are independent. An instrument can be precise but inaccurate (systematic error).\n\nApply: A thermometer always reads 1.5\u00b0C too high but readings agree to \u00b10.1\u00b0C. Classify its accuracy and precision.\n\nAnalyze: Can high sensitivity compensate for poor accuracy? Explain.\n\nEvaluate: In designing an experiment, which is more important: accuracy or precision? Discuss with examples.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Accuracy: close to true. Precision: repeatable. Sensitivity: smallest detectable change. Independent qualities. Improve by calibration, repeats, better instruments.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'table-aps', prompt: 'Define accuracy, precision and sensitivity.' }], summaryText: 'Accurate=true value. Precise=repeatable. Sensitive=small changes detected.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 WPH16', detail: 'Measurement qualities', year: '2021', source: 'Pearson Edexcel', tags: ['measurement'] }],
};
