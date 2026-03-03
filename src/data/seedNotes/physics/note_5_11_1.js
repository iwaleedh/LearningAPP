export const note_physics_5_11_1 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Derive and apply orbital motion equations; calculate orbital speed, period and escape velocity.' }, terms: ['orbits', 'escape velocity'] },
    { id: 'h-orb', type: 'heading', data: { text: 'Orbital Motion', level: 2 }, terms: [] },
    { id: 'eq-orb', type: 'equation', data: { html: 'GMm/r\u00b2 = mv\u00b2/r', caption: 'Gravity provides centripetal force' }, terms: [] },
    { id: 'eq-esc', type: 'equation', data: { html: 'v<sub>esc</sub> = \u221a(2GM/r)', caption: 'Escape velocity' }, terms: [] },
    { id: 'p-orb', type: 'paragraph', data: { text: 'Orbital speed: v = \u221a(GM/r). Orbital period: T\u00b2 = 4\u03c0\u00b2r\u00b3/GM (Kepler 3rd law). Geostationary orbit: T=24h, equatorial, same direction as Earth.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can derive orbital equations', checked: false }, { text: 'I can calculate escape velocity', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: In orbit, gravity = centripetal force. Higher orbit = slower speed but longer period.\n\nApply: Calculate the orbital speed and period of the ISS (r=6.78\u00d710\u2076 m from Earth centre).\n\nAnalyze: Why don\u2019t astronauts on the ISS feel gravity even though g\u22488.7 m/s\u00b2?\n\nEvaluate: SpaceX reuses rockets. Discuss how escape velocity relates to fuel requirements.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'v=\u221a(GM/r). T\u00b2=4\u03c0\u00b2r\u00b3/GM. v_esc=\u221a(2GM/r). Higher orbit: slower v, longer T. Geostationary: T=24h.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-esc', prompt: 'State escape velocity and orbital speed equations.' }], summaryText: 'v=\u221a(GM/r). T\u00b2\u221dr\u00b3. v_esc=\u221a(2GM/r).', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 11', detail: 'Orbital motion', year: '2021', source: 'Pearson Edexcel', tags: ['orbits'] }],
};
