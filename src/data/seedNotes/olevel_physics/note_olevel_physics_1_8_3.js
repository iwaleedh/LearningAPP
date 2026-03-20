export const note_olevel_physics_1_8_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-8-4-geothermal-wind-energy.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe how geothermal and wind energy generate electricity; state the energy source and conversion chain for each; compare their advantages and disadvantages.' },
    },
    {
      id: 'h-geo',
      type: 'heading',
      data: { text: 'Geothermal Energy', level: 2 },
    },
    {
      id: 'p-geo',
      type: 'paragraph',
      data: { text: '<strong>Geothermal energy</strong> uses the <em>natural heat inside the Earth</em> from radioactive decay of rocks in the Earth\'s crust. This heat warms underground water. Hot steam/water is piped to the surface to drive turbines and generate electricity, or used directly to heat buildings.' },
    },
    {
      id: 'svg-geo',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="380" height="200" fill="#532407" rx="10"/>
  <text x="190" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#7c2d12">Geothermal Power</text>
  <!-- Surface -->
  <rect x="0" y="80" width="380" height="15" fill="#a8a29e" rx="2"/>
  <text x="330" y="76" font-size="10" fill="#6b7280">Surface</text>
  <!-- Underground rocks (hot) -->
  <rect x="0" y="95" width="380" height="90" fill="#dc2626" opacity="0.18" rx="0"/>
  <text x="50" y="155" font-size="11" fill="#dc2626">Hot rocks</text>
  <text x="50" y="168" font-size="9" fill="#dc2626">(geothermal heat)</text>
  <!-- Cold water injection pipe (left) -->
  <rect x="115" y="40" width="14" height="100" fill="#3b82f6" rx="3"/>
  <polygon points="122,145 116,135 128,135" fill="#3b82f6"/>
  <text x="85" y="36" font-size="9" fill="#3b82f6">Cold water</text>
  <text x="85" y="46" font-size="9" fill="#3b82f6">injected</text>
  <!-- Hot steam pipe (right) -->
  <rect x="250" y="40" width="14" height="100" fill="#78350f" rx="3"/>
  <polygon points="257,40 251,50 263,50" fill="#f59e0b"/>
  <text x="268" y="36" font-size="9" fill="#f59e0b">Hot steam</text>
  <text x="268" y="46" font-size="9" fill="#f59e0b">rises</text>
  <!-- Building / turbine at top -->
  <rect x="195" y="22" width="48" height="30" rx="4" fill="#6366f1"/>
  <text x="219" y="37" text-anchor="middle" font-size="9" fill="#1e293b">Turbine +</text>
  <text x="219" y="47" text-anchor="middle" font-size="9" fill="#1e293b">Generator</text>
  <!-- Electricity output -->
  <line x1="219" y1="22" x2="219" y2="10" stroke="#f59e0b" stroke-width="2"/>
  <polygon points="219,10 215,18 223,18" fill="#f59e0b"/>
  <text x="247" y="11" font-size="9" fill="#f59e0b">Electricity</text>
</svg>`,
        caption: 'Geothermal: cold water injected deep into hot rocks → steam rises and drives turbines.',
      },
    },
    {
      id: 'h-wind',
      type: 'heading',
      data: { text: 'Wind Energy', level: 2 },
    },
    {
      id: 'p-wind',
      type: 'paragraph',
      data: { text: '<strong>Wind turbines</strong> use the <em>kinetic energy of moving air</em> to spin blades. The blades turn a generator, producing electricity. Wind farms can be onshore (cheaper) or offshore (stronger, more consistent winds).' },
    },
    {
      id: 'list-wind',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Energy chain:</strong> KE of wind → KE of blades → electrical energy (generator)' },
          { text: '<strong>Onshore wind:</strong> cheaper to build and maintain; may affect landscapes and wildlife (birds)' },
          { text: '<strong>Offshore wind:</strong> stronger, more consistent winds; more expensive; no visual impact onshore' },
        ],
      },
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Geothermal vs Wind energy',
        headers: ['Feature', 'Geothermal', 'Wind'],
        rows: [
          ['Energy source', 'Internal heat of Earth (radioactive decay)', 'Kinetic energy of moving air (driven by Sun)'],
          ['Reliability', 'Constant output (day and night, any weather)', 'Intermittent — only when wind blows'],
          ['Location', 'Limited — needs volcanically active regions', 'Widely available, especially coastal/open areas'],
          ['Emissions', 'No CO₂; some traces of sulfur in steam', 'No CO₂ emissions'],
          ['Visual impact', 'Low surface footprint', 'Visible turbines; some noise'],
        ],
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: "Intermittent" Sources',
        text: 'Solar, wind, and wave are all <em>intermittent</em> — they cannot generate electricity on demand. Geothermal, tidal, and HEP are more <em>reliable</em>. This is why questions ask "why can\'t wind/solar replace all coal power stations?" — they cannot guarantee supply at peak demand.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Geothermal: heat from Earth\'s interior → steam → turbines → electrical. Reliable, no CO₂, but limited to volcanic regions. Wind: KE of air → KE of blades → electrical. No CO₂; renewable; but intermittent. Offshore wind is stronger but costlier to install.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Geothermal: Earth\'s heat → steam → electricity. Reliable. Wind: KE of air → electricity. Intermittent.',
    cues: [
      { id: 'cue-1', blockId: 'h-geo', prompt: 'What is the original source of geothermal energy, and how is it converted to electricity?', answer: 'Geothermal energy originates from radioactive decay of rocks in the Earth\'s crust. The heat warms underground water/steam, which is piped to the surface and used to drive turbines and generators.' },
      { id: 'cue-2', blockId: 'p-wind', prompt: 'Write the energy conversion chain for a wind turbine.', answer: 'Kinetic energy of wind → kinetic energy of rotating blades → electrical energy in the generator.' },
      { id: 'cue-3', blockId: 'tbl-compare', prompt: 'Give one advantage of geothermal energy over wind energy.', answer: 'Geothermal energy provides a constant, reliable output regardless of weather (unlike wind, which is intermittent — it only generates when the wind is blowing).' },
      { id: 'cue-4', blockId: 'call-tip', prompt: 'Why are solar and wind energy described as "intermittent" sources? Why does this matter?', answer: 'They only generate electricity when the Sun shines or wind blows — not on demand. This matters because electricity demand varies (e.g., high in the morning and evening). Intermittent sources need backup power or storage systems to ensure supply matches demand at all times.' },
    ],
  },
  evidence: [],
  mentions: [],
};
