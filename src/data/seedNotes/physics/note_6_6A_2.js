export const note_physics_6_6A_2 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Implement experiments carefully; critique measurement techniques and identify improvements.' }, terms: ['implementation', 'critique'] },
    { id: 'h-impl', type: 'heading', data: { text: 'Implementation and Critique', level: 2 }, terms: [] },
    { id: 'list-crit', type: 'list', data: { style: 'unordered', items: ['Are results precise (small spread)?', 'Are results accurate (close to accepted value)?', 'Are there anomalous results? Should they be excluded?', 'Was the range of IV sufficient?', 'Were there enough repeats?', 'Was the correct graph plotted?'] }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can distinguish precision from accuracy', checked: false }, { text: 'I can critique experimental methods', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Precision = reproducibility. Accuracy = closeness to true value. High precision \u2260 high accuracy.\n\nApply: Results cluster tightly but are all 10% too high. Is this precise? Accurate?\n\nAnalyze: What type of error causes high precision but low accuracy?\n\nEvaluate: Suggest three specific improvements for a given experiment to increase both precision and accuracy.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Precise: small spread. Accurate: close to true value. Critique: range, repeats, anomalies, graph choice. Suggest improvements.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'list-crit', prompt: 'List questions to critique an experiment.' }], summaryText: 'Precise=small spread. Accurate=close to true. Check range, repeats, anomalies.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 WPH16', detail: 'Critique', year: '2021', source: 'Pearson Edexcel', tags: ['evaluation'] }],
};
