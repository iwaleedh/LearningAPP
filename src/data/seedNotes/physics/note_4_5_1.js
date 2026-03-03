export const note_physics_4_5_1 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Apply conservation of momentum in two dimensions using vector components.' }, terms: ['2D momentum'] },
    { id: 'h-2d', type: 'heading', data: { text: '2D Momentum Conservation', level: 2 }, terms: [] },
    { id: 'p-2d', type: 'paragraph', data: { text: 'Momentum is conserved in EACH direction independently. Resolve momentum into x and y components before and after collision. Apply conservation to each direction separately: \u2211px(before) = \u2211px(after) and \u2211py(before) = \u2211py(after).' }, terms: [] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'Ball A (2 kg, 4 m/s east) hits stationary ball B (1 kg). After: A moves at 3 m/s at 30\u00b0 north of east. Find B velocity.\nx: 2(4) = 2(3cos30\u00b0) + 1(vx) \u2192 vx = 8\u22125.20 = 2.80 m/s\ny: 0 = 2(3sin30\u00b0) + 1(vy) \u2192 vy = \u22123.0 m/s\nv = \u221a(2.80\u00b2+3.0\u00b2) = 4.1 m/s' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can resolve momentum into x and y', checked: false }, { text: 'I can solve 2D collision problems', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: 2D conservation works because forces are internal, so no external force in any direction.\n\nApply: Two objects of equal mass collide; one was stationary. Show they move at 90\u00b0 to each other (elastic case).\n\nAnalyze: Why must you resolve components independently rather than just adding magnitudes?\n\nEvaluate: Snooker players use 2D momentum intuitively. Discuss how spin complicates the analysis.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Conserve px and py separately. Resolve velocities into components. Reconstruct: v=\u221a(vx\u00b2+vy\u00b2), \u03b8=tan\u207b\u00b9(vy/vx).' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'p-2d', prompt: 'How do you apply momentum conservation in 2D?' }], summaryText: 'Conserve px and py independently. Resolve, solve, reconstruct.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 5', detail: '2D momentum', year: '2021', source: 'Pearson Edexcel', tags: ['momentum', '2D'] }],
};
