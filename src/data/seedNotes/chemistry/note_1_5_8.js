/**
 * Seed note: Chemistry · Unit 1 · Topic 5 · Subtopic 8
 * "Preparation of Alkenes in the Lab — Dehydration of Alcohols"
 * Source: Pearson Edexcel International A Level Chemistry — WCH11 Topic 5 / Core Practical 5
 */
export const note_chemistry_1_5_8 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: {
        text: 'Describe how alkenes are prepared in the laboratory by dehydration (elimination) of alcohols, using either heated Al₂O₃ or concentrated acid catalysts (H₃PO₄ preferred; H₂SO₄ less preferred). Describe the procedure, purification, and product testing for the preparation of cyclohexene from cyclohexanol (Core Practical 5).'
      }
    },
    {
      id: 'h-overview',
      type: 'heading',
      data: { text: 'Overview — Dehydration of Alcohols', level: 2 }
    },
    {
      id: 'list-overview',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Alkenes are prepared in the lab by dehydration of alcohols — a molecule of water (H₂O) is eliminated from the alcohol.',
          'Dehydration is a type of elimination reaction: H is removed from the β-carbon (the carbon adjacent to the –OH carbon) and –OH leaves simultaneously.',
          'Two laboratory methods are used: (1) passing alcohol vapour over heated Al₂O₃; (2) heating with a concentrated acid catalyst (H₃PO₄ or H₂SO₄).',
          'Both methods require heat — the reaction is endothermic overall.',
          'Core Practical 5 (Edexcel IAL): preparation of cyclohexene from cyclohexanol using concentrated phosphoric(V) acid (H₃PO₄) as catalyst.'
        ]
      }
    },
    {
      id: 'h-method1',
      type: 'heading',
      data: { text: 'Method 1 — Aluminium Oxide Catalyst (Al₂O₃)', level: 2 }
    },
    {
      id: 'list-al2o3',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Procedure: alcohol vapour (e.g. ethanol) is passed over heated aluminium oxide (Al₂O₃) powder in a ceramic or glass tube.',
          'Temperature: approximately 350–400 °C — Al₂O₃ acts as a heterogeneous (solid) acid catalyst.',
          'Al₂O₃ provides acidic surface sites that catalyse the elimination reaction; it is not consumed in the reaction.',
          'Products: alkene gas + water vapour; the alkene is collected by downward displacement of water or by cooling.',
          'Example: ethanol vapour passed over Al₂O₃ at 350 °C → ethene gas + water vapour.',
          'Advantage: a clean reaction — no oxidation side products; suitable for small-scale gas-phase preparations.',
          'Disadvantage: requires high temperature; not easily controllable for liquid alkene preparations.'
        ]
      }
    },
    {
      id: 'eq-al2o3',
      type: 'equation',
      data: {
        html: 'CH<sub>3</sub>CH<sub>2</sub>OH &nbsp;<span style="font-size:0.85em">Al<sub>2</sub>O<sub>3</sub>, ≈350 °C</span>&nbsp;→&nbsp; CH<sub>2</sub>=CH<sub>2</sub>&nbsp; + &nbsp;H<sub>2</sub>O',
        caption: 'Dehydration of ethanol over heated Al₂O₃: produces ethene gas and water vapour'
      }
    },
    {
      id: 'h-method2',
      type: 'heading',
      data: { text: 'Method 2 — Concentrated Acid Catalyst', level: 2 }
    },
    {
      id: 'list-acid-overview',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Concentrated acid protonates the –OH group: R–OH + H⁺ → R–OH₂⁺. The protonated hydroxyl (water) becomes a much better leaving group.',
          'Elimination then occurs: an adjacent H⁺ is lost from a β-carbon and –OH₂⁺ leaves, forming the C=C double bond.',
          'Two concentrated acids are used: H₃PO₄ (preferred) and H₂SO₄ (less preferred).',
          'Temperature required is typically around 170 °C for both acids with primary alcohols; lower temperatures may work for secondary/tertiary alcohols.'
        ]
      }
    },
    {
      id: 'table-acid',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of concentrated acid catalysts for dehydration of alcohols',
        headers: ['Property', 'Conc. H₃PO₄ (phosphoric acid)', 'Conc. H₂SO₄ (sulfuric acid)'],
        rows: [
          ['Preference', 'Preferred — cleaner reaction', 'Less preferred — messy reaction'],
          ['Oxidising ability', 'H₃PO₄ is NOT a strong oxidising agent', 'H₂SO₄ IS a strong oxidising agent'],
          ['Side reactions', 'Minimal — mainly dehydration only', 'Oxidises some alcohol → CO₂ + SO₂ produced; carbonises mixture to a black solid'],
          ['Gaseous by-products', 'None (beyond water vapour)', 'CO₂ and SO₂ (acidic gases; must be removed by bubbling through NaOH(aq))'],
          ['Appearance of mixture', 'Pale yellow or colourless mixture', 'Darkening/blackening mixture; black solid deposit (carbon) forms'],
          ['Typical use', 'CP5: cyclohexanol → cyclohexene', 'Less common in modern labs; used historically']
        ]
      }
    },
    {
      id: 'callout-h2so4-why',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Why H₂SO₄ is Less Preferred',
        text: '• H<sub>2</sub>SO<sub>4</sub> is a powerful oxidising agent — it oxidises some of the alcohol to CO<sub>2</sub> while being reduced to SO<sub>2</sub>.<br/>• Both CO<sub>2</sub> and SO<sub>2</sub> are acidic gases that contaminate the alkene product and must be removed by bubbling through NaOH(aq).<br/>• H<sub>2</sub>SO<sub>4</sub> also causes charring — the organic matter carbonises, producing a black mass of solid carbon in the flask and making cleaning difficult.<br/>• H<sub>3</sub>PO<sub>4</sub> avoids all of these problems.'
      }
    },
    {
      id: 'h-cp5',
      type: 'heading',
      data: { text: 'Core Practical 5 — Preparation of Cyclohexene', level: 2 }
    },
    {
      id: 'list-cp5-background',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Starting material: cyclohexanol (a secondary cyclic alcohol).',
          'Reagent: concentrated phosphoric(V) acid (H₃PO₄) — preferred catalyst; clean reaction.',
          'Product: cyclohexene (a liquid cyclic alkene) + water.',
          'Distillation (not reflux) is used: as cyclohexene forms (bp 83 °C), it distils off and is continuously removed from the reaction mixture, shifting the equilibrium towards product.',
          'Anti-bumping granules prevent violent boiling in the flask.'
        ]
      }
    },
    {
      id: 'eq-cp5',
      type: 'equation',
      data: {
        html: 'Cyclohexanol &nbsp;<span style="font-size:0.85em">conc. H<sub>3</sub>PO<sub>4</sub>, heat ≈170 °C</span>&nbsp;→&nbsp; Cyclohexene&nbsp; + &nbsp;H<sub>2</sub>O',
        caption: 'CP5 overall equation: cyclohexanol loses H₂O (elimination) to form cyclohexene over concentrated H₃PO₄'
      }
    },
    {
      id: 'svg-apparatus',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 620 430" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="12">
  <defs>
    <marker id="alk8arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0,0 8,3 0,6" fill="#374151"/>
    </marker>
    <marker id="alk8arrb" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0,0 8,3 0,6" fill="#2563eb"/>
    </marker>
    <marker id="alk8arrc" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0,0 8,3 0,6" fill="#0ea5e9"/>
    </marker>
  </defs>

  <!-- Border -->
  <rect x="4" y="4" width="612" height="422" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title -->
  <text x="310" y="24" text-anchor="middle" font-weight="bold" font-size="13" fill="#1e3a8a">Distillation Apparatus — CP5: Preparation of Cyclohexene</text>

  <!-- ═══ HEATING MANTLE ═══ -->
  <polygon points="70,393 207,393 197,365 80,365" fill="#44370a" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="139" y="384" text-anchor="middle" fill="#92400e" font-size="10" font-weight="bold">Heating mantle</text>

  <!-- ═══ ROUND-BOTTOM FLASK ═══ -->
  <ellipse cx="139" cy="295" rx="67" ry="63" fill="#1e3a8a" stroke="#2563eb" stroke-width="2"/>
  <text x="139" y="285" text-anchor="middle" fill="#1e40af" font-size="10">Cyclohexanol</text>
  <text x="139" y="299" text-anchor="middle" fill="#1e40af" font-size="10">+ conc. H₃PO₄</text>
  <text x="139" y="313" text-anchor="middle" fill="#6b7280" font-size="9">(anti-bumping granules)</text>

  <!-- ═══ FLASK NECK ═══ -->
  <!-- Flask top: y = 295 - 63 = 232; neck goes from y=200 up to y=232. height=32 -->
  <rect x="126" y="200" width="26" height="32" fill="#1e3a8a" stroke="#2563eb" stroke-width="2"/>

  <!-- ═══ HORIZONTAL ADAPTER (connects flask neck to condenser at x=195, y=197) ═══ -->
  <rect x="126" y="190" width="69" height="14" fill="#1e3a8a" stroke="#2563eb" stroke-width="2" rx="2"/>

  <!-- ═══ LIEBIG CONDENSER (angled, axis from A=(195,197) to B=(440,300)) ═══
       Outer jacket polygon:
         TL(188,213)  TR(433,316)  BR(447,284)  BL(202,181)
       Inner tube polygon:
         TL(192,205)  TR(437,308)  BR(444,292)  BL(199,189)
  ═══ -->
  <!-- Outer jacket (water space, blue fill) -->
  <polygon points="188,213 433,316 447,284 202,181" fill="#0c4a6e" stroke="#0284c7" stroke-width="2"/>
  <!-- Inner tube (vapour/liquid path, white) -->
  <polygon points="192,205 437,308 444,292 199,189" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>

  <!-- ═══ WATER IN (at far end of condenser, outer-right corner ≈(447,284)) ═══ -->
  <line x1="447" y1="284" x2="492" y2="284" stroke="#2563eb" stroke-width="2" marker-end="url(#alk8arrb)"/>
  <text x="496" y="281" fill="#1d4ed8" font-size="10" font-weight="bold">Water in (cold)</text>
  <text x="496" y="293" fill="#1d4ed8" font-size="10">countercurrent flow</text>

  <!-- ═══ WATER OUT (at near end of condenser, outer-left corner ≈(188,213)) ═══ -->
  <line x1="188" y1="213" x2="143" y2="213" stroke="#0ea5e9" stroke-width="2" marker-end="url(#alk8arrc)"/>
  <text x="139" y="210" text-anchor="end" fill="#0284c7" font-size="10" font-weight="bold">Water out (warm)</text>

  <!-- ═══ DRIP TUBE from condenser exit to collection flask ═══ -->
  <!-- Inner tube far end: center at B=(440,300); far end bottom vertex TR=(437,308) -->
  <rect x="434" y="308" width="12" height="26" fill="#1e293b" stroke="#2563eb" stroke-width="1.5"/>

  <!-- ═══ COLLECTION FLASK ═══ -->
  <!-- Top of collection flask: y = 334+2 = 336; cy = 336+40 = 376 -->
  <ellipse cx="440" cy="377" rx="44" ry="41" fill="#0a2e1a" stroke="#059669" stroke-width="2"/>
  <text x="440" y="372" text-anchor="middle" fill="#065f46" font-size="10">Cyclohexene</text>
  <text x="440" y="386" text-anchor="middle" fill="#065f46" font-size="10">(+ water layer)</text>

  <!-- ═══ VAPOUR ARROW (inside inner tube, near-end, showing vapour entering) ═══ -->
  <line x1="200" y1="197" x2="230" y2="207" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#alk8arrb)"/>

  <!-- ═══ LABELS WITH LEADER LINES ═══ -->

  <!-- "Liebig condenser" label -->
  <line x1="315" y1="252" x2="315" y2="232" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3"/>
  <text x="318" y="228" fill="#0369a1" font-size="10" font-weight="bold">Liebig condenser</text>
  <text x="318" y="240" fill="#0369a1" font-size="9">(water-cooled outer jacket)</text>

  <!-- "Round-bottom flask" label -->
  <line x1="208" y1="295" x2="232" y2="295" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3"/>
  <text x="235" y="292" fill="#1e40af" font-size="10" font-weight="bold">Round-bottom flask</text>

  <!-- "Distillate drips" label -->
  <line x1="440" y1="335" x2="496" y2="335" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3"/>
  <text x="499" y="332" fill="#374151" font-size="9">Condensed alkene</text>
  <text x="499" y="344" fill="#374151" font-size="9">drips into flask</text>

  <!-- Adapter label -->
  <line x1="160" y1="197" x2="152" y2="175" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3"/>
  <text x="150" y="171" text-anchor="end" fill="#374151" font-size="9">Distillation adapter</text>
</svg>`,
        caption: 'CP5 distillation apparatus. Cold water flows countercurrently through the Liebig condenser jacket (in at far end, out at near end). Cyclohexene vapour enters the inner tube and condenses, dripping into the collection flask. The product must then be purified (see below).'
      }
    },
    {
      id: 'h-procedure',
      type: 'heading',
      data: { text: 'CP5 Procedure (Step-by-Step)', level: 2 }
    },
    {
      id: 'list-procedure',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Add cyclohexanol (~25 cm³) and concentrated H₃PO₄ (~10 cm³) to a round-bottom flask. Add anti-bumping granules. Swirl to mix — the mixture turns slightly yellow/cloudy.',
          'Set up the distillation apparatus (not reflux): attach a Liebig condenser angled downward, with the outlet dripping into a small collection flask. Connect cold running water to the condenser (in at the far/lower end, out at the near/upper end — countercurrent).',
          'Heat the mixture steadily. Cyclohexene (bp 83 °C) distils over first — it is more volatile than cyclohexanol (bp 161 °C).',
          'Collect the distillate until the temperature at the distillation outlet stabilises above ~85 °C and drops in volume become scarce. Stop heating. The distillate collected is a mixture of cyclohexene and water (they are partially miscible and form two distinct layers).'
        ]
      }
    },
    {
      id: 'h-purification',
      type: 'heading',
      data: { text: 'Purification of Cyclohexene (CP5)', level: 2 }
    },
    {
      id: 'list-purification',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Transfer the distillate to a separating funnel. Add saturated NaCl(aq) (brine). Shake gently and separate. The upper organic layer is cyclohexene (density ≈ 0.81 g cm⁻³, lighter than water). Retain the upper layer.',
          'Wash the organic layer with saturated Na₂CO₃(aq) (~10 cm³) in the separating funnel. Vent any CO₂ produced. Separate and keep the upper (organic) layer. Purpose: removes residual H₃PO₄ and any cyclohexanol dissolved in the organic layer.',
          'Wash again with water (~10 cm³) to remove any remaining sodium carbonate or salts. Keep upper layer.',
          'Transfer the organic layer to a small conical flask. Add anhydrous CaCl₂ granules (or MgSO₄). Swirl for 5 minutes until granules move freely. Filter off the drying agent.',
          'Redistil the dried organic layer, collecting the fraction boiling between 80–85 °C — this is pure cyclohexene (bp 83 °C).'
        ]
      }
    },
    {
      id: 'callout-layers',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Identifying the Cyclohexene Layer',
        text: '• Cyclohexene has density ≈ 0.81 g cm<sup>−3</sup> — <strong>less dense</strong> than water → cyclohexene is always the <strong>upper layer</strong> in the separating funnel.<br/>• This is the opposite of halogenoalkane preparations (where the organic layer is the denser, lower layer).<br/>• The crude distillate will show two phases: a smaller organic upper layer and a larger aqueous lower layer.<br/>• After all washes, the organic layer should become a clear, colourless liquid.'
      }
    },
    {
      id: 'h-testing',
      type: 'heading',
      data: { text: 'Testing the Product', level: 2 }
    },
    {
      id: 'list-testing',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Test for alkene (C=C present): add a few drops of product to bromine water (orange/brown). Positive result: bromine water decolourises (turns colourless) — bromine adds across the C=C double bond via electrophilic addition.',
          'Test for alkene (alternative): add a few drops of product to cold dilute acidified KMnO₄ (purple). Positive result: KMnO₄ decolourises — the C=C is oxidised to a diol.',
          'Purity test: distil the product and confirm a sharp, constant boiling point of 83 °C. A wide boiling range indicates impurities are still present.',
          'Test for water (drying check): add anhydrous CuSO₄ (white solid). If water is present it turns blue → not yet dry; repeat drying with CaCl₂ or MgSO₄.'
        ]
      }
    },
    {
      id: 'h-isomers',
      type: 'heading',
      data: { text: 'Multiple Products from Unsymmetrical Alcohols', level: 2 }
    },
    {
      id: 'list-isomers',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'The –OH group is lost along with an H from an adjacent (β) carbon to form C=C.',
          'If the carbon bearing –OH has two different adjacent carbons (each with H atoms), elimination can occur in either direction — the double bond can form on either side.',
          'Example: butan-2-ol has β-carbons at C1 and C3. Elimination towards C1 gives but-1-ene; elimination towards C3 gives but-2-ene (which can be E or Z).',
          'Result: a mixture of but-1-ene (minor) + (E)-but-2-ene + (Z)-but-2-ene (major products).',
          'The more substituted alkene (with more alkyl groups on the C=C carbons) is formed in greater amount (more stable product).',
          'Primary alcohols (like ethanol, propan-1-ol) have only one direction of elimination possible → only one alkene product formed.',
          'Secondary and tertiary alcohols can give two or more alkene products (structural isomers and E/Z geometric isomers).'
        ]
      }
    },
    {
      id: 'table-isomers',
      type: 'comparisonTable',
      data: {
        headers: ['Alcohol', 'Possible alkene products', 'Notes'],
        rows: [
          ['Ethanol (CH₃CH₂OH)', 'Ethene only (CH₂=CH₂)', 'Only one β-carbon direction — one product'],
          ['Propan-1-ol (CH₃CH₂CH₂OH)', 'Propene only (CH₃CH=CH₂)', 'Only one β-carbon with H — one product'],
          ['Propan-2-ol (CH₃CH(OH)CH₃)', 'Propene only (CH₃CH=CH₂)', 'Both β-carbons give the same product (symmetric)'],
          ['Butan-2-ol (CH₃CH(OH)CH₂CH₃)', 'But-1-ene (minor) + (E)- and (Z)-but-2-ene (major)', 'Two different β-carbons → mixture of structural and geometric isomers'],
          ['2-Methylbutan-2-ol [(CH₃)₂C(OH)CH₂CH₃]', '2-methylbut-2-ene (major) + 2-methylbut-1-ene (minor)', 'Tertiary alcohol — lower temperature needed; most substituted alkene is major product']
        ],
        caption: 'Alkene products expected from dehydration of various alcohols'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Confusing distillation with reflux — for CP5 use <strong>distillation</strong> (product is continuously removed); reflux would keep the product in the flask.<br/>• Incorrectly identifying the organic layer — cyclohexene is <strong>less dense</strong> than water → <strong>upper</strong> layer (opposite to 1-bromobutane in CP4).<br/>• Forgetting to vent the separating funnel during the Na<sub>2</sub>CO<sub>3</sub> wash (CO<sub>2</sub> pressure).<br/>• Using CaCl<sub>2</sub> as a drying agent for alcohols — CaCl<sub>2</sub> can form complexes with alcohols; use MgSO<sub>4</sub> instead. For alkenes (cyclohexene), CaCl<sub>2</sub> is suitable.<br/>• Stating that H<sub>2</sub>SO<sub>4</sub> "burns" the alcohol — more precisely, it <em>oxidises</em> it to CO<sub>2</sub> and is itself reduced to SO<sub>2</sub>.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• When asked why H₃PO₄ is preferred over H₂SO₄, state that H₂SO₄ is a strong oxidising agent that oxidises the alcohol to CO₂, reduces itself to SO₂, and carbonises the mixture; H₃PO₄ does none of these.<br/>• When identifying the product, always state that bromine water (orange → colourless) confirms the C=C double bond. Do not just say "decolourises" — state the starting and ending colour.<br/>• For "why distillation (not reflux)?" — answer: the product (alkene, bp 83 °C) is more volatile than the starting material (cyclohexanol, bp 161 °C) and is continuously removed, improving yield.<br/>• When predicting products from unsymmetrical alcohol dehydration, draw the alcohol and identify all β-carbons that have H atoms — each gives a separate alkene product.'
      }
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'State two methods for lab preparation of alkenes: Al₂O₃ (gas phase, ~350 °C) and concentrated acid catalyst (H₃PO₄ or H₂SO₄, ~170 °C).', checked: false },
          { text: 'Explain why H₃PO₄ is preferred: not a strong oxidising agent; no CO₂/SO₂/carbon side products.', checked: false },
          { text: 'State the CP5 equation: cyclohexanol + H₃PO₄ (conc.) → cyclohexene + H₂O.', checked: false },
          { text: 'Explain why distillation (not reflux) is used: alkene has a lower bp than alcohol, so it distils off and is continuously removed.', checked: false },
          { text: 'Identify the cyclohexene layer as the UPPER layer (density ~0.81 g cm⁻³ < density of water).', checked: false },
          { text: 'Describe the purification washes: Na₂CO₃(aq) (removes acid/alcohol), water (removes salts), anhydrous CaCl₂/MgSO₄ (drying).', checked: false },
          { text: 'Describe the purity test: constant boiling point at 83 °C; bromine water decolourises (confirms C=C).', checked: false },
          { text: 'Explain why unsymmetrical alcohols give a mixture of alkenes: elimination can occur toward either β-carbon, producing structural isomers ± geometric isomers.', checked: false }
        ]
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Alkenes are prepared by dehydrating alcohols (elimination of H₂O). Method 1: pass vapour over Al₂O₃ at ~350 °C. Method 2: heat with concentrated acid at ~170 °C. H₃PO₄ is preferred over H₂SO₄ — H₂SO₄ is a strong oxidising agent that produces CO₂, SO₂, and solid carbon. CP5: cyclohexanol + conc. H₃PO₄ → cyclohexene + H₂O. Use distillation (not reflux) — alkene has lower bp (83 °C) than alcohol (161 °C). Cyclohexene is the upper layer in the sep. funnel (density 0.81 g cm⁻³ < water). Purify: wash with Na₂CO₃, water; dry with CaCl₂; redistil at 80–85 °C. Test product: bromine water orange → colourless (confirms C=C). Unsymmetrical alcohols give a mixture of alkene products (structural + geometric isomers).'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'c1',
        blockId: 'list-al2o3',
        prompt: 'Describe the conditions for preparing an alkene by passing alcohol vapour over Al₂O₃. Name the type of catalyst it is.'
      },
      {
        id: 'c2',
        blockId: 'table-acid',
        prompt: 'State three reasons why concentrated H₂SO₄ is less preferred than concentrated H₃PO₄ for the dehydration of alcohols.'
      },
      {
        id: 'c3',
        blockId: 'callout-layers',
        prompt: 'State which layer is cyclohexene in the separating funnel and explain why, comparing it to 1-bromobutane.'
      },
      {
        id: 'c4',
        blockId: 'list-testing',
        prompt: 'Describe how to confirm: (a) the product is an alkene, and (b) the product is pure. State the expected observations.'
      },
      {
        id: 'c5',
        blockId: 'table-isomers',
        prompt: 'Explain why butan-2-ol gives a mixture of alkene products on dehydration, but ethanol gives only one alkene product.'
      }
    ],
    summaryText: 'Alkenes prepared by dehydration (elimination): (1) Al₂O₃, ~350 °C; (2) conc. H₃PO₄ or H₂SO₄ at ~170 °C. H₃PO₄ preferred — H₂SO₄ oxidises alcohol to CO₂, is reduced to SO₂, and carbonises mixture. CP5: cyclohexanol + H₃PO₄ → cyclohexene. Distillation used (alkene bp 83 °C lower than cyclohexanol 161 °C). Cyclohexene = upper layer (density < water). Purify: Na₂CO₃ wash → dry → redistil. Test: bromine water decolourises. Unsymmetrical alcohols → mixture of alkene isomers.',
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_5_8;
