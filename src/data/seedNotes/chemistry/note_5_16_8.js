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
  <rect x='30' y='90' width='130' height='120' rx='4' fill='#dbeafe' stroke='#1d4ed8' stroke-width='1.5'/>
  <rect x='80' y='60' width='14' height='110' rx='3' fill='#f59e0b' stroke='#92400e' stroke-width='1.5'/>
  <text x='87' y='55' font-size='10' font-weight='bold' fill='#92400e' text-anchor='middle'>Cu</text>
  <text x='87' y='44' font-size='8' fill='#374151' text-anchor='middle'>electrode</text>
  <text x='95' y='135' font-size='9' font-weight='bold' fill='#1d4ed8' text-anchor='middle'>CuSO₄(aq)</text>
  <text x='95' y='148' font-size='8' fill='#374151' text-anchor='middle'>1 mol dm⁻³, 298 K</text>
  <text x='95' y='195' font-size='8' fill='#dc2626' font-weight='bold' text-anchor='middle'>OXIDATION (left)</text>
  <!-- RIGHT BEAKER: Ag/AgNO3 -->
  <rect x='340' y='90' width='130' height='120' rx='4' fill='#f3f4f6' stroke='#6b7280' stroke-width='1.5'/>
  <rect x='400' y='60' width='14' height='110' rx='3' fill='#e5e7eb' stroke='#374151' stroke-width='2'/>
  <text x='407' y='55' font-size='10' font-weight='bold' fill='#374151' text-anchor='middle'>Ag</text>
  <text x='407' y='44' font-size='8' fill='#374151' text-anchor='middle'>electrode</text>
  <text x='405' y='135' font-size='9' font-weight='bold' fill='#374151' text-anchor='middle'>AgNO₃(aq)</text>
  <text x='405' y='148' font-size='8' fill='#374151' text-anchor='middle'>1 mol dm⁻³, 298 K</text>
  <text x='405' y='195' font-size='8' fill='#16a34a' font-weight='bold' text-anchor='middle'>REDUCTION (right)</text>
  <!-- Salt bridge -->
  <rect x='175' y='95' width='150' height='22' rx='10' fill='#fef9c3' stroke='#ca8a04' stroke-width='1.5'/>
  <text x='250' y='107' font-size='9' font-weight='bold' fill='#78350f' text-anchor='middle'>SALT BRIDGE</text>
  <text x='250' y='124' font-size='8' fill='#374151' text-anchor='middle'>filter paper in saturated KNO₃</text>
  <!-- Voltmeter -->
  <rect x='190' y='28' width='120' height='36' rx='8' fill='#fff' stroke='#374151' stroke-width='2'/>
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
    { type: 'heading', id: 'h-cp13', data: { text: 'Core Practical 13: Redox Titration with KMnO₄', level: 2 } },
    { type: 'paragraph', id: 'p-cp13-intro', data: { text: 'CP13 determines Fe²⁺ concentration using acidified KMnO₄ as titrant. Half-equation: 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O (ratio 5:1).' } },
    { type: 'heading', id: 'h-cp13-method', data: { text: 'Method for CP13', level: 2 } },
    { type: 'list', id: 'list-cp13', data: { style: 'numbered', items: [ 'Prepare 0.0200 mol dm⁻³ KMnO₄ in dilute H₂SO₄', 'Pipette 25.0 cm³ FeSO₄ solution into conical flask', 'Add dilute H₂SO₄ to acidify', 'Fill burette with KMnO₄', 'Record initial burette reading', 'Add KMnO₄ drop-wise until first permanent pale pink colour (endpoint)', 'Record final burette reading', 'Repeat 2-3 times until concordant (within ±0.1 cm³)' ] } },
    { type: 'callout', id: 'callout-worked-1', data: { style: 'worked', title: 'CP13 Calculation', text: 'Data: 25.0 cm³ FeSO₄, 20.0 cm³ of 0.0200 mol dm⁻³ KMnO₄. n(MnO₄⁻) = 0.0200 × 0.0200 = 0.0004 mol. n(Fe²⁺) = 5 × 0.0004 = 0.0020 mol. c(Fe²⁺) = 0.0020 / 0.0250 = 0.080 mol dm⁻³.' } },
    { type: 'heading', id: 'h-cp13-errors', data: { text: 'Sources of Error in CP13', level: 2 } },
    { type: 'list', id: 'list-cp13-errors', data: { style: 'bullet', items: [ 'Parallax error when reading burette (view at eye level)', 'Overshoot at endpoint (adding too much KMnO₄)', 'Slow colour change due to inadequate stirring', 'Insufficient acidification → slower permanganate reduction', 'Pipette tip not empty → less than 25.0 cm³ delivered', 'Burette contaminated with water → dilutes permanganate' ] } },
    { type: 'heading', id: 'h-cp13-improvements', data: { text: 'Improvements to Reduce Error in CP13', level: 2 } },
    { type: 'list', id: 'list-cp13-improvements', data: { style: 'bullet', items: [ 'Read burette at eye level', 'Use white tile background to see colour change clearly', 'Add KMnO₄ drop-wise near endpoint', 'Swirl conical flask continuously', 'Acidify FeSO₄ adequately', 'Rinse burette with KMnO₄ solution (3 × 5 cm³) before use', 'Hold pipette tip against flask inside for 2 seconds after delivery', 'Use concordant results and average them' ] } },
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
      { text: 'CP13: CP13: 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O; endpoint = first permanent pale pink', checked: false }
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
    { type: 'summary', id: 'summary-1', data: { text: 'CP12: Measure Zn/Cu cell emf (~+1.10 V) using high-resistance voltmeter (≥10 MΩ) via salt bridge. Errors: poor salt bridge, non-standard conditions, impure electrodes, low voltmeter resistance, non-equilibrium. CP13: Titrate 25.0 cm³ FeSO₄ with acidified KMnO₄, colour endpoint. Half-equation: 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O. Errors: parallax, overshoot, slow mixing, insufficient acid. Improve both by: proper technique, fresh solutions, multiple readings, averaging concordant results.' } },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'list-cp12', prompt: 'Why must metal strips be cleaned with sandpaper before use in CP12? What does this step address?' },
    { id: 'cue-2', blockId: 'callout-key-1', prompt: 'Why must the voltmeter have a resistance of ≥10 MΩ in CP12? What happens if it does not?' },
    { id: 'cue-3', blockId: 'callout-salt-bridge-choice', prompt: 'Why is KNO₃ used for the salt bridge in CP12, and not KCl or KOH? Give a specific reason for each.' },
    { id: 'cue-4', blockId: 'callout-ppq-cp12-ev', prompt: 'In the Oct 2019 PPQ, E°cell = +0.44 V and E°(Zn) = −0.76 V (zinc is oxidised). Calculate E(V³⁺/V²⁺). Show the equation used.' },
    { id: 'cue-5', blockId: 'callout-ppq-cp12-conc', prompt: 'Using E°(V) = −0.26 V and E(V) = −0.32 V with the equation E = E° + 0.059 log[V³⁺], calculate [V³⁺]. Show all steps.' },
    { id: 'cue-6', blockId: 'callout-ppq-cp12-setup', prompt: 'In the Oct 2019 PPQ cell with V³⁺/V²⁺ in one half-cell: what type of electrode is used and why? What is the salt bridge made of and why not KOH?' }
  ], summaryText: 'CP12: clean metals with sandpaper → 50 cm³ each solution → zinc/copper (or other metal pairs) in beakers → salt bridge = filter paper in saturated KNO₃ (NOT KCl — precipitates AgCl; NOT KOH — precipitates metal hydroxides) → high-resistance voltmeter (≥10 MΩ, prevents current distorting concentrations) → record EMF. Negative reading → swap electrode connections. Standard conditions: 1 mol dm⁻³, 298 K. E°cell = E°(right, reduction) − E°(left, oxidation). If two ions of same element: use inert Pt electrode. PPQ Oct 2019 vanadium: E(V³⁺/V²⁺) = E°cell + E°(Zn) = 0.44 − 0.76 = −0.32 V; log[V³⁺] = (−0.32 + 0.26)/0.059 = −1.017; [V³⁺] = 0.0962 mol dm⁻³.', ready: false },
  evidence: [ { id: 'ev-1', title: 'Core Practicals 12 and 13', detail: 'CP12 electrode potential measurement, CP13 redox titration, sources of error, improvements.', year: '2024', source: 'chemguide.co.uk', tags: ['core practicals', 'CP12', 'CP13', 'electrode potential', 'redox titration'] } ],
};
