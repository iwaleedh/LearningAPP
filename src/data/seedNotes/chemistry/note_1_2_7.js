/**
 * Seed note: Chemistry · Unit 1 · Topic 2 · Subtopic 7
 * "Atomic orbitals (s, p, d)"
 * Source: Pearson Edexcel IAL Chemistry — Section 2A.3
 */
export const note_chemistry_1_2_7 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Know the shapes of s, p and d atomic orbitals. Understand orbital notation for electron configurations using boxes.' },
      terms: []
    },
    {
      id: 'h-orbital',
      type: 'heading',
      data: { text: 'What is an Atomic Orbital?', level: 2 },
      terms: []
    },
    {
      id: 'callout-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Atomic Orbital',
        text: 'An <strong>atomic orbital</strong> is a region of space around the nucleus where there is a high <strong>probability</strong> of finding an electron. Each orbital can hold a maximum of <strong>2 electrons</strong> (with opposite spins — Pauli exclusion principle).'
      },
      terms: ['Atomic orbital', 'Pauli exclusion principle']
    },
    {
      id: 'h-shapes',
      type: 'heading',
      data: { text: 'Shapes of Orbitals', level: 2 },
      terms: []
    },
    {
      id: 'svg-orbitals',
      type: 'svg',
      data: {
        caption: 'Figure: Shapes of s, p and d atomic orbitals',
        svg: `<svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- s orbital: sphere -->
  <ellipse cx="80" cy="85" rx="50" ry="50" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2" opacity="0.85"/>
  <text x="80" y="90" text-anchor="middle" fill="#1e40af" font-weight="bold">s</text>
  <text x="80" y="155" text-anchor="middle" fill="#1e40af" font-size="12" font-weight="bold">s orbital</text>
  <text x="80" y="168" text-anchor="middle" fill="#64748b" font-size="10">Sphere</text>

  <!-- p orbital: two lobes -->
  <!-- top lobe -->
  <ellipse cx="230" cy="45" rx="22" ry="38" fill="#d1fae5" stroke="#16a34a" stroke-width="1.5" opacity="0.85"/>
  <!-- bottom lobe -->
  <ellipse cx="230" cy="125" rx="22" ry="38" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5" opacity="0.6"/>
  <!-- nucleus dot -->
  <circle cx="230" cy="85" r="4" fill="#15803d"/>
  <!-- axis line -->
  <line x1="230" y1="5" x2="230" y2="165" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="246" y="18" fill="#64748b" font-size="9">+</text>
  <text x="246" y="165" fill="#64748b" font-size="9">−</text>
  <text x="230" y="155" text-anchor="middle" fill="#15803d" font-size="12" font-weight="bold">p orbital</text>
  <text x="230" y="168" text-anchor="middle" fill="#64748b" font-size="10">Dumbbell (2 lobes)</text>

  <!-- Three p orbitals label -->
  <text x="230" y="178" text-anchor="middle" fill="#64748b" font-size="9">pₓ, pᵧ, p_z along x/y/z axes</text>

  <!-- d orbital: 4 lobes (representative d_xy) -->
  <!-- lobe top-right -->
  <ellipse cx="405" cy="55" rx="30" ry="18" fill="#fde68a" stroke="#d97706" stroke-width="1.5" opacity="0.85" transform="rotate(45,405,55)"/>
  <!-- lobe bottom-left -->
  <ellipse cx="405" cy="115" rx="30" ry="18" fill="#fde68a" stroke="#d97706" stroke-width="1.5" opacity="0.85" transform="rotate(45,405,115)"/>
  <!-- lobe top-left -->
  <ellipse cx="355" cy="55" rx="30" ry="18" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" opacity="0.7" transform="rotate(-45,355,55)"/>
  <!-- lobe bottom-right -->
  <ellipse cx="455" cy="115" rx="30" ry="18" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" opacity="0.7" transform="rotate(-45,455,115)"/>
  <!-- nucleus -->
  <circle cx="405" cy="85" r="4" fill="#92400e"/>
  <text x="405" y="155" text-anchor="middle" fill="#92400e" font-size="12" font-weight="bold">d orbital</text>
  <text x="405" y="168" text-anchor="middle" fill="#64748b" font-size="10">4-lobed (cloverleaf)</text>
  <text x="405" y="178" text-anchor="middle" fill="#64748b" font-size="9">5 d orbitals per subshell</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'table-shapes',
      type: 'comparisonTable',
      data: {
        caption: 'Shapes and properties of s, p and d orbitals',
        headers: ['Orbital Type', 'Shape', 'Number per subshell', 'Max electrons per subshell'],
        rows: [
          ['<strong>s orbital</strong>', 'Spherical — the electron cloud is distributed equally in all directions around the nucleus.', '1', '2'],
          ['<strong>p orbital</strong>', 'Dumbbell (figure-8) shaped — two lobes, one on each side of the nucleus. Three p orbitals are oriented along the x, y and z axes (pₓ, pᵧ, p_z).', '3', '6'],
          ['<strong>d orbital</strong>', 'More complex shapes (cloverleaf and dumbbell-with-ring). Five d orbitals per subshell.', '5', '10']
        ]
      },
      terms: ['s orbital', 'p orbital', 'd orbital']
    },
    {
      id: 'h-notation',
      type: 'heading',
      data: { text: 'Box (Orbital) Notation', level: 2 },
      terms: []
    },
    {
      id: 'callout-box',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Box Notation Rules',
        text: '• Each box represents one orbital.<br/>• Arrows represent electrons: ↑ (spin up) and ↓ (spin down).<br/>• A maximum of 2 electrons per box, with opposite spins.<br/>• <strong>Hund\'s rule:</strong> Fill all boxes in a subshell singly before pairing. This minimises electron-electron repulsion.'
      },
      terms: ["Hund's rule"]
    },
    {
      id: 'callout-box-example',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Box notation examples',
        text: '<strong>Nitrogen (N, Z=7): 1s² 2s² 2p³</strong><br/>1s: [↑↓] | 2s: [↑↓] | 2p: [↑][↑][↑]<br/><br/><strong>Oxygen (O, Z=8): 1s² 2s² 2p⁴</strong><br/>1s: [↑↓] | 2s: [↑↓] | 2p: [↑↓][↑][↑]<br/>(one orbital in 2p is paired, the other two remain singly filled)'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-def', prompt: 'Define the term "atomic orbital". What is the maximum number of electrons it can hold?' },
      { id: 'c2', blockId: 'table-shapes', prompt: 'Describe the shape of (a) an s orbital and (b) a p orbital.' },
      { id: 'c3', blockId: 'callout-box', prompt: 'State Hund\'s rule in your own words.' },
      { id: 'c4', blockId: 'callout-box-example', prompt: 'Draw the orbital box notation for carbon (Z = 6).' }
    ],
    summaryText: 'Orbital = region where electron is likely to be found (max 2 electrons, opposite spins). s = sphere; p = dumbbell (3 orbitals per subshell); d = complex (5 orbitals). Hund\'s rule: half-fill before pairing. Box notation uses arrows ↑↓ to represent electrons.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_2_7;