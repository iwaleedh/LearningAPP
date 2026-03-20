export const note_chemistry_5_16_8 = {
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Understand Core Practical 12: construct electrochemical cells using metal/metal-ion half-cells and inert electrode half-cells; measure electrode potentials using a high-resistance voltmeter; apply E°cell = E°(right) − E°(left) to calculate and verify cell EMF; interpret results and sources of error. Master PPQ-style calculations involving electrode potential and concentration.' } },
    { type: 'heading', id: 'h-cp12', data: { text: 'Core Practical 12: Measuring Standard Electrode Potential', level: 2 } },
    { type: 'paragraph', id: 'p-cp12-intro', data: { text: 'CP12 involves constructing galvanic cells (e.g. Zn/Cu, Zn/Fe, Fe/Cu, Zn/Ag, Cu/Ag) and measuring their cell potentials using a high-resistance voltmeter. Aim: determine electrode potentials experimentally and verify E°cell = E°(right, reduction) − E°(left, oxidation). Multiple combinations of metal/solution pairs are tested.' } },
    { type: 'heading', id: 'h-cp12-apparatus', data: { text: 'Apparatus & Reagents', level: 2 } },
    { type: 'list', id: 'list-cp12-apparatus', data: { style: 'bullet', items: [
      'Metal strips: zinc, copper, iron, silver (one strip of each)',
      'Salt solutions (50 cm³ each): zinc sulfate (ZnSO₄), copper sulfate (CuSO₄), iron(II) sulfate (FeSO₄), silver nitrate (AgNO₃)',
      'Potassium nitrate (KNO₃) saturated solution — for salt bridge (NOT KCl — see key point below)',
      'Filter paper strips — soaked in KNO₃ solution to make salt bridge',
      'Beakers (2 or more), measuring cylinder',
      'High-resistance voltmeter (≥10 MΩ) — essential to prevent current flow',
      'Wires and crocodile clips — to connect metal electrodes to voltmeter',
      'Sandpaper — to clean metal strips before use',
      'Eye protection'
    ] } },
    { type: 'callout', id: 'callout-salt-bridge-choice', data: { style: 'warning', title: 'Why KNO₃ for Salt Bridge? (NOT KCl or KOH)', text: 'KNO₃ is used because K⁺ and NO₃⁻ ions do NOT react with the metal ions in the half-cells:\n• KCl CANNOT be used if silver (Ag⁺) is present — Cl⁻ would precipitate AgCl (insoluble white solid), blocking ion transport in the half-cell and ruining the experiment\n• KOH CANNOT be used — OH⁻ ions react with metal cations (Zn²⁺, Fe²⁺, V³⁺ etc.) to form insoluble metal hydroxide precipitates, disrupting the half-cell\n• KNO₃ is inert to all metal ions used — K⁺ and NO₃⁻ carry charge without reacting' } },
    { type: 'heading', id: 'h-cp12-method', data: { text: 'Method for CP12', level: 2 } },
    { type: 'list', id: 'list-cp12', data: { style: 'numbered', items: [
      'Use sandpaper to clean each metal strip — removes oxide layers or tarnish from the surface, ensuring good electrical contact',
      'Pour 50 cm³ of zinc sulfate (ZnSO₄) solution into one beaker; place the zinc metal strip into the solution',
      'Pour 50 cm³ of copper sulfate (CuSO₄) solution into a second beaker; place the copper metal strip into it',
      'Make a salt bridge: soak a strip of filter paper in saturated KNO₃ solution and drape it between the two beakers so both ends are submerged — this completes the ionic circuit',
      'Connect the zinc and copper metal strips to the high-resistance voltmeter using wires and crocodile clips',
      'Record the EMF (voltage) displayed on the voltmeter — expect +1.10 V for a Zn/Cu cell',
      'If the voltmeter shows a NEGATIVE value: electrodes are connected the wrong way round — simply SWAP which electrode goes to the +/− terminal',
      'Repeat steps 1–7 with different combinations: Zn/Fe, Fe/Cu, Zn/Ag, Cu/Ag',
      'Compare measured values with calculated E°cell = E°(right) − E°(left) to verify results'
    ] } },
    { type: 'callout', id: 'callout-key-1', data: { style: 'key', title: 'Why High-Resistance Voltmeter?', text: 'High resistance (≥10 MΩ) minimises current flow. If current flows, ion concentrations near electrodes change, altering cell potential. High resistance ensures measured E°cell is accurate.' } },
    { type: 'callout', id: 'callout-standard-conditions', data: { style: 'warning', title: 'Standard Conditions Must Be Met for E° Values', text: 'For results to match standard electrode potential values:\n• Solution concentration: 1.00 mol dm⁻³ for ALL metal ion solutions\n• Temperature: 298 K (25°C) throughout\n• Gases (if present): partial pressure 100 kPa\n\nIf conditions differ from standard, measured E will deviate from E° — the Nernst equation applies (see PPQ below).' } },
    {
      id: 'svg-cp12-cell',
      type: 'svg',
      data: {
        svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 270' style='font-family:Arial,sans-serif;background:#eff6ff;border-radius:8px'>
  <text x='250' y='18' font-size='13' font-weight='bold' fill='#1e3a5f' text-anchor='middle'>CP12: Electrochemical Cell — Copper/Silver Example</text>
  <!-- LEFT BEAKER: Cu/CuSO4 -->
  <rect x='30' y='90' width='130' height='120' rx='4' fill='#1e3a8a' stroke='#1d4ed8' stroke-width='1.5'/>
  <rect x='80' y='60' width='14' height='110' rx='3' fill='#78350f' stroke='#92400e' stroke-width='1.5'/>
  <text x='87' y='55' font-size='10' font-weight='bold' fill='#92400e' text-anchor='middle'>Cu</text>
  <text x='87' y='44' font-size='8' fill='#374151' text-anchor='middle'>electrode</text>
  <text x='95' y='135' font-size='9' font-weight='bold' fill='#1d4ed8' text-anchor='middle'>CuSO₄(aq)</text>
  <text x='95' y='148' font-size='8' fill='#374151' text-anchor='middle'>1 mol dm⁻³, 298 K</text>
  <text x='95' y='195' font-size='8' fill='#dc2626' font-weight='bold' text-anchor='middle'>OXIDATION (left)</text>
  <!-- RIGHT BEAKER: Ag/AgNO3 -->
  <rect x='340' y='90' width='130' height='120' rx='4' fill='#0f172a' stroke='#6b7280' stroke-width='1.5'/>
  <rect x='400' y='60' width='14' height='110' rx='3' fill='#1e293b' stroke='#374151' stroke-width='2'/>
  <text x='407' y='55' font-size='10' font-weight='bold' fill='#374151' text-anchor='middle'>Ag</text>
  <text x='407' y='44' font-size='8' fill='#374151' text-anchor='middle'>electrode</text>
  <text x='405' y='135' font-size='9' font-weight='bold' fill='#374151' text-anchor='middle'>AgNO₃(aq)</text>
  <text x='405' y='148' font-size='8' fill='#374151' text-anchor='middle'>1 mol dm⁻³, 298 K</text>
  <text x='405' y='195' font-size='8' fill='#16a34a' font-weight='bold' text-anchor='middle'>REDUCTION (right)</text>
  <!-- Salt bridge -->
  <rect x='175' y='95' width='150' height='22' rx='10' fill='#44370a' stroke='#ca8a04' stroke-width='1.5'/>
  <text x='250' y='107' font-size='9' font-weight='bold' fill='#78350f' text-anchor='middle'>SALT BRIDGE</text>
  <text x='250' y='124' font-size='8' fill='#374151' text-anchor='middle'>filter paper in saturated KNO₃</text>
  <!-- Voltmeter -->
  <rect x='190' y='28' width='120' height='36' rx='8' fill='#1e293b' stroke='#374151' stroke-width='2'/>
  <text x='250' y='44' font-size='11' font-weight='bold' fill='#374151' text-anchor='middle'>VOLTMETER</text>
  <text x='250' y='57' font-size='9' fill='#374151' text-anchor='middle'>high resistance ≥10 MΩ</text>
  <!-- Wires -->
  <line x1='87' y1='60' x2='87' y2='32' stroke='#374151' stroke-width='1.5'/>
  <line x1='87' y1='32' x2='190' y2='46' stroke='#374151' stroke-width='1.5'/>
  <line x1='407' y1='60' x2='407' y2='32' stroke='#374151' stroke-width='1.5'/>
  <line x1='407' y1='32' x2='310' y2='46' stroke='#374151' stroke-width='1.5'/>
  <!-- Electron flow arrow -->
  <line x1='150' y1='70' x2='350' y2='70' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='5,3'/>
  <polygon points='340,66 350,70 340,74' fill='#dc2626'/>
  <text x='250' y='67' font-size='9' fill='#dc2626' text-anchor='middle'>e⁻ flow Cu → Ag</text>
  <!-- E cell label -->
  <text x='250' y='240' font-size='10' font-weight='bold' fill='#1e3a5f' text-anchor='middle'>E°cell = E°(right) − E°(left) = E°(Ag⁺/Ag) − E°(Cu²⁺/Cu)</text>
  <text x='250' y='255' font-size='10' fill='#374151' text-anchor='middle'>= +0.80 − (+0.34) = +0.46 V</text>
</svg>`,
        caption: 'CP12: two half-cells connected via salt bridge (filter paper in saturated KNO₃) and high-resistance voltmeter. Electrons flow from oxidation half-cell (left) to reduction half-cell (right). E°cell = E°(right) − E°(left).'
      }
    },
    { type: 'heading', id: 'h-cp12-errors', data: { text: 'Sources of Error in CP12', level: 2 } },
    { type: 'list', id: 'list-cp12-errors', data: { style: 'bullet', items: [ 'Poor salt bridge contact → increased internal resistance, reduced measured emf', 'Non-standard conditions (T ≠ 298 K, concentration ≠ 1 mol dm⁻³)', 'Electrode surface not cleaned (oxide layer on metal) → use sandpaper to polish before use', 'Voltmeter resistance too low (< 10 MΩ) → current flow changes ion concentrations near electrodes', 'Cell not at equilibrium (voltmeter reading still drifting) → wait 1–2 min after connecting before recording', 'Loose connections between wires and crocodile clips → check for secure contact' ] } },
    {
      id: 'h-cp12-combinations',
      type: 'heading',
      data: { text: 'Cell Combinations & Expected Voltages', level: 2 }
    },
    {
      id: 'table-cp12-combos',
      type: 'comparisonTable',
      data: {
        headers: ['Cell Combination', 'Reaction (oxidation | reduction)', 'Expected E°cell (V)'],
        rows: [
          ['Zn / Cu', 'Zn oxidised | Cu²⁺ reduced', '+1.10'],
          ['Zn / Fe', 'Zn oxidised | Fe²⁺ reduced', '+0.32 (approx)'],
          ['Fe / Cu', 'Fe oxidised | Cu²⁺ reduced', '+0.78'],
          ['Zn / Ag', 'Zn oxidised | Ag⁺ reduced', '+1.56'],
          ['Cu / Ag', 'Cu oxidised | Ag⁺ reduced', '+0.46']
        ],
        caption: 'Approximate expected voltages at standard conditions (1 mol dm⁻³, 298 K). Experimental values may differ slightly due to non-ideal conditions. Negative reading → swap electrode connections to voltmeter.'
      }
    },
    {
      id: 'callout-negative-reading',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'If Voltmeter Shows a Negative Value',
        text: 'A negative EMF reading means the electrodes are connected the WRONG WAY to the voltmeter.\nSimply SWAP which electrode is connected to the + terminal and which to the − terminal.\nThis should give a positive reading.\n\nPhysically: electrons are actually flowing in the opposite direction to what you assumed → the LEFT half-cell is actually the reduction (cathode) and the RIGHT is oxidation (anode) in your setup.\n\nAlways quote a positive E°cell value to indicate a thermodynamically feasible cell reaction.'
      }
    },
    { type: 'heading', id: 'h-cp12-improvements', data: { text: 'Improvements to Reduce Error', level: 2 } },
    { type: 'list', id: 'list-cp12-improvements', data: { style: 'bullet', items: [ 'Use high-resistance voltmeter (≥10 MΩ)', 'Ensure good salt bridge contact (saturated KNO₃ gel)', 'Control temperature with water bath at 298 K', 'Prepare fresh 1 mol dm⁻³ solutions', 'Clean electrodes to remove oxides', 'Allow cell to stabilise 2-3 minutes before recording', 'Take multiple readings and average' ] } },
    // ── CORE PRACTICAL 13a ───────────────────────────────────────────────
    { type: 'heading', id: 'h-cp13a', data: { text: 'Core Practical 13a: Iron(II) Determination by KMnO₄ Titration', level: 2 } },
    { type: 'paragraph', id: 'p-cp13a-aim', data: { text: '<strong>Purpose:</strong> To calculate the mass of iron (as Fe²⁺) in iron tablets by redox titration of a standard iron(II) solution against acidified potassium manganate(VII), KMnO₄.' } },
    { type: 'list', id: 'list-cp13a-apparatus', data: { style: 'bullet', items: [
      'Iron tablets (5, or as specified on the paper)',
      'Dilute H₂SO₄ (1.5 mol dm⁻³) — to dissolve tablets and to acidify during titration',
      'KMnO₄ standard solution (given concentration, e.g. 0.005 mol dm⁻³)',
      'Mortar and pestle — to crush tablets',
      'Weighing boat and balance (to nearest 0.001 g)',
      '250 cm³ (or 100 cm³) volumetric flask + stopper',
      'Filter funnel and filter paper',
      '25 cm³ (or 10 cm³) pipette + pipette filler',
      '50 cm³ burette + burette stand and clamp',
      '250 cm³ conical flask',
      'White tile (to see colour change clearly)',
      'Eye protection, chemical-resistant gloves'
    ] } },
    { type: 'callout', id: 'callout-cp13a-safety', data: { style: 'warning', title: '⚠️ Safety — Acid and Oxidant', text: 'KMnO₄: strong oxidant and irritant; permanently stains skin purple/brown — wear gloves throughout.\nH₂SO₄: corrosive; avoid skin contact.\n\nAcid choice matters:\n• Use H₂SO₄ ONLY — not HCl (Cl⁻ reacts with MnO₄⁻, gives false endpoint) and not HNO₃ (strong oxidant oxidises Fe²⁺ → Fe³⁺ before titration)' } },
    { type: 'heading', id: 'h-cp13a-std', data: { text: 'Making the Standard Iron(II) Solution — Weighing by Difference', level: 3 } },
    { type: 'list', id: 'list-cp13a-std', data: { style: 'numbered', items: [
      'Crush the iron tablets in a mortar and pestle to a fine powder',
      'Place a weighing boat on the balance; record the mass M₁',
      'Add crushed tablets to the boat; record total mass M₂',
      'Tip the powder into a 250 cm³ beaker; re-weigh the empty boat; record M₃',
      'Mass of powder used = M₂ − M₃   (weighing by difference — more precise than taring each time)',
      'Add 50 cm³ of 1.5 mol dm⁻³ H₂SO₄ to the beaker; stir to dissolve (inert binding agents may not dissolve)',
      'Fold filter paper into funnel; filter the solution into the volumetric flask',
      'Rinse beaker and funnel with distilled water at least 3 times; add ALL washings to the flask',
      'Make up to the graduation mark with distilled water; insert stopper; invert 10× to mix'
    ] } },
    { type: 'callout', id: 'callout-cp13a-acid', data: { style: 'key', title: '💡 Why H₂SO₄ ONLY?', text: 'HCl — Cl⁻ ions react with MnO₄⁻ (a powerful oxidant) → Cl₂ gas produced → apparent endpoint reached early → Fe²⁺ under-estimated\nHNO₃ — strong oxidising acid → oxidises Fe²⁺ to Fe³⁺ before titration → all iron would appear to be Fe³⁺ → nothing to titrate\nH₂SO₄ — unreactive under these conditions → preserves Fe²⁺ and ensures clean endpoint' } },
    { type: 'heading', id: 'h-cp13a-self', data: { text: 'KMnO₄ as a Self-Indicator', level: 3 } },
    { type: 'callout', id: 'callout-cp13a-indicator', data: { style: 'key', title: '💡 KMnO₄ Is Self-Indicating — No Separate Indicator Needed', text: 'Mechanism:\n• MnO₄⁻ = deep purple/violet; Mn²⁺ = colourless\n• Each drop of KMnO₄ added is instantly decolourised (reduced by Fe²⁺ present)\n• At the endpoint: ONE final drop of KMnO₄ is NOT decolourised → PERMANENT pale pink appears (≥ 30 s)\n\nEndpoint = first PERMANENT pale pink (not just a brief pink that fades)\n\n⚠️ If pale pink fades on standing → secondary reactions are occurring; do NOT add more KMnO₄\n⚠️ DO NOT describe endpoint as "purple" or "bright pink" — must say "pale/faint/permanent pink"' } },
    { type: 'heading', id: 'h-cp13a-tit', data: { text: 'Titration Procedure (CP13a)', level: 3 } },
    { type: 'list', id: 'list-cp13a-tit', data: { style: 'numbered', items: [
      'Rinse burette 3× with small volumes of KMnO₄; fill to above 0.00 cm³; open tap to remove air bubble from tip',
      'Record initial burette reading (to nearest 0.05 cm³)',
      'Rinse pipette with Fe²⁺ solution 3×; pipette exactly 25.0 cm³ (or stated volume) into conical flask',
      'Add a few cm³ of 1.5 mol dm⁻³ H₂SO₄ to the flask to acidify',
      'Place flask on white tile; begin adding KMnO₄ while swirling continuously',
      'Add quickly at first (colour disappears with each swirl); slow to drop-by-drop as pink persists longer',
      'Near endpoint: add one drop at a time; swirl for 30 s before adding next',
      'Endpoint = first PERMANENT pale pink (lasting ≥ 30 s)',
      'Record final burette reading; calculate titre',
      'Discard rough titre; repeat until at least 2 concordant titres (within 0.20 cm³)',
      'Mean titre = average of concordant titres, to 2 decimal places'
    ] } },
    { type: 'callout', id: 'callout-cp13a-eqn', data: { style: 'key', title: '💡 Half-Equations and Overall Equation', text: 'Oxidation (×5):  Fe²⁺ → Fe³⁺ + e⁻\nReduction:       MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O\n\nOverall:  MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O\n\nMole ratio: MnO₄⁻ : Fe²⁺ = 1 : 5\n\nCritical: ALWAYS check the mole ratio from the equation before calculating.' } },
    { type: 'svg', id: 'svg-cp13a-flow', data: { caption: 'CP13a: Standard Solution Preparation → Titration Flowchart', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 80" width="680" height="80"><defs><marker id="a13" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#6366f1"/></marker></defs><style>rect{fill:#e0e7ff;stroke:#6366f1;stroke-width:1.5;rx:5}text{font-family:sans-serif;font-size:10px;fill:#1e293b;text-anchor:middle}</style><rect x="2" y="10" width="74" height="40" rx="5"/><text x="39" y="27">Crush</text><text x="39" y="41">tablets</text><line x1="76" y1="30" x2="91" y2="30" stroke="#6366f1" stroke-width="1.5" marker-end="url(#a13)"/><rect x="93" y="10" width="84" height="40" rx="5"/><text x="135" y="27">Weigh by</text><text x="135" y="41">difference</text><line x1="177" y1="30" x2="192" y2="30" stroke="#6366f1" stroke-width="1.5" marker-end="url(#a13)"/><rect x="194" y="10" width="84" height="40" rx="5"/><text x="236" y="27">Dissolve in</text><text x="236" y="41">H\u2082SO\u2084; filter</text><line x1="278" y1="30" x2="293" y2="30" stroke="#6366f1" stroke-width="1.5" marker-end="url(#a13)"/><rect x="295" y="10" width="94" height="40" rx="5"/><text x="342" y="27">Volumetric flask</text><text x="342" y="41">+ washings</text><line x1="389" y1="30" x2="404" y2="30" stroke="#6366f1" stroke-width="1.5" marker-end="url(#a13)"/><rect x="406" y="10" width="84" height="40" rx="5"/><text x="448" y="27">Make up</text><text x="448" y="41">to mark</text><line x1="490" y1="30" x2="505" y2="30" stroke="#6366f1" stroke-width="1.5" marker-end="url(#a13)"/><rect x="507" y="10" width="84" height="40" rx="5"/><text x="549" y="27">Pipette 25 cm\u00b3</text><text x="549" y="41">+ titrate</text><line x1="591" y1="30" x2="606" y2="30" stroke="#6366f1" stroke-width="1.5" marker-end="url(#a13)"/><rect x="608" y="10" width="70" height="40" rx="5" style="fill:#d1fae5;stroke:#059669"/><text x="643" y="27" style="fill:#065f46">Permanent</text><text x="643" y="41" style="fill:#065f46">pale pink</text></svg>' } },
    { type: 'heading', id: 'h-ppq-cp13a', data: { text: 'PPQ — June 2019: Iron Tablet Analysis', level: 2 } },
    { type: 'callout', id: 'callout-ppq13a-1', data: { style: 'worked', title: 'PPQ June 2019 Part i: Self-Indicator and Colour Change', text: 'Q: State why no indicator is needed. State the colour change at the endpoint.\n\nA (self-indicator):\n• KMnO₄ acts as its own indicator — it is self-indicating\n• Each drop added during titration is instantly reduced from purple MnO₄⁻ to colourless Mn²⁺\n• At the endpoint: no Fe²⁺ remains to reduce it → the purple colour persists\n\nA (colour change):\n• Colourless → permanent pale pink\n• (The conical flask solution starts colourless because MnO₄⁻ is immediately reduced; the endpoint is the first drop that is NOT decolourised)' } },
    { type: 'callout', id: 'callout-ppq13a-2', data: { style: 'worked', title: 'PPQ June 2019 Part ii: Concordant Results and Mean Titre', text: 'Titration results table (burette readings in cm³):\n\n  Titration:     Rough    1       2       3       4\n  Final (cm³):   20.55   20.20   20.30   20.35   20.20\n  Initial (cm³):  0.00    0.00    0.00    0.00    0.00\n  Titre (cm³):   20.55   20.20   20.30   20.35   20.20\n\nStep 1 — Calculate all titres:\n  Rough = 20.55 cm³ (always discard rough)\n  Titration 1 = 20.20 cm³\n  Titration 2 = 20.30 cm³\n  Titration 3 = 20.35 cm³\n  Titration 4 = 20.20 cm³\n\nStep 2 — Identify concordant (within 0.20 cm³):\n  Titrations 1 and 4 = 20.20 and 20.20 → difference = 0.00 cm³ ✓ concordant\n  (Also titrations 1, 2, 4 = 20.20, 20.30, 20.20 → range 0.10 cm³ ✓)\n\nStep 3 — Mean titre (to 2 d.p.):\n  Mean = (20.20 + 20.30 + 20.20) / 3 = 20.23 cm³\n  OR if using only two: (20.20 + 20.20) / 2 = 20.20 cm³\n\n⚠️ Mean titre MUST be given to 2 decimal places (precision of burette)' } },
    { type: 'callout', id: 'callout-ppq13a-3', data: { style: 'worked', title: 'PPQ June 2019 Part iii: 5-Mark Calculation (Mass of FeSO₄·7H₂O per Tablet)', text: 'Given:\n• 2 tablets dissolved in 100 cm³ volumetric flask\n• Pipette volume = 10 cm³; c(KMnO₄) = 0.005 mol dm⁻³; mean titre = 10.25 cm³\n• Mr(FeSO₄·7H₂O) = 277.9\n\nStep 1: n(KMnO₄) = c × V = 0.005 × (10.25 ÷ 1000) = 5.125 × 10⁻⁵ mol\n\nStep 2: mole ratio MnO₄⁻ : Fe²⁺ = 1 : 5\n  n(Fe²⁺) in 10 cm³ aliquot = 5 × 5.125 × 10⁻⁵ = 2.5625 × 10⁻⁴ mol\n\nStep 3: scale up to 100 cm³ flask (factor = 100 ÷ 10 = 10)\n  n(Fe²⁺) total = 2.5625 × 10⁻⁴ × 10 = 2.5625 × 10⁻³ mol\n  (This is from 2 tablets)\n\nStep 4: n(FeSO₄·7H₂O) per tablet = 2.5625 × 10⁻³ ÷ 2 = 1.28125 × 10⁻³ mol\n\nStep 5: mass per tablet = 1.28125 × 10⁻³ × 277.9 = 0.356 g (to 3 s.f.)\n\nAnswer: mass of FeSO₄·7H₂O per tablet = 0.356 g\n\nMarks: n(KMnO₄) [1], mole ratio applied [1], scale-up used [1], per-tablet divide [1], final mass [1]' } },
    { type: 'callout', id: 'callout-ppq13a-4', data: { style: 'worked', title: 'PPQ June 2019 Part iv: Percentage Uncertainty Calculation', text: 'Q: Calculate % uncertainty for burette and pipette. State which has the larger uncertainty.\n\nBurette (50 cm³):\n• Uncertainty = ±0.05 cm³ per reading; two readings per titre → ±0.10 cm³\n• Volume used = mean titre = 10.25 cm³\n• % uncertainty = (0.10 ÷ 10.25) × 100 = 0.976% ≈ 0.98%\n\nPipette (10 cm³):\n• Uncertainty = ±0.06 cm³ (one reading)\n• Volume = 10 cm³\n• % uncertainty = (0.06 ÷ 10) × 100 = 0.60%\n\nConclusion: Burette has the LARGER % uncertainty (0.98% > 0.60%)\n\n⚠️ Always use TWO burette readings in the uncertainty (initial + final); use specified uncertainty values from the paper.' } },
    // ── CORE PRACTICAL 13b ───────────────────────────────────────────────
    { type: 'heading', id: 'h-cp13b', data: { text: 'Core Practical 13b: Iodine/Thiosulfate Titration', level: 2 } },
    { type: 'paragraph', id: 'p-cp13b-aim', data: { text: '<strong>Purpose:</strong> To calculate the concentration of an oxidising agent (e.g., IO₃⁻ / KIO₃) using a two-step indirect titration: (1) iodate oxidises iodide → iodine; (2) iodine is titrated against standardised sodium thiosulfate (Na₂S₂O₃).' } },
    { type: 'callout', id: 'callout-cp13b-eqns', data: { style: 'key', title: '💡 Chain of Reactions: Iodate → Iodine → Thiosulfate', text: 'Reaction 1 (generates I₂):\n  IO₃⁻ + 5I⁻ + 6H⁺ → 3I₂ + 3H₂O\n  Mole ratio: IO₃⁻ : I₂ = 1 : 3\n\nReaction 2 (thiosulfate titration):\n  I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻   (tetrathionate)\n  Mole ratio: I₂ : S₂O₃²⁻ = 1 : 2\n\nOverall chain:\n  IO₃⁻ : I₂ : S₂O₃²⁻ = 1 : 3 : 6\n\nTo find n(IO₃⁻): divide n(S₂O₃²⁻) by 6' } },
    { type: 'heading', id: 'h-cp13b-method', data: { text: 'Method (CP13b)', level: 3 } },
    { type: 'list', id: 'list-cp13b-method', data: { style: 'numbered', items: [
      'Rinse burette with Na₂S₂O₃ solution (3 × 3 cm³); fill burette to 0.00 cm³',
      'Rinse pipette with KIO₃ solution (not water — avoids dilution); pipette 25.0 cm³ KIO₃ into a conical flask',
      'Add excess KI solution to the flask (provides I⁻ for Reaction 1)',
      'Add dilute H₂SO₄ to acidify the mixture (provides H⁺ for Reaction 1)',
      'Brown/orange colour develops immediately as I₂ is produced',
      'Titrate with Na₂S₂O₃: add slowly while swirling; solution lightens from brown → pale yellow',
      'When pale yellow — STOP; add 5 drops of starch solution → blue-black colour develops',
      'Continue adding Na₂S₂O₃ drop-by-drop until colourless (endpoint)',
      'Discard rough titre; repeat for concordant results (within 0.20 cm³); calculate mean titre (2 d.p.)'
    ] } },
    { type: 'callout', id: 'callout-cp13b-starch', data: { style: 'tip', title: '💬 Why Add Starch at Pale Yellow — Not at the Start?', text: 'At high [I₂], the starch–iodine complex is too stable (strong deep blue); the endpoint is diffuse — hard to see exactly when it becomes colourless.\n\nAt pale yellow, most I₂ has been consumed. Adding starch now gives a sharp blue-black → colourless transition — one drop difference.\n\nAdding starch too early: the complex is so strong it may not break down cleanly, leading to early endpoint or an unclear colourless transition.' } },
    { type: 'svg', id: 'svg-cp13b-colour', data: { caption: 'CP13b: Colour Sequence During Thiosulfate Titration', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 80" width="680" height="80"><defs><marker id="a13b" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#475569"/></marker></defs><style>rect{rx:5;stroke:#475569;stroke-width:1.5}text{font-family:sans-serif;font-size:10px;fill:#1e293b;text-anchor:middle}</style><rect x="2" y="10" width="84" height="40" style="fill:#92400e"/><text x="44" y="26" style="fill:#fef3c7">Brown/orange</text><text x="44" y="40" style="fill:#fef3c7">I\u2082 solution</text><line x1="86" y1="30" x2="104" y2="30" stroke="#475569" stroke-width="1.5" marker-end="url(#a13b)"/><text x="95" y="22" style="font-size:9px;fill:#475569">+ S\u2082O\u2083\u00b2\u207b</text><rect x="106" y="10" width="84" height="40" style="fill:#fef9c3"/><text x="148" y="26">Pale yellow</text><text x="148" y="40">(nearly done)</text><line x1="190" y1="30" x2="208" y2="30" stroke="#475569" stroke-width="1.5" marker-end="url(#a13b)"/><text x="199" y="22" style="font-size:9px;fill:#475569">+ starch</text><rect x="210" y="10" width="84" height="40" style="fill:#1e1b4b"/><text x="252" y="26" style="fill:#e0e7ff">Blue-black</text><text x="252" y="40" style="fill:#e0e7ff">starch–I\u2082</text><line x1="294" y1="30" x2="312" y2="30" stroke="#475569" stroke-width="1.5" marker-end="url(#a13b)"/><text x="303" y="22" style="font-size:9px;fill:#475569">+ S\u2082O\u2083\u00b2\u207b</text><rect x="314" y="10" width="84" height="40" style="fill:#f1f5f9"/><text x="356" y="26">Colourless</text><text x="356" y="40">(ENDPOINT)</text><rect x="408" y="8" width="260" height="44" rx="6" style="fill:#d1fae5;stroke:#059669"/><text x="538" y="23" style="fill:#065f46;font-size:9px">One drop of Na\u2082S\u2082O\u2083 turns</text><text x="538" y="37" style="fill:#065f46;font-size:9px">blue-black → colourless</text></svg>' } },
    { type: 'callout', id: 'callout-cp13b-calc', data: { style: 'worked', title: 'CP13b Worked Calculation', text: 'Data: 25.0 cm³ KIO₃ titrated; mean titre = 13.60 cm³ of 0.100 mol dm⁻³ Na₂S₂O₃\n\nStep 1: n(S₂O₃²⁻) = 0.100 × (13.60 ÷ 1000) = 1.360 × 10⁻³ mol\n\nStep 2: I₂ : S₂O₃²⁻ = 1 : 2  →  n(I₂) = 1.360 × 10⁻³ ÷ 2 = 6.80 × 10⁻⁴ mol\n\nStep 3: IO₃⁻ : I₂ = 1 : 3  →  n(IO₃⁻) = 6.80 × 10⁻⁴ ÷ 3 = 2.267 × 10⁻⁴ mol\n\nStep 4: c(IO₃⁻) = 2.267 × 10⁻⁴ ÷ 0.0250 = 9.07 × 10⁻³ mol dm⁻³\n\nAlternatively using the 1 : 6 ratio directly:\n  n(IO₃⁻) = n(S₂O₃²⁻) ÷ 6 = 1.360 × 10⁻³ ÷ 6 = 2.267 × 10⁻⁴ mol ✓' } },
    { type: 'comparisonTable', id: 'table-cp13-errors', data: { caption: 'CP13 Sources of Error and Improvements', headers: ['Source of Error', 'Explanation', 'Improvement'], rows: [
      ['Parallax on burette', 'Reading from wrong angle gives incorrect titre', 'Read at eye level; read from bottom of meniscus'],
      ['Overshoot at endpoint (CP13a)', 'Added too much KMnO₄ past pale pink', 'Add drop-by-drop near endpoint; use white tile to spot colour change'],
      ['Wrong acid used (CP13a)', 'HCl or HNO₃ interfere with titration', 'Use only dilute H₂SO₄'],
      ['Not all washings added (CP13a)', 'Some Fe²⁺ left in beaker/funnel — under-estimate', 'Rinse at least 3× with distilled water; add ALL washings to flask'],
      ['Starch added too early (CP13b)', 'Complex too strong; diffuse endpoint', 'Add starch only at pale yellow — not at the start'],
      ['Burette contaminated with water', 'Dilutes титrant → over-estimate titre', 'Rinse burette with KMnO₄ / Na₂S₂O₃ before filling'],
      ['Pipette not rinsed with solution', 'Diluted by residual water → less solute delivered', 'Rinse pipette with the solution (not distilled water)'],
      ['Non-concordant titres', 'Poor technique or endpoint estimation varies', 'Discard rough; include only titres within 0.20 cm³; calculate mean']
    ] } },
    { type: 'checklist', id: 'checklist-1', data: { items: [
      { text: 'Clean metal electrodes with sandpaper before use — removes oxide layers', checked: false },
      { text: 'Salt bridge = filter paper soaked in SATURATED KNO₃ (not KCl or KOH)', checked: false },
      { text: 'KNO₃ used because K⁺ and NO₃⁻ do not react with any metal ions in the half-cells', checked: false },
      { text: 'High-resistance voltmeter (≥10 MΩ) essential — prevents current flow changing concentrations', checked: false },
      { text: 'Standard conditions: 1 mol dm⁻³ solutions, 298 K, 100 kPa for gases', checked: false },
      { text: 'Negative voltmeter reading — just swap the electrode connections (wrong way round)', checked: false },
      { text: 'E°cell = E°(right, reduction) − E°(left, oxidation)', checked: false },
      { text: 'If two ions of same metal present (e.g. V²⁺/V³⁺) — use INERT electrode (platinum)', checked: false },
      { text: 'PPQ Oct 2019: if concentration ≠ standard, E ≠ E° — must use Nernst-style equation to find concentration', checked: false },
      { text: 'CP13a: Mole ratio MnO₄⁻ : Fe²⁺ = 1 : 5 — ALWAYS derive from the equation; overall: MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O', checked: false },
      { text: 'CP13a: KMnO₄ is self-indicating — NO separate indicator; endpoint = colourless → PERMANENT pale pink (≥ 30 s)', checked: false },
      { text: 'CP13a: Use H₂SO₄ ONLY — not HCl (Cl⁻ reacts with MnO₄⁻) and not HNO₃ (oxidises Fe²⁺ before titration)', checked: false },
      { text: 'CP13a: Prepare standard solution by weighing by difference; dissolve in H₂SO₄; filter into volumetric flask; add ALL washings', checked: false },
      { text: 'CP13a: Mean titre to 2 d.p.; concordant = within 0.20 cm³; discard rough titre', checked: false },
      { text: 'CP13b: Rinse pipette with KIO₃ (not water); rinse burette with Na₂S₂O₃ before use', checked: false },
      { text: 'CP13b: Add starch when PALE YELLOW — not at start; endpoint = blue-black → colourless (one drop)', checked: false },
      { text: 'CP13b: Mole ratios — IO₃⁻ : I₂ = 1 : 3; I₂ : S₂O₃²⁻ = 1 : 2; so IO₃⁻ : S₂O₃²⁻ = 1 : 6', checked: false }
    ] } },
    {
      id: 'h-ppq-cp12',
      type: 'heading',
      data: { text: 'PPQ — October 2019: Vanadium Ion Concentration', level: 2 }
    },
    {
      id: 'callout-ppq-cp12-setup',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'PPQ Oct 2019 Part i: Complete the Cell Diagram (4 labels)',
        text: 'Setup: a zinc half-cell (Zn metal in ZnSO₄) is connected to a vanadium half-cell (V³⁺/V²⁺ in solution Y).\nSolution Y was made by mixing 50 cm³ aqueous V solution + 50 cm³ solution X.\n\nFour labels required:\n1. Electrode in vanadium half-cell:\n   → PLATINUM (inert electrode) — because V³⁺/V²⁺ are both IONS (no metal); cannot use vanadium metal; must use an inert conductor\n2. Device connected to both electrodes:\n   → HIGH-RESISTANCE VOLTMETER\n3. Electrode in zinc half-cell:\n   → ZINC electrode\n4. Solution in zinc half-cell:\n   → ZINC SULFATE (ZnSO₄) or zinc(II) ion solution\n\nSalt bridge:\n   → Filter paper soaked in SATURATED POTASSIUM NITRATE (KNO₃) solution\n\nWhy not potassium hydroxide for the salt bridge?\n   → OH⁻ ions would react with the metal cations present (Zn²⁺ and V³⁺) to form insoluble precipitates:\n      Zn²⁺ + 2OH⁻ → Zn(OH)₂ (white precipitate)\n      V³⁺ + 3OH⁻ → V(OH)₃ (insoluble)\n   → These precipitates would block ion flow, disrupting charge transport between half-cells'
      }
    },
    {
      id: 'callout-ppq-cp12-eq',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'PPQ Oct 2019 Part ii: Overall Cell Equation',
        text: 'Given: zinc is oxidised. Half-equations:\n   Zn²⁺ + 2e⁻ → Zn  (reduction, but Zn is oxidised so REVERSE this)\n   V³⁺ + e⁻ → V²⁺  (reduction, involves only 1 electron)\n\nStep 1 — Reverse zinc half-equation (zinc is oxidised):\n   Zn → Zn²⁺ + 2e⁻\n\nStep 2 — Balance electrons: V half-equation only involves 1e⁻, zinc produces 2e⁻:\n   Multiply V³⁺ + e⁻ → V²⁺ by 2:\n   2V³⁺ + 2e⁻ → 2V²⁺\n\nStep 3 — Add both half-equations (electrons cancel):\n   Zn + 2V³⁺ → Zn²⁺ + 2V²⁺\n\nNote: Never include electrons in the overall cell equation — they always cancel completely.'
      }
    },
    {
      id: 'callout-ppq-cp12-ev',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'PPQ Oct 2019 Part iii: Calculate E(V\u00b3⁺/V²⁺)',
        text: 'Given: E°cell = +0.44 V; E°(Zn²⁺/Zn) = −0.76 V; zinc is oxidised (left); vanadium is reduced (right).\n\nE°cell = E°(right) − E°(left)\n+0.44 = E(V³⁺/V²⁺) − (−0.76)\n+0.44 = E(V³⁺/V²⁺) + 0.76\n\nE(V³⁺/V²⁺) = 0.44 − 0.76 = −0.32 V\n\nNote: E(V) = −0.32 V (not standard, since concentration ≠ 1 mol dm⁻³)\nFor reference: E°(V³⁺/V²⁺) = −0.26 V at standard conditions'
      }
    },
    {
      id: 'callout-ppq-cp12-conc',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'PPQ Oct 2019 Part iv: Calculate Concentration of V³⁺ in Solution',
        text: 'Given: E°(V³⁺/V²⁺) = −0.26 V; E(V) = −0.32 V (measured); [V²⁺] = 1.00 mol dm⁻³ (standard); Nernst-style equation provided:\n   E(V) = E°(V) + 0.059 × log[V³⁺]\n(since [V²⁺] = 1 mol dm⁻³, log part simplifies to log[V³⁺])\n\nSubstitute known values:\n   −0.32 = −0.26 + 0.059 × log[V³⁺]\n\nRearrange — isolate the log term:\n   −0.32 + 0.26 = 0.059 × log[V³⁺]\n   −0.06 = 0.059 × log[V³⁺]\n   log[V³⁺] = −0.06 / 0.059 = −1.0169\n\nFind concentration:\n   [V³⁺] = 10^(−1.0169) = 0.0962 mol dm⁻³\n\nAnswer: [V³⁺] ≈ 0.0962 mol dm⁻³ (or 0.096 mol dm⁻³ to 2 s.f.)\n\nKey mark: the negative sign on E(V) must be included; losing the sign loses the mark.' 
      }
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Core Practicals 12-13 involve measuring electrode potentials against a reference electrode and performing redox titrations with standardised KMnO₄.\n\nApply: Describe how to set up a cell to measure E° of Zn²⁺/Zn using a standard hydrogen electrode.\n\nAnalyze: Why must solutions be at 1.0 mol dm⁻³ and temperature at 25°C for standard measurements?\n\nEvaluate: The SHE is impractical for routine lab work. Suggest an alternative reference electrode and discuss its advantages.'
      },
      terms: []
    },
    { type: 'summary', id: 'summary-1', data: { text: 'CP12: Clean metals with sandpaper → 50 cm³ solutions → salt bridge (saturated KNO₃ NOT KCl/KOH) → high-resistance voltmeter (≥10 MΩ) → record EMF. E°cell = E°(right, reduction) − E°(left, oxidation). Negative reading: swap connections. Standard conditions: 1 mol dm⁻³, 298 K. Two ions same element: Pt electrode. | CP13a: Crush tablets → weigh by difference → dissolve in H₂SO₄ → filter into volumetric flask + washings → make up to mark → pipette 25 cm³ → titrate with KMnO₄ (self-indicator; endpoint = permanent pale pink). Ratio MnO₄⁻:Fe²⁺ = 1:5. Error: wrong acid → use H₂SO₄ only. | CP13b: IO₃⁻ + 5I⁻ + 6H⁺ → 3I₂ + 3H₂O; then I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻. Add starch at pale yellow → blue-black → colourless endpoint. Ratio IO₃⁻:I₂:S₂O₃²⁻ = 1:3:6.' } },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'list-cp12', prompt: 'Why must metal strips be cleaned with sandpaper before use in CP12? What does this step address?' },
    { id: 'cue-2', blockId: 'callout-key-1', prompt: 'Why must the voltmeter have a resistance of ≥10 MΩ in CP12? What happens if it does not?' },
    { id: 'cue-3', blockId: 'callout-salt-bridge-choice', prompt: 'Why is KNO₃ used for the salt bridge in CP12, and not KCl or KOH? Give a specific reason for each.' },
    { id: 'cue-4', blockId: 'callout-ppq-cp12-ev', prompt: 'In the Oct 2019 PPQ, E°cell = +0.44 V and E°(Zn) = −0.76 V (zinc is oxidised). Calculate E(V³⁺/V²⁺). Show the equation used.' },
    { id: 'cue-5', blockId: 'callout-ppq-cp12-conc', prompt: 'Using E°(V) = −0.26 V and E(V) = −0.32 V with the equation E = E° + 0.059 log[V³⁺], calculate [V³⁺]. Show all steps.' },
    { id: 'cue-6', blockId: 'callout-ppq-cp12-setup', prompt: 'In the Oct 2019 PPQ cell with V³⁺/V²⁺ in one half-cell: what type of electrode is used and why? What is the salt bridge made of and why not KOH?' },
    { id: 'cue-7', blockId: 'callout-cp13a-indicator', prompt: 'Explain why KMnO₄ needs no separate indicator. Describe (a) what you observe during titration, (b) the exact colour change at the endpoint, and (c) what to do if the colour fades.' },
    { id: 'cue-8', blockId: 'callout-cp13a-acid', prompt: 'Why must H₂SO₄ be used (not HCl, not HNO₃) as the acid in the CP13a KMnO₄ titration? Give the specific reason for excluding each of the other two acids.' },
    { id: 'cue-9', blockId: 'callout-cp13b-eqns', prompt: 'For the iodine/thiosulfate titration: write both reactions and state all three mole ratios (IO₃⁻:I₂, I₂:S₂O₃²⁻, IO₃⁻:S₂O₃²⁻). Why is starch added at pale yellow and not at the start?' }
  ], summaryText: 'CP12: clean metals with sandpaper → 50 cm³ each solution → zinc/copper (or other metal pairs) in beakers → salt bridge = filter paper in saturated KNO₃ (NOT KCl — precipitates AgCl; NOT KOH — precipitates metal hydroxides) → high-resistance voltmeter (≥10 MΩ, prevents current distorting concentrations) → record EMF. Negative reading → swap electrode connections. Standard conditions: 1 mol dm⁻³, 298 K. E°cell = E°(right, reduction) − E°(left, oxidation). If two ions of same element: use inert Pt electrode. PPQ Oct 2019 vanadium: E(V³⁺/V²⁺) = E°cell + E°(Zn) = 0.44 − 0.76 = −0.32 V; log[V³⁺] = (−0.32 + 0.26)/0.059 = −1.017; [V³⁺] = 0.0962 mol dm⁻³. | CP13a: KMnO₄ self-indicating (endpoint = permanent pale pink); mole ratio 1:5; use H₂SO₄ only; standard solution by weighing by difference; scale up from aliquot volume to flask volume. | CP13b: IO₃⁻:I₂:S₂O₃²⁻ = 1:3:6; add starch at pale yellow (NOT start); endpoint = blue-black → colourless.', ready: false },
  evidence: [ { id: 'ev-1', title: 'Core Practicals 12 and 13', detail: 'CP12 electrode potential measurement, CP13 redox titration, sources of error, improvements.', year: '2024', source: 'chemguide.co.uk', tags: ['core practicals', 'CP12', 'CP13', 'electrode potential', 'redox titration'] } ],
};
