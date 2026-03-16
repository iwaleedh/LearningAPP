export const note_olevel_physics_1_7_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-7-4-conservation-of-energy.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply the law of conservation of energy to real systems; describe energy conversion chains; understand why mechanical energy is not always fully conserved in practice.' },
    },
    {
      id: 'h-law',
      type: 'heading',
      data: { text: 'Law of Conservation of Energy', level: 2 },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Conservation of Energy',
        text: 'The total energy in a closed system is <strong>always constant</strong>. Energy can be transferred from one store to another or converted from one form to another, but it can never be created or destroyed.<br><br>Total energy in = Total energy out (including all forms)',
      },
    },
    {
      id: 'h-chains',
      type: 'heading',
      data: { text: 'Energy Conversion Chains', level: 2 },
    },
    {
      id: 'list-chains',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Power station:</strong> Chemical (fuel) → Thermal → KE (steam) → KE (turbine) → Electrical → KE + Thermal (in appliances)' },
          { text: '<strong>Electric lamp:</strong> Electrical → Light + Thermal (wasted)' },
          { text: '<strong>Car engine:</strong> Chemical (petrol) → Thermal + KE + Sound (wasted)' },
          { text: '<strong>Photosynthesis:</strong> Light (radiant) → Chemical (glucose)' },
          { text: '<strong>Bouncing ball:</strong> GPE → KE → Elastic → KE → GPE → … (reducing each bounce due to heat)' },
        ],
      },
    },
    {
      id: 'svg-pendulum',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="360" height="220" fill="#fdf4ff" rx="10"/>
  <text x="180" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#581c87">Pendulum: Energy Conversion</text>
  <!-- Pivot -->
  <circle cx="180" cy="35" r="5" fill="#374151"/>
  <line x1="0" y1="35" x2="360" y2="35" stroke="#6b7280" stroke-width="1.5"/>
  <!-- Left string + ball -->
  <line x1="180" y1="35" x2="95" y2="140" stroke="#374151" stroke-width="1.5"/>
  <circle cx="95" cy="150" r="14" fill="#8b5cf6"/>
  <text x="50" y="148" text-anchor="end" font-size="10" fill="#8b5cf6">GPE=max</text>
  <text x="50" y="160" text-anchor="end" font-size="10" fill="#2563eb">KE=0</text>
  <!-- Bottom string + ball -->
  <line x1="180" y1="35" x2="180" y2="175" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="180" cy="187" r="14" fill="#10b981"/>
  <text x="200" y="183" font-size="10" fill="#16a34a">GPE=0</text>
  <text x="200" y="195" font-size="10" fill="#2563eb">KE=max</text>
  <!-- Right string + ball -->
  <line x1="180" y1="35" x2="265" y2="140" stroke="#374151" stroke-width="1.5"/>
  <circle cx="265" cy="150" r="14" fill="#8b5cf6"/>
  <text x="285" y="148" font-size="10" fill="#8b5cf6">GPE=max</text>
  <text x="285" y="160" font-size="10" fill="#2563eb">KE=0</text>
  <!-- Curved arrow showing swing -->
  <path d="M105,158 Q180,200 255,158" stroke="#f59e0b" stroke-width="2" fill="none"/>
  <polygon points="255,158 248,152 255,147" fill="#f59e0b"/>
  <!-- h annotation -->
  <line x1="85" y1="150" x2="85" y2="187" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,3"/>
  <polygon points="85,187 82,179 88,179" fill="#6b7280"/>
  <polygon points="85,150 82,158 88,158" fill="#6b7280"/>
  <text x="62" y="172" font-size="10" fill="#6b7280">h</text>
</svg>`,
        caption: 'Pendulum: GPE at extremes ↔ KE at bottom. In real pendulums, energy gradually transfers to thermal (friction at pivot + air resistance), so height decreases each swing.',
      },
    },
    {
      id: 'h-real',
      type: 'heading',
      data: { text: 'Real Systems: Wasted Energy', level: 2 },
    },
    {
      id: 'p-real',
      type: 'paragraph',
      data: { text: 'In real systems, energy is never truly lost — but some is transferred to <strong>thermal energy</strong> due to friction and air resistance, or to <strong>sound</strong>. This "wasted" energy spreads out into the surroundings and becomes harder to use usefully.' },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: "Energy lost" vs "Energy wasted"',
        text: 'Energy is <em>never lost</em> — but it can be <em>wasted</em> (transferred to thermal energy of the surroundings). A question asking "where does the energy go?" expects you to name the form and where it goes (e.g., "into the surroundings as thermal energy due to air resistance").',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Conservation of energy: total energy in a closed system is constant. Chains show each conversion step. In real systems some energy is wasted as heat/sound. A pendulum gradually loses height because energy converts to thermal energy via friction — but total energy (including heat) is still conserved.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Energy is never created or destroyed — only converted. Real systems waste some as heat. Pendulum: GPE ↔ KE.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'State the law of conservation of energy.', answer: 'The total energy in a closed system is always constant. Energy can be transferred from one store to another or converted from one form to another, but can never be created or destroyed.' },
      { id: 'cue-2', blockId: 'list-chains', prompt: 'Describe the energy conversion chain for an electric lamp.', answer: 'Electrical energy → light energy + thermal energy (wasted). The thermal energy heats the filament and surroundings.' },
      { id: 'cue-3', blockId: 'svg-pendulum', prompt: 'Describe the energy changes in a swinging pendulum and explain why it eventually stops.', answer: 'GPE at the extremes converts to KE at the bottom and back. In reality, air resistance and friction at the pivot convert some energy to thermal energy each swing, so the pendulum gradually loses height until it stops.' },
      { id: 'cue-4', blockId: 'h-real', prompt: 'Where does "wasted" energy go in real mechanical systems?', answer: 'It is transferred to thermal energy of the surroundings (via friction or air resistance) or to sound. It is not destroyed — total energy is still conserved — but it becomes difficult to use as useful work.' },
    ],
  },
  evidence: [],
  mentions: [],
};
