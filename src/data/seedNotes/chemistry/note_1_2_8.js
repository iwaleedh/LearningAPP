/**
 * Seed note: Chemistry · Unit 1 · Topic 2 · Subtopic 8
 * "Periodic trends in properties"
 * Source: Pearson Edexcel IAL Chemistry — Section 2A.3–2A.5
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
      id: 'svg-ion-config-iso',
      type: 'svg',
      data: {
        caption: 'Cross-topic reference: ion configuration rules (links to Electronic Configuration 2.7) and isoelectronic series — species with the same electron configuration.',
        svg: `<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif">
  <line x1="308" y1="8" x2="308" y2="292" stroke="#e5e7eb" stroke-width="1.5"/>
  <rect x="8" y="8" width="292" height="284" rx="8" fill="#0f172a" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="8" y="8" width="292" height="28" rx="8" fill="#6366f1" fill-opacity="0.5"/>
  <rect x="8" y="26" width="292" height="10" fill="#6366f1" fill-opacity="0.5"/>
  <text x="154" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#3730a3">Ion Configurations</text>
  <rect x="16" y="44" width="276" height="30" rx="5" fill="#44370a"/>
  <text x="154" y="57" text-anchor="middle" font-size="10" font-weight="bold" fill="#713f12">Rule: Remove 4s electrons BEFORE 3d when forming TM ions</text>
  <text x="154" y="69" text-anchor="middle" font-size="9" fill="#92400e">(4s becomes higher energy than 3d once d-orbitals start to fill)</text>
  <text x="16" y="92" font-size="10" font-weight="bold" fill="#374151">Transition metal ion examples:</text>
  <rect x="16" y="98" width="276" height="18" rx="3" fill="#1e293b"/>
  <text x="100" y="111" text-anchor="middle" font-size="9" font-weight="bold" fill="#6b7280">Species</text>
  <text x="220" y="111" text-anchor="middle" font-size="9" font-weight="bold" fill="#6b7280">Configuration</text>
  <line x1="16" y1="116" x2="292" y2="116" stroke="#e2e8f0" stroke-width="1"/>
  <text x="30" y="132" font-size="10" fill="#374151" font-weight="bold">Fe (Z=26)</text>
  <text x="165" y="132" font-size="10" fill="#374151">[Ar] 3d⁶ 4s²</text>
  <line x1="16" y1="138" x2="292" y2="138" stroke="#f1f5f9" stroke-width="1"/>
  <text x="30" y="154" font-size="10" fill="#1d4ed8" font-weight="bold">Fe²⁺</text>
  <text x="165" y="154" font-size="10" fill="#1d4ed8">[Ar] 3d⁶</text>
  <text x="270" y="154" font-size="9" fill="#6b7280">4s² removed</text>
  <line x1="16" y1="160" x2="292" y2="160" stroke="#f1f5f9" stroke-width="1"/>
  <text x="30" y="176" font-size="10" fill="#1d4ed8" font-weight="bold">Fe³⁺</text>
  <text x="165" y="176" font-size="10" fill="#1d4ed8">[Ar] 3d⁵</text>
  <text x="270" y="176" font-size="9" fill="#6b7280">4s²+3d¹ gone</text>
  <line x1="16" y1="182" x2="292" y2="182" stroke="#e2e8f0" stroke-width="1"/>
  <text x="30" y="198" font-size="10" fill="#374151" font-weight="bold">Cu (Z=29)</text>
  <text x="165" y="198" font-size="10" fill="#dc2626">[Ar] 3d¹⁰ 4s¹</text>
  <text x="270" y="198" font-size="8" fill="#dc2626">★ anomaly</text>
  <line x1="16" y1="204" x2="292" y2="204" stroke="#f1f5f9" stroke-width="1"/>
  <text x="30" y="220" font-size="10" fill="#1d4ed8" font-weight="bold">Cu²⁺</text>
  <text x="165" y="220" font-size="10" fill="#1d4ed8">[Ar] 3d⁹</text>
  <text x="270" y="220" font-size="9" fill="#6b7280">4s¹+3d¹ gone</text>
  <line x1="16" y1="226" x2="292" y2="226" stroke="#e2e8f0" stroke-width="1"/>
  <text x="16" y="242" font-size="10" font-weight="bold" fill="#374151">Main group ion (add electrons):</text>
  <text x="30" y="258" font-size="10" fill="#374151" font-weight="bold">Cl (17)</text>
  <text x="165" y="258" font-size="10" fill="#374151">1s² 2s² 2p⁶ 3s² 3p⁵</text>
  <line x1="16" y1="262" x2="292" y2="262" stroke="#f1f5f9" stroke-width="1"/>
  <text x="30" y="278" font-size="10" fill="#1d4ed8" font-weight="bold">Cl⁻</text>
  <text x="165" y="278" font-size="10" fill="#1d4ed8">1s² 2s² 2p⁶ 3s² 3p⁶</text>
  <text x="270" y="278" font-size="9" fill="#6b7280">+1e gained</text>
  <rect x="316" y="8" width="296" height="284" rx="8" fill="#0f172a" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="316" y="8" width="296" height="28" rx="8" fill="#065f46" fill-opacity="0.5"/>
  <rect x="316" y="26" width="296" height="10" fill="#065f46" fill-opacity="0.5"/>
  <text x="464" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Isoelectronic Series</text>
  <rect x="324" y="44" width="280" height="22" rx="4" fill="#0a2e1a" stroke="#10b981" stroke-width="1"/>
  <text x="464" y="59" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">Isoelectronic = same electron configuration</text>
  <text x="324" y="80" font-size="10" fill="#374151" font-weight="bold">10-electron series (config: 1s² 2s² 2p⁶):</text>
  <rect x="324" y="86" width="280" height="24" rx="3" fill="#1e293b"/>
  <text x="360" y="102" text-anchor="middle" font-size="9" font-weight="bold" fill="#6b7280">Ion</text>
  <text x="425" y="102" text-anchor="middle" font-size="9" font-weight="bold" fill="#6b7280">Z (protons)</text>
  <text x="510" y="102" text-anchor="middle" font-size="9" font-weight="bold" fill="#6b7280">Electrons</text>
  <text x="572" y="102" text-anchor="middle" font-size="9" font-weight="bold" fill="#6b7280">Charge</text>
  <line x1="324" y1="110" x2="604" y2="110" stroke="#e2e8f0" stroke-width="1"/>
  <text x="360" y="126" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">N³⁻</text>
  <text x="425" y="126" text-anchor="middle" font-size="10" fill="#374151">7</text>
  <text x="510" y="126" text-anchor="middle" font-size="10" fill="#374151">10</text>
  <text x="572" y="126" text-anchor="middle" font-size="10" fill="#374151">3−</text>
  <line x1="324" y1="130" x2="604" y2="130" stroke="#f1f5f9" stroke-width="1"/>
  <text x="360" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">O²⁻</text>
  <text x="425" y="146" text-anchor="middle" font-size="10" fill="#374151">8</text>
  <text x="510" y="146" text-anchor="middle" font-size="10" fill="#374151">10</text>
  <text x="572" y="146" text-anchor="middle" font-size="10" fill="#374151">2−</text>
  <line x1="324" y1="150" x2="604" y2="150" stroke="#f1f5f9" stroke-width="1"/>
  <text x="360" y="166" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">F⁻</text>
  <text x="425" y="166" text-anchor="middle" font-size="10" fill="#374151">9</text>
  <text x="510" y="166" text-anchor="middle" font-size="10" fill="#374151">10</text>
  <text x="572" y="166" text-anchor="middle" font-size="10" fill="#374151">1−</text>
  <line x1="324" y1="170" x2="604" y2="170" stroke="#f1f5f9" stroke-width="1"/>
  <rect x="324" y="171" width="280" height="22" rx="2" fill="#0a2e1a"/>
  <text x="360" y="186" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">Ne</text>
  <text x="425" y="186" text-anchor="middle" font-size="10" fill="#374151">10</text>
  <text x="510" y="186" text-anchor="middle" font-size="10" fill="#374151">10</text>
  <text x="572" y="186" text-anchor="middle" font-size="9" fill="#065f46">neutral</text>
  <line x1="324" y1="193" x2="604" y2="193" stroke="#f1f5f9" stroke-width="1"/>
  <text x="360" y="209" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">Na⁺</text>
  <text x="425" y="209" text-anchor="middle" font-size="10" fill="#374151">11</text>
  <text x="510" y="209" text-anchor="middle" font-size="10" fill="#374151">10</text>
  <text x="572" y="209" text-anchor="middle" font-size="10" fill="#374151">1+</text>
  <line x1="324" y1="213" x2="604" y2="213" stroke="#f1f5f9" stroke-width="1"/>
  <text x="360" y="229" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">Mg²⁺</text>
  <text x="425" y="229" text-anchor="middle" font-size="10" fill="#374151">12</text>
  <text x="510" y="229" text-anchor="middle" font-size="10" fill="#374151">10</text>
  <text x="572" y="229" text-anchor="middle" font-size="10" fill="#374151">2+</text>
  <line x1="324" y1="233" x2="604" y2="233" stroke="#f1f5f9" stroke-width="1"/>
  <text x="360" y="249" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">Al³⁺</text>
  <text x="425" y="249" text-anchor="middle" font-size="10" fill="#374151">13</text>
  <text x="510" y="249" text-anchor="middle" font-size="10" fill="#374151">10</text>
  <text x="572" y="249" text-anchor="middle" font-size="10" fill="#374151">3+</text>
  <line x1="324" y1="253" x2="604" y2="253" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="324" y="258" width="280" height="38" rx="5" fill="#44370a"/>
  <text x="464" y="273" text-anchor="middle" font-size="10" font-weight="bold" fill="#713f12">Key pattern:</text>
  <text x="464" y="285" text-anchor="middle" font-size="9" fill="#713f12">All have same config but ionic radius decreases</text>
  <text x="464" y="297" text-anchor="middle" font-size="9" fill="#713f12">as Z increases (more protons pull e⁻ in)</text>
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
          'Nuclear charge increases steadily (Na: 11p⁺ → Cl: 17p⁺) → bonding electrons pulled progressively closer → atomic radius decreases.',
          '<strong>Approximate values (Period 3):</strong> Na 186 pm → Mg 160 pm → Al 143 pm → Si 117 pm → P 110 pm → S 104 pm → Cl 99 pm (smooth decrease)',
          '<strong>Down a group:</strong> Atomic radius <em>increases</em> — each successive period adds a new principal quantum shell; increased inner-shell shielding outweighs the extra nuclear charge → outer electrons are at greater distance from the nucleus (e.g. Group 1: Li 152 pm → Na 186 pm → K 227 pm)'
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
          'Trend mirrors the inverse of atomic radius: as atoms get smaller, bonding pair is held closer → higher electronegativity.',
          '<strong>Pauling values (Period 3):</strong> Na = 0.93, Mg = 1.31, Al = 1.61, Si = 1.90, P = 2.19, S = 2.58, Cl = 3.16 (Ar: undefined — forms no covalent bonds)',
          '<strong>Down a group:</strong> Electronegativity <em>decreases</em> — outer electrons are in higher principal shells (further from nucleus, more shielded) → nucleus attracts the bonding pair progressively less strongly (e.g. Group 7: F 4.0 → Cl 3.16 → Br 2.96 → I 2.66)'
        ]
      },
      terms: ['Electronegativity', 'Pauling scale']
    },
    {
      id: 'callout-group-trends',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Trends Down a Group — Summary',
        text: '<strong>Atomic radius ↑</strong> down a group: Each successive period adds a new principal quantum shell (n increases by 1). Extra inner electrons increase shielding significantly; despite increasing nuclear charge, the outer electron is at a progressively greater distance → radius increases. Example: Group 1: Li 152 pm → Na 186 pm → K 227 pm.<br/><br/><strong>First ionisation energy ↓</strong> down a group: Outer electron is in a higher shell (further from nucleus), shielded by more inner electrons → attraction to outer electron is progressively weaker → less energy needed to remove it → IE₁ decreases. Example: Group 1: Li 520 → Na 496 → K 419 kJ mol⁻¹.<br/><br/><strong>Electronegativity ↓</strong> down a group: Bonding pairs are in higher principal shells, further from nucleus, more shielded → nucleus attracts shared electrons less strongly. Example: Group 7: F 4.0 → Cl 3.16 → Br 2.96 → I 2.66.<br/><br/><em>Key rule: Down a group, trends are OPPOSITE to across-period trends. Dominant factor: increasing principal quantum number (n) of the outer shell — greater distance from nucleus and greater shielding of outer electrons.</em>'
      },
      terms: []
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

  <!-- Y-axis ticks -->
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

  <!-- Mg: 650°C → y = 110 -->
  <circle cx="145" cy="110" r="5" fill="#3b82f6"/>
  <text x="145" y="205" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Mg</text>

  <!-- Al: 660°C → y = 109 -->
  <circle cx="200" cy="109" r="5" fill="#3b82f6"/>
  <text x="200" y="205" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Al</text>

  <!-- Si: 1414°C → y = 56 -->
  <circle cx="255" cy="56" r="5" fill="#7c3aed"/>
  <text x="255" y="205" text-anchor="middle" fill="#6d28d9" font-size="10" font-weight="bold">Si</text>
  <text x="255" y="46" text-anchor="middle" fill="#6d28d9" font-size="9">Peak!</text>

  <!-- P: 44°C → y = 152 -->
  <circle cx="310" cy="152" r="5" fill="#16a34a"/>
  <text x="310" y="205" text-anchor="middle" fill="#15803d" font-size="10" font-weight="bold">P</text>

  <!-- S: 119°C → y = 147 -->
  <circle cx="365" cy="147" r="5" fill="#16a34a"/>
  <text x="365" y="205" text-anchor="middle" fill="#15803d" font-size="10" font-weight="bold">S</text>

  <!-- Cl: -101°C → y = 162 -->
  <circle cx="420" cy="162" r="5" fill="#16a34a"/>
  <text x="420" y="205" text-anchor="middle" fill="#15803d" font-size="10" font-weight="bold">Cl</text>

  <!-- Ar: -189°C → y = 168 -->
  <circle cx="475" cy="168" r="5" fill="#16a34a"/>
  <text x="475" y="205" text-anchor="middle" fill="#15803d" font-size="10" font-weight="bold">Ar</text>

  <!-- Connecting line -->
  <polyline points="90,148 145,110 200,109 255,56 310,152 365,147 420,162 475,168" fill="none" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="6,3"/>

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
    },
    {
      id: 'checklist-1-2-8',
      type: 'checklist',
      data: {
        items: [
          { text: 'Write electronic configurations for main-group cations — remove from outermost subshell first', checked: false },
          { text: 'Write electronic configurations for anions — add electrons to outermost subshell', checked: false },
          { text: 'Identify isoelectronic species (e.g. Na⁺, Mg²⁺, Al³⁺, F⁻, O²⁻, N³⁻ — all isoelectronic with Ne: 1s²2s²2p⁶)', checked: false },
          { text: 'Explain why 4s electrons are removed before 3d when transition metals form cations', checked: false },
          { text: 'State the general increase in IE₁ across Period 3 (Na→Ar) and identify the two anomalous dips', checked: false },
          { text: 'Explain IE₁ dip at Al: 3p orbital is higher energy and more shielded by 3s² than expected', checked: false },
          { text: 'Explain IE₁ dip at S: paired electrons in 3pₓ² repel each other, lowering IE₁ below phosphorus', checked: false },
          { text: 'State atomic radius decreases Na→Cl; give approximate values (Na 186 pm → Cl 99 pm)', checked: false },
          { text: 'Explain why Ar is excluded from atomic radius and electronegativity trends', checked: false },
          { text: 'State electronegativity increases Na→Cl; quote Pauling values (Na 0.93 → Cl 3.16)', checked: false },
          { text: 'Describe trends down a group: radius ↑, IE₁ ↓, EN ↓ — explain each using shielding and shell number', checked: false },
          { text: 'Classify Period 3 elements: Na/Mg/Al giant metallic; Si giant covalent; P/S/Cl simple molecular; Ar monatomic', checked: false },
          { text: 'Explain mp trend Na < Mg ≈ Al: increasing delocalized electrons per atom + smaller ionic radius', checked: false },
          { text: 'Explain Si highest mp in Period 3: giant covalent network, millions of strong Si–Si bonds must break', checked: false },
          { text: 'Order P₄, S₈, Cl₂, Ar by mp and explain using London forces and molecular mass', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Electronic configs of ions: cations remove from highest-energy subshell (transition metals: 4s out before 3d); anions add to outermost subshell. Isoelectronic species share the same config (Na⁺/Mg²⁺/Al³⁺/F⁻/Ne: all 1s²2s²2p⁶). Across Period 3 — IE₁: generally increases (constant shielding, increasing nuclear charge); dip at Al (3p higher in energy than 3s); dip at S (paired 3p electrons repel). Atomic radius: decreases Na→Cl (Na 186 pm → Cl 99 pm). Electronegativity: increases Na (0.93) → Cl (3.16). Down a group: radius ↑, IE₁ ↓, EN ↓ (increasing shell number and greater shielding). Physical properties: Na/Mg/Al giant metallic (mp: Na<Mg<Al, more delocalized e⁻); Si giant covalent (highest mp 1414°C); P₄/S₈/Cl₂ simple molecular — only London forces between molecules (mp: S₈ 119°C > P₄ 44°C > Cl₂ −101°C > Ar −189°C). Si semiconductor; P/S/Cl/Ar non-conductors.'
      },
      terms: []
    },
    {
      id: 'svg-period3-trends',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 430" font-family="system-ui,sans-serif"><text x="350" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b" letter-spacing="1">PERIODIC TRENDS ACROSS PERIOD 3</text><!-- Period 3 element strip --><text x="350" y="48" text-anchor="middle" font-size="10" fill="#2d2d72">Na  →  Mg  →  Al  →  Si  →  P  →  S  →  Cl  →  Ar</text><text x="350" y="63" text-anchor="middle" font-size="9" fill="#6366f1">Nuclear charge Z = 11  →  →  →  →  →  →  →  18  (all +1 each step)</text><!-- Trend 1: Atomic Radius DECREASES --><rect x="10" y="74" width="680" height="80" rx="10" fill="rgba(244,114,182,0.12)" stroke="#f472b6" stroke-width="1.5"/><text x="24" y="95" font-size="10" fill="#f472b6" font-weight="700">ATOMIC RADIUS — DECREASES ←</text><rect x="24" y="102" width="640" height="24" rx="6" fill="rgba(244,114,182,0.15)"/><rect x="24" y="102" width="640" height="24" rx="6" fill="url(#r-grad)"/><!-- Gradient bar (large on left, small on right) --><defs><linearGradient id="r-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f472b6" stop-opacity="0.7"/><stop offset="1" stop-color="#f472b6" stop-opacity="0.1"/></linearGradient></defs><text x="40" y="118" font-size="9" fill="#4a1040">Na biggest: 3 shells, 11p, few 2p shielding</text><text x="380" y="118" font-size="9" fill="#4a1040">Cl smallest: more protons pull same 3rd-shell e⁻ closer</text><text x="24" y="142" font-size="9" fill="#2d1b69">Why? Same shielding core — more protons = stronger pull = smaller radius</text><!-- Trend 2: IE₁ INCREASES (with dips) --><rect x="10" y="164" width="680" height="90" rx="10" fill="rgba(96,165,250,0.12)" stroke="#60a5fa" stroke-width="1.5"/><text x="24" y="182" font-size="10" fill="#60a5fa" font-weight="700">FIRST IONISATION ENERGY — INCREASES → (with 2 dips)</text><rect x="24" y="190" width="640" height="24" rx="6" fill="url(#ie-grad)"/><defs><linearGradient id="ie-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#60a5fa" stop-opacity="0.15"/><stop offset="1" stop-color="#60a5fa" stop-opacity="0.75"/></linearGradient></defs><text x="24" y="206" font-size="9" fill="#1e3a8a">Na low</text><text x="580" y="206" font-size="9" fill="#1e3a8a">Ar highest</text><!-- Dip markers --><text x="140" y="228" text-anchor="middle" font-size="8.5" fill="#78350f">⚠ Al dip: 3p (single) easier to remove than Mg 3s²</text><text x="430" y="228" text-anchor="middle" font-size="8.5" fill="#78350f">⚠ S dip: 3p⁴ paired — repulsion makes one easier to remove vs P (3p³ half-full)</text><text x="24" y="244" font-size="9" fill="#1250a0">General trend: more protons → greater attraction → higher IE₁. Two dips explained by orbital theory.</text><!-- Trend 3: Electronegativity INCREASES --><rect x="10" y="264" width="680" height="70" rx="10" fill="rgba(52,211,153,0.12)" stroke="#34d399" stroke-width="1.5"/><text x="24" y="282" font-size="10" fill="#34d399" font-weight="700">ELECTRONEGATIVITY — INCREASES → (no dips)</text><rect x="24" y="290" width="640" height="20" rx="6" fill="url(#en-grad)"/><defs><linearGradient id="en-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#34d399" stop-opacity="0.15"/><stop offset="1" stop-color="#34d399" stop-opacity="0.75"/></linearGradient></defs><text x="40" y="304" font-size="9" fill="#065f46">Na = 0.93</text><text x="620" y="304" font-size="9" fill="#065f46">Cl = 3.16</text><text x="24" y="324" font-size="9" fill="#065f46">Why? More protons pull shared bonding electrons more strongly toward that atom.</text><!-- Summary box --><rect x="10" y="344" width="680" height="76" rx="10" fill="rgba(99,102,241,0.15)" stroke="#818cf8" stroke-width="1.5"/><text x="350" y="363" text-anchor="middle" font-size="10" fill="#2d2d72" font-weight="700">ONE ROOT CAUSE EXPLAINS ALL TRENDS</text><text x="350" y="381" text-anchor="middle" font-size="11" font-weight="800" fill="#1e293b">Across a period: Z increases, shielding stays similar → effective nuclear charge rises</text><text x="350" y="399" text-anchor="middle" font-size="9" fill="#2d2d72">↑ Zeff = smaller radius  |  ↑ Zeff = higher IE₁ (usually)  |  ↑ Zeff = higher electronegativity</text><text x="350" y="415" text-anchor="middle" font-size="8.5" fill="#6366f1">Exam tip: the two IE₁ dips (Al and S) are essential exam knowledge — memorise the atomic orbital reason</text></svg>',
        caption: 'Period 3 Periodic Trends — all three trends (atomic radius, IE₁, electronegativity) share one root cause: increasing effective nuclear charge. The two IE₁ dips (Al = 3p vs 3s²; S = paired 3p⁴) are tested repeatedly in exams.'
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
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_2_8;