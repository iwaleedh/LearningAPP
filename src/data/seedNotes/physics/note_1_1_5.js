export const note_physics_1_1_5 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define and apply momentum and impulse; use conservation of momentum to solve collision and explosion problems.' }, terms: ['momentum', 'impulse'] },
    { id: 'h-mom', type: 'heading', data: { text: 'Momentum and Impulse', level: 2 }, terms: [] },
    { id: 'eq-mom', type: 'equation', data: { html: 'p = mv', caption: 'Momentum = mass \u00d7 velocity (kg m/s, vector)' }, terms: [] },
    { id: 'eq-impulse', type: 'equation', data: { html: 'Impulse = F\u0394t = \u0394p = mv \u2212 mu', caption: 'Impulse = change in momentum' }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Conservation of Momentum', text: 'Total momentum before = Total momentum after (no external forces).\nm\u2081u\u2081 + m\u2082u\u2082 = m\u2081v\u2081 + m\u2082v\u2082' }, terms: [] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: '2 kg ball at 3 m/s hits stationary 1 kg ball; they stick.\n2(3)+1(0) = 3v \u2192 v = 2 m/s' }, terms: [] },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tips', text: '\u2022 Impulse = area under F-t graph.\n\u2022 Longer collision time \u2192 smaller force (crumple zones).\n\u2022 In explosions from rest, total momentum = 0.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate momentum and impulse', checked: false }, { text: 'I can apply conservation of momentum', checked: false }, { text: 'I can interpret F-t graphs', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: "Understand: Momentum conservation follows from Newton's third law \u2014 in any interaction, momentum changes cancel.\n\nApply: 0.05 kg bullet at 400 m/s embeds in 2 kg block. Find block velocity.\n\nAnalyze: Why is momentum conserved in all collisions but KE only in elastic ones?\n\nEvaluate: Car crumple zones increase collision time. Use impulse=F\u0394t to explain why this reduces injury." }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'p=mv (vector). Conservation: total p before = after. Impulse=F\u0394t=\u0394p. Longer time = smaller force. Area under F-t graph = impulse.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-mom', prompt: 'Define momentum and state units.' },
    { id: 'cue-2', blockId: 'callout-key', prompt: 'State conservation of momentum.' },
  ], summaryText: 'p=mv. Conserved if no external forces. Impulse=F\u0394t=\u0394p.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 1', detail: 'Momentum and impulse', year: '2021', source: 'Pearson Edexcel', tags: ['momentum', 'impulse'] }],
};
