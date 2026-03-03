export const note_physics_1_1_3 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Analyse projectile motion by treating horizontal and vertical components independently; calculate range, maximum height and time of flight.' }, terms: ['projectile motion'] },
    { id: 'h-proj', type: 'heading', data: { text: 'Projectile Motion', level: 2 }, terms: [] },
    { id: 'list-key', type: 'list', data: { style: 'unordered', items: ['Horizontal velocity is constant (no air resistance): sx = ux \u00d7 t', 'Vertical motion has constant acceleration g: sy = uy\u00d7t + \u00bdgt\u00b2', 'The two components are independent', 'Trajectory is a parabola'] }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Projectile Equations', text: 'Time of flight: T = 2u sin \u03b8 / g\nMax height: H = u\u00b2 sin\u00b2 \u03b8 / 2g\nRange: R = u\u00b2 sin 2\u03b8 / g' }, terms: [] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example \u2014 Horizontal Launch', text: 'Ball thrown horizontally at 15 m/s from 20 m cliff.\nVertical: 20 = \u00bd(9.81)t\u00b2 \u2192 t = 2.02 s\nHorizontal: sx = 15 \u00d7 2.02 = 30.3 m' }, terms: [] },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tips', text: '\u2022 For horizontal launch: uy = 0.\n\u2022 Max range at 45\u00b0 (no air resistance).\n\u2022 At top of trajectory, vy = 0 but vx \u2260 0.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can separate projectile motion into components', checked: false }, { text: 'I can calculate time of flight, range and max height', checked: false }, { text: 'I can solve horizontal launch problems', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Gravity only acts vertically, so horizontal and vertical motions are independent. A dropped ball and a horizontally launched ball hit ground at the same time.\n\nApply: Ball launched at 30 m/s at 60\u00b0. Calculate range and max height.\n\nAnalyze: Why does 30\u00b0 give the same range as 60\u00b0? Use sin 2\u03b8.\n\nEvaluate: Air resistance makes max range occur below 45\u00b0. Explain why.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Projectiles: horizontal constant v, vertical a=g. Independent components. T=2usin\u03b8/g, H=u\u00b2sin\u00b2\u03b8/2g, R=u\u00b2sin2\u03b8/g. Max range at 45\u00b0.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'callout-key', prompt: 'State equations for T, H and R of projectiles.' },
    { id: 'cue-2', blockId: 'callout-worked', prompt: 'Ball thrown horizontally at 10 m/s from 5 m. Find landing distance.' },
  ], summaryText: 'Horizontal: constant v. Vertical: a=g. T=2usin\u03b8/g, H=u\u00b2sin\u00b2\u03b8/2g, R=u\u00b2sin2\u03b8/g.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 1', detail: 'Projectile motion', year: '2021', source: 'Pearson Edexcel', tags: ['projectiles'] }],
};
