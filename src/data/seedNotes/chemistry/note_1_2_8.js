/**
 * Seed note: Chemistry · Unit 1 · Topic 2 · Subtopic 8
 * "Electronic configurations of ions"
 * Source: Pearson Edexcel IAL Chemistry — Section 2A.3–2A.4
 */
export const note_chemistry_1_2_8 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Write electronic configurations for ions of the first 36 elements; explain trends in first ionisation energy, atomic radius and electronegativity across Period 3; and relate the physical properties of Period 3 elements to their structure and bonding.' },
      terms: []
    },
    {
      id: 'h-cations',
      type: 'heading',
      data: { text: 'Forming Cations (Positive Ions)', level: 2 },
      terms: []
    },
    {
      id: 'list-cations',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Cations form by <strong>removing electrons</strong> from the atom.',
          'Electrons are always removed from the <strong>highest energy subshell first</strong>.',
          'For main group elements, this is straightforward — remove from the outermost shell.'
        ]
      },
      terms: ['Cation']
    },
    {
      id: 'table-cations-main',
      type: 'comparisonTable',
      data: {
        caption: 'Cations of main group elements',
        headers: ['Ion', 'Atom Config.', 'Ion Config.', 'Note'],
        rows: [
          ['Na⁺', '1s² 2s² 2p⁶ 3s¹', '1s² 2s² 2p⁶', 'Loses 1 electron from 3s'],
          ['Mg²⁺', '1s² 2s² 2p⁶ 3s²', '1s² 2s² 2p⁶', 'Loses 2 electrons from 3s'],
          ['Al³⁺', '1s² 2s² 2p⁶ 3s² 3p¹', '1s² 2s² 2p⁶', 'Loses 1×3p, then 2×3s']
        ]
      },
      terms: ['Cation']
    },
    {
      id: 'callout-transition',
      type: 'callout',
      data: {
        style: 'warning',
        title: '⚠ Transition Metal Ions: Lose 4s electrons FIRST!',
        text: 'Although 4s fills <em>before</em> 3d, when forming cations, 4s electrons are lost <em>before</em> 3d electrons. This is because once the 3d subshell begins to fill, the 4s becomes higher in energy than 3d.<br/><br/><strong>Fe (Z=26):</strong> [Ar] 3d⁶ 4s²<br/><strong>Fe²⁺:</strong> [Ar] 3d⁶ (lost both 4s electrons)<br/><strong>Fe³⁺:</strong> [Ar] 3d⁵ (lost both 4s and one 3d electron)<br/><br/><strong>Cu (Z=29):</strong> [Ar] 3d¹⁰ 4s¹<br/><strong>Cu⁺:</strong> [Ar] 3d¹⁰<br/><strong>Cu²⁺:</strong> [Ar] 3d⁹'
      },
      terms: []
    },
    {
      id: 'h-anions',
      type: 'heading',
      data: { text: 'Forming Anions (Negative Ions)', level: 2 },
      terms: []
    },
    {
      id: 'list-anions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Anions form by <strong>adding electrons</strong> to the atom.',
          'Electrons are added to the next available orbital in the <strong>outermost subshell</strong>.'
        ]
      },
      terms: ['Anion']
    },
    {
      id: 'table-anions',
      type: 'comparisonTable',
      data: {
        caption: 'Anions of main group elements',
        headers: ['Ion', 'Atom Config.', 'Ion Config.'],
        rows: [
          ['Cl⁻', '1s² 2s² 2p⁶ 3s² 3p⁵', '1s² 2s² 2p⁶ 3s² 3p⁶'],
          ['O²⁻', '1s² 2s² 2p⁴', '1s² 2s² 2p⁶'],
          ['N³⁻', '1s² 2s² 2p³', '1s² 2s² 2p⁶']
        ]
      },
      terms: []
    },
    {
      id: 'callout-isoelectronic',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Isoelectronic species',
        text: 'Ions can be <strong>isoelectronic</strong> — having the same number of electrons (and therefore the same electron configuration) despite being from different elements.<br/><br/>Examples: Na⁺, Mg²⁺, Al³⁺, O²⁻, N³⁻, F⁻ are all isoelectronic with Ne:<br/>All have the configuration <strong>1s² 2s² 2p⁶</strong> (10 electrons).'
      },
      terms: ['Isoelectronic']
    },

    // ── Atomic Properties of Period 3 ────────────────────────────────────────
    {
      id: 'h-p3-atomic',
      type: 'heading',
      data: { text: 'Atomic Properties of Period 3 Elements (Na → Ar)', level: 2 },
      terms: []
    },
    {
      id: 'h-p3-elec',
      type: 'heading',
      data: { text: 'Electronic Structures', level: 3 },
      terms: []
    },
    {
      id: 'list-p3-elec-intro',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'In Period 3, the <strong>3s and 3p orbitals</strong> progressively fill with electrons.',
          'All 8 elements share the neon core: <strong>[Ne] = 1s² 2s² 2p⁶</strong>.',
          'Valence electrons increase from 1 (Na) to 8 (Ar) across the period.'
        ]
      },
      terms: []
    },
    {
      id: 'table-p3-elec',
      type: 'comparisonTable',
      data: {
        caption: 'Abbreviated electronic structures of Period 3 elements',
        headers: ['Element', 'Abbreviated Config.', 'Detailed outer orbitals'],
        rows: [
          ['Na', '[Ne] 3s¹',     '3s¹'],
          ['Mg', '[Ne] 3s²',     '3s²'],
          ['Al', '[Ne] 3s² 3p¹', '3s² 3p<sub>x</sub>¹'],
          ['Si', '[Ne] 3s² 3p²', '3s² 3p<sub>x</sub>¹ 3p<sub>y</sub>¹'],
          ['P',  '[Ne] 3s² 3p³', '3s² 3p<sub>x</sub>¹ 3p<sub>y</sub>¹ 3p<sub>z</sub>¹'],
          ['S',  '[Ne] 3s² 3p⁴', '3s² 3p<sub>x</sub>² 3p<sub>y</sub>¹ 3p<sub>z</sub>¹'],
          ['Cl', '[Ne] 3s² 3p⁵', '3s² 3p<sub>x</sub>² 3p<sub>y</sub>² 3p<sub>z</sub>¹'],
          ['Ar', '[Ne] 3s² 3p⁶', '3s² 3p<sub>x</sub>² 3p<sub>y</sub>² 3p<sub>z</sub>²']
        ]
      },
      terms: []
    },
    {
      id: 'h-p3-ie1',
      type: 'heading',
      data: { text: 'First Ionisation Energy (IE₁)', level: 3 },
      terms: []
    },
    {
      id: 'list-p3-ie1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Definition:</strong> Energy to remove 1 mole of outermost electrons from 1 mole of gaseous atoms: X(g) → X⁺(g) + e⁻.',
          '<strong>General trend:</strong> IE₁ <strong>increases</strong> from Na to Ar due to increasing nuclear charge.',
          'Two anomalous dips break the upward trend: <strong>Mg → Al</strong> and <strong>P → S</strong>.'
        ]
      },
      terms: ['First ionisation energy']
    },
    {
      id: 'list-p3-ie1-factors',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Nuclear charge (↑ → IE₁ ↑):</strong> More protons = stronger attraction on outer electrons.',
          '<strong>Distance from nucleus (↑ → IE₁ ↓):</strong> Outer electron further away = easier to remove.',
          '<strong>Electron shielding (↑ → IE₁ ↓):</strong> Inner-shell electrons partially cancel the nuclear pull on outer electrons.',
          '<strong>Orbital pairing (paired → IE₁ ↓):</strong> Two electrons in the same orbital repel each other → paired electron is easier to remove.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-p3-ie1-upward',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why IE₁ Generally Increases Na → Ar',
        text: '• All outer electrons are in 3-level orbitals throughout Period 3 — same orbital type, approximately the same distance from the nucleus.<br/>• All are shielded by the same inner electrons (shells 1 and 2) — constant shielding.<br/>• The only major change is increasing nuclear charge: Na (11p⁺) → Ar (18p⁺).<br/>• More protons attract outer electrons more strongly AND pull them closer → progressively higher IE₁.'
      },
      terms: []
    },
    {
      id: 'callout-p3-ie1-dips',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Why IE₁ Dips at Al and at S (Anomalous Falls)',
        text: '<strong>Dip at Mg → Al:</strong><br/>• Mg outer electron: 3s orbital. Al outer electron: 3p orbital.<br/>• The 3p orbital is slightly <em>higher energy</em> and <em>further from the nucleus</em> than a 3s orbital.<br/>• Al\'s 3p electron is also partially shielded by the filled 3s² electrons (extra shielding beyond inner shells).<br/>• Both effects reduce attraction more than the extra proton adds → IE₁(Al) &lt; IE₁(Mg).<br/><br/><strong>Dip at P → S:</strong><br/>• P: three singly occupied 3p orbitals (3p<sub>x</sub>¹ 3p<sub>y</sub>¹ 3p<sub>z</sub>¹) — no pairing (Hund\'s rule).<br/>• S: one doubly occupied 3p orbital (3p<sub>x</sub>² 3p<sub>y</sub>¹ 3p<sub>z</sub>¹) — first pairing occurs.<br/>• Paired electrons in S\'s 3p<sub>x</sub>² <em>repel each other</em>, lowering IE₁ below what the extra proton would predict → IE₁(S) &lt; IE₁(P).'
      },
      terms: []
    },
    {
      id: 'svg-p3-ie1',
      type: 'svg',
      data: {
        caption: 'First ionisation energy trend across Period 3. Note the general increase and the two anomalous dips at Al (3p orbital effect) and S (paired electron repulsion).',
        svg: `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <text x="260" y="16" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">First Ionisation Energy Across Period 3</text>
  <line x1="60" y1="195" x2="490" y2="195" stroke="#334155" stroke-width="2"/>
  <line x1="60" y1="25" x2="60" y2="195" stroke="#334155" stroke-width="2"/>
  <text transform="rotate(-90 16 115)" x="16" y="115" text-anchor="middle" fill="#475569" font-size="10">IE₁ / kJ mol⁻¹</text>
  <text x="55" y="198" text-anchor="end" fill="#64748b" font-size="9">400</text>
  <text x="55" y="162" text-anchor="end" fill="#64748b" font-size="9">700</text>
  <text x="55" y="122" text-anchor="end" fill="#64748b" font-size="9">1000</text>
  <text x="55" y="82" text-anchor="end" fill="#64748b" font-size="9">1300</text>
  <text x="55" y="42" text-anchor="end" fill="#64748b" font-size="9">1600</text>
  <line x1="60" y1="162" x2="490" y2="162" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="60" y1="122" x2="490" y2="122" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="60" y1="82" x2="490" y2="82" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="60" y1="42" x2="490" y2="42" stroke="#e2e8f0" stroke-width="1"/>
  <polyline points="80,181 135,147 190,170 245,140 300,108 355,110 410,74 465,36" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="80" cy="181" r="5" fill="#3b82f6"/>
  <circle cx="135" cy="147" r="5" fill="#3b82f6"/>
  <circle cx="190" cy="170" r="6" fill="#ef4444"/>
  <circle cx="245" cy="140" r="5" fill="#3b82f6"/>
  <circle cx="300" cy="108" r="5" fill="#3b82f6"/>
  <circle cx="355" cy="110" r="6" fill="#ef4444"/>
  <circle cx="410" cy="74" r="5" fill="#3b82f6"/>
  <circle cx="465" cy="36" r="5" fill="#3b82f6"/>
  <text x="80" y="176" text-anchor="middle" fill="#1e40af" font-size="8">496</text>
  <text x="135" y="141" text-anchor="middle" fill="#1e40af" font-size="8">738</text>
  <text x="190" y="179" text-anchor="middle" fill="#dc2626" font-size="8">577</text>
  <text x="245" y="134" text-anchor="middle" fill="#1e40af" font-size="8">786</text>
  <text x="300" y="102" text-anchor="middle" fill="#1e40af" font-size="8">1012</text>
  <text x="355" y="119" text-anchor="middle" fill="#dc2626" font-size="8">1000</text>
  <text x="410" y="68" text-anchor="middle" fill="#1e40af" font-size="8">1251</text>
  <text x="465" y="30" text-anchor="middle" fill="#1e40af" font-size="8">1521</text>
  <text x="80" y="212" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">Na</text>
  <text x="135" y="212" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">Mg</text>
  <text x="190" y="212" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="11">Al</text>
  <text x="245" y="212" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">Si</text>
  <text x="300" y="212" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">P</text>
  <text x="355" y="212" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="11">S</text>
  <text x="410" y="212" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">Cl</text>
  <text x="465" y="212" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">Ar</text>
  <text x="190" y="158" text-anchor="middle" fill="#dc2626" font-size="9" font-style="italic">↓ 3p orbital</text>
  <text x="355" y="98" text-anchor="middle" fill="#dc2626" font-size="9" font-style="italic">↓ paired e⁻</text>
  <circle cx="78" cy="228" r="4" fill="#3b82f6"/><text x="86" y="232" fill="#1e40af" font-size="9">Normal increase</text>
  <circle cx="185" cy="228" r="4" fill="#ef4444"/><text x="193" y="232" fill="#dc2626" font-size="9">Anomalous dip</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'h-p3-radius',
      type: 'heading',
      data: { text: 'Atomic Radius', level: 3 },
      terms: []
    },
    {
      id: 'list-p3-radius',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Atomic radius <strong>decreases</strong> from Na to Cl — a smooth, unbroken trend (no anomalous dips).',
          '<strong>Radius types used:</strong> metallic radius (Na, Mg, Al) and covalent radius (Si, P, S, Cl) — these are directly comparable.',
          '<strong>Argon excluded:</strong> only a van der Waals radius; not comparable to metallic/covalent radii — do not include Ar in the trend.',
          '<strong>Explanation:</strong> Bonding electrons are in 3-level orbitals throughout; screened by the same inner electrons (shells 1 and 2) — constant shielding.',
          'Nuclear charge increases steadily (Na: 11p⁺ → Cl: 17p⁺) → bonding electrons pulled progressively closer → atomic radius decreases.'
        ]
      },
      terms: ['Atomic radius', 'Metallic radius', 'Covalent radius']
    },
    {
      id: 'h-p3-en',
      type: 'heading',
      data: { text: 'Electronegativity', level: 3 },
      terms: []
    },
    {
      id: 'list-p3-en',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Definition:</strong> Measure of an atom\'s tendency to attract a bonding pair of electrons (Pauling scale: F = 4.0 highest; Cs/Fr = 0.7 lowest).',
          'Electronegativity <strong>increases</strong> from Na to Cl across Period 3.',
          '<strong>Argon excluded:</strong> forms no covalent bonds → electronegativity is undefined for Ar.',
          '<strong>Explanation:</strong> Bonding electrons always in the 3-level; shielded by the same inner shells (constant shielding).',
          'Increasing nuclear charge (Na → Cl) attracts the bonding pair progressively more strongly → electronegativity increases.',
          'Trend mirrors the inverse of atomic radius: as atoms get smaller, bonding pair is held closer → higher electronegativity.'
        ]
      },
      terms: ['Electronegativity', 'Pauling scale']
    },
    // ── Physical Properties of Period 3 ────────────────────────────────────────
    {
      id: 'h-period3',
      type: 'heading',
      data: { text: 'Physical Properties of Period 3 Elements', level: 2 },
      terms: []
    },
    {
      id: 'list-period3-intro',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Physical properties of Period 3 elements (Na → Ar) change systematically across the period.',
          'Key driver: change in <strong>structure type</strong> — giant metallic → giant covalent → simple molecular.',
          'Na, Mg, Al: giant metallic; Si: giant covalent; P, S, Cl, Ar: simple molecular or monatomic.'
        ]
      },
      terms: []
    },
    {
      id: 'table-period3',
      type: 'comparisonTable',
      data: {
        caption: 'Structure, bonding and key properties of Period 3 elements',
        headers: ['Element', 'Structure type', 'Bonding', 'Melting point (°C)', 'Electrical conductivity'],
        rows: [
          ['Na', 'Giant metallic', 'Metallic (1 delocalised e⁻)', '98', 'Good conductor'],
          ['Mg', 'Giant metallic', 'Metallic (2 delocalised e⁻)', '650', 'Good conductor'],
          ['Al', 'Giant metallic', 'Metallic (3 delocalised e⁻)', '660', 'Best conductor in Period 3'],
          ['Si', 'Giant covalent', 'Covalent (Si–Si bonds, 4 per atom)', '1414', 'Semiconductor'],
          ['P', 'Simple molecular (P₄)', 'Covalent within P₄; London between molecules', '44 (white P)', 'Non-conductor'],
          ['S', 'Simple molecular (S₈)', 'Covalent within S₈; London between molecules', '119', 'Non-conductor'],
          ['Cl', 'Simple molecular (Cl₂)', 'Covalent within Cl₂; London between molecules', '−101', 'Non-conductor'],
          ['Ar', 'Monatomic', 'London forces only (between atoms)', '−189', 'Non-conductor']
        ]
      },
      terms: ['Giant metallic', 'Giant covalent', 'Simple molecular', 'Semiconductor']
    },
    {
      id: 'callout-metallic-trend',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why mp increases Na → Al (metallic elements)',
        text: '• Na, Mg, Al all have giant metallic structures.<br/>• Melting point rises: Na (98°C) → Mg (650°C) → Al (660°C).<br/>• Reason: each successive element has <strong>more delocalised electrons per atom</strong> (Na: 1, Mg: 2, Al: 3) contributing to the metallic bonding, and a <strong>smaller ionic radius</strong> (higher nuclear charge pulls the electron cloud closer).<br/>• More delocalised electrons + smaller ion = stronger electrostatic attraction between the ion lattice and the electron sea = higher melting point.<br/>• Al and Mg have very similar melting points because Al is smaller (offsetting some of the extra electron contribution).'
      },
      terms: []
    },
    {
      id: 'callout-si-mp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Si has the highest melting point in Period 3',
        text: '• Si has a <strong>giant covalent structure</strong> — similar to diamond, each Si atom bonds to four others in a 3D covalent network.<br/>• Melting requires breaking <strong>millions of strong, directional Si–Si covalent bonds</strong>.<br/>• This requires far more energy than breaking metallic bonds or van der Waals forces → mp = 1414°C, by far the highest in Period 3.<br/>• Si is a <strong>semiconductor</strong>: it has a small number of delocalised electrons (unlike metals) — electrical conductivity increases with temperature (unlike metals, which conduct less at higher temperatures).'
      },
      terms: ['Giant covalent structure', 'Semiconductor']
    },
    {
      id: 'callout-molecular-trend',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why mp drops sharply after Si (molecular elements)',
        text: '• P, S, Cl and Ar are all <strong>simple molecular</strong> (or monatomic for Ar).<br/>• Melting/boiling requires overcoming only weak <strong>London (dispersion) forces</strong> between molecules — not covalent bonds.<br/>• The trend in melting points among these elements reflects their <strong>relative molecular masses</strong> (size of molecules → stronger London forces):<br/>&nbsp;&nbsp;&nbsp;– S₈ (M = 256) > P₄ (M = 124) > Cl₂ (M = 71) > Ar (M = 40)<br/>• Therefore: S (119°C) > P (44°C) > Cl (−101°C) > Ar (−189°C)<br/>• None of these conduct electricity: no free ions or delocalised electrons.'
      },
      terms: ['London forces', 'Van der Waals forces']
    },
    {
      id: 'svg-period3-mp',
      type: 'svg',
      data: {
        caption: 'Figure: Melting point trend across Period 3 (schematic). Note the peak at Si (giant covalent) and the sharp drop to molecular elements.',
        svg: `<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <text x="260" y="18" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">Melting Point Trend Across Period 3</text>

  <!-- Axes -->
  <line x1="60" y1="190" x2="490" y2="190" stroke="#334155" stroke-width="2"/>
  <line x1="60" y1="20" x2="60" y2="190" stroke="#334155" stroke-width="2"/>

  <!-- Y-axis label -->
  <text transform="rotate(-90 18 110)" x="18" y="110" text-anchor="middle" fill="#475569" font-size="10">Melting point (°C)</text>

  <!-- Y-axis ticks (schematic: label key values) -->
  <text x="55" y="192" text-anchor="end" fill="#64748b" font-size="9">−200</text>
  <text x="55" y="155" text-anchor="end" fill="#64748b" font-size="9">0</text>
  <text x="55" y="120" text-anchor="end" fill="#64748b" font-size="9">500</text>
  <text x="55" y="85" text-anchor="end" fill="#64748b" font-size="9">1000</text>
  <text x="55" y="50" text-anchor="end" fill="#64748b" font-size="9">1500</text>

  <!-- Reference line at 0°C -->
  <line x1="60" y1="155" x2="490" y2="155" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,4"/>
  <text x="493" y="158" fill="#94a3b8" font-size="9">0°C</text>

  <!-- Data points (x-coords spaced 55px apart from x=90) -->
  <!-- Na: 98°C → y ≈ 148 -->
  <circle cx="90" cy="148" r="5" fill="#3b82f6"/>
  <text x="90" y="205" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Na</text>

  <!-- Mg: 650°C → y ≈ 104 -->
  <circle cx="145" cy="104" r="5" fill="#3b82f6"/>
  <text x="145" y="205" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Mg</text>

  <!-- Al: 660°C → y ≈ 103 -->
  <circle cx="200" cy="103" r="5" fill="#3b82f6"/>
  <text x="200" y="205" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Al</text>

  <!-- Si: 1414°C → y ≈ 43 -->
  <circle cx="255" cy="43" r="5" fill="#7c3aed"/>
  <text x="255" y="205" text-anchor="middle" fill="#6d28d9" font-size="10" font-weight="bold">Si</text>
  <text x="255" y="35" text-anchor="middle" fill="#6d28d9" font-size="9">Peak!</text>

  <!-- P: 44°C → y ≈ 151 -->
  <circle cx="310" cy="151" r="5" fill="#16a34a"/>
  <text x="310" y="205" text-anchor="middle" fill="#15803d" font-size="10" font-weight="bold">P</text>

  <!-- S: 119°C → y ≈ 145 -->
  <circle cx="365" cy="145" r="5" fill="#16a34a"/>
  <text x="365" y="205" text-anchor="middle" fill="#15803d" font-size="10" font-weight="bold">S</text>

  <!-- Cl: -101°C → y ≈ 170 -->
  <circle cx="420" cy="170" r="5" fill="#16a34a"/>
  <text x="420" y="205" text-anchor="middle" fill="#15803d" font-size="10" font-weight="bold">Cl</text>

  <!-- Ar: -189°C → y ≈ 191 -->
  <circle cx="475" cy="190" r="5" fill="#16a34a"/>
  <text x="475" y="205" text-anchor="middle" fill="#15803d" font-size="10" font-weight="bold">Ar</text>

  <!-- Connecting line -->
  <polyline points="90,148 145,104 200,103 255,43 310,151 365,145 420,170 475,190" fill="none" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="6,3"/>

  <!-- Legend -->
  <circle cx="80" cy="220" r="5" fill="#3b82f6"/>
  <text x="90" y="224" fill="#1e40af" font-size="9">Giant metallic</text>
  <circle cx="180" cy="220" r="5" fill="#7c3aed"/>
  <text x="190" y="224" fill="#6d28d9" font-size="9">Giant covalent</text>
  <circle cx="290" cy="220" r="5" fill="#16a34a"/>
  <text x="300" y="224" fill="#15803d" font-size="9">Simple molecular / monatomic</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'callout-period3-elec',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Electrical Conductivity Across Period 3',
        text: '• <strong>Na, Mg, Al</strong>: giant metallic — conduct well. Conductivity increases Na→Al (more free e⁻).<br/>• <strong>Si</strong>: giant covalent — semiconductor. Conducts slightly; conductivity <em>increases</em> with temperature (more electrons gain enough energy to delocalise — opposite to metals).<br/>• <strong>P, S, Cl, Ar</strong>: simple molecular/monatomic — no free charges → do not conduct.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-transition', prompt: 'From which subshell are electrons removed first when transition metals form cations? Explain why this is surprising given the filling order.' },
      { id: 'c2', blockId: 'callout-transition', prompt: 'Write the electronic configurations of Fe, Fe²⁺ and Fe³⁺.' },
      { id: 'c3', blockId: 'callout-p3-ie1-dips', prompt: 'Why is the first ionisation energy of aluminium lower than that of magnesium, despite Al having one more proton?' },
      { id: 'c4', blockId: 'callout-p3-ie1-dips', prompt: 'Why is the first ionisation energy of sulphur lower than that of phosphorus?' },
      { id: 'c5', blockId: 'list-p3-radius', prompt: 'Explain why atomic radius decreases from Na to Cl across Period 3. Why is argon excluded from the trend?' },
      { id: 'c6', blockId: 'list-p3-en', prompt: 'Explain the trend in electronegativity across Period 3. Why is argon not assigned an electronegativity value?' },
      { id: 'c7', blockId: 'table-period3', prompt: 'State the structure type of each Period 3 element from Na to Ar and explain the sharp drop in melting point between Al and Si, and again between Si and P.' },
      { id: 'c8', blockId: 'callout-molecular-trend', prompt: 'Arrange P₄, S₈, Cl₂ and Ar in order of increasing melting point and explain in terms of London forces.' }
    ],
    summaryText: 'Electronic configs: cations — remove from highest energy subshell (transition metals: lose 4s before 3d); anions — add to outermost subshell. IE₁ increases Na→Ar (constant screening, increasing nuclear charge); dip at Al (3p higher than 3s, extra shielding by 3s²); dip at S (3pₓ² paired electrons repel). Atomic radius decreases Na→Cl (same 3-level orbitals, constant shielding, increasing nuclear charge); Ar excluded (van der Waals radius). Electronegativity increases Na→Cl (same explanation); Ar excluded (no covalent bonds). Physical properties: Na/Mg/Al giant metallic; Si giant covalent (highest mp 1414°C); P/S/Cl/Ar simple molecular (mp: S₈>P₄>Cl₂>Ar by molecule size). Si semiconductor. P/S/Cl/Ar non-conductors.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_2_8;