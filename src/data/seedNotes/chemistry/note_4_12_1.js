export const note_chemistry_4_12_1 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-entropy-disorder',
      data: {
        text: 'Understand entropy (S) as a quantitative measure of disorder in a system, with units J K⁻¹ mol⁻¹, and recognise that more particles and greater complexity lead to higher entropy.'
      }
    },
    {
      type: 'heading',
      id: 'h-entropy-definition',
      data: {
        text: 'Entropy: The Measure of Disorder',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-entropy-def-1',
      data: {
        text: 'Entropy (S) is a thermodynamic quantity that quantifies the degree of disorder or randomness in a system. Unlike enthalpy, which is an energy quantity, entropy reflects the number of available microstates — the countless microscopic arrangements that a system can occupy at a given temperature and pressure. A system with high entropy has many possible arrangements; a system with low entropy has relatively few.'
      }
    },
    {
      type: 'callout',
      id: 'co-entropy-units',
      data: {
        style: 'key',
        title: 'Entropy Units',
        text: 'S is measured in joules per kelvin per mole: J K⁻¹ mol⁻¹\n\nStandard molar entropy S° is given at 298 K (25 °C) and 100 kPa. Higher values indicate greater disorder.'
      }
    },
    {
      type: 'heading',
      id: 'h-boltzmann',
      data: {
        text: "Boltzmann's Statistical Interpretation of Entropy",
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-boltzmann-1',
      data: {
        text: 'Entropy is not just a vague sense of "disorder" — it has a precise statistical definition. Ludwig Boltzmann showed that entropy is directly related to W, the number of possible arrangements (microstates) of particles and their energy. The more microstates available, the higher the entropy.'
      }
    },
    {
      type: 'equation',
      id: 'eq-boltzmann',
      data: {
        html: 'S = k<sub>B</sub> ln W',
        caption: 'Boltzmann entropy equation — k_B = 1.38 × 10⁻²³ J K⁻¹ (Boltzmann constant)'
      }
    },
    {
      type: 'paragraph',
      id: 'p-boltzmann-2',
      data: {
        text: 'Consider a simple analogy: dropping 2 coins. The chance of getting 2 heads is 1/4. Dropping 100 coins? The chance of them all landing heads is (1/2)¹⁰⁰, which is practically zero. You expect about 50 heads and 50 tails because there are vastly more ways (arrangements) to achieve a mixture than a perfectly ordered state of all heads.\n\nNow consider 5 gas molecules randomly moving in a container divided into two halves. Each molecule can be in either half, giving 2⁵ = 32 total arrangements. Only 1 of these 32 has ALL molecules on the same side. The probability of finding them spontaneously all on one side is just 1/32. Now scale up to Avogadro\'s number (6.02 × 10²³) of molecules: the number of microstates is 2^(6×10²³) — astronomically large. The probability of them all being on one side is effectively zero. This is why gas expansion is irreversible: the mixed state has overwhelmingly more microstates, and therefore overwhelmingly higher entropy.'
      }
    },
    {
      type: 'callout',
      id: 'co-boltzmann-gas-jar',
      data: {
        style: 'key',
        title: 'Gas Jar Mixing: Why It Is Irreversible',
        text: 'Imagine removing a divider between two gas jars:\n• 5 molecules → 2⁵ = 32 arrangements; probability of staying unmixed = 1/32\n• 10 molecules → 2¹⁰ = 1024 arrangements; probability = 1/1024\n• 1 mole → 2^(6×10²³) arrangements; probability of unmixing ≈ 0\n\nThe mixed state has so many more arrangements that mixing is essentially irreversible. The increase in W means an increase in S = k_B ln W.'
      }
    },

        {
            id: 'svg-entropy-disorder',
            type: 'svg',
            data: {
                caption: 'Comparing entropy: A solid lattice has low disorder (low entropy), while a gas has high disorder (high entropy) due to randomly moving particles spreading through the available volume.',
                svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="200" fill="transparent" rx="10"/><g transform="translate(100, 100)"><rect x="-40" y="-40" width="80" height="80" fill="none" stroke="#94a3b8" stroke-width="2"/><circle cx="-20" cy="-20" r="6" fill="#3b82f6"/><circle cx="0" cy="-20" r="6" fill="#3b82f6"/><circle cx="20" cy="-20" r="6" fill="#3b82f6"/><circle cx="-20" cy="0" r="6" fill="#3b82f6"/><circle cx="0" cy="0" r="6" fill="#3b82f6"/><circle cx="20" cy="0" r="6" fill="#3b82f6"/><circle cx="-20" cy="20" r="6" fill="#3b82f6"/><circle cx="0" cy="20" r="6" fill="#3b82f6"/><circle cx="20" cy="20" r="6" fill="#3b82f6"/><text x="0" y="60" font-family="sans-serif" font-size="14" fill="#333" text-anchor="middle">Solid</text><text x="0" y="80" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">Low Entropy (S)</text></g><g transform="translate(300, 100)"><rect x="-40" y="-40" width="80" height="80" fill="none" stroke="#94a3b8" stroke-width="2"/><circle cx="-25" cy="-30" r="6" fill="#ef4444"/><line x1="-20" y1="-25" x2="-10" y2="-15" stroke="#ef4444" stroke-width="1"/><circle cx="25" cy="-20" r="6" fill="#ef4444"/><line x1="20" y1="-20" x2="5" y2="-20" stroke="#ef4444" stroke-width="1"/><circle cx="-10" cy="15" r="6" fill="#ef4444"/><line x1="-10" y1="20" x2="-10" y2="35" stroke="#ef4444" stroke-width="1"/><circle cx="30" cy="10" r="6" fill="#ef4444"/><line x1="30" y1="5" x2="30" y2="-10" stroke="#ef4444" stroke-width="1"/><circle cx="10" cy="-5" r="6" fill="#ef4444"/><line x1="15" y1="0" x2="30" y2="15" stroke="#ef4444" stroke-width="1"/><text x="0" y="60" font-family="sans-serif" font-size="14" fill="#333" text-anchor="middle">Gas</text><text x="0" y="80" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">High Entropy (S)</text></g><path d="M 160 100 L 230 100" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/><polygon points="230,95 240,100 230,105" fill="#94a3b8"/></svg>'
            }
        },
    {
      type: 'paragraph',
      id: 'p-boltzmann-quanta',
      data: {
        text: 'Energy is also distributed in discrete packets called quanta. The more quanta available, and the more particles there are to share them, the more ways energy can be distributed — and the higher the entropy. Heating a substance increases the number of quanta available, which is why entropy increases with temperature.'
      }
    },
    {
      type: 'comparisonTable',
      id: 'table-quanta-arrangements',
      data: {
        caption: 'Number of Arrangements (W) for Energy Quanta Distribution',
        headers: ['Molecules', 'Energy Quanta', 'Arrangements (W)', 'Trend'],
        rows: [
          ['2', '4', '5', 'Reference: few molecules, few quanta'],
          ['2', '5', '6', 'One extra quantum → one more arrangement'],
          ['3', '3', '10', 'One extra molecule → many more arrangements'],
          ['3', '4', '15', 'Both increase → W grows rapidly']
        ]
      }
    },
    {
      type: 'callout',
      id: 'co-boltzmann-r-link',
      data: {
        style: 'tip',
        title: 'Interesting Connection: k_B × N_A = R',
        text: 'The Boltzmann constant k_B = 1.38 × 10⁻²³ J K⁻¹ applies to individual molecules.\nThe gas constant R = 8.31 J K⁻¹ mol⁻¹ applies to one mole.\n\nThey are linked by Avogadro\'s number:\nR = k_B × N_A = 1.38 × 10⁻²³ × 6.02 × 10²³ = 8.31 J K⁻¹ mol⁻¹\n\nEntropy at the molecular scale (k_B) scales up to the molar scale (R) via N_A — just as all molecular properties do when scaled to one mole.'
      }
    },
    {
      type: 'heading',
      id: 'h-particle-count',
      data: {
        text: 'Effect of Particle Count on Entropy',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-particle-count-1',
      data: {
        text: 'Systems with more particles have more possible arrangements and thus higher entropy. When 1 mole of a substance dissolves in water, the number of separate particles increases dramatically — ions or molecules spread throughout the solution rather than confined to a crystal lattice. This increase in particle count raises entropy substantially.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-particle-count-2',
      data: {
        text: 'Consider the dissolution of NaCl(s): one mole of solid crystals transforms into 2 moles of aqueous ions (Na⁺ and Cl⁻) distributed throughout the solution. The entropy change is large and positive despite the energy cost of breaking ionic bonds, because the gain in disorder outweighs the enthalpy penalty.'
      }
    },
    {
      type: 'heading',
      id: 'h-molecular-complexity',
      data: {
        text: 'Effect of Molecular Complexity on Entropy',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-complexity-1',
      data: {
        text: 'More complex molecules have more available microstates than simpler molecules. A linear molecule like CO₂ can vibrate and rotate in more ways than a simple diatomic like N₂. Polyatomic molecules with more bonds, rotatable groups, and degrees of freedom have higher intrinsic entropy.'
      }
    },
    {
      type: 'comparisonTable',
      id: 'table-entropy-values',
      data: {
        caption: 'Standard Molar Entropy Values at 298 K (Example)',
        headers: ['Substance', 'State', 'S° / J K⁻¹ mol⁻¹', 'Reason for Relative Value'],
        rows: [
          ['C (diamond)', 's', '2.4', 'Highly ordered 3D covalent lattice; minimal disorder'],
          ['Ca(s)', 's', '41.4', 'Metallic lattice; more complex than diamond'],
          ['CaF₂(s)', 's', '68.9', 'Ionic lattice; more ions means more arrangements'],
          ['CaCO₃(s)', 's', '92.9', 'Polyatomic ions increase vibrational microstates'],
          ['H₂O(l)', 'l', '69.9', 'Liquid phase; molecules loosely arranged and able to translate'],
          ['H₂O(g)', 'g', '188.7', 'Gas phase; molecules widely separated and freely moving'],
          ['N₂(g)', 'g', '191.6', 'Diatomic gas; standard translational freedom'],
          ['CO₂(g)', 'g', '213.6', 'Polyatomic gas; more rotational/vibrational modes relative to N₂']
        ]
      }
    },
    {
      type: 'heading',
      id: 'h-state-ordering',
      data: {
        text: 'Entropy Ordering: Gases > Liquids > Solids',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-state-order-1',
      data: {
        text: 'The physical state of matter has the largest effect on entropy. In solids, particles are locked in fixed positions — low entropy. In liquids, particles can move past each other but remain in contact — moderate entropy. In gases, particles are far apart and move freely — high entropy. This ordering holds across all pure substances under standard conditions.'
      }
    },
    {
      type: 'callout',
      id: 'co-state-entropy',
      data: {
        style: 'worked',
        title: 'Entropy Ordering Example: Water',
        text: 'H₂O(s) — ice, particles fixed:   S° ≈ 48 J K⁻¹ mol⁻¹\nH₂O(l) — liquid, particles mobile:  S° ≈ 70 J K⁻¹ mol⁻¹\nH₂O(g) — steam, particles free:    S° ≈ 189 J K⁻¹ mol⁻¹\n\nNotice: the solid → liquid jump (+22) is MUCH SMALLER than the liquid → gas jump (+119).\n\nWhy? Liquid water is more ordered than a typical liquid. Hydrogen bonds between H₂O molecules keep them partially organised even in the liquid state. So the entropy gain from melting is modest. Boiling destroys the H-bonding network entirely → large disorder increase.\n\nGas entropy is ~4 times the solid entropy due to vastly more microstates.'
      }
    },
    {
      type: 'callout',
      id: 'co-benzene-entropy',
      data: {
        style: 'key',
        title: 'Larger Molecules Have Higher Entropy: Benzene',
        text: 'Larger, more complex molecules have more ways to distribute vibrational and rotational energy → higher S°.\n\nC₆H₆(l)  — benzene liquid: S° = 173 J K⁻¹ mol⁻¹\nC₆H₆(g) — benzene vapour: S° = 269 J K⁻¹ mol⁻¹\n\nCompare to water:\nH₂O(l) = 70  J K⁻¹ mol⁻¹\nH₂O(g) = 189 J K⁻¹ mol⁻¹\n\nBenzene > water at each state because C₆H₆ has more atoms, more bonds, and more available rotational and vibrational modes for energy to be spread across.'
      }
    },
    {
      type: 'heading',
      id: 'h-entropy-realms',
      data: {
        text: 'Ordering Within the Same State',
        level: 2
      }
    },
    {
      type: 'paragraph',
      id: 'p-entropy-realms-1',
      data: {
        text: 'Even among solids, or among liquids, or among gases, entropy varies. For solids at the same temperature, more complex crystal structures and allotropes can have higher entropy. For example, graphite (layered, soft) has higher entropy than diamond (rigid, highly ordered). For gases, polyatomic molecules generally have higher entropy than diatomic ones because of greater rotational and vibrational freedom.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-entropy-realms-2',
      data: {
        text: 'In solution, the entropy of a dissolved ionic compound depends on the number and size of ions produced. Electrolytes that dissociate into many ions (e.g. CaCl₂ → Ca²⁺ + 2Cl⁻) create more particles and thus higher entropy than weak electrolytes.'
      }
    },
    {
      type: 'checklist',
      id: 'cl-entropy-factors',
      data: {
        items: [
          { text: 'Entropy (S) measures disorder; units are J K⁻¹ mol⁻¹', checked: false },
          { text: 'Boltzmann equation: S = k_B ln W, where W = number of microstates (arrangements)', checked: false },
          { text: '5 molecules in 2 halves → 2⁵ = 32 arrangements; only 1 has all on same side', checked: false },
          { text: 'More particles → higher entropy', checked: false },
          { text: 'More complex molecules → higher entropy (more rotational/vibrational modes)', checked: false },
          { text: 'Gases have much higher entropy than liquids, which have higher than solids', checked: false },
          { text: 'Within the same state, structure and complexity affect entropy', checked: false }
        ]
      }
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Entropy measures the number of ways energy can be distributed (microstates). More particles, higher temperature, and greater disorder all increase entropy.\n\nApply: Predict the sign of ΔS for: (a) 2H₂O(l) → 2H₂(g) + O₂(g) (b) CaCO₃(s) → CaO(s) + CO₂(g)\n\nAnalyze: Why does a perfect crystal at 0 K have S = 0 (Third Law)? What does this mean for real substances?\n\nEvaluate: Is it possible for a reaction to decrease the entropy of the universe? Justify thermodynamically.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'sum-entropy-disorder',
      data: {
        text: 'Entropy quantifies disorder in a system, measured in J K⁻¹ mol⁻¹. More particles increase entropy. More complex molecules increase entropy due to additional rotational and vibrational modes. Gases have far higher entropy than liquids or solids due to the freedom of particle movement.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-0',
        blockId: 'h-boltzmann',
        prompt: 'State the Boltzmann entropy equation. Using the gas jar analogy with 5 molecules, explain why gas mixing is irreversible.'
      },
      {
        id: 'cue-1',
        blockId: 'h-entropy-definition',
        prompt: 'What does entropy measure, and what are its units?'
      },
      {
        id: 'cue-2',
        blockId: 'h-particle-count',
        prompt: 'Explain why dissolving NaCl increases entropy despite requiring energy input.'
      },
      {
        id: 'cue-3',
        blockId: 'h-molecular-complexity',
        prompt: 'Why does CO₂ have higher entropy than N₂ in the gas phase?'
      },
      {
        id: 'cue-4',
        blockId: 'h-state-ordering',
        prompt: 'List the three states in order of increasing entropy and explain why.'
      },
      {
        id: 'cue-5',
        blockId: 'h-entropy-realms',
        prompt: 'Why does graphite have higher entropy than diamond at the same temperature?'
      }
    ],
    summaryText: 'Entropy (S, J K⁻¹ mol⁻¹) quantifies disorder. More particles and complex molecules have higher entropy. Gases >> liquids > solids. Even within a state, complexity and structure affect S values.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Water Phase Entropy Data',
      detail: 'Ice (48 J K⁻¹ mol⁻¹) < liquid water (70 J K⁻¹ mol⁻¹) < steam (189 J K⁻¹ mol⁻¹). Gas state dominates.',
      year: '2023',
      source: 'Thermodynamic Data Tables',
      tags: ['entropy', 'phase-change', 'state']
    },
    {
      id: 'ev-2',
      title: 'Allotrope Entropy: Diamond vs Graphite',
      detail: 'Diamond S° ≈ 2.4 J K⁻¹ mol⁻¹ (rigid). Graphite S° ≈ 5.7 J K⁻¹ mol⁻¹ (layered, less rigid).',
      year: '2023',
      source: 'A-Level Chemistry Data Booklet',
      tags: ['entropy', 'allotropes', 'structure']
    }
  ]
};
