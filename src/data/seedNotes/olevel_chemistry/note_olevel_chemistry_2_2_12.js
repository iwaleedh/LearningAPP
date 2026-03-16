export const note_olevel_chemistry_2_2_12 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-4-3-metallic-bonding.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe metallic bonding in terms of a lattice of positive ions surrounded by a sea of delocalised electrons, and use this model to explain the properties of metals.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Metallic Bonding', level: 2 }
    },
    {
      id: 'call-model',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Metallic Bonding Model',
        text: 'In a metal, each atom loses its outer (valence) electrons to form a <strong>positive metal ion</strong>.<br/><br/>These positive ions are arranged in a regular <strong>giant metallic lattice</strong>.<br/><br/>The lost electrons become <strong>delocalised</strong> — they are no longer associated with any single atom and can move freely throughout the whole structure, forming a "sea of delocalised electrons".<br/><br/><strong>Metallic bond</strong> = the strong electrostatic attraction between the lattice of positive ions and the sea of delocalised electrons.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Properties of Metals Explained', level: 2 }
    },
    {
      id: 'tbl-props',
      type: 'comparisonTable',
      data: {
        caption: 'Metallic bonding explains metal properties',
        headers: ['Property', 'Observation', 'Explanation (using metallic bonding)'],
        rows: [
          ['Electrical conductivity', 'Good conductor (solid and liquid)', 'Delocalised electrons can move freely throughout the lattice, carrying charge'],
          ['Thermal conductivity', 'Good conductor of heat', 'Delocalised electrons can transfer kinetic energy rapidly through the lattice'],
          ['Malleability / Ductility', 'Can be bent, hammered into sheets, drawn into wire', 'Layers of positive ions can slide past each other; delocalised electrons re-arrange, maintaining the bond'],
          ['High melting/boiling point', 'Generally high (e.g. Fe 1538°C)', 'Strong electrostatic attraction between many positive ions and delocalised electrons requires much energy to overcome'],
          ['Lustre (shiny)', 'Shiny surface', 'Delocalised electrons can absorb and re-emit light']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Comparing Bond Types', level: 2 }
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Summary comparison of bonding types',
        headers: ['Feature', 'Ionic', 'Simple Covalent', 'Giant Covalent', 'Metallic'],
        rows: [
          ['Particles', 'Ions in lattice', 'Molecules', 'Atoms in lattice', 'Positive ions + e⁻ sea'],
          ['Melting point', 'High', 'Low', 'Very high', 'High (generally)'],
          ['Conducts (solid)', 'No', 'No', 'No (except graphite)', 'Yes'],
          ['Conducts (molten/dissolved)', 'Yes', 'No', 'No', 'Yes'],
          ['Malleability', 'Brittle', 'N/A', 'Hard/brittle', 'Yes']
        ]
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When explaining electrical conductivity in metals, always state: "delocalised electrons are free to move and carry charge." For malleability, always say "layers of positive ions can slide over each other" — do not say "atoms slide."<br/><br/>Mercury is a liquid metal at room temperature — it still has metallic bonding, just weaker attractions between Hg²⁺ ions and delocalised electrons.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Metallic bonding: lattice of positive metal ions surrounded by a sea of delocalised electrons. The strong electrostatic attraction is responsible for high melting points. Delocalised electrons explain electrical and thermal conductivity. Sliding ion layers explain malleability and ductility.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Metallic bonding = lattice of positive ions in a sea of delocalised electrons. Explains conductivity, malleability, and high melting points.',
    cues: [
      { id: 'cue-1', blockId: 'call-model', prompt: 'Describe metallic bonding.', answer: 'A lattice of positive metal ions surrounded by a sea of delocalised (free-moving) electrons. The metallic bond is the strong electrostatic attraction between the lattice and the electron sea.' },
      { id: 'cue-2', blockId: 'tbl-props', prompt: 'Why can metals conduct electricity?', answer: 'Delocalised electrons are free to move throughout the lattice and can carry electrical charge.' },
      { id: 'cue-3', blockId: 'tbl-props', prompt: 'Why are metals malleable?', answer: 'Layers of positive ions can slide past each other without breaking the bond, because the delocalised electrons re-arrange to maintain the electrostatic attraction.' },
      { id: 'cue-4', blockId: 'tbl-props', prompt: 'Why do metals generally have high melting points?', answer: 'Strong electrostatic attraction between many positive ions and the delocalised electron sea requires a large amount of energy to overcome.' }
    ]
  },
  evidence: [],
  mentions: []
};
