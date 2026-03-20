export const note_olevel_physics_6_1_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/6 Space Physics/6-1-5-stars.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Describe star formation from nebulae; explain the main-sequence stage; trace life cycles of low-mass and high-mass stars to their end states.' } },
    { id: 'h-formation', type: 'heading', data: { text: 'Star Formation: From Nebula to Protostar', level: 2 } },
    { id: 'para-nebula', type: 'paragraph', data: { text: 'Stars form inside <strong>nebulae</strong> — giant clouds of gas (mainly hydrogen) and dust. Under gravity, regions of the nebula contract. As material falls inward, gravitational potential energy is converted to kinetic energy, heating the gas. This hot, contracting cloud is called a <strong>protostar</strong>.' } },
    { id: 'list-formation', type: 'list', data: { style: 'numbered', items: [
      { text: '<strong>Nebula:</strong> giant gas/dust cloud; gravity causes local regions to collapse inward.' },
      { text: '<strong>Protostar:</strong> contracting hot ball of gas; temperature and pressure rise.' },
      { text: '<strong>Main sequence:</strong> core temperature reaches ~10⁷ K; hydrogen fusion begins; radiation pressure balances gravity (hydrostatic equilibrium).' },
    ]}},
    { id: 'h-main', type: 'heading', data: { text: 'Main-Sequence Stage', level: 2 } },
    { id: 'para-main', type: 'paragraph', data: { text: 'On the <strong>main sequence</strong>, a star fuses hydrogen into helium in its core. This stage is the longest and most stable phase of a star\'s life. The Sun has been on the main sequence for ~4.6 billion years and has ~5 billion years remaining. More massive stars are hotter, bluer, and use fuel much faster — they have shorter main-sequence lifetimes.' } },
    { id: 'tbl-ms', type: 'comparisonTable', data: { caption: 'Comparison of low-mass and high-mass main-sequence stars', headers: ['Property', 'Low-mass star (like Sun)', 'High-mass star'], rows: [
      ['Colour', 'Yellow/orange', 'Blue/white'],
      ['Surface temperature', '~5,800 K', '> 20,000 K'],
      ['Luminosity', 'Moderate', 'Very high (10³–10⁶ × Sun)'],
      ['Main-sequence lifetime', '~10 billion years', '< 10 million years'],
    ]}},
    { id: 'h-lifecycle', type: 'heading', data: { text: 'Life Cycles: Low-Mass vs High-Mass', level: 2 } },
    { id: 'svg-lifecycle', type: 'svg', data: { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 320" width="520" height="320">
  <rect width="520" height="320" fill="#0f172a" rx="8"/>
  <text x="260" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#78350f">Stellar Life Cycles</text>
  <!-- Nebula start -->
  <ellipse cx="50" cy="100" rx="35" ry="25" fill="#4338ca" opacity="0.7"/>
  <text x="50" y="98" text-anchor="middle" font-size="9" fill="#1e293b">Nebula</text>
  <text x="50" y="110" text-anchor="middle" font-size="8" fill="#2d2d72">+ dust</text>
  <!-- Arrow to protostar -->
  <line x1="85" y1="100" x2="110" y2="100" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr1)"/>
  <!-- Protostar -->
  <circle cx="130" cy="100" r="18" fill="#f97316" opacity="0.85"/>
  <text x="130" y="97" text-anchor="middle" font-size="8" fill="#1e293b" font-weight="bold">Proto</text>
  <text x="130" y="108" text-anchor="middle" font-size="8" fill="#1e293b">star</text>
  <!-- Arrow to main sequence -->
  <line x1="148" y1="100" x2="175" y2="100" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr1)"/>
  <!-- Main sequence -->
  <rect x="178" y="80" width="72" height="40" rx="6" fill="#78350f" opacity="0.9"/>
  <text x="214" y="97" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">Main</text>
  <text x="214" y="110" text-anchor="middle" font-size="9" fill="#1e293b">Sequence</text>
  <!-- BRANCH: lower path (low-mass) -->
  <line x1="250" y1="107" x2="270" y2="140" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arr1)"/>
  <text x="258" y="132" font-size="8" fill="#f59e0b">low mass</text>
  <!-- Red giant -->
  <circle cx="300" cy="160" r="22" fill="#ef4444" opacity="0.8"/>
  <text x="300" y="157" text-anchor="middle" font-size="8" fill="#1e293b" font-weight="bold">Red</text>
  <text x="300" y="168" text-anchor="middle" font-size="8" fill="#1e293b">Giant</text>
  <!-- Arrow to planetary nebula -->
  <line x1="322" y1="160" x2="348" y2="160" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr1)"/>
  <!-- Planetary nebula -->
  <ellipse cx="370" cy="160" rx="18" ry="14" fill="none" stroke="#a78bfa" stroke-width="2"/>
  <text x="370" y="157" text-anchor="middle" font-size="7" fill="#2d1b69">Plan.</text>
  <text x="370" y="168" text-anchor="middle" font-size="7" fill="#2d1b69">nebula</text>
  <!-- White dwarf -->
  <line x1="388" y1="160" x2="410" y2="160" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr1)"/>
  <circle cx="430" cy="160" r="12" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="430" y="157" text-anchor="middle" font-size="7" fill="#1e293b">White</text>
  <text x="430" y="167" text-anchor="middle" font-size="7" fill="#1e293b">dwarf</text>
  <!-- BRANCH: upper path (high-mass) -->
  <line x1="250" y1="92" x2="270" y2="60" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#arr1)"/>
  <text x="255" y="72" font-size="8" fill="#60a5fa">high mass</text>
  <!-- Red supergiant -->
  <circle cx="310" cy="48" r="28" fill="#dc2626" opacity="0.85"/>
  <text x="310" y="44" text-anchor="middle" font-size="8" fill="#1e293b" font-weight="bold">Red Super</text>
  <text x="310" y="56" text-anchor="middle" font-size="8" fill="#1e293b">Giant</text>
  <!-- Supernova -->
  <line x1="338" y1="48" x2="358" y2="48" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr1)"/>
  <polygon points="382,34 388,48 382,62 368,56 362,48 368,40" fill="#f59e0b" opacity="0.9"/>
  <text x="378" y="80" text-anchor="middle" font-size="8" fill="#f59e0b">Super</text>
  <text x="378" y="90" text-anchor="middle" font-size="8" fill="#f59e0b">nova</text>
  <!-- Neutron star / black hole fork -->
  <line x1="394" y1="44" x2="420" y2="30" stroke="#94a3b8" stroke-width="1" marker-end="url(#arr1)"/>
  <circle cx="435" cy="26" r="11" fill="#1e40af"/>
  <text x="435" y="24" text-anchor="middle" font-size="6" fill="#1e293b">Neutron</text>
  <text x="435" y="34" text-anchor="middle" font-size="6" fill="#1e293b">star</text>
  <line x1="394" y1="52" x2="420" y2="65" stroke="#94a3b8" stroke-width="1" marker-end="url(#arr1)"/>
  <circle cx="435" cy="72" r="11" fill="#000" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="435" y="70" text-anchor="middle" font-size="6" fill="#94a3b8">Black</text>
  <text x="435" y="80" text-anchor="middle" font-size="6" fill="#94a3b8">hole</text>
  <!-- Shared start label -->
  <text x="50" y="140" text-anchor="middle" font-size="8" fill="#94a3b8">Start</text>
  <!-- bottom label -->
  <text x="260" y="295" text-anchor="middle" font-size="9" fill="#94a3b8">Low-mass: Red Giant → Planetary Nebula → White Dwarf</text>
  <text x="260" y="308" text-anchor="middle" font-size="9" fill="#94a3b8">High-mass: Red Supergiant → Supernova → Neutron Star or Black Hole</text>
  <defs>
    <marker id="arr1" markerWidth="7" markerHeight="7" refX="3" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#94a3b8"/>
    </marker>
  </defs>
