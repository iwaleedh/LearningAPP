/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 3
 * "Group 1 — Physical Properties, Reactions, Compounds & Flame Tests"
 * Source: Pearson Edexcel IAL Chemistry — Section 8B.1, 8B.2;
 *         chemguide.co.uk/inorganic/group1 (properties, reacth2o, reacto2, compounds, flametests)
 */
export const note_chemistry_2_8_3 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Describe and explain trends in atomic and physical properties of Group 1 (Li → Cs); write equations for reactions with water, oxygen and chlorine; describe the thermal decomposition of Group 1 nitrates, carbonates and hydrogencarbonates; explain solubility trends; perform flame tests and identify ions from flame colours.' },
            terms: []
        },

        // ── GROUP 1 OVERVIEW ──────────────────────────────────────────────────────
        {
            id: 'h-overview',
            type: 'heading',
            data: { text: 'Group 1 — The Alkali Metals', level: 2 },
            terms: []
        },
        {
            id: 'list-overview',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Elements:</strong> Lithium (Li), Sodium (Na), Potassium (K), Rubidium (Rb), Caesium (Cs), Francium (Fr).',
                    'All have <strong>one outer electron</strong> in an s-orbital — electron configuration ends in …s¹.',
                    'All form <strong>singly-charged positive ions</strong> (M⁺) by losing one electron.',
                    'All are <strong>very reactive metals</strong> stored in oil (Li, Na, K) or sealed glass under inert gas (Rb, Cs) to prevent air oxidation.',
                    'Reactivity <strong>increases down the group</strong> as it becomes progressively easier to lose the outer electron.',
                    '<strong>Lithium is unique</strong> in several ways: it also reacts with N₂ to form Li₃N, its compounds often resemble Group 2 (diagonal relationship with Mg), and it forms only the simple oxide Li₂O (not the peroxide or superoxide).'
                ]
            },
            terms: ['Alkali metals', 'Group 1']
        },

        // ── PHYSICAL PROPERTIES ───────────────────────────────────────────────────
        {
            id: 'h-phys',
            type: 'heading',
            data: { text: 'Physical Properties of Group 1 Metals', level: 2 },
            terms: []
        },
        {
            id: 'table-phys',
            type: 'comparisonTable',
            data: {
                caption: 'Atomic and physical properties of Group 1 metals (↓ = decreases down group, ↑ = increases)',
                headers: ['Element', 'At. radius / pm', 'IE₁ / kJ mol⁻¹', 'Electronegativity', 'Melting pt / °C', 'Density / g cm⁻³'],
                rows: [
                    ['Li', '152', '519', '1.0', '181', '0.53'],
                    ['Na', '186', '494', '0.9', '98', '0.97'],
                    ['K',  '227', '418', '0.8', '63', '0.86'],
                    ['Rb', '248', '402', '0.8', '39', '1.53'],
                    ['Cs', '265', '376', '0.7', '29', '1.87'],
                    ['Trend ↓', '↑ increases', '↓ decreases', '↓ decreases', '↓ decreases', '↑ generally increases']
                ]
            },
            terms: ['Atomic radius', 'First ionisation energy', 'Electronegativity']
        },
        {
            id: 'list-phys-trends',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Atomic radius increases</strong> down the group: each successive element has an extra full electron shell, so electrons occupy progressively larger orbitals. Despite the increased nuclear charge, the net pull on the outer electron stays at 1+ (extra protons are completely screened by extra inner electrons).',
                    '<strong>IE₁ decreases</strong>: the outer electron is further from the nucleus and more effectively shielded → easier to remove → lower ionisation energy.',
                    '<strong>Electronegativity decreases</strong>: as the atom gets bigger, a bonding pair is further from the nucleus and less strongly attracted to it. Group 1 metals are the least electronegative elements and form essentially fully ionic bonds.',
                    '<strong>Melting and boiling points decrease</strong>: metallic bonding weakens as atomic radius increases — the nuclei are further from the delocalised electrons, so the metallic lattice is more easily disrupted.',
                    '<strong>Density:</strong> Li, Na and K are less dense than water (< 1 g cm⁻³) — they float on water. Rb and Cs are denser and sink. The trend is generally increasing, with a small anomaly at K due to opposing effects of atomic volume and atomic mass.'
                ]
            },
            terms: []
        },
        {
            id: 'svg-g1-trends',
            type: 'svg',
            data: {
                caption: 'Group 1 trends: IE₁ and atomic radius change as you go down the group.',
                svg: `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <text x="280" y="16" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">Group 1 Periodic Trends</text>
  <!-- IE₁ panel -->
  <rect x="0" y="22" width="268" height="210" rx="6" fill="#1c3a64" stroke="#93c5fd" stroke-width="1"/>
  <text x="134" y="40" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="12">First Ionisation Energy</text>
  <text x="134" y="53" text-anchor="middle" fill="#64748b" font-size="10">decreases down Group 1</text>
  <!-- IE₁ bar chart -->
  <!-- Li: 519, Na: 494, K: 418, Rb: 402, Cs: 376 — max 519, scale to 130px -->
  <rect x="25"  y="${20+22+(130 - Math.round(519*130/519))}" width="28" height="${Math.round(519*130/519)}" fill="#3b82f6" rx="2"/>
  <text x="39"  y="210" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">Li</text>
  <text x="39"  y="75"  text-anchor="middle" fill="#1e40af" font-size="9">519</text>
  <rect x="73"  y="${20+22+(130 - Math.round(494*130/519))}" width="28" height="${Math.round(494*130/519)}" fill="#3b82f6" rx="2"/>
  <text x="87"  y="210" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">Na</text>
  <text x="87"  y="81"  text-anchor="middle" fill="#1e40af" font-size="9">494</text>
  <rect x="121" y="${20+22+(130 - Math.round(418*130/519))}" width="28" height="${Math.round(418*130/519)}" fill="#3b82f6" rx="2"/>
  <text x="135" y="210" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">K</text>
  <text x="135" y="101" text-anchor="middle" fill="#1e40af" font-size="9">418</text>
  <rect x="169" y="${20+22+(130 - Math.round(402*130/519))}" width="28" height="${Math.round(402*130/519)}" fill="#3b82f6" rx="2"/>
  <text x="183" y="210" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">Rb</text>
  <text x="183" y="104" text-anchor="middle" fill="#1e40af" font-size="9">402</text>
  <rect x="217" y="${20+22+(130 - Math.round(376*130/519))}" width="28" height="${Math.round(376*130/519)}" fill="#3b82f6" rx="2"/>
  <text x="231" y="210" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">Cs</text>
  <text x="231" y="111" text-anchor="middle" fill="#1e40af" font-size="9">376</text>
  <text x="134" y="225" text-anchor="middle" fill="#64748b" font-size="9">kJ mol⁻¹</text>
  <!-- Atomic radius panel -->
  <rect x="290" y="22" width="268" height="210" rx="6" fill="#0a2e1a" stroke="#86efac" stroke-width="1"/>
  <text x="424" y="40" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="12">Atomic Radius (pm)</text>
  <text x="424" y="53" text-anchor="middle" fill="#64748b" font-size="10">increases down Group 1</text>
  <!-- Radii: Li=152, Na=186, K=227, Rb=248, Cs=265 — scale circles by value -->
  <circle cx="335" cy="150" r="${Math.round(152*28/265)}" fill="#22c55e" opacity="0.7"/>
  <text x="335" y="195" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="11">Li</text>
  <text x="335" y="208" text-anchor="middle" fill="#15803d" font-size="9">152 pm</text>
  <circle cx="380" cy="148" r="${Math.round(186*28/265)}" fill="#22c55e" opacity="0.7"/>
  <text x="380" y="195" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="11">Na</text>
  <text x="380" y="208" text-anchor="middle" fill="#15803d" font-size="9">186 pm</text>
  <circle cx="424" cy="145" r="${Math.round(227*28/265)}" fill="#22c55e" opacity="0.7"/>
  <text x="424" y="195" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="11">K</text>
  <text x="424" y="208" text-anchor="middle" fill="#15803d" font-size="9">227 pm</text>
  <circle cx="468" cy="143" r="${Math.round(248*28/265)}" fill="#22c55e" opacity="0.7"/>
  <text x="468" y="195" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="11">Rb</text>
  <text x="468" y="208" text-anchor="middle" fill="#15803d" font-size="9">248 pm</text>
  <circle cx="516" cy="141" r="${Math.round(265*28/265)}" fill="#22c55e" opacity="0.7"/>
  <text x="516" y="195" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="11">Cs</text>
  <text x="516" y="208" text-anchor="middle" fill="#15803d" font-size="9">265 pm</text>
</svg>`
            },
            terms: []
        },

        // ── REACTIONS WITH WATER ───────────────────────────────────────────────────
        {
            id: 'h-water',
            type: 'heading',
            data: { text: 'Reactions of Group 1 Metals with Water', level: 2 },
            terms: []
        },
        {
            id: 'eq-water-general',
            type: 'equation',
            data: {
                html: '2X(s) + 2H<sub>2</sub>O(l) → 2XOH(aq) + H<sub>2</sub>(g)',
                caption: 'General equation — X = any Group 1 metal. Products are always the metal hydroxide (alkaline solution) and hydrogen gas.'
            },
            terms: []
        },
        {
            id: 'list-water-obs',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Lithium (Li):</strong> Floats on the surface (density ~0.53 g cm⁻³). Fizzes gently, slowly dissolving as H₂ is released. Does not melt (high mp 181°C) and does not ignite. Colourless LiOH solution produced.',
                    '<strong>Sodium (Na):</strong> Floats, melts almost instantly into a silvery ball (mp 98°C; enough heat generated). Dashes around the surface pushed by H₂ bubbles. White trail of NaOH visible under it. If trapped at the side, H₂ may ignite with an <strong>orange flame</strong> (sodium contamination). Dissolves to give colourless NaOH(aq).',
                    '<strong>Potassium (K):</strong> Reacts faster than Na; enough heat evolved to <strong>ignite the hydrogen</strong>. Burns with a <strong>lilac (faintly blue-pink) flame</strong> — potassium contamination of the H₂ flame.',
                    '<strong>Rubidium (Rb):</strong> Denser than water — <strong>sinks</strong>. Reacts violently and immediately; material spits out of the container.',
                    '<strong>Caesium (Cs):</strong> <strong>Explodes</strong> on contact with water, possibly shattering the container. Very vigorous reaction.'
                ]
            },
            terms: []
        },
        {
            id: 'callout-water-reactivity',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Why Does Reactivity Increase Down Group 1?',
                text: '<strong>Enthalpy changes don\'t explain it</strong> — in fact Li releases the most heat (−222 kJ mol⁻¹): Na −184, K −196, Rb −195, Cs −203 kJ mol⁻¹. No clear pattern.<br/><br/><strong>The real explanation is activation energy:</strong> The two processes that require energy input are:<br/>• <em>Atomisation energy</em> (breaking the metallic bond) — decreases down the group.<br/>• <em>First ionisation energy</em> (ionising the gaseous atom) — decreases down the group.<br/><br/>The total energy needed to form M⁺(g): Li = 680, Na = 603, K = 508, Rb = 488, Cs = 455 kJ mol⁻¹ — a <strong>steady decrease</strong>.<br/><br/><strong>A-level exam answer:</strong> Reactivity increases because the first ionisation energy decreases down the group — the outer electron is further from the nucleus and better shielded, so it is lost more easily.'
            },
            terms: ['Atomisation energy', 'First ionisation energy', 'Activation energy']
        },

        // ── REACTIONS WITH OXYGEN ─────────────────────────────────────────────────
        {
            id: 'h-oxygen',
            type: 'heading',
            data: { text: 'Reactions of Group 1 Metals with Oxygen', level: 2 },
            terms: []
        },
        {
            id: 'list-storage',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'Li, Na and K are stored in <strong>oil</strong> to prevent oxidation. (Li floats on the oil but is coated enough for protection.)',
                    'Rb and Cs are stored in <strong>sealed glass tubes under vacuum or inert gas (argon)</strong> — so reactive they ignite on contact with air.'
                ]
            },
            terms: []
        },
        {
            id: 'callout-oxide-types',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Three Types of Oxide Formed Down Group 1',
                text: '<strong>Simple oxide X₂O</strong> (contains O²⁻): formed by Li (mainly); also Na in limited O₂.<br/><strong>Peroxide X₂O₂</strong> (contains O₂²⁻): formed by Na (mainly); also K in limited O₂.<br/><strong>Superoxide XO₂</strong> (contains O₂⁻): formed by K, Rb and Cs in excess O₂.<br/><br/>Why? The covalent O–O bond in the peroxide ion is weak. A <strong>small, high-charge-density</strong> cation like Li⁺ polarises the peroxide ion so strongly that it breaks apart → only the simple oxide is stable. As ion size increases down the group, the cation is less polarising, so progressively more complex oxides are stable.'
            },
            terms: ['Oxide ion', 'Peroxide ion', 'Superoxide ion', 'Charge density']
        },
        {
            id: 'table-oxygen-g1',
            type: 'comparisonTable',
            data: {
                caption: 'Group 1 reactions with oxygen — individual element details',
                headers: ['Element', 'Main product(s)', 'Equations', 'Observation'],
                rows: [
                    ['Li', 'Li₂O (simple oxide) + Li₃N (nitride)', '4Li + O₂ → 2Li₂O\n6Li + N₂ → 2Li₃N', 'Burns with strong red-tinged flame. Unique: also reacts with N₂ in air to give white lithium nitride.'],
                    ['Na', 'Na₂O + Na₂O₂ (mixture)', '4Na + O₂ → 2Na₂O\n2Na + O₂ → Na₂O₂', 'Small pieces glow orange; large pieces burn with strong orange flame. White solid mixture formed.'],
                    ['K',  'K₂O₂ + KO₂ (mixture)', '2K + O₂ → K₂O₂\nK + O₂ → KO₂', 'Small pieces melt and oxidise without visible flame; large pieces burn with lilac flame. Product is yellow/orange.'],
                    ['Rb', 'RbO₂ (superoxide)', 'Rb + O₂ → RbO₂', 'Catches fire immediately in air. Orange/yellow superoxide formed.'],
                    ['Cs', 'CsO₂ (superoxide)', 'Cs + O₂ → CsO₂', 'Catches fire immediately in air. Orange/yellow superoxide formed.']
                ]
            },
            terms: []
        },
        {
            id: 'svg-oxide-types',
            type: 'svg',
            data: {
                caption: 'Types of oxide formed by Group 1 metals — trend down the group from simple oxide → peroxide → superoxide.',
                svg: `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <text x="280" y="16" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">Group 1 Oxides — Types Formed</text>
  <!-- Arrow indicating down-group -->
  <line x1="28" y1="30" x2="28" y2="185" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr)"/>
  <defs><marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/></marker></defs>
  <text x="14" y="108" fill="#94a3b8" font-size="9" transform="rotate(-90,14,108)">Down group →</text>
  <!-- Li row -->
  <rect x="45" y="28" width="60" height="28" rx="4" fill="#1e3a8a"/>
  <text x="75" y="47" text-anchor="middle" fill="#1e40af" font-weight="bold">Li</text>
  <rect x="115" y="28" width="160" height="28" rx="4" fill="#3b82f6"/>
  <text x="195" y="47" text-anchor="middle" fill="#1e293b" font-size="10">Simple oxide Li₂O (O²⁻)</text>
  <rect x="285" y="28" width="270" height="28" rx="4" fill="#1e293b"/>
  <text x="420" y="47" text-anchor="middle" fill="#64748b" font-size="10">—</text>
  <!-- Na row -->
  <rect x="45" y="62" width="60" height="28" rx="4" fill="#1e3a8a"/>
  <text x="75" y="81" text-anchor="middle" fill="#1e40af" font-weight="bold">Na</text>
  <rect x="115" y="62" width="160" height="28" rx="4" fill="#3b82f6"/>
  <text x="195" y="81" text-anchor="middle" fill="#1e293b" font-size="10">Li₂O-type (limited O₂)</text>
  <rect x="285" y="62" width="120" height="28" rx="4" fill="#7c3aed"/>
  <text x="345" y="81" text-anchor="middle" fill="#1e293b" font-size="10">Peroxide Na₂O₂</text>
  <rect x="415" y="62" width="140" height="28" rx="4" fill="#1e293b"/>
  <text x="485" y="81" text-anchor="middle" fill="#64748b" font-size="10">—</text>
  <!-- K row -->
  <rect x="45" y="96" width="60" height="28" rx="4" fill="#1e3a8a"/>
  <text x="75" y="115" text-anchor="middle" fill="#1e40af" font-weight="bold">K</text>
  <rect x="115" y="96" width="160" height="28" rx="4" fill="#1e293b"/>
  <text x="195" y="115" text-anchor="middle" fill="#64748b" font-size="10">—</text>
  <rect x="285" y="96" width="120" height="28" rx="4" fill="#7c3aed"/>
  <text x="345" y="115" text-anchor="middle" fill="#1e293b" font-size="10">Peroxide K₂O₂</text>
  <rect x="415" y="96" width="140" height="28" rx="4" fill="#dc2626"/>
  <text x="485" y="115" text-anchor="middle" fill="#1e293b" font-size="10">Superoxide KO₂ (O₂⁻)</text>
  <!-- Rb/Cs row -->
  <rect x="45" y="130" width="60" height="28" rx="4" fill="#1e3a8a"/>
  <text x="75" y="149" text-anchor="middle" fill="#1e40af" font-weight="bold">Rb, Cs</text>
  <rect x="115" y="130" width="160" height="28" rx="4" fill="#1e293b"/>
  <text x="195" y="149" text-anchor="middle" fill="#64748b" font-size="10">—</text>
  <rect x="285" y="130" width="120" height="28" rx="4" fill="#1e293b"/>
  <text x="345" y="149" text-anchor="middle" fill="#64748b" font-size="10">—</text>
  <rect x="415" y="130" width="140" height="28" rx="4" fill="#dc2626"/>
  <text x="485" y="149" text-anchor="middle" fill="#1e293b" font-size="10">Superoxide XO₂</text>
  <!-- Legend -->
  <rect x="45" y="168" width="12" height="12" fill="#3b82f6" rx="2"/>
  <text x="62" y="179" fill="#1e40af" font-size="9">Simple oxide X₂O</text>
  <rect x="155" y="168" width="12" height="12" fill="#7c3aed" rx="2"/>
  <text x="172" y="179" fill="#7c3aed" font-size="9">Peroxide X₂O₂</text>
  <rect x="265" y="168" width="12" height="12" fill="#dc2626" rx="2"/>
  <text x="282" y="179" fill="#dc2626" font-size="9">Superoxide XO₂</text>
</svg>`
            },
            terms: []
        },
        {
            id: 'h-oxide-rxns',
            type: 'heading',
            data: { text: 'Reactions of the Oxides with Water and Acids', level: 3 },
            terms: []
        },
        {
            id: 'table-oxide-rxns',
            type: 'comparisonTable',
            data: {
                caption: 'How each type of Group 1 oxide reacts with water and dilute acid',
                headers: ['Oxide type', 'With water', 'With dilute HCl'],
                rows: [
                    ['Simple oxide X₂O', 'X₂O + H₂O → 2XOH\nAlkaline solution.', 'X₂O + 2HCl → 2XCl + H₂O'],
                    ['Peroxide X₂O₂', 'X₂O₂ + 2H₂O → 2XOH + H₂O₂\n(H₂O₂ decomposes if warm → H₂O + O₂; violent!)', 'X₂O₂ + 2HCl → 2XCl + H₂O₂\n(H₂O₂ may decompose → very exothermic)'],
                    ['Superoxide XO₂', '2XO₂ + 2H₂O → 2XOH + H₂O₂ + O₂\n(H₂O₂ decomposes if warm; very exothermic)', '2XO₂ + 2HCl → 2XCl + H₂O₂ + O₂\n(violent exothermic)']
                ]
            },
            terms: []
        },

        // ── REACTIONS WITH CHLORINE ───────────────────────────────────────────────
        {
            id: 'h-chlorine',
            type: 'heading',
            data: { text: 'Reactions of Group 1 Metals with Chlorine', level: 2 },
            terms: []
        },
        {
            id: 'list-chlorine',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'All Group 1 metals burn vigorously in chlorine with a flame (similar appearance to burning in oxygen).',
                    'The product in every case is the <strong>simple metal chloride XCl</strong> — no peroxide or superoxide complications.',
                    '<strong>General equation:</strong> 2X + Cl₂ → 2XCl',
                    'Example — sodium: 2Na + Cl₂ → 2NaCl — intense orange flame, white solid product.',
                    'White solid residue of the salt XCl forms in all cases.'
                ]
            },
            terms: []
        },

        // ── GROUP 1 COMPOUNDS ──────────────────────────────────────────────────────
        {
            id: 'h-compounds',
            type: 'heading',
            data: { text: 'Group 1 Compounds — Thermal Stability and Solubility', level: 2 },
            terms: []
        },
        {
            id: 'callout-g1-stability',
            type: 'callout',
            data: {
                style: 'key',
                title: 'General Rule: Group 1 Compounds are More Thermally Stable than Group 2',
                text: '• Group 1 ions carry only a <strong>+1 charge</strong> → lower charge density → less polarising effect on anions (CO₃²⁻, NO₃⁻, HCO₃⁻).<br/>• Less polarisation = harder to decompose → higher decomposition temperatures.<br/>• Stability <strong>increases down Group 1</strong> as ion size increases and charge density falls further.<br/>• Exception: <strong>Lithium behaves more like Group 2</strong> (small, high-charge-density Li⁺ polarises anions significantly).'
            },
            terms: ['Polarising power', 'Charge density', 'Thermal stability']
        },
        {
            id: 'h-nitrates',
            type: 'heading',
            data: { text: 'Thermal Decomposition of Nitrates', level: 3 },
            terms: []
        },
        {
            id: 'list-nitrates',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'Most metal nitrates decompose to the <strong>metal oxide + NO₂ + O₂</strong> on heating.',
                    '<strong>Lithium nitrate</strong> behaves like a Group 2 nitrate — decomposes fully to oxide:',
                    '   4LiNO₃(s) → 2Li₂O(s) + 4NO₂(g) + O₂(g)',
                    '<strong>Na, K, Rb, Cs nitrates</strong> only partially decompose at Bunsen temperatures — they produce the metal <em>nitrite</em> and oxygen (no brown NO₂ fumes):',
                    '   2XNO₃(s) → 2XNO₂(s) + O₂(g)',
                    'As you go down the group, decomposition becomes <em>more difficult</em> — higher temperature needed.'
                ]
            },
            terms: ['Nitrite', 'Nitrate']
        },
        {
            id: 'h-carbonates',
            type: 'heading',
            data: { text: 'Thermal Decomposition of Carbonates', level: 3 },
            terms: []
        },
        {
            id: 'list-carbonates',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'Normal pattern: metal carbonate → metal oxide + CO₂.',
                    '<strong>Lithium carbonate</strong> decomposes on strong heating: Li₂CO₃(s) → Li₂O(s) + CO₂(g)',
                    '<strong>Na₂CO₃, K₂CO₃, Rb₂CO₃, Cs₂CO₃</strong> — do <em>not</em> decompose at Bunsen temperatures; decomposition temperatures increase as you go down the group.',
                    'Explanation: larger ions lower down have smaller charge density → polarise the CO₃²⁻ ion less → more energy needed to release CO₂.'
                ]
            },
            terms: ['Carbonate', 'Thermal decomposition']
        },
        {
            id: 'h-hydrogencarbonates',
            type: 'heading',
            data: { text: 'Hydrogencarbonates (Bicarbonates)', level: 3 },
            terms: []
        },
        {
            id: 'list-hco3',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'Unlike Group 2 hydrogencarbonates (which only exist in solution), <strong>Group 1 hydrogencarbonates exist as stable solids</strong>.',
                    'They decompose easily on heating to give the carbonate, CO₂ and water:',
                    '   2NaHCO₃(s) → Na₂CO₃(s) + CO₂(g) + H₂O(l)',
                    'This is the basis of baking soda decomposition in cooking.'
                ]
            },
            terms: ['Hydrogencarbonate', 'Sodium bicarbonate']
        },
        {
            id: 'h-solubility',
            type: 'heading',
            data: { text: 'Solubility Trends', level: 3 },
            terms: []
        },
        {
            id: 'list-solubility',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'Group 1 compounds are generally <strong>much more soluble</strong> than corresponding Group 2 compounds.',
                    '<strong>Carbonates:</strong> Solubility increases down Group 1. Least soluble = lithium carbonate (~1.3 g/100 g H₂O); caesium carbonate exceptionally soluble (~262 g/100 g H₂O). By contrast, Group 2 carbonates are virtually insoluble.',
                    '<strong>Hydroxides:</strong> Solubility increases down Group 1. LiOH is least soluble (~12.8 g/100 g H₂O). All are still very soluble compared to Group 2 hydroxides.',
                    'No simple A-level explanation is required for the solubility trend mechanism — just learn the pattern.'
                ]
            },
            terms: []
        },
        {
            id: 'h-hydrides',
            type: 'heading',
            data: { text: 'Group 1 Hydrides', level: 3 },
            terms: []
        },
        {
            id: 'list-hydrides',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'Group 1 hydrides are <strong>white crystalline ionic solids</strong> (saline/salt-like hydrides) — contain M⁺ and H⁻ ions.',
                    'Same crystal structure as NaCl.',
                    'Highly reactive with water or moist air — normally stored as suspensions in mineral oil.',
                    '<strong>Preparation:</strong> passing H₂ gas over heated metal — e.g. 2Li + H₂ → 2LiH.',
                    '<strong>Reaction with water</strong> (violent): NaH + H₂O → NaOH + H₂ — releases hydrogen and forms the metal hydroxide.',
                    '<strong>Electrolysis evidence:</strong> When molten LiH is electrolysed, H₂ is released at the anode (positive electrode) — evidence for the H⁻ ion: 2H⁻ → H₂ + 2e⁻.'
                ]
            },
            terms: ['Hydride ion', 'Saline hydride']
        },

        // ── FLAME TESTS ───────────────────────────────────────────────────────────
        {
            id: 'h-flame',
            type: 'heading',
            data: { text: 'Flame Tests', level: 2 },
            terms: []
        },
        {
            id: 'list-flame-method',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Procedure:</strong> Use a clean <em>platinum or nichrome wire</em> loop.',
                    'Clean the wire by dipping in <strong>concentrated HCl</strong> and holding in a hot (non-luminous) Bunsen flame — repeat until no colour is imparted.',
                    'Moisten the clean wire with acid, dip into the solid sample (a small amount adheres), then hold in the flame.',
                    'For a weak colour: re-dip the wire in acid and hold in the flame again — gives a brief intense flash of colour.',
                    '<strong>Use:</strong> Flame tests are the most reliable way to identify Group 1 metals (especially useful because Group 1 compounds of different metals look alike as white solids).',
                    '<strong>Limitation:</strong> Sodium impurities give a very persistent yellow-orange that can hide other colours — use cobalt-blue glass to filter out the yellow and see the lilac from potassium underneath.'
                ]
            },
            terms: ['Flame test']
        },
        {
            id: 'table-flame',
            type: 'comparisonTable',
            data: {
                caption: 'Flame test colours for common metal ions',
                headers: ['Metal ion', 'Flame colour', 'Origin'],
                rows: [
                    ['Li⁺', 'Crimson red', 'Visible electron transitions in Li atoms in flame'],
                    ['Na⁺', 'Strong, persistent yellow-orange', '3p → 3s transition in Na atoms (589 nm)'],
                    ['K⁺', 'Lilac (faint pink-blue)', 'Use cobalt-blue glass to see through Na contamination'],
                    ['Rb⁺', 'Red/reddish-violet', 'Visible lines from Rb atom transitions'],
                    ['Cs⁺', 'Blue-violet', 'Visible lines from Cs atom transitions'],
                    ['Ca²⁺', 'Orange-red', '—'],
                    ['Sr²⁺', 'Red', '—'],
                    ['Ba²⁺', 'Pale green', '—'],
                    ['Cu²⁺', 'Blue-green (white flashes)', '—']
                ]
            },
            terms: []
        },
        {
            id: 'svg-flame',
            type: 'svg',
            data: {
                caption: 'Flame colours produced by Group 1 metal ions in a Bunsen flame.',
                svg: `<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <text x="280" y="14" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">Group 1 Flame Test Colours</text>
  <!-- Li -->
  <rect x="10" y="24" width="95" height="75" rx="8" fill="#dc2626"/>
  <text x="57" y="55" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="24">🔴</text>
  <text x="57" y="76" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">Li</text>
  <text x="57" y="91" text-anchor="middle" fill="#7f1d1d" font-size="9">Crimson Red</text>
  <!-- Na -->
  <rect x="115" y="24" width="95" height="75" rx="8" fill="#78350f"/>
  <text x="162" y="55" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="24">🟡</text>
  <text x="162" y="76" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">Na</text>
  <text x="162" y="91" text-anchor="middle" fill="#78350f" font-size="9">Yellow-Orange</text>
  <!-- K -->
  <rect x="220" y="24" width="95" height="75" rx="8" fill="#7c3aed"/>
  <text x="267" y="55" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="24">🔮</text>
  <text x="267" y="76" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">K</text>
  <text x="267" y="91" text-anchor="middle" fill="#2d1b69" font-size="9">Lilac</text>
  <!-- Rb -->
  <rect x="325" y="24" width="95" height="75" rx="8" fill="#b91c1c"/>
  <text x="372" y="55" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="24">🟣</text>
  <text x="372" y="76" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">Rb</text>
  <text x="372" y="91" text-anchor="middle" fill="#7f1d1d" font-size="9">Red-Violet</text>
  <!-- Cs -->
  <rect x="430" y="24" width="95" height="75" rx="8" fill="#1d4ed8"/>
  <text x="477" y="55" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="24">🔵</text>
  <text x="477" y="76" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">Cs</text>
  <text x="477" y="91" text-anchor="middle" fill="#1e3a8a" font-size="9">Blue-Violet</text>
  <text x="280" y="122" text-anchor="middle" fill="#64748b" font-size="9">* K: use cobalt-blue glass to see lilac when Na contamination is present</text>
</svg>`
            },
            terms: ['Flame test colours']
        },
        {
            id: 'callout-flame-origin',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Origin of Flame Colours',
                text: '• In the hot flame, metal <em>ions</em> regain electrons → metal <strong>atoms</strong> form.<br/>• Intense heat promotes electrons from ground state to higher orbitals (excited state).<br/>• As electrons <strong>fall back</strong> to lower energy levels, they release energy as <strong>light of specific wavelengths</strong>.<br/>• The colour seen is a combination of all visible-wavelength transitions for that element.<br/>• Example: Na produces a very strong 589 nm (yellow) line from the 3p → 3s transition.<br/>• Each element has a unique pattern of spectral lines — hence a unique flame colour.'
            },
            terms: ['Electron transitions', 'Emission spectrum']
        },

        // ── GROUP 1 vs GROUP 2 COMPARISON ─────────────────────────────────────────
        {
            id: 'h-g1-g2',
            type: 'heading',
            data: { text: 'General Trends: Groups 1 and 2', level: 2 },
            terms: []
        },
        {
            id: 'table-g1g2-reactions',
            type: 'comparisonTable',
            data: {
                caption: 'General reactions of Group 1 and Group 2 metals with common reagents',
                headers: ['Reagent', 'Group 1 (M)', 'Group 2 (M)', 'Key observations'],
                rows: [
                    ['O₂', '4M + O₂ → 2M₂O (simple)\nor peroxide/superoxide', '2M + O₂ → 2MO (always simple oxide)', 'Group 1: multiple oxide types depending on element. Group 2: always simple oxide.'],
                    ['Cl₂', '2M + Cl₂ → 2MCl', 'M + Cl₂ → MCl₂', 'Group 1: MCl (one chlorine). Group 2: MCl₂ (two chlorines). Both vigorous.'],
                    ['H₂O (l)', '2M + 2H₂O → 2MOH + H₂', 'M + 2H₂O → M(OH)₂ + H₂', 'Group 1 more reactive. Vigour increases down both groups. Mg reacts only slowly with cold water.']
                ]
            },
            terms: []
        },
        {
            id: 'callout-li-special',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Lithium — The Unusual Group 1 Member',
                text: '<strong>Lithium behaves differently from the rest of Group 1 in several ways:</strong><br/>• Forms only the <em>simple oxide</em> Li₂O (not peroxide/superoxide).<br/>• <em>Also reacts with N₂</em> in air to form lithium nitride: 6Li + N₂ → 2Li₃N (unique — no other Group 1 metal does this).<br/>• Li compounds often resemble Group 2 (diagonal relationship with Mg) — e.g. Li₂CO₃ and LiNO₃ decompose on heating like Mg carbonate and Mg nitrate.<br/>• Li⁺ has very high charge density (smallest Group 1 ion) → strong polarising effect → makes more covalent bonds than expected, e.g. LiI has some covalent character.'
            },
            terms: ['Diagonal relationship', 'Lithium nitride']
        },

        // ── PERIOD 3 OVERVIEW (retained from original note) ────────────────────────
        {
            id: 'h-p3-intro',
            type: 'heading',
            data: { text: 'Period 3 Elements — Reactions Overview', level: 2 },
            terms: []
        },
        {
            id: 'table-water-p3',
            type: 'comparisonTable',
            data: {
                caption: 'Period 3 elements reacting with water (cold or steam)',
                headers: ['Element', 'Equation', 'Conditions', 'Key observations'],
                rows: [
                    ['Na', '2Na + 2H₂O → 2NaOH + H₂', 'Cold water', 'Very exothermic; vigorous fizzing; metal melts and floats; alkaline solution.'],
                    ['Mg', 'Mg + 2H₂O → Mg(OH)₂ + H₂', 'Cold water (very slow)', 'Tiny H₂ bubbles; protective Mg(OH)₂ layer.'],
                    ['Mg', 'Mg + H₂O → MgO + H₂', 'Steam (vigorous)', 'White flame; white MgO solid.'],
                    ['Al', '2Al + 3H₂O → Al₂O₃ + 3H₂', 'Steam (slow)', 'Slow — Al₂O₃ protective layer inhibits reaction.'],
                    ['Si', 'Si + 2H₂O → SiO₂ + 2H₂', 'Steam at red heat', 'Unreactive at room temp; powdered forms can react.'],
                    ['P', '— No reaction —', '—', 'Neither white nor red phosphorus reacts with water.'],
                    ['S', '— No reaction —', '—', 'Sulphur does not react with water.'],
                    ['Cl₂', 'Cl₂ + H₂O ⇌ HCl + HOCl', 'Room temp', 'Reversible; HOCl = chloric(I) acid; active bleaching agent.'],
                    ['Ar', '— No reaction —', '—', 'Noble gas.']
                ]
            },
            terms: []
        },
        {
            id: 'table-oxygen-p3',
            type: 'comparisonTable',
            data: {
                caption: 'Period 3 elements reacting with oxygen',
                headers: ['Element', 'Equation(s)', 'Conditions', 'Key observations'],
                rows: [
                    ['Na', '4Na + O₂ → 2Na₂O\n2Na + O₂ → Na₂O₂', 'Burns in O₂', 'Orange flame. Mix of Na₂O and Na₂O₂.'],
                    ['Mg', '2Mg + O₂ → 2MgO', 'Burns readily', 'Intense white flame; white MgO.'],
                    ['Al', '4Al + 3O₂ → 2Al₂O₃', 'Powder only; oxide layer inhibits solid', 'White sparkles; white Al₂O₃.'],
                    ['Si', 'Si + O₂ → SiO₂', 'Heated strongly', 'Burns if heated; SiO₂.'],
                    ['P', 'P₄ + 5O₂ → P₄O₁₀ (excess O₂)', 'Spontaneous in air', 'White smoke; white P catches fire spontaneously.'],
                    ['S', 'S + O₂ → SO₂', 'Gentle heating', 'Pale blue flame; choking SO₂.'],
                    ['Cl', '— No direct reaction —', '—', 'Various unstable chlorine oxides exist but cannot be made by direct combination.'],
                    ['Ar', '— No reaction —', '—', 'Noble gas.']
                ]
            },
            terms: []
        },
        {
            id: 'table-chlorine-p3',
            type: 'comparisonTable',
            data: {
                caption: 'Period 3 elements reacting with chlorine',
                headers: ['Element', 'Equation', 'Conditions', 'Key observations'],
                rows: [
                    ['Na', '2Na + Cl₂ → 2NaCl', 'Burns in Cl₂', 'Bright orange flame; white NaCl.'],
                    ['Mg', 'Mg + Cl₂ → MgCl₂', 'Burns in Cl₂', 'Intense white flame; white MgCl₂.'],
                    ['Al', '2Al + 3Cl₂ → 2AlCl₃', 'Dry Cl₂ over heated Al foil', 'AlCl₃ sublimes; exists as Al₂Cl₆ dimers in vapour.'],
                    ['Si', 'Si + 2Cl₂ → SiCl₄', 'Heated Si in Cl₂', 'Colourless liquid SiCl₄.'],
                    ['P', 'P₄ + 6Cl₂ → 4PCl₃ (limited)\nP₄ + 10Cl₂ → 4PCl₅ (excess)', 'Spontaneous in Cl₂', 'PCl₃ = colourless liquid; PCl₅ = off-white solid.'],
                    ['S', '2S + Cl₂ → S₂Cl₂', 'Heated S in Cl₂', 'Orange, evil-smelling liquid.'],
                    ['Ar', '— No reaction —', '—', 'Noble gas.']
                ]
            },
            terms: []
        },

        // ── CHECKLIST ──────────────────────────────────────────────────────────────
        {
            id: 'checklist',
            type: 'checklist',
            data: {
                items: [
                    { text: 'State the trend in atomic radius, IE₁, electronegativity, mp and density down Group 1', checked: false },
                    { text: 'Explain why the melting point of Group 1 metals decreases down the group', checked: false },
                    { text: 'Describe individual reactions of Li, Na, K, Rb, Cs with water (observations)', checked: false },
                    { text: 'Explain why reactivity with water increases down Group 1 (ionisation energy + atomisation energy)', checked: false },
                    { text: 'State which oxide type (simple / peroxide / superoxide) each Group 1 metal forms with O₂', checked: false },
                    { text: 'Explain why Li forms only a simple oxide while Cs forms a superoxide (polarisation argument)', checked: false },
                    { text: 'Write equations for oxide reactions with water and dilute HCl', checked: false },
                    { text: 'Explain why Li nitrate/carbonate decompose but Na, K, Rb, Cs carbonates do not at Bunsen temperatures', checked: false },
                    { text: 'Write the equation for thermal decomposition of NaHCO₃', checked: false },
                    { text: 'Describe the procedure for a flame test and state flame colours for Li, Na, K, Rb, Cs', checked: false },
                    { text: 'Explain the origin of flame colours in terms of electron transitions', checked: false }
                ]
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Group 1 (alkali metals): atomic radius and density increase, IE₁ and electronegativity decrease, mp decreases down the group. All react vigorously with water → MOH + H₂; reactivity increases (Li floats → Cs explodes). With O₂: Li forms simple oxide Li₂O (uniquely also Li₃N with N₂); Na forms Na₂O + Na₂O₂; K, Rb, Cs form superoxides (XO₂). Larger ions are less polarising → stabilise complex oxide ions. With Cl₂: 2X + Cl₂ → 2XCl (always simple chloride). Compounds: Li nitrate/carbonate decompose like Group 2; the rest are more stable. Solubility of carbonate/hydroxide increases down group. Group 1 hydrogencarbonates exist as solids and decompose to carbonate + CO₂ + H₂O. Flame test colours: Li = red, Na = yellow-orange, K = lilac, Rb = red-violet, Cs = blue-violet.' }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-phys-trends', prompt: 'State TWO trends that decrease and TWO that increase as you go down Group 1.' },
            { id: 'c2', blockId: 'list-water-obs', prompt: 'Describe the individual observations when Li, Na and K are each placed in cold water.' },
            { id: 'c3', blockId: 'callout-water-reactivity', prompt: 'Explain why reactivity with water increases down Group 1, even though Li releases the most heat overall.' },
            { id: 'c4', blockId: 'callout-oxide-types', prompt: 'Name the three types of oxide formed by Group 1 metals with O₂ and state which elements form each type.' },
            { id: 'c5', blockId: 'callout-li-special', prompt: 'Give THREE ways in which lithium behaves differently from the rest of Group 1.' },
            { id: 'c6', blockId: 'list-nitrates', prompt: 'Compare the thermal decomposition of lithium nitrate with that of sodium nitrate — both products and equations.' },
            { id: 'c7', blockId: 'table-flame', prompt: 'State the flame test colours for Li, Na, K, Rb and Cs. What problem arises with K and Na together?' }
        ],
        summaryText: 'Group 1 trends ↓: atomic radius ↑, IE₁ ↓, EN ↓, mp ↓, density generally ↑. Water: 2X + 2H₂O → 2XOH + H₂; Li floats gently, Na dashes, K burns lilac, Rb sinks violently, Cs explodes. O₂: Li → Li₂O (+ Li₃N uniquely), Na → Na₂O + Na₂O₂, K → KO₂ (superoxide), Rb/Cs → XO₂. Cl₂: 2X + Cl₂ → 2XCl. Nitrates: LiNO₃ → Li₂O + NO₂ + O₂; rest → XNO₂ + O₂. Carbonates: Li₂CO₃ decomposes; rest stable at Bunsen temp. Flame: Li=red, Na=yellow, K=lilac, Rb=red-violet, Cs=blue-violet.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_8_3;
