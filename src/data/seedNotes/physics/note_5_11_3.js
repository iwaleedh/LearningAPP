export const note_physics_5_11_3 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define luminosity, intensity and their relationship with distance; apply I=L/(4\u03c0d\u00b2).' }, terms: ['luminosity', 'intensity'] },
    { id: 'h-li', type: 'heading', data: { text: 'Luminosity, Intensity and Distance', level: 2 }, terms: [] },
    { id: 'eq-li', type: 'equation', data: { html: 'I = L/(4\u03c0d\u00b2)', caption: 'Intensity = luminosity / surface area of sphere' }, terms: [] },
    { id: 'p-li', type: 'paragraph', data: { text: 'Luminosity L: total power radiated (W). Intensity I: power per unit area at distance d (W/m\u00b2). Follows inverse square law. If we know L and measure I, we can find d.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can distinguish luminosity and intensity', checked: false }, { text: 'I can calculate distance from L and I', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Intensity drops as 1/d\u00b2 because L spreads over larger spheres. This lets us measure stellar distances.\n\nApply: Star with L = 3.8\u00d710\u00b2\u2076 W has I = 1.4\u00d710\u207b\u00b3 W/m\u00b2 at Earth. Find d.\n\nAnalyze: Why does this method assume no absorption between star and observer?\n\nEvaluate: Interstellar dust reduces I. How does this affect distance estimates?  What correction is needed?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'L=total power. I=L/(4\u03c0d\u00b2). I\u221d1/d\u00b2. Knowing L and I gives d. Assumes no absorption.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-li', prompt: 'State I=L/(4\u03c0d\u00b2) and explain.' }], summaryText: 'I=L/(4\u03c0d\u00b2). Inverse square. Distance from L and I.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 11', detail: 'Luminosity and distance', year: '2021', source: 'Pearson Edexcel', tags: ['luminosity'] }],
};
