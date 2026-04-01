export const note_olevel_physics_1_8_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-8-3-water-energy.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe how hydroelectric, tidal, and wave energy are used to generate electricity; state advantages and disadvantages of each; write the energy conversion chain for hydroelectric power.' },
    },
    {
      id: 'h-hydro',
      type: 'heading',
      data: { text: 'Hydroelectric Power (HEP)', level: 2 },
    },
    {
      id: 'p-hydro',
      type: 'paragraph',
      data: { text: 'Hydroelectric power uses the <strong>GPE of water stored at height</strong> behind a dam. Water flows through turbines, converting GPE → KE → electrical energy. HEP accounts for about 16% of world electricity generation.' },
    },
    {
      id: 'svg-hydro',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 380 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="380" height="190" fill="#1c3a64" rx="10"/>
  <text x="190" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e3a8a">Hydroelectric Power</text>
  <!-- Reservoir hill -->
  <polygon points="0,145 80,60 140,145" fill="#6b7280" opacity="0.5"/>
  <!-- Water surface -->
  <rect x="0" y="85" width="140" height="60" fill="#3b82f6" opacity="0.5"/>
  <text x="70" y="118" text-anchor="middle" font-size="10" fill="#1d4ed8" font-weight="bold">Reservoir</text>
  <text x="70" y="130" text-anchor="middle" font-size="9" fill="#1d4ed8">High GPE</text>
  <!-- Dam -->
  <rect x="140" y="80" width="18" height="65" fill="#94a3b8" rx="2"/>
  <text x="149" y="170" text-anchor="middle" font-size="9" fill="#374151">Dam</text>
  <!-- Pipe/penstock -->
  <rect x="152" y="120" width="60" height="12" fill="#94a3b8" rx="3"/>
  <!-- Turbine + generator box -->
  <rect x="212" y="112" width="60" height="28" fill="#3b82f6" rx="4"/>
  <text x="242" y="127" text-anchor="middle" font-size="9" fill="#1e293b">Turbine +</text>
  <text x="242" y="136" text-anchor="middle" font-size="9" fill="#1e293b">Generator</text>
  <!-- Water output -->
  <rect x="272" y="130" width="60" height="10" fill="#3b82f6" opacity="0.6" rx="3"/>
  <text x="302" y="157" text-anchor="middle" font-size="9" fill="#1d4ed8">River</text>
  <!-- Energy labels -->
  <text x="70" y="75" text-anchor="middle" font-size="9" fill="#16a34a">GPE stored</text>
  <text x="170" y="108" text-anchor="middle" font-size="9" fill="#f59e0b">GPE → KE</text>
  <text x="242" y="107" text-anchor="middle" font-size="9" fill="#3b82f6">KE → Electrical</text>
  <!-- Power cable -->
  <line x1="242" y1="112" x2="242" y2="90" stroke="#f59e0b" stroke-width="2"/>
  <line x1="242" y1="90" x2="330" y2="90" stroke="#f59e0b" stroke-width="2"/>
  <text x="310" y="84" font-size="9" fill="#f59e0b">~~ Electricity</text>
</svg>`,
        caption: 'HEP: water stored at height has GPE → falls through turbine → electrical energy.',
      },
    },
    {
      id: 'h-tidal',
      type: 'heading',
      data: { text: 'Tidal Energy', level: 2 },
    },
    {
      id: 'p-tidal',
      type: 'paragraph',
      data: { text: 'Tidal power uses the <strong>rise and fall of sea tides</strong>. A tidal barrage (dam across an estuary) traps water at high tide. At low tide, water flows back through turbines. Tidal energy is predictable but limited to coastal estuaries.' },
    },
    {
      id: 'h-wave',
      type: 'heading',
      data: { text: 'Wave Energy', level: 2 },
    },
    {
      id: 'p-wave',
      type: 'paragraph',
      data: { text: 'Wave energy devices (e.g. oscillating water columns) use the <strong>up-and-down motion of ocean waves</strong> to compress air, which drives turbines. Wave power is less predictable than tidal and current technology is still developing.' },
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of water-based renewable energy sources',
        headers: ['Source', 'Advantages', 'Disadvantages'],
        rows: [
          ['Hydroelectric', 'Reliable, high output, can store water for peak demand', 'Flooding of land, ecosystem disruption (fish migration), high construction cost'],
          ['Tidal', 'Very predictable (tides known years ahead), no emissions', 'Limited suitable locations, tidal barrage expensive, affects estuary ecosystems'],
          ['Wave', 'No fuel cost, uses open ocean', 'Unpredictable, harsh conditions damage equipment, low current efficiency'],
        ],
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Hydro Energy Conversion Chain',
        text: 'Hydroelectric: GPE (water at height) → KE (falling water) → KE (turbine) → electrical energy (generator). This is a common exam question. Note: HEP is renewable — the Sun drives the water cycle (evaporation → rain → reservoir).',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'HEP (dam): GPE of stored water → KE → electrical. Reliable, high output but floods land. Tidal: estuaries, predictable but few suitable sites. Wave: open ocean, variable, developing technology. All three are renewable with no direct CO₂ emissions during operation.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'HEP: GPE → KE → electrical. Tidal: predictable. Wave: variable. All renewable.',
    cues: [
      { id: 'cue-1', blockId: 'svg-hydro', prompt: 'Write the full energy conversion chain for hydroelectric power.', answer: 'GPE of water at height → KE of falling water → KE of turbine → electrical energy in generator.' },
      { id: 'cue-2', blockId: 'h-tidal', prompt: 'How does a tidal barrage generate electricity? Give one advantage over other renewable sources.', answer: 'A tidal barrage traps sea water at high tide. As the tide falls, water flows through turbines, rotating generators. Advantage: tidal patterns are highly predictable (unlike solar or wind), so output can be forecast accurately.' },
      { id: 'cue-3', blockId: 'tbl-compare', prompt: 'Give one environmental disadvantage of hydroelectric power and one of tidal energy.', answer: 'HEP: flooding of land behind the dam destroys habitats and displaces communities; also blocks fish migration routes. Tidal: constructing a barrage changes the estuary ecosystem and affects wildlife feeding and nesting patterns.' },
      { id: 'cue-4', blockId: 'call-tip', prompt: 'Explain why hydroelectric power is considered a renewable energy source, even though it uses falling water.', answer: 'The Sun\'s energy drives the water cycle — water evaporates from the ocean, falls as rain in hills, and collects in reservoirs. The supply of water is continuously replenished by this cycle, so HEP is renewable.' },
    ],
  },
  evidence: [],
  mentions: [],
};
