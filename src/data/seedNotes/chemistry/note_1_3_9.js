/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 9
 * "Comparing types of structure"
 * Source: Pearson Edexcel IAL Chemistry — Sections 3A, 3B, 3C
 */
export const note_chemistry_1_3_9 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Understand how to predict the shapes of, and bond angles in, simple molecules using VSEPR theory. Compare the four structural types (ionic, metallic, giant covalent, simple molecular).' },
      terms: []
    },
    {
      id: 'h-vsepr',
      type: 'heading',
      data: { text: 'Valence Shell Electron Pair Repulsion (VSEPR) Theory', level: 2 },
      terms: []
    },
    {
      id: 'p-vsepr',
      type: 'paragraph',
      data: { text: 'The shape of a simple molecule or ion is determined by the repulsion between the electron pairs that surround the central atom. The key principles are:' },
      terms: []
    },
    {
      id: 'list-vsepr',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Electron pairs (both bonding pairs and lone pairs) repel each other.',
          'They arrange themselves as far apart as possible in 3D space to minimise repulsion.',
          '<strong>Lone pairs repel more than bonding pairs.</strong> The order of repulsion is: Lone pair–Lone pair > Lone pair–Bonding pair > Bonding pair–Bonding pair.',
          'Each lone pair reduces the expected bond angle by approximately 2.5°.'
        ]
      },
      terms: []
    },
    {
      id: 'h-shapes',
      type: 'heading',
      data: { text: 'The 5 Basic Shapes (No Lone Pairs)', level: 2 },
      terms: []
    },
    {
      id: 'table-shapes',
      type: 'comparisonTable',
      data: {
        caption: 'Basic molecular shapes based on bonding pairs only',
        headers: ['Bonding Pairs', 'Shape Name', 'Bond Angle', 'Example'],
        rows: [
          ['2', '<strong>Linear</strong>', '180°', 'BeCl₂, CO₂'],
          ['3', '<strong>Trigonal Planar</strong>', '120°', 'BF₃, AlCl₃'],
          ['4', '<strong>Tetrahedral</strong>', '109.5°', 'CH₄, NH₄⁺'],
          ['5', '<strong>Trigonal Bipyramidal</strong>', '90° & 120°', 'PF₅'],
          ['6', '<strong>Octahedral</strong>', '90°', 'SF₆']
        ]
      },
      terms: []
    },
    {
      id: 'h-lonepairs',
      type: 'heading',
      data: { text: 'The Effect of Lone Pairs', level: 2 },
      terms: []
    },
    {
      id: 'p-lonepairs',
      type: 'paragraph',
      data: { text: 'When the central atom has lone pairs, the overall electron geometry is based on the total number of pairs, but the molecular shape we name only considers the atoms. Because lone pairs repel more strongly, bond angles are squeezed tighter.' },
      terms: []
    },
    {
      id: 'table-lonepairs',
      type: 'comparisonTable',
      data: {
        caption: 'Common shapes involving lone pairs (tetrahedral electron geometry)',
        headers: ['Total Pairs', 'Bonding', 'Lone', 'Shape Name', 'Bond Angle', 'Example'],
        rows: [
          ['4', '4', '0', 'Tetrahedral', '109.5°', 'CH₄'],
          ['4', '3', '1', 'Pyramidal (Trigonal Pyramidal)', '107°', 'NH₃'],
          ['4', '2', '2', 'V-shaped (Bent / Non-linear)', '104.5°', 'H₂O'],
          ['5', '4', '1', 'See-saw', '~120°/~90°', 'SF₄'],
          ['5', '3', '2', 'T-shaped', '~90°', 'ClF₃'],
          ['5', '2', '3', 'Linear', '180°', 'XeF₂'],
          ['6', '5', '1', 'Square pyramidal', '~90°', 'BrF₅'],
          ['6', '4', '2', 'Square planar', '90°', 'XeF₄']
        ]
      },
      terms: []
    },
    {
      id: 'callout-clf3-xef4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked: ClF₃ (T-shaped) and XeF₄ (Square Planar)',
        text: '<strong>ClF₃:</strong><br/>Cl is in Group 7 → 7 outer electrons. Each F contributes 1 bond (3 bonds → 3 bonding pairs). Remaining electrons: 7 + 3 − 6 = 4, forming 2 lone pairs. Total = 5 pairs (trigonal bipyramidal electron geometry).<br/>Lone pairs go in <em>equatorial</em> positions to minimise the number of 90° lone pair–bonding pair repulsions.<br/>Shape (atoms only): <strong>T-shaped</strong>. Bond angles ≈ 87° (compressed from 90°).<br/><br/><strong>XeF₄:</strong><br/>Xe is in Group 8 (rare gas) → 8 outer electrons. 4 F atoms form 4 bonds → 4 bonding pairs. Remaining: 8 + 4 − 8 = 4 electrons → 2 lone pairs. Total = 6 pairs (octahedral electron geometry).<br/>Both lone pairs go to <em>opposite</em> faces of the octahedron to minimise mutual repulsion.<br/>Shape (atoms only): <strong>Square planar</strong>. Bond angles = 90°.'
      },
      terms: []
    },
    {
      id: 'callout-isoelectronic',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Isoelectronic Species — Same Shape, Same Electrons',
        text: '<strong>Isoelectronic</strong> species have the same number of electrons (same number of bonding and non-bonding pairs) and therefore the <em>same shape</em>.<br/><br/>Important pairs:<br/>• <strong>NH₄⁺</strong> and <strong>CH₄</strong>: both have 4 bonding pairs, 0 lone pairs → both <strong>tetrahedral</strong> (109.5°)<br/>• <strong>H₃O⁺</strong> and <strong>NH₃</strong>: both have 3 bonding pairs, 1 lone pair → both <strong>pyramidal</strong> (~107°)<br/>• <strong>CO₂</strong> and <strong>NO₂⁺</strong>: both linear<br/><br/>Exam application: if asked about the shape of H₃O⁺, note it is isoelectronic with NH₃ → pyramidal, bond angle ~107°.'
      },
      terms: ['Isoelectronic']
    },
    {
      id: 'callout-method',
      type: 'callout',
      data: {
        style: 'key',
        title: '💡 How to work out any molecular shape',
        text: '1. Find the group number of the central atom (e.g. N is group 5).<br/>2. Add 1 for every atom attached to it (e.g. in NH₃, add 3 for the H atoms).<br/>3. Add 1 for every negative charge, or subtract 1 for every positive charge.<br/>4. Divide the total by 2. This is your <strong>Total Electron Pairs</strong>.<br/>5. The number of attached atoms is the <strong>Bonding Pairs</strong>.<br/>6. Total pairs - Bonding pairs = <strong>Lone Pairs</strong>.<br/><br/><em>Example: NCl₄⁺</em><br/>N is Group 5. Add 4 for Cl. Subtract 1 for the + charge. Total = 8 electrons = 4 pairs. 4 attached atoms means 4 bonding pairs and 0 lone pairs. Shape = <strong>Tetrahedral (109.5°)</strong>.'
      },
      terms: []
    },
    {
      id: 'callout-of2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: OF₂',
        text: '<strong>Predict the shape and bond angle of oxygen difluoride (OF₂).</strong><br/><br/>1. Central atom O is in Group 6.<br/>2. 2 F atoms attached (+2). Total = 8 electrons.<br/>3. Divide by 2 = 4 electron pairs.<br/>4. 2 atoms attached means 2 bonding pairs, so there are 4 - 2 = 2 lone pairs.<br/><br/>Four pairs with 2 lone pairs gives a <strong>V-shaped</strong> (or non-linear) molecule. The bond angle starts at 109.5° and drops by 2.5° for each lone pair (2 × 2.5 = 5°).<br/><br/>Bond angle = <strong>104.5°</strong>.'
      },
      terms: []
    },
    {
      id: 'summary-vsepr',
      type: 'summary',
      data: { text: 'VSEPR theory states that electron pairs repel to be as far apart as possible. 2 pairs = Linear (180°), 3 pairs = Trigonal Planar (120°), 4 pairs = Tetrahedral (109.5°), 5 pairs = Trigonal Bipyramidal (90°/120°), 6 pairs = Octahedral (90°). Lone pairs repel more than bonding pairs, squeezing bond angles by ~2.5° per lone pair.' },
      terms: []
    },
    {
      id: 'h-compare',
      type: 'heading',
      data: { text: 'Comparing Structural Types', level: 2 },
      terms: []
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Summary: properties of the four structural types',
        headers: ['Property', 'Giant Ionic', 'Giant Metallic', 'Giant Covalent', 'Simple Molecular'],
        rows: [
          ['<strong>Melting/Boiling point</strong>', 'High (strong electrostatic forces throughout lattice)', 'High (strong electrostatic forces between ions and e⁻ sea)', 'Very high (many strong covalent bonds throughout)', 'Low (only weak intermolecular forces between molecules)'],
          ['<strong>Electrical conductivity — solid</strong>', 'No (ions fixed in lattice)', 'Yes (mobile delocalised electrons)', 'No (diamond/SiO₂); Yes (graphite only)', 'No (no ions or free electrons)'],
          ['<strong>Electrical conductivity — liquid/solution</strong>', 'Yes (ions free to move when molten or dissolved)', 'Yes (still mobile electrons)', 'No (covalent — no ions)', 'No'],
          ['<strong>Solubility in water</strong>', 'Often soluble (ions hydrated by polar water)', 'Insoluble (strong metallic bonds)', 'Insoluble (strong covalent bonds)', 'Polar molecules dissolve in water; non-polar ones do not'],
          ['<strong>Hardness</strong>', 'Hard but brittle', 'Hard; malleable and ductile', 'Very hard (diamond, SiO₂); soft (graphite layers)', 'Soft / waxy']
        ]
      },
      terms: []
    },
    {
      id: 'callout-id',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Identifying structure type from properties',
        text: 'Exam questions often ask you to identify a structure from given data. Use this guide:<br/><br/>• <strong>High mp AND conducts when melted</strong> → giant ionic<br/>• <strong>High mp AND conducts as solid</strong> → metallic<br/>• <strong>Very high mp AND does NOT conduct (solid or liquid)</strong> → giant covalent (e.g. diamond)<br/>• <strong>Very high mp AND conducts as solid</strong> → giant covalent with delocalised electrons (e.g. graphite)<br/>• <strong>Low mp AND does NOT conduct</strong> → simple molecular'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c0a', blockId: 'list-vsepr', prompt: 'List the order of repulsion strength between different types of electron pairs (lone pairs and bonding pairs).' },
      { id: 'c0b', blockId: 'table-shapes', prompt: 'State the shape and bond angle for a molecule with 5 bonding pairs and 0 lone pairs.' },
      { id: 'c0c', blockId: 'table-lonepairs', prompt: 'Explain why the bond angle in water (H₂O) is 104.5° rather than the perfect tetrahedral angle of 109.5°.' },
      { id: 'c0d', blockId: 'callout-method', prompt: 'Work out the shape and bond angle of the NCl₄⁺ ion.' },
      { id: 'c0e', blockId: 'callout-clf3-xef4', prompt: 'Explain why ClF₃ is T-shaped and XeF₄ is square planar. How do lone pairs choose their positions?' },
      { id: 'c0f', blockId: 'callout-isoelectronic', prompt: 'State the shape and bond angle of H₃O⁺. Which other molecule is it isoelectronic with?' },
      { id: 'c1', blockId: 'table-compare', prompt: 'Explain why giant ionic compounds have high melting points but simple molecular substances have low melting points.' },
      { id: 'c2', blockId: 'table-compare', prompt: 'Which types of structure can conduct electricity as a solid? Explain why.' },
      { id: 'c3', blockId: 'callout-id', prompt: 'A substance has a high melting point (1400°C) and does not conduct electricity in the solid or liquid state. What type of structure does it have?' }
    ],
    summaryText: 'VSEPR: electron pairs repel to be as far apart as possible. Shapes: 2 pairs (Linear 180°), 3 (Trigonal Planar 120°), 4 (Tetrahedral 109.5°), 5 (Trigonal Bipyramidal), 6 (Octahedral 90°). Lone pairs repel more than bonding pairs (-2.5° per lone pair). Expanded geometries with lone pairs: T-shaped (ClF₃, 5 pairs, 2LP), square planar (XeF₄, 6 pairs, 2LP). Isoelectronic: NH₄⁺ = CH₄ (tetrahedral); H₃O⁺ = NH₃ (pyramidal). Structural types: Giant ionic (high mp, conducts molten), Metallic (conducts always), Giant covalent (very high mp, no cond.), Simple molecular (low mp, no cond.).',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_3_9;