</svg>`, caption: 'Stellar life cycles: both paths begin with nebula → protostar → main sequence; they then diverge based on mass.' } },
    { id: 'h-low', type: 'heading', data: { text: 'Low-Mass Star Life Cycle (like the Sun)', level: 2 } },
    { id: 'list-low', type: 'list', data: { style: 'numbered', items: [
      { text: '<strong>Main sequence</strong> (billions of years): hydrogen fusion in core.' },
      { text: '<strong>Red giant</strong>: hydrogen in core exhausted; core contracts → heats → outer layers expand and cool → star becomes large and red.' },
      { text: '<strong>Planetary nebula</strong>: outer layers ejected; luminous shell of gas expelled.' },
      { text: '<strong>White dwarf</strong>: hot, dense remnant core; no fusion; cools slowly over billions of years.' },
    ]}},
    { id: 'h-high', type: 'heading', data: { text: 'High-Mass Star Life Cycle', level: 2 } },
    { id: 'list-high', type: 'list', data: { style: 'numbered', items: [
      { text: '<strong>Main sequence</strong> (millions of years): burns fuel quickly due to much higher core temperature.' },
      { text: '<strong>Red supergiant</strong>: core contracts after exhausting hydrogen; fusion continues with heavier elements (He, C, O, … Fe).' },
      { text: '<strong>Supernova</strong>: dramatic explosion when iron core collapses and rebounces; briefly outshines entire galaxies; disperses heavy elements into space.' },
      { text: '<strong>Neutron star or black hole</strong>: remnant after supernova. Very massive stars form black holes; intermediate mass → neutron stars.' },
    ]}},
    { id: 'call-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'The key branching point is MASS. Small mass (like Sun) → white dwarf. Large mass → supernova → neutron star/black hole. Planetary nebula ≠ a planet — it is an expanding shell of gas.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Stars form from nebulae via gravitational collapse. On the main sequence, hydrogen fusion balances gravity. Low-mass stars end as white dwarfs; high-mass stars explode as supernovae, leaving neutron stars or black holes.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Nebula → protostar → main sequence. Small star → red giant → white dwarf. Massive star → supergiant → supernova → neutron star/black hole.',
    cues: [
      { id: 'cue-1', blockId: 'para-nebula', prompt: 'How does a protostar form from a nebula?', answer: 'Gravity causes regions of gas and dust clouds to contract. Gravitational PE converts to kinetic energy, heating the gas until a hot protostar is formed.' },
      { id: 'cue-2', blockId: 'para-main', prompt: 'What happens on the main sequence to maintain stability?', answer: 'Hydrogen fuses to helium in the core. Radiation pressure from fusion exactly balances inward gravity (hydrostatic equilibrium).' },
      { id: 'cue-3', blockId: 'list-low', prompt: 'What is the sequence of stages for a low-mass star after the main sequence?', answer: 'Main sequence → Red giant → Planetary nebula → White dwarf.' },
      { id: 'cue-4', blockId: 'list-high', prompt: 'What is the sequence for a high-mass star after the main sequence?', answer: 'Main sequence → Red supergiant → Supernova → Neutron star or black hole.' },
      { id: 'cue-5', blockId: 'tbl-ms', prompt: 'Why do more massive stars have shorter lives?', answer: 'More massive stars are hotter and more luminous — they burn through their hydrogen fuel far more quickly than lower-mass stars.' },
    ],
  },
  evidence: [], mentions: [],
};
