export const note_chemistry_1_3_7 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Describe the structures of diamond, graphite and silicon dioxide as giant covalent structures; explain how their structures account for their physical properties.'
    }
  }, {
    id: 'h-giant-covalent',
    type: 'heading',
    data: {
      text: 'Giant Covalent Structures',
      level: 2
    }
  }, {
    id: 'p-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["Giant covalent structures (also called macromolecular or network covalent structures) consist of a very large number of atoms covalently bonded in a regular, repeating three-dimensional lattice.", "There are no discrete molecules \u2014 the covalent bonds extend throughout the entire structure.", "This gives them very high melting points and hardness."]
    }
  }, {
    id: 'h-diamond',
    type: 'heading',
    data: {
      text: 'Diamond',
      level: 2
    }
  }, {
    id: 'p-diamond',
    type: "list",
    data: {
      style: "unordered",
      items: ["5\xB0).", "This creates an extremely rigid, three-dimensional lattice with no free electrons."]
    }
  }, {
    id: 'list-diamond',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Very high melting point (3550°C) — many strong C–C covalent bonds throughout the lattice must all be broken', 'Extremely hard — rigid 3D lattice with no planes of weakness', 'Does not conduct electricity — no free electrons or mobile ions', 'Insoluble in all solvents — covalent bonds cannot be broken by solvation', 'Used as: cutting tools, drill bits, jewellery']
    }
  }, {
    id: 'h-graphite',
    type: 'heading',
    data: {
      text: 'Graphite',
      level: 2
    }
  }, {
    id: 'p-graphite',
    type: "list",
    data: {
      style: "unordered",
      items: ["In graphite, each carbon atom is covalently bonded to three others in a hexagonal arrangement (bond angle 120\xB0) forming flat layers called graphene sheets.", "Each carbon uses 3 of its 4 outer electrons for bonding; the 4th electron becomes delocalised across the layer."]
    }
  }, {
    id: 'list-graphite',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['High melting point — strong covalent bonds within layers must be broken', 'Soft and slippery — layers are held together only by weak London (van der Waals) forces and can slide over each other', 'Conducts electricity — delocalised electrons within each layer carry charge', 'Used as: lubricant, electrode material, pencil "lead"', 'Layers are 335 pm apart; C–C bond within layers = 142 pm (intermediate between single and double bond)']
    }
  }, {
    id: 'svg-graphite',
    type: 'svg',
    data: {
      caption: 'Graphite structure — hexagonal layers with delocalised electrons; layers held by weak forces',
      svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <!-- Layer 1 hexagons -->
  <g stroke="#4f46e5" stroke-width="2" fill="none">
    <polygon points="80,40 110,57 110,91 80,108 50,91 50,57" />
    <polygon points="140,40 170,57 170,91 140,108 110,91 110,57" />
    <polygon points="80,108 110,125 110,159 80,176 50,159 50,125" />
    <polygon points="140,108 170,125 170,159 140,176 110,159 110,125" />
  </g>
  <!-- Layer 2 (offset, lighter) -->
  <g stroke="#a5b4fc" stroke-width="1.5" fill="none" transform="translate(200,0)">
    <polygon points="80,40 110,57 110,91 80,108 50,91 50,57" />
    <polygon points="140,40 170,57 170,91 140,108 110,91 110,57" />
    <polygon points="80,108 110,125 110,159 80,176 50,159 50,125" />
    <polygon points="140,108 170,125 170,159 140,176 110,159 110,125" />
  </g>
  <!-- Labels -->
  <text x="110" y="195" text-anchor="middle" fill="#4f46e5" font-size="11" font-weight="600">Layer 1 (strong C–C bonds)</text>
  <text x="310" y="195" text-anchor="middle" fill="#6366f1" font-size="11">Layer 2 (weak forces between layers)</text>
  <!-- Delocalised e- annotation -->
  <text x="100" y="18" text-anchor="middle" fill="#f59e0b" font-size="10">⚡ delocalised e⁻ within layers</text>
  <!-- inter-layer arrow -->
  <line x1="185" y1="80" x2="205" y2="80" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="195" y="74" text-anchor="middle" fill="#9ca3af" font-size="9">weak</text>
</svg>`
    }
  }, {
    id: 'h-sio2',
    type: 'heading',
    data: {
      text: 'Silicon Dioxide (SiO₂)',
      level: 2
    }
  }, {
    id: 'p-sio2',
    type: "list",
    data: {
      style: "unordered",
      items: ["5\xB0), and each oxygen bridges two silicon atoms.", "The ratio Si:O = 1:2, giving the empirical formula SiO\u2082.", "There are no discrete SiO\u2082 molecules."]
    }
  }, {
    id: 'list-sio2',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Very high melting point (1710°C) — many strong Si–O covalent bonds throughout the lattice', 'Hard and rigid — 3D lattice with no planes of weakness', 'Does not conduct electricity — no free electrons', 'Insoluble in water and most solvents', 'Used as: sand, quartz, glass (when melted and cooled)']
    }
  }, {
    id: 'table-comparison',
    type: 'comparisonTable',
    data: {
      caption: 'Comparison of giant covalent structures',
      headers: ['Property', 'Diamond', 'Graphite', 'Silicon dioxide'],
      rows: [['Bonding per atom', '4 C–C bonds (tetrahedral)', '3 C–C bonds (trigonal planar) + 1 delocalised', '4 Si–O bonds (tetrahedral)'], ['Melting point', 'Very high (~3550°C)', 'Very high (~3600°C)', 'High (~1710°C)'], ['Hardness', 'Very hard', 'Soft/slippery', 'Hard'], ['Electrical conductivity', 'None', 'Yes (delocalised e⁻ in layers)', 'None'], ['Uses', 'Cutting tools, gems', 'Lubricant, electrodes', 'Glass, sand, ceramics']]
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common mistake — graphite conducts but diamond does not',
      text: 'Both are made of carbon, but only graphite conducts electricity. In graphite, each C uses only 3 bonds, leaving one delocalised electron per atom free to move within the layer. In diamond, all 4 outer electrons are used in bonding — there are no free electrons to carry charge.'
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam tip — explain properties in terms of structure',
      text: 'Always link property → structure → reason:\n• "Graphite is a lubricant because layers can slide over each other — they are held only by weak London forces, not covalent bonds."\n• "Diamond is hard because it has a rigid 3D lattice of strong C–C covalent bonds with no planes of weakness."'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Describe the bonding and structure of diamond',
        checked: false
      }, {
        text: 'Describe the bonding and structure of graphite',
        checked: false
      }, {
        text: 'Explain why graphite conducts electricity but diamond does not',
        checked: false
      }, {
        text: 'Explain why graphite is soft but diamond is hard',
        checked: false
      }, {
        text: 'Describe the structure of silicon dioxide and explain its high melting point',
        checked: false
      }]
    }
  },
    // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
  {
    id: 'bloom-understand',
    type: 'callout',
    data: {
      style: 'key',
      title: '🧠 Deeper Understanding — Why It Matters',
      text: 'Understand: Giant covalent structures have very high m.p. because breaking the structure requires breaking many strong covalent bonds.\n\nApply: Explain why diamond is hard but graphite is soft, despite both being pure carbon.\n\nAnalyze: Graphite conducts electricity but diamond does not. Analyze how delocalised electrons enable this.\n\nEvaluate: SiO₂ is a high-melting solid but CO₂ is a gas, yet both are Group 4 oxides. Evaluate why.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Giant covalent structures: no discrete molecules, high mp, hard, insoluble. Diamond: 4 C–C bonds, tetrahedral, very hard, no conductivity. Graphite: 3 C–C bonds, hexagonal layers, delocalised e⁻ (conducts), weak inter-layer forces (soft/lubricant). SiO₂: Si bonded to 4 O tetrahedrally, hard, high mp, non-conducting.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'p-diamond',
      prompt: 'Describe the structure of diamond and explain why it is so hard.'
    }, {
      id: 'cue-2',
      blockId: 'p-graphite',
      prompt: 'Describe the structure of graphite and explain why it conducts electricity.'
    }, {
      id: 'cue-3',
      blockId: 'list-graphite',
      prompt: 'Why is graphite soft and used as a lubricant?'
    }, {
      id: 'cue-4',
      blockId: 'p-sio2',
      prompt: 'Describe the structure of SiO₂ and why its formula is SiO₂ rather than representing a molecule.'
    }, {
      id: 'cue-5',
      blockId: 'table-comparison',
      prompt: 'Compare the electrical conductivity of diamond and graphite. Explain the difference.'
    }],
    summaryText: 'Diamond: 4 C–C bonds, tetrahedral, hard, no conduction. Graphite: 3 C–C bonds, layers, delocalised e⁻ (conducts), weak inter-layer forces (slippery). SiO₂: Si bonded to 4 O, giant lattice, high mp.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 3',
    detail: 'Giant covalent structures: diamond, graphite, SiO₂',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['covalent bonding', 'giant covalent', 'allotropes']
  }]
};