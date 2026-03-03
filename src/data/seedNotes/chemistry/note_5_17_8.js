export const note_chemistry_5_17_8 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-redox',
      data: {
        text: 'Understand redox chemistry of transition metals; write oxidation and reduction half-equations; explain disproportionation; apply redox to Fe²⁺/Fe³⁺, Cr³⁺, and MnO₄⁻ reactions.'
      }
    },
    {
      type: 'heading',
      id: 'h-redox-principles',
      data: { text: 'Redox Chemistry and Oxidation States', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-redox-intro',
      data: {
        text: 'Transition metals undergo redox (oxidation-reduction) reactions because they can easily change oxidation states. A <strong>redox reaction</strong> involves the transfer of electrons from a reducing agent (oxidised) to an oxidising agent (reduced). Because transition metals have multiple accessible oxidation states, they readily participate in both oxidation and reduction. The variable oxidation states make transition metals central to redox chemistry in aqueous solution and in biological systems.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-half-equation-method',
      data: {
        text: '<strong>Half-equation method for balancing redox equations:</strong><br/>' +
        '1. Write the oxidation half-equation (showing loss of electrons)<br/>' +
        '2. Write the reduction half-equation (showing gain of electrons)<br/>' +
        '3. Balance atoms (excluding O and H)<br/>' +
        '4. Balance O by adding H₂O<br/>' +
        '5. Balance H by adding H⁺ (acidic) or OH⁻ (alkaline)<br/>' +
        '6. Balance charge by adding electrons<br/>' +
        '7. Multiply equations to equalise electrons<br/>' +
        '8. Add half-equations and cancel spectator ions'
      }
    },
    {
      type: 'heading',
      id: 'h-iron-redox',
      data: { text: 'Iron Redox: Fe²⁺ and Fe³⁺', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-iron-redox-intro',
      data: {
        text: 'Iron exhibits +2 and +3 oxidation states, which readily interconvert through redox reactions. Fe²⁺ is thermodynamically less stable than Fe³⁺ in aerated aqueous solution (O₂ oxidises Fe²⁺ to Fe³⁺), but kinetically, the oxidation is slow unless a catalyst (such as Fe³⁺ itself) is present.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-iron-oxidation-example',
      data: {
        text: '<strong>Example 1: Fe²⁺ oxidation by MnO₄⁻ in acidic solution</strong><br/>' +
        '<strong>Half-equations:</strong><br/>' +
        'Oxidation: Fe²⁺ → Fe³⁺ + e⁻<br/>' +
        'Reduction: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O<br/>' +
        '<strong>Balancing electrons:</strong> Multiply oxidation by 5<br/>' +
        '5Fe²⁺ → 5Fe³⁺ + 5e⁻<br/>' +
        '<strong>Overall equation:</strong> 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O<br/>' +
        '<strong>Observation:</strong> Purple MnO₄⁻ decolourises to colourless Mn²⁺ as Fe²⁺ is oxidised. This is a titrimetric analysis method.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-iron-reduction-example',
      data: {
        text: '<strong>Example 2: Fe³⁺ reduction by Cu</strong><br/>' +
        '<strong>Half-equations:</strong><br/>' +
        'Oxidation: Cu → Cu²⁺ + 2e⁻<br/>' +
        'Reduction: Fe³⁺ + e⁻ → Fe²⁺<br/>' +
        '<strong>Balancing electrons:</strong> Multiply reduction by 2<br/>' +
        '2Fe³⁺ + 2e⁻ → 2Fe²⁺<br/>' +
        '<strong>Overall equation:</strong> Cu + 2Fe³⁺ → Cu²⁺ + 2Fe²⁺<br/>' +
        '<strong>Observation:</strong> Brown Fe³⁺ solution + Cu metal → pale blue/green Cu²⁺ and pale Fe²⁺ solution.'
      }
    },
    {
      type: 'heading',
      id: 'h-chromium-redox',
      data: { text: 'Chromium Redox: Cr³⁺ ⇌ CrO₄²⁻', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-chromium-intro',
      data: {
        text: 'Chromium(III) (Cr³⁺, green) can be oxidised to chromium(VI) in the form of chromate ion (CrO₄²⁻, yellow) or dichromate ion (Cr₂O₇²⁻, orange). The direction of oxidation depends on pH and the oxidising agent used. In alkaline conditions, Cr³⁺ forms CrO₄²⁻ (yellow); in acidic conditions, it forms Cr₂O₇²⁻ (orange).'
      }
    },
    {
      type: 'paragraph',
      id: 'p-chromium-oxidation',
      data: {
        text: '<strong>Example: Cr³⁺ oxidation to CrO₄²⁻ in alkaline solution</strong><br/>' +
        '<strong>Equation:</strong> 2Cr³⁺ + 3H₂O₂ + 10OH⁻ → 2CrO₄²⁻ + 8H₂O<br/>' +
        'or using H₂O₂ (hydrogen peroxide) as oxidising agent:<br/>' +
        '<strong>Half-equations (in alkaline):</strong><br/>' +
        'Oxidation: Cr³⁺ + 4OH⁻ → CrO₄²⁻ + 6H⁺ + 3e⁻ (actually: Cr³⁺ + 4OH⁻ → CrO₄²⁻ + 4H₂O + 3e⁻, net: CrO₄²⁻ + 3H₂O)<br/>' +
        'Reduction: H₂O₂ + 2e⁻ → 2OH⁻<br/>' +
        '<strong>Observation:</strong> Green Cr³⁺ solution + H₂O₂ + NaOH → yellow CrO₄²⁻ solution. This is a classic test for Cr³⁺.'
      }
    },
    {
      type: 'heading',
      id: 'h-permanganate-redox',
      data: { text: 'Permanganate Redox: MnO₄⁻ Reactions', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-permanganate-intro',
      data: {
        text: 'Permanganate ion (MnO₄⁻, Mn in +7 oxidation state) is a powerful oxidising agent. The product of reduction depends on the pH and the nature of the reducing agent. In different pH environments, MnO₄⁻ is reduced to different products.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-permanganate-acidic',
      data: {
        text: '<strong>In acidic solution:</strong> MnO₄⁻ → Mn²⁺ (colourless)<br/>' +
        'Reduction: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O<br/>' +
        '<strong>Example:</strong> 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O<br/>' +
        '<strong>Observation:</strong> Deep purple MnO₄⁻ decolourises as it is reduced.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-permanganate-neutral',
      data: {
        text: '<strong>In neutral solution:</strong> MnO₄⁻ → MnO₂ (brown precipitate)<br/>' +
        'Reduction: MnO₄⁻ + 4H⁺ + 3e⁻ → MnO₂ + 2H₂O (in neutral pH, equilibrium gives this approximately)<br/>' +
        '<strong>Observation:</strong> Purple solution → brown precipitate of MnO₂ forms.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-permanganate-alkaline',
      data: {
        text: '<strong>In alkaline solution:</strong> MnO₄⁻ → MnO₄²⁻ or MnO₂ (green or brown)<br/>' +
        'Reduction: MnO₄⁻ + e⁻ → MnO₄²⁻ (one-electron reduction to manganate, green)<br/>' +
        'or further: MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻ (brown MnO₂)<br/>' +
        '<strong>Observation:</strong> Purple MnO₄⁻ → green MnO₄²⁻ or brown MnO₂ depending on conditions.'
      }
    },
    {
      type: 'callout',
      id: 'callout-permanganate-colours',
      data: {
        style: 'key',
        title: 'Permanganate Colour Changes',
        text: 'Purple (MnO₄⁻, +7) → Colourless (Mn²⁺, +2) in acidic<br/>Purple (MnO₄⁻, +7) → Brown precipitate (MnO₂, +4) in neutral<br/>Purple (MnO₄⁻, +7) → Green (MnO₄²⁻, +6) in alkaline<br/>These colour changes are diagnostic and widely used in qualitative analysis.'
      }
    },
    {
      type: 'heading',
      id: 'h-disproportionation',
      data: { text: 'Disproportionation Reactions', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-disproportionation-def',
      data: {
        text: '<strong>Disproportionation</strong> is a redox reaction in which a single element in one oxidation state is simultaneously oxidised and reduced, producing two different oxidation states. The element acts as both the reducing agent and the oxidising agent. This occurs most commonly with transition metals in intermediate oxidation states.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-copper-disproportionation',
      data: {
        text: '<strong>Example: Copper(I) disproportionation</strong><br/>' +
        'Cu⁺ is unstable in aqueous solution and undergoes disproportionation:<br/>' +
        '2Cu⁺ → Cu + Cu²⁺<br/>' +
        '<strong>Half-equations:</strong><br/>' +
        'Oxidation: Cu⁺ → Cu²⁺ + e⁻<br/>' +
        'Reduction: Cu⁺ + e⁻ → Cu<br/>' +
        'Overall: 2Cu⁺ → Cu(0) + Cu(+2)<br/>' +
        '<strong>Explanation:</strong> Although Cu⁺ with its d¹⁰ configuration is electron-rich, it is thermodynamically unstable in aqueous solution. The disproportionation produces metallic Cu (red precipitate or metal) and Cu²⁺ (blue in solution). Cu⁺ compounds are stable in solid state (e.g., Cu₂O, CuCl) but disproportionate in solution.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-sulphite-disproportionation',
      data: {
        text: '<strong>Example: Chlorine disproportionation (for comparison)</strong><br/>' +
        'Cl₂ + H₂O ⇌ HCl + HClO<br/>' +
        'Cl₂ (0) → Cl⁻ (−1) + ClO⁻ (+1)<br/>' +
        'Half-equations:<br/>' +
        'Reduction: Cl₂ + 2e⁻ → 2Cl⁻<br/>' +
        'Oxidation: Cl₂ → 2ClO⁻ + 4H⁺ + 4e⁻ (in basic: Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O)<br/>' +
        'Disproportionation is common in halogens (Group 17) and transition metals in intermediate oxidation states.'
      }
    },
    {
      type: 'checklist',
      id: 'checklist-redox',
      data: {
        items: [
          { text: 'Redox: half-equation method for balancing (O, H, charge, electrons)', checked: false },
          { text: 'Fe²⁺ oxidised to Fe³⁺ by MnO₄⁻; purple colour disappears', checked: false },
          { text: 'Fe³⁺ reduced to Fe²⁺ by Cu; brown → pale solution', checked: false },
          { text: 'Cr³⁺ oxidised to CrO₄²⁻ in alkaline solution; green → yellow', checked: false },
          { text: 'MnO₄⁻ reduces to different products by pH: Mn²⁺ (acidic), MnO₂ (neutral), MnO₄²⁻ (alkaline)', checked: false },
          { text: 'Disproportionation: 2Cu⁺ → Cu + Cu²⁺', checked: false }
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
        text: 'Understand: Redox half-equations balance atoms, charges, and electrons. Combining half-equations gives the overall redox equation. Oxidation numbers track electron transfer.\n\nApply: Write half-equations for MnO₄⁻ → Mn²⁺ in acidic solution and combine with Fe²⁺ → Fe³⁺.\n\nAnalyze: In disproportionation, the same species is both oxidised and reduced. Explain using Cu⁺ → Cu²⁺ + Cu.\n\nEvaluate: Can you always predict redox products from E° values alone? Discuss kinetic vs thermodynamic control.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'summary-redox',
      data: {
        text: 'Transition metals undergo redox via variable oxidation states. Half-equation method balances O, H, charge, and electrons. Iron: Fe²⁺ oxidised by MnO₄⁻ (5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O); reduced by Cu. Chromium: Cr³⁺ (green) oxidised to CrO₄²⁻ (yellow) in alkali by H₂O₂. Permanganate colours: MnO₄⁻ (purple) → Mn²⁺ (colourless, acidic), MnO₂ (brown, neutral), MnO₄²⁻ (green, alkaline). Disproportionation: 2Cu⁺ → Cu + Cu²⁺ (Cu⁺ unstable in solution). These redox reactions are fundamental to transition metal chemistry and analytical methods.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-half-equation-method',
        prompt: 'Outline the half-equation method for balancing redox equations.'
      },
      {
        id: 'cue-2',
        blockId: 'p-iron-oxidation-example',
        prompt: 'Write the equation for Fe²⁺ oxidation by permanganate in acidic solution and describe the colour change.'
      },
      {
        id: 'cue-3',
        blockId: 'p-chromium-oxidation',
        prompt: 'Describe the oxidation of Cr³⁺ to CrO₄²⁻ in alkaline solution. What colour change occurs?'
      },
      {
        id: 'cue-4',
        blockId: 'p-permanganate-acidic',
        prompt: 'Explain what permanganate reduces to in acidic, neutral, and alkaline solutions.'
      },
      {
        id: 'cue-5',
        blockId: 'p-copper-disproportionation',
        prompt: 'Define disproportionation and give the equation for Cu⁺ disproportionation.'
      }
    ],
    summaryText: 'Half-equation method: balance atoms, O (add H₂O), H (add H⁺/OH⁻), charge (add e⁻). Fe²⁺ → Fe³⁺ by MnO₄⁻: 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O. Cr³⁺ → CrO₄²⁻ (green → yellow) in alkali. MnO₄⁻: purple → Mn²⁺ colourless (acidic), MnO₂ brown (neutral), MnO₄²⁻ green (alkaline). Disproportionation: 2Cu⁺ → Cu + Cu²⁺.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Transition Metal Redox Chemistry',
      detail: 'Redox reactions of transition metals are used extensively in analytical chemistry (permanganate titrations), industrial processes, and biological systems. The variable oxidation states enable reversible electron transfer.',
      year: '2023',
      source: 'A-Level Chemistry Redox',
      tags: ['redox', 'Fe', 'Cr', 'Mn', 'disproportionation']
    }
  ]
};
