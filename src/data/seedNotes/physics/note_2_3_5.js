export const note_physics_2_3_5 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define intensity; understand the inverse square law for radiation; relate intensity to amplitude.' }, terms: ['intensity', 'inverse square law'] },
    { id: 'h-int', type: 'heading', data: { text: 'Intensity of Radiation', level: 2 }, terms: [] },
    { id: 'eq-int', type: 'equation', data: { html: 'I = P / A = P / 4\u03c0r\u00b2', caption: 'Intensity = power per unit area (W/m\u00b2)' }, terms: [] },
    { id: 'p-isq', type: 'paragraph', data: { text: 'For a point source radiating uniformly: I = P/4\u03c0r\u00b2. Intensity follows an inverse square law with distance. Also, intensity is proportional to amplitude squared: I \u221d A\u00b2.' }, terms: ['inverse square law'] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can define intensity', checked: false }, { text: 'I can apply the inverse square law', checked: false }, { text: 'I know I \u221d A\u00b2', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: As a wave spreads from a point source, the same power is distributed over a larger sphere (4\u03c0r\u00b2), so I decreases.\n\nApply: A 60 W lamp. Find intensity at 3 m.\n\nAnalyze: If distance doubles, what happens to intensity and amplitude?\n\nEvaluate: The inverse square law assumes no absorption. When does this assumption fail?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'I=P/A=P/4\u03c0r\u00b2 (W/m\u00b2). Inverse square law. I \u221d A\u00b2. Double distance \u2192 quarter intensity.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-int', prompt: 'Define intensity and state the inverse square law.' },
  ], summaryText: 'I=P/4\u03c0r\u00b2. I\u221d1/r\u00b2. I\u221dA\u00b2.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 3', detail: 'Intensity', year: '2021', source: 'Pearson Edexcel', tags: ['intensity'] }],
};
