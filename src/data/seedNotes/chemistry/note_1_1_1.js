/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 1
 * "Mole concept and Avogadro constant"
 * Source: Pearson Edexcel IAL Chemistry Student Book — Sections 1C.1 and 1C.2
 */
export const note_chemistry_1_1_1 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Understand relative atomic mass (Aᵣ), relative molecular/formula mass (Mᵣ), molar mass (M), and the Avogadro constant (L). Perform mole calculations using n = m/M and use molar volume (24.0 dm³ mol⁻¹ at RTP) for gas volume calculations.' },
      terms: []
    },
    {
      id: 'h-ar',
      type: 'heading',
      data: { text: 'Relative Atomic Mass (Aᵣ)', level: 2 },
      terms: []
    },
    {
      id: 'callout-ar',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Relative Atomic Mass (Aᵣ)',
        text: '• The <strong>weighted mean (average) mass</strong> of an atom of an element, compared to ¹⁄₁₂ the mass of one atom of ¹²C.<br/>• Formula: Aᵣ = mean mass of one atom of element ÷ (¹⁄₁₂ × mass of one ¹²C atom)<br/>• Has <strong>no units</strong> — it is a pure dimensionless ratio.<br/>• Accounts for all naturally occurring <strong>isotopes</strong> and their relative abundances (hence it is a <em>weighted mean</em>).'
      },
      terms: ['Relative atomic mass', 'Weighted mean']
    },
    {
      id: 'h-mr',
      type: 'heading',
      data: { text: 'Relative Molecular Mass (Mᵣ) and Relative Formula Mass', level: 2 },
      terms: []
    },
    {
      id: 'list-mr',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Calculated by <strong>adding the Aᵣ values</strong> of all atoms in the molecular or ionic formula.',
          'Has <strong>no units</strong> — it is a ratio relative to ¹⁄₁₂ the mass of a ¹²C atom.',
          'Use <em>relative molecular mass</em> (Mᵣ) for molecular substances (e.g. CO₂, H₂O, H₂SO₄).',
          'Use <em>relative formula mass</em> for ionic compounds (e.g. NaCl, MgO) and hydrated salts (e.g. CuSO₄·5H₂O).'
        ]
      }
    },
    {
      id: 'callout-mr-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Examples (from the textbook)',
        text: '<strong>CO₂:</strong> Mᵣ = 12.0 + (2 × 16.0) = <strong>44.0</strong><br/><strong>H₂SO₄:</strong> Mᵣ = (2 × 1.0) + 32.1 + (4 × 16.0) = <strong>98.1</strong><br/><strong>CuSO₄·5H₂O:</strong> Mᵣ = 63.5 + 32.1 + (4 × 16.0) + 5{(2 × 1.0) + 16.0} = <strong>249.6</strong><br/><br/>Use the term <em>relative formula mass</em> for ionic compounds (e.g. NaCl) and hydrated salts.'
      },
      terms: ['Relative molecular mass', 'Relative formula mass']
    },
    {
      id: 'h-molar',
      type: 'heading',
      data: { text: 'Molar Mass (M) and the Mole', level: 2 },
      terms: []
    },
    {
      id: 'callout-mole',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: The Mole',
        text: '• A <strong>mole</strong> is the SI unit of amount of substance — it contains the same number of particles as there are atoms in exactly <strong>12 g of ¹²C</strong>.<br/>• One mole always contains <strong>6.02 × 10²³ particles</strong> (atoms, molecules, ions or formula units).<br/>• <strong>Molar mass (M)</strong> = the mass of one mole of a substance. Units: g mol⁻¹.<br/>• Numerically equal to Aᵣ or Mᵣ but with the unit g mol⁻¹ (e.g. M(CO₂) = 44.0 g mol⁻¹, M(NaCl) = 58.5 g mol⁻¹).'
      },
      terms: ['Mole', 'Molar mass']
    },
    {
      id: 'eq-mole',
      type: 'equation',
      data: {
        html: 'n = <span class="nb-frac"><span class="nb-num">m</span><span class="nb-den">M</span></span>',
        caption: 'n = amount (mol) · m = mass (g) · M = molar mass (g mol⁻¹)'
      }
    },
    {
      id: 'svg-mole-triangle',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 230" width="280" height="230"><polygon points="140,15 10,200 270,200" fill="#f5f3ff" stroke="#6d28d9" stroke-width="2.5"/><line x1="75" y1="108" x2="205" y2="108" stroke="#6d28d9" stroke-width="2"/><text x="140" y="72" text-anchor="middle" font-size="38" font-weight="bold" fill="#4c1d95" font-family="Arial,sans-serif">m</text><text x="140" y="100" text-anchor="middle" font-size="12" fill="#7c3aed" font-family="Arial,sans-serif">mass (g)</text><text x="86" y="158" text-anchor="middle" font-size="34" font-weight="bold" fill="#1d4ed8" font-family="Arial,sans-serif">n</text><text x="86" y="180" text-anchor="middle" font-size="11" fill="#2563eb" font-family="Arial,sans-serif">amount (mol)</text><text x="194" y="158" text-anchor="middle" font-size="34" font-weight="bold" fill="#065f46" font-family="Arial,sans-serif">M</text><text x="194" y="180" text-anchor="middle" font-size="11" fill="#059669" font-family="Arial,sans-serif">molar mass (g mol&#x207B;&#xB9;)</text><text x="140" y="218" text-anchor="middle" font-size="11" fill="#374151" font-family="Arial,sans-serif">cover the unknown: n = m/M | m = n&#xD7;M | M = m/n</text></svg>',
        caption: 'Mole Triangle — cover the variable you want to find'
      }
    },
    {
      id: 'callout-mole-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Examples',
        text: '<strong>1. Amount in 6.51 g of NaCl:</strong> n = 6.51 / 58.5 = <strong>0.111 mol</strong><br/><strong>2. Mass of 0.263 mol of HI (hydrogen iodide):</strong> m = 0.263 × 127.9 = <strong>33.6 g</strong><br/><strong>3. Molar mass if 0.284 mol has mass 17.8 g:</strong> M = 17.8 / 0.284 = <strong>62.7 g mol⁻¹</strong>'
      },
      terms: []
    },
    {
      id: 'h-molar-vol',
      type: 'heading',
      data: { text: 'Molar Volume of a Gas', level: 2 }
    },
    {
      id: 'list-molar-vol',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'One mole of <strong>any gas</strong> occupies the <em>same volume</em> at the same temperature and pressure — regardless of the identity of the gas.',
          'At <strong>RTP</strong> (room temperature and pressure: 25°C, 100 kPa), the molar volume Vₘ = <strong>24.0 dm³ mol⁻¹</strong>.',
          'Therefore 24.0 dm³ of <em>any</em> gas at RTP always contains exactly 1 mol of gas particles.',
          '<strong>Unit conversion:</strong> 1 dm³ = 1 000 cm³ — divide cm³ by 1 000 to get dm³ before using n = V / 24.0.'
        ]
      }
    },
    {
      id: 'eq-molar-vol',
      type: 'equation',
      data: {
        html: 'n = <span class="nb-frac"><span class="nb-num">V</span><span class="nb-den">24.0</span></span>',
        caption: 'n = amount (mol) · V = volume of gas (dm³) · 24.0 dm³ mol⁻¹ at RTP'
      }
    },
    {
      id: 'svg-molar-vol',
      type: 'svg',
      data: {
        caption: '24.0 dm³ at RTP — equal volume for one mole of every gas',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 220" width="720" height="220"><defs><style>.lbl{font-family:Arial,sans-serif;font-size:13px;font-weight:bold;text-anchor:middle}.sub{font-family:Arial,sans-serif;font-size:11px;text-anchor:middle;fill:#374151}.hdr{font-family:Arial,sans-serif;font-size:12px;text-anchor:middle;fill:#6d28d9}</style></defs><rect x="20" y="30" width="130" height="130" rx="8" fill="#ede9fe" stroke="#6d28d9" stroke-width="2"/><text x="85" y="72" class="lbl" fill="#4c1d95">CO₂</text><text x="85" y="92" class="sub">44.0 g mol⁻¹</text><text x="85" y="130" class="hdr">24.0 dm³</text><rect x="190" y="30" width="130" height="130" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="2"/><text x="255" y="72" class="lbl" fill="#065f46">O₂</text><text x="255" y="92" class="sub">32.0 g mol⁻¹</text><text x="255" y="130" class="hdr">24.0 dm³</text><rect x="360" y="30" width="130" height="130" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="425" y="72" class="lbl" fill="#92400e">N₂</text><text x="425" y="92" class="sub">28.0 g mol⁻¹</text><text x="425" y="130" class="hdr">24.0 dm³</text><rect x="530" y="30" width="130" height="130" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/><text x="595" y="72" class="lbl" fill="#991b1b">He</text><text x="595" y="92" class="sub">4.0 g mol⁻¹</text><text x="595" y="130" class="hdr">24.0 dm³</text><text x="360" y="185" class="sub" style="font-size:12px;font-weight:bold;fill:#1e40af">All gases: 1 mol occupies 24.0 dm³ at RTP (25°C, 100 kPa)</text><text x="360" y="202" class="sub">Different molar masses, same volume per mole</text></svg>'
      }
    },
    {
      id: 'callout-molar-vol-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Molar Volume Worked Examples',
        text: '<strong>Q: What volume does 4.0 g of O₂ occupy at RTP?</strong><br/>Step 1: M(O₂) = 32.0 g mol⁻¹<br/>Step 2: n(O₂) = 4.0 / 32.0 = 0.125 mol<br/>Step 3: V = n × 24.0 = 0.125 × 24.0 = <strong>3.0 dm³</strong><br/><br/><strong>Q: How many moles of CO₂ are in 6 000 cm³ of gas at RTP?</strong><br/>Step 1: Convert cm³ → dm³: 6 000 / 1 000 = 6.0 dm³<br/>Step 2: n = V / 24.0 = 6.0 / 24.0 = <strong>0.25 mol</strong>'
      }
    },
    {
      id: 'callout-molar-vol-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Molar Volume — Exam Tips',
        text: '• <strong>Always</strong> convert cm³ to dm³ (divide by 1 000) before substituting into n = V / 24.0.<br/>• The molar volume only applies to <em>gases</em>, not liquids or solids.<br/>• Rearrangements: V = n × 24.0 — use when asked for the volume produced in a reaction.'
      }
    },
    {
      id: 'h-avogadro',
      type: 'heading',
      data: { text: 'The Avogadro Constant (L)', level: 2 },
      terms: []
    },
    {
      id: 'eq-particle',
      type: 'equation',
      data: {
        html: 'N = n × L &emsp; or &emsp; n = <span class="nb-frac"><span class="nb-num">N</span><span class="nb-den">L</span></span>',
        caption: 'N = number of particles · n = amount (mol) · L = 6.02 × 10²³ mol⁻¹'
      }
    },
    {
      id: 'callout-avogadro',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Avogadro Constant (L)',
        text: '• L = <strong>6.02 × 10²³ mol⁻¹</strong><br/>• The number of specified particles (atoms, molecules or ions) in one mole of any substance.<br/>• Applies to any particle type: L atoms in 1 mol He, L molecules in 1 mol H₂O, L ions in 1 mol Na⁺.<br/>• To find number of particles: <strong>N = n × L</strong><br/>• To find amount from number of particles: <strong>n = N ÷ L</strong>'
      },
      terms: ['Avogadro constant']
    },
    {
      id: 'table-mole-examples',
      type: 'comparisonTable',
      data: {
        caption: 'One mole of any substance always contains 6.02 × 10²³ particles — the same scale-up factor',
        headers: ['Substance', 'Formula', 'Molar Mass (g mol⁻¹)', 'Mass of 1 mol', 'Particles in 1 mol'],
        rows: [
          ['Helium (monatomic)', 'He', '4.0', '4.0 g', '6.02 × 10²³ atoms'],
          ['Carbon dioxide', 'CO₂', '44.0', '44.0 g', '6.02 × 10²³ molecules'],
          ['Nitrate ion', 'NO₃⁻', '62.0', '62.0 g', '6.02 × 10²³ ions'],
          ['Sodium chloride', 'NaCl', '58.5', '58.5 g', '6.02 × 10²³ formula units'],
          ['Hydrogen gas (diatomic)', 'H₂', '2.0', '2.0 g', '6.02 × 10²³ molecules (= 1.204 × 10²⁴ atoms)']
        ]
      },
      terms: []
    },
    {
      id: 'callout-avogadro-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Avogadro Calculations (from the textbook)',
        text: '<strong>Q: How many H₂O molecules are in 1.25 g of water?</strong><br/>n = 1.25 / 18.0 = 0.0694 mol<br/>Number = 0.0694 × 6.02 × 10²³ = <strong>4.18 × 10²² molecules</strong><br/><br/><strong>Q: How many total atoms are in 80.0 g of MgO?</strong><br/>n(MgO) = 80.0 / 40.3 = 1.985 mol<br/>Number of MgO formula units = 1.985 × 6.02 × 10²³ = 1.195 × 10²⁴.<br/>Because there are 2 atoms (1 Mg, 1 O) in each MgO unit, total atoms = 1.195 × 10²⁴ × 2 = <strong>2.39 × 10²⁴ atoms</strong>.'
      },
      terms: []
    },
    {
      id: 'callout-gold-atoms',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Mass of 100 Million Gold Atoms',
        text: '<strong>Q: What is the mass of 1 × 10⁸ (100 million) atoms of gold (Au)?</strong><br/>(Aᵣ of Au = 197.0)<br/><br/><strong>Step 1 — Find moles:</strong><br/>n = number of particles ÷ L = (1 × 10⁸) ÷ (6.02 × 10²³) = <strong>1.66 × 10⁻¹⁶ mol</strong><br/><br/><strong>Step 2 — Find mass:</strong><br/>m = n × M = 1.66 × 10⁻¹⁶ × 197.0 = <strong>3.27 × 10⁻¹⁴ g</strong><br/><br/><em>Key insight: 100 million sounds enormous, but it is an incredibly tiny mass. This shows why atoms are far too small to weigh directly — and why Avogadro\'s constant exists as a scaling factor up to laboratory quantities.</em>'
      },
      terms: []
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Be specific about what you are counting!',
        text: 'When using moles, always state which species you mean. For example:<br/>• 1 g O atoms (O): n = 1/16.0 = 0.0625 mol<br/>• 1 g O₂ molecules: n = 1/32.0 = 0.0313 mol<br/>• 1 g O₃ molecules: n = 1/48.0 = 0.0208 mol'
      },
      terms: []
    },
    {
      id: 'callout-electron-count',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Counting Electrons Using Atomic Number',
        text: '<strong>Q: How many electrons are in 10.1 g of neon?</strong><br/><br/>Step 1: n(Ne) = 10.1 / 20.2 = 0.50 mol<br/>Step 2: Number of Ne atoms = 0.50 × 6.02 × 10²³ = 3.01 × 10²³ atoms<br/>Step 3: Atomic number of Ne = 10 (so each atom has 10 electrons)<br/>Step 4: Total electrons = 3.01 × 10²³ × 10 = <strong>3.01 × 10²⁴ electrons</strong><br/><br/><em>Key insight: always multiply the number of atoms by the atomic number to get the number of electrons in a neutral atom.</em>'
      },
      terms: []
    },
    {
      id: 'callout-avogadro-mcq',
      type: 'callout',
      data: {
        style: 'key',
        title: 'MCQ Pitfall: What Avogadro\'s Constant Is NOT',
        text: 'Students often lose marks in MCQs by not reading Avogadro questions carefully. Remember:<br/><br/>• <strong>NOT</strong> "the grams of carbon in one mole of carbon" — Avogadro is a <em>number</em>, not a mass.<br/>• <strong>NOT</strong> "the number of atoms in one mole of O₂ gas" — O₂ is diatomic, so 1 mol O₂ contains <em>2×</em> Avogadro\'s number of atoms.<br/>• <strong>YES</strong> "the number of atoms in one mole of helium (He)" — He is monatomic, so 1 mol He = exactly L atoms.<br/><br/><em>Apply this logic to any substance: check if it is monatomic, and whether you are counting atoms, molecules or ions.</em>'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-ar', prompt: 'State the definition of relative atomic mass (Aᵣ) and explain why it has no units.' },
      { id: 'c2', blockId: 'eq-mole', prompt: 'Write the mole equation in three forms (for n, m, and M).' },
      { id: 'c3', blockId: 'callout-avogadro', prompt: 'State the value and units of the Avogadro constant (L).' },
      { id: 'c4', blockId: 'callout-mole-worked', prompt: 'Calculate the amount of substance in 8.00 g of sulfur dioxide (SO₂). (Aᵣ: S = 32.1, O = 16.0)' },
      { id: 'c5', blockId: 'callout-electron-count', prompt: 'How many electrons are in 10.1 g of neon? (Ar = 20.2, atomic number = 10)' },
      { id: 'c6', blockId: 'callout-avogadro-mcq', prompt: 'Explain why "the number of atoms in one mole of O₂ gas" is NOT equal to Avogadro\'s constant.' },
      { id: 'c7', blockId: 'callout-gold-atoms', prompt: 'Calculate the mass of 1 × 10⁸ atoms of gold (Aᵣ = 197.0). Show all steps.' },
      { id: 'c8', blockId: 'callout-molar-vol-worked', prompt: 'Calculate the volume occupied by 4.0 g of O₂ at RTP. (Aᵣ: O = 16.0; molar volume = 24.0 dm³ mol⁻¹)' }
    ],
    summaryText: 'Aᵣ = weighted mean mass relative to ¹⁄₁₂ ¹²C (no units). Mᵣ = sum of Aᵣ values (no units). M = mass per mole (g mol⁻¹). Mole triangle: n = m/M, m = n×M, M = m/n. Mole = amount containing 6.02×10²³ particles (L). N = n × L; n = N ÷ L. Molar volume at RTP = 24.0 dm³ mol⁻¹ — applies to any gas. n = V/24.0 (V in dm³; convert cm³ ÷ 1000). He (4g), CO₂ (44g), NO₃⁻ (62g) all contain exactly L particles per mole. Electrons per mole = L × atomic number. Avogadro is a number not a mass; diatomic molecules contain 2L atoms per mole.',
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_1_1;