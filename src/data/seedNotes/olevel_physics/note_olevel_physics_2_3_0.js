export const note_olevel_physics_2_3_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/2 Thermal Physics/2-3-1-conduction.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Describe the process of thermal conduction in solids; explain why metals are good conductors and non-metals/gases are poor conductors (insulators); and apply knowledge to practical contexts.'
      }
    },
    {
      id: 'h-conduction',
      type: 'heading',
      data: { text: 'What is Thermal Conduction?', level: 2 }
    },
    {
      id: 'p-definition',
      type: 'paragraph',
      data: {
        text: '<strong>Thermal conduction</strong> is the transfer of thermal energy through a material without the material itself moving. Energy passes from the hot end to the cool end by <strong>particle vibrations</strong>: particles at the hot end vibrate more vigorously and transfer energy to neighbouring particles through collisions, which pass it along the material.'
      }
    },
    {
      id: 'p-occurs',
      type: 'paragraph',
      data: {
        text: 'Conduction occurs in <strong>solids, liquids and gases</strong>, but is most effective in solids because the particles are closest together. In liquids and gases, particles are further apart and collisions are less frequent, so conduction is poor.'
      }
    },
    {
      id: 'h-metals',
      type: 'heading',
      data: { text: 'Why Metals are Good Conductors', level: 2 }
    },
    {
      id: 'p-metals',
      type: 'paragraph',
      data: {
        text: 'Metals are far better thermal conductors than non-metals because they have an additional mechanism: <strong>free (delocalised) electrons</strong>. These electrons move freely throughout the metal structure. When one end of a metal is heated, the free electrons near the hot end gain kinetic energy and travel quickly through the metal, colliding with cooler atoms further along and transferring energy. This is much faster than vibration transfer alone.'
      }
    },
    {
      id: 'callout-key-metals',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Two Mechanisms in Metals',
        text: '1. <strong>Lattice vibrations</strong> — atoms vibrate and pass energy to neighbours (same as non-metals).<br/>2. <strong>Free electron conduction</strong> — delocalised electrons carry energy rapidly across the metal.<br/><br/>Both mechanisms act simultaneously. Non-metals only have mechanism 1, making them much poorer conductors.'
      }
    },
    {
      id: 'svg-rod',
      type: 'svg',
      data: {
        caption: 'Thermal conduction along a metal rod — energy transferred by vibrating particles and free electrons',
        svg: `<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <!-- Rod body -->
  <rect x="50" y="70" width="320" height="50" rx="6" fill="#1c3a64" stroke="#6090c8" stroke-width="2"/>

  <!-- Heat source left -->
  <rect x="10" y="60" width="40" height="70" rx="6" fill="#ff7744" stroke="#cc4422" stroke-width="2"/>
  <text x="14" y="100" fill="#1e293b" font-size="11" font-weight="bold">Hot</text>

  <!-- Cold end right -->
  <rect x="370" y="70" width="40" height="50" rx="6" fill="#1c3a64" stroke="#4488cc" stroke-width="2"/>
  <text x="374" y="99" fill="#336" font-size="11">Cold</text>

  <!-- Particles along rod -->
  <!-- Hot end particles (large circles, red) -->
  <circle cx="90" cy="95" r="10" fill="#ff8844" stroke="#cc4422" stroke-width="1.5"/>
  <circle cx="90" cy="75" r="3" fill="#ffaa66" opacity="0.6"/>
  <circle cx="90" cy="115" r="3" fill="#ffaa66" opacity="0.6"/>
  <circle cx="70" cy="95" r="3" fill="#ffaa66" opacity="0.6"/>
  <circle cx="110" cy="95" r="3" fill="#ffaa66" opacity="0.6"/>

  <!-- Mid particles -->
  <circle cx="170" cy="95" r="8" fill="#532407" stroke="#cc8844" stroke-width="1.5"/>
  <!-- Cool end particles -->
  <circle cx="260" cy="95" r="7" fill="#1c3a64" stroke="#5588aa" stroke-width="1.5"/>
  <circle cx="340" cy="95" r="6" fill="#88aacc" stroke="#446690" stroke-width="1.5"/>

  <!-- Energy flow arrow -->
  <line x1="105" y1="88" x2="155" y2="88" stroke="#e06020" stroke-width="2" marker-end="url(#arrc)"/>
  <line x1="185" y1="88" x2="245" y2="88" stroke="#e09040" stroke-width="2" marker-end="url(#arrc)"/>
  <line x1="275" y1="88" x2="325" y2="88" stroke="#88aacc" stroke-width="2" marker-end="url(#arrc)"/>

  <!-- Free electron dots -->
  <circle cx="130" cy="105" r="3" fill="#44370a" stroke="#cc9900" stroke-width="1"/>
  <circle cx="215" cy="82" r="3" fill="#44370a" stroke="#cc9900" stroke-width="1"/>
  <circle cx="305" cy="108" r="3" fill="#44370a" stroke="#cc9900" stroke-width="1"/>
  <text x="55" y="160" fill="#cc9900" font-size="10">● Free electrons (yellow) carry energy rapidly</text>
  <text x="55" y="173" fill="#e06020" font-size="10">→ Direction of energy transfer</text>

  <!-- Labels -->
  <text x="75" y="55" fill="#c33" font-size="10">Hot end: large</text>
  <text x="75" y="66" fill="#c33" font-size="10">vibration amplitude</text>

  <defs>
    <marker id="arrc" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#e06020"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'h-conductors-insulators',
      type: 'heading',
      data: { text: 'Conductors and Insulators', level: 2 }
    },
    {
      id: 'tbl-materials',
      type: 'comparisonTable',
      data: {
        caption: 'Thermal conductivity of common materials and their applications',
        headers: ['Material', 'Conductor / Insulator', 'Example application'],
        rows: [
          ['Copper', 'Excellent conductor', 'Saucepan bases — rapid, even heat distribution'],
          ['Aluminium', 'Good conductor', 'Saucepan bodies, heat sinks in electronics'],
          ['Iron / steel', 'Good conductor', 'Radiators, iron griddles'],
          ['Glass', 'Poor conductor', 'Oven doors, windows'],
          ['Wood', 'Poor conductor (insulator)', 'Saucepan handles, house frames'],
          ['Air', 'Very poor conductor', 'Double-glazing (trapped air layer), foam insulation'],
          ['Polystyrene foam', 'Excellent insulator', 'Hot drink cups, building insulation']
        ]
      }
    },
    {
      id: 'p-insulators',
      type: 'paragraph',
      data: {
        text: '<strong>Gases</strong> are very poor conductors because their particles are widely spaced and rarely collide. Trapping a layer of air (e.g. in double-glazing, foam loft insulation, animal fur, feather duvets) is an effective way to reduce heat loss from buildings and bodies.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When explaining conduction, always use the phrase <em>"particles vibrate more vigorously and pass energy to neighbouring particles"</em>. For metals, add that <em>"free electrons transfer energy rapidly through the metal"</em>. These phrases earn the marks. Do NOT say "heat travels" — say "energy is transferred".'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Students often say conduction requires particles to move along the rod. This is wrong for solids — the <strong>particles stay in their lattice positions</strong> and only vibrate. It is the <em>energy</em> that is passed along, not the particles themselves.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Conduction transfers thermal energy through a material by particle vibrations passing energy along. Metals conduct best because free electrons also carry energy. Non-metals and gases are poor conductors (insulators) because they lack free electrons and/or particles are far apart. Trapped air is a key insulator in buildings and clothing.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Conduction via particle vibrations + free electrons (metals only); metals best conductors; gases best insulators; trapped air used widely for thermal insulation.',
    cues: [
      { id: 'cue-1', blockId: 'p-definition', prompt: 'Describe how thermal energy is transferred by conduction along a solid rod, in terms of particles.' },
      { id: 'cue-2', blockId: 'callout-key-metals', prompt: 'Give two reasons why metals are better thermal conductors than non-metals.' },
      { id: 'cue-3', blockId: 'tbl-materials', prompt: 'Why is air a good thermal insulator? Give one practical application that exploits this property.' },
      { id: 'cue-4', blockId: 'callout-warning', prompt: 'A student claims that "particles move along the rod" to explain conduction. What is wrong with this explanation?' }
    ]
  },
  evidence: []
};
