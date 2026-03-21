export const note_chemistry_5_20_3 = {
  blocks: [
    {
      id: 'obj-multistep-synthesis',
      type: 'objective',
      data: {
        text: 'Plan multi-step organic syntheses using the synthesis decision strategy (chain-length first, then functional group); apply retrosynthetic analysis; predict chemical properties from functional groups; solve PPQ-style synthesis problems (benzene→amide, nitrile chain extension, elimination-addition); evaluate atom economy and reaction conditions.'
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
      id: 'h-synthesis-decision',
      type: 'heading',
      data: { text: 'How to Approach a Synthesis Question', level: 2 }
    },
    {
      id: 'p-synthesis-decision-intro',
      type: 'paragraph',
      data: {
        text: 'Synthesis exam questions ask you to convert a starting material into a target molecule. Begin by asking two key questions: (1) has the carbon chain length changed, and (2) has the functional group changed? Your answers determine the entire strategy.'
      }
    },
    {
      id: 'list-synthesis-decision-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Has the carbon chain length changed? YES → how many carbons needed?',
          '+1 carbon: use nitrile route — convert to haloalkane (PCl₅), then KCN/ethanol/reflux → R−CN (nitrile adds one C)',
          '+more than 1 carbon: use Grignard route — RMgX + carbonyl → attack C=O → add H⁺/acid → alcohol product',
          'NO chain change: use functional group interconversion table (e.g. alcohol → ester, halide → amine)',
          'Can you work forward from the start, or backwards from the target (retrosynthesis)? Use whichever is clearer',
          'A-level synthesis is limited to a maximum of 4 steps — if your route is longer, look for shortcuts',
          'Write all reagents AND conditions for every arrow in the synthesis'
        ]
      }
    },
    {
      id: 'callout-4-step-limit',
      type: 'callout',
      data: {
        style: 'tip',
        title: '4-Step Limit & Route Selection',
        text: '+1 carbon needed → nitrile route:\n  R−OH → PCl₅ → R−Cl → KCN/ethanol/reflux → R−CH₂CN → H⁺ or OH⁻/H₂O/reflux → R−CH₂COOH\n\n+many carbons needed → Grignard route:\n  Choose RMgBr where R matches the extra carbons needed\n  Add to appropriate carbonyl (CO₂ → acid; HCHO → 1° alcohol; RCHO → 2° alcohol; ketone → 3° alcohol)\n\nCannot add KCN directly to an alcohol — must convert to haloalkane first.\nAt A-level: maximum 4 steps in a synthesis route.'
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
      id: 'h-benzene-to-amide',
      type: 'heading',
      data: { text: 'Worked Example: Benzene → Amide (3 Steps)', level: 2 }
    },
    {
      id: 'callout-benzene-amide-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Benzene → Amide via Nitrobenzene and Phenylamine',
        text: 'Target: amide (from benzene ring)\nStart: benzene (C₆H₆)\n\nStep 1: Benzene → Nitrobenzene (nitration)\nReagents: conc. HNO₃ + conc. H₂SO₄\nConditions: reflux below 55°C (higher temperature gives dinitration)\nProduct: C₆H₅NO₂ (nitrobenzene, yellow liquid)\n\nStep 2: Nitrobenzene → Phenylamine (reduction)\nReagents: (i) Sn + conc. HCl, reflux; then (ii) excess NaOH\nProduct: C₆H₅NH₂ (phenylamine/aniline)\nNote: Sn/HCl reduces −NO₂ → −NH₃⁺ first; NaOH deprotonates to free amine\n\nStep 3: Phenylamine → Amide (acylation)\nReagents: acyl chloride (e.g. ethanoyl chloride CH₃COCl)\nConditions: room temperature (highly exothermic; no heating needed)\nProduct: C₆H₅NHCOCH₃ (N-phenylethanamide / acetanilide)\n\nChain length: unchanged throughout — only functional group conversions\nKey exam point: step 2 requires two separate reagent stages (Sn/HCl then NaOH)'
      }
    },
    {
      id: 'h-ppq-june-2019',
      type: 'heading',
      data: { text: 'PPQ — June 2019 Synthesis Questions', level: 2 }
    },
    {
      id: 'callout-ppq-2019a-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'PPQ June 2019 Part A: 1-Bromopropane → Butan-1-ol (3 Steps, +1 C)',
        text: 'Start: CH₃CH₂CH₂Br (1-bromopropane, 3 carbons)\nTarget: CH₃CH₂CH₂CH₂OH (butan-1-ol, 4 carbons)\nObservation: chain has grown by +1 carbon → nitrile route\n\nStep 1: 1-bromopropane → butanenitrile (+1 carbon)\nReagents: KCN (ethanolic solution)\nConditions: reflux\nEquation: CH₃CH₂CH₂Br + KCN → CH₃CH₂CH₂CN + KBr\nProduct: butanenitrile (CH₃CH₂CH₂CN, 4 carbons)\n\nStep 2: butanenitrile → butanoic acid (hydrolysis)\nReagents: dilute HCl(aq) or H₂SO₄(aq)\nConditions: reflux (or aqueous acid + heat)\nEquation: CH₃CH₂CH₂CN + H₂O + H⁺ → CH₃CH₂CH₂COOH\nProduct: butanoic acid\n\nStep 3: butanoic acid → butan-1-ol (reduction)\nReagents: LiAlH₄\nConditions: dry ether, room temperature; then add water carefully\nEquation: CH₃CH₂CH₂COOH + LiAlH₄ → CH₃CH₂CH₂CH₂OH\nProduct: butan-1-ol ✓'
      }
    },
    {
      id: 'callout-ppq-2019b-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'PPQ June 2019 Part B: 1-Bromobutane → 2-Bromobutane (2 Steps)',
        text: 'Start: CH₃CH₂CH₂CH₂Br (1-bromobutane)\nTarget: CH₃CH₂CHBrCH₃ (2-bromobutane)\nObservation: same chain length, bromine moves from C1 to C2 → via alkene intermediate\n\nStep 1: 1-bromobutane → but-1-ene (elimination)\nReagents: KOH (ethanolic solution)\nConditions: reflux (elimination favoured by ethanolic KOH at high temp)\nEquation: CH₃CH₂CH₂CH₂Br + KOH(ethanol) → CH₃CH₂CH=CH₂ + KBr + H₂O\nProduct: but-1-ene\n\nStep 2: but-1-ene → 2-bromobutane (electrophilic addition)\nReagents: HBr (gas or HBr(aq))\nConditions: room temperature\nEquation: CH₃CH₂CH=CH₂ + HBr → CH₃CH₂CHBrCH₃\nProduct: 2-bromobutane (Markovnikov product — H⁺ adds to C1, Br⁻ adds to C2) ✓\n\nKey thinking: cannot shift Br directly — must go via alkene as intermediate'
      }
    },
    {
      id: 'h-predicting-properties',
      type: 'heading',
      data: { text: 'Predicting Chemical Properties from Functional Groups', level: 2 }
    },
    {
      id: 'p-predicting-intro',
      type: 'paragraph',
      data: {
        text: 'Even when two molecules share a functional group (e.g. both have −OH), their properties and reactions can be entirely different depending on where the group is located in the molecule. Always identify: (1) what functional group is present, and (2) what it is attached to (aliphatic carbon, benzene ring, acyl group, etc.).'
      }
    },
    {
      id: 'table-phenylmethanol-methylphenol',
      type: 'comparisonTable',
      data: {
        headers: ['Property / Reaction', 'Phenylmethanol C₆H₅CH₂OH (benzylic alcohol)', '4-Methylphenol CH₃-C₆H₄-OH (phenol)'],
        rows: [
          ['Functional group classification', 'Primary alcohol (−OH on sp³ benzylic carbon)', 'Phenol (−OH directly on benzene ring)'],
          ['Aqueous pH', 'Neutral (~7) — −OH does not donate H⁺', 'Weakly acidic (~5–6) — lone pair delocalised into ring, O−H bond weakened; donates H⁺'],
          ['Reaction with Na₂CO₃', 'No reaction (not acidic enough to release CO₂)', 'No CO₂ released (weaker acid than H₂CO₃); but dissolves in NaOH'],
          ['Esterification with carboxylic acid', 'Forms ester readily (H₂SO₄ catalyst, heat): R−OH + RCOOH → RCOOR + H₂O', 'Does NOT form ester under the same conditions — phenol too weakly nucleophilic as alcohol; needs acyl chloride instead'],
          ['Reaction with Br₂(aq)', 'No reaction with bromine water at room temp', 'Immediate decolourisation + white precipitate (2,4,6-tribromophenol) — −OH activates ring to electrophilic substitution'],
          ['Reaction with PCl₅', 'Reacts — gives C₆H₅CH₂Cl + POCl₃ + HCl (primary alcohol → chloride)', 'Reacts differently — acidic substitution; less straightforward'],
          ['Oxidation (K₂Cr₂O₇/H⁺)', 'Oxidised to aldehyde (C₆H₅CHO, benzaldehyde) then acid', 'Resistant to normal oxidation conditions (ring protects)']
        ],
        caption: 'Phenylmethanol vs 4-methylphenol — same −OH, completely different chemistry due to position on molecule'
      }
    },
    {
      id: 'callout-predicting-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Exam Insight: Where is the −OH?',
        text: '−OH on aliphatic carbon = alcohol (neutral, esterifies, oxidised by K₂Cr₂O₇, reacts with PCl₅)\n−OH directly on benzene ring = phenol (weakly acidic, cannot esterify with carboxylic acid, tribromophenol with Br₂(aq), ring activated)\n\nRule: to predict chemical properties, always identify (1) the functional group and (2) its chemical environment (what is it attached to?).\n\nThis principle applies across all functional groups:\n− C=O in acid vs in ketone vs in acyl chloride → completely different reactivity\n− N in amide vs amine vs nitrile → different basicity and reactions'
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
          { text: 'I ask "has the chain length changed?" as the first step in any synthesis', checked: false },
          { text: 'I know +1 carbon = nitrile route; +more carbons = Grignard route', checked: false },
          { text: 'I can plan the 3-step nitrile route: alcohol → haloalkane → nitrile → acid/amine', checked: false },
          { text: 'I can plan benzene → nitrobenzene → phenylamine → amide (3 steps with all reagents)', checked: false },
          { text: 'PPQ 2019A: 1-bromopropane → butanenitrile → butanoic acid → butan-1-ol', checked: false },
          { text: 'PPQ 2019B: 1-bromobutane → but-1-ene → 2-bromobutane (Markovnikov)', checked: false },
          { text: 'I can predict how position of −OH changes properties (phenylmethanol vs 4-methylphenol)', checked: false },
          { text: 'I know phenol: weakly acidic, tribromophenol with Br₂(aq), cannot esterify with RCOOH directly', checked: false },
          { text: 'I understand retrosynthetic analysis (work backwards from target)', checked: false },
          { text: 'I can calculate atom economy for a reaction step', checked: false },
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
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "4-Step Maximum at A-Level",
        text: "+1 carbon needed \u2192 nitrile route gets product in 3\u20134 steps. +many carbons needed \u2192 Grignard route. If synthesis exceeds 4 steps, look for shortcuts (e.g., direct oxidation, anhydride use). Question-setters rarely require >4 steps in A-level, hinting students should find efficient routes."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-synthesis-decision-steps',
        prompt: 'What is the first question to ask when planning a synthesis? What does +1 carbon vs +many carbons tell you about the route?'
      },
      {
        id: 'cue-2',
        blockId: 'callout-benzene-amide-worked',
        prompt: 'State the three steps, reagents, and conditions to convert benzene to an amide.'
      },
      {
        id: 'cue-3',
        blockId: 'callout-ppq-2019a-worked',
        prompt: 'How would you convert 1-bromopropane (C3) to butan-1-ol (C4) in 3 steps? State all reagents and conditions.'
      },
      {
        id: 'cue-4',
        blockId: 'callout-ppq-2019b-worked',
        prompt: 'How would you convert 1-bromobutane to 2-bromobutane in 2 steps? Explain why Markovnikov addition gives 2-bromobutane rather than 1-bromobutane.'
      },
      {
        id: 'cue-5',
        blockId: 'table-phenylmethanol-methylphenol',
        prompt: 'Phenylmethanol and 4-methylphenol both have −OH. Why does 4-methylphenol react with bromine water but phenylmethanol does not?'
      }
    ],
    summaryText: 'Synthesis decision strategy: (1) has chain length changed? YES → +1C = nitrile route; +many C = Grignard. NO → use FG table. Max 4 steps at A-level. Benzene→amide: nitration/H₂SO₄ < 55°C → Sn/HCl then NaOH (phenylamine) → acyl chloride (room temp). PPQ 2019A: R−Br + KCN/ethanol → nitrile + acid/H₂O/reflux → acid + LiAlH₄/dry ether → 1° alcohol. PPQ 2019B: R−Br + KOH/ethanol (elimination) → alkene + HBr (Markovnikov addition) → 2° halide. Predicting from FG: −OH on aliphatic C = alcohol (neutral, esterifies, oxidised); −OH on ring = phenol (weakly acidic, tribromophenol, no ester with RCOOH).',
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
