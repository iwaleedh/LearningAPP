export const note_physics_4_5_2 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Distinguish elastic and inelastic collisions; calculate kinetic energy before and after to classify collisions.' }, terms: ['elastic', 'inelastic'] },
    { id: 'h-coll', type: 'heading', data: { text: 'Elastic and Inelastic Collisions', level: 2 }, terms: [] },
    { id: 'table-coll', type: 'comparisonTable', data: { headers: ['Property', 'Elastic', 'Inelastic'], rows: [['Momentum', 'Conserved', 'Conserved'], ['KE', 'Conserved', 'NOT conserved'], ['Objects', 'Bounce apart', 'May stick together'], ['Example', 'Hard sphere collision', 'Car crash']], caption: 'Elastic vs inelastic collisions' }, terms: [] },
    { id: 'p-perf', type: 'paragraph', data: { text: 'Perfectly inelastic: objects stick together (maximum KE loss). Perfectly elastic: KE fully conserved. Most real collisions are inelastic (some KE \u2192 heat/sound/deformation).' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can classify collisions as elastic or inelastic', checked: false }, { text: 'I can calculate KE before and after', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Momentum is ALWAYS conserved; KE only in elastic. The KE loss in inelastic collisions becomes other forms of energy.\n\nApply: 3 kg at 4 m/s hits 1 kg at rest; they stick. Calculate % KE lost.\n\nAnalyze: Why is a head-on car crash more dangerous than hitting a wall at the same speed?\n\nEvaluate: No macroscopic collision is perfectly elastic. Why? What happens at the atomic level?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Elastic: KE conserved. Inelastic: KE not conserved. Momentum always conserved. Perfectly inelastic: objects stick, max KE loss.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'table-coll', prompt: 'Compare elastic and inelastic collisions.' }], summaryText: 'Elastic: KE conserved. Inelastic: KE lost. Momentum always conserved.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 5', detail: 'Collisions', year: '2021', source: 'Pearson Edexcel', tags: ['collisions'] }],
};
