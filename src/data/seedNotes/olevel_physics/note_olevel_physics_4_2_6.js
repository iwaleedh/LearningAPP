export const note_olevel_physics_4_2_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-2-7-resistors-in-parallel.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply parallel circuit rules: same voltage across branches, currents add up, and 1/R_total = 1/R₁ + 1/R₂ to solve problems.' },
    },
    {
      id: 'h-parallel',
      type: 'heading',
      data: { text: 'Parallel Circuits', level: 2 },
    },
    {
      id: 'para-parallel',
      type: 'paragraph',
      data: {
        text: 'In a <strong>parallel circuit</strong>, components are connected across the same two points — there are <strong>multiple paths</strong> for current to flow. Each branch operates independently; if one component breaks, others continue to work.',
      },
    },
    {
      id: 'h-rules',
      type: 'heading',
      data: { text: 'Parallel Circuit Rules', level: 2 },
    },
    {
      id: 'list-rules',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<strong>Voltage is the same</strong> across all parallel branches: V₁ = V₂ = V₃ = V_supply' },
          { text: '<strong>Currents add up</strong> to the total current: I_total = I₁ + I₂ + I₃' },
          { text: '<strong>Total resistance</strong> is found from: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃' },
        ],
      },
    },
    {
      id: 'eq-parallel',
      type: 'equation',
      data: {
        html: '<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">R<sub>total</sub></span></span> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">R<sub>1</sub></span></span> + <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">R<sub>2</sub></span></span> + ...',
        caption: 'Total resistance in parallel is always LESS than the smallest individual resistance',
      },
    },
    {
      id: 'call-key-parallel',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Rule: Parallel Resistance is Always Less',
        text: 'Adding more resistors in parallel <strong>decreases</strong> total resistance. More paths = easier for current to flow = lower resistance.',
      },
    },
    {
      id: 'svg-parallel',
      type: 'svg',
      data: {
        caption: 'Parallel circuit: same voltage across both resistors; currents I₁ and I₂ flow through separate branches.',
        svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="12">
  <!-- Battery left -->
  <rect x="10" y="80" width="30" height="50" rx="4" fill="#78350f" stroke="#f59e0b" stroke-width="2"/>
  <text x="25" y="108" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="10">EMF</text>
  <!-- Top wire -->
  <line x1="40" y1="88" x2="330" y2="88" stroke="#374151" stroke-width="2"/>
  <!-- Bottom wire -->
  <line x1="40" y1="122" x2="330" y2="122" stroke="#374151" stroke-width="2"/>
  <!-- Junction right -->
  <line x1="330" y1="88" x2="330" y2="122" stroke="#374151" stroke-width="2"/>

  <!-- Branch 1 R1 (top) -->
  <line x1="130" y1="88" x2="130" y2="60" stroke="#374151" stroke-width="1.5"/>
  <line x1="250" y1="88" x2="250" y2="60" stroke="#374151" stroke-width="1.5"/>
  <line x1="130" y1="60" x2="250" y2="60" stroke="#374151" stroke-width="1.5"/>
  <rect x="158" y="50" width="66" height="20" rx="4" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="191" y="64" text-anchor="middle" fill="#1d4ed8" font-weight="bold">R₁</text>

  <!-- Branch 2 R2 (bottom) -->
  <line x1="130" y1="122" x2="130" y2="150" stroke="#374151" stroke-width="1.5"/>
  <line x1="250" y1="122" x2="250" y2="150" stroke="#374151" stroke-width="1.5"/>
  <line x1="130" y1="150" x2="250" y2="150" stroke="#374151" stroke-width="1.5"/>
  <rect x="158" y="140" width="66" height="20" rx="4" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="191" y="155" text-anchor="middle" fill="#1d4ed8" font-weight="bold">R₂</text>

  <!-- Junctions dots -->
  <circle cx="130" cy="88" r="4" fill="#374151"/>
  <circle cx="250" cy="88" r="4" fill="#374151"/>
  <circle cx="130" cy="122" r="4" fill="#374151"/>
  <circle cx="250" cy="122" r="4" fill="#374151"/>

  <!-- Current arrows -->
  <defs>
    <marker id="parr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <path d="M0,0 L0,7 L7,3.5 z" fill="#6366f1"/>
    </marker>
  </defs>
  <line x1="50" y1="88" x2="125" y2="88" stroke="#6366f1" stroke-width="1.5" marker-end="url(#parr)"/>
  <text x="77" y="82" fill="#6366f1" font-size="10">I_total</text>
  <text x="155" y="50" fill="#374151" font-size="10">I₁ →</text>
  <text x="155" y="148" fill="#374151" font-size="10">I₂ →</text>

  <!-- Same voltage label -->
  <text x="190" y="185" text-anchor="middle" fill="#64748b" font-size="10">V same across both branches &nbsp;|&nbsp; I_total = I₁ + I₂</text>
</svg>`,
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'Two resistors, R₁ = 6 Ω and R₂ = 3 Ω, are connected in parallel to a 6 V supply.\n\n1/R_total = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 → R_total = 2 Ω\n\nI_total = V/R = 6/2 = 3 A\nI₁ = 6/6 = 1 A (through 6 Ω)\nI₂ = 6/3 = 2 A (through 3 Ω)\nCheck: 1 + 2 = 3 A ✓',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Parallel circuit: same voltage across all branches; currents add up to total; 1/R = 1/R₁ + 1/R₂; R_total is always less than the smallest branch resistance.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Parallel: same V, I_total = I₁ + I₂, 1/R_total = 1/R₁ + 1/R₂; R decreases when branches added.',
    cues: [
      { id: 'cue-1', blockId: 'list-rules', prompt: 'State the three rules of a parallel circuit.', answer: '1. Same voltage across all branches. 2. Total current = sum of branch currents. 3. 1/R_total = 1/R₁ + 1/R₂ + ...' },
      { id: 'cue-2', blockId: 'call-key-parallel', prompt: 'What happens to total resistance when you add a component in parallel?', answer: 'Total resistance decreases — there are more paths so current flows more easily.' },
      { id: 'cue-3', blockId: 'call-worked', prompt: 'Two 10 Ω resistors are in parallel. Find the total resistance.', answer: '1/R = 1/10 + 1/10 = 2/10, so R = 5 Ω.' },
      { id: 'cue-4', blockId: 'para-parallel', prompt: 'What advantage does a parallel circuit have over a series circuit in household wiring?', answer: 'Each appliance has the full supply voltage, and failure of one does not affect others (unlike series where all stop).' },
    ],
  },
  evidence: [],
  mentions: [],
};
