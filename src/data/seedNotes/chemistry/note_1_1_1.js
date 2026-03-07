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
      data: { text: 'Understand relative atomic mass (Ar), relative molecular/formula mass (Mr), molar mass (M), and the Avogadro constant (L). Perform mole calculations using n = m/M.' },
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
        text: 'The <strong>weighted mean (average) mass</strong> of an atom of an element compared to ¹⁄₁₂ of the mass of an atom of ¹²C.<br/><br/>Aᵣ = Mean mass of an atom of an element ÷ (¹⁄₁₂ × mass of a ¹²C atom)<br/><br/>Note: Aᵣ has <strong>no units</strong>.'
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
      id: 'p-mr',
      type: 'paragraph',
      data: { text: 'Mᵣ is calculated by adding the relative atomic masses of all atoms in a formula. It also has <strong>no units</strong>.' },
      terms: []
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
        text: 'A <strong>mole</strong> is the amount of substance that contains the same number of particles as the number of carbon atoms in exactly <strong>12 g of ¹²C</strong>.<br/><br/><strong>Molar mass (M)</strong> = mass per mole of a substance. Units: g mol⁻¹.'
      },
      terms: ['Mole', 'Molar mass']
    },
    {
      id: 'eq-mole',
      type: 'equation',
      data: { latex: 'n = \\frac{m}{M}', caption: 'Mole equation: n = amount in mol, m = mass in g, M = molar mass in g mol⁻¹' }
    },
    {
      id: 'callout-mole-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Examples (from the textbook)',
        text: '<strong>1. Amount in 6.51 g of NaCl:</strong> n = 6.51 / 58.5 = <strong>0.111 mol</strong><br/><strong>2. Mass of 0.263 mol of I₂:</strong> m = 0.263 × 127.9 = <strong>33.6 g</strong><br/><strong>3. Molar mass if 0.284 mol has mass 17.8 g:</strong> M = 17.8 / 0.284 = <strong>62.7 g mol⁻¹</strong>'
      },
      terms: []
    },
    {
      id: 'h-avogadro',
      type: 'heading',
      data: { text: 'The Avogadro Constant (L)', level: 2 },
      terms: []
    },
    {
      id: 'callout-avogadro',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Avogadro Constant',
        text: 'L = <strong>6.02 × 10²³ mol⁻¹</strong><br/><br/>This is the number of particles (atoms, molecules or ions) in one mole of any substance.<br/>For example: 6.02 × 10²³ CO₂ molecules in 44.0 g of CO₂.'
      },
      terms: ['Avogadro constant']
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
      { id: 'c6', blockId: 'callout-avogadro-mcq', prompt: 'Explain why "the number of atoms in one mole of O₂ gas" is NOT equal to Avogadro\'s constant.' }
    ],
    summaryText: 'Aᵣ = weighted mean mass relative to ¹⁄₁₂ ¹²C (no units). Mᵣ = sum of Aᵣ values (no units). M = mass per mole (g mol⁻¹). Mole = amount containing 6.02×10²³ particles. n = m/M. L = 6.02×10²³ mol⁻¹. Electrons per mole = L × atomic number. Avogadro is a number not a mass; diatomic molecules contain 2L atoms per mole.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_1_1;