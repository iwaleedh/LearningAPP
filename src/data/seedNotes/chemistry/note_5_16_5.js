export const note_chemistry_5_16_5 = {
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Use E°cell to predict reaction feasibility, recognise limitations, and identify disproportionation reactions.' } },
    { type: 'heading', id: 'h-feasibility', data: { text: 'Feasibility from E°cell Values', level: 2 } },
    { type: 'equation', id: 'eq-feasibility', data: { html: 'If E°<sub>cell</sub> &gt; 0 ⇒ Reaction is feasible (spontaneous)', caption: 'Feasibility criterion' } },
    { type: 'callout', id: 'callout-key-1', data: { style: 'key', title: 'Feasibility Rule', text: 'E°cell > 0 → reaction is spontaneous and feasible under standard conditions. E°cell < 0 → reaction is not feasible under standard conditions. E°cell = 0 → reaction is at equilibrium, no net reaction.' } },
    { type: 'heading', id: 'h-examples', data: { text: 'Examples: Testing Feasibility', level: 2 } },
    { type: 'callout', id: 'callout-worked-1', data: { style: 'worked', title: 'Is Zn + Cu²⁺ → Zn²⁺ + Cu feasible?', text: 'E°cell = (+0.34) − (−0.76) = +1.10 V. Since E°cell > 0, feasible. Zinc displaces copper.' } },
    { type: 'callout', id: 'callout-worked-2', data: { style: 'worked', title: 'Is Cu + Zn²⁺ → Cu²⁺ + Zn feasible?', text: 'E°cell = (−0.76) − (+0.34) = −1.10 V. Since E°cell < 0, not feasible. Copper cannot displace zinc.' } },
    { type: 'heading', id: 'h-limitations', data: { text: 'Limitations of Using E°cell', level: 2 } },
    { type: 'paragraph', id: 'p-kinetics', data: { text: 'Kinetic barriers: Even if E°cell > 0, a reaction may not occur at appreciable rate if activation energy is very high. H₂O₂ decomposition is favourable (E°cell >> 0) but slow at room temperature without catalyst.' } },
    { type: 'paragraph', id: 'p-conditions', data: { text: 'Non-standard conditions: E°cell is for 298 K, 1 mol dm⁻³, 1 bar. Non-standard conditions can change feasibility via the Nernst equation.' } },
    { type: 'heading', id: 'h-disproportionation', data: { text: 'Disproportionation Reactions', level: 2 } },
    { type: 'paragraph', id: 'p-disprop', data: { text: 'A disproportionation reaction involves a single element simultaneously oxidised and reduced, producing two different oxidation states. Example: Cl₂ + H₂O ⇌ Cl⁻ + HClO. Feasible if E°cell > 0, calculated from the two relevant half-reactions for that element at different oxidation states.' } },
    { type: 'callout', id: 'callout-worked-3', data: { style: 'worked', title: 'Cl₂ Disproportionation', text: 'Reduction: Cl₂ + 2e⁻ → 2Cl⁻ (E° = +1.36 V). Oxidation: Cl₂ + 2H₂O → 2HClO + 2H⁺ + 2e⁻ (E° = +0.89 V). E°cell = (+1.36) − (+0.89) = +0.47 V. Feasible (though slow at room temperature).' } },
    { type: 'callout', id: 'callout-warning-1', data: { style: 'warning', title: 'Recognising Disproportionation', text: 'Is the same element at two oxidation states on both sides? If yes, it is disproportionation. Identify the two half-reactions, calculate E°cell, check if E°cell > 0.' } },
    { type: 'checklist', id: 'checklist-1', data: { items: [ { text: 'I understand E°cell > 0 means feasible', checked: false }, { text: 'I recognise kinetics can limit feasible reactions', checked: false }, { text: 'I know non-standard conditions can change feasibility', checked: false }, { text: 'I can identify disproportionation reactions', checked: false }, { text: 'I can calculate E°cell for disproportionation', checked: false } ] } },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: E°cell > 0 means ΔG < 0 (feasible). However, kinetic barriers (high activation energy) can prevent thermodynamically feasible reactions from occurring.\n\nApply: Using E° values, predict whether MnO₄⁻ can oxidise Fe²⁺ to Fe³⁺ in acidic solution.\n\nAnalyze: In disproportionation, the same element is both oxidised and reduced. Use E° to explain when Cu⁺ disproportionates.\n\nEvaluate: E° predicts feasibility under standard conditions. How do concentration changes (Nernst equation) affect real predictions?'
      },
      terms: []
    },
    { type: 'summary', id: 'summary-1', data: { text: 'E°cell > 0 → thermodynamically feasible. E°cell < 0 → not feasible under standard conditions. Limitations: kinetics (activation energy) may prevent feasible reactions; non-standard conditions change feasibility. Disproportionation = one element at two oxidation states (oxidised and reduced). Example: Cl₂ disproportionation E°cell = +0.47 V (feasible but slow).' } },
  ],
  recall: { enabled: true, cues: [ { id: 'cue-1', blockId: 'callout-key-1', prompt: 'State the feasibility rule.' }, { id: 'cue-2', blockId: 'callout-worked-2', prompt: 'Is Cu + Zn²⁺ → Cu²⁺ + Zn feasible? Why?' }, { id: 'cue-3', blockId: 'p-kinetics', prompt: 'Why might a feasible reaction not occur in practice?' }, { id: 'cue-4', blockId: 'p-disprop', prompt: 'What is a disproportionation reaction?' }, { id: 'cue-5', blockId: 'callout-worked-3', prompt: 'Is Cl₂ disproportionation feasible? What is E°cell?' } ], summaryText: 'E°cell > 0 → feasible. Limitations: kinetics (activation energy), non-standard conditions. Disproportionation = one element at two oxidation states. Example: Cl₂ + H₂O, E°cell = +0.47 V (feasible).',  ready: false },
  evidence: [ { id: 'ev-1', title: 'Reaction feasibility and disproportionation', detail: 'E°cell criterion, limitations, disproportionation analysis.', year: '2024', source: 'chemguide.co.uk', tags: ['feasibility', 'disproportionation', 'E°cell'] } ],
};
