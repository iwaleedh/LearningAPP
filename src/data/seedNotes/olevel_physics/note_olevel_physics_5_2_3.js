export const note_olevel_physics_5_2_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/5 Nuclear Physics/5-2-4-nuclear-fission-and-fusion.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Describe nuclear fission and chain reactions; explain nuclear fusion; understand why both processes release energy (mass defect and E = mc²).' } },
    { id: 'h-fission', type: 'heading', data: { text: 'Nuclear Fission', level: 2 } },
    { id: 'call-fission', type: 'callout', data: { style: 'key', title: 'Definition: Nuclear Fission', text: 'Nuclear fission is the splitting of a large, heavy nucleus into two roughly equal-sized smaller nuclei (daughter nuclei), accompanied by the release of 2–3 neutrons and a large amount of energy.' } },
    { id: 'para-fission', type: 'paragraph', data: { text: 'Fission typically occurs when a slow (thermal) neutron is absorbed by a heavy nucleus such as uranium-235 or plutonium-239, making it highly unstable so it splits. The energy released comes from the fact that the total mass of the products is slightly less than the mass of the original nucleus — this <em>mass defect</em> is converted to energy via E = mc².' } },
    { id: 'eq-fission', type: 'equation', data: { html: '<sup>235</sup><sub>92</sub>U + <sup>1</sup><sub>0</sub>n &rarr; <sup>141</sup><sub>56</sub>Ba + <sup>92</sup><sub>36</sub>Kr + 3<sup>1</sup><sub>0</sub>n + energy', caption: 'One possible fission reaction: U-235 splits into Ba-141 and Kr-92, releasing 3 neutrons and energy' } },
    { id: 'h-chain', type: 'heading', data: { text: 'Chain Reaction', level: 2 } },
    { id: 'para-chain', type: 'paragraph', data: { text: 'The neutrons released in fission can be absorbed by other U-235 nuclei, triggering further fission events. This is a <strong>chain reaction</strong>. If each fission produces on average one new fission event, the reaction is controlled (as in a nuclear reactor). If more than one new event is triggered per fission, the reaction accelerates exponentially — this is uncontrolled fission, as in a nuclear bomb.' } },
    { id: 'svg-chain', type: 'svg', data: { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 260" width="480" height="260">
  <rect width="480" height="260" fill="#532407" rx="8"/>
  <text x="240" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Nuclear Fission Chain Reaction</text>
  <!-- First nucleus -->
  <circle cx="60" cy="130" r="18" fill="#78350f" stroke="#d97706" stroke-width="2"/>
  <text x="60" y="134" text-anchor="middle" font-size="9" fill="#1e293b">U-235</text>
  <!-- Incoming neutron -->
  <circle cx="30" cy="130" r="5" fill="#64748b"/>
  <line x1="35" y1="130" x2="42" y2="130" stroke="#64748b" stroke-width="1.5" marker-end="url(#n1)"/>
  <!-- First fission products -->
  <circle cx="140" cy="100" r="13" fill="#ef4444" stroke="#dc2626" stroke-width="1.5"/>
  <text x="140" y="104" text-anchor="middle" font-size="8" fill="#1e293b">Ba</text>
  <circle cx="140" cy="160" r="10" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="140" y="164" text-anchor="middle" font-size="8" fill="#1e293b">Kr</text>
  <!-- Arrows from first fission -->
  <line x1="78" y1="118" x2="127" y2="100" stroke="#f97316" stroke-width="1.5" stroke-dasharray="3"/>
  <line x1="78" y1="142" x2="130" y2="155" stroke="#f97316" stroke-width="1.5" stroke-dasharray="3"/>
  <!-- 3 neutrons from first fission -->
  <circle cx="175" cy="85" r="5" fill="#64748b"/>
  <circle cx="185" cy="130" r="5" fill="#64748b"/>
  <circle cx="175" cy="175" r="5" fill="#64748b"/>
  <!-- Second generation nuclei and fissions -->
  <circle cx="250" cy="65" r="14" fill="#78350f" stroke="#d97706" stroke-width="1.5"/>
  <text x="250" y="69" text-anchor="middle" font-size="8" fill="#1e293b">U-235</text>
  <circle cx="250" cy="130" r="14" fill="#78350f" stroke="#d97706" stroke-width="1.5"/>
  <text x="250" y="134" text-anchor="middle" font-size="8" fill="#1e293b">U-235</text>
  <circle cx="250" cy="195" r="14" fill="#78350f" stroke="#d97706" stroke-width="1.5"/>
  <text x="250" y="199" text-anchor="middle" font-size="8" fill="#1e293b">U-235</text>
  <!-- Arrows to second gen -->
  <line x1="180" y1="85" x2="236" y2="65" stroke="#64748b" stroke-width="1.5" marker-end="url(#n1)"/>
  <line x1="190" y1="130" x2="236" y2="130" stroke="#64748b" stroke-width="1.5" marker-end="url(#n1)"/>
  <line x1="180" y1="175" x2="236" y2="195" stroke="#64748b" stroke-width="1.5" marker-end="url(#n1)"/>
  <!-- Energy flashes -->
  <text x="300" y="68" font-size="16" fill="#f59e0b">⚡</text>
  <text x="300" y="133" font-size="16" fill="#f59e0b">⚡</text>
  <text x="300" y="198" font-size="16" fill="#f59e0b">⚡</text>
  <!-- Label -->
  <text x="400" y="80" font-size="9" fill="#dc2626">Each fission releases</text>
  <text x="400" y="93" font-size="9" fill="#dc2626">2–3 neutrons and</text>
  <text x="400" y="106" font-size="9" fill="#f59e0b">large energy</text>
  <!-- Neutrons label -->
  <text x="24" y="120" font-size="9" fill="#64748b">slow</text>
  <text x="24" y="132" font-size="9" fill="#64748b">n</text>
  <defs>
    <marker id="n1" markerWidth="7" markerHeight="7" refX="3" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#64748b"/></marker>
  </defs>
</svg>`, caption: 'Chain reaction: each fission releases neutrons that trigger further fissions, multiplying exponentially.' } },
    { id: 'h-reactor', type: 'heading', data: { text: 'Controlled Fission: Nuclear Reactor', level: 2 } },
    { id: 'list-reactor', type: 'list', data: { style: 'bullet', items: [
      { text: '<strong>Fuel:</strong> enriched uranium (U-235) fuel rods.' },
      { text: '<strong>Moderator</strong> (e.g. graphite or water): slows neutrons to thermal speeds so they can be absorbed by U-235 more efficiently.' },
      { text: '<strong>Control rods</strong> (e.g. boron): absorb excess neutrons, controlling the reaction rate. Inserting rods deeper slows or stops the reaction.' },
      { text: '<strong>Coolant</strong> (water or CO₂): transfers heat from the reactor to generate steam and drive turbines for electricity.' },
    ]}},
    { id: 'h-fusion', type: 'heading', data: { text: 'Nuclear Fusion', level: 2 } },
    { id: 'call-fusion', type: 'callout', data: { style: 'key', title: 'Definition: Nuclear Fusion', text: 'Nuclear fusion is the joining of two light nuclei to form a heavier nucleus, releasing a very large amount of energy. This is the process that powers the Sun and other stars.' } },
    { id: 'eq-fusion', type: 'equation', data: { html: '<sup>2</sup><sub>1</sub>H + <sup>3</sup><sub>1</sub>H &rarr; <sup>4</sup><sub>2</sub>He + <sup>1</sup><sub>0</sub>n + energy', caption: 'Deuterium + tritium fuse to form helium-4 and a neutron, releasing ~17.6 MeV' } },
    { id: 'para-fusion', type: 'paragraph', data: { text: 'Fusion requires extremely high temperatures (≈ 10⁸ K) to give nuclei enough kinetic energy to overcome the electrostatic repulsion between them and get close enough for the strong nuclear force to bind them. This is achieved in stars by gravitational compression and in experimental tokamak reactors on Earth by magnetic confinement.' } },
    { id: 'h-emc2', type: 'heading', data: { text: 'Mass Defect and E = mc²', level: 2 } },
    { id: 'para-emc2', type: 'paragraph', data: { text: 'In both fission and fusion, the total mass of the products is slightly less than the total mass of the reactants. This missing mass — the <strong>mass defect</strong> — is converted to energy according to Einstein\'s equation:' } },
    { id: 'eq-emc2', type: 'equation', data: { html: 'E = mc<sup>2</sup>', caption: 'E = energy (J), m = mass defect (kg), c = speed of light = 3 × 10⁸ m/s' } },
    { id: 'para-emc2-2', type: 'paragraph', data: { text: 'Because c² is an enormous number (9 × 10¹⁶ m²/s²), even a tiny mass defect produces a huge amount of energy. This is why nuclear reactions release millions of times more energy per reaction than chemical reactions.' } },
    { id: 'tbl-compare', type: 'comparisonTable', data: { caption: 'Comparing fission and fusion', headers: ['Feature', 'Fission', 'Fusion'], rows: [
      ['Process', 'Heavy nucleus splits', 'Two light nuclei combine'],
      ['Fuels', 'U-235, Pu-239', 'Deuterium (²H), Tritium (³H)'],
      ['Temperature needed', 'Controlled by moderator', 'Extremely high (≈10⁸ K)'],
      ['Energy released per kg', 'Very large', 'Even larger than fission'],
      ['Radioactive waste', 'Long-lived wastes', 'Much less (short-lived)'],
      ['Current status', 'Operating reactors worldwide', 'Experimental (e.g. ITER)'],
    ]}},
    { id: 'call-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Fission = splitting; fusion = joining (think: fusion/fuse = merge). Fusion produces more energy per reaction and less waste but is much harder to achieve — very high temperatures and pressures are needed.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Fission: a heavy nucleus (U-235) absorbs a neutron and splits, releasing 2–3 neutrons and energy — can chain-react. Fusion: two light nuclei (e.g. H isotopes) combine to form helium, releasing enormous energy. Both release energy due to mass defect (E = mc²).' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Fission: heavy nucleus splits + neutrons + energy → chain reaction. Fusion: light nuclei join → more energy, less waste.',
    cues: [
      { id: 'cue-1', blockId: 'call-fission', prompt: 'Define nuclear fission.', answer: 'A heavy nucleus splits into two smaller daughter nuclei, releasing 2–3 neutrons and a large amount of energy.' },
      { id: 'cue-2', blockId: 'svg-chain', prompt: 'What is a chain reaction in nuclear fission?', answer: 'Neutrons from one fission event cause further fissions; if each event causes >1 new fission, the reaction accelerates exponentially.' },
      { id: 'cue-3', blockId: 'list-reactor', prompt: 'What is the role of control rods in a nuclear reactor?', answer: 'They absorb excess neutrons to control the reaction rate. Inserting them more deeply slows or stops the reaction.' },
      { id: 'cue-4', blockId: 'call-fusion', prompt: 'Define nuclear fusion and state what process it powers.', answer: 'Two light nuclei join to form a heavier nucleus, releasing enormous energy. It powered all stars, including the Sun.' },
      { id: 'cue-5', blockId: 'eq-emc2', prompt: 'Why do nuclear reactions release so much more energy than chemical reactions?', answer: 'In nuclear reactions, a tiny mass defect is converted to energy via E = mc². Because c² is enormous, even a small mass converts to very large energy.' },
    ],
  },
  evidence: [], mentions: [],
};
