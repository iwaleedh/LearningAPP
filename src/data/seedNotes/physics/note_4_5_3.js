export const note_physics_4_5_3 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define angular displacement (\u03b8) and angular velocity (\u03c9); convert between degrees, radians and revolutions.' }, terms: ['angular displacement', 'angular velocity'] },
    { id: 'h-ang', type: 'heading', data: { text: 'Angular Displacement and Velocity', level: 2 }, terms: [] },
    { id: 'eq-omega', type: 'equation', data: { html: '\u03c9 = \u0394\u03b8/\u0394t = 2\u03c0f = 2\u03c0/T', caption: 'Angular velocity in rad/s' }, terms: [] },
    { id: 'p-rad', type: 'paragraph', data: { text: 'One complete revolution = 2\u03c0 radians = 360\u00b0. Angular velocity \u03c9 is the rate of change of angular displacement. Linear speed v = r\u03c9, where r is the radius of the circular path.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can convert between degrees and radians', checked: false }, { text: 'I can calculate \u03c9 from f or T', checked: false }, { text: 'I can use v=r\u03c9', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: \u03c9 describes how fast an object rotates. v=r\u03c9 shows that for the same \u03c9, outer points move faster.\n\nApply: A disc rotates at 300 rpm. Calculate \u03c9. Find the speed of a point 0.1 m from the centre.\n\nAnalyze: Why is \u03c9 the same for all points on a rigid body but v varies with r?\n\nEvaluate: Radians are dimensionless. Discuss why this is useful in physics.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: '\u03c9=2\u03c0f=2\u03c0/T (rad/s). v=r\u03c9. 360\u00b0=2\u03c0 rad. \u03c9 same for all points on rigid body; v increases with r.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-omega', prompt: 'Define angular velocity and state v=r\u03c9.' }], summaryText: '\u03c9=2\u03c0f=2\u03c0/T. v=r\u03c9. 2\u03c0 rad=360\u00b0.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 5', detail: 'Angular motion', year: '2021', source: 'Pearson Edexcel', tags: ['circular motion'] }],
};
