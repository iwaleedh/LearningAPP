export const note_olevel_physics_6_1_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/6 Space Physics/6-1-4-the-sun.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Describe the Sun as a main-sequence star powered by nuclear fusion; identify layers of the Sun; describe surface features including sunspots, solar flares, and prominences.' } },
    { id: 'h-overview', type: 'heading', data: { text: 'The Sun — An Overview', level: 2 } },
    { id: 'para-overview', type: 'paragraph', data: { text: 'The Sun is a <strong>main-sequence star</strong> — a massive sphere of hot plasma held together by gravity. It contains about 99.8% of the total mass of the solar system. The Sun has been stable for about 4.6 billion years and will remain on the main sequence for another 5 billion years.' } },
    { id: 'tbl-sun-facts', type: 'comparisonTable', data: { caption: 'Key facts about the Sun', headers: ['Property', 'Value'], rows: [
      ['Mass', '2.0 × 10³⁰ kg'],
      ['Radius', '7.0 × 10⁸ m (696,000 km)'],
      ['Surface temperature (photosphere)', '≈ 5800 K'],
      ['Core temperature', '≈ 1.5 × 10⁷ K'],
      ['Composition (by mass)', '73% hydrogen, 25% helium, 2% heavier elements'],
      ['Age', '≈ 4.6 billion years'],
    ]}},
    { id: 'h-fusion', type: 'heading', data: { text: 'Nuclear Fusion in the Sun', level: 2 } },
    { id: 'para-fusion', type: 'paragraph', data: { text: 'The Sun is powered by <strong>nuclear fusion</strong> of hydrogen into helium in its core. The extreme temperature and pressure force hydrogen nuclei to collide and fuse, releasing enormous amounts of energy via the mass–energy equivalence E = mc².' } },
    { id: 'eq-fusion', type: 'equation', data: { html: '<sup>1</sup><sub>1</sub>H + <sup>1</sup><sub>1</sub>H → <sup>2</sup><sub>1</sub>H + <sup>0</sup><sub>+1</sub>e + ν&nbsp;&nbsp;&nbsp;(first step of proton–proton chain)', caption: 'Simplified: four protons (H nuclei) fuse ultimately to produce one helium-4 nucleus, with energy released. The lost mass converts to energy (E = mc²).' } },
    { id: 'para-equil', type: 'paragraph', data: { text: 'The Sun exists in <strong>hydrostatic equilibrium</strong>: the inward force of gravity is exactly balanced by the outward radiation pressure from fusion reactions. This balance keeps the Sun stable at its current size.' } },
    { id: 'h-structure', type: 'heading', data: { text: 'Structure of the Sun', level: 2 } },
    { id: 'svg-sun', type: 'svg', data: { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 300" width="460" height="300">
  <rect width="460" height="300" fill="#0f172a" rx="8"/>
  <text x="230" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#fbbf24">Structure of the Sun</text>
  <!-- Corona (outer glow) -->
  <circle cx="190" cy="155" r="125" fill="none" stroke="#fde68a" stroke-width="18" opacity="0.2"/>
  <circle cx="190" cy="155" r="130" fill="none" stroke="#fbbf24" stroke-width="4" opacity="0.15"/>
  <!-- Convective zone -->
  <circle cx="190" cy="155" r="105" fill="#dc2626" opacity="0.25"/>
  <circle cx="190" cy="155" r="105" fill="none" stroke="#f97316" stroke-width="2"/>
  <!-- Radiative zone -->
  <circle cx="190" cy="155" r="80" fill="#b45309" opacity="0.5"/>
  <circle cx="190" cy="155" r="80" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <!-- Core -->
  <circle cx="190" cy="155" r="42" fill="#fbbf24" opacity="0.95"/>
  <text x="190" y="151" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Core</text>
  <text x="190" y="163" text-anchor="middle" font-size="9" fill="#1e293b">1.5×10⁷ K</text>
  <!-- Labels with arrows -->
  <line x1="295" y1="80" x2="255" y2="110" stroke="#f97316" stroke-width="1.5"/>
  <text x="300" y="76" font-size="10" fill="#f97316">Convective zone</text>
  <text x="300" y="88" font-size="9" fill="#f97316">(heat carried by</text>
  <text x="300" y="100" font-size="9" fill="#f97316">rising plasma)</text>
  <line x1="295" y1="140" x2="260" y2="150" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="300" y="137" font-size="10" fill="#f59e0b">Radiative zone</text>
  <text x="300" y="149" font-size="9" fill="#f59e0b">(photons slowly</text>
  <text x="300" y="161" font-size="9" fill="#f59e0b">diffuse outward)</text>
  <line x1="295" y1="200" x2="260" y2="185" stroke="#fde68a" stroke-width="1.5"/>
  <text x="300" y="197" font-size="10" fill="#fde68a">Photosphere</text>
  <text x="300" y="209" font-size="9" fill="#fde68a">(visible surface,</text>
  <text x="300" y="221" font-size="9" fill="#fde68a">≈5800 K)</text>
  <!-- Photosphere ring -->
  <circle cx="190" cy="155" r="108" fill="none" stroke="#fde68a" stroke-width="2.5"/>
</svg>`, caption: 'Cross-section of the Sun: core (fusion), radiative zone (photon diffusion), convective zone (plasma circulation), photosphere (visible surface), chromosphere and corona (outer atmosphere).' } },
    { id: 'list-layers', type: 'list', data: { style: 'numbered', items: [
      { text: '<strong>Core:</strong> innermost region (~25% radius), T ≈ 1.5 × 10⁷ K, site of hydrogen fusion.' },
      { text: '<strong>Radiative zone:</strong> photons produced in core bounce outward slowly (takes ~100,000 years to traverse).' },
      { text: '<strong>Convective zone:</strong> hot plasma rises, cools at surface, sinks again — carries energy outward rapidly.' },
      { text: '<strong>Photosphere:</strong> visible "surface" (~500 km thick), T ≈ 5800 K — source of sunlight.' },
      { text: '<strong>Chromosphere:</strong> thin layer above photosphere, visible as red ring during a total solar eclipse.' },
      { text: '<strong>Corona:</strong> outermost atmosphere, extends millions of km; T > 10⁶ K (reason still debated). Visible during eclipse.' },
    ]}},
    { id: 'h-features', type: 'heading', data: { text: 'Surface Features', level: 2 } },
    { id: 'tbl-features', type: 'comparisonTable', data: { caption: 'Surface features of the Sun', headers: ['Feature', 'Description', 'Temperature'], rows: [
      ['Sunspots', 'Dark regions on photosphere where magnetic field inhibits convection', 'Cooler (~3500 K) than surroundings'],
      ['Solar flares', 'Sudden bursts of energy and radiation from magnetic field reconnection', 'Can reach 10⁷ K'],
      ['Prominences', 'Loops of plasma that extend into the corona', 'Cooler than corona but highly visible'],
      ['Coronal mass ejections', 'Clouds of plasma ejected into space; cause auroras and damage satellites', 'Varies'],
    ]}},
    { id: 'call-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Sunspots appear dark NOT because they are cold — they are ≈3500 K and actually glow orange. They appear dark only by contrast with the surrounding 5800 K photosphere.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'The Sun is a main-sequence star powered by hydrogen fusion in its core. Energy travels outward through the radiative then convective zones to the photosphere. Surface features include sunspots (cooler magnetic regions), solar flares (energy bursts), and prominences (plasma loops).' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Sun: main-sequence star, hydrogen → helium fusion in core. Layers: core → radiative → convective → photosphere → corona.',
    cues: [
      { id: 'cue-1', blockId: 'para-fusion', prompt: 'What nuclear process powers the Sun?', answer: 'Nuclear fusion: hydrogen nuclei fuse to form helium, releasing energy via E = mc².' },
      { id: 'cue-2', blockId: 'para-equil', prompt: 'What is hydrostatic equilibrium in the Sun?', answer: "The balance between inward gravitational force and outward radiation pressure from fusion — this keeps the Sun's size stable." },
      { id: 'cue-3', blockId: 'list-layers', prompt: "List the Sun's layers from inside to outside.", answer: 'Core → Radiative zone → Convective zone → Photosphere → Chromosphere → Corona.' },
      { id: 'cue-4', blockId: 'tbl-features', prompt: 'Why do sunspots appear dark?', answer: 'Sunspots are cooler (~3500 K) than the surrounding photosphere (~5800 K) due to strong magnetic fields. They appear dark only by contrast.' },
      { id: 'cue-5', blockId: 'tbl-features', prompt: 'What are solar flares?', answer: 'Sudden bursts of radiation and energy from the photosphere caused by sudden reconnection of magnetic field lines.' },
    ],
  },
  evidence: [], mentions: [],
};
