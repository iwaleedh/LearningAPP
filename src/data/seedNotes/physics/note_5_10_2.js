export const note_physics_5_10_2 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Sketch and interpret SHM graphs of displacement, velocity and acceleration against time.' }, terms: ['SHM graphs'] },
    { id: 'h-graphs', type: 'heading', data: { text: 'SHM Graphs', level: 2 }, terms: [] },
    { id: 'list-graphs', type: 'list', data: { style: 'unordered', items: ['x-t: sinusoidal, amplitude A, period T', 'v-t: cosine (90\u00b0 ahead of x), max velocity \u03c9A', 'a-t: negative sine (180\u00b0 ahead of x), max acceleration \u03c9\u00b2A', 'v-x: ellipse. v max at x=0, v=0 at x=\u00b1A', 'a-x: straight line through origin, gradient \u2212\u03c9\u00b2'] }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can sketch x-t, v-t and a-t graphs', checked: false }, { text: 'I can sketch v-x and a-x graphs', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Each graph is the derivative of the previous: x\u2192v\u2192a. a-x being linear confirms SHM.\n\nApply: Given x = 0.05cos(10t), sketch v-t and a-t graphs.\n\nAnalyze: Why is the a-x graph a test for SHM? What would a non-SHM a-x look like?\n\nEvaluate: In practice, oscillators are damped. How would this change the x-t graph?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'x-t: sine. v-t: cosine. a-t: \u2212sine. v-x: ellipse. a-x: straight line, gradient \u2212\u03c9\u00b2. Confirms SHM if a\u221dx towards equilibrium.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'list-graphs', prompt: 'Describe the shapes of SHM graphs.' }], summaryText: 'x:sine, v:cosine, a:\u2212sine. a-x: linear \u2192 confirms SHM.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 10', detail: 'SHM graphs', year: '2021', source: 'Pearson Edexcel', tags: ['SHM', 'graphs'] }],
};
