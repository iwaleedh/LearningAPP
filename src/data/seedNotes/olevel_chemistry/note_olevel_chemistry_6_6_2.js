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
      id: 'svg-collisions',
      type: 'svg',
      data: {
        caption: 'Collision theory: Unsuccessful vs. Successful collisions.',
        svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />
  
  <line x1="300" y1="20" x2="300" y2="220" stroke="var(--color-border)" stroke-width="2" stroke-dasharray="8,8" />

  <!-- Defs -->
  <defs>
    <radialGradient id="grad-blue" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#7dd3fc" />
      <stop offset="100%" stop-color="#0284c7" />
    </radialGradient>
    <radialGradient id="grad-red" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fca5a5" />
      <stop offset="100%" stop-color="#dc2626" />
    </radialGradient>
    <marker id="arrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="#64748b"/>
    </marker>
    <marker id="arrow-bounce" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="#ef4444"/>
    </marker>
  </defs>

  <!-- LEFT: Unsuccessful Collision -->
  <text x="150" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Unsuccessful Collision</text>
  <text x="150" y="50" font-family="var(--font-sans)" font-size="12" fill="#ef4444" text-anchor="middle">E &lt; Eₐ (Not enough energy)</text>
  
  <!-- Particles approaching slowly -->
  <circle cx="80" cy="110" r="14" fill="url(#grad-blue)" />
  <circle cx="106" cy="110" r="14" fill="url(#grad-blue)" />
  <line x1="80" y1="110" x2="106" y2="110" stroke="#000" stroke-width="2"/>
  <path d="M 60 110 L 40 110" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
  
  <circle cx="220" cy="110" r="14" fill="url(#grad-red)" />
  <circle cx="246" cy="110" r="14" fill="url(#grad-red)" />
  <line x1="220" y1="110" x2="246" y2="110" stroke="#000" stroke-width="2"/>
  <path d="M 266 110 L 286 110" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Boom/Impact lines -->
  <path d="M 140 90 L 145 100 M 150 80 L 155 95 M 165 95 L 175 80 M 175 100 L 185 90 M 140 120 L 150 115" stroke="#ef4444" stroke-width="1.5" />
  
  <!-- Bouncing away -->
  <g transform="translate(0, 40)">
    <!-- Intact Blue -->
    <circle cx="90" cy="140" r="14" fill="url(#grad-blue)" />
    <circle cx="116" cy="140" r="14" fill="url(#grad-blue)" />
    <line x1="90" y1="140" x2="116" y2="140" stroke="#000" stroke-width="2"/>
    <path d="M 130 140 Q 150 145 140 160" stroke="#ef4444" stroke-width="2" fill="none" marker-end="url(#arrow-bounce)"/>
    
    <!-- Intact Red -->
    <circle cx="200" cy="140" r="14" fill="url(#grad-red)" />
    <circle cx="226" cy="140" r="14" fill="url(#grad-red)" />
    <line x1="200" y1="140" x2="226" y2="140" stroke="#000" stroke-width="2"/>
    <path d="M 186 140 Q 166 145 176 160" stroke="#ef4444" stroke-width="2" fill="none" marker-end="url(#arrow-bounce)"/>
  </g>
  <text x="150" y="215" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">Particles bounce off intact.</text>


  <!-- RIGHT: Successful Collision -->
  <text x="450" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Successful Collision</text>
  <text x="450" y="50" font-family="var(--font-sans)" font-size="12" fill="var(--color-success)" text-anchor="middle">E ≥ Eₐ (Sufficient energy)</text>
  
  <!-- Particles approaching FAST -->
  <circle cx="360" cy="110" r="14" fill="url(#grad-blue)" />
  <circle cx="386" cy="110" r="14" fill="url(#grad-blue)" />
  <line x1="360" y1="110" x2="386" y2="110" stroke="#000" stroke-width="2"/>
  <path d="M 330 110 L 310 110 M 340 100 L 320 100 M 340 120 L 320 120" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
  
  <circle cx="514" cy="110" r="14" fill="url(#grad-red)" />
  <circle cx="540" cy="110" r="14" fill="url(#grad-red)" />
  <line x1="514" y1="110" x2="540" y2="110" stroke="#000" stroke-width="2"/>
  <path d="M 570 110 L 590 110 M 560 100 L 580 100 M 560 120 L 580 120" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Heavy Boom lines -->
  <path d="M 430 80 L 440 100 M 450 70 L 450 90 M 470 80 L 460 100 M 420 110 L 440 110 M 480 110 L 460 110 M 430 140 L 440 120 M 470 140 L 460 120" stroke="#f59e0b" stroke-width="3" />
  
  <!-- Products formed -->
  <g transform="translate(0, 40)">
    <!-- Mixed Molecule 1 -->
    <circle cx="390" cy="140" r="14" fill="url(#grad-blue)" />
    <circle cx="416" cy="140" r="14" fill="url(#grad-red)" />
    <line x1="390" y1="140" x2="416" y2="140" stroke="#000" stroke-width="2"/>
    <path d="M 380 140 L 360 150" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
    
    <!-- Mixed Molecule 2 -->
    <circle cx="484" cy="140" r="14" fill="url(#grad-blue)" />
    <circle cx="510" cy="140" r="14" fill="url(#grad-red)" />
    <line x1="484" y1="140" x2="510" y2="140" stroke="#000" stroke-width="2"/>
    <path d="M 520 140 L 540 150" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
  </g>
  <text x="450" y="215" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">Bonds break and new bonds form.</text>

</svg>`
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
