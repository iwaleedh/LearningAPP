export const note_olevel_physics_1_8_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-8-5-nuclear-energy.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe how nuclear fission generates thermal energy in a reactor; state advantages and disadvantages of nuclear power; compare nuclear with fossil fuels for electricity generation.' },
    },
    {
      id: 'h-fission',
      type: 'heading',
      data: { text: 'Nuclear Fission', level: 2 },
    },
    {
      id: 'p-fission',
      type: 'paragraph',
      data: { text: '<strong>Nuclear fission</strong> occurs when a large unstable nucleus (e.g. uranium-235 or plutonium-239) is struck by a <strong>slow neutron</strong> and splits into two smaller nuclei, releasing a large amount of energy and 2–3 more neutrons. These neutrons can trigger further fissions — a <strong>chain reaction</strong>.' },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Nuclear Energy to Electricity',
        text: 'In a nuclear reactor, controlled fission reactions heat water to produce steam → drives turbines → generates electricity.<br><br>Nuclear energy (stored in nucleus) → <strong>Thermal</strong> → <strong>KE (steam/turbine)</strong> → <strong>Electrical</strong>',
      },
    },
    {
      id: 'svg-reactor',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 420 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="420" height="190" fill="#44370a" rx="10"/>
  <text x="210" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#713f12">Nuclear Power Station — Overview</text>
  <!-- Reactor -->
  <rect x="20" y="45" width="80" height="90" rx="8" fill="#dc2626" opacity="0.8"/>
  <text x="60" y="85" text-anchor="middle" font-size="10" fill="#1e293b" font-weight="bold">Nuclear</text>
  <text x="60" y="97" text-anchor="middle" font-size="10" fill="#1e293b">Reactor</text>
  <text x="60" y="109" text-anchor="middle" font-size="9" fill="#7f1d1d">Fission</text>
  <text x="60" y="120" text-anchor="middle" font-size="9" fill="#7f1d1d">→ Heat</text>
  <!-- Arrow to steam generator -->
  <line x1="100" y1="90" x2="125" y2="90" stroke="#374151" stroke-width="2"/>
  <polygon points="125,90 117,86 117,94" fill="#374151"/>
  <!-- Steam generator -->
  <rect x="125" y="55" width="70" height="70" rx="6" fill="#0ea5e9" opacity="0.8"/>
  <text x="160" y="88" text-anchor="middle" font-size="10" fill="#1e293b" font-weight="bold">Steam</text>
  <text x="160" y="100" text-anchor="middle" font-size="10" fill="#1e293b">Generator</text>
  <!-- Arrow to turbine -->
  <line x1="195" y1="90" x2="220" y2="90" stroke="#374151" stroke-width="2"/>
  <polygon points="220,90 212,86 212,94" fill="#374151"/>
  <!-- Turbine -->
  <rect x="220" y="62" width="65" height="56" rx="6" fill="#16a34a" opacity="0.8"/>
  <text x="252" y="88" text-anchor="middle" font-size="10" fill="#1e293b" font-weight="bold">Turbine</text>
  <text x="252" y="101" text-anchor="middle" font-size="9" fill="#1e293b">KE</text>
  <!-- Arrow to generator -->
  <line x1="285" y1="90" x2="308" y2="90" stroke="#374151" stroke-width="2"/>
  <polygon points="308,90 300,86 300,94" fill="#374151"/>
  <!-- Generator -->
  <rect x="308" y="62" width="80" height="56" rx="6" fill="#1d4ed8" opacity="0.8"/>
  <text x="348" y="88" text-anchor="middle" font-size="10" fill="#1e293b" font-weight="bold">Generator</text>
  <text x="348" y="101" text-anchor="middle" font-size="9" fill="#1e293b">Electrical</text>
  <!-- Cooling tower / safety note -->
  <text x="210" y="148" text-anchor="middle" font-size="10" fill="#dc2626">⚠ Radioactive waste must be safely stored for thousands of years</text>
  <text x="210" y="163" text-anchor="middle" font-size="9" fill="#6b7280">Control rods (boron) absorb neutrons to regulate the chain reaction</text>
  <text x="210" y="178" text-anchor="middle" font-size="9" fill="#6b7280">Coolant (water/CO₂) transfers heat from reactor to steam generator</text>
</svg>`,
        caption: 'Nuclear reactor converts fission heat → steam → turbine → electrical energy. Control rods regulate chain reaction.',
      },
    },
    {
      id: 'tbl-pros',
      type: 'comparisonTable',
      data: {
        caption: 'Advantages and disadvantages of nuclear power',
        headers: ['Advantages', 'Disadvantages'],
        rows: [
          ['No CO₂ emissions during operation', 'Radioactive waste is dangerous; must be stored for thousands of years'],
          ['Very high energy density — small amount of fuel releases huge energy', 'High construction and decommissioning cost'],
          ['Reliable — not weather-dependent', 'Risk of serious accidents (e.g. Chernobyl, Fukushima)'],
          ['Large amounts of electricity from a small plant', 'Uranium is non-renewable (finite supply)'],
        ],
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Nuclear is Not Renewable',
        text: 'Nuclear energy is often listed as a "low-carbon" source, but it is <em>not renewable</em> — uranium supplies are finite. Answers stating nuclear is renewable lose marks. Also: "no radiation is produced during normal operation" is wrong — radiation is always produced; the point is it is <em>contained</em>.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Nuclear fission splits heavy nuclei, releasing large amounts of energy as heat. Chain reaction controlled by control rods. Energy chain: nuclear → thermal → KE (steam/turbine) → electrical. No CO₂ during operation. Disadvantages: radioactive waste, accident risk, high cost, non-renewable.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Fission: neutron splits uranium → nuclear energy. No CO₂. Non-renewable. Radioactive waste.',
    cues: [
      { id: 'cue-1', blockId: 'p-fission', prompt: 'Describe nuclear fission and explain how it leads to a chain reaction.', answer: 'Fission: a slow neutron hits a large nucleus (e.g. uranium-235), causing it to split into two smaller nuclei and release energy + 2–3 neutrons. These neutrons trigger more fissions, creating a self-sustaining chain reaction.' },
      { id: 'cue-2', blockId: 'call-key', prompt: 'Write the energy conversion chain in a nuclear power station.', answer: 'Nuclear energy (in the nucleus) → thermal energy (in reactor) → KE of steam → KE of turbine → electrical energy (in generator).' },
      { id: 'cue-3', blockId: 'tbl-pros', prompt: 'Give two advantages and two disadvantages of nuclear power.', answer: 'Advantages: no CO₂ during operation; very high energy density (small fuel amounts). Disadvantages: radioactive waste difficult to dispose of; risk of nuclear accidents.' },
      { id: 'cue-4', blockId: 'call-tip', prompt: 'Is nuclear energy renewable? Explain your answer.', answer: 'No. Nuclear energy is not renewable because the uranium fuel is a finite resource — once used, the supply will eventually run out and cannot be replenished on a human timescale.' },
    ],
  },
  evidence: [],
  mentions: [],
};
