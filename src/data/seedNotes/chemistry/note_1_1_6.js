/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 6
 * "Stoichiometric mass and volume"
 * Source: Pearson Edexcel IAL Chemistry — Section 1C.2 and gas volume context
 */
export const note_chemistry_1_1_6 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Understand the molar volume of gas at r.t.p. Perform calculations involving volumes and moles of gases. Use moles calculations in stoichiometric problems involving both masses and volumes.' },
      terms: []
    },
    {
      id: 'h-reacting-mass',
      type: 'heading',
      data: { text: 'Reacting Mass Calculations (The Box Method)', level: 2 },
      terms: []
    },
    {
      id: 'p-box-method',
      type: 'paragraph',
      data: { text: 'The <strong>Box Method</strong> provides a consistent 4-step structure for all reacting mass calculations:<br/>1. Calculate <strong>moles</strong> of the known substance (n = m / M).<br/>2. Find the <strong>mole ratio</strong> from the balanced equation.<br/>3. Apply the ratio to find the <strong>moles</strong> of the unknown substance.<br/>4. Calculate the <strong>mass</strong> of the unknown substance (m = n × M).' },
      terms: []
    },
    {
      id: 'callout-reacting-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Reacting Masses',
        text: '<strong>Q: What mass of iron can be produced from 20.0 kg of iron(III) oxide (Fe₂O₃)?</strong><br/>Equation: Fe₂O₃ + 3CO → 2Fe + 3CO₂<br/><br/><strong>Step 1 (Moles of known):</strong><br/>Mass of Fe₂O₃ = 20,000 g<br/>n(Fe₂O₃) = 20,000 / 159.6 = 125.3 mol<br/><br/><strong>Step 2 & 3 (Mole ratio & Unknown moles):</strong><br/>Ratio Fe₂O₃ : Fe = 1 : 2<br/>n(Fe) = 125.3 × 2 = 250.6 mol<br/><br/><strong>Step 4 (Mass of unknown):</strong><br/>m(Fe) = 250.6 × 55.8 = 13,983 g = <strong>14.0 kg</strong> (to 3 s.f.)'
      },
      terms: []
    },
    {
      id: 'h-limiting',
      type: 'heading',
      data: { text: 'Limiting & Excess Reagents', level: 2 },
      terms: []
    },
    {
      id: 'callout-limiting-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definitions & Importance',
        text: '• <strong>Limiting Reagent:</strong> The reactant that is completely used up. It determines the maximum amount of product that can be formed.<br/>• <strong>Excess Reagent:</strong> The reactant that remains after the reaction is complete.<br/><br/><em>Crucial Rule:</em> If you are given the masses of <strong>two</strong> reactants, you must always determine which one is limiting before calculating the product yield.'
      },
      terms: ['Limiting reagent', 'Excess reagent']
    },
    {
      id: 'callout-limiting-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Finding the Limiting Reagent',
        text: '<strong>Q: 5.0 g of H₂ reacts with 40.0 g of O₂. What mass of water is produced?</strong><br/>Equation: 2H₂ + O₂ → 2H₂O<br/><br/><strong>Step 1: Calculate moles of both reactants</strong><br/>n(H₂) = 5.0 / 2.0 = 2.50 mol<br/>n(O₂) = 40.0 / 32.0 = 1.25 mol<br/><br/><strong>Step 2: Compare to required ratio from equation</strong><br/>Required ratio H₂ : O₂ = 2 : 1<br/>For 1.25 mol of O₂, we need 1.25 × 2 = 2.50 mol of H₂.<br/>We have exactly 2.50 mol of H₂.<br/><br/><strong>Conclusion:</strong> Neither reactant is in excess! They are in exact stoichiometric amounts. We can use either to find the product.<br/><br/><strong>Step 3: Product calculation (using O₂)</strong><br/>Ratio O₂ : H₂O = 1 : 2<br/>n(H₂O) = 1.25 × 2 = 2.50 mol<br/>m(H₂O) = 2.50 × 18.0 = <strong>45.0 g</strong>'
      },
      terms: []
    },
    {
      id: 'h-gas',
      type: 'heading',
      data: { text: 'Molar Volume of a Gas', level: 2 },
      terms: []
    },
    {
      id: 'callout-gas',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Molar Volume at r.t.p.',
        text: 'At <strong>room temperature and pressure (r.t.p.)</strong> (298 K and 101 kPa), one mole of any gas occupies approximately <strong>24,000 cm³</strong> (24 dm³).<br/><br/>This experimental value is used to convert between moles and volume of gas:<br/><br/>n = V(cm³) / 24,000 &nbsp;&nbsp; or &nbsp;&nbsp; n = V(dm³) / 24'
      },
      terms: ['Molar volume', 'r.t.p.']
    },
    {
      id: 'callout-gas-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Volume of gas',
        text: '<strong>Q: What volume of CO₂ (at r.t.p.) is produced when 10.0 g of CaCO₃ decomposes?</strong><br/><br/>Equation: CaCO₃ → CaO + CO₂<br/><br/>n(CaCO₃) = 10.0/100.1 = 0.0999 mol<br/>Ratio 1:1, so n(CO₂) = 0.0999 mol<br/>V(CO₂) = 0.0999 × 24,000 = <strong>2,400 cm³</strong> (2.40 dm³)'
      },
      terms: []
    },
    {
      id: 'h-mixed',
      type: 'heading',
      data: { text: 'Mixed Mass and Volume Stoichiometry', level: 2 },
      terms: []
    },
    {
      id: 'p-mixed',
      type: 'paragraph',
      data: { text: 'Many problems combine n = m/M (for solids and solutions) and n = V/24,000 (for gases). The approach is identical — convert everything to moles using the appropriate formula, apply the mole ratio from the equation, then convert back.' },
      terms: []
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Key formulae to remember',
        text: '• <strong>n = m/M</strong> (mass in grams, M in g mol⁻¹)<br/>• <strong>n = c × V</strong> (concentration in mol dm⁻³, V in dm³)<br/>• <strong>n = V(cm³)/24,000</strong> or <strong>n = V(dm³)/24</strong> (at r.t.p.)<br/>All roads lead from/to moles.'
      },
      terms: []
    },
    {
      id: 'h-avogadro-law',
      type: 'heading',
      data: { text: 'Avogadro\'s Law', level: 2 },
      terms: []
    },
    {
      id: 'callout-avogadro-law',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Avogadro\'s Law',
        text: '<strong>Equal volumes of gases, measured at the same temperature and pressure, contain the same number of molecules.</strong><br/><br/>This is why the molar volume is the same for <em>all</em> ideal gases at r.t.p. — not just one specific gas. It does not matter whether you have H₂, CO₂, N₂ or Cl₂: 1 mole of each occupies 24 dm³ at r.t.p.<br/><br/><em>Consequence for reactions:</em> In a gas-phase reaction, you can use the coefficients in the balanced equation directly as volume ratios, without converting to moles first. For example: H₂(g) + Cl₂(g) → 2HCl(g) means 1 dm³ H₂ reacts with 1 dm³ Cl₂ to produce 2 dm³ HCl (at constant T and P).'
      },
      terms: ['Avogadro\'s Law']
    },
    {
      id: 'callout-gas-eq-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Gas Volume from Balanced Equation',
        text: '<strong>Equation:</strong> Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)<br/><strong>Given:</strong> 1.00 g of Mg. HCl is in excess. Find the volume of H₂ at r.t.p.<br/><br/>Step 1: n(Mg) = 1.00 / 24.3 = 0.0412 mol<br/>Step 2: Mole ratio Mg : H₂ = 1 : 1, so n(H₂) = 0.0412 mol<br/>Step 3: V(H₂) = n × 24,000 = 0.0412 × 24,000 = <strong>988 cm³</strong> (0.988 dm³)<br/><br/><em>Note: When a question asks for volume of a gas, replace "× molar mass" in step 4 with "× molar volume (24 or 24,000)".</em>'
      },
      terms: []
    },
    {
      id: 'h-practice-gas',
      type: 'heading',
      data: { text: 'Practice Questions', level: 2 },
      terms: []
    },
    {
      id: 'callout-pq-gas1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q1: Volume of Gas at r.t.p.',
        text: '<strong>Question:</strong> Calculate the volume of hydrogen gas (in cm³ at r.t.p.) produced when 0.325 g of zinc reacts with excess hydrochloric acid.<br/>Equation: Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g)   (Aᵣ of Zn = 65.4)<br/><br/><strong>Step 1 — Find moles of Zn:</strong><br/>n(Zn) = 0.325 / 65.4 = 0.00497 mol<br/><br/><strong>Step 2 — Apply mole ratio (Zn : H₂ = 1 : 1):</strong><br/>n(H₂) = 0.00497 mol<br/><br/><strong>Step 3 — Calculate volume:</strong><br/>V(H₂) = 0.00497 × 24,000 = <strong>119 cm³</strong>'
      },
      terms: []
    },
    {
      id: 'callout-pq-gas2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q2: Mass from Gas Volume',
        text: '<strong>Question:</strong> 480 cm³ of oxygen gas is produced at r.t.p. from the decomposition of hydrogen peroxide:<br/>2H₂O₂(aq) → 2H₂O(l) + O₂(g)<br/>Calculate the mass of H₂O₂ that decomposed. (Mᵣ of H₂O₂ = 34.0)<br/><br/><strong>Step 1 — Find moles of O₂:</strong><br/>n(O₂) = 480 / 24,000 = 0.0200 mol<br/><br/><strong>Step 2 — Apply mole ratio (H₂O₂ : O₂ = 2 : 1):</strong><br/>n(H₂O₂) = 2 × 0.0200 = 0.0400 mol<br/><br/><strong>Step 3 — Calculate mass:</strong><br/>m(H₂O₂) = 0.0400 × 34.0 = <strong>1.36 g</strong>'
      },
      terms: []
    },
    {
      id: 'callout-pq-gas3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q3: Avogadro\'s Law — Gas Volume Ratios',
        text: '<strong>Question:</strong> 20 cm³ of propane (C₃H₈) is burned completely in excess oxygen. What volume of CO₂ is produced, and what volume of O₂ is consumed? (All volumes measured at the same T and P.)<br/>Equation: C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(g)<br/><br/><strong>Using Avogadro\'s Law — coefficients are volume ratios:</strong><br/>C₃H₈ : O₂ : CO₂ = 1 : 5 : 3<br/><br/>V(O₂) consumed = 5 × 20 = <strong>100 cm³</strong><br/>V(CO₂) produced = 3 × 20 = <strong>60 cm³</strong><br/><br/><em>Note: H₂O is gaseous at the same T&P — if it condenses to liquid, only count gas volumes.</em>'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c-box', blockId: 'p-box-method', prompt: 'List the 4 steps of the standard reacting mass calculation method.' },
      { id: 'c-lim', blockId: 'callout-limiting-def', prompt: 'Define "Limiting Reagent" and explain why it must be identified before calculating the theoretical yield.' },
      { id: 'c1', blockId: 'callout-gas', prompt: 'State the molar volume of a gas at r.t.p., in both cm³ and dm³.' },
      { id: 'c2', blockId: 'callout-gas', prompt: 'Write the formula for converting a gas volume (in cm³) at r.t.p. to an amount in moles.' },
      { id: 'c3', blockId: 'callout-pq-gas1', prompt: '0.325 g of Zn reacts with excess HCl: Zn + 2HCl → ZnCl₂ + H₂. Calculate the volume of H₂ in cm³ at r.t.p. (Aᵣ Zn = 65.4).' },
      { id: 'c4', blockId: 'callout-avogadro-law', prompt: 'State Avogadro\'s Law. How can you use it to find volumes of gases in a reaction without calculating moles first?' },
      { id: 'c5', blockId: 'callout-pq-gas3', prompt: '20 cm³ of C₃H₈ burns in excess O₂: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. What volumes of O₂ are consumed and CO₂ produced?' },
      { id: 'c6', blockId: 'callout-pq-gas2', prompt: '480 cm³ of O₂ is produced from 2H₂O₂ → 2H₂O + O₂. What mass of H₂O₂ decomposed? (Mᵣ = 34.0)' }
    ],
    summaryText: 'Reacting mass 4-step method: (1) n=m/M of known, (2) identify ratio, (3) apply ratio to unknown, (4) m=n×M. Limiting reagent determines max product formed. One mole of gas = 24,000 cm³ = 24 dm³ at r.t.p. n = V(cm³)/24,000. Avogadro\'s Law: equal volumes of gases (same T and P) contain equal numbers of molecules → coefficients in a gas equation equal volume ratios.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_1_6;