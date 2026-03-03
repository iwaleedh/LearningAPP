export const note_physics_1_1_9 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe and analyse Core Practical 1: determination of the acceleration due to gravity using free-fall methods.' }, terms: ['core practical', 'free fall', 'g'] },
    { id: 'h-cp1', type: 'heading', data: { text: 'Core Practical 1: Free-Fall Acceleration', level: 2 }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Method', text: '1. Electromagnetic release at top, light gate at bottom.\n2. Measure fall height h (5+ heights).\n3. Record time t (3\u00d7 repeat, take mean).\n4. Plot h vs t\u00b2 \u2192 straight line through origin.\n5. Gradient = \u00bdg \u2192 g = 2 \u00d7 gradient.' }, terms: [] },
    { id: 'list-errors', type: 'list', data: { style: 'unordered', items: ['Systematic: reaction time if using stopwatch (use electronic timing)', 'Random: variations in release mechanism', 'Air resistance: negligible for dense objects', 'Improvement: use longer fall distances'] }, terms: [] },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tips', text: '\u2022 Expected: g \u2248 9.81 m/s\u00b2.\n\u2022 Graph not through origin \u2192 systematic error in timing.\n\u2022 Describe both method AND graph analysis.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can describe apparatus and method for measuring g', checked: false }, { text: 'I can explain why h vs t\u00b2 is linear', checked: false }, { text: 'I can identify errors and improvements', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: This tests s=\u00bdgt\u00b2 directly. Linearity of h vs t\u00b2 confirms constant acceleration.\n\nApply: h=1.20 m, t=0.495 s. Calculate g and percentage error.\n\nAnalyze: Why is electronic timing essential? Calculate % error from 0.2 s reaction time for 0.5 s fall.\n\nEvaluate: Would this work on the Moon (g=1.6 m/s\u00b2)? How would you adapt the design?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Drop object, time fall electronically. Plot h vs t\u00b2: gradient=\u00bdg. g\u22489.81 m/s\u00b2. Repeat and average.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'callout-key', prompt: 'Describe method for Core Practical 1.' },
    { id: 'cue-2', blockId: 'list-errors', prompt: 'Name two errors and improvements.' },
  ], summaryText: 'Drop from h, time electronically. h vs t\u00b2: gradient=\u00bdg. g\u22489.81 m/s\u00b2.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 CP1', detail: 'Free-fall g measurement', year: '2021', source: 'Pearson Edexcel', tags: ['practical', 'g'] }],
};
