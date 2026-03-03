export const note_physics_4_6_8 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe Core Practical 11: investigation of capacitor charge and discharge using voltage-time graphs.' }, terms: ['core practical'] },
    { id: 'h-cp11', type: 'heading', data: { text: 'Core Practical 11: Capacitor Charge-Discharge', level: 2 }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Method', text: '1. Charge capacitor through known R from DC supply.\n2. Record V at regular time intervals using datalogger or stopwatch+voltmeter.\n3. Plot V vs t \u2014 observe exponential curves.\n4. Plot ln V vs t for discharge: gradient = \u22121/RC.\n5. Determine RC from gradient.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can set up the RC circuit', checked: false }, { text: 'I can determine RC from ln V vs t graph', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: V vs t shows exponential curves directly. ln plots linearise for accurate RC measurement.\n\nApply: Gradient of ln V vs t = \u221212.5. C=100\u03bcF. Find R.\n\nAnalyze: Why is a datalogger better than manual readings for fast discharges?\n\nEvaluate: Systematic errors include voltmeter resistance drawing current. How significant is this?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Charge/discharge through R. V vs t: exponential. ln V vs t: linear, gradient=\u22121/RC. Use datalogger for rapid discharge.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'callout-key', prompt: 'Describe the capacitor charge-discharge practical.' }], summaryText: 'V vs t: exponential. ln V vs t: gradient=\u22121/RC.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 CP11', detail: 'Capacitor practical', year: '2021', source: 'Pearson Edexcel', tags: ['practical', 'capacitor'] }],
};
