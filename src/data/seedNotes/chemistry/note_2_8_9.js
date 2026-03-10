/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 9
 * "Physical Properties of Period 3 Oxides"
 * Source: Pearson Edexcel IAL Chemistry — Period 3 trends; chemguide reference
 */
export const note_chemistry_2_8_9 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: {
        text: 'Describe and explain the physical properties (structure, melting/boiling points, electrical conductivity) of the Period 3 oxides (Na₂O to Cl₂O₇), relating them to their giant ionic, giant covalent, or molecular structures.'
      }
    },
    {
      id: 'h-overview',
      type: 'heading',
      data: { text: 'The Period 3 Oxides — Overview', level: 2 }
    },
    {
      id: 'list-oxides',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Highest oxides</strong> (element in its highest oxidation state): Na₂O · MgO · Al₂O₃ · SiO₂ · P₄O₁₀ · SO₃ · Cl₂O₇',
          '<strong>Other common oxides:</strong> P₄O₆ · SO₂ · Cl₂O',
          '<strong>Argon</strong> forms no oxides (zero-valent noble gas)',
          'The <strong>trend in structure</strong> across the period: giant ionic (Na, Mg, Al) → giant covalent (Si) → molecular (P, S, Cl)',
          'This structural change drives the trend in melting points and electrical conductivity'
        ]
      }
    },
    {
      id: 'svg-period3-oxide-trend',
      type: 'svg',
      data: {
        caption: 'Figure: Structural trend across Period 3 oxides — from giant ionic to giant covalent to molecular',
        svg: `<svg viewBox="0 0 620 130" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Background zones -->
  <rect x="0" y="0" width="190" height="130" rx="6" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.2"/>
  <rect x="196" y="0" width="100" height="130" rx="6" fill="#f0fdf4" stroke="#6ee7b7" stroke-width="1.2"/>
  <rect x="302" y="0" width="318" height="130" rx="6" fill="#fef9c3" stroke="#fcd34d" stroke-width="1.2"/>
  <!-- Zone labels -->
  <text x="95" y="14" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">Giant Ionic</text>
  <text x="246" y="14" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="11">Giant Covalent</text>
  <text x="461" y="14" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="11">Molecular</text>
  <!-- Oxide names -->
  <text x="32"  y="40" text-anchor="middle" fill="#1e3a8a" font-size="12" font-weight="bold">Na₂O</text>
  <text x="95"  y="40" text-anchor="middle" fill="#1e3a8a" font-size="12" font-weight="bold">MgO</text>
  <text x="158" y="40" text-anchor="middle" fill="#1e3a8a" font-size="12" font-weight="bold">Al₂O₃</text>
  <text x="246" y="40" text-anchor="middle" fill="#065f46" font-size="12" font-weight="bold">SiO₂</text>
  <text x="338" y="40" text-anchor="middle" fill="#78350f" font-size="12" font-weight="bold">P₄O₁₀</text>
  <text x="338" y="57" text-anchor="middle" fill="#78350f" font-size="10">(also P₄O₆)</text>
  <text x="461" y="40" text-anchor="middle" fill="#78350f" font-size="12" font-weight="bold">SO₃ / SO₂</text>
  <text x="584" y="40" text-anchor="middle" fill="#78350f" font-size="12" font-weight="bold">Cl₂O₇</text>
  <text x="584" y="57" text-anchor="middle" fill="#78350f" font-size="10">(also Cl₂O)</text>
  <!-- Oxide type labels -->
  <text x="32"  y="78" text-anchor="middle" fill="#374151" font-size="9">Na⁺ + O²⁻</text>
  <text x="95"  y="78" text-anchor="middle" fill="#374151" font-size="9">Mg²⁺ + O²⁻</text>
  <text x="158" y="78" text-anchor="middle" fill="#374151" font-size="9">Al³⁺ + O²⁻</text>
  <text x="246" y="78" text-anchor="middle" fill="#374151" font-size="9">Si–O covalent</text>
  <text x="461" y="78" text-anchor="middle" fill="#374151" font-size="9">S=O molecules</text>
  <text x="584" y="78" text-anchor="middle" fill="#374151" font-size="9">Cl–O molecules</text>
  <!-- Melting point bar -->
  <text x="0" y="105" fill="#6b7280" font-size="9" dominant-baseline="middle">mp:</text>
  <rect x="14" y="95" width="50" height="14" rx="2" fill="#1d4ed8"/>
  <rect x="70" y="95" width="50" height="14" rx="2" fill="#2563eb"/>
  <rect x="126" y="95" width="50" height="14" rx="2" fill="#3b82f6"/>
  <rect x="196" y="95" width="100" height="14" rx="2" fill="#22c55e"/>
  <rect x="302" y="95" width="55" height="8" rx="2" fill="#fbbf24" y="99"/>
  <rect x="433" y="101" width="55" height="6" rx="2" fill="#f59e0b"/>
  <rect x="560" y="103" width="48" height="4" rx="2" fill="#f59e0b"/>
  <text x="39"  y="117" text-anchor="middle" fill="#374151" font-size="8">~1132°C</text>
  <text x="95"  y="117" text-anchor="middle" fill="#374151" font-size="8">2852°C</text>
  <text x="151" y="117" text-anchor="middle" fill="#374151" font-size="8">2054°C</text>
  <text x="246" y="117" text-anchor="middle" fill="#374151" font-size="8">~1700°C</text>
  <text x="329" y="117" text-anchor="middle" fill="#374151" font-size="8">300°C(sub)</text>
  <text x="460" y="117" text-anchor="middle" fill="#374151" font-size="8">17°C/−73°C</text>
  <text x="584" y="117" text-anchor="middle" fill="#374151" font-size="8">−91°C/−59°C</text>
</svg>`
      }
    },
    {
      id: 'h-metallic-oxides',
      type: 'heading',
      data: { text: 'Giant Ionic Oxides — Na₂O, MgO, Al₂O₃', level: 2 }
    },
    {
      id: 'list-metallic-structure',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Structure:</strong> giant ionic lattices containing metal cations (Na⁺, Mg²⁺, Al³⁺) and oxide ions (O²⁻)',
          '<strong>MgO</strong> has the same structure as NaCl — 6:6 co-ordination (Mg²⁺ surrounded by 6 O²⁻ and vice versa)',
          'Na₂O and Al₂O₃ have more complex ionic arrangements (beyond A-level scope)',
          '<strong>High melting and boiling points</strong> — large amounts of energy needed to break the many strong electrostatic attractions throughout the lattice',
          'MgO has the highest melting point (~2852°C) among the three despite lower ion charge than Al³⁺ — likely due to aluminium oxide containing complex polyatomic ions in the melt rather than simple Al³⁺/O²⁻ (increasing covalent character as electronegativity increases across the period)',
          '<strong>Electrical conductivity (solid):</strong> None — ions are locked in fixed lattice positions, no mobile charge carriers',
          '<strong>Electrical conductivity (molten):</strong> Yes — ions are free to move; electrolysis is possible',
          'Industrial importance: electrolysis of molten Al₂O₃ (dissolved in molten cryolite) is the basis of aluminium extraction (Hall-Héroult process)'
        ]
      }
    },
    {
      id: 'callout-mgo-melt',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Electrolyse molten NaO or MgO?',
        text: '• <strong>Molten Na₂O</strong> — questionable: it may sublime (~1275°C) or decompose before proper melting. If it sublimes, there is no liquid to electrolyse.<br>• <strong>Molten MgO and Al₂O₃</strong> — melting points are far too high to achieve in a simple school or industrial electrolyser without enormous energy input (except Al₂O₃ dissolved in cryolite, which lowers the effective melting point to ~960°C).'
      }
    },
    {
      id: 'h-sio2',
      type: 'heading',
      data: { text: 'Giant Covalent Oxide — SiO₂ (Silicon Dioxide)', level: 2 }
    },
    {
      id: 'list-sio2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Structure:</strong> giant 3D covalent network — each Si atom is tetrahedrally bonded to 4 O atoms; each O bridges two Si atoms',
          'Si is no longer far enough left to form purely ionic bonds — the Si–O electronegativity difference is insufficient for ionisation',
          'Three different crystal forms exist (e.g. quartz, tridymite, cristobalite) — the simplest is based on the diamond structure with O atoms bridging each Si–Si pair',
          '<strong>Melting point ~1700°C; boiling point 2230°C</strong> — all strong Si–O covalent bonds throughout the 3D structure must be broken',
          '<strong>Electrical conductivity:</strong> Zero (solid or liquid) — no mobile electrons or ions at any temperature',
          'Si:O ratio = 1:2, hence empirical formula SiO₂ (not a discrete molecule — it represents the ratio in the infinite network)'
        ]
      }
    },
    {
      id: 'svg-sio2',
      type: 'svg',
      data: {
        caption: 'Figure: Giant covalent structure of SiO₂ — each silicon (grey) is tetrahedrally bonded to four oxygen atoms (red) which each bridge two silicon atoms',
        svg: `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Title -->
  <text x="210" y="17" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">SiO₂ — Giant Covalent Network</text>
  <!-- Central Si -->
  <circle cx="210" cy="130" r="18" fill="#9ca3af" stroke="#4b5563" stroke-width="2"/>
  <text x="210" y="134" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Si</text>
  <!-- Top O -->
  <circle cx="210" cy="78" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="210" y="82" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <line x1="210" y1="90" x2="210" y2="112" stroke="#374151" stroke-width="2"/>
  <!-- Si top -->
  <circle cx="210" cy="40" r="18" fill="#9ca3af" stroke="#4b5563" stroke-width="2"/>
  <text x="210" y="44" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Si</text>
  <line x1="210" y1="66" x2="210" y2="68" stroke="#374151" stroke-width="2"/>
  <!-- Left O -->
  <circle cx="142" cy="118" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="142" y="122" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <line x1="154" y1="122" x2="193" y2="126" stroke="#374151" stroke-width="2"/>
  <!-- Si left -->
  <circle cx="105" cy="110" r="18" fill="#9ca3af" stroke="#4b5563" stroke-width="2"/>
  <text x="105" y="114" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Si</text>
  <line x1="123" y1="113" x2="130" y2="115" stroke="#374151" stroke-width="2"/>
  <!-- Right O -->
  <circle cx="278" cy="118" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="278" y="122" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <line x1="227" y1="126" x2="266" y2="122" stroke="#374151" stroke-width="2"/>
  <!-- Si right -->
  <circle cx="315" cy="110" r="18" fill="#9ca3af" stroke="#4b5563" stroke-width="2"/>
  <text x="315" y="114" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Si</text>
  <line x1="290" y1="115" x2="297" y2="113" stroke="#374151" stroke-width="2"/>
  <!-- Bottom-left O -->
  <circle cx="168" cy="178" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="168" y="182" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <line x1="177" y1="168" x2="200" y2="148" stroke="#374151" stroke-width="2"/>
  <!-- Bottom-right O -->
  <circle cx="252" cy="178" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="252" y="182" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <line x1="243" y1="168" x2="220" y2="148" stroke="#374151" stroke-width="2"/>
  <!-- Continuation dots -->
  <text x="95"  y="80"  fill="#6b7280" font-size="18">⋯</text>
  <text x="315" y="80"  fill="#6b7280" font-size="18">⋯</text>
  <text x="148" y="215" fill="#6b7280" font-size="18">⋯</text>
  <text x="248" y="215" fill="#6b7280" font-size="18">⋯</text>
  <!-- Legend -->
  <circle cx="30"  cy="230" r="10" fill="#9ca3af" stroke="#4b5563" stroke-width="1.5"/>
  <text x="44" y="234" fill="#374151" font-size="10">Silicon</text>
  <circle cx="100" cy="230" r="8"  fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="112" y="234" fill="#374151" font-size="10">Oxygen (bridging)</text>
  <text x="250" y="234" fill="#6b7280" font-size="9">Structure extends in all 3 dimensions</text>
</svg>`
      }
    },
    {
      id: 'h-molecular-oxides',
      type: 'heading',
      data: { text: 'Molecular Oxides — Phosphorus, Sulphur, and Chlorine', level: 2 }
    },
    {
      id: 'list-molecular-general',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Structure:</strong> exist as discrete molecules (or polymeric aggregates for SO₃ solid)',
          '<strong>Intermolecular forces:</strong> van der Waals (dispersion) forces and dipole–dipole interactions — much weaker than ionic or covalent bonds in giant structures',
          '<strong>Melting and boiling points are much lower</strong> than the metallic oxides or SiO₂ — many are gases or liquids at room temperature',
          '<strong>Electrical conductivity:</strong> None (solid or liquid) — no ions or free electrons in any of these molecular oxides'
        ]
      }
    },
    {
      id: 'h-phosphorus',
      type: 'heading',
      data: { text: 'Phosphorus Oxides — P₄O₆ and P₄O₁₀', level: 3 }
    },
    {
      id: 'list-phosphorus-oxides',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>P₄O₆</strong> (phosphorus(III) oxide): white solid; mp 24°C, bp 173°C',
          'Structure of P₄O₆ derived from the P₄ tetrahedral molecule — each P–P bond is replaced by a P–O–P bridge (V-shaped, like water); 3 of the 5 outer electrons on each P are used',
          '<strong>P₄O₁₀</strong> (phosphorus(V) oxide): white solid; sublimes at 300°C (turns directly from solid to vapour)',
          'Structure of P₄O₁₀ derived from P₄O₆ — four additional O atoms are double-bonded, one to each P, using all 5 outer electrons of each P atom',
          'Both oxides are <strong>acidic</strong> — they react with water to form phosphoric acids',
          'P₄O₆ + 6H₂O → 4H₃PO₃ (phosphorous acid); P₄O₁₀ + 6H₂O → 4H₃PO₄ (phosphoric acid)'
        ]
      }
    },
    {
      id: 'svg-phosphorus-oxides',
      type: 'svg',
      data: {
        caption: 'Figure: P₄ molecule (tetrahedron), P₄O₆ (oxygen bridges replacing P–P bonds), and P₄O₁₀ (additional =O on each P). Orange = phosphorus, red = oxygen.',
        svg: `<svg viewBox="0 0 580 235" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- === P4 === -->
  <text x="85"  y="18" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="12">P₄ molecule</text>
  <!-- triangle face front -->
  <line x1="40"  y1="175" x2="130" y2="175" stroke="#374151" stroke-width="2"/>
  <line x1="40"  y1="175" x2="85"  y2="100" stroke="#374151" stroke-width="2"/>
  <line x1="130" y1="175" x2="85"  y2="100" stroke="#374151" stroke-width="2"/>
  <!-- back apex -->
  <line x1="40"  y1="175" x2="85"  y2="148" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="130" y1="175" x2="85"  y2="148" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="85"  y1="100" x2="85"  y2="148" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- P atoms -->
  <circle cx="85"  cy="100" r="14" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
  <circle cx="40"  cy="175" r="14" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
  <circle cx="130" cy="175" r="14" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
  <circle cx="85"  cy="148" r="14" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
  <text x="85"  y="104" text-anchor="middle" fill="white" font-size="9">P</text>
  <text x="40"  y="179" text-anchor="middle" fill="white" font-size="9">P</text>
  <text x="130" y="179" text-anchor="middle" fill="white" font-size="9">P</text>
  <text x="85"  y="152" text-anchor="middle" fill="white" font-size="9">P</text>
  <text x="85"  y="210" text-anchor="middle" fill="#6b7280" font-size="9">All 4 P–P bonds</text>

  <!-- Arrow -->
  <text x="200" y="145" text-anchor="middle" fill="#374151" font-size="20">→</text>
  <text x="200" y="162" text-anchor="middle" fill="#374151" font-size="9">+O₂</text>

  <!-- === P4O6 === -->
  <text x="340" y="18" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="12">P₄O₆</text>
  <!-- bonds with O bridges -->
  <line x1="280" y1="175" x2="310" y2="145" stroke="#374151" stroke-width="1.5"/>
  <line x1="310" y1="145" x2="340" y2="100" stroke="#374151" stroke-width="1.5"/>
  <line x1="280" y1="175" x2="320" y2="178" stroke="#374151" stroke-width="1.5"/>
  <line x1="320" y1="178" x2="370" y2="175" stroke="#374151" stroke-width="1.5"/>
  <line x1="370" y1="175" x2="372" y2="142" stroke="#374151" stroke-width="1.5"/>
  <line x1="372" y1="142" x2="340" y2="100" stroke="#374151" stroke-width="1.5"/>
  <!-- back P dashes -->
  <line x1="280" y1="175" x2="325" y2="148" stroke="#374151" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="370" y1="175" x2="325" y2="148" stroke="#374151" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="340" y1="100" x2="325" y2="118" stroke="#374151" stroke-width="1.2" stroke-dasharray="4,3"/>
  <!-- O bridge atoms -->
  <circle cx="310" cy="145" r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="310" cy="149" text-anchor="middle" fill="#7f1d1d" font-size="8"><tspan x="310" y="149">O</tspan></text>
  <circle cx="320" cy="178" r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="320" y="182" text-anchor="middle" fill="#7f1d1d" font-size="8">O</text>
  <circle cx="372" cy="142" r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="372" y="146" text-anchor="middle" fill="#7f1d1d" font-size="8">O</text>
  <!-- back O bridges (dashed) -->
  <circle cx="302" cy="160" r="8" fill="#fca5a5" stroke="#dc2626" stroke-width="1" opacity="0.55"/>
  <circle cx="325" cy="133" r="8" fill="#fca5a5" stroke="#dc2626" stroke-width="1" opacity="0.55"/>
  <circle cx="352" cy="162" r="8" fill="#fca5a5" stroke="#dc2626" stroke-width="1" opacity="0.55"/>
  <!-- P atoms P4O6 -->
  <circle cx="340" cy="100" r="14" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
  <circle cx="280" cy="175" r="14" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
  <circle cx="370" cy="175" r="14" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
  <circle cx="325" cy="148" r="14" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
  <text x="340" y="104" text-anchor="middle" fill="white" font-size="9">P</text>
  <text x="280" y="179" text-anchor="middle" fill="white" font-size="9">P</text>
  <text x="370" y="179" text-anchor="middle" fill="white" font-size="9">P</text>
  <text x="325" y="152" text-anchor="middle" fill="white" font-size="9">P</text>
  <text x="340" y="210" text-anchor="middle" fill="#6b7280" font-size="9">P–O–P bridges (6)</text>

  <!-- === P4O10 note === -->
  <text x="520" y="100" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="12">P₄O₁₀</text>
  <text x="520" y="118" text-anchor="middle" fill="#374151" font-size="9">= P₄O₆ plus</text>
  <text x="520" y="132" text-anchor="middle" fill="#374151" font-size="9">one P=O on</text>
  <text x="520" y="146" text-anchor="middle" fill="#374151" font-size="9">each of the 4</text>
  <text x="520" y="160" text-anchor="middle" fill="#374151" font-size="9">P atoms</text>
  <text x="520" y="180" text-anchor="middle" fill="#c2410c" font-size="10">Total: 6 P–O–P</text>
  <text x="520" y="194" text-anchor="middle" fill="#c2410c" font-size="10">+ 4 P=O</text>
  <text x="520" y="210" text-anchor="middle" fill="#6b7280" font-size="9">All 5 P e⁻ used</text>
</svg>`
      }
    },
    {
      id: 'h-sulphur-oxides',
      type: 'heading',
      data: { text: 'Sulphur Oxides — SO₂ and SO₃', level: 3 }
    },
    {
      id: 'list-so2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>SO₂</strong> (sulphur dioxide): colourless gas at room temperature; characteristic pungent/choking smell; bp −10°C',
          'Bent V-shaped molecule — S uses 4 of its 6 outer electrons to form two double bonds with O; the remaining 2 form a lone pair on S which causes the bent shape (VSEPR)',
          'SO₂ is a polar molecule (asymmetric, net dipole); weak but significant dipole–dipole intermolecular forces',
          '<strong>SO₃</strong> (sulphur trioxide): pure form is a white solid, very low melting/boiling point; extremely reactive toward water vapour',
          'Gaseous SO₃: planar trigonal molecule — all 6 outer electrons of S used in bonding with 3 oxygens; bond angle 120°',
          'Solid SO₃: exists as a cyclic trimer (S₃O₉) where three SO₃ units link in a ring, OR as polymeric chains of linked SO₄ tetrahedra — these larger structures give it a higher melting point than if it were purely monomeric',
          'SO₃ fumes violently in moist air → sulphuric acid (H₂SO₄) droplets'
        ]
      }
    },
    {
      id: 'svg-sulphur-oxides',
      type: 'svg',
      data: {
        caption: 'Figure: SO₂ (bent, lone pair on S) and SO₃ gas (planar trigonal). Yellow = S, red = O.',
        svg: `<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- SO2 -->
  <text x="105" y="20" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">SO₂ (bent)</text>
  <!-- lone pair on S -->
  <text x="105" y="52" text-anchor="middle" fill="#374151" font-size="18">⁚</text>
  <!-- S atom -->
  <circle cx="105" cy="75" r="20" fill="#fde047" stroke="#a16207" stroke-width="2"/>
  <text x="105" y="80" text-anchor="middle" fill="#78350f" font-weight="bold" font-size="13">S</text>
  <!-- double bonds — left -->
  <line x1="86"  y1="85" x2="50"  y2="120" stroke="#374151" stroke-width="2.2"/>
  <line x1="83"  y1="90" x2="47"  y2="125" stroke="#374151" stroke-width="2.2"/>
  <circle cx="38" cy="130" r="14" fill="#fca5a5" stroke="#dc2626" stroke-width="1.8"/>
  <text x="38"  y="134" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <!-- double bonds — right -->
  <line x1="124" y1="85" x2="160" y2="120" stroke="#374151" stroke-width="2.2"/>
  <line x1="127" y1="90" x2="163" y2="125" stroke="#374151" stroke-width="2.2"/>
  <circle cx="172" cy="130" r="14" fill="#fca5a5" stroke="#dc2626" stroke-width="1.8"/>
  <text x="172" y="134" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <!-- bond angle label -->
  <path d="M 62,115 Q 105,140 148,115" stroke="#6b7280" stroke-width="1" fill="none" stroke-dasharray="3,2"/>
  <text x="105" y="158" text-anchor="middle" fill="#6b7280" font-size="9">~119°</text>
  <text x="105" y="172" text-anchor="middle" fill="#3b82f6" font-size="9">Polar molecule — net dipole</text>

  <!-- Divider -->
  <line x1="220" y1="20" x2="220" y2="160" stroke="#e5e7eb" stroke-width="1.5"/>

  <!-- SO3 -->
  <text x="330" y="20" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">SO₃ (planar trigonal)</text>
  <!-- S -->
  <circle cx="330" cy="90" r="20" fill="#fde047" stroke="#a16207" stroke-width="2"/>
  <text x="330" y="95" text-anchor="middle" fill="#78350f" font-weight="bold" font-size="13">S</text>
  <!-- 3 double bonds at 120° -->
  <line x1="330" y1="70" x2="330" y2="34" stroke="#374151" stroke-width="2.2"/>
  <line x1="325" y1="70" x2="325" y2="34" stroke="#374151" stroke-width="2.2"/>
  <circle cx="330" cy="24" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.8"/>
  <text x="330" y="28" text-anchor="middle" fill="#7f1d1d" font-size="9">O</text>

  <line x1="313" y1="100" x2="272" y2="124" stroke="#374151" stroke-width="2.2"/>
  <line x1="315" y1="105" x2="274" y2="129" stroke="#374151" stroke-width="2.2"/>
  <circle cx="263" cy="136" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.8"/>
  <text x="263" y="140" text-anchor="middle" fill="#7f1d1d" font-size="9">O</text>

  <line x1="347" y1="100" x2="388" y2="124" stroke="#374151" stroke-width="2.2"/>
  <line x1="345" y1="105" x2="386" y2="129" stroke="#374151" stroke-width="2.2"/>
  <circle cx="397" cy="136" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.8"/>
  <text x="397" y="140" text-anchor="middle" fill="#7f1d1d" font-size="9">O</text>

  <text x="330" y="162" text-anchor="middle" fill="#6b7280" font-size="9">120° — all S outer e⁻ used</text>
  <text x="330" y="174" text-anchor="middle" fill="#6b7280" font-size="8">Non-polar molecule (symmetrical)</text>
</svg>`
      }
    },
    {
      id: 'h-chlorine-oxides',
      type: 'heading',
      data: { text: 'Chlorine Oxides — Cl₂O and Cl₂O₇', level: 3 }
    },
    {
      id: 'list-chlorine-oxides',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Cl₂O</strong> (chlorine(I) oxide): yellowish-red gas at room temperature; simple small molecule',
          'Structure: V-shaped, O bridging two Cl atoms (similar shape to H₂O); Cl uses 1 of its 7 outer electrons in bonding',
          '<strong>Cl₂O₇</strong> (chlorine(VII) oxide): colourless oily liquid at room temperature; Cl uses all 7 outer electrons in bonds with O',
          'Much larger molecule than Cl₂O → stronger van der Waals forces → higher melting and boiling point (liquid at room temperature vs gas for Cl₂O)',
          'Shape: tetrahedral around each Cl, V-shaped around the central O bridging the two ClO₃ halves',
          'Both are <strong>acidic oxides</strong>: Cl₂O + H₂O → 2HClO; Cl₂O₇ + H₂O → 2HClO₄ (perchloric acid)',
          '<strong>Electrical conductivity:</strong> None — molecular; no ions or free electrons'
        ]
      }
    },
    {
      id: 'svg-chlorine-oxides',
      type: 'svg',
      data: {
        caption: 'Figure: Cl₂O (left) — V-shaped, Cl–O–Cl; Cl₂O₇ (right) — two ClO₃ units linked by a central O atom. Green = Cl, red = O.',
        svg: `<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Cl2O -->
  <text x="105" y="22" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="12">Cl₂O</text>
  <text x="105" y="37" text-anchor="middle" fill="#6b7280" font-size="9">(chlorine(I) oxide — gas)</text>
  <!-- O centre -->
  <circle cx="105" cy="100" r="14" fill="#fca5a5" stroke="#dc2626" stroke-width="1.8"/>
  <text x="105" y="104" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <!-- Cl left -->
  <line x1="91" y1="94" x2="52" y2="75" stroke="#374151" stroke-width="2"/>
  <circle cx="40" cy="68" r="18" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
  <text x="40" y="72" text-anchor="middle" fill="#14532d" font-weight="bold" font-size="11">Cl</text>
  <!-- Cl right -->
  <line x1="119" y1="94" x2="158" y2="75" stroke="#374151" stroke-width="2"/>
  <circle cx="170" cy="68" r="18" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
  <text x="170" y="72" text-anchor="middle" fill="#14532d" font-weight="bold" font-size="11">Cl</text>
  <!-- bond angle -->
  <path d="M 62,76 Q 105,100 148,76" stroke="#6b7280" fill="none" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="105" y="140" text-anchor="middle" fill="#6b7280" font-size="9">Cl–O–Cl ~110°</text>
  <text x="105" y="154" text-anchor="middle" fill="#6b7280" font-size="9">V-shaped, polar</text>

  <!-- Divider -->
  <line x1="230" y1="20" x2="230" y2="185" stroke="#e5e7eb" stroke-width="1.5"/>

  <!-- Cl2O7 -->
  <text x="350" y="22" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="12">Cl₂O₇</text>
  <text x="350" y="37" text-anchor="middle" fill="#6b7280" font-size="9">(chlorine(VII) oxide — liquid)</text>
  <!-- Central O -->
  <circle cx="350" cy="100" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.8"/>
  <text x="350" y="104" text-anchor="middle" fill="#7f1d1d" font-size="8">O</text>
  <!-- Left Cl -->
  <line x1="338" y1="100" x2="296" y2="100" stroke="#374151" stroke-width="2"/>
  <circle cx="281" cy="100" r="18" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
  <text x="281" y="104" text-anchor="middle" fill="#14532d" font-weight="bold" font-size="10">Cl</text>
  <!-- Left 3 O atoms -->
  <line x1="265" y1="92" x2="248" y2="68" stroke="#374151" stroke-width="2"/>
  <circle cx="245" cy="58" r="10" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="245" y="62" text-anchor="middle" fill="#7f1d1d" font-size="8">O</text>
  <line x1="265" y1="108" x2="248" y2="132" stroke="#374151" stroke-width="2"/>
  <circle cx="245" cy="142" r="10" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="245" y="146" text-anchor="middle" fill="#7f1d1d" font-size="8">O</text>
  <line x1="263" y1="100" x2="240" y2="100" stroke="#374151" stroke-width="2"/>
  <circle cx="228" cy="100" r="10" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="228" y="104" text-anchor="middle" fill="#7f1d1d" font-size="8">O</text>
  <!-- Right Cl -->
  <line x1="362" y1="100" x2="404" y2="100" stroke="#374151" stroke-width="2"/>
  <circle cx="419" cy="100" r="18" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
  <text x="419" y="104" text-anchor="middle" fill="#14532d" font-weight="bold" font-size="10">Cl</text>
  <!-- Right 3 O atoms -->
  <line x1="435" y1="92" x2="452" y2="68" stroke="#374151" stroke-width="2"/>
  <circle cx="455" cy="58" r="10" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="455" y="62" text-anchor="middle" fill="#7f1d1d" font-size="8">O</text>
  <line x1="435" y1="108" x2="452" y2="132" stroke="#374151" stroke-width="2"/>
  <circle cx="455" cy="142" r="10" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="455" y="146" text-anchor="middle" fill="#7f1d1d" font-size="8">O</text>
  <line x1="437" y1="100" x2="457" y2="100" stroke="#374151" stroke-width="2"/>
  <circle cx="459" cy="100" r="0"/><!--placeholder-->
  <text x="350" y="175" text-anchor="middle" fill="#6b7280" font-size="9">Tetrahedral around each Cl, V-shaped at central O</text>
</svg>`
      }
    },
    {
      id: 'table-period3-comparison',
      type: 'comparisonTable',
      data: {
        caption: 'Summary: Physical properties of Period 3 oxides',
        headers: ['Oxide', 'Structure', 'Melting Point', 'Conducts (solid)', 'Conducts (liquid)', 'Notes'],
        rows: [
          ['Na₂O', 'Giant ionic', '~1132°C', 'No', 'Yes (electrolysis)', 'May sublime/decompose; Na⁺ and O²⁻ ions'],
          ['MgO', 'Giant ionic', '2852°C', 'No', 'Yes (electrolysis)', 'Same structure as NaCl; highest mp'],
          ['Al₂O₃', 'Giant ionic', '2054°C', 'No', 'Yes (electrolysis)', 'Electrolysed in cryolite for Al extraction'],
          ['SiO₂', 'Giant covalent', '~1700°C', 'No', 'No', 'No ions or free electrons; Si–O 3D network'],
          ['P₄O₆', 'Molecular', '24°C', 'No', 'No', 'Simple molecule; weak VdW forces'],
          ['P₄O₁₀', 'Molecular', '300°C (sublimes)', 'No', 'No', 'Strongly dehydrating; all 5 P electrons used'],
          ['SO₂', 'Molecular', '−73°C', 'No', 'No', 'Bent polar molecule; gas at RT'],
          ['SO₃', 'Molecular (trimer/polymer in solid)', '17°C', 'No', 'No', 'Reacts violently with water → H₂SO₄'],
          ['Cl₂O', 'Molecular', '−116°C', 'No', 'No', 'V-shaped; yellowish-red gas; reacts with H₂O → HClO'],
          ['Cl₂O₇', 'Molecular', '−91°C', 'No', 'No', 'Colourless oily liquid; largest Cl oxide molecule']
        ]
      }
    },
    {
      id: 'callout-acid-base',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Acid–Base Character of Period 3 Oxides',
        text: '• <strong>Metallic oxides (Na₂O, MgO, Al₂O₃)</strong> are <strong>basic</strong> — react with acids to form salts + water. Na₂O and MgO dissolve in water to give alkaline solutions.<br>• <strong>SiO₂</strong> is <strong>weakly acidic</strong> — reacts with concentrated alkali (NaOH) but does not dissolve in water. SiO₂ + 2NaOH → Na₂SiO₃ + H₂O<br>• <strong>P₄O₁₀, SO₃, SO₂, Cl₂O, Cl₂O₇</strong> are all <strong>acidic oxides</strong> — dissolve in water to form acids; react with alkalis to form salts.<br>• <strong>Al₂O₃</strong> is <strong>amphoteric</strong> — reacts with both acids (Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O) and with alkalis (Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄)'
      }
    },
    {
      id: 'checklist-p3oxides',
      type: 'checklist',
      data: {
        items: [
          { text: 'State the highest oxide of each Period 3 element (Na → Cl)', checked: false },
          { text: 'Describe the giant ionic structure of Na₂O, MgO, Al₂O₃ and explain their high melting points', checked: false },
          { text: 'Explain why MgO has a higher melting point than Al₂O₃', checked: false },
          { text: 'Describe the giant covalent structure of SiO₂ and explain why it cannot conduct electricity', checked: false },
          { text: 'Draw the structures of P₄, P₄O₆, and P₄O₁₀ and explain the bonding differences', checked: false },
          { text: 'Explain the shapes of SO₂ (bent) and SO₃ gas (planar trigonal) using VSEPR', checked: false },
          { text: 'Explain why solid SO₃ has a higher melting point than expected for a simple molecular oxide', checked: false },
          { text: 'Describe the acid–base character of Period 3 oxides across the period', checked: false }
        ]
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Period 3 oxide structures change left to right: <strong>giant ionic</strong> (Na₂O, MgO, Al₂O₃ — high mp, conduct when molten) → <strong>giant covalent</strong> (SiO₂ — high mp, never conducts) → <strong>molecular</strong> (P₄O₆/P₄O₁₀, SO₂/SO₃, Cl₂O/Cl₂O₇ — low mp, never conduct). Molecular oxides have low melting points due to weak van der Waals/dipole–dipole intermolecular forces. Acid–base character: basic (metal oxides) → amphoteric (Al₂O₃) → acidic (SiO₂ weakly; non-metal oxides strongly).'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'list-oxides', prompt: 'List the highest oxides of Na, Mg, Al, Si, P, S, Cl. State the structural type of each.' },
      { id: 'c2', blockId: 'list-metallic-structure', prompt: 'Explain why MgO has a higher melting point than Al₂O₃, even though Al has a higher charge on its ion.' },
      { id: 'c3', blockId: 'list-sio2', prompt: 'Describe the structure of SiO₂ and explain why it cannot conduct electricity in any state.' },
      { id: 'c4', blockId: 'list-phosphorus-oxides', prompt: 'Describe how the structure of P₄O₆ is derived from P₄. How does P₄O₁₀ differ from P₄O₆?' },
      { id: 'c5', blockId: 'list-so2', prompt: 'Explain the shape of SO₂ using VSEPR. Why does solid SO₃ have a higher melting point than the simple monomer would suggest?' },
      { id: 'c6', blockId: 'list-chlorine-oxides', prompt: 'Compare the physical states of Cl₂O and Cl₂O₇ at room temperature. Explain the difference in terms of intermolecular forces.' },
      { id: 'c7', blockId: 'callout-acid-base', prompt: 'State the acid–base character of: Na₂O, Al₂O₃, SiO₂, SO₃, Cl₂O. Write equations for Al₂O₃ reacting with an acid and an alkali.' },
      { id: 'c8', blockId: 'table-period3-comparison', prompt: 'Which Period 3 oxides can conduct electricity when liquid? Explain why none conduct when solid.' }
    ],
    summaryText: 'Period 3 oxide structures: giant ionic (Na₂O, MgO, Al₂O₃), giant covalent (SiO₂), molecular (P₄O₆/P₄O₁₀, SO₂/SO₃, Cl₂O/Cl₂O₇). High mp in giant structures (strong bonds throughout); low mp in molecular oxides (weak VdW/dipole–dipole). Only ionic oxides conduct electricity (when molten). MgO has higher mp than Al₂O₃ (increasing covalent character in Al₂O₃). P₄O₆ from P₄ + O bridges; P₄O₁₀ adds 4 P=O groups. SO₂ is bent (lone pair on S); SO₃ gas is planar trigonal. Cl₂O is a gas, Cl₂O₇ is a liquid (larger molecule). Metal oxides are basic; Al₂O₃ is amphoteric; non-metal oxides are acidic.',
    ready: false
  },
  evidence: []
};
