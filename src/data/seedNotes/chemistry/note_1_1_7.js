/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 7
 * "Percentage yield and atom economy"
 * Source: Pearson Edexcel IAL Chemistry — Sections 1C.4 and 1C.5
 */
export const note_chemistry_1_1_7 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Calculate percentage yields and percentage atom economies for laboratory and industrial processes. Understand what each measure tells us and their importance in green chemistry.' },
      terms: []
    },
    {
      id: 'h-yield',
      type: 'heading',
      data: { text: 'Percentage Yield', level: 2 },
      terms: []
    },
    {
      id: 'table-yield-defs',
      type: 'comparisonTable',
      data: {
        caption: 'Key yield terms',
        headers: ['Term', 'Definition'],
        rows: [
          ['<strong>Theoretical Yield</strong>', 'The maximum possible mass of product, calculated assuming complete reaction with no losses.'],
          ['<strong>Actual Yield</strong>', 'The actual mass of product obtained, determined by weighing (not by calculation).'],
          ['<strong>Percentage Yield</strong>', '(Actual yield / Theoretical yield) × 100']
        ]
      },
      terms: ['Theoretical yield', 'Actual yield', 'Percentage yield']
    },
    {
      id: 'callout-yield-reasons',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why is the actual yield less than theoretical?',
        text: '• The reaction is <strong>reversible</strong> and may not go to completion.<br/>• <strong>Side-reactions</strong> consume starting material to form other products.<br/>• <strong>Purification</strong> (filtration, distillation, recrystallisation) always results in some loss of product.<br/><br/><em>Exam hint: Give a specific and contextual reason (e.g., "product remained dissolved in the filtrate during filtration").</em>'
      },
      terms: []
    },
    {
      id: 'callout-yield-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Yield Calculation — Methanol synthesis',
        text: '<strong>CO + 2H₂ → CH₃OH</strong><br/>A manufacturer obtains 4.07 tonnes of methanol from 4.32 tonnes of CO.<br/><br/>Theoretical yield:<br/>n(CO) = 4.32×10⁶ / 28.0 = 1.543×10⁵ mol<br/>n(CH₃OH) = 1.543×10⁵ mol (1:1 ratio)<br/>m = 1.543×10⁵ × 32.0 = 4.94×10⁶ g = <strong>4.94 tonnes (theoretical yield)</strong><br/><br/>% yield = (4.07 / 4.94) × 100 = <strong>82.4%</strong>'
      },
      terms: []
    },
    {
      id: 'callout-yield-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake: Calculating % Yield',
        text: '<strong>Never</strong> divide the actual yield by the starting mass of the reactant!<br/><br/>The reactant mass must first be converted into the <strong>theoretical yield</strong> of the product using a reacting mass calculation (e.g. the Box Method). Only then can you calculate the percentage yield.'
      },
      terms: []
    },
    {
      id: 'h-atom',
      type: 'heading',
      data: { text: 'Atom Economy', level: 2 },
      terms: []
    },
    {
      id: 'callout-atom-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Atom Economy Formula (Barry Trost, 1991)',
        text: 'Atom Economy = (Molar mass of <em>desired product</em> / Sum of molar masses of <em>all products</em>) × 100<br/><br/>A 100% atom economy means ALL atoms from the reactants end up in the desired product. This is the "greenest" situation.'
      },
      terms: ['Atom economy']
    },
    {
      id: 'callout-atom-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Atom Economy — Solvay Process',
        text: '<strong>CaCO₃ + 2NaCl → Na₂CO₃ + CaCl₂</strong><br/>Desired product: Na₂CO₃ (Mᵣ = 106.0)<br/>All products: Na₂CO₃ (106.0) + CaCl₂ (111.1)<br/><br/>Atom economy = 106.0 / (106.0 + 111.1) × 100 = <strong>48.8%</strong>'
      },
      terms: []
    },
    {
      id: 'callout-solvay-combined',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Solvay Process — % Yield AND Atom Economy',
        text: '<strong>Equation: CaCO₃ + 2NaCl → Na₂CO₃ + CaCl₂</strong><br/>A manufacturer starts with 75.0 kg CaCO₃ and obtains 76.5 kg Na₂CO₃.<br/><br/><strong>PART A — Percentage Yield:</strong><br/>n(CaCO₃) = 75,000 / 100.1 = 749.3 mol<br/>Ratio CaCO₃ : Na₂CO₃ = 1 : 1 → n(Na₂CO₃) = 749.3 mol<br/>Theoretical yield = 749.3 × 106.0 = 79,400 g = <strong>79.4 kg</strong><br/><br/>% yield = (76.5 / 79.4) × 100 = <strong>96.3%</strong> ✔ High yield<br/><br/><strong>PART B — Atom Economy:</strong><br/>Desired product: Na₂CO₃ (Mᵣ = 106.0)<br/>By-product: CaCl₂ (Mᵣ = 111.1)<br/>Atom economy = 106.0 / (106.0 + 111.1) × 100 = <strong>48.8%</strong> ✘ Low atom economy<br/><br/><em>Conclusion: High % yield (96.3%) but poor atom economy (48.8%). In industry the CaCl₂ by-product is sold as a road de-icer, offsetting the economic cost of the waste and making the process viable.</em>'
      },
      terms: []
    },
    {
      id: 'table-atom',
      type: 'comparisonTable',
      data: {
        caption: 'Reaction Types and their typical Atom Economy',
        headers: ['Reaction Type', 'Typical Atom Economy'],
        rows: [
          ['Addition reactions', '100% — only one product formed'],
          ['Substitution reactions', '<100% — atoms in the leaving group are wasted'],
          ['Elimination reactions', '<100% — small molecule (e.g. H₂O) is also produced'],
          ['Multi-step reactions', 'Often 20–50% — each step creates by-products; waste accumulates']
        ]
      },
      terms: []
    },
    {
      id: 'h-ethene-routes',
      type: 'heading',
      data: { text: 'Comparing Routes: Choosing the Best Process', level: 2 },
      terms: []
    },
    {
      id: 'table-ethene-routes',
      type: 'comparisonTable',
      data: {
        caption: 'Two industrial routes to 1,2-dichloroethane (CH₂ClCH₂Cl, Mᵣ = 99.0)',
        headers: ['Feature', 'Route 1: Direct Chlorination (Addition)', 'Route 2: Oxychlorination (Substitution)'],
        rows: [
          ['Equation', 'CH₂=CH₂ + Cl₂ → CH₂ClCH₂Cl', 'CH₂=CH₂ + 2HCl + ½O₂ → CH₂ClCH₂Cl + H₂O'],
          ['Number of products', '1', '2 (desired product + H₂O by-product)'],
          ['Atom economy', '<strong>100%</strong>', '<strong>84.6%</strong> = 99 / (99 + 18) × 100'],
          ['Verdict', 'Preferred — no atoms wasted', 'Less efficient — H₂O is a wasted by-product']
        ]
      },
      terms: []
    },
    {
      id: 'callout-ae-generalisation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Atom Economy by Reaction Type — Summary',
        text: '<strong>Addition reactions</strong> — always 100% (single product, no atoms wasted)<br/><strong>Substitution / elimination</strong> — typically 75–90% (one by-product formed)<br/><strong>Multi-step syntheses</strong> — often 20–50% (waste accumulates at every step)<br/><br/>Industrial implication: always prefer the most direct route with fewest by-products. If by-products are unavoidable, consider whether they can be <em>sold</em> (e.g. CaCl₂ in the Solvay process) to offset losses.'
      },
      terms: []
    },
    {
      id: 'h-industrial',
      type: 'heading',
      data: { text: 'Evaluating Industrial Processes', level: 2 },
      terms: []
    },
    {
      id: 'table-industrial',
      type: 'comparisonTable',
      data: {
        caption: 'Factors Affecting Process Selection',
        headers: ['Factor', 'Consideration'],
        rows: [
          ['<strong>Rate of Reaction</strong>', 'How fast is the product made? Faster reactions are generally preferred.'],
          ['<strong>Percentage Yield</strong>', 'How much product is actually obtained? High yield reduces raw material waste.'],
          ['<strong>Atom Economy</strong>', 'How much by-product waste is produced? High atom economy means less waste to dispose of.'],
          ['<strong>Cost</strong>', 'Are raw materials expensive? Does the reaction require high energy (heating/pressure)?'],
          ['<strong>Environmental Impact</strong>', 'Are harmful waste products generated? Are significant greenhouse gases (e.g., CO₂) emitted directly or via energy production?']
        ]
      },
      terms: []
    },
    {
      id: 'callout-industrial-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Producing Copper Sulfate',
        text: 'Consider three methods to produce CuSO₄:<br/><br/><strong>Method 1: Cu + H₂SO₄ → CuSO₄ + H₂</strong><br/>Atom Economy = 98.8%.<br/><em>Problem:</em> Copper is too unreactive; this reaction does not actually happen.<br/><br/><strong>Method 2: CuO + H₂SO₄ → CuSO₄ + H₂O</strong><br/>Atom Economy = 89.9%.<br/><em>Problem:</em> Requires heating, which increases energy costs and CO₂ emissions from power stations.<br/><br/><strong>Method 3: CuCO₃ + H₂SO₄ → CuSO₄ + H₂O + CO₂</strong><br/>Atom Economy = 72.2%.<br/><em>Problem:</em> Lowest atom economy and produces CO₂ directly as a reaction by-product. However, the reaction is very fast at room temperature.<br/><br/><strong>Conclusion:</strong> There is no single "best" method. A manufacturer must weigh up rate, energy costs, raw material costs, and environmental impact when selecting a process.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'table-yield-defs', prompt: 'State the formula for percentage yield.' },
      { id: 'c-yield-warn', blockId: 'callout-yield-warning', prompt: 'Why is it incorrect to calculate percentage yield by dividing actual yield by the mass of the starting reactant?' },
      { id: 'c2', blockId: 'callout-yield-reasons', prompt: 'Give two specific reasons why the actual yield of a reaction might be lower than the theoretical yield.' },
      { id: 'c3', blockId: 'callout-atom-def', prompt: 'State the formula for atom economy and explain what a 100% value means.' },
      { id: 'c4', blockId: 'table-atom', prompt: 'Which type of reaction always has a 100% atom economy? Explain why.' },
      { id: 'c-ind', blockId: 'table-industrial', prompt: 'List five key factors that must be considered when evaluating the overall viability of an industrial process.' },
      { id: 'c-solvay', blockId: 'callout-solvay-combined', prompt: 'Starting from 75.0 kg CaCO₃: (a) calculate theoretical yield of Na₂CO₃, (b) find % yield if actual = 76.5 kg, (c) calculate atom economy. Equation: CaCO₃ + 2NaCl → Na₂CO₃ + CaCl₂.' },
      { id: 'c-ethene', blockId: 'table-ethene-routes', prompt: 'Two routes to 1,2-dichloroethane: Route 1 is addition (CH₂=CH₂ + Cl₂), Route 2 is oxychlorination (adds H₂O as by-product). Which has higher atom economy and why?' }
    ],
    summaryText: '% yield = (actual / theoretical) × 100. Theoretical yield is calculated via the 4-step method — never divide actual yield by starting mass. Yield < 100% due to reversible reactions, side-reactions, or purification losses. Atom economy = (Mᵣ desired product / ΣMᵣ all products) × 100. Addition = 100%. Substitution/elimination = 75–90%. Multi-step = often 20–50%. By-products can be sold to offset low atom economy. Solvay: 96.3% yield but 48.8% AE. Process selection balances Rate, Yield, Atom Economy, Cost, and Environmental impact.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_1_7;