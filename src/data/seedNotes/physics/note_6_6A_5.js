export const note_physics_6_6A_5 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Compound uncertainties in multi-step calculations; evaluate overall experimental reliability.' }, terms: ['compounded uncertainty'] },
    { id: 'h-comp', type: 'heading', data: { text: 'Compounded Uncertainty Evaluation', level: 2 }, terms: [] },
    { id: 'list-rules', type: 'list', data: { style: 'unordered', items: ['Addition/subtraction: add ABSOLUTE uncertainties', 'Multiplication/division: add PERCENTAGE uncertainties', 'Powers: MULTIPLY percentage uncertainty by the power', 'Overall % uncertainty identifies the weakest measurement', 'Compare with accepted value to assess result validity'] }, terms: [] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: '\u03c1 = m/(\u03c0(d/2)\u00b2L). m=0.50\u00b10.01 kg, d=10.0\u00b10.1 mm, L=0.500\u00b10.001 m.\n%m=2%, %d=1% (but d\u00b2 so 2%), %L=0.2%\n%\u03c1 = 2+2(1)+0.2 = 4.2%' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can compound uncertainties correctly', checked: false }, { text: 'I can identify the dominant uncertainty', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: The measurement with the largest % uncertainty dominates. Improving it gives the best return.\n\nApply: In R=V/I, V=6.0\u00b10.1V, I=0.50\u00b10.02A. Find R and its absolute uncertainty.\n\nAnalyze: Why does a squared quantity double its % contribution to the total uncertainty?\n\nEvaluate: Your result for g is 9.5\u00b10.4 m/s\u00b2. Is this consistent with 9.81? How do you decide?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: '+/\u2212: add absolute. \u00d7/\u00f7: add %. Powers: multiply %. Largest % dominates. Compare result\u00b1uncertainty with accepted value.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'list-rules', prompt: 'State the rules for combining uncertainties.' }], summaryText: '+/\u2212: absolute. \u00d7/\u00f7: %. Powers: multiply %. Largest % dominates.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 WPH16', detail: 'Combined uncertainties', year: '2021', source: 'Pearson Edexcel', tags: ['uncertainty'] }],
};
