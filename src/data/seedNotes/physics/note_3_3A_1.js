export const note_physics_3_3A_1 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Plan experiments: select apparatus, identify variables (IV, DV, CV), write method, and predict expected results.' }, terms: ['planning', 'variables'] },
    { id: 'h-plan', type: 'heading', data: { text: 'Experiment Planning', level: 2 }, terms: [] },
    { id: 'list-plan', type: 'list', data: { style: 'unordered', items: ['Independent variable (IV): what you change', 'Dependent variable (DV): what you measure', 'Control variables (CV): what you keep constant', 'Risk assessment: identify hazards and precautions', 'Expected results: predict shape of graph or relationship'] }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can identify IV, DV and CVs', checked: false }, { text: 'I can write a clear method', checked: false }, { text: 'I can perform a risk assessment', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Good planning ensures valid, reliable results. Controlling variables isolates the effect of the IV on the DV.\n\nApply: Plan an experiment to investigate how length affects resistance of a wire. State IV, DV, CVs.\n\nAnalyze: Why must you control temperature when measuring resistance? How does this affect your method?\n\nEvaluate: A student plans to take only 3 data points. Assess whether this is sufficient for a reliable conclusion.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Plan: identify IV, DV, CVs. Select apparatus. Write step-by-step method. Include safety. Predict results.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'list-plan', prompt: 'Define IV, DV and CV.' }], summaryText: 'IV: change. DV: measure. CV: constant. Risk assess. Predict.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 WPH13', detail: 'Planning', year: '2021', source: 'Pearson Edexcel', tags: ['planning'] }],
};
