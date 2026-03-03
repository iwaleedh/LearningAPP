export const note_physics_5_9_5 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define and calculate half-life; relate half-life to decay constant; use graphical and algebraic methods.' }, terms: ['half-life'] },
    { id: 'h-hl', type: 'heading', data: { text: 'Half-Life', level: 2 }, terms: [] },
    { id: 'eq-hl', type: 'equation', data: { html: 't<sub>\u00bd</sub> = ln 2 / \u03bb = 0.693 / \u03bb', caption: 'Half-life and decay constant relationship' }, terms: [] },
    { id: 'p-hl', type: 'paragraph', data: { text: 'Half-life is the time for the number of undecayed nuclei (or activity) to halve. It is constant for a given isotope. After n half-lives: N = N\u2080/2\u207f.' }, terms: [] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'Activity drops from 800 Bq to 100 Bq in 9 hours.\n800 \u2192 400 \u2192 200 \u2192 100 = 3 half-lives\nt\u00bd = 9/3 = 3 hours\n\u03bb = 0.693/3 = 0.231 h\u207b\u00b9' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate half-life from data', checked: false }, { text: 'I can use t\u00bd = ln2/\u03bb', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Half-life is constant because decay probability doesn\u2019t change over time \u2014 each nucleus is independent.\n\nApply: \u03bb=0.005 s\u207b\u00b9. Find t\u00bd and the fraction remaining after 300 s.\n\nAnalyze: Why does a ln(N) vs t graph give a straight line? What is the gradient?\n\nEvaluate: Carbon dating uses t\u00bd=5730 years. Discuss limits on dating range and accuracy.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 't\u00bd=0.693/\u03bb. After n half-lives: N=N\u2080/2\u207f. Half-life is constant. ln N vs t: gradient=\u2212\u03bb.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-hl', prompt: 'State the relationship between t\u00bd and \u03bb.' }], summaryText: 't\u00bd=0.693/\u03bb. N=N\u2080/2\u207f. ln N vs t: gradient=\u2212\u03bb.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 9', detail: 'Half-life', year: '2021', source: 'Pearson Edexcel', tags: ['half-life'] }],
};
