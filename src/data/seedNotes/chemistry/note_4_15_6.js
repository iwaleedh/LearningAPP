export const note_chemistry_4_15_6 = {
  blocks: [

    // ── Objective ────────────────────────────────────────────────────────────
    {
      id: 'obj-acyl-esters',
      type: 'objective',
      data: {
        text: 'Know the nomenclature, formulae, and reactions of acyl chlorides (4 key reactions) and esters (naming, drawing, hydrolysis, saponification, polyesters). IAL Unit 4, Topic 15d — Carboxylic Acid Derivatives.'
      }
    },

    // ════════════════════════════════════════════════════════════════════════
    // PART 1 — ACYL CHLORIDES
    // ════════════════════════════════════════════════════════════════════════

    {
      id: 'h-acyl-chlorides',
      type: 'heading',
      data: { text: 'Part 1: Acyl Chlorides', level: 2 }
    },

    // ── Structure & Naming ──────────────────────────────────────────────────
    {
      id: 'h-acyl-structure',
      type: 'heading',
      data: { text: 'Structure, Naming & Formulae', level: 3 }
    },
    {
      id: 'list-acyl-structure',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Acyl chlorides are derivatives of carboxylic acids — the –OH of the carboxyl group is replaced by –Cl',
          'Functional group: –COCl (carbonyl C + Cl on same carbon)',
          'General formula: R–CO–Cl (also written RCOCl)',
          'Naming: use IUPAC prefix (meth–, eth–, prop–, but–) + –oyl chloride',
          '   → ethanoyl chloride (CH₃COCl), propanoyl chloride (CH₃CH₂COCl), butanoyl chloride (CH₃CH₂CH₂COCl)',
          'Despite having a C=O group, acyl chlorides are NOT classified as carbonyls (aldehydes/ketones)',
          '   → The Cl gives properties of BOTH carbonyls AND haloalkanes combined',
          '   → They behave differently from aldehydes/ketones in reactions'
        ]
      }
    },
    {
      id: 'table-acyl-names',
      type: 'comparisonTable',
      data: {
        headers: ['Name', 'Formula', 'Parent carboxylic acid'],
        rows: [
          ['Methanoyl chloride', 'HCOCl', 'Methanoic acid'],
          ['Ethanoyl chloride', 'CH₃COCl', 'Ethanoic acid'],
          ['Propanoyl chloride', 'CH₃CH₂COCl', 'Propanoic acid'],
          ['Butanoyl chloride', 'CH₃CH₂CH₂COCl', 'Butanoic acid']
        ],
        caption: 'Acyl chloride naming — same prefix as the parent acid, suffix changes to –oyl chloride. Must be able to draw displayed and skeletal formulae.'
      }
    },

    // ── Reactivity ──────────────────────────────────────────────────────────
    {
      id: 'h-acyl-reactivity',
      type: 'heading',
      data: { text: 'Why Acyl Chlorides Are Very Reactive', level: 3 }
    },
    {
      id: 'list-acyl-reactivity',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'The carbonyl carbon (C=O) is bonded to BOTH oxygen AND chlorine — both are highly δ⁻',
          'This makes the carbon strongly δ⁺ (electron deficient)',
          'Any nucleophile with lone pairs (especially those containing O or N) readily attacks this carbon',
          'No catalyst or heat required — reactions are fast and often vigorous at room temperature',
          'Cl⁻ is an excellent leaving group (weak base, very stable) → easily displaced during reaction'
        ]
      }
    },
    {
      id: 'svg-acyl-structure',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" font-family="Arial,sans-serif" font-size="13">
  <text x="250" y="22" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">Acyl Chloride — Electrophilic Carbon</text>

  <!-- R group -->
  <text x="44" y="108" font-size="15" fill="#374151">R</text>
  <line x1="58" y1="103" x2="86" y2="103" stroke="#374151" stroke-width="2"/>

  <!-- C atom -->
  <text x="88" y="108" font-size="15" fill="#374151">C</text>
  <text x="99" y="92" font-size="12" fill="#2563eb">δ+</text>

  <!-- C=O double bond -->
  <line x1="98" y1="96" x2="122" y2="76" stroke="#374151" stroke-width="2.5"/>
  <line x1="101" y1="100" x2="125" y2="80" stroke="#374151" stroke-width="2.5"/>
  <text x="126" y="74" font-size="15" fill="#dc2626">O</text>
  <text x="140" y="68" font-size="11" fill="#dc2626">δ−</text>

  <!-- C–Cl single bond -->
  <line x1="98" y1="108" x2="122" y2="128" stroke="#374151" stroke-width="2.5"/>
  <text x="126" y="136" font-size="15" fill="#7c3aed">Cl</text>
  <text x="140" y="150" font-size="11" fill="#7c3aed">δ−</text>

  <!-- Annotation arrow pointing to C -->
  <path d="M 230 103 Q 190 103 115 103" stroke="#0284c7" fill="none" stroke-width="1.8" marker-end="url(#arr)"/>
  <defs><marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#0284c7"/></marker></defs>
  <text x="234" y="90" font-size="12" fill="#0284c7">C is very δ+</text>
  <text x="234" y="106" font-size="12" fill="#0284c7">(attacked by</text>
  <text x="234" y="120" font-size="12" fill="#0284c7">nucleophiles)</text>

  <!-- Box: both O and Cl pull electrons from C -->
  <rect x="14" y="148" width="330" height="38" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="24" y="166" font-size="12" fill="#92400e">Both O and Cl are δ− → both pull electron density from C</text>
  <text x="24" y="182" font-size="12" fill="#92400e">→ C is more δ+ than in aldehydes/ketones → MORE reactive</text>
</svg>`,
        caption: 'Acyl chloride electrophilic carbon. Both O and Cl are electronegative, making the C so electron-deficient it is readily attacked by any nucleophile with a lone pair.'
      }
    },

    // ── Four Key Reactions ──────────────────────────────────────────────────
    {
      id: 'h-acyl-reactions',
      type: 'heading',
      data: { text: 'Four Key Reactions of Acyl Chlorides', level: 3 }
    },
    {
      id: 'callout-four-key',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'IAL Exam — What You Need to Know',
        text: 'For all four reactions: know the reagent, the product(s), and HCl is ALWAYS produced as a co-product.\n\nMechanisms are NOT required. No special conditions needed (all at room temperature).'
      }
    },

    // Reaction 1: Water
    {
      id: 'h-acyl-water',
      type: 'heading',
      data: { text: 'Reaction 1 — With Water (Hydrolysis)', level: 3 }
    },
    {
      id: 'list-acyl-water',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Reagent: cold water (H₂O)',
          'Reaction: vigorous, exothermic — happens immediately on contact',
          'Products: carboxylic acid (R–COOH) + hydrogen chloride gas (HCl↑)',
          'Observation: misty white fumes of HCl → confirms HCl is produced',
          'The –OH from water replaces the –Cl of the acyl chloride',
          'General pattern: RCOCl loses Cl, gains OH → becomes RCOOH'
        ]
      }
    },
    {
      id: 'eq-acyl-water',
      type: 'equation',
      data: {
        html: 'CH₃COCl + H₂O → CH₃COOH + HCl↑',
        caption: 'Ethanoyl chloride + water → ethanoic acid + HCl (misty fumes). Reaction is vigorous (violent in some cases).'
      }
    },

    // Reaction 2: Alcohol
    {
      id: 'h-acyl-alcohol',
      type: 'heading',
      data: { text: 'Reaction 2 — With Alcohol (Esterification)', level: 3 }
    },
    {
      id: 'list-acyl-alcohol',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Reagent: alcohol (R′–OH)',
          'Products: ester (R–COO–R′) + HCl↑ (misty fumes)',
          'Reaction is COMPLETE (goes to completion) — NOT reversible → better yield than Fischer esterification',
          'No heat or catalyst required (unlike Fischer esterification with conc. H₂SO₄)',
          'Main DISADVANTAGE: HCl gas is produced → toxic/corrosive → not ideal for large-scale synthesis',
          'In contrast, Fischer esterification produces water (non-toxic) but is reversible (lower yield)',
          'Trade-off: acyl chloride = complete reaction but toxic HCl; carboxylic acid = equilibrium but safer'
        ]
      }
    },
    {
      id: 'eq-acyl-alcohol',
      type: 'equation',
      data: {
        html: 'CH₃COCl + CH₃CH₂OH → CH₃COOCH₂CH₃ + HCl↑',
        caption: 'Ethanoyl chloride + ethanol → ethyl ethanoate + HCl. Complete reaction (no equilibrium). Compare: Fischer esterification gives the same ester but is reversible and produces water instead of HCl.'
      }
    },
    {
      id: 'table-ester-comparison',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'Acyl chloride + alcohol', 'Carboxylic acid + alcohol (Fischer)'],
        rows: [
          ['Completeness', 'Complete reaction (→)', 'Reversible equilibrium (⇌)'],
          ['Yield', 'Higher', 'Lower (limited by equilibrium)'],
          ['Catalyst', 'None needed', 'Conc. H₂SO₄ required'],
          ['Co-product', 'HCl (toxic, corrosive gas)', 'H₂O (harmless)'],
          ['Industrial use', 'Lab / specialised synthesis', 'Preferred for large-scale (safer)'],
          ['Conditions', 'Room temperature', 'Heat required']
        ],
        caption: 'Comparison of two methods for making esters. Acyl chloride gives higher yield but HCl is a hazard. Fischer esterification is safer but equilibrium-limited.'
      }
    },

    // Reaction 3: Ammonia
    {
      id: 'h-acyl-ammonia',
      type: 'heading',
      data: { text: 'Reaction 3 — With Concentrated Ammonia', level: 3 }
    },
    {
      id: 'list-acyl-ammonia',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Reagent: concentrated ammonia solution (NH₃)',
          'Products: primary amide (R–CO–NH₂) + hydrogen chloride (HCl)',
          'Functional group of amide: –CONH₂ (carbonyl + NH₂ on same carbon)',
          'IMPORTANT side reaction: HCl produced then reacts further with excess NH₃:',
          '   NH₃ + HCl → NH₄Cl (ammonium chloride salt)',
          '   So two products form overall: the amide AND ammonium chloride',
          'The amide nitrogen has TWO hydrogens (–NH₂) — see N-substituted amides below for comparison',
          'Amides will be studied further in Topic 19 (Unit 5)'
        ]
      }
    },
    {
      id: 'eq-acyl-ammonia',
      type: 'equation',
      data: {
        html: 'CH₃COCl + NH₃ → CH₃CONH₂ + HCl<br/>Then: HCl + NH₃ → NH₄Cl<br/>Overall: CH₃COCl + 2NH₃ → CH₃CONH₂ + NH₄Cl',
        caption: 'Ethanoyl chloride + ammonia → ethanamide. The HCl produced immediately reacts with excess NH₃ to form ammonium chloride (NH₄Cl) as a salt by-product.'
      }
    },

    // Reaction 4: Amines
    {
      id: 'h-acyl-amines',
      type: 'heading',
      data: { text: 'Reaction 4 — With Primary and Secondary Amines', level: 3 }
    },
    {
      id: 'list-acyl-amines',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Primary amine (R′–NH₂): reacts with acyl chloride → N-substituted amide (R–CO–NH–R′) + HCl',
          '   One H is removed from the –NH₂ group to form HCl; the remaining –NH–R′ bonds to the acyl part',
          'Secondary amine (R′₂NH): reacts with acyl chloride → N,N-disubstituted amide (R–CO–NR′₂) + HCl',
          '   One H is removed from –NHR′; the two R′ groups remain on nitrogen',
          'Tertiary amine (R′₃N): does NOT react — no H on nitrogen to be removed to form HCl',
          'General rule: must have at least ONE H on nitrogen for the reaction to occur'
        ]
      }
    },
    {
      id: 'callout-amide-naming',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Naming N-Substituted Amides',
        text: 'The "N" locant shows the alkyl group is on the NITROGEN atom (not on a carbon in the chain).\n\nExample 1 — primary amine:\nCH₃COCl + CH₃NH₂ → CH₃CONHCH₃  =  N-methylethanamide\n(ethanamide backbone + methyl on N)\n\nExample 2 — secondary amine:\nCH₃COCl + (CH₃)₂NH → CH₃CON(CH₃)₂  =  N,N-dimethylethanamide\n(ethanamide backbone + TWO methyls on N)\n\nAnalogy: just like numbering a carbon position (e.g. 2-methylpropane), the N tells you the substituent is on nitrogen rather than on a chain carbon.'
      }
    },
    {
      id: 'eq-acyl-primary-amine',
      type: 'equation',
      data: {
        html: 'CH₃COCl + CH₃NH₂ → CH₃CONHCH₃ + HCl↑<br/><span style="font-size:0.9em;color:#6b7280">Ethanoyl chloride + methylamine → N-methylethanamide + HCl</span>',
        caption: 'Acyl chloride + primary amine → N-substituted amide. One H is lost from –NH₂; the remaining N–H and the N–CH₃ are retained in the product.'
      }
    },
    {
      id: 'eq-acyl-secondary-amine',
      type: 'equation',
      data: {
        html: 'CH₃COCl + (CH₃)₂NH → CH₃CON(CH₃)₂ + HCl↑<br/><span style="font-size:0.9em;color:#6b7280">Ethanoyl chloride + dimethylamine → N,N-dimethylethanamide + HCl</span>',
        caption: 'Acyl chloride + secondary amine → N,N-disubstituted amide. The single N–H is lost; both CH₃ groups remain on nitrogen.'
      }
    },

    // Summary table for 4 reactions
    {
      id: 'table-acyl-summary',
      type: 'comparisonTable',
      data: {
        headers: ['Reaction', 'Reagent', 'Main product', 'Co-product(s)'],
        rows: [
          ['① + Water', 'H₂O (cold)', 'Carboxylic acid (R–COOH)', 'HCl↑ (misty fumes)'],
          ['② + Alcohol', 'R′–OH', 'Ester (R–COO–R′)', 'HCl↑ (misty fumes)'],
          ['③ + Ammonia', 'conc. NH₃', 'Primary amide (R–CONH₂)', 'HCl → reacts with NH₃ → NH₄Cl'],
          ['④ + Primary amine', 'R′–NH₂', 'N-substituted amide (R–CO–NHR′)', 'HCl↑'],
          ['④ + Secondary amine', 'R′₂NH', 'N,N-disubstituted amide (R–CO–NR′₂)', 'HCl↑'],
          ['Tertiary amine R′₃N', '—', 'No reaction', '(no N–H to remove)']
        ],
        caption: 'All four acyl chloride reactions — HCl is ALWAYS produced. No mechanisms required for IAL exam. Learn reagent + product for each.'
      }
    },

    // ════════════════════════════════════════════════════════════════════════
    // PART 2 — ESTERS
    // ════════════════════════════════════════════════════════════════════════

    {
      id: 'h-esters',
      type: 'heading',
      data: { text: 'Part 2: Esters', level: 2 }
    },

    // ── Structure, Naming, Drawing ──────────────────────────────────────────
    {
      id: 'h-ester-naming',
      type: 'heading',
      data: { text: 'Naming and Drawing Esters', level: 3 }
    },
    {
      id: 'list-ester-naming',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Made from a carboxylic acid + alcohol (with conc. H₂SO₄ catalyst and heat)',
          'Functional group: –COO– (carbonyl adjacent to single-bond oxygen)',
          'General formula: R–COO–R′',
          'Naming is TWO words: [alcohol-derived part] [acid-derived part]',
          '   Step 1: take the alcohol name, remove "–ol", add "–yl" → ethanol = ethyl–',
          '   Step 2: take the acid name, remove "–ic acid", add "–oate" → propanoic = –propanoate',
          '   → methanol + propanoic acid = methyl propanoate',
          'DRAWING ORDER is OPPOSITE to naming: draw the acid part FIRST, then the alcohol part',
          '   → Functional group appears as: (acid)–C(=O)–O–(alcohol)',
          '   Reason: the C=O is always drawn first (it comes from the acid) then the single-bond O',
          'Exam note: you will NOT lose marks if you draw alcohol part first, but acid first is good practice'
        ]
      }
    },
    {
      id: 'table-ester-names',
      type: 'comparisonTable',
      data: {
        headers: ['Ester name', 'From acid', 'From alcohol', 'Formula'],
        rows: [
          ['Methyl methanoate', 'Methanoic acid', 'Methanol', 'HCOOCH₃'],
          ['Methyl ethanoate', 'Ethanoic acid', 'Methanol', 'CH₃COOCH₃'],
          ['Ethyl methanoate', 'Methanoic acid', 'Ethanol', 'HCOOCH₂CH₃'],
          ['Ethyl ethanoate', 'Ethanoic acid', 'Ethanol', 'CH₃COOCH₂CH₃'],
          ['Methyl propanoate', 'Propanoic acid', 'Methanol', 'CH₃CH₂COOCH₃']
        ],
        caption: 'Ester naming examples. Name = [alcohol]-yl + [acid]-oate. Draw: acid part first, then –O–, then alcohol part.'
      }
    },

    // ── Physical Properties ──────────────────────────────────────────────────
    {
      id: 'h-ester-properties',
      type: 'heading',
      data: { text: 'Physical Properties of Esters', level: 3 }
    },
    {
      id: 'list-ester-properties',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Colourless liquids with relatively low melting and boiling points',
          'Lower boiling points than equivalent carboxylic acids — esters CANNOT form hydrogen bonds with each other (no O–H group)',
          'Insoluble in water: every H atom in an ester is bonded to a carbon (not O, N, or F) → cannot act as H-bond donor → no H-bonding with water → insoluble',
          'They CAN accept H-bonds from water (via the C=O oxygen) but this is insufficient for dissolving',
          'Very pleasant, distinctive smells — used in flavourings, perfumes',
          'Pentyl methanoate smells of pears; methyl butanoate smells of apples (not required to memorise)',
          'Also used as solvents, in biofuels, and as anaesthetics'
        ]
      }
    },
    {
      id: 'callout-ester-insoluble',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Why Esters Are Insoluble in Water',
        text: 'For H-bonding to occur, H must be covalently bonded to O, N, or F (electronegative atoms).\n\nIn esters, every H atom is attached to a carbon → no H is ever on O, N, or F → cannot donate H-bonds to water → INSOLUBLE.\n\nCompare: alcohols (R–OH) and carboxylic acids (R–COOH) DO have H on O → they DO hydrogen bond with water → MORE soluble.'
      }
    },

    // ── Ester Hydrolysis ─────────────────────────────────────────────────────
    {
      id: 'h-ester-hydrolysis',
      type: 'heading',
      data: { text: 'Reactions of Esters — Hydrolysis', level: 3 }
    },
    {
      id: 'p-ester-hydrolysis-intro',
      type: 'paragraph',
      data: {
        text: 'Hydrolysis is the REVERSE of esterification — the ester bond is broken by adding water. The ester splits in the middle of the –COO– group: the acid part regains –OH; the alcohol part regains –H. Two conditions exist: acidic and alkaline hydrolysis.'
      }
    },
    {
      id: 'h-acidic-hydrolysis',
      type: 'heading',
      data: { text: 'Acidic Hydrolysis', level: 3 }
    },
    {
      id: 'list-acidic-hydrolysis',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Reagent: dilute H₂SO₄ (or dilute HCl) + water',
          'Conditions: warm/heat',
          'Products: carboxylic acid (R–COOH) + alcohol (R′–OH)',
          'Reaction is REVERSIBLE (equilibrium ⇌) — same catalyst speeds up both forward and reverse',
          'This is why esterification and hydrolysis reach equilibrium at the same time',
          'One-step reaction'
        ]
      }
    },
    {
      id: 'eq-acidic-hydrolysis',
      type: 'equation',
      data: {
        html: 'CH₃COOCH₂CH₃ + H₂O ⇌ CH₃COOH + CH₃CH₂OH<br/><span style="font-size:0.9em;color:#6b7280">Ethyl ethanoate + water ⇌ ethanoic acid + ethanol (dilute H₂SO₄ catalyst, warm)</span>',
        caption: 'Acidic hydrolysis of an ester. Reversible equilibrium — the same catalyst promotes both esterification and hydrolysis, so both occur simultaneously.'
      }
    },
    {
      id: 'h-alkaline-hydrolysis',
      type: 'heading',
      data: { text: 'Alkaline Hydrolysis (Saponification)', level: 3 }
    },
    {
      id: 'list-alkaline-hydrolysis',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Reagent: NaOH(aq) or KOH(aq)',
          'Conditions: heat under reflux',
          'Products (Step 1): carboxylate salt (R–COO⁻Na⁺) + alcohol (R′–OH)',
          'Reaction goes to COMPLETION (not an equilibrium) → better yield',
          'To get the free carboxylic acid: Step 2 — add dilute acid (H⁺) to protonate the carboxylate salt',
          'The NaOH is NOT truly a catalyst — it is consumed in the reaction (alkali decreases as reaction proceeds)'
        ]
      }
    },
    {
      id: 'eq-alkaline-hydrolysis',
      type: 'equation',
      data: {
        html: 'Step 1: CH₃CH₂COOCH₃ + NaOH → CH₃CH₂COO⁻Na⁺ + CH₃OH<br/>Step 2: CH₃CH₂COO⁻Na⁺ + H⁺ → CH₃CH₂COOH<br/><span style="font-size:0.9em;color:#6b7280">Methyl propanoate + NaOH → sodium propanoate + methanol → (+ HCl) → propanoic acid</span>',
        caption: 'Alkaline hydrolysis of methyl propanoate. Step 1 gives carboxylate salt (complete reaction). Step 2 adds dilute acid to give the free carboxylic acid.'
      }
    },
    {
      id: 'table-hydrolysis-compare',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'Acidic hydrolysis', 'Alkaline hydrolysis'],
        rows: [
          ['Reagent', 'Dilute H₂SO₄ + water', 'NaOH(aq)'],
          ['No. of steps', '1 step', '2 steps'],
          ['Reversible?', 'Yes — equilibrium (⇌)', 'No — goes to completion'],
          ['Direct product', 'Carboxylic acid + alcohol', 'Carboxylate salt + alcohol'],
          ['To get acid', 'Direct', 'Add dilute acid (Step 2)'],
          ['Yield', 'Lower (equilibrium)', 'Higher (complete)']
        ],
        caption: 'Acidic vs alkaline ester hydrolysis comparison. Alkaline = 2 steps but complete; acidic = 1 step but equilibrium.'
      }
    },

    // ── Saponification ───────────────────────────────────────────────────────
    {
      id: 'h-saponification',
      type: 'heading',
      data: { text: 'Saponification — Soap Making', level: 3 }
    },
    {
      id: 'list-saponification',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Saponification = alkaline hydrolysis of a triglyceride (triester) to make soap',
          'Triglycerides (triesters) are found in vegetable oils and animal fats — they have THREE ester groups',
          'Reagent: 3 moles of NaOH per triglyceride',
          'Products: glycerol (propane-1,2,3-triol) + 3 carboxylate salts (the soaps)',
          'The carboxylate salts (long-chain RCOONa) are the actual soap molecules',
          'The glycerol backbone is always propane-1,2,3-triol regardless of which fats are used',
          'You do NOT need to know specific triglyceride names — just understand the process',
          'Saponification = a specific type of alkaline hydrolysis'
        ]
      }
    },
    {
      id: 'svg-saponification',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 290" font-family="Arial,sans-serif" font-size="12">
  <text x="310" y="22" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">Saponification — Alkaline Hydrolysis of a Triglyceride</text>

  <!-- Triglyceride box -->
  <rect x="10" y="36" width="200" height="195" rx="8" fill="#fef9ec" stroke="#d97706" stroke-width="2"/>
  <text x="110" y="58" text-anchor="middle" font-weight="bold" font-size="12" fill="#92400e">Triglyceride (triester)</text>
  <!-- Glycerol backbone -->
  <text x="26" y="84" font-size="11" fill="#374151">CH₂–O–CO–(fatty acid 1)</text>
  <line x1="26" y1="90" x2="26" y2="112" stroke="#374151" stroke-width="1.5"/>
  <text x="26" y="126" font-size="11" fill="#374151">CH –O–CO–(fatty acid 2)</text>
  <line x1="26" y1="132" x2="26" y2="154" stroke="#374151" stroke-width="1.5"/>
  <text x="26" y="168" font-size="11" fill="#374151">CH₂–O–CO–(fatty acid 3)</text>
  <text x="42" y="205" font-size="11" fill="#7c3aed">↑ ↑ ↑ three ester bonds</text>
  <text x="42" y="220" font-size="11" fill="#374151">(glycerol backbone)</text>

  <!-- + 3 NaOH -->
  <text x="220" y="147" font-size="22" fill="#374151">+</text>
  <text x="238" y="135" font-size="13" font-weight="bold" fill="#374151">3 NaOH</text>
  <text x="238" y="152" font-size="12" fill="#6b7280">(heat /</text>
  <text x="238" y="167" font-size="12" fill="#6b7280">reflux)</text>

  <!-- Arrow -->
  <line x1="292" y1="145" x2="322" y2="145" stroke="#374151" stroke-width="2.5"/>
  <polygon points="322,139 334,145 322,151" fill="#374151"/>

  <!-- Products box left -->
  <rect x="338" y="36" width="120" height="90" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="398" y="58" text-anchor="middle" font-weight="bold" font-size="12" fill="#15803d">Glycerol</text>
  <text x="348" y="78" font-size="11" fill="#374151">CH₂–OH</text>
  <text x="348" y="94" font-size="11" fill="#374151">CH –OH</text>
  <text x="348" y="110" font-size="11" fill="#374151">CH₂–OH</text>
  <text x="348" y="126" font-size="10" fill="#15803d">(propane-1,2,3-triol)</text>

  <!-- + -->
  <text x="464" y="90" font-size="20" fill="#374151">+</text>

  <!-- Products box right -->
  <rect x="478" y="36" width="128" height="105" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
  <text x="542" y="56" text-anchor="middle" font-weight="bold" font-size="12" fill="#1d4ed8">3 Soaps</text>
  <text x="488" y="76" font-size="11" fill="#374151">R₁–COO⁻Na⁺</text>
  <text x="488" y="94" font-size="11" fill="#374151">R₂–COO⁻Na⁺</text>
  <text x="488" y="112" font-size="11" fill="#374151">R₃–COO⁻Na⁺</text>
  <text x="482" y="132" font-size="10" fill="#1d4ed8">(carboxylate salts)</text>

  <!-- Key notes -->
  <rect x="10" y="240" width="596" height="38" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="20" y="257" font-size="11" fill="#92400e">• Each ester bond is hydrolysed by one NaOH molecule → 3 NaOH for a triglyceride</text>
  <text x="20" y="272" font-size="11" fill="#92400e">• Glycerol is ALWAYS the alcohol product (same regardless of the fat used)  •  Carboxylate salts = soaps</text>
</svg>`,
        caption: 'Saponification: alkaline hydrolysis of a triglyceride by 3 mol NaOH → glycerol (propane-1,2,3-triol) + 3 carboxylate salts (soaps). You are not required to know specific triglyceride names — know the process and products.'
      }
    },

    // ── Polyesters ───────────────────────────────────────────────────────────
    {
      id: 'h-polyesters',
      type: 'heading',
      data: { text: 'Polyesters — Condensation Polymerisation', level: 3 }
    },
    {
      id: 'list-polyesters',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Polyesters are made by condensation polymerisation — a small molecule (water or HCl) is eliminated at each bond',
          'Unlike addition polymerisation (one monomer, no by-product), condensation needs TWO types of monomer',
          'Standard monomers: (1) a dicarboxylic acid (–COOH at both ends) and (2) a diol (–OH at both ends)',
          '"di–" = two functional groups on the same molecule → allows chain growth in BOTH directions',
          'Every time a –COOH meets an –OH, one ester bond forms and one water molecule is lost',
          'Result: a long alternating chain of diacid–diol–diacid–diol… with ester linkages at every junction',
          'The repeat unit is enclosed in square brackets with bond extensions and subscript n',
          'Alternative: diacyl chloride + diol can also form polyesters but produces HCl (toxic) → less common',
          'Common polyester: PET (polyethylene terephthalate) — from terephthalic acid + ethane-1,2-diol',
          'Terylene is the brand name for PET fibre (may be given in questions but not required to memorise)',
          'Uses: plastic bottles (drink/food packaging), polyester clothing, duvet/pillow fillings, fibre optics'
        ]
      }
    },
    {
      id: 'svg-polyester',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 380" font-family="Arial,sans-serif" font-size="12">
  <text x="340" y="22" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">PET Polyester — Condensation Polymerisation</text>

  <!-- ── MONOMERS ── -->
  <text x="10" y="48" font-weight="bold" font-size="13" fill="#374151">Step 1 — Monomers</text>

  <!-- Terephthalic acid -->
  <rect x="10" y="56" width="280" height="80" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
  <text x="150" y="76" text-anchor="middle" font-weight="bold" font-size="12" fill="#1d4ed8">Terephthalic acid (dicarboxylic acid)</text>
  <text x="22" y="106" font-size="13" fill="#dc2626">HOOC</text>
  <!-- benzene ring simplified -->
  <line x1="60" y1="101" x2="76" y2="101" stroke="#374151" stroke-width="2"/>
  <rect x="76" y="88" width="46" height="26" rx="4" fill="none" stroke="#374151" stroke-width="2"/>
  <text x="99" y="106" text-anchor="middle" font-size="11" fill="#374151">⬡</text>
  <line x1="122" y1="101" x2="138" y2="101" stroke="#374151" stroke-width="2"/>
  <text x="140" y="106" font-size="13" fill="#dc2626">COOH</text>
  <text x="22" y="126" font-size="10" fill="#6b7280">Two –COOH groups (one on each side)</text>

  <!-- + -->
  <text x="298" y="100" font-size="26" fill="#374151">+</text>

  <!-- Ethane-1,2-diol -->
  <rect x="318" y="56" width="200" height="80" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="418" y="76" text-anchor="middle" font-weight="bold" font-size="12" fill="#15803d">Ethane-1,2-diol (diol)</text>
  <text x="330" y="106" font-size="13" fill="#374151">HO–CH₂–CH₂–OH</text>
  <text x="330" y="126" font-size="10" fill="#6b7280">Two –OH groups (one on each end)</text>

  <!-- ── CONDENSATION ── -->
  <text x="10" y="162" font-weight="bold" font-size="13" fill="#374151">Step 2 — Bond Formation (×n times)</text>

  <rect x="10" y="172" width="500" height="60" rx="8" fill="#fff7ed" stroke="#d97706" stroke-width="2"/>
  <text x="22" y="195" font-size="12" fill="#374151">–COOH  +  HO–  →  –COO–  +  H₂O</text>
  <text x="22" y="214" font-size="11" fill="#92400e">Each junction: one ester bond formed, one water molecule lost (condensation)</text>
  <text x="22" y="228" font-size="11" fill="#92400e">Repeat alternating: diacid – ester – diol – ester – diacid – ester – diol ...</text>

  <!-- Arrow -->
  <text x="10" y="260" font-weight="bold" font-size="13" fill="#374151">Step 3 — Repeat Unit of PET</text>

  <!-- Repeat unit box -->
  <rect x="10" y="270" width="580" height="80" rx="8" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2"/>
  <!-- Extension bond left -->
  <line x1="28" y1="310" x2="52" y2="310" stroke="#374151" stroke-width="2.5"/>
  <!-- C=O left -->
  <text x="54" y="315" font-size="13" fill="#374151">O</text>
  <line x1="62" y1="305" x2="62" y2="295" stroke="#374151" stroke-width="2.5"/>
  <line x1="62" y1="305" x2="62" y2="296" stroke="#374151" stroke-width="2.5"/>
  <!-- draw it as text for simplicity -->
  <text x="54" y="315" font-size="13" fill="#374151">–C(=O)–</text>
  <!-- benzene -->
  <text x="102" y="315" font-size="13" fill="#374151">⬡</text>
  <!-- –CO– other side -->
  <text x="120" y="315" font-size="13" fill="#374151">–(O=)C–O–CH₂–CH₂–O–</text>

  <line x1="282" y1="310" x2="305" y2="310" stroke="#374151" stroke-width="2.5"/>
  <!-- bracket -->
  <text x="308" y="315" font-size="20" fill="#7c3aed">[       ]</text>
  <text x="358" y="302" font-size="13" fill="#7c3aed">n</text>

  <text x="20" y="340" font-size="11" fill="#5b21b6">Each repeat unit contains TWO ester bonds (–COO–). Brackets + n = polymer.</text>

  <!-- Note row -->
  <rect x="10" y="358" width="600" height="18" rx="4" fill="#fef2f2"/>
  <text x="20" y="371" font-size="10.5" fill="#991b1b">Terephthalic acid has a benzene ring — don't be put off. Only FUNCTIONAL GROUPS react; the middle section is irrelevant to the reaction.</text>
</svg>`,
        caption: 'PET polyester formation by condensation polymerisation. Terephthalic acid (diacid) + ethane-1,2-diol (diol) → repeating ester bonds + water. The only parts that react are the functional groups (–COOH and –OH).'
      }
    },
    {
      id: 'callout-polyester-monomers',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'How to Find Monomers from a Polyester Repeat Unit (Exam Technique)',
        text: '1. Identify the ester bonds (–COO–) in the repeat unit\n2. Split each ester bond: cut between C and O\n3. Add –OH to the acid part (rebuilds –COOH)\n4. Add –H to the alcohol part (rebuilds –OH)\n5. These two fragments are your two monomers\n\nNote: the Edexcel IAL mark scheme also accepts diacyl chloride + diol as an alternative answer (acyl chloride version of the same monomers).'
      }
    },

    // ── Checklist ────────────────────────────────────────────────────────────
    {
      id: 'checklist-acyl-esters',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can name acyl chlorides (–oyl chloride suffix) and draw their displayed/skeletal formulae.', checked: false },
          { text: 'I know why acyl chlorides are reactive (both O and Cl make C very δ+, Cl⁻ is a good leaving group).', checked: false },
          { text: 'I can write equations for all four acyl chloride reactions (water, alcohol, ammonia, primary amine) including HCl as co-product.', checked: false },
          { text: 'I know the side reaction of NH₃ + HCl → NH₄Cl when reacting acyl chlorides with ammonia.', checked: false },
          { text: 'I understand N-substituted and N,N-disubstituted amide naming and why tertiary amines do not react.', checked: false },
          { text: 'I can name and draw esters using the alcohol-yl + acid-oate convention, and know drawing order is acid first.', checked: false },
          { text: 'I can explain why esters are insoluble in water (all H atoms bonded to C, not O/N/F).', checked: false },
          { text: 'I can compare acidic hydrolysis (1 step, equilibrium) with alkaline hydrolysis (2 steps, complete) of esters.', checked: false },
          { text: 'I can describe saponification (triglyceride + NaOH → glycerol + carboxylate salts/soaps).', checked: false },
          { text: 'I understand PET polyester formation (terephthalic acid + ethane-1,2-diol → repeating ester bonds + H₂O) and can identify monomers from a repeat unit.', checked: false }
        ]
      }
    },

    // ── Summary ──────────────────────────────────────────────────────────────
    {
      id: 'summary-acyl-esters',
      type: 'summary',
      data: {
        text: 'Acyl chlorides (R–COCl): functional group –COCl; named –oyl chloride. Very reactive — both O and Cl make C strongly δ+; Cl⁻ is an excellent leaving group. Four reactions (HCl always produced): ① +H₂O → carboxylic acid + HCl; ② +alcohol → ester + HCl (complete, no catalyst, but HCl is toxic); ③ +NH₃ → amide + HCl → NH₄Cl side-product; ④ +primary amine → N-substituted amide + HCl; +secondary amine → N,N-disubstituted amide + HCl; tertiary amines do NOT react (no N–H). Esters (R–COO–R′): named [alcohol]-yl [acid]-oate; drawn acid part first; colourless liquids; insoluble in water (all H on C); pleasant smells. Hydrolysis: acidic (dilute H₂SO₄/H₂O, 1 step, equilibrium → acid + alcohol); alkaline (NaOH, 2 steps, complete → carboxylate salt then add acid). Saponification = alkaline hydrolysis of triglyceride → glycerol + 3 carboxylate salts (soaps). Polyesters: condensation polymerisation of dicarboxylic acid + diol → ester bonds + H₂O; PET from terephthalic acid + ethane-1,2-diol.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'table-acyl-summary',
        prompt: 'State the reagent and ALL products for each of the four acyl chloride reactions. What is always produced as a co-product?'
      },
      {
        id: 'cue-2',
        blockId: 'callout-amide-naming',
        prompt: 'Explain how to name an N-substituted amide. Why does the "N" appear in the name, and why do tertiary amines not react with acyl chlorides?'
      },
      {
        id: 'cue-3',
        blockId: 'table-ester-comparison',
        prompt: 'Compare making an ester via acyl chloride vs Fischer esterification: yield, conditions, co-product. What is the key advantage and disadvantage of each?'
      },
      {
        id: 'cue-4',
        blockId: 'list-ester-naming',
        prompt: 'How do you name an ester? What is unusual about the drawing order compared to the naming order?'
      },
      {
        id: 'cue-5',
        blockId: 'table-hydrolysis-compare',
        prompt: 'Compare acidic and alkaline hydrolysis of esters: number of steps, reversibility, and products at each stage.'
      },
      {
        id: 'cue-6',
        blockId: 'svg-polyester',
        prompt: 'Describe how PET polyester is made from its two monomers. What type of polymerisation is this, and what small molecule is eliminated?'
      }
    ],
    summaryText: 'Acyl chlorides (RCOCl) — very reactive (C is δ+ due to both O and Cl); named –oyl chloride. HCl always a co-product. Reactions: +H₂O → RCOOH; +R′OH → ester (complete, no catalyst; HCl is toxic trade-off); +NH₃ → amide + NH₄Cl side product; +primary amine → N-substituted amide; +secondary amine → N,N-disubstituted amide; tertiary amines: no reaction (no N–H). Esters: name = [alcohol]-yl [acid]-oate; draw acid part first; insoluble (all H on C, can\'t H-bond); pleasant smells. Hydrolysis: acidic (1 step, eq., → acid + alcohol); alkaline (2 steps, complete → carboxylate salt then add acid). Saponification = NaOH + triglyceride → glycerol + soaps. Polyesters: diacid + diol → ester bonds + H₂O (PET = terephthalic acid + ethane-1,2-diol).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'PET polyester recycling via hydrolysis',
      detail: 'Polyethylene terephthalate (PET) can be chemically recycled by breaking its ester bonds via hydrolysis. Acidic or alkaline hydrolysis regenerates the monomers (terephthalic acid and ethylene glycol), enabling closed-loop recycling. Enzymatic depolymerisation using engineered cutinase enzymes (e.g. LCCICCG) can degrade PET at near-room temperature, making sustainable recycling economically viable. Understanding ester hydrolysis is therefore central to modern green chemistry.',
      year: '2023',
      source: 'Edexcel IAL Chemistry / Green Chemistry Applications',
      tags: ['polyesters', 'PET', 'hydrolysis', 'sustainability', 'recycling']
    },
    {
      id: 'ev-2',
      title: 'Aspirin synthesis via acyl chloride',
      detail: 'Aspirin (acetylsalicylic acid) is industrially synthesised by reacting salicylic acid with acetic anhydride (or ethanoyl chloride HSOML alternative). The acyl chloride route gives a complete, fast reaction at room temperature without a catalyst — demonstrating the practical advantage of acyl chlorides over Fischer esterification (no equilibrium limitation) despite the hazard of HCl gas production.',
      year: '2023',
      source: 'Pharmaceutical Chemistry & IAL Unit 4 Organic Chemistry',
      tags: ['acyl chlorides', 'esterification', 'pharmaceutical', 'aspirin']
    }
  ]
};
