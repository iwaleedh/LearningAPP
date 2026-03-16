export const note_olevel_physics_3_4_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-4-3-earths-structure.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the layered structure of the Earth (crust, mantle, outer core, inner core) including typical depths and states of matter. Explain how seismic waves provide evidence for this structure.' },
    },
    {
      id: 'h-layers',
      type: 'heading',
      data: { text: 'Earth\'s Layered Structure', level: 2 },
    },
    {
      id: 'para-intro',
      type: 'paragraph',
      data: { text: 'The Earth has a layered internal structure, revealed largely by the study of seismic waves. The layers differ in composition, density, temperature, and state (solid or liquid). Moving from the surface to the centre, the layers are: <strong>crust → mantle → outer core → inner core</strong>.' },
    },
    {
      id: 'svg-earth-layers',
      type: 'svg',
      data: {
        caption: 'Cross-section of the Earth showing its four main layers',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" width="480" height="480">
  <style>text{font-family:Arial,sans-serif;font-size:12px;fill:#1e293b;}</style>
  <!-- Mantle -->
  <circle cx="240" cy="240" r="200" fill="#c67c4b"/>
  <!-- Outer core (liquid) -->
  <circle cx="240" cy="240" r="130" fill="#e88f2e"/>
  <!-- Inner core (solid) -->
  <circle cx="240" cy="240" r="60" fill="#facc15"/>
  <!-- Crust (thin outer ring) - show as hatched ring -->
  <circle cx="240" cy="240" r="205" fill="none" stroke="#5e8a45" stroke-width="10" opacity="0.7"/>
  <!-- Labels with lines -->
  <!-- Crust -->
  <line x1="240" y1="35" x2="240" y2="58" stroke="#5e8a45" stroke-width="1.5"/>
  <rect x="150" y="18" width="180" height="18" fill="white" opacity="0.75" rx="3"/>
  <text x="240" y="31" text-anchor="middle" fill="#3b6e1f" font-weight="bold">Crust (0–30 km, SOLID)</text>
  <!-- Mantle label -->
  <line x1="360" y1="155" x2="330" y2="180" stroke="#7c3707" stroke-width="1.5"/>
  <text x="372" y="153" fill="#7c3707" font-weight="bold">Mantle</text>
  <text x="355" y="165" fill="#7c3707" font-size="10">(30–2900 km)</text>
  <text x="358" y="177" fill="#7c3707" font-size="10">Semi-solid/solid</text>
  <!-- Outer core label -->
  <line x1="358" y1="310" x2="335" y2="295" stroke="#b45309" stroke-width="1.5"/>
  <text x="360" y="308" fill="#b45309" font-weight="bold">Outer core</text>
  <text x="354" y="320" fill="#b45309" font-size="10">(2900–5100 km)</text>
  <text x="362" y="332" fill="#b45309" font-size="10">LIQUID Fe/Ni</text>
  <!-- Inner core label -->
  <text x="200" y="238" text-anchor="middle" fill="#78350f" font-weight="bold" font-size="10">Inner core</text>
  <text x="200" y="250" text-anchor="middle" fill="#78350f" font-size="9">(5100–6370 km)</text>
  <text x="200" y="262" text-anchor="middle" fill="#78350f" font-size="9">SOLID Fe/Ni</text>
  <!-- Scale arrow -->
  <line x1="40" y1="430" x2="240" y2="430" stroke="#64748b" stroke-width="1.5"/>
  <line x1="40" y1="425" x2="40" y2="435" stroke="#64748b"/>
  <line x1="240" y1="425" x2="240" y2="435" stroke="#64748b"/>
  <text x="140" y="447" text-anchor="middle" fill="#64748b" font-size="10">Radius ≈ 6370 km</text>
</svg>`,
      },
    },
    {
      id: 'tbl-layers',
      type: 'comparisonTable',
      data: {
        caption: 'Earth\'s internal layers — properties and characteristics',
        headers: ['Layer', 'Depth', 'State', 'Composition', 'Temperature'],
        rows: [
          ['Crust', '0–30 km (oceanic ~7 km, continental ~30 km)', 'Solid', 'Silicate rocks (granite, basalt)', '~25 °C at surface to ~880 °C at base'],
          ['Mantle', '30–2900 km', 'Solid (but flows over millions of years — convects)', 'Mainly silicate minerals (peridotite)', '880 °C – 3700 °C'],
          ['Outer core', '2900–5100 km', 'LIQUID', 'Iron and nickel (Fe, Ni)', '3700 °C – 5000 °C'],
          ['Inner core', '5100–6370 km', 'SOLID (despite high temperature — extreme pressure)', 'Solid iron and nickel', '~5000 °C – 5500 °C'],
        ],
      },
    },
    {
      id: 'h-evidence',
      type: 'heading',
      data: { text: 'Evidence from Seismic Waves', level: 2 },
    },
    {
      id: 'list-evidence',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>S-wave shadow zone</strong> — S-waves (transverse) do not travel through the outer core. Since liquids cannot support shear, this proves the outer core is liquid.' },
          { text: '<strong>P-wave shadow zone</strong> — P-waves are strongly refracted at the mantle-outer core boundary, indicating a large change in density and wave speed → a distinct core exists.' },
          { text: '<strong>P-waves refocused by inner core</strong> — some P-waves that enter the inner core travel faster, suggesting the inner core is solid (higher wave speeds in solids).' },
          { text: '<strong>Discontinuities in wave speed</strong> — sudden changes in seismic wave speed detected at fixed depths reveal boundaries between layers (e.g. Mohorovičić discontinuity at the crust-mantle boundary).' },
        ],
      },
    },
    {
      id: 'callout-key-evidence',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Evidence Summary',
        text: '→ S-waves absent beyond ~105° from epicentre = outer core is LIQUID\n→ P-waves refracted at 2900 km depth = boundary between mantle and outer core\n→ P-wave speed increases in inner core = inner core is SOLID\n→ We cannot directly sample > ~10 km depth (deepest borehole ~12 km), so seismic waves are our primary tool for studying Earth\'s interior.',
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Remember: the inner core is SOLID despite being the hottest part — because the immense pressure is so great it forces the iron/nickel to remain solid even above the normal melting point. The outer core lacks as much pressure, so it remains liquid.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Earth has four main layers: crust (solid, 0–30 km), mantle (solid/semi-molten, 30–2900 km), outer core (liquid Fe/Ni, 2900–5100 km), and inner core (solid Fe/Ni, 5100–6370 km). Seismic wave study provides the main evidence: S-wave shadow zones prove the outer core is liquid; P-wave behaviour at 2900 km reveals the core boundary.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Crust(solid) → Mantle(solid) → Outer core(LIQUID, 2900–5100 km) → Inner core(solid, 5100–6370 km). S-wave shadow = outer core liquid.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-layers', prompt: 'List Earth\'s four main layers from surface to centre, stating the state of matter of each.', answer: 'Crust (solid), Mantle (solid but convects slowly), Outer core (LIQUID iron/nickel), Inner core (SOLID iron/nickel).' },
      { id: 'cue-2', blockId: 'list-evidence', prompt: 'How do S-waves provide evidence that Earth\'s outer core is liquid?', answer: 'S-waves cannot travel through liquids. The existence of an S-wave shadow zone (no S-waves beyond ~105° from the epicentre) proves that the outer core, which S-waves would need to pass through, is liquid.' },
      { id: 'cue-3', blockId: 'callout-tip1', prompt: 'Why is the inner core solid even though it is the hottest layer?', answer: 'The inner core is under enormous pressure from all the overlying layers. This extreme pressure forces the iron and nickel to remain solid even though the temperature exceeds the normal melting point.' },
      { id: 'cue-4', blockId: 'callout-key-evidence', prompt: 'What is the key limitation of studying Earth\'s interior and how do scientists overcome it?', answer: 'We cannot drill deeper than ~12 km (the deepest borehole). Scientists study Earth\'s interior by analysing seismic waves — their speed, path, and arrival times at seismograph stations worldwide reveal density changes and boundaries between layers.' },
    ],
  },
  evidence: [],
  mentions: [],
};
