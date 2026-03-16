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
