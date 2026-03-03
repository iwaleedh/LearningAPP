/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 2
 * "Full and ionic equation balancing"
 * Source: wch11-1.pdf — Spec refs: 1.3
 */

export const note_chemistry_1_1_2 = {
  blocks: [{
    id: 'objective-block',
    type: 'objective',
    data: {
      text: 'Write balanced full and ionic equations, including state symbols, for chemical reactions; identify spectator ions; write net ionic equations.'
    },
    terms: []
  },
  // ── CHEMICAL EQUATIONS ────────────────────────────────────────────────
  {
    id: 'h-eqs',
    type: 'heading',
    data: {
      text: 'Chemical Equations',
      level: 2
    },
    terms: []
  }, {
    id: 'p-eqs',
    type: "list",
    data: {
      style: "unordered",
      items: ["A chemical equation shows the formulae of the reactants and products, the physical state of each substance (state symbols), and the stoichiometric relationship between amounts involved.", "Equations can be molecular (full) or ionic."]
    },
    terms: []
  }, {
    id: 'table-states',
    type: 'comparisonTable',
    data: {
      caption: 'State symbols used in chemical equations',
      headers: ['Symbol', 'State', 'Meaning'],
      rows: [['(s)', 'Solid', 'Exists as a solid or crystalline substance'], ['(l)', 'Liquid', 'Exists as a pure liquid (e.g. H₂O(l))'], ['(g)', 'Gas', 'Exists as a gas or vapour'], ['(aq)', 'Aqueous', 'Dissolved in water (ions or molecules in solution)']]
    },
    terms: []
  },
  // ── BALANCING MOLECULAR EQUATIONS ─────────────────────────────────────
  {
    id: 'h-balancing',
    type: 'heading',
    data: {
      text: 'Balancing Molecular Equations',
      level: 2
    },
    terms: []
  }, {
    id: 'p-balancing',
    type: "list",
    data: {
      style: "unordered",
      items: ["A balanced equation must have: (1) the same number of each type of atom on both sides (Law of Conservation of Mass), and (2) a net charge of zero on both sides.", "Only add whole-number coefficients in front of formulae \u2014 never change the subscripts within a formula."]
    },
    terms: []
  }, {
    id: 'keybox-steps',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key Steps for Balancing Equations',
      text: '1. Write a word equation for the reaction.\n2. Write correct chemical formulae with state symbols — do NOT alter formulae to balance.\n3. Count atoms of each element on both sides.\n4. Add whole-number coefficients in front of formulae until atoms balance.\n5. Check the final equation — count every atom again.'
    },
    terms: []
  },
  // Step-by-step animated worked example: Na + H₂O
  {
    id: 'h-we-na',
    type: 'heading',
    data: {
      text: 'Worked Example: Na + H₂O',
      level: 3
    },
    terms: []
  }, {
    id: 'svg-balance-anim',
    type: 'svg',
    data: {
      caption: 'Step-by-step balancing of sodium + water (animated)',
      svg: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Step by step balancing of sodium reacting with water">
  <style>
    .step { font-family: monospace; font-size: 13px; }
    .lbl  { font-size: 11px; fill: #6b7280; }
    .ok   { fill: #16a34a; font-weight: bold; }
    .bad  { fill: #dc2626; font-weight: bold; }
    .fix  { fill: #2563eb; font-weight: bold; }
    rect.card { fill: #f9fafb; stroke: #e5e7eb; stroke-width: 1.5; rx: 8; }
  </style>

  <!-- Step 1 -->
  <rect x="10" y="10" width="660" height="50" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="20" y="28" class="lbl">Step 1 — Unbalanced:</text>
  <text x="20" y="48" class="step" fill="#111">Na(s)  +  H₂O(l)  →  NaOH(aq)  +  H₂(g)</text>

  <!-- Step 2: count -->
  <rect x="10" y="70" width="660" height="56" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
  <text x="20" y="88" class="lbl">Step 2 — Count atoms: LHS: 1 Na · 2 H · 1 O   |   RHS: 1 Na · 3 H · 1 O</text>
  <text x="20" y="108" class="step"><tspan class="bad">✗ Not balanced</tspan> — need extra H on LHS. Multiply H₂O by 2:</text>

  <!-- Step 3 -->
  <rect x="10" y="136" width="660" height="50" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
  <text x="20" y="153" class="lbl">Step 3 — Try ×2 on H₂O:</text>
  <text x="20" y="172" class="step" fill="#111">Na(s)  +  <tspan class="fix">2</tspan>H₂O(l)  →  NaOH(aq)  +  H₂(g)</text>

  <!-- Step 4 -->
  <rect x="10" y="196" width="660" height="56" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
  <text x="20" y="214" class="lbl">Step 4 — Now O is unbalanced (2 LHS, 1 RHS). Multiply NaOH by 2 → introduces extra Na:</text>
  <text x="20" y="234" class="step" fill="#111"><tspan class="fix">2</tspan>Na(s)  +  <tspan class="fix">2</tspan>H₂O(l)  →  <tspan class="fix">2</tspan>NaOH(aq)  +  H₂(g)</text>

  <!-- Step 5 check -->
  <rect x="10" y="262" width="660" height="34" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="20" y="278" class="lbl">Step 5 — Check: LHS: 2 Na · 4 H · 2 O   RHS: 2 Na · 4 H · 2 O  <tspan class="ok">✓ Balanced!</tspan></text>
</svg>`
    },
    terms: []
  },
  // Naming ions
  {
    id: 'h-naming',
    type: 'heading',
    data: {
      text: 'Naming Polyatomic Ions',
      level: 3
    },
    terms: []
  }, {
    id: 'keybox-naming',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key Idea — "ite" vs "ate" Suffixes',
      text: '"ate" ion = more oxygen (e.g. SO₄²⁻ sulfate, NO₃⁻ nitrate)\n"ite" ion = one fewer oxygen (e.g. SO₃²⁻ sulfite, NO₂⁻ nitrite)'
    },
    terms: []
  },
  // ── IONIC EQUATIONS ───────────────────────────────────────────────────
  {
    id: 'h-ionic',
    type: 'heading',
    data: {
      text: 'Ionic Equations',
      level: 2
    },
    terms: []
  }, {
    id: 'p-ionic',
    type: "list",
    data: {
      style: "unordered",
      items: ["Many reactions involve ions in solution.", "An ionic equation shows only the species that actually take part in the reaction.", "To write an ionic equation: (1) balance the full molecular equation, (2) split all aqueous ionic compounds into their constituent ions, (3) leave solids, liquids, gases and weak electrolytes in molecular form, (4) cancel spectator ions that appear identically on both sides."]
    },
    terms: ['Spectator ion', 'Ionic equation']
  }, {
    id: 'table-split',
    type: 'comparisonTable',
    data: {
      caption: 'Which species split into ions?',
      headers: ['Species', 'Split into ions?', 'Examples'],
      rows: [['Strong acids (aq)', 'Yes', 'HCl(aq), HNO₃(aq), H₂SO₄(aq)'], ['Strong alkalis (aq)', 'Yes', 'NaOH(aq), KOH(aq)'], ['Soluble salts (aq)', 'Yes', 'NaCl(aq), CuSO₄(aq), AgNO₃(aq)'], ['Weak acids (aq)', 'No', 'CH₃COOH(aq), HCN(aq)'], ['Insoluble compounds', 'No', 'AgCl(s), CaCO₃(s), BaSO₄(s)'], ['Gases', 'No', 'CO₂(g), H₂(g), NH₃(g)'], ['Pure liquids', 'No', 'H₂O(l), CH₃OH(l)']]
    },
    terms: ['Spectator ion', 'Ionic equation']
  },
  // ── WORKED EXAMPLE — ionic equation ──────────────────────────────────
  {
    id: 'h-we-ionic',
    type: 'heading',
    data: {
      text: 'Worked Example: Writing an Ionic Equation',
      level: 3
    },
    terms: []
  }, {
    id: 'svg-ionic-anim',
    type: 'svg',
    data: {
      caption: 'Step-by-step ionic equation for CaCO₃ + HCl (animated)',
      svg: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Step by step ionic equation for calcium carbonate reacting with hydrochloric acid">
  <style>
    .step  { font-family: monospace; font-size: 12px; fill: #111; }
    .lbl   { font-size: 10px; fill: #6b7280; }
    .cross { fill: #dc2626; font-weight: bold; font-size: 11px; }
    .ok    { fill: #16a34a; font-weight: bold; font-size: 11px; }
    .spec  { fill: #9ca3af; text-decoration: line-through; }
  </style>
  <rect x="10" y="8"   width="660" height="46" rx="7" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="18" y="24"  class="lbl">Step 1 — Balance molecular equation:</text>
  <text x="18" y="44"  class="step">CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + CO₂(g) + H₂O(l)</text>

  <rect x="10" y="64"  width="660" height="56" rx="7" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
  <text x="18" y="80"  class="lbl">Step 2 — Split aqueous ionic species (CaCl₂ and HCl split; CaCO₃, CO₂, H₂O do not):</text>
  <text x="18" y="100" class="step">CaCO₃(s) + 2H⁺(aq) + 2Cl⁻(aq) → Ca²⁺(aq) + 2Cl⁻(aq) + CO₂(g) + H₂O(l)</text>

  <rect x="10" y="130" width="660" height="52" rx="7" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
  <text x="18" y="147" class="lbl">Step 3 — Identify spectator ions (2Cl⁻ appears on both sides — cancel them):</text>
  <text x="18" y="167" class="step">CaCO₃(s) + 2H⁺(aq) + <tspan class="spec">2Cl⁻(aq)</tspan> → Ca²⁺(aq) + <tspan class="spec">2Cl⁻(aq)</tspan> + CO₂(g) + H₂O(l)</text>

  <rect x="10" y="192" width="660" height="46" rx="7" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="18" y="208" class="lbl">Step 4 — Final net ionic equation: <tspan class="ok">✓</tspan></text>
  <text x="18" y="228" class="step">CaCO₃(s) + 2H⁺(aq) → Ca²⁺(aq) + CO₂(g) + H₂O(l)</text>
</svg>`
    },
    terms: ['Spectator ion', 'Ionic equation']
  },
  // ── TYPICAL REACTIONS OF ACIDS ────────────────────────────────────────
  {
    id: 'h-acids',
    type: 'heading',
    data: {
      text: 'Typical Reactions of Acids',
      level: 2
    },
    terms: []
  }, {
    id: 'table-acids',
    type: 'comparisonTable',
    data: {
      caption: 'General equations for typical acid reactions (Objective 1.12ii)',
      headers: ['Reaction type', 'General equation', 'Example'],
      rows: [['Acid + Metal', 'Acid + Metal → Salt + Hydrogen', 'H₂SO₄(aq) + Zn(s) → ZnSO₄(aq) + H₂(g)'], ['Acid + Metal oxide', 'Acid + Metal oxide → Salt + Water', '2HCl(aq) + CuO(s) → CuCl₂(aq) + H₂O(l)'], ['Acid + Metal hydroxide', 'Acid + Metal hydroxide → Salt + Water', 'HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)'], ['Acid + Metal carbonate', 'Acid + Carbonate → Salt + Water + CO₂', '2HCl(aq) + CaCO₃(s) → CaCl₂(aq) + H₂O(l) + CO₂(g)']]
    },
    terms: []
  },
  // ── EXAM CHECKLIST ────────────────────────────────────────────────────
  {
    id: 'h-tips',
    type: 'heading',
    data: {
      text: 'Exam Tips & Common Mistakes',
      level: 2
    },
    terms: []
  }, {
    id: 'checklist-tips',
    type: 'checklist',
    data: {
      items: [{
        text: 'Always include state symbols: (s), (l), (g), (aq)',
        checked: false
      }, {
        text: 'Never change subscripts within a formula to balance — only add coefficients',
        checked: false
      }, {
        text: 'Weak acids (e.g. CH₃COOH) do NOT split into ions',
        checked: false
      }, {
        text: 'Insoluble precipitates (e.g. AgCl(s), BaSO₄(s)) are never split',
        checked: false
      }, {
        text: 'Check charge balance in ionic equations — total charge must be equal on both sides',
        checked: false
      }, {
        text: 'Use the smallest whole-number coefficients',
        checked: false
      }]
    },
    terms: []
  },
  // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
  // ── SUMMARY ───────────────────────────────────────────────────────────
  // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
  {
    id: 'bloom-understand',
    type: 'callout',
    data: {
      style: 'key',
      title: '🧠 Deeper Understanding — Why It Matters',
      text: 'Understand: Balancing equations reflects the Law of Conservation of Mass — atoms cannot be created or destroyed, only rearranged. Ionic equations strip away spectator ions to reveal only the species that actually undergo chemical change, showing the "real chemistry" of the reaction.\n\nApply: A student adds excess zinc to copper sulfate solution. Write the full balanced equation, then derive the net ionic equation. Predict what they would observe.\n\nAnalyze: In the reaction CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g), explain why CaCO₃ is NOT split into ions but CaCl₂ IS split. What determines whether a species is written in ionic or molecular form?\n\nEvaluate: A student argues that "the net ionic equation loses important information because it removes spectator ions." Do you agree? Discuss the advantages and limitations of net ionic equations compared to full equations.'
    },
    terms: []
  },
  {
    id: 'summary-block',
    type: 'summary',
    data: {
      text: 'A balanced equation has equal numbers of each atom and equal charge on both sides. State symbols show the physical state of each species. Ionic equations split strong electrolytes in aqueous solution; solids, liquids, gases and weak electrolytes remain molecular. Spectator ions appear unchanged on both sides and are removed to give the net ionic equation. Acids react with metals, oxides, hydroxides and carbonates following predictable patterns.'
    },
    terms: []
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'keybox-steps',
      prompt: 'State the five steps for balancing a molecular equation.'
    }, {
      id: 'cue-2',
      blockId: 'table-split',
      prompt: 'Which types of compound are split into ions when writing an ionic equation?'
    }, {
      id: 'cue-3',
      blockId: 'svg-ionic-anim',
      prompt: 'Write the net ionic equation for CaCO₃(s) + HCl(aq).'
    }, {
      id: 'cue-4',
      blockId: 'table-acids',
      prompt: 'State the general equation for acid reacting with a metal carbonate.'
    }, {
      id: 'cue-5',
      blockId: 'p-ionic',
      prompt: 'Define spectator ion.'
    }],
    summaryText: 'A balanced equation has equal numbers of each atom and equal charge on both sides. State symbols show the physical state of each species. Ionic equations split strong electrolytes in aqueous solution; solids, liquids, gases and weak electrolytes remain molecular. Spectator ions appear unchanged on both sides and are removed to give the net ionic equation.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'CHSE Dept of Chemistry — Topic 1 Notes (wch11-1.pdf)',
    detail: 'Section 1B: Chemical equations, balancing steps, ionic equations, typical acid reactions. Worked example: Na + H₂O; CaCO₃ + HCl.',
    year: '2023',
    source: 'Centre for Higher Secondary Education',
    tags: ['equations', 'ionic equations', 'balancing']
  }, {
    id: 'ev-2',
    title: 'Pearson Edexcel IAL Chemistry Spec — Objective 1.3',
    detail: 'Write balanced full and ionic equations with state symbols.',
    year: '2024',
    source: 'Pearson Edexcel',
    tags: ['specification']
  }]
};