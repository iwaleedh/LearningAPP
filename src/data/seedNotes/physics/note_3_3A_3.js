export const note_physics_3_3A_3 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Implement experiments carefully: take repeat readings, record data in tables with units and uncertainties.' }, terms: ['implementation', 'measurement'] },
    { id: 'h-impl', type: 'heading', data: { text: 'Implementation and Measurement Quality', level: 2 }, terms: [] },
    { id: 'list-quality', type: 'list', data: { style: 'unordered', items: ['Take at least 3 repeat readings and calculate mean', 'Record all raw data in a table with units in headers', 'Use appropriate significant figures (match instrument precision)', 'Note anomalous results but do not include in mean', 'Record uncertainties: \u00b1 half the resolution for single readings'] }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I take repeat readings and calculate mean', checked: false }, { text: 'I record data with correct units and sig figs', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Repeat readings reduce random error. The spread (range/2) gives an estimate of uncertainty in the mean.\n\nApply: Three measurements of time: 2.34, 2.38, 2.31 s. Calculate mean and uncertainty.\n\nAnalyze: Why does taking more repeats improve reliability but not accuracy?\n\nEvaluate: A result is precise but not accurate. Suggest what type of error is present.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Repeat 3+, calculate mean. Uncertainty = range/2 or half resolution. Tables with units. Correct sig figs. Ignore anomalies in mean.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'list-quality', prompt: 'How do you improve measurement quality?' }], summaryText: 'Repeat 3+, mean, uncertainty=range/2, tables with units.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 WPH13', detail: 'Implementation', year: '2021', source: 'Pearson Edexcel', tags: ['measurement'] }],
};
