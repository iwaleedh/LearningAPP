export const note_chemistry_5_17_9 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-practical-14',
      data: {
        text: 'Prepare tetraamminecopper(II) sulfate monohydrate [Cu(NH₃)₄]SO₄·H₂O by ligand exchange from copper(II) sulfate and concentrated ammonia; isolate by ethanol precipitation and vacuum filtration; calculate actual and percentage yield; explain sources of error.'
      }
    },
    {
      type: 'heading',
      id: 'h-practical-overview',
      data: { text: 'Core Practical 14: Preparation of [Cu(NH₃)₄]SO₄·H₂O', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-practical-aim',
      data: {
        text: 'The aim of this practical is to prepare <strong>[Cu(NH₃)₄]SO₄·H₂O</strong> — tetraamminecopper(II) sulfate monohydrate — by ligand exchange: four water ligands in [Cu(H₂O)₆]²⁺ are replaced by four ammonia ligands. The product is isolated by dissolving in conc. NH₃ and precipitating into ethanol, followed by vacuum filtration.<br/><br/>The preparation involves:<br/>1. Dissolving CuSO₄·5H₂O in a minimum volume of water<br/>2. Adding concentrated ammonia in a fume cupboard → deep blue solution<br/>3. Pouring the solution into ethanol → crystals precipitate immediately<br/>4. Cooling in ice bath, then vacuum filtration (Büchner funnel)<br/>5. Washing with cold ethanol, drying, and weighing<br/>6. Calculating actual and percentage yield'
      }
    },
    {
      type: 'heading',
      id: 'h-theoretical-background',
      data: { text: 'Theoretical Background', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-reactions-involved',
      data: {
        text: '<strong>Ligand exchange equation:</strong><br/>' +
        '[Cu(H₂O)₆]²⁺(aq) + 4NH₃(aq)  ⇌  [Cu(NH₃)₄(H₂O)₂]²⁺(aq) + 4H₂O(l)<br/>' +
        'Simplified (product = tetraamminecopper(II) ion):<br/>' +
        '[Cu(H₂O)₆]²⁺ + 4NH₃ → [Cu(NH₃)₄]²⁺ + 6H₂O  (with sulfate counter-ion and water of crystallisation)<br/><br/>' +
        '<strong>Why NH₃ displaces H₂O?</strong> NH₃ is a stronger ligand than H₂O (higher field strength, larger Δ in spectrochemical series) — equilibrium strongly favours the ammonia complex.<br/><br/>' +
        '<strong>Why pour into ethanol?</strong> [Cu(NH₃)₄]SO₄·H₂O is much LESS soluble in ethanol than in water → product precipitates immediately (anti-solvent precipitation). This avoids slow crystallisation and improves yield speed.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-complex-colour',
      data: {
        text: '<strong>Colour observations:</strong><br/>' +
        '• CuSO₄ solution: pale blue — [Cu(H₂O)₆]²⁺<br/>' +
        '• On adding conc. NH₃: may briefly see pale blue precipitate (limited NH₃ acting as base) → dissolves immediately with excess → DEEP blue solution [Cu(NH₃)₄]²⁺<br/>' +
        '• On pouring into ethanol: dark blue/violet-blue crystals precipitate<br/>' +
        '• Final product after drying: dark blue/purple-blue crystals<br/><br/>' +
        '<strong>Why deeper blue?</strong> NH₃ causes larger d-orbital splitting (Δ) than H₂O → absorbs shorter wavelength (higher energy) light → transmitted colour is deeper blue.'
      }
    },
    {
      type: 'heading',
      id: 'h-detailed-method',
      data: { text: 'Detailed Method', level: 2 }
    },
    { type: 'callout', id: 'callout-cp14-safety', data: { style: 'warning', title: '⚠️ Safety — Ammonia and Ethanol', text: 'Concentrated ammonia: corrosive, pungent, irritant \u2014 perform ALL ammonia additions in a FUME CUPBOARD; wear eye protection and gloves.\nEthanol: HIGHLY FLAMMABLE \u2014 heat using a WATER BATH only; NEVER use a Bunsen burner in steps involving ethanol.\nCopper compounds: irritant; avoid skin contact; dispose of waste in designated copper-waste container.' } },
    {
      type: 'heading',
      id: 'h-method-exam',
      data: { text: 'Exam Method (Transcript / Mark-Scheme Method)', level: 3 }
    },
    {
      type: 'list',
      id: 'list-cp14-method',
      data: { style: 'numbered', items: [
        'Weigh a weighing boat on the balance; record mass M₁',
        'Add ~1.5 g CuSO₄·5H₂O (pale blue crystals) to the boat; record mass M₁ + sample',
        'Tip into a test tube/small beaker; re-weigh empty boat; record M₂   →   actual mass = M₁ + sample − M₂ (weighing by difference)',
        'Add ~4 cm³ of distilled water; warm gently in a WATER BATH (not Bunsen) until all crystals dissolve (pale blue solution)',
        'Move to fume cupboard',
        'Add ~2 cm³ of concentrated ammonia solution (using a dropper or measuring cylinder in fume cupboard); swirl gently → deep blue solution [Cu(NH₃)₄]²⁺ forms immediately',
        'In a separate beaker, measure ~5 cm³ of ethanol',
        'Pour the deep blue copper-ammonia solution into the ethanol; stir gently → dark blue/violet crystals precipitate immediately',
        'Cool the beaker in an ice bath for ~5 minutes to maximise precipitation',
        'Set up Büchner funnel (NOT Hirsch funnel) with filter paper and vacuum filtration apparatus',
        'Wet the filter paper with a little ethanol to seal it; connect vacuum; pour crystals + ethanol onto filter',
        'Wash crystals on filter with 2 × ~3 cm³ portions of cold ethanol (removes impurities; ethanol evaporates quickly)',
        'Scrape crystals from filter paper onto a clean, dry filter paper',
        'Press gently with a second filter paper to dry; leave to air-dry briefly',
        'Weigh the dried product on a pre-weighed watch glass or weighing boat; record mass M₃'
      ] }
    },
    { type: 'callout', id: 'callout-cp14-buchner', data: { style: 'tip', title: '\ud83d\udcac B\u00fcchner Funnel vs Hirsch Funnel', text: 'Use a B\u00dcCHNER funnel (large, flat-bottomed perforated plate) \u2014 not a Hirsch funnel (small, for tiny quantities).\nB\u00fcchner funnel + pump gives faster filtration with larger crystal batches, and the suction helps remove ethanol quickly, preventing crystals re-dissolving.\nAlways wet the filter paper with solvent before connecting the vacuum \u2014 seals the paper and prevents crystals slipping under it.' } },
    {
      type: 'heading',
      id: 'h-method-alt',
      data: { text: 'Alternative Method (Laboratory / Recrystallisation Approach)', level: 3 }
    },
    {
      type: 'paragraph',
      id: 'p-method-alt',
      data: {
        text: '<strong>Alternative (slow crystallisation):</strong> Dissolve CuSO₄·5H₂O (~3 g) in 30 cm³ water → add conc. NH₃ dropwise → may see pale blue Cu(OH)₂ precipitate briefly → add excess NH₃ until fully dissolved (deep blue) → heat to 50°C → cool slowly to room temperature → refrigerate at 4°C overnight → dark blue crystals form → filter and wash as in exam method above.<br/><br/>⚠️ This method is slower but shown in some textbooks. The exam mark scheme typically expects the ethanol precipitation method (pouring into ethanol) as per the Edexcel specification.'
      }
    },
    {
      type: 'heading',
      id: 'h-yield-calculation',
      data: { text: 'Yield and Percentage Yield Calculation', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-yield-formula',
      data: {
        text: '<strong>Molar masses:</strong><br/>' +
        'CuSO₄·5H₂O: Cu(63.5) + S(32) + O₄(64) + 5H₂O(90) = <strong>249.5 g mol⁻¹</strong><br/>' +
        '[Cu(NH₃)₄]SO₄·H₂O: Cu(63.5) + 4NH₃(68) + SO₄(96) + H₂O(18) = <strong>245.5 g mol⁻¹</strong><br/><br/>' +
        '<strong>Mole ratio:</strong> CuSO₄ → product = 1 : 1 (one copper atom in, one product molecule out)<br/><br/>' +
        '<strong>Formula:</strong><br/>' +
        'n(CuSO₄·5H₂O) = mass used ÷ 249.5<br/>' +
        'Theoretical mass of product = n × 245.5<br/>' +
        'Percentage yield = (actual mass ÷ theoretical mass) × 100%'
      }
    },
    {
      type: 'paragraph',
      id: 'p-yield-worked-example',
      data: {
        text: '<strong>Worked Example:</strong><br/>' +
        'Mass of CuSO₄·5H₂O used (by difference) = 1.50 g<br/>' +
        'Mass of product obtained = 1.22 g<br/><br/>' +
        'Step 1: n(CuSO₄·5H₂O) = 1.50 ÷ 249.5 = 6.012 × 10⁻³ mol<br/>' +
        'Step 2: n(product) = 6.012 × 10⁻³ mol (1:1 ratio)<br/>' +
        'Step 3: theoretical mass = 6.012 × 10⁻³ × 245.5 = 1.476 g<br/>' +
        'Step 4: % yield = (1.22 ÷ 1.476) × 100% = 82.7%<br/><br/>' +
        '<strong>Typical yield:</strong> 70–90% for ethanol precipitation method. Lower for slow crystallisation method (50–70%). Losses occur during pipetting, filtration, washing, and drying.'
      }
    },
    {
      type: 'heading',
      id: 'h-safety-hazards',
      data: { text: 'Safety Hazards and Precautions', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-safety-list',
      data: {
        text: '<strong>Hazards:</strong><br/>' +
        '• <strong>Copper compounds:</strong> Toxic if ingested or absorbed. Avoid skin contact. Cu²⁺ ions are environmental pollutants<br/>' +
        '• <strong>Ammonia solution (conc.):</strong> Corrosive; causes skin burns. Strong pungent odour irritates eyes and respiratory tract<br/>' +
        '• <strong>Heat:</strong> Hot water and heated beaker can cause burns<br/>' +
        '<br/><strong>Precautions:</strong><br/>' +
        '• Wear safety glasses throughout<br/>' +
        '• Wear gloves when handling copper sulfate and ammonia<br/>' +
        '• Use in fume hood or well-ventilated area<br/>' +
        '• Do not heat ammonia solution above 50°C (ammonia evaporates)<br/>' +
        '• Dispose of waste appropriately—copper waste to designated container, not sink'
      }
    },
    {
      type: 'heading',
      id: 'h-sources-of-error',
      data: { text: 'Sources of Error and Systematic Losses', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-systematic-errors',
      data: {
        text: '<strong>Loss of product during filtering:</strong><br/>' +
        '• Some crystals remain stuck to the filter paper or Büchner funnel<br/>' +
        '• Fine crystals may pass through the filter paper<br/>' +
        '<strong>Loss during washing:</strong><br/>' +
        '• Solubility of product in cold water (though low, small amounts dissolve)<br/>' +
        '• Ethanol wash removes some product if not careful<br/>' +
        '<strong>Incomplete drying:</strong><br/>' +
        '• Residual water retained in crystals increases measured mass<br/>' +
        '• Ammonia retained (from recrystallisation solution) inflates mass<br/>' +
        '<strong>Decomposition during heating:</strong><br/>' +
        '• Overheating causes decomposition of ammonia complex or loss of water of crystallisation<br/>' +
        '• Excessively high temperature (>60°C) can decompose the complex'
      }
    },
    {
      type: 'heading',
      id: 'h-improvements',
      data: { text: 'Improvements to the Procedure', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-improvements-list',
      data: {
        text: '<strong>To increase yield and accuracy:</strong><br/>' +
        '1. <strong>Minimise losses during filtration:</strong> Use Büchner funnel and vacuum filtration (faster, less time for crystallisation to reverse)<br/>' +
        '2. <strong>Reduce solubility losses:</strong> Use cold ethanol (increases product solubility less than water) for final wash<br/>' +
        '3. <strong>Improve crystallisation:</strong> Cool solution slowly at 4°C overnight to encourage large crystal formation<br/>' +
        '4. <strong>Better drying:</strong> Use desiccator for drying instead of air-drying; reduces moisture absorption<br/>' +
        '5. <strong>Quantitative transfer:</strong> Use funnel when transferring product to avoid spillage<br/>' +
        '6. <strong>Repeat crystallisation:</strong> Redissolve in minimum hot water and recrystallise to purify product and increase yield through multiple cycles<br/>' +
        '7. <strong>Control temperature:</strong> Use thermometer to monitor heating; do not exceed 50°C'
      }
    },
    {
      type: 'heading',
      id: 'h-observations-summary',
      data: { text: 'Key Observations and Qualitative Data', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-observations',
      data: {
        text: '<strong>Throughout the practical, observe and record:</strong><br/>' +
        '• <strong>Starting solution:</strong> Pale blue [Cu(H₂O)₆]²⁺<br/>' +
        '• <strong>On ammonia addition:</strong> Pale blue gelatinous Cu(OH)₂ precipitate forms initially<br/>' +
        '• <strong>With excess ammonia:</strong> Precipitate dissolves, solution becomes deep blue [Cu(NH₃)₄(H₂O)₂]²⁺<br/>' +
        '• <strong>On cooling:</strong> Deep blue crystals form (colour indicates strong NH₃ ligand field)<br/>' +
        '• <strong>Final product:</strong> Dark blue/purple-blue crystals of [Cu(NH₃)₄(H₂O)₂]SO₄·H₂O<br/>' +
        '<strong>Why these colours?</strong> Ammonia is a stronger field ligand than water, causing larger d-orbital splitting (Δ), which absorbs photons of higher energy (shorter wavelength), resulting in deeper blue colour.'
      }
    },
    {
      type: 'heading',
      id: 'h-ppq-cp14',
      data: { text: 'PPQ — January 2014: Copper Complex Ions', level: 2 }
    },
    {
      type: 'callout',
      id: 'callout-ppq14-1',
      data: {
        style: 'worked',
        title: 'PPQ Jan 2014 Part a: CuSO₄(aq) + Excess HCl → Colour Change and Formula',
        text: 'Q: Describe the colour change when excess concentrated HCl is added to aqueous CuSO₄. Give the formula of the complex ion formed.\n\nObservation:\n• Blue solution → yellow/green solution\n\nComplex ion formed:\n• Formula: [CuCl₄]²⁻   (tetrachlorocuprate(II) ion)\n• Name: tetrachlorocuprate(II) ion\n\nExplanation:\n• Cl⁻ is a stronger field ligand than H₂O at high concentration (also: Cl⁻ is a larger ligand \u2014 only 4 fit around Cu²⁺)\n• 4 Cl⁻ ligands replace 6 H₂O → coordination number changes from 6 to 4 (octahedral → tetrahedral)\n• [Cu(H₂O)₆]²⁺ + 4Cl⁻ ⇌ [CuCl₄]²⁻ + 6H₂O\n• Yellow colour of [CuCl₄]²⁻ + pale blue [Cu(H₂O)₆]²⁺ present in equilibrium → overall green/yellow-green'
      }
    },
    {
      type: 'callout',
      id: 'callout-ppq14-2',
      data: {
        style: 'worked',
        title: 'PPQ Jan 2014 Part b: Dilute NH₃ Added Drop by Drop to CuSO₄(aq) — 3 marks',
        text: 'Q: Describe what is observed when dilute ammonia is added drop by drop to aqueous copper(II) sulfate. Explain each observation.\n\nObservation 1 (limited NH₃):\n• Pale blue precipitate forms\n• Identity: Cu(OH)₂ — limited NH₃ acts as a base; NH₃ + H₂O ⇌ NH₄⁺ + OH⁻; OH⁻ precipitates Cu²⁺: Cu²⁺ + 2OH⁻ → Cu(OH)₂↓\n\nObservation 2 (more NH₃ added):\n• Pale blue precipitate dissolves\n• Excess NH₃ now acts as a ligand rather than a base; ligand exchange begins\n\nObservation 3 (excess NH₃):\n• Deep blue (dark blue) solution forms — significantly darker than the original pale blue\n• Complex ion: [Cu(NH₃)₄(H₂O)₂]²⁺ or simplified [Cu(NH₃)₄]²⁺\n• NH₃ causes larger Δ → deeper blue colour\n\n⚠️ Must describe as "DEEP blue" not just "blue"\n⚠️ Must give three separate observations for 3 marks: (1) blue precipitate, (2) dissolves, (3) deep blue solution'
      }
    },
    {
      type: 'checklist',
      id: 'checklist-practical',
      data: {
        items: [
          { text: 'Weigh CuSO₄·5H₂O by DIFFERENCE (weigh boat, add crystals, tip out, re-weigh boat)', checked: false },
          { text: 'Dissolve in MINIMUM water (~4 cm³) — not lots of water; more water reduces precipitate when adding ethanol', checked: false },
          { text: 'Warm in WATER BATH — NOT Bunsen burner (ethanol flammable; ammonia volatile)', checked: false },
          { text: 'Add conc. NH₃ IN FUME CUPBOARD — corrosive and volatile; wear gloves and eye protection', checked: false },
          { text: 'Pour into ETHANOL to precipitate crystals (anti-solvent method) — cool in ice bath', checked: false },
          { text: 'Filter using BÜCHNER funnel (NOT Hirsch funnel) with vacuum pump; wet filter paper with ethanol first', checked: false },
          { text: 'Wash with COLD ETHANOL × 2 — not water (water dissolves product); cold minimises losses', checked: false },
          { text: 'Dry: scrape onto dry filter paper; press with second filter paper; air dry briefly', checked: false },
          { text: 'Mr: CuSO₄·5H₂O = 249.5; [Cu(NH₃)₄]SO₄·H₂O = 245.5; ratio 1:1 in calculation', checked: false },
          { text: '% yield = (actual mass ÷ theoretical mass) × 100%; theoretical = n × 245.5', checked: false },
          { text: 'PPQ Jan 2014: + conc. HCl → yellow/green; [CuCl₄]²⁻ (tetrahedral); + dilute NH₃ → blue ppt → dissolves → DEEP blue [Cu(NH₃)₄]²⁺', checked: false }
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
        text: 'Understand: The ethanol precipitation method works because [Cu(NH\u2083)\u2084]SO\u2084\u00b7H\u2082O is virtually insoluble in ethanol; anti-solvent precipitation is faster and gives higher yield than slow water crystallisation.\n\nApply: Given 2.00 g CuSO\u2084\u00b75H\u2082O and 1.65 g product obtained, calculate % yield.\n\nAnalyze: A student washes crystals with water instead of ethanol. Predict the effect on (a) yield and (b) purity.\n\nEvaluate: Yield > 100% is observed. Suggest two possible reasons.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'summary-practical',
      data: {
        text: 'CP14: Make [Cu(NH₃)₄]SO₄·H₂O (Mr = 245.5) from CuSO₄·5H₂O (Mr = 249.5). Method: weigh CuSO₄·5H₂O by difference → dissolve in minimum water → warm in water bath (NOT Bunsen) → move to fume cupboard → add conc. NH₃ → deep blue solution → pour into ethanol → ice bath → vacuum filter using Büchner funnel → wash with cold ethanol × 2 → dry → weigh. % yield = (actual ÷ theoretical) × 100%. Sources of error: product lost in filtration/washing, incomplete drying (mass too high), ethanol dissolves some product. PPQ Jan 2014: + HCl → [CuCl₄]²⁻ (yellow, tetrahedral); + dilute NH₃ → blue precipitate → precipitate dissolves → deep blue [Cu(NH₃)₄]²⁺.'
      }
    },
    {
      id: 'svg-complex-ions',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 430" font-family="system-ui,sans-serif"><text x="350" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b" letter-spacing="1">TRANSITION METAL COMPLEX IONS</text><!-- COPPER TRANSFORMATIONS --><rect x="10" y="32" width="680" height="40" rx="8" fill="rgba(96,165,250,0.2)" stroke="#60a5fa" stroke-width="1.5"/><text x="350" y="52" text-anchor="middle" font-size="10" fill="#60a5fa" font-weight="700">COPPER(II) COLOUR TRANSFORMATIONS — Following Ligand Substitutions</text><text x="350" y="67" text-anchor="middle" font-size="8.5" fill="#1e3a8a">Colour changes in transition metal complexes arise from d-d electron transitions. The energy gap that absorbs light depends on ligand type (spectrochemical series)</text><!-- Cu aqua --><rect x="10" y="82" width="200" height="120" rx="10" fill="rgba(96,165,250,0.25)" stroke="#60a5fa" stroke-width="2"/><text x="110" y="102" text-anchor="middle" font-size="9.5" fill="#60a5fa" font-weight="700">[Cu(H₂O)₆]²⁺</text><text x="110" y="120" text-anchor="middle" font-size="9" fill="#1e3a8a">pale BLUE</text><text x="110" y="135" text-anchor="middle" font-size="8.5" fill="#1e3a8a">Octahedral (6-coord.)</text><text x="110" y="150" text-anchor="middle" font-size="8.5" fill="#1e3a8a">Ligand: H₂O</text><text x="110" y="165" text-anchor="middle" font-size="8.5" fill="#1e3a8a">Charge: 2+</text><text x="110" y="180" text-anchor="middle" font-size="8.5" fill="#1250a0">e.g. CuSO₄(aq)</text><!-- Arrow to NH3 --><text x="220" y="142" font-size="18" fill="#2d2d72">→</text><!-- Cu ammine --><rect x="250" y="82" width="200" height="120" rx="10" fill="rgba(52,211,153,0.25)" stroke="#34d399" stroke-width="2"/><text x="350" y="102" text-anchor="middle" font-size="9.5" fill="#34d399" font-weight="700">[Cu(NH₃)₄(H₂O)₂]²⁺</text><text x="350" y="120" text-anchor="middle" font-size="9" fill="#065f46">deep BLUE / violet</text><text x="350" y="135" text-anchor="middle" font-size="8.5" fill="#065f46">Octahedral (6-coord.)</text><text x="350" y="150" text-anchor="middle" font-size="8.5" fill="#065f46">+ excess conc. NH₃</text><text x="350" y="165" text-anchor="middle" font-size="8.5" fill="#065f46">H₂O displaced by NH₃</text><text x="350" y="180" text-anchor="middle" font-size="8.5" fill="#065f46">NH₃ stronger ligand than H₂O</text><!-- Arrow to Cl- --><text x="460" y="142" font-size="18" fill="#2d2d72">→</text><!-- Cu chloro --><rect x="490" y="82" width="200" height="120" rx="10" fill="rgba(251,146,60,0.25)" stroke="#fb923c" stroke-width="2"/><text x="590" y="102" text-anchor="middle" font-size="9.5" fill="#fb923c" font-weight="700">[CuCl₄]²⁻</text><text x="590" y="120" text-anchor="middle" font-size="9" fill="#532407">YELLOW / green</text><text x="590" y="135" text-anchor="middle" font-size="8.5" fill="#532407">Tetrahedral (4-coord.)</text><text x="590" y="150" text-anchor="middle" font-size="8.5" fill="#532407">+ conc. HCl (excess Cl⁻)</text><text x="590" y="165" text-anchor="middle" font-size="8.5" fill="#532407">Shape change: 6→4 coord.</text><text x="590" y="180" text-anchor="middle" font-size="8.5" fill="#78350f">Cl⁻ larger: steric effect</text><!-- IRON IONS --><rect x="10" y="216" width="330" height="130" rx="10" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="1.5"/><text x="175" y="234" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="700">IRON COMPLEX IONS</text><rect x="22" y="242" width="140" height="90" rx="8" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="1"/><text x="92" y="260" text-anchor="middle" font-size="9" fill="#ef4444" font-weight="700">Fe²⁺ / [Fe(H₂O)₆]²⁺</text><text x="92" y="276" text-anchor="middle" font-size="9" fill="#7f1d1d">PALE GREEN</text><text x="92" y="291" text-anchor="middle" font-size="8.5" fill="#7f1d1d">+ NaOH → green ppt</text><text x="92" y="306" text-anchor="middle" font-size="8.5" fill="#7f1d1d">Fe(OH)₂ (green)</text><text x="92" y="320" text-anchor="middle" font-size="8" fill="#78350f">oxidises in air → brown</text><rect x="178" y="242" width="148" height="90" rx="8" fill="rgba(251,146,60,0.2)" stroke="#fb923c" stroke-width="1"/><text x="252" y="260" text-anchor="middle" font-size="9" fill="#fb923c" font-weight="700">Fe³⁺ / [Fe(H₂O)₆]³⁺</text><text x="252" y="276" text-anchor="middle" font-size="9" fill="#532407">YELLOW-BROWN</text><text x="252" y="291" text-anchor="middle" font-size="8.5" fill="#532407">+ NaOH → rust-brown ppt</text><text x="252" y="306" text-anchor="middle" font-size="8.5" fill="#532407">Fe(OH)₃ (rust)</text><text x="252" y="320" text-anchor="middle" font-size="8" fill="#78350f">+ SCN⁻ → blood-red</text><!-- COBALT IONS --><rect x="360" y="216" width="330" height="130" rx="10" fill="rgba(232,121,249,0.12)" stroke="#e879f9" stroke-width="1.5"/><text x="525" y="234" text-anchor="middle" font-size="10" fill="#e879f9" font-weight="700">COBALT COMPLEX IONS</text><rect x="374" y="242" width="140" height="90" rx="8" fill="rgba(232,121,249,0.2)" stroke="#e879f9" stroke-width="1"/><text x="444" y="260" text-anchor="middle" font-size="9" fill="#e879f9" font-weight="700">Co²⁺ / [Co(H₂O)₆]²⁺</text><text x="444" y="276" text-anchor="middle" font-size="9" fill="#4a1040">PINK</text><text x="444" y="291" text-anchor="middle" font-size="8.5" fill="#4a1040">+ NaOH → blue ppt</text><text x="444" y="306" text-anchor="middle" font-size="8.5" fill="#4a1040">Co(OH)₂ (blue-green)</text><rect x="528" y="242" width="148" height="90" rx="8" fill="rgba(96,165,250,0.18)" stroke="#60a5fa" stroke-width="1"/><text x="602" y="260" text-anchor="middle" font-size="9" fill="#60a5fa" font-weight="700">[CoCl₄]²⁻</text><text x="602" y="276" text-anchor="middle" font-size="9" fill="#1e3a8a">BLUE</text><text x="602" y="291" text-anchor="middle" font-size="8.5" fill="#1e3a8a">+ conc. HCl</text><text x="602" y="306" text-anchor="middle" font-size="8.5" fill="#1e3a8a">Tetrahedral (4-coord.)</text><text x="602" y="320" text-anchor="middle" font-size="8" fill="#1250a0">Anhydrous CoCl₂ = blue</text><!-- Key principles --><rect x="10" y="356" width="680" height="66" rx="8" fill="rgba(99,102,241,0.12)" stroke="#818cf8" stroke-width="1"/><text x="350" y="374" text-anchor="middle" font-size="10" fill="#2d2d72" font-weight="700">KEY PRINCIPLES</text><text x="30" y="391" font-size="8.5" fill="#2d2d72">• Colour from d-d transitions: ligand strength (spectrochemical series) determines the energy gap and therefore colour absorbed</text><text x="30" y="406" font-size="8.5" fill="#2d2d72">• Strong ligands CN⁻ &gt; NH₃ &gt; H₂O &gt; Cl⁻ (strong field to weak field). Strong ligands shift absorption to higher energy (shorter wavelength)</text><text x="30" y="418" font-size="8.5" fill="#2d2d72">• NaOH ppt test: colour of precipitate identifies metal ion. NH₃(dilute/conc.) can re-dissolve Ag⁺, Cu²⁺, Co²⁺, Zn²⁺ precipitates</text></svg>',
        caption: 'Transition Metal Complex Ions — Cu²⁺ transformations: pale blue [Cu(H₂O)₆]²⁺ → deep blue [Cu(NH₃)₄(H₂O)₂]²⁺ (excess NH₃) → yellow [CuCl₄]²⁻ (conc. HCl). Iron: Fe²⁺ pale green, Fe³⁺ yellow-brown. Cobalt: Co²⁺ pink, [CoCl₄]²⁻ blue.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-cp14-method',
        prompt: 'Outline the CP14 exam method for preparing [Cu(NH₃)₄]SO₄·H₂O. List 5 key steps in order. Why use a water bath instead of a Bunsen burner?'
      },
      {
        id: 'cue-2',
        blockId: 'p-reactions-involved',
        prompt: 'Write the ligand exchange equation for the formation of [Cu(NH₃)₄]²⁺ from [Cu(H₂O)₆]²⁺. Why does NH₃ displace H₂O?'
      },
      {
        id: 'cue-3',
        blockId: 'callout-cp14-buchner',
        prompt: 'Why is the product poured into ethanol in CP14? What is the role of the ice bath? Why use a Büchner funnel (not Hirsch)?'
      },
      {
        id: 'cue-4',
        blockId: 'p-yield-formula',
        prompt: 'Calculate % yield for CP14: 1.50 g CuSO₄·5H₂O used, 1.22 g product obtained. Give Mr values used. What is the mole ratio?'
      },
      {
        id: 'cue-5',
        blockId: 'callout-ppq14-2',
        prompt: 'Describe, with explanations, what is observed when dilute ammonia is added drop by drop to CuSO₄(aq). Give THREE distinct observations. (Jan 2014 PPQ)'
      },
      {
        id: 'cue-6',
        blockId: 'callout-ppq14-1',
        prompt: 'What colour change and complex ion form when excess concentrated HCl is added to CuSO₄(aq)? Write the equation and explain the change in geometry.'
      }
    ],
    summaryText: 'CP14 exam method: weigh by difference → dissolve in minimum water (~4 cm³) → warm in water bath → fume cupboard → add conc. NH₃ → deep blue → pour into ethanol → ice bath → Büchner funnel vacuum filter → wash cold ethanol × 2 → dry → weigh. Mr: CuSO₄·5H₂O = 249.5; [Cu(NH₃)₄]SO₄·H₂O = 245.5. Ratio 1:1. % yield = actual ÷ theoretical × 100%. PPQ Jan 2014: + HCl → yellow-green [CuCl₄]²⁻ (4-coordinate, tetrahedral); + dilute NH₃ → blue precipitate (Cu(OH)₂) → dissolves → DEEP blue [Cu(NH₃)₄]²⁺.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Core Practical 14: Complex Ion Synthesis',
      detail: 'This practical demonstrates coordination chemistry, colour changes from ligand field effects (pale blue water → deep blue ammonia), equilibrium between soluble and insoluble forms, and quantitative techniques (yield calculation).',
      year: '2023',
      source: 'A-Level Chemistry Core Practicals',
      tags: ['practical-14', 'complex-synthesis', 'copper', 'ammonia', 'yield']
    }
  ]
};
