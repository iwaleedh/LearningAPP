export const note_physics_3_3A_5 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Distinguish systematic and random errors; calculate absolute, percentage and combined uncertainties; evaluate experimental methods.' }, terms: ['uncertainty', 'systematic error', 'random error'] },
    { id: 'h-unc', type: 'heading', data: { text: 'Uncertainty and Error Analysis', level: 2 }, terms: [] },
    { id: 'table-errors', type: 'comparisonTable', data: { headers: ['Type', 'Cause', 'Effect', 'Reduction'], rows: [['Random', 'Unpredictable variation', 'Scatter around true value', 'Repeat and average'], ['Systematic', 'Consistent offset', 'All readings shifted same way', 'Recalibrate; change method']], caption: 'Types of experimental error' }, terms: [] },
    { id: 'list-unc', type: 'list', data: { style: 'unordered', items: ['Absolute uncertainty: \u00b1 value in same units as measurement', 'Percentage uncertainty = (absolute / measured) \u00d7 100%', 'Adding/subtracting: add absolute uncertainties', 'Multiplying/dividing: add percentage uncertainties', 'Powers: multiply percentage uncertainty by the power'] }, terms: [] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'R = V/I. V = 6.0\u00b10.1V, I = 0.50\u00b10.02A.\n%unc(V) = 0.1/6.0\u00d7100 = 1.67%\n%unc(I) = 0.02/0.5\u00d7100 = 4.0%\n%unc(R) = 1.67+4.0 = 5.67%\nR = 12\u00b10.68 \u03a9 (\u00b10.7 \u03a9)' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can distinguish random from systematic errors', checked: false }, { text: 'I can calculate percentage uncertainties', checked: false }, { text: 'I can combine uncertainties', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Uncertainties quantify confidence in a result. Combining uncertainties identifies the weakest measurement.\n\nApply: Calculate the percentage uncertainty in A=\u03c0(d/2)\u00b2 if d=0.50\u00b10.02 mm.\n\nAnalyze: In A=\u03c0(d/2)\u00b2, why does d dominate the overall uncertainty?\n\nEvaluate: Your result for g is 10.2\u00b10.5 m/s\u00b2. The accepted value is 9.81. Is your result consistent? Discuss.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Random: scatter, reduce by repeating. Systematic: offset, fix by recalibrating. %unc = abs/measured\u00d7100. Add/sub: add absolute. Mult/div: add %. Powers: multiply %.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'table-errors', prompt: 'Distinguish random and systematic errors.' },
    { id: 'cue-2', blockId: 'list-unc', prompt: 'How do you combine uncertainties for multiplication?' },
  ], summaryText: 'Random: repeat. Systematic: recalibrate. Add %unc for \u00d7/\u00f7. Multiply %unc by power.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 WPH13', detail: 'Uncertainties', year: '2021', source: 'Pearson Edexcel', tags: ['uncertainty'] }],
};
