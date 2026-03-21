export const note_chemistry_5_20_2 = {
  blocks: [
    {
      id: 'obj-chain-extension',
      type: 'objective',
      data: {
        text: 'Extend and modify carbon chains using nitrile synthesis (+1 carbon) and Grignard reagents (any number of carbons); plan multi-step synthetic routes including Grignard formation and reactions with CO₂, aldehydes, ketones, and methanal; compare nitrile vs Grignard routes'
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
      id: 'h-nitrile-background',
      type: 'heading',
      data: { text: 'Nitriles: Background and Properties', level: 3 }
    },
    {
      id: 'p-nitrile-background',
      type: 'paragraph',
      data: {
        text: 'Nitriles contain the −C≡N functional group. The carbon atom in the nitrile group is always counted as the number 1 carbon when determining the longest carbon chain (e.g., CH₃CN is ethanenitrile). Nitriles are very polar molecules with high boiling points compared to alkanes of similar size due to strong permanent dipole-dipole attractions. However, their boiling points remain lower than equivalent alcohols, which can form hydrogen bonds. Small nitriles are colourless liquids at room temperature.'
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
      id: 'p-nitrile-amine-alt',
      type: 'paragraph',
      data: {
        text: 'Alternatively, nitriles can be reduced to primary amines using hydrogen gas and a metal catalyst (such as nickel or palladium) at higher temperatures and pressures. This catalytic hydrogenation is often preferred in industry because it avoids the use of expensive and hazardous LiAlH₄.'
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
        text: 'Nitriles can be hydrolysed to carboxylic acids using aqueous acid (HCl or H₂SO₄) under reflux (heating). The nitrile triple bond is broken, water adds, and ammonia is released. This provides a route to carboxylic acids from alkyl halides, with +1 carbon extension. Alternatively, alkaline hydrolysis using sodium hydroxide solution (NaOH/H₂O) under reflux produces the sodium carboxylate salt and ammonia gas. To obtain the free carboxylic acid, a strong acid like dilute hydrochloric acid must be added in a separate subsequent step.'
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
      id: 'h-grignard-reagents',
      type: 'heading',
      data: { text: 'Grignard Reagents — Organometallic Chain Extension', level: 2 }
    },
    {
      id: 'p-grignard-intro',
      type: 'paragraph',
      data: {
        text: 'Grignard reagents are organometallic compounds in which a carbon atom is directly bonded to magnesium (C−Mg bond). They are powerful carbon nucleophiles and are used to form C−C bonds, extending the carbon chain by any number of carbons (unlike nitrile synthesis which adds exactly +1). Grignard reagents are denoted RMgX (where X = Cl, Br, or I).'
      }
    },
    {
      id: 'list-grignard-formation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Formed by reacting a haloalkane (usually bromoalkane, RBr) with magnesium metal in DRY ETHER under reflux. Ether (ethoxyethane) is extremely flammable and volatile (boils at 34.5°C), so heating must be done carefully over a water bath.' },
          { text: 'Reaction: RBr + Mg → RMgBr (Grignard reagent)' },
          { text: 'Dry ether is essential as the solvent (strictly anhydrous conditions) — Grignard reagents react violently with water to produce ALKANES (e.g. RMgBr + H₂O → RH + Mg(OH)Br). Any moisture will destroy the reagent before it can be used.' },
          { text: 'The Mg−C bond is highly polar. Carbon is more electronegative than magnesium, pulling electrons towards itself to gain a slight negative charge (δ−). This makes the carbon atom an excellent NUCLEOPHILE.' }
        ]
      }
    },
    {
      id: 'eq-grignard-formation',
      type: 'equation',
      data: {
        html: 'RBr + Mg <span style="color: var(--color-text-secondary);">(dry ether, reflux)</span> → R−MgBr<br /><br />Example: CH₃CH₂Br + Mg → CH₃CH₂MgBr (ethylmagnesium bromide)',
        caption: 'Formation of a Grignard reagent from a bromoalkane and magnesium in dry ether'
      }
    },
    {
      id: 'h-grignard-reactions',
      type: 'heading',
      data: { text: 'Reactions of Grignard Reagents', level: 3 }
    },
    {
      id: 'list-grignard-steps',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'ALL Grignard reactions follow the SAME two-step process:' },
          { text: 'Step 1: React the Grignard reagent with the carbonyl compound (or CO₂). The Grignard C⁻ attacks the electron-deficient C=O → forms C−C bond → product has MgBr attached to O' },
          { text: 'Step 2: Add DILUTE ACID (or water) to protonate the oxygen → removes MgBr as Mg(OH)Br → releases the final organic product (alcohol or acid)' },
          { text: 'The dilute acid workup step is always required to "liberate" the product from the magnesium salt' }
        ]
      }
    },
    {
      id: 'table-grignard-products',
      type: 'comparisonTable',
      data: {
        caption: 'Grignard reactions: reagent + carbonyl compound → product after acid hydrolysis',
        headers: ['Grignard + ...', 'Product (after dilute acid)', 'Alcohol type', 'Chain change'],
        rows: [
          ['CO₂ (carbon dioxide)', 'Carboxylic acid (R−COOH)', '— (acid, not alcohol)', '+1 carbon'],
          ['Methanal (HCHO)', 'Primary alcohol (R−CH₂OH)', 'Primary', '+1 carbon'],
          ['Aldehyde (R\'CHO)', 'Secondary alcohol (R−CHOH−R\')', 'Secondary', '+n carbons (from R\')'],
          ['Ketone (R\'COR\'\')', 'Tertiary alcohol (R−CR\'R\'\'−OH)', 'Tertiary', '+n carbons']
        ]
      }
    },
    {
      id: 'callout-grignard-worked-acid',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Grignard Reaction 1: Making a Carboxylic Acid (via CO₂)',
        text: 'Starting Grignard: CH₃MgBr (methylmagnesium bromide)\n\nStep 1 — React with CO₂:\nCH₃MgBr + CO₂ → CH₃−COO⁻MgBr⁺ (magnesium salt of ethanoate, no product collected yet)\n\nStep 2 — Add dilute acid (H₂SO₄ aq or HCl aq) to protonate:\nCH₃−COO⁻MgBr⁺ + H⁺ → CH₃COOH + MgBr⁺ (ethanoic acid)\n\nResult: +1 carbon. CH₃Br (C1) → CH₃MgBr → CH₃COOH (C2 carboxylic acid)'
      }
    },
    {
      id: 'callout-grignard-worked-alcohols',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Grignard Reactions 2–4: Making Alcohols',
        text: 'Using ethylmagnesium bromide (CH₃CH₂MgBr, chain length C2) as the Grignard:\n\nWith HCHO (methanal) → PRIMARY alcohol:\nCH₃CH₂MgBr + HCHO → [CH₃CH₂CH₂O⁻MgBr⁺] → + H⁺ → CH₃CH₂CH₂OH (propan-1-ol, C3)\nChain: C2 + C1 from HCHO → C3 primary alcohol\n\nWith CH₃CHO (ethanal) → SECONDARY alcohol:\nCH₃CH₂MgBr + CH₃CHO → [product-O⁻MgBr⁺] → + H⁺ → CH₃CH(OH)CH₂CH₃ (butan-2-ol, C4)\nChain: C2 (Grignard) + C2 (ethanal) → C4 secondary alcohol\n\nWith CH₃COCH₃ (propanone) → TERTIARY alcohol:\nCH₃CH₂MgBr + CH₃COCH₃ → + H⁺ → (CH₃)₂C(OH)CH₂CH₃ (2-methylbutan-2-ol, C5)\nChain: C2 (Grignard) + C3 (propanone) → C5 tertiary alcohol\n\nKey rule: the type of alcohol formed is determined by the carbonyl compound used — not the Grignard reagent.'
      }
    },
    {
      id: 'callout-grignard-vs-cyanide',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Grignard Reagents are Preferred Over KCN/HCN',
        text: 'HCN and KCN are EXTREMELY TOXIC (lethal in small quantities, act as enzyme inhibitors). Grignard reagents avoid this risk.\n\nAdditionally: KCN only ever adds +1 carbon (−C≡N). Grignard reagents can add ANY number of carbons depending on the choice of R group in RMgBr. This gives a MUCH WIDER RANGE of products from a single strategy.\n\nOne limitation: Grignard reagents require strictly anhydrous (water-free) conditions — dry ether, dry glassware, inert atmosphere — which makes them more technically demanding than nitrile synthesis.'
      }
    },
    {
      id: 'h-methanol-to-ethanol',
      type: 'heading',
      data: { text: 'Worked Example: Methanol → Ethanol (4-Step Route)', level: 2 }
    },
    {
      id: 'p-methanol-ethanol-intro',
      type: 'paragraph',
      data: {
        text: 'This canonical 4-step synthesis demonstrates chain extension via nitrile. The chain increases from C1 (methanol) to C2 (ethanol). Grignard reagents cannot be used here because the increase is only +1 carbon — the nitrile route is simpler and more appropriate.'
      }
    },
    {
      id: 'list-methanol-ethanol-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'CH₃OH + PCl₅ (dry, room temperature) → CH₃Cl + POCl₃ + HCl | Convert alcohol to haloalkane so it can undergo SN2 with KCN' },
          { text: 'CH₃Cl + KCN (ethanol solvent, reflux) → CH₃CN + KCl | Nitrile formed — chain now has 2 carbons' },
          { text: 'CH₃CN + HCl(aq) [or H₂SO₄(aq)], reflux → CH₃COOH + NH₃ | Nitrile hydrolysis to carboxylic acid' },
          { text: 'CH₃COOH + LiAlH₄ (dry ether, room temperature) → C₂H₅OH | Reduction of carboxylic acid to primary alcohol' }
        ]
      }
    },
    {
      id: 'callout-methanol-ethanol-key',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Key Decision Point in Chain Extension',
        text: 'When the chain needs to increase by ONE carbon only → use the nitrile route (RBr + KCN → nitrile → acid or amine).\n\nWhen the chain needs to increase by MORE than one carbon → use a Grignard reagent (RMgBr + appropriate carbonyl → alcohol or acid).\n\nAlways check: can you lengthen the chain without an alcohol? You CANNOT do KCN on an alcohol directly — you MUST convert it to a haloalkane first (e.g. with PCl₅).'
      }
    },
    {
      id: 'checklist-chain-extension',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can write the SN2 mechanism for RBr + KCN → RCN', checked: false },
          { text: 'I know nitriles add +1 carbon to a chain', checked: false },
          { text: 'I can reduce a nitrile to primary amine using LiAlH₄ in dry ether', checked: false },
          { text: 'I can hydrolyse a nitrile to carboxylic acid under acid conditions (reflux) or alkaline conditions followed by acidification', checked: false },
          { text: 'I know KMnO₄ oxidises aromatic side chains to carboxylic acids', checked: false },
          { text: 'I can form a Grignard reagent: RBr + Mg (dry ether, reflux) → RMgBr', checked: false },
          { text: 'Grignard + CO₂ + dilute acid → carboxylic acid', checked: false },
          { text: 'Grignard + HCHO + dilute acid → primary alcohol', checked: false },
          { text: 'Grignard + aldehyde + dilute acid → secondary alcohol', checked: false },
          { text: 'Grignard + ketone + dilute acid → tertiary alcohol', checked: false },
          { text: 'Grignard preferred over HCN/KCN: safer + wider range of products', checked: false },
          { text: 'Methanol → ethanol: 4-step via PCl₅ → KCN (nitrile) → acid hydrolysis → LiAlH₄', checked: false },
          { text: 'I can plan a retrosynthetic route for a 2–4 step synthesis', checked: false }
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
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: "Nitrile Synthesis: Methanol to Ethanol",
        text: "CH\u2083OH + PCl\u2085 \u2192 CH\u2083Cl. CH\u2083Cl + KCN(ethanol, reflux) \u2192 CH\u2083CN. CH\u2083CN + H\u2082SO\u2084/H\u2082O(reflux) \u2192 CH\u2083COOH. CH\u2083COOH + LiAlH\u2084 \u2192 CH\u2083CH\u2082OH. Four steps: +1 carbon via nitrile route. Advantage: pure products at each step."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-nitrile-intro', prompt: 'Write the equation for forming a nitrile from a primary alkyl bromide using KCN. Why is ethanol preferred as solvent?' },
      { id: 'cue-2', blockId: 'eq-nitrile-acid', prompt: 'Compare acidic and alkaline hydrolysis of a nitrile. What are the intermediate salts formed in each pathway before the free acid is obtained?' },
      { id: 'cue-3', blockId: 'eq-grignard-formation', prompt: 'How is a Grignard reagent formed? Write the equation and state the conditions required.' },
      { id: 'cue-3b', blockId: 'list-grignard-formation', prompt: 'Why must Grignard reagents be prepared under strictly anhydrous conditions? What product forms if they react with water?' },
      { id: 'cue-4', blockId: 'table-grignard-products', prompt: 'What product forms when a Grignard reagent reacts with (a) CO₂, (b) methanal (HCHO), (c) an aldehyde, (d) a ketone — in each case after adding dilute acid?' },
      { id: 'cue-5', blockId: 'list-methanol-ethanol-steps', prompt: 'Outline the 4-step synthesis of ethanol from methanol, including reagents and conditions for each step.' }
    ],
    summaryText: 'Nitriles add +1 carbon: RBr + KCN/EtOH → RCN. Reduce with LiAlH₄ (dry ether) to primary amine or hydrolyse with H⁺/H₂O (reflux) to carboxylic acid. Grignard reagents: RBr + Mg (dry ether) → RMgBr. React with CO₂ → RCOOH; HCHO → primary alcohol; RCHO → secondary alcohol; ketone → tertiary alcohol. Always add dilute acid to liberate product. Preferred over HCN (safer, more versatile). Methanol→ethanol: PCl₅ → KCN → acid hydrolysis → LiAlH₄.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Carbon Chain Extension in Organic Synthesis',
      detail: 'Nitrile synthesis (+1 carbon via KCN/SN2 then hydrolysis or reduction) and Grignard reagents (RMgBr, any chain extension via C−C bond formation) are both core WCH15 specification content.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH15)',
      tags: ['synthesis', 'nitrile', 'grignard', 'chain', 'oxidation']
    }
  ]
};
