export const note_physics_5_8_1 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand internal energy; relate temperature to average kinetic energy; explain absolute zero.' }, terms: ['internal energy', 'absolute zero'] },
    { id: 'h-ie', type: 'heading', data: { text: 'Internal Energy and Absolute Zero', level: 2 }, terms: [] },
    { id: 'p-ie', type: 'paragraph', data: { text: 'Internal energy = sum of kinetic energies (translational, rotational, vibrational) + potential energies of all particles. Temperature is proportional to average kinetic energy. Absolute zero (0 K = \u2212273\u00b0C) is when particles have minimum energy (zero-point energy in QM).' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can define internal energy', checked: false }, { text: 'I can explain absolute zero', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Internal energy has kinetic AND potential components. Heating increases KE; phase changes increase PE.\n\nApply: Explain why internal energy increases during boiling even though temperature stays constant.\n\nAnalyze: At absolute zero, is there really zero energy? Discuss quantum zero-point energy.\n\nEvaluate: The Kelvin scale has no negative values. Why is this more physical than Celsius?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Internal energy = \u2211KE + \u2211PE. T \u221d avg KE. Absolute zero: 0 K = \u2212273\u00b0C, minimum energy. Heating: \u0394KE. Phase change: \u0394PE.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'p-ie', prompt: 'Define internal energy and explain absolute zero.' }], summaryText: 'Internal energy=\u2211KE+\u2211PE. T\u221davg KE. 0K=\u2212273\u00b0C.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 8', detail: 'Internal energy', year: '2021', source: 'Pearson Edexcel', tags: ['thermodynamics'] }],
};
