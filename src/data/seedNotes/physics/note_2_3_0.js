export const note_physics_2_3_0 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define and use wave terms: wavelength, frequency, period, amplitude, phase difference; apply the wave equation v = f\u03bb.' }, terms: ['wavelength', 'frequency', 'wave equation'] },
    { id: 'h-terms', type: 'heading', data: { text: 'Wave Terms and Wave Equation', level: 2 }, terms: [] },
    { id: 'list-terms', type: 'list', data: { style: 'unordered', items: ['Wavelength (\u03bb): distance between two adjacent points in phase (m)', 'Frequency (f): number of complete oscillations per second (Hz)', 'Period (T): time for one complete oscillation; T = 1/f (s)', 'Amplitude (A): maximum displacement from equilibrium (m)', 'Phase difference: fraction of a cycle between two points (degrees or radians)'] }, terms: [] },
    { id: 'eq-wave', type: 'equation', data: { html: 'v = f\u03bb', caption: 'Wave speed = frequency \u00d7 wavelength' }, terms: [] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'Sound in air: f = 440 Hz, v = 340 m/s.\n\u03bb = v/f = 340/440 = 0.773 m' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can define all wave terms', checked: false }, { text: 'I can apply v=f\u03bb', checked: false }, { text: 'I can calculate phase difference', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: v=f\u03bb links three fundamental wave properties. Changing one affects the others depending on what is fixed by the medium.\n\nApply: Radio wave f=100 MHz travels at 3\u00d710\u2078 m/s. Find \u03bb.\n\nAnalyze: When a wave passes from air to glass, v and \u03bb change but f stays constant. Explain why.\n\nEvaluate: Can v=f\u03bb be applied to all types of waves? Discuss limitations.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'v=f\u03bb. T=1/f. \u03bb=distance between points in phase. Phase difference in degrees or radians. v depends on medium, f set by source.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'list-terms', prompt: 'Define wavelength, frequency, period and amplitude.' },
    { id: 'cue-2', blockId: 'eq-wave', prompt: 'State the wave equation.' },
  ], summaryText: 'v=f\u03bb. T=1/f. Phase in degrees/radians.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 3', detail: 'Wave terms and equation', year: '2021', source: 'Pearson Edexcel', tags: ['waves'] }],
};
