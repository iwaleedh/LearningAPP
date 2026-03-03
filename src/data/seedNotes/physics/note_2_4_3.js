export const note_physics_2_4_3 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Calculate total resistance in series and parallel circuits; analyse current and pd distribution.' }, terms: ['series', 'parallel'] },
    { id: 'h-sp', type: 'heading', data: { text: 'Series and Parallel Circuits', level: 2 }, terms: [] },
    { id: 'callout-series', type: 'callout', data: { style: 'key', title: 'Series Circuits', text: 'Same current through all components. PDs add up: V = V\u2081 + V\u2082 + ...\nR_total = R\u2081 + R\u2082 + ...' }, terms: [] },
    { id: 'callout-parallel', type: 'callout', data: { style: 'key', title: 'Parallel Circuits', text: 'Same pd across all branches. Currents add up: I = I\u2081 + I\u2082 + ...\n1/R_total = 1/R\u2081 + 1/R\u2082 + ...' }, terms: [] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'Two resistors 6\u03a9 and 3\u03a9 in parallel:\n1/R = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2\nR = 2\u03a9' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate total R in series and parallel', checked: false }, { text: 'I can find current and pd in each branch', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Series: charge passes through every component so current is same. Parallel: charge splits so same pd across branches.\n\nApply: Three resistors (2\u03a9, 4\u03a9, 6\u03a9): find R_total in series, then in parallel.\n\nAnalyze: Why is total resistance always LESS than the smallest resistor in parallel?\n\nEvaluate: Household circuits use parallel wiring. Explain the advantages over series for appliances.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Series: same I, V adds, R adds. Parallel: same V, I adds, 1/R adds. Parallel R < smallest individual R.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'callout-series', prompt: 'State rules for series circuits.' },
    { id: 'cue-2', blockId: 'callout-parallel', prompt: 'State rules for parallel circuits.' },
  ], summaryText: 'Series: same I, R adds. Parallel: same V, 1/R adds.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 4', detail: 'Series and parallel', year: '2021', source: 'Pearson Edexcel', tags: ['circuits'] }],
};
