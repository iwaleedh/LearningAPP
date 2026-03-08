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
        title: 'NaCl Structure — 6:6 Co-ordination',
        text: 'In sodium chloride, each Na⁺ ion is surrounded by 6 Cl⁻ ions, and each Cl⁻ ion is surrounded by 6 Na⁺ ions. This is called <strong>6:6 co-ordination</strong>.<br/><br/>Why 6 and not 8? — Na⁺ is small (only 52% the size of Cl⁻). Trying to pack 8 Cl⁻ ions around the smaller Na⁺ would force the Cl⁻ ions to touch each other, introducing repulsions that destabilise the lattice. Six is the maximum that fits without Cl⁻ ions touching.<br/><br/>The formula NaCl represents the <em>simplest whole-number ratio</em> of ions — it is the empirical formula of the lattice, not a molecular formula.'
      },
      terms: ['Co-ordination number']
    },
    {
      id: 'h-cscl',
      type: 'heading',
      data: { text: 'Caesium Chloride (CsCl) — 8:8 Co-ordination', level: 2 },
      terms: []
    },
    {
      id: 'p-cscl',
      type: 'paragraph',
      data: { text: 'CsCl has a <strong>different structure</strong> to NaCl even though both compounds have formula 1:1. The Cs⁺ ion is much larger than Na⁺ (about 93% the size of Cl⁻), so 8 Cl⁻ ions can surround each Cs⁺ without touching each other. This gives a more stable arrangement with more ion contacts and greater lattice energy.' },
      terms: []
    },
    {
      id: 'svg-cscl',
      type: 'svg',
      data: {
        caption: 'Figure: CsCl structure — Cs⁺ (green) centred inside a cube of 8 Cl⁻ (red). Each Cs⁺ is 8-co-ordinated; each Cl⁻ is also surrounded by 8 Cs⁺ → 8:8 co-ordination.',
        svg: `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <text x="210" y="18" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">CsCl Structure — 8:8 Co-ordination</text>

  <!-- Cube edges (back) -->
  <line x1="100" y1="60" x2="200" y2="60" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="100" y1="60" x2="100" y2="160" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="100" y1="60" x2="155" y2="30" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3"/>

  <!-- Cube edges (front) -->
  <line x1="200" y1="60" x2="255" y2="30" stroke="#64748b" stroke-width="1.5"/>
  <line x1="200" y1="60" x2="200" y2="160" stroke="#64748b" stroke-width="1.5"/>
  <line x1="100" y1="160" x2="200" y2="160" stroke="#64748b" stroke-width="1.5"/>
  <line x1="100" y1="160" x2="155" y2="130" stroke="#64748b" stroke-width="1.5"/>
  <line x1="200" y1="160" x2="255" y2="130" stroke="#64748b" stroke-width="1.5"/>
  <line x1="155" y1="30" x2="255" y2="30" stroke="#64748b" stroke-width="1.5"/>
  <line x1="255" y1="30" x2="255" y2="130" stroke="#64748b" stroke-width="1.5"/>
  <line x1="155" y1="130" x2="255" y2="130" stroke="#64748b" stroke-width="1.5"/>
  <line x1="155" y1="30" x2="155" y2="130" stroke="#64748b" stroke-width="1.5"/>

  <!-- 8 Cl⁻ ions at cube corners -->
  <circle cx="100" cy="60" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="1.5" opacity="0.7"/>
  <text x="100" y="64" text-anchor="middle" fill="#991b1b" font-size="9">Cl⁻</text>

  <circle cx="200" cy="60" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="200" y="64" text-anchor="middle" fill="#991b1b" font-size="9">Cl⁻</text>

  <circle cx="155" cy="30" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="155" y="34" text-anchor="middle" fill="#991b1b" font-size="9">Cl⁻</text>

  <circle cx="255" cy="30" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="255" y="34" text-anchor="middle" fill="#991b1b" font-size="9">Cl⁻</text>

  <circle cx="100" cy="160" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="100" y="164" text-anchor="middle" fill="#991b1b" font-size="9">Cl⁻</text>

  <circle cx="200" cy="160" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="200" y="164" text-anchor="middle" fill="#991b1b" font-size="9">Cl⁻</text>

  <circle cx="155" cy="130" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="155" y="134" text-anchor="middle" fill="#991b1b" font-size="9">Cl⁻</text>

  <circle cx="255" cy="130" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="255" y="134" text-anchor="middle" fill="#991b1b" font-size="9">Cl⁻</text>

  <!-- Cs⁺ ion at cube centre -->
  <circle cx="178" cy="95" r="20" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
  <text x="178" y="92" text-anchor="middle" fill="#166534" font-size="10" font-weight="bold">Cs⁺</text>
  <text x="178" y="106" text-anchor="middle" fill="#166534" font-size="8">centre</text>

  <!-- Labels -->
  <text x="210" y="200" text-anchor="middle" fill="#1e40af" font-size="11" font-weight="bold">8:8 co-ordination</text>
  <text x="210" y="215" text-anchor="middle" fill="#64748b" font-size="10">Each Cs⁺ surrounded by 8 Cl⁻ (at cube corners)</text>
  <text x="210" y="228" text-anchor="middle" fill="#64748b" font-size="10">Each Cl⁻ surrounded by 8 Cs⁺ (by symmetry)</text>

  <!-- Comparison annotation -->
  <rect x="300" y="50" width="110" height="80" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1"/>
  <text x="355" y="67" text-anchor="middle" fill="#166534" font-weight="bold" font-size="10">NaCl vs CsCl</text>
  <text x="355" y="82" text-anchor="middle" fill="#374151" font-size="9">NaCl: 6:6 coord.</text>
  <text x="355" y="95" text-anchor="middle" fill="#374151" font-size="9">Na⁺ = 52% of Cl⁻</text>
  <text x="355" y="108" text-anchor="middle" fill="#374151" font-size="9">CsCl: 8:8 coord.</text>
  <text x="355" y="121" text-anchor="middle" fill="#374151" font-size="9">Cs⁺ = 93% of Cl⁻</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'callout-radius-ratio',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Radius Ratio — Why NaCl and CsCl Differ',
        text: 'Which co-ordination number a 1:1 ionic compound adopts depends on the <strong>radius ratio</strong> of the positive ion to the negative ion:<br/><br/><strong>Radius ratio &gt; 73%</strong> → 8:8 co-ordination (e.g. CsCl: Cs⁺ is ~93% size of Cl⁻)<br/><strong>Radius ratio 41–73%</strong> → 6:6 co-ordination (e.g. NaCl: Na⁺ is ~52% size of Cl⁻)<br/><strong>Radius ratio &lt; 41%</strong> → 4:4 co-ordination (beyond A-level)<br/><br/>The rule: pack as many ions of opposite charge around a given ion as possible — but without ions of the <em>same</em> charge touching each other, which would cause repulsions and greatly reduce lattice stability.'
      },
      terms: ['Radius ratio']
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
          ['<strong>High melting and boiling points</strong>', 'Large amounts of energy are needed to overcome the many, strong electrostatic attractions throughout the giant lattice. Factors: higher ionic charge (MgO > NaCl) and smaller ionic radius both increase lattice energy and melting point.'],
          ['<strong>Brittle / cleavage along flat planes</strong>', 'When a mechanical force shifts one ion layer, ions of the same charge align next to each other. The resulting like-charge repulsions cause the crystal to shatter along a flat cleavage plane.'],
          ['<strong>Electrical conductivity — solid: NO</strong>', 'Ions are locked in fixed positions in the rigid lattice and cannot move — no charge carriers.'],
          ['<strong>Electrical conductivity — molten or in solution: YES</strong>', 'Ions are free to move. In molten NaCl: Na⁺ migrates to cathode (Na⁺ + e⁻ → Na), Cl⁻ migrates to anode (2Cl⁻ → Cl₂ + 2e⁻). This is electrolysis — a chemical change, not just physical conduction.'],
          ['<strong>Soluble in polar solvents (e.g. water)</strong>', 'Water molecules hydrate the ions: positive ions attract the lone pairs on O; negative ions form hydrogen bonds with H. This breaks the lattice if the overall energy released by hydration exceeds the lattice energy.'],
          ['<strong>Insoluble in organic solvents</strong>', 'Organic solvents (e.g. hexane) are non-polar. Their weak van der Waals attractions to ions cannot overcome the strong ionic lattice energy. The ions are not hydrated and remain locked in the lattice.']
        ]
      },
      terms: []
    },
    {
      id: 'svg-brittle',
      type: 'svg',
      data: {
        caption: 'Figure: Brittleness of ionic crystals — when layers shift, like-charged ions align and repel, shattering the crystal',
        svg: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- BEFORE (left) -->
  <text x="120" y="18" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="12">Before stress</text>
  <!-- Row 1 -->
  <circle cx="40" cy="50" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="40" y="54" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <circle cx="80" cy="50" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="80" y="54" text-anchor="middle" fill="#991b1b" font-size="9">−</text>
  <circle cx="120" cy="50" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="120" y="54" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <circle cx="160" cy="50" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="160" y="54" text-anchor="middle" fill="#991b1b" font-size="9">−</text>
  <circle cx="200" cy="50" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="200" y="54" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <!-- Row 2 -->
  <circle cx="40" cy="100" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="40" y="104" text-anchor="middle" fill="#991b1b" font-size="9">−</text>
  <circle cx="80" cy="100" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="80" y="104" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <circle cx="120" cy="100" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="120" y="104" text-anchor="middle" fill="#991b1b" font-size="9">−</text>
  <circle cx="160" cy="100" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="160" y="104" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <circle cx="200" cy="100" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="200" y="104" text-anchor="middle" fill="#991b1b" font-size="9">−</text>
  <text x="120" y="150" text-anchor="middle" fill="#059669" font-size="10">+ and − alternate → attract → stable</text>

  <!-- ARROW -->
  <text x="260" y="75" text-anchor="middle" fill="#dc2626" font-size="24">→</text>
  <text x="260" y="92" text-anchor="middle" fill="#dc2626" font-size="10">stress</text>

  <!-- AFTER (right) -->
  <text x="390" y="18" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="12">After layer shift</text>
  <!-- Row 1 (shifted right by one position) -->
  <circle cx="310" cy="50" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="310" y="54" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <circle cx="350" cy="50" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="350" y="54" text-anchor="middle" fill="#991b1b" font-size="9">−</text>
  <circle cx="390" cy="50" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="390" y="54" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <circle cx="430" cy="50" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="430" y="54" text-anchor="middle" fill="#991b1b" font-size="9">−</text>
  <circle cx="470" cy="50" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="470" y="54" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <!-- Row 2 (shifted right) -->
  <circle cx="330" cy="100" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="330" y="104" text-anchor="middle" fill="#991b1b" font-size="9">−</text>
  <circle cx="370" cy="100" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="370" y="104" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <circle cx="410" cy="100" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="410" y="104" text-anchor="middle" fill="#991b1b" font-size="9">−</text>
  <circle cx="450" cy="100" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="450" y="104" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <!-- Repulsion arrows -->
  <line x1="310" y1="64" x2="330" y2="85" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="350" y1="66" x2="370" y2="85" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="390" y1="64" x2="410" y2="85" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="390" y="150" text-anchor="middle" fill="#dc2626" font-size="10">like charges align → repel → crystal shatters</text>
</svg>`
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'p-lattice', prompt: 'Describe the structure of a giant ionic lattice.' },
      { id: 'c2', blockId: 'callout-nacl-structure', prompt: 'Explain why NaCl is 6:6 co-ordinated and not 8:8.' },
      { id: 'c3', blockId: 'callout-radius-ratio', prompt: 'Explain why CsCl has 8:8 co-ordination but NaCl has 6:6 co-ordination. Reference the radius ratio in your answer.' },
      { id: 'c4', blockId: 'table-props', prompt: 'Explain why ionic compounds are brittle but also why they can conduct electricity when melted.' },
      { id: 'c5', blockId: 'table-props', prompt: 'Why does solid NaCl not conduct electricity but molten NaCl does? Name the products formed at each electrode.' },
      { id: 'c6', blockId: 'table-props', prompt: 'Why are ionic compounds insoluble in organic solvents like hexane?' }
    ],
    summaryText: 'Giant ionic lattice = 3D array of alternating + and − ions held by strong electrostatic forces. NaCl: 6:6 co-ordination (Na⁺ is 52% Cl⁻ size → can only fit 6 Cl⁻ without repulsions). CsCl: 8:8 (Cs⁺ is 93% Cl⁻ size → 8 Cl⁻ fit without touching). High mp/bp (strong forces; increases with charge and decreasing radius). Brittle (layer shift aligns like charges → repulsion → shatters). Conducts when molten (Na→Na at cathode; Cl⁻→Cl₂ at anode — electrolysis). Insoluble in organic solvents (weak VdW cannot overcome lattice energy).',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_3_1;