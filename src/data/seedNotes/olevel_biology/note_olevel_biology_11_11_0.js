export const note_olevel_biology_11_11_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/11 Gas Exchange In Humans/11-1-1-features-of-gas-exchange-surfaces.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'State the characteristics of efficient gas exchange surfaces and explain how each feature increases the rate of diffusion, with reference to Fick\'s Law.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Why Do Organisms Need Gas Exchange?', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'Aerobic respiration requires a continuous supply of oxygen and produces carbon dioxide as a waste product. In small, single-celled organisms, gases can diffuse directly across the cell surface. In larger, multicellular organisms like humans, specialised gas exchange surfaces have evolved to meet the high metabolic demands of trillions of cells.' }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Fick\'s Law of Diffusion', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Fick\'s Law',
        text: 'The rate of diffusion across a surface is proportional to:<br/><br/><strong>Rate of diffusion ∝ (Surface area × Concentration difference) / Thickness of membrane</strong><br/><br/>This means that to maximise the rate of gas exchange, a surface must have:<br/>• <strong>Large surface area</strong> — more space for diffusion to occur simultaneously<br/>• <strong>Large concentration difference (gradient)</strong> — gases move faster down a steep gradient<br/>• <strong>Short diffusion distance (thin membrane)</strong> — less distance for molecules to travel'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Characteristics of Efficient Gas Exchange Surfaces', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Features of efficient gas exchange surfaces and their functions',
        headers: ['Feature', 'Why it is important', 'How it is achieved in human alveoli'],
        rows: [
          ['Large surface area', 'Provides more sites for simultaneous diffusion → increases rate of exchange', 'Approximately 700 million alveoli give a total surface area of ~70 m² (size of a tennis court)'],
          ['Thin walls (short diffusion distance)', 'Reduces the distance molecules must diffuse → increases rate of diffusion', 'Alveolar walls are one cell thick (squamous epithelium); capillary walls also one cell thick — total ~0.2 µm'],
          ['Moist surface', 'Gases must dissolve in moisture to diffuse across the membrane into cells', 'Alveolar walls are kept moist by a thin film of moisture; surfactant reduces surface tension so walls don\'t collapse'],
          ['Rich blood supply (good ventilation)', 'Maintains steep concentration gradients for O₂ and CO₂ on both sides of the surface', 'Dense network of pulmonary capillaries; continuous blood flow removes O₂ and delivers CO₂; breathing (ventilation) replenishes O₂ and removes CO₂ in air'],
          ['Permeable membrane', 'Allows gases to pass through freely without being blocked', 'Very thin, single-layered squamous epithelium with no thick cell walls or barriers']
        ]
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Fick\'s Law illustrated: how surface area, distance, and concentration gradient affect diffusion rate',
        svg: `<svg viewBox="0 0 660 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="660" height="320" fill="#f8fafc" rx="12"/>
  <text x="330" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Fick\'s Law — Factors Affecting Diffusion Rate</text>
  <!-- Factor 1: Surface Area -->
  <rect x="20" y="45" width="190" height="240" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="115" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Surface Area</text>
  <!-- Small surface -->
  <rect x="40" y="78" width="60" height="60" rx="4" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="70" y="148" text-anchor="middle" font-size="9" fill="#1e40af">Small surface</text>
  <text x="70" y="160" text-anchor="middle" font-size="9" fill="#64748b">Few molecules</text>
  <text x="70" y="171" text-anchor="middle" font-size="9" fill="#64748b">can cross at once</text>
  <!-- Large surface -->
  <rect x="120" y="78" width="75" height="75" rx="4" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
  <text x="157" y="163" text-anchor="middle" font-size="9" fill="#1d4ed8">Large surface</text>
  <text x="157" y="174" text-anchor="middle" font-size="9" fill="#64748b">More molecules</text>
  <text x="157" y="185" text-anchor="middle" font-size="9" fill="#64748b">cross simultaneously</text>
  <text x="115" y="206" text-anchor="middle" font-size="10" fill="#1d4ed8" font-weight="bold">↑ Area = ↑ Rate</text>
  <!-- Alveoli note -->
  <rect x="32" y="215" width="156" height="58" rx="6" fill="#eff6ff" stroke="#93c5fd" stroke-width="1"/>
  <text x="110" y="232" text-anchor="middle" font-size="9" fill="#1e40af">Alveoli: ~70 m²</text>
  <text x="110" y="245" text-anchor="middle" font-size="9" fill="#64748b">= 35 × a squash court</text>
  <text x="110" y="258" text-anchor="middle" font-size="9" fill="#64748b">700 million alveoli</text>
  <!-- Factor 2: Diffusion Distance -->
  <rect x="235" y="45" width="190" height="240" rx="10" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="330" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">Diffusion Distance</text>
  <!-- Thick membrane -->
  <rect x="250" y="78" width="70" height="50" rx="4" fill="#6ee7b7" stroke="#10b981" stroke-width="1.5"/>
  <text x="285" y="100" text-anchor="middle" font-size="9" fill="#065f46">Thick</text>
  <text x="285" y="138" text-anchor="middle" font-size="9" fill="#64748b">Long distance →</text>
  <text x="285" y="149" text-anchor="middle" font-size="9" fill="#64748b">slow diffusion</text>
  <!-- Thin membrane -->
  <rect x="340" y="104" width="70" height="8" rx="2" fill="#6ee7b7" stroke="#10b981" stroke-width="1.5"/>
  <text x="375" y="138" text-anchor="middle" font-size="9" fill="#065f46">Thin</text>
  <text x="375" y="149" text-anchor="middle" font-size="9" fill="#064e3b">Short distance →</text>
  <text x="375" y="160" text-anchor="middle" font-size="9" fill="#064e3b">fast diffusion</text>
  <text x="330" y="180" text-anchor="middle" font-size="10" fill="#065f46" font-weight="bold">↓ Thickness = ↑ Rate</text>
  <rect x="247" y="193" width="156" height="80" rx="6" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1"/>
  <text x="325" y="212" text-anchor="middle" font-size="9" fill="#065f46">Alveolar wall: ~0.2 µm</text>
  <text x="325" y="226" text-anchor="middle" font-size="9" fill="#64748b">1 alveolar cell thick</text>
  <text x="325" y="239" text-anchor="middle" font-size="9" fill="#64748b">+ 1 capillary cell thick</text>
  <text x="325" y="260" text-anchor="middle" font-size="9" fill="#065f46">Very short diffusion path</text>
  <!-- Factor 3: Concentration Gradient -->
  <rect x="450" y="45" width="190" height="240" rx="10" fill="#fef9c3" stroke="#eab308" stroke-width="1.5"/>
  <text x="545" y="62" text-anchor="middle" font-size="11" font-weight="bold" fill="#713f12">Concentration</text>
  <text x="545" y="76" text-anchor="middle" font-size="11" font-weight="bold" fill="#713f12">Gradient</text>
  <!-- Gradient arrows -->
  <text x="475" y="105" font-size="9" fill="#713f12">High O₂</text>
  <line x1="475" y1="112" x2="610" y2="112" stroke="#eab308" stroke-width="2" marker-end="url(#fick)"/>
  <text x="575" y="128" text-anchor="end" font-size="9" fill="#713f12">Low O₂</text>
  <text x="545" y="148" text-anchor="middle" font-size="9" fill="#64748b">Steep gradient</text>
  <text x="545" y="160" text-anchor="middle" font-size="9" fill="#64748b">= fast diffusion</text>
  <text x="545" y="186" text-anchor="middle" font-size="10" fill="#b45309" font-weight="bold">↑ Gradient = ↑ Rate</text>
  <rect x="462" y="200" width="166" height="72" rx="6" fill="#fefce8" stroke="#fde68a" stroke-width="1"/>
  <text x="545" y="218" text-anchor="middle" font-size="9" fill="#713f12">Maintained by:</text>
  <text x="545" y="232" text-anchor="middle" font-size="9" fill="#64748b">• Ventilation (fresh air)</text>
  <text x="545" y="246" text-anchor="middle" font-size="9" fill="#64748b">• Continuous blood flow</text>
  <text x="545" y="260" text-anchor="middle" font-size="9" fill="#64748b">removing O₂, delivering CO₂</text>
  <defs>
    <marker id="fick" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#eab308"/></marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Why Large Organisms Need Specialised Gas Exchange Surfaces', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'info',
        title: 'Surface Area to Volume Ratio',
        text: 'As an organism gets larger, its <strong>volume increases faster than its surface area</strong>. This means the surface area to volume ratio decreases.<br/><br/>Example: A cube with sides 1 cm has SA:V = 6:1. A cube with sides 10 cm has SA:V = 0.6:1.<br/><br/>A small organism (bacterium, amoeba) has sufficient surface area to exchange gases by simple diffusion across its body surface. A large organism (human) has far too small a surface area relative to its volume — it needs a specialised, folded, moist gas exchange surface (the alveoli) with an efficient transport system (blood).'
      }
    },
    {
      id: 'tbl-2',
      type: 'comparisonTable',
      data: {
        caption: 'Comparing gas exchange in small vs large organisms',
        headers: ['Feature', 'Small organism (e.g. amoeba)', 'Large organism (e.g. human)'],
        rows: [
          ['SA:V ratio', 'High — surface area sufficient for needs', 'Low — body surface area far too small'],
          ['Method of gas exchange', 'Direct diffusion across cell/body surface', 'Specialised alveoli + circulatory system'],
          ['Diffusion distance to cells', 'Very short — all cells near surface', 'Large — many cells far from gas exchange surface'],
          ['Need for transport system?', 'No — diffusion is sufficient', 'Yes — blood carries O₂ and CO₂ between lungs and cells']
        ]
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — List All Four Features',
        text: 'When asked for features of gas exchange surfaces, always aim to give all four: <strong>(1) large surface area, (2) thin/short diffusion distance, (3) moist surface, (4) good blood supply / ventilation</strong> (to maintain the concentration gradient). Examiners award one mark per distinct feature — listing all four maximises marks.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Efficient gas exchange surfaces have: (1) large surface area to maximise diffusion sites; (2) thin walls for short diffusion distance; (3) moist surface so gases dissolve; (4) good blood supply and ventilation to maintain steep concentration gradients. These features are described mathematically by Fick\'s Law: Rate ∝ (SA × concentration difference) / membrane thickness. Large organisms need specialised surfaces because their low SA:V ratio makes body-surface diffusion insufficient.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Efficient gas exchange surfaces: large SA, thin walls, moist, good blood supply/ventilation. Fick\'s Law: rate ∝ (SA × concentration difference) / thickness.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'State Fick\'s Law and explain what it tells us about gas exchange surfaces.', answer: 'Rate of diffusion ∝ (surface area × concentration difference) / membrane thickness. It shows that diffusion is faster with a larger surface area, greater concentration difference, and thinner membrane — these are therefore the features a gas exchange surface must have.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'Give four features of an efficient gas exchange surface and explain the importance of each.', answer: '(1) Large surface area — more diffusion sites simultaneously. (2) Thin walls — short diffusion distance. (3) Moist surface — gases dissolve to diffuse across. (4) Good blood supply and ventilation — maintains steep concentration gradients for O₂ and CO₂.' },
      { id: 'cue-3', blockId: 'call-2', prompt: 'Why do large organisms need specialised gas exchange surfaces but small organisms do not?', answer: 'As organisms get larger, their volume increases faster than surface area, reducing the SA:V ratio. Small organisms have a high SA:V so gases can diffuse across the body surface. Large organisms have a low SA:V — their body surface is insufficient, so specialised surfaces (alveoli) with a transport system (blood) are needed.' },
      { id: 'cue-4', blockId: 'tbl-1', prompt: 'How does the blood supply maintain the concentration gradient in the alveoli?', answer: 'The dense network of pulmonary capillaries continuously carries blood past the alveoli. Blood arriving has low O₂ and high CO₂ (from respiring cells). O₂ diffuses in and CO₂ diffuses out, restoring the gradients. Ventilation simultaneously replenishes O₂ and removes CO₂ in the alveolar air.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_11_11_0;
