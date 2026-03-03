export const note_physics_1_2_8 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe Core Practical 3: determination of Young modulus of a metal wire.' }, terms: ['core practical', 'Young modulus'] },
    { id: 'h-cp3', type: 'heading', data: { text: 'Core Practical 3: Young Modulus', level: 2 }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Method', text: '1. Clamp a long thin wire (copper, ~2 m) to a rigid support.\n2. Attach weights to the free end via a pulley.\n3. Measure original length L with metre rule.\n4. Measure wire diameter d with micrometer (3 places, 2 orientations each) \u2192 A = \u03c0d\u00b2/4.\n5. Add masses in increments, measure extension \u0394L with ruler/travelling microscope.\n6. Plot stress (F/A) vs strain (\u0394L/L).\n7. Gradient = Young modulus E.' }, terms: [] },
    { id: 'list-errors', type: 'list', data: { style: 'unordered', items: ['Use long wire to get measurable extension', 'Thin wire for larger strain at accessible forces', 'Micrometer for diameter (biggest source of % error since A\u221dd\u00b2)', 'Reference wire to eliminate thermal expansion', 'Do not exceed elastic limit'] }, terms: [] },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tips', text: '\u2022 Biggest uncertainty is in d because A \u221d d\u00b2 (doubles % error).\n\u2022 Use a reference wire to compensate for temperature changes.\n\u2022 Compare experimental E with accepted values for the metal.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can describe the full method', checked: false }, { text: 'I can explain why long thin wire is used', checked: false }, { text: 'I can calculate E from experimental data', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: The stress-strain graph gradient gives E, a material constant. The method requires careful measurement of small extensions.\n\nApply: Wire L=2.5 m, d=0.28 mm, extends 3.5 mm under 30 N. Calculate E.\n\nAnalyze: Why is d the biggest source of error? If d has 2% uncertainty, what is the uncertainty in A?\n\nEvaluate: Compare this method with nanoindentation for measuring E. Which gives more reliable results and why?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Long thin wire, add masses, measure \u0394L. Plot stress vs strain: gradient = E. Key: micrometer for d (biggest error source). Use reference wire for thermal compensation.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'callout-key', prompt: 'Describe the method for measuring Young modulus.' },
    { id: 'cue-2', blockId: 'list-errors', prompt: 'Why is the diameter measurement the biggest source of uncertainty?' },
  ], summaryText: 'Long wire, add masses, measure \u0394L. Stress vs strain: gradient=E. d is key error source.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 CP3', detail: 'Young modulus of a wire', year: '2021', source: 'Pearson Edexcel', tags: ['practical', 'Young modulus'] }],
};
