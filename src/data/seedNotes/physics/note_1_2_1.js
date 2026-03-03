export const note_physics_1_2_1 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand viscosity, viscous drag and Stokes\' Law; explain terminal velocity for falling spheres.' }, terms: ['viscosity', 'Stokes Law', 'terminal velocity'] },
    { id: 'h-visc', type: 'heading', data: { text: 'Viscosity and Stokes\' Law', level: 2 }, terms: [] },
    { id: 'p-visc', type: 'paragraph', data: { text: 'Viscosity is a measure of a fluid\'s resistance to flow. High viscosity fluids (honey, oil) flow slowly. Viscous drag is the resistive force on an object moving through a fluid.' }, terms: ['viscosity'] },
    { id: 'eq-stokes', type: 'equation', data: { html: 'F = 6\u03c0\u03b7rv', caption: 'Stokes\' Law: drag force on a sphere (\u03b7=viscosity, r=radius, v=velocity)' }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Terminal Velocity', text: 'A falling sphere reaches terminal velocity when: weight = upthrust + drag.\nmg = \u03c1Vg + 6\u03c0\u03b7rv_t\nAt terminal velocity, acceleration = 0, net force = 0.' }, terms: ['terminal velocity'] },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Conditions for Stokes\' Law', text: '\u2022 Laminar (streamlined) flow only\n\u2022 Small, smooth, spherical object\n\u2022 Low velocity\n\u2022 Not valid for turbulent flow' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can define viscosity', checked: false }, { text: 'I can apply Stokes\' Law', checked: false }, { text: 'I can explain terminal velocity using forces', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: Terminal velocity occurs when drag force grows to equal the net downward force. Since drag \u221d v (Stokes), velocity increases until equilibrium.\n\nApply: Calculate terminal velocity for a steel ball (r=2mm, \u03c1=7800 kg/m\u00b3) in glycerol (\u03b7=1.5 Pa s, \u03c1=1260 kg/m\u00b3).\n\nAnalyze: Why does a skydiver initially accelerate then reach constant speed? How does opening the parachute affect this?\n\nEvaluate: Stokes\' Law assumes laminar flow. At what point does this assumption break down for a falling raindrop?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Viscosity = fluid resistance. F=6\u03c0\u03b7rv (Stokes, laminar flow). Terminal velocity: weight = upthrust + drag, a=0.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-stokes', prompt: 'State Stokes\' Law and its conditions.' },
    { id: 'cue-2', blockId: 'callout-key', prompt: 'Explain why terminal velocity is reached.' },
  ], summaryText: 'F=6\u03c0\u03b7rv (laminar). Terminal: W=upthrust+drag, a=0.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 2', detail: 'Viscosity and Stokes\' Law', year: '2021', source: 'Pearson Edexcel', tags: ['viscosity', 'Stokes'] }],
};
