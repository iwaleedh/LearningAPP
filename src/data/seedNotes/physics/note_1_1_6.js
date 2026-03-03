export const note_physics_1_1_6 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define and calculate moments; apply the principle of moments to solve equilibrium problems; understand couples and torque.' }, terms: ['moments', 'equilibrium'] },
    { id: 'h-moments', type: 'heading', data: { text: 'Moments and Equilibrium', level: 2 }, terms: [] },
    { id: 'eq-moment', type: 'equation', data: { html: 'Moment = F \u00d7 d', caption: 'Force \u00d7 perpendicular distance from pivot (N m)' }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Principle of Moments', text: 'For rotational equilibrium: sum of clockwise moments = sum of anticlockwise moments about any point.' }, terms: [] },
    { id: 'p-couple', type: 'paragraph', data: { text: 'A couple = two equal opposite forces not on the same line. Produces rotation only. Torque = one force \u00d7 perpendicular distance between them.' }, terms: ['couple', 'torque'] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'Uniform 4 m beam (200 N) on two supports, 300 N load at 1 m from left.\nMoments about left: R\u2082\u00d74 = 300\u00d71 + 200\u00d72\nR\u2082 = 175 N, R\u2081 = 325 N' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate moments about a point', checked: false }, { text: 'I can apply the principle of moments', checked: false }, { text: 'I can solve beam problems', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Equilibrium requires zero resultant force (translational) AND zero resultant moment (rotational).\n\nApply: 3 m plank of 100 N with 50 N at one end. Find pivot position for balance.\n\nAnalyze: Why can you take moments about any point and get the same answer?\n\nEvaluate: Door handles are far from hinges. Use moments to explain this design.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Moment = F\u00d7d (N m). Principle: \u2211CW = \u2211ACW. Couple: equal opposite forces, pure rotation. Equilibrium: \u2211F=0 and \u2211M=0.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-moment', prompt: 'Define moment and state units.' },
    { id: 'cue-2', blockId: 'callout-key', prompt: 'State the principle of moments.' },
  ], summaryText: 'Moment=Fd. \u2211CW=\u2211ACW. Couple=pure rotation. Equilibrium: \u2211F=0 and \u2211M=0.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 1', detail: 'Moments and equilibrium', year: '2021', source: 'Pearson Edexcel', tags: ['moments'] }],
};
