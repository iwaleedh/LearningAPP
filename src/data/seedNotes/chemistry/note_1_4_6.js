/**
 * Seed note: Chemistry · Unit 1 · Topic 4 · Subtopic 6
 * "Properties of alkanes"
 * Source: Pearson Edexcel IAL Chemistry — Section 4B
 */
export const note_chemistry_1_4_6 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Know and explain the physical properties of alkanes (state at room temperature, boiling points, solubility) in terms of intermolecular forces. Understand why alkanes are generally unreactive.' },
      terms: []
    },
    {
      id: 'h-structure',
      type: 'heading',
      data: { text: 'Structure and Bonding in Alkanes', level: 2 },
      terms: []
    },
    {
      id: 'p-structure',
      type: 'paragraph',
      data: { text: 'Alkanes are <strong>saturated hydrocarbons</strong> with the general formula CₙH₂ₙ₊₂. They contain only C–C and C–H single bonds. They are <strong>non-polar</strong> (similar electronegativities of C and H; symmetrical shapes). The only intermolecular forces between alkane molecules are <strong>London (van der Waals) forces</strong>.' },
      terms: ['Alkane', 'Saturated hydrocarbon']
    },
    {
      id: 'table-bp',
      type: 'comparisonTable',
      data: {
        caption: 'Physicsl properties of the first six alkanes',
        headers: ['Alkane', 'Formula', 'Mr', 'Boiling point', 'State at 25°C'],
        rows: [
          ['Methane', 'CH₄', '16', '−162°C', 'Gas'],
          ['Ethane', 'C₂H₆', '30', '−89°C', 'Gas'],
          ['Propane', 'C₃H₈', '44', '−42°C', 'Gas'],
          ['Butane', 'C₄H₁₀', '58', '−1°C', 'Gas'],
          ['Pentane', 'C₅H₁₂', '72', '36°C', 'Liquid'],
          ['Hexane', 'C₆H₁₄', '86', '69°C', 'Liquid']
        ]
      },
      terms: []
    },
    {
      id: 'callout-bp-trend',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why do boiling points increase with chain length?',
        text: 'Longer alkane chains have more electrons → larger, more polarisable electron clouds → stronger <strong>London dispersion forces</strong> between adjacent molecules. More energy is needed to overcome these forces, so the boiling point rises.'
      },
      terms: []
    },
    {
      id: 'callout-branching',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Effect of branching on boiling point',
        text: 'Branched alkanes have a more <strong>compact/spherical shape</strong>, which reduces the surface area of contact between molecules. Fewer London forces act between them → <strong>lower boiling point</strong> than the straight-chain isomer.<br/><br/>Example: pentane (bp 36°C) > 2-methylbutane (bp 28°C) > 2,2-dimethylpropane (bp 10°C)'
      },
      terms: []
    },
    {
      id: 'h-solubility',
      type: 'heading',
      data: { text: 'Solubility', level: 2 },
      terms: []
    },
    {
      id: 'p-solubility',
      type: 'paragraph',
      data: { text: 'Alkanes are <strong>insoluble in water</strong> (non-polar, cannot form H-bonds with water). They are soluble in non-polar organic solvents (like dissolves like). Short-chain alkanes are volatile and flammable.' },
      terms: []
    },
    {
      id: 'h-reactivity',
      type: 'heading',
      data: { text: 'Why Are Alkanes Unreactive?', level: 2 },
      terms: []
    },
    {
      id: 'list-unreactive',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'C–C and C–H bonds are <strong>non-polar</strong> → not easily attacked by polar reagents.',
          'C–C and C–H bonds are quite <strong>strong</strong> (C–H: 413 kJ mol⁻¹; C–C: 348 kJ mol⁻¹) → hard to break.',
          'Alkanes will react with halogens under <strong>UV light (free radical substitution)</strong> and combust in oxygen, but otherwise resist most reagents.'
        ]
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-bp-trend', prompt: 'Explain why butane has a higher boiling point than ethane.' },
      { id: 'c2', blockId: 'callout-branching', prompt: 'Explain why 2,2-dimethylpropane has a lower boiling point than pentane (same molecular formula C₅H₁₂).' },
      { id: 'c3', blockId: 'p-solubility', prompt: 'Why are alkanes insoluble in water?' },
      { id: 'c4', blockId: 'list-unreactive', prompt: 'Give two reasons why alkanes are generally unreactive.' }
    ],
    summaryText: 'Alkanes: CₙH₂ₙ₊₂, only C–H and C–C bonds, non-polar. IMFs = London forces only. bp increases with chain length (more e⁻ → stronger LF). Branching → lower bp (less surface area contact). Insoluble in water (non-polar). Unreactive (non-polar bonds, no labile electrons). React with O₂ (combustion) and halogens/UV (FRS).',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_4_6;