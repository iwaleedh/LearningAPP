export const note_physics_4_7_5 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Classify particles into hadrons (baryons, mesons) and leptons; understand quark composition.' }, terms: ['quarks', 'leptons', 'hadrons'] },
    { id: 'h-class', type: 'heading', data: { text: 'Quark-Lepton Classification', level: 2 }, terms: [] },
    { id: 'table-class', type: 'comparisonTable', data: { headers: ['Group', 'Made of', 'Examples', 'Baryon number'], rows: [['Baryons', '3 quarks (qqq)', 'proton (uud), neutron (udd)', 'B=1'], ['Mesons', 'quark-antiquark (q\u0305q)', 'pion, kaon', 'B=0'], ['Leptons', 'Fundamental', 'electron, neutrino, muon', 'B=0']], caption: 'Particle classification' }, terms: [] },
    { id: 'list-quarks', type: 'list', data: { style: 'unordered', items: ['Up (u): charge +2/3, B=1/3', 'Down (d): charge \u22121/3, B=1/3', 'Strange (s): charge \u22121/3, B=1/3, S=\u22121', 'Antiquarks have opposite charge, B and S'] }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can classify particles', checked: false }, { text: 'I can state quark compositions', checked: false }, { text: 'I can calculate charge from quarks', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: All matter is built from quarks and leptons. Hadrons feel the strong force; leptons do not.\n\nApply: State the quark composition of a proton and verify its charge.\n\nAnalyze: Why can\u2019t isolated quarks be observed? (Quark confinement)\n\nEvaluate: The Standard Model has 6 quarks and 6 leptons. Is it elegant or too complex? Discuss.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Baryons: 3 quarks (B=1). Mesons: quark-antiquark (B=0). Leptons: fundamental (e, \u03bd, \u03bc). u: +2/3, d: \u22121/3, s: \u22121/3 (S=\u22121).' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'table-class', prompt: 'Classify particles into baryons, mesons and leptons.' }, { id: 'cue-2', blockId: 'list-quarks', prompt: 'State quark charges and baryon numbers.' }], summaryText: 'Baryons=3q. Mesons=q\u0305q. Leptons=fundamental. u=+2/3, d=\u22121/3.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 7', detail: 'Particle classification', year: '2021', source: 'Pearson Edexcel', tags: ['quarks', 'particles'] }],
};
