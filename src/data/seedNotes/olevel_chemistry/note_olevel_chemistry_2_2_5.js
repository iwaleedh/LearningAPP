export const note_olevel_chemistry_2_2_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-2-2-ionic-bonds-and-lattice-structure.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the giant ionic lattice structure and explain how it accounts for the physical properties of ionic compounds.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Giant Ionic Lattice', level: 2 }
    },
    {
      id: 'call-lattice',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Giant Ionic Lattice Structure',
        text: 'Ionic compounds do not form simple molecules. Instead, they form a <strong>giant ionic lattice</strong> — a regular, three-dimensional arrangement of alternating positive and negative ions.<br/><br/>Each ion is surrounded by ions of the opposite charge. In NaCl, each Na⁺ is surrounded by 6 Cl⁻ ions, and each Cl⁻ is surrounded by 6 Na⁺ ions.<br/><br/>The lattice is held together by strong <strong>electrostatic forces of attraction</strong> between all neighbouring oppositely charged ions — not just pairs of ions.'
      }
    },
    {
      id: 'call-nacl',
      type: 'callout',
      data: {
        style: 'key',
        title: 'NaCl Crystal Structure',
        text: 'In the sodium chloride crystal:<br/>• Na⁺ and Cl⁻ ions alternate in a cubic arrangement<br/>• There are no individual NaCl molecules — the formula NaCl simply gives the ratio of ions (1:1)<br/>• Each Na⁺ has 6 nearest Cl⁻ neighbours and vice versa (coordination number = 6)<br/><br/>The crystal structure extends in all three dimensions, involving millions of ions held together by strong electrostatic attractions.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Properties Explained by the Lattice Structure', level: 2 }
    },
    {
      id: 'tbl-properties',
      type: 'comparisonTable',
      data: {
        caption: 'Properties of ionic compounds explained by lattice structure',
        headers: ['Property', 'Observation', 'Explanation (Lattice Structure)'],
        rows: [
          ['Melting point', 'High (NaCl: 801°C)', 'Many strong electrostatic forces throughout the lattice require a lot of energy to overcome'],
          ['Electrical conductivity (solid)', 'Does not conduct', 'Ions are fixed in lattice positions — cannot move to carry charge'],
          ['Electrical conductivity (molten/dissolved)', 'Conducts electricity', 'Ions are free to move and carry charge'],
          ['Brittleness', 'Brittle — shatters when struck', 'A blow shifts a layer of ions so like charges align, causing strong repulsion and the crystal splits'],
          ['Solubility in water', 'Many are soluble', 'Water molecules attract and surround ions, pulling them from the lattice'],
          ['Solubility in organic solvents', 'Insoluble', 'Organic solvents cannot overcome the strong ionic forces']
        ]
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Conduction of Electricity',
        text: 'Ionic compounds conduct electricity when <strong>molten</strong> or in <strong>aqueous solution</strong> but NOT as a solid. The key phrase is "ions are free to move" — in solution the ions separate from the lattice and become mobile charge carriers.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Ionic compounds form giant lattices of alternating oppositely charged ions held by strong electrostatic forces. This gives them high melting points, brittleness, and electrical conduction only when molten or dissolved (when ions can move freely).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Ionic compounds form giant lattices of alternating ions; strong electrostatic forces cause high melting points; ions conduct only when free to move (molten/dissolved).',
    cues: [
      { id: 'cue-1', blockId: 'call-lattice', prompt: 'What is a giant ionic lattice?', answer: 'A regular three-dimensional arrangement of alternating positive and negative ions, held together by strong electrostatic forces of attraction between all neighbouring oppositely charged ions.' },
      { id: 'cue-2', blockId: 'tbl-properties', prompt: 'Why do ionic compounds have high melting points?', answer: 'There are many strong electrostatic forces of attraction throughout the lattice. A large amount of energy is needed to overcome all these forces and separate the ions.' },
      { id: 'cue-3', blockId: 'tbl-properties', prompt: 'Why does solid NaCl not conduct electricity but molten NaCl does?', answer: 'In solid NaCl, ions are fixed in lattice positions and cannot move to carry charge. When molten, the lattice breaks down and ions become free to move, allowing conduction.' }
    ]
  },
  evidence: [],
  mentions: []
};
