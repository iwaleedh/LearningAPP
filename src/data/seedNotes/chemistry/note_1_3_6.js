/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 6
 * "Simple molecular substances and their properties"
 * Source: Pearson Edexcel IAL Chemistry — Section 3B.4
 */
export const note_chemistry_1_3_6 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Describe the structure of simple molecular covalent substances. Explain why they have low melting/boiling points and poor electrical conductivity.' },
      terms: []
    },
    {
      id: 'h-structure',
      type: 'heading',
      data: { text: 'Simple Molecular Substances', level: 2 },
      terms: []
    },
    {
      id: 'p-structure',
      type: 'paragraph',
      data: { text: 'Many covalent compounds exist as <strong>discrete (simple) molecules</strong> — individual molecules containing a small, fixed number of atoms bonded by covalent bonds (e.g. H₂O, CO₂, CH₄, Cl₂, I₂). Between these molecules there are only <strong>weak intermolecular forces</strong> (van der Waals, dipole–dipole, or hydrogen bonds). The covalent bonds within each molecule are strong.' },
      terms: ['Simple molecular substance', 'Intermolecular forces']
    },
    {
      id: 'callout-props',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Properties of Simple Molecular Substances',
        text: '• <strong>Low melting and boiling points</strong>: Only the weak <em>intermolecular forces</em> need to be overcome (not the strong covalent bonds themselves). The larger the molecule, the more electrons → stronger London forces → higher bp.<br/>• <strong>Do NOT conduct electricity</strong>: No ions or free electrons. Molecules are electrically neutral.<br/>• <strong>Often volatile</strong>: Low boiling points → liquids easily evaporate at room temperature.<br/>• <strong>Solubility</strong>: Polar molecules dissolve in polar solvents; non-polar in non-polar solvents ("like dissolves like").'
      },
      terms: []
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common misconception: melting ≠ breaking covalent bonds',
        text: 'When a simple molecular substance melts or boils, the <strong>intermolecular forces</strong> are broken (the weak forces between molecules). The <strong>covalent bonds</strong> within the molecules remain intact.<br/><br/><em>Example: Iodine (I₂) melts at 114°C. The I–I covalent bond is NOT broken during melting — only London forces between I₂ molecules are overcome.</em>'
      },
      terms: []
    },
    {
      id: 'table-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Examples of simple molecular substances',
        headers: ['Substance', 'Formula', 'State at 25°C', 'Main intermol. force', 'Approx. bp'],
        rows: [
          ['Hydrogen', 'H₂', 'Gas', 'London', '−253°C'],
          ['Chlorine', 'Cl₂', 'Gas', 'London', '−34°C'],
          ['Bromine', 'Br₂', 'Liquid', 'London', '59°C'],
          ['Iodine', 'I₂', 'Solid', 'London', '184°C'],
          ['Water', 'H₂O', 'Liquid', 'Hydrogen bonds', '100°C']
        ]
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'p-structure', prompt: 'Describe what holds molecules together WITHIN a simple molecular substance and what holds molecules together BETWEEN each other.' },
      { id: 'c2', blockId: 'callout-props', prompt: 'Why do simple molecular substances have low melting points?' },
      { id: 'c3', blockId: 'callout-warning', prompt: 'When iodine melts, which type of bonds are broken — the I–I covalent bonds or the intermolecular forces between I₂ molecules? Explain.' },
      { id: 'c4', blockId: 'table-examples', prompt: 'Explain why iodine has a much higher boiling point than chlorine despite both being diatomic halogen molecules.' }
    ],
    summaryText: 'Simple molecular substances = discrete covalent molecules held together by weak intermolecular forces (London, dipole-dipole, H-bonds). Low mp/bp (only intermolecular forces broken on melting — covalent bonds intact). No electrical conductivity (no ions/free electrons). Boiling point increases as molecule size increases (stronger London forces).',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_3_6;