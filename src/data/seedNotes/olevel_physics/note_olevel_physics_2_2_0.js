export const note_olevel_physics_2_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/2 Thermal Physics/2-2-1-thermal-expansion.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Describe the thermal expansion of solids, liquids and gases; explain the mechanism in terms of particle motion; and apply knowledge to everyday examples including bimetallic strips, thermometers and expansion gaps in structures.'
      }
    },
    {
      id: 'h-expansion',
      type: 'heading',
      data: { text: 'Thermal Expansion', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'When a substance is heated its particles gain <strong>kinetic energy</strong>. In solids, particles vibrate with a greater amplitude; in liquids and gases they move faster. The average separation between neighbouring particles increases, so the substance <strong>expands</strong>. This is called <em>thermal expansion</em>.'
      }
    },
    {
      id: 'p-compare',
      type: 'paragraph',
      data: {
        text: 'All three states of matter expand when heated, but by very different amounts. <strong>Gases expand far more</strong> than liquids, which expand more than solids, for the same temperature rise. Gas particles already have large separations and almost no inter-particle forces, so expansion meets little resistance.'
      }
    },
    {
      id: 'tbl-states',
      type: 'comparisonTable',
      data: {
        caption: 'Thermal expansion compared across the three states',
        headers: ['State', 'Amount of expansion', 'Reason'],
        rows: [
          ['Solid', 'Smallest', 'Particles in fixed lattice; only vibration amplitude increases slightly'],
          ['Liquid', 'Moderate', 'Particles move freely but inter-particle forces still resist expansion'],
          ['Gas', 'Greatest', 'Particles far apart; very weak forces; kinetic energy increases dramatically']
        ]
      }
    },
    {
      id: 'h-mechanism',
      type: 'heading',
      data: { text: 'Mechanism: Particle Model', level: 2 }
    },
    {
      id: 'p-mechanism',
      type: 'paragraph',
      data: {
        text: 'In a <strong>solid</strong>, particles sit in a regular lattice and vibrate about fixed positions. Heating increases the amplitude of vibration, pushing neighbouring particles slightly further apart — the lattice spacing increases and the solid expands. In a <strong>liquid</strong>, particles are close but mobile; increased kinetic energy causes them to spread out more. In a <strong>gas</strong>, particles are already widely separated; heating increases their speed so they collide with container walls more forcefully, and at constant pressure the gas expands.'
      }
    },
    {
      id: 'callout-particle-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — Particles Do Not Get Bigger',
        text: 'In thermal expansion the <strong>particles themselves stay the same size</strong>. It is only the <em>average spacing between particles</em> that increases. Exam answers must refer to increased separation, not to enlarged particles.'
      }
    },
    {
      id: 'h-applications',
      type: 'heading',
      data: { text: 'Applications of Thermal Expansion', level: 2 }
    },
    {
      id: 'list-apps',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Expansion gaps in railway tracks and bridges</strong> — small gaps are left between sections so that the metal can expand in summer without buckling or fracturing.' },
          { text: '<strong>Liquid-in-glass thermometer</strong> — liquid (mercury or coloured alcohol) in a fine capillary expands measurably with temperature. The narrow bore amplifies the visible length change.' },
          { text: '<strong>Bimetallic strip thermostat</strong> — two metals with <em>different rates of expansion</em> are bonded together. On heating, the metal that expands more causes the strip to bend (bow) toward the metal that expands less.' },
          { text: '<strong>Rivets and shrink-fitting</strong> — metal rings or tyres are heated (expanded) before fitting, then cool and contract to grip tightly.' },
          { text: '<strong>Overhead power cables</strong> — deliberately left with some sag in summer so they do not snap under tension when they contract in cold winters.' }
        ]
      }
    },
    {
      id: 'callout-bimetallic',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Bimetallic Strip Rule',
        text: 'When heated, the strip curves so that the <strong>metal which expands more is on the outside (longer arc)</strong> and the metal which expands less is on the inside. A brass–invar strip curves with brass on the outside because brass has a higher coefficient of expansion than invar.'
      }
    },
    {
      id: 'svg-bimetallic',
      type: 'svg',
      data: {
        caption: 'Bimetallic strip — straight when cold, curved when heated',
        svg: `<svg viewBox="0 0 430 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <!-- Cold state label -->
  <text x="14" y="22" font-size="13" font-weight="bold" fill="#333">Cold</text>
  <!-- Brass layer (top, expands more) -->
  <rect x="14" y="28" width="180" height="20" fill="#d4802a" rx="3"/>
  <text x="200" y="42" fill="#d4802a" font-size="11">Brass (expands more)</text>
  <!-- Invar layer (bottom, expands less) -->
  <rect x="14" y="48" width="180" height="20" fill="#7788aa" rx="3"/>
  <text x="200" y="62" fill="#7788aa" font-size="11">Invar (expands less)</text>

  <!-- Divider -->
  <line x1="0" y1="90" x2="430" y2="90" stroke="#ddd" stroke-width="1" stroke-dasharray="6,4"/>

  <!-- Hot state label -->
  <text x="14" y="110" font-size="13" font-weight="bold" fill="#c33">Hot (after heating)</text>
  <!-- Curved brass — outside of bend -->
  <path d="M14,118 Q105,100 194,124" stroke="#d4802a" stroke-width="20" fill="none" stroke-linecap="round"/>
  <!-- Curved invar — inside of bend (shorter radius) -->
  <path d="M14,122 Q105,112 194,134" stroke="#7788aa" stroke-width="20" fill="none" stroke-linecap="round"/>
  <text x="200" y="118" fill="#d4802a" font-size="11">Brass (outside of curve)</text>
  <text x="200" y="136" fill="#7788aa" font-size="11">Invar (inside of curve)</text>

  <!-- Heat source arrows -->
  <text x="8" y="185" font-size="20">🔥</text>
  <line x1="30" y1="180" x2="30" y2="165" stroke="#c33" stroke-width="2" marker-end="url(#arr)"/>
  <text x="38" y="182" fill="#c33" font-size="11">Heat applied at base</text>

  <defs>
    <marker id="arr" markerWidth="7" markerHeight="7" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#c33"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always describe expansion in three steps: (1) heating increases kinetic energy of particles, (2) particles vibrate/move with greater energy, (3) average separation between particles increases. Never say "particles expand" — only their separation increases.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Thermal expansion occurs because heating increases particle kinetic energy, increasing average particle separation. Gases expand most, solids least. Applications: bimetallic strip thermostats bend toward the less-expanding metal; expansion gaps prevent rail buckling; liquid thermometers use measurable expansion in a capillary.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Heating → more KE → greater vibration amplitude → increased particle spacing → expansion; gases expand most; bimetallic strip bends toward lower-expanding metal.',
    cues: [
      { id: 'cue-1', blockId: 'p-mechanism', prompt: 'Using particle theory, explain why a solid expands when heated.' },
      { id: 'cue-2', blockId: 'tbl-states', prompt: 'Which state of matter expands the most when heated and why?' },
      { id: 'cue-3', blockId: 'callout-bimetallic', prompt: 'A bimetallic strip made of brass (expands more) and invar (expands less) is heated. Which metal is on the outside of the curve, and which is on the inside?' },
      { id: 'cue-4', blockId: 'list-apps', prompt: 'Explain why expansion gaps are left between sections of a railway track.' }
    ]
  },
  evidence: []
};
