export const note_olevel_physics_1_7_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-7-7-efficiency.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define efficiency; calculate efficiency from energy inputs and outputs; interpret Sankey diagrams; explain why no machine is 100% efficient.' },
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'What is Efficiency?', level: 2 },
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'Real machines always waste some energy — usually as <strong>heat</strong> (due to friction) or <strong>sound</strong>. Efficiency describes how well a machine converts the input energy into <em>useful</em> output energy.' },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Efficiency Formula',
        text: 'Efficiency = <span class="nb-frac"><span class="nb-num">useful energy output</span><span class="nb-den">total energy input</span></span> × 100%<br><br>Efficiency has no units. Efficiency ≤ 1 (or ≤ 100%).<br><br>This can also be expressed as a decimal (0 to 1).',
      },
    },
    {
      id: 'eq-eff',
      type: 'equation',
      data: {
        html: 'Efficiency (%) = <span class="nb-frac"><span class="nb-num">useful output energy (J)</span><span class="nb-den">total input energy (J)</span></span> × 100%',
        caption: 'Also valid with power: efficiency = useful output power ÷ total input power',
      },
    },
    {
      id: 'h-sankey',
      type: 'heading',
      data: { text: 'Sankey Diagrams', level: 2 },
    },
    {
      id: 'p-sankey',
      type: 'paragraph',
      data: { text: 'A Sankey diagram shows energy flow through a device. The <strong>width of each arrow</strong> is proportional to the amount of energy. The input arrow comes in from the left; useful output goes straight ahead; wasted energy branches off (usually downward).' },
    },
    {
      id: 'svg-sankey',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="400" height="200" fill="#3d1212" rx="10"/>
  <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#7f1d1d">Sankey Diagram: Electric Motor (60% efficient)</text>
  <!-- Input arrow -->
  <rect x="30" y="60" width="100" height="80" fill="#6366f1" rx="4"/>
  <polygon points="130,60 130,140 160,100" fill="#6366f1"/>
  <text x="80" y="95" text-anchor="middle" font-size="11" fill="#1e293b" font-weight="bold">Input</text>
  <text x="80" y="108" text-anchor="middle" font-size="11" fill="#1e293b">100 J</text>
  <!-- Useful output arrow (forward, 60 J) -->
  <rect x="200" y="70" width="140" height="48" fill="#065f46" rx="4"/>
  <polygon points="200,70 200,118 175,94" fill="#10b981"/>
  <text x="270" y="98" text-anchor="middle" font-size="11" fill="#1e293b" font-weight="bold">Useful KE</text>
  <text x="270" y="111" text-anchor="middle" font-size="11" fill="#1e293b">60 J</text>
  <!-- Wasted arrow (down, 40 J) -->
  <polygon points="175,105 215,105 215,165 175,165" fill="#f87171"/>
  <polygon points="175,165 215,165 195,185" fill="#f87171"/>
  <text x="195" y="145" text-anchor="middle" font-size="10" fill="#1e293b" font-weight="bold">Wasted</text>
  <text x="195" y="157" text-anchor="middle" font-size="10" fill="#1e293b">heat 40 J</text>
  <!-- Junction block -->
  <rect x="158" y="70" width="50" height="110" fill="#94a3b8" rx="2" opacity="0.5"/>
  <!-- Efficiency calc -->
  <text x="200" y="193" text-anchor="middle" font-size="10" fill="#374151">Efficiency = 60/100 × 100% = 60%</text>
</svg>`,
        caption: 'Sankey diagram: 100 J input → 60 J useful mechanical energy + 40 J wasted as heat. Width is proportional to energy.',
      },
    },
    {
      id: 'call-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Calculate Efficiency',
        text: 'A light bulb takes in 100 J of electrical energy and gives out 15 J of light. Calculate the efficiency.<br><br>Efficiency = 15/100 × 100% = <strong>15%</strong><br>Wasted as heat = 100 − 15 = 85 J',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Why Never 100% Efficient?',
        text: 'No real machine is 100% efficient because energy is always lost as <strong>heat due to friction</strong> (moving parts), <strong>heat in electrical components</strong> (resistance), or <strong>sound</strong>. Answers like "energy is used up" or "energy is destroyed" are <em>wrong</em> — energy is <em>wasted</em> but conserved.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Efficiency = useful output ÷ total input × 100%. No machine is 100% efficient — wasted energy becomes heat (friction) or sound. Sankey diagrams show energy flow with arrow widths proportional to energy values. Wasted energy is still conserved — just no longer useful.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Efficiency = (useful output / total input) × 100%. Never 100% due to friction/heat losses.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'Write the equation for efficiency and state its units.', answer: 'Efficiency = (useful energy output / total energy input) × 100%. Efficiency has no units; it is a ratio (or percentage). Maximum value is 100%.' },
      { id: 'cue-2', blockId: 'call-we1', prompt: 'A light bulb takes in 100 J and emits 15 J as light. Calculate efficiency and state where the rest goes.', answer: 'Efficiency = 15/100 × 100% = 15%. The remaining 85 J is wasted as thermal energy (heat), warming the surroundings.' },
      { id: 'cue-3', blockId: 'svg-sankey', prompt: 'Describe what a Sankey diagram shows and how to read one.', answer: 'A Sankey diagram shows energy flow: the input arrow is on the left, useful output goes straight ahead, and wasted energy branches off (usually downward). The width of each arrow is proportional to the amount of energy it represents.' },
      { id: 'cue-4', blockId: 'call-tip', prompt: 'Why can no machine ever be 100% efficient in practice?', answer: 'Energy is always wasted as heat (due to friction in moving parts or resistance in electrical components) and sometimes as sound. Energy is not destroyed — it is conserved but becomes spread out as thermal energy and can no longer be used usefully.' },
    ],
  },
  evidence: [],
  mentions: [],
};
