export const note_physics_2_3_3 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand superposition, constructive and destructive interference, path difference and coherence.' }, terms: ['superposition', 'interference', 'coherence'] },
    { id: 'h-super', type: 'heading', data: { text: 'Superposition and Interference', level: 2 }, terms: [] },
    { id: 'p-super', type: 'paragraph', data: { text: 'Principle of superposition: when two waves meet, the resultant displacement equals the sum of individual displacements. Constructive interference: waves in phase (path diff = n\u03bb). Destructive: antiphase (path diff = (n+\u00bd)\u03bb).' }, terms: ['superposition'] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Conditions for Interference Pattern', text: '\u2022 Coherent sources: same frequency and constant phase difference\n\u2022 Similar amplitudes for clear pattern\n\u2022 Path difference determines constructive or destructive' }, terms: ['coherence'] },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Young\'s Double Slit', text: 'Fringe spacing: w = \u03bbD/s where D = slit-to-screen distance, s = slit separation.\nCentral maximum is always bright. Moving away: alternating bright/dark fringes.' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can state the superposition principle', checked: false }, { text: 'I can explain constructive and destructive interference', checked: false }, { text: 'I can use w=\u03bbD/s', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Interference provides evidence for the wave nature of light. It requires coherent sources because random phase changes would blur the pattern.\n\nApply: Double slit: s=0.5 mm, D=2 m, \u03bb=600 nm. Calculate fringe spacing.\n\nAnalyze: Why does white light produce coloured fringes in Young\'s experiment?\n\nEvaluate: Young\'s experiment settled the wave vs particle debate for light. But photons exist. Discuss.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Superposition: resultant = sum of displacements. Constructive: path diff=n\u03bb. Destructive: (n+\u00bd)\u03bb. Coherent = same f, constant phase diff. w=\u03bbD/s.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'p-super', prompt: 'State the superposition principle.' },
    { id: 'cue-2', blockId: 'callout-tip', prompt: 'State Young\'s double slit fringe spacing formula.' },
  ], summaryText: 'Superposition: sum of displacements. Constructive: n\u03bb. Destructive: (n+\u00bd)\u03bb. w=\u03bbD/s.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 3', detail: 'Superposition and interference', year: '2021', source: 'Pearson Edexcel', tags: ['interference'] }],
};
