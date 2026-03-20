export const note_olevel_physics_1_8_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-8-1-solar-energy.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe how solar energy is harnessed; compare photovoltaic cells and solar panels; state advantages and disadvantages of solar energy; distinguish between renewable and non-renewable energy sources.' },
    },
    {
      id: 'h-renew',
      type: 'heading',
      data: { text: 'Renewable vs Non-Renewable Energy', level: 2 },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definitions',
        text: '<strong>Renewable energy source:</strong> A source that will not run out in the foreseeable future and is continuously replenished by natural processes (e.g. Sun, wind, tides, waves, geothermal).<br><br><strong>Non-renewable energy source:</strong> A source that will eventually run out and cannot be replenished in a human timescale (e.g. fossil fuels, nuclear fuels).',
      },
    },
    {
      id: 'h-solar',
      type: 'heading',
      data: { text: 'Solar Energy', level: 2 },
    },
    {
      id: 'list-solar',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Photovoltaic (PV) cells:</strong> Convert sunlight directly into electrical energy. No moving parts. Used in calculators, rooftop panels, solar farms.' },
          { text: '<strong>Solar water heaters (solar thermal panels):</strong> Use sunlight to heat water in dark-coloured pipes. The thermal energy is transferred to water circulating in the pipes.' },
          { text: '<strong>Concentrated Solar Power (CSP):</strong> Mirrors focus sunlight to heat water → steam → turbine → generator → electricity.' },
        ],
      },
    },
    {
      id: 'svg-solar',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="400" height="200" fill="#44370a" rx="10"/>
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#78350f">Solar Energy Sources</text>
  <!-- Sun -->
  <circle cx="200" cy="55" r="22" fill="#78350f"/>
  <text x="200" y="60" text-anchor="middle" font-size="11" fill="#1e293b" font-weight="bold">Sun</text>
  <!-- Rays -->
  <line x1="200" y1="28" x2="200" y2="18" stroke="#fbbf24" stroke-width="2"/>
  <line x1="220" y1="35" x2="228" y2="27" stroke="#fbbf24" stroke-width="2"/>
  <line x1="180" y1="35" x2="172" y2="27" stroke="#fbbf24" stroke-width="2"/>
  <line x1="227" y1="55" x2="237" y2="55" stroke="#fbbf24" stroke-width="2"/>
  <line x1="173" y1="55" x2="163" y2="55" stroke="#fbbf24" stroke-width="2"/>
  <!-- PV cell (left) -->
  <rect x="30" y="120" width="120" height="60" rx="5" fill="#3b82f6" opacity="0.85"/>
  <text x="90" y="143" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">Photovoltaic Cell</text>
  <text x="90" y="157" text-anchor="middle" font-size="10" fill="#1e293b">Light → Electricity</text>
  <text x="90" y="170" text-anchor="middle" font-size="9" fill="#1e3a8a">(direct conversion)</text>
  <!-- Arrow sun → PV -->
  <line x1="155" y1="65" x2="100" y2="118" stroke="#fbbf24" stroke-width="2"/>
  <polygon points="100,118 105,110 110,117" fill="#78350f"/>
  <!-- Solar heater (right) -->
  <rect x="250" y="120" width="120" height="60" rx="5" fill="#dc2626" opacity="0.85"/>
  <text x="310" y="143" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">Solar Heater</text>
  <text x="310" y="157" text-anchor="middle" font-size="10" fill="#1e293b">Light → Thermal</text>
  <text x="310" y="170" text-anchor="middle" font-size="9" fill="#3d1212">(heats water)</text>
  <!-- Arrow sun → heater -->
  <line x1="245" y1="65" x2="300" y2="118" stroke="#fbbf24" stroke-width="2"/>
  <polygon points="300,118 295,110 305,111" fill="#78350f"/>
</svg>`,
        caption: 'Two ways to harness solar energy: PV cells (light → electricity) and solar thermal panels (light → heat).',
      },
    },
    {
      id: 'tbl-pros',
      type: 'comparisonTable',
      data: {
        caption: 'Advantages and disadvantages of solar energy',
        headers: ['Advantages', 'Disadvantages'],
        rows: [
          ['Renewable — will not run out', 'Doesn\'t work at night or in cloudy weather'],
          ['No greenhouse gas emissions during operation', 'High initial installation cost'],
          ['No fuel costs once installed', 'Large area of land needed for solar farms'],
          ['Low maintenance (PV cells, no moving parts)', 'Output depends on sunlight intensity'],
        ],
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Distinguish PV from Solar Thermal',
        text: 'PV cells convert sunlight <em>directly</em> to electricity. Solar (thermal) panels heat water using sunlight. Questions may ask which device "generates electricity" — the answer is PV cells, not thermal panels.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Renewable sources will not run out; non-renewable will. Solar energy is captured by PV cells (light → electricity) or solar thermal panels (light → heat). Advantages: zero emissions, free fuel. Disadvantages: intermittent, weather-dependent, expensive to install.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Renewable = won\'t run out. PV cells: light → electricity. Solar panels: light → heat.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'Distinguish between renewable and non-renewable energy sources. Give one example of each.', answer: 'Renewable sources are replenished naturally and will not run out (e.g. solar, wind). Non-renewable sources will eventually run out and cannot be replenished on human timescales (e.g. coal, oil).' },
      { id: 'cue-2', blockId: 'list-solar', prompt: 'Describe the difference between a photovoltaic cell and a solar water heater.', answer: 'A PV cell converts sunlight directly into electrical energy. A solar water heater uses sunlight to heat water — it transfers thermal energy, not electrical energy.' },
      { id: 'cue-3', blockId: 'tbl-pros', prompt: 'Give two advantages and two disadvantages of solar energy.', answer: 'Advantages: renewable/will not run out; no greenhouse gases during operation. Disadvantages: not available at night or in cloud; high installation cost.' },
      { id: 'cue-4', blockId: 'svg-solar', prompt: 'Describe the energy conversion in a photovoltaic cell and in a solar thermal panel.', answer: 'PV cell: light energy → electrical energy (directly). Solar thermal panel: light energy → thermal energy (heats water or other fluid).' },
    ],
  },
  evidence: [],
  mentions: [],
};
