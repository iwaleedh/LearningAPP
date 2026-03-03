export const note_physics_2_3_1 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Distinguish longitudinal and transverse waves; identify examples of each and describe particle motion.' }, terms: ['longitudinal', 'transverse'] },
    { id: 'h-types', type: 'heading', data: { text: 'Longitudinal and Transverse Waves', level: 2 }, terms: [] },
    { id: 'table-types', type: 'comparisonTable', data: { headers: ['Property', 'Transverse', 'Longitudinal'], rows: [['Oscillation', 'Perpendicular to wave direction', 'Parallel to wave direction'], ['Examples', 'Light, water waves, S-waves', 'Sound, P-waves, ultrasound'], ['Can be polarised?', 'Yes', 'No'], ['Medium needed?', 'Not always (EM waves)', 'Yes']], caption: 'Comparison of wave types' }, terms: [] },
    { id: 'p-long', type: 'paragraph', data: { text: 'Longitudinal waves have compressions (high pressure) and rarefactions (low pressure). Sound is a longitudinal wave: air molecules oscillate back and forth parallel to the direction the wave travels.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can distinguish transverse from longitudinal waves', checked: false }, { text: 'I can give examples of each', checked: false }, { text: 'I know only transverse waves can be polarised', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: The key distinction is oscillation direction relative to energy transfer. This determines whether polarisation is possible.\n\nApply: Earthquake S-waves are transverse, P-waves longitudinal. Which arrives first and why?\n\nAnalyze: Why can sound not be polarised? Relate to particle oscillation direction.\n\nEvaluate: Water waves are often called transverse but actually have circular particle motion. Discuss.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Transverse: oscillation \u22a5 wave direction (light, water). Longitudinal: oscillation \u2225 wave direction (sound). Only transverse can be polarised.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'table-types', prompt: 'Compare transverse and longitudinal waves.' },
  ], summaryText: 'Transverse: \u22a5. Longitudinal: \u2225. Only transverse polarised.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 3', detail: 'Wave types', year: '2021', source: 'Pearson Edexcel', tags: ['waves'] }],
};
