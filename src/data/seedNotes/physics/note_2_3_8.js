export const note_physics_2_3_8 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand diffraction through single slits and around obstacles; explain how slit width affects diffraction; understand polarisation.' }, terms: ['diffraction', 'polarisation'] },
    { id: 'h-diff', type: 'heading', data: { text: 'Diffraction and Polarisation', level: 2 }, terms: [] },
    { id: 'p-diff', type: 'paragraph', data: { text: 'Diffraction: waves spread out when passing through a gap or around an obstacle. Maximum diffraction when gap width \u2248 wavelength. Much larger gap = minimal spreading. Much smaller gap = wave blocked.' }, terms: ['diffraction'] },
    { id: 'p-polar', type: 'paragraph', data: { text: 'Polarisation: restricting wave oscillations to one plane. Only transverse waves can be polarised. Unpolarised light oscillates in all planes. A polarising filter transmits only one plane. Two crossed polarisers block all light.' }, terms: ['polarisation'] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Malus\' Law', text: 'When polarised light passes through an analyser at angle \u03b8 to the polarisation direction: I = I\u2080 cos\u00b2\u03b8. At \u03b8=90\u00b0, I=0 (crossed polarisers).' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can explain when diffraction is significant', checked: false }, { text: 'I can explain polarisation', checked: false }, { text: 'I can apply Malus\' law', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Diffraction is evidence of wave behaviour. Polarisation proves light is transverse.\n\nApply: Polarised light of intensity 100 W/m\u00b2 passes through a filter at 60\u00b0. Find transmitted intensity.\n\nAnalyze: Why can radio waves diffract around buildings but visible light cannot?\n\nEvaluate: Polarising sunglasses reduce glare from horizontal surfaces. Explain the physics.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Diffraction: max when gap\u2248\u03bb. Polarisation: transverse only, one plane. Malus: I=I\u2080cos\u00b2\u03b8. Crossed polarisers: I=0.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'p-diff', prompt: 'When is diffraction most significant?' },
    { id: 'cue-2', blockId: 'callout-key', prompt: 'State Malus\' law.' },
  ], summaryText: 'Diffraction max when gap\u2248\u03bb. Polarisation: transverse only. I=I\u2080cos\u00b2\u03b8.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 3', detail: 'Diffraction and polarisation', year: '2021', source: 'Pearson Edexcel', tags: ['diffraction', 'polarisation'] }],
};
