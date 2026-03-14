/**
 * Seed note: Chemistry · Unit 1 · Topic 5 · Subtopic 7
 * "Core Practical 4: Preparation of 1-bromobutane from butan-1-ol"
 * Source: Pearson Edexcel International A Level Chemistry — WCH11 Core Practical 4
 */
export const note_chemistry_1_5_7 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: {
        text: 'Describe Core Practical 4 for Edexcel IAL Chemistry: prepare 1-bromobutane from butan-1-ol by nucleophilic substitution using NaBr and concentrated H₂SO₄. Describe the reflux setup, each purification step and its purpose, purity tests, sources of error, and safety considerations.'
      }
    },
    {
      id: 'h-background',
      type: 'heading',
      data: { text: 'Background', level: 2 }
    },
    {
      id: 'list-background',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Aim: convert butan-1-ol (a primary alcohol) into 1-bromobutane (a primary halogenoalkane) by nucleophilic substitution.',
          'HBr is generated in situ — concentrated H₂SO₄ reacts with NaBr to produce HBr; this avoids handling corrosive, volatile HBr gas directly.',
          'In situ HBr generation: NaBr + H₂SO₄(conc.) → HBr + NaHSO₄.',
          'Overall reaction: butan-1-ol + HBr → 1-bromobutane + H₂O (SN2 nucleophilic substitution; Br⁻ displaces the protonated –OH group at the primary carbon).',
          'Reflux is used to: (1) maintain a high reaction temperature without losing volatile reactants (butan-1-ol and HBr); (2) increase the rate of reaction; (3) allow continuous contact between reactants by returning condensed vapour to the flask.',
          '1-bromobutane is a colourless liquid with boiling point 101.6 °C and density ≈ 1.27 g cm⁻³ (denser than water).'
        ]
      }
    },
    {
      id: 'callout-equations',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Equations',
        text: '<strong>In situ generation of HBr:</strong><br/>NaBr + H<sub>2</sub>SO<sub>4</sub>(conc.) → HBr + NaHSO<sub>4</sub><br/><br/><strong>Overall reaction:</strong><br/>CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH + HBr → CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>Br + H<sub>2</sub>O<br/><em>(butan-1-ol + hydrogen bromide → 1-bromobutane + water)</em>'
      }
    },
    {
      id: 'h-reagents',
      type: 'heading',
      data: { text: 'Reagents, Roles and Safety', level: 2 }
    },
    {
      id: 'table-reagents',
      type: 'comparisonTable',
      data: {
        headers: ['Reagent / Material', 'Role in experiment', 'Safety hazard'],
        rows: [
          ['Butan-1-ol (C₄H₉OH)', 'Starting material (substrate); reacts with HBr via SN2', 'Flammable; irritant to skin/eyes'],
          ['Sodium bromide (NaBr)', 'Source of Br⁻ nucleophile; reacts with H₂SO₄ to form HBr in situ', 'Low hazard'],
          ['Conc. sulfuric acid (H₂SO₄)', 'Generates HBr in situ from NaBr; protonates the –OH of butan-1-ol (making it a better leaving group)', 'Highly corrosive; exothermic on dilution — add carefully with cooling'],
          ['Water', 'Added with NaBr to dissolve it; also added later to cause phase separation', 'Safe'],
          ['Anti-bumping granules', 'Prevent sudden violent boiling (bumping) during heating', 'Safe'],
          ['Anhydrous MgSO₄', 'Drying agent — absorbs water from organic layer', 'Safe; becomes sticky/cake-like when wet']
        ],
        caption: 'Reagents used in CP4, their roles, and associated hazards'
      }
    },
    {
      id: 'h-apparatus',
      type: 'heading',
      data: { text: 'Apparatus — Reflux Setup', level: 2 }
    },
    {
      id: 'svg-apparatus',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 500 510" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="12">
  <defs>
    <marker id="cp4arr" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
      <polygon points="0,0 8,3.5 0,7" fill="#444"/>
    </marker>
    <marker id="cp4arrup" markerWidth="8" markerHeight="7" refX="4" refY="7" orient="auto">
      <polygon points="0,7 4,0 8,7" fill="#93c5fd"/>
    </marker>
    <marker id="cp4arrdown" markerWidth="8" markerHeight="7" refX="4" refY="0" orient="auto">
      <polygon points="0,0 4,7 8,0" fill="#3b82f6"/>
    </marker>
  </defs>

  <!-- Border -->
  <rect x="4" y="4" width="492" height="502" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title -->
  <text x="250" y="26" text-anchor="middle" font-weight="bold" font-size="13" fill="#1e3a8a">Reflux Apparatus — Core Practical 4</text>

  <!-- ═══ HEATING MANTLE (trapezoid under flask) ═══ -->
  <polygon points="128,453 140,478 218,478 230,453" fill="#fde68a" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="179" y="470" text-anchor="middle" fill="#92400e" font-size="10" font-weight="bold">Heating mantle</text>

  <!-- ═══ ROUND-BOTTOM FLASK ═══ -->
  <ellipse cx="179" cy="391" rx="63" ry="56" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>

  <!-- Flask neck (bridges flask top to condenser base; same fill/stroke as flask) -->
  <rect x="165" y="298" width="28" height="46" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>

  <!-- Reaction mixture text inside flask -->
  <text x="179" y="384" text-anchor="middle" fill="#1e40af" font-size="10">Butan-1-ol</text>
  <text x="179" y="398" text-anchor="middle" fill="#1e40af" font-size="10">NaBr + H₂SO₄</text>

  <!-- Anti-bumping granules (circles at flask bottom) -->
  <circle cx="161" cy="432" r="4" fill="#9ca3af"/>
  <circle cx="177" cy="438" r="4" fill="#9ca3af"/>
  <circle cx="193" cy="433" r="4" fill="#9ca3af"/>

  <!-- ═══ LIEBIG CONDENSER ═══ -->
  <!-- Outer jacket -->
  <rect x="158" y="88" width="42" height="213" rx="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
  <!-- Inner tube -->
  <rect x="167" y="93" width="24" height="205" fill="none" stroke="#0284c7" stroke-width="1.5"/>

  <!-- Open top of condenser -->
  <rect x="168" y="78" width="22" height="12" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="179" y="72" text-anchor="middle" fill="#6b7280" font-size="10">Open end</text>

  <!-- ═══ WATER CIRCULATION ═══ -->
  <!-- Water IN: enters outer jacket from left at bottom (y=280) -->
  <line x1="75" y1="280" x2="157" y2="280" stroke="#2563eb" stroke-width="2" marker-end="url(#cp4arr)"/>
  <text x="70" y="276" text-anchor="end" fill="#1d4ed8" font-size="11" font-weight="bold">Water in</text>
  <text x="70" y="288" text-anchor="end" fill="#1d4ed8" font-size="10">(cold)</text>

  <!-- Water OUT: exits outer jacket at top (y=112) going left -->
  <line x1="158" y1="112" x2="75" y2="112" stroke="#0ea5e9" stroke-width="2" marker-end="url(#cp4arr)"/>
  <text x="70" y="108" text-anchor="end" fill="#0284c7" font-size="11" font-weight="bold">Water out</text>
  <text x="70" y="120" text-anchor="end" fill="#0284c7" font-size="10">(warm)</text>

  <!-- Dashed vertical line showing water circuit on left -->
  <line x1="62" y1="112" x2="62" y2="280" stroke="#bae6fd" stroke-width="1.5" stroke-dasharray="4,3"/>

  <!-- Vapour rising (dashed blue, up the right side of inner tube) -->
  <line x1="183" y1="296" x2="183" y2="195" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#cp4arrup)"/>

  <!-- Condensed liquid falling (solid, down left side of inner tube) -->
  <line x1="172" y1="185" x2="172" y2="290" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#cp4arrdown)"/>

  <!-- ═══ RIGHT-SIDE LABELS ═══ -->

  <!-- Liebig condenser label -->
  <line x1="201" y1="195" x2="262" y2="195" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3"/>
  <text x="265" y="192" fill="#0369a1" font-size="11" font-weight="bold">Liebig condenser</text>
  <text x="265" y="206" fill="#0369a1" font-size="10">(water-cooled jacket)</text>
  <text x="265" y="218" fill="#6b7280" font-size="10">Vapour rises ↑; condenses;</text>
  <text x="265" y="230" fill="#6b7280" font-size="10">liquid returns to flask ↓</text>

  <!-- Flask label -->
  <line x1="243" y1="391" x2="262" y2="391" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3"/>
  <text x="265" y="388" fill="#1e40af" font-size="11" font-weight="bold">Round-bottom flask</text>
  <text x="265" y="401" fill="#1e40af" font-size="10">+ anti-bumping granules</text>

  <!-- Anti-bumping granules label -->
  <line x1="197" y1="436" x2="262" y2="448" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3"/>
  <text x="265" y="451" fill="#374151" font-size="10">Anti-bumping granules</text>
  <text x="265" y="463" fill="#374151" font-size="10">(prevent bumping/violent boiling)</text>
</svg>`,
        caption: 'Reflux apparatus for CP4. Cold water enters the Liebig condenser at the base and exits at the top (countercurrent). Vapour rises through the inner tube, condenses on the cooled walls, and drips back into the flask.'
      }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Procedure', level: 2 }
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Add butan-1-ol (10 cm³), NaBr (13 g), and water (9 cm³) to a round-bottom flask. Add anti-bumping granules.',
          'Place the flask in an ice bath. Add concentrated H₂SO₄ (9 cm³) dropwise and slowly — the mixture is strongly exothermic so cooling prevents uncontrolled boiling and loss of HBr gas.',
          'Swirl the flask to mix. Remove the ice bath.',
          'Fit a water-cooled Liebig condenser vertically above the flask (reflux position). Connect the water supply so cold water enters at the bottom (countercurrent flow).',
          'Heat the mixture gently under reflux for 30–45 minutes. Two distinct liquid layers should be visible at the end of reflux, indicating near-completion.',
          'Allow the reaction mixture to cool to room temperature before dismantling the apparatus.'
        ]
      }
    },
    {
      id: 'h-purification',
      type: 'heading',
      data: { text: 'Purification Steps', level: 2 }
    },
    {
      id: 'list-purification',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Pour the cooled mixture into a separating funnel. Add cold water (~20 cm³) — the organic product (1-bromobutane) sinks to form the lower layer because its density (~1.27 g cm⁻³) is greater than water.',
          'Run off the lower organic layer into a conical flask. Discard the upper aqueous layer.',
          'Return the organic layer to the separating funnel. Wash with concentrated H₂SO₄ (aq, ~5 cm³). Shake, vent, separate. Retain the lower organic layer. Purpose: removes unreacted butan-1-ol, which dissolves in sulfuric acid via protonation.',
          'Wash with saturated NaHCO₃ solution (~10 cm³). Shake gently — invert the funnel and open the stopcock immediately to vent CO₂ gas produced. Allow layers to separate and run off the lower organic layer. Purpose: neutralises and removes H₂SO₄ and HBr.',
          'Wash with water (~10 cm³) to remove residual NaHCO₃ and sodium salts. Retain the lower organic layer.',
          'Transfer the organic layer to a small conical flask. Add anhydrous MgSO₄ (granules). Swirl and leave for 5 minutes. If granules clump together, add more. Drying is complete when the granules move freely.',
          'Filter the drying agent (fluted filter paper into a distillation flask). Set up for distillation and collect the fraction boiling between 98–104 °C (bp of pure 1-bromobutane = 101.6 °C).'
        ]
      }
    },
    {
      id: 'table-purification',
      type: 'comparisonTable',
      data: {
        headers: ['Wash reagent', 'Impurity removed', 'Key observation / notes'],
        rows: [
          ['Cold water (initial)', 'Causes 1-bromobutane to separate as lower layer', 'Two distinct layers form; organic layer is lower and denser'],
          ['Conc. H₂SO₄(aq)', 'Unreacted butan-1-ol (dissolves in acid); excess HBr', 'Alcohol dissolves into upper aqueous acid layer'],
          ['Sat. NaHCO₃(aq)', 'H₂SO₄ and HBr (acid neutralisation)', 'CO₂ effervescence — vent separating funnel frequently'],
          ['Water', 'NaHCO₃ and dissolved salts', 'No distinctive observation'],
          ['Anhydrous MgSO₄', 'Water (absorbed by drying agent)', 'Free-flowing granules = dry; clumped = still wet']
        ],
        caption: 'Summary of each purification wash in CP4: impurity removed and key observation'
      }
    },
    {
      id: 'callout-layers',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Identifying the Organic Layer in the Separating Funnel',
        text: '• 1-bromobutane has density ≈ 1.27 g cm<sup>−3</sup>, which is greater than water (1.00 g cm<sup>−3</sup>) → 1-bromobutane is <strong>always the lower layer</strong> throughout all washing steps.<br/>• At each step: drain the <strong>lower layer</strong> into a conical flask; this is the product layer.<br/>• If unsure which layer is organic: add a few drops to a watch glass of water — if it floats, it is the upper (aqueous) layer; if it sinks through, it is the organic product.<br/>• Early in purification the organic layer may be slightly cloudy (water droplets suspended) or have a faint yellowish tint (dissolved Br<sub>2</sub>). After complete washing and drying it should be a clear, colourless liquid.<br/>• During the NaHCO<sub>3</sub> wash, CO<sub>2</sub> gas is produced — invert the separating funnel and open the stopcock immediately to release pressure before full shaking.'
      }
    },
    {
      id: 'h-tests',
      type: 'heading',
      data: { text: 'Purity Tests', level: 2 }
    },
    {
      id: 'list-tests-water',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Test for water (in organic product): add a small amount of anhydrous CuSO₄ (white solid) to a few drops of the product.',
          'Positive result (water present): CuSO₄ turns blue — forms hydrated copper(II) sulfate, CuSO₄·5H₂O.',
          'Negative result (sample is dry): CuSO₄ remains white — no colour change.'
        ]
      }
    },
    {
      id: 'list-tests-halide',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Test for bromide (confirms product identity): dissolve a few drops of 1-bromobutane in ethanol (~2 cm³).',
          'Acidify with dilute nitric acid (HNO₃) — removes carbonate or sulfate ions that would give false precipitates.',
          'Add aqueous silver nitrate (AgNO₃) — a cream precipitate of silver bromide (AgBr) confirms bromide.',
          'Comparison: white precipitate = AgCl (chloride); cream precipitate = AgBr (bromide); yellow precipitate = AgI (iodide).',
          'Solubility in NH₃ to distinguish: AgCl dissolves in dilute NH₃; AgBr dissolves only in conc. NH₃; AgI is insoluble in NH₃.'
        ]
      }
    },
    {
      id: 'list-tests-bp',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Test for purity by boiling point: distil the product and note the temperature at which the liquid boils.',
          'Pure 1-bromobutane boils at a constant temperature of 101.6 °C.',
          'A wide boiling range (e.g. 90–115 °C) indicates impurities are still present — further purification is needed.'
        ]
      }
    },
    {
      id: 'h-errors',
      type: 'heading',
      data: { text: 'Sources of Error and Improvements', level: 2 }
    },
    {
      id: 'table-errors',
      type: 'comparisonTable',
      data: {
        caption: 'Sources of error and improvements in CP4',
        headers: ['Error / Issue', 'Effect on result', 'Improvement'],
        rows: [
          ['H₂SO₄ added too quickly (not dropwise)', 'Violently exothermic; HBr gas lost before reaction; low yield', 'Add H₂SO₄ dropwise in small portions, cooling in ice bath between additions'],
          ['Insufficient reflux time', 'Incomplete conversion; unreacted butan-1-ol in product; low yield', 'Reflux for full 30–45 min; confirm two distinct layers are visible'],
          ['Wrong layer discarded in sep. funnel', 'Loss of product → greatly reduced yield', '1-bromobutane is always the LOWER layer — always keep the lower layer'],
          ['Emulsion forms in separating funnel', 'Layers cannot be clearly separated; poor yield', 'Add saturated NaCl(aq) (salting-out) to break the emulsion'],
          ['Failure to vent sep. funnel during NaHCO₃ wash', 'CO₂ pressure builds up; stopper may be ejected suddenly', 'Invert funnel and open stopcock immediately after each shake to vent before sealing again'],
          ['Insufficient drying before distillation', 'Water in distillate contaminates product; broad boiling range', 'Dry with anhydrous MgSO₄ until granules flow freely; add more if they clump'],
          ['Incomplete washing steps', 'Alcohol and/or acid impurities remain; broad boiling range', 'Carry out each wash at least twice; test with anhydrous CuSO₄ for water']
        ]
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Discarding the <strong>lower layer</strong> — 1-bromobutane is ALWAYS in the lower (denser) layer; never discard it.<br/>• Confusing the purpose of each wash — H<sub>2</sub>SO<sub>4</sub> removes alcohol; NaHCO<sub>3</sub> removes acid; water removes salts.<br/>• Forgetting to <strong>vent</strong> the separating funnel during the NaHCO<sub>3</sub> wash — CO<sub>2</sub> pressure can blow the stopper off.<br/>• Using anhydrous CaCl<sub>2</sub> as a drying agent — it can form complexes with some organic molecules; anhydrous MgSO<sub>4</sub> is preferred for halogenoalkanes.<br/>• Stating the role of reflux as only "to heat" — it also <em>prevents loss of volatile substances</em>.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• Always state <strong>two</strong> reasons for using reflux: (1) keep volatile reactants in the flask; (2) increase rate of reaction.<br/>• When identifying which layer is the product, compare densities — state the numerical density (≈ 1.27 g cm<sup>−3</sup>) as evidence that 1-bromobutane is denser than water.<br/>• For the NaHCO<sub>3</sub> wash, state that <strong>venting</strong> releases CO<sub>2</sub> produced by NaHCO<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub>.<br/>• The anhydrous MgSO<sub>4</sub> drying test: <em>free-flowing</em> granules = dry; <em>clumped</em> granules = still wet.<br/>• Describe purity confirmation as a <em>sharp, constant</em> boiling point at 101.6 °C (not a range).'
      }
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Write the equations for in situ HBr generation (NaBr + H₂SO₄) and the overall reaction.', checked: false },
          { text: 'State two reasons why reflux is used in CP4.', checked: false },
          { text: 'Describe the correct water flow direction through the Liebig condenser (in at bottom, out at top).', checked: false },
          { text: 'Explain why 1-bromobutane is always the lower layer in the separating funnel (density ~1.27 g cm⁻³ > water).', checked: false },
          { text: 'State what impurity each wash removes: H₂SO₄ (alcohol), NaHCO₃ (acid — vent CO₂), water (salts).', checked: false },
          { text: 'Describe the venting procedure during the NaHCO₃ wash and explain why it is necessary.', checked: false },
          { text: 'Describe when the MgSO₄ drying is complete (free-flowing granules).', checked: false },
          { text: 'Describe the test for water: anhydrous CuSO₄ white → blue.', checked: false },
          { text: 'Describe the halide test: dissolve in ethanol, acidify with HNO₃, add AgNO₃ → cream ppt (AgBr).', checked: false },
          { text: 'Confirm purity by distillation: constant boiling point at 101.6 °C.', checked: false }
        ]
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'CP4 — Preparation of 1-bromobutane: butan-1-ol + HBr (in situ from NaBr + conc. H₂SO₄) → 1-bromobutane + H₂O (SN2). Reflux 30–45 min (retains volatiles; increases rate). Purify: separating funnel — 1-bromobutane = lower layer (density ~1.27 g cm⁻³). Wash with H₂SO₄(aq) [removes alcohol], sat. NaHCO₃ [removes acid — vent CO₂], water [removes salts]. Dry with anhydrous MgSO₄ (free-flowing = dry). Distil: collect 98–104 °C fraction (pure bp 101.6 °C). Tests: anhydrous CuSO₄ (white → blue = water present); AgNO₃/HNO₃/ethanol (cream ppt AgBr = bromide confirmed).'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'c1',
        blockId: 'callout-equations',
        prompt: 'Write (a) the equation for in situ generation of HBr and (b) the overall equation for preparation of 1-bromobutane in CP4.'
      },
      {
        id: 'c2',
        blockId: 'list-method',
        prompt: 'Explain why concentrated H₂SO₄ must be added dropwise with cooling, and state two reasons why reflux is used in CP4.'
      },
      {
        id: 'c3',
        blockId: 'callout-layers',
        prompt: 'State which layer is 1-bromobutane in the separating funnel and explain why. State what precaution must be taken during the NaHCO₃ wash.'
      },
      {
        id: 'c4',
        blockId: 'table-purification',
        prompt: 'For each washing step in CP4 (H₂SO₄, NaHCO₃, water), state which impurity is removed and any key observation.'
      },
      {
        id: 'c5',
        blockId: 'list-tests-halide',
        prompt: 'Describe the test for (a) water purity and (b) halide identity in the final 1-bromobutane product. State the expected results.'
      }
    ],
    summaryText: 'CP4: butan-1-ol + HBr (NaBr + conc. H₂SO₄) → 1-bromobutane + H₂O. Reflux 30–45 min. Purify: sep. funnel (lower layer = product); wash H₂SO₄ (removes alcohol), NaHCO₃ (removes acid — vent CO₂), water (removes salts); dry with MgSO₄; distil at 101.6 °C. Purity tests: CuSO₄ (white → blue = water); AgNO₃/HNO₃ in ethanol (cream ppt = AgBr).',
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_5_7;