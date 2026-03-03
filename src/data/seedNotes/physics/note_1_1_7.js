export const note_physics_1_1_7 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define and calculate work done, kinetic energy and GPE; apply work-energy theorem and conservation of energy.' }, terms: ['work', 'energy', 'conservation'] },
    { id: 'h-work', type: 'heading', data: { text: 'Work, Energy and Power', level: 2 }, terms: [] },
    { id: 'eq-work', type: 'equation', data: { html: 'W = Fs cos \u03b8', caption: 'Work = force \u00d7 displacement \u00d7 cos(angle) in joules' }, terms: [] },
    { id: 'eq-ke', type: 'equation', data: { html: 'E<sub>k</sub> = \u00bdmv\u00b2', caption: 'Kinetic energy' }, terms: [] },
    { id: 'eq-gpe', type: 'equation', data: { html: 'E<sub>p</sub> = mgh', caption: 'Gravitational potential energy' }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Conservation of Energy', text: 'Energy cannot be created or destroyed, only transferred. For free fall: \u00bdmv\u00b2 + mgh = constant.' }, terms: [] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: '500 kg coaster from rest at 30 m height. Speed at bottom:\nmgh = \u00bdmv\u00b2 \u2192 v = \u221a(2\u00d79.81\u00d730) = 24.3 m/s' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate work done at an angle', checked: false }, { text: 'I can apply energy conservation', checked: false }, { text: 'I can use work = area under F-s graph', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Net work done = change in KE. Energy conservation connects initial and final states path-independently.\n\nApply: 2 kg ball dropped from 10 m bounces to 6 m. Calculate energy lost.\n\nAnalyze: Why does a pendulum stop? Where does the energy go?\n\nEvaluate: Energy is conserved but often becomes heat. Is conservation of energy useful in practice?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'W=Fscos\u03b8. Ek=\u00bdmv\u00b2, Ep=mgh. Total energy conserved. Work=area under F-s graph. Net work=\u0394Ek.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-work', prompt: 'Define work done. When is W=0 despite a force?' },
    { id: 'cue-2', blockId: 'callout-key', prompt: 'State conservation of energy.' },
  ], summaryText: 'W=Fscos\u03b8; Ek=\u00bdmv\u00b2; Ep=mgh. Energy conserved.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 1', detail: 'Work and energy', year: '2021', source: 'Pearson Edexcel', tags: ['work', 'energy'] }],
};
