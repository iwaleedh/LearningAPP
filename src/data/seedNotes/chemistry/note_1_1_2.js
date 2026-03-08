/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 2
 * "Full and ionic equation balancing"
 * Source: Pearson Edexcel IAL Chemistry Student Book — Sections 1B.1
 */
export const note_chemistry_1_1_2 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Write balanced full, ionic and half equations including state symbols. Use correct arrow types. Know the four common lab acids and their formulae. Write equations for acid reactions with metals, metal oxides, metal hydroxides, alkalis, carbonates and hydrogencarbonates.' },
      terms: []
    },
    {
      id: 'h-lab-acids',
      type: 'heading',
      data: { text: 'The Four Common Lab Acids', level: 2 },
      terms: []
    },
    {
      id: 'table-lab-acids',
      type: 'comparisonTable',
      data: {
        caption: 'You must know these four acids — their names, formulae and uses throughout the course',
        headers: ['Acid Name', 'Formula', 'Notes'],
        rows: [
          ['Hydrochloric acid', 'HCl', 'Strong acid; used in many displacement and neutralisation reactions'],
          ['Sulfuric acid', 'H₂SO₄', 'Strong diprotic acid; used as a reagent and sometimes as a catalyst'],
          ['Nitric acid', 'HNO₃', 'Strong acid; forms nitrate salts in reactions'],
          ['Phosphoric acid', 'H₃PO₄', 'Weak acid; forms phosphate salts; appears in biochemistry contexts']
        ]
      },
      terms: ['Hydrochloric acid', 'Sulfuric acid', 'Nitric acid', 'Phosphoric acid']
    },
    {
      id: 'callout-acid-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Acid Formulae',
        text: 'These four acids appear throughout the A-Level course as reagents, catalysts and sources of ions. You must memorise their names and formulae. Hydrochloric (HCl), Sulfuric (H₂SO₄), Nitric (HNO₃), Phosphoric (H₃PO₄).'
      },
      terms: []
    },
    {
      id: 'h-acid-reactions',
      type: 'heading',
      data: { text: 'Types of Acid Reactions — General Rules', level: 2 },
      terms: []
    },
    {
      id: 'table-acid-reactions',
      type: 'comparisonTable',
      data: {
        caption: 'Reaction patterns for acids with different types of bases',
        headers: ['Acid reacts with…', 'Products', 'Example', 'Key test/observation'],
        rows: [
          ['Metal', 'Salt + Hydrogen gas (H₂)', 'Mg + 2HCl → MgCl₂ + H₂', 'H₂ burns with a squeaky pop'],
          ['Metal oxide', 'Salt + Water', 'CuO + H₂SO₄ → CuSO₄ + H₂O', 'Black solid (CuO) dissolves; blue solution forms'],
          ['Metal hydroxide (insoluble)', 'Salt + Water', 'Zn(OH)₂(s) + H₂SO₄(aq) → ZnSO₄(aq) + 2H₂O(l)', 'White solid dissolves; solution is colourless'],
          ['Alkali (soluble hydroxide)', 'Salt + Water', 'NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)', 'No visible change; temperature rises'],
          ['Metal carbonate', 'Salt + Water + Carbon dioxide (CO₂)', 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂', 'Effervescence; CO₂ turns limewater cloudy'],
          ['Metal hydrogencarbonate', 'Salt + Water + Carbon dioxide (CO₂)', 'NaHCO₃ + HCl → NaCl + H₂O + CO₂', 'Effervescence; CO₂ turns limewater cloudy']
        ]
      },
      terms: ['Neutralisation', 'Effervescence']
    },
    {
      id: 'callout-carbonate-hco3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Carbonate vs Hydrogencarbonate',
        text: 'The carbonate ion is CO₃²⁻ (charge −2). The hydrogencarbonate ion is HCO₃⁻ (charge −1). Both react with acids to give the same products (salt + water + CO₂) but with different stoichiometry:<br/><br/>CO₃²⁻(aq) + 2H⁺(aq) → H₂O(l) + CO₂(g)<br/>HCO₃⁻(aq) + H⁺(aq) → H₂O(l) + CO₂(g)'
      },
      terms: ['Carbonate', 'Hydrogencarbonate']
    },
    {
      id: 'h-state',
      type: 'heading',
      data: { text: 'State Symbols', level: 2 },
      terms: []
    },
    {
      id: 'table-states',
      type: 'comparisonTable',
      data: {
        caption: 'State symbols used in chemical equations',
        headers: ['Symbol', 'Meaning'],
        rows: [
          ['(s)', 'solid'],
          ['(l)', 'liquid'],
          ['(g)', 'gas'],
          ['(aq)', 'aqueous — dissolved in water']
        ]
      },
      terms: []
    },
    {
      id: 'callout-state-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake: (l) vs (aq)',
        text: 'A common error is to write H₂O(aq) instead of H₂O(l). Water is (l) unless specifically dissolved in another medium. Also note (g) must be used after atoms and ions when writing ionisation energy equations.'
      },
      terms: []
    },
    {
      id: 'h-balancing',
      type: 'heading',
      data: { text: 'Balancing Equations', level: 2 },
      terms: []
    },
    {
      id: 'p-balancing',
      type: 'paragraph',
      data: { text: 'Most equations are balanced using whole-number <strong>coefficients</strong>. Fractions or decimals are also acceptable, especially in organic chemistry. Remember: the number of atoms of each element and the total charge must be the same on both sides.' },
      terms: ['Coefficient']
    },
    {
      id: 'callout-balance-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Balancing H₂O₂ decomposition',
        text: 'Description: hydrogen peroxide decomposes to water and oxygen.<br/><br/>First attempt (unbalanced):<br/>H₂O₂ → H₂O + O₂<br/><br/>Check: 2 H on each side ✓ but O: 2 left, 3 right ✗<br/><br/>Balanced:<br/><strong>2H₂O₂ → 2H₂O + O₂</strong>'
      },
      terms: []
    },
    {
      id: 'h-ionic',
      type: 'heading',
      data: { text: 'Writing Ionic Equations', level: 2 },
      terms: []
    },
    {
      id: 'p-ionic',
      type: 'paragraph',
      data: { text: 'Ionic equations show only the species that change — <strong>spectator ions</strong> (those present on both sides unchanged) are cancelled out.' },
      terms: ['Spectator ion', 'Ionic equation']
    },
    {
      id: 'list-ionic-steps',
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          'Write the full balanced equation with state symbols.',
          'Replace formulae of any soluble ionic compounds with their separate ions.',
          'Delete (cancel) any ions that appear identically on both sides (spectator ions).',
          'What remains is the simplest ionic equation.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-ionic-w1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1: Neutralisation of NaOH by HNO₃',
        text: 'Full: NaOH(aq) + HNO₃(aq) → NaNO₃(aq) + H₂O(l)<br/><br/>Expanded: Na⁺(aq) + OH⁻(aq) + H⁺(aq) + NO₃⁻(aq) → Na⁺(aq) + NO₃⁻(aq) + H₂O(l)<br/><br/>Cancel spectators (Na⁺ and NO₃⁻):<br/><strong>H⁺(aq) + OH⁻(aq) → H₂O(l)</strong>'
      },
      terms: []
    },
    {
      id: 'callout-ionic-w2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2: Precipitation of lead(II) sulfate',
        text: 'Full: Pb(NO₃)₂(aq) + Na₂SO₄(aq) → PbSO₄(s) + 2NaNO₃(aq)<br/><br/>Expanded: Pb²⁺(aq) + 2NO₃⁻(aq) + 2Na⁺(aq) + SO₄²⁻(aq) → PbSO₄(s) + 2Na⁺(aq) + 2NO₃⁻(aq)<br/><br/>Cancel spectators (Na⁺ and NO₃⁻):<br/><strong>Pb²⁺(aq) + SO₄²⁻(aq) → PbSO₄(s)</strong>'
      },
      terms: []
    },
    {
      id: 'callout-ionic-w3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3: CO₂ + Ca(OH)₂ (no spectators)',
        text: 'Full: CO₂(g) + Ca(OH)₂(aq) → CaCO₃(s) + H₂O(l)<br/><br/>Expanded: CO₂(g) + Ca²⁺(aq) + 2OH⁻(aq) → CaCO₃(s) + H₂O(l)<br/><br/>No ions appear identically on both sides, so this <strong>IS already the simplest ionic equation</strong>.<br/>(CO₂ and H₂O are molecules, not ions — their formulae are not split.)'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'table-states', prompt: 'What do the state symbols (s), (l), (g) and (aq) mean?' },
      { id: 'c2', blockId: 'list-ionic-steps', prompt: 'Describe the three steps for deriving a simplest ionic equation from a full equation.' },
      { id: 'c3', blockId: 'callout-ionic-w2', prompt: 'Write the simplest ionic equation for: Pb(NO₃)₂(aq) + Na₂SO₄(aq) → PbSO₄(s) + 2NaNO₃(aq).' },
      { id: 'c4', blockId: 'callout-state-warning', prompt: 'A student writes H₂O(aq) in an equation. Explain the error.' },
      { id: 'c5', blockId: 'table-lab-acids', prompt: 'State the names and formulae of the four common lab acids.' },
      { id: 'c6', blockId: 'table-acid-reactions', prompt: 'What products form when an acid reacts with (a) a metal, (b) a carbonate?' },
      { id: 'c7', blockId: 'callout-carbonate-hco3', prompt: 'Write the ionic equations for carbonate and hydrogencarbonate reacting with acid. What is the key difference?' }
    ],
    summaryText: 'Four lab acids: HCl, H₂SO₄, HNO₃, H₃PO₄. Acid+Metal → salt+H₂ (squeaky pop). Acid+Metal oxide/hydroxide → salt+H₂O. Acid+Alkali → salt+H₂O (ionic: H⁺+OH⁻→H₂O). Acid+Carbonate/HCO₃⁻ → salt+H₂O+CO₂ (turns limewater cloudy). State symbols: (s) solid, (l) liquid, (g) gas, (aq) aqueous. Balance equations with coefficients. Ionic equations: expand ionic compounds, then cancel spectator ions (those on both sides unchanged). Molecules like CO₂ and H₂O are NOT split into ions.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_1_2;