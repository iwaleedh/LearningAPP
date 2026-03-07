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
    },
    // ── DEDUCING FROM EXPERIMENTAL DATA ───────────────────────────────────
    {
      id: 'h-deduce',
      type: 'heading',
      data: { text: 'Deducing the Rate Equation from Experimental Data', level: 2 },
      terms: []
    },
    {
      id: 'p-deduce',
      type: 'paragraph',
      data: {
        text: 'In an exam, you will be given a table of experimental "initial rate" results. To deduce the orders, compare two experiments where <strong>only one concentration changes</strong> at a time — this isolates the effect of that single reactant.'
      },
      terms: []
    },
    {
      id: 'table-exp-data',
      type: 'comparisonTable',
      data: {
        caption: 'Sample experimental data for: A + B → Products',
        headers: ['Experiment', '[A] / mol dm⁻³', '[B] / mol dm⁻³', 'Initial Rate / mol dm⁻³ s⁻¹'],
        rows: [
          ['1', '0.10', '0.10', '2.0 × 10⁻³'],
          ['2', '0.20', '0.10', '4.0 × 10⁻³'],
          ['3', '0.20', '0.30', '3.6 × 10⁻²']
        ]
      },
      terms: []
    },
    {
      id: 'callout-deduce-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Deducing the Full Rate Equation',
        text: '<strong>Step 1 — Order w.r.t. A</strong> (compare Exp 1 & 2: [B] is kept constant)<br/>• [A] doubles: 0.10 → 0.20 (factor of ×2)<br/>• Rate doubles: 2.0 × 10⁻³ → 4.0 × 10⁻³ (factor of ×2)<br/>• 2 = 2<sup>m</sup> → m = 1 → <strong>First order w.r.t. A</strong><br/><br/><strong>Step 2 — Order w.r.t. B</strong> (compare Exp 2 & 3: [A] is kept constant)<br/>• [B] triples: 0.10 → 0.30 (factor of ×3)<br/>• Rate × 9: 4.0 × 10⁻³ → 3.6 × 10⁻² (factor of ×9)<br/>• 9 = 3<sup>n</sup> → n = 2 → <strong>Second order w.r.t. B</strong><br/><br/><strong>Result: Rate = k[A]¹[B]²</strong><br/>Overall order = 1 + 2 = <strong>3rd order overall</strong>'
      },
      terms: []
    },
    {
      id: 'tip-factor-test',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: The "Factor Test" Rule',
        text: 'If concentration increases by factor <strong>x</strong> and rate increases by factor <strong>x<sup>n</sup></strong>, the order is <strong>n</strong>.<br/><br/>• [A] × 2, rate × 2 = 2¹ → 1st order<br/>• [A] × 3, rate × 9 = 3² → 2nd order<br/>• [A] × 4, rate × 1 = 4⁰ → 0th order<br/>• [A] × 2, rate × 8 = 2³ → 3rd order'
      },
      terms: []
    },
    {
      id: 'svg-rate-graphs',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 540 185" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif"><defs><marker id="arr0" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#374151"/></marker></defs><rect x="0" y="0" width="540" height="185" rx="8" fill="#f0f4ff" stroke="#c7d2fe" stroke-width="1"/><text x="270" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Rate vs Concentration Graphs (Diagnostic Shapes)</text><g transform="translate(20,28)"><text x="77" y="14" text-anchor="middle" font-size="11" font-weight="bold" fill="#4f46e5">Zero Order</text><line x1="30" y1="132" x2="30" y2="22" stroke="#374151" stroke-width="1.5" marker-end="url(#arr0)"/><line x1="30" y1="132" x2="148" y2="132" stroke="#374151" stroke-width="1.5" marker-end="url(#arr0)"/><text x="89" y="150" text-anchor="middle" font-size="10" fill="#64748b">[A]</text><text x="13" y="80" text-anchor="middle" font-size="10" fill="#64748b" transform="rotate(-90,13,80)">Rate</text><line x1="35" y1="78" x2="143" y2="78" stroke="#4f46e5" stroke-width="2.5" stroke-linecap="round"/><text x="89" y="57" text-anchor="middle" font-size="10" fill="#4f46e5">Rate = k</text><text x="89" y="116" text-anchor="middle" font-size="9" fill="#94a3b8">horizontal line</text></g><g transform="translate(195,28)"><text x="77" y="14" text-anchor="middle" font-size="11" font-weight="bold" fill="#059669">First Order</text><line x1="30" y1="132" x2="30" y2="22" stroke="#374151" stroke-width="1.5" marker-end="url(#arr0)"/><line x1="30" y1="132" x2="148" y2="132" stroke="#374151" stroke-width="1.5" marker-end="url(#arr0)"/><text x="89" y="150" text-anchor="middle" font-size="10" fill="#64748b">[A]</text><text x="13" y="80" text-anchor="middle" font-size="10" fill="#64748b" transform="rotate(-90,13,80)">Rate</text><line x1="35" y1="128" x2="143" y2="28" stroke="#059669" stroke-width="2.5" stroke-linecap="round"/><text x="95" y="60" text-anchor="middle" font-size="10" fill="#059669">Rate = k[A]</text><text x="89" y="116" text-anchor="middle" font-size="9" fill="#94a3b8">straight line</text></g><g transform="translate(370,28)"><text x="77" y="14" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Second Order</text><line x1="30" y1="132" x2="30" y2="22" stroke="#374151" stroke-width="1.5" marker-end="url(#arr0)"/><line x1="30" y1="132" x2="148" y2="132" stroke="#374151" stroke-width="1.5" marker-end="url(#arr0)"/><text x="89" y="150" text-anchor="middle" font-size="10" fill="#64748b">[A]</text><text x="13" y="80" text-anchor="middle" font-size="10" fill="#64748b" transform="rotate(-90,13,80)">Rate</text><path d="M35,128 C60,125 85,108 105,80 C118,62 128,44 143,25" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/><text x="78" y="82" text-anchor="middle" font-size="10" fill="#dc2626">Rate = k[A]²</text><text x="89" y="116" text-anchor="middle" font-size="9" fill="#94a3b8">upward curve</text></g></svg>',
        caption: 'Rate vs Concentration graph shapes for each order. Zero order = flat line; First order = straight line through origin; Second order = upward-curving parabola through origin.'
      },
      terms: []
    },
    {
      id: 'checklist-final',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can define rate of reaction and state its units (mol dm⁻³ s⁻¹)', checked: false },
          { text: 'I can write a rate equation and identify k, m, n', checked: false },
          { text: 'I know orders CANNOT be read from the balanced equation — experiment only', checked: false },
          { text: 'I can predict rate changes when concentration is doubled/tripled for each order', checked: false },
          { text: 'I can deduce orders by comparing two experiments in a data table', checked: false },
          { text: 'I can identify the shape of Rate vs [Conc] graphs for 0th, 1st, 2nd order', checked: false }
        ]
      },
      terms: []
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
        blockId: 'warning-stoichiometry',
        prompt: 'True or False: The order of a reaction can be deduced from the molar ratios in the balanced chemical equation.'
      },
      {
        id: 'cue-3',
        blockId: 'table-orders',
        prompt: 'A reaction is second order with respect to reactant X. If [X] is tripled, by what factor does the rate change?'
      },
      {
        id: 'cue-4',
        blockId: 'callout-deduce-worked',
        prompt: 'In a data table, [A] doubles while [B] stays constant and the rate increases 4-fold. What is the order with respect to A? Show your reasoning.'
      },
      {
        id: 'cue-5',
        blockId: 'svg-rate-graphs',
        prompt: 'Describe the shape of a Rate vs [A] graph for (a) zero order and (b) second order reactions.'
      }
    ],
    summaryText: 'Rate is the change in concentration per unit time (mol dm⁻³ s⁻¹). The Rate Equation (Rate = k[A]ᵐ[B]ⁿ) links rate to concentrations — orders can ONLY be determined by experiment. Zero order: Rate vs [A] is flat. First order: straight line. Second order: upward curve. To deduce orders from a table, compare experiments where only one concentration changes and apply the factor test.',
    ready: false
  },
  evidence: []
};

export default note_chemistry_4_11_0;
