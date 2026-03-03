export const note_physics_1_2_0 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define density; calculate density from mass and volume; understand upthrust and Archimedes\' principle.' }, terms: ['density', 'upthrust'] },
    { id: 'h-density', type: 'heading', data: { text: 'Density and Upthrust', level: 2 }, terms: [] },
    { id: 'eq-density', type: 'equation', data: { html: '\u03c1 = m / V', caption: 'Density = mass / volume (kg m\u207b\u00b3)' }, terms: [] },
    { id: 'p-density', type: 'paragraph', data: { text: 'Density is mass per unit volume. Solids are typically denser than liquids, which are denser than gases. Water has density 1000 kg m\u207b\u00b3. An object floats when its average density is less than the fluid density.' }, terms: ['density'] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Archimedes\' Principle', text: 'Upthrust = weight of fluid displaced = \u03c1Vg, where \u03c1 is fluid density, V is volume submerged, g is gravitational field strength. An object floats when upthrust = weight.' }, terms: ['upthrust'] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'A cube of side 0.1 m and mass 0.5 kg is placed in water.\nWeight = 0.5 \u00d7 9.81 = 4.905 N\nMax upthrust = 1000 \u00d7 0.001 \u00d7 9.81 = 9.81 N\nSince upthrust > weight, the cube floats.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate density', checked: false }, { text: 'I can explain upthrust using Archimedes\' principle', checked: false }, { text: 'I can predict whether an object floats or sinks', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Upthrust arises from the pressure difference between top and bottom of a submerged object. Deeper = higher pressure = greater upward force.\n\nApply: A 0.02 m\u00b3 block of density 800 kg/m\u00b3 is placed in water. Find the fraction submerged.\n\nAnalyze: Ice floats with ~10% above water. Derive this from the density ratio of ice to water.\n\nEvaluate: Ships are made of steel (\u03c1=7800 kg/m\u00b3) yet float. Explain using average density.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: '\u03c1=m/V (kg/m\u00b3). Upthrust = \u03c1Vg (weight of fluid displaced). Floats if average density < fluid density. Archimedes: upthrust equals weight of displaced fluid.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-density', prompt: 'Define density and state units.' },
    { id: 'cue-2', blockId: 'callout-key', prompt: 'State Archimedes\' principle.' },
  ], summaryText: '\u03c1=m/V. Upthrust=\u03c1Vg. Float if \u03c1_object < \u03c1_fluid.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 2', detail: 'Density and upthrust', year: '2021', source: 'Pearson Edexcel', tags: ['density', 'upthrust'] }],
};
