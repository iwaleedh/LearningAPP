export const note_physics_5_11_5 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Interpret the Hertzsprung-Russell diagram; identify main sequence, giants, supergiants and white dwarfs.' }, terms: ['HR diagram'] },
    { id: 'h-hr', type: 'heading', data: { text: 'Hertzsprung-Russell Diagram', level: 2 }, terms: [] },
    { id: 'p-hr', type: 'paragraph', data: { text: 'HR diagram plots luminosity (y) vs temperature/spectral class (x, reversed: hot left, cool right). Main sequence: diagonal band (hydrogen fusion). Giants/supergiants: upper right (cool but very luminous = large). White dwarfs: lower left (hot but dim = small).' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can identify regions on the HR diagram', checked: false }, { text: 'I can describe how stars evolve across the HR diagram', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Position on HR diagram tells us about a star\u2019s size, temperature, luminosity and evolutionary stage.\n\nApply: A star is cool but very luminous. Where is it on the HR diagram? What does this tell us about its size?\n\nAnalyze: Why do massive stars spend less time on the main sequence?\n\nEvaluate: The Sun will become a red giant then white dwarf. Trace this path on the HR diagram.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'HR: L vs T (T reversed). Main sequence: H fusion diagonal. Giants: upper right. White dwarfs: lower left. Position reveals size and evolution.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'p-hr', prompt: 'Describe the HR diagram regions.' }], summaryText: 'HR: L vs T. Main sequence, giants (upper-right), white dwarfs (lower-left).', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 11', detail: 'HR diagram', year: '2021', source: 'Pearson Edexcel', tags: ['HR diagram'] }],
};
