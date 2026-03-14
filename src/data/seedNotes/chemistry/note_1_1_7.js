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
      id: 'eq-yield',
      type: 'equation',
      data: {
        html: '% yield = <span class="nb-frac"><span class="nb-num">actual yield</span><span class="nb-den">theoretical yield</span></span> × 100',
        caption: 'Actual and theoretical yield must be in the same units (g, kg or mol)'
      }
    },
    {
      id: 'callout-yield-reasons',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why is the actual yield less than theoretical?',
        text: '• The reaction is <strong>reversible</strong> — equilibrium may not favour the products, so the reaction does not go to completion.<br/>• <strong>Side-reactions</strong> consume starting material to form other (unwanted) by-products.<br/>• <strong>Purification steps</strong> (filtration, distillation, recrystallisation) always result in some product loss — e.g. product remains dissolved in the filtrate.<br/>• Product is <strong>lost during transfer</strong> between containers (e.g. left on the walls of glassware).<br/>• Reaction given <strong>insufficient time</strong> to reach completion.<br/><br/><em>Exam hint: Give a specific and contextual reason — always link to the reaction conditions or method described in the question.</em>'
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
      id: 'h-multistep',
      type: 'heading',
      data: { text: 'Multi-step Synthesis: Overall Yield', level: 2 }
    },
    {
      id: 'list-multistep',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'In a multi-step synthesis each individual step has its own percentage yield below 100%.',
          'The <strong>overall yield</strong> is calculated by multiplying the individual step yields together (expressed as decimals).',
          'As the number of steps increases the overall yield decreases dramatically — even if each individual step is efficient.',
          'Pharmaceutical synthesis often involves 10–20 steps, leading to very low overall yields (sometimes below 5%).',
          'This is a key reason why drugs produced by multi-step synthesis are expensive to manufacture.',
          'Maximising the yield of every step and minimising the number of steps are both important goals in synthetic chemistry.'
        ]
      }
    },
    {
      id: 'eq-multistep',
      type: 'equation',
      data: {
        html: 'Overall % yield = <span class="nb-frac"><span class="nb-num">% yield<sub>1</sub></span><span class="nb-den">100</span></span> × <span class="nb-frac"><span class="nb-num">% yield<sub>2</sub></span><span class="nb-den">100</span></span> × … × 100',
        caption: 'Multiply all individual step yields (as decimals) together then multiply by 100'
      }
    },
    {
      id: 'callout-multistep-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Multi-step Synthesis Overall Yield',
        text: '<strong>A pharmaceutical compound is synthesised in 3 steps with individual yields of 75%, 80% and 60%. Calculate the overall percentage yield.</strong><br/><br/>Overall % yield = (75/100) × (80/100) × (60/100) × 100<br/>= 0.75 × 0.80 × 0.60 × 100<br/>= <strong>36.0%</strong><br/><br/><em>Interpretation: Only 36% of the theoretical maximum product is obtained after all 3 steps — even though each individual step has a reasonable yield. This illustrates why multi-step pharmaceutical synthesis is costly and why reducing the number of steps is a key synthetic goal.</em>'
      }
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
      id: 'eq-atom-economy',
      type: 'equation',
      data: {
        html: '% atom economy = <span class="nb-frac"><span class="nb-num">M<sub>r</sub> of desired product</span><span class="nb-den">sum of M<sub>r</sub> of ALL products</span></span> × 100',
        caption: 'Use the molar mass (Mᵣ) values from the balanced equation — not the masses used in the reaction'
      }
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
      id: 'h-green',
      type: 'heading',
      data: { text: 'Green Chemistry and Sustainability', level: 2 }
    },
    {
      id: 'list-green',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Green chemistry</strong> aims to design chemical processes that reduce or eliminate hazardous substances and minimise waste at the source.',
          '<strong>Atom economy</strong> is a core green chemistry metric — a higher atom economy means fewer atoms are wasted as unwanted by-products.',
          'Less waste reduces costs for waste disposal and lowers environmental pollution (land, water, air).',
          'Industrial chemists prefer <strong>addition reactions</strong> wherever possible (100% atom economy) over substitution or elimination routes.',
          'If by-products cannot be avoided, processes are more sustainable if by-products have <strong>economic value</strong> — e.g. CaCl₂ sold as road de-icer in the Solvay process.',
          '<strong>Catalytic processes</strong> can improve atom economy by providing alternative reaction pathways with fewer, less harmful by-products.',
          'Reducing the number of synthetic steps lowers the overall waste generated and improves the overall yield.',
          'Using <strong>renewable feedstocks</strong> and lower-energy reaction conditions further improves the sustainability of a synthesis.'
        ]
      }
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
      { id: 'c-ethene', blockId: 'table-ethene-routes', prompt: 'Two routes to 1,2-dichloroethane: Route 1 is addition (CH₂=CH₂ + Cl₂), Route 2 is oxychlorination (adds H₂O as by-product). Which has higher atom economy and why?' },
      { id: 'c-multistep', blockId: 'callout-multistep-worked', prompt: 'A pharmaceutical compound is made in 3 steps with yields of 75%, 80% and 60%. Calculate the overall percentage yield.' },
      { id: 'c-green', blockId: 'list-green', prompt: 'Explain why a high atom economy is important for green chemistry and the sustainability of industrial processes.' }
    ],
    summaryText: '% yield = (actual / theoretical) × 100. Theoretical yield is calculated via the 4-step method — never divide actual yield by starting mass. Yield < 100% due to: reversible reactions, side-reactions, purification losses, product lost on transfer, or insufficient reaction time. Multi-step yield: multiply individual yields as decimals (e.g. 0.75 × 0.80 × 0.60 × 100 = 36%). Atom economy = (Mᵣ desired product / ΣMᵣ all products) × 100. Addition = 100%; Substitution/elimination = 75–90%; Multi-step = often 20–50%. Green chemistry: high atom economy = less waste = more sustainable. By-products can be sold to offset low atom economy. Solvay: 96.3% yield but 48.8% AE. Process selection balances Rate, Yield, Atom Economy, Cost, and Environmental impact.',
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_1_7;