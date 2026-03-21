export const note_chemistry_5_16_1 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-1',
      data: {
        text: 'Understand why standard conditions matter for electrode potentials, how concentration, temperature, and pressure affect E, and qualitatively apply the Nernst equation to predict non-standard behaviour.',
      },
    },
    {
      type: 'heading',
      id: 'h-importance',
      data: {
        text: 'Why Standard Conditions Matter',
        level: 2,
      },
    },
    {
      type: 'paragraph',
      id: 'p-importance-1',
      data: {
        text: 'Electrode potentials are not constant properties—they change with temperature, concentration of ions, and partial pressure of gases. This is why standard conditions must be defined: to provide a reference point against which all E° values are measured and compared. If every lab used different conditions, E° values would be incomparable and useless for predicting reactions. By using a universal standard (298 K, 1 mol dm⁻³, 1 bar), we ensure that published E° tables can be reliably applied across different contexts and experiments.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-1',
      data: {
        style: 'key',
        title: 'E° vs E: Standard vs Non-Standard Potentials',
        text: 'E° (standard electrode potential) is measured under fixed standard conditions: 298 K, 1 mol dm⁻³ concentration, and 1 bar pressure. E (non-standard electrode potential) is measured under any other conditions. The two are related by the Nernst equation: changing concentration, temperature, or pressure from standard values will change E away from E°.',
      },
    },
    {
      type: 'heading',
      id: 'h-concentration-effect',
      data: {
        text: 'Effect of Concentration on Electrode Potential',
        level: 2,
      },
    },
    {
      type: 'paragraph',
      id: 'p-conc-1',
      data: {
        text: 'Increasing the concentration of ions in a half-cell makes reduction more energetically favourable (the potential becomes more positive). Decreasing the concentration makes reduction less favourable (the potential becomes more negative). This can be understood from Le Chatelier\'s principle: increasing the concentration of a species being reduced (the oxidised form) shifts the equilibrium to favour reduction, increasing E.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-conc-2',
      data: {
        text: 'For example, in the half-reaction Cu²⁺ + 2e⁻ ⇌ Cu with E° = +0.34 V at 1 mol dm⁻³ CuSO₄: at higher [Cu²⁺], E becomes more positive (more easily reduced); at lower [Cu²⁺], E becomes more negative (less easily reduced).',
      },
    },
    {
      type: 'callout',
      id: 'callout-exam-tip-conc',
      data: {
        style: 'warning',
        title: 'High-Value Exam Tip: Explaining changes to E',
        text: 'When asked how a change in concentration affects the electrode potential, always explicitly mention the equilibrium shift. Use this template: \\"Increasing [ion] shifts the equilibrium (write out half-equation) to the right. This removes electrons, making the electrode potential more positive.\\" Do not just say \\"it makes E more positive\\" without explaining the equilibrium shift (Le Chatelier\'s Principle)!',
      },
    },
    {
      type: 'svg',
      id: 'svg-le-chatelier-conc',
      data: {
        caption: "Le Chatelier's Principle and Electrode Potential",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" width="100%" height="auto"><defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" /></marker><marker id="arrowRed" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" /></marker></defs><style>text{font-family:sans-serif;fill:currentColor} .heading{font-weight:bold;font-size:16px;} .sub{font-size:12px;} .eq{font-size:18px;font-weight:bold;} </style><rect x="10" y="10" width="480" height="180" rx="10" fill="none" stroke="#cbd5e1" stroke-width="2" /><text x="250" y="40" text-anchor="middle" class="heading">Mⁿ⁺(aq) + ne⁻ ⇌ M(s)</text><rect x="30" y="70" width="200" height="100" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" /><text x="130" y="100" text-anchor="middle" font-weight="bold" fill="#1e3a8a">Increase [Mⁿ⁺]</text><path d="M 130 110 L 130 130" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrow)" /><text x="130" y="150" text-anchor="middle" fill="#1e3a8a" class="sub" font-weight="bold">Equilibrium shifts RIGHT</text><text x="130" y="165" text-anchor="middle" fill="#1e3a8a" class="sub">E becomes more positive</text><rect x="270" y="70" width="200" height="100" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="2" /><text x="370" y="100" text-anchor="middle" font-weight="bold" fill="#7f1d1d">Decrease [Mⁿ⁺]</text><path d="M 370 110 L 370 130" stroke="#ef4444" stroke-width="3" marker-end="url(#arrowRed)" /><text x="370" y="150" text-anchor="middle" fill="#7f1d1d" class="sub" font-weight="bold">Equilibrium shifts LEFT</text><text x="370" y="165" text-anchor="middle" fill="#7f1d1d" class="sub">E becomes less positive</text></svg>'
      }
    },
    {
      type: 'heading',
      id: 'h-temperature-effect',
      data: {
        text: 'Effect of Temperature on Electrode Potential',
        level: 2,
      },
    },
    {
      type: 'paragraph',
      id: 'p-temp-1',
      data: {
        text: 'Temperature significantly affects electrode potential. Higher temperatures decrease the magnitude of all electrode potentials (both positive and negative values become closer to zero). This is because increasing thermal energy reduces the organisation of the electron system and weakens the electrostatic interactions that drive electron transfer. For most systems, the effect is small at temperatures near 298 K, but becomes significant at higher temperatures.',
      },
    },
    {
      type: 'heading',
      id: 'h-nernst',
      data: {
        text: 'The Nernst Equation (Qualitative)',
        level: 2,
      },
    },
    {
      type: 'paragraph',
      id: 'p-nernst-1',
      data: {
        text: 'The Nernst equation quantitatively relates the non-standard electrode potential (E) to the standard potential (E°), temperature, and the concentrations (or partial pressures) of all species involved. At 298 K, the simplified form is: E = E° − (0.059/n) log₁₀ Q, where n is the number of electrons transferred and Q is the reaction quotient.',
      },
    },
    {
      type: 'equation',
      id: 'eq-nernst-simple',
      data: {
        html: 'E = E° − <span class="nb-frac"><span class="nb-num">0.059</span><span class="nb-den">n</span></span> log<sub>10</sub> Q (at 298 K)',
        caption: 'Nernst equation at 25 °C',
      },
    },
    {
      type: 'paragraph',
      id: 'p-nernst-2',
      data: {
        text: 'Key qualitative insights: (1) If Q is large (products dominate), the log term is positive, so E becomes smaller (less positive or more negative) than E°. (2) If Q is small (reactants dominate), the log term is negative, so E becomes larger (more positive or less negative) than E°. (3) At equilibrium, Q = Kc, and E = 0.',
      },
    },
    {
      type: 'callout',
      id: 'callout-worked-1',
      data: {
        style: 'worked',
        title: 'Qualitative Nernst Application',
        text: 'In a Zn/Cu cell at standard conditions, E°cell = +1.10 V. If we increase [Cu²⁺] from 1 to 2 mol dm⁻³, Q decreases (fewer products relative to standard), so E becomes more positive: the cell becomes more able to do work. If we increase [Zn²⁺] from 1 to 2 mol dm⁻³, Q increases (more products), so E becomes less positive: the cell becomes less able to do work.',
      },
    },
    {
      type: 'checklist',
      id: 'checklist-1',
      data: {
        items: [
          { text: 'I understand the difference between E° (standard) and E (non-standard)', checked: false },
          { text: 'I can predict qualitatively how concentration changes affect E', checked: false },
          { text: 'I know that temperature effects make all E values less pronounced when T increases', checked: false },
          { text: 'I understand qualitatively how the Nernst equation relates E, E°, and Q', checked: false },
          { text: 'I can explain how E approaches zero at equilibrium', checked: false },
        ],
      },
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: The electrochemical series ranks half-cells by E°. Reactions are feasible if E°cell > 0, but this only tells us about thermodynamic feasibility, not rate.\n\nApply: Calculate E°cell for Zn/Cu²⁺ cell. State which electrode is the anode and which is the cathode.\n\nAnalyze: Why can aluminium exist in air despite having a very negative E°? Relate to kinetic stability.\n\nEvaluate: "A positive E°cell guarantees the reaction will occur." Critically assess this statement.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'summary-1',
      data: {
        text: 'Electrode potential E varies with concentration, temperature, and pressure. Only E° (standard potential) is constant at 298 K, 1 mol dm⁻³, 1 bar. Increasing [oxidised species] makes E more positive; increasing [reduced species] makes E more negative. Higher temperature makes all E values approach zero; lower temperature makes them more pronounced. The Nernst equation: E = E° − (0.059/n) log₁₀ Q. At equilibrium, Q = Kc and E = 0.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-key-1',
        prompt: 'What is the difference between E° and E?',
      },
      {
        id: 'cue-2',
        blockId: 'p-conc-2',
        prompt: 'If [Cu²⁺] increases above 1 mol dm⁻³, how does E for the Cu²⁺/Cu half-cell change?',
      },
      {
        id: 'cue-3',
        blockId: 'p-temp-1',
        prompt: 'How does increasing temperature affect all electrode potentials?',
      },
      {
        id: 'cue-4',
        blockId: 'eq-nernst-simple',
        prompt: 'In the Nernst equation, what does Q represent and how does it affect E?',
      },
      {
        id: 'cue-5',
        blockId: 'p-nernst-2',
        prompt: 'What is the relationship between E, E°, and Q at equilibrium?',
      },
    ],
    summaryText: 'E° measured at 298 K, 1 mol dm⁻³, 1 bar. E varies with concentration, temperature, pressure. Higher [oxidised] makes E more positive. Higher temperature makes all E values approach zero. Nernst equation: E = E° − (0.059/n) log₁₀ Q. At equilibrium, Q = Kc and E = 0.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Non-standard electrode potentials and the Nernst equation',
      detail: 'Effects of concentration, temperature, and pressure on electrode potential; qualitative application of the Nernst equation at 298 K.',
      year: '2024',
      source: 'chemguide.co.uk',
      tags: ['Nernst equation', 'non-standard conditions', 'electrode potential'],
    },
  ],
};
