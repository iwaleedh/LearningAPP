export const note_chemistry_5_17_6 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-substitution',
      data: {
        text: 'Understand the four types of transition metal complex reactions (redox, deprotonation, ligand exchange, coordination number change); predict products and colour changes for Co, Fe, Cu, Cr, Ni, Mn, and Zn complexes with NaOH and NH₃; use Fe³⁺ + SCN⁻ as a qualitative test for iron(III).'
      }
    },
    {
      type: 'heading',
      id: 'h-acidity-hexaaqua',
      data: { text: 'Acidity of Hexaaqua Metal Ions', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-acidity-mechanism',
      data: {
        text: 'Solutions of hexaaqua ions [M(H₂O)₆]ⁿ⁺ are acidic. The mechanism:<br/>' +
          '1. The central metal ion has a high positive charge density<br/>' +
          '2. This pulls electron density away from the O→M coordinate bond, and further through the O–H bonds<br/>' +
          '3. The H atoms of the ligand water molecules become more δ⁺ than in free water<br/>' +
          '4. These H⁺ ions are pulled off by water molecules in the bulk solution (Brønsted-Lowry acid behaviour)'
      }
    },
    {
      type: 'list',
      id: 'list-acidity-stepwise',
      data: {
        style: 'numbered',
        items: [
          '[Fe(H₂O)₆]³⁺ + H₂O ⇌ [Fe(H₂O)₅(OH)]²⁺ + H₃O⁺ — 1st H⁺ lost; solution is yellow/orange (not the true pale lilac of [Fe(H₂O)₆]³⁺)',
          '[Fe(H₂O)₅(OH)]²⁺ + H₂O ⇌ [Fe(H₂O)₄(OH)₂]⁺ + H₃O⁺ — 2nd H⁺ lost',
          '[Fe(H₂O)₄(OH)₂]⁺ + H₂O ⇌ [Fe(H₂O)₃(OH)₃] + H₃O⁺ — 3rd H⁺ lost; neutral complex → precipitate forms'
        ]
      }
    },
    {
      type: 'callout',
      id: 'callout-acidity-charge',
      data: {
        style: 'key',
        title: '3+ Ions Are More Acidic Than 2+ Ions',
        text: 'Greater charge (3+) → stronger pull on O–H bond electrons → H atoms more δ⁺ → more readily lost as H⁺.\n\nTypical pH at equal concentrations:\n• 3+ hexaaqua ions (e.g. [Fe(H₂O)₆]³⁺): pH 1–3 (strongly acidic)\n• 2+ hexaaqua ions (e.g. [Cu(H₂O)₆]²⁺): pH 5–6 (weakly acidic)\n\nNote: The true colour of [Fe(H₂O)₆]³⁺ is very pale lilac — rarely seen in solution because the strongly coloured yellow/orange hydrolysis product [Fe(H₂O)₅(OH)]²⁺ forms. Adding concentrated acid (H⁺) pushes equilibrium left and the pale lilac can be observed.'
      }
    },
    { type: 'heading', id: 'h-four-types', data: { text: 'Four Types of Complex Reactions', level: 2 } },
    { type: 'list', id: 'list-four-types', data: { style: 'numbered', items: [
      'Redox — oxidation number of the metal changes (e.g. Fe²⁺ → Fe³⁺ on exposure to air). Ligands and type remain unchanged; no equation needed.',
      'Deprotonation — one or more water ligands loses H⁺ (removed by OH⁻ or NH₃). Product is a neutral complex precipitate. Most common reaction type with NaOH and NH₃.',
      'Ligand exchange — one or more ligands physically replaced by different ligands. Coordination number stays the same. Occurs with excess NH₃.',
      'Coordination number change — number of ligands changes (e.g. 6 → 4). Always accompanied by a ligand type change. Occurs with large ligands such as Cl⁻.'
    ] } },
    { type: 'callout', id: 'callout-deprot-vs-exchange', data: { style: 'warning', title: 'Deprotonation ≠ Ligand Exchange', text: 'When NaOH or a few drops of NH₃ are added, the reaction looks like ligand exchange but is actually deprotonation — OH⁻ or NH₃ removes H⁺ from two (or three) water ligands, converting them to OH⁻ ligands in place. Only excess NH₃ causes true ligand exchange, swapping OH⁻ and H₂O ligands for NH₃.' } },
    { type: 'heading', id: 'h-cobalt-reactions', data: { text: 'Cobalt Reactions', level: 2 } },
    { type: 'list', id: 'list-cobalt-naoh', data: { style: 'bullet', items: [
      'Starting ion: [Co(H₂O)₆]²⁺ — pink solution',
      'With NaOH (few drops): [Co(H₂O)₆]²⁺ + 2OH⁻ → [Co(H₂O)₄(OH)₂] + 2H₂O — blue precipitate (deprotonation)',
      'With NH₃ (few drops): [Co(H₂O)₆]²⁺ + 2NH₃ → [Co(H₂O)₄(OH)₂] + 2NH₄⁺ — same blue precipitate',
      'With excess NH₃: [Co(H₂O)₄(OH)₂] + 6NH₃ → [Co(NH₃)₆]²⁺ + 4H₂O + 2OH⁻ — yellow solution (ligand exchange)',
      'Blue precipitate turns pink in air (oxidation Co²⁺ → Co³⁺)',
      'Yellow solution [Co(NH₃)₆]²⁺ turns darker yellow-brown in air (Co²⁺ → Co³⁺)',
      'With conc. HCl: [Co(H₂O)₆]²⁺ + 4Cl⁻ → [CoCl₄]²⁻ + 6H₂O — pink → blue (octahedral → tetrahedral, coordination number change)'
    ] } },
    { type: 'heading', id: 'h-iron-reactions', data: { text: 'Iron Reactions', level: 2 } },
    { type: 'list', id: 'list-iron-ii', data: { style: 'bullet', items: [
      'Fe²⁺ starting ion: [Fe(H₂O)₆]²⁺ — pale green solution',
      'With NaOH: [Fe(H₂O)₆]²⁺ + 2OH⁻ → [Fe(H₂O)₄(OH)₂] + 2H₂O — green precipitate (deprotonation)',
      'With NH₃: same green precipitate formed; two NH₃ remove H⁺ from two water ligands → 2NH₄⁺',
      'Green precipitate turns orange-brown in air: Fe²⁺ oxidised to Fe³⁺ forming [Fe(H₂O)₃(OH)₃] (triaquatrihydroxoiron(III))',
      'Fe³⁺ starting ion: [Fe(H₂O)₆]³⁺ — yellow-brown solution',
      'With NaOH: [Fe(H₂O)₆]³⁺ + 3OH⁻ → [Fe(H₂O)₃(OH)₃] + 3H₂O — orange-brown precipitate; three moles NaOH needed (3+ charge)',
      'With NH₃: same orange-brown precipitate; three NH₃ remove 3 × H⁺ → 3NH₄⁺',
      'Key rule: charge = moles of base needed (2+ reacts with 2 mol; 3+ reacts with 3 mol)'
    ] } },
    { type: 'heading', id: 'h-copper-reactions', data: { text: 'Copper Reactions', level: 2 } },
    { type: 'list', id: 'list-copper', data: { style: 'bullet', items: [
      'Starting ion: [Cu(H₂O)₆]²⁺ — pale blue solution',
      'With NaOH (few drops): [Cu(H₂O)₆]²⁺ + 2OH⁻ → [Cu(H₂O)₄(OH)₂] + 2H₂O — light blue precipitate (deprotonation)',
      'With NH₃ (few drops): same light blue precipitate; 2NH₃ remove 2 × H⁺ → 2NH₄⁺',
      'With excess NH₃: [Cu(H₂O)₄(OH)₂] + 4NH₃ → [Cu(NH₃)₄(H₂O)₂]²⁺ + 2H₂O + 2OH⁻ — deep blue solution (ligand exchange)',
      'With conc. HCl: [Cu(H₂O)₆]²⁺ + 4Cl⁻ → [CuCl₄]²⁻ + 6H₂O — pale blue → green → yellow (coordination number 6 → 4; reversible)',
      'Green intermediate = mixture of [Cu(H₂O)₆]²⁺ (blue) and [CuCl₄]²⁻ (yellow)'
    ] } },
    { type: 'heading', id: 'h-chromium-reactions', data: { text: 'Chromium Reactions', level: 2 } },
    { type: 'list', id: 'list-chromium-naoh', data: { style: 'bullet', items: [
      'Starting ion: [Cr(H₂O)₆]³⁺ — green solution',
      'With NaOH (few drops): [Cr(H₂O)₆]³⁺ + 3OH⁻ → [Cr(H₂O)₃(OH)₃] + 3H₂O — green precipitate (deprotonation; 3+ needs 3 mol)',
      'With excess NaOH: further deprotonation → [Cr(OH)₄(H₂O)₂]⁻ then [Cr(OH)₆]³⁻ — precipitate dissolves into green solution',
      'With NH₃ (few drops): same green precipitate [Cr(H₂O)₃(OH)₃]',
      'With excess NH₃: precipitate dissolves → [Cr(NH₃)₆]³⁺ + 3H₂O + 3OH⁻ — purple/violet solution (ligand exchange)',
      'Chromium hydroxide is amphoteric: reacts with acid (→ green solution) and with excess base (→ green solution) — see next point',
      'With H₂O₂ (alkaline): Cr³⁺ oxidised to Cr⁶⁺ → CrO₄²⁻ — green → yellow (redox; H₂O₂ is oxidising agent)',
      'Solid and solution of same chromium complex can appear different colours; use Edexcel specification colours in exams'
    ] } },
    { type: 'callout', id: 'callout-chromate-dichromate', data: { style: 'key', title: 'Chromate(VI) ↔ Dichromate(VI) pH Equilibrium', text: 'CrO₄²⁻ (chromate, yellow) is stable in alkaline solution. In acidic conditions Cr₂O₇²⁻ (dichromate, orange) is more stable.\n2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O\n• Add acid → yellow turns orange\n• Add alkali → orange turns yellow\nThis is NOT a redox reaction — Cr remains at +6. It is a condensation/hydrolysis equilibrium driven by pH.' } },
    { type: 'callout', id: 'callout-cr-reduce', data: { style: 'worked', title: 'Chromium Reduction with Zinc (Cr⁶⁺ → Cr³⁺ → Cr²⁺)', text: 'Add Zn to acidified Cr₂O₇²⁻ (orange):\n1. Cr⁶⁺ → Cr³⁺: orange → green (E°cell positive — feasible)\n2. Cr³⁺ → Cr²⁺: green → blue (E°cell positive — feasible)\nZn acts as reducing agent (Zn → Zn²⁺). Variable oxidation states confirmed by colour sequence: orange → green → blue.' } },
    { type: 'heading', id: 'h-manganese-reactions', data: { text: 'Manganese Reactions', level: 2 } },
    { type: 'list', id: 'list-manganese', data: { style: 'bullet', items: [
      'Starting ion: [Mn(H₂O)₆]²⁺ — pale pink solution',
      'With NaOH: [Mn(H₂O)₆]²⁺ + 2OH⁻ → [Mn(H₂O)₄(OH)₂] + 2H₂O — pale brown precipitate (deprotonation)',
      'With NH₃: same pale brown precipitate; 2NH₃ remove 2 × H⁺ → 2NH₄⁺',
      'Precipitate does NOT dissolve in excess NaOH or excess NH₃ — key difference from Cr, Ni, Cu, Zn',
      'Pale brown precipitate oxidised in air → dark brown MnO₂ precipitate (Mn²⁺ → Mn⁴⁺)',
      'You may see brown staining from MnO₂ in lab when using KMnO₄'
    ] } },
    { type: 'heading', id: 'h-nickel-reactions', data: { text: 'Nickel Reactions', level: 2 } },
    { type: 'list', id: 'list-nickel', data: { style: 'bullet', items: [
      'Starting ion: [Ni(H₂O)₆]²⁺ — green solution',
      'With NaOH: [Ni(H₂O)₆]²⁺ + 2OH⁻ → [Ni(H₂O)₄(OH)₂] + 2H₂O — green precipitate (deprotonation)',
      'With NH₃ (few drops): same green precipitate',
      'With excess NH₃: green precipitate dissolves → [Ni(NH₃)₆]²⁺ + 4H₂O + 2OH⁻ — deep blue solution (ligand exchange)',
      'Excess NaOH: no change — precipitate does not redissolve'
    ] } },
    { type: 'heading', id: 'h-zinc-reactions', data: { text: 'Zinc Reactions', level: 2 } },
    { type: 'list', id: 'list-zinc', data: { style: 'bullet', items: [
      'Starting ion: [Zn(H₂O)₆]²⁺ — colourless solution (full 3d¹⁰; no d-d transitions)',
      'With NaOH (few drops): [Zn(H₂O)₆]²⁺ + 2OH⁻ → [Zn(H₂O)₄(OH)₂] + 2H₂O — white precipitate (deprotonation)',
      'With excess NaOH: further deprotonation; white precipitate dissolves → [Zn(OH)₄]²⁻ + 2H₂O — colourless solution',
      'Zinc hydroxide is amphoteric: dissolves in both excess NaOH and in acids',
      'With NH₃ (few drops): same white precipitate',
      'With excess NH₃: precipitate dissolves → [Zn(NH₃)₄]²⁺ + 2H₂O + 2OH⁻ — colourless solution (ligand exchange)',
      'All Zn complexes are colourless (solutions) or white (precipitates) — no colour at any stage'
    ] } },
    { type: 'heading', id: 'h-aluminium-reactions', data: { text: 'Aluminium Reactions (3+ non-transition metal)', level: 2 } },
    { type: 'list', id: 'list-aluminium', data: { style: 'bullet', items: [
      'Starting ion: [Al(H₂O)₆]³⁺ — colourless solution (Al³⁺ is d⁰, not a transition metal; no d-d transitions)',
      'With NaOH (few drops): [Al(H₂O)₆]³⁺ + 3OH⁻ → [Al(H₂O)₃(OH)₃] + 3H₂O — white gelatinous precipitate (3+ charge → 3 mol OH⁻ needed)',
      'With excess NaOH: precipitate dissolves → [Al(OH)₄]⁻ (tetrahydroxoaluminate) — colourless solution',
      'With NH₃ (few drops): same white precipitate — NH₃ acts as Brønsted-Lowry base, removes 3 × H⁺',
      'With excess NH₃: precipitate does NOT dissolve — Al³⁺ forms no stable ammine complex (key exam point)',
      'Al(OH)₃ is amphoteric: dissolves in excess NaOH (acidic character) AND in dilute acids (basic character)',
      'With Na₂CO₃: white precipitate + CO₂ gas (Al³⁺ is acidic enough, being 3+, to liberate CO₂ from CO₃²⁻)'
    ] } },
    { type: 'heading', id: 'h-carbonate-reactions', data: { text: 'Reactions with Sodium Carbonate (Na₂CO₃)', level: 2 } },
    { type: 'svg', id: 'svg-chromate-dichromate', data: { caption: 'Chromate/Dichromate pH Equilibrium', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 150" width="100%" height="auto"><defs><marker id="arrowL" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 10 0 L 0 5 L 10 10 z" fill="#ef4444" /></marker><marker id="arrowR" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" /></marker></defs><style>text{font-family:sans-serif;fill:currentColor;} .yellow{fill:#eab308;font-weight:bold;font-size:24px;} .orange{fill:#f97316;font-weight:bold;font-size:24px;} .ion{font-size:24px;fill:#1e293b;font-weight:bold;} .lbl{font-size:14px;fill:#64748b;} </style><rect x="50" y="20" width="150" height="80" rx="8" fill="#fef9c3" stroke="#eab308" stroke-width="2" /><text x="125" y="55" text-anchor="middle" class="yellow">2CrO₄²⁻</text><text x="125" y="80" text-anchor="middle" class="lbl">Chromate</text><text x="125" y="95" text-anchor="middle" font-size="12px" font-weight="bold" fill="#eab308">YELLOW</text><rect x="400" y="20" width="150" height="80" rx="8" fill="#ffedd5" stroke="#f97316" stroke-width="2" /><text x="475" y="55" text-anchor="middle" class="orange">Cr₂O₇²⁻</text><text x="475" y="80" text-anchor="middle" class="lbl">Dichromate</text><text x="475" y="95" text-anchor="middle" font-size="12px" font-weight="bold" fill="#f97316">ORANGE</text><path d="M 220 50 L 380 50" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrowR)" /><text x="300" y="42" text-anchor="middle" fill="#3b82f6" font-size="14px" font-weight="bold">+ H⁺ (Acid)</text><path d="M 380 70 L 220 70" stroke="#ef4444" stroke-width="3" marker-end="url(#arrowL)" /><text x="300" y="92" text-anchor="middle" fill="#ef4444" font-size="14px" font-weight="bold">+ OH⁻ (Alkali)</text><text x="300" y="140" text-anchor="middle" font-size="14px" fill="#ef4444" font-weight="bold">NOT a redox reaction (Cr is +6 in both)</text></svg>' } },
    {
      type: 'paragraph',
      id: 'p-carbonate-intro',
      data: {
        text: 'The reaction with carbonate ions depends on the charge of the hexaaqua ion — 3+ ions are acidic enough to protonate CO₃²⁻ fully, releasing CO₂ gas; 2+ ions are not.'
      }
    },
    { type: 'list', id: 'list-carbonate-reactions', data: { style: 'bullet', items: [
      '3+ ions (Al³⁺, Fe³⁺, Cr³⁺): overall → 2[M(H₂O)₆]³⁺ + 3CO₃²⁻ → 2[M(H₂O)₃(OH)₃]↓ + 3CO₂↑ + 3H₂O — metal hydroxide precipitate + effervescence',
      '2+ ions (Cu²⁺, Fe²⁺, Co²⁺): overall → [M(H₂O)₆]²⁺ + CO₃²⁻ → MCO₃↓ + 6H₂O — metal carbonate precipitate, NO gas evolved',
      'Key rule: 3+ → hydroxide precipitate + CO₂ (acidic enough to release gas); 2+ → carbonate precipitate (not acidic enough)',
      'Fe³⁺ + Na₂CO₃: orange-brown precipitate of [Fe(H₂O)₃(OH)₃] + CO₂ bubbles',
      'Cu²⁺ + Na₂CO₃: green/blue CuCO₃ precipitate (basic carbonate in practice), no gas',
      'Al³⁺ + Na₂CO₃: white [Al(H₂O)₃(OH)₃] precipitate + CO₂ bubbles'
    ] } },
    { type: 'comparisonTable', id: 'table-carbonate-summary', data: { headers: ['Ion', 'Charge', 'Product with Na₂CO₃', 'CO₂ gas?'], rows: [
      ['[Al(H₂O)₆]³⁺', '3+', 'White Al(OH)₃ precipitate', 'Yes ✓'],
      ['[Fe(H₂O)₆]³⁺', '3+', 'Orange-brown Fe(OH)₃ precipitate', 'Yes ✓'],
      ['[Cr(H₂O)₆]³⁺', '3+', 'Green Cr(OH)₃ precipitate', 'Yes ✓'],
      ['[Cu(H₂O)₆]²⁺', '2+', 'Green-blue CuCO₃ precipitate', 'No ✗'],
      ['[Fe(H₂O)₆]²⁺', '2+', 'Green FeCO₃ precipitate', 'No ✗'],
      ['[Co(H₂O)₆]²⁺', '2+', 'Pink CoCO₃ precipitate', 'No ✗']
    ], caption: 'Reactions of hexaaqua ions with Na₂CO₃ — key exam distinction' } },
    { type: 'heading', id: 'h-summary-tables', data: { text: 'Summary Tables', level: 2 } },
    { type: 'comparisonTable', id: 'table-naoh-summary', data: { headers: ['Ion in solution', 'Colour', 'Precipitate (+ NaOH)', 'Excess NaOH'], rows: [
      ['[Co(H₂O)₆]²⁺', 'Pink', 'Blue precipitate', 'No change'],
      ['[Fe(H₂O)₆]²⁺', 'Pale green', 'Green precipitate', 'No change'],
      ['[Fe(H₂O)₆]³⁺', 'Yellow-brown', 'Orange-brown precipitate', 'No change'],
      ['[Cu(H₂O)₆]²⁺', 'Pale blue', 'Light blue precipitate', 'No change'],
      ['[Cr(H₂O)₆]³⁺', 'Green', 'Green precipitate', 'Dissolves → green solution'],
      ['[Mn(H₂O)₆]²⁺', 'Pale pink', 'Pale brown precipitate', 'No change'],
      ['[Ni(H₂O)₆]²⁺', 'Green', 'Green precipitate', 'No change'],
      ['[Zn(H₂O)₆]²⁺', 'Colourless', 'White precipitate', 'Dissolves → colourless solution'],
      ['[Al(H₂O)₆]³⁺', 'Colourless', 'White precipitate', 'Dissolves → colourless solution']
    ], caption: 'Reactions with aqueous NaOH' } },
    { type: 'comparisonTable', id: 'table-nh3-summary', data: { headers: ['Ion in solution', 'Colour', 'Precipitate (+ NH₃)', 'Excess NH₃'], rows: [
      ['[Co(H₂O)₆]²⁺', 'Pink', 'Blue precipitate', 'Dissolves → yellow solution [Co(NH₃)₆]²⁺'],
      ['[Fe(H₂O)₆]²⁺', 'Pale green', 'Green precipitate', 'No change'],
      ['[Fe(H₂O)₆]³⁺', 'Yellow-brown', 'Orange-brown precipitate', 'No change'],
      ['[Cu(H₂O)₆]²⁺', 'Pale blue', 'Light blue precipitate', 'Dissolves → deep blue [Cu(NH₃)₄(H₂O)₂]²⁺'],
      ['[Cr(H₂O)₆]³⁺', 'Green', 'Green precipitate', 'Dissolves → purple/violet [Cr(NH₃)₆]³⁺'],
      ['[Mn(H₂O)₆]²⁺', 'Pale pink', 'Pale brown precipitate', 'No change'],
      ['[Ni(H₂O)₆]²⁺', 'Green', 'Green precipitate', 'Dissolves → deep blue [Ni(NH₃)₆]²⁺'],
      ['[Zn(H₂O)₆]²⁺', 'Colourless', 'White precipitate', 'Dissolves → colourless [Zn(NH₃)₄]²⁺'],
      ['[Al(H₂O)₆]³⁺', 'Colourless', 'White precipitate', 'No change — no stable Al ammine complex']
    ], caption: 'Reactions with aqueous NH₃' } },
    {
      type: 'heading',
      id: 'h-substitution-intro',
      data: { text: 'Ligand Substitution — Equilibrium Aspects', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-substitution-def',
      data: {
        text: 'Ligand substitution reactions are equilibria, not irreversible processes. The position of equilibrium depends on the relative stability of the reactant and product complexes. Adding excess incoming ligand shifts equilibrium forward (Le Chatelier); adding the displaced ligand shifts it backward. Adding a precipitating agent (e.g. AgNO₃ to remove SCN⁻) fades the colour as equilibrium shifts left.'
      }
    },
    {
      type: 'heading',
      id: 'h-iron-thiocyanate',
      data: { text: 'Iron(III) Test: Fe³⁺ + SCN⁻', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-fe-scn-intro',
      data: {
        text: 'The reaction between iron(III) ions and thiocyanate ions is a classic qualitative test for the presence of Fe³⁺ in solution. This test is highly sensitive and produces a distinctive colour change that is diagnostic for iron(III).'
      }
    },
    {
      type: 'paragraph',
      id: 'p-fe-scn-reaction',
      data: {
        text: '<strong>Reaction:</strong> Fe³⁺(aq) + SCN⁻(aq) → [Fe(SCN)]²⁺(aq) + ... (further substitution possible)<br/>' +
        '<strong>Initial complex:</strong> [Fe(H₂O)₆]³⁺ (brown/yellow, very weak absorption of visible light due to small Δ)<br/>' +
        '<strong>Product:</strong> [Fe(SCN)(H₂O)₅]²⁺ or [Fe(SCN)ₓ]^(3−x)+ (depending on SCN⁻ concentration)<br/>' +
        '<strong>Observation:</strong> The solution turns <strong>blood red</strong> or <strong>deep red</strong>.<br/>' +
        '<strong>Explanation:</strong><br/>' +
        '• SCN⁻ is a moderately strong field ligand<br/>' +
        '• The Fe³⁺-SCN⁻ complex has a larger d-orbital splitting (Δ) than [Fe(H₂O)₆]³⁺<br/>' +
        '• This larger Δ shifts the absorption wavelength into the visible region, producing the intense blood-red colour<br/>' +
        '• The intensity of the red colour indicates the concentration of Fe³⁺ (can be used semi-quantitatively)'
      }
    },
    {
      type: 'callout',
      id: 'callout-fe-scn-test',
      data: {
        style: 'key',
        title: 'Qualitative Test for Fe³⁺',
        text: 'Add a few drops of KSCN or NH₄SCN solution to a solution suspected to contain Fe³⁺. An intense blood-red colour indicates the presence of Fe³⁺. This test is highly sensitive and specific—very small concentrations of Fe³⁺ (< 0.01 mol dm⁻³) produce a visible colour. Colourless = no Fe³⁺; red = Fe³⁺ present.'
      }
    },
    {
      type: 'heading',
      id: 'h-equilibrium-aspects',
      data: { text: 'Equilibrium Nature of Substitution Reactions', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-equilibrium-nature',
      data: {
        text: 'Ligand substitution reactions are equilibria, not irreversible processes. The position of equilibrium depends on the relative stability of the reactant and product complexes. If the product complex is significantly more stable, the equilibrium lies to the right. However, adding excess incoming ligand shifts the equilibrium forward (Le Chatelier), while removing the incoming ligand (or adding the displaced ligand) shifts it backward.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-equilibrium-examples',
      data: {
        text: '<strong>Example 1: Copper + chloride</strong><br/>' +
        '[Cu(H₂O)₆]²⁺ + 4Cl⁻ ⇌ [CuCl₄]²⁻ + 6H₂O<br/>' +
        'With concentrated HCl: equilibrium shifts right (yellow/green)<br/>' +
        'With water (dilute solution): equilibrium shifts left (blue returns)<br/>' +
        '<br/><strong>Example 2: Iron(III) + thiocyanate</strong><br/>' +
        '[Fe(H₂O)₆]³⁺ + SCN⁻ ⇌ [Fe(SCN)(H₂O)₅]²⁺ + H₂O<br/>' +
        'Adding more SCN⁻: red colour intensifies (equilibrium shifts right)<br/>' +
        'Adding AgNO₃ (precipitates SCN⁻): red colour fades (equilibrium shifts left)'
      }
    },
    { type: 'heading', id: 'h-stability-constants', data: { text: 'Stability Constants (K_stab)', level: 2 } },
    {
      type: 'paragraph',
      id: 'p-kstab-def',
      data: {
        text: 'The stability constant (K_stab) is the equilibrium constant for the formation of a complex ion from its aqueous metal ion and ligands. Water molecules are not included in the expression (their concentration is effectively constant). A large K_stab means the complex is thermodynamically stable and forms readily.'
      }
    },
    { type: 'list', id: 'list-kstab-expression', data: { style: 'bullet', items: [
      'Formation: [Cu(H₂O)₆]²⁺ + 4NH₃ ⇌ [Cu(NH₃)₄(H₂O)₂]²⁺ + 4H₂O',
      'K_stab = [[Cu(NH₃)₄(H₂O)₂]²⁺] / { [[Cu(H₂O)₆]²⁺] × [NH₃]⁴ }',
      'Large K_stab (e.g. 10¹³) → complex is very stable; displaces water readily',
      'Small K_stab → equilibrium lies to the left; complex barely forms',
      'Stepwise formation: K₁ × K₂ × K₃ × K₄ = overall K_stab',
      'Log scale used: difference of 1 in log K = 10× difference in actual K'
    ] } },
    {
      type: 'callout',
      id: 'callout-chelate-effect',
      data: {
        style: 'key',
        title: 'The Chelate Effect — Why Bidentate Ligands Win',
        text: 'Compare [Cu(NH₃)₂(H₂O)₄]²⁺ vs [Cu(en)(H₂O)₄]²⁺ — both have 2 N donors, but the stability constants differ enormously:\n\n• 2 NH₃ (monodentate): log K = 7.86\n• 1 en (bidentate, same 2 N atoms): log K = 10.6\n• 3 en (tris-en complex): log K = 18.7\n• EDTA⁴⁻ (hexadentate): log K = 18.8\n\nReason: ENTROPY. Replacing 2 NH₃ (3 → 3 particles, ΔS ≈ 0) vs replacing 1 en (2 → 3 particles, ΔS > 0). The chelate effect is entropic — more fragments released → greater entropy increase → more stable complex. EDTA (hexadentate) releases 6 water molecules = massive entropy gain.'
      }
    },
    { type: 'list', id: 'list-kstab-applications', data: { style: 'bullet', items: [
      'EDTA chelation therapy: EDTA⁴⁻ sequesters toxic metals (Pb²⁺, Hg²⁺) with very large K_stab → removes from blood',
      'Haemoglobin: CO binds Fe²⁺ with K_stab ≈ 200× larger than O₂ → irreversible occupancy of O₂ site',
      'Industrial: EDTA used in food preservation and in analytical chemistry to mask interfering ions',
      'Log K comparison: NH₃ complex log K = 7.86; en complex = 10.6; EDTA = 18.8 — each jump ≈ 10⁸ times more stable'
    ] } },
    {
      type: 'checklist',
      id: 'checklist-substitution',
      data: {
        items: [
          { text: 'State the 4 types of complex reactions: redox, deprotonation, ligand exchange, coordination number change', checked: false },
          { text: 'Deprotonation ≠ ligand exchange: base removes H⁺ from water ligand; only excess NH₃ causes true exchange', checked: false },
          { text: 'Fe²⁺ (pale green) + OH⁻ → green precipitate; turns orange-brown in air (Fe²⁺ → Fe³⁺)', checked: false },
          { text: 'Fe³⁺ (yellow-brown) + 3OH⁻ → orange-brown precipitate; needs 3 mol base (3+ charge)', checked: false },
          { text: '[Co(H₂O)₆]²⁺ (pink) + 2OH⁻ → blue precipitate; excess NH₃ → yellow [Co(NH₃)₆]²⁺', checked: false },
          { text: '[Cu(H₂O)₆]²⁺ (pale blue) + 2OH⁻ → light blue precipitate; excess NH₃ → deep blue [Cu(NH₃)₄(H₂O)₂]²⁺', checked: false },
          { text: '[Cu(H₂O)₆]²⁺ + 4Cl⁻ → [CuCl₄]²⁻ yellow; [Co(H₂O)₆]²⁺ + 4Cl⁻ → [CoCl₄]²⁻ blue (coord. number change)', checked: false },
          { text: 'Cr³⁺ (green) + excess NaOH → dissolves; excess NH₃ → purple [Cr(NH₃)₆]³⁺', checked: false },
          { text: 'Ni²⁺: excess NH₃ → deep blue [Ni(NH₃)₆]²⁺. Zn²⁺: amphoteric (excess NaOH dissolves) and excess NH₃ → colourless [Zn(NH₃)₄]²⁺', checked: false },
          { text: 'Fe³⁺ + SCN⁻ → blood-red [Fe(SCN)]²⁺ — qualitative test; reversible equilibrium', checked: false },
          { text: 'Al³⁺: white precipitate with NaOH (amphoteric, dissolves in excess); white precipitate with NH₃ (does NOT dissolve in excess — no Al ammine complex)', checked: false },
          { text: '3+ ions + Na₂CO₃ → metal hydroxide ppt + CO₂ gas; 2+ ions + Na₂CO₃ → metal carbonate ppt, no gas', checked: false },
          { text: 'K_stab: larger value = more stable complex; chelate effect is entropic — bidentate > monodentate at same number of donor atoms', checked: false },
          { text: 'EDTA (hexadentate) forms most stable complexes (log K ≈ 18–25); used in chelation therapy and analytical chemistry', checked: false }
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
        text: 'Understand: Four reaction types — redox (OS change), deprotonation (H⁺ removed from H₂O ligand), ligand exchange (excess NH₃ replaces ligands), coordination number change (Cl⁻ forces 6→4). Apply: Predict the product and colour when Cr³⁺ is treated with excess NaOH vs excess NH₃. Analyse: Why do Cr and Zn dissolve in excess NaOH but Fe and Co do not? Evaluate: Why is the Fe³⁺ + SCN⁻ blood-red test highly sensitive even at low Fe³⁺ concentrations?'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'summary-substitution',
      data: {
        text: 'Transition metal complexes react via 4 types: (1) redox — oxidation state changes (e.g. Fe²⁺ → Fe³⁺ in air); (2) deprotonation — OH⁻/NH₃ removes H⁺ from H₂O ligands → precipitate forms; (3) ligand exchange — excess NH₃ replaces all ligands → complex dissolves; (4) coordination number change — large Cl⁻ forces 6→4 change. NaOH reactions give precipitates except Cr and Zn (amphoteric, dissolve in excess). Excess NH₃ re-dissolves Co (yellow), Cu (deep blue), Cr (purple), Ni (deep blue), Zn (colourless). Fe³⁺ + SCN⁻ → blood-red [Fe(SCN)]²⁺ (qualitative test).'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Why Complexes Are Colored",
        text: "Colored complex ions contain transition metals with partially filled d-orbitals (e.g., Cu\u00b2\u207a, Fe\u00b2\u207a/Fe\u00b3\u207a, Cr\u00b3\u207a). Ligand approach splits d-orbitals into two energy levels (\u0394). Electrons absorb visible light matching the energy gap (\u0394E = h\u03bd = \u03bb/c), promoting electrons from lower to higher d-orbital. Transmitted light = opposite color."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-four-types',
        prompt: 'Name the 4 types of transition metal complex reactions. Give one example of each.'
      },
      {
        id: 'cue-2',
        blockId: 'callout-deprot-vs-exchange',
        prompt: 'Why is adding NaOH to [Fe(H₂O)₆]²⁺ classified as deprotonation rather than ligand exchange?'
      },
      {
        id: 'cue-3',
        blockId: 'h-iron-reactions',
        prompt: 'Describe what happens when NaOH is added to Fe²⁺ solution, and explain the colour change on exposure to air.'
      },
      {
        id: 'cue-4',
        blockId: 'h-chromium-reactions',
        prompt: 'Describe the colour sequence for Cr³⁺ on adding NaOH, then excess NaOH, then excess NH₃.'
      },
      {
        id: 'cue-5',
        blockId: 'h-summary-tables',
        prompt: 'Which metal hydroxide precipitates dissolve in excess NaOH? Which dissolve in excess NH₃ but not excess NaOH?'
      },
      {
        id: 'cue-6',
        blockId: 'h-iron-thiocyanate',
        prompt: 'What is the qualitative test for Fe³⁺? State the colour change and the complex formed.'
      }
    ],
    summaryText: 'Four reaction types: redox (OS change), deprotonation (H⁺ removed from H₂O), ligand exchange (excess NH₃), coordination number change (Cl⁻, 6→4). NaOH reactions: Fe²⁺ → green ppt, Fe³⁺ → orange-brown ppt, Co²⁺ → blue ppt, Cu²⁺ → pale blue ppt, Cr³⁺ → green ppt (dissolves in excess), Ni²⁺ → green ppt, Zn²⁺ → white ppt (dissolves in excess). Excess NH₃: Co²⁺ → yellow, Cu²⁺ → deep blue, Cr³⁺ → purple, Ni²⁺ → deep blue, Zn²⁺ → colourless. Fe³⁺ + SCN⁻ → blood red (qualitative test).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Ligand Substitution and Complex Stability',
      detail: 'Ligand substitution reactions in transition metal complexes are common laboratory procedures used to demonstrate complex formation, colour changes, and complex stability relative to ligand field strength.',
      year: '2023',
      source: 'A-Level Practical Chemistry',
      tags: ['substitution', 'colour-change', 'qualitative-test']
    }
  ]
};
