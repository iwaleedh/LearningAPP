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
      data: { text: 'Understand the molar volume of gas at r.t.p. Use the ideal gas equation pV = nRT with correct SI unit conversions (p in Pa, V in m³, T in K) to find moles or molar mass. Perform calculations involving volumes and moles of gases using both n = V/24 (r.t.p.) and pV = nRT. Use the 4-step method in stoichiometric problems combining masses, gas volumes and solution concentrations.' },
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
      id: 'svg-molar-volume-triangle',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 230" width="280" height="230"><polygon points="140,15 10,200 270,200" fill="#0a2e1a" stroke="#10b981" stroke-width="2.5"/><line x1="75" y1="108" x2="205" y2="108" stroke="#10b981" stroke-width="2"/><text x="140" y="72" text-anchor="middle" font-size="38" font-weight="bold" fill="#065f46" font-family="Arial,sans-serif">V</text><text x="140" y="100" text-anchor="middle" font-size="12" fill="#059669" font-family="Arial,sans-serif">volume (dm&#xB3; or cm&#xB3;)</text><text x="86" y="158" text-anchor="middle" font-size="34" font-weight="bold" fill="#1d4ed8" font-family="Arial,sans-serif">n</text><text x="86" y="180" text-anchor="middle" font-size="11" fill="#2563eb" font-family="Arial,sans-serif">amount (mol)</text><text x="194" y="155" text-anchor="middle" font-size="29" font-weight="bold" fill="#7c3aed" font-family="Arial,sans-serif">Vm</text><text x="194" y="177" text-anchor="middle" font-size="10" fill="#7c3aed" font-family="Arial,sans-serif">molar vol (24 dm&#xB3;)</text><text x="140" y="218" text-anchor="middle" font-size="11" fill="#374151" font-family="Arial,sans-serif">V = n&#xD7;Vm | n = V/Vm | Vm = V/n</text></svg>',
        caption: 'Molar Volume Triangle — cover the unknown. At r.t.p., Vm = 24 dm³ = 24,000 cm³. This applies to ALL ideal gases at r.t.p.'
      },
      terms: []
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
      id: 'h-ideal-gas',
      type: 'heading',
      data: { text: 'The Ideal Gas Equation: pV = nRT', level: 2 },
      terms: []
    },
    {
      id: 'callout-ideal-gas',
      type: 'callout',
      data: {
        style: 'key',
        title: 'pV = nRT — Key Equation and Terms',
        text: '<strong>pV = nRT</strong><br/><br/>p = pressure in <strong>Pa</strong> (Pascals)<br/>V = volume in <strong>m³</strong><br/>n = amount in <strong>mol</strong><br/>R = 8.31 J mol⁻¹ K⁻¹ (given on exam data sheet — do NOT memorise the value)<br/>T = temperature in <strong>K</strong> (Kelvin)<br/><br/>Rearrange for moles: <strong>n = pV / RT</strong><br/><br/>Use pV = nRT when given a specific pressure AND temperature that are NOT r.t.p. When at r.t.p. (298 K, 101 kPa), use n = V/24 for speed. You must memorise the 4 SI unit conversions below.'
      },
      terms: ['Ideal gas equation', 'pV = nRT']
    },
    {
      id: 'table-si-units',
      type: 'comparisonTable',
      data: {
        caption: 'SI Unit Conversions for pV = nRT — apply BEFORE substituting. A typical exam question awards 1 mark per correct conversion.',
        headers: ['Quantity', 'Common unit given', 'SI unit required', 'Conversion'],
        rows: [
          ['<strong>Pressure (p)</strong>', 'kPa', 'Pa', '× 1000  (× 10³)'],
          ['<strong>Pressure (p)</strong>', 'Pa (already SI)', 'Pa', 'No change needed'],
          ['<strong>Volume (V)</strong>', 'cm³', 'm³', '÷ 1,000,000  (÷ 10⁶)'],
          ['<strong>Volume (V)</strong>', 'dm³', 'm³', '÷ 1000  (÷ 10³)'],
          ['<strong>Temperature (T)</strong>', '°C', 'K', '+ 273']
        ]
      },
      terms: []
    },
    {
      id: 'callout-pv-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1: Finding Molar Mass using pV = nRT',
        text: '<strong>A 0.280 g sample of gas has: V = 58.5 cm³, p = 120 kPa, T = 70°C. Find the molar mass. (R = 8.31 J mol⁻¹ K⁻¹)</strong><br/><br/><strong>Step 1 — Convert to SI units:</strong><br/>p = 120 × 1000 = 120,000 Pa ✓<br/>V = 58.5 ÷ 10⁶ = 5.85 × 10⁻⁵ m³ ✓<br/>T = 70 + 273 = 343 K ✓<br/><br/><strong>Step 2 — Calculate n = pV/RT:</strong><br/>n = (120,000 × 5.85 × 10⁻⁵) / (8.31 × 343)<br/>n = 7.02 / 2850.3 = <strong>2.46 × 10⁻³ mol</strong><br/><br/><strong>Step 3 — Calculate molar mass M = m/n:</strong><br/>M = 0.280 / (2.46 × 10⁻³) = <strong>114 g mol⁻¹</strong><br/><br/><em>⚠ Exam tip: Each unit conversion typically earns 1 mark. Never omit them — this is the most common source of lost marks in pV = nRT questions.</em>'
      },
      terms: []
    },
    {
      id: 'callout-pv-bromine',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 (Past Paper): Moles of Bromine Gas',
        text: '<strong>A sample of Br₂(g) occupies 200 cm³ at 77°C and 1.51 × 10⁵ Pa. Calculate the moles of Br₂. (R = 8.31 J mol⁻¹ K⁻¹)</strong><br/><br/>p = 1.51 × 10⁵ Pa (already in Pa — no conversion) ✓<br/>V = 200 ÷ 10⁶ = 2.00 × 10⁻⁴ m³ ✓<br/>T = 77 + 273 = 350 K ✓<br/><br/>n = pV / RT = (1.51 × 10⁵ × 2.00 × 10⁻⁴) / (8.31 × 350)<br/>n = 30.2 / 2908.5 = <strong>1.04 × 10⁻² mol</strong>'
      },
      terms: []
    },
    {
      id: 'svg-three-triangles',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 195" font-family="Arial,sans-serif"><text x="260" y="15" text-anchor="middle" font-size="12" font-weight="bold" fill="#1f2937">Three Mole Triangles — All Connected via n (moles)</text><polygon points="80,30 15,158 145,158" fill="#2d1b69" stroke="#7c3aed" stroke-width="2"/><line x1="47" y1="94" x2="113" y2="94" stroke="#7c3aed" stroke-width="1.5"/><text x="80" y="80" text-anchor="middle" font-size="24" font-weight="bold" fill="#6d28d9">m</text><text x="47" y="132" text-anchor="middle" font-size="20" font-weight="bold" fill="#1d4ed8">n</text><text x="113" y="132" text-anchor="middle" font-size="20" font-weight="bold" fill="#065f46">M</text><text x="80" y="172" text-anchor="middle" font-size="9" fill="#374151">n = m/M</text><text x="80" y="183" text-anchor="middle" font-size="9" fill="#6b7280">mass &#x21C6; moles</text><text x="163" y="91" text-anchor="middle" font-size="18" fill="#9ca3af">&#x21C6;</text><text x="163" y="104" text-anchor="middle" font-size="8" fill="#6b7280">via n</text><polygon points="260,30 195,158 325,158" fill="#1c3a64" stroke="#3b82f6" stroke-width="2"/><line x1="227" y1="94" x2="293" y2="94" stroke="#3b82f6" stroke-width="1.5"/><text x="260" y="80" text-anchor="middle" font-size="24" font-weight="bold" fill="#1e40af">n</text><text x="227" y="132" text-anchor="middle" font-size="20" font-weight="bold" fill="#065f46">c</text><text x="293" y="132" text-anchor="middle" font-size="20" font-weight="bold" fill="#7c3aed">V</text><text x="260" y="172" text-anchor="middle" font-size="9" fill="#374151">n = c&#xD7;V</text><text x="260" y="183" text-anchor="middle" font-size="9" fill="#6b7280">solutions</text><text x="343" y="91" text-anchor="middle" font-size="18" fill="#9ca3af">&#x21C6;</text><text x="343" y="104" text-anchor="middle" font-size="8" fill="#6b7280">via n</text><polygon points="440,30 375,158 505,158" fill="#0a2e1a" stroke="#10b981" stroke-width="2"/><line x1="407" y1="94" x2="473" y2="94" stroke="#10b981" stroke-width="1.5"/><text x="440" y="80" text-anchor="middle" font-size="24" font-weight="bold" fill="#065f46">V</text><text x="407" y="132" text-anchor="middle" font-size="20" font-weight="bold" fill="#1d4ed8">n</text><text x="473" y="130" text-anchor="middle" font-size="16" font-weight="bold" fill="#7c3aed">Vm</text><text x="440" y="172" text-anchor="middle" font-size="9" fill="#374151">V = n&#xD7;Vm</text><text x="440" y="183" text-anchor="middle" font-size="9" fill="#6b7280">gas volumes</text></svg>',
        caption: 'All three triangles share n (moles) as the connecting quantity. A 4-step calculation may use more than one triangle: e.g. mass → n (triangle 1) → mole ratio → n → volume of gas (triangle 3).'
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
    },
    {
      id: 'callout-pi3-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Past Paper (Jan 2018): Non-Simple Mole Ratio — PI₃',
        text: '<strong>Equation: P₄(s) + 6I₂(s) → 4PI₃(s)</strong><br/>Calculate the minimum mass of iodine (I₂) required to produce 1.00 kg of PI₃, given that phosphorus is in excess.<br/>(Mᵣ: PI₃ = 411.7; I₂ = 253.8)<br/><br/><strong>Step 1 — Moles of known (PI₃):</strong><br/>1.00 kg = 1000 g<br/>n(PI₃) = 1000 / 411.7 = 2.429 mol<br/><br/><strong>Step 2 — Mole ratio I₂ : PI₃ = 6 : 4</strong><br/>Not a simple 1:1 or 1:2 ratio — method: multiply n by (coefficient of unknown) ÷ (coefficient of known)<br/>n(I₂) = 2.429 × (6 / 4) = 2.429 × 1.5 = <strong>3.643 mol</strong><br/><br/><strong>Step 3 — Mass of I₂:</strong><br/>m(I₂) = 3.643 × 253.8 = 924.8 g = <strong>0.925 kg</strong><br/><br/><em>Key skill: For any non-simple ratio, n(unknown) = n(known) × [coeff. of unknown / coeff. of known]. Store the full calculator value at each step; only round the final answer.</em>'
      },
      terms: []
    },
    {
      id: 'svg-stoich-pathway',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 440" font-family="system-ui,sans-serif"><defs><marker id="sp-arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#2d2d72"/></marker></defs><text x="350" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b" letter-spacing="1">STOICHIOMETRY MASTER PATHWAY</text><!-- Entry label --><text x="108" y="50" text-anchor="middle" font-size="10" fill="#2d2d72" font-weight="700">3 ENTRY ROUTES → MOLES</text><!-- Entry 1: Mass --><rect x="10" y="58" width="184" height="56" rx="10" fill="rgba(99,102,241,0.25)" stroke="#818cf8" stroke-width="1.5"/><text x="28" y="78" font-size="9.5" fill="#2d2d72" font-weight="700">ENTRY: MASS</text><text x="102" y="98" text-anchor="middle" font-size="13" font-weight="800" fill="#1e293b">n = m ÷ M</text><text x="102" y="112" text-anchor="middle" font-size="8.5" fill="#2d2d72">m [g] · M [g mol⁻¹]</text><!-- Entry 2: Solution --><rect x="10" y="128" width="184" height="56" rx="10" fill="rgba(251,146,60,0.22)" stroke="#fb923c" stroke-width="1.5"/><text x="28" y="148" font-size="9.5" fill="#532407" font-weight="700">ENTRY: SOLUTION</text><text x="102" y="168" text-anchor="middle" font-size="13" font-weight="800" fill="#1e293b">n = c × V</text><text x="102" y="182" text-anchor="middle" font-size="8.5" fill="#532407">c [mol dm⁻³] · V [dm³], calc V÷1000 if in cm³</text><!-- Entry 3: Gas --><rect x="10" y="198" width="184" height="70" rx="10" fill="rgba(52,211,153,0.2)" stroke="#34d399" stroke-width="1.5"/><text x="28" y="218" font-size="9.5" fill="#065f46" font-weight="700">ENTRY: GAS</text><text x="102" y="238" text-anchor="middle" font-size="11" font-weight="800" fill="#1e293b">n = V(cm³) ÷ 24000</text><text x="102" y="254" text-anchor="middle" font-size="10" font-weight="800" fill="#1e293b">n = pV ÷ RT</text><text x="102" y="268" text-anchor="middle" font-size="8.5" fill="#065f46">at RTP use ÷24000 · otherwise use pV=nRT with SI units</text><!-- Arrows from entries to moles box --><line x1="194" y1="86" x2="270" y2="180" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#sp-arr)"/><line x1="194" y1="156" x2="270" y2="190" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#sp-arr)"/><line x1="194" y1="233" x2="270" y2="210" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#sp-arr)"/><!-- Central moles box --><rect x="270" y="152" width="160" height="96" rx="12" fill="#6366f1" stroke="#a5b4fc" stroke-width="2"/><text x="350" y="178" text-anchor="middle" font-size="12" font-weight="800" fill="#1e293b">n(KNOWN)</text><text x="350" y="198" text-anchor="middle" font-size="10" fill="#2d2d72">↓  MOLE RATIO  ↓</text><text x="350" y="215" text-anchor="middle" font-size="9" fill="#2d2d72">from balanced equation</text><text x="350" y="232" text-anchor="middle" font-size="12" font-weight="800" fill="#1e293b">n(UNKNOWN)</text><!-- Arrows from moles box to exit routes --><line x1="430" y1="180" x2="506" y2="120" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#sp-arr)"/><line x1="430" y1="200" x2="506" y2="200" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#sp-arr)"/><line x1="430" y1="228" x2="506" y2="280" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#sp-arr)"/><!-- Exit label --><text x="592" y="50" text-anchor="middle" font-size="10" fill="#2d2d72" font-weight="700">MOLES → 3 EXIT ROUTES</text><!-- Exit 1: Mass --><rect x="506" y="58" width="184" height="56" rx="10" fill="rgba(99,102,241,0.25)" stroke="#818cf8" stroke-width="1.5"/><text x="524" y="78" font-size="9.5" fill="#2d2d72" font-weight="700">EXIT: MASS</text><text x="598" y="98" text-anchor="middle" font-size="13" font-weight="800" fill="#1e293b">m = n × M</text><text x="598" y="112" text-anchor="middle" font-size="8.5" fill="#2d2d72">M [g mol⁻¹] · result in g (convert if needed)</text><!-- Exit 2: Concentration --><rect x="506" y="170" width="184" height="60" rx="10" fill="rgba(251,146,60,0.22)" stroke="#fb923c" stroke-width="1.5"/><text x="524" y="190" font-size="9.5" fill="#532407" font-weight="700">EXIT: CONCENTRATION</text><text x="598" y="210" text-anchor="middle" font-size="12" font-weight="800" fill="#1e293b">c = n ÷ V</text><text x="598" y="224" text-anchor="middle" font-size="8.5" fill="#532407">V must be in dm³</text><!-- Exit 3: Gas volume --><rect x="506" y="248" width="184" height="70" rx="10" fill="rgba(52,211,153,0.2)" stroke="#34d399" stroke-width="1.5"/><text x="524" y="268" font-size="9.5" fill="#065f46" font-weight="700">EXIT: GAS VOLUME</text><text x="598" y="287" text-anchor="middle" font-size="11" font-weight="800" fill="#1e293b">V = n × 24000 cm³</text><text x="598" y="305" text-anchor="middle" font-size="10" font-weight="800" fill="#1e293b">V = nRT ÷ p  [m³]</text><text x="598" y="318" text-anchor="middle" font-size="8.5" fill="#065f46">at RTP use ×24000 · otherwise use pV=nRT</text><!-- TIP strip --><rect x="10" y="348" width="680" height="82" rx="10" fill="rgba(96,165,250,0.12)" stroke="#60a5fa" stroke-width="1"/><text x="350" y="368" text-anchor="middle" font-size="10" fill="#1250a0" font-weight="700">★ EXAM TRICK — Mole ratio formula</text><text x="350" y="386" text-anchor="middle" font-size="11" fill="#1e293b" font-weight="600">n(unknown) = n(known) × [ coeff(unknown) ÷ coeff(known) ]</text><text x="350" y="404" text-anchor="middle" font-size="9" fill="#1e3a8a">e.g. P₄ + 6I₂ → 4PI₃   if n(PI₃) = 2.0 mol, then n(I₂) = 2.0 × (6/4) = 3.0 mol</text><text x="350" y="420" text-anchor="middle" font-size="9" fill="#1e3a8a">Works for any non-1:1 ratio — always multiply n(known) by [coeff₁ ÷ coeff₂]</text></svg>',
        caption: 'Stoichiometry Master Pathway — 3 entry routes (mass, solution, gas) all feed through moles via the mole ratio from the equation, then 3 exit routes convert back. This single diagram covers every stoichiometry mark scheme step.'
      },
      terms: []
    }
  ],
  presentationSlides: [
    {
      layout: 'bento',
      title: 'Stoichiometry & Gas Volumes',
      subtitle: 'Chemistry Topic 1.6',
      elements: [
        { delay: 0, colSpan: 1, icon: '⚖️', title: 'Reacting Masses', html: 'Use the balanced equation to find mole ratios, then convert moles back to mass.' },
        { delay: 1, colSpan: 2, icon: '🎈', title: 'Molar Volume of Gases', html: 'At RTP, 1 mole of ANY gas occupies ~<strong>24 dm³ (24,000 cm³)</strong>.<br/><em>Formula:</em> Volume = moles × 24 (if measuring in dm³)' },
        { delay: 2, colSpan: 3, icon: '🌡️', title: 'Ideal Gas Equation', html: '<strong>pV = nRT</strong><br/>• p = Pressure (Pa)<br/>• V = Volume (m³)<br/>• n = Moles<br/>• R = 8.31 J K⁻¹ mol⁻¹<br/>• T = Temperature (K)' },
        { delay: 3, colSpan: 3, icon: '📏', title: 'Key Conversions for pV=nRT', html: '• °C to Kelvin: + 273<br/>• kPa to Pa: × 1000<br/>• dm³ to m³: ÷ 1000<br/>• cm³ to m³: ÷ 1,000,000' }
      ]
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
      { id: 'c6', blockId: 'callout-pq-gas2', prompt: '480 cm³ of O₂ is produced from 2H₂O₂ → 2H₂O + O₂. What mass of H₂O₂ decomposed? (Mᵣ = 34.0)' },
      { id: 'c7', blockId: 'callout-pi3-worked', prompt: 'P₄ + 6I₂ → 4PI₃. Find the mass of I₂ needed to make 1.00 kg of PI₃ (Mᵣ PI₃ = 411.7, I₂ = 253.8). Show how to handle the non-simple 6:4 ratio.' },
      { id: 'c8', blockId: 'table-si-units', prompt: 'State the SI unit conversion for: (a) kPa to Pa, (b) cm³ to m³, (c) dm³ to m³, (d) °C to K. Why must these be applied before using pV = nRT?' },
      { id: 'c9', blockId: 'callout-pv-worked', prompt: 'A 0.280g gas has V = 58.5 cm³, p = 120 kPa, T = 70°C. Use pV = nRT to find n, then calculate the molar mass.' }
    ],
    summaryText: 'Reacting mass 4-step method: (1) n=m/M of known, (2) identify ratio, (3) n(unk)=n(kn)×[coeffᵤ/coeffₖ], (4) m=n×M. Limiting reagent determines max product. Molar volume at r.t.p. = 24 dm³ = 24,000 cm³. Ideal gas equation: pV=nRT — SI units REQUIRED: p in Pa (kPa × 10³), V in m³ (cm³ ÷ 10⁶, dm³ ÷ 10³), T in K (°C + 273), R = 8.31 J mol⁻¹ K⁻¹ (given). n = pV/RT; M = m/n. Avogadro\'s Law: equal volumes of gases (same T, P) → equal moles → coefficients = volume ratios.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_1_6;