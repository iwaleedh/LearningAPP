export const note_chemistry_5_20_2 = {
  blocks: [
    {
      id: 'obj-chain-extension',
      type: 'objective',
      data: {
        text: 'Extend and modify carbon chains using nitrile synthesis, Grignard reagents, and oxidation; plan multi-step synthetic routes to increase or decrease chain length.'
      }
    },
    {
      id: 'h-nitrile-synthesis',
      type: 'heading',
      data: { text: 'Chain Extension via Nitrile Synthesis', level: 2 }
    },
    {
      id: 'p-nitrile-intro',
      type: 'paragraph',
      data: {
        text: 'Nitriles (R−C≡N) are powerful synthons for extending carbon chains by one atom. Alkyl halides react with potassium cyanide (KCN) in ethanol solvent via nucleophilic substitution (SN2), replacing the halide with a cyanide group. The nitrile product can then be converted to other functional groups, enabling further manipulation.'
      }
    },
    {
      id: 'list-nitrile-pathway',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'R−Br (or R−I, R−Cl) + KCN in ethanol → R−C≡N + KBr',
          'Heat moderately (reflux ~60°C) for SN2 reaction to proceed',
          'Nitrile is stable intermediate; can be stored or purified',
          'Nitrile can then be reduced to primary amine (LiAlH₄) or carboxylic acid (H⁺/H₂O)'
        ]
      }
    },
    {
      id: 'p-nitrile-conditions',
      type: 'paragraph',
      data: {
        text: 'The SN2 mechanism is favoured with primary alkyl halides and ethanol solvent (polar aprotic). Hindered secondary and tertiary halides give poor yields due to competing elimination. The nitrile synthesis is reliable for unbranched or slightly branched primary halides, making it a standard route for +1 carbon extension.'
      }
    },
    {
      id: 'h-nitrile-to-amine',
      type: 'heading',
      data: { text: 'Nitrile Reduction to Primary Amine', level: 3 }
    },
    {
      id: 'eq-nitrile-amine',
      type: 'equation',
      data: {
        html: 'R−C≡N + 4[H] <span style="color: var(--color-text-secondary);">(LiAlH₄)</span> → R−CH₂−NH₂',
        caption: 'Reduction of nitrile to primary amine using lithium aluminium hydride'
      }
    },
    {
      id: 'p-nitrile-amine',
      type: 'paragraph',
      data: {
        text: 'Lithium aluminium hydride (LiAlH₄) is a powerful reducing agent that converts nitriles to primary amines. The reaction is carried out in dry ether, as LiAlH₄ reacts violently with water and alcohols. The product is a primary amine that can be protonated to the ammonium salt with aqueous acid. This gives primary amines from secondary carbon sources.'
      }
    },
    {
      id: 'callout-nitrile-amine-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Synthesis of Ethylamine from Ethyl Halide',
        text: 'Starting material: CH₃CH₂Br (ethyl bromide)\n\nStep 1: CH₃CH₂Br + KCN (ethanol, reflux) → CH₃CH₂−C≡N (propionitrile) + KBr\n\nStep 2: CH₃CH₂−C≡N + LiAlH₄ (ether) → CH₃CH₂−CH₂−NH₂ (propylamine)\n\nResult: +1 carbon added to primary chain via nitrile intermediate'
      }
    },
    {
      id: 'h-nitrile-to-acid',
      type: 'heading',
      data: { text: 'Nitrile Hydrolysis to Carboxylic Acid', level: 3 }
    },
    {
      id: 'eq-nitrile-acid',
      type: 'equation',
      data: {
        html: 'R−C≡N + 2H₂O <span style="color: var(--color-text-secondary);">(H⁺ catalyst, heat)</span> → R−COOH + NH₃',
        caption: 'Hydrolysis of nitrile to carboxylic acid under acidic conditions'
      }
    },
    {
      id: 'p-nitrile-acid',
      type: 'paragraph',
      data: {
        text: 'Nitriles can be hydrolysed to carboxylic acids using aqueous acid (HCl or H₂SO₄) under reflux (heating). The nitrile triple bond is broken, water adds, and ammonia is released. This provides a route to carboxylic acids from alkyl halides, with +1 carbon extension. Alternatively, alkaline hydrolysis (NaOH/H₂O, heat) gives the carboxylate salt, which is then acidified.'
      }
    },
    {
      id: 'callout-nitrile-acid-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Synthesis of Propionic Acid from Ethyl Halide',
        text: 'Starting material: CH₃CH₂Br (ethyl bromide)\n\nStep 1: CH₃CH₂Br + KCN (ethanol, reflux) → CH₃CH₂−C≡N (propionitrile)\n\nStep 2: CH₃CH₂−C≡N + H₂SO₄/H₂O (reflux) → CH₃CH₂−COOH (propionic acid) + NH₃↑\n\nResult: Carboxylic acid with +1 carbon'
      }
    },
    {
      id: 'h-oxidative-shortening',
      type: 'heading',
      data: { text: 'Chain Shortening by Oxidative Cleavage', level: 2 }
    },
    {
      id: 'p-oxidative-intro',
      type: 'paragraph',
      data: {
        text: 'Carbon chains can be shortened by oxidative cleavage of side chains on aromatic rings. Potassium permanganate (KMnO₄) under alkaline conditions oxidises alkyl chains to carboxylic acids. Even a single carbon substituent on benzene is oxidised to −COOH, effectively replacing the entire side chain with a carboxylic acid group. This allows for chain reduction.'
      }
    },
    {
      id: 'eq-arene-oxidation',
      type: 'equation',
      data: {
        html: 'Ar−(CH₂)<sub>n</sub>−CH₃ + KMnO₄ (OH⁻, heat) → Ar−COOH + CO₂ (excess)',
        caption: 'Oxidative cleavage of alkyl side chains on aromatic rings'
      }
    },
    {
      id: 'list-oxidative-examples',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Methylbenzene (toluene, C₆H₅−CH₃) + KMnO₄ → benzoic acid (C₆H₅−COOH)',
          'Ethylbenzene + KMnO₄ → benzoic acid + CO₂ (entire side chain oxidised)',
          'Isopropylbenzene + KMnO₄ → benzoic acid + CO₂ (only −COOH remains on ring)',
          'Conditions: aqueous KMnO₄, heated (~80°C), alkaline solution (NaOH or K₂CO₃)',
          'The ring itself is stable; only the side chain is oxidised'
        ]
      }
    },
    {
      id: 'callout-oxidation-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Aromatic Side Chain Oxidation',
        text: 'KMnO₄/NaOH (aq, heat) oxidises ALL alkyl groups on aromatic rings to carboxylic acids (−COOH). This is useful for:\n• Converting methylbenzene to benzoic acid (chain shortening)\n• Removing protecting groups or simplifying aromatic structures\n• Introducing carboxylic acid functional groups into otherwise inert aromatic systems'
      }
    },
    {
      id: 'h-synthetic-planning',
      type: 'heading',
      data: { text: 'Retrosynthetic Analysis and Route Planning', level: 2 }
    },
    {
      id: 'p-retrosynthesis-intro',
      type: 'paragraph',
      data: {
        text: 'Retrosynthetic analysis is a strategy for planning multi-step syntheses. Start with the target molecule and work backwards, identifying one bond or functional group that can be disconnected. Ask "what precursor would give this product?" Repeat until reaching starting materials. Forward synthesis then applies the reactions in reverse order. This avoids trial-and-error and ensures efficient route planning.'
      }
    },
    {
      id: 'p-retrosynthesis-strategy',
      type: 'paragraph',
      data: {
        text: 'When planning a chain extension or modification:\n1. Identify the new C−C bond or functional group added\n2. Choose a reaction that forms this bond (nitrile, Grignard, condensation)\n3. Plan any protecting group strategy if multiple functional groups present\n4. Consider regioselectivity (SN2 on primary carbon preferred)\n5. Check that each intermediate is stable and isolable\n6. Verify atom economy and practicality (cost, safety, yield)'
      }
    },
    {
      id: 'callout-retro-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Retrosynthetic Route Planning: Butanoic Acid from Ethanol',
        text: 'Target: CH₃CH₂CH₂COOH (butanoic acid)\nStart: CH₃CH₂OH (ethanol)\n\nBackward: CH₃CH₂CH₂COOH ← CH₃CH₂CN (nitrile intermediate)\nHow to make CN? ← CH₃CH₂Br (ethyl bromide) via SN2 with KCN\nHow to make Br? ← CH₃CH₂OH (ethanol) + HBr or PBr₃\n\nForward synthesis:\n1. CH₃CH₂OH + HBr → CH₃CH₂Br (heat, SN2)\n2. CH₃CH₂Br + KCN (ethanol, reflux) → CH₃CH₂CN\n3. CH₃CH₂CN + H₂SO₄/H₂O (reflux) → CH₃CH₂CH₂COOH + NH₃↑\n\nTotal: +1 carbon via nitrile, then hydrolysis to acid'
      }
    },
    {
      id: 'callout-grignard-mention',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Grignard Reagents (Beyond Core A-Level)',
        text: 'Grignard reagents (RMgX) are powerful carbon nucleophiles used for C−C bond formation. They attack C=O (ketones/aldehydes → secondary/tertiary alcohols, CO₂ → carboxylic acids) and can be used for chain extension. Not required at A-level but briefly mentioned in advanced synthesis contexts. Reactions require anhydrous conditions and dry ether solvent due to reactivity with water and oxygen.'
      }
    },
    {
      id: 'checklist-chain-extension',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can write the SN2 mechanism for RBr + KCN → RCN', checked: false },
          { text: 'I know nitriles add +1 carbon to a chain', checked: false },
          { text: 'I can reduce a nitrile to primary amine using LiAlH₄', checked: false },
          { text: 'I can hydrolyse a nitrile to carboxylic acid under acid conditions', checked: false },
          { text: 'I know KMnO₄ oxidises aromatic side chains to carboxylic acids', checked: false },
          { text: 'I can plan a retrosynthetic route for a 2–3 step synthesis', checked: false }
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
        text: 'Understand: Carbon chain extension uses nitrile synthesis (RBr + KCN → RCN, adds 1 C) or Grignard reagents (RMgBr + CO₂ → RCOOH). Oxidation/reduction change functional groups.\n\nApply: Propose a synthesis of propanoic acid from bromoethane using nitrile hydrolysis.\n\nAnalyze: Why is the nitrile route preferred over direct carboxylation for extending carbon chains in the lab?\n\nEvaluate: Grignard reagents must be used under anhydrous conditions. Assess the practical challenges this presents.'
      },
      terms: []
    },
    {
      id: 'summary-chain-extension',
      type: 'summary',
      data: {
        text: 'Nitriles (R−C≡N) add +1 carbon. Synthesis: RBr + KCN/EtOH → RCN; then reduce (LiAlH₄ → amine) or hydrolyse (H⁺/H₂O → acid). Chain shortening: KMnO₄/NaOH oxidises aromatic side chains to carboxylic acids. Retrosynthetic analysis plans multi-step routes by working backwards from target to starting materials.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-nitrile-intro',
        prompt: 'Write the equation for forming a nitrile from a primary alkyl bromide using KCN. Why is ethanol preferred as solvent?'
      },
      {
        id: 'cue-2',
        blockId: 'eq-nitrile-amine',
        prompt: 'What is the reducing agent for converting nitriles to primary amines? Write the equation.'
      },
      {
        id: 'cue-3',
        blockId: 'eq-nitrile-acid',
        prompt: 'How is a nitrile hydrolysed to a carboxylic acid? What are the reagents and conditions?'
      },
      {
        id: 'cue-4',
        blockId: 'eq-arene-oxidation',
        prompt: 'What happens when an alkyl-substituted benzene is treated with hot KMnO₄ under alkaline conditions?'
      },
      {
        id: 'cue-5',
        blockId: 'p-retrosynthesis-intro',
        prompt: 'Explain retrosynthetic analysis: how do you work backwards from a target molecule to plan a synthesis?'
      }
    ],
    summaryText: 'Nitriles add +1 carbon: RBr + KCN/EtOH → RCN. Reduce with LiAlH₄ to primary amine (RCH₂NH₂) or hydrolyse with H⁺/H₂O to carboxylic acid (RCOOH). Aromatic chains: KMnO₄/NaOH oxidises side chains to carboxylic acids. Retrosynthetic analysis: work backwards from target to starting materials.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Carbon Chain Extension in Organic Synthesis',
      detail: 'Nitrile synthesis is a fundamental method for C−C bond formation at A-level. Grignard reagents are mentioned in advanced synthesis but not required for core specification.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH15)',
      tags: ['synthesis', 'nitrile', 'chain', 'oxidation']
    }
  ]
};
