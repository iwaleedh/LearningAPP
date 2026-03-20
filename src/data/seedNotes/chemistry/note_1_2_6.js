/**
 * Seed note: Chemistry · Unit 1 · Topic 2 · Subtopic 6
 * "s and p orbitals"
 * Source: Pearson Edexcel IAL Chemistry — Section 2A.3
 */
export const note_chemistry_1_2_6 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: "Define an atomic orbital. Describe the shapes of s and p orbitals. Apply the Pauli exclusion principle, Hund's rule and the Aufbau principle to draw and interpret orbital (box) diagrams for elements in Periods 1–3." },
      terms: []
    },
    {
      id: 'h-orbital-def',
      type: 'heading',
      data: { text: 'What is an Atomic Orbital?', level: 2 },
      terms: []
    },
    {
      id: 'callout-orbital-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Atomic Orbital',
        text: 'An <strong>atomic orbital</strong> is a region of space around the nucleus in which there is a <strong>95% probability of finding an electron</strong>.<br/><br/>Key points:<br/>• Electrons do <em>not</em> travel in fixed circular orbits (Bohr model) — they exist as a probability cloud<br/>• Each orbital is described by a wave function from Schrödinger\'s wave equation<br/>• Each orbital can hold a <strong>maximum of 2 electrons</strong> with <strong>opposite (antiparallel) spins</strong><br/>• Orbitals are grouped into sub-shells (s, p, d, f) which are grouped into shells (n = 1, 2, 3, …)'
      },
      terms: ['Atomic orbital']
    },
    {
      id: 'h-shells-subshells',
      type: 'heading',
      data: { text: 'Shells, Sub-shells and Orbitals', level: 2 },
      terms: []
    },
    {
      id: 'list-shells',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Shell (principal quantum number n):</strong> n = 1, 2, 3, 4 … — the further from the nucleus, the higher the energy (n = 1 is lowest energy, closest to nucleus)',
          '<strong>Sub-shell:</strong> Each shell contains one or more types of sub-shell (s, p, d, f); shell n contains sub-shells with labels up to n (e.g. n = 2 has 2s and 2p)',
          '<strong>Orbital:</strong> Each sub-shell contains a fixed number of orbitals; each orbital holds max 2 electrons with opposite spins',
          's sub-shell: 1 orbital → max 2 electrons',
          'p sub-shell: 3 orbitals (p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>) → max 6 electrons',
          'd sub-shell: 5 orbitals → max 10 electrons',
          'f sub-shell: 7 orbitals → max 14 electrons'
        ]
      },
      terms: []
    },
    {
      id: 'table-orbital-capacity',
      type: 'comparisonTable',
      data: {
        caption: 'Sub-shell types, number of orbitals and maximum electron capacity',
        headers: ['Sub-shell', 'No. of orbitals', 'Max electrons', 'Shape'],
        rows: [
          ['s', '1', '2', 'Spherical'],
          ['p', '3', '6', 'Dumbbell (two lobes); p\u2093, p\u1d67, p\u1d69 mutually perpendicular'],
          ['d', '5', '10', 'Clover-leaf and variants'],
          ['f', '7', '14', 'Complex multi-lobed']
        ]
      },
      terms: []
    },
    {
      id: 'h-s-orbital',
      type: 'heading',
      data: { text: 's Orbitals', level: 2 },
      terms: []
    },
    {
      id: 'list-s-orbital',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Shape: <strong>spherical</strong> — electron density is symmetrically distributed in all directions around the nucleus',
          'One s orbital per shell (1s, 2s, 3s, 4s …); each holds max 2 electrons',
          'Energy increases with shell number: 1s < 2s < 3s < 4s',
          'Higher s orbitals are larger in size (greater radius) and higher in energy',
          'The 1s orbital is the lowest energy orbital in the entire atom and always fills first',
          'There is no nodal plane through the nucleus — electron density is highest at the nucleus for s orbitals'
        ]
      },
      terms: ['s orbital']
    },
    {
      id: 'h-p-orbital',
      type: 'heading',
      data: { text: 'p Orbitals', level: 2 },
      terms: []
    },
    {
      id: 'list-p-orbital',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Shape: <strong>dumbbell (two-lobed)</strong> — two regions of electron density pointing in opposite directions through the nucleus; zero electron density at the nucleus (a nodal plane)',
          'Three p orbitals per sub-shell: <strong>p<sub>x</sub></strong>, <strong>p<sub>y</sub></strong>, <strong>p<sub>z</sub></strong> — aligned along the x, y, and z axes respectively, at 90° to each other',
          'All three p orbitals in the same sub-shell have <strong>equal energy</strong> — they are <em>degenerate</em>',
          'p orbitals first appear in shell n = 2 (2p sub-shell); then 3p, 4p …',
          'Each p orbital holds max 2 electrons → 3 p orbitals together hold max 6 electrons',
          'p orbitals are at a slightly higher energy than the s orbital in the same shell: 2p > 2s; 3p > 3s'
        ]
      },
      terms: ['p orbital', 'Degenerate orbitals']
    },
    {
      id: 'svg-orbital-shapes',
      type: 'svg',
      data: {
        caption: 'Shapes of s orbital (left) and the three p orbitals — p\u2093, p\u1d67, p\u1d69 (right)',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 270" font-family="sans-serif" font-size="12">
  <rect width="520" height="270" fill="#0f172a" rx="8"/>
  <text x="260" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1a1a2e">Shapes of s and p Orbitals</text>
  <!-- Divider -->
  <line x1="148" y1="35" x2="148" y2="258" stroke="#ccc" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- === s ORBITAL (left panel) === -->
  <text x="74" y="50" text-anchor="middle" font-size="12" font-weight="bold" fill="#3f51b5">s orbital</text>
  <ellipse cx="74" cy="148" rx="54" ry="54" fill="#1e3a8a" fill-opacity="0.45" stroke="#3f51b5" stroke-width="1.5"/>
  <circle cx="74" cy="148" r="5" fill="#e63946"/>
  <text x="74" y="215" text-anchor="middle" fill="#3f51b5" font-size="11">Spherical</text>
  <text x="74" y="229" text-anchor="middle" fill="#3f51b5" font-size="11">1 orbital → max 2 e⁻</text>
  <!-- === p ORBITALS (right panel) === -->
  <text x="334" y="50" text-anchor="middle" font-size="12" font-weight="bold" fill="#6a0dad">p orbitals (p\u2093, p\u1d67, p\u1d69)</text>
  <!-- px: two horizontal lobes -->
  <ellipse cx="196" cy="130" rx="32" ry="17" fill="#2d1b69" fill-opacity="0.6" stroke="#6a0dad" stroke-width="1.5"/>
  <ellipse cx="256" cy="130" rx="32" ry="17" fill="#2d1b69" fill-opacity="0.6" stroke="#6a0dad" stroke-width="1.5"/>
  <circle cx="226" cy="130" r="4" fill="#e63946"/>
  <text x="226" y="160" text-anchor="middle" fill="#6a0dad" font-size="11">p\u2093 (x-axis)</text>
  <!-- py: two vertical lobes -->
  <ellipse cx="334" cy="98" rx="17" ry="32" fill="#1c3a64" fill-opacity="0.6" stroke="#1565c0" stroke-width="1.5"/>
  <ellipse cx="334" cy="162" rx="17" ry="32" fill="#1c3a64" fill-opacity="0.6" stroke="#1565c0" stroke-width="1.5"/>
  <circle cx="334" cy="130" r="4" fill="#e63946"/>
  <text x="334" y="208" text-anchor="middle" fill="#1565c0" font-size="11">p\u1d67 (y-axis)</text>
  <!-- pz: tilted lobes (suggesting z-axis depth) -->
  <ellipse cx="432" cy="130" rx="28" ry="14" fill="#0a2e1a" fill-opacity="0.6" stroke="#2e7d32" stroke-width="1.5" transform="rotate(-50 432 130)"/>
  <ellipse cx="432" cy="130" rx="28" ry="14" fill="#0a2e1a" fill-opacity="0.3" stroke="#2e7d32" stroke-width="1.5" transform="rotate(130 432 130)"/>
  <circle cx="432" cy="130" r="4" fill="#e63946"/>
  <text x="432" y="208" text-anchor="middle" fill="#2e7d32" font-size="11">p\u1d69 (z-axis)</text>
  <!-- Bottom notes -->
  <rect x="160" y="220" width="340" height="42" rx="4" fill="#1e293b" stroke="#ddd"/>
  <text x="330" y="236" text-anchor="middle" fill="#555" font-size="10">All three p orbitals are degenerate (equal energy)</text>
  <text x="330" y="250" text-anchor="middle" fill="#555" font-size="10">Each at 90° to the others · 3 orbitals → max 6 e⁻ per p sub-shell</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'h-rules',
      type: 'heading',
      data: { text: 'Three Rules for Filling Orbitals', level: 2 },
      terms: []
    },
    {
      id: 'list-rules',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Rule 1 — Aufbau (Building Up) Principle:</strong> Electrons fill orbitals in order of <em>increasing energy</em>, lowest energy first',
          '<strong>Rule 2 — Pauli Exclusion Principle:</strong> Each orbital holds a <strong>maximum of 2 electrons</strong>; they must have <strong>opposite (antiparallel) spins</strong> — written ↑↓ in box notation',
          "<strong>Rule 3 — Hund's Rule of Maximum Multiplicity:</strong> When filling degenerate orbitals (same sub-shell, same energy), electrons occupy <em>separate</em> orbitals singly with parallel spins (↑ ↑ ↑) <em>before</em> pairing — minimises electron-electron repulsion"
        ]
      },
      terms: ['Aufbau principle', 'Pauli exclusion principle', "Hund's rule"]
    },
    {
      id: 'callout-hund-detail',
      type: 'callout',
      data: {
        style: 'key',
        title: "Why Hund's Rule Applies",
        text: 'Electrons are negatively charged and repel each other. Placing electrons in <em>separate</em> degenerate orbitals keeps them further apart on average, <strong>minimising electron-electron repulsion</strong> → lower energy arrangement.<br/><br/>• Example — 3p³ (P, Z=15): three 3p electrons go one each into p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub> (↑ ↑ ↑) — NOT two in one orbital<br/>• Example — 3p⁴ (S, Z=16): the 4th electron <em>must</em> pair in an already-occupied orbital → extra repulsion → lower IE₁ than P despite higher Z in S<br/>• This is the orbital-level explanation for the Dip 2 anomaly in Period 3 IE₁ data'
      },
      terms: []
    },
    {
      id: 'h-filling-order',
      type: 'heading',
      data: { text: 'Filling Order of Orbitals', level: 2 },
      terms: []
    },
    {
      id: 'list-filling',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Order: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d … (key sequence for Edexcel IAL)',
          '4s fills <em>before</em> 3d because 4s is at a lower energy than 3d for neutral atoms (elements K and Ca)',
          'After the 3d sub-shell begins to fill, 4s and 3d energies become comparable — <em>for transition metal ions</em>, 4s electrons are lost <em>before</em> 3d electrons',
          'For Periods 1–3 (elements H to Ar): filling order has no anomalies — strictly 1s → 2s → 2p → 3s → 3p'
        ]
      },
      terms: []
    },
    {
      id: 'callout-box-notation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Box (Orbital) Notation — How to Draw',
        text: 'In box notation, each box (□) represents one orbital. Arrows represent electrons: ↑ = spin-up, ↓ = spin-down.<br/><br/><strong>Drawing rules:</strong><br/>• Label each sub-shell (1s, 2s, 2p, 3s, 3p)<br/>• Add electrons in Aufbau order (lowest energy first)<br/>• Each orbital gets one electron before any pairing (Hund\'s rule)<br/>• Paired electrons written ↑↓ (Pauli — opposite spins only)<br/><br/><strong>Example — Carbon (Z=6), 1s²2s²2p²:</strong><br/>1s: [↑↓] &nbsp; 2s: [↑↓] &nbsp; 2p: [↑][↑][ ]<br/>(Two 2p electrons placed in separate orbitals — not [↑↓][ ][ ])<br/><br/><strong>Example — Oxygen (Z=8), 1s²2s²2p⁴:</strong><br/>1s: [↑↓] &nbsp; 2s: [↑↓] &nbsp; 2p: [↑↓][↑][↑]<br/>(4th 2p electron pairs in the first p orbital; remaining two are unpaired)'
      },
      terms: []
    },
    {
      id: 'h-examples',
      type: 'heading',
      data: { text: 'Orbital Box Diagrams — Period 1 to 3 Examples', level: 2 },
      terms: []
    },
    {
      id: 'table-box-diagrams',
      type: 'comparisonTable',
      data: {
        caption: 'Box diagrams for selected elements — key cases for Edexcel IAL examinations',
        headers: ['Element', 'Z', 'Configuration', '1s', '2s', '2p', '3s', '3p'],
        rows: [
          ['H', '1', '1s¹', '↑', '—', '—', '—', '—'],
          ['He', '2', '1s²', '↑↓', '—', '—', '—', '—'],
          ['Li', '3', '1s²2s¹', '↑↓', '↑', '—', '—', '—'],
          ['C', '6', '1s²2s²2p²', '↑↓', '↑↓', '↑|↑|—', '—', '—'],
          ['N', '7', '1s²2s²2p³', '↑↓', '↑↓', '↑|↑|↑', '—', '—'],
          ['O', '8', '1s²2s²2p⁴', '↑↓', '↑↓', '↑↓|↑|↑', '—', '—'],
          ['Ne', '10', '1s²2s²2p⁶', '↑↓', '↑↓', '↑↓|↑↓|↑↓', '—', '—'],
          ['Na', '11', '1s²2s²2p⁶3s¹', '↑↓', '↑↓', '↑↓|↑↓|↑↓', '↑', '—'],
          ['P', '15', '1s²2s²2p⁶3s²3p³', '↑↓', '↑↓', '↑↓|↑↓|↑↓', '↑↓', '↑|↑|↑'],
          ['S', '16', '1s²2s²2p⁶3s²3p⁴', '↑↓', '↑↓', '↑↓|↑↓|↑↓', '↑↓', '↑↓|↑|↑'],
          ['Cl', '17', '1s²2s²2p⁶3s²3p⁵', '↑↓', '↑↓', '↑↓|↑↓|↑↓', '↑↓', '↑↓|↑↓|↑'],
          ['Ar', '18', '1s²2s²2p⁶3s²3p⁶', '↑↓', '↑↓', '↑↓|↑↓|↑↓', '↑↓', '↑↓|↑↓|↑↓']
        ]
      },
      terms: []
    },
    {
      id: 'callout-unpaired',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Unpaired Electrons — Chemical Significance',
        text: 'An atom with unpaired electrons is <strong>paramagnetic</strong> (weakly attracted by a magnetic field); all-paired electrons gives a <strong>diamagnetic</strong> atom.<br/><br/>Unpaired electrons are also available to form covalent bonds:<br/>• N (2p: ↑|↑|↑) → 3 unpaired electrons → forms 3 bonds (e.g. NH₃)<br/>• O (2p: ↑↓|↑|↑) → 2 unpaired electrons → forms 2 bonds (e.g. H₂O)<br/>• Ne (2p: ↑↓|↑↓|↑↓) → 0 unpaired electrons → chemically inert<br/><br/>Counting unpaired electrons from the box diagram gives a quick way to predict bonding capacity for Period 2 p-block elements.'
      },
      terms: ['Paramagnetic', 'Diamagnetic']
    },
    {
      id: 'h-s-p-blocks',
      type: 'heading',
      data: { text: 's-block and p-block Elements', level: 2 },
      terms: []
    },
    {
      id: 'list-blocks',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>s-block:</strong> Groups 1 and 2 — outermost (highest energy) electron is in an s orbital; includes H, He, Li, Be, Na, Mg, K, Ca …',
          '<strong>p-block:</strong> Groups 13–18 — outermost electron enters a p orbital; includes B, C, N, O, F, Ne, Al, Si, P, S, Cl, Ar …',
          '<strong>d-block:</strong> Groups 3–12 (transition metals) — outermost electron enters a d orbital; includes Sc, Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn',
          '<strong>f-block:</strong> Lanthanides and actinides — outermost electron enters an f orbital',
          'The block is determined by which sub-shell the <em>last-added (highest energy) electron</em> enters in the ground state configuration'
        ]
      },
      terms: ['s-block', 'p-block', 'd-block']
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
        title: 'Practice Q1: Box Notation for Phosphorus and Sulfur',
        text: '<strong>Question:</strong> Draw the full orbital box diagram for (a) phosphorus (Z=15) and (b) sulfur (Z=16). State the number of unpaired electrons in each. Use these diagrams to explain why IE₁(S) < IE₁(P).<br/><br/><strong>(a) P — 1s²2s²2p⁶3s²3p³:</strong><br/>1s: [↑↓] &nbsp;2s: [↑↓] &nbsp;2p: [↑↓][↑↓][↑↓] &nbsp;3s: [↑↓] &nbsp;3p: [↑][↑][↑]<br/><em>3 unpaired electrons (one in each 3p orbital — Hund\'s rule)</em><br/><br/><strong>(b) S — 1s²2s²2p⁶3s²3p⁴:</strong><br/>1s: [↑↓] &nbsp;2s: [↑↓] &nbsp;2p: [↑↓][↑↓][↑↓] &nbsp;3s: [↑↓] &nbsp;3p: [↑↓][↑][↑]<br/><em>2 unpaired electrons</em><br/><br/><strong>Why IE₁(S) < IE₁(P):</strong><br/>The 4th 3p electron in S must pair in an already-occupied orbital. The two electrons in that 3p orbital experience <em>electron-electron repulsion</em>, raising the energy of the paired electron and making it easier to remove → lower IE₁ despite higher Z in S.'
      },
      terms: []
    },
    {
      id: 'callout-pq2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q2: Define an Orbital and Apply Pauli + Hund\'s',
        text: '<strong>Question:</strong> (a) Define "atomic orbital". (b) Draw the box diagram for nitrogen (Z=7). (c) Explain which rule determines the arrangement of the 2p electrons. (3 marks)<br/><br/><strong>(a)</strong> A region of space around the nucleus in which there is a 95% probability of finding an electron; holds max 2 electrons with opposite spins. (1 mark)<br/><br/><strong>(b) N, configuration: 1s²2s²2p³</strong><br/>1s: [↑↓] &nbsp;2s: [↑↓] &nbsp;2p: [↑][↑][↑] (1 mark)<br/><br/><strong>(c)</strong> Hund\'s rule: the three 2p electrons each occupy a separate orbital (p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>) singly before pairing, because this minimises electron-electron repulsion between them. (1 mark)'
      },
      terms: []
    },
    {
      id: 'callout-pq3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q3: Identify s-block / p-block from Configuration',
        text: '<strong>Question:</strong> State whether each element is s-block or p-block and give the sub-shell of the outermost electron: (a) Mg (Z=12) &nbsp; (b) Al (Z=13) &nbsp; (c) Cl (Z=17)<br/><br/><strong>(a) Mg — 1s²2s²2p⁶3s²:</strong> Outermost electrons in 3s → <strong>s-block</strong>; sub-shell 3s; 2 outer electrons<br/><br/><strong>(b) Al — 1s²2s²2p⁶3s²3p¹:</strong> Outermost electron in 3p → <strong>p-block</strong>; sub-shell 3p; 1 electron in 3p (3 outer valence electrons total including 3s²)<br/><br/><strong>(c) Cl — 1s²2s²2p⁶3s²3p⁵:</strong> Outermost electrons in 3p → <strong>p-block</strong>; sub-shell 3p; 7 outer electrons'
      },
      terms: []
    },
    {
      id: 'checklist-1-2-6',
      type: 'checklist',
      data: {
        items: [
          { text: 'Define an atomic orbital as a 95% probability region of space around the nucleus', checked: false },
          { text: 'State the maximum number of electrons per orbital and the spin requirement (Pauli)', checked: false },
          { text: 'Describe the shape of an s orbital (spherical, one per sub-shell, max 2 e⁻)', checked: false },
          { text: 'Describe the shape of p orbitals (dumbbell; px, py, pz; degenerate; 3 per sub-shell; max 6 e⁻)', checked: false },
          { text: 'State sub-shell electron capacities: s=2, p=6, d=10, f=14', checked: false },
          { text: 'State the Aufbau principle and apply it to write filling order', checked: false },
          { text: 'State the Pauli exclusion principle and its consequence for box diagrams', checked: false },
          { text: "State Hund's rule and explain why it minimises electron-electron repulsion", checked: false },
          { text: 'State the filling order: 1s → 2s → 2p → 3s → 3p → 4s → 3d', checked: false },
          { text: 'Draw correct box (orbital) diagrams for any element in Periods 1–3', checked: false },
          { text: 'Count unpaired electrons from a box diagram', checked: false },
          { text: 'Identify whether an element is s-block or p-block from its configuration', checked: false },
          { text: "Use Hund's rule to explain why IE₁(S) < IE₁(P) (paired 3p electron; extra repulsion)", checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: "Atomic orbital = region of 95% probability of finding an electron (Schrödinger wave function); max 2 e⁻ per orbital, opposite spins (Pauli exclusion principle). s orbitals: spherical; 1 per sub-shell; max 2 e⁻. p orbitals: dumbbell-shaped; 3 per sub-shell (px, py, pz — degenerate, at 90° to each other); max 6 e⁻. Sub-shell capacities: s=2, p=6, d=10, f=14. Three filling rules: (1) Aufbau — fill lowest energy orbital first; (2) Pauli — max 2 e⁻ per orbital with opposite spins; (3) Hund's rule — fill degenerate orbitals singly before pairing (minimises repulsion). Filling order: 1s → 2s → 2p → 3s → 3p → 4s → 3d. s-block = Groups 1–2 (outermost e⁻ fills s sub-shell). p-block = Groups 13–18 (outermost e⁻ fills p sub-shell). Hund's rule explains IE₁(S) < IE₁(P): S has a paired 3p electron that experiences extra electron-electron repulsion → easier to remove despite higher Z."
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-orbital-def', prompt: 'Define an atomic orbital. How many electrons can it hold and what spin requirement applies?' },
      { id: 'c2', blockId: 'list-s-orbital', prompt: 'Describe the shape of an s orbital. How does size and energy change as the shell number increases?' },
      { id: 'c3', blockId: 'list-p-orbital', prompt: 'Describe the three p orbitals in a p sub-shell. What is meant by "degenerate" and how are the three orbitals oriented relative to each other?' },
      { id: 'c4', blockId: 'list-rules', prompt: "State the three rules for filling atomic orbitals (Aufbau, Pauli, Hund's). Give one example of each." },
      { id: 'c5', blockId: 'callout-pq1', prompt: 'Draw box diagrams for P and S. How many unpaired electrons does each have? Use orbitals to explain why IE₁(S) < IE₁(P).' },
      { id: 'c6', blockId: 'list-blocks', prompt: 'Define s-block and p-block elements. Give two examples of each. How do you determine the block from the electronic configuration?' },
      { id: 'c7', blockId: 'table-orbital-capacity', prompt: 'State the number of orbitals and maximum electron capacity for s, p, d and f sub-shells.' }
    ],
    summaryText: "Orbital = 95% probability region; max 2 e⁻, opposite spins (Pauli). s = spherical (1 orbital, 2 e⁻). p = dumbbell (3 orbitals px/py/pz — degenerate, 6 e⁻). d = 5 orbitals (10 e⁻). Filling: Aufbau (lowest first) + Pauli (max 2, opposite spins) + Hund's (singly before pairing). Order: 1s→2s→2p→3s→3p→4s→3d. s-block = Groups 1–2; p-block = Groups 13–18. Hund's rule → IE₁(S) < IE₁(P): paired 3p electron in S has extra repulsion → easier to remove.",
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_2_6;
