export const note_physics_2_3_6 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand refraction; apply Snell\'s law; calculate refractive index from speeds and angles.' }, terms: ['refraction', 'Snell law', 'refractive index'] },
    { id: 'h-refr', type: 'heading', data: { text: 'Refraction and Refractive Index', level: 2 }, terms: [] },
    { id: 'eq-snell', type: 'equation', data: { html: 'n\u2081 sin \u03b8\u2081 = n\u2082 sin \u03b8\u2082', caption: 'Snell\'s Law' }, terms: [] },
    { id: 'eq-n', type: 'equation', data: { html: 'n = c / v', caption: 'Refractive index = speed in vacuum / speed in medium' }, terms: [] },
    { id: 'p-refr', type: 'paragraph', data: { text: 'Refraction occurs when a wave changes speed at a boundary. The wave bends towards the normal when entering a denser medium (slower speed) and away from normal when entering a less dense medium.' }, terms: ['refraction'] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can apply Snell\'s law', checked: false }, { text: 'I can calculate refractive index', checked: false }, { text: 'I can predict the direction of bending', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Refraction is caused by a change in wave speed. Frequency stays constant; wavelength and speed change.\n\nApply: Light enters glass (n=1.5) at 40\u00b0. Calculate angle of refraction.\n\nAnalyze: Why does frequency remain constant during refraction?\n\nEvaluate: Fibre optics use total internal reflection rather than refraction. What advantages does this provide?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'n\u2081sin\u03b8\u2081 = n\u2082sin\u03b8\u2082. n=c/v. Bends towards normal into denser medium. f constant, v and \u03bb change.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-snell', prompt: 'State Snell\'s law.' },
    { id: 'cue-2', blockId: 'eq-n', prompt: 'Define refractive index.' },
  ], summaryText: 'n\u2081sin\u03b8\u2081=n\u2082sin\u03b8\u2082. n=c/v. f constant.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 3', detail: 'Refraction', year: '2021', source: 'Pearson Edexcel', tags: ['refraction'] }],
};
