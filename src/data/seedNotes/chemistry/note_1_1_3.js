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
      data: { text: 'Use chemical equations to calculate reacting masses using moles. Determine a formula or confirm an equation from experimental reacting masses.' },
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
        style: 'ordered',
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
      id: 'p-formula',
      type: 'paragraph',
      data: { text: 'If experimental masses are given, you can work backwards to find the mole ratio of the substances and therefore deduce the equation or formula of a compound.' },
      terms: []
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
        text: '<strong>Limiting reagent</strong>: the reactant that is <em>completely used up</em> first, which therefore determines the maximum amount of product. Any other reactants are present in <strong>excess</strong>.<br/><br/><strong>How to identify the limiting reagent:</strong><br/>1. Calculate the moles of each reactant from the data given.<br/>2. Find the mole ratio from the balanced equation.<br/>3. Determine which reactant would run out first by comparing what you <em>have</em> vs what you <em>need</em> from the ratio.'
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
        title: 'Worked Example: S + Cl₂ → SCl₂ (Mass of product)',
        text: '<strong>Equation:</strong> S(s) + Cl₂(g) → SCl₂(g)<br/><br/><strong>Given:</strong> 0.10 mol S and 0.394 mol Cl₂<br/><br/><strong>Step 1:</strong> Mole ratio S : Cl₂ = 1 : 4 (check balanced equation)<br/><strong>Step 2:</strong> To react all S, need: 4 × 0.10 = 0.40 mol Cl₂<br/>Available = 0.394 mol Cl₂ < 0.40 mol needed<br/>∴ <strong>Cl₂ is the limiting reagent</strong><br/><br/><strong>Mole ratio Cl₂ : SCl₂ = 1 : 1</strong><br/>n(SCl₂) = 0.394 mol<br/>m(SCl₂) = 0.394 × 135.2 = <strong>53.3 g</strong>'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'list-method', prompt: 'List the four steps for a reacting mass calculation.' },
      { id: 'c2', blockId: 'callout-w2', prompt: 'From the equation 2NH₃ + H₂SO₄ → (NH₄)₂SO₄, what is the mole ratio of NH₃ to (NH₄)₂SO₄?' },
      { id: 'c3', blockId: 'callout-w3', prompt: 'Explain how you would distinguish CuO from Cu₂O using reacting mass data.' },
      { id: 'c4', blockId: 'callout-limiting-def', prompt: 'Define the terms limiting reagent and excess reagent. How do you identify which reagent is limiting?' },
      { id: 'c5', blockId: 'callout-limiting-w1', prompt: '3.2 g of Cu reacts with 0.40 mol HNO₃. Equation: Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂. Which is the limiting reagent? Show your working.' }
    ],
    summaryText: '4-step method: (1) find M, (2) find n = m/M, (3) apply mole ratio, (4) m = n×M. Ratio comes from the coefficients in the balanced equation. Can also deduce equations by finding mole ratios from experimental masses. Limiting reagent = runs out first (check by comparing what you have vs what the ratio requires). Excess = more than needed.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_1_3;