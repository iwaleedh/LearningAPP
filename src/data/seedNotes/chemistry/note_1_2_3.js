/**
 * Seed note: Chemistry · Unit 1 · Topic 2 · Subtopic 3
 * "Electron configuration (shells and subshells)"
 * Source: Pearson Edexcel IAL Chemistry — Sections 2A.3–2A.4
 */
export const note_chemistry_1_2_3 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Know the electron configurations of the first 36 elements. Understand quantum shells, subshells (s, p, d) and orbitals. Relate the Periodic Table to electron configuration. Understand why atomic orbitals exist (Heisenberg Uncertainty Principle) and interpret orbital energy level diagrams.' },
      terms: []
    },
    {
      id: 'callout-heisenberg',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Orbits vs Orbitals — The Heisenberg Uncertainty Principle',
        text: '<strong>Classical orbit model (GCSE — incorrect at atomic scale):</strong><br/>At GCSE, electrons are often pictured in fixed circular orbits like planets around the sun. This is fundamentally wrong.<br/><br/><strong>Why definite orbits are impossible:</strong><br/>The <strong>Heisenberg Uncertainty Principle</strong> states that it is impossible to know, simultaneously, both the exact <em>position</em> and the <em>momentum</em> (velocity × mass) of an electron. To plot a definite orbital path you need both — so no definite path exists for an electron.<br/><br/><strong>Instead: Atomic Orbitals (probability regions)</strong><br/>An <strong>orbital</strong> is a three-dimensional region of space around the nucleus where there is a high probability (~95%) of finding an electron at any given instant. It has a defined shape, size and energy — but no fixed path.<br/><br/><strong>Key distinctions:</strong><br/>• <em>Orbit</em> — definite circular/elliptical path (like a planet) → does NOT apply to electrons<br/>• <em>Orbital</em> — probability region with defined shape and energy → correct model for electrons<br/>• Each orbital holds a maximum of <strong>2 electrons</strong> with opposite spins (Pauli Exclusion Principle)<br/><br/><em>If you wanted 100% certainty, the orbital would have to be the size of the universe — in practice we define orbitals as regions containing 95% of the electron probability.</em>'
      },
      terms: ['Heisenberg Uncertainty Principle', 'Orbital']
    },
    {
      id: 'h-shells',
      type: 'heading',
      data: { text: 'Quantum Shells and Subshells', level: 2 },
      terms: []
    },
    {
      id: 'list-shells',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Electrons occupy <strong>quantum shells</strong> numbered n = 1, 2, 3 … around the nucleus.',
          'Higher n → further from nucleus → higher energy level.',
          'Maximum electrons per shell = <strong>2n²</strong> (n=1: 2; n=2: 8; n=3: 18; n=4: 32).',
          'Each shell is divided into <strong>subshells</strong> labelled s, p, d and f.',
          'Within a shell, <strong>s is lower energy than p</strong> because s electrons penetrate closer to the nucleus and are more strongly attracted — this underpins the Aufbau filling order.'
        ]
      },
      terms: ['Quantum shell', 'Subshell']
    },
    {
      id: 'callout-gcse-vs-alevel',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'GCSE Model vs A-Level spdf Model',
        text: 'At GCSE, electron arrangements use shell notation (e.g. 2,8,8,1 for potassium). This works up to Z = 18 (Ar) but breaks down for the transition metals.<br/><br/>At A-level we use the <strong>spdf subshell model</strong>. After Ar (Z=18), the <strong>4s subshell fills before 3d</strong> because it has slightly lower energy:<br/>• K (Z=19): 1s² 2s² 2p⁶ 3s² 3p⁶ <strong>4s¹</strong> — the 19th electron goes into 4s, NOT 3d<br/>• Ca (Z=20): ...3p⁶ <strong>4s²</strong><br/>• Sc (Z=21): ...4s² <strong>3d¹</strong> — first d-block element<br/><br/>The spdf model is required to correctly describe configurations of Z > 18 and to explain transition metal chemistry.'
      },
      terms: []
    },
    {
      id: 'table-subshells',
      type: 'comparisonTable',
      data: {
        caption: 'Subshell capacity and orbits',
        headers: ['Subshell', 'Number of Orbitals', 'Max Electrons'],
        rows: [
          ['<strong>s</strong>', '1', '2'],
          ['<strong>p</strong>', '3', '6'],
          ['<strong>d</strong>', '5', '10'],
          ['<strong>f</strong>', '7', '14']
        ]
      },
      terms: ['Orbital', 's orbital', 'p orbital', 'd orbital']
    },
    {
      id: 'svg-orbital-shapes',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 200" font-family="Arial,sans-serif"><text x="280" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#1f2937">Shapes of Atomic Orbitals</text><g transform="translate(70,108)"><circle cx="0" cy="0" r="32" fill="#2d2d72" stroke="#3b82f6" stroke-width="2"/><circle cx="0" cy="0" r="3" fill="#374151"/><text x="0" y="62" text-anchor="middle" font-weight="bold" font-size="12" fill="#374151">1s</text><text x="0" y="61" text-anchor="middle" font-size="10" fill="#6b7280">sphere</text></g><g transform="translate(190,108)"><circle cx="0" cy="0" r="46" fill="#2d2f72" stroke="#3b82f6" stroke-width="2"/><circle cx="0" cy="0" r="20" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="0" cy="0" r="3" fill="#374151"/><text x="0" y="76" text-anchor="middle" font-weight="bold" font-size="12" fill="#374151">2s</text><text x="0" y="74" text-anchor="middle" font-size="10" fill="#6b7280">larger sphere + node</text></g><line x1="253" y1="36" x2="253" y2="188" stroke="#d1d5db" stroke-width="1.5" stroke-dasharray="5,3"/><text x="405" y="35" text-anchor="middle" font-size="11" fill="#6b7280">3 p orbitals — mutually perpendicular</text><g transform="translate(315,108)"><ellipse cx="-27" cy="0" rx="26" ry="17" fill="#44370a" stroke="#f59e0b" stroke-width="1.5"/><ellipse cx="27" cy="0" rx="26" ry="17" fill="#44370a" stroke="#f59e0b" stroke-width="1.5"/><circle cx="0" cy="0" r="3" fill="#374151"/><text x="0" y="32" text-anchor="middle" font-weight="bold" font-size="11" fill="#374151">px</text><text x="0" y="44" text-anchor="middle" font-size="9" fill="#6b7280">along x-axis</text></g><g transform="translate(420,108)"><ellipse cx="0" cy="-27" rx="17" ry="26" fill="#065f46" stroke="#10b981" stroke-width="1.5"/><ellipse cx="0" cy="27" rx="17" ry="26" fill="#065f46" stroke="#10b981" stroke-width="1.5"/><circle cx="0" cy="0" r="3" fill="#374151"/><text x="0" y="76" text-anchor="middle" font-weight="bold" font-size="11" fill="#374151">py</text><text x="0" y="88" text-anchor="middle" font-size="9" fill="#6b7280">along y-axis</text></g><g transform="translate(505,108)"><ellipse cx="0" cy="-27" rx="16" ry="26" fill="#4a1040" stroke="#ec4899" stroke-width="1.5"/><ellipse cx="0" cy="27" rx="16" ry="26" fill="#4a1040" stroke="#ec4899" stroke-width="1.5"/><circle cx="0" cy="0" r="3" fill="#374151"/><text x="0" y="76" text-anchor="middle" font-weight="bold" font-size="11" fill="#374151">pz</text><text x="0" y="88" text-anchor="middle" font-size="9" fill="#6b7280">along z-axis</text></g></svg>',
        caption: 'Shapes of s and p orbitals. s orbitals are spherical; p orbitals are dumbbell-shaped with two lobes. You must be able to draw and describe these shapes.'
      },
      terms: []
    },
    {
      id: 'svg-orbital-energy',
      type: 'svg',
      data: {
        caption: 'Orbital energy level diagram. Key point: 4s lies at a LOWER energy than 3d during filling (Aufbau order), so 4s fills first. Within each level, s is always lower in energy than p because s electrons can penetrate closer to the nucleus.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 310" font-family="Arial,sans-serif"><text x="250" y="17" text-anchor="middle" font-size="13" font-weight="bold" fill="#1f2937">Orbital Energy Levels and Aufbau Filling Order</text><line x1="44" y1="30" x2="44" y2="288" stroke="#9ca3af" stroke-width="1.5"/><polygon points="44,28 39,40 49,40" fill="#9ca3af"/><text x="24" y="170" text-anchor="middle" font-size="10" fill="#6b7280" transform="rotate(-90,24,170)">Energy (increasing upward)</text><line x1="60" y1="280" x2="150" y2="280" stroke="#3b82f6" stroke-width="2.5"/><text x="158" y="284" fill="#3b82f6" font-weight="bold">1s</text><text x="235" y="284" fill="#6b7280" font-size="9">fills 1st</text><line x1="60" y1="254" x2="150" y2="254" stroke="#3b82f6" stroke-width="2.5"/><text x="158" y="258" fill="#3b82f6" font-weight="bold">2s</text><text x="235" y="258" fill="#6b7280" font-size="9">penetrates closer to nucleus -- lower than 2p</text><line x1="60" y1="236" x2="97" y2="236" stroke="#10b981" stroke-width="2.5"/><line x1="104" y1="236" x2="141" y2="236" stroke="#10b981" stroke-width="2.5"/><line x1="148" y1="236" x2="185" y2="236" stroke="#10b981" stroke-width="2.5"/><text x="193" y="240" fill="#10b981" font-weight="bold">2p</text><text x="235" y="240" fill="#6b7280" font-size="9">3 degenerate orbitals</text><line x1="60" y1="210" x2="150" y2="210" stroke="#3b82f6" stroke-width="2.5"/><text x="158" y="214" fill="#3b82f6" font-weight="bold">3s</text><line x1="60" y1="192" x2="97" y2="192" stroke="#10b981" stroke-width="2.5"/><line x1="104" y1="192" x2="141" y2="192" stroke="#10b981" stroke-width="2.5"/><line x1="148" y1="192" x2="185" y2="192" stroke="#10b981" stroke-width="2.5"/><text x="193" y="196" fill="#10b981" font-weight="bold">3p</text><rect x="55" y="163" width="168" height="17" rx="3" fill="#44370a" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,2"/><line x1="60" y1="172" x2="150" y2="172" stroke="#3b82f6" stroke-width="2.5"/><text x="158" y="176" fill="#3b82f6" font-weight="bold">4s</text><text x="232" y="176" fill="#b45309" font-size="9" font-weight="bold">fills BEFORE 3d</text><line x1="60" y1="151" x2="90" y2="151" stroke="#f59e0b" stroke-width="2.5"/><line x1="96" y1="151" x2="126" y2="151" stroke="#f59e0b" stroke-width="2.5"/><line x1="132" y1="151" x2="162" y2="151" stroke="#f59e0b" stroke-width="2.5"/><line x1="168" y1="151" x2="198" y2="151" stroke="#f59e0b" stroke-width="2.5"/><line x1="204" y1="151" x2="234" y2="151" stroke="#f59e0b" stroke-width="2.5"/><text x="242" y="155" fill="#f59e0b" font-weight="bold">3d</text><text x="285" y="155" fill="#6b7280" font-size="9">5 orbitals -- fills after 4s</text><line x1="60" y1="130" x2="97" y2="130" stroke="#10b981" stroke-width="2.5"/><line x1="104" y1="130" x2="141" y2="130" stroke="#10b981" stroke-width="2.5"/><line x1="148" y1="130" x2="185" y2="130" stroke="#10b981" stroke-width="2.5"/><text x="193" y="134" fill="#10b981" font-weight="bold">4p</text><text x="235" y="134" fill="#6b7280" font-size="9">fills after 3d</text><text x="56" y="300" fill="#374151" font-size="9" font-weight="bold">Filling order: 1s to 2s to 2p to 3s to 3p to 4s to 3d to 4p</text><line x1="56" y1="307" x2="80" y2="307" stroke="#3b82f6" stroke-width="2.5"/><text x="84" y="310" fill="#374151" font-size="8">s orbital</text><line x1="135" y1="307" x2="159" y2="307" stroke="#10b981" stroke-width="2.5"/><text x="163" y="310" fill="#374151" font-size="8">p orbitals</text><line x1="222" y1="307" x2="246" y2="307" stroke="#f59e0b" stroke-width="2.5"/><text x="250" y="310" fill="#374151" font-size="8">d orbitals</text></svg>'
      },
      terms: []
    },
    {
      id: 'callout-filling',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Three Rules for Filling Orbitals',
        text: '<strong>1. Aufbau Principle</strong> (fill lowest energy subshell first):<br/>1s → 2s → 2p → 3s → 3p → <strong>4s → 3d</strong> → 4p → 5s → 4d → 5p<br/>Key: 4s fills <strong>before</strong> 3d (4s is slightly lower in energy).<br/><br/><strong>2. Hund\'s Rule</strong> (fill separate orbitals individually before pairing):<br/>Within any subshell, place one electron in each orbital before any pairing occurs. All unpaired electrons must have the same spin (↑).<br/>e.g. Carbon 2p²: [↑][ ][↑] — two separate orbitals occupied, NOT [↑↓][ ][ ].<br/><br/><strong>3. Pauli Exclusion Principle</strong> (each orbital holds maximum 2 electrons with <em>opposite spins</em>):<br/>A filled orbital = [↑↓]. Two electrons sharing one orbital must have opposite spins — one spin-up (↑) and one spin-down (↓).<br/><br/>These three rules together give the complete electron configuration for every element.'
      },
      terms: ['Aufbau principle', "Hund's rule", 'Pauli exclusion principle']
    },
    {
      id: 'svg-box-notation',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 190" font-family="Arial,sans-serif"><text x="280" y="16" text-anchor="middle" font-size="13" font-weight="bold" fill="#1f2937">Orbital Box Diagrams — Filling Rules in Action</text><text x="12" y="44" font-size="11" fill="#374151">Element</text><text x="98" y="44" text-anchor="middle" font-size="11" fill="#374151">1s</text><text x="151" y="44" text-anchor="middle" font-size="11" fill="#374151">2s</text><text x="220" y="44" text-anchor="middle" font-size="10" fill="#374151">2px</text><text x="270" y="44" text-anchor="middle" font-size="10" fill="#374151">2py</text><text x="320" y="44" text-anchor="middle" font-size="10" fill="#374151">2pz</text><text x="390" y="44" font-size="10" fill="#374151">Notes</text><line x1="8" y1="48" x2="552" y2="48" stroke="#d1d5db" stroke-width="1"/><text x="12" y="78" font-size="12" fill="#374151">O (Z=8)</text><rect x="81" y="58" width="34" height="26" fill="none" stroke="#9ca3af" stroke-width="1.2" rx="2"/><text x="92" y="76" font-size="15" fill="#2563eb">↑</text><text x="102" y="76" font-size="15" fill="#dc2626">↓</text><rect x="134" y="58" width="34" height="26" fill="none" stroke="#9ca3af" stroke-width="1.2" rx="2"/><text x="145" y="76" font-size="15" fill="#2563eb">↑</text><text x="155" y="76" font-size="15" fill="#dc2626">↓</text><rect x="203" y="58" width="34" height="26" fill="#78350f" stroke="#f59e0b" stroke-width="1.5" rx="2"/><text x="214" y="76" font-size="15" fill="#2563eb">↑</text><text x="224" y="76" font-size="15" fill="#dc2626">↓</text><rect x="253" y="58" width="34" height="26" fill="none" stroke="#9ca3af" stroke-width="1.2" rx="2"/><text x="264" y="76" font-size="15" fill="#2563eb">↑</text><rect x="303" y="58" width="34" height="26" fill="none" stroke="#9ca3af" stroke-width="1.2" rx="2"/><text x="314" y="76" font-size="15" fill="#2563eb">↑</text><text x="350" y="74" font-size="10" fill="#374151">2p4: pair 1st, singly fill rest (Hund)</text><text x="12" y="118" font-size="12" fill="#374151">F (Z=9)</text><rect x="81" y="98" width="34" height="26" fill="none" stroke="#9ca3af" stroke-width="1.2" rx="2"/><text x="92" y="116" font-size="15" fill="#2563eb">↑</text><text x="102" y="116" font-size="15" fill="#dc2626">↓</text><rect x="134" y="98" width="34" height="26" fill="none" stroke="#9ca3af" stroke-width="1.2" rx="2"/><text x="145" y="116" font-size="15" fill="#2563eb">↑</text><text x="155" y="116" font-size="15" fill="#dc2626">↓</text><rect x="203" y="98" width="34" height="26" fill="#78350f" stroke="#f59e0b" stroke-width="1.5" rx="2"/><text x="214" y="116" font-size="15" fill="#2563eb">↑</text><text x="224" y="116" font-size="15" fill="#dc2626">↓</text><rect x="253" y="98" width="34" height="26" fill="#78350f" stroke="#f59e0b" stroke-width="1.5" rx="2"/><text x="264" y="116" font-size="15" fill="#2563eb">↑</text><text x="274" y="116" font-size="15" fill="#dc2626">↓</text><rect x="303" y="98" width="34" height="26" fill="none" stroke="#9ca3af" stroke-width="1.2" rx="2"/><text x="314" y="116" font-size="15" fill="#2563eb">↑</text><text x="350" y="114" font-size="10" fill="#374151">2p5: 2 paired, 1 unpaired</text><text x="12" y="158" font-size="12" fill="#374151">Ne (Z=10)</text><rect x="81" y="138" width="34" height="26" fill="none" stroke="#9ca3af" stroke-width="1.2" rx="2"/><text x="92" y="156" font-size="15" fill="#2563eb">↑</text><text x="102" y="156" font-size="15" fill="#dc2626">↓</text><rect x="134" y="138" width="34" height="26" fill="none" stroke="#9ca3af" stroke-width="1.2" rx="2"/><text x="145" y="156" font-size="15" fill="#2563eb">↑</text><text x="155" y="156" font-size="15" fill="#dc2626">↓</text><rect x="203" y="138" width="34" height="26" fill="#0a2e1a" stroke="#10b981" stroke-width="1.5" rx="2"/><text x="214" y="156" font-size="15" fill="#2563eb">↑</text><text x="224" y="156" font-size="15" fill="#dc2626">↓</text><rect x="253" y="138" width="34" height="26" fill="#0a2e1a" stroke="#10b981" stroke-width="1.5" rx="2"/><text x="264" y="156" font-size="15" fill="#2563eb">↑</text><text x="274" y="156" font-size="15" fill="#dc2626">↓</text><rect x="303" y="138" width="34" height="26" fill="#0a2e1a" stroke="#10b981" stroke-width="1.5" rx="2"/><text x="314" y="156" font-size="15" fill="#2563eb">↑</text><text x="324" y="156" font-size="15" fill="#dc2626">↓</text><text x="350" y="154" font-size="10" fill="#374151">2p6: full (noble gas core)</text><line x1="8" y1="170" x2="552" y2="170" stroke="#d1d5db" stroke-width="1"/><text x="12" y="183" font-size="9" fill="#6b7280">Yellow = paired (Pauli: must be opposite spins). Green = full subshell. Blue arrows = spin-up; red = spin-down.</text></svg>',
        caption: 'Orbital box diagrams for O, F and Ne demonstrating Hund rule (singly fill before pairing) and Pauli exclusion principle (opposite spins when paired).'
      },
      terms: []
    },
    {
      id: 'callout-4s3d-transition',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: K, Ca and Sc — the 4s before 3d Transition',
        text: '<strong>Potassium (K, Z=19):</strong><br/>After filling the Ar core (18 electrons), the 19th electron goes into <strong>4s</strong> — not 3d — because 4s has lower energy than 3d at this point.<br/>Config: 1s² 2s² 2p⁶ 3s² 3p⁶ <strong>4s¹</strong><br/><br/><strong>Calcium (Ca, Z=20):</strong><br/>The 20th electron continues filling 4s (not 3d).<br/>Config: 1s² 2s² 2p⁶ 3s² 3p⁶ <strong>4s²</strong><br/><br/><strong>Scandium (Sc, Z=21):</strong><br/>4s is now full; the 21st electron begins filling 3d.<br/>Config: 1s² 2s² 2p⁶ 3s² 3p⁶ <strong>4s² 3d¹</strong> — first transition metal (d-block)<br/><br/><em>Note: Both orderings are accepted in exams — ...3p⁶ 3d¹ 4s² and ...3p⁶ 4s² 3d¹ are equivalent.</em>'
      },
      terms: []
    },
    {
      id: 'h-configs',
      type: 'heading',
      data: { text: 'Writing Electron Configurations', level: 2 },
      terms: []
    },
    {
      id: 'table-configs',
      type: 'comparisonTable',
      data: {
        caption: 'Electron configurations of selected elements',
        headers: ['Element', 'Z', 'Full Configuration'],
        rows: [
          ['Hydrogen (H)', '1', '1s¹'],
          ['Carbon (C)', '6', '1s² 2s² 2p²'],
          ['Sodium (Na)', '11', '1s² 2s² 2p⁶ 3s¹'],
          ['Chlorine (Cl)', '17', '1s² 2s² 2p⁶ 3s² 3p⁵'],
          ['Calcium (Ca)', '20', '1s² 2s² 2p⁶ 3s² 3p⁶ 4s²'],
          ['Chromium (Cr)*', '24', '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹'],
          ['Copper (Cu)*', '29', '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹']
        ]
      },
      terms: []
    },
    {
      id: 'callout-exceptions',
      type: 'callout',
      data: {
        style: 'warning',
        title: '⚠ Exceptions: Cr and Cu',
        text: 'Chromium and Copper are famous exceptions to the Aufbau filling order.<br/>Cr: expected [Ar] 3d⁴ 4s² but actual is [Ar] <strong>3d⁵ 4s¹</strong><br/>Cu: expected [Ar] 3d⁹ 4s² but actual is [Ar] <strong>3d¹⁰ 4s¹</strong><br/><br/>Reason: extra stability of a <em>half-filled</em> (d⁵) or <em>fully-filled</em> (d¹⁰) d subshell. An electron moves from 4s to 3d.'
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
          'Write the nearest preceding noble gas in square brackets to replace the inner completed shells: <strong>[He]</strong>, <strong>[Ne]</strong>, <strong>[Ar]</strong>, <strong>[Kr]</strong>.',
          'Only the electrons added after the noble gas core are written out in full.',
          'Saves time and makes the outer (valence) configuration immediately obvious.',
          'Both full and abbreviated forms are accepted in Edexcel exams — use whichever is faster if not specified.'
        ]
      },
      terms: ['Noble gas core notation']
    },
    {
      id: 'table-abbreviated',
      type: 'comparisonTable',
      data: {
        caption: 'Full vs abbreviated electron configurations',
        headers: ['Element', 'Z', 'Full Configuration', 'Abbreviated'],
        rows: [
          ['Sodium (Na)', '11', '1s² 2s² 2p⁶ 3s¹', '[Ne] 3s¹'],
          ['Calcium (Ca)', '20', '1s² 2s² 2p⁶ 3s² 3p⁶ 4s²', '[Ar] 4s²'],
          ['Iron (Fe)', '26', '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²', '[Ar] 3d⁶ 4s²'],
          ['Chromium (Cr)*', '24', '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹', '[Ar] 3d⁵ 4s¹'],
          ['Copper (Cu)*', '29', '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹', '[Ar] 3d¹⁰ 4s¹'],
          ['Zinc (Zn)', '30', '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s²', '[Ar] 3d¹⁰ 4s²']
        ]
      },
      terms: []
    },
    {
      id: 'h-ion-configs',
      type: 'heading',
      data: { text: 'Electron Configurations of Ions', level: 2 },
      terms: []
    },
    {
      id: 'list-ion-rule',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Main group ions:</strong> simply remove or add the required number of outer-shell electrons (always from the highest n shell).',
          'Na → Na⁺: remove 3s¹ → [Ne] (isoelectronic with neon).',
          'Cl → Cl⁻: add one electron to 3p → 1s² 2s² 2p⁶ 3s² 3p⁶ (isoelectronic with argon).',
          '<strong>Transition metal ions — critical rule:</strong> the <strong>4s electrons are removed FIRST</strong>, before any 3d electrons are removed.',
          'This is counterintuitive (4s filled before 3d during Aufbau) — once electrons are removed, the 3d sub-shell drops below 4s in energy, so 4s becomes the highest-energy subshell and electrons are lost from it first.',
          'Common exam error: writing Fe²⁺ as [Ar] 3d⁴ 4s² — this is <strong>wrong</strong>. Fe²⁺ = [Ar] 3d⁶.'
        ]
      },
      terms: ['Ion electron configuration']
    },
    {
      id: 'table-ion-configs',
      type: 'comparisonTable',
      data: {
        caption: 'Electron configurations of common transition metal ions (4s removed first)',
        headers: ['Ion', 'Electrons removed', 'Configuration'],
        rows: [
          ['Fe (neutral)', '—', '[Ar] 3d⁶ 4s²'],
          ['Fe²⁺', 'both 4s electrons', '[Ar] 3d⁶'],
          ['Fe³⁺', 'both 4s + one 3d', '[Ar] 3d⁵'],
          ['Cu (neutral)*', '—', '[Ar] 3d¹⁰ 4s¹'],
          ['Cu⁺', '4s¹', '[Ar] 3d¹⁰'],
          ['Cu²⁺', '4s¹ + one 3d', '[Ar] 3d⁹'],
          ['Cr (neutral)*', '—', '[Ar] 3d⁵ 4s¹'],
          ['Cr²⁺', '4s¹ + one 3d', '[Ar] 3d⁴'],
          ['Cr³⁺', '4s¹ + two 3d', '[Ar] 3d³'],
          ['Mn (neutral)', '—', '[Ar] 3d⁵ 4s²'],
          ['Mn²⁺', 'both 4s electrons', '[Ar] 3d⁵']
        ]
      },
      terms: []
    },
    {
      id: 'callout-ion-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Fe²⁺ and Fe³⁺ Ion Configurations (Past Paper)',
        text: '<strong>Q: Write the electron configurations of Fe²⁺ and Fe³⁺.</strong><br/><br/><strong>Step 1 — Write Fe (Z = 26) neutral config:</strong><br/>1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² &nbsp; (or [Ar] 3d⁶ 4s²)<br/><br/><strong>Step 2 — Fe²⁺ (lose 2 electrons — remove 4s FIRST):</strong><br/>Remove both 4s electrons → [Ar] 3d⁶<br/>Check: 18 (Ar) + 6 (3d) = 24 electrons ✓ (Fe has 26, lost 2)<br/><br/><strong>Step 3 — Fe³⁺ (lose 3 electrons — 4s first, then 3d):</strong><br/>Remove both 4s electrons (2 gone) then one from 3d (3 total) → [Ar] 3d⁵<br/>Check: 18 + 5 = 23 electrons ✓ (Fe has 26, lost 3)<br/><br/><strong>⚠ Common mistake:</strong> Fe²⁺ written as [Ar] 3d⁴ 4s² — incorrect! 4s is not retained when 3d is removed from a transition metal ion.'
      },
      terms: []
    },
    {
      id: 'callout-pt',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Periodic Table Blocks and Electron Configuration',
        text: '• <strong>Group number</strong> = number of electrons in the outer shell (main group elements).<br/>• <strong>Period number</strong> = highest quantum shell number occupied.<br/><br/><strong>Three blocks of the periodic table:</strong><br/>• <strong>s-block</strong> (Groups 1–2): outermost electron enters the s subshell.<br/>• <strong>p-block</strong> (Groups 3–8): outermost electron enters the p subshell.<br/>• <strong>d-block</strong> (transition metals, Period 4 onwards): d subshell being filled; placed between s- and p-blocks.<br/><br/><strong>Shortcut for p-block outer configuration:</strong><br/>outer config = <em>(period)</em>s² <em>(period)</em>p<sup>(group−2)</sup><br/>(Groups 3–8; only works for main-group p-block elements)'
      },
      terms: ['s-block', 'p-block', 'd-block']
    },
    {
      id: 'svg-pt-blocks',
      type: 'svg',
      data: {
        caption: 'Blocks of the periodic table — colour-coded by which subshell the outermost electron occupies.',
        svg: `<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <!-- s-block column header -->
  <rect x="10" y="10" width="90" height="28" rx="4" fill="#3b82f6"/>
  <text x="55" y="28" text-anchor="middle" fill="#1e293b" font-weight="bold">s-block</text>
  <text x="55" y="38" text-anchor="middle" fill="#2d2d72" font-size="9">Groups 1–2</text>

  <!-- d-block column header -->
  <rect x="170" y="10" width="160" height="28" rx="4" fill="#78350f"/>
  <text x="250" y="28" text-anchor="middle" fill="#1e293b" font-weight="bold">d-block</text>
  <text x="250" y="38" text-anchor="middle" fill="#78350f" font-size="9">Transition metals (Period 4+)</text>

  <!-- p-block column header -->
  <rect x="390" y="10" width="120" height="28" rx="4" fill="#14532d"/>
  <text x="450" y="28" text-anchor="middle" fill="#1e293b" font-weight="bold">p-block</text>
  <text x="450" y="38" text-anchor="middle" fill="#0a2e1a" font-size="9">Groups 3–8</text>

  <!-- Period 1 -->
  <text x="5" y="68" fill="#64748b" font-size="9">Period 1</text>
  <rect x="10" y="55" width="40" height="22" rx="3" fill="#60a5fa"/>
  <text x="30" y="70" text-anchor="middle" fill="#1e293b">H</text>
  <rect x="430" y="55" width="40" height="22" rx="3" fill="#0a4a1a"/>
  <text x="450" y="70" text-anchor="middle" fill="#1e293b">He</text>

  <!-- Period 2 -->
  <text x="5" y="97" fill="#64748b" font-size="9">Period 2</text>
  <rect x="10" y="84" width="40" height="22" rx="3" fill="#60a5fa"/>
  <text x="30" y="99" text-anchor="middle" fill="#1e293b">Li</text>
  <rect x="55" y="84" width="40" height="22" rx="3" fill="#60a5fa"/>
  <text x="75" y="99" text-anchor="middle" fill="#1e293b">Be</text>
  <rect x="170" y="84" width="160" height="22" rx="3" fill="#1e293b" stroke="#d1d5db"/>
  <text x="250" y="99" text-anchor="middle" fill="#9ca3af" font-size="9">— no d-block in Period 2 —</text>
  <rect x="390" y="84" width="20" height="22" rx="3" fill="#0a4a1a"/>
  <text x="400" y="99" text-anchor="middle" fill="#1e293b">B</text>
  <rect x="415" y="84" width="20" height="22" rx="3" fill="#0a4a1a"/>
  <text x="425" y="99" text-anchor="middle" fill="#1e293b">C</text>
  <rect x="440" y="84" width="20" height="22" rx="3" fill="#0a4a1a"/>
  <text x="450" y="99" text-anchor="middle" fill="#1e293b">N</text>
  <rect x="465" y="84" width="20" height="22" rx="3" fill="#0a4a1a"/>
  <text x="475" y="99" text-anchor="middle" fill="#1e293b">O</text>
  <rect x="490" y="84" width="20" height="22" rx="3" fill="#0a4a1a"/>
  <text x="500" y="99" text-anchor="middle" fill="#1e293b">Ne</text>

  <!-- Period 3 -->
  <text x="5" y="126" fill="#64748b" font-size="9">Period 3</text>
  <rect x="10" y="113" width="40" height="22" rx="3" fill="#60a5fa"/>
  <text x="30" y="128" text-anchor="middle" fill="#1e293b">Na</text>
  <rect x="55" y="113" width="40" height="22" rx="3" fill="#60a5fa"/>
  <text x="75" y="128" text-anchor="middle" fill="#1e293b">Mg</text>
  <rect x="170" y="113" width="160" height="22" rx="3" fill="#1e293b" stroke="#d1d5db"/>
  <text x="250" y="128" text-anchor="middle" fill="#9ca3af" font-size="9">— no d-block in Period 3 —</text>
  <rect x="390" y="113" width="20" height="22" rx="3" fill="#0a4a1a"/>
  <text x="400" y="128" text-anchor="middle" fill="#1e293b">Al</text>
  <rect x="415" y="113" width="20" height="22" rx="3" fill="#0a4a1a"/>
  <text x="425" y="128" text-anchor="middle" fill="#1e293b">Si</text>
  <rect x="440" y="113" width="20" height="22" rx="3" fill="#0a4a1a"/>
  <text x="450" y="128" text-anchor="middle" fill="#1e293b">P</text>
  <rect x="465" y="113" width="20" height="22" rx="3" fill="#0a4a1a"/>
  <text x="475" y="128" text-anchor="middle" fill="#1e293b">Cl</text>
  <rect x="490" y="113" width="20" height="22" rx="3" fill="#0a4a1a"/>
  <text x="500" y="128" text-anchor="middle" fill="#1e293b">Ar</text>

  <!-- Period 4 -->
  <text x="5" y="155" fill="#64748b" font-size="9">Period 4</text>
  <rect x="10" y="142" width="40" height="22" rx="3" fill="#60a5fa"/>
  <text x="30" y="157" text-anchor="middle" fill="#1e293b">K</text>
  <rect x="55" y="142" width="40" height="22" rx="3" fill="#60a5fa"/>
  <text x="75" y="157" text-anchor="middle" fill="#1e293b">Ca</text>
  <rect x="170" y="142" width="160" height="22" rx="3" fill="#78350f"/>
  <text x="250" y="157" text-anchor="middle" fill="#1e293b" font-weight="bold">Sc → Zn (3d filling)</text>
  <rect x="390" y="142" width="20" height="22" rx="3" fill="#0a4a1a"/>
  <text x="400" y="157" text-anchor="middle" fill="#1e293b">Ga</text>
  <rect x="415" y="142" width="20" height="22" rx="3" fill="#0a4a1a"/>
  <text x="425" y="157" text-anchor="middle" fill="#1e293b">As</text>
  <rect x="440" y="142" width="20" height="22" rx="3" fill="#0a4a1a"/>
  <text x="450" y="157" text-anchor="middle" fill="#1e293b">Br</text>
  <rect x="465" y="142" width="20" height="22" rx="3" fill="#0a4a1a"/>
  <text x="475" y="157" text-anchor="middle" fill="#1e293b">Se</text>
  <rect x="490" y="142" width="20" height="22" rx="3" fill="#0a4a1a"/>
  <text x="500" y="157" text-anchor="middle" fill="#1e293b">Kr</text>

  <!-- Legend -->
  <rect x="10" y="178" width="12" height="12" rx="2" fill="#60a5fa"/>
  <text x="26" y="189" fill="#374151" font-size="9">s-block</text>
  <rect x="80" y="178" width="12" height="12" rx="2" fill="#78350f"/>
  <text x="96" y="189" fill="#374151" font-size="9">d-block</text>
  <rect x="150" y="178" width="12" height="12" rx="2" fill="#0a4a1a"/>
  <text x="166" y="189" fill="#374151" font-size="9">p-block</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'callout-outer-ec',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Outer Electronic Configuration from Group & Period — Arsenic (As)',
        text: '<strong>Question:</strong> Arsenic (As, Z = 33) is in Group 5, Period 4. Determine its outer electronic configuration and draw the box notation for the 4p subshell.<br/><br/><strong>Step 1 — Identify the outer quantum shell:</strong><br/>Period 4 → outer shell n = 4 → we write 4s and 4p.<br/><br/><strong>Step 2 — Count outer electrons:</strong><br/>Group 5 → 5 electrons in the outer shell → 2 in 4s, 3 in 4p.<br/><br/><strong>Outer configuration: 4s² 4p³</strong><br/><br/><strong>Step 3 — Draw box notation for 4p (Hund\'s rule):</strong><br/>4p has 3 orbitals; 3 electrons → each orbital singly occupied:<br/>4px [↑]  4py [↑]  4pz [↑]<br/>(Never pair until all three 4p orbitals each have one.)<br/><br/><strong>Shortcut rule for any p-block element:</strong><br/>Outer config = (period)s² (period)p<sup>(group − 2)</sup><br/>As: Group 5, Period 4 → 4s² 4p³ ✓<br/><br/><em>Note: the d-block sits between the s- and p-blocks in Period 4, but it does not change the outer s and p notation — As still writes its outer config as 4s² 4p³.</em>'
      },
      terms: ['Outer electronic configuration']
    },
    {
      id: 'h-practice-ec',
      type: 'heading',
      data: { text: 'Practice Questions', level: 2 },
      terms: []
    },
    {
      id: 'callout-pq-ec1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q1: Zinc (Z = 30) — Full spdf Configuration (Past Paper)',
        text: '<strong>Question:</strong> Write the full electron configuration of zinc (Z = 30) in spdf notation.<br/><br/><strong>Step 1 — Start at lowest energy and fill in order:</strong><br/>1s² → 2s² → 2p⁶ → 3s² → 3p⁶ — that\'s 18 electrons<br/><br/><strong>Step 2 — Apply the 4s before 3d exception:</strong><br/>Fill 4s² next (not 3d!) → now 20 electrons placed<br/><br/><strong>Step 3 — Fill 3d:</strong><br/>3d can hold 10 electrons; Zn needs 10 more → 3d¹⁰<br/><br/><strong>Full config: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰</strong><br/>(often written as: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² — both orders accepted)<br/><br/><em>Note: Zn is NOT a transition metal because its 3d subshell is completely full — it cannot form ions with a partially filled d subshell.</em>'
      },
      terms: []
    },
    {
      id: 'callout-pq-ec2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q2: Chromium (Z = 24) — Anomalous Configuration',
        text: '<strong>Question:</strong> Write the full electron configuration of chromium (Z = 24) and explain why it is anomalous.<br/><br/><strong>Expected (if Aufbau applied strictly):</strong><br/>1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁴ ← WRONG<br/><br/><strong>Actual configuration:</strong><br/>1s² 2s² 2p⁶ 3s² 3p⁶ <strong>4s¹ 3d⁵</strong><br/><br/><strong>Reason:</strong><br/>A half-filled 3d subshell (3d⁵) gives extra stability due to minimised electron-electron repulsion (one electron in each orbital, all same-spin). To achieve this, one electron is promoted from the 4s to the 3d.<br/><br/>This is a commonly tested exam question — always write 4s¹ 3d⁵ for Cr, NOT 4s² 3d⁴.'
      },
      terms: []
    },
    {
      id: 'callout-pq-ec3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q3: Iron (Z = 26)',
        text: '<strong>Question:</strong> Write the full electron configuration of iron (Z = 26).<br/><br/><strong>Step 1 — Fill up to Ar core (Z=18):</strong><br/>1s² 2s² 2p⁶ 3s² 3p⁶<br/><br/><strong>Step 2 — Fill 4s before 3d:</strong><br/>...4s²<br/><br/><strong>Step 3 — Fill 3d for remaining 6 electrons:</strong><br/>...3d⁶<br/><br/><strong>Full config: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶</strong><br/><br/><em>Iron is NOT an exception (unlike Cr and Cu). Does not have a half-filled or full d, so Aufbau applies normally.</em>'
      },
      terms: []
    },
    {
      id: 'checklist-1-2-3',
      type: 'checklist',
      data: {
        items: [
          { text: 'State the maximum electrons per shell using 2n² (n=1→2; n=2→8; n=3→18)', checked: false },
          { text: 'Explain the difference between an orbit and an orbital; state the Heisenberg Uncertainty Principle', checked: false },
          { text: 'State the number of orbitals and max electrons for s, p, d and f subshells', checked: false },
          { text: 'Explain why the Aufbau order is 1s→2s→2p→3s→3p→4s→3d→4p (not ...3p→3d→4s)', checked: false },
          { text: 'Draw box notation for an element using Aufbau, Hund\'s rule and Pauli exclusion principle', checked: false },
          { text: 'Write full spdf configurations for any element Z=1–36', checked: false },
          { text: 'Write abbreviated [noble gas core] configurations for any element', checked: false },
          { text: 'Write Cr and Cu configurations correctly and explain the half-filled/full d stability', checked: false },
          { text: 'Write Fe²⁺, Fe³⁺, Cu²⁺ and other transition metal ion configurations — removing 4s electrons first', checked: false },
          { text: 'Identify which block (s, p, d) an element belongs to from its position on the Periodic Table', checked: false },
          { text: 'Use group and period numbers to deduce the outer configuration of a p-block element', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Heisenberg Uncertainty Principle: cannot simultaneously know position and momentum of an electron → no definite orbits → orbitals are 3D probability regions (~95%). Shell capacity: 2n². Subshells: s (1 orbital, max 2e), p (3, max 6e), d (5, max 10e), f (7, max 14e). Aufbau order: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p. Hund\'s rule: singly fill before pairing; Pauli: max 2e per orbital with opposite spins. Exceptions: Cr = [Ar] 3d⁵ 4s¹; Cu = [Ar] 3d¹⁰ 4s¹. Abbreviated notation: replace inner noble gas core with [Ar], [Ne] etc. Ion configs: transition metals lose 4s electrons FIRST — Fe²⁺ = [Ar] 3d⁶; Fe³⁺ = [Ar] 3d⁵; Cu²⁺ = [Ar] 3d⁹. Periodic table blocks: s (Gps 1–2), p (Gps 3–8), d (transition metals, Period 4+). Outer p-block config shortcut: (period)s² (period)p^(group−2).'
      },
      terms: []
    }
  ],

  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'table-subshells', prompt: 'How many orbitals are in a p subshell? What is the maximum number of electrons it can hold?' },
      { id: 'c2', blockId: 'callout-filling', prompt: 'State the electron filling order up to 4p. Which fills first: 4s or 3d?' },
      { id: 'c3', blockId: 'callout-exceptions', prompt: 'Write the full electronic configuration of chromium (Z = 24) and explain why it is anomalous.' },
      { id: 'c4', blockId: 'callout-pq-ec1', prompt: 'Write the full spdf configuration of zinc (Z = 30), showing why 4s fills before 3d.' },
      { id: 'c5', blockId: 'callout-pq-ec3', prompt: 'Write the full configuration of Fe (Z = 26). Is it an exception to Aufbau? Explain.' },
      { id: 'c6', blockId: 'callout-filling', prompt: 'State the three rules for filling orbitals. What does the Pauli exclusion principle say about electrons sharing an orbital?' },
      { id: 'c7', blockId: 'callout-4s3d-transition', prompt: 'Write electron configurations of K (Z=19), Ca (Z=20) and Sc (Z=21). Why does 4s fill before 3d?' },
      { id: 'c8', blockId: 'callout-outer-ec', prompt: 'Arsenic is in Group 5, Period 4. Use group and period numbers to determine its outer electronic configuration. Draw the box notation for the 4p subshell.' },
      { id: 'c9', blockId: 'callout-heisenberg', prompt: 'Explain the difference between an orbit and an orbital. Why can electrons not have definite orbits around the nucleus? State the Heisenberg Uncertainty Principle.' }
    ],
    summaryText: 'Heisenberg UP: cannot simultaneously know an electron\'s position and momentum → no definite orbits → orbitals are probability regions (~95%) with defined shape and energy. Shells n=1,2,3 contain subshells (s×1, p×3, d×5, f×7 orbitals). At each level, s is lower energy than p (s electrons penetrate closer to nucleus). Three filling rules: (1) Aufbau — 1s→2s→2p→3s→3p→4s→3d→4p. (2) Hund — singly fill before pairing. (3) Pauli — max 2 per orbital, opposite spins. GCSE 2-8-8 breaks down at Z>18 — K fills 4s not 3d. Exceptions: Cr ([Ar]3d⁵4s¹), Cu ([Ar]3d¹⁰4s¹). Blocks: s (Groups 1–2), p (Groups 3–8), d (transition metals, Period 4+). Outer config shortcut (p-block): (period)s² (period)p^(group-2). Example: As (Group 5, Period 4) = 4s² 4p³.',
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_2_3;