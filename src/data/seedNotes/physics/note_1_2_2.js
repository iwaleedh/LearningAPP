export const note_physics_1_2_2 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'State and apply Hooke\'s Law; understand spring constant, elastic limit, and force-extension graphs.' }, terms: ['Hooke Law', 'spring constant'] },
    { id: 'h-hooke', type: 'heading', data: { text: 'Hooke\'s Law and Stiffness', level: 2 }, terms: [] },
    { id: 'eq-hooke', type: 'equation', data: { html: 'F = k\u0394x', caption: 'Force = spring constant \u00d7 extension' }, terms: [] },
    { id: 'p-hooke', type: 'paragraph', data: { text: 'Hooke\'s Law: the extension of a spring is directly proportional to the applied force, up to the limit of proportionality. Beyond the elastic limit, permanent deformation occurs. k is the spring constant (stiffness) in N/m.' }, terms: ['spring constant', 'elastic limit'] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Springs in Series and Parallel', text: 'Series: 1/k_total = 1/k\u2081 + 1/k\u2082 (softer overall)\nParallel: k_total = k\u2081 + k\u2082 (stiffer overall)' }, terms: [] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'A spring with k = 50 N/m is stretched by 0.2 m.\nF = k\u0394x = 50 \u00d7 0.2 = 10 N' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can state Hooke\'s Law', checked: false }, { text: 'I can calculate spring constant from F-x data', checked: false }, { text: 'I can identify the limit of proportionality and elastic limit on a graph', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Hooke\'s Law is a linear approximation valid only up to the limit of proportionality. The spring constant measures stiffness.\n\nApply: Two springs (k=40 N/m each) in parallel support a 10 N weight. Find the extension.\n\nAnalyze: On an F-x graph, distinguish limit of proportionality, elastic limit, and yield point. Why are they different?\n\nEvaluate: Rubber bands don\'t obey Hooke\'s Law. Does this make them useless in physics? Discuss their loading/unloading curves.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'F=k\u0394x (Hooke\'s Law, up to limit of proportionality). k=spring constant (N/m). Series: 1/k_t=1/k\u2081+1/k\u2082. Parallel: k_t=k\u2081+k\u2082. Beyond elastic limit: permanent deformation.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-hooke', prompt: 'State Hooke\'s Law and define spring constant.' },
    { id: 'cue-2', blockId: 'callout-key', prompt: 'How do springs combine in series vs parallel?' },
  ], summaryText: 'F=k\u0394x. k=stiffness (N/m). Series: softer. Parallel: stiffer.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 2', detail: 'Hooke\'s Law', year: '2021', source: 'Pearson Edexcel', tags: ['Hooke', 'springs'] }],
};
