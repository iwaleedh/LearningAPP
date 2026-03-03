export const note_physics_4_5_0 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand impulse as force multiplied by time; relate impulse to change in momentum in collisions and explosions.' }, terms: ['impulse', 'momentum'] },
    { id: 'h-imp', type: 'heading', data: { text: 'Impulse and Momentum Change', level: 2 }, terms: [] },
    { id: 'eq-imp', type: 'equation', data: { html: 'F\u0394t = \u0394p = mv \u2212 mu', caption: 'Impulse = change in momentum' }, terms: [] },
    { id: 'p-imp', type: 'paragraph', data: { text: 'Impulse is the product of force and time. It equals the change in momentum. The area under a force-time graph gives the impulse. A larger contact time means a smaller average force for the same momentum change.' }, terms: [] },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tips', text: '\u2022 F-t graph area = impulse = \u0394p\n\u2022 Crumple zones, airbags, helmets all increase \u0394t to reduce F\n\u2022 Impulse is a vector quantity' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate impulse from F and \u0394t', checked: false }, { text: 'I can find impulse from F-t graphs', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: F\u0394t = \u0394p connects force, time and momentum change. Safety devices exploit this.\n\nApply: A 0.15 kg ball at 20 m/s is caught in 0.1 s. Find the average force.\n\nAnalyze: Compare catching a cricket ball with and without following through. Which hurts more and why?\n\nEvaluate: In a car crash, is it better to have a stiff or deformable front? Justify using impulse.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'F\u0394t = \u0394p. Area under F-t = impulse. Larger \u0394t = smaller F. Safety: crumple zones extend contact time.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-imp', prompt: 'Define impulse and relate it to momentum.' }], summaryText: 'F\u0394t=\u0394p. Area under F-t=impulse. Larger \u0394t=smaller F.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 5', detail: 'Impulse', year: '2021', source: 'Pearson Edexcel', tags: ['impulse'] }],
};
