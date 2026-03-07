/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 1
 * "Ionic lattice structure and physical properties"
 * Source: Pearson Edexcel IAL Chemistry — Section 3A.2
 */
export const note_chemistry_1_3_1 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Describe the structure of a giant ionic lattice. Explain the physical properties of ionic compounds (high melting points, brittle, electrical conductivity) in terms of structure and bonding.' },
      terms: []
    },
    {
      id: 'h-lattice',
      type: 'heading',
      data: { text: 'The Giant Ionic Lattice', level: 2 },
      terms: []
    },
    {
      id: 'p-lattice',
      type: 'paragraph',
      data: { text: 'Ionic compounds do NOT consist of individual molecules. Instead, they form a <strong>giant ionic lattice</strong> — a regular, repeating three-dimensional array of alternating cations and anions. Each ion is surrounded by ions of the opposite charge. The lattice is held together by the strong electrostatic attraction between all the oppositely charged ions acting simultaneously.' },
      terms: ['Giant ionic lattice']
    },
    {
      id: 'svg-nacl-lattice',
      type: 'svg',
      data: {
        caption: 'Figure: NaCl ionic lattice — alternating Na⁺ (blue) and Cl⁻ (red) ions, each surrounded by 6 of the opposite charge (coordination number 6)',
        svg: `<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Grid of ions (5x5) arranged in alternating pattern -->
  <!-- Row 0: Na Cl Na Cl Na -->
  <circle cx="60" cy="40" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="60" y="45" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Na⁺</text>
  <circle cx="120" cy="40" r="22" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="120" y="45" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold">Cl⁻</text>
  <circle cx="180" cy="40" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="180" y="45" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Na⁺</text>
  <circle cx="240" cy="40" r="22" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="240" y="45" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold">Cl⁻</text>
  <circle cx="300" cy="40" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="300" y="45" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Na⁺</text>

  <!-- Row 1: Cl Na Cl Na Cl -->
  <circle cx="60" cy="110" r="22" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="60" y="115" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold">Cl⁻</text>
  <circle cx="120" cy="110" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="120" y="115" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Na⁺</text>
  <circle cx="180" cy="110" r="22" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="180" y="115" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold">Cl⁻</text>
  <circle cx="240" cy="110" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="240" y="115" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Na⁺</text>
  <circle cx="300" cy="110" r="22" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="300" y="115" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold">Cl⁻</text>

  <!-- Row 2: Na Cl Na Cl Na -->
  <circle cx="60" cy="180" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="60" y="185" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Na⁺</text>
  <circle cx="120" cy="180" r="22" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="120" y="185" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold">Cl⁻</text>
  <circle cx="180" cy="180" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="180" y="185" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Na⁺</text>
  <circle cx="240" cy="180" r="22" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="240" y="185" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold">Cl⁻</text>
  <circle cx="300" cy="180" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="300" y="185" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Na⁺</text>

  <!-- Bond lines (between row 0 and row 1) -->
  <line x1="60" y1="62" x2="60" y2="88" stroke="#94a3b8" stroke-width="1"/>
  <line x1="120" y1="62" x2="120" y2="92" stroke="#94a3b8" stroke-width="1"/>
  <line x1="180" y1="62" x2="180" y2="88" stroke="#94a3b8" stroke-width="1"/>
  <line x1="240" y1="62" x2="240" y2="92" stroke="#94a3b8" stroke-width="1"/>
  <line x1="300" y1="62" x2="300" y2="88" stroke="#94a3b8" stroke-width="1"/>

  <!-- Bond lines (between row 1 and row 2) -->
  <line x1="60" y1="132" x2="60" y2="158" stroke="#94a3b8" stroke-width="1"/>
  <line x1="120" y1="128" x2="120" y2="158" stroke="#94a3b8" stroke-width="1"/>
  <line x1="180" y1="132" x2="180" y2="158" stroke="#94a3b8" stroke-width="1"/>
  <line x1="240" y1="128" x2="240" y2="158" stroke="#94a3b8" stroke-width="1"/>
  <line x1="300" y1="132" x2="300" y2="158" stroke="#94a3b8" stroke-width="1"/>

  <!-- Bond lines (horizontal row 0) -->
  <line x1="78" y1="40" x2="98" y2="40" stroke="#94a3b8" stroke-width="1"/>
  <line x1="142" y1="40" x2="162" y2="40" stroke="#94a3b8" stroke-width="1"/>
  <line x1="202" y1="40" x2="218" y2="40" stroke="#94a3b8" stroke-width="1"/>
  <line x1="262" y1="40" x2="282" y2="40" stroke="#94a3b8" stroke-width="1"/>

  <!-- Bond lines (horizontal row 1) -->
  <line x1="82" y1="110" x2="102" y2="110" stroke="#94a3b8" stroke-width="1"/>
  <line x1="138" y1="110" x2="158" y2="110" stroke="#94a3b8" stroke-width="1"/>
  <line x1="198" y1="110" x2="222" y2="110" stroke="#94a3b8" stroke-width="1"/>
  <line x1="258" y1="110" x2="278" y2="110" stroke="#94a3b8" stroke-width="1"/>

  <!-- Bond lines (horizontal row 2) -->
  <line x1="78" y1="180" x2="98" y2="180" stroke="#94a3b8" stroke-width="1"/>
  <line x1="142" y1="180" x2="162" y2="180" stroke="#94a3b8" stroke-width="1"/>
  <line x1="202" y1="180" x2="218" y2="180" stroke="#94a3b8" stroke-width="1"/>
  <line x1="262" y1="180" x2="282" y2="180" stroke="#94a3b8" stroke-width="1"/>

  <!-- Legend -->
  <circle cx="20" cy="235" r="8" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="32" y="239" fill="#1e40af" font-size="10">Na⁺ (smaller cation)</text>
  <circle cx="170" cy="235" r="10" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="184" y="239" fill="#991b1b" font-size="10">Cl⁻ (larger anion)</text>
  <text x="190" y="252" text-anchor="middle" fill="#64748b" font-size="9">Coordination number = 6 (each ion surrounded by 6 of the opposite charge)</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'callout-nacl-structure',
      type: 'callout',
      data: {
        style: 'key',
        title: 'NaCl Structure',
        text: 'In sodium chloride, each Na⁺ ion is surrounded by 6 Cl⁻ ions, and each Cl⁻ ion is surrounded by 6 Na⁺ ions. This is called a <strong>co-ordination number of 6</strong>. The formula NaCl represents the <em>simplest whole-number ratio</em> of ions — it is the empirical formula of the lattice.'
      },
      terms: ['Co-ordination number']
    },
    {
      id: 'h-props',
      type: 'heading',
      data: { text: 'Physical Properties of Ionic Compounds', level: 2 },
      terms: []
    },
    {
      id: 'table-props',
      type: 'comparisonTable',
      data: {
        caption: 'Properties of ionic compounds explained by structure',
        headers: ['Property', 'Explanation'],
        rows: [
          ['<strong>High melting and boiling points</strong>', 'Large amounts of energy are needed to overcome the many, strong electrostatic attractions throughout the giant lattice.'],
          ['<strong>Brittle / cleavage</strong>', 'When a force is applied, the planes of ions shift. Ions of the same charge align next to each other, causing repulsion, and the crystal shatters along flat planes.'],
          ['<strong>Conduct electricity when molten or dissolved in water</strong>', 'Ions are free to move and carry charge. In the solid state, ions are locked in position and cannot move, so solids do NOT conduct.'],
          ['<strong>Do NOT conduct as a solid</strong>', 'Ions cannot move in the rigid crystal lattice.'],
          ['<strong>Usually dissolve in polar solvents (e.g. water)</strong>', 'Water molecules can surround and hydrate the ions, breaking them away from the lattice. (More detail in intermolecular forces topic.)']
        ]
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'p-lattice', prompt: 'Describe the structure of a giant ionic lattice.' },
      { id: 'c2', blockId: 'table-props', prompt: 'Explain why ionic compounds have high melting points.' },
      { id: 'c3', blockId: 'table-props', prompt: 'Explain why ionic compounds are brittle but also why they can conduct electricity when melted.' },
      { id: 'c4', blockId: 'table-props', prompt: 'Why does solid NaCl not conduct electricity, but molten NaCl does?' }
    ],
    summaryText: 'Giant ionic lattice = 3D array of alternating + and − ions held by strong electrostatic forces. High mp/bp (strong forces). Brittle (ion planes shift, like charges align, repel + shatter). Conducts when molten or dissolved (ions free to move). Does NOT conduct as solid.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_3_1;