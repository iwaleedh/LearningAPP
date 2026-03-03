export const note_physics_5_10_1 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Apply SHM equations for displacement, velocity and acceleration; calculate period of spring and pendulum.' }, terms: ['SHM equations'] },
    { id: 'h-eq', type: 'heading', data: { text: 'SHM Equations and Period', level: 2 }, terms: [] },
    { id: 'eq-x', type: 'equation', data: { html: 'x = A cos(\u03c9t) or x = A sin(\u03c9t)', caption: 'Displacement' }, terms: [] },
    { id: 'eq-v', type: 'equation', data: { html: 'v = \u00b1\u03c9\u221a(A\u00b2 \u2212 x\u00b2)', caption: 'Velocity (max at x=0)' }, terms: [] },
    { id: 'eq-Ts', type: 'equation', data: { html: 'T = 2\u03c0\u221a(m/k)', caption: 'Period of mass-spring system' }, terms: [] },
    { id: 'eq-Tp', type: 'equation', data: { html: 'T = 2\u03c0\u221a(L/g)', caption: 'Period of simple pendulum' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can use SHM displacement and velocity equations', checked: false }, { text: 'I can calculate period for springs and pendulums', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: v is max at equilibrium (x=0) and zero at amplitude (x=\u00b1A). a is max at amplitude and zero at equilibrium.\n\nApply: A 0.5 kg mass on a spring (k=200 N/m) oscillates with A=0.03 m. Find T and max velocity.\n\nAnalyze: Why does the period of a pendulum depend on L and g but NOT mass or amplitude?\n\nEvaluate: Clocks use pendulums because T is independent of amplitude. Discuss the practical limits of this.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'x=Acos\u03c9t. v=\u00b1\u03c9\u221a(A\u00b2\u2212x\u00b2). v_max=\u03c9A. Spring: T=2\u03c0\u221a(m/k). Pendulum: T=2\u03c0\u221a(L/g).' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-Ts', prompt: 'State the period equations for spring and pendulum.' }], summaryText: 'x=Acos\u03c9t. v_max=\u03c9A. T_spring=2\u03c0\u221a(m/k). T_pendulum=2\u03c0\u221a(L/g).', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 10', detail: 'SHM equations', year: '2021', source: 'Pearson Edexcel', tags: ['SHM'] }],
};
