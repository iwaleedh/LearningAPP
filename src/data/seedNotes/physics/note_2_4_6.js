export const note_physics_2_4_6 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand EMF, internal resistance and terminal pd; apply \u03b5 = I(R+r) and V = \u03b5 \u2212 Ir.' }, terms: ['EMF', 'internal resistance'] },
    { id: 'h-emf', type: 'heading', data: { text: 'EMF, Internal Resistance and Terminal PD', level: 2 }, terms: [] },
    { id: 'eq-emf', type: 'equation', data: { html: '\u03b5 = I(R + r)', caption: 'EMF = current \u00d7 (external + internal resistance)' }, terms: [] },
    { id: 'eq-term', type: 'equation', data: { html: 'V = \u03b5 \u2212 Ir', caption: 'Terminal pd = EMF \u2212 lost volts' }, terms: [] },
    { id: 'p-ir', type: 'paragraph', data: { text: 'Every real cell has internal resistance r. Some energy is wasted inside the cell as heat (lost volts = Ir). Terminal pd is what appears across the external circuit. As current increases, lost volts increase and terminal pd decreases.' }, terms: [] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: '\u03b5=1.5V, r=0.5\u03a9, R=4.5\u03a9.\nI = \u03b5/(R+r) = 1.5/5 = 0.3A\nTerminal pd: V = 1.5 \u2212 0.3(0.5) = 1.35V\nLost volts: 0.15V' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can define EMF and internal resistance', checked: false }, { text: 'I can calculate terminal pd and lost volts', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: A graph of V vs I gives a straight line: y-intercept = \u03b5, gradient = \u2212r. This is how we measure \u03b5 and r experimentally.\n\nApply: A cell has \u03b5=6V, r=1\u03a9. A 2\u03a9 and 3\u03a9 resistor are in parallel. Find the current from the cell.\n\nAnalyze: Why can a battery\'s terminal pd never equal its EMF when current flows?\n\nEvaluate: Car batteries have very low r (~0.01\u03a9). Explain why this is essential for starting a car engine.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: '\u03b5=I(R+r). V=\u03b5\u2212Ir. Lost volts=Ir. V vs I graph: intercept=\u03b5, gradient=\u2212r. Terminal pd < EMF when current flows.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-emf', prompt: 'State the equation linking \u03b5, I, R and r.' },
    { id: 'cue-2', blockId: 'eq-term', prompt: 'What determines the terminal pd of a cell?' },
  ], summaryText: '\u03b5=I(R+r). V=\u03b5\u2212Ir. Graph: intercept=\u03b5, gradient=\u2212r.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 4', detail: 'EMF and internal resistance', year: '2021', source: 'Pearson Edexcel', tags: ['EMF', 'internal resistance'] }],
};
