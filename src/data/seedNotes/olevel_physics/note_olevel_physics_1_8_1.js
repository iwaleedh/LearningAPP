export const note_olevel_physics_1_8_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-8-2-fossil-fuels.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe how fossil fuels generate electricity; state the environmental impacts of burning fossil fuels; state advantages and disadvantages compared with renewable sources.' },
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What are Fossil Fuels?', level: 2 },
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: { text: 'Fossil fuels — <strong>coal, oil, and natural gas</strong> — are energy sources formed from the remains of ancient organisms over millions of years. They are non-renewable. Currently, fossil fuels supply most of the world\'s energy.' },
    },
    {
      id: 'h-how',
      type: 'heading',
      data: { text: 'How Fossil Fuels Generate Electricity', level: 2 },
    },
    {
      id: 'svg-station',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="170" fill="#0f172a" rx="10"/>
  <text x="220" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Fossil Fuel Power Station — Energy Chain</text>
  <!-- Step boxes -->
  <rect x="10" y="40" width="72" height="40" rx="5" fill="#dc2626"/>
  <text x="46" y="58" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">Boiler</text>
  <text x="46" y="70" text-anchor="middle" font-size="8" fill="#1e293b">Burns fuel</text>
  <line x1="82" y1="60" x2="98" y2="60" stroke="#374151" stroke-width="2"/>
  <polygon points="98,60 90,56 90,64" fill="#374151"/>

  <rect x="98" y="40" width="72" height="40" rx="5" fill="#0ea5e9"/>
  <text x="134" y="58" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">Steam</text>
  <text x="134" y="70" text-anchor="middle" font-size="8" fill="#1e293b">Produced</text>
  <line x1="170" y1="60" x2="186" y2="60" stroke="#374151" stroke-width="2"/>
  <polygon points="186,60 178,56 178,64" fill="#374151"/>

  <rect x="186" y="40" width="72" height="40" rx="5" fill="#16a34a"/>
  <text x="222" y="58" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">Turbine</text>
  <text x="222" y="70" text-anchor="middle" font-size="8" fill="#1e293b">Spins</text>
  <line x1="258" y1="60" x2="274" y2="60" stroke="#374151" stroke-width="2"/>
  <polygon points="274,60 266,56 266,64" fill="#374151"/>

  <rect x="274" y="40" width="80" height="40" rx="5" fill="#7c3aed"/>
  <text x="314" y="58" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">Generator</text>
  <text x="314" y="70" text-anchor="middle" font-size="8" fill="#1e293b">Electricity</text>
  <line x1="354" y1="60" x2="370" y2="60" stroke="#374151" stroke-width="2"/>
  <polygon points="370,60 362,56 362,64" fill="#374151"/>

  <rect x="370" y="40" width="60" height="40" rx="5" fill="#78350f"/>
  <text x="400" y="58" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">Grid</text>
  <text x="400" y="70" text-anchor="middle" font-size="8" fill="#1e293b">Homes/Industry</text>

  <!-- Energy types below -->
  <text x="46" y="100" text-anchor="middle" font-size="9" fill="#dc2626">Chemical</text>
  <text x="134" y="100" text-anchor="middle" font-size="9" fill="#0ea5e9">Thermal</text>
  <text x="222" y="100" text-anchor="middle" font-size="9" fill="#16a34a">KE</text>
  <text x="314" y="100" text-anchor="middle" font-size="9" fill="#7c3aed">KE→Electrical</text>
  <text x="400" y="100" text-anchor="middle" font-size="9" fill="#f59e0b">Electrical</text>
  <!-- CO2 emissions -->
  <text x="220" y="130" text-anchor="middle" font-size="10" fill="#dc2626">⚠ CO₂, SO₂, NOₓ released during combustion</text>
  <text x="220" y="147" text-anchor="middle" font-size="9" fill="#6b7280">~35–45% efficiency typical; much energy wasted as heat</text>
</svg>`,
        caption: 'Energy conversion chain in a fossil fuel power station. Thermal, KE, and electrical losses at each stage.',
      },
    },
    {
      id: 'h-impact',
      type: 'heading',
      data: { text: 'Environmental Impact', level: 2 },
    },
    {
      id: 'list-impact',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>CO₂ emissions:</strong> main cause of enhanced greenhouse effect and climate change' },
          { text: '<strong>SO₂ and NOₓ:</strong> cause acid rain, which damages ecosystems' },
          { text: '<strong>Particulate matter:</strong> air pollution, respiratory health effects' },
          { text: '<strong>Oil spills:</strong> damage marine ecosystems' },
          { text: '<strong>Mining:</strong> land degradation and habitat destruction' },
        ],
      },
    },
    {
      id: 'tbl-pros',
      type: 'comparisonTable',
      data: {
        caption: 'Advantages and disadvantages of fossil fuels',
        headers: ['Advantages', 'Disadvantages'],
        rows: [
          ['Reliable — not dependent on weather', 'Non-renewable — will run out'],
          ['High energy density — large amounts of power', 'Produces CO₂ → climate change'],
          ['Existing global infrastructure in place', 'SO₂ → acid rain'],
          ['Power station can respond quickly to demand', 'Expensive extraction as reserves deplete'],
        ],
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Be Specific About Environmental Effects',
        text: 'Saying "it pollutes" is not enough. Name the gas (CO₂) and its effect (enhanced greenhouse effect/climate change). For SO₂ say "acid rain". Examiners award marks for specific causes and effects.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Fossil fuels (coal, oil, gas) are non-renewable. In power stations: chemical → thermal → KE (turbine) → electrical. Typical efficiency ~35–45%. Environmental impacts: CO₂ (climate change), SO₂ (acid rain), particulates (pollution). Advantages: reliable, high power, existing infrastructure.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Fossil fuels: non-renewable. Chemical → thermal → KE → electrical. CO₂ causes climate change.',
    cues: [
      { id: 'cue-1', blockId: 'h-what', prompt: 'Name the three main fossil fuels and explain why they are called "non-renewable".', answer: 'Coal, oil, and natural gas. They are non-renewable because they took millions of years to form and cannot be replaced on a human timescale — once used, they are gone.' },
      { id: 'cue-2', blockId: 'svg-station', prompt: 'Describe the energy conversion chain in a fossil fuel power station.', answer: 'Chemical energy in the fuel → thermal energy (burning in boiler) → KE of steam → KE of turbine → electrical energy in generator → transmitted via the grid.' },
      { id: 'cue-3', blockId: 'list-impact', prompt: 'State two environmental problems caused by burning fossil fuels and identify the specific pollutant involved.', answer: 'Any two: CO₂ → enhanced greenhouse effect / climate change; SO₂ or NOₓ → acid rain; particulates → air pollution and respiratory problems.' },
      { id: 'cue-4', blockId: 'tbl-pros', prompt: 'Give one advantage and one disadvantage of fossil fuels compared to renewables.', answer: 'Advantage: reliable (not weather-dependent) / high energy density / can respond quickly to demand. Disadvantage: non-renewable (will run out) / produces CO₂ causing climate change.' },
    ],
  },
  evidence: [],
  mentions: [],
};
