export const note_physics_4_7_1 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand particle accelerators (linac, cyclotron, synchrotron) and detectors; relate energy to mass via E=mc\u00b2.' }, terms: ['accelerator', 'detector'] },
    { id: 'h-acc', type: 'heading', data: { text: 'Particle Acceleration and Detection', level: 2 }, terms: [] },
    { id: 'table-acc', type: 'comparisonTable', data: { headers: ['Accelerator', 'How it works'], rows: [['Linac', 'Alternating pd accelerates particles in a straight line'], ['Cyclotron', 'Magnetic field curves path; electric field accelerates at dees'], ['Synchrotron', 'Ring of magnets; B increases with speed']], caption: 'Types of particle accelerator' }, terms: [] },
    { id: 'p-det', type: 'paragraph', data: { text: 'Detectors identify particles by their tracks in magnetic fields. Charged particles curve (F=BQv); neutral ones leave no track. Cloud chambers, bubble chambers and modern electronic detectors are used.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can describe three types of accelerator', checked: false }, { text: 'I can explain how particles are detected', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Higher energy = shorter de Broglie wavelength = better resolution of smaller structures.\n\nApply: A proton has KE=500 MeV. Calculate its de Broglie wavelength.\n\nAnalyze: Why do synchrotrons need increasing B as particles accelerate?\n\nEvaluate: The LHC cost billions. Justify particle physics research in terms of fundamental understanding vs cost.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Linac: straight. Cyclotron: spiral. Synchrotron: ring, B increases. Detectors: curved tracks in B field identify charges. Higher E = better resolution.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'table-acc', prompt: 'Compare linac, cyclotron and synchrotron.' }], summaryText: 'Linac straight, cyclotron spiral, synchrotron ring. Tracks in B identify particles.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 7', detail: 'Accelerators', year: '2021', source: 'Pearson Edexcel', tags: ['accelerators'] }],
};
