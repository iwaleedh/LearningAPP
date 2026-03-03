export const note_physics_1_1_1 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Interpret and sketch displacement-time, velocity-time and acceleration-time graphs; deduce quantities from gradients and areas.' }, terms: ['motion graphs'] },
    { id: 'h-graphs', type: 'heading', data: { text: 'Motion Graphs', level: 2 }, terms: [] },
    { id: 'p-dt', type: 'paragraph', data: { text: 'Displacement-time (s-t) graph: gradient = velocity. Straight line = constant velocity. Curve = changing velocity. Horizontal = stationary.' }, terms: [] },
    { id: 'p-vt', type: 'paragraph', data: { text: 'Velocity-time (v-t) graph: gradient = acceleration. Area under graph = displacement. Straight line = constant acceleration. Horizontal = constant velocity.' }, terms: [] },
    { id: 'p-at', type: 'paragraph', data: { text: 'Acceleration-time (a-t) graph: area under graph = change in velocity. Horizontal = constant acceleration.' }, terms: [] },
    { id: 'table-graphs', type: 'comparisonTable', data: { headers: ['Graph', 'Gradient', 'Area under curve'], rows: [['s-t', 'Velocity', '\u2014'], ['v-t', 'Acceleration', 'Displacement'], ['a-t', '\u2014', 'Change in velocity']], caption: 'Summary of motion graph relationships' }, terms: [] },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tips', text: '\u2022 Area below time axis on v-t graph = negative displacement.\n\u2022 Gradient of curved s-t graph at a point = instantaneous velocity (draw tangent).\n\u2022 Constant acceleration on s-t graph gives a parabola.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can interpret gradients of s-t and v-t graphs', checked: false }, { text: 'I can calculate displacement from area under v-t graph', checked: false }, { text: 'I can sketch graphs for different motions', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Motion graphs visually represent kinematics. Gradient and area connect position, velocity, and acceleration.\n\nApply: A v-t graph shows 0 to 20 m/s over 5 s, then horizontal for 3 s. Calculate total displacement.\n\nAnalyze: Why does a ball thrown upward have a linear v-t graph through zero?\n\nEvaluate: A student claims area under a-t graph gives displacement. Explain why this is incorrect.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 's-t: gradient=velocity. v-t: gradient=acceleration, area=displacement. a-t: area=\u0394v. Use tangents for instantaneous values on curves.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'table-graphs', prompt: 'What does the gradient and area represent on each motion graph?' },
    { id: 'cue-2', blockId: 'p-vt', prompt: 'How do you find displacement from a v-t graph?' },
  ], summaryText: 's-t gradient=v; v-t gradient=a, area=s; a-t area=\u0394v.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 1', detail: 'Motion graphs', year: '2021', source: 'Pearson Edexcel', tags: ['kinematics', 'graphs'] }],
};
