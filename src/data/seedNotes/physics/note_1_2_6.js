export const note_physics_1_2_6 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Calculate elastic strain energy from force-extension graphs and using the formula; understand energy storage in springs.' }, terms: ['elastic strain energy'] },
    { id: 'h-energy', type: 'heading', data: { text: 'Elastic Strain Energy', level: 2 }, terms: [] },
    { id: 'eq-energy', type: 'equation', data: { html: 'E = \u00bdF\u0394x = \u00bdk(\u0394x)\u00b2', caption: 'Elastic strain energy (within Hooke\'s Law region)' }, terms: [] },
    { id: 'p-energy', type: 'paragraph', data: { text: 'Elastic strain energy is the energy stored in a deformed material. It equals the area under the force-extension graph. For a spring obeying Hooke\'s Law, the graph is linear and the area is a triangle: E = \u00bdF\u0394x = \u00bdk(\u0394x)\u00b2.' }, terms: ['elastic strain energy'] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'Spring with k=200 N/m compressed by 0.05 m.\nE = \u00bdk(\u0394x)\u00b2 = \u00bd \u00d7 200 \u00d7 0.05\u00b2 = 0.25 J' }, terms: [] },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tips', text: '\u2022 E = \u00bdF\u0394x ONLY for linear (Hooke) region.\n\u2022 For non-linear graphs, find the area under the curve.\n\u2022 Energy stored = area under loading curve.\n\u2022 Energy dissipated = area between loading and unloading curves (hysteresis).' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate elastic strain energy', checked: false }, { text: 'I can find energy from F-x graphs', checked: false }, { text: 'I can calculate energy dissipated from hysteresis', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: The area under F-x graph represents work done on the material. If elastic, this is fully stored; if plastic, some is dissipated as heat.\n\nApply: A spring (k=500 N/m) is extended 0.04 m. The mass is released. Find the max speed of the 0.1 kg mass.\n\nAnalyze: Why is E=\u00bdF\u0394x but NOT F\u0394x? Relate to the varying force during stretching.\n\nEvaluate: Bungee cords must absorb kinetic energy elastically. What properties would you specify for the cord material?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'E=\u00bdF\u0394x=\u00bdk(\u0394x)\u00b2 (Hooke region only). Area under F-x graph = energy stored. Hysteresis area = energy dissipated as heat.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-energy', prompt: 'State the formula for elastic strain energy.' },
    { id: 'cue-2', blockId: 'callout-tip', prompt: 'How do you find energy from a non-linear F-x graph?' },
  ], summaryText: 'E=\u00bdF\u0394x=\u00bdk\u0394x\u00b2. Area under F-x = energy. Hysteresis area = heat.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 2', detail: 'Elastic strain energy', year: '2021', source: 'Pearson Edexcel', tags: ['energy', 'springs'] }],
};
