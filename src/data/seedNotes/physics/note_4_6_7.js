export const note_physics_4_6_7 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'State and apply Faraday\'s and Lenz\'s laws; calculate induced EMF from rate of change of flux linkage.' }, terms: ['Faraday', 'Lenz'] },
    { id: 'h-faraday', type: 'heading', data: { text: 'Faraday\'s and Lenz\'s Laws', level: 2 }, terms: [] },
    { id: 'eq-faraday', type: 'equation', data: { html: '\u03b5 = \u2212N(\u0394\u03a6/\u0394t)', caption: 'Faraday\'s law: EMF = \u2212rate of change of flux linkage' }, terms: [] },
    { id: 'callout-lenz', type: 'callout', data: { style: 'key', title: 'Lenz\'s Law', text: 'The induced EMF acts in a direction to oppose the change producing it. This is conservation of energy \u2014 the minus sign in Faraday\'s law.' }, terms: [] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'A coil of 200 turns has flux changing from 0.05 Wb to 0.02 Wb in 0.1 s.\n\u03b5 = N\u0394\u03a6/\u0394t = 200 \u00d7 (0.05\u22120.02)/0.1 = 60 V' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can state Faraday\'s and Lenz\'s laws', checked: false }, { text: 'I can calculate induced EMF', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Faraday quantifies, Lenz gives direction. Without Lenz, energy wouldn\u2019t be conserved.\n\nApply: A magnet dropped through a coil induces a brief pulse. Predict the direction using Lenz.\n\nAnalyze: Why does a dropping magnet slow down when falling through a copper pipe?\n\nEvaluate: Regenerative braking in electric cars uses Lenz\'s law. Explain the energy conversion.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: '\u03b5=\u2212N\u0394\u03a6/\u0394t. Lenz: opposes the change (energy conservation). More turns or faster change = larger EMF.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-faraday', prompt: 'State Faraday\'s law.' }, { id: 'cue-2', blockId: 'callout-lenz', prompt: 'State Lenz\'s law.' }], summaryText: '\u03b5=\u2212N\u0394\u03a6/\u0394t. Lenz: opposes change.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 6', detail: 'Faraday and Lenz', year: '2021', source: 'Pearson Edexcel', tags: ['Faraday', 'Lenz'] }],
};
