export const note_chemistry_5_20_4 = {
  blocks: [
    {
      id: 'obj-aspirin-practical',
      type: 'objective',
      data: {
        text: 'Prepare aspirin (acetylsalicylic acid) via esterification of salicylic acid; purify by recrystallisation; determine purity using melting point, TLC, and FeCl₃ test; calculate yield and discuss sources of error.'
      }
    },
    {
      id: 'h-aspirin-intro',
      type: 'heading',
      data: { text: 'Aspirin Synthesis: Reaction Overview', level: 2 }
    },
    {
      id: 'p-aspirin-intro',
      type: 'paragraph',
      data: {
        text: 'Aspirin (acetylsalicylic acid, 2-acetoxybenzoic acid) is one of the most important drugs in the world. It is synthesised by esterification of salicylic acid (2-hydroxybenzoic acid) using ethanoic anhydride as the acetylating agent. The reaction is exothermic and rapid at room temperature or with gentle warming, making it an ideal practical synthesis for A-level students. The product precipitates on cooling and can be purified by recrystallisation.'
      }
    },
    {
      id: 'eq-aspirin-reaction',
      type: 'equation',
      data: {
        html: 'C₆H₄(OH)(COOH) + (CH₃CO)<sub>2</sub>O → C₆H₄(OCOCH₃)(COOH) + CH₃COOH',
        caption: 'Esterification of salicylic acid with ethanoic anhydride to produce aspirin and acetic acid'
      }
    },
    {
      id: 'p-aspirin-mechanism',
      type: 'paragraph',
      data: {
        text: 'The reaction mechanism involves nucleophilic acyl substitution. The hydroxyl group (−OH) on the benzene ring acts as a nucleophile, attacking the electrophilic carbonyl carbon of the anhydride. A tetrahedral intermediate forms, collapses, and releases acetic acid as the leaving group. The ester is formed on the aromatic ring; the carboxylic acid (−COOH) remains unchanged. H₂SO₄ can be used as a catalyst to speed the reaction, though anhydride reactions are often fast enough without.'
      }
    },
    {
      id: 'h-aspirin-procedure',
      type: 'heading',
      data: { text: 'Experimental Procedure', level: 2 }
    },
    {
      id: 'list-aspirin-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Weigh ~2 g salicylic acid (Mr = 138, ~0.0145 mol)',
          'Add ~4 cm³ ethanoic anhydride (excess, ~20 cm³ per gram salicylic acid typically)',
          'If using catalyst, add 1–2 drops concentrated H₂SO₄',
          'Heat gently (water bath ~50–60°C) or stir at room temperature for 5–10 minutes until reaction complete (acid dissolves)',
          'Cool the mixture to room temperature; product begins to precipitate as white crystals',
          'Cool further in ice bath for 10–15 minutes to maximise precipitation',
          'Filter under reduced pressure (Buchner funnel + filter flask) to collect aspirin crystals',
          'Rinse crystals with small portions of ice-cold distilled water to remove water-soluble byproducts',
          'Dry the crystals in an oven at ~80°C for 15–20 minutes until constant mass'
        ]
      }
    },
    {
      id: 'p-aspirin-conditions',
      type: 'paragraph',
      data: {
        text: 'Ethanoic anhydride (Ac₂O) is used in excess to ensure all salicylic acid reacts and to shift the equilibrium towards product. The reaction is exothermic; gentle warming speeds it up but is not essential. The product has low solubility in cold water, so it precipitates readily. Acetic acid (byproduct) is water-soluble and volatile, so it is washed away and evaporates during drying.'
      }
    },
    {
      id: 'h-aspirin-purification',
      type: 'heading',
      data: { text: 'Purification by Recrystallisation', level: 2 }
    },
    {
      id: 'p-recrystallisation-intro',
      type: 'paragraph',
      data: {
        text: 'Recrystallisation purifies a crude solid by dissolving it in hot solvent, filtering while hot to remove insoluble impurities, and allowing it to cool so pure crystals reform. For aspirin, hot ethanol is typically used: aspirin is soluble when hot but crystallises out when cold, while water-soluble impurities (acetic acid, salts) dissolve in both hot and cold ethanol but preferentially stay in solution.'
      }
    },
    {
      id: 'list-recrystallisation-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Add crude aspirin crystals to a beaker with ethanol (just enough to dissolve when heated)',
          'Heat gently (water bath ~60–70°C) until all solid dissolves',
          'Filter the hot solution through a funnel with hot filter paper into a clean beaker to remove insoluble impurities (e.g. unreacted salicylic acid)',
          'Allow the filtrate to cool slowly to room temperature (crystals form as solution cools)',
          'Cool further in ice bath for 10–15 minutes',
          'Filter under reduced pressure to collect recrystallised aspirin',
          'Rinse with small portions of ice-cold ethanol',
          'Dry thoroughly in oven or under vacuum'
        ]
      }
    },
    {
      id: 'callout-recrystallisation-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Recrystallisation Best Practices',
        text: 'Choose solvent where product is soluble when hot, insoluble when cold. Common solvents for aspirin: hot ethanol (usual), hot water (less preferred, aspirin slightly more soluble cold), or 50:50 ethanol:water.\n\nAim for slow, steady cooling to form large, pure crystals. Rapid cooling gives many small crystals with surface impurities trapped. Use a clean vessel and avoid dust (cover loosely with filter paper).\n\nFinal crystals should be white, uniform, and have sharp melting point (pure aspirin ≈ 135°C).'
      }
    },
    {
      id: 'h-purity-testing',
      type: 'heading',
      data: { text: 'Testing Purity of Aspirin Product', level: 2 }
    },
    {
      id: 'p-purity-intro',
      type: 'paragraph',
      data: {
        text: 'Several methods confirm that aspirin is pure and identifies possible impurities. The three main tests are melting point (indicates purity), thin-layer chromatography or TLC (separates components), and the FeCl₃ colour test (detects unreacted salicylic acid, which has a free phenolic −OH group).'
      }
    },
    {
      id: 'h-melting-point-test',
      type: 'heading',
      data: { text: 'Melting Point Determination', level: 3 }
    },
    {
      id: 'p-melting-point',
      type: 'paragraph',
      data: {
        text: 'Pure aspirin has a sharp melting point of 135–136°C. A mixture melts over a broad temperature range (e.g. 110–130°C) due to impurities lowering the melting point (melting point depression). If crude product melts at ~120°C, recrystallisation has likely improved purity; if it melts at 135°C sharp (over 1–2°C range), the product is pure. This is a simple, quick test requiring only a melting point apparatus and a small amount of sample.'
      }
    },
    {
      id: 'h-ferric-chloride-test',
      type: 'heading',
      data: { text: 'FeCl₃ Colour Test for Phenolic Impurities', level: 3 }
    },
    {
      id: 'p-fecl3-intro',
      type: 'paragraph',
      data: {
        text: 'Salicylic acid contains a phenolic hydroxyl group (−OH directly on benzene ring). This reacts with FeCl₃ solution to give a purple/violet colour. Aspirin, having an esterified the phenolic −OH (now −O−CO−CH₃), does NOT produce colour with FeCl₃. This test quickly identifies unreacted starting material.'
      }
    },
    {
      id: 'list-fecl3-procedure',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Dissolve a small sample (~10 mg) of aspirin in ethanol (~2 cm³)',
          'Add 1–2 drops of FeCl₃ solution (typically 0.5 mol dm⁻³ or saturated aqueous)',
          'Observe colour change:',
          '  • Purple/violet colour = phenolic −OH present (salicylic acid impurity)',
          '  • No colour (colourless or pale yellow) = no phenolic −OH (pure aspirin)'
        ]
      }
    },
    {
      id: 'callout-fecl3-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'FeCl₃ Test Interpretation',
        text: 'Salicylic acid (impurity): phenolic −OH reacts with Fe³⁺ → purple/violet complex\nAspirin (product): ester −O−CO−CH₃, no phenolic −OH → no colour\nTest is specific, reliable, and fast (< 1 minute). Useful for batch screening or after recrystallisation to confirm phenolic group has been esterified.'
      }
    },
    {
      id: 'h-yield-calculation',
      type: 'heading',
      data: { text: 'Yield Calculation', level: 2 }
    },
    {
      id: 'p-yield-intro',
      type: 'paragraph',
      data: {
        text: 'The percent yield compares the actual mass of product obtained to the theoretical maximum. Salicylic acid is the limiting reagent (ethanoic anhydride is in excess). Calculate moles of salicylic acid, convert to moles of aspirin (1:1 ratio), then to theoretical mass. Typical yields for this practical are 75–95% (losses due to incomplete reaction, transfer losses, solubility in washings).'
      }
    },
    {
      id: 'eq-yield-formula',
      type: 'equation',
      data: {
        html: '% yield = <span class="nb-frac"><span class="nb-num">actual mass of aspirin</span><span class="nb-den">theoretical mass of aspirin</span></span> × 100%',
        caption: 'Percent yield formula'
      }
    },
    {
      id: 'callout-yield-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Aspirin Yield Calculation Example',
        text: 'Starting material: 2.0 g salicylic acid (Mr = 138)\nProduct obtained: 2.2 g aspirin (after drying)\n\nStep 1: Moles of salicylic acid = 2.0 ÷ 138 = 0.0145 mol\n\nStep 2: From equation, 1 mol salicylic acid → 1 mol aspirin\nMoles of aspirin expected = 0.0145 mol\n\nStep 3: Theoretical mass of aspirin = 0.0145 × 180 = 2.61 g (Mr of aspirin = 180)\n\nStep 4: % yield = (2.2 ÷ 2.61) × 100% = 84.3% ✓\n\nThis is a reasonable yield for a student practical.'
      }
    },
    {
      id: 'h-sources-of-error',
      type: 'heading',
      data: { text: 'Sources of Error and Improvements', level: 2 }
    },
    {
      id: 'list-error-sources',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Incomplete reaction: salicylic acid not fully reacted with anhydride → unreacted acid remains in product (visible as purple FeCl₃ colour)',
          'Solubility losses: aspirin dissolves slightly in washing water/ethanol, reducing final mass recovered',
          'Incomplete drying: crystals contain residual solvent (ethanol, water) → mass appears higher than true mass',
          'Transfer losses: product transferred between vessels; some crystals stick to glassware or filter paper',
          'Over-heating during drying: aspirin may decompose at high temperature (~200°C), reducing yield',
          'Impurities: unreacted salicylic acid, acetic acid, or water remaining in crude product before recrystallisation'
        ]
      }
    },
    {
      id: 'list-improvements',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Improvements to increase yield: use pure salicylic acid (check purity beforehand), ensure full reaction by stirring thoroughly and warming gently, use excess ethanoic anhydride (already done), recrystallise from appropriate solvent to remove impurities',
          'Improvements to determine true yield: dry to constant mass (weigh, heat, cool in desiccator, reweigh until no change), use calibrated balance (±0.01 g minimum), record exact mass at each stage, confirm purity (melting point, FeCl₃ test) before calculating yield'
        ]
      }
    },
    {
      id: 'checklist-aspirin-practical',
      type: 'checklist',
      data: {
        items: [
          { text: 'I know the reaction: salicylic acid + ethanoic anhydride → aspirin + acetic acid', checked: false },
          { text: 'I can outline the synthesis procedure (heating, cooling, filtering, drying)', checked: false },
          { text: 'I understand recrystallisation: hot solvent → dissolve → cool → crystals reform', checked: false },
          { text: 'I know that pure aspirin melts sharply at 135°C', checked: false },
          { text: 'I can perform and interpret the FeCl₃ test (purple = phenol, no colour = pure ester)', checked: false },
          { text: 'I can calculate percent yield using theoretical and actual masses', checked: false },
          { text: 'I can identify sources of error: incomplete reaction, solubility losses, drying, transfer losses', checked: false }
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
        text: 'Understand: Aspirin is prepared by esterification of salicylic acid with ethanoic anhydride. Purity is assessed by melting point (sharp vs broad range), TLC, and absence of FeCl₃ colour.\n\nApply: Why is acetic anhydride preferred over acetic acid for aspirin synthesis? Explain using equilibrium and leaving group arguments.\n\nAnalyze: A student\'s aspirin melts over 3°C below the literature value. What does this indicate about purity?\n\nEvaluate: Compare recrystallisation and column chromatography for purifying aspirin. Which is more appropriate for this preparation?'
      },
      terms: []
    },
    {
      id: 'summary-aspirin',
      type: 'summary',
      data: {
        text: 'Aspirin synthesis: salicylic acid + (CH₃CO)₂O → aspirin (white crystals) + acetic acid. Purify by recrystallisation from hot ethanol. Test purity: melting point (pure = 135°C sharp), FeCl₃ (no purple = ester formed, pure). Calculate % yield = (actual ÷ theoretical) × 100%. Common errors: incomplete reaction, solubility losses, incomplete drying, transfer losses.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-aspirin-reaction',
        prompt: 'Write the balanced equation for aspirin synthesis. What functional groups are created and what remains from the starting material?'
      },
      {
        id: 'cue-2',
        blockId: 'list-aspirin-steps',
        prompt: 'Outline the main steps of aspirin synthesis from mixing reactants to drying the product.'
      },
      {
        id: 'cue-3',
        blockId: 'p-recrystallisation-intro',
        prompt: 'What is the purpose of recrystallisation? Why is ethanol chosen as the solvent for aspirin recrystallisation?'
      },
      {
        id: 'cue-4',
        blockId: 'list-fecl3-procedure',
        prompt: 'Describe the FeCl₃ test for aspirin purity. What colour indicates (a) pure aspirin, (b) salicylic acid impurity?'
      },
      {
        id: 'cue-5',
        blockId: 'callout-yield-worked',
        prompt: 'If 2.0 g salicylic acid is used and 2.2 g aspirin is obtained, calculate the percent yield. (Mr salicylic acid = 138, Mr aspirin = 180)'
      }
    ],
    summaryText: 'Core Practical 16: Aspirin synthesis by esterification (salicylic acid + ethanoic anhydride → aspirin + acetic acid). Purify by recrystallisation from hot ethanol. Purity tests: melting point (135°C = pure), FeCl₃ (no colour = pure aspirin, purple = salicylic acid impurity). % yield = (actual mass ÷ theoretical mass) × 100%. Main error sources: incomplete reaction, solubility losses, incomplete drying.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Aspirin Synthesis and Purification — Core Practical 16',
      detail: 'A fundamental practical in A-Level chemistry demonstrating esterification, recrystallisation, and purity testing techniques.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH15) — Core Practicals',
      tags: ['aspirin', 'esterification', 'practical', 'recrystallisation']
    }
  ]
};
