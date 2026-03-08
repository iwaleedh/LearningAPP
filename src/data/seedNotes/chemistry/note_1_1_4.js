/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 4
 * "Solution concentration calculations"
 * Source: Pearson Edexcel IAL Chemistry — Sections 1B.2–1B.4, concentration context
 */
export const note_chemistry_1_1_4 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Calculate the concentration of a solution in mol dm⁻³ and g dm⁻³. Perform calculations involving volumes and concentrations, including titration calculations.' },
      terms: []
    },
    {
      id: 'h-conc',
      type: 'heading',
      data: { text: 'Concentration', level: 2 },
      terms: []
    },
    {
      id: 'callout-conc',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Concentration Formula',
        text: 'Concentration (mol dm⁻³) = amount (mol) ÷ volume (dm³)<br/><br/>c = n/V &nbsp;&nbsp; or equivalently &nbsp;&nbsp; n = c × V<br/><br/>Note: 1 dm³ = 1 litre = 1000 cm³. To convert cm³ to dm³, <strong>divide by 1000</strong>.'
      },
      terms: ['Concentration']
    },
    {
      id: 'svg-ncv-triangle',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 230" width="280" height="230"><polygon points="140,15 10,200 270,200" fill="#eff6ff" stroke="#3b82f6" stroke-width="2.5"/><line x1="75" y1="108" x2="205" y2="108" stroke="#3b82f6" stroke-width="2"/><text x="140" y="72" text-anchor="middle" font-size="38" font-weight="bold" fill="#1e40af" font-family="Arial,sans-serif">n</text><text x="140" y="100" text-anchor="middle" font-size="12" fill="#3b82f6" font-family="Arial,sans-serif">amount (mol)</text><text x="86" y="158" text-anchor="middle" font-size="34" font-weight="bold" fill="#065f46" font-family="Arial,sans-serif">c</text><text x="86" y="180" text-anchor="middle" font-size="11" fill="#059669" font-family="Arial,sans-serif">conc. (mol dm&#x207B;&#xB3;)</text><text x="194" y="158" text-anchor="middle" font-size="34" font-weight="bold" fill="#7c3aed" font-family="Arial,sans-serif">V</text><text x="194" y="180" text-anchor="middle" font-size="11" fill="#7c3aed" font-family="Arial,sans-serif">volume (dm&#xB3;)</text><text x="140" y="218" text-anchor="middle" font-size="11" fill="#374151" font-family="Arial,sans-serif">n = c&#xD7;V | c = n/V | V = n/c</text></svg>',
        caption: 'The NCV Triangle — cover the quantity you want to find. Volume must be in dm³ (divide cm³ by 1000). All calculations pass through n (moles).'
      },
      terms: []
    },
    {
      id: 'callout-conc-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1: Calculate n from concentration and volume',
        text: '<strong>Q: How many moles of NaOH are in 25.0 cm³ of 0.100 mol dm⁻³ NaOH?</strong><br/><br/>V = 25.0/1000 = 0.0250 dm³<br/>n = c × V = 0.100 × 0.0250 = <strong>2.50 × 10⁻³ mol</strong>'
      },
      terms: []
    },
    {
      id: 'callout-conc-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2: Calculate concentration from titration',
        text: '<strong>Q: 25.0 cm³ of HCl is neutralised by 23.5 cm³ of 0.100 mol dm⁻³ NaOH. Find [HCl].</strong><br/><br/>Equation: HCl + NaOH → NaCl + H₂O (1:1 ratio)<br/>n(NaOH) = 0.100 × (23.5/1000) = 2.35 × 10⁻³ mol<br/>n(HCl) = 2.35 × 10⁻³ mol (1:1 ratio)<br/>c(HCl) = n/V = 2.35 × 10⁻³ ÷ (25.0/1000) = <strong>0.0940 mol dm⁻³</strong>'
      },
      terms: []
    },
    {
      id: 'callout-mr-titration',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3: Finding Molar Mass (Mr) from Titration',
        text: '<strong>Q: 2.50 g of an unknown monoprotic acid (HA) is dissolved to make 250 cm³ of solution. 25.0 cm³ of this requires 23.5 cm³ of 0.100 mol dm⁻³ NaOH for neutralisation. Find the Mr of HA.</strong><br/><br/>Equation: HA + NaOH → NaA + H₂O<br/><br/>Step 1: n(NaOH) = 0.100 × (23.5/1000) = 2.35 × 10⁻³ mol<br/>Step 2 (Mole ratio): n(HA) in 25.0 cm³ = 2.35 × 10⁻³ mol<br/>Step 3 (Scale up to full flask): n(HA) in 250 cm³ = 2.35 × 10⁻³ × 10 = 0.0235 mol<br/>Step 4 (Find Mr): Mr = m / n = 2.50 / 0.0235 = <strong>106.4 g mol⁻¹</strong>'
      },
      terms: []
    },
    {
      id: 'callout-make-solution',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4: Finding Volume Needed to Prepare a Solution',
        text: '<strong>Q: A student wants to prepare a 0.45 mol dm⁻³ NaCl solution using 50.0 g of NaCl. What total volume of solution should she make up?</strong><br/>(Mᵣ NaCl: Na = 23.0, Cl = 35.5 → Mr = 58.5 g mol⁻¹)<br/><br/><strong>Step 1 — Find moles of NaCl (n = m/M):</strong><br/>n = 50.0 / 58.5 = 0.855 mol<br/><br/><strong>Step 2 — Find volume (NCV triangle: V = n/c):</strong><br/>V = 0.855 / 0.45 = <strong>1.90 dm³</strong><br/><br/><em>⚠ The student should dissolve the NaCl in some water, then make the total solution volume up to 1.90 dm³ — she should NOT add 1.90 dm³ of water, as that would overshoot the target concentration.</em>'
      },
      terms: []
    },
    {
      id: 'h-dilution',
      type: 'heading',
      data: { text: 'Dilution Calculations', level: 2 },
      terms: []
    },
    {
      id: 'callout-dilution',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Dilution Principle: c₁V₁ = c₂V₂',
        text: 'When you dilute a solution by adding water, the <strong>number of moles of solute stays exactly the same</strong> — only the volume changes.<br/><br/><strong>c₁ × V₁ = c₂ × V₂</strong><br/><br/>(Where c₁ and V₁ are the initial concentration and volume, and c₂ and V₂ are the final concentration and volume. Volumes can be in cm³ or dm³, as long as they are the <em>same unit</em> on both sides).'
      },
      terms: ['Dilution']
    },
    {
      id: 'callout-dilution-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Dilution',
        text: '<strong>Q: What volume of water must be added to 100 cm³ of 3.0 mol dm⁻³ NaOH to dilute it to 0.50 mol dm⁻³?</strong><br/><br/>c₁V₁ = c₂V₂<br/>3.0 × 100 = 0.50 × V₂<br/>300 = 0.50 × V₂<br/>V₂ = 600 cm³ (Final total volume)<br/><br/>Volume of water to add = Final volume − Initial volume<br/>Water to add = 600 − 100 = <strong>500 cm³</strong>'
      },
      terms: []
    },
    {
      id: 'h-stoich-concentration',
      type: 'heading',
      data: { text: 'Stoichiometry with Concentrations: The 4-Step Method', level: 2 },
      terms: []
    },
    {
      id: 'callout-stoich-conc-method',
      type: 'callout',
      data: {
        style: 'key',
        title: '4-Step Method When One Substance is a Solution',
        text: 'The 4-step box method still applies, but Step 2 and Step 4 may use the NCV triangle instead of the mass triangle:<br/><br/><strong>Step 1:</strong> Write the <strong>balanced equation</strong>.<br/><strong>Step 2:</strong> Find moles of the <strong>KNOWN</strong> substance:<br/>&nbsp;&nbsp;• Solid/pure liquid → n = m / M<br/>&nbsp;&nbsp;• Solution → n = c × V (convert V to dm³ first!)<br/><strong>Step 3:</strong> Apply the <strong>mole ratio</strong> from the equation to find n of the UNKNOWN.<br/><strong>Step 4:</strong> Find the answer for the UNKNOWN:<br/>&nbsp;&nbsp;• Volume of solution → V = n / c<br/>&nbsp;&nbsp;• Mass of solid → m = n × M<br/>&nbsp;&nbsp;• Volume of gas → V = n × 24 dm³ (at r.t.p.)'
      },
      terms: []
    },
    {
      id: 'callout-stoich-conc-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Mass + Concentration Stoichiometry',
        text: '<strong>Equation: MgCO₃(s) + 2HCl(aq) → MgCl₂(aq) + H₂O(l) + CO₂(g)</strong><br/>47.8 g of MgCO₃ is added to excess 2.50 mol dm⁻³ HCl. Calculate the minimum volume of HCl needed.<br/>(Mᵣ: Mg=24.3, C=12.0, O=16.0 → Mᵣ MgCO₃ = 84.3)<br/><br/><strong>Step 1 — Balanced equation (shown above). Ratio MgCO₃ : HCl = 1 : 2.</strong><br/><br/><strong>Step 2 — Moles of known (MgCO₃, a solid):</strong><br/>n(MgCO₃) = 47.8 / 84.3 = 0.567 mol<br/><br/><strong>Step 3 — Mole ratio → moles of HCl:</strong><br/>n(HCl) = 0.567 × 2 = 1.134 mol<br/><br/><strong>Step 4 — Volume of HCl solution (V = n/c):</strong><br/>V = 1.134 / 2.50 = <strong>0.454 dm³</strong> (454 cm³)<br/><br/><em>Only Step 4 differs from a standard reacting mass calculation — use V = n/c instead of m = n×M.</em>'
      },
      terms: []
    },
    {
      id: 'h-back-titration',
      type: 'heading',
      data: { text: 'Back Titrations', level: 2 },
      terms: []
    },
    {
      id: 'callout-back-titration',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What is a Back Titration?',
        text: 'A back titration is used when a direct titration is impossible (e.g. the solid is insoluble, the reaction is too slow, or the substance is volatile).<br/><br/><strong>Method:</strong><br/>1. Add an accurately known <strong>EXCESS</strong> of a reagent to the solid.<br/>2. Allow the solid to react completely.<br/>3. Titrate the <strong>remaining unreacted excess</strong> against a standard solution.<br/>4. Calculate: (Moles of reagent initially added) − (Moles of unreacted excess) = Moles of reagent that actually reacted with the solid.'
      },
      terms: ['Back titration']
    },
    {
      id: 'callout-back-titration-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Back Titration for Purity',
        text: '<strong>Q: 2.00 g of impure CaCO₃ is reacted with 50.0 cm³ of 1.00 mol dm⁻³ HCl (an excess). The unreacted HCl required 25.0 cm³ of 0.500 mol dm⁻³ NaOH for neutralisation. Find the % purity of the CaCO₃.</strong><br/><br/>Step 1 (Total HCl added): n(HCl total) = 1.00 × 0.0500 = 0.0500 mol<br/>Step 2 (Excess HCl): n(NaOH) = 0.500 × 0.0250 = 0.0125 mol. Ratio 1:1, so unreacted HCl = 0.0125 mol.<br/>Step 3 (Reacted HCl): 0.0500 − 0.0125 = 0.0375 mol reacted with CaCO₃.<br/>Step 4 (Moles CaCO₃): CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂<br/>Ratio is 1:2, so n(CaCO₃) = 0.0375 / 2 = 0.01875 mol<br/>Step 5 (Mass & Purity): Pure mass = 0.01875 × 100.1 = 1.877 g<br/>% Purity = (1.877 / 2.00) × 100 = <strong>93.9%</strong>'
      },
      terms: []
    },
    {
      id: 'h-ppm',
      type: 'heading',
      data: { text: 'Parts Per Million (ppm)', level: 2 },
      terms: []
    },
    {
      id: 'callout-ppm',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Calculating ppm',
        text: 'For very dilute concentrations, we use parts per million (ppm). It is the mass of the solute divided by the total mass of the solution, multiplied by 1,000,000.<br/><br/><strong>ppm = (mass of solute / mass of solution) × 10⁶</strong><br/><br/><em>Example:</em> 2 g of lead in 2,000,000 g of engine fuel = (2 / 2,000,000) × 10⁶ = <strong>1 ppm</strong>.<br/><br/>⚠ <strong>Units must match!</strong> Both solute and solution must be in the <em>same unit</em> (both grams, or both kilograms, etc.) before you substitute into the formula.<br/><em>Example: 23 mg of NaCl in 900 g of water → convert 23 mg to grams first: 23 ÷ 1000 = 0.023 g → ppm = (0.023 / 900) × 10⁶ = <strong>25.6 ppm</strong>. If you forget to convert, you get the wrong answer by a factor of 1000.</em>'
      },
      terms: ['Parts per million', 'ppm']
    },
    {
      id: 'h-gdm3',
      type: 'heading',
      data: { text: 'Concentration in g dm⁻³', level: 2 },
      terms: []
    },
    {
      id: 'p-gdm3',
      type: 'paragraph',
      data: { text: 'To convert between mol dm⁻³ and g dm⁻³, multiply by the molar mass (M):<br/><br/>Concentration in g dm⁻³ = Concentration in mol dm⁻³ × M' },
      terms: []
    },
    {
      id: 'callout-prec-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Precipitation Reactions and Concentration',
        text: 'Precipitation experiments can be used to deduce the mole ratio of reactants. By measuring volumes of two solutions of known concentration at which precipitation just stops, you can determine the stoichiometric ratio.<br/><br/>Example: Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq)<br/>If 2.5 cm³ of 1.0 mol dm⁻³ Pb²⁺ reacts exactly with 5.0 cm³ of 1.0 mol dm⁻³ KI, the ratio is 1:2.'
      },
      terms: []
    },
    {
      id: 'h-ppm-gas',
      type: 'heading',
      data: { text: 'Parts Per Million (ppm) for Gases', level: 2 },
      terms: []
    },
    {
      id: 'callout-ppm-gas',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Gas ppm: Volume / Volume',
        text: 'For gases (e.g. pollutants in the atmosphere), ppm is calculated using <strong>volumes</strong> instead of masses:<br/><br/>ppm = (Volume of gas / Volume of air sample) × 10⁶<br/><br/>The units of both volumes must match (both cm³, both dm³, etc.). This formula is the same structure as mass ppm — only the quantity changes from mass to volume.<br/><br/><em>Common use: measuring pollutants like NO₂, SO₂, O₃ in the atmosphere.</em>'
      },
      terms: []
    },
    {
      id: 'callout-ppm-gas-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Gas ppm Worked Examples',
        text: '<strong>Q1: 1.5 dm³ of NO₂ in a 10,000 dm³ air sample. Find ppm.</strong><br/>ppm = (1.5 / 10,000) × 10⁶ = <strong>150 ppm</strong><br/><br/><strong>Q2: Ozone at 87 ppm in 5,000 dm³ of air. Find volume of O₃.</strong><br/>Rearrange: V(O₃) = (ppm × V_air) / 10⁶<br/>V(O₃) = (87 × 5,000) / 10⁶ = <strong>0.435 dm³</strong><br/><br/><em>Tip: If volumes are in different units (one in cm³, one in dm³), convert both to the same unit before substituting.</em>'
      },
      terms: []
    },
    {
      id: 'h-practice-ppm',
      type: 'heading',
      data: { text: 'Practice Questions', level: 2 },
      terms: []
    },
    {
      id: 'callout-pq-ppm1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q1: Mass ppm (Solution)',
        text: '<strong>Question:</strong> A sample of seawater contains 1.3 g of magnesium ions dissolved in 1.00 kg of seawater. Calculate the concentration of magnesium ions in ppm.<br/><br/><strong>Step 1 — Convert mass of solution to grams:</strong><br/>1.00 kg = 1000 g<br/><br/><strong>Step 2 — Apply ppm formula:</strong><br/>ppm = (m_solute / m_solution) × 10⁶<br/>ppm = (1.3 / 1000) × 10⁶ = <strong>1300 ppm</strong>'
      },
      terms: []
    },
    {
      id: 'callout-pq-ppm2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q2: Gas ppm (Forward)',
        text: '<strong>Question:</strong> A 500 dm³ sample of urban air contains 0.035 dm³ of sulfur dioxide (SO₂). Calculate the concentration of SO₂ in ppm.<br/><br/><strong>Step 1 — Check units match:</strong> Both values are in dm³ ✓<br/><br/><strong>Step 2 — Apply gas ppm formula:</strong><br/>ppm = (V_gas / V_air) × 10⁶<br/>ppm = (0.035 / 500) × 10⁶ = <strong>70 ppm</strong>'
      },
      terms: []
    },
    {
      id: 'callout-pq-ppm3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q3: Gas ppm (Reverse — Find Volume)',
        text: '<strong>Question:</strong> The concentration of carbon monoxide (CO) in a room is 35 ppm. The room has a volume of 80 m³. Calculate the volume of CO in the room (in m³).<br/><br/><strong>Step 1 — Rearrange the formula:</strong><br/>V(CO) = (ppm × V_total) / 10⁶<br/><br/><strong>Step 2 — Substitute:</strong><br/>V(CO) = (35 × 80) / 10⁶ = 2800 / 10⁶ = <strong>2.8 × 10⁻³ m³</strong><br/><br/><em>Note: Units of both volumes must be the same — here both are m³, so no conversion needed.</em>'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-conc', prompt: 'State the formula for concentration and give the units of each quantity.' },
      { id: 'c1-dil', blockId: 'callout-dilution', prompt: 'State the formula used for dilution calculations and explain the core principle behind it.' },
      { id: 'c1-back', blockId: 'callout-back-titration', prompt: 'What is a back titration and give three reasons why you might need to use one instead of a direct titration.' },
      { id: 'c1-ppm', blockId: 'callout-ppm', prompt: 'State the formula for calculating parts per million (ppm) from mass data, and explain when it is used.' },
      { id: 'c2', blockId: 'callout-conc', prompt: 'How do you convert a volume from cm³ to dm³?' },
      { id: 'c3', blockId: 'callout-conc-worked2', prompt: 'In a titration, 25.0 cm³ HCl reacted with 20.0 cm³ of 0.200 mol dm⁻³ NaOH (1:1 ratio). Calculate [HCl] in mol dm⁻³.' },
      { id: 'c4', blockId: 'callout-pq-ppm1', prompt: '1.3 g of Mg²⁺ is dissolved in 1.00 kg of seawater. Calculate the concentration in ppm.' },
      { id: 'c5', blockId: 'callout-pq-ppm2', prompt: 'A 500 dm³ air sample contains 0.035 dm³ of SO₂. What is the SO₂ concentration in ppm?' },
      { id: 'c6', blockId: 'callout-pq-ppm3', prompt: 'CO in a room is at 35 ppm. The room is 80 m³. Calculate the volume of CO.' },
      { id: 'c7', blockId: 'callout-make-solution', prompt: 'A student has 50.0 g of NaCl and wants a 0.45 mol dm⁻³ solution. What total volume should she make up? (Mᵣ NaCl = 58.5)' },
      { id: 'c8', blockId: 'callout-stoich-conc-worked', prompt: 'MgCO₃ + 2HCl → products. 47.8 g of MgCO₃ reacts with 2.50 mol dm⁻³ HCl. Find the minimum volume of HCl needed. (Mᵣ MgCO₃ = 84.3)' }
    ],
    summaryText: 'c = n/V (V in dm³). NCV triangle: n = c×V, c = n/V, V = n/c. Making a solution: find n from mass (n=m/M), then V = n/c. Stoichiometry with solutions: 4-step method — use n = c×V (Step 2) or V = n/c (Step 4) instead of mass triangle. Dilutions: c₁V₁ = c₂V₂ (moles constant, volume changes). Back titration: add known excess → titrate remainder → subtract to find reacted moles. g dm⁻³ = mol dm⁻³ × M. Mass ppm = (m_solute/m_solution) × 10⁶ (units MUST match — convert mg to g first). Gas ppm = (V_gas/V_air) × 10⁶.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_1_4;