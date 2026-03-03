export const note_physics_6_6A_0 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Apply IA2 practical methods from Units 4 and 5; select and use advanced apparatus correctly.' }, terms: ['practical skills'] },
    { id: 'h-ia2', type: 'heading', data: { text: 'IA2 Practical Methods', level: 2 }, terms: [] },
    { id: 'p-ia2', type: 'paragraph', data: { text: 'Units 4-5 introduce more complex practicals: capacitor discharge (oscilloscope/datalogger), magnetic field measurements (Hall probe), radioactive decay (GM tube), oscillations (motion sensors). Correct use of these instruments is assessed.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can use a datalogger for rapid measurements', checked: false }, { text: 'I can use an oscilloscope to measure time and voltage', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Advanced practicals often involve exponential or oscillatory data requiring electronic measurement.\n\nApply: Describe how to use a datalogger to capture voltage during capacitor discharge.\n\nAnalyze: Why are electronic sensors necessary when phenomena happen too fast for manual reading?\n\nEvaluate: Compare datalogger vs manual methods for accuracy and precision in rapid experiments.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'IA2 uses: oscilloscope, datalogger, Hall probe, GM tube, motion sensors. Electronic measurement for rapid/complex phenomena.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'p-ia2', prompt: 'Name instruments used in IA2 practicals.' }], summaryText: 'Datalogger, oscilloscope, Hall probe, GM tube. For rapid/complex measurements.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 WPH16', detail: 'IA2 methods', year: '2021', source: 'Pearson Edexcel', tags: ['practical'] }],
};
