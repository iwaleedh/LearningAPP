export const note_olevel_physics_6_2_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/6 Space Physics/6-2-4-dark-matter.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Describe the evidence for dark matter from galaxy rotation curves; explain the dark matter hypothesis; state that dark matter makes up ~27% of the universe.' } },
    { id: 'h-problem', type: 'heading', data: { text: 'The Galaxy Rotation Problem', level: 2 } },
    { id: 'para-rotation', type: 'paragraph', data: { text: 'When astronomers measured how fast stars orbit the centres of spiral galaxies, they found something unexpected. According to Newtonian gravity, stars far from the galactic centre (where most visible mass is concentrated) should orbit <strong>more slowly</strong> — like the outer planets in the solar system. In reality, orbital speeds stay roughly <strong>constant</strong> at large radii, or even increase slightly. This is called the <strong>galaxy rotation problem</strong>.' } },
    { id: 'svg-rotation', type: 'svg', data: { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 260" width="460" height="260">
  <rect width="460" height="260" fill="#0f172a" rx="8"/>
  <text x="230" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#78350f">Galaxy Rotation Curve</text>
  <!-- Axes -->
  <line x1="55" y1="220" x2="420" y2="220" stroke="#94a3b8" stroke-width="2"/>
  <line x1="55" y1="50" x2="55" y2="220" stroke="#94a3b8" stroke-width="2"/>
  <!-- Axis labels -->
  <text x="240" y="248" text-anchor="middle" font-size="11" fill="#94a3b8">Distance from galactic centre</text>
  <text x="18" y="140" text-anchor="middle" font-size="11" fill="#94a3b8" transform="rotate(-90,18,140)">Orbital speed</text>
  <!-- Expected (Keplerian) curve — falls off -->
  <path d="M65,90 C80,85 110,95 150,120 C180,138 210,155 250,170 C290,183 330,195 380,208" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="8"/>
  <text x="370" y="206" font-size="9" fill="#ef4444" text-anchor="end">Expected</text>
  <text x="370" y="218" font-size="9" fill="#ef4444" text-anchor="end">(no dark matter)</text>
  <!-- Observed curve — flat -->
  <path d="M65,90 C80,82 110,78 150,82 C200,87 250,88 300,89 C340,89 370,88 405,88" fill="none" stroke="#34d399" stroke-width="2.5"/>
  <text x="410" y="86" font-size="9" fill="#34d399">Observed</text>
  <text x="410" y="98" font-size="9" fill="#34d399">(flat curve)</text>
  <!-- Shaded region between curves -->
  <!-- Star symbols along x-axis for galaxy reference -->
  <circle cx="65" cy="220" r="4" fill="#78350f"/>
  <text x="65" y="237" text-anchor="middle" font-size="9" fill="#94a3b8">centre</text>
  <!-- Dark matter halo label -->
  <text x="320" y="145" font-size="9" fill="#2d1b69">Dark matter</text>
  <text x="320" y="157" font-size="9" fill="#2d1b69">halo needed</text>
  <text x="320" y="169" font-size="9" fill="#2d1b69">to explain gap</text>
  <line x1="320" y1="140" x2="305" y2="125" stroke="#93c5fd" stroke-width="1"/>
  <!-- Arrow between curves -->
  <line x1="260" y1="170" x2="260" y2="100" stroke="#93c5fd" stroke-width="1" stroke-dasharray="3" marker-end="url(#arr3)"/>
  <defs>
    <marker id="arr3" markerWidth="7" markerHeight="7" refX="3" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#2d1b69"/>
    </marker>
  </defs>
</svg>`, caption: 'Galaxy rotation curves: stars at large radii orbit much faster than expected from visible mass alone, implying hidden (dark) mass in an extended halo.' } },
    { id: 'h-hypothesis', type: 'heading', data: { text: 'The Dark Matter Hypothesis', level: 2 } },
    { id: 'para-hypothesis', type: 'paragraph', data: { text: "The most widely accepted explanation for flat rotation curves is <strong>dark matter</strong>: a form of matter that does not emit, absorb, or reflect electromagnetic radiation (so it cannot be seen by telescopes) but does have mass and therefore interacts gravitationally. If galaxies are embedded in large, spherical 'halos' of dark matter extending well beyond the visible disc, the extra gravitational pull can explain the observed flat rotation curves." } },
    { id: 'call-def', type: 'callout', data: { style: 'key', title: 'Dark Matter: Key Properties', text: 'Dark matter: (1) does not interact with light (cannot be seen directly), (2) has mass and exerts gravitational force, (3) forms invisible halos around galaxies, (4) makes up ~27% of the total energy–mass content of the universe.' } },
    { id: 'h-evidence', type: 'heading', data: { text: 'Evidence for Dark Matter', level: 2 } },
    { id: 'list-evidence', type: 'list', data: { style: 'numbered', items: [
      { text: '<strong>Galaxy rotation curves:</strong> orbital speeds remain flat at large radii, implying more mass than visible stars and gas account for.' },
      { text: '<strong>Gravitational lensing:</strong> light from distant galaxies is bent by massive foreground clusters more than can be explained by visible matter alone. The extra lensing is attributed to dark matter.' },
      { text: '<strong>Galaxy cluster dynamics:</strong> the speeds of galaxies within clusters are too high to be held together by visible mass alone. Fritz Zwicky first noticed this in 1933.' },
      { text: '<strong>Cosmic structure:</strong> computer simulations of the universe only reproduce the observed large-scale structure (filaments, voids) when dark matter is included.' },
    ]}},
    { id: 'h-nature', type: 'heading', data: { text: 'What Is Dark Matter?', level: 2 } },
    { id: 'para-nature', type: 'paragraph', data: { text: "The exact nature of dark matter remains one of the most important unsolved problems in physics. Candidates include <strong>WIMPs</strong> (Weakly Interacting Massive Particles), sterile neutrinos, and primordial black holes. No dark matter particle has been directly detected yet, despite many experiments. Dark matter is not made of ordinary atoms (baryonic matter)." } },
    { id: 'call-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Dark matter does NOT emit light — that is why it is "dark". In exam questions, state that it is inferred from its gravitational effects (rotation curves, lensing), not from direct observation.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Galaxy rotation curves show stars orbit faster than expected from visible mass — evidence for dark matter halos. Dark matter has mass but does not interact with light. It comprises ~27% of the universe. Gravitational lensing also implies hidden mass.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Galaxy rotation curves: flat (not falling) → dark matter halo. Dark matter: gravitational effects only, no light interaction. ~27% of universe.',
    cues: [
      { id: 'cue-1', blockId: 'para-rotation', prompt: 'What is the galaxy rotation problem?', answer: "Newtonian gravity predicts orbital speeds should decrease at large radii (like outer planets). Observations show they stay roughly constant — far more mass is needed than visible stars and gas provide." },
      { id: 'cue-2', blockId: 'call-def', prompt: 'What are the key properties of dark matter?', answer: 'Dark matter: cannot be seen (no EM interaction), but has mass and gravitates. Forms halos around galaxies. Makes up ~27% of the universe.' },
      { id: 'cue-3', blockId: 'list-evidence', prompt: 'What is gravitational lensing and how does it provide evidence for dark matter?', answer: 'Light from distant galaxies is bent by massive foreground clusters. The observed bending is greater than visible mass can explain, implying additional unseen (dark) mass is present.' },
      { id: 'cue-4', blockId: 'para-nature', prompt: 'Why has dark matter not been directly detected?', answer: 'Dark matter does not interact with electromagnetic radiation and only interacts very weakly (if at all) with normal matter. Its exact nature is unknown; no dark matter particle has been detected yet.' },
      { id: 'cue-5', blockId: 'svg-rotation', prompt: 'Describe the difference between the expected and observed galaxy rotation curve.', answer: 'Expected (Keplerian): speed falls off at large radii. Observed: speed stays roughly constant (flat curve). The difference implies unseen mass (dark matter halo) surrounds the visible galaxy.' },
    ],
  },
  evidence: [], mentions: [],
};
