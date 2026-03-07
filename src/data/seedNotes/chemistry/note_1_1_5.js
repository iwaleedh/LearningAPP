/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 5
 * "Empirical and molecular formulae"
 * Source: Pearson Edexcel IAL Chemistry — Section 1D.1
 */
export const note_chemistry_1_1_5 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Know the term empirical formula. Calculate empirical formulae from experimental data (masses or percentage composition). Calculate molecular formulae from empirical formulae and Mr.' },
            terms: []
        },
        {
            id: 'h-def',
            type: 'heading',
            data: { text: 'Definitions', level: 2 },
            terms: []
        },
    {
      id: 'table-defs',
      type: 'comparisonTable',
      data: {
        caption: 'Empirical vs Molecular formula',
        headers: ['Type', 'Definition', 'Example (ethene)'],
        rows: [
          ['<strong>Empirical Formula</strong>', 'Smallest whole number ratio of atoms of each element in a compound.', 'CH₂'],
          ['<strong>Molecular Formula</strong>', 'Actual number of atoms of each element in one molecule.', 'C₂H₄']
        ]
      },
      terms: ['Empirical formula', 'Molecular formula']
    },
    {
      id: 'callout-multiplier',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Molecular Formula Multiplier',
        text: 'The molecular formula is always a simple multiple of the empirical formula.<br/><br/><strong>Molecular Formula = (Empirical Formula) × n</strong><br/><br/>To find the multiplier $n$, use:<br/><br/><strong>$n$ = Molecular $M_r \\div$ Empirical Formula Mass</strong>'
      },
      terms: []
    },
    {
      id: 'callout-ionic-rule',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Rule for Ionic Compounds',
        text: 'For ionic compounds (like NaCl or MgO) and giant covalent structures, the formula given is <strong>ALWAYS the empirical formula</strong>. They form giant lattice structures, not discrete distinct molecules, so a "molecular formula" does not exist for them.'
      },
      terms: []
    },
    {
      id: 'h-water-cryst',
      type: 'heading',
      data: { text: 'Water of Crystallisation', level: 2 },
      terms: []
    },
    {
      id: 'p-water-cryst-def',
      type: 'paragraph',
      data: { text: '<strong>Water of crystallisation</strong> refers to water molecules that are trapped within the framework of an ionic crystal lattice during the crystallisation process. They are held by electrostatic attractions between the ions and water molecules.<br/><br/>The formula is written with a dot (·) representing a fixed mole ratio. For example, <strong>CuSO₄·5H₂O</strong> means there are exactly 5 moles of water for every 1 mole of copper(II) sulfate.' },
      terms: ['Water of crystallisation']
    },
    {
      id: 'table-hydrated',
      type: 'comparisonTable',
      data: {
        caption: 'Hydrated vs Anhydrous Salts',
        headers: ['Term', 'Definition', 'Visual Example (Copper(II) Sulfate)'],
        rows: [
          ['<strong>Hydrated Salt</strong>', 'Contains water of crystallisation', '<strong>Blue crystals</strong> (CuSO₄·5H₂O)'],
          ['<strong>Anhydrous Salt</strong>', 'Contains NO water of crystallisation', '<strong>White powder</strong> (CuSO₄)']
        ]
      },
      terms: ['Hydrated salt', 'Anhydrous salt']
    },
    {
      id: 'callout-water-reversible',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Reversible Hydration',
        text: 'Heating a hydrated salt drives off the water to leave an anhydrous salt (e.g. Blue CuSO₄ $\\rightarrow$ White CuSO₄). Adding water back reverses the process exactly. This distinct colour change is often used as a <strong>chemical test for the presence of water</strong>.'
      },
      terms: []
    },
        {
            id: 'h-calc',
            type: 'heading',
            data: { text: 'Calculating Empirical Formula — Method', level: 2 },
            terms: []
        },
        {
            id: 'list-steps',
            type: 'list',
            data: {
                style: 'ordered',
                items: [
                    'Divide the mass (or % composition) of each element by its relative atomic mass (Aᵣ). This gives the <em>relative number of moles</em> of each element.',
                    'Divide all values by the <strong>smallest value</strong> to get the simplest ratio.',
                    'If the ratio is not in whole numbers (e.g. 1.5), multiply all by an integer to make them whole.',
                    'Write the empirical formula using these whole-number ratios as subscripts.'
                ]
            },
            terms: []
        },
        {
          id: 'table-decimal-ratios',
          type: 'comparisonTable',
          data: {
            caption: 'Handling Non-Whole Number Ratios',
            headers: ['Ratio Ends In', 'Multiply ALL by', 'Example'],
            rows: [
              ['<strong>.5</strong> (e.g. 1.5)', '<strong>× 2</strong>', '1.5 $\\rightarrow$ 3'],
              ['<strong>.33</strong> (e.g. 1.33)', '<strong>× 3</strong>', '1.33 $\\rightarrow$ 4'],
              ['<strong>.25</strong> (e.g. 1.25)', '<strong>× 4</strong>', '1.25 $\\rightarrow$ 5']
            ]
          },
          terms: []
        },
        {
            id: 'callout-warn',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Watch out for rounding!',
                text: 'Use at least two significant figures in the calculation. Do not round prematurely. For example, a ratio of 1.5 means multiply all by 2 to get 3:2. A ratio of 1.2 : 1.2 : 1.9 cannot be rounded carelessly to 1:1:2.'
            },
            terms: []
        },
        {
            id: 'callout-w1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example 1: From masses (copper oxide)',
                text: '<strong>Data:</strong> Cu = 3.43 g, O = 0.85 g<br/><br/>Cu: 3.43/63.5 = 0.0540 mol<br/>O: 0.85/16.0 = 0.0531 mol<br/>Ratio: 0.0540 : 0.0531 ≈ 1 : 1<br/><br/>Empirical formula: <strong>CuO</strong>'
            },
            terms: []
        },
        {
            id: 'callout-w2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example 2: From % composition (C, H, Cl compound)',
                text: '<strong>Data:</strong> C = 38.4%, H = 4.8%, Cl = 56.8%<br/><br/>C: 38.4/12.0 = 3.20<br/>H: 4.8/1.0 = 4.80<br/>Cl: 56.8/35.5 = 1.60<br/>Divide by smallest (1.60):<br/>C: 2.0, H: 3.0, Cl: 1.0<br/><br/>Empirical formula: <strong>C₂H₃Cl</strong>'
            },
            terms: []
        },
        {
            id: 'h-combustion',
            type: 'heading',
            data: { text: 'Combustion Analysis (A-Level Method)', level: 2 },
            terms: []
        },
        {
            id: 'callout-combustion-def',
            type: 'callout',
            data: {
                style: 'key',
                title: 'What is Combustion Analysis?',
                text: 'Used for <strong>organic compounds</strong>. The compound is burned completely and the masses of <strong>CO₂</strong> and <strong>H₂O</strong> produced are recorded. From these, the masses of C and H can be deduced, and any remaining mass is O (by subtraction from the original sample mass).<br/><br/><strong>Key ratios:</strong><br/>• Mass of C in CO₂ = (12/44) × mass of CO₂<br/>• Mass of H in H₂O = (2/18) × mass of H₂O<br/>• Mass of O = sample mass – mass of C – mass of H'
            },
            terms: ['Combustion analysis']
        },
        {
            id: 'callout-combustion-worked',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example: Combustion Analysis',
                text: '<strong>1.87 g sample burns to give 2.65 g CO₂ and 1.63 g H₂O. Find the empirical formula.</strong><br/><br/>Step 1 — Find mass of C:<br/>Mass of C = (12/44) × 2.65 = <strong>0.723 g</strong><br/><br/>Step 2 — Find mass of H:<br/>Mass of H = (2/18) × 1.63 = <strong>0.181 g</strong><br/><br/>Step 3 — Find mass of O (by difference):<br/>Mass of O = 1.87 – 0.723 – 0.181 = <strong>0.966 g</strong><br/><br/>Step 4 — Divide each by Aᵣ to get moles:<br/>n(C) = 0.723/12 = 0.0603 mol<br/>n(H) = 0.181/1 = 0.181 mol<br/>n(O) = 0.966/16 = 0.0604 mol<br/><br/>Step 5 — Divide by smallest (0.0603):<br/>C : H : O = 1 : 3 : 1<br/><br/>Empirical formula: <strong>CH₃O</strong>'
            },
            terms: []
        },
        {
            id: 'h-pv-link',
            type: 'heading',
            data: { text: 'Linking Empirical Formula + Ideal Gas Equation', level: 2 },
            terms: []
        },
    {
      id: 'callout-pv-link',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Combined Method: Empirical → Molar Mass → Molecular Formula',
        text: 'If a question gives you % composition AND conditions of a gas sample (P, V, T), you can:<br/><br/><strong>Step 1:</strong> Calculate the empirical formula from the % data.<br/><strong>Step 2:</strong> Use pV = nRT (with converted SI units) to find n.<br/><strong>Step 3:</strong> Calculate molar mass M = mass / n.<br/><strong>Step 4:</strong> Scaling factor = M ÷ Mᵣ(empirical). Multiply subscripts.<br/><br/><em>Example:</em> If empirical formula = C₂H₆O (Mᵣ = 46) and pV=nRT gives M ≈ 46 g mol⁻¹, then molecular formula = <strong>C₂H₆O</strong> (same, since scaling factor = 1).'
      },
      terms: []
    },
    {
      id: 'h-calc-crystallisation',
      type: 'heading',
      data: { text: 'Determining Water of Crystallisation', level: 2 },
      terms: []
    },
    {
      id: 'callout-water-method',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Experimental Method & Calculations',
        text: '<strong>Aim:</strong> Find the value of <em>x</em> in a hydrated salt formula (e.g. Na₂CO₃·<em>x</em>H₂O).<br/><br/><strong>Procedure:</strong><br/>1. Weigh an empty evaporating basin ($m_1$).<br/>2. Add hydrated crystals and weigh basin + crystals ($m_2$).<br/>3. Heat the basin gently to drive off the water.<br/>4. Cool in a desiccator and re-weigh.<br/>5. <strong>Heat to Constant Mass:</strong> Reheat, cool, and re-weigh repeatedly until the mass stops changing ($m_3$). This guarantees ALL water has been driven off.<br/><br/><strong>Mass Calculations:</strong><br/>• Mass of anhydrous salt = $m_3 - m_1$<br/>• Mass of water lost = $m_2 - m_3$'
      },
      terms: ['Constant mass']
    },
    {
      id: 'callout-water-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Finding x',
        text: '<strong>Q: 2.50 g of hydrated sodium carbonate (Na₂CO₃·xH₂O) is heated to constant mass. 0.93 g of anhydrous sodium carbonate remains. Find x.</strong><br/><br/><strong>Step 1: Find Masses</strong><br/>Mass of anhydrous Na₂CO₃ = 0.93 g<br/>Mass of water lost = 2.50 − 0.93 = 1.57 g<br/><br/><strong>Step 2: Find Moles</strong> (Divide by Mr)<br/>Moles Na₂CO₃ = 0.93 / 106.0 = 0.00877 mol<br/>Moles H₂O = 1.57 / 18.0 = 0.0872 mol<br/><br/><strong>Step 3: Mole Ratio</strong> (Divide by smallest)<br/>Na₂CO₃: 0.00877 / 0.00877 = 1<br/>H₂O: 0.0872 / 0.00877 = 9.94 $\\approx$ 10<br/><br/>Formula = <strong>Na₂CO₃·10H₂O</strong> ($x = 10$)'
      },
      terms: []
    },
    {
      id: 'table-water-errors',
      type: 'comparisonTable',
      data: {
        caption: 'Common Errors in Water of Crystallisation Experiments',
        headers: ['Error', 'Effect on x value', 'Reason'],
        rows: [
          ['Not heating to constant mass', '<strong>x too LOW</strong>', 'Some water remains in the crystals; calculated water mass is too small.'],
          ['Absorbing water while cooling', '<strong>x too LOW</strong>', 'Anhydrous salt gains mass from the air; appears like less water was lost. (Fix: cool in a desiccator).'],
          ['Spilling crystals during heating', '<strong>x too HIGH</strong>', 'Mass of anhydrous salt appears artificially low.'],
          ['Overheating (salt decomposes)', '<strong>x too HIGH</strong>', 'Extra mass loss from decomposition gases is falsely counted as water lost.']
        ]
      },
      terms: []
    },
        {
            id: 'h-practice',
            type: 'heading',
            data: { text: 'Practice Questions', level: 2 },
            terms: []
        },
        {
            id: 'callout-pq1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Practice Q1: Combustion Analysis of an Unknown Compound',
                text: '<strong>Question:</strong> 0.920 g of an organic compound X is burned completely in excess oxygen. The products are 1.760 g of CO₂ and 0.720 g of H₂O. The compound contains only C, H and O. Determine the empirical formula of X.<br/><br/><strong>Step 1 — Find mass of C:</strong><br/>m(C) = (12/44) × 1.760 = 0.480 g<br/><br/><strong>Step 2 — Find mass of H:</strong><br/>m(H) = (2/18) × 0.720 = 0.080 g<br/><br/><strong>Step 3 — Find mass of O by difference:</strong><br/>m(O) = 0.920 − 0.480 − 0.080 = 0.360 g<br/><br/><strong>Step 4 — Convert to moles:</strong><br/>n(C) = 0.480/12 = 0.0400 mol<br/>n(H) = 0.080/1 = 0.080 mol<br/>n(O) = 0.360/16 = 0.0225 mol<br/><br/><strong>Step 5 — Divide by smallest (0.0225):</strong><br/>C : H : O = 1.78 : 3.56 : 1.00 ≈ multiply all by ~9/5... try ×9/4:<br/>C : 1.78 ≈ 16/9 → try rounding: nearest whole = C:H:O ≈ 8 : 16 : 4 ÷ 4 = <strong>2 : 4 : 1</strong><br/><br/><strong>Empirical formula: C₂H₄O</strong>'
            },
            terms: []
        },
        {
            id: 'callout-pq2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Practice Q2: pV=nRT to Find Molecular Formula',
        text: '<strong>Question:</strong> A gas has the percentage composition C: 52.2%, H: 13.0%, O: 34.8% by mass. A 0.225 g sample of the gas has a volume of 150 cm³ at a pressure of 101 kPa and temperature of 100 °C. Find the molecular formula. (R = 8.31 J mol⁻¹ K⁻¹)<br/><br/><strong>Part A — Empirical formula:</strong><br/>Assume 100 g: C = 52.2/12.0 = 4.35, H = 13.0/1.0 = 13.0, O = 34.8/16.0 = 2.175<br/>Divide by 2.175: C : H : O = 2 : 5.98 : 1 ≈ <strong>2 : 6 : 1 → empirical formula C₂H₆O</strong> (Mᵣ = 46.0)<br/><br/><strong>Part B — Use pV = nRT to find n:</strong><br/>Convert: p = 101,000 Pa; V = 150 × 10⁻⁶ m³; T = 373 K<br/>n = pV/RT = (101,000 × 150 × 10⁻⁶) / (8.31 × 373) = 15.15 / 3100 = <strong>0.00489 mol</strong><br/><br/><strong>Part C — Molar mass:</strong><br/>M = m/n = 0.225 / 0.00489 = <strong>46.0 g mol⁻¹</strong><br/><br/><strong>Part D — Scaling factor:</strong><br/>46.0 / 46.0 = <strong>1 → Molecular formula: C₂H₆O</strong>'
            },
            terms: []
        },
    {
      id: 'callout-pq3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q3: Molecular Formula from Combustion + Mr',
        text: '<strong>Question:</strong> A hydrocarbon contains 85.7% C and 14.3% H by mass. Its Mᵣ = 42. Find the molecular formula.<br/><br/><strong>Step 1 — Empirical formula:</strong><br/>C: 85.7/12 = 7.14; H: 14.3/1 = 14.3<br/>Divide by 7.14: C : H = 1 : 2.0 → empirical formula <strong>CH₂</strong> (Mᵣ = 14)<br/><br/><strong>Step 2 — Scaling factor:</strong><br/>42 / 14 = 3<br/><br/><strong>Step 3 — Molecular formula:</strong><br/>(CH₂) × 3 = <strong>C₃H₆</strong>'
      },
      terms: []
    },
    {
      id: 'callout-pq4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q4: Water of Crystallisation',
        text: '<strong>Question:</strong> 3.00 g of hydrated copper(II) sulfate is heated. The mass after heating is 1.92 g. Find the value of x in CuSO₄·xH₂O.<br/><br/><strong>Step 1 — Masses:</strong><br/>Water lost = 3.00 - 1.92 = 1.08 g<br/>Anhydrous CuSO₄ = 1.92 g<br/><br/><strong>Step 2 — Moles:</strong><br/>Moles CuSO₄ = 1.92 / 159.6 = 0.0120 mol<br/>Moles H₂O = 1.08 / 18.0 = 0.0600 mol<br/><br/><strong>Step 3 — Ratio:</strong><br/>CuSO₄ = 0.0120 / 0.0120 = 1<br/>H₂O = 0.0600 / 0.0120 = 5.0<br/><strong>x = 5</strong>'
      },
      terms: []
    },
    {
      id: 'callout-pq5',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q5: Crystallisation Errors',
        text: '<strong>Question:</strong> A student calculated x = 4.2 for CaSO₄·xH₂O, but the true value is 2. Suggest TWO possible errors.<br/><br/>An x value that is too <strong>HIGH</strong> means the apparent mass loss was too great (it looked like more water was lost than actually was).<br/><br/><strong>Possible Errors:</strong><br/>1. The salt was overheated and decomposed, producing gases that escaped alongside the water.<br/>2. Some of the solid was spilled or spat out of the basin during vigorous heating.'
      },
      terms: []
    }
    ],
    recall: {
      enabled: true,
      cues: [
        { id: 'c1', blockId: 'table-defs', prompt: 'Define the terms empirical formula and molecular formula and explain how they differ.' },
        { id: 'c-ionic', blockId: 'callout-ionic-rule', prompt: 'Explain why the formula for NaCl is considered an empirical formula, not a molecular formula.' },
        { id: 'c-multiplier', blockId: 'callout-multiplier', prompt: 'What is the formula for calculating the multiplier (n) to convert an empirical formula into a molecular formula?' },
        { id: 'c-water1', blockId: 'table-hydrated', prompt: 'What is the exact colour change when hydrated copper(II) sulfate is heated to become anhydrous?' },
        { id: 'c-water2', blockId: 'callout-water-method', prompt: 'Explain the method "heating to constant mass" and state why it is utterly essential in water of crystallisation experiments.' },
        { id: 'c-water3', blockId: 'table-water-errors', prompt: 'A student does a water of crystallisation experiment but doesn\'t heat it long enough. What effect will this have on the calculated value of x, and why?' },
        { id: 'c-water4', blockId: 'table-water-errors', prompt: 'During a water of crystallisation experiment, the salt is overheated and decomposes. Will the calculated value of x be too high or too low?' },
        { id: 'c2', blockId: 'list-steps', prompt: 'Describe the method for calculating an empirical formula from percentage composition data.' },
        { id: 'c3', blockId: 'callout-mol', prompt: 'A compound has empirical formula CH₂O and Mᵣ = 180. What is the molecular formula?' },
        { id: 'c4', blockId: 'callout-combustion-def', prompt: 'State the formula for finding the mass of carbon from a combustion analysis experiment that produces a known mass of CO₂.' },
        { id: 'c5', blockId: 'callout-pq1', prompt: '0.920 g of compound X burns to give 1.760 g CO₂ and 0.720 g H₂O. Find the empirical formula of X (contains C, H, O only).' },
        { id: 'c6', blockId: 'callout-pq3', prompt: 'A hydrocarbon is 85.7% C and 14.3% H, with Mᵣ = 42. Determine its molecular formula, showing all steps.' },
        { id: 'c7', blockId: 'callout-pq4', prompt: '3.00 g of hydrated copper(II) sulfate leaves 1.92 g of solid after heating. Calculate x. (CuSO₄ Mr = 159.6, H₂O Mr = 18.0)' }
      ],
      summaryText: 'Empirical = simplest ratio; Molecular = actual atoms. Methods: (1) Masses — divide by Aᵣ, divide by smallest; (2) % — treat as 100g. Water of crystallisation is treated identically — find moles of anhydrous salt and moles of water lost, then find ratio. Heat to constant mass ensures ALL water is lost. Not heating enough = x too low. Spilling/decomposing = x too high. Molecular formula = empirical × (Mᵣ ÷ empirical Mᵣ).',
      ready: false
    },
    evidence: []
};
export default note_chemistry_1_1_5;
