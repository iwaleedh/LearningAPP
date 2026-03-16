export const note_olevel_chemistry_2_2_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-2-3-properties-of-ionic-compounds.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Recall and explain the physical properties of ionic compounds, relating each property to the giant ionic lattice structure.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Physical Properties of Ionic Compounds', level: 2 }
    },
    {
      id: 'tbl-ionic-props',
      type: 'comparisonTable',
      data: {
        caption: 'Properties of ionic compounds',
        headers: ['Property', 'Value/Observation', 'Structural Explanation'],
        rows: [
          ['Melting and boiling point', 'Very high (e.g. NaCl mp 801°C, MgO mp 2852°C)', 'Strong electrostatic forces in giant lattice require lots of energy to overcome'],
          ['State at room temperature', 'Solid', 'Strong lattice forces keep ions in fixed positions'],
          ['Electrical conductivity (solid)', 'Non-conductor', 'Ions fixed in lattice, cannot move to carry current'],
          ['Electrical conductivity (molten)', 'Good conductor', 'Ions free to move, carry charge to electrodes'],
          ['Electrical conductivity (aq solution)', 'Good conductor', 'Ions separated by water, free to move'],
          ['Brittleness', 'Brittle and hard', 'Slight displacement aligns like charges → repulsion → crystal shatters'],
          ['Solubility in water', 'Many soluble', 'Water molecules hydrate ions, overcoming lattice forces'],
          ['Solubility in organic solvents', 'Generally insoluble', 'Organic molecules cannot overcome strong ionic forces']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Effect of Ion Charge on Melting Point', level: 2 }
    },
    {
      id: 'call-charge',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Higher Ion Charge = Higher Melting Point',
        text: 'The strength of the ionic bond depends on the charges of the ions:<br/><strong>MgO (mp 2852°C)</strong> — has Mg²⁺ and O²⁻ ions (2+ and 2− charges)<br/><strong>NaCl (mp 801°C)</strong> — has Na⁺ and Cl⁻ ions (1+ and 1− charges)<br/><br/>The Mg²⁺/O²⁻ combination has stronger electrostatic attraction (higher charge) → stronger lattice → much higher melting point.<br/><br/>Ion size also matters: smaller ions are closer together → stronger attraction → higher melting point.'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Comparing Melting Points: NaCl vs MgO',
        text: 'Both NaCl and MgO have giant ionic lattice structures.<br/><br/>NaCl: Na⁺ (+1) and Cl⁻ (−1) → electrostatic force relatively weak<br/>MgO: Mg²⁺ (+2) and O²⁻ (−2) → electrostatic force much stronger (4× the product of charges)<br/><br/>Therefore MgO requires far more energy to break its lattice → much higher melting point.'
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Explaining Brittleness',
        text: 'Ionic compounds are brittle because when struck, a layer of ions is shifted. Ions of the same charge come into alignment and repel each other strongly, causing the crystal to shatter along cleavage planes. This is different from metals, which are malleable because metal layers can slide over each other without charge repulsion.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Ionic compounds are solid with high melting points (strong lattice forces), brittle, and conduct electricity only when molten or dissolved. Higher ion charges mean stronger forces and higher melting points — MgO (2852°C) is much higher than NaCl (801°C).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Ionic compounds: high mp, brittle, conduct only when molten or dissolved; higher ion charges give stronger forces and higher melting points.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-ionic-props', prompt: 'Under what conditions do ionic compounds conduct electricity?', answer: 'When molten or dissolved in water (aqueous solution) — when ions are free to move and carry charge. NOT as a solid.' },
      { id: 'cue-2', blockId: 'call-charge', prompt: 'Why does MgO have a much higher melting point than NaCl?', answer: 'MgO has Mg²⁺ and O²⁻ ions (2+ and 2− charges), giving much stronger electrostatic forces than NaCl with Na⁺ and Cl⁻ (1+ and 1− charges). More energy is needed to overcome the stronger MgO lattice.' },
      { id: 'cue-3', blockId: 'call-tip1', prompt: 'Why are ionic compounds brittle?', answer: 'When struck, layers of ions shift so that like charges (+ and +, or − and −) come into alignment, causing strong repulsion. The crystal splits (shatters) along these cleavage planes.' }
    ]
  },
  evidence: [],
  mentions: []
};
