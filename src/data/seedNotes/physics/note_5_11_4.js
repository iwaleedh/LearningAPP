export const note_physics_5_11_4 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand stellar parallax and standard candles as distance measurement methods.' }, terms: ['parallax', 'standard candles'] },
    { id: 'h-dist', type: 'heading', data: { text: 'Parallax and Standard Candles', level: 2 }, terms: [] },
    { id: 'p-par', type: 'paragraph', data: { text: 'Stellar parallax: nearby stars appear to shift against background stars as Earth orbits. d (parsec) = 1/p (arcseconds). 1 pc \u2248 3.26 ly. Limited to ~100 pc from ground.' }, terms: [] },
    { id: 'p-sc', type: 'paragraph', data: { text: 'Standard candles: objects with known luminosity (Cepheid variables, Type Ia supernovae). Measure intensity, use I=L/(4\u03c0d\u00b2) to find d. Extends distance measurement much further.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can explain parallax and calculate d=1/p', checked: false }, { text: 'I can explain standard candles', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: The cosmic distance ladder uses progressively less direct methods for greater distances.\n\nApply: A star has parallax angle 0.05 arcsec. Find its distance in pc and ly.\n\nAnalyze: Why does parallax only work for nearby stars?\n\nEvaluate: Cepheids have a period-luminosity relationship. Discuss why this makes them excellent standard candles.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Parallax: d=1/p (pc). Limited to ~100 pc. Standard candles: known L, measure I, find d. Cepheids and Type Ia SNe.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'p-par', prompt: 'Explain stellar parallax and state d=1/p.' }], summaryText: 'd=1/p (pc). Standard candles: known L, measure I\u2192d.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 11', detail: 'Distance methods', year: '2021', source: 'Pearson Edexcel', tags: ['parallax'] }],
};
