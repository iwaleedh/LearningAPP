/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 4
 * "Group 2 trends and compounds"
 * Source: Pearson Edexcel IAL Chemistry — Sections 8B.4, 8B.5 + Chemguide Group 2 series
 */
export const note_chemistry_2_8_4 = {
    blocks: [
        // ── OBJECTIVE ──────────────────────────────────────────────────────────
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Describe and explain the physical properties and reactions of Group 2 elements (Be–Ba) with water, oxygen, and acids; account for solubility trends of hydroxides, sulfates and carbonates; explain thermal stability of carbonates and nitrates using cation polarising power; describe anomalous behaviour of beryllium including covalent BeCl₂, 4-coordinate complex ion, and amphoteric hydroxide.' },
            terms: []
        },

        // ── SECTION 1: PHYSICAL PROPERTIES ────────────────────────────────────
        {
            id: 'h-physical',
            type: 'heading',
            data: { text: 'Physical Properties of Group 2', level: 2 },
            terms: []
        },
        {
            id: 'table-physical',
            type: 'comparisonTable',
            data: {
                caption: 'Physical properties of Group 2 elements (Be → Ba)',
                headers: ['Element', 'Atomic radius / pm', 'IE₁ / kJ mol⁻¹', 'IE₂ / kJ mol⁻¹', 'Electronegativity', 'Melting point / °C'],
                rows: [
                    ['Be', '89', '900', '1757', '1.5', '1278'],
                    ['Mg', '160', '738', '1451', '1.2', '650'],
                    ['Ca', '197', '590', '1145', '1.0', '842'],
                    ['Sr', '215', '550', '1064', '1.0', '777'],
                    ['Ba', '222', '503', '965', '0.9', '729']
                ]
            },
            terms: []
        },
        {
            id: 'list-physical-trends',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Atomic radius increases ↓ group</strong> — extra electron shells added; outer electrons increasingly shielded from nuclear charge',
                    '<strong>IE₁ and IE₂ decrease ↓ group</strong> — outer electron further from nucleus and better screened → easier to remove; both IEs needed to form M²⁺',
                    '<strong>Electronegativity decreases ↓ group</strong> — atoms attract bonding electrons less strongly as atomic radius grows',
                    '<strong>Be is anomalous:</strong> very small ion (89 pm) with very high charge density → forms covalent compounds rather than ionic ones (unlike the rest of Group 2)',
                    '<strong>Melting points generally fall ↓ group</strong> (Mg is anomalously low for its period); boiling points and atomisation energies show no simple trend',
                    'All Group 2 elements form M²⁺ ions in ionic compounds (except Be which is often covalent)'
                ]
            },
            terms: []
        },
        {
            id: 'svg-atomic-radius',
            type: 'svg',
            data: {
                caption: 'Relative atomic radii of Group 2 elements (approximately to scale)',
                svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 150" width="520" height="150" font-family="sans-serif">
  <defs>
    <radialGradient id="g2grad" cx="38%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#a5b4fc"/>
      <stop offset="100%" stop-color="#4338ca"/>
    </radialGradient>
    <marker id="g2arr" markerWidth="7" markerHeight="7" refX="7" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#6b7280"/>
    </marker>
  </defs>
  <circle cx="52" cy="100" r="18" fill="url(#g2grad)" opacity="0.9"/>
  <text x="52" y="104" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="bold">Be</text>
  <text x="52" y="128" text-anchor="middle" fill="#374151" font-size="10">89 pm</text>
  <circle cx="148" cy="88" r="32" fill="url(#g2grad)" opacity="0.9"/>
  <text x="148" y="93" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="bold">Mg</text>
  <text x="148" y="130" text-anchor="middle" fill="#374151" font-size="10">160 pm</text>
  <circle cx="262" cy="79" r="40" fill="url(#g2grad)" opacity="0.9"/>
  <text x="262" y="84" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="bold">Ca</text>
  <text x="262" y="130" text-anchor="middle" fill="#374151" font-size="10">197 pm</text>
  <circle cx="378" cy="75" r="43" fill="url(#g2grad)" opacity="0.9"/>
  <text x="378" y="80" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="bold">Sr</text>
  <text x="378" y="130" text-anchor="middle" fill="#374151" font-size="10">215 pm</text>
  <circle cx="476" cy="74" r="44" fill="url(#g2grad)" opacity="0.9"/>
  <text x="476" y="79" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="bold">Ba</text>
  <text x="476" y="130" text-anchor="middle" fill="#374151" font-size="10">222 pm</text>
  <line x1="30" y1="142" x2="510" y2="142" stroke="#6b7280" stroke-width="1.5" marker-end="url(#g2arr)"/>
  <text x="270" y="150" text-anchor="middle" fill="#6b7280" font-size="10">↓ Group 2 — increasing atomic radius</text>
</svg>`
            },
            terms: []
        },

        // ── SECTION 2: REACTIONS WITH WATER ───────────────────────────────────
        {
            id: 'h-reactwater',
            type: 'heading',
            data: { text: 'Reactions with Water', level: 2 },
            terms: []
        },
        {
            id: 'p-reactwater-intro',
            type: 'paragraph',
            data: { text: 'Reactivity with water increases down Group 2. Products are the metal hydroxide and hydrogen gas (or metal oxide + hydrogen with steam). Be is the exception — it requires very high temperature steam.' },
            terms: []
        },
        {
            id: 'table-water',
            type: 'comparisonTable',
            data: {
                caption: 'Group 2 reactions with water',
                headers: ['Element', 'Condition', 'Equation', 'Observation'],
                rows: [
                    ['Be', 'Steam ≥ 700°C', 'Be + H₂O(g) → BeO + H₂', 'Requires very high temperature to break through oxide layer; reacts above ~750°C'],
                    ['Mg', 'Steam (burning)', 'Mg + H₂O(g) → MgO + H₂', 'Burns with intense white flame in steam'],
                    ['Mg', 'Cold water', 'Mg + 2H₂O → Mg(OH)₂ + H₂', 'Very slow; Mg(OH)₂ coating forms on surface, halting reaction'],
                    ['Ca', 'Cold water', 'Ca + 2H₂O → Ca(OH)₂ + H₂', 'Steady effervescence; white cloudy suspension (Ca(OH)₂ slightly soluble)'],
                    ['Sr', 'Cold water', 'Sr + 2H₂O → Sr(OH)₂ + H₂', 'Vigorous effervescence; less precipitate visible (Sr(OH)₂ more soluble)'],
                    ['Ba', 'Cold water', 'Ba + 2H₂O → Ba(OH)₂ + H₂', 'Very vigorous; solution almost clear (Ba(OH)₂ very soluble)']
                ]
            },
            terms: []
        },
        {
            id: 'callout-water-explain',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Why Reactivity with Water Increases Down the Group',
                text: '• It is <strong>NOT</strong> explained by the overall enthalpy change — the ΔH values are approximately the same for Be/Mg (~−360 kJ mol⁻¹) and for Ca/Sr/Ba (~−430 kJ mol⁻¹) with no clear trend<br/>• The real reason: <strong>activation energy decreases ↓ group</strong><br/>• Energy input required to initiate reaction = <strong>atomisation energy + IE₁ + IE₂</strong><br/>• All three decrease ↓ group → significantly lower activation energy → faster reactions<br/>• Be and Mg have much higher combined (atomisation + IE₁ + IE₂) than Ca, Sr, and Ba → much higher activation energy → much slower or no reaction at room temperature'
            },
            terms: ['Activation energy']
        },

        // ── SECTION 3: REACTIONS WITH OXYGEN ──────────────────────────────────
        {
            id: 'h-reactO2',
            type: 'heading',
            data: { text: 'Reactions with Oxygen', level: 2 },
            terms: []
        },
        {
            id: 'p-reactO2',
            type: 'paragraph',
            data: { text: 'All Group 2 elements burn in oxygen forming a simple oxide XO. When burnt in air they also react with atmospheric nitrogen forming a nitride. Sr and Ba can additionally form peroxides.' },
            terms: []
        },
        {
            id: 'list-oxygen',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>General equation:</strong> 2X + O₂ → 2XO (simple oxide)',
                    '<strong>Be:</strong> Reluctant to burn unless in powder form; strong adherent BeO layer resists ignition',
                    '<strong>Mg:</strong> Burns brilliantly with an intense white flame → white MgO powder',
                    '<strong>Ca:</strong> Slow to start, then burns with an intense white/red flame → CaO',
                    '<strong>Ba:</strong> Burns with a white flame (NOT green — this is a common textbook error confirmed by video evidence)',
                    '<strong>No simple trend in vigour</strong> — too many uncontrollable variables (oxide coating thickness, particle size, heating conditions)'
                ]
            },
            terms: []
        },
        {
            id: 'callout-nitrides',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Reaction with Nitrogen in Air',
                text: '• All Group 2 elements also react with N₂ in air when heated:<br/>  <strong>3X + N₂ → X₃N₂</strong> (metal nitride)<br/>• Mg ash is therefore a <strong>mixture of MgO and Mg₃N₂</strong>, not pure MgO<br/>• <strong>Why do these nitrides form?</strong> Very high lattice energies (from X²⁺ and N³⁻ ions) compensate for the large energy input needed to form the ions<br/>• Group 1 metals (except Li) do <em>not</em> form nitrides — Na⁺ and K⁺ (+1 charge) generate insufficient lattice energy to compensate; Li⁺ is small enough to do so (diagonal relationship with Mg)'
            },
            terms: ['Nitride', 'Lattice energy']
        },
        {
            id: 'callout-peroxides',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Peroxide Formation — Sr and Ba Only',
                text: '• Sr and Ba also form <strong>peroxides</strong> (containing O₂²⁻ ion) when ignited in O₂:<br/>  <strong>Ba + O₂ → BaO₂</strong>; Sr requires higher O₂ pressure<br/>• The peroxide ion O₂²⁻ contains a <strong>weak O–O covalent bond</strong> within it<br/>• <strong>Why only Sr and Ba?</strong><br/>  — Small ions (Be²⁺, Mg²⁺, Ca²⁺) have high charge density → strongly polarise O₂²⁻ → break the O–O bond → only simple oxide XO is stable<br/>  — Large Sr²⁺ and Ba²⁺ have lower charge density → cannot adequately polarise O₂²⁻ → peroxide ion remains intact'
            },
            terms: ['Peroxide']
        },
        {
            id: 'svg-oxide-types',
            type: 'svg',
            data: {
                caption: 'Which oxide type forms when Group 2 elements burn in oxygen?',
                svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 210" width="480" height="210" font-family="sans-serif" font-size="12">
  <defs>
    <marker id="ox-arr" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#6b7280"/>
    </marker>
  </defs>
  <text x="240" y="22" text-anchor="middle" font-weight="bold" font-size="13" fill="#1e293b">Group 2 + O₂ → Oxide Products</text>
  <rect x="20" y="40" width="100" height="36" rx="8" fill="#2d2f72" stroke="#60a5fa"/>
  <text x="70" y="59" text-anchor="middle" fill="#3730a3" font-weight="bold">Be, Mg, Ca</text>
  <rect x="20" y="100" width="100" height="36" rx="8" fill="#4a1040" stroke="#f472b6"/>
  <text x="70" y="122" text-anchor="middle" fill="#9d174d" font-weight="bold">Sr, Ba</text>
  <line x1="120" y1="58" x2="170" y2="58" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ox-arr)"/>
  <line x1="120" y1="118" x2="170" y2="118" stroke="#6b7280" stroke-width="1.5" marker-end="url(#ox-arr)"/>
  <text x="145" y="51" text-anchor="middle" fill="#6b7280" font-size="10">+ O₂</text>
  <text x="145" y="111" text-anchor="middle" fill="#6b7280" font-size="10">+ O₂</text>
  <rect x="170" y="40" width="140" height="36" rx="8" fill="#0a2e1a" stroke="#34d399"/>
  <text x="240" y="58" text-anchor="middle" fill="#065f46" font-weight="bold">Simple oxide only — XO</text>
  <text x="240" y="70" text-anchor="middle" fill="#065f46" font-size="10">e.g. MgO, CaO (white solids)</text>
  <rect x="170" y="100" width="140" height="36" rx="8" fill="#78350f" stroke="#fbbf24"/>
  <text x="240" y="116" text-anchor="middle" fill="#92400e" font-weight="bold">XO + Peroxide XO₂</text>
  <text x="240" y="128" text-anchor="middle" fill="#92400e" font-size="10">BaO₂; SrO₂ (high p O₂)</text>
  <rect x="20" y="158" width="440" height="44" rx="8" fill="#0f172a" stroke="#cbd5e1"/>
  <text x="240" y="174" text-anchor="middle" fill="#334155" font-weight="bold" font-size="11">Explanation (polarisation)</text>
  <text x="240" y="188" text-anchor="middle" fill="#475569" font-size="10">Small Be²⁺–Ca²⁺: high charge density → polarise O₂²⁻ strongly → break O–O bond → only XO stable</text>
  <text x="240" y="198" text-anchor="middle" fill="#475569" font-size="10">Large Sr²⁺/Ba²⁺: low charge density → cannot break O–O bond → peroxide stable</text>
</svg>`
            },
            terms: []
        },

        // ── SECTION 4: REACTIONS WITH ACIDS ───────────────────────────────────
        {
            id: 'h-reactacid',
            type: 'heading',
            data: { text: 'Reactions with Acids', level: 2 },
            terms: []
        },
        {
            id: 'table-acids',
            type: 'comparisonTable',
            data: {
                caption: 'Group 2 reactions with different acids',
                headers: ['Acid', 'General equation', 'Notes'],
                rows: [
                    ['Dilute HCl', 'X + 2HCl → XCl₂ + H₂', 'All Group 2 metals react; vigour increases ↓ group; all chlorides are soluble → no coating formed'],
                    ['Dilute H₂SO₄', 'X + H₂SO₄ → XSO₄ + H₂', 'Be and Mg react fully; Ca, Sr, Ba form insoluble sulfate coatings that coat the surface and slow/stop reaction'],
                    ['Very dilute HNO₃', 'X + 2HNO₃ → X(NO₃)₂ + H₂', 'H₂ gas produced only in very dilute acid; NO₃⁻ is oxidising under most conditions'],
                    ['Moderate HNO₃', '3X + 8HNO₃ → 3X(NO₃)₂ + 2NO↑ + 4H₂O', 'Colourless NO gas given off; e.g. 3Mg + 8HNO₃ → 3Mg(NO₃)₂ + 2NO + 4H₂O'],
                    ['Concentrated HNO₃', 'X + 4HNO₃ → X(NO₃)₂ + 2NO₂↑ + 2H₂O', 'Brown NO₂ fumes given off; e.g. Mg + 4HNO₃ → Mg(NO₃)₂ + 2NO₂ + 2H₂O']
                ]
            },
            terms: []
        },
        {
            id: 'callout-sulfate-coating',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Sulfate Coating Stops Reactions with H₂SO₄',
                text: '• CaSO₄ is <strong>sparingly soluble</strong> → forms a powdery coating on Ca surface → reaction slows considerably<br/>• SrSO₄ and BaSO₄ are <strong>insoluble</strong> → coating rapidly stops reaction<br/>• Contrast this with HCl: all Group 2 chlorides are soluble → no insoluble layer → reaction continues to completion<br/>• Therefore: <strong>Mg reacts freely with H₂SO₄</strong> but <strong>Ca, Sr and Ba do not react to completion</strong>'
            },
            terms: []
        },

        // ── SECTION 5: SOLUBILITY TRENDS ──────────────────────────────────────
        {
            id: 'h-solubility',
            type: 'heading',
            data: { text: 'Solubility Trends', level: 2 },
            terms: []
        },
        {
            id: 'table-solubility',
            type: 'comparisonTable',
            data: {
                caption: 'Solubility of Group 2 compounds in water',
                headers: ['Compound type', 'Trend ↓ Group 2', 'Examples to remember'],
                rows: [
                    ['Hydroxides M(OH)₂', '↑ INCREASES (sparingly → soluble)', 'Mg(OH)₂: sparingly soluble (milk of magnesia); Ca(OH)₂: ~1 g/L (limewater); Ba(OH)₂: ~0.1 mol dm⁻³'],
                    ['Sulfates MSO₄', '↓ DECREASES (soluble → insoluble)', 'MgSO₄: highly soluble; CaSO₄: sparingly soluble; BaSO₄: almost completely insoluble (<2 mg/L)'],
                    ['Carbonates MCO₃', '↓ Generally decreases', 'All very sparingly soluble; MgCO₃ most soluble (~0.02 g/100 g H₂O); all trends difficult to explain simply']
                ]
            },
            terms: ['Solubility']
        },
        {
            id: 'svg-solubility-trend',
            type: 'svg',
            data: {
                caption: 'Opposing solubility trends for Group 2 hydroxides and sulfates',
                svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 210" width="420" height="210" font-family="sans-serif" font-size="12">
  <line x1="55" y1="20" x2="55" y2="168" stroke="#374151" stroke-width="1.5"/>
  <text x="14" y="100" fill="#374151" font-size="11" text-anchor="middle" transform="rotate(-90,14,100)">Solubility</text>
  <line x1="55" y1="168" x2="385" y2="168" stroke="#374151" stroke-width="1.5"/>
  <text x="80" y="183" fill="#374151" text-anchor="middle">Be</text>
  <text x="148" y="183" fill="#374151" text-anchor="middle">Mg</text>
  <text x="216" y="183" fill="#374151" text-anchor="middle">Ca</text>
  <text x="284" y="183" fill="#374151" text-anchor="middle">Sr</text>
  <text x="350" y="183" fill="#374151" text-anchor="middle">Ba</text>
  <text x="220" y="198" text-anchor="middle" fill="#6b7280" font-size="10">↓ Group 2</text>
  <polyline points="80,148 148,128 216,108 284,80 350,48" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <circle cx="80" cy="148" r="4" fill="#2563eb"/>
  <circle cx="148" cy="128" r="4" fill="#2563eb"/>
  <circle cx="216" cy="108" r="4" fill="#2563eb"/>
  <circle cx="284" cy="80" r="4" fill="#2563eb"/>
  <circle cx="350" cy="48" r="4" fill="#2563eb"/>
  <polyline points="80,48 148,75 216,108 284,138 350,158" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/>
  <circle cx="80" cy="48" r="4" fill="#dc2626"/>
  <circle cx="148" cy="75" r="4" fill="#dc2626"/>
  <circle cx="216" cy="108" r="4" fill="#dc2626"/>
  <circle cx="284" cy="138" r="4" fill="#dc2626"/>
  <circle cx="350" cy="158" r="4" fill="#dc2626"/>
  <rect x="260" y="24" width="130" height="40" rx="6" fill="#1e293b" stroke="#e5e7eb"/>
  <line x1="268" y1="36" x2="295" y2="36" stroke="#2563eb" stroke-width="2.5"/>
  <text x="300" y="39" fill="#2563eb" font-size="11" font-weight="bold">Hydroxides ↑</text>
  <line x1="268" y1="52" x2="295" y2="52" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/>
  <text x="300" y="55" fill="#dc2626" font-size="11" font-weight="bold">Sulfates ↓</text>
</svg>`
            },
            terms: []
        },
        {
            id: 'callout-barium-test',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Test for Sulfate Ions (SO₄²⁻)',
                text: '• Add <strong>acidified barium chloride solution</strong> (BaCl₂ + HCl) to the sample<br/>• Positive result: <strong>thick white precipitate of BaSO₄</strong> forms: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)↓<br/>• The HCl is added first to prevent false positives from CO₃²⁻ or SO₃²⁻ (both also give white precipitates with Ba²⁺, but dissolve in acid)<br/>• BaSO₄ does NOT dissolve in dilute HCl — confirms sulfate'
            },
            terms: ['Sulfate test']
        },
        {
            id: 'callout-hydroxide-uses',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Applications Linked to Hydroxide Solubility',
                text: '• <strong>Mg(OH)₂ (Milk of Magnesia):</strong> Sparingly soluble → used as antacid suspension. Neutralises excess stomach HCl without dissolving fully in stomach.<br/>• <strong>Ca(OH)₂ (Limewater):</strong> Test for CO₂ — CO₂ + Ca(OH)₂ → CaCO₃↓ (turns limewater cloudy). Also used to neutralise acidic soils in agriculture.<br/>• <strong>Ba(OH)₂:</strong> Sufficiently soluble (~0.1 mol dm⁻³) for use as a standard strong base in titrations'
            },
            terms: ['Limewater', 'Milk of magnesia']
        },

        // ── SECTION 6: THERMAL STABILITY ──────────────────────────────────────
        {
            id: 'h-thermal',
            type: 'heading',
            data: { text: 'Thermal Stability of Carbonates and Nitrates', level: 2 },
            terms: []
        },
        {
            id: 'p-thermal-intro',
            type: 'paragraph',
            data: { text: 'Both Group 2 carbonates and nitrates decompose on heating. Their thermal stability <strong>increases down the group</strong> — lower elements require much higher temperatures to decompose.' },
            terms: ['Thermal stability']
        },
        {
            id: 'list-thermal-equations',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Carbonate decomposition:</strong> XCO₃(s) → XO(s) + CO₂(g) — all carbonates give metal oxide + CO₂',
                    '<strong>Nitrate decomposition:</strong> 2X(NO₃)₂(s) → 2XO(s) + 4NO₂(g) + O₂(g) — gives metal oxide + brown NO₂ fumes + oxygen',
                    '<strong>BeCO₃:</strong> decomposes even below room temperature in dry conditions (very unstable)',
                    '<strong>MgCO₃:</strong> decomposes at ~350°C',
                    '<strong>CaCO₃:</strong> decomposes at ~840°C (limestone → quicklime reaction in industry)',
                    '<strong>SrCO₃:</strong> ~1100°C; <strong>BaCO₃:</strong> ~1360°C — highly stable, needs industrial furnace temperatures',
                    'Same trend holds for nitrates — those lower in Period 3/4 are more stable'
                ]
            },
            terms: []
        },
        {
            id: 'callout-polarising',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Explaining the Trend — Cation Polarising Power',
                text: '• CO₃²⁻ and NO₃⁻ are large, polarisable anions with delocalised electron density concentrated on oxygen atoms<br/>• A <strong>small cation</strong> (e.g. Mg²⁺) has <strong>high charge density</strong> → strongly polarises CO₃²⁻ → pulls electron density toward itself → distorts and weakens C–O bonds inside CO₃²⁻<br/>• This pre-weakening means less energy (lower temperature) is needed to break the bonds and release CO₂<br/>• As cations get <strong>larger ↓ group</strong>, charge density decreases → less distortion of CO₃²⁻ → stronger, more intact C–O bonds → <strong>higher temperature needed → greater thermal stability</strong><br/>• The ΔH for decomposition also becomes more endothermic ↓ group (MgCO₃: +117; CaCO₃: +178; SrCO₃: +235; BaCO₃: +267 kJ mol⁻¹)'
            },
            terms: ['Polarising power', 'Charge density']
        },
        {
            id: 'svg-polarisation',
            type: 'svg',
            data: {
                caption: 'How cation size affects polarisation of CO₃²⁻ and thermal stability',
                svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 195" width="480" height="195" font-family="sans-serif" font-size="11">
  <defs>
    <marker id="pol-red" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
      <path d="M0,0 L5,2.5 L0,5 Z" fill="#dc2626"/>
    </marker>
    <marker id="pol-amber" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
      <path d="M0,0 L5,2.5 L0,5 Z" fill="#d97706"/>
    </marker>
  </defs>
  <text x="115" y="18" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="12">Small Mg²⁺ — High polarising power</text>
  <circle cx="55" cy="88" r="18" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="55" y="85" text-anchor="middle" fill="#7f1d1d" font-weight="bold">Mg²⁺</text>
  <text x="55" y="98" text-anchor="middle" fill="#7f1d1d" font-size="9">small</text>
  <ellipse cx="145" cy="88" rx="52" ry="28" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="145" y="85" text-anchor="middle" fill="#1e40af" font-weight="bold">CO₃²⁻</text>
  <text x="145" y="98" text-anchor="middle" fill="#1e40af" font-size="9">distorted</text>
  <line x1="73" y1="88" x2="93" y2="88" stroke="#dc2626" stroke-width="2" marker-end="url(#pol-red)"/>
  <text x="115" y="148" text-anchor="middle" fill="#dc2626" font-size="10">C–O bonds weakened → decomposes at</text>
  <text x="115" y="160" text-anchor="middle" fill="#dc2626" font-size="10">LOW temperature → low thermal stability</text>
  <line x1="240" y1="10" x2="240" y2="185" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="365" y="18" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="12">Large Ba²⁺ — Low polarising power</text>
  <circle cx="285" cy="88" r="34" fill="#44370a" stroke="#d97706" stroke-width="1.5"/>
  <text x="285" y="85" text-anchor="middle" fill="#78350f" font-weight="bold">Ba²⁺</text>
  <text x="285" y="98" text-anchor="middle" fill="#78350f" font-size="9">large</text>
  <circle cx="400" cy="88" r="30" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="400" y="85" text-anchor="middle" fill="#1e40af" font-weight="bold">CO₃²⁻</text>
  <text x="400" y="98" text-anchor="middle" fill="#1e40af" font-size="9">undistorted</text>
  <line x1="319" y1="88" x2="370" y2="88" stroke="#d97706" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#pol-amber)"/>
  <text x="365" y="148" text-anchor="middle" fill="#059669" font-size="10">C–O bonds intact → needs HIGH temperature</text>
  <text x="365" y="160" text-anchor="middle" fill="#059669" font-size="10">to decompose → high thermal stability</text>
</svg>`
            },
            terms: []
        },

        // ── SECTION 7: BASIC OXIDES & HYDROXIDES ──────────────────────────────
        {
            id: 'h-basicity',
            type: 'heading',
            data: { text: 'Basic Oxides and Hydroxides', level: 2 },
            terms: []
        },
        {
            id: 'list-basicity',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'All Group 2 oxides (except BeO) and hydroxides (except Be(OH)₂) are <strong>basic</strong>',
                    'They react with acids to form salts and water: e.g. MgO + 2HCl → MgCl₂ + H₂O',
                    'They react with water to form alkaline solutions (pH > 7): e.g. CaO + H₂O → Ca(OH)₂',
                    'Basicity increases ↓ group as ionic character of M–O bond increases',
                    '<strong>BeO and Be(OH)₂ are amphoteric</strong> — see Beryllium section below'
                ]
            },
            terms: []
        },

        // ── SECTION 8: BERYLLIUM ANOMALOUS BEHAVIOUR ──────────────────────────
        {
            id: 'h-beryllium',
            type: 'heading',
            data: { text: 'Beryllium — Anomalous Behaviour', level: 2 },
            terms: []
        },
        {
            id: 'p-beryllium-intro',
            type: 'paragraph',
            data: { text: 'Beryllium differs considerably from the rest of Group 2 due to its very small atomic radius (89 pm) and high charge density. It shows a <strong>diagonal relationship</strong> with aluminium in Group 3 — sharing several chemical similarities.' },
            terms: ['Diagonal relationship']
        },
        {
            id: 'callout-becl2-covalent',
            type: 'callout',
            data: {
                style: 'key',
                title: '1. BeCl₂ is Covalent, Not Ionic',
                text: '• Evidence: BeCl₂ mp = 405°C; bp = 520°C — dramatically lower than MgCl₂ bp = 1412°C<br/>• Very low bp indicates weak intermolecular forces → <strong>covalent</strong>, not ionic<br/>• Reason: Be has high electronegativity (1.5) — too electronegative to surrender electrons to form Be²⁺; instead it shares electrons<br/>• <strong>Gas phase (monomer):</strong> BeCl₂ is linear (Cl–Be–Cl, 180°) — electron-deficient (Be has only 4 electrons, 0 lone pairs, 2 empty orbitals at bonding level)<br/>• <strong>Solid phase:</strong> Cl lone pairs donate into empty Be orbitals → dative (coordinate) bonds form → BeCl₂ polymerises into long chains<br/>• Reacts vigorously with water → [Be(H₂O)₄]²⁺ + HCl(g) (steamy acidic fumes) — typical of covalent chlorides; ionic MgCl₂ just dissolves quietly'
            },
            terms: ['Electron deficient', 'Dative bond', 'Covalent chloride']
        },
        {
            id: 'svg-becl2-structure',
            type: 'svg',
            data: {
                caption: 'BeCl₂ structure: linear monomer in gas phase → polymer chain in solid via dative bonds',
                svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 175" width="480" height="175" font-family="sans-serif" font-size="12">
  <defs>
    <marker id="be-arr" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
      <path d="M0,0 L5,2.5 L0,5 Z" fill="#1d4ed8"/>
    </marker>
  </defs>
  <text x="118" y="24" text-anchor="middle" fill="#1e293b" font-weight="bold">Gas phase — monomer (linear)</text>
  <circle cx="42" cy="88" r="20" fill="#0a3020" stroke="#16a34a" stroke-width="1.5"/>
  <text x="42" y="93" text-anchor="middle" fill="#14532d" font-weight="bold">Cl</text>
  <line x1="62" y1="88" x2="90" y2="88" stroke="#1e293b" stroke-width="2.5"/>
  <circle cx="110" cy="88" r="16" fill="#78350f" stroke="#d97706" stroke-width="1.5"/>
  <text x="110" y="93" text-anchor="middle" fill="#78350f" font-weight="bold">Be</text>
  <line x1="126" y1="88" x2="154" y2="88" stroke="#1e293b" stroke-width="2.5"/>
  <circle cx="174" cy="88" r="20" fill="#0a3020" stroke="#16a34a" stroke-width="1.5"/>
  <text x="174" y="93" text-anchor="middle" fill="#14532d" font-weight="bold">Cl</text>
  <text x="118" y="122" text-anchor="middle" fill="#374151" font-size="10">Bond angle 180° — sp hybridised</text>
  <text x="118" y="136" text-anchor="middle" fill="#dc2626" font-size="10">Be has 2 EMPTY orbitals (electron deficient)</text>
  <line x1="240" y1="18" x2="240" y2="165" stroke="#e5e7eb" stroke-width="1.5"/>
  <text x="362" y="24" text-anchor="middle" fill="#1e293b" font-weight="bold">Solid — polymer chain (dative bonds)</text>
  <circle cx="258" cy="88" r="18" fill="#0a3020" stroke="#16a34a" stroke-width="1.5"/>
  <text x="258" y="93" text-anchor="middle" fill="#14532d" font-weight="bold">Cl</text>
  <line x1="276" y1="88" x2="296" y2="88" stroke="#1e293b" stroke-width="2.5"/>
  <circle cx="308" cy="88" r="14" fill="#78350f" stroke="#d97706" stroke-width="1.5"/>
  <text x="308" y="93" text-anchor="middle" fill="#78350f" font-weight="bold">Be</text>
  <line x1="322" y1="88" x2="340" y2="88" stroke="#1e293b" stroke-width="2.5"/>
  <circle cx="354" cy="88" r="18" fill="#0a3020" stroke="#16a34a" stroke-width="1.5"/>
  <text x="354" y="93" text-anchor="middle" fill="#14532d" font-weight="bold">Cl</text>
  <line x1="372" y1="88" x2="392" y2="88" stroke="#1e293b" stroke-width="2.5"/>
  <circle cx="404" cy="88" r="14" fill="#78350f" stroke="#d97706" stroke-width="1.5"/>
  <text x="404" y="93" text-anchor="middle" fill="#78350f" font-weight="bold">Be</text>
  <circle cx="331" cy="58" r="14" fill="#0a3020" stroke="#16a34a" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="331" y="63" text-anchor="middle" fill="#14532d" font-size="10">Cl</text>
  <line x1="325" y1="65" x2="313" y2="80" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#be-arr)"/>
  <line x1="337" y1="65" x2="399" y2="80" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#be-arr)"/>
  <text x="362" y="135" text-anchor="middle" fill="#1d4ed8" font-size="10">Dashed arrows = dative bonds</text>
  <text x="362" y="148" text-anchor="middle" fill="#1d4ed8" font-size="10">(Cl lone pair → Be empty orbital)</text>
</svg>`
            },
            terms: []
        },
        {
            id: 'callout-be-complex',
            type: 'callout',
            data: {
                style: 'key',
                title: '2. Be Forms 4-Coordinate Complex Ions [Be(H₂O)₄]²⁺',
                text: '• In solution Be²⁺ bonds to 4 water molecules via dative bonds: <strong>[Be(H₂O)₄]²⁺</strong> (tetraaquaberyllium ion)<br/>• Shape: <strong>tetrahedral</strong> — 4 water ligands point to the corners of a tetrahedron; coordination number = 4<br/>• Why only 4? — Be²⁺ has empty 2s + three 2p orbitals (all at the same level); hybridise to sp³ giving exactly 4 bonding sites. No 2d orbitals exist at this level → cannot accommodate more<br/>• Mg²⁺ has 3s + 3p + available 3d orbitals → sp³d² hybridisation → 6-coordinate [Mg(H₂O)₆]²⁺<br/>• The small Be²⁺ strongly polarises the bonded H₂O molecules → H⁺ readily removed → <strong>[Be(H₂O)₄]²⁺ is acidic in solution</strong>'
            },
            terms: ['Coordination number', 'Complex ion', 'Tetrahedral']
        },
        {
            id: 'callout-be-amphoteric',
            type: 'callout',
            data: {
                style: 'key',
                title: '3. Be(OH)₂ is Amphoteric',
                text: '• All other Group 2 hydroxides are purely <strong>basic</strong> (react only with acids)<br/>• Be(OH)₂ is <strong>amphoteric</strong> — reacts with both acids and bases<br/>• <em>With acid:</em> Be(OH)₂(s) + H₂SO₄(aq) → BeSO₄(aq) + 2H₂O(l)<br/>• <em>With base:</em> Be(OH)₂(s) + 2NaOH(aq) → Na₂[Be(OH)₄](aq) — sodium tetrahydroxoberyllate<br/>• The [Be(OH)₄]²⁻ ion forms when excess NaOH is added and the precipitate dissolves<br/>• This parallels Al(OH)₃ which is also amphoteric (diagonal relationship: Be ≈ Al in behaviour)'
            },
            terms: ['Amphoteric']
        },
        {
            id: 'svg-be-amphoteric',
            type: 'svg',
            data: {
                caption: 'Amphoteric behaviour of Be(OH)₂ — dissolves in both acid and base',
                svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 165" width="480" height="165" font-family="sans-serif" font-size="12">
  <defs>
    <marker id="amp-red" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
      <path d="M0,0 L5,2.5 L0,5 Z" fill="#dc2626"/>
    </marker>
    <marker id="amp-grn" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
      <path d="M0,0 L5,2.5 L0,5 Z" fill="#16a34a"/>
    </marker>
  </defs>
  <rect x="165" y="55" width="150" height="48" rx="10" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="240" y="74" text-anchor="middle" fill="#0f172a" font-weight="bold">Be(OH)₂(s)</text>
  <text x="240" y="90" text-anchor="middle" fill="#64748b" font-size="10">white precipitate</text>
  <text x="240" y="100" text-anchor="middle" fill="#64748b" font-size="10">(amphoteric)</text>
  <rect x="8" y="60" width="128" height="40" rx="8" fill="#3d1212" stroke="#fca5a5"/>
  <text x="72" y="78" text-anchor="middle" fill="#991b1b" font-weight="bold">Be²⁺(aq) + salts</text>
  <text x="72" y="91" text-anchor="middle" fill="#991b1b" font-size="10">add H⁺ → dissolves</text>
  <line x1="164" y1="79" x2="138" y2="79" stroke="#dc2626" stroke-width="2" marker-end="url(#amp-red)"/>
  <text x="152" y="68" text-anchor="middle" fill="#dc2626" font-size="9">+ acid (H⁺)</text>
  <rect x="344" y="60" width="128" height="40" rx="8" fill="#0a2e1a" stroke="#6ee7b7"/>
  <text x="408" y="78" text-anchor="middle" fill="#065f46" font-weight="bold">[Be(OH)₄]²⁻(aq)</text>
  <text x="408" y="91" text-anchor="middle" fill="#065f46" font-size="10">add OH⁻ → dissolves</text>
  <line x1="315" y1="79" x2="342" y2="79" stroke="#16a34a" stroke-width="2" marker-end="url(#amp-grn)"/>
  <text x="329" y="68" text-anchor="middle" fill="#16a34a" font-size="9">+ base (OH⁻)</text>
  <text x="240" y="138" text-anchor="middle" fill="#1d4ed8" font-weight="bold" font-size="11">AMPHOTERIC: dissolves in both acid and excess alkali</text>
  <text x="240" y="154" text-anchor="middle" fill="#64748b" font-size="10">Ca(OH)₂ is purely basic — only the left pathway exists for Group 2 elements below Be</text>
</svg>`
            },
            terms: []
        },
        {
            id: 'callout-diagonal',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Diagonal Relationship: Be and Al',
                text: '• Be (Group 2, Period 2) behaves similarly to Al (Group 3, Period 3) due to similar charge density<br/>• <strong>Both form covalent halides:</strong> BeCl₂ and AlCl₃ are covalent, electron-deficient, and polymerise in the solid state via dative bonds from Cl lone pairs<br/>• <strong>Both form amphoteric hydroxides:</strong> Be(OH)₂ + NaOH → [Be(OH)₄]²⁻; Al(OH)₃ + NaOH → [Al(OH)₄]⁻<br/>• <strong>Both form complex ions with water:</strong> [Be(H₂O)₄]²⁺ and [Al(H₂O)₆]³⁺<br/>• Reason: Be²⁺ (small, 2+ charge) and Al³⁺ (moderate, 3+ charge) have similar charge/radius ratios → similar polarising power'
            },
            terms: ['Diagonal relationship']
        },

        // ── EXAM CHECKLIST ─────────────────────────────────────────────────────
        {
            id: 'checklist-group2',
            type: 'checklist',
            data: {
                items: [
                    { text: 'State that atomic radius increases and IE₁/IE₂ decrease down Group 2', checked: false },
                    { text: 'Describe Be/Mg reactions with steam and Ca/Sr/Ba reactions with cold water (with equations)', checked: false },
                    { text: 'Explain why reactivity with water increases (activation energy = atomisation + IE₁ + IE₂ all decrease)', checked: false },
                    { text: 'State general oxide equation 2X + O₂ → 2XO and that all react with N₂ → X₃N₂', checked: false },
                    { text: 'Explain why only Sr and Ba form peroxides (small ions polarise O₂²⁻ and break O–O bond)', checked: false },
                    { text: 'Describe why Ca/Sr/Ba do not react fully with H₂SO₄ (insoluble sulfate coating)', checked: false },
                    { text: 'State solubility trends: hydroxides increase ↓ group; sulfates decrease ↓ group', checked: false },
                    { text: 'Describe and apply the BaSO₄ test for sulfate ions (acidified BaCl₂ → white ppt)', checked: false },
                    { text: 'Write equations for carbonate and nitrate thermal decomposition (XCO₃ → XO + CO₂; 2X(NO₃)₂ → 2XO + 4NO₂ + O₂)', checked: false },
                    { text: 'Explain that thermal stability increases down group (larger cations = lower charge density = less polarisation)', checked: false },
                    { text: 'Describe three anomalous properties of Be: covalent BeCl₂, 4-coordinate [Be(H₂O)₄]²⁺, amphoteric Be(OH)₂', checked: false },
                    { text: 'State the diagonal relationship between Be and Al with examples', checked: false }
                ]
            },
            terms: []
        },

        // ── SUMMARY ────────────────────────────────────────────────────────────
        {
            id: 'summary',
            type: 'summary',
            data: {
                text: 'Group 2 trends ↓: atomic radius ↑, IE₁/IE₂ ↓, electronegativity ↓. Water reactivity: Be needs steam (≥700°C); Mg burns in steam; Ca→Ba react with cold water with increasing vigour. Reason: activation energy falls (atomisation + IE₁ + IE₂ all decrease). Oxygen: all form XO; all form X₃N₂ with N₂. Sr/Ba also form peroxides (large ions have low charge density → cannot polarise O₂²⁻). Acids: all react with HCl; Ca/Sr/Ba form insoluble sulfate coatings with H₂SO₄; HNO₃ gives NO (dilute) or NO₂ (concentrated). Solubility: hydroxides increase ↓ group; sulfates decrease ↓ group (BaSO₄ insoluble → used in sulfate test with acidified BaCl₂). Thermal stability increases ↓ group (both carbonates and nitrates) — smaller cations have higher charge density → stronger polarisation of CO₃²⁻/NO₃⁻ → weaker C–O bonds → lower decomposition temperature. Beryllium anomalies: BeCl₂ is covalent (low bp, electron-deficient polymer via dative bonds); [Be(H₂O)₄]²⁺ is tetrahedral with coordination number 4; Be(OH)₂ is amphoteric. Diagonal relationship with Al.'
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-water-explain', prompt: 'Why does reactivity of Group 2 with water increase down the group? What three energy terms are involved?' },
            { id: 'c2', blockId: 'callout-peroxides', prompt: 'Why do Sr and Ba form peroxides when burnt in oxygen, but Be, Mg and Ca do not? Use polarisation in your answer.' },
            { id: 'c3', blockId: 'table-solubility', prompt: 'State the solubility trends for Group 2 hydroxides and sulfates down the group. Give one example for each.' },
            { id: 'c4', blockId: 'callout-polarising', prompt: 'Explain why BaCO₃ requires a higher temperature to decompose than MgCO₃. Use the terms charge density and polarisation.' },
            { id: 'c5', blockId: 'callout-becl2-covalent', prompt: 'Give two pieces of evidence that BeCl₂ is covalent, and explain why it polymerises in the solid state.' },
            { id: 'c6', blockId: 'callout-be-amphoteric', prompt: 'Write equations showing Be(OH)₂ reacting with (a) dilute H₂SO₄ and (b) NaOH solution.' }
        ],
        summaryText: 'Group 2 reactivity with water increases ↓ (lower activation energy: atomisation + IE₁ + IE₂ all decrease). All burn → XO; all form X₃N₂ with N₂; Sr/Ba also form peroxides. Hydroxide solubility increases ↓; sulfate solubility decreases ↓. Thermal stability of carbonates/nitrates increases ↓ group — larger cations = lower charge density = less polarisation of anion = stronger C–O bonds = higher decomposition temperature. Beryllium: covalent BeCl₂ (low bp, electron-deficient polymer), 4-coordinate [Be(H₂O)₄]²⁺ (tetrahedral), amphoteric Be(OH)₂. Diagonal relationship with Al.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_8_4;
