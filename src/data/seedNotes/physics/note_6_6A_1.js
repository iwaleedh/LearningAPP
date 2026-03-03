export const note_physics_6_6A_1 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Plan advanced experiments with multiple variables; design methods to test hypotheses and relationships.' }, terms: ['advanced planning'] },
    { id: 'h-plan', type: 'heading', data: { text: 'Advanced Experiment Planning', level: 2 }, terms: [] },
    { id: 'list-plan', type: 'list', data: { style: 'unordered', items: ['Formulate testable hypothesis', 'Design method to isolate variables', 'Select instruments with appropriate resolution', 'Plan data collection for graphical analysis', 'Consider safety and ethical issues'] }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can plan an experiment to test a hypothesis', checked: false }, { text: 'I can select appropriate graphical analysis', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Advanced planning requires predicting the mathematical relationship and choosing graphs that linearise it.\n\nApply: Plan an experiment to test if T\u00b2\u221dL for a pendulum. What graph would you plot?\n\nAnalyze: Why is it better to plot T\u00b2 vs L rather than T vs L?\n\nEvaluate: How many data points are needed for reliable straight-line fitting? Discuss minimum requirements.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Hypothesis \u2192 method \u2192 variables \u2192 instruments \u2192 graph plan. Linearise relationships. At least 6 data points.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'list-plan', prompt: 'List steps in advanced experiment planning.' }], summaryText: 'Hypothesis, method, variables, instruments, graph plan. 6+ data points.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 WPH16', detail: 'Advanced planning', year: '2021', source: 'Pearson Edexcel', tags: ['planning'] }],
};
