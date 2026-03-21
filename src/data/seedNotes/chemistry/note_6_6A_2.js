/**
 * Seed note: Chemistry · Unit 6 · Topic 6A · Subtopic 2
 * "Qualitative tests for ions and gases"
 */

export const note_chemistry_6_6A_2 = {
    blocks: [
        {
            id: 'objective-block',
            type: 'objective',
            data: {
                text: 'Identify transition metal (and other) ions in solution using characteristic reactions with NaOH, NH₃, Na₂CO₃ and SCN⁻, and identify common gases using standard tests.'
            }
        },
        { type: 'heading', id: 'h-hexaaqua-tests', data: { text: 'Qualitative Tests on Hexaaqua Ions', level: 2 } },
        {
            type: 'paragraph',
            id: 'p-hexaaqua-intro',
            data: {
                text: 'In aqueous solution, transition metal cations exist as hexaaqua complexes — [M(H₂O)₆]ⁿ⁺. Adding a base (NaOH or NH₃) deprotonates the bound water ligands, forming a metal hydroxide precipitate. The colour of the precipitate, and what happens with excess reagent, identifies the ion.'
            }
        },
        { type: 'heading', id: 'h-naoh-reactions', data: { text: 'Reactions with NaOH (aq)', level: 2 } },
        {
            type: 'paragraph',
            id: 'p-naoh-mechanism',
            data: {
                text: 'OH⁻ ions act as a Brønsted-Lowry base — they remove H⁺ from the bound water ligands. This is deprotonation, NOT ligand substitution. 2+ ions need 2 mol OH⁻; 3+ ions need 3 mol OH⁻ to form the neutral (insoluble) complex. The neutral complex precipitates out of solution.'
            }
        },
        { type: 'list', id: 'list-naoh-mechanism', data: { style: 'bullet', items: [
            '2+ route: [M(H₂O)₆]²⁺ + 2OH⁻ → [M(H₂O)₄(OH)₂]↓ + 2H₂O (neutral → precipitate)',
            '3+ route: [M(H₂O)₆]³⁺ + 3OH⁻ → [M(H₂O)₃(OH)₃]↓ + 3H₂O (neutral → precipitate)',
            'Amphoteric hydroxides (Cr³⁺, Al³⁺, Zn²⁺): dissolve further in excess NaOH → anionic complex (tetrahydroxo-)',
            'Cu(OH)₂ does NOT dissolve in excess NaOH — not amphoteric'
        ] } },
        { type: 'comparisonTable', id: 'table-naoh-tests', data: {
            headers: ['Starting ion', 'Colour of soln', 'Precipitate', 'Ppt colour', 'Excess NaOH'],
            rows: [
                ['[Fe(H₂O)₆]²⁺', 'Pale green', '[Fe(H₂O)₄(OH)₂]↓', 'Green/dirty green', 'No change (turns orange-brown in air → Fe³⁺)'],
                ['[Fe(H₂O)₆]³⁺', 'Yellow-brown', '[Fe(H₂O)₃(OH)₃]↓', 'Orange-brown/rust', 'No change'],
                ['[Cu(H₂O)₆]²⁺', 'Pale blue', '[Cu(H₂O)₄(OH)₂]↓', 'Light blue', 'No change'],
                ['[Co(H₂O)₆]²⁺', 'Pink', '[Co(H₂O)₄(OH)₂]↓', 'Blue', 'No change'],
                ['[Mn(H₂O)₆]²⁺', 'Pale pink', '[Mn(H₂O)₄(OH)₂]↓', 'Pale brown', 'No change'],
                ['[Ni(H₂O)₆]²⁺', 'Green', '[Ni(H₂O)₄(OH)₂]↓', 'Green', 'No change'],
                ['[Cr(H₂O)₆]³⁺', 'Green', '[Cr(H₂O)₃(OH)₃]↓', 'Green/grey-green', 'Dissolves → [Cr(OH)₄]⁻ (green/dark green)'],
                ['[Zn(H₂O)₆]²⁺', 'Colourless', '[Zn(H₂O)₄(OH)₂]↓', 'White', 'Dissolves → [Zn(OH)₄]²⁻ (colourless)'],
                ['[Al(H₂O)₆]³⁺', 'Colourless', '[Al(H₂O)₃(OH)₃]↓', 'White (gelatinous)', 'Dissolves → [Al(OH)₄]⁻ (colourless)']
            ],
            caption: 'NaOH reactions: precipitate colours and behaviour with excess'
        } },
        { type: 'svg', id: 'svg-deprotonation-mechanism', data: { caption: 'Deprotonation of Hexaaqua ions by OH⁻', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 160" width="100%" height="auto"><defs><marker id="arr1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" /></marker></defs><style>text{font-family:sans-serif;font-size:14px;fill:#1e293b;text-anchor:middle;} .bond{stroke:#1e293b;stroke-width:2;} .lbl{font-size:12px;fill:#64748b;} .title{font-size:14px;font-weight:bold;fill:#4338ca;} .charge{font-weight:bold;fill:#ef4444;}</style><g transform="translate(100, 70)"><text x="0" y="0" font-size="18px">M</text><text x="35" y="0">OH₂</text><path class="bond" d="M 15 -5 L 22 -5" /><text x="-35" y="0">H₂O</text><path class="bond" d="M -15 -5 L -22 -5" /><text x="0" y="35">OH₂</text><path class="bond" d="M 0 5 L 0 15" /><text x="0" y="-35">H₂O</text><path class="bond" d="M 0 -15 L 0 -22" /><text x="25" y="-35" class="charge">2+</text><text x="0" y="70" class="lbl">[M(H₂O)₆]²⁺ (Soluble)</text></g><path d="M 180 65 L 240 65" stroke="#64748b" stroke-width="2" marker-end="url(#arr1)" /><text x="210" y="55" font-size="12px" fill="#ef4444">+ 2OH⁻</text><g transform="translate(320, 70)"><text x="0" y="0" font-size="18px">M</text><text x="35" y="0">OH</text><path class="bond" d="M 15 -5 L 22 -5" /><text x="-35" y="0">HO</text><path class="bond" d="M -15 -5 L -22 -5" /><text x="0" y="35">OH₂</text><path class="bond" d="M 0 5 L 0 15" /><text x="0" y="-35">H₂O</text><path class="bond" d="M 0 -15 L 0 -22" /><text x="25" y="-35" font-weight="bold" fill="#10b981">0</text><text x="0" y="70" class="lbl">[M(H₂O)₄(OH)₂]↓ (Precipitate)</text></g><path d="M 390 65 L 430 65" stroke="#64748b" stroke-width="2" marker-end="url(#arr1)" /><text x="410" y="55" font-size="12px" fill="#ef4444">+ 2H₂O</text><text x="260" y="20" class="title">OH⁻ removes H⁺ from H₂O ligands (Base behaviour)</text><g transform="translate(500, 70)"><text x="0" y="-10" font-size="18px" fill="#3b82f6">H₂O</text><text x="0" y="15" font-size="18px" fill="#3b82f6">H₂O</text></g></svg>' } },
        {
            type: 'callout',
            id: 'callout-fe-oxidation',
            data: {
                style: 'warning',
                title: 'Fe²⁺ Undergoes Aerial Oxidation',
                text: 'The green Fe²⁺ precipitate ([Fe(H₂O)₄(OH)₂]) turns orange-brown over time in air as Fe²⁺ is oxidised to Fe³⁺ (→ [Fe(H₂O)₃(OH)₃]). This is a useful confirmatory observation: initial green → orange-brown. Mn²⁺ precipitate also slowly oxidises (pale brown → darker brown). Always note the initial colour first.'
            }
        },
        { type: 'heading', id: 'h-nh3-reactions', data: { text: 'Reactions with NH₃ (aq)', level: 2 } },
        {
            type: 'paragraph',
            id: 'p-nh3-dual',
            data: {
                text: 'Ammonia plays a dual role. In small amounts, NH₃ acts as a Brønsted-Lowry base (like NaOH) — deprotonating the water ligands to form the same precipitate. In excess, NH₃ can act as a ligand and replace the water molecules entirely, dissolving some precipitates. Which ions dissolve depends on whether the ammine complex is thermodynamically stable.'
            }
        },
        { type: 'comparisonTable', id: 'table-nh3-tests', data: {
            headers: ['Starting ion', 'Precipitate (few drops NH₃)', 'Ppt colour', 'Excess NH₃', 'Final complex colour'],
            rows: [
                ['[Fe(H₂O)₆]²⁺', 'Green precipitate', 'Green', 'No change', '—'],
                ['[Fe(H₂O)₆]³⁺', 'Orange-brown precipitate', 'Orange-brown', 'No change', '—'],
                ['[Cu(H₂O)₆]²⁺', 'Light blue precipitate', 'Light blue', 'Dissolves', 'Deep blue [Cu(NH₃)₄(H₂O)₂]²⁺'],
                ['[Co(H₂O)₆]²⁺', 'Blue precipitate', 'Blue', 'Dissolves', 'Yellow/straw [Co(NH₃)₆]²⁺'],
                ['[Ni(H₂O)₆]²⁺', 'Green precipitate', 'Green', 'Dissolves', 'Deep blue [Ni(NH₃)₆]²⁺'],
                ['[Cr(H₂O)₆]³⁺', 'Green precipitate', 'Green', 'Dissolves', 'Purple/violet [Cr(NH₃)₆]³⁺'],
                ['[Mn(H₂O)₆]²⁺', 'Pale brown precipitate', 'Pale brown', 'No change', '—'],
                ['[Zn(H₂O)₆]²⁺', 'White precipitate', 'White', 'Dissolves', 'Colourless [Zn(NH₃)₄]²⁺'],
                ['[Al(H₂O)₆]³⁺', 'White precipitate', 'White', 'No change', '— (Al forms no stable ammine complex)']
            ],
            caption: 'NH₃ reactions: dissolving behaviour and final complex colours'
        } },
        {
            type: 'callout',
            id: 'callout-nh3-no-dissolve',
            data: {
                style: 'key',
                title: 'Which precipitates dissolve in excess NH₃?',
                text: 'Dissolve: Co, Cu, Cr, Ni, Zn — these form stable ammine complexes.\nDo NOT dissolve: Fe²⁺, Fe³⁺, Mn²⁺, Al³⁺ — no stable ammine complex is formed.\nReason: depends on the position of the ligand exchange equilibrium. For Fe and Mn, the equilibrium lies heavily to the left (aqua side) even in excess NH₃.'
            }
        },
        { type: 'heading', id: 'h-carbonate-reactions', data: { text: 'Reactions with Na₂CO₃ (aq)', level: 2 } },
        {
            type: 'paragraph',
            id: 'p-carbonate-intro',
            data: {
                text: 'The reaction with sodium carbonate depends on whether the hexaaqua ion is sufficiently acidic to protonate CO₃²⁻ fully. 3+ ions are acidic enough to convert CO₃²⁻ to H₂CO₃ (which decomposes to CO₂ + H₂O), whilst the metal hydroxide precipitates. 2+ ions are not acidic enough — the carbonate ion instead precipitates as the metal carbonate salt.'
            }
        },
        { type: 'comparisonTable', id: 'table-carbonate-tests', data: {
            headers: ['Ion charge', 'Example ions', 'Equation', 'Observations'],
            rows: [
                ['3+', 'Fe³⁺, Cr³⁺, Al³⁺', '2[M(H₂O)₆]³⁺ + 3CO₃²⁻ → 2[M(H₂O)₃(OH)₃]↓ + 3CO₂↑ + 3H₂O', 'Coloured precipitate + CO₂ bubbles (turns limewater milky)'],
                ['2+', 'Cu²⁺, Fe²⁺, Co²⁺', '[M(H₂O)₆]²⁺ + CO₃²⁻ → MCO₃↓ + 6H₂O', 'Coloured carbonate precipitate; NO gas evolved']
            ],
            caption: 'Key rule: 3+ → hydroxide ppt + CO₂; 2+ → carbonate ppt, no gas'
        } },
        { type: 'heading', id: 'h-scn-test', data: { text: 'Iron(III) Test: Fe³⁺ + SCN⁻', level: 2 } },
        { type: 'list', id: 'list-scn-test', data: { style: 'bullet', items: [
            'Reagent: KSCN or NH₄SCN (thiocyanate solution)',
            'Observation: intense blood-red colour → confirms Fe³⁺ present',
            'Reaction: [Fe(H₂O)₆]³⁺ + SCN⁻ ⇌ [Fe(SCN)(H₂O)₅]²⁺ + H₂O (and further substitution)',
            'Very sensitive — detects Fe³⁺ at concentrations < 0.01 mol dm⁻³',
            'SCN⁻ is a stronger field ligand than H₂O → larger Δ → absorbs in the visible → blood-red colour',
            'Reversible equilibrium: adding AgNO₃ (precipitates SCN⁻) fades the red colour; adding more SCN⁻ intensifies it',
            'Fe²⁺ does NOT give blood-red colour with SCN⁻ (important distinction)'
        ] } },
        { type: 'svg', id: 'svg-carbonate-reactions', data: { caption: 'Reaction of Carbonate ions with 2+ vs 3+ Hexaaqua Ions', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" width="100%" height="auto"><defs><marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" /></marker></defs><style>text{font-family:sans-serif;font-size:14px;fill:#1e293b;text-anchor:middle;} .box{fill:none;stroke:#cbd5e1;stroke-width:2;} .lbl{font-size:12px;fill:#64748b;} .title{font-size:16px;font-weight:bold;fill:#4338ca;} .col-ppt{fill:#10b981;font-weight:bold;} .col-gas{fill:#3b82f6;font-weight:bold;}</style><rect x="10" y="10" width="580" height="105" rx="6" class="box" /><text x="300" y="30" class="title">M³⁺ Ions (Highly Acidic)</text><text x="120" y="65">2[M(H₂O)₆]³⁺ (aq)</text><text x="210" y="65" font-weight="bold">+</text><text x="260" y="65">3CO₃²⁻ (aq)</text><path d="M 310 60 L 350 60" stroke="#64748b" stroke-width="2" marker-end="url(#arr2)" /><text x="440" y="55" class="col-ppt">2[M(H₂O)₃(OH)₃]↓</text><text x="440" y="75" class="lbl">Hydroxide Precipitate</text><text x="510" y="55" font-weight="bold">+</text><text x="545" y="55" class="col-gas">3CO₂↑</text><text x="545" y="75" class="lbl">Effervescence</text><rect x="10" y="125" width="580" height="105" rx="6" class="box" /><text x="300" y="145" class="title">M²⁺ Ions (Less Acidic)</text><text x="120" y="180">[M(H₂O)₆]²⁺ (aq)</text><text x="210" y="180" font-weight="bold">+</text><text x="260" y="180">CO₃²⁻ (aq)</text><path d="M 310 175 L 350 175" stroke="#64748b" stroke-width="2" marker-end="url(#arr2)" /><text x="440" y="170" class="col-ppt">MCO₃↓</text><text x="440" y="190" class="lbl">Carbonate Precipitate</text><text x="510" y="170" font-weight="bold">+</text><text x="545" y="170" fill="#64748b">6H₂O</text><text x="545" y="190" class="lbl">No Gas</text></svg>' } },
        { type: 'svg', id: 'svg-scn-test', data: { caption: 'Iron(III) Thiocyanate Complex Formation', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 130" width="100%" height="auto"><defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" /></marker><marker id="arr-rev-L" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 10 0 L 0 5 L 10 10 z" fill="#64748b" /></marker><marker id="arr-rev-R" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" /></marker></defs><style>text{font-family:sans-serif;font-size:16px;fill:#1e293b;text-anchor:middle;} .eq{stroke:#64748b;stroke-width:2;} .lbl{font-size:12px;fill:#64748b;} .charge{font-weight:bold;fill:#ef4444;}</style><g transform="translate(130, 50)"><rect x="-70" y="-30" width="140" height="40" fill="#fef08a" rx="4" /><text x="0" y="-5">[Fe(H₂O)₆]<tspan class="charge" dy="-10" font-size="12px">3+</tspan></text><text x="0" y="30" class="lbl">Yellow-brown ppt/soln</text></g><text x="230" y="45" font-weight="bold">+</text><g transform="translate(280, 50)"><text x="0" y="-5">SCN<tspan class="charge" dy="-10" font-size="12px">-</tspan></text><text x="0" y="30" class="lbl">Thiocyanate</text></g><path class="eq" d="M 325 35 L 365 35" marker-end="url(#arr-rev-R)" /><path class="eq" d="M 365 45 L 325 45" marker-end="url(#arr-rev-L)" /><g transform="translate(450, 50)"><rect x="-70" y="-30" width="140" height="40" fill="#f87171" rx="4" /><text x="0" y="-5" fill="#7f1d1d" font-weight="bold">[Fe(SCN)(H₂O)₅]<tspan class="charge" dy="-10" font-size="12px">2+</tspan></text><text x="0" y="30" class="lbl">Blood-red solution</text></g></svg>' } },
        {
            type: 'svg',
            id: 'svg-qualitative-flowchart',
            data: {
                caption: 'Decision flowchart for identifying Mn+ ions using NaOH, NH₃ and Na₂CO₃',
                svg: `<svg viewBox="0 0 680 520" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#555"/></marker>
  </defs>
  <rect x="230" y="10" width="220" height="36" rx="6" fill="#2d2f72" stroke="#6366f1" stroke-width="1.5"/>
  <text x="340" y="26" text-anchor="middle" font-weight="bold" fill="#4338ca">Unknown solution</text>
  <text x="340" y="40" text-anchor="middle" fill="#4338ca">Add excess NaOH</text>
  <line x1="340" y1="46" x2="340" y2="70" stroke="#555" marker-end="url(#arr)"/>

  <!-- Precipitate dissolves box -->
  <rect x="430" y="70" width="220" height="44" rx="6" fill="#0a2e1a" stroke="#059669" stroke-width="1.5"/>
  <text x="540" y="88" text-anchor="middle" font-weight="bold" fill="#065f46">Ppt dissolves in</text>
  <text x="540" y="102" text-anchor="middle" fill="#065f46">excess NaOH</text>

  <!-- No dissolve box -->
  <rect x="30" y="70" width="220" height="44" rx="6" fill="#3d1212" stroke="#dc2626" stroke-width="1.5"/>
  <text x="140" y="88" text-anchor="middle" font-weight="bold" fill="#991b1b">Ppt does NOT</text>
  <text x="140" y="102" text-anchor="middle" fill="#991b1b">dissolve in excess NaOH</text>

  <line x1="310" y1="65" x2="160" y2="70" stroke="#555" marker-end="url(#arr)"/>
  <line x1="370" y1="65" x2="520" y2="70" stroke="#555" marker-end="url(#arr)"/>
  <text x="220" y="62" font-size="10" fill="#555">no dissolve</text>
  <text x="375" y="62" font-size="10" fill="#555">dissolves</text>

  <!-- Amphoteric: Cr / Zn / Al -->
  <rect x="430" y="132" width="220" height="56" rx="6" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.2"/>
  <text x="540" y="150" text-anchor="middle" font-weight="bold" fill="#166534">Amphoteric:</text>
  <text x="540" y="164" text-anchor="middle" fill="#166534">Cr³⁺ (green ppt → green soln)</text>
  <text x="540" y="178" text-anchor="middle" fill="#166534">Zn²⁺ / Al³⁺ (white ppt → colourless)</text>
  <line x1="540" y1="114" x2="540" y2="132" stroke="#555" marker-end="url(#arr)"/>

  <!-- Non-dissolve ions -->
  <rect x="30" y="132" width="220" height="70" rx="6" fill="#78350f" stroke="#d97706" stroke-width="1.2"/>
  <text x="140" y="150" text-anchor="middle" font-weight="bold" fill="#92400e">Check ppt colour:</text>
  <text x="140" y="164" text-anchor="middle" fill="#92400e">Green = Fe²⁺ or Ni²⁺ or Cr³⁺</text>
  <text x="140" y="178" text-anchor="middle" fill="#92400e">Orange-brown = Fe³⁺</text>
  <text x="140" y="192" text-anchor="middle" fill="#92400e">Blue = Co²⁺; Pale blue = Cu²⁺</text>
  <text x="140" y="206" text-anchor="middle" fill="#92400e">Pink = Mn²⁺ or Co²⁺</text>
  <line x1="140" y1="114" x2="140" y2="132" stroke="#555" marker-end="url(#arr)"/>

  <!-- Confirm with NH₃ -->
  <rect x="30" y="220" width="220" height="44" rx="6" fill="#2d1b69" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="140" y="238" text-anchor="middle" font-weight="bold" fill="#4c1d95">Confirm: add excess NH₃</text>
  <text x="140" y="252" text-anchor="middle" fill="#4c1d95">(does ppt dissolve?)</text>
  <line x1="140" y1="202" x2="140" y2="220" stroke="#555" marker-end="url(#arr)"/>

  <!-- NH3 outcomes -->
  <rect x="30" y="282" width="220" height="80" rx="6" fill="#2d1b69" stroke="#7c3aed" stroke-width="1.2"/>
  <text x="140" y="300" text-anchor="middle" font-weight="bold" fill="#4c1d95">NH₃ dissolves:</text>
  <text x="140" y="314" text-anchor="middle" fill="#4c1d95">Cu²⁺ → deep blue [Cu(NH₃)₄]²⁺</text>
  <text x="140" y="328" text-anchor="middle" fill="#4c1d95">Co²⁺ → yellow [Co(NH₃)₆]²⁺</text>
  <text x="140" y="342" text-anchor="middle" fill="#4c1d95">Ni²⁺ → deep blue [Ni(NH₃)₆]²⁺</text>
  <text x="140" y="356" text-anchor="middle" fill="#4c1d95">NH₃ no change: Fe²⁺, Fe³⁺, Mn²⁺</text>
  <line x1="140" y1="264" x2="140" y2="282" stroke="#555" marker-end="url(#arr)"/>

  <!-- SCN- test -->
  <rect x="230" y="390" width="220" height="44" rx="6" fill="#4a1040" stroke="#db2777" stroke-width="1.5"/>
  <text x="340" y="408" text-anchor="middle" font-weight="bold" fill="#831843">If Fe³⁺ suspected:</text>
  <text x="340" y="422" text-anchor="middle" fill="#831843">Add SCN⁻ → blood-red confirms Fe³⁺</text>

  <!-- Na₂CO₃ test -->
  <rect x="230" y="450" width="220" height="54" rx="6" fill="#44370a" stroke="#ca8a04" stroke-width="1.2"/>
  <text x="340" y="468" text-anchor="middle" font-weight="bold" fill="#713f12">Na₂CO₃ test:</text>
  <text x="340" y="482" text-anchor="middle" fill="#713f12">3+ → hydroxide ppt + CO₂ gas</text>
  <text x="340" y="496" text-anchor="middle" fill="#713f12">2+ → carbonate ppt, no gas</text>
</svg>`
            }
        },
        { type: 'heading', id: 'h-gas-tests', data: { text: 'Standard Gas Tests', level: 2 } },
        { type: 'comparisonTable', id: 'table-gas-tests', data: {
            headers: ['Gas', 'Test reagent', 'Positive observation'],
            rows: [
                ['CO₂', 'Limewater (Ca(OH)₂ (aq))', 'Milky white precipitate (CaCO₃ formed; clears in excess CO₂)'],
                ['NH₃', 'Damp red litmus paper', 'Turns blue (NH₃ is alkaline)'],
                ['HCl / halogen acids', 'Damp blue litmus; or AgNO₃ solution', 'Litmus turns red; AgNO₃ → white/cream/yellow precipitate'],
                ['O₂', 'Glowing splint', 'Splint relights'],
                ['H₂', 'Burning splint', 'Squeaky pop (rapid combustion in air)'],
                ['Cl₂', 'Damp starch-iodide paper', 'Turns blue-black (Cl₂ oxidises I⁻ → I₂; I₂ + starch → blue-black)'],
                ['SO₂', 'Aqueous K₂Cr₂O₇ (orange)', 'Turns green (Cr₂O₇²⁻ reduced to Cr³⁺ by SO₂)']
            ],
            caption: 'Required gas identification tests for WCH16'
        } },
        { type: 'heading', id: 'h-colour-summary', data: { text: 'Ion Colour Summary', level: 2 } },
        { type: 'comparisonTable', id: 'table-colour-summary', data: {
            headers: ['Ion', 'Config', 'Colour in solution', 'Note'],
            rows: [
                ['Ti³⁺', 'd¹', 'Purple', 'Few WCH common tests but good d-orbital example'],
                ['Cr³⁺', 'd³', 'Green/violet-grey', 'Hexaaqua is actually violet; commonly appears green in solution'],
                ['Mn²⁺', 'd⁵', 'Very pale pink', 'Half-filled d shell; v. weak absorption'],
                ['Fe²⁺', 'd⁶', 'Pale green', 'Oxidises easily to Fe³⁺'],
                ['Fe³⁺', 'd⁵', 'True colour: pale lilac; appears yellow-brown', 'Yellow due to hydrolysis products'],
                ['Co²⁺', 'd⁷', 'Pink (aqua); blue (with Cl⁻)', 'Colour changes with ligand and CN'],
                ['Ni²⁺', 'd⁸', 'Green', ''],
                ['Cu²⁺', 'd⁹', 'Pale blue', 'Deep blue with NH₃'],
                ['Zn²⁺', 'd¹⁰', 'Colourless', 'Full d-shell; no d-d transitions']
            ],
            caption: 'Transition metal hexaaqua ion colours — key for qualitative analysis'
        } },
        {
            type: 'checklist',
            id: 'checklist-qualitative-tests',
            data: {
                items: [
                    { text: 'NaOH deprotonates water ligands (NOT ligand exchange) — 2+ needs 2 mol OH⁻, 3+ needs 3 mol OH⁻', checked: false },
                    { text: 'Precipitates that dissolve in excess NaOH: Cr(OH)₃, Zn(OH)₂, Al(OH)₃ (amphoteric)', checked: false },
                    { text: 'Cu(OH)₂ does NOT dissolve in excess NaOH (not amphoteric)', checked: false },
                    { text: 'Excess NH₃ dissolves: Cu²⁺ (deep blue), Co²⁺ (yellow), Cr³⁺ (purple), Ni²⁺ (deep blue), Zn²⁺ (colourless)', checked: false },
                    { text: 'Excess NH₃ no change: Fe²⁺, Fe³⁺, Mn²⁺, Al³⁺', checked: false },
                    { text: '3+ + Na₂CO₃ → metal hydroxide ppt + CO₂ gas; 2+ + Na₂CO₃ → metal carbonate ppt, no gas', checked: false },
                    { text: 'Fe³⁺ confirmed by blood-red colour with SCN⁻ (KSCN or NH₄SCN); reversible equilibrium', checked: false },
                    { text: 'Fe²⁺ (green ppt) turns orange-brown in air → Fe³⁺', checked: false },
                    { text: 'CO₂ identified by milky limewater; NH₃ by damp red litmus → blue', checked: false },
                    { text: 'Zn²⁺ and Al³⁺ both give white ppt with NaOH; Al³⁺ is d⁰ (colourless); both amphoteric', checked: false }
                ]
            }
        },
        {
            type: 'summary',
            id: 'summary-qualitative',
            data: {
                text: 'Qualitative tests on hexaaqua ions use three reagents: NaOH (gives precipitate; Cr/Zn/Al dissolve in excess — amphoteric), NH₃ (same precipitate; Cu/Co/Cr/Ni/Zn dissolve in excess — form ammine complexes; Fe/Mn/Al do not), Na₂CO₃ (3+ ions give hydroxide ppt + CO₂; 2+ ions give carbonate ppt, no gas). Confirm Fe³⁺ with SCN⁻ → blood-red. Gas tests: CO₂ turns limewater milky; NH₃ turns damp red litmus blue; H₂ gives squeaky pop.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            {
                id: 'cue-1',
                blockId: 'h-naoh-reactions',
                prompt: 'Which common precipitates dissolve in excess NaOH? What does that tell you about the ion?'
            },
            {
                id: 'cue-2',
                blockId: 'h-nh3-reactions',
                prompt: 'Which ions dissolve in excess NH₃? Which do not? Give the formula and colour of the final complex for Cu²⁺.'
            },
            {
                id: 'cue-3',
                blockId: 'h-carbonate-reactions',
                prompt: 'What is the key observation that distinguishes 3+ ions from 2+ ions when treated with Na₂CO₃?'
            },
            {
                id: 'cue-4',
                blockId: 'h-scn-test',
                prompt: 'Describe the qualitative test for Fe³⁺ using SCN⁻. What colour forms? Is the reaction reversible?'
            },
            {
                id: 'cue-5',
                blockId: 'h-gas-tests',
                prompt: 'How do you test for CO₂? How do you test for NH₃ gas?'
            }
        ],
        summaryText: 'NaOH → precipitate (Cr/Zn/Al dissolve in excess, amphoteric). NH₃ → same precipitate, excess dissolves Cu (deep blue), Co (yellow), Cr (purple), Ni (deep blue), Zn (colourless). Na₂CO₃: 3+ → ppt + CO₂; 2+ → carbonate ppt, no gas. SCN⁻ → blood-red confirms Fe³⁺.',
        ready: true
    },
    evidence: []
};

export default note_chemistry_6_6A_2;

