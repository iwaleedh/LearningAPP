export const note_chemistry_4_15_2 = {
  blocks: [
    {
      id: 'obj-sn-stereo',
      type: 'objective',
      data: {
        text: 'Understand how SN1 and SN2 mechanisms differ in their stereochemical outcomes at a chiral centre.'
      }
    },
    {
      id: 'h-sn1-mechanism',
      type: 'heading',
      data: { text: 'SN1 Mechanism & Racemisation', level: 2 }
    },
    {
      id: 'p-sn1-intro',
      type: 'paragraph',
      data: {
        text: 'SN1 (bimolecular nucleophilic substitution) is a two-step mechanism. Step 1: heterolytic cleavage of the C–X bond forms a planar carbocation intermediate (sp² hybridised). Step 2: the nucleophile attacks from either face of the planar carbon (above or below the plane), with equal probability. This leads to both R and S products in roughly equal amounts — a racemic mixture.'
      }
    },
    {
      id: 'p-sn1-stereo',
      type: 'paragraph',
      data: {
        text: 'The key stereochemical feature of SN1 is that the carbocation intermediate is planar (sp² carbon). The nucleophile has no preference for attacking from the front or back; both approaches are equally favoured. Even if you start with a pure enantiomer (e.g., only (R) configuration), the product is a racemate (50:50 mixture of (R) and (S)). This process is called racemisation. In practice, there may be slight preference for backside attack due to shielding by the leaving group (inversion slightly favoured), but substantial inversion of configuration still occurs.'
      }
    },
    {
      id: 'callout-sn1-stereo',
      type: 'callout',
      data: {
        style: 'key',
        title: 'SN1 Stereochemistry: Racemisation',
        text: 'SN1 reactions at chiral centres produce racemates (or partially racemised products) because the planar carbocation can be attacked by the nucleophile from either side. If you start with a pure (R) enantiomer, the product is a mixture of (R) and (S) — optical rotation decreases or disappears. This is a diagnostic feature of SN1: loss of optical activity or reduced optical activity indicates SN1 character.'
      }
    },
    {
      id: 'h-sn2-mechanism',
      type: 'heading',
      data: { text: 'SN2 Mechanism & Walden Inversion', level: 2 }
    },
    {
      id: 'p-sn2-intro',
      type: 'paragraph',
      data: {
        text: 'SN2 (bimolecular nucleophilic substitution) is a concerted, single-step mechanism. The nucleophile attacks from the rear (opposite side) of the C–X bond — a process called backside attack. This geometric constraint forces the three other groups on the carbon to flip to the opposite side (like an umbrella turning inside-out). The stereochemical outcome is inversion of configuration at the chiral centre.'
      }
    },
    {
      id: 'p-sn2-stereo',
      type: 'paragraph',
      data: {
        text: 'If you start with a pure (R) enantiomer and it reacts via SN2, the product is the pure (S) enantiomer. If you start with (S), you get (R). This is called Walden inversion, named after the chemist Paul Walden who first observed this phenomenon. The stereochemistry is predictable and absolute: every SN2 reaction inverts configuration. This is why SN2 is useful in synthesis when you need a specific stereoisomer.'
      }
    },
    {
      id: 'svg-walden',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220"><defs><style>.bond { stroke: #1f2937; stroke-width: 2; } .atom { fill: #6366f1; } .label { font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; } .group { font-size: 12px; fill: #1f2937; } .arrow { stroke: #2563eb; stroke-width: 2; fill: none; marker-end: url(#arrowhead); } .title { font-size: 11px; fill: #1f2937; font-weight: bold; }</style><defs><marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="#2563eb"/></marker></defs></defs><!-- Starting (R) configuration on left --><text x="80" y="15" class="title">Starting (R)</text><circle cx="80" cy="50" r="15" class="atom"/><text x="80" y="56" text-anchor="middle" fill="white" class="label">C</text><line x1="80" y1="35" x2="80" y2="10" class="bond"/><text x="80" y="8" text-anchor="middle" class="group">A</text><line x1="65" y1="50" x2="20" y2="50" class="bond"/><text x="10" y="55" text-anchor="middle" class="group">B</text><line x1="95" y1="60" x2="130" y2="90" class="bond"/><text x="140" y="95" text-anchor="middle" class="group">C</text><line x1="80" y1="65" x2="80" y2="95" class="bond"/><text x="95" y="85" text-anchor="middle" class="group">X (leaving)</text><!-- Nu attacking from back (right side) --><text x="280" y="15" class="title">SN2 Backside Attack</text><circle cx="280" cy="50" r="15" class="atom" opacity="0.5"/><text x="280" y="56" text-anchor="middle" fill="white" class="label">C</text><path d="M 250 80 Q 270 65 280 35" class="arrow" stroke-dasharray="4"/><text x="220" y="90" class="group">Nu⁻</text><text x="300" y="75" class="group">X⁻ leaves</text><!-- Product (S) configuration on right --><text x="340" y="15" class="title">Product (S)</text><circle cx="340" cy="50" r="15" class="atom"/><text x="340" y="56" text-anchor="middle" fill="white" class="label">C</text><line x1="340" y1="35" x2="340" y2="10" class="bond"/><text x="340" y="8" text-anchor="middle" class="group">A</text><line x1="355" y1="50" x2="400" y2="50" class="bond"/><text x="410" y="55" text-anchor="middle" class="group">B</text><line x1="325" y1="60" x2="290" y2="90" class="bond"/><text x="280" y="95" text-anchor="middle" class="group">C</text><line x1="340" y1="65" x2="340" y2="95" class="bond"/><text x="325" y="85" text-anchor="middle" class="group">Nu</text><!-- Central arrow --><path d="M 150 50 L 230 50" class="arrow"/><text x="190" y="40" class="group">SN2</text><!-- Bottom note --><text x="200" y="140" text-anchor="middle" font-size="11" fill="#1f2937" font-weight="bold">Inversion of configuration: (R) → (S) via backside attack and group flipping</text></svg>',
        caption: 'SN2 mechanism: the nucleophile attacks from the back (opposite side of the leaving group), causing the three other groups to flip. Configuration inverts: (R) becomes (S).'
      }
    },
    {
      id: 'h-sn1-vs-sn2',
      type: 'heading',
      data: { text: 'Comparing SN1 & SN2 Stereochemistry', level: 2 }
    },
    {
      id: 'table-sn-stereo',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'SN1', 'SN2'],
        rows: [
          ['Intermediate', 'Planar carbocation (sp²)', 'No intermediate (concerted)'],
          ['Attack geometry', 'From either face', 'Backside attack only'],
          ['Stereochemistry', 'Racemisation (both enantiomers)', 'Inversion of configuration'],
          ['Starting (R)', 'Product: ~50:50 (R)+(S)', 'Product: pure (S)'],
          ['Optical activity', 'Lost or reduced', 'Retained (inverted)'],
          ['Substrate effect', 'Tertiary > secondary', 'Primary > secondary > tertiary'],
          ['Leaving group ability', 'Good LG essential', 'Moderate LG acceptable']
        ],
        caption: 'SN1 vs SN2 stereochemical outcomes at a chiral centre. SN1 racemises (planar intermediate); SN2 inverts (backside attack).'
      }
    },
    {
      id: 'p-prediction',
      type: 'paragraph',
      data: {
        text: 'To predict the stereochemical outcome: (1) Identify the substrate structure — is it primary, secondary, or tertiary? (2) Identify the nucleophile — is it strong and small (favours SN2) or weak and bulky (favours SN1)? (3) Consider the solvent — polar aprotic favours SN2; polar protic favours SN1. (4) If conditions favour SN2, expect inversion. If conditions favour SN1, expect racemisation. Mixed conditions (e.g., secondary alkyl halide with moderate nucleophile) may give both mechanisms competing, resulting in partial inversion.'
      }
    },
    {
      id: 'callout-tip-stereo',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Predicting Stereochemistry',
        text: 'In an exam question, if you see "a solution of pure (R)-2-bromo-butane reacted with KOH/EtOH" — think SN1 (secondary + nucleophile not strong enough), so product is a racemate. But "a solution of pure (R)-1-bromo-butane reacted with NaOH/DMSO" — think SN2 (primary + strong nucleophile + aprotic solvent), so product is pure (S). Always identify the substrate and nucleophile first.'
      }
    },
    {
      id: 'p-examples',
      type: 'paragraph',
      data: {
        text: 'Example 1: (R)-1-bromo-2-methylpropane + NaI/acetone → (S)-1-iodo-2-methylpropane (SN2, inversion). Example 2: (R)-2-bromo-butane + H₂O → 50:50 (R)+(S)-butan-2-ol (SN1, racemisation). Example 3: Secondary alkyl chloride + aqueous NaOH (competing mechanisms) → mixture with more inversion than racemisation. These examples show why controlling reaction conditions is crucial in synthesis when stereochemistry matters.'
      }
    },
    {
      id: 'checklist-sn-stereo',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can explain why SN1 produces a racemate (planar carbocation).', checked: false },
          { text: 'I can explain why SN2 inverts configuration (backside attack).', checked: false },
          { text: 'I understand that SN2 is concerted (one step) while SN1 is two-step.', checked: false },
          { text: 'I can predict stereochemical outcome given substrate, nucleophile, and solvent.', checked: false }
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
        text: 'Understand: SN2 gives inversion of configuration (Walden inversion) because the nucleophile attacks from the back. SN1 gives racemisation because the planar carbocation can be attacked from either side.\n\nApply: Predict the stereochemical outcome of reacting (R)-2-bromobutane with OH⁻ via SN2.\n\nAnalyze: Why does tertiary haloalkane SN1 produce a racemic mixture while primary SN2 gives a single enantiomer?\n\nEvaluate: A reaction gives 70% inversion and 30% retention. Does this suggest pure SN1, pure SN2, or a mixture?'
      },
      terms: []
    },
    {
      id: 'summary-sn-stereo',
      type: 'summary',
      data: {
        text: 'SN1 reactions produce racemates (or partially racemised products) because the planar carbocation intermediate can be attacked by nucleophiles from either face. SN2 reactions produce pure inversion of configuration (Walden inversion) because nucleophiles attack from the back, causing the three groups to flip. To predict stereochemistry: assess substrate (primary/secondary/tertiary) and nucleophile strength — strong nucleophiles with primary substrates favour SN2 (inversion); weak nucleophiles with tertiary substrates favour SN1 (racemisation).'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-sn1-stereo',
        prompt: 'Why does SN1 produce a racemate even starting from a pure enantiomer?'
      },
      {
        id: 'cue-2',
        blockId: 'p-sn2-intro',
        prompt: 'What is backside attack and why does it cause inversion of configuration?'
      },
      {
        id: 'cue-3',
        blockId: 'table-sn-stereo',
        prompt: 'Compare SN1 and SN2 stereochemical outcomes and intermediates.'
      },
      {
        id: 'cue-4',
        blockId: 'p-prediction',
        prompt: 'How do you predict whether a reaction will proceed via SN1 or SN2?'
      },
      {
        id: 'cue-5',
        blockId: 'callout-tip-stereo',
        prompt: 'Give an example of a substrate/nucleophile combination that favours SN2 (inversion).'
      }
    ],
    summaryText: 'SN1 proceeds via a planar carbocation; the nucleophile attacks from either face, producing a racemate (racemisation). SN2 is concerted; the nucleophile attacks from the back, flipping the three groups and inverting configuration (Walden inversion). Primary substrates + strong nucleophiles (e.g., NaOH/DMSO) → SN2 (inversion). Tertiary substrates + weak nucleophiles (e.g., H₂O) → SN1 (racemisation).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Walden inversion in laboratory synthesis',
      detail: 'SN2 reactions are widely used in organic synthesis when a specific enantiomer must be prepared. For example, the synthesis of (S)-naproxen (an anti-inflammatory drug) uses a chiral SN2 step with a strong nucleophile to invert configuration at a critical chiral centre. This guarantees the desired stereochemistry without needing optical resolution.',
      year: '2023',
      source: 'Organic Chemistry Synthesis',
      tags: ['mechanism', 'stereochemistry', 'SN2', 'synthesis']
    }
  ]
};
