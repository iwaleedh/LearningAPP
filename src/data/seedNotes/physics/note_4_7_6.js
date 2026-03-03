export const note_physics_4_7_6 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand antiparticles, pair production and annihilation; apply conservation of energy and momentum.' }, terms: ['antiparticles', 'pair production', 'annihilation'] },
    { id: 'h-anti', type: 'heading', data: { text: 'Antiparticles and Pair Processes', level: 2 }, terms: [] },
    { id: 'p-anti', type: 'paragraph', data: { text: 'Every particle has an antiparticle with the same mass but opposite charge, baryon number and lepton number. Pair production: photon \u2192 particle + antiparticle (E \u2265 2m\u2080c\u00b2). Annihilation: particle + antiparticle \u2192 2 photons (momentum conserved).' }, terms: [] },
    { id: 'eq-pair', type: 'equation', data: { html: 'E<sub>min</sub> = 2m\u2080c\u00b2', caption: 'Minimum photon energy for pair production' }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Key Antiparticles', text: 'Electron (e\u207b) \u2194 Positron (e\u207a)\nProton (p) \u2194 Antiproton (p\u0305)\nNeutron (n) \u2194 Antineutron (n\u0305)\nNeutrino (\u03bd) \u2194 Antineutrino (\u03bd\u0305)' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can identify antiparticles', checked: false }, { text: 'I can calculate min energy for pair production', checked: false }, { text: 'I can explain annihilation', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Pair production converts energy to mass; annihilation converts mass to energy. Both conserve all quantum numbers.\n\nApply: Calculate the minimum photon energy to produce an electron-positron pair.\n\nAnalyze: Why does annihilation produce TWO photons, not one?\n\nEvaluate: PET scanners use positron annihilation. Explain how the two photons reveal the location of the source.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Antiparticles: same mass, opposite charge/B/L. Pair production: E\u22652m\u2080c\u00b2. Annihilation: 2 photons. PET scanning uses positron annihilation.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-pair', prompt: 'State the minimum energy for pair production.' }], summaryText: 'Antiparticles: opposite Q/B/L. Pair: E\u22652mc\u00b2. Annihilation: 2\u03b3.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 7', detail: 'Antiparticles', year: '2021', source: 'Pearson Edexcel', tags: ['antiparticles'] }],
};
