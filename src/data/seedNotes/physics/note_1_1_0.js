export const note_physics_1_1_0 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Derive and apply SUVAT equations to solve problems involving uniform acceleration in one dimension.' }, terms: ['SUVAT', 'uniform acceleration'] },
    { id: 'h-suvat', type: 'heading', data: { text: 'SUVAT Equations', level: 2 }, terms: [] },
    { id: 'p-intro', type: 'paragraph', data: { text: 'The SUVAT equations describe motion under constant (uniform) acceleration. They connect five variables: s (displacement), u (initial velocity), v (final velocity), a (acceleration), and t (time). These equations only apply when acceleration is constant.' }, terms: ['SUVAT'] },
    { id: 'eq-1', type: 'equation', data: { html: 'v = u + at', caption: 'Links velocity, acceleration and time' }, terms: [] },
    { id: 'eq-2', type: 'equation', data: { html: 's = ut + \u00bdat\u00b2', caption: 'Links displacement, initial velocity, acceleration and time' }, terms: [] },
    { id: 'eq-3', type: 'equation', data: { html: 's = \u00bd(u + v)t', caption: 'Links displacement with average velocity' }, terms: [] },
    { id: 'eq-4', type: 'equation', data: { html: 'v\u00b2 = u\u00b2 + 2as', caption: 'Links velocity and displacement without time' }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Choosing the Right Equation', text: 'Each SUVAT equation uses 4 of the 5 variables. To solve a problem: (1) list known and unknown quantities, (2) identify which variable is NOT needed, (3) pick the equation that excludes that variable.' }, terms: [] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'A car accelerates from 5 m/s at 2 m/s\u00b2 for 4 s. Find distance.\nKnown: u=5, a=2, t=4. Find s.\ns = ut + \u00bdat\u00b2 = 5(4) + \u00bd(2)(16) = 20+16 = 36 m' }, terms: [] },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tips', text: '\u2022 Always define positive direction before starting.\n\u2022 Deceleration means a is negative.\n\u2022 For free fall, a = g = 9.81 m/s\u00b2 downward.\n\u2022 Check units: all must be SI.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can state all four SUVAT equations', checked: false }, { text: 'I can identify which equation to use', checked: false }, { text: 'I can solve SUVAT problems including free fall', checked: false }, { text: 'I understand SUVAT only applies for constant acceleration', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: SUVAT equations are derived from the definition of acceleration and the area under v-t graphs. Each equation eliminates one variable.\n\nApply: A ball is thrown upward at 20 m/s. Calculate max height and total time in air.\n\nAnalyze: Why can SUVAT not be used for a bouncing ball? Identify where acceleration changes.\n\nEvaluate: A student uses s=ut+\u00bdat\u00b2 with a=9.81 for upward throw and gets negative s. Is this correct?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'SUVAT: v=u+at, s=ut+\u00bdat\u00b2, v\u00b2=u\u00b2+2as, s=\u00bd(u+v)t. Constant acceleration ONLY. Define +ve direction first. Free fall: a=g=9.81 m/s\u00b2 downward.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-1', prompt: 'State the four SUVAT equations.' },
    { id: 'cue-2', blockId: 'callout-key', prompt: 'How do you decide which SUVAT equation to use?' },
    { id: 'cue-3', blockId: 'callout-worked', prompt: 'A car accelerates from rest at 3 m/s\u00b2 for 5 s. Find the distance.' },
  ], summaryText: 'v=u+at; s=ut+\u00bdat\u00b2; v\u00b2=u\u00b2+2as; s=\u00bd(u+v)t. Constant acceleration only.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 1', detail: 'SUVAT equations for uniform acceleration', year: '2021', source: 'Pearson Edexcel', tags: ['SUVAT', 'kinematics'] }],
};
