export const note_physics_5_9_2 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand background radiation; identify sources and explain how to account for it in experiments.' }, terms: ['background radiation'] },
    { id: 'h-bg', type: 'heading', data: { text: 'Background Radiation', level: 2 }, terms: [] },
    { id: 'list-bg', type: 'list', data: { style: 'unordered', items: ['Natural sources (~85%): radon gas, rocks, cosmic rays, food/drink', 'Artificial sources (~15%): medical (X-rays), nuclear industry, fallout', 'Always measure background count rate FIRST, then subtract from readings', 'Corrected count rate = measured rate \u2212 background rate'] }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can list sources of background radiation', checked: false }, { text: 'I can correct for background in calculations', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Background radiation is always present. Without subtracting it, decay measurements will be systematically too high.\n\nApply: Background = 30 counts/min. Source reads 270 counts/min. Find corrected rate and activity.\n\nAnalyze: Why does radon contribute the most to natural background?\n\nEvaluate: Is the natural background radiation dangerous? Discuss dose vs risk.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Background: radon, cosmic, rocks, medical. Always subtract background. Corrected rate = measured \u2212 background.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'list-bg', prompt: 'List sources of background radiation and how to correct for it.' }], summaryText: 'Sources: radon, cosmic, rocks. Subtract background from readings.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 9', detail: 'Background radiation', year: '2021', source: 'Pearson Edexcel', tags: ['radiation'] }],
};
