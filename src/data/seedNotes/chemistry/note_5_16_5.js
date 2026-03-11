export const note_chemistry_5_16_5 = {
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Apply a systematic method to predict thermodynamic feasibility using E° values; identify disproportionation reactions and evaluate kinetic vs thermodynamic limitations.' } },
    { type: 'heading', id: 'h-feasibility', data: { text: 'Thermodynamic Feasibility from E° Values', level: 2 } },
    { type: 'callout', id: 'callout-method', data: { style: 'key', title: 'The Systematic 4-Step Feasibility Method', text: 'Step 1 — Write both half-equations as they appear in the data book (all as reduction: Xⁿ⁺ + ne⁻ ⇌ X)\nStep 2 — Circle the REACTANT species in both equations (what you start with)\nStep 3 — Apply the equilibrium rule:\n  • More NEGATIVE E° → equilibrium shifts LEFT (towards oxidised form)\n  • More POSITIVE E° → equilibrium shifts RIGHT (towards reduced form)\nStep 4 — Check: do the equilibrium shifts produce the PRODUCTS you want?\n  • If yes → thermodynamically FEASIBLE (positive E°cell)\n  • If no → NOT feasible (negative E°cell)\n\n⚠ IMPORTANT: Never assume which electrode is left/right just from the numbers alone. Always check what you’re reacting and what products you want FIRST.' } },
    {
      type: 'svg',
      id: 'svg-feasibility-flow',
      data: {
        caption: 'Feasibility checking flowchart — systematic method',
        svg: `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <rect width="460" height="300" fill="#f8fafc" rx="10" stroke="#e2e8f0" stroke-width="1"/>
  <text x="230" y="22" text-anchor="middle" font-weight="bold" font-size="13" fill="#0f172a">Feasibility Method — Flow Diagram</text>
  <!-- Step 1 -->
  <rect x="130" y="35" width="200" height="32" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="230" y="56" text-anchor="middle" fill="#4c1d95" font-weight="bold">Step 1: Write both half-equations</text>
  <line x1="230" y1="67" x2="230" y2="83" stroke="#475569" stroke-width="1.5" marker-end="url(#a)"/>
  <!-- Step 2 -->
  <rect x="120" y="83" width="220" height="32" rx="6" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="230" y="104" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Step 2: Circle your REACTANTS</text>
  <line x1="230" y1="115" x2="230" y2="131" stroke="#475569" stroke-width="1.5" marker-end="url(#a)"/>
  <!-- Step 3 -->
  <rect x="80" y="131" width="300" height="42" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="230" y="149" text-anchor="middle" fill="#14532d" font-weight="bold">Step 3: Apply equilibrium rule</text>
  <text x="230" y="165" text-anchor="middle" fill="#166534" font-size="10">More −ve → shifts LEFT ┃ More +ve → shifts RIGHT</text>
  <line x1="230" y1="173" x2="230" y2="189" stroke="#475569" stroke-width="1.5" marker-end="url(#a)"/>
  <!-- Step 4 decision -->
  <polygon points="230,189 360,220 230,251 100,220" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="230" y="215" text-anchor="middle" fill="#78350f" font-weight="bold">Do shifts produce</text>
  <text x="230" y="230" text-anchor="middle" fill="#78350f" font-weight="bold">your products?</text>
  <!-- Yes branch -->
  <line x1="360" y1="220" x2="430" y2="220" stroke="#16a34a" stroke-width="1.5" marker-end="url(#ga)"/>
  <text x="392" y="213" text-anchor="middle" fill="#16a34a" font-weight="bold">YES</text>
  <rect x="400" y="235" width="55" height="24" rx="5" fill="#bbf7d0" stroke="#16a34a"/>
  <text x="427" y="251" text-anchor="middle" fill="#14532d" font-weight="bold" font-size="10">FEASIBLE</text>
  <!-- No branch -->
  <line x1="100" y1="220" x2="30" y2="220" stroke="#dc2626" stroke-width="1.5" marker-end="url(#ra)"/>
  <text x="63" y="213" text-anchor="middle" fill="#dc2626" font-weight="bold">NO</text>
  <rect x="5" y="235" width="55" height="24" rx="5" fill="#fee2e2" stroke="#dc2626"/>
  <text x="32" y="251" text-anchor="middle" fill="#7f1d1d" font-weight="bold" font-size="10">NOT feasible</text>
  <defs>
    <marker id="a" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#475569"/></marker>
    <marker id="ga" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#16a34a"/></marker>
    <marker id="ra" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="285" text-anchor="middle" font-size="10" fill="#64748b">E°cell = E°(right) − E°(left) — confirm with value: positive = feasible, negative = not feasible</text>
</svg>`,
      },
    },
    { type: 'heading', id: 'h-examples', data: { text: 'Worked Examples — Applying the Method', level: 2 } },
    { type: 'callout', id: 'callout-worked-1', data: { style: 'worked', title: 'Example 1: Will Zn displace Cu²⁺ from solution? (Zn + Cu²⁺ → Zn²⁺ + Cu)', text: 'Equation: Zn + Cu²⁺(aq) → Zn²⁺(aq) + Cu\n\nData book half-equations:\n  Zn²⁺ + 2e⁻ ⇌ Zn    E° = −0.76 V\n  Cu²⁺ + 2e⁻ ⇌ Cu    E° = +0.34 V\n\nCircle reactants: Zn(s) in first equation; Cu²⁺ in second equation\n\nEquilibrium direction:\n  Zn: more NEGATIVE → equilibrium shifts LEFT → forms Zn²⁺ ✅ (matches product)\n  Cu: more POSITIVE → equilibrium shifts RIGHT → forms Cu(s) ✅ (matches product)\n\nBoth shifts produce our desired products → FEASIBLE\nZn = left electrode; Cu = right electrode\n\nE°cell = (+0.34) − (−0.76) = +1.10 V (positive → confirms feasibility)' } },
    { type: 'callout', id: 'callout-worked-2', data: { style: 'worked', title: 'Example 2: Zn + dilute H₂SO₄ (Zn + 2H⁺ → Zn²⁺ + H₂)', text: 'Data book half-equations:\n  Zn²⁺ + 2e⁻ ⇌ Zn    E° = −0.76 V\n  2H⁺ + 2e⁻ ⇌ H₂   E° = 0.00 V\n\nCircle reactants: Zn(s) in first; H⁺ in second\n\nEquilibrium direction:\n  Zn: more NEGATIVE (−0.76) → shifts LEFT → produces Zn²⁺ ✅\n  H: more POSITIVE (0.00) → shifts RIGHT → produces H₂(g) ✅\n\nBoth produce desired products → FEASIBLE\nZn = left; H⁺/H₂ = right\n\nE°cell = (0.00) − (−0.76) = +0.76 V (feasible — zinc reacts with dilute acids)' } },
    { type: 'callout', id: 'callout-worked-3', data: { style: 'worked', title: 'Example 3: Cu + dilute H₂SO₄ (Cu + 2H⁺ → Cu²⁺ + H₂?)', text: 'Data book half-equations:\n  Cu²⁺ + 2e⁻ ⇌ Cu    E° = +0.34 V\n  2H⁺ + 2e⁻ ⇌ H₂   E° = 0.00 V\n\nCircle reactants: Cu(s) in first; H⁺ in second\n\nEquilibrium direction:\n  Cu: more POSITIVE (+0.34) → shifts RIGHT → equilibrium moves AWAY from Cu(s) ❌\n  H: more NEGATIVE (0.00) → shifts LEFT → equilibrium moves AWAY from H₂ ❌\n\nEquilibria move AWAY from products → NOT FEASIBLE\n\nE°cell = (0.00) − (+0.34) = −0.34 V (negative → not feasible)\nThis confirms: copper does NOT react with dilute acids — consistent with the reactivity series.' } },
    { type: 'callout', id: 'callout-worked-4', data: { style: 'worked', title: 'Example 4 (Reverse): Cu²⁺ + H₂ → Cu + 2H⁺ (feasible but kinetically stable)', text: 'Reversing example 3 reaction: Cu²⁺(aq) + H₂(g) → Cu(s) + 2H⁺\n\nCircle reactants: Cu²⁺ in first; H₂ in second\n\nEquilibrium direction:\n  Cu: more POSITIVE (+0.34) → shifts RIGHT → produces Cu(s) ✅\n  H: more NEGATIVE (0.00) → shifts LEFT → produces H⁺ ✅\n\nBoth shifts produce desired products → THERMODYNAMICALLY FEASIBLE\n\nE°cell = (+0.34) − (0.00) = +0.34 V (positive → confirms feasibility)\n\nHOWEVER: This reaction does NOT take place in practice.\nReason: The reaction has a very high activation energy → reactants are KINETICALLY STABLE.\nTo react Cu²⁺ with H₂ would require a large amount of heat — departing from standard conditions.' } },
    { type: 'heading', id: 'h-limitations', data: { text: 'Limitations of Using E° to Predict Feasibility', level: 2 } },
    { type: 'list', id: 'list-limitations', data: { style: 'bullet', items: [
      'E° values only predict THERMODYNAMIC feasibility — not whether a reaction WILL occur in practice',
      'A reaction can be thermodynamically feasible but kinetically stable (high activation energy prevents it)',
      'Example: Cu²⁺ + H₂ is feasible (E°cell = +0.34 V) but does not occur due to kinetics',
      'Standard conditions required: 298 K, 1 mol dm⁻³, 100 kPa — real conditions vary',
      'Changing conditions (concentration, temperature) can shift position of equilibrium and change electrode potentials, making an unfeasible reaction feasible',
      'Example: MnO₂ + HCl is not feasible under standard conditions, but increasing [HCl] to 10 mol dm⁻³ shifts equilibria and may make it feasible',
      'You are NOT expected to calculate how electrode potentials change with concentration — just understand that changing conditions can alter feasibility'
    ] } },
    {
      type: 'callout',
      id: 'callout-limit-kinetics-cr2o7',
      data: {
        style: 'warning',
        title: 'Kinetics Failure: Dichromate(VI) and Water',
        text: 'Will acidified potassium dichromate(VI) oxidise water?\n  Cr₂O₇²⁻(aq) + 14H⁺(aq) + 6e⁻ ⇌ 2Cr³⁺(aq) + 7H₂O(l)    E° = +1.33 V\n  O₂(g) + 4H⁺(aq) + 4e⁻ ⇌ 2H₂O(l)                         E° = +1.23 V\n\nFeasibility analysis: The Cr₂O₇²⁻ value is more positive (+1.33), so it should shift RIGHT. The O₂/H₂O equilibrium is less positive (+1.23), so it should shift LEFT (water oxidised to O₂).\nE°cell = (+1.33) − (+1.23) = +0.10 V (Feasible!).\n\nHOWEVER: In reality, absolutely nothing happens. The activation energy is extremely high, making the reactants kinetically stable.'
      }
    },
    {
      type: 'callout',
      id: 'callout-limit-cond-cr2o7',
      data: {
        style: 'warning',
        title: 'Non-Standard Conditions Failure: Dichromate(VI) and Chloride',
        text: 'Will acidified potassium dichromate(VI) oxidise chloride ions to chlorine?\n  Cr₂O₇²⁻(aq) + 14H⁺(aq) + 6e⁻ ⇌ 2Cr³⁺(aq) + 7H₂O(l)    E° = +1.33 V\n  Cl₂(g) + 2e⁻ ⇌ 2Cl⁻(aq)                                          E° = +1.36 V\n\nFeasibility analysis: The Cl₂ value is more positive, meaning it should shift RIGHT to form Cl⁻. But we want to oxidise Cl⁻, requiring a shift to the LEFT, which contradicts the E° values.\nE°cell = (+1.33) − (+1.36) = −0.03 V (Not feasible).\n\nHOWEVER: If you react potassium dichromate with CONCENTRATED hydrochloric acid (~10 mol dm⁻³ instead of the standard 1 mol dm⁻³), the reaction DOES occur. The massive increase in reactant concentrations shifts the equilibria (Le Chatelier), altering the E values until the dichromate potential becomes more positive than chlorine, forcing oxidation.'
      }
    },
    { type: 'callout', id: 'callout-alt-method', data: { style: 'warning', title: 'Alternative Method: Reversing One Half-Equation (Avoid on Exams)', text: 'Some textbooks show: reverse one half-equation and change its sign, then ADD the two E° values.\nExample: Zn + Cu²⁺ → Zn²⁺ + Cu\n  Reverse Zn: Zn(s) → Zn²⁺ + 2e⁻  then E° = +0.76 V (sign flipped)\n  Cu²⁺ + 2e⁻ → Cu            E° = +0.34 V\n  Total = +0.76 + 0.34 = +1.10 V — same answer!\n\nHOWEVER: This is considered an imperfect science because the standard electrode potential of a substance does NOT actually change — it is a property of the half-cell. The exam-safe method is:\n→ E°cell = E°(right) − E°(left). Find right and left by checking reactants and products, NOT by changing signs.' } },
    { type: 'heading', id: 'h-disproportionation', data: { text: 'Disproportionation Reactions', level: 2 } },
    { type: 'callout', id: 'callout-disprop-def', data: { style: 'key', title: 'Definition: Disproportionation', text: 'A disproportionation reaction is one where a SINGLE species is simultaneously oxidised AND reduced in the same reaction.\n\nExample: 2Cu⁺(aq) → Cu²⁺(aq) + Cu(s)\n  Cu⁺ is oxidised (+1 → +2simultaneously\n  Cu⁺ is reduced (+1 → 0) in\n\nMethod: Apply the same 4-step systematic method — circle the SAME starting species in BOTH half-equations from the data book.' } },
    { type: 'callout', id: 'callout-disprop-cu', data: { style: 'worked', title: 'Cu⁺ Disproportionation: 2Cu⁺ → Cu²⁺ + Cu (FEASIBLE)', text: 'Data book half-equations:\n  Cu²⁺ + e⁻ ⇌ Cu⁺   E° = +0.52 V\n  Cu⁺ + e⁻ ⇌ Cu    E° = +0.15 V\n\nReaction target: Cu⁺ → Cu²⁺ + Cu\nCircle Cu⁺ as reactant in BOTH equations\n\nEquilibrium direction:\n  +0.15 V (more negative) → shifts LEFT → Cu⁺ is oxidised to Cu²⁺ ✅\n  +0.52 V (more positive) → shifts RIGHT → Cu⁺ is reduced to Cu(s) ✅\n\nBoth equilibria back up the reaction → FEASIBLE\nE°cell = (+0.52) − (+0.15) = +0.37 V ✓' } },
    { type: 'callout', id: 'callout-disprop-fe', data: { style: 'worked', title: 'Fe²⁺ Disproportionation: 3Fe²⁺ → Fe³⁺ + 2Fe? (NOT FEASIBLE)', text: 'Data book half-equations:\n  Fe³⁺ + e⁻ ⇌ Fe²⁺   E° = +0.77 V\n  Fe²⁺ + 2e⁻ ⇌ Fe    E° = −0.44 V\n\nReaction target: Fe²⁺ → Fe³⁺ + Fe\nCircle Fe²⁺ as reactant in BOTH equations\n\nWe NEED: +0.77 half-cell to shift LEFT (Fe²⁺ → Fe³⁺), AND −0.44 half-cell to shift RIGHT (Fe²⁺ → Fe)\n\nActual equilibrium direction:\n  +0.77 (more positive) → shifts RIGHT (away from Fe³⁺) ❌ WRONG direction\n  −0.44 (more negative) → shifts LEFT (away from Fe) ❌ WRONG direction\n\nEquilibria move away from desired products → NOT FEASIBLE\nE°cell = (−0.44) − (+0.77) = −1.21 V ✘\n\nKey conclusion: Fe²⁺ does NOT disproportionate; Cu⁺ does — common exam contrast question.' } },
    { type: 'callout', id: 'callout-disprop-comp', data: { style: 'tip', title: 'Exam Tip: Cu vs Fe Disproportionation Summary', text: '✔ Cu⁺ disproportionates → Cu²⁺ + Cu  (E°cell = +0.37 V, feasible)\n✘ Fe²⁺ does NOT disproportionate (E°cell = −1.21 V, not feasible)\n\nBoth Cu and Fe appear in the same past paper questions — know the reasoning for each, not just the answer.' } },
    { type: 'checklist', id: 'checklist-1', data: { items: [
      { text: 'I can apply the 4-step systematic feasibility method', checked: false },
      { text: 'I know to determine left/right from reactants/products — NOT just E° values', checked: false },
      { text: 'I can identify when equilibria support a reaction (feasible) vs oppose it (not feasible)', checked: false },
      { text: 'I recognise kinetics can prevent thermodynamically feasible reactions', checked: false },
      { text: 'I understand non-standard conditions can change feasibility', checked: false },
      { text: 'I know the sign-reversal alternative method but avoid it in exams', checked: false },
      { text: 'I can assess disproportionation for Cu⁺ (feasible) and Fe²⁺ (not feasible)', checked: false }
    ] } },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: E°cell > 0 → ΔS_total > 0 → thermodynamically feasible. Positive E°cell links directly to positive total entropy change.\n\nApply: Test whether Cu²⁺ + H₂ → Cu + 2H⁺ is feasible using the 4-step method. Then explain why it still does not occur.\n\nAnalyze: Why does Cu⁺ disproportionate but Fe²⁺ does not? Use the direction of equilibrium shifts in both half-cells to explain.\n\nEvaluate: A reaction has E°cell = +0.02 V. Is it practically useful? Discuss thermodynamic feasibility vs kinetic stability.'
      },
      terms: []
    },
    { type: 'summary', id: 'summary-1', data: { text: '• Systematic method: write data book half-equations → circle reactants → apply equilibrium rule (more −ve shifts left, more +ve shifts right) → check if shifts match desired products\n• NEVER assign left/right from E° values alone — use reactants and products first\n• E°cell > 0 → feasible; E°cell < 0 → not feasible (under standard conditions)\n• Feasible ≠ will occur: kinetic stability (high Eact) can prevent the reaction\n• Non-standard conditions can shift equilibria → make unfeasible reactions feasible\n• Avoid sign-reversal method on exams; use E°(right) − E°(left)\n• Cu⁺ disproportionation: FEASIBLE, E°cell = +0.37 V; Fe²⁺ disproportionation: NOT FEASIBLE, E°cell = −1.21 V' } },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'callout-method', prompt: 'Describe the 4-step systematic method for testing thermodynamic feasibility.' },
    { id: 'cue-2', blockId: 'callout-worked-3', prompt: 'Why is Cu + 2H⁺ → Cu²⁺ + H₂ not feasible? Show your reasoning using equilibrium shifts.' },
    { id: 'cue-3', blockId: 'callout-worked-4', prompt: 'Cu²⁺ + H₂ is thermodynamically feasible but does not occur. Explain why.' },
    { id: 'cue-4', blockId: 'callout-disprop-cu', prompt: 'Does Cu⁺ disproportionate? Give E° values and the equilibrium reasoning.' },
    { id: 'cue-5', blockId: 'callout-disprop-fe', prompt: 'Does Fe²⁺ disproportionate into Fe³⁺ + Fe? Explain using equilibrium shifts and E°cell.' },
    { id: 'cue-6', blockId: 'callout-alt-method', prompt: 'What is the exam-safe method for calculating E°cell? Why should you avoid reversing signs?' },
    { id: 'cue-7', blockId: 'callout-limit-cond-cr2o7', prompt: 'Potassium dichromate(VI) cannot oxidise chloride ions under standard conditions. Explain why it can when concentrated HCl is used.' },
  ], summaryText: '4-step method: write data book equations → circle reactants → equilibrium rule (more −ve → left, more +ve → right) → check if shifts match products. E°cell > 0 → feasible. Cu⁺ disproportionates (+0.37 V); Fe²⁺ does not (−1.21 V). Kinetics can prevent feasible reactions.', ready: false },
  evidence: [ { id: 'ev-1', title: 'Reaction feasibility and disproportionation', detail: 'E°cell criterion, limitations, disproportionation analysis.', year: '2024', source: 'chemguide.co.uk', tags: ['feasibility', 'disproportionation', 'E°cell'] } ],
};
