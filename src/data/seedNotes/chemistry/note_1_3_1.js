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
      id: 'list-lattice',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Ionic compounds do <strong>NOT</strong> form discrete molecules — they form a <strong>giant ionic lattice</strong>',
          'The lattice is a regular, repeating 3D arrangement of alternating cations and anions that extends throughout the solid in all directions',
          'Each ion is surrounded by ions of <em>opposite</em> charge on all sides — the ionic bond is non-directional',
          'The lattice is held together by <strong>strong, non-directional electrostatic forces</strong> between every adjacent oppositely charged ion pair, acting simultaneously in three dimensions',
          'The lattice is overall <strong>electrically neutral</strong> — total positive charge exactly equals total negative charge',
          'The chemical formula (e.g. NaCl) is the <strong>empirical formula</strong> of the lattice — simplest whole-number ratio of cation to anion, not a molecular formula',
          'The lattice extends effectively to infinity — there is no defined "molecule" of NaCl'
        ]
      },
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
  <circle cx="60" cy="40" r="18" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="60" y="45" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Na⁺</text>
  <circle cx="120" cy="40" r="22" fill="#7f1d1d" stroke="#dc2626" stroke-width="2"/>
  <text x="120" y="45" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold">Cl⁻</text>
  <circle cx="180" cy="40" r="18" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="180" y="45" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Na⁺</text>
  <circle cx="240" cy="40" r="22" fill="#7f1d1d" stroke="#dc2626" stroke-width="2"/>
  <text x="240" y="45" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold">Cl⁻</text>
  <circle cx="300" cy="40" r="18" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="300" y="45" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Na⁺</text>

  <!-- Row 1: Cl Na Cl Na Cl -->
  <circle cx="60" cy="110" r="22" fill="#7f1d1d" stroke="#dc2626" stroke-width="2"/>
  <text x="60" y="115" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold">Cl⁻</text>
  <circle cx="120" cy="110" r="18" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="120" y="115" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Na⁺</text>
  <circle cx="180" cy="110" r="22" fill="#7f1d1d" stroke="#dc2626" stroke-width="2"/>
  <text x="180" y="115" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold">Cl⁻</text>
  <circle cx="240" cy="110" r="18" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="240" y="115" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Na⁺</text>
  <circle cx="300" cy="110" r="22" fill="#7f1d1d" stroke="#dc2626" stroke-width="2"/>
  <text x="300" y="115" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold">Cl⁻</text>

  <!-- Row 2: Na Cl Na Cl Na -->
  <circle cx="60" cy="180" r="18" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="60" y="185" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Na⁺</text>
  <circle cx="120" cy="180" r="22" fill="#7f1d1d" stroke="#dc2626" stroke-width="2"/>
  <text x="120" y="185" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold">Cl⁻</text>
  <circle cx="180" cy="180" r="18" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="180" y="185" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Na⁺</text>
  <circle cx="240" cy="180" r="22" fill="#7f1d1d" stroke="#dc2626" stroke-width="2"/>
  <text x="240" y="185" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold">Cl⁻</text>
  <circle cx="300" cy="180" r="18" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
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
  <circle cx="20" cy="235" r="8" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="32" y="239" fill="#1e40af" font-size="10">Na⁺ (smaller cation)</text>
  <circle cx="170" cy="235" r="10" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
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
      id: 'list-nacl-facts',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Co-ordination number = the number of nearest-neighbour ions of <em>opposite</em> charge directly surrounding a given ion',
          'In NaCl: r(Na⁺) = 102 pm, r(Cl⁻) = 181 pm — radius ratio = 102 ÷ 181 ≈ 56% → 6:6 co-ordination',
          'The NaCl lattice is called the <strong>rock salt structure</strong> — adopted by most 1:1 ionic compounds with radius ratio ≈ 41–73%',
          'Other compounds with the rock salt structure: KCl (ratio ≈ 73%), MgO (ratio ≈ 59%), LiF (ratio ≈ 53%), CaO (ratio ≈ 55%)',
          'The unit cell (smallest repeating unit) of NaCl contains <strong>4 Na⁺ and 4 Cl⁻</strong> ions — confirming the 1:1 empirical formula',
          'Na⁺ and Cl⁻ are arranged in a face-centred cubic (FCC) arrangement where each ion type fills the octahedral holes of the other sub-lattice'
        ]
      },
      terms: []
    },
    {
      id: 'h-cscl',
      type: 'heading',
      data: { text: 'Caesium Chloride (CsCl) — 8:8 Co-ordination', level: 2 },
      terms: []
    },
    {
      id: 'list-cscl',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'CsCl has a <strong>different structure</strong> to NaCl despite both having a 1:1 ion ratio',
          'r(Cs⁺) = 167 pm, r(Cl⁻) = 181 pm → radius ratio = 167 ÷ 181 ≈ 92% → 8:8 co-ordination',
          'Each Cs⁺ sits at the <em>centre</em> of a cube with 8 Cl⁻ at the 8 corners — body-centred cubic (BCC) arrangement',
          'Each Cl⁻ is in turn surrounded by 8 Cs⁺ by symmetry — the 1:1 empirical formula is maintained throughout',
          'More ion contacts (8 vs 6) → more simultaneous electrostatic attractions → higher lattice energy than the equivalent 6:6 structure',
          'The caesium chloride structure type is adopted when the radius ratio exceeds ≈ 73%',
          'At high temperature (≈ 469 °C), CsCl can undergo a phase transition to the NaCl-type structure'
        ]
      },
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
  <circle cx="100" cy="60" r="16" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5" opacity="0.7"/>
  <text x="100" y="64" text-anchor="middle" fill="#991b1b" font-size="9">Cl⁻</text>

  <circle cx="200" cy="60" r="16" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="200" y="64" text-anchor="middle" fill="#991b1b" font-size="9">Cl⁻</text>

  <circle cx="155" cy="30" r="16" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="155" y="34" text-anchor="middle" fill="#991b1b" font-size="9">Cl⁻</text>

  <circle cx="255" cy="30" r="16" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="255" y="34" text-anchor="middle" fill="#991b1b" font-size="9">Cl⁻</text>

  <circle cx="100" cy="160" r="16" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="100" y="164" text-anchor="middle" fill="#991b1b" font-size="9">Cl⁻</text>

  <circle cx="200" cy="160" r="16" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="200" y="164" text-anchor="middle" fill="#991b1b" font-size="9">Cl⁻</text>

  <circle cx="155" cy="130" r="16" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="155" y="134" text-anchor="middle" fill="#991b1b" font-size="9">Cl⁻</text>

  <circle cx="255" cy="130" r="16" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="255" y="134" text-anchor="middle" fill="#991b1b" font-size="9">Cl⁻</text>

  <!-- Cs⁺ ion at cube centre -->
  <circle cx="178" cy="95" r="20" fill="#0a3020" stroke="#16a34a" stroke-width="2"/>
  <text x="178" y="92" text-anchor="middle" fill="#166534" font-size="10" font-weight="bold">Cs⁺</text>
  <text x="178" y="106" text-anchor="middle" fill="#166534" font-size="8">centre</text>

  <!-- Labels -->
  <text x="210" y="200" text-anchor="middle" fill="#1e40af" font-size="11" font-weight="bold">8:8 co-ordination</text>
  <text x="210" y="215" text-anchor="middle" fill="#64748b" font-size="10">Each Cs⁺ surrounded by 8 Cl⁻ (at cube corners)</text>
  <text x="210" y="228" text-anchor="middle" fill="#64748b" font-size="10">Each Cl⁻ surrounded by 8 Cs⁺ (by symmetry)</text>

  <!-- Comparison annotation -->
  <rect x="300" y="50" width="110" height="80" rx="6" fill="#0a2e1a" stroke="#16a34a" stroke-width="1"/>
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
          ['<strong>Insoluble in organic solvents</strong>', 'Organic solvents (e.g. hexane) are non-polar. Their weak van der Waals attractions to ions cannot overcome the strong ionic lattice energy. The ions are not hydrated and remain locked in the lattice.'],
          ['<strong>Hard (but brittle)</strong>', 'Ions are tightly locked in fixed lattice positions — great resistance to surface compression (hardness). However, once a shear force displaces a layer by one lattice spacing, like-charge repulsion causes sudden fracture (brittleness). Hardness and brittleness coexist in ionic crystals.']
        ]
      },
      terms: []
    },
    {
      id: 'table-mp-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Melting points of ionic compounds — effect of ion charge and ion size on lattice energy',
        headers: ['Compound', 'Charges', 'Ion sizes', 'Melting point (°C)', 'Trend explained'],
        rows: [
          ['NaCl', '1⁺ / 1⁻', 'Na⁺ = 102 pm, Cl⁻ = 181 pm', '801', 'Reference compound'],
          ['KCl', '1⁺ / 1⁻', 'K⁺ = 138 pm (larger than Na⁺)', '770', 'Larger K⁺ → longer interionic distance → weaker force → slightly lower mp than NaCl'],
          ['LiF', '1⁺ / 1⁻', 'Li⁺ = 76 pm, F⁻ = 133 pm (both smaller)', '845', 'Smaller ions → shorter distance → stronger force → higher mp than NaCl'],
          ['MgO', '2⁺ / 2⁻', 'Mg²⁺ = 72 pm, O²⁻ = 140 pm', '2852', 'Doubly charged ions → charge product 4× larger → far higher lattice energy → much higher mp'],
          ['CaO', '2⁺ / 2⁻', 'Ca²⁺ = 100 pm (larger than Mg²⁺)', '2613', 'Same 2+/2− charges but larger Ca²⁺ → slightly lower mp than MgO']
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
  <circle cx="40" cy="50" r="14" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="40" y="54" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <circle cx="80" cy="50" r="16" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="80" y="54" text-anchor="middle" fill="#991b1b" font-size="9">−</text>
  <circle cx="120" cy="50" r="14" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="120" y="54" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <circle cx="160" cy="50" r="16" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="160" y="54" text-anchor="middle" fill="#991b1b" font-size="9">−</text>
  <circle cx="200" cy="50" r="14" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="200" y="54" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <!-- Row 2 -->
  <circle cx="40" cy="100" r="16" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="40" y="104" text-anchor="middle" fill="#991b1b" font-size="9">−</text>
  <circle cx="80" cy="100" r="14" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="80" y="104" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <circle cx="120" cy="100" r="16" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="120" y="104" text-anchor="middle" fill="#991b1b" font-size="9">−</text>
  <circle cx="160" cy="100" r="14" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="160" y="104" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <circle cx="200" cy="100" r="16" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="200" y="104" text-anchor="middle" fill="#991b1b" font-size="9">−</text>
  <!-- Vertical attraction lines: opposite charges directly above/below in BEFORE diagram -->
  <line x1="40" y1="64" x2="40" y2="84" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="80" y1="66" x2="80" y2="86" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="120" y1="64" x2="120" y2="84" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="160" y1="66" x2="160" y2="86" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="200" y1="64" x2="200" y2="84" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="120" y="150" text-anchor="middle" fill="#059669" font-size="10">+/− pairs attract → stable</text>

  <!-- ARROW -->
  <text x="260" y="75" text-anchor="middle" fill="#dc2626" font-size="24">→</text>
  <text x="260" y="91" text-anchor="middle" fill="#dc2626" font-size="9">layer</text>
  <text x="260" y="102" text-anchor="middle" fill="#dc2626" font-size="9">shifts</text>

  <!-- AFTER: Row 1 shifted one full lattice spacing (40 px) to the right → like charges now align directly above each other -->
  <text x="390" y="18" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="12">After layer shift</text>
  <!-- Row 2 (UNCHANGED): Cl−(300), Na+(340), Cl−(380), Na+(420) at y=100 -->
  <circle cx="300" cy="100" r="16" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="300" y="104" text-anchor="middle" fill="#991b1b" font-size="9">−</text>
  <circle cx="340" cy="100" r="14" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="340" y="104" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <circle cx="380" cy="100" r="16" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="380" y="104" text-anchor="middle" fill="#991b1b" font-size="9">−</text>
  <circle cx="420" cy="100" r="14" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="420" y="104" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <!-- Row 1 (SHIFTED +40 px): Na+(340), Cl−(380), Na+(420), Cl−(460) at y=50 -->
  <circle cx="340" cy="50" r="14" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="340" y="54" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <circle cx="380" cy="50" r="16" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="380" y="54" text-anchor="middle" fill="#991b1b" font-size="9">−</text>
  <circle cx="420" cy="50" r="14" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="420" y="54" text-anchor="middle" fill="#1e40af" font-size="9">+</text>
  <circle cx="460" cy="50" r="16" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="460" y="54" text-anchor="middle" fill="#991b1b" font-size="9">−</text>
  <!-- Red repulsion lines between SAME charges now directly above each other -->
  <line x1="340" y1="64" x2="340" y2="86" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="352" y="78" fill="#dc2626" font-size="8" font-weight="bold">+/+</text>
  <line x1="380" y1="66" x2="380" y2="84" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="392" y="78" fill="#dc2626" font-size="8" font-weight="bold">−/−</text>
  <line x1="420" y1="64" x2="420" y2="86" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="432" y="78" fill="#dc2626" font-size="8" font-weight="bold">+/+</text>
  <text x="390" y="150" text-anchor="middle" fill="#dc2626" font-size="10">like charges align → repel → crystal shatters</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'h-electrolysis-intro',
      type: 'heading',
      data: { text: 'Electrolysis of Molten Ionic Compounds', level: 2 }
    },
    {
      id: 'list-electrolysis-defs',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Electrolysis</strong>: using electricity to bring about a chemical change in a molten or dissolved ionic substance',
          '<strong>Electrolyte</strong>: the ionic compound undergoing electrolysis — must be molten or dissolved in water, <em>not</em> solid (ions are fixed in the lattice and cannot move)',
          '<strong>Electrodes</strong>: inert conductors (usually graphite/carbon or platinum) placed in the electrolyte and connected to a DC power supply',
          '<strong>Anode (+)</strong>: the positive electrode, connected to the positive terminal of the power supply',
          '<strong>Cathode (−)</strong>: the negative electrode, connected to the negative terminal of the power supply',
          '<strong>PANC mnemonic</strong>: <strong>P</strong>ositive <strong>A</strong>node, <strong>N</strong>egative <strong>C</strong>athode',
          '<strong>Cations</strong> (positive ions) migrate towards the cathode (−) and are <em>reduced</em> there',
          '<strong>Anions</strong> (negative ions) migrate towards the anode (+) and are <em>oxidised</em> there'
        ]
      }
    },
    {
      id: 'callout-current',
      type: 'callout',
      data: {
        style: 'key',
        title: 'How current is carried in electrolysis',
        text: '<strong>In the wires and electrodes</strong>: current is carried by <em>electrons</em> (as in any metal conductor).<br><strong>In the electrolyte melt</strong>: current is carried by <em>ions</em> — cations drift toward the cathode, anions drift toward the anode.<br>The power supply acts as an <strong>electron pump</strong>: it forces electrons through the external circuit and drives ion movement in the melt.'
      }
    },
    {
      id: 'callout-we-pbbr2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Electrolysis of molten PbBr₂',
        text: '<strong>Observations:</strong><br>• Nothing happens while PbBr₂ is solid — ions fixed in lattice<br>• Bulb lights when PbBr₂ melts — ions are now mobile, current flows<br>• Brown gas forms at the anode (Br₂)<br>• Silvery bead of liquid metal forms at the cathode (Pb)<br><br><strong>Half-equations:</strong><br>Cathode (reduction — gain of electrons): Pb²⁺ + 2e⁻ → Pb<br>Anode (oxidation — loss of electrons): 2Br⁻ → Br₂ + 2e⁻<br><br><strong>OIL RIG:</strong> Oxidation Is Loss (anode, Br⁻ loses e⁻) | Reduction Is Gain (cathode, Pb²⁺ gains e⁻)'
      }
    },
    {
      id: 'callout-we-nacl',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Electrolysis of molten NaCl',
        text: '<strong>Cathode (reduction):</strong> Na⁺ + e⁻ → Na (sodium metal produced)<br><strong>Anode (oxidation):</strong> 2Cl⁻ → Cl₂ + 2e⁻ (chlorine gas produced)<br><br>For every 2 mol Na produced at the cathode, 1 mol Cl₂ is produced at the anode — balance electrons transferred.'
      }
    },
    {
      id: 'callout-oil-rig',
      type: 'callout',
      data: {
        style: 'key',
        title: 'OIL RIG — Oxidation and Reduction at the Electrodes',
        text: '<strong>O</strong>xidation <strong>I</strong>s <strong>L</strong>oss (of electrons) — always at the <strong>ANODE (+)</strong><br><strong>R</strong>eduction <strong>I</strong>s <strong>G</strong>ain (of electrons) — always at the <strong>CATHODE (−)</strong><br><br>• Anions arrive at anode → discharge by losing electrons → oxidised<br>• Cations arrive at cathode → discharge by gaining electrons → reduced'
      }
    },
    {
      id: 'svg-electrolysis',
      type: 'svg',
      data: {
        caption: 'Figure: Electrolysis of molten PbBr₂ — ion movement, electrode products, and electron flow in external circuit',
        svg: `<svg viewBox="0 0 600 355" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <defs>
    <marker id="arrowB" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#1d4ed8"/>
    </marker>
    <marker id="arrowR" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#b91c1c"/>
    </marker>
  </defs>
  <!-- Title -->
  <text x="300" y="17" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">Electrolysis of Molten PbBr₂</text>
  <!-- DC Power Source box -->
  <rect x="220" y="26" width="160" height="46" rx="6" fill="#44370a" stroke="#ca8a04" stroke-width="2"/>
  <text x="300" y="47" text-anchor="middle" fill="#78350f" font-weight="bold" font-size="12">DC Power Source</text>
  <text x="238" y="64" text-anchor="middle" fill="#1d4ed8" font-weight="bold" font-size="16">−</text>
  <text x="362" y="64" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="16">+</text>
  <!-- Left wire: − terminal to cathode -->
  <polyline points="238,72 175,72 175,140" stroke="#374151" stroke-width="2" fill="none"/>
  <polygon points="175,142 170,127 180,127" fill="#1d4ed8"/>
  <text x="118" y="102" fill="#1d4ed8" font-size="10">e⁻ flow ↓</text>
  <!-- Right wire: anode to + terminal -->
  <polyline points="362,72 425,72 425,140" stroke="#374151" stroke-width="2" fill="none"/>
  <polygon points="425,70 420,86 430,86" fill="#b91c1c"/>
  <text x="437" y="102" fill="#b91c1c" font-size="10">e⁻ flow ↑</text>
  <!-- Beaker outline -->
  <rect x="108" y="172" width="384" height="138" rx="8" fill="#0c4a6e" stroke="#0369a1" stroke-width="2"/>
  <!-- Cathode electrode (left) -->
  <rect x="168" y="140" width="14" height="152" rx="3" fill="#9ca3af" stroke="#6b7280" stroke-width="1.5"/>
  <text x="175" y="133" text-anchor="middle" fill="#1d4ed8" font-weight="bold" font-size="11">CATHODE (−)</text>
  <!-- Pb metal deposit at cathode bottom -->
  <ellipse cx="175" cy="297" rx="19" ry="8" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
  <text x="175" y="304" text-anchor="middle" fill="#334155" font-size="9">Pb(l)</text>
  <!-- Anode electrode (right) -->
  <rect x="418" y="140" width="14" height="152" rx="3" fill="#9ca3af" stroke="#6b7280" stroke-width="1.5"/>
  <text x="425" y="133" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="11">ANODE (+)</text>
  <!-- Br2 gas bubbles rising above melt surface -->
  <circle cx="426" cy="165" r="8" fill="#44370a" stroke="#ca8a04" stroke-width="1.2"/>
  <circle cx="442" cy="154" r="6" fill="#44370a" stroke="#ca8a04" stroke-width="1" opacity="0.8"/>
  <text x="452" y="158" fill="#92400e" font-weight="bold" font-size="10">Br₂(g)</text>
  <!-- Pb2+ cation arrows toward cathode -->
  <text x="230" y="208" fill="#1d4ed8" font-weight="bold" font-size="13">Pb²⁺</text>
  <line x1="227" y1="203" x2="196" y2="203" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arrowB)"/>
  <text x="230" y="250" fill="#1d4ed8" font-weight="bold" font-size="13">Pb²⁺</text>
  <line x1="227" y1="245" x2="196" y2="245" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arrowB)"/>
  <!-- Br- anion arrows toward anode -->
  <text x="320" y="208" fill="#b91c1c" font-weight="bold" font-size="13">Br⁻</text>
  <line x1="350" y1="203" x2="410" y2="203" stroke="#b91c1c" stroke-width="2" marker-end="url(#arrowR)"/>
  <text x="320" y="250" fill="#b91c1c" font-weight="bold" font-size="13">Br⁻</text>
  <line x1="350" y1="245" x2="410" y2="245" stroke="#b91c1c" stroke-width="2" marker-end="url(#arrowR)"/>
  <!-- Electrolyte label -->
  <text x="300" y="275" text-anchor="middle" fill="#0369a1" font-size="10" font-weight="bold">Molten PbBr₂ (electrolyte)</text>
  <text x="300" y="288" text-anchor="middle" fill="#0369a1" font-size="9">Ions free to move when molten</text>
  <!-- Half-equations below beaker -->
  <text x="175" y="325" text-anchor="middle" fill="#166534" font-size="10">Pb²⁺ + 2e⁻ → Pb</text>
  <text x="175" y="338" text-anchor="middle" fill="#166534" font-size="9">(reduction)</text>
  <text x="425" y="325" text-anchor="middle" fill="#9a3412" font-size="10">2Br⁻ → Br₂ + 2e⁻</text>
  <text x="425" y="338" text-anchor="middle" fill="#9a3412" font-size="9">(oxidation)</text>
</svg>`
      }
    },
    {
      id: 'checklist-lattice',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe the giant ionic lattice as a regular, repeating 3D array of alternating cations and anions', checked: false },
          { text: 'State that the formula of an ionic compound is an empirical formula (simplest whole-number ion ratio, not a molecular formula)', checked: false },
          { text: 'Give the co-ordination number of Na⁺ and Cl⁻ in NaCl (= 6:6) and justify using the radius ratio (≈56%)', checked: false },
          { text: 'Name the NaCl lattice type (rock salt structure) and list two other compounds with this structure', checked: false },
          { text: 'Give the co-ordination number in CsCl (= 8:8) and explain why Cs⁺ can accommodate 8 Cl⁻ (radius ratio ≈92%)', checked: false },
          { text: 'State the radius ratio rule: >73% → 8:8; 41–73% → 6:6 co-ordination', checked: false },
          { text: 'Explain high melting points using the ionic lattice model (strong, non-directional electrostatic forces throughout)', checked: false },
          { text: 'Explain why MgO has a much higher mp than NaCl (2+ / 2− ions vs 1+ / 1− → higher charge product → higher lattice energy)', checked: false },
          { text: 'Explain BRITTLENESS: layer shift → like-charge alignment → repulsion → fracture along cleavage plane', checked: false },
          { text: 'State that ionic compounds are also HARD (ions locked in rigid, fixed lattice positions)', checked: false },
          { text: 'Explain why solid ionic compounds do NOT conduct electricity (ions fixed — no mobile charge carriers)', checked: false },
          { text: 'Explain why molten or dissolved ionic compounds DO conduct (ions free to move → electrolysis)', checked: false },
          { text: 'Explain solubility in polar solvents: δ⁻ O of water attracts cations; δ⁺ H attracts anions — ion hydration', checked: false },
          { text: 'Define electrolysis and electrolyte — state the PANC mnemonic', checked: false },
          { text: 'Apply OIL RIG: cations → cathode (reduced); anions → anode (oxidised)', checked: false },
          { text: 'Write half-equations: molten PbBr₂ — Pb²⁺ + 2e⁻ → Pb (cathode); 2Br⁻ → Br₂ + 2e⁻ (anode)', checked: false },
          { text: 'Write half-equations: molten NaCl — Na⁺ + e⁻ → Na (cathode); 2Cl⁻ → Cl₂ + 2e⁻ (anode)', checked: false }
        ]
      }
    },
    {
      id: 'summary-lattice',
      type: 'summary',
      data: {
        text: 'A giant ionic lattice is a regular 3D array of alternating cations and anions held by strong, non-directional electrostatic forces; extends to infinity; empirical formula only (no molecules). NaCl (rock salt structure): 6:6 co-ordination (Na⁺/Cl⁻ radius ratio ≈ 56%). CsCl: 8:8 co-ordination (Cs⁺/Cl⁻ ratio ≈ 92%, body-centred cube). Higher charge or smaller ions → higher lattice energy → higher mp (MgO 2852 °C >> NaCl 801 °C). Ionic compounds are hard + brittle (layer shift → like-charge repulsion → fracture); non-conducting as solids (ions fixed); conducting when molten/dissolved (ions mobile). PANC: Positive Anode Negative Cathode. OIL RIG. PbBr₂: Pb²⁺ + 2e⁻ → Pb (cathode); 2Br⁻ → Br₂ + 2e⁻ (anode). NaCl: Na⁺ + e⁻ → Na (cathode); 2Cl⁻ → Cl₂ + 2e⁻ (anode). Soluble in polar solvents (ion hydration); insoluble in organic solvents (VdW too weak).'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'list-lattice', prompt: 'Describe the structure of a giant ionic lattice and explain what the empirical formula of an ionic compound represents.' },
      { id: 'c2', blockId: 'callout-nacl-structure', prompt: 'Explain why NaCl is 6:6 co-ordinated and not 8:8, using the radius ratio concept.' },
      { id: 'c3', blockId: 'callout-radius-ratio', prompt: 'Explain why CsCl has 8:8 co-ordination but NaCl has 6:6. Give the radius ratios for both compounds.' },
      { id: 'c4', blockId: 'table-props', prompt: 'Explain why ionic compounds are hard and brittle — and why these two properties can coexist.' },
      { id: 'c5', blockId: 'table-mp-compare', prompt: 'MgO melts at 2852 °C; NaCl melts at 801 °C. Explain this difference using the ionic lattice model.' },
      { id: 'c6', blockId: 'table-props', prompt: 'Why are ionic compounds insoluble in hexane but soluble in water? Use particle-level explanations.' },
      { id: 'c7', blockId: 'list-electrolysis-defs', prompt: 'Define electrolysis and electrolyte. State the PANC mnemonic and explain what happens at each electrode.' },
      { id: 'c8', blockId: 'callout-we-pbbr2', prompt: 'Write the half-equations for the electrolysis of molten PbBr₂ and state the observation at each electrode.' },
      { id: 'c9', blockId: 'list-nacl-facts', prompt: 'State the Na⁺/Cl⁻ radius ratio, name the NaCl structure type, and give two other compounds with the same structure.' },
      { id: 'c10', blockId: 'list-cscl', prompt: 'Describe the arrangement of ions in CsCl and explain why it differs from the NaCl structure using the radius ratio.' }
    ],
    summaryText: 'Giant ionic lattice = regular 3D array of alternating cations and anions; non-directional electrostatic forces; extends to infinity; empirical formula only (no molecules). NaCl: rock salt structure, 6:6 co-ordination (Na⁺/Cl⁻ radius ratio ≈ 56%). CsCl: 8:8 co-ordination (Cs⁺/Cl⁻ ratio ≈ 92%, body-centred cube arrangement). Higher charge or smaller ions → higher lattice energy → higher mp (MgO 2852 °C > NaCl 801 °C). Hard + brittle (layer shift → like-charge repulsion → fracture); non-conducting solid (ions fixed); conducting when molten/dissolved (ions mobile). PANC: Positive Anode Negative Cathode. OIL RIG. PbBr₂: Pb²⁺ + 2e⁻ → Pb (cathode); 2Br⁻ → Br₂ + 2e⁻ (anode). NaCl: Na⁺ + e⁻ → Na (cathode); 2Cl⁻ → Cl₂ + 2e⁻ (anode). Soluble in polar solvents (ion hydration); insoluble in organic solvents (VdW too weak).',
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_3_1;