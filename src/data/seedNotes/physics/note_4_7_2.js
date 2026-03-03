export const note_physics_4_7_2 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Analyse charged particle motion in magnetic fields; relate radius of curvature to momentum.' }, terms: ['magnetic fields', 'momentum'] },
    { id: 'h-track', type: 'heading', data: { text: 'Momentum in Magnetic Fields', level: 2 }, terms: [] },
    { id: 'eq-r', type: 'equation', data: { html: 'r = mv/(BQ) = p/(BQ)', caption: 'Radius of circular path in B field' }, terms: [] },
    { id: 'p-track', type: 'paragraph', data: { text: 'A charged particle moving perpendicular to B experiences F=BQv, which acts as centripetal force. This gives circular motion with r = mv/BQ. Higher momentum = larger radius. Higher B or Q = tighter curve.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can derive r=p/BQ', checked: false }, { text: 'I can determine particle properties from track radius', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: BQv = mv\u00b2/r gives r = mv/BQ. The radius directly measures momentum.\n\nApply: An electron (m=9.11\u00d710\u207b\u00b3\u00b9 kg) moves at 2\u00d710\u2077 m/s in B=0.5 T. Find r.\n\nAnalyze: Why do spiralling tracks indicate energy loss? What causes the energy loss?\n\nEvaluate: Positive and negative particles curve in opposite directions. How does this help identify antimatter?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'r=mv/BQ=p/BQ. BQv provides centripetal force. Larger p = larger r. Opposite charges curve opposite ways. Spirals = energy loss.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-r', prompt: 'Derive r=p/BQ from BQv=mv\u00b2/r.' }], summaryText: 'r=p/BQ. Larger p=larger r. Opposite Q=opposite curve.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 7', detail: 'Tracks in B fields', year: '2021', source: 'Pearson Edexcel', tags: ['tracks'] }],
};
