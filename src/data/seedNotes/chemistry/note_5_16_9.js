export const note_chemistry_5_16_9 = {
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Understand redox equilibria, relate E°cell to thermodynamic equilibrium constants, and predict equilibrium position from E° values.' } },
    { type: 'heading', id: 'h-intro', data: { text: 'Redox Equilibria and Electrochemistry', level: 2 } },
    { type: 'paragraph', id: 'p-intro', data: { text: 'Every redox reaction can be viewed as a galvanic cell. Spontaneous reactions (E°cell > 0) have electrode potentials directly related to the equilibrium constant (Kc) for the redox reaction. At equilibrium, E = 0. The relationship between E°cell, Gibbs free energy (ΔG°), and Kc provides a powerful tool for predicting feasibility and equilibrium position.' } },
    { type: 'heading', id: 'h-entropy-link', data: { text: 'Linking E°cell to Total Entropy (IAL Focus)', level: 2 } },
    { type: 'callout', id: 'callout-entropy-eq', data: { style: 'key', title: 'The Key Equation: TΔS_total = nFE°cell', text: 'TΔSₜₒₜₑₗ = nF × E°cell\n\nWhere:\n  T = temperature (K) — constant at 298 K for standard conditions\n  ΔSₜₒₜₑₗ = total entropy change (J K⁻¹ mol⁻¹)\n  n = number of moles of electrons transferred (constant for a given reaction)\n  F = Faraday constant (96 500 C mol⁻¹) — a constant\n  E°cell = standard cell EMF (V)\n\nSince T, n, and F are ALL CONSTANT at standard conditions:\n  ΔS_total ∝ E°cell\n\nDirect proportionality: total entropy change is proportional to E°cell at a given temperature.' } },
    { type: 'list', id: 'list-entropy-consequences', data: { style: 'bullet', items: [
      'If E°cell is POSITIVE → TΔS_total is positive → ΔS_total is positive → reaction is THERMODYNAMICALLY FEASIBLE',
      'If E°cell is NEGATIVE → TΔS_total is negative → ΔS_total is negative → reaction is NOT feasible under standard conditions',
      'Larger positive E°cell → larger positive ΔS_total → reaction more strongly driven forward',
      'This links Topic 12 (entropy and feasibility) with Topic 16 (electrochemistry) directly',
      'A positive total entropy change is the thermodynamic criterion for a reaction to be feasible (Topic 12)'
    ] } },
    { type: 'callout', id: 'callout-entropy-example', data: { style: 'worked', title: 'Example: Zn + Cu²⁺ → Zn²⁺ + Cu', text: 'E°cell = +1.10 V (positive)\n→ TΔS_total = nF × (+1.10) = positive value\n→ ΔS_total is positive → reaction is FEASIBLE ✓\n\nConversely, if E°cell = −0.34 V (negative):\n→ TΔS_total = nF × (−0.34) = negative value\n→ ΔS_total is negative → reaction NOT feasible ✘\n\nNote: The actual values of n and F are not individually required for this reasoning — you just need to recognise that ΔS_total ∝ E°cell.' } },
    { type: 'heading', id: 'h-relationship', data: { text: 'Full Thermodynamic Triangle: E°cell, ΔS_total, and K', level: 2 } },
    { type: 'paragraph', id: 'p-thermo-1', data: { text: 'IAL framing: TΔS_total = nFE°cell. Standard thermodynamics framing: ΔG° = −nFE°cell and ΔG° = −RT ln Kc. Both are related because ΔG° = −TΔS_total (approximately, at constant conditions). Key proportionality at constant T: E°cell ∝ ΔS_total (total entropy); E°cell ∝ ln Kc (equilibrium constant varies log-linearly).' } },
    { type: 'equation', id: 'eq-combined', data: { html: 'E°<sub>cell</sub> = <span class="nb-frac"><span class="nb-num">0.059</span><span class="nb-den">n</span></span> log<sub>10</sub> K<sub>c</sub> (at 298 K)', caption: 'Cell potential and equilibrium constant at 25 °C' } },
    { type: 'callout', id: 'callout-key-1', data: { style: 'key', title: 'Three-Way Proportionality at Constant T', text: 'At constant temperature (298 K) with n = constant electrons:\n  ΔS_total ∝ E°cell\n  ln Kc ∝ E°cell\n  Therefore: ΔS_total ∝ ln Kc (as established in Topics 12–13)\n\n• Positive E°cell ⇒ positive ΔS_total ⇒ Kc > 1 (products favoured)\n• Negative E°cell ⇒ negative ΔS_total ⇒ Kc < 1 (reactants favoured)\n• E°cell = 0 ⇒ ΔS_total = 0 ⇒ Kc = 1 (equilibrium)\n\nThese three quantities — E°cell, ΔS_total, and Kc — are all directly proportional to each other at a given temperature. This is the key IAL takeaway for Topic 16.' } },
    { type: 'heading', id: 'h-predicting', data: { text: 'Predicting Equilibrium Position from E°cell', level: 2 } },
    { type: 'list', id: 'list-predict', data: { style: 'bullet', items: [ 'E°cell = +1.5 V or higher: Kc very large (>> 1); reaction goes nearly to completion', 'E°cell = +0.5 to +1.0 V: Kc moderately large (> 1); significant conversion', 'E°cell = 0 to +0.2 V: Kc slightly > 1; equilibrium closer to reactants', 'E°cell < 0: Kc < 1; reaction not spontaneous under standard conditions' ] } },
    { type: 'callout', id: 'callout-worked-1', data: { style: 'worked', title: 'Calculating Kc from E°cell', text: 'Zn/Cu cell: E°cell = +1.10 V, n = 2. Using E°cell = (0.059/n) log₁₀ Kc: 1.10 = (0.059/2) × log₁₀ Kc. log₁₀ Kc = 1.10 / 0.0295 = 37.3. Kc = 10^37.3 ≈ 2 × 10³⁷. Enormous Kc confirms reaction strongly favoured, goes essentially to completion.' } },
    { type: 'heading', id: 'h-equilibrium', data: { text: 'Reaching Equilibrium: When E = 0', level: 2 } },
    { type: 'paragraph', id: 'p-equil', data: { text: 'As a galvanic cell operates, potential gradually decreases. When E = 0, cell is at equilibrium; no more net reaction occurs. At this point, Q = Kc. The Nernst equation shows this: E = E° − (0.059/n) log₁₀ Q. When Q = Kc, E = 0.' } },
    { type: 'heading', id: 'h-qualitative', data: { text: 'Qualitative Application', level: 2 } },
    { type: 'list', id: 'list-qualitative', data: { style: 'bullet', items: [ 'Large positive E°cell (≥ +1.0 V) → predict Kc >> 1 (nearly complete reaction)', 'Small positive E°cell (+0.1 to +0.5 V) → predict Kc > 1 but equilibrium not far right', 'Negative E°cell → predict Kc < 1 (not spontaneous under standard conditions)', 'Compare E°cell values to determine which reaction more favourable' ] } },
    { type: 'callout', id: 'callout-tip-1', data: { style: 'tip', title: 'Exam Tip: Relate E° to Equilibrium', text: 'When asked whether reaction is feasible or how much product forms: (1) Calculate/look up E°cell. (2) If E°cell > 0, reaction feasible. (3) Larger E°cell = larger Kc = more complete reaction. Use this to compare competing reactions or predict equilibrium position.' } },
    { type: 'heading', id: 'h-le-chatelier', data: { text: 'Connection to Le Chatelier\'s Principle', level: 2 } },
    { type: 'paragraph', id: 'p-le-chat', data: { text: 'The Nernst equation quantitatively expresses Le Chatelier: (1) If Q < Kc (not enough product), E > 0; reaction proceeds forward. (2) If Q > Kc (too much product), E < 0; reverse reaction favoured. (3) If Q = Kc, E = 0; system at equilibrium.' } },
    { type: 'checklist', id: 'checklist-1', data: { items: [ { text: 'I understand E°cell > 0 means ΔG° < 0 and Kc > 1', checked: false }, { text: 'I can interpret E°cell magnitude to predict equilibrium position', checked: false }, { text: 'I understand E = 0 at equilibrium', checked: false }, { text: 'I can apply Nernst equation qualitatively', checked: false }, { text: 'I see connection between E°cell, ΔG°, and Kc', checked: false } ] } },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: ΔG° = −nFE°cell links electrochemistry to thermodynamics. ln K = nFE°cell/RT connects E°cell to the equilibrium constant.\n\nApply: Calculate ΔG° for a cell with E°cell = +1.10 V and n = 2.\n\nAnalyze: If E°cell is large and positive, what does this imply about K? About the position of equilibrium?\n\nEvaluate: Can a reaction with E°cell < 0 ever proceed? Discuss non-standard conditions and coupled reactions.'
      },
      terms: []
    },
    { type: 'summary', id: 'summary-1', data: { text: 'E°cell, ΔG°, and Kc are related: ΔG° = −nFE°cell; ΔG° = −RT ln Kc; therefore E°cell = (0.059/n) log₁₀ Kc at 298 K. E°cell > 0 → ΔG° < 0 → Kc > 1 (products). E°cell < 0 → Kc < 1 (reactants). E°cell = 0 → Kc = 1 (equilibrium). Large E°cell (≥ +1.0 V) means huge Kc, reaction goes nearly complete. Non-standard conditions: E = E° − (0.059/n) log₁₀ Q. At equilibrium, E = 0 and Q = Kc.' } },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'callout-entropy-eq', prompt: 'Write the IAL equation linking T, ΔS_total, n, F, and E°cell. What proportionality does this give?' },
    { id: 'cue-2', blockId: 'callout-key-1', prompt: 'State the three-way proportionality between E°cell, ΔS_total, and Kc at constant temperature.' },
    { id: 'cue-3', blockId: 'eq-combined', prompt: 'State the equation relating E°cell to Kc at 298 K.' },
    { id: 'cue-4', blockId: 'list-predict', prompt: 'If E°cell = +1.5 V, what can you say about Kc and equilibrium position?' },
    { id: 'cue-5', blockId: 'callout-worked-1', prompt: 'If E°cell = +1.10 V and n = 2, calculate Kc.' },
    { id: 'cue-6', blockId: 'p-le-chat', prompt: 'How does the Nernst equation express Le Chatelier\'s principle? What happens when E = 0?' },
  ], summaryText: 'T·ΔS_total = nFE°cell → ΔS_total ∝ E°cell at constant T. E°cell > 0 → ΔS_total > 0 → feasible → Kc > 1. E°cell < 0 → not feasible → Kc < 1. E°cell = (0.059/n) log₁₀ Kc at 298 K. Large positive E°cell → huge Kc → nearly complete reaction. Topics 12, 13, and 16 all connect: E°cell, ΔS_total, and Kc are all directly proportional.', ready: false },
  evidence: [ { id: 'ev-1', title: 'Redox equilibria and thermodynamic relationships', detail: 'E°cell, ΔG°, Kc relationships; predicting equilibrium from electrode potentials; Nernst equation application.', year: '2024', source: 'chemguide.co.uk', tags: ['redox equilibria', 'E°cell', 'Kc', 'ΔG°', 'Nernst equation'] } ],
};
