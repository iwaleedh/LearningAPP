/**
 * Seed note: Chemistry · Unit 4 · Topic 11 · Subtopic 0
 * "Rate equations and order"
 */

export const note_chemistry_4_11_0 = {
  blocks: [
    {
      id: 'objective-block',
      type: 'objective',
      data: {
        text: 'Define the rate of a reaction, the rate equation, the rate constant (k), and the order of a reaction with respect to a given reactant.'
      },
      terms: []
    },
    // ── RATE DEFINITION ────────────────────────────────────────────────────
    {
      id: 'h-rate',
      type: 'heading',
      data: { text: 'What is the Rate of a Reaction?', level: 2 },
      terms: []
    },
    {
      id: 'callout-rate',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Rate of Reaction',
        text: 'The rate of a chemical reaction is defined as the <strong>change in concentration</strong> of a reactant or product per <strong>unit time</strong>. <br/><br/>The standard units for rate of reaction are <strong>mol dm⁻³ s⁻¹</strong>.'
      },
      terms: ['Rate of reaction']
    },
    {
      id: 'p-rate-intro',
      type: 'paragraph',
      data: {
        text: 'In Unit 2, you learned that increasing the concentration of reactants generally increases the rate of reaction. However, not all reactants affect the rate equally! To quantify exactly how much the concentration of a specific reactant affects the rate, we use <strong>Rate Equations</strong>.'
      },
      terms: []
    },
    // ── RATE EQUATIONS ─────────────────────────────────────────────────────
    {
      id: 'h-equation',
      type: 'heading',
      data: { text: 'The Rate Equation', level: 2 },
      terms: []
    },
    {
      id: 'p-equation-intro',
      type: 'paragraph',
      data: {
        text: 'For a general reaction: <strong>A + B → Products</strong><br/>The rate equation takes the form:'
      },
      terms: []
    },
    {
      id: 'eq-rate',
      type: 'equation',
      data: {
        html: 'Rate = k[A]^m[B]^n',
        caption: 'The general rate equation. The square brackets [ ] denote concentration in mol dm⁻³.'
      },
      terms: []
    },
    {
      id: 'list-terms',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>k</strong> = The Rate Constant. This is a constant value for a specific reaction at a specific temperature. (Changing the temperature changes k!).',
          '<strong>m</strong> = The order of the reaction with respect to reactant A.',
          '<strong>n</strong> = The order of the reaction with respect to reactant B.'
        ]
      },
      terms: ['Rate constant', 'Order of reaction']
    },
    {
      id: 'warning-stoichiometry',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Critical Exam Rule: NEVER use the stoichiometric equation!',
        text: 'The orders of reaction (m and n) <strong>CANNOT</strong> be deduced from the balanced chemical equation! For example, if the equation is 2H₂ + O₂ → 2H₂O, the order with respect to H₂ is not necessarily 2. <br/><br/><strong>Orders of reaction can ONLY be determined by experiment!</strong>'
      },
      terms: []
    },
    // ── ORDERS OF REACTION ─────────────────────────────────────────────────
    {
      id: 'h-orders',
      type: 'heading',
      data: { text: 'Orders of Reaction', level: 2 },
      terms: []
    },
    {
      id: 'table-orders',
      type: 'comparisonTable',
      data: {
        caption: 'The effect of reactant concentration on reaction rate',
        headers: ['Order', 'Mathematical Meaning', 'Effect of Doubling Concentration [A]'],
        rows: [
          ['Zero Order (0)', 'Rate ∝ [A]⁰', 'Rate = k × (1). The rate is <strong>unaffected</strong>. Doubling [A] does nothing to the rate.'],
          ['First Order (1)', 'Rate ∝ [A]¹', 'Rate = k × [A]. The rate is <strong>directly proportional</strong>. Doubling [A] doubles the rate (×2).'],
          ['Second Order (2)', 'Rate ∝ [A]²', 'Rate = k × [A]². The rate is proportional to the square. Doubling [A] quadruples the rate (×4).']
        ]
      },
      terms: ['Zero order', 'First order', 'Second order']
    },
    {
      id: 'bloom-overall',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Overall Order',
        text: 'The <strong>overall order of reaction</strong> is simply the sum of the individual orders.<br/><br/>If Rate = k[A]²[B]¹<br/>The reaction is second order with respect to A, first order with respect to B, and the <strong>overall order is 3</strong> (2 + 1).'
      },
      terms: ['Overall order']
    }
  ],
  // ── RECALL CUES ────────────────────────────────────────────────────────
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-rate',
        prompt: 'Define the rate of a chemical reaction and state its standard units.'
      },
      {
        id: 'cue-2',
        blockId: 'list-terms',
        prompt: 'In the rate equation Rate = k[A]^m[B]^n, what does "k" represent, and what is the only factor that alters its value?'
      },
      {
        id: 'cue-3',
        blockId: 'warning-stoichiometry',
        prompt: 'True or False: The order of a reaction can be deduced by looking at the molar ratios in the balanced chemical equation.'
      },
      {
        id: 'cue-4',
        blockId: 'table-orders',
        prompt: 'A reaction is second order with respect to reactant X. If the concentration of [X] is tripled, what happens to the rate of the reaction?'
      }
    ],
    summaryText: 'Rate is the change in concentration per unit time (mol dm⁻³ s⁻¹). The Rate Equation (Rate = k[A]^m[B]^n) links rate to concentrations experimentally. Orders (0, 1, or 2) dictate how concentration changes affect the rate, and CANNOT be found using the balanced equation.',
    ready: false
  },
  evidence: []
};

export default note_chemistry_4_11_0;
