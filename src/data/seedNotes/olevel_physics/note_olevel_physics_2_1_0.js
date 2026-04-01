export const note_olevel_physics_2_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/2 Thermal Physics/2-1-1-kinetic-particle-model.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Describe the arrangement and motion of particles in solids, liquids and gases; use the kinetic particle model to explain the properties of each state; describe Brownian motion as evidence for random particle motion.',
      },
    },
    {
      id: 'h-states',
      type: 'heading',
      data: { text: 'States of Matter', level: 2 },
    },
    {
      id: 'p-states-intro',
      type: 'paragraph',
      data: {
        text: 'All matter is made of tiny particles (atoms, molecules or ions) that are in constant motion. The three states of matter — <strong>solid</strong>, <strong>liquid</strong> and <strong>gas</strong> — differ in how closely packed these particles are, how they move, and how strongly they attract one another.',
      },
    },
    {
      id: 'svg-states',
      type: 'svg',
      data: {
        caption: 'Particle arrangement in solids, liquids and gases',
        svg: `<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif" font-size="13">
  <!-- SOLID -->
  <rect x="10" y="10" width="160" height="160" rx="8" fill="#2d2d72" stroke="#3b82f6" stroke-width="2"/>
  <text x="90" y="185" text-anchor="middle" fill="#3b82f6" font-weight="600">Solid</text>
  <circle cx="45" cy="45" r="12" fill="#3b82f6" opacity="0.85"/>
  <circle cx="90" cy="45" r="12" fill="#3b82f6" opacity="0.85"/>
  <circle cx="135" cy="45" r="12" fill="#3b82f6" opacity="0.85"/>
  <circle cx="45" cy="90" r="12" fill="#3b82f6" opacity="0.85"/>
  <circle cx="90" cy="90" r="12" fill="#3b82f6" opacity="0.85"/>
  <circle cx="135" cy="90" r="12" fill="#3b82f6" opacity="0.85"/>
  <circle cx="45" cy="135" r="12" fill="#3b82f6" opacity="0.85"/>
  <circle cx="90" cy="135" r="12" fill="#3b82f6" opacity="0.85"/>
  <circle cx="135" cy="135" r="12" fill="#3b82f6" opacity="0.85"/>
  <!-- LIQUID -->
  <rect x="190" y="10" width="160" height="160" rx="8" fill="#1c3a64" stroke="#3b82f6" stroke-width="2"/>
  <text x="270" y="185" text-anchor="middle" fill="#3b82f6" font-weight="600">Liquid</text>
  <circle cx="220" cy="50" r="12" fill="#3b82f6" opacity="0.8"/>
  <circle cx="260" cy="38" r="12" fill="#3b82f6" opacity="0.8"/>
  <circle cx="305" cy="55" r="12" fill="#3b82f6" opacity="0.8"/>
  <circle cx="335" cy="38" r="12" fill="#3b82f6" opacity="0.8"/>
  <circle cx="205" cy="92" r="12" fill="#3b82f6" opacity="0.8"/>
  <circle cx="248" cy="85" r="12" fill="#3b82f6" opacity="0.8"/>
  <circle cx="290" cy="100" r="12" fill="#3b82f6" opacity="0.8"/>
  <circle cx="333" cy="88" r="12" fill="#3b82f6" opacity="0.8"/>
  <circle cx="218" cy="135" r="12" fill="#3b82f6" opacity="0.8"/>
  <circle cx="265" cy="128" r="12" fill="#3b82f6" opacity="0.8"/>
  <circle cx="315" cy="140" r="12" fill="#3b82f6" opacity="0.8"/>
  <!-- GAS -->
  <rect x="370" y="10" width="160" height="160" rx="8" fill="#3b1460" stroke="#9333ea" stroke-width="2"/>
  <text x="450" y="185" text-anchor="middle" fill="#9333ea" font-weight="600">Gas</text>
  <circle cx="400" cy="35" r="10" fill="#9333ea" opacity="0.75"/>
  <circle cx="500" cy="50" r="10" fill="#9333ea" opacity="0.75"/>
  <circle cx="440" cy="100" r="10" fill="#9333ea" opacity="0.75"/>
  <circle cx="390" cy="145" r="10" fill="#9333ea" opacity="0.75"/>
  <circle cx="510" cy="130" r="10" fill="#9333ea" opacity="0.75"/>
  <circle cx="460" cy="155" r="10" fill="#9333ea" opacity="0.75"/>
  <!-- motion arrows gas -->
  <line x1="400" y1="35" x2="418" y2="22" stroke="#9333ea" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="500" y1="50" x2="515" y2="38" stroke="#9333ea" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="440" y1="100" x2="425" y2="115" stroke="#9333ea" stroke-width="1.5" marker-end="url(#arr)"/>
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L0,6 L6,3 z" fill="#9333ea"/>
    </marker>
  </defs>
</svg>`,
      },
    },
    {
      id: 'h-solid',
      type: 'heading',
      data: { text: 'Solid', level: 3 },
    },
    {
      id: 'list-solid',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Arrangement:</strong> Particles are packed in a regular, ordered lattice.' },
          { text: '<strong>Movement:</strong> Particles vibrate about fixed positions — they do not move from place to place.' },
          { text: '<strong>Forces:</strong> Very strong intermolecular forces hold particles close together.' },
          { text: '<strong>Shape & volume:</strong> Fixed shape and fixed volume.' },
        ],
      },
    },
    {
      id: 'h-liquid',
      type: 'heading',
      data: { text: 'Liquid', level: 3 },
    },
    {
      id: 'list-liquid',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Arrangement:</strong> Particles are close together but in a random, disordered arrangement.' },
          { text: '<strong>Movement:</strong> Particles can slide past one another and move randomly throughout the liquid.' },
          { text: '<strong>Forces:</strong> Moderate intermolecular forces — weaker than in solids.' },
          { text: '<strong>Shape & volume:</strong> No fixed shape (takes shape of container); fixed volume.' },
        ],
      },
    },
    {
      id: 'h-gas',
      type: 'heading',
      data: { text: 'Gas', level: 3 },
    },
    {
      id: 'list-gas',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Arrangement:</strong> Particles are widely separated and distributed randomly throughout the container.' },
          { text: '<strong>Movement:</strong> Particles move rapidly and randomly in all directions.' },
          { text: '<strong>Forces:</strong> Negligible intermolecular forces — particles interact only during collisions.' },
          { text: '<strong>Shape & volume:</strong> No fixed shape and no fixed volume — fills any container.' },
        ],
      },
    },
    {
      id: 'h-comparison',
      type: 'heading',
      data: { text: 'Comparison of the Three States', level: 2 },
    },
    {
      id: 'table-states',
      type: 'comparisonTable',
      data: {
        caption: 'Properties of solids, liquids and gases',
        headers: ['Property', 'Solid', 'Liquid', 'Gas'],
        rows: [
          ['Arrangement', 'Regular lattice', 'Random, close', 'Random, far apart'],
          ['Particle spacing', 'Very close (touching)', 'Close (touching)', 'Very far apart (≈10× liquid)'],
          ['Movement', 'Vibrate about fixed positions', 'Slide past each other', 'Move freely at high speed'],
          ['Intermolecular forces', 'Very strong', 'Moderate', 'Negligible'],
          ['Shape', 'Fixed', 'Takes shape of container', 'Fills container'],
          ['Volume', 'Fixed', 'Fixed', 'Not fixed'],
          ['Compressibility', 'Virtually incompressible', 'Virtually incompressible', 'Highly compressible'],
        ],
      },
    },
    {
      id: 'h-temperature',
      type: 'heading',
      data: { text: 'Temperature and Kinetic Energy', level: 2 },
    },
    {
      id: 'callout-temp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Idea: Temperature and Kinetic Energy',
        text: 'The <strong>temperature</strong> of a substance is a measure of the <strong>average kinetic energy</strong> of its particles. When a substance is heated, particles gain kinetic energy and move faster. When cooled, they slow down. This is why hotter substances have higher temperatures — their particles have more kinetic energy on average.',
      },
    },
    {
      id: 'p-temperature',
      type: 'paragraph',
      data: {
        text: 'Note that temperature measures the <em>average</em> kinetic energy — individual particles have a range of speeds and energies. At any given temperature, some particles move faster and some slower than the average.',
      },
    },
    {
      id: 'h-brownian',
      type: 'heading',
      data: { text: 'Brownian Motion', level: 2 },
    },
    {
      id: 'p-brownian',
      type: 'paragraph',
      data: {
        text: '<strong>Brownian motion</strong> is the random, erratic movement of larger visible particles (such as smoke particles or pollen grains) caused by collisions with smaller, invisible surrounding molecules. It was first observed by botanist Robert Brown in 1827.',
      },
    },
    {
      id: 'callout-brownian-expt',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Smoke Cell Experiment',
        text: '<strong>Setup:</strong> A smoke cell contains smoke illuminated from the side. A microscope is focused on the smoke. <br/><strong>Observation:</strong> Tiny bright specks (smoke particles) are seen moving randomly and erratically — the motion is continuous and unpredictable.<br/><strong>Explanation:</strong> Air molecules are too small to see, but they continuously bombard smoke particles from all sides. At any instant, the number and force of collisions from each side is unequal, causing a net push in a random direction. This results in the random, stuttering zig-zag path of the smoke particle.',
      },
    },
    {
      id: 'callout-brownian-evidence',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: What Brownian Motion Proves',
        text: 'Brownian motion is <strong>evidence that the particles of a gas (or liquid) are in continuous, random motion</strong>. It also implies that smaller molecules (air) have higher average speeds than larger particles (smoke) at the same temperature — consistent with kinetic theory.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Solids have a regular lattice with vibrating particles and strong forces; liquids are random and close with moderate forces; gases are widely spaced with negligible forces and rapid random motion. Temperature measures average particle kinetic energy. Brownian motion — seen with smoke particles in air — is direct evidence that gas molecules are in continuous, random motion.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Three states of matter differ in arrangement, movement and forces. Temperature = average KE of particles. Brownian motion proves continuous random particle motion.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-solid',
        prompt: 'Describe the arrangement and movement of particles in a solid.',
        answer: 'Particles are in a regular lattice and vibrate about fixed positions; they cannot move from place to place. Intermolecular forces are very strong.',
      },
      {
        id: 'cue-2',
        blockId: 'callout-temp',
        prompt: 'What does the temperature of a substance measure, in terms of particles?',
        answer: 'Temperature measures the average kinetic energy of the particles. Higher temperature = particles moving faster on average.',
      },
      {
        id: 'cue-3',
        blockId: 'p-brownian',
        prompt: 'What is Brownian motion, and what causes it?',
        answer: 'Brownian motion is the random, erratic movement of larger particles (e.g. smoke) caused by unequal bombardment by smaller, invisible surrounding molecules (e.g. air molecules).',
      },
      {
        id: 'cue-4',
        blockId: 'table-states',
        prompt: 'How do gases differ from solids and liquids in terms of particle spacing and compressibility?',
        answer: 'Gas particles are very far apart (≈10× liquid spacing) and the gas is highly compressible, whereas solids and liquids are virtually incompressible because particles are already close together.',
      },
    ],
  },
  evidence: [],
  mentions: [],
};
