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
      data: { text: 'Write electronic configurations for ions of the first 36 elements. Understand how electrons are added (anions) or removed (cations), paying particular attention to transition metal ions.' },
      terms: []
    },
    {
      id: 'h-cations',
      type: 'heading',
      data: { text: 'Forming Cations (Positive Ions)', level: 2 },
      terms: []
    },
    {
      id: 'p-cations',
      type: 'paragraph',
      data: { text: 'Cations are formed by <strong>removing electrons</strong>. Electrons are always removed from the <strong>highest energy subshell first</strong>. For main group elements, this is straightforward — remove from the outer shell.' },
      terms: []
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
      id: 'p-anions',
      type: 'paragraph',
      data: { text: 'Anions are formed by <strong>adding electrons</strong> to the outermost shell. The electrons are added to the next available orbital in the outer subshell.' },
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

    // ── Period 3 Physical Properties (from chemguide) ────────────────────────
    {
      id: 'h-period3',
      type: 'heading',
      data: { text: 'Physical Properties of Period 3 Elements', level: 2 },
      terms: []
    },
    {
      id: 'p-period3-intro',
      type: 'paragraph',
      data: { text: 'The physical properties of Period 3 elements (Na → Ar) change systematically across the period. The key driver is the change in <strong>structure type</strong> — from giant metallic, to giant covalent, to simple molecular.' },
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
      { id: 'c3', blockId: 'table-anions', prompt: 'Write the electronic configuration of Cl⁻.' },
      { id: 'c4', blockId: 'callout-isoelectronic', prompt: 'Which ions are isoelectronic with neon? State their shared electron configuration.' },
      { id: 'c5', blockId: 'table-period3', prompt: 'State the structure type of each Period 3 element from Na to Ar and explain the sharp drop in melting point between Al and Si, and again between Si and P.' },
      { id: 'c6', blockId: 'callout-molecular-trend', prompt: 'Arrange P₄, S₈, Cl₂ and Ar in order of increasing melting point and explain why in terms of London forces.' }
    ],
    summaryText: 'Cations: remove electrons from the highest energy subshell. For transition metals, remove 4s before 3d when forming ions (even though 4s fills first). Anions: add electrons to the next available orbital. Isoelectronic species share the same electron configuration (e.g. Na⁺, F⁻, O²⁻ all have Ne\'s configuration). Period 3 physical properties: Na/Mg/Al — giant metallic, mp increases (more delocalised e⁻, smaller radius); Si — giant covalent, highest mp (1414°C), semiconductor; P/S/Cl/Ar — simple molecular, low mp from weak London forces only (order: S₈ > P₄ > Cl₂ > Ar by molecule size); none conduct except Na/Mg/Al.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_2_8;