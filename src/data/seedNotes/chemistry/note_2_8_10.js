/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 10
 * "Reactions of Period 3 Oxides with Water, Acids and Bases"
 * Source: Pearson Edexcel IAL Chemistry; chemguide.co.uk/inorganic/period3/oxidesh2o.html
 */
export const note_chemistry_2_8_10 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Describe and explain the reactions of Period 3 oxides (Na₂O to Cl₂O₇) with water, acids and bases. Understand the trend in acid–base character across the period (strongly basic → amphoteric → strongly acidic) and write balanced equations for these reactions.'
      }
    },

    // ─── OVERALL TREND ────────────────────────────────────────────────
    {
      id: 'h-trend',
      type: 'heading',
      data: { text: 'Overall Trend in Acid–Base Character', level: 2 }
    },
    {
      id: 'list-trend',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Trend across Period 3: <strong>strongly basic</strong> (Na₂O, MgO) → <strong>amphoteric</strong> (Al₂O₃) → <strong>weakly acidic</strong> (SiO₂) → <strong>strongly acidic</strong> (P₄O₁₀, SO₃, Cl₂O₇)',
          'This trend applies to the <strong>highest oxide</strong> of each element — the one where the element is in its highest oxidation state',
          'Metal oxides contain free O²⁻ ions → strongly basic',
          'As electronegativity increases across the period, bonding character changes from ionic to covalent — non-metal oxides form acidic solutions with water',
          'Acidity of non-metal oxide solutions increases left to right: P(V) < S(VI) < Cl(VII)',
          '<strong>Amphoteric oxide:</strong> Al₂O₃ sits at the boundary — it can react with both acids (behaves as a base) and concentrated alkalis (behaves as an acid)'
        ]
      }
    },
    {
      id: 'svg-trend-bar',
      type: 'svg',
      data: {
        caption: 'Figure: Acid–base trend across Period 3 highest oxides — basic (left) to strongly acidic (right). Al₂O₃ is amphoteric.',
        svg: `<svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Background gradient band -->
  <defs>
    <linearGradient id="abgrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#3b82f6" stop-opacity="0.25"/>
      <stop offset="28%"  stop-color="#3b82f6" stop-opacity="0.12"/>
      <stop offset="40%"  stop-color="#a855f7" stop-opacity="0.20"/>
      <stop offset="52%"  stop-color="#f59e0b" stop-opacity="0.15"/>
      <stop offset="70%"  stop-color="#ef4444" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#ef4444" stop-opacity="0.30"/>
    </linearGradient>
  </defs>
  <rect x="10" y="30" width="660" height="80" rx="8" fill="url(#abgrad)" stroke="#d1d5db" stroke-width="1"/>

  <!-- Oxide boxes -->
  <!-- Na2O -->
  <rect x="20"  y="45" width="72" height="44" rx="5" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="56"  y="64" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="12">Na₂O</text>
  <text x="56"  y="78" text-anchor="middle" fill="#1e40af" font-size="9">Strongly</text>
  <text x="56"  y="89" text-anchor="middle" fill="#1e40af" font-size="9">basic</text>

  <!-- MgO -->
  <rect x="102" y="45" width="72" height="44" rx="5" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="138" y="64" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="12">MgO</text>
  <text x="138" y="78" text-anchor="middle" fill="#1e40af" font-size="9">Basic</text>
  <text x="138" y="89" text-anchor="middle" fill="#1e40af" font-size="9">(less reactive)</text>

  <!-- Al2O3 -->
  <rect x="184" y="40" width="78" height="54" rx="5" fill="#f3e8ff" stroke="#a855f7" stroke-width="2"/>
  <text x="223" y="62" text-anchor="middle" fill="#6b21a8" font-weight="bold" font-size="12">Al₂O₃</text>
  <text x="223" y="75" text-anchor="middle" fill="#6b21a8" font-size="9">Amphoteric</text>
  <text x="223" y="86" text-anchor="middle" fill="#6b21a8" font-size="9">(acid + base)</text>

  <!-- SiO2 -->
  <rect x="272" y="45" width="72" height="44" rx="5" fill="#fef9c3" stroke="#d97706" stroke-width="1.5"/>
  <text x="308" y="64" text-anchor="middle" fill="#78350f" font-weight="bold" font-size="12">SiO₂</text>
  <text x="308" y="78" text-anchor="middle" fill="#78350f" font-size="9">Weakly</text>
  <text x="308" y="89" text-anchor="middle" fill="#78350f" font-size="9">acidic</text>

  <!-- P4O10 -->
  <rect x="354" y="45" width="76" height="44" rx="5" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="392" y="64" text-anchor="middle" fill="#991b1b" font-weight="bold" font-size="11">P₄O₁₀</text>
  <text x="392" y="78" text-anchor="middle" fill="#991b1b" font-size="9">Acidic</text>
  <text x="392" y="89" text-anchor="middle" fill="#991b1b" font-size="9">→ H₃PO₄</text>

  <!-- SO3 -->
  <rect x="440" y="45" width="72" height="44" rx="5" fill="#fee2e2" stroke="#ef4444" stroke-width="1.8"/>
  <text x="476" y="64" text-anchor="middle" fill="#991b1b" font-weight="bold" font-size="12">SO₃</text>
  <text x="476" y="78" text-anchor="middle" fill="#991b1b" font-size="9">Strongly acidic</text>
  <text x="476" y="89" text-anchor="middle" fill="#991b1b" font-size="9">→ H₂SO₄</text>

  <!-- Cl2O7 -->
  <rect x="522" y="40" width="80" height="54" rx="5" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="562" y="62" text-anchor="middle" fill="#7f1d1d" font-weight="bold" font-size="11">Cl₂O₇</text>
  <text x="562" y="75" text-anchor="middle" fill="#7f1d1d" font-size="9">Very strongly</text>
  <text x="562" y="86" text-anchor="middle" fill="#7f1d1d" font-size="9">acidic → HClO₄</text>

  <!-- Arrow -->
  <line x1="15" y1="140" x2="665" y2="140" stroke="#6b7280" stroke-width="2" marker-end="url(#arr)"/>
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#6b7280"/>
    </marker>
  </defs>
  <text x="15"  y="158" fill="#1e40af" font-size="10" font-weight="bold">← Increasing basicity</text>
  <text x="500" y="158" fill="#dc2626" font-size="10" font-weight="bold">Increasing acidity →</text>
</svg>`
      }
    },
    {
      id: 'callout-note-highest-oxide',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Important: Highest Oxides Only',
        text: 'The clean basic→amphoteric→acidic trend only holds for the <strong>highest oxide</strong> of each element (e.g. P₄O₁₀ not P₄O₆; SO₃ not SO₂; Cl₂O₇ not Cl₂O). Lower oxidation state oxides (P₄O₆, SO₂, Cl₂O) are also acidic but the pattern is less regular. Always check your syllabus for which oxides are required.'
      }
    },

    // ─── SODIUM OXIDE ─────────────────────────────────────────────────
    {
      id: 'h-na2o',
      type: 'heading',
      data: { text: 'Sodium Oxide (Na₂O) — Strongly Basic', level: 2 }
    },
    {
      id: 'list-na2o',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Contains free O²⁻ ions — O²⁻ is a very strong base; has a high tendency to accept H⁺',
          '<strong>Reaction with water</strong> — exothermic; produces sodium hydroxide solution (pH ~14):',
          '<strong>Reaction with acids</strong> — strong base reacts with acids to form salts:'
        ]
      }
    },
    {
      id: 'eq-na2o-water',
      type: 'equation',
      data: {
        html: 'Na₂O(s) + H₂O(l) → 2NaOH(aq)',
        caption: 'Sodium oxide + water → sodium hydroxide (strongly alkaline solution)'
      }
    },
    {
      id: 'eq-na2o-acid',
      type: 'equation',
      data: {
        html: 'Na₂O(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l)',
        caption: 'Sodium oxide + hydrochloric acid → sodium chloride + water'
      }
    },

    // ─── MAGNESIUM OXIDE ──────────────────────────────────────────────
    {
      id: 'h-mgo',
      type: 'heading',
      data: { text: 'Magnesium Oxide (MgO) — Weakly Basic (less reactive)', level: 2 }
    },
    {
      id: 'list-mgo',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Also contains O²⁻ ions — basic oxide like Na₂O',
          '<strong>Less reactive with water than Na₂O</strong> — lattice energy for MgO (2+/2−) is much larger than Na₂O (1+/2−); more energy required to pull ions apart and let O²⁻ react with H₂O',
          '<strong>Reaction with water</strong> — very slow/limited at room temperature; forms a slightly alkaline suspension of Mg(OH)₂:',
          '<strong>Reaction with acids</strong> — MgO is basic; reacts with dilute acids:'
        ]
      }
    },
    {
      id: 'eq-mgo-water',
      type: 'equation',
      data: {
        html: 'MgO(s) + H₂O(l) → Mg(OH)₂(aq)',
        caption: 'Magnesium oxide + water → magnesium hydroxide (slightly alkaline; reaction is limited)'
      }
    },
    {
      id: 'eq-mgo-acid',
      type: 'equation',
      data: {
        html: 'MgO(s) + 2HCl(aq) → MgCl₂(aq) + H₂O(l)',
        caption: 'Magnesium oxide + hydrochloric acid → magnesium chloride + water'
      }
    },
    {
      id: 'callout-mgo-basicity',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Why Is MgO Less Basic Than Na₂O?',
        text: '• MgO lattice is held together by 2+/2− electrostatic attractions (much stronger than 1+/2− in Na₂O)<br>• More energy is needed to break the MgO lattice, so less of the O²⁻ is available to react with water<br>• The O²⁻ ions are less free in MgO — the stronger charge attraction keeps them more tightly bound'
      }
    },

    // ─── ALUMINIUM OXIDE ──────────────────────────────────────────────
    {
      id: 'h-al2o3',
      type: 'heading',
      data: { text: 'Aluminium Oxide (Al₂O₃) — Amphoteric', level: 2 }
    },
    {
      id: 'list-al2o3',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Does NOT react with water</strong> — unlike Na₂O and MgO; Al₂O₃ is essentially insoluble in water',
          'Al₂O₃ can react with <em>both</em> acids (showing basic character) and concentrated alkalis (showing acidic character)',
          '<strong>Reaction with acids</strong> — basic side of Al₂O₃; O²⁻ reacts with H⁺:',
          '<strong>Reaction with concentrated NaOH solution</strong> — acidic side; Al forms covalent bonds with O (electronegativity of Al is large enough for partial covalent bonding unlike Na and Mg):',
          'Various formulae for the aluminate product exist; Na[Al(OH)₄] (sodium tetrahydroxoaluminate) is common; NaAlO₂ is the dehydrated form',
          'Higher electronegativity of Al (compared to Na, Mg) → Al can form Al–O covalent bonds → can behave as a Lewis acid → reacts with bases'
        ]
      }
    },
    {
      id: 'eq-al2o3-acid',
      type: 'equation',
      data: {
        html: 'Al₂O₃(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂O(l)',
        caption: 'Aluminium oxide + hydrochloric acid (basic side of amphoteric behaviour)'
      }
    },
    {
      id: 'eq-al2o3-base',
      type: 'equation',
      data: {
        html: 'Al₂O₃(s) + 2NaOH(aq) + 3H₂O(l) → 2NaAl(OH)₄(aq)',
        caption: 'Aluminium oxide + hot concentrated sodium hydroxide → sodium tetrahydroxoaluminate (acidic side of amphoteric behaviour)'
      }
    },
    {
      id: 'callout-al2o3-amphoteric',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Is Al₂O₃ Amphoteric?',
        text: '• <strong>Basic side:</strong> Al₂O₃ contains O²⁻ → reacts with acids (O²⁻ + 2H⁺ → H₂O)<br>• <strong>Acidic side:</strong> Al³⁺ has high charge density and increasing electronegativity → Al can form Al–O covalent bonds in the [Al(OH)₄]⁻ complex → Al atom acts as a Lewis acid, accepting electron pairs from OH⁻<br>• Na and Mg cannot do this — their electronegativity is too low; they can only form purely ionic bonds with O<br>• <strong>Note:</strong> Al(OH)₃ (the hydroxide) is also amphoteric and shows the same reactions — see Subtopic 11 for full Al(OH)₃ chemistry and equations.'
      }
    },

    // ─── SILICON DIOXIDE ──────────────────────────────────────────────
    {
      id: 'h-sio2',
      type: 'heading',
      data: { text: 'Silicon Dioxide (SiO₂) — Weakly Acidic', level: 2 }
    },
    {
      id: 'list-sio2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Does NOT react with water</strong> — giant covalent structure; would require breaking many Si–O covalent bonds throughout the 3D network to dissolve — energetically very unfavourable',
          'Has no basic properties — no O²⁻ ions present; does not react with acids',
          '<strong>Weakly acidic</strong> — reacts with hot concentrated alkalis:',
          'Also reacts with basic oxides (e.g. CaO) at very high temperatures — basis of blast furnace slag removal:'
        ]
      }
    },
    {
      id: 'eq-sio2-naoh',
      type: 'equation',
      data: {
        html: 'SiO₂(s) + 2NaOH(aq, conc, hot) → Na₂SiO₃(aq) + H₂O(l)',
        caption: 'Silicon dioxide + hot concentrated sodium hydroxide → sodium silicate + water'
      }
    },
    {
      id: 'eq-sio2-cao',
      type: 'equation',
      data: {
        html: 'SiO₂(s) + CaO(s) → CaSiO₃(l)',
        caption: 'Silicon dioxide + calcium oxide → calcium silicate (liquid slag in blast furnace) — acidic oxide reacting with a basic oxide'
      }
    },

    // ─── PHOSPHORUS OXIDES ────────────────────────────────────────────
    {
      id: 'h-phosphorus',
      type: 'heading',
      data: { text: 'Phosphorus Oxides — Acidic', level: 2 }
    },
    {
      id: 'h-p4o6',
      type: 'heading',
      data: { text: 'P₄O₆ → Phosphorous Acid (H₃PO₃)', level: 3 }
    },
    {
      id: 'list-p4o6',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'P₄O₆ reacts with water to form <strong>phosphorous acid</strong> (H₃PO₃) — a weak acid',
          'H₃PO₃ has a pKₐ of ~2.0 (stronger than ethanoic acid pKₐ 4.76, but still a weak acid)',
          '<strong>Key structural feature:</strong> only <em>two</em> of the three H atoms in H₃PO₃ are acidic — the third is directly bonded to P (H–P bond), not in an O–H group, and cannot be released as H⁺',
          'Phosphorous acid (diprotic) reacts with NaOH in two stages depending on the ratio of acid:base:'
        ]
      }
    },
    {
      id: 'eq-p4o6-water',
      type: 'equation',
      data: {
        html: 'P₄O₆(s) + 6H₂O(l) → 4H₃PO₃(aq)',
        caption: 'Phosphorus(III) oxide + water → phosphorous acid (weak diprotic acid)'
      }
    },
    {
      id: 'eq-h3po3-naoh1',
      type: 'equation',
      data: {
        html: 'H₃PO₃(aq) + NaOH(aq) → NaH₂PO₃(aq) + H₂O(l)',
        caption: 'First neutralisation of phosphorous acid (1:1 ratio)'
      }
    },
    {
      id: 'eq-h3po3-naoh2',
      type: 'equation',
      data: {
        html: 'H₃PO₃(aq) + 2NaOH(aq) → Na₂HPO₃(aq) + 2H₂O(l)',
        caption: 'Full neutralisation of phosphorous acid (1:2 ratio) — both acidic H atoms removed'
      }
    },
    {
      id: 'h-p4o10',
      type: 'heading',
      data: { text: 'P₄O₁₀ → Phosphoric(V) Acid (H₃PO₄)', level: 3 }
    },
    {
      id: 'list-p4o10',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'P₄O₁₀ reacts (vigorously) with water to form <strong>phosphoric(V) acid</strong> (H₃PO₄) — also a weak acid',
          'pKₐ ≈ 2.15 (slightly weaker than phosphorous acid)',
          '<strong>Triprotic acid</strong> — has three O–H groups, all three H atoms can be donated to a base',
          'Reacts with NaOH in up to three stages:'
        ]
      }
    },
    {
      id: 'eq-p4o10-water',
      type: 'equation',
      data: {
        html: 'P₄O₁₀(s) + 6H₂O(l) → 4H₃PO₄(aq)',
        caption: 'Phosphorus(V) oxide + water → phosphoric(V) acid (violent; P₄O₁₀ is a powerful dehydrating agent)'
      }
    },
    {
      id: 'table-h3po4-naoh',
      type: 'comparisonTable',
      data: {
        caption: 'Three stages of H₃PO₄ neutralisation with NaOH',
        headers: ['Stage', 'Equation', 'Salt formed'],
        rows: [
          ['1st H⁺', 'H₃PO₄ + NaOH → NaH₂PO₄ + H₂O', 'Sodium dihydrogenphosphate'],
          ['2nd H⁺', 'H₃PO₄ + 2NaOH → Na₂HPO₄ + 2H₂O', 'Disodium hydrogenphosphate'],
          ['3rd H⁺', 'H₃PO₄ + 3NaOH → Na₃PO₄ + 3H₂O', 'Sodium phosphate (trisodium)']
        ]
      }
    },

    // ─── SVG: Phosphoric acid structure ─────────────────────────────
    {
      id: 'svg-h3po4-structure',
      type: 'svg',
      data: {
        caption: 'Figure: H₃PO₄ (left) — 3 acidic O–H groups, 1 P=O. H₃PO₃ (right) — only 2 O–H groups acidic; the H directly bonded to P is NOT acidic.',
        svg: `<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- H3PO4 -->
  <text x="105" y="20" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">H₃PO₄ (triprotic)</text>
  <!-- P central -->
  <circle cx="105" cy="105" r="18" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
  <text x="105" y="110" text-anchor="middle" fill="white" font-weight="bold" font-size="11">P</text>
  <!-- Top =O -->
  <line x1="105" y1="87" x2="105" y2="55" stroke="#374151" stroke-width="2.5"/>
  <line x1="109" y1="87" x2="109" y2="55" stroke="#374151" stroke-width="2.5"/>
  <circle cx="105" cy="44" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.8"/>
  <text x="105" y="48" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <text x="120" y="70" fill="#6b7280" font-size="9">(P=O)</text>
  <!-- Left O-H -->
  <line x1="88"  y1="100" x2="52"  y2="80" stroke="#374151" stroke-width="2"/>
  <circle cx="40" cy="73" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.8"/>
  <text x="40"  y="77" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <line x1="28"  y1="68" x2="12"  y2="57" stroke="#374151" stroke-width="1.8"/>
  <circle cx="8"  cy="50" r="9"  fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="8"   y="54" text-anchor="middle" fill="#1e40af" font-size="9">H</text>
  <!-- Right O-H -->
  <line x1="122" y1="100" x2="158" y2="80" stroke="#374151" stroke-width="2"/>
  <circle cx="170" cy="73" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.8"/>
  <text x="170" y="77" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <line x1="182" y1="68" x2="198" y2="57" stroke="#374151" stroke-width="1.8"/>
  <circle cx="204" cy="50" r="9"  fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="204" y="54" text-anchor="middle" fill="#1e40af" font-size="9">H</text>
  <!-- Bottom O-H -->
  <line x1="105" y1="123" x2="105" y2="153" stroke="#374151" stroke-width="2"/>
  <circle cx="105" cy="161" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.8"/>
  <text x="105" y="165" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <line x1="105" y1="173" x2="105" y2="190" stroke="#374151" stroke-width="1.8"/>
  <circle cx="105" cy="196" r="9"  fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="105" y="200" text-anchor="middle" fill="#1e40af" font-size="9">H</text>
  <text x="105" y="210" text-anchor="middle" fill="#2563eb" font-size="9">← 3 acidic OH</text>

  <!-- Divider -->
  <line x1="230" y1="15" x2="230" y2="205" stroke="#e5e7eb" stroke-width="1.5"/>

  <!-- H3PO3 -->
  <text x="355" y="20" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">H₃PO₃ (diprotic)</text>
  <circle cx="355" cy="105" r="18" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
  <text x="355" y="110" text-anchor="middle" fill="white" font-weight="bold" font-size="11">P</text>
  <!-- P=O top -->
  <line x1="355" y1="87" x2="355" y2="55" stroke="#374151" stroke-width="2.5"/>
  <line x1="359" y1="87" x2="359" y2="55" stroke="#374151" stroke-width="2.5"/>
  <circle cx="355" cy="44" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.8"/>
  <text x="355" y="48" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <!-- Left O-H acidic -->
  <line x1="338" y1="100" x2="302" y2="80" stroke="#374151" stroke-width="2"/>
  <circle cx="290" cy="73" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.8"/>
  <text x="290" y="77" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <line x1="278" y1="68" x2="262" y2="57" stroke="#374151" stroke-width="1.8"/>
  <circle cx="258" cy="50" r="9"  fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="258" y="54" text-anchor="middle" fill="#1e40af" font-size="9">H</text>
  <!-- Bottom O-H acidic -->
  <line x1="355" y1="123" x2="355" y2="153" stroke="#374151" stroke-width="2"/>
  <circle cx="355" cy="161" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.8"/>
  <text x="355" y="165" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <line x1="355" y1="173" x2="355" y2="190" stroke="#374151" stroke-width="1.8"/>
  <circle cx="355" cy="196" r="9"  fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="355" y="200" text-anchor="middle" fill="#1e40af" font-size="9">H</text>
  <!-- H directly on P (NOT acidic) -->
  <line x1="372" y1="100" x2="408" y2="80" stroke="#374151" stroke-width="2"/>
  <circle cx="420" cy="73" r="9"  fill="#d1fae5" stroke="#059669" stroke-width="1.8"/>
  <text x="420" y="77" text-anchor="middle" fill="#065f46" font-size="9">H</text>
  <text x="440" y="80" fill="#059669" font-size="9">← NOT</text>
  <text x="440" y="91" fill="#059669" font-size="9">acidic</text>
  <text x="355" y="210" text-anchor="middle" fill="#2563eb" font-size="9">Only 2 acidic OH</text>
</svg>`
      }
    },

    // ─── SULPHUR OXIDES ───────────────────────────────────────────────
    {
      id: 'h-sulphur',
      type: 'heading',
      data: { text: 'Sulphur Oxides — Acidic', level: 2 }
    },
    {
      id: 'h-so2',
      type: 'heading',
      data: { text: 'SO₂ → Sulphurous Acid (H₂SO₃)', level: 3 }
    },
    {
      id: 'list-so2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'SO₂ reacts with water to form <strong>sulphurous acid</strong> — a weak acid',
          'pKₐ ≈ 1.8 (slightly stronger than phosphorous acid; still a weak acid)',
          'In practice the solution is largely hydrated SO₂ (SO₂·xH₂O); H₂SO₃ may not exist as a distinct pure species — but the equilibrium is written as:',
          'pH ≈ 1 for a ~1 mol dm⁻³ solution (weak acid, not fully dissociated)',
          '<strong>Reaction with NaOH</strong> — two stages depending on SO₂ : NaOH ratio:',
          'Environmental significance: SO₂ + CaO → CaSO₃ — used to remove SO₂ from power station flue gases'
        ]
      }
    },
    {
      id: 'eq-so2-water',
      type: 'equation',
      data: {
        html: 'SO₂(g) + H₂O(l) ⇌ H₂SO₃(aq)',
        caption: 'Sulphur dioxide + water → sulphurous acid (equilibrium; weak acid)'
      }
    },
    {
      id: 'eq-so2-naoh1',
      type: 'equation',
      data: {
        html: 'SO₂(g) + 2NaOH(aq) → Na₂SO₃(aq) + H₂O(l)',
        caption: 'SO₂ + excess NaOH → sodium sulphite (also called sodium sulphate(IV))'
      }
    },
    {
      id: 'eq-so2-naoh2',
      type: 'equation',
      data: {
        html: 'SO₂(g) + NaOH(aq) → NaHSO₃(aq)',
        caption: 'SO₂ in excess + NaOH → sodium hydrogensulphite (sodium bisulphite); also called sodium hydrogensulphate(IV)'
      }
    },
    {
      id: 'h-so3',
      type: 'heading',
      data: { text: 'SO₃ → Sulphuric Acid (H₂SO₄)', level: 3 }
    },
    {
      id: 'list-so3',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'SO₃ reacts <strong>violently</strong> with water — produces a fog of concentrated sulphuric acid droplets',
          'In industry (Contact Process) SO₃ is <em>never</em> dissolved directly in water — it is absorbed into concentrated H₂SO₄ to form oleum (H₂S₂O₇), which is then carefully diluted to avoid the fog hazard',
          '<strong>H₂SO₄ is a strong diprotic acid:</strong>',
          '1st ionisation is essentially 100% complete → pH ≈ 0 for concentrated solutions',
          '2nd ionisation (HSO₄⁻ → H⁺ + SO₄²⁻) is an equilibrium — HSO₄⁻ is a relatively weak acid (similar strength to phosphorous acid)',
          'Charge delocalisaton over all four O atoms in SO₄²⁻ makes the sulphate ion stable → both ionisations release protons readily compared to smaller non-metal oxides'
        ]
      }
    },
    {
      id: 'eq-so3-water',
      type: 'equation',
      data: {
        html: 'SO₃(g) + H₂O(l) → H₂SO₄(aq)',
        caption: 'Sulphur trioxide + water → sulphuric acid (vigorous; produces acid fog)'
      }
    },
    {
      id: 'eq-h2so4-1st',
      type: 'equation',
      data: {
        html: 'H₂SO₄(aq) + H₂O(l) → H₃O⁺(aq) + HSO₄⁻(aq)',
        caption: '1st ionisation of H₂SO₄ — essentially complete (strong acid behaviour)'
      }
    },
    {
      id: 'eq-h2so4-2nd',
      type: 'equation',
      data: {
        html: 'HSO₄⁻(aq) + H₂O(l) ⇌ H₃O⁺(aq) + SO₄²⁻(aq)',
        caption: '2nd ionisation — equilibrium (HSO₄⁻ is a relatively weak acid)'
      }
    },
    {
      id: 'eq-so3-naoh',
      type: 'equation',
      data: {
        html: 'SO₃(g) + 2NaOH(aq) → Na₂SO₄(aq) + H₂O(l)',
        caption: 'Sulphur trioxide + sodium hydroxide → sodium sulphate + water'
      }
    },

    // ─── CHLORINE OXIDES ──────────────────────────────────────────────
    {
      id: 'h-chlorine',
      type: 'heading',
      data: { text: 'Chlorine Oxides — Acidic', level: 2 }
    },
    {
      id: 'h-cl2o',
      type: 'heading',
      data: { text: 'Cl₂O → Hypochlorous Acid (HClO)', level: 3 }
    },
    {
      id: 'list-cl2o',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Cl₂O reacts with water to give <strong>chloric(I) acid</strong> (HOCl, also written HClO) — hypochlorous acid',
          'Very weak acid: pKₐ ≈ 7.43 (much weaker than H₃PO₄ or H₂SO₃)',
          '<strong>Why so weak?</strong> HClO structure is H–O–Cl — only <em>one</em> O atom; no extra oxygens to stabilise the Cl–O⁻ anion by withdrawing electron density. The ion ClO⁻ is not very stable → proton is easily reclaimed',
          'Compare: ClO₄⁻ (from HClO₄) is stabilised by charge delocalisation over 4 O atoms → much weaker conjugate base → HClO₄ is much stronger',
          'Cl₂O reacts with NaOH:'
        ]
      }
    },
    {
      id: 'eq-cl2o-water',
      type: 'equation',
      data: {
        html: 'Cl₂O(g) + H₂O(l) ⇌ 2HClO(aq)',
        caption: 'Chlorine(I) oxide + water → hypochlorous acid (very weak acid)'
      }
    },
    {
      id: 'eq-cl2o-naoh',
      type: 'equation',
      data: {
        html: 'Cl₂O(g) + 2NaOH(aq) → 2NaClO(aq) + H₂O(l)',
        caption: 'Chlorine(I) oxide + sodium hydroxide → sodium hypochlorite (bleach)'
      }
    },
    {
      id: 'h-cl2o7',
      type: 'heading',
      data: { text: 'Cl₂O₇ → Perchloric Acid (HClO₄)', level: 3 }
    },
    {
      id: 'list-cl2o7',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Cl₂O₇ reacts with water to give <strong>chloric(VII) acid</strong> (HClO₄) — perchloric acid',
          'HClO₄ is one of the strongest common acids (pH ≈ 0)',
          '<strong>Why so strong?</strong> ClO₄⁻ (perchlorate ion) has four O atoms — charge is delocalised across all four O atoms → ClO₄⁻ is very stable → the conjugate base is very stable → acid gives up its proton very readily',
          'The more O atoms surrounding the central Cl, the more electron density is withdrawn from the O–H bond → O–H bond weakens → proton released more easily',
          'Cl₂O₇ + NaOH:'
        ]
      }
    },
    {
      id: 'eq-cl2o7-water',
      type: 'equation',
      data: {
        html: 'Cl₂O₇(l) + H₂O(l) → 2HClO₄(aq)',
        caption: 'Chlorine(VII) oxide + water → perchloric acid (very strong acid)'
      }
    },
    {
      id: 'eq-cl2o7-naoh',
      type: 'equation',
      data: {
        html: 'Cl₂O₇(l) + 2NaOH(aq) → 2NaClO₄(aq) + H₂O(l)',
        caption: 'Chlorine(VII) oxide + sodium hydroxide → sodium perchlorate + water'
      }
    },

    // ─── TREND IN NON-METAL OXIDE ACIDITY ────────────────────────────
    {
      id: 'h-acidity-trend',
      type: 'heading',
      data: { text: 'Trend in Acidity: Why Does It Increase Right Across Period 3?', level: 2 }
    },
    {
      id: 'list-acidity-trend',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'As you go right across Period 3, the central atom (P → S → Cl) has more <strong>oxygen atoms</strong> in its highest oxide',
          'More O atoms around the central atom → more electron-withdrawing effect on the O–H bond → O–H bond is weakened → proton is released more easily → stronger acid',
          'In addition, the resulting anion has more O atoms to delocalise the negative charge over → the anion is more stable → the acid is stronger (acid strength increases with stability of its conjugate base)',
          '<strong>Summary order of acid strength (highest oxides):</strong> H₃PO₄ < H₂SO₄ < HClO₄',
          'pKₐ comparison: H₃PO₄ (2.15) > H₂SO₄ (≈−3) > HClO₄ (≈−10) [lower pKₐ = stronger acid]'
        ]
      }
    },
    {
      id: 'svg-acidity-arrows',
      type: 'svg',
      data: {
        caption: 'Figure: Comparing the stability of oxoacid anions. More O atoms around the central halogen/non-metal = more delocalisation of negative charge = more stable anion = stronger acid.',
        svg: `<svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <text x="310" y="18" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">Anion Stability and Acid Strength</text>

  <!-- H3PO4 / H2PO4- -->
  <rect x="10" y="30" width="130" height="110" rx="7" fill="#fef9c3" stroke="#d97706" stroke-width="1.5"/>
  <text x="75" y="48" text-anchor="middle" fill="#78350f" font-weight="bold" font-size="11">H₂PO₄⁻</text>
  <text x="75" y="62" text-anchor="middle" fill="#78350f" font-size="9">from H₃PO₄</text>
  <!-- P with 4 O -->
  <circle cx="75" cy="100" r="14" fill="#f97316" stroke="#c2410c" stroke-width="1.5"/>
  <text x="75" y="104" text-anchor="middle" fill="white" font-size="9">P</text>
  <circle cx="55" cy="82"  r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1"/>
  <text x="55" y="86"  text-anchor="middle" fill="#7f1d1d" font-size="7">O</text>
  <circle cx="95" cy="82"  r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1"/>
  <text x="95" y="86"  text-anchor="middle" fill="#7f1d1d" font-size="7">O</text>
  <circle cx="55" cy="118" r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1"/>
  <text x="55" y="122" text-anchor="middle" fill="#7f1d1d" font-size="7">O</text>
  <circle cx="95" cy="118" r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1"/>
  <text x="95" y="122" text-anchor="middle" fill="#7f1d1d" font-size="7">O</text>
  <line x1="64" y1="89"  x2="67" y2="93"  stroke="#374151" stroke-width="1.2"/>
  <line x1="86" y1="89"  x2="83" y2="93"  stroke="#374151" stroke-width="1.2"/>
  <line x1="64" y1="111" x2="67" y2="107" stroke="#374151" stroke-width="1.2"/>
  <line x1="86" y1="111" x2="83" y2="107" stroke="#374151" stroke-width="1.2"/>
  <text x="75" y="148" text-anchor="middle" fill="#6b7280" font-size="9">4 O atoms</text>
  <text x="75" y="162" text-anchor="middle" fill="#d97706" font-size="9">Moderate acid</text>

  <!-- Arrow 1 -->
  <text x="165" y="100" text-anchor="middle" fill="#374151" font-size="22">→</text>
  <text x="165" y="115" text-anchor="middle" fill="#374151" font-size="9">more O</text>

  <!-- HSO4- -->
  <rect x="200" y="30" width="130" height="110" rx="7" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="265" y="48" text-anchor="middle" fill="#991b1b" font-weight="bold" font-size="11">HSO₄⁻</text>
  <text x="265" y="62" text-anchor="middle" fill="#991b1b" font-size="9">from H₂SO₄</text>
  <!-- S with 4 O -->
  <circle cx="265" cy="100" r="14" fill="#fde047" stroke="#a16207" stroke-width="1.5"/>
  <text x="265" y="104" text-anchor="middle" fill="#78350f" font-size="9">S</text>
  <circle cx="245" cy="82"  r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1"/>
  <text x="245" y="86"  text-anchor="middle" fill="#7f1d1d" font-size="7">O</text>
  <circle cx="285" cy="82"  r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1"/>
  <text x="285" y="86"  text-anchor="middle" fill="#7f1d1d" font-size="7">O</text>
  <circle cx="245" cy="118" r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1"/>
  <text x="245" y="122" text-anchor="middle" fill="#7f1d1d" font-size="7">O</text>
  <circle cx="285" cy="118" r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1"/>
  <text x="285" y="122" text-anchor="middle" fill="#7f1d1d" font-size="7">O</text>
  <line x1="254" y1="89"  x2="257" y2="93"  stroke="#374151" stroke-width="1.2"/>
  <line x1="276" y1="89"  x2="273" y2="93"  stroke="#374151" stroke-width="1.2"/>
  <line x1="254" y1="111" x2="257" y2="107" stroke="#374151" stroke-width="1.2"/>
  <line x1="276" y1="111" x2="273" y2="107" stroke="#374151" stroke-width="1.2"/>
  <text x="265" y="148" text-anchor="middle" fill="#6b7280" font-size="9">4 O atoms</text>
  <text x="265" y="162" text-anchor="middle" fill="#ef4444" font-size="9">Strong acid (1st H)</text>

  <!-- Arrow 2 -->
  <text x="355" y="100" text-anchor="middle" fill="#374151" font-size="22">→</text>
  <text x="355" y="115" text-anchor="middle" fill="#374151" font-size="9">more O</text>

  <!-- ClO4- -->
  <rect x="390" y="30" width="130" height="110" rx="7" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="455" y="48" text-anchor="middle" fill="#7f1d1d" font-weight="bold" font-size="11">ClO₄⁻</text>
  <text x="455" y="62" text-anchor="middle" fill="#7f1d1d" font-size="9">from HClO₄</text>
  <!-- Cl with 4 O -->
  <circle cx="455" cy="100" r="14" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>
  <text x="455" y="104" text-anchor="middle" fill="#14532d" font-size="9">Cl</text>
  <circle cx="435" cy="82"  r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1"/>
  <text x="435" y="86"  text-anchor="middle" fill="#7f1d1d" font-size="7">O</text>
  <circle cx="475" cy="82"  r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1"/>
  <text x="475" y="86"  text-anchor="middle" fill="#7f1d1d" font-size="7">O</text>
  <circle cx="435" cy="118" r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1"/>
  <text x="435" y="122" text-anchor="middle" fill="#7f1d1d" font-size="7">O</text>
  <circle cx="475" cy="118" r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1"/>
  <text x="475" y="122" text-anchor="middle" fill="#7f1d1d" font-size="7">O</text>
  <line x1="444" y1="89"  x2="447" y2="93"  stroke="#374151" stroke-width="1.2"/>
  <line x1="466" y1="89"  x2="463" y2="93"  stroke="#374151" stroke-width="1.2"/>
  <line x1="444" y1="111" x2="447" y2="107" stroke="#374151" stroke-width="1.2"/>
  <line x1="466" y1="111" x2="463" y2="107" stroke="#374151" stroke-width="1.2"/>
  <text x="455" y="148" text-anchor="middle" fill="#6b7280" font-size="9">4 O atoms</text>
  <text x="455" y="162" text-anchor="middle" fill="#dc2626" font-size="9">Very strong acid</text>

  <!-- pKa row -->
  <text x="75"  y="185" text-anchor="middle" fill="#6b7280" font-size="9">pKₐ ≈ 2.15</text>
  <text x="265" y="185" text-anchor="middle" fill="#6b7280" font-size="9">pKₐ ≈ −3</text>
  <text x="455" y="185" text-anchor="middle" fill="#6b7280" font-size="9">pKₐ ≈ −10</text>

  <!-- Increasing acidity arrow -->
  <line x1="545" y1="25" x2="545" y2="175" stroke="#dc2626" stroke-width="2" marker-end="url(#arrd)"/>
  <defs>
    <marker id="arrd" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#dc2626"/>
    </marker>
  </defs>
  <text x="590" y="55" text-anchor="middle" fill="#dc2626" font-size="10" font-weight="bold" transform="rotate(90,575,105)">Increasing acid strength →</text>
</svg>`
      }
    },

    // ─── MASTER SUMMARY TABLE ─────────────────────────────────────────
    {
      id: 'h-summary-table',
      type: 'heading',
      data: { text: 'Summary: Reactions of Period 3 Oxides', level: 2 }
    },
    {
      id: 'table-reactions',
      type: 'comparisonTable',
      data: {
        caption: 'Reactions of Period 3 highest oxides with water and bases/acids',
        headers: ['Oxide', 'Acid–Base', 'Reaction with H₂O', 'Product / pH', 'Reaction with NaOH', 'Reaction with HCl'],
        rows: [
          ['Na₂O', 'Strongly basic', 'Na₂O + H₂O → 2NaOH', 'pH ~14', '—', 'Na₂O + 2HCl → 2NaCl + H₂O'],
          ['MgO', 'Basic', 'MgO + H₂O → Mg(OH)₂ (slow)', 'Slightly alkaline', '—', 'MgO + 2HCl → MgCl₂ + H₂O'],
          ['Al₂O₃', 'Amphoteric', 'No reaction', '—', 'Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄', 'Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O'],
          ['SiO₂', 'Weakly acidic', 'No reaction', '—', 'SiO₂ + 2NaOH → Na₂SiO₃ + H₂O (hot, conc)', 'No reaction'],
          ['P₄O₁₀', 'Acidic', 'P₄O₁₀ + 6H₂O → 4H₃PO₄', 'pH ~1 (weak)', 'H₃PO₄ + NaOH (3 stages)', '—'],
          ['SO₃', 'Strongly acidic', 'SO₃ + H₂O → H₂SO₄ (violent)', 'pH ~0 (strong)', 'SO₃ + 2NaOH → Na₂SO₄ + H₂O', '—'],
          ['Cl₂O₇', 'Very strongly acidic', 'Cl₂O₇ + H₂O → 2HClO₄', 'pH ~0 (strongest)', 'Cl₂O₇ + 2NaOH → 2NaClO₄ + H₂O', '—'],
          ['SO₂', 'Acidic', 'SO₂ + H₂O ⇌ H₂SO₃', 'pH ~1 (weak)', 'SO₂ + 2NaOH → Na₂SO₃ + H₂O', '—'],
          ['Cl₂O', 'Acidic', 'Cl₂O + H₂O ⇌ 2HClO', 'Very weak', 'Cl₂O + 2NaOH → 2NaClO + H₂O', '—']
        ]
      }
    },

    // ─── CHECKLIST ────────────────────────────────────────────────────
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'State the trend in acid–base character across Period 3 highest oxides', checked: false },
          { text: 'Write equations for Na₂O and MgO reacting with water; explain why MgO is less reactive', checked: false },
          { text: 'Explain the amphoteric nature of Al₂O₃; write equations for reactions with HCl and NaOH', checked: false },
          { text: 'Explain why SiO₂ does not react with water but does react with hot concentrated NaOH', checked: false },
          { text: 'Calculate how many moles of NaOH react with 1 mol H₃PO₄ and 1 mol H₃PO₃', checked: false },
          { text: 'Write equations for SO₂ + H₂O and SO₃ + H₂O; state the acid strength of each product', checked: false },
          { text: 'Explain why HClO is a very weak acid but HClO₄ is very strong (in terms of anion stability)', checked: false },
          { text: 'Explain the trend in acid strength: H₃PO₄ < H₂SO₄ < HClO₄ in terms of electron withdrawal by O atoms', checked: false }
        ]
      }
    },

    // ─── SUMMARY ──────────────────────────────────────────────────────
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Period 3 oxides show a clear trend in acid–base character: <strong>basic</strong> (Na₂O, MgO — contain O²⁻, dissolve in water as alkalis) → <strong>amphoteric</strong> (Al₂O₃ — reacts with both acids and concentrated NaOH) → <strong>weakly acidic</strong> (SiO₂ — only reacts with hot concentrated alkali) → <strong>acidic</strong> (P₄O₁₀ → H₃PO₄; SO₃ → H₂SO₄; Cl₂O₇ → HClO₄). Lower oxidation state oxides (SO₂, Cl₂O) are also acidic but the pattern is less clean. Acid strength of oxoacids increases with the number of O atoms: more O atoms → more withdrawal of electron density from O–H → weaker O–H bond → easier proton donation → stronger acid.'
      }
    }
  ],

  recall: {
    enabled: true,
    cues: [
      {
        id: 'rc1',
        blockId: 'list-trend',
        prompt: 'Describe the trend in acid–base character across Period 3 highest oxides. Which oxide is amphoteric?'
      },
      {
        id: 'rc2',
        blockId: 'list-mgo',
        prompt: 'Write equations for Na₂O and MgO reacting with water. Why is MgO less reactive with water than Na₂O?'
      },
      {
        id: 'rc3',
        blockId: 'list-al2o3',
        prompt: 'Write equations for Al₂O₃ reacting with HCl and NaOH. Why does SiO₂ NOT react with water?'
      },
      {
        id: 'rc4',
        blockId: 'list-p4o6',
        prompt: 'Why does H₃PO₃ only donate TWO protons to NaOH, not three? Write the two possible equations.'
      },
      {
        id: 'rc5',
        blockId: 'list-so3',
        prompt: 'Explain the two ionisation stages of H₂SO₄, and why the second stage is an equilibrium.'
      },
      {
        id: 'rc6',
        blockId: 'list-cl2o',
        prompt: 'Compare the acid strength of HClO and HClO₄. Explain the difference using the stability of their conjugate bases.'
      }
    ],
    summaryText: 'Trend: Na₂O/MgO (basic) → Al₂O₃ (amphoteric) → SiO₂ (weakly acidic) → P₄O₁₀/SO₃/Cl₂O₇ (acidic). Na₂O + H₂O → NaOH (pH 14). MgO less reactive with water (stronger lattice). Al₂O₃ reacts with HCl and hot conc NaOH. SiO₂ no reaction with water (giant covalent). P₄O₁₀ → H₃PO₄ (weak, triprotic). H₃PO₃ is diprotic (not triprotic — one H bonded directly to P). SO₂ → H₂SO₃ (weak). SO₃ → H₂SO₄ (strong, 1st ionisation complete). Cl₂O → HClO (very weak, pKₐ 7.4). Cl₂O₇ → HClO₄ (very strong). Acid strength ∝ number of O atoms on central atom (more O → better charge delocalisation in anion → stronger acid).',
    ready: false
  },

  evidence: []
};
