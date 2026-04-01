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
      id: 'list-rate-intro',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'For a formal mathematical look at rates, the rate is usually measured by looking at how fast the <strong>concentration of one of the reactants is falling</strong>.',
          'Its standard units are <strong>mol dm⁻³ s⁻¹</strong> (moles per cubic decimetre per second).',
          '<em>Example:</em> If the concentration of A is falling at a rate of 0.0040 mol dm⁻³ s⁻¹, this means every second the concentration falls by 0.0040 moles per cubic decimetre.'
        ]
      },
      terms: ['Rate of reaction']
    },
    {
      id: 'h-equation',
      type: 'heading',
      data: { text: 'Orders of Reaction and Rate Equations', level: 2 },
      terms: []
    },
    {
      id: 'callout-experimental',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Crucial Rule: Experimental Only',
        text: 'Orders of reaction are <strong>always found by doing experiments</strong>. You <em>cannot</em> deduce anything about the order of a reaction just by looking at the stoichiometric equation for the reaction.'
      },
      terms: []
    },
    {
      id: 'list-orders',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>First Order:</strong> The rate is <em>proportional</em> to the concentration. If you double [A], the rate doubles. If you quadruple [A], the rate goes up 4 times. Mathematically: Rate ∝ [A]¹',
          '<strong>Second Order:</strong> The rate is proportional to the <em>square</em> of the concentration. If you double [A], the rate goes up 4 times (2²). If you triple [A], the rate increases 9 times (3²). Mathematically: Rate ∝ [A]²',
          '<strong>Zero Order:</strong> The concentration does not affect the rate of reaction. Mathematically, [A]⁰ = 1, so the term mathematically disappears from the rate equation.'
        ]
      },
      terms: ['Zero order', 'First order', 'Second order']
    },
    {
      id: 'eq-rate',
      type: 'equation',
      data: {
        html: 'Rate = k[A]<sup>a</sup>[B]<sup>b</sup>',
        caption: 'The general rate equation, where a and b are the orders of reaction.'
      },
      terms: []
    },
    {
      id: 'callout-constant',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'The Rate Constant (k)',
        text: 'The rate constant is the proportionality constant ($k$) in the rate equation. Surprisingly, the rate constant isn\'t actually a true constant! It is only constant for a given reaction if you are <em>only</em> changing the concentration.<br/><br/>The value of $k$ <strong>varies if you change the temperature or if you add/change a catalyst</strong>.'
      },
      terms: ['Rate constant']
    },
    {
      id: 'h-overall-order',
      type: 'heading',
      data: { text: 'Overall Order of Reaction', level: 2 },
      terms: []
    },
    {
      id: 'list-overall-order',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'The <strong>overall order of the reaction</strong> is found by adding up the individual orders.',
          '<em>Example 1:</em> Rate = k[A][B]. First order with respect to A and B. Overall order = 1 + 1 = <strong>2</strong>.',
          '<em>Example 2:</em> Rate = k[A]⁰[B]². Zero order with respect to A, second order with respect to B. Overall order = 0 + 2 = <strong>2</strong>.',
          '<em>Example 3:</em> Rate = k[A]¹[B]⁰. First order w.r.t A, zero order w.r.t B. Overall order = 1 + 0 = <strong>1</strong>.'
        ]
      },
      terms: ['Overall order']
    },
    // ── DEDUCING FROM EXPERIMENTAL DATA ───────────────────────────────────────
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
        svg: '<svg viewBox="0 0 540 185" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif"><defs><marker id="arr0" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#374151"/></marker></defs><rect x="0" y="0" width="540" height="185" rx="8" fill="#1c3a64" stroke="#c7d2fe" stroke-width="1"/><text x="270" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Rate vs Concentration Graphs (Diagnostic Shapes)</text><g transform="translate(20,28)"><text x="77" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">Zero Order</text><line x1="30" y1="132" x2="30" y2="22" stroke="#374151" stroke-width="1.5" marker-end="url(#arr0)"/><line x1="30" y1="132" x2="148" y2="132" stroke="#374151" stroke-width="1.5" marker-end="url(#arr0)"/><text x="89" y="150" text-anchor="middle" font-size="10" fill="#64748b">[A]</text><text x="13" y="80" text-anchor="middle" font-size="10" fill="#64748b" transform="rotate(-90,13,80)">Rate</text><line x1="35" y1="78" x2="143" y2="78" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/><text x="89" y="71" text-anchor="middle" font-size="10" fill="#2563eb">Rate = k</text><text x="89" y="116" text-anchor="middle" font-size="9" fill="#94a3b8">horizontal line</text></g><g transform="translate(195,28)"><text x="77" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#059669">First Order</text><line x1="30" y1="132" x2="30" y2="22" stroke="#374151" stroke-width="1.5" marker-end="url(#arr0)"/><line x1="30" y1="132" x2="148" y2="132" stroke="#374151" stroke-width="1.5" marker-end="url(#arr0)"/><text x="89" y="150" text-anchor="middle" font-size="10" fill="#64748b">[A]</text><text x="13" y="80" text-anchor="middle" font-size="10" fill="#64748b" transform="rotate(-90,13,80)">Rate</text><line x1="35" y1="128" x2="143" y2="28" stroke="#059669" stroke-width="2.5" stroke-linecap="round"/><text x="95" y="60" text-anchor="middle" font-size="10" fill="#059669">Rate = k[A]</text><text x="89" y="130" text-anchor="middle" font-size="9" fill="#94a3b8">straight line</text></g><g transform="translate(370,28)"><text x="77" y="14" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Second Order</text><line x1="30" y1="132" x2="30" y2="22" stroke="#374151" stroke-width="1.5" marker-end="url(#arr0)"/><line x1="30" y1="132" x2="148" y2="132" stroke="#374151" stroke-width="1.5" marker-end="url(#arr0)"/><text x="89" y="150" text-anchor="middle" font-size="10" fill="#64748b">[A]</text><text x="13" y="80" text-anchor="middle" font-size="10" fill="#64748b" transform="rotate(-90,13,80)">Rate</text><path d="M35,128 C60,125 85,108 105,80 C118,62 128,44 143,25" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/><text x="78" y="82" text-anchor="middle" font-size="10" fill="#dc2626">Rate = k[A]²</text><text x="89" y="130" text-anchor="middle" font-size="9" fill="#94a3b8">upward curve</text></g></svg>',
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
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Exam Trap: Orders Are ALWAYS Experimental",
        text: "You CANNOT deduce the order of reaction from the stoichiometric equation. You must do experiments. Students often make the mistake of assuming order = stoichiometric coefficient (e.g., 2A + B \u2192 products is NOT necessarily second order w.r.t. A)."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "The Factor Test Rule",
        text: "Memorize: if [concentration] increases by factor x and rate increases by factor x^n, then order = n. Example: triple [A], rate becomes 9 times faster \u2192 9 = 3\u00b2 \u2192 order = 2."
      }
    }
  ],
  // ── RECALL CUES ────────────────────────────────────────────────────────
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-rate-intro',
        prompt: 'Define the rate of a chemical reaction and state its standard units.'
      },
      {
        id: 'cue-2',
        blockId: 'callout-experimental',
        prompt: 'True or False: The order of a reaction can be deduced from the molar ratios in the balanced chemical equation.'
      },
      {
        id: 'cue-3',
        blockId: 'list-orders',
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
