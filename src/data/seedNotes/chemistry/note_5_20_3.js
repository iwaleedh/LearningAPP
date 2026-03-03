export const note_chemistry_5_20_3 = {
  blocks: [
    {
      id: 'obj-multistep-synthesis',
      type: 'objective',
      data: {
        text: 'Plan and execute multi-step syntheses converting between functional groups; apply retrosynthetic analysis; consider atom economy and reaction conditions.'
      }
    },
    {
      id: 'h-functional-group-transformations',
      type: 'heading',
      data: { text: 'Functional Group Interconversions', level: 2 }
    },
    {
      id: 'p-fg-intro',
      type: 'paragraph',
      data: {
        text: 'Organic synthesis relies on converting one functional group to another in a controlled sequence. The choice of reagent and conditions determines the product. A single starting material can be transformed into many different compounds by selectively targeting specific functional groups. Understanding which reagents perform which transformations is essential for planning synthesis routes.'
      }
    },
    {
      id: 'table-functional-group-transformations',
      type: 'comparisonTable',
      data: {
        headers: ['Starting material', 'Product', 'Reagents & Conditions'],
        rows: [
          ['Alcohol (R−OH)', 'Alkyl halide (R−X)', 'PCl₅ (or SOCl₂, HBr conc., heat)'],
          ['Alcohol (R−OH)', 'Ester (R−O−CO−R\')', 'Acyl chloride (R\'−COCl) + base, or carboxylic acid + H₂SO₄ catalyst, heat'],
          ['Alkyl halide (R−X)', 'Primary amine (R−NH₂)', 'NH₃ (ethanolic solution, heat under pressure)'],
          ['Alkyl halide (R−X)', 'Nitrile (R−C≡N)', 'KCN (ethanolic solution, reflux)'],
          ['Nitrile (R−C≡N)', 'Primary amine (R−CH₂−NH₂)', 'LiAlH₄ (ether solvent, anhydrous)'],
          ['Nitrile (R−C≡N)', 'Carboxylic acid (R−COOH)', 'H⁺ or OH⁻ (aqueous, reflux)'],
          ['Aldehyde (R−CHO)', 'Primary alcohol (R−CH₂−OH)', 'NaBH₄ (aqueous solution, room temp)'],
          ['Ketone (R−CO−R\')', 'Secondary alcohol (R−CHOH−R\')', 'NaBH₄ (aqueous solution, room temp)'],
          ['Primary alcohol (R−CH₂−OH)', 'Aldehyde (R−CHO)', 'K₂Cr₂O₇/H₂SO₄ (in acetone, distil off product to prevent over-oxidation)'],
          ['Primary alcohol (R−CH₂−OH)', 'Carboxylic acid (R−COOH)', 'K₂Cr₂O₇/H₂SO₄ (aqueous, reflux) OR KMnO₄/NaOH (heat)']
        ],
        caption: 'Key functional group interconversions at A-Level (10 major transformations)'
      }
    },
    {
      id: 'h-multistep-planning',
      type: 'heading',
      data: { text: 'Multi-Step Synthesis Planning', level: 2 }
    },
    {
      id: 'p-multistep-intro',
      type: 'paragraph',
      data: {
        text: 'Complex organic molecules are rarely synthesised in a single step. Instead, a sequence of reactions (typically 2–5 steps at A-level) is planned to convert a simple starting material to the target. Each step must deliver the desired functional group without damaging others, and reagents/conditions must be chosen carefully to maximise yield and minimise side products.'
      }
    },
    {
      id: 'p-planning-strategy',
      type: 'paragraph',
      data: {
        text: 'When planning a multi-step synthesis:\n1. Identify the target molecule and its functional groups\n2. Identify the starting material and its functional groups\n3. Work backwards (retrosynthesis): which C−C bond or functional group should be formed last?\n4. Plan each step using known transformations from the functional group table\n5. Check for compatibility: will reagent A damage a functional group created in step B?\n6. Consider protection/deprotection if selective transformations are needed\n7. Write the complete sequence with all reagents, conditions, and intermediate structures'
      }
    },
    {
      id: 'callout-multistep-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: '3-Step Synthesis: Ethanol to Ethyl Ethanoate',
        text: 'Target: CH₃−CO−O−CH₂CH₃ (ethyl ethanoate, ester)\nStart: CH₃CH₂OH (ethanol)\n\nRetrosynthesis:\nEthyl ethanoate ← ethanoic anhydride + ethanol (Fischer esterification or anhydride route)\nEthanoic anhydride ← acetyl chloride (available) or acetic acid\nAlternative: ethyl ethanoate ← ethanoic acid + ethanol (Fischer esterification)\n\nForward Synthesis (Route 1: via carboxylic acid):\nStep 1: CH₃CH₂OH + K₂Cr₂O₇/H₂SO₄ (reflux) → CH₃CHO (acetaldehyde)\nStep 2: CH₃CHO + K₂Cr₂O₇/H₂SO₄ (aqueous, reflux) → CH₃COOH (ethanoic acid)\nStep 3: CH₃COOH + CH₃CH₂OH ⇌ CH₃COOCH₂CH₃ + H₂O (H₂SO₄ catalyst, heat, reflux)\n\nAlternative (Route 2: direct esterification if available):\nStep 1: CH₃CH₂OH + K₂Cr₂O₇/H₂SO₄ (reflux) → CH₃COOH (oxidise to acid, then use)\nStep 2: CH₃COOH + CH₃CH₂OH → CH₃COOCH₂CH₃ (Fischer esterification as above)\n\nNote: Ethanoic anhydride (if available) is faster: CH₃COOC(=O)CH₃ + CH₃CH₂OH → ester + acetic acid (1 step, no catalyst needed, room temperature possible)'
      }
    },
    {
      id: 'h-selectivity-and-protection',
      type: 'heading',
      data: { text: 'Selectivity and Functional Group Protection', level: 2 }
    },
    {
      id: 'p-selectivity-intro',
      type: 'paragraph',
      data: {
        text: 'Many molecules contain multiple functional groups. A reagent may attack more than one group, causing unwanted side reactions. Selectivity can be achieved by:\n1. Choosing reagents that preferentially react with one group (e.g. NaBH₄ reduces aldehydes faster than ketones)\n2. Protecting sensitive groups temporarily (e.g. converting −OH to −O−silyl ether before an oxidation)\n3. Controlling conditions (temperature, concentration) to favour one pathway\n4. Using activation/deactivation strategies on aromatic rings'
      }
    },
    {
      id: 'callout-protection-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Protecting Groups Strategy',
        text: 'Example: oxidising a primary alcohol in a molecule that also has an ester group.\nProblem: K₂Cr₂O₇ might attack the ester C=O or ester C−O.\nStrategy: \n1. Protect the ester: convert to a stable group (e.g. silyl ether or acetal)\n2. Oxidise the primary alcohol to aldehyde/acid\n3. Deprotect: regenerate the original ester\n\nAt A-level, protection is conceptual; practical details are less important. The key idea: think about which functional groups react with which reagents, and plan accordingly.'
      }
    },
    {
      id: 'h-atom-economy',
      type: 'heading',
      data: { text: 'Atom Economy in Multi-Step Synthesis', level: 2 }
    },
    {
      id: 'p-atom-economy-intro',
      type: 'paragraph',
      data: {
        text: 'Atom economy measures how efficiently a reaction converts starting materials into the desired product. It is calculated as (molecular weight of desired product / sum of molecular weights of all reactants) × 100%. In multi-step synthesis, each step contributes to overall efficiency. Reactions with high atom economy are preferred: fewer byproducts, less waste, lower cost, less environmental impact.'
      }
    },
    {
      id: 'eq-atom-economy',
      type: 'equation',
      data: {
        html: 'Atom economy = <span class="nb-frac"><span class="nb-num">M<sub>r</sub> (desired product)</span><span class="nb-den">sum of all M<sub>r</sub> (reactants)</span></span> × 100%',
        caption: 'Atom economy formula'
      }
    },
    {
      id: 'list-atom-economy-examples',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Esterification (alcohol + acid → ester + water): Good atom economy (~85%) because water is simple byproduct',
          'Oxidation with dichromate (R−CH₂−OH + Cr₂O₇²⁻ → R−CHO + Cr³⁺): Lower atom economy, Cr³⁺ salts are major byproduct',
          'Nitrile synthesis (R−Br + CN⁻ → R−CN + Br⁻): High atom economy, Br⁻ is small byproduct',
          'Friedel-Crafts acylation (Ar−H + R−COCl → Ar−CO−R + HCl): Moderate; HCl is byproduct',
          'Multi-step routes: calculate total atom economy by multiplying individual step efficiencies'
        ]
      }
    },
    {
      id: 'p-atom-economy-multistep',
      type: 'paragraph',
      data: {
        text: 'In a multi-step synthesis, the overall atom economy is the product of individual step efficiencies (if each step\'s product becomes the next\'s reagent). For example, a 3-step route with 90%, 85%, and 80% atom economy per step has an overall atom economy of 0.90 × 0.85 × 0.80 = 61.2%. This shows why minimising steps and byproducts is important: efficiency drops quickly with each added step.'
      }
    },
    {
      id: 'callout-atom-economy-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Atom Economy: Ethanol to Ethyl Ethanoate',
        text: 'Step 1: CH₃CH₂OH + K₂Cr₂O₇/H₂SO₄ → CH₃CHO + Cr³⁺ salts + H₂O\nDesired: CH₃CHO (Mr = 44)\nReactants: ethanol (46) + dichromate (262 for Cr₂O₇²⁻)\nAtom economy ≈ 44 / (46 + 262) ≈ 14% (very poor! dichromate salts are heavy byproducts)\n\nStep 2: CH₃CHO + K₂Cr₂O₇/H₂SO₄ → CH₃COOH + Cr³⁺\nSimilarly poor atom economy\n\nStep 3: CH₃COOH + CH₃CH₂OH ⇌ CH₃COOC₂H₅ + H₂O (Fischer esterification)\nDesired: ester (88)\nReactants: acid (60) + alcohol (46) + H₂SO₄ (catalyst, not counted in reactants)\nAtom economy ≈ 88 / (60 + 46) ≈ 79% (much better!)\n\nOverall: Route has poor atom economy due to dichromate oxidations. Better routes use direct esterification or enzymatic methods in industry.'
      }
    },
    {
      id: 'h-reaction-conditions',
      type: 'heading',
      data: { text: 'Key Reaction Conditions', level: 2 }
    },
    {
      id: 'list-reaction-conditions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Reflux (under heating): molecule heated to boiling, vapour condenses and returns, maintains temperature for extended reaction time (hours); used for SN2, hydrolysis, esterification',
          'Distillation: product continuously removed as vapour, condenses to liquid; used when product is volatile to drive equilibrium (Fischer esterification)',
          'Anhydrous conditions: reaction in dry solvent (ether, acetone) without water; essential for LiAlH₄ and Grignard reagents (react violently with water)',
          'Room temperature: mild reactions (NaBH₄ reduction, esterification with anhydride)',
          'Ice bath/low temperature: prevent side reactions or handle exothermic reactions (Friedel-Crafts, some coupling reactions)',
          'Inert atmosphere: prevent oxidation or reaction with O₂/CO₂ (Grignard reactions, lithium reagents)'
        ]
      }
    },
    {
      id: 'checklist-multistep',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can identify functional groups in starting material and target', checked: false },
          { text: 'I can plan a 2–3 step synthesis using the functional group table', checked: false },
          { text: 'I know which reagents are compatible with multiple functional groups', checked: false },
          { text: 'I understand retrosynthetic analysis (work backwards)', checked: false },
          { text: 'I can calculate atom economy for a reaction', checked: false },
          { text: 'I know the purpose of reflux, distillation, and anhydrous conditions', checked: false }
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
        text: 'Understand: Retrosynthetic analysis works backwards from the target molecule, identifying disconnections that reveal simpler precursors and known reactions.\n\nApply: Plan a synthesis of 1-aminopropan-2-ol from propene. Show all steps and reagents.\n\nAnalyze: Why is it important to consider atom economy when choosing between alternative synthetic routes?\n\nEvaluate: A 5-step synthesis has 80% yield per step. Calculate the overall yield and discuss whether a longer but higher-yield route is always preferable.'
      },
      terms: []
    },
    {
      id: 'summary-multistep',
      type: 'summary',
      data: {
        text: 'Multi-step synthesis: convert starting material to target through intermediate functional groups. Use the functional group table to identify reagents and conditions. Plan retrosynthetically (work backwards). Consider selectivity, protection strategies, and atom economy. Write complete sequences including all structures, reagents, and conditions for each step.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'table-functional-group-transformations',
        prompt: 'Name the reagents and conditions to convert (a) primary alcohol to aldehyde, (b) aldehyde to primary alcohol.'
      },
      {
        id: 'cue-2',
        blockId: 'p-multistep-intro',
        prompt: 'Why is it better to oxidise a primary alcohol to aldehyde using K₂Cr₂O₇ with distillation rather than reflux?'
      },
      {
        id: 'cue-3',
        blockId: 'callout-multistep-worked',
        prompt: 'Outline a 3-step synthesis from ethanol to ethyl ethanoate, including all reagents and conditions.'
      },
      {
        id: 'cue-4',
        blockId: 'eq-atom-economy',
        prompt: 'Define atom economy and give an example of a reaction with high and low atom economy.'
      },
      {
        id: 'cue-5',
        blockId: 'p-selectivity-intro',
        prompt: 'What strategies can be used to ensure a reagent reacts with only one functional group in a multi-functional molecule?'
      }
    ],
    summaryText: 'Functional group transformations: alcohol↔halide (PCl₅/HBr), alcohol↔ester (acyl chloride), halide↔nitrile↔amine/acid, aldehyde↔alcohol (NaBH₄), primary alcohol↔aldehyde↔acid (K₂Cr₂O₇). Multi-step planning: identify target, work backwards (retrosynthesis), apply transformations from table, consider selectivity and protection. Atom economy = (Mr product / sum Mr reactants) × 100%.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Multi-Step Organic Synthesis and Functional Group Chemistry',
      detail: 'Core competency at A-level: understanding how to convert between functional groups and plan synthetic routes efficiently.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH15)',
      tags: ['synthesis', 'functional groups', 'multi-step', 'atom economy']
    }
  ]
};
