export const note_olevel_chemistry_1_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/1 States Of Matter/1-1-1-kinetic-theory.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the kinetic particle theory, describe particle arrangement and movement in solids, liquids and gases, and use the theory to explain physical properties.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Kinetic Particle Theory', level: 2 }
    },
    {
      id: 'call-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Core Statement',
        text: 'All matter is made of tiny particles (atoms, molecules or ions) that are in <strong>constant, random motion</strong>. The higher the temperature, the greater the kinetic energy of the particles and the faster they move.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Particle Descriptions of the Three States', level: 2 }
    },
    {
      id: 'tbl-states',
      type: 'comparisonTable',
      data: {
        caption: 'Particle arrangement and movement in solids, liquids and gases',
        headers: ['Property', 'Solid', 'Liquid', 'Gas'],
        rows: [
          ['Particle arrangement', 'Closely packed, regular lattice', 'Close together, irregular/random', 'Far apart, random'],
          ['Particle movement', 'Vibrate about fixed positions only', 'Move around each other, flow freely', 'Move rapidly in all directions'],
          ['Forces between particles', 'Very strong', 'Moderate', 'Very weak (negligible)'],
          ['Shape', 'Fixed shape', 'Takes shape of container (bottom)', 'Fills entire container'],
          ['Volume', 'Fixed volume', 'Fixed volume', 'No fixed volume'],
          ['Density', 'High', 'Moderate', 'Very low'],
          ['Compressibility', 'Incompressible', 'Almost incompressible', 'Highly compressible']
        ]
      }
    },
    {
      id: 'svg-states-of-matter',
      type: 'svg',
      data: {
        caption: 'Particle arrangement in the three states of matter',
        svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Solid Particle Gradient -->
    <radialGradient id="solidParticle" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </radialGradient>
    
    <!-- Liquid Particle Gradient -->
    <radialGradient id="liquidParticle" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="100%" stop-color="#2563eb" />
    </radialGradient>
    
    <!-- Gas Particle Gradient -->
    <radialGradient id="gasParticle" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#93c5fd" />
      <stop offset="100%" stop-color="#3b82f6" />
    </radialGradient>
    
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
      <path d="M 0,0 L 10,5 L 0,10 z" fill="#ef4444" />
    </marker>
  </defs>

  <g transform="translate(0, 20)">
    <!-- Solid Panel -->
    <g transform="translate(40, 0)">
      <!-- Container -->
      <path d="M 20,20 L 20,180 L 180,180 L 180,20" fill="none" stroke="var(--color-border)" stroke-width="3" />
      <text x="100" y="210" text-anchor="middle" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="var(--color-text)">SOLID</text>
      <text x="100" y="230" text-anchor="middle" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">Regular lattice, vibrating</text>
      
      <!-- Solid Particles (10x5 grid starting from bottom left) -->
      <g transform="translate(30, 85)">
        <!-- Row 1 (top) -->
        <circle cx="20" cy="10" r="8" fill="url(#solidParticle)" />
        <circle cx="40" cy="10" r="8" fill="url(#solidParticle)" />
        <circle cx="60" cy="10" r="8" fill="url(#solidParticle)" />
        <circle cx="80" cy="10" r="8" fill="url(#solidParticle)" />
        <circle cx="100" cy="10" r="8" fill="url(#solidParticle)" />
        <circle cx="120" cy="10" r="8" fill="url(#solidParticle)" />
        
        <!-- Row 2 -->
        <circle cx="20" cy="30" r="8" fill="url(#solidParticle)" />
        <circle cx="40" cy="30" r="8" fill="url(#solidParticle)" />
        <circle cx="60" cy="30" r="8" fill="url(#solidParticle)" />
        <circle cx="80" cy="30" r="8" fill="url(#solidParticle)" />
        <circle cx="100" cy="30" r="8" fill="url(#solidParticle)" />
        <circle cx="120" cy="30" r="8" fill="url(#solidParticle)" />

        <!-- Row 3 -->
        <circle cx="20" cy="50" r="8" fill="url(#solidParticle)" />
        <circle cx="40" cy="50" r="8" fill="url(#solidParticle)" />
        <circle cx="60" cy="50" r="8" fill="url(#solidParticle)" />
        <circle cx="80" cy="50" r="8" fill="url(#solidParticle)" />
        <circle cx="100" cy="50" r="8" fill="url(#solidParticle)" />
        <circle cx="120" cy="50" r="8" fill="url(#solidParticle)" />

        <!-- Row 4 -->
        <circle cx="20" cy="70" r="8" fill="url(#solidParticle)" />
        <circle cx="40" cy="70" r="8" fill="url(#solidParticle)" />
        <circle cx="60" cy="70" r="8" fill="url(#solidParticle)" />
        <circle cx="80" cy="70" r="8" fill="url(#solidParticle)" />
        <circle cx="100" cy="70" r="8" fill="url(#solidParticle)" />
        <circle cx="120" cy="70" r="8" fill="url(#solidParticle)" />
      </g>
      
      <!-- Vibration lines -->
      <path d="M 45,90 Q 50,85 45,80" fill="none" stroke="#ef4444" stroke-width="1.5" />
      <path d="M 125,110 Q 130,105 125,100" fill="none" stroke="#ef4444" stroke-width="1.5" />
      <path d="M 65,150 Q 70,145 65,140" fill="none" stroke="#ef4444" stroke-width="1.5" />
    </g>

    <!-- Liquid Panel -->
    <g transform="translate(300, 0)">
      <!-- Container -->
      <path d="M 20,20 L 20,180 L 180,180 L 180,20" fill="none" stroke="var(--color-border)" stroke-width="3" />
      <text x="100" y="210" text-anchor="middle" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="var(--color-text)">LIQUID</text>
      <text x="100" y="230" text-anchor="middle" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">Random but touching</text>

      <!-- Liquid Particles (randomly clumped at bottom) -->
      <circle cx="40" cy="170" r="8" fill="url(#liquidParticle)" />
      <circle cx="58" cy="168" r="8" fill="url(#liquidParticle)" />
      <circle cx="75" cy="172" r="8" fill="url(#liquidParticle)" />
      <circle cx="92" cy="165" r="8" fill="url(#liquidParticle)" />
      <circle cx="110" cy="170" r="8" fill="url(#liquidParticle)" />
      <circle cx="128" cy="168" r="8" fill="url(#liquidParticle)" />
      <circle cx="145" cy="172" r="8" fill="url(#liquidParticle)" />
      <circle cx="162" cy="165" r="8" fill="url(#liquidParticle)" />
      
      <circle cx="45" cy="154" r="8" fill="url(#liquidParticle)" />
      <circle cx="63" cy="150" r="8" fill="url(#liquidParticle)" />
      <circle cx="80" cy="155" r="8" fill="url(#liquidParticle)" />
      <circle cx="98" cy="148" r="8" fill="url(#liquidParticle)" />
      <circle cx="115" cy="152" r="8" fill="url(#liquidParticle)" />
      <circle cx="132" cy="150" r="8" fill="url(#liquidParticle)" />
      <circle cx="150" cy="154" r="8" fill="url(#liquidParticle)" />

      <circle cx="55" cy="135" r="8" fill="url(#liquidParticle)" />
      <circle cx="72" cy="138" r="8" fill="url(#liquidParticle)" />
      <circle cx="90" cy="132" r="8" fill="url(#liquidParticle)" />
      <circle cx="108" cy="136" r="8" fill="url(#liquidParticle)" />
      <circle cx="125" cy="133" r="8" fill="url(#liquidParticle)" />
      <circle cx="142" cy="137" r="8" fill="url(#liquidParticle)" />

      <circle cx="68" cy="120" r="8" fill="url(#liquidParticle)" />
      <circle cx="86" cy="116" r="8" fill="url(#liquidParticle)" />
      <circle cx="104" cy="122" r="8" fill="url(#liquidParticle)" />
      <circle cx="122" cy="118" r="8" fill="url(#liquidParticle)" />

      <!-- Movement arrows -->
      <path d="M 68,110 Q 75,100 85,105" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow)" />
      <path d="M 122,108 Q 130,95 140,105" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow)" />
      <path d="M 90,145 Q 85,155 75,150" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow)" />
    </g>

    <!-- Gas Panel -->
    <g transform="translate(560, 0)">
      <!-- Container -->
      <path d="M 20,20 L 20,180 L 180,180 L 180,20 Z" fill="none" stroke="var(--color-border)" stroke-width="3" />
      <text x="100" y="210" text-anchor="middle" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="var(--color-text)">GAS</text>
      <text x="100" y="230" text-anchor="middle" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">Far apart, fast moving</text>

      <!-- Gas Particles (scattered everywhere) -->
      <circle cx="60" cy="60" r="8" fill="url(#gasParticle)" />
      <circle cx="140" cy="50" r="8" fill="url(#gasParticle)" />
      <circle cx="100" cy="100" r="8" fill="url(#gasParticle)" />
      <circle cx="50" cy="140" r="8" fill="url(#gasParticle)" />
      <circle cx="130" cy="150" r="8" fill="url(#gasParticle)" />
      <circle cx="160" cy="100" r="8" fill="url(#gasParticle)" />
      <circle cx="80" cy="160" r="8" fill="url(#gasParticle)" />
      <circle cx="30" cy="90" r="8" fill="url(#gasParticle)" />

      <!-- Long movement arrows -->
      <path d="M 60,60 L 85,35" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow)" />
      <path d="M 140,50 L 115,35" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow)" />
      <path d="M 100,100 L 130,80" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow)" />
      <path d="M 50,140 L 70,115" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow)" />
      <path d="M 130,150 L 105,170" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow)" />
      <path d="M 160,100 L 175,120" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow)" />
      <path d="M 80,160 L 50,170" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow)" />
      <path d="M 30,90 L 35,60" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow)" />
    </g>
  </g>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Evidence for the Kinetic Theory', level: 2 }
    },
    {
      id: 'call-brownian',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Brownian Motion',
        text: '<strong>Brownian motion</strong> is the random, erratic movement of small visible particles (e.g. smoke particles, pollen grains) suspended in a fluid (liquid or gas).<br/><br/>It is caused by the <strong>unequal bombardment</strong> of the larger particles by the many tiny, invisible, fast-moving molecules of the surrounding medium.<br/><br/>This provides direct evidence that particles in liquids and gases are in constant, random motion and that particles too small to see are hitting the visible ones.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Explaining Properties Using Kinetic Theory', level: 2 }
    },
    {
      id: 'list-explain',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Solids are hard and keep their shape</strong> — particles held in fixed positions by strong forces; can only vibrate.' },
          { text: '<strong>Liquids flow and take the shape of a container</strong> — particles have enough energy to move past each other but stay close.' },
          { text: '<strong>Gases fill any container</strong> — particles have high kinetic energy and very weak intermolecular forces; they spread out to fill available space.' },
          { text: '<strong>Gases are compressible</strong> — large gaps between particles allow them to be pushed closer together.' },
          { text: '<strong>Gas pressure increases with temperature</strong> — faster particles hit container walls more often and with greater force.' }
        ]
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Describing Particle Motion',
        text: 'When describing particles in a gas, always say they move <strong>rapidly</strong> and <strong>randomly</strong> in all directions. For solids, say particles <strong>vibrate about fixed positions</strong> — do not say they "do not move".'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'All matter consists of constantly moving particles; the kinetic particle theory explains the properties of solids (fixed arrangement, vibration), liquids (flow, close particles) and gases (rapid random movement, far apart). Brownian motion is observable evidence for this theory.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'All matter is made of moving particles; kinetic energy increases with temperature and explains properties of solids, liquids and gases.',
    cues: [
      { id: 'cue-1', blockId: 'call-key1', prompt: 'State the key idea of the kinetic particle theory.', answer: 'All matter is made of tiny particles in constant, random motion. The higher the temperature, the greater the kinetic energy of the particles.' },
      { id: 'cue-2', blockId: 'tbl-states', prompt: 'Compare particle arrangement in solids, liquids and gases.', answer: 'Solid: closely packed in regular lattice, vibrate only. Liquid: close together but randomly arranged, can move past each other. Gas: far apart, move rapidly and randomly in all directions.' },
      { id: 'cue-3', blockId: 'call-brownian', prompt: 'What is Brownian motion and what does it prove?', answer: 'Brownian motion is the random erratic movement of visible particles (e.g. smoke) caused by unequal bombardment by invisible fast-moving molecules. It proves particles are in constant random motion.' },
      { id: 'cue-4', blockId: 'list-explain', prompt: 'Why are gases compressible but solids are not?', answer: 'In gases, particles are far apart with large gaps so they can be pushed closer together. In solids, particles are already closely packed and held by strong forces, so there is little space to compress.' }
    ]
  },
  evidence: [],
  mentions: []
};
