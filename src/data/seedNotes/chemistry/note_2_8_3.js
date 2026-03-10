/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 3
 * "Group 1 & 2 Trends and Reactions — Period 3 Chemical Reactions"
 * Source: Pearson Edexcel IAL Chemistry — Sections 8B.1, 8B.2; chemguide Period 3 reactions
 */
export const note_chemistry_2_8_3 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand the trends in ionisation energy and reactivity for Groups 1 and 2; describe and explain the reactions of all Period 3 elements (Na → Ar) with water, oxygen and chlorine.' },
            terms: []
        },
        // ── Group 1/2 General Trends ─────────────────────────────────────────────
        {
            id: 'h-trends',
            type: 'heading',
            data: { text: 'Trends Down Groups 1 and 2', level: 2 },
            terms: []
        },
        {
            id: 'list-trends',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Atomic radius increases</strong> down the group — extra electron shells are added.',
                    '<strong>First ionisation energy decreases</strong> — outer electrons are further from the nucleus and experience greater shielding; these two effects outweigh the increased nuclear charge.',
                    '<strong>Reactivity increases</strong> — these metals react by losing outer electrons; it becomes progressively easier to lose electrons down the group.'
                ]
            },
            terms: ['Ionisation energy', 'Shielding effect']
        },
        {
            id: 'table-g1g2-reactions',
            type: 'comparisonTable',
            data: {
                caption: 'General reactions of Group 1 and Group 2 metals',
                headers: ['Reagent', 'Group 1 (M)', 'Group 2 (M)', 'Observations'],
                rows: [
                    ['O₂', '4M + O₂ → 2M₂O', '2M + O₂ → 2MO', 'Metals tarnish/combust forming white oxide solids.'],
                    ['Cl₂', '2M + Cl₂ → 2MCl', 'M + Cl₂ → MCl₂', 'Vigorous combustion in Cl₂; white metal chloride salts.'],
                    ['H₂O (l)', '2M + 2H₂O → 2MOH + H₂', 'M + 2H₂O → M(OH)₂ + H₂', 'Fizzing, metal dissolves, alkaline solution. Vigour increases down group (Na melts into ball; K ignites in lilac flame).']
                ]
            },
            terms: []
        },
        {
            id: 'callout-mg-exception',
            type: 'callout',
            data: {
                style: 'warning',
                title: '⚠ Exception: Magnesium and Water',
                text: '<strong>Cold water:</strong> Very slow reaction — a thin protective layer of Mg(OH)₂ forms and inhibits further reaction.<br/><br/><strong>Steam:</strong> Mg burns vigorously with a white flame:<br/>Mg(s) + H₂O(g) → MgO(s) + H₂(g)<br/><br/>Note: hydroxides form with liquid water only; the oxide forms with steam.'
            },
            terms: []
        },
        // ── REACTIONS WITH WATER ─────────────────────────────────────────────────
        {
            id: 'h-water',
            type: 'heading',
            data: { text: 'Reactions of Period 3 Elements with Water', level: 2 },
            terms: []
        },
        {
            id: 'table-water',
            type: 'comparisonTable',
            data: {
                caption: 'Period 3 elements reacting with water (cold or steam)',
                headers: ['Element', 'Equation', 'Conditions', 'Key observations'],
                rows: [
                    ['Na', '2Na + 2H₂O → 2NaOH + H₂', 'Cold water', 'Very exothermic; vigorous fizzing (H₂); metal melts into a floating ball; colourless alkaline solution formed.'],
                    ['Mg', 'Mg + 2H₂O → Mg(OH)₂ + H₂', 'Cold water (very slow)', 'Tiny bubbles of H₂ cling to surface; thin Mg(OH)₂ layer stops the reaction.'],
                    ['Mg', 'Mg + H₂O → MgO + H₂', 'Steam (vigorous)', 'White flame; white MgO solid produced.'],
                    ['Al', '2Al + 3H₂O → Al₂O₃ + 3H₂', 'Steam (slow)', 'Very slow — existing Al₂O₃ protective layer inhibits reaction; more oxide builds up during the reaction.'],
                    ['Si', 'Si + 2H₂O → SiO₂ + 2H₂', 'Steam at red heat', 'Grey lump silicon unreactive at room temp; reactive powdered forms can react with cold water.'],
                    ['P', '— No reaction —', '—', 'Neither white nor red phosphorus reacts with water.'],
                    ['S', '— No reaction —', '—', 'Sulphur does not react with water.'],
                    ['Cl₂', 'Cl₂ + H₂O ⇌ HCl + HOCl', 'Room temp', 'Reversible reaction; green solution forms. HOCl = chloric(I) acid (hypochlorous acid). Sunlight decomposes HOCl: 2Cl₂ + 2H₂O → 4HCl + O₂.'],
                    ['Ar', '— No reaction —', '—', 'Noble gas; no reaction with water.']
                ]
            },
            terms: []
        },
        {
            id: 'callout-cl-water',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Chlorine Dissolving in Water — Important Detail',
                text: '• Cl₂ dissolves in water to form a green solution.<br/>• A <strong>reversible reaction</strong> forms a mixture of two acids:<br/>&nbsp;&nbsp;&nbsp;Cl₂(g) + H₂O(l) ⇌ HCl(aq) + HOCl(aq)<br/>• HOCl is chloric(I) acid (also written HClO) — the active bleaching agent.<br/>• In sunlight, HOCl slowly decomposes further:<br/>&nbsp;&nbsp;&nbsp;2Cl₂ + 2H₂O → 4HCl + O₂(g)<br/>• This is the basis of household bleach and water chlorination.'
            },
            terms: ['Chloric(I) acid', 'Hypochlorous acid']
        },
        // ── REACTIONS WITH OXYGEN ─────────────────────────────────────────────────
        {
            id: 'h-oxygen',
            type: 'heading',
            data: { text: 'Reactions of Period 3 Elements with Oxygen', level: 2 },
            terms: []
        },
        {
            id: 'table-oxygen',
            type: 'comparisonTable',
            data: {
                caption: 'Period 3 elements reacting with oxygen',
                headers: ['Element', 'Equation(s)', 'Conditions', 'Key observations'],
                rows: [
                    ['Na', '4Na + O₂ → 2Na₂O\n2Na + O₂ → Na₂O₂', 'Burns in O₂', 'Orange flame. Mixture of sodium oxide (Na₂O) AND sodium peroxide (Na₂O₂) formed as a white solid.'],
                    ['Mg', '2Mg + O₂ → 2MgO', 'Burns readily', 'Intense, blinding white flame; white MgO solid. Also reacts with N₂ in air forming Mg₃N₂.'],
                    ['Al', '4Al + 3O₂ → 2Al₂O₃', 'Burns if powdered; solid inhibited by oxide layer', 'White sparkles when Al powder sprinkled into flame; white Al₂O₃ formed.'],
                    ['Si', 'Si + O₂ → SiO₂', 'Heated strongly', 'Burns when heated sufficiently; SiO₂ formed. Powdered amorphous Si can ignite spontaneously in air.'],
                    ['P', 'P₄ + 3O₂ → P₄O₆\nP₄ + 5O₂ → P₄O₁₀', 'Spontaneous in air', 'White phosphorus catches fire spontaneously. White smoke (mixture of oxides). P₄O₆ in limited O₂; P₄O₁₀ in excess O₂.'],
                    ['S', 'S + O₂ → SO₂', 'Gentle heating', 'Pale blue flame; colourless SO₂ gas produced (choking smell).'],
                    ['Cl', '— No direct reaction —', '—', 'Chlorine has several oxides (Cl₂O, ClO₂ etc.) but CANNOT be made by direct combination of Cl₂ and O₂.'],
                    ['Ar', '— No reaction —', '—', 'Noble gas; does not react.']
                ]
            },
            terms: []
        },
        {
            id: 'callout-na-oxygen',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Sodium Burns in Oxygen — Two Products',
                text: '• Na burns with an <strong>orange flame</strong> in oxygen.<br/>• Two products form simultaneously:<br/>&nbsp;&nbsp;&nbsp;<strong>Sodium oxide:</strong> 4Na + O₂ → 2Na₂O (oxide, O²⁻ ion)<br/>&nbsp;&nbsp;&nbsp;<strong>Sodium peroxide:</strong> 2Na + O₂ → Na₂O₂ (peroxide, O₂²⁻ ion)<br/>• The exact ratio of Na₂O to Na₂O₂ in the product depends on conditions.<br/>• O²⁻ has oxygen in oxidation state −2; O₂²⁻ has oxygen in oxidation state −1.'
            },
            terms: ['Sodium oxide', 'Sodium peroxide']
        },
        {
            id: 'callout-p-oxygen',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Phosphorus Burns in Oxygen — Two Possible Oxides',
                text: '• White phosphorus <strong>catches fire spontaneously</strong> in air (it is stored under water).<br/>• <strong>Limited oxygen:</strong> P₄ + 3O₂ → P₄O₆ (phosphorus(III) oxide)<br/>• <strong>Excess oxygen:</strong> P₄ + 5O₂ → P₄O₁₀ (phosphorus(V) oxide)<br/>• Both produce <strong>white smoke</strong> (white clouds of solid oxide).<br/>• Note: use P₄ (not P₂) as the formula for white phosphorus molecules.'
            },
            terms: ['Phosphorus(III) oxide', 'Phosphorus(V) oxide']
        },
        // ── REACTIONS WITH CHLORINE ───────────────────────────────────────────────
        {
            id: 'h-chlorine',
            type: 'heading',
            data: { text: 'Reactions of Period 3 Elements with Chlorine', level: 2 },
            terms: []
        },
        {
            id: 'table-chlorine',
            type: 'comparisonTable',
            data: {
                caption: 'Period 3 elements reacting with chlorine',
                headers: ['Element', 'Equation', 'Conditions', 'Key observations'],
                rows: [
                    ['Na', '2Na + Cl₂ → 2NaCl', 'Burns in Cl₂', 'Bright orange flame; white solid NaCl deposited.'],
                    ['Mg', 'Mg + Cl₂ → MgCl₂', 'Burns in Cl₂', 'Intense white flame; white solid MgCl₂ formed.'],
                    ['Al', '2Al + 3Cl₂ → 2AlCl₃', 'Dry Cl₂ over heated Al foil', 'Very pale yellow AlCl₃ formed; sublimes and redeposits further down the tube. (Al₂Cl₆ dimers exist in vapour phase.)'],
                    ['Si', 'Si + 2Cl₂ → SiCl₄', 'Heated Si powder in Cl₂', 'Colourless liquid SiCl₄ vaporises and condenses further along apparatus.'],
                    ['P', 'P₄ + 6Cl₂ → 4PCl₃\nP₄ + 10Cl₂ → 4PCl₅', 'Spontaneous in Cl₂', 'PCl₃: colourless fuming liquid (limited Cl₂). PCl₅: off-white/yellow solid (excess Cl₂).'],
                    ['S', '2S + Cl₂ → S₂Cl₂', 'Heated S in Cl₂ stream', 'Orange, evil-smelling liquid disulphur dichloride formed.'],
                    ['Cl', '— Not applicable —', '—', 'Cannot react with itself.'],
                    ['Ar', '— No reaction —', '—', 'Noble gas; does not react.']
                ]
            },
            terms: []
        },
        {
            id: 'callout-alcl3',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'AlCl₃ — Sublimation and Dimer Structure',
                text: '• AlCl₃ does not melt in the conventional sense — it <strong>sublimes</strong> (solid → vapour directly).<br/>• In the vapour near the sublimation temperature, it exists as <strong>Al₂Cl₆ dimers</strong> — two AlCl₃ units linked by dative (coordinate) bonds.<br/>• The solid and the dimers are distinct forms; in equations at A-level, AlCl₃ is used unless asked specifically about the dimer.'
            },
            terms: ['Sublimation', 'Dimer']
        },
        {
            id: 'callout-p-chlorine',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Phosphorus and Chlorine — Two Products',
                text: '• White phosphorus <strong>burns spontaneously</strong> in chlorine gas.<br/>• <strong>Limited Cl₂:</strong> P₄ + 6Cl₂ → 4PCl₃ (phosphorus trichloride — colourless fuming liquid)<br/>• <strong>Excess Cl₂:</strong> P₄ + 10Cl₂ → 4PCl₅ (phosphorus pentachloride — off-white solid)<br/>• The product mixture depends on the Cl₂:P₄ ratio available.'
            },
            terms: ['Phosphorus trichloride', 'Phosphorus pentachloride']
        },
        // ── Overview SVG ──────────────────────────────────────────────────────────
        {
            id: 'svg-period3-rxn',
            type: 'svg',
            data: {
                caption: 'Period 3 reactivity overview: reactions with water, oxygen and chlorine. Green = vigorous/spontaneous; amber = reacts under conditions; grey = no reaction.',
                svg: `<svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <text x="280" y="18" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">Period 3 Chemical Reactions Overview</text>
  <!-- Column headers -->
  <rect x="0" y="25" width="70" height="28" fill="#1e40af" rx="3"/>
  <text x="35" y="44" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Element</text>
  <rect x="72" y="25" width="156" height="28" fill="#1e40af" rx="3"/>
  <text x="150" y="44" text-anchor="middle" fill="white" font-weight="bold" font-size="11">+ H₂O (water)</text>
  <rect x="230" y="25" width="156" height="28" fill="#1e40af" rx="3"/>
  <text x="308" y="44" text-anchor="middle" fill="white" font-weight="bold" font-size="11">+ O₂ (oxygen)</text>
  <rect x="388" y="25" width="168" height="28" fill="#1e40af" rx="3"/>
  <text x="472" y="44" text-anchor="middle" fill="white" font-weight="bold" font-size="11">+ Cl₂ (chlorine)</text>
  <!-- Row data: y starts at 55, row height 30 -->
  <!-- Na row -->
  <rect x="0" y="55" width="70" height="30" fill="#dbeafe" rx="2"/>
  <text x="35" y="74" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="12">Na</text>
  <rect x="72" y="55" width="156" height="30" fill="#16a34a" rx="2"/>
  <text x="150" y="74" text-anchor="middle" fill="white" font-size="10">✓ Vigorous: NaOH + H₂</text>
  <rect x="230" y="55" width="156" height="30" fill="#16a34a" rx="2"/>
  <text x="308" y="74" text-anchor="middle" fill="white" font-size="10">✓ Burns: Na₂O + Na₂O₂</text>
  <rect x="388" y="55" width="168" height="30" fill="#16a34a" rx="2"/>
  <text x="472" y="74" text-anchor="middle" fill="white" font-size="10">✓ Burns: NaCl</text>
  <!-- Mg row -->
  <rect x="0" y="87" width="70" height="30" fill="#dbeafe" rx="2"/>
  <text x="35" y="106" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="12">Mg</text>
  <rect x="72" y="87" width="156" height="30" fill="#f59e0b" rx="2"/>
  <text x="150" y="106" text-anchor="middle" fill="white" font-size="10">~ Cold slow; steam: MgO</text>
  <rect x="230" y="87" width="156" height="30" fill="#16a34a" rx="2"/>
  <text x="308" y="106" text-anchor="middle" fill="white" font-size="10">✓ Burns: MgO</text>
  <rect x="388" y="87" width="168" height="30" fill="#16a34a" rx="2"/>
  <text x="472" y="106" text-anchor="middle" fill="white" font-size="10">✓ Burns: MgCl₂</text>
  <!-- Al row -->
  <rect x="0" y="119" width="70" height="30" fill="#dbeafe" rx="2"/>
  <text x="35" y="138" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="12">Al</text>
  <rect x="72" y="119" width="156" height="30" fill="#f59e0b" rx="2"/>
  <text x="150" y="138" text-anchor="middle" fill="white" font-size="10">~ Steam only: Al₂O₃ + H₂</text>
  <rect x="230" y="119" width="156" height="30" fill="#f59e0b" rx="2"/>
  <text x="308" y="138" text-anchor="middle" fill="white" font-size="10">~ Powder: Al₂O₃</text>
  <rect x="388" y="119" width="168" height="30" fill="#f59e0b" rx="2"/>
  <text x="472" y="138" text-anchor="middle" fill="white" font-size="10">~ Dry Cl₂ heat: AlCl₃</text>
  <!-- Si row -->
  <rect x="0" y="151" width="70" height="30" fill="#dbeafe" rx="2"/>
  <text x="35" y="170" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="12">Si</text>
  <rect x="72" y="151" width="156" height="30" fill="#f59e0b" rx="2"/>
  <text x="150" y="170" text-anchor="middle" fill="white" font-size="10">~ Red heat + steam: SiO₂</text>
  <rect x="230" y="151" width="156" height="30" fill="#f59e0b" rx="2"/>
  <text x="308" y="170" text-anchor="middle" fill="white" font-size="10">~ Heated: SiO₂</text>
  <rect x="388" y="151" width="168" height="30" fill="#f59e0b" rx="2"/>
  <text x="472" y="170" text-anchor="middle" fill="white" font-size="10">~ Heated: SiCl₄</text>
  <!-- P row -->
  <rect x="0" y="183" width="70" height="30" fill="#f0fdf4" rx="2"/>
  <text x="35" y="202" text-anchor="middle" font-weight="bold" fill="#15803d" font-size="12">P</text>
  <rect x="72" y="183" width="156" height="30" fill="#e2e8f0" rx="2"/>
  <text x="150" y="202" text-anchor="middle" fill="#64748b" font-size="10">✗ No reaction</text>
  <rect x="230" y="183" width="156" height="30" fill="#16a34a" rx="2"/>
  <text x="308" y="202" text-anchor="middle" fill="white" font-size="10">✓ Spontaneous: P₄O₆/P₄O₁₀</text>
  <rect x="388" y="183" width="168" height="30" fill="#16a34a" rx="2"/>
  <text x="472" y="202" text-anchor="middle" fill="white" font-size="10">✓ Spontaneous: PCl₃/PCl₅</text>
  <!-- S row -->
  <rect x="0" y="215" width="70" height="30" fill="#f0fdf4" rx="2"/>
  <text x="35" y="234" text-anchor="middle" font-weight="bold" fill="#15803d" font-size="12">S</text>
  <rect x="72" y="215" width="156" height="30" fill="#e2e8f0" rx="2"/>
  <text x="150" y="234" text-anchor="middle" fill="#64748b" font-size="10">✗ No reaction</text>
  <rect x="230" y="215" width="156" height="30" fill="#16a34a" rx="2"/>
  <text x="308" y="234" text-anchor="middle" fill="white" font-size="10">✓ Gentle heat: SO₂</text>
  <rect x="388" y="215" width="168" height="30" fill="#f59e0b" rx="2"/>
  <text x="472" y="234" text-anchor="middle" fill="white" font-size="10">~ Heated: S₂Cl₂</text>
  <!-- Cl row -->
  <rect x="0" y="247" width="70" height="30" fill="#f0fdf4" rx="2"/>
  <text x="35" y="266" text-anchor="middle" font-weight="bold" fill="#15803d" font-size="12">Cl</text>
  <rect x="72" y="247" width="156" height="30" fill="#3b82f6" rx="2"/>
  <text x="150" y="266" text-anchor="middle" fill="white" font-size="10">⇌ Dissolves: HCl + HOCl</text>
  <rect x="230" y="247" width="156" height="30" fill="#e2e8f0" rx="2"/>
  <text x="308" y="266" text-anchor="middle" fill="#64748b" font-size="10">✗ No direct reaction</text>
  <rect x="388" y="247" width="168" height="30" fill="#e2e8f0" rx="2"/>
  <text x="472" y="266" text-anchor="middle" fill="#64748b" font-size="10">— (is Cl itself)</text>
  <!-- Ar row -->
  <rect x="0" y="279" width="70" height="28" fill="#f1f5f9" rx="2"/>
  <text x="35" y="297" text-anchor="middle" font-weight="bold" fill="#94a3b8" font-size="12">Ar</text>
  <rect x="72" y="279" width="156" height="28" fill="#e2e8f0" rx="2"/>
  <text x="150" y="297" text-anchor="middle" fill="#94a3b8" font-size="10">✗ No reaction</text>
  <rect x="230" y="279" width="156" height="28" fill="#e2e8f0" rx="2"/>
  <text x="308" y="297" text-anchor="middle" fill="#94a3b8" font-size="10">✗ No reaction</text>
  <rect x="388" y="279" width="168" height="28" fill="#e2e8f0" rx="2"/>
  <text x="472" y="297" text-anchor="middle" fill="#94a3b8" font-size="10">✗ No reaction</text>
</svg>`
            },
            terms: []
        },
        // ── Checklist ─────────────────────────────────────────────────────────────
        {
            id: 'checklist',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Explain why reactivity increases down Groups 1 and 2', checked: false },
                    { text: 'Write and balance equations for Na + water, Mg + cold water, Mg + steam', checked: false },
                    { text: 'State that Na burns in O₂ giving both Na₂O and Na₂O₂', checked: false },
                    { text: 'Explain why Al is slow to react with steam or O₂ (protective oxide layer)', checked: false },
                    { text: 'State that P₄ and white P ignite spontaneously in both O₂ and Cl₂', checked: false },
                    { text: 'Distinguish between P₄O₆ (limited O₂) and P₄O₁₀ (excess O₂)', checked: false },
                    { text: 'Describe why Cl₂ dissolves in water to give HCl + HOCl (reversible)', checked: false },
                    { text: 'Match each Period 3 element with its product when reacting with Cl₂', checked: false }
                ]
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Reactivity down Groups 1 and 2 increases as IE₁ decreases (larger radius, greater shielding). With water: Na reacts vigorously (NaOH + H₂); Mg very slowly (cold) but burns in steam (MgO); Cl₂ gives HCl + HOCl; P and S do not react. With oxygen: Na → Na₂O + Na₂O₂; Mg → MgO (white flame); P₄ spontaneously → P₄O₆/P₄O₁₀; S → SO₂ (pale blue flame); Cl₂ and Ar do not react directly. With Cl₂: Na → NaCl; Mg → MgCl₂; Al → AlCl₃ (sublimes); Si → SiCl₄; P → PCl₃/PCl₅; S → S₂Cl₂; Ar no reaction.' }
            ,
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-trends', prompt: 'Explain why reactivity increases down Group 1.' },
            { id: 'c2', blockId: 'callout-mg-exception', prompt: 'Why does magnesium produce MgO when burned in steam, but Mg(OH)₂ with cold water?' },
            { id: 'c3', blockId: 'table-water', prompt: 'Write a balanced equation for sodium reacting with cold water and describe the observations.' },
            { id: 'c4', blockId: 'callout-cl-water', prompt: 'What two products form when chlorine dissolves in water? Which is responsible for bleaching?' },
            { id: 'c5', blockId: 'callout-na-oxygen', prompt: 'Sodium burns in oxygen to produce a mixture. Name both products and explain how their oxidation states of oxygen differ.' },
            { id: 'c6', blockId: 'callout-p-oxygen', prompt: 'White phosphorus burns in oxygen. State the two possible products and the conditions that favour each.' },
            { id: 'c7', blockId: 'table-chlorine', prompt: 'Explain why aluminium reacts slowly with Cl₂ under normal conditions and what happens when heated in dry Cl₂.' },
            { id: 'c8', blockId: 'callout-p-chlorine', prompt: 'Write the equation for white phosphorus reacting with excess chlorine.' }
        ],
        summaryText: 'Reactivity of Groups 1/2 increases down the group (lower IE₁). Period 3 reactions: Na vigorous with cold water → NaOH + H₂; Mg slow cold, vigorous steam → MgO + H₂; Cl₂ dissolves reversibly → HCl + HOCl; P and S no reaction with water. In O₂: Na → Na₂O + Na₂O₂; Mg → MgO; P₄ spontaneous → P₄O₆ (limited) or P₄O₁₀ (excess); S → SO₂; Cl₂ no direct reaction. In Cl₂: Na → NaCl; Mg → MgCl₂; Al → AlCl₃ (sublimes); Si → SiCl₄; P → PCl₃ or PCl₅; S → S₂Cl₂.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_8_3;
