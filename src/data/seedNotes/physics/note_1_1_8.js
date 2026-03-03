export const note_physics_1_1_8 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define power and efficiency; calculate power from force and velocity; understand energy transfers in practical situations.' }, terms: ['power', 'efficiency'] },
    { id: 'h-power', type: 'heading', data: { text: 'Power and Efficiency', level: 2 }, terms: [] },
    { id: 'eq-power', type: 'equation', data: { html: 'P = W/t = E/t', caption: 'Power = work/time = energy transferred/time (watts)' }, terms: [] },
    { id: 'eq-pv', type: 'equation', data: { html: 'P = Fv', caption: 'Power = force \u00d7 velocity (constant v)' }, terms: [] },
    { id: 'eq-eff', type: 'equation', data: { html: '\u03b7 = (useful output / total input) \u00d7 100%', caption: 'Efficiency' }, terms: [] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'Car at constant 30 m/s, resistive force 800 N.\nDriving force = 800 N (constant v)\nP = Fv = 800\u00d730 = 24 kW' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate power from work and time', checked: false }, { text: 'I can use P=Fv', checked: false }, { text: 'I can calculate efficiency', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Power measures how quickly energy is transferred. P=Fv shows more power needed at higher speeds for the same resistive force.\n\nApply: Motor lifts 200 kg load 15 m in 10 s. Find power output and efficiency if input is 4 kW.\n\nAnalyze: Why does a car need more fuel per km at high speed? Relate to drag\u221dv\u00b2 and P=Fv.\n\nEvaluate: Electric motor 95% efficient vs petrol 25%. Does efficiency alone determine which is better?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'P=W/t=E/t (watts). P=Fv at constant v. Efficiency=useful/total\u00d7100%. Always <100%.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-power', prompt: 'Define power and state its unit.' },
    { id: 'cue-2', blockId: 'eq-pv', prompt: 'When does P=Fv apply?' },
  ], summaryText: 'P=W/t (watts). P=Fv at constant v. Efficiency<100%.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 1', detail: 'Power and efficiency', year: '2021', source: 'Pearson Edexcel', tags: ['power', 'efficiency'] }],
};
