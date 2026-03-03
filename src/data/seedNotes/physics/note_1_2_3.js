export const note_physics_1_2_3 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define stress, strain and Young modulus; calculate values and interpret stress-strain graphs for different materials.' }, terms: ['stress', 'strain', 'Young modulus'] },
    { id: 'h-stress', type: 'heading', data: { text: 'Stress, Strain and Young Modulus', level: 2 }, terms: [] },
    { id: 'eq-stress', type: 'equation', data: { html: '\u03c3 = F / A', caption: 'Stress = force / cross-sectional area (Pa or N/m\u00b2)' }, terms: [] },
    { id: 'eq-strain', type: 'equation', data: { html: '\u03b5 = \u0394L / L', caption: 'Strain = extension / original length (dimensionless)' }, terms: [] },
    { id: 'eq-young', type: 'equation', data: { html: 'E = \u03c3 / \u03b5 = FL / A\u0394L', caption: 'Young modulus = stress / strain (Pa)' }, terms: [] },
    { id: 'p-young', type: 'paragraph', data: { text: 'Young modulus E is a material property measuring stiffness. It is the gradient of the linear region of a stress-strain graph. Higher E means stiffer material. Steel: ~200 GPa, Copper: ~130 GPa, Rubber: ~0.01 GPa.' }, terms: ['Young modulus'] },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tips', text: '\u2022 Stress-strain is a MATERIAL property; force-extension depends on dimensions.\n\u2022 Young modulus = gradient of linear part of stress-strain graph.\n\u2022 Units of E: Pa (same as stress, since strain is dimensionless).' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can define stress, strain and Young modulus', checked: false }, { text: 'I can calculate Young modulus from data', checked: false }, { text: 'I can find E from a stress-strain graph', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Stress-strain graphs normalise for size, letting us compare different materials directly. Young modulus is independent of sample dimensions.\n\nApply: A steel wire (L=2 m, d=0.5 mm, E=200 GPa) supports 50 N. Calculate the extension.\n\nAnalyze: Why do engineers use stress-strain graphs rather than force-extension graphs?\n\nEvaluate: Carbon fibre has higher E and lower density than steel. Discuss why it isn\'t used everywhere.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: '\u03c3=F/A (Pa), \u03b5=\u0394L/L (no units), E=\u03c3/\u03b5 (Pa). E = gradient of linear stress-strain region. Material property, independent of dimensions.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-stress', prompt: 'Define stress, strain and Young modulus.' },
    { id: 'cue-2', blockId: 'eq-young', prompt: 'How do you find E from a stress-strain graph?' },
  ], summaryText: '\u03c3=F/A, \u03b5=\u0394L/L, E=\u03c3/\u03b5. E=gradient of linear region.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 2', detail: 'Stress, strain, Young modulus', year: '2021', source: 'Pearson Edexcel', tags: ['stress', 'strain', 'Young modulus'] }],
};
