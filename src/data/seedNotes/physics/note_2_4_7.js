export const note_physics_2_4_7 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Calculate electrical power and energy; apply P = IV, P = I\u00b2R and P = V\u00b2/R; understand energy dissipation.' }, terms: ['power', 'energy'] },
    { id: 'h-power', type: 'heading', data: { text: 'Power and Energy in Circuits', level: 2 }, terms: [] },
    { id: 'eq-p1', type: 'equation', data: { html: 'P = IV = I\u00b2R = V\u00b2/R', caption: 'Electrical power (watts)' }, terms: [] },
    { id: 'eq-e', type: 'equation', data: { html: 'E = Pt = IVt', caption: 'Energy transferred (joules)' }, terms: [] },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Choosing the Right Formula', text: '\u2022 Know I and R? Use P=I\u00b2R\n\u2022 Know V and R? Use P=V\u00b2/R\n\u2022 Know I and V? Use P=IV\n\u2022 1 kWh = 3.6\u00d710\u2076 J' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate power using three formulas', checked: false }, { text: 'I can calculate energy in joules and kWh', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: P=IV comes from V=W/Q and I=Q/t, giving P=W/t. The other forms use V=IR.\n\nApply: A 60W bulb runs at 240V. Find I and R.\n\nAnalyze: Why does power dissipated in a resistor increase with I\u00b2 but only linearly with V in P=IV?\n\nEvaluate: Power lines use high voltage to reduce I\u00b2R losses. Explain using P=I\u00b2R and P=IV.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'P=IV=I\u00b2R=V\u00b2/R. E=Pt=IVt. 1 kWh=3.6\u00d710\u2076 J. High V reduces transmission losses.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-p1', prompt: 'State three formulas for electrical power.' },
  ], summaryText: 'P=IV=I\u00b2R=V\u00b2/R. E=Pt. 1kWh=3.6MJ.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 4', detail: 'Electrical power', year: '2021', source: 'Pearson Edexcel', tags: ['power'] }],
};
