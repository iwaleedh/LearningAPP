export const note_physics_2_4_9 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe Core Practical 8: determination of EMF and internal resistance of a cell.' }, terms: ['core practical', 'EMF', 'internal resistance'] },
    { id: 'h-cp8', type: 'heading', data: { text: 'Core Practical 8: EMF and Internal Resistance', level: 2 }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Method', text: '1. Connect cell to variable resistor R, ammeter, voltmeter.\n2. Vary R to get different I values.\n3. Record V (terminal pd) and I for each setting.\n4. Plot V vs I: y-intercept = \u03b5, gradient = \u2212r.\n5. From V = \u03b5 \u2212 Ir.' }, terms: [] },
    { id: 'list-errors', type: 'list', data: { style: 'unordered', items: ['Use many data points for reliable gradient', 'Cell may run down during experiment \u2014 work quickly', 'Do not short-circuit (R=0) as excessive current could damage cell', 'Systematic: ammeter and voltmeter have finite resistance'] }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can describe the method', checked: false }, { text: 'I can find \u03b5 and r from V-I graph', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: V=\u03b5\u2212Ir is linear (y=mx+c form) so V vs I gives a straight line with intercept \u03b5 and gradient \u2212r.\n\nApply: V-I graph gives intercept 1.55V and gradient \u22120.4 V/A. State \u03b5 and r.\n\nAnalyze: Why does the terminal pd drop when you draw more current? Is energy being destroyed?\n\nEvaluate: This method assumes \u03b5 and r are constant. Under what conditions might they change during the experiment?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Vary R, measure V and I. Plot V vs I: intercept=\u03b5, gradient=\u2212r. From V=\u03b5\u2212Ir. Work quickly to avoid cell depletion.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'callout-key', prompt: 'Describe the method for finding \u03b5 and r.' },
  ], summaryText: 'V vs I: intercept=\u03b5, gradient=\u2212r. V=\u03b5\u2212Ir.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 CP8', detail: 'EMF and internal resistance', year: '2021', source: 'Pearson Edexcel', tags: ['practical', 'EMF'] }],
};
