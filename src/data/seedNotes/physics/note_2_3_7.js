export const note_physics_2_3_7 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Calculate critical angle; explain total internal reflection and its applications in optical fibres.' }, terms: ['critical angle', 'total internal reflection'] },
    { id: 'h-tir', type: 'heading', data: { text: 'Critical Angle and Total Internal Reflection', level: 2 }, terms: [] },
    { id: 'eq-crit', type: 'equation', data: { html: 'sin C = n\u2082/n\u2081 = 1/n (for glass-air)', caption: 'Critical angle C' }, terms: [] },
    { id: 'p-tir', type: 'paragraph', data: { text: 'Total internal reflection (TIR) occurs when light travels from a denser to a less dense medium and the angle of incidence exceeds the critical angle. Conditions: (1) light goes from high n to low n, (2) angle > critical angle.' }, terms: ['TIR'] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Optical Fibres', text: 'Light is transmitted through optical fibres by repeated TIR. Applications: telecommunications (fast data), endoscopy (medical imaging). Cladding has a lower refractive index than the core.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate the critical angle', checked: false }, { text: 'I can state conditions for TIR', checked: false }, { text: 'I can explain fibre optic operation', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: TIR occurs because at the critical angle, the refracted ray travels along the boundary (90\u00b0). Beyond this, no refraction \u2014 all light reflects.\n\nApply: Glass has n=1.5. Calculate the critical angle for a glass-air boundary.\n\nAnalyze: Why does cladding on optical fibres need a lower n than the core? What happens without it?\n\nEvaluate: Compare optical fibres with copper cables for data transmission. Discuss speed, bandwidth and signal loss.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'sin C = 1/n. TIR conditions: denser to less dense, \u03b8 > C. Fibres: core (high n) + cladding (low n). Used in telecoms and medicine.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-crit', prompt: 'State the critical angle equation and conditions for TIR.' },
  ], summaryText: 'sinC=1/n. TIR: denser\u2192less dense, \u03b8>C. Fibres: core+cladding.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 3', detail: 'TIR and fibres', year: '2021', source: 'Pearson Edexcel', tags: ['TIR', 'fibres'] }],
};
