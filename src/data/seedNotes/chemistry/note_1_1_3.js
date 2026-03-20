/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 3
 * "Relative mass calculations"
 * Source: Pearson Edexcel IAL Chemistry — Section 1C.3 (Reacting Masses)
 */
export const note_chemistry_1_1_3 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Use chemical equations to calculate reacting masses using moles. Determine a formula or confirm an equation from experimental reacting masses. Understand ppm as a measure of very small concentrations.' },
      terms: []
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Reacting Mass Calculations — The Method', level: 2 },
      terms: []
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Calculate the <strong>molar masses (M)</strong> of the substance you are given AND the substance you need to find.',
          'Calculate the <strong>amount in moles (n)</strong> of the given substance using n = m/M.',
          'Use the <strong>mole ratio</strong> from the balanced equation to find n of the desired substance.',
          'Calculate the <strong>mass</strong> of the desired substance using m = n × M.'
        ]
      },
      terms: []
    },
    {
      id: 'svg-4step-flowchart',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 435" width="300" height="435"><rect x="25" y="8" width="250" height="70" rx="10" fill="#2d1b69" stroke="#7c3aed" stroke-width="2"/><text x="150" y="31" text-anchor="middle" font-size="13" font-weight="bold" fill="#4c1d95" font-family="Arial,sans-serif">&#x2460; Write Balanced Equation</text><text x="150" y="51" text-anchor="middle" font-size="11" fill="#5b21b6" font-family="Arial,sans-serif">Include state symbols where asked.</text><text x="150" y="67" text-anchor="middle" font-size="11" fill="#5b21b6" font-family="Arial,sans-serif">Coefficients give the mole ratio.</text><line x1="150" y1="78" x2="150" y2="100" stroke="#6d28d9" stroke-width="2"/><polygon points="150,104 143,96 157,96" fill="#6d28d9"/><rect x="25" y="104" width="250" height="70" rx="10" fill="#1e3a8a" stroke="#2563eb" stroke-width="2"/><text x="150" y="127" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e3a8a" font-family="Arial,sans-serif">&#x2461; Moles of KNOWN substance</text><text x="150" y="147" text-anchor="middle" font-size="14" font-style="italic" fill="#1d4ed8" font-family="Arial,sans-serif">n = m &#xF7; M</text><text x="150" y="164" text-anchor="middle" font-size="11" fill="#3b82f6" font-family="Arial,sans-serif">The substance the question gives data about.</text><line x1="150" y1="174" x2="150" y2="196" stroke="#2563eb" stroke-width="2"/><polygon points="150,200 143,192 157,192" fill="#2563eb"/><rect x="25" y="200" width="250" height="70" rx="10" fill="#44370a" stroke="#ca8a04" stroke-width="2"/><text x="150" y="223" text-anchor="middle" font-size="13" font-weight="bold" fill="#713f12" font-family="Arial,sans-serif">&#x2462; Apply Mole Ratio</text><text x="150" y="243" text-anchor="middle" font-size="11" fill="#92400e" font-family="Arial,sans-serif">Coefficients in equation = mole ratio.</text><text x="150" y="259" text-anchor="middle" font-size="11" fill="#92400e" font-family="Arial,sans-serif">Multiply or divide n accordingly.</text><line x1="150" y1="270" x2="150" y2="292" stroke="#ca8a04" stroke-width="2"/><polygon points="150,296 143,288 157,288" fill="#ca8a04"/><rect x="25" y="296" width="250" height="70" rx="10" fill="#0a2e1a" stroke="#16a34a" stroke-width="2"/><text x="150" y="319" text-anchor="middle" font-size="13" font-weight="bold" fill="#14532d" font-family="Arial,sans-serif">&#x2463; Mass (or Volume) of UNKNOWN</text><text x="150" y="339" text-anchor="middle" font-size="14" font-style="italic" fill="#15803d" font-family="Arial,sans-serif">m = n &#xD7; M</text><text x="150" y="355" text-anchor="middle" font-size="11" fill="#22c55e" font-family="Arial,sans-serif">For a gas at r.t.p.: V(cm&#xB3;) = n &#xD7; 24 000</text><rect x="25" y="380" width="250" height="47" rx="8" fill="#532407" stroke="#ea580c" stroke-width="1.5"/><text x="150" y="399" text-anchor="middle" font-size="11" font-weight="bold" fill="#9a3412" font-family="Arial,sans-serif">&#x26A0; If given TWO reactant quantities:</text><text x="150" y="417" text-anchor="middle" font-size="11" fill="#9a3412" font-family="Arial,sans-serif">find the LIMITING REAGENT first!</text></svg>',
        caption: '4-step method for all reacting mass calculations'
      }
    },
    {
      id: 'callout-caco3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1: CaCO₃ Thermal Decomposition',
        text: '<strong>Q: Calculate the mass of CaO formed when 25.0 g of CaCO₃ is thermally decomposed.</strong><br/><br/><strong>Step 1 — Balanced equation:</strong><br/>CaCO₃(s) → CaO(s) + CO₂(g)<br/><br/><strong>Step 2 — Moles of known (CaCO₃):</strong><br/>M(CaCO₃) = 40.1 + 12.0 + (3 × 16.0) = 100.1 g mol⁻¹<br/>n(CaCO₃) = 25.0 / 100.1 = <strong>0.250 mol</strong><br/><br/><strong>Step 3 — Mole ratio (CaCO₃ : CaO):</strong><br/>Coefficients: 1 : 1 → n(CaO) = 0.250 mol<br/><br/><strong>Step 4 — Mass of CaO (unknown):</strong><br/>M(CaO) = 40.1 + 16.0 = 56.1 g mol⁻¹<br/>m(CaO) = 0.250 × 56.1 = <strong>14.0 g</strong>'
      },
      terms: []
    },
    {
      id: 'callout-methane',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2: Methane Combustion',
        text: '<strong>Q: What mass of water is produced when 32.0 g of CH₄ undergoes complete combustion?</strong><br/><br/><strong>Step 1 — Balanced equation:</strong><br/>CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)<br/><br/><strong>Step 2 — Moles of known (CH₄):</strong><br/>M(CH₄) = 12.0 + (4 × 1.0) = 16.0 g mol⁻¹<br/>n(CH₄) = 32.0 / 16.0 = <strong>2.00 mol</strong><br/><br/><strong>Step 3 — Mole ratio (CH₄ : H₂O):</strong><br/>Coefficients: 1 : 2 → n(H₂O) = 2.00 × 2 = <strong>4.00 mol</strong><br/><br/><strong>Step 4 — Mass of H₂O (unknown):</strong><br/>M(H₂O) = (2 × 1.0) + 16.0 = 18.0 g mol⁻¹<br/>m(H₂O) = 4.00 × 18.0 = <strong>72.0 g</strong><br/><br/><em>Note: For combustion reactions the question will state if it is complete — unless told otherwise, always assume complete combustion.</em>'
      },
      terms: []
    },
    {
      id: 'callout-w1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1: SO₃ + H₂O → H₂SO₄',
        text: '<strong>Q: What mass of SO₃ is needed to form 75.0 g of H₂SO₄?</strong><br/><br/>Step 1: M(SO₃) = 80.1 g mol⁻¹; M(H₂SO₄) = 98.1 g mol⁻¹<br/>Step 2: n(H₂SO₄) = 75.0/98.1 = 0.765 mol<br/>Step 3: ratio is 1:1, so n(SO₃) = 0.765 mol<br/>Step 4: m(SO₃) = 0.765 × 80.1 = <strong>61.3 g</strong>'
      },
      terms: []
    },
    {
      id: 'callout-w2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2: 2NH₃ + H₂SO₄ → (NH₄)₂SO₄',
        text: '<strong>Q: What mass of NH₃ is needed to form 100 g of (NH₄)₂SO₄?</strong><br/><br/>Step 1: M(NH₃) = 17.0; M((NH₄)₂SO₄) = 132.1 g mol⁻¹<br/>Step 2: n((NH₄)₂SO₄) = 100/132.1 = 0.757 mol<br/>Step 3: ratio is 2:1, so n(NH₃) = 2 × 0.757 = 1.51 mol<br/>Step 4: m(NH₃) = 1.51 × 17.0 = <strong>25.7 g</strong>'
      },
      terms: []
    },
    {
      id: 'h-formula',
      type: 'heading',
      data: { text: 'Deducing Formulae and Equations from Data', level: 2 },
      terms: []
    },
    {
      id: 'list-formula',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'If experimental masses of reactants and products are given, convert each to moles using n = m/M.',
          'Divide all mole values by the <strong>smallest</strong> to get the simplest whole-number ratio.',
          'This mole ratio gives the <strong>stoichiometric coefficients</strong> and so allows the equation (and formula) to be deduced.',
          'This technique is the basis of the <em>empirical formula</em> method and of confirming balanced equations from lab data.'
        ]
      }
    },
    {
      id: 'callout-w3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3: Which copper oxide?',
        text: '<strong>Data:</strong> Copper oxide reduced by H₂ to give: Cu = 17.6 g, H₂O = 2.56 g<br/><br/>Step 1: M(Cu) = 63.5; M(H₂O) = 18.0<br/>Step 2: n(Cu) = 17.6/63.5 = 0.277 mol; n(H₂O) = 2.56/18.0 = 0.142 mol<br/>Step 3: ratio Cu : H₂O = 0.277 : 0.142 ≈ <strong>2 : 1</strong><br/>Step 4: Equation must be <strong>Cu₂O + H₂ → 2Cu + H₂O</strong><br/>(not CuO + H₂ → Cu + H₂O)'
      },
      terms: []
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Textbook Learning Tip',
        text: 'One important part of these calculations is using the correct ratio from the equation. Practise deciding which substances should be used for the ratio and which way round to apply it.'
      },
      terms: []
    },
    {
      id: 'h-limiting',
      type: 'heading',
      data: { text: 'Limiting Reagent and Excess Reagent', level: 2 },
      terms: []
    },
    {
      id: 'callout-limiting-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definitions',
        text: '<strong>Limiting reagent</strong>: the reactant that is <em>completely used up</em> first — it determines the <strong>maximum amount of product</strong> that can form.<br/><br/><strong>Excess reagent</strong>: a reactant present in a greater amount than is needed; some remains unreacted after the reaction is complete.<br/><br/><strong>How to identify the limiting reagent:</strong><br/>• Calculate n (moles) of each reactant from the given data using n = m/M.<br/>• Use the mole ratio from the balanced equation to find how much of one reactant is needed to react with all of the other.<br/>• The reactant that would run out first (provides the <em>smaller</em> ratio quotient) is the <strong>limiting reagent</strong>.<br/>• Base all product calculations on the amount of the limiting reagent only.'
      },
      terms: ['Limiting reagent', 'Excess reagent']
    },
    {
      id: 'callout-limiting-w1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Cu + HNO₃ (Which is in excess?)',
        text: '<strong>Equation:</strong> Cu(s) + 4HNO₃(aq) → Cu(NO₃)₂(aq) + 2H₂O(l) + 2NO₂(g)<br/><br/><strong>Given:</strong> 3.2 g Cu and 0.4 mol HNO₃<br/><br/><strong>Step 1:</strong> n(Cu) = 3.2 / 63.5 = 0.050 mol<br/><strong>Step 2:</strong> Mole ratio Cu : HNO₃ = 1 : 4<br/><strong>Step 3:</strong> To react all 0.050 mol Cu, need: 4 × 0.050 = <strong>0.20 mol HNO₃</strong><br/><br/>We actually <em>have</em> 0.40 mol HNO₃, which is more than we need.<br/>∴ <strong>Cu is the limiting reagent</strong>; HNO₃ is in excess.'
      },
      terms: []
    },
    {
      id: 'callout-limiting-w2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: N₂ + H₂ → NH₃ (Haber process — non-1:1 ratio)',
        text: '<strong>Equation:</strong> N₂(g) + 3H₂(g) ⇌ 2NH₃(g)<br/><br/><strong>Given:</strong> 28.0 g N₂ and 8.0 g H₂<br/><br/><strong>Step 1 — Find moles of each reactant:</strong><br/>n(N₂) = 28.0 / 28.0 = 1.00 mol<br/>n(H₂) = 8.0 / 2.0 = 4.00 mol<br/><br/><strong>Step 2 — Mole ratio N₂ : H₂ = 1 : 3</strong><br/>To react all 1.00 mol N₂, need: 3 × 1.00 = 3.00 mol H₂<br/>Available = 4.00 mol H₂ → more than needed → H₂ is in <em>excess</em><br/>To react all 4.00 mol H₂, need: 4.00 ÷ 3 = 1.33 mol N₂<br/>Available = 1.00 mol N₂ → <strong>not enough → N₂ is the limiting reagent</strong><br/><br/><strong>Step 3 — Calculate mass of NH₃ formed:</strong><br/>Mole ratio N₂ : NH₃ = 1 : 2 → n(NH₃) = 2 × 1.00 = 2.00 mol<br/>M(NH₃) = 14.0 + (3 × 1.0) = 17.0 g mol⁻¹<br/>m(NH₃) = 2.00 × 17.0 = <strong>34.0 g</strong>'
      },
      terms: []
    },
    {
      id: 'h-ppm',
      type: 'heading',
      data: { text: 'Parts Per Million (ppm)', level: 2 }
    },
    {
      id: 'list-ppm',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>ppm</strong> is used to express very low concentrations, such as pollutants in water or trace gases in the atmosphere.',
          '<strong>By mass (solution):</strong> ppm = mass of solute (mg) per 1 kg of solution — equivalently, ppm = (mass solute ÷ mass solution) × 10⁶.',
          '<strong>By volume (gas):</strong> ppm = volume of gas ÷ total volume × 10⁶ — e.g. CO₂ at ~420 ppm in the atmosphere.',
          '1 ppm by mass ≈ 1 mg kg⁻¹ ≈ 1 µg g⁻¹.',
          'Can also be expressed as: ppm = (n of solute ÷ n total) × 10⁶ for molar fraction (gas mixtures).',
          'Concentrations below ~1 ppm are sometimes reported in <strong>ppb</strong> (parts per billion = × 10⁹).'
        ]
      }
    },
    {
      id: 'eq-ppm',
      type: 'equation',
      data: {
        html: 'ppm = <span class="nb-frac"><span class="nb-num">mass of solute</span><span class="nb-den">mass of solution</span></span> × 10⁶',
        caption: 'ppm by mass — masses in the same unit (e.g. both in g, or both in mg)'
      }
    },
    {
      id: 'callout-ppm-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Examples: ppm',
        text: '<strong>Q1: A river sample contains 3.5 mg of nitrate (NO₃⁻) in 1 kg of water. Express this as ppm.</strong><br/>ppm = (3.5 × 10⁻³ g) ÷ (1000 g) × 10⁶ = <strong>3.5 ppm</strong><br/><br/><strong>Q2: An atmospheric sample is 410 ppm CO₂ by volume. What volume of CO₂ is in 1.00 dm³ of air?</strong><br/>V(CO₂) = (410 / 10⁶) × 1.00 dm³ = <strong>4.10 × 10⁻⁴ dm³</strong><br/><br/><strong>Q3: Drinking water has a limit of 50 ppm nitrate. Convert to mg dm⁻³.</strong><br/>1 ppm = 1 mg per 1 kg water ≈ 1 mg per 1 dm³ (since ρ water ≈ 1 kg dm⁻³)<br/>50 ppm ≈ <strong>50 mg dm⁻³</strong>'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'list-method', prompt: 'List the four steps for a reacting mass calculation.' },
      { id: 'c2', blockId: 'callout-w2', prompt: 'From the equation 2NH₃ + H₂SO₄ → (NH₄)₂SO₄, what is the mole ratio of NH₃ to (NH₄)₂SO₄?' },
      { id: 'c3', blockId: 'callout-w3', prompt: 'Explain how you would distinguish CuO from Cu₂O using reacting mass data.' },
      { id: 'c4', blockId: 'callout-limiting-def', prompt: 'Define limiting reagent and excess reagent. How do you identify which is limiting when two reactant quantities are given?' },
      { id: 'c5', blockId: 'callout-limiting-w1', prompt: '3.2 g of Cu reacts with 0.40 mol HNO₃. Equation: Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂. Which is the limiting reagent? Show your working.' },
      { id: 'c6', blockId: 'callout-caco3', prompt: 'Calculate the mass of CaO formed from 25.0 g of CaCO₃. (Mᵣ: CaCO₃ = 100.1, CaO = 56.1)' },
      { id: 'c7', blockId: 'callout-limiting-w2', prompt: '28.0 g N₂ and 8.0 g H₂ react: N₂ + 3H₂ ⇌ 2NH₃. Which is the limiting reagent? Calculate the mass of NH₃ produced.' },
      { id: 'c8', blockId: 'callout-ppm-worked', prompt: 'A water sample contains 3.5 mg NO₃⁻ per kg of water. Express this in ppm.' }
    ],
    summaryText: '4-step method: (1) balanced equation, (2) n = m/M of known, (3) apply mole ratio from coefficients, (4) m = n×M of unknown. Always identify limiting reagent when two reactant quantities given — base all product calcs on it. Can deduce equations from data by finding simplest mole ratio. ppm = (mass solute / mass solution) × 10⁶ — used for trace concentrations (pollutants, atmospheric gases). 1 ppm ≈ 1 mg kg⁻¹.',
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_1_3;