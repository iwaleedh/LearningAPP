/**
 * Seed note: Chemistry · Unit 1 · Topic 2 · Subtopic 7
 * "Electronic configuration and periodicity"
 * Source: Pearson Edexcel IAL Chemistry — Section 2A.3 / 2A.5
 */
export const note_chemistry_1_2_7 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Write full and abbreviated electronic configurations for atoms and ions. Apply the 4s/3d ordering rule correctly. Recognise Cr and Cu anomalies. Identify s-, p-, d- and f-block elements from configuration.' },
      terms: []
    },
    {
      id: 'h-full-config',
      type: 'heading',
      data: { text: 'Full Electronic Configuration', level: 2 },
      terms: []
    },
    {
      id: 'list-full-config',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Electronic configuration shows the distribution of electrons across sub-shells',
          'Written as a series of sub-shell labels with superscripts for electron count: e.g. 1s² 2s² 2p⁶',
          'Filling order (Aufbau): 1s → 2s → 2p → 3s → 3p → <strong>4s → 3d</strong> → 4p → 5s → 4d → 5p …',
          '4s is filled <em>before</em> 3d for neutral atoms because 4s is at a lower energy than 3d in neutral atoms',
          'After 3d begins filling, 3d and 4s energies become similar in magnitude',
          'Total electrons in a neutral atom = atomic number Z'
        ]
      },
      terms: []
    },
    {
      id: 'table-full-configs',
      type: 'comparisonTable',
      data: {
        caption: 'Full electronic configurations for selected elements (Periods 1–4)',
        headers: ['Element', 'Z', 'Full configuration'],
        rows: [
          ['H', '1', '1s¹'],
          ['He', '2', '1s²'],
          ['Li', '3', '1s² 2s¹'],
          ['C', '6', '1s² 2s² 2p²'],
          ['Ne', '10', '1s² 2s² 2p⁶'],
          ['Na', '11', '1s² 2s² 2p⁶ 3s¹'],
          ['Mg', '12', '1s² 2s² 2p⁶ 3s²'],
          ['Al', '13', '1s² 2s² 2p⁶ 3s² 3p¹'],
          ['P', '15', '1s² 2s² 2p⁶ 3s² 3p³'],
          ['Cl', '17', '1s² 2s² 2p⁶ 3s² 3p⁵'],
          ['Ar', '18', '1s² 2s² 2p⁶ 3s² 3p⁶'],
          ['K', '19', '1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹'],
          ['Ca', '20', '1s² 2s² 2p⁶ 3s² 3p⁶ 4s²'],
          ['Sc', '21', '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹ 4s²'],
          ['Fe', '26', '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²'],
          ['Zn', '30', '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s²']
        ]
      },
      terms: []
    },
    {
      id: 'h-abbreviated',
      type: 'heading',
      data: { text: 'Abbreviated (Noble Gas Core) Notation', level: 2 },
      terms: []
    },
    {
      id: 'list-abbreviated',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Replace the inner electron core with the symbol of the preceding noble gas in square brackets',
          'Then write the remaining outer sub-shells as normal',
          'Saves writing long inner-core configurations; focuses attention on the outer (valence) electrons',
          'Examples:<br/>&nbsp;&nbsp;&nbsp;Na: [Ne] 3s¹&nbsp;&nbsp;&nbsp;(Ne = 1s² 2s² 2p⁶)<br/>&nbsp;&nbsp;&nbsp;Fe: [Ar] 3d⁶ 4s²&nbsp;&nbsp;&nbsp;(Ar = 1s² 2s² 2p⁶ 3s² 3p⁶)<br/>&nbsp;&nbsp;&nbsp;Cu: [Ar] 3d¹⁰ 4s¹&nbsp;&nbsp;&nbsp;(anomaly — see below)',
          'Always check which noble gas immediately precedes the element in the periodic table'
        ]
      },
      terms: ['Abbreviated electronic configuration']
    },
    {
      id: 'h-anomalies',
      type: 'heading',
      data: { text: 'Anomalous Configurations: Cr and Cu', level: 2 },
      terms: []
    },
    {
      id: 'callout-anomalies',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Cr (Z=24) and Cu (Z=29) — Must Memorise',
        text: '<strong>Expected vs actual configurations:</strong><br/><br/><strong>Chromium (Cr, Z=24):</strong><br/>Expected: [Ar] 3d⁴ 4s²<br/>Actual: <strong>[Ar] 3d⁵ 4s¹</strong><br/>Reason: the half-filled 3d sub-shell (3d⁵) gives extra stability from exchange energy — five electrons each in separate 3d orbitals with parallel spins. Promoting one 4s electron to complete the half-filled 3d sub-shell is energetically favourable.<br/><br/><strong>Copper (Cu, Z=29):</strong><br/>Expected: [Ar] 3d⁹ 4s²<br/>Actual: <strong>[Ar] 3d¹⁰ 4s¹</strong><br/>Reason: the fully-filled 3d sub-shell (3d¹⁰) is also particularly stable (no unpaired electrons remaining in 3d). One 4s electron is promoted to fully fill the 3d sub-shell.<br/><br/><em>Edexcel exam note: You are expected to know and recall these two anomalous configurations. Always write them as [Ar] 3d⁵ 4s¹ (Cr) and [Ar] 3d¹⁰ 4s¹ (Cu). Writing the expected (wrong) configuration will lose marks.</em>'
      },
      terms: ['Chromium', 'Copper']
    },
    {
      id: 'h-ions',
      type: 'heading',
      data: { text: 'Electronic Configurations of Ions', level: 2 },
      terms: []
    },
    {
      id: 'list-ion-rules',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Main-group cations:</strong> Remove electrons from the outermost shell first (highest n), then highest sub-shell energy<br/>Example: Na → Na⁺: remove 3s¹ → configuration [Ne] i.e. 1s² 2s² 2p⁶<br/>Example: Mg → Mg²⁺: remove both 3s² → configuration [Ne]<br/>Example: Al → Al³⁺: remove 3s² 3p¹ → configuration [Ne]',
          '<strong>Main-group anions:</strong> Add electrons to the outermost sub-shell<br/>Example: Cl → Cl⁻: add one to 3p⁵ → 3p⁶ → configuration [Ar]<br/>Example: O → O²⁻: add two to 2p⁴ → 2p⁶ → configuration [Ne]',
          '<strong>Transition metal ions:</strong> <em>Remove 4s electrons before 3d electrons</em> — even though 4s filled first in the neutral atom, 4s is at a higher energy than 3d in the ion<br/>Rule: once the ion forms, 3d orbitals drop below 4s → always lose 4s first',
          '<strong>Fe (Z=26): [Ar] 3d⁶ 4s²</strong><br/>→ Fe²⁺: remove both 4s electrons → [Ar] 3d⁶<br/>→ Fe³⁺: remove both 4s and one 3d → [Ar] 3d⁵',
          '<strong>Cu (Z=29): [Ar] 3d¹⁰ 4s¹</strong><br/>→ Cu⁺: remove 4s¹ → [Ar] 3d¹⁰<br/>→ Cu²⁺: remove 4s¹ then one 3d → [Ar] 3d⁹',
          '<strong>Mn (Z=25): [Ar] 3d⁵ 4s²</strong><br/>→ Mn²⁺: remove both 4s → [Ar] 3d⁵',
          'Key rule for all transition metal ions: <strong>4s out first</strong>, regardless of filling order'
        ]
      },
      terms: []
    },
    {
      id: 'table-ion-configs',
      type: 'comparisonTable',
      data: {
        caption: 'Electronic configurations of key ions — note 4s is always removed before 3d for transition metals',
        headers: ['Ion', 'Atom config (abbreviated)', 'Electrons removed', 'Ion configuration'],
        rows: [
          ['Na⁺', '[Ne] 3s¹', '3s¹', '[Ne] = 1s² 2s² 2p⁶'],
          ['Mg²⁺', '[Ne] 3s²', '3s²', '[Ne] = 1s² 2s² 2p⁶'],
          ['Al³⁺', '[Ne] 3s² 3p¹', '3s² + 3p¹', '[Ne] = 1s² 2s² 2p⁶'],
          ['Cl⁻', '[Ne] 3s² 3p⁵', '+1 to 3p', '[Ar] = 1s² 2s² 2p⁶ 3s² 3p⁶'],
          ['O²⁻', '1s² 2s² 2p⁴', '+2 to 2p', '[Ne] = 1s² 2s² 2p⁶'],
          ['Fe²⁺', '[Ar] 3d⁶ 4s²', 'both 4s', '[Ar] 3d⁶'],
          ['Fe³⁺', '[Ar] 3d⁶ 4s²', 'both 4s + one 3d', '[Ar] 3d⁵'],
          ['Cu⁺', '[Ar] 3d¹⁰ 4s¹', '4s¹', '[Ar] 3d¹⁰'],
          ['Cu²⁺', '[Ar] 3d¹⁰ 4s¹', '4s¹ + one 3d', '[Ar] 3d⁹'],
          ['Mn²⁺', '[Ar] 3d⁵ 4s²', 'both 4s', '[Ar] 3d⁵'],
          ['Zn²⁺', '[Ar] 3d¹⁰ 4s²', 'both 4s', '[Ar] 3d¹⁰']
        ]
      },
      terms: []
    },
    {
      id: 'callout-4s-3d-rule',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The 4s / 3d Energy Crossover — Key Explanation',
        text: '<strong>Why 4s fills before 3d but is removed before 3d from ions:</strong><br/><br/>• In <em>neutral atoms</em> (K, Ca, then the d-block): the 4s sub-shell has a lower energy than 3d, so Aufbau fills 4s first<br/>• When electrons are removed to form an <em>ion</em>, the increased nuclear charge (relative to electron count) stabilises the 3d sub-shell more than the 4s — 3d drops below 4s in energy<br/>• The 4s orbital is now the highest-energy occupied orbital → it is the first to be ionised<br/>• This is why Fe²⁺ is [Ar] 3d⁶ and NOT [Ar] 3d⁴ 4s²<br/><br/><em>Common exam mistake: writing Fe²⁺ as [Ar] 3d⁴ 4s² (removing 3d electrons instead of 4s). Always remove 4s first for transition metal ions.</em>'
      },
      terms: []
    },
    {
      id: 'h-blocks',
      type: 'heading',
      data: { text: 'The s, p, d and f Blocks', level: 2 },
      terms: []
    },
    {
      id: 'list-blocks',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'The periodic table is divided into four blocks based on which sub-shell the <strong>highest-energy (last-added) electron</strong> occupies',
          '<strong>s-block (Groups 1 and 2):</strong> Outermost electron fills an s sub-shell; includes H, He (1s¹/1s²), Li, Be, Na, Mg, K, Ca, and all alkali/alkaline earth metals',
          '<strong>p-block (Groups 13–18):</strong> Outermost electron fills a p sub-shell; includes B, C, N, O, F, Ne (Period 2), Al, Si, P, S, Cl, Ar (Period 3), and the noble gases',
          '<strong>d-block (Groups 3–12):</strong> Outermost electron fills a d sub-shell; includes the transition metals (Sc–Zn in Period 4); note: Zn ([Ar] 3d¹⁰ 4s²) is d-block but not a true transition metal (its ion has a full 3d sub-shell)',
          '<strong>f-block (Lanthanides and Actinides):</strong> Outermost electron fills an f sub-shell; situated between Groups 3 and 4 in the long-form periodic table',
          'Identifying the block: write the abbreviated config; the <em>last sub-shell label</em> (s, p, d or f) determines the block'
        ]
      },
      terms: ['s-block', 'p-block', 'd-block', 'f-block']
    },
    {
      id: 'table-blocks',
      type: 'comparisonTable',
      data: {
        caption: 's, p, d and f blocks of the periodic table — groups and examples',
        headers: ['Block', 'Groups', 'Sub-shell filling', 'Examples'],
        rows: [
          ['s', '1 and 2; also H and He', 'ns¹ or ns²', 'Li, Na, K, Ca, Mg'],
          ['p', '13–18', 'np¹ to np⁶', 'B, C, N, O, F, Ne; Al, Si, P, S, Cl, Ar'],
          ['d', '3–12', '(n−1)d¹ to (n−1)d¹⁰', 'Sc, Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn'],
          ['f', 'Lanthanides (4f) + Actinides (5f)', '(n−2)f¹ to (n−2)f¹⁴', 'Ce–Lu (lanthanides); Th–Lr (actinides)']
        ]
      },
      terms: []
    },
    {
      id: 'h-periodicity',
      type: 'heading',
      data: { text: 'Electronic Configuration and Periodicity', level: 2 },
      terms: []
    },
    {
      id: 'list-periodicity',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Same group = same outer electron configuration → similar chemical properties:</strong> All Group 1 elements end in ns¹; all Group 2 end in ns²; all Group 17 (halogens) end in np⁵',
          '<strong>Period number = highest principal quantum number (n):</strong> Period 2 elements have outer electrons in n=2; Period 3 elements have outer electrons in n=3',
          '<strong>Group number relates to outer electrons:</strong> Groups 1–2 → 1 or 2 s-electrons; Groups 13–18 → 1–6 p-electrons (1–6 outer electrons including s)',
          'Repeating pattern of outer configs across periods = <strong>periodicity</strong> — same shaped curve for IE₁, atomic radius etc. repeats every period',
          'Transition metals (d-block) add electrons to inner 3d sub-shell whilst outer 4s remains → similar properties across Period 4 d-block',
          'Electronic configuration fully explains: ionisation energies trends, reactivity trends (Group 1/2/7), formation of ions, oxidation states'
        ]
      },
      terms: ['Periodicity']
    },
    {
      id: 'callout-group-configs',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Group Outer Electron Configurations',
        text: 'The outer electron configuration is identical for elements in the same group (only the principal quantum number n changes):<br/><br/>Group 1: ns¹ → Li (2s¹), Na (3s¹), K (4s¹)<br/>Group 2: ns² → Be (2s²), Mg (3s²), Ca (4s²)<br/>Group 7 (halogens): ns² np⁵ → F (2s²2p⁵), Cl (3s²3p⁵), Br (4s²4p⁵)<br/>Group 0 (noble gases): ns² np⁶ (except He: 1s²)<br/><br/>This identical outer config is why elements in the same group show similar reactivity and form ions with the same charge under normal conditions.'
      },
      terms: []
    },
    {
      id: 'h-practice',
      type: 'heading',
      data: { text: 'Practice Questions', level: 2 },
      terms: []
    },
    {
      id: 'callout-pq1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q1: Write Configurations for Fe, Fe²⁺, Fe³⁺',
        text: '<strong>Question:</strong> Write the full and abbreviated electronic configurations for (a) Fe (Z=26), (b) Fe²⁺ and (c) Fe³⁺. Justify which electrons are removed first.<br/><br/><strong>(a) Fe:</strong><br/>Full: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²<br/>Abbreviated: [Ar] 3d⁶ 4s²<br/><br/><strong>(b) Fe²⁺:</strong> Remove 2 electrons. In the ion, 4s is above 3d in energy → remove <em>both 4s electrons first</em>.<br/>Fe²⁺: [Ar] 3d⁶ &nbsp;&nbsp;(NOT [Ar] 3d⁴ 4s²)<br/><br/><strong>(c) Fe³⁺:</strong> Remove 3 electrons total → both 4s and one 3d.<br/>Fe³⁺: [Ar] 3d⁵ &nbsp;&nbsp;(half-filled 3d; extra stability)<br/><br/><em>Exam key: Always state "4s electrons are removed before 3d electrons in transition metal ions because 4s is at a higher energy in the ion".</em>'
      },
      terms: []
    },
    {
      id: 'callout-pq2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q2: Identify Block and Write Abbreviated Config',
        text: '<strong>Question:</strong> For each of the following, write the abbreviated electronic configuration and identify the block: (a) Cl (Z=17) &nbsp; (b) Ca (Z=20) &nbsp; (c) Cr (Z=24) &nbsp; (d) Br (Z=35)<br/><br/><strong>(a) Cl:</strong> [Ne] 3s² 3p⁵ → outermost sub-shell is 3p → <strong>p-block</strong><br/><br/><strong>(b) Ca:</strong> [Ar] 4s² → outermost sub-shell is 4s → <strong>s-block</strong><br/><br/><strong>(c) Cr:</strong> [Ar] 3d⁵ 4s¹ (anomaly!) → outermost sub-shell 4s fills, last added is 3d → <strong>d-block</strong><br/><br/><strong>(d) Br (Z=35):</strong> [Ar] 3d¹⁰ 4s² 4p⁵ → outermost sub-shell is 4p → <strong>p-block</strong>'
      },
      terms: []
    },
    {
      id: 'callout-pq3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q3: Anomalous Configurations',
        text: '<strong>Question:</strong> (a) Give the electronic configuration of Cr (Z=24). (b) Why does Cr not follow the expected pattern? (c) Give the configuration of Cu (Z=29) and explain the anomaly.<br/><br/><strong>(a) Cr: [Ar] 3d⁵ 4s¹</strong><br/><br/><strong>(b)</strong> One electron from the expected 4s² is promoted to 3d to achieve a half-filled 3d⁵ sub-shell. This provides extra stability due to exchange energy — five electrons in separate 3d orbitals with parallel spins is a lower energy arrangement than 3d⁴ 4s².<br/><br/><strong>(c) Cu: [Ar] 3d¹⁰ 4s¹</strong><br/>A 4s electron is promoted into 3d to achieve a <em>completely filled</em> 3d¹⁰ sub-shell, which also gives extra stability. This means Cu has only one 4s electron, not two.<br/><br/><em>In exams: you must quote the actual configuration, not the expected one. Saying "extra stability of half-filled/fully-filled d sub-shell" gains the explanation mark.</em>'
      },
      terms: []
    },
    {
      id: 'svg-config-reference',
      type: 'svg',
      data: {
        caption: 'Cross-topic reference card: electron filling order (Aufbau), key rules (Hund\'s & Pauli), and configuration examples including the Cr & Cu anomalies — bridging Orbitals (2.6), Electronic Configuration (2.7) and Ion Configurations (2.8).',
        svg: `<svg viewBox="0 0 620 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif">
  <rect x="8" y="8" width="290" height="304" rx="8" fill="#0f172a" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="8" y="8" width="290" height="28" rx="8" fill="#6366f1" fill-opacity="0.5"/>
  <rect x="8" y="26" width="290" height="10" fill="#6366f1" fill-opacity="0.5"/>
  <text x="153" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#3730a3">Filling Order &amp; Rules</text>
  <text x="18" y="54" font-size="10" font-weight="bold" fill="#374151">Sub-shell filling order (increasing energy):</text>
  <rect x="18" y="60" width="24" height="20" rx="3" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1"/>
  <text x="30" y="74" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">1s</text>
  <text x="46" y="74" font-size="11" fill="#9ca3af">›</text>
  <rect x="52" y="60" width="24" height="20" rx="3" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1"/>
  <text x="64" y="74" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">2s</text>
  <text x="80" y="74" font-size="11" fill="#9ca3af">›</text>
  <rect x="86" y="60" width="24" height="20" rx="3" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1"/>
  <text x="98" y="74" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">2p</text>
  <text x="114" y="74" font-size="11" fill="#9ca3af">›</text>
  <rect x="120" y="60" width="24" height="20" rx="3" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1"/>
  <text x="132" y="74" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">3s</text>
  <text x="148" y="74" font-size="11" fill="#9ca3af">›</text>
  <rect x="154" y="60" width="24" height="20" rx="3" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1"/>
  <text x="166" y="74" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">3p</text>
  <text x="182" y="74" font-size="11" fill="#9ca3af">›</text>
  <rect x="188" y="60" width="24" height="20" rx="3" fill="#78350f" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="200" y="74" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">4s</text>
  <text x="216" y="74" font-size="11" fill="#9ca3af">›</text>
  <rect x="222" y="60" width="24" height="20" rx="3" fill="#78350f" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="234" y="74" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">3d</text>
  <text x="250" y="74" font-size="11" fill="#9ca3af">›</text>
  <rect x="256" y="60" width="24" height="20" rx="3" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1"/>
  <text x="268" y="74" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">4p</text>
  <rect x="18" y="88" width="270" height="20" rx="4" fill="#44370a"/>
  <text x="153" y="102" text-anchor="middle" font-size="9" font-weight="bold" fill="#92400e">⚠ 4s fills BEFORE 3d — but 4s empties FIRST when forming ions</text>
  <text x="18" y="122" font-size="10" font-weight="bold" fill="#374151">Two key rules:</text>
  <rect x="18" y="128" width="130" height="56" rx="5" fill="#1c3a64" stroke="#3b82f6" stroke-width="1"/>
  <text x="83" y="142" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">Pauli Exclusion</text>
  <text x="83" y="155" text-anchor="middle" font-size="9" fill="#374151">Max 2 electrons</text>
  <text x="83" y="167" text-anchor="middle" font-size="9" fill="#374151">per orbital, with</text>
  <text x="83" y="179" text-anchor="middle" font-size="9" fill="#374151">opposite spins ↑↓</text>
  <rect x="158" y="128" width="130" height="56" rx="5" fill="#1c3a64" stroke="#3b82f6" stroke-width="1"/>
  <text x="223" y="142" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">Hund's Rule</text>
  <text x="223" y="155" text-anchor="middle" font-size="9" fill="#374151">Fill orbitals singly</text>
  <text x="223" y="167" text-anchor="middle" font-size="9" fill="#374151">before pairing;</text>
  <text x="223" y="179" text-anchor="middle" font-size="9" fill="#374151">parallel spins ↑↑↑</text>
  <text x="18" y="204" font-size="10" font-weight="bold" fill="#374151">Anomalous configurations:</text>
  <rect x="18" y="210" width="270" height="28" rx="5" fill="#3d1212" stroke="#ef4444" stroke-width="1"/>
  <text x="153" y="222" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">Cr (Z=24): [Ar] 3d⁵ 4s¹  ★</text>
  <text x="153" y="234" text-anchor="middle" font-size="9" fill="#374151">Half-filled 3d⁵ extra stability → one 4s promotes to 3d</text>
  <rect x="18" y="244" width="270" height="28" rx="5" fill="#3d1212" stroke="#ef4444" stroke-width="1"/>
  <text x="153" y="256" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">Cu (Z=29): [Ar] 3d¹⁰ 4s¹  ★</text>
  <text x="153" y="268" text-anchor="middle" font-size="9" fill="#374151">Full 3d¹⁰ extra stability → one 4s promotes to 3d</text>
  <rect x="18" y="278" width="270" height="26" rx="5" fill="#0a2e1a"/>
  <text x="153" y="293" text-anchor="middle" font-size="9" fill="#065f46">Expected (wrong): Cr 3d⁴ 4s² · Cu 3d⁹ 4s² — do not write these</text>
  <line x1="306" y1="8" x2="306" y2="312" stroke="#e5e7eb" stroke-width="1.5"/>
  <rect x="312" y="8" width="300" height="304" rx="8" fill="#0f172a" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="312" y="8" width="300" height="28" rx="8" fill="#065f46" fill-opacity="0.5"/>
  <rect x="312" y="26" width="300" height="10" fill="#065f46" fill-opacity="0.5"/>
  <text x="462" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Configuration Reference</text>
  <rect x="320" y="44" width="284" height="18" rx="3" fill="#1e293b"/>
  <text x="365" y="57" text-anchor="middle" font-size="9" font-weight="bold" fill="#6b7280">Element (Z)</text>
  <text x="500" y="57" text-anchor="middle" font-size="9" font-weight="bold" fill="#6b7280">Configuration</text>
  <line x1="320" y1="62" x2="604" y2="62" stroke="#e2e8f0" stroke-width="1"/>
  <text x="330" y="78" font-size="10" fill="#374151" font-weight="bold">Na (11)</text>
  <text x="430" y="78" font-size="10" fill="#374151">[Ne] 3s¹</text>
  <line x1="320" y1="84" x2="604" y2="84" stroke="#f1f5f9" stroke-width="1"/>
  <text x="330" y="100" font-size="10" fill="#374151" font-weight="bold">Mg (12)</text>
  <text x="430" y="100" font-size="10" fill="#374151">[Ne] 3s²</text>
  <line x1="320" y1="106" x2="604" y2="106" stroke="#f1f5f9" stroke-width="1"/>
  <text x="330" y="122" font-size="10" fill="#374151" font-weight="bold">S (16)</text>
  <text x="430" y="122" font-size="10" fill="#374151">[Ne] 3s² 3p⁴</text>
  <line x1="320" y1="128" x2="604" y2="128" stroke="#f1f5f9" stroke-width="1"/>
  <text x="330" y="144" font-size="10" fill="#374151" font-weight="bold">Ca (20)</text>
  <text x="430" y="144" font-size="10" fill="#374151">[Ar] 4s²</text>
  <line x1="320" y1="150" x2="604" y2="150" stroke="#f1f5f9" stroke-width="1"/>
  <text x="330" y="166" font-size="10" fill="#374151" font-weight="bold">Fe (26)</text>
  <text x="430" y="166" font-size="10" fill="#374151">[Ar] 3d⁶ 4s²</text>
  <line x1="320" y1="172" x2="604" y2="172" stroke="#f1f5f9" stroke-width="1"/>
  <rect x="320" y="174" width="284" height="22" rx="2" fill="#3d1212"/>
  <text x="330" y="189" font-size="10" fill="#dc2626" font-weight="bold">Cr (24) ★</text>
  <text x="430" y="189" font-size="10" fill="#dc2626">[Ar] 3d⁵ 4s¹</text>
  <line x1="320" y1="196" x2="604" y2="196" stroke="#f1f5f9" stroke-width="1"/>
  <rect x="320" y="198" width="284" height="22" rx="2" fill="#3d1212"/>
  <text x="330" y="213" font-size="10" fill="#dc2626" font-weight="bold">Cu (29) ★</text>
  <text x="430" y="213" font-size="10" fill="#dc2626">[Ar] 3d¹⁰ 4s¹</text>
  <line x1="320" y1="220" x2="604" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <text x="322" y="236" font-size="9" fill="#6b7280" font-weight="bold">Ion configs — remove 4s first:</text>
  <line x1="320" y1="240" x2="604" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <text x="330" y="256" font-size="10" fill="#374151" font-weight="bold">Fe²⁺</text>
  <text x="430" y="256" font-size="10" fill="#374151">[Ar] 3d⁶  (4s² removed)</text>
  <line x1="320" y1="260" x2="604" y2="260" stroke="#f1f5f9" stroke-width="1"/>
  <text x="330" y="276" font-size="10" fill="#374151" font-weight="bold">Fe³⁺</text>
  <text x="430" y="276" font-size="10" fill="#374151">[Ar] 3d⁵  (4s² + one 3d)</text>
  <line x1="320" y1="280" x2="604" y2="280" stroke="#f1f5f9" stroke-width="1"/>
  <text x="330" y="296" font-size="10" fill="#374151" font-weight="bold">Cl⁻</text>
  <text x="430" y="296" font-size="10" fill="#374151">1s² 2s² 2p⁶ 3s² 3p⁶  (+1e)</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'checklist-1-2-7',
      type: 'checklist',
      data: {
        items: [
          { text: 'Write full electronic configurations for any element in Periods 1–4', checked: false },
          { text: 'Write abbreviated (noble gas core) configurations', checked: false },
          { text: 'State the correct filling order including 4s before 3d', checked: false },
          { text: 'State and explain the Cr anomaly: [Ar] 3d⁵ 4s¹ (half-filled 3d stability)', checked: false },
          { text: 'State and explain the Cu anomaly: [Ar] 3d¹⁰ 4s¹ (filled 3d stability)', checked: false },
          { text: 'Write configurations for main-group ions (remove/add outermost electrons)', checked: false },
          { text: 'Write configurations for transition metal ions — remove 4s BEFORE 3d', checked: false },
          { text: 'Write Fe²⁺ as [Ar] 3d⁶, NOT [Ar] 3d⁴ 4s²', checked: false },
          { text: 'Write Fe³⁺ as [Ar] 3d⁵', checked: false },
          { text: 'Explain the 4s/3d energy crossover: 4s lower in neutral atom, 3d lower in ion', checked: false },
          { text: 'Identify s, p, d, f blocks from configuration or periodic table position', checked: false },
          { text: 'Link same outer configuration to same group → similar chemistry', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: "Electronic configuration: electrons fill sub-shells in Aufbau order (1s → 2s → 2p → 3s → 3p → 4s → 3d …). Abbreviated notation uses [noble gas] shorthand. Anomalies: Cr = [Ar] 3d⁵ 4s¹ (half-filled 3d stability); Cu = [Ar] 3d¹⁰ 4s¹ (fully-filled 3d stability). Ions: main-group remove/gain outermost electrons. Transition metal ions: 4s removed before 3d (4s is higher energy in ion). Fe²⁺ = [Ar] 3d⁶; Fe³⁺ = [Ar] 3d⁵. Blocks: s-block = Groups 1–2 (last e⁻ in ns); p-block = Groups 13–18 (last e⁻ in np); d-block = Groups 3–12 (last e⁻ in (n−1)d); f-block = lanthanides/actinides. Periodicity: same outer config within a group → same properties; repeating outer config pattern across periods = periodic trends."
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'list-full-config', prompt: 'State the correct Aufbau filling order. Why does 4s fill before 3d in neutral atoms?' },
      { id: 'c2', blockId: 'callout-anomalies', prompt: 'Give the electronic configurations of Cr and Cu. Why are they anomalous? What makes Cr and Cu configurations stable?' },
      { id: 'c3', blockId: 'callout-4s-3d-rule', prompt: 'Explain why 4s electrons are removed before 3d electrons when forming transition metal ions, even though 4s fills first.' },
      { id: 'c4', blockId: 'table-ion-configs', prompt: 'Write the electronic configurations of Fe²⁺ and Fe³⁺. How many 3d electrons does each have?' },
      { id: 'c5', blockId: 'table-blocks', prompt: 'Define s, p, d and f blocks. Give the group numbers and two examples for each block.' },
      { id: 'c6', blockId: 'callout-group-configs', prompt: "Give the outer electron configurations for Groups 1, 2, 7 and 0. Explain why elements in the same group have similar chemistry." },
      { id: 'c7', blockId: 'list-abbreviated', prompt: 'Write the abbreviated electronic configuration for Cl (Z=17), Fe (Z=26) and Br (Z=35). Identify the block for each.' }
    ],
    summaryText: "Full config: 1s²2s²2p⁶3s²3p⁶4s²3d … (4s before 3d for neutral atoms). Abbreviated: [noble gas] then outer sub-shells. Anomalies: Cr = [Ar] 3d⁵ 4s¹; Cu = [Ar] 3d¹⁰ 4s¹ (extra stability of half-filled / fully-filled d sub-shell). Ions: remove 4s first from transition metals. Fe²⁺ = [Ar] 3d⁶; Fe³⁺ = [Ar] 3d⁵; Cu²⁺ = [Ar] 3d⁹. Blocks: s (Grps 1–2), p (Grps 13–18), d (Grps 3–12), f (lanthanides/actinides). Same group = same outer config = similar chemistry.",
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_2_7;
