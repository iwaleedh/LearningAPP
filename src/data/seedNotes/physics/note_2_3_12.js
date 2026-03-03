export const note_physics_2_3_12 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe Core Practical 6: determination of refractive index of a material using Snell\'s law.' }, terms: ['core practical', 'refractive index'] },
    { id: 'h-cp6', type: 'heading', data: { text: 'Core Practical 6: Refractive Index', level: 2 }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Method', text: '1. Place a glass block on paper, trace outline.\n2. Direct a ray at the block at various angles.\n3. Mark entry and exit points using pins.\n4. Measure \u03b8\u2081 (angle of incidence) and \u03b8\u2082 (angle of refraction).\n5. Plot sin \u03b8\u2081 vs sin \u03b8\u2082 \u2192 straight line.\n6. Gradient = n (refractive index).' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can describe the refraction practical', checked: false }, { text: 'I can find n from a graph', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Plotting sin\u03b8\u2081 vs sin\u03b8\u2082 linearises Snell\'s law, giving n as the gradient. This reduces random error compared to single measurements.\n\nApply: Data: \u03b8\u2081=30\u00b0 gives \u03b8\u2082=19.5\u00b0, \u03b8\u2081=50\u00b0 gives \u03b8\u2082=30.7\u00b0. Calculate n for each.\n\nAnalyze: Why is a graphical method better than a single angle measurement?\n\nEvaluate: This method assumes parallel faces on the glass block. How would a prism affect your results?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Trace rays through glass block. Measure \u03b8\u2081 and \u03b8\u2082. Plot sin\u03b8\u2081 vs sin\u03b8\u2082: gradient=n. Multiple angles reduce error.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'callout-key', prompt: 'Describe the method for finding refractive index.' },
  ], summaryText: 'Glass block, trace rays. sin\u03b8\u2081 vs sin\u03b8\u2082: gradient=n.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 CP6', detail: 'Refractive index determination', year: '2021', source: 'Pearson Edexcel', tags: ['practical', 'refraction'] }],
};
