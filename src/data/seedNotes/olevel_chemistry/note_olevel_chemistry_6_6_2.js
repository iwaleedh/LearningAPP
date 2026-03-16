export const note_olevel_chemistry_6_6_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-1-3-collision-theory.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain rate of reaction in terms of collision theory: collision frequency, collision energy, and activation energy.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Collision Theory', level: 2 }
    },
    {
      id: 'call-core',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Core Idea',
        text: 'For a reaction to occur, reacting particles must:<br/>1. <strong>Collide</strong> with each other<br/>2. Have <strong>sufficient energy</strong> to overcome the activation energy (Eₐ)<br/>3. Have the correct <strong>orientation</strong><br/><br/>Only a small fraction of all collisions result in a reaction — these are called <strong>successful (effective) collisions</strong>.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Activation Energy', level: 2 }
    },
    {
      id: 'call-Ea',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Activation Energy (Eₐ)',
        text: '<strong>Activation energy (Eₐ)</strong> is the minimum energy that colliding particles must possess for a reaction to occur.<br/><br/>If colliding particles have energy &lt; Eₐ → they bounce off without reacting (elastic collision).<br/>If colliding particles have energy ≥ Eₐ → bonds break and new bonds form → reaction occurs.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Maxwell–Boltzmann Distribution', level: 2 }
    },
    {
      id: 'call-maxwell',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Energy Distribution Curve',
        text: 'The Maxwell–Boltzmann distribution shows the <strong>spread of kinetic energies</strong> in a gas at a given temperature.<br/><br/>Key features:<br/>• Starts at origin (no particles have zero energy)<br/>• Rises to a peak (most probable energy)<br/>• Long tail to the right (a few particles have very high energies)<br/>• Area under curve = total number of particles (constant)<br/>• Shaded area to the right of Eₐ = particles with enough energy to react<br/><br/>At higher temperature:<br/>• Curve shifts right and flattens<br/>• Peak moves right (higher most probable energy)<br/>• <strong>Larger shaded area</strong> → more particles exceed Eₐ → faster rate'
      }
    },
    {
      id: 'call-catalyst-curve',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Effect of Catalyst on the Energy Curve',
        text: 'A catalyst does NOT change the distribution of energies — the curve stays the same.<br/><br/>Instead, the vertical Eₐ line shifts <strong>to the left</strong> (lower Eₐ), so a <strong>larger fraction</strong> of particles now have enough energy to react → faster rate.<br/><br/>This is why both a catalyst and a temperature increase speed up reactions — but via different mechanisms.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Collision theory: reactions occur when particles collide with energy ≥ Eₐ. The Maxwell–Boltzmann distribution shows how particle energies are spread. Higher temperature shifts the curve right — more particles exceed Eₐ. Catalysts lower Eₐ (not the curve), increasing the fraction of successful collisions.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Successful collisions need correct energy ≥ Eₐ and correct orientation. Maxwell-Boltzmann curve: more particles exceed Eₐ at higher T. Catalyst lowers Eₐ.',
    cues: [
      { id: 'cue-1', blockId: 'call-core', prompt: 'State the two conditions for a successful collision between reactant particles.', answer: 'They must collide (1) with sufficient energy ≥ activation energy and (2) in the correct orientation.' },
      { id: 'cue-2', blockId: 'call-Ea', prompt: 'What is activation energy?', answer: 'The minimum energy that colliding particles must possess for a reaction to occur.' },
      { id: 'cue-3', blockId: 'call-maxwell', prompt: 'Describe how the Maxwell–Boltzmann curve changes at higher temperature.', answer: 'The curve shifts to the right and flattens; the peak moves to higher energy; the area under the curve stays the same but a larger proportion of particles have energies ≥ Eₐ.' }
    ]
  },
  evidence: [],
  mentions: []
};
