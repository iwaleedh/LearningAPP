export const note_olevel_physics_1_6_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-6-1-momentum-conservation.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define momentum; state and apply the law of conservation of momentum to collisions and explosions; distinguish between elastic and inelastic collisions.' },
    },
    {
      id: 'h-momentum',
      type: 'heading',
      data: { text: 'Momentum', level: 2 },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Momentum',
        text: '<strong>Momentum</strong> is the product of an object\'s mass and velocity. It is a <strong>vector</strong> quantity (has direction).<br><br><strong>p = m × v</strong><br>p = momentum (kg·m/s), m = mass (kg), v = velocity (m/s)',
      },
    },
    {
      id: 'eq-momentum',
      type: 'equation',
      data: {
        html: 'p = m × v',
        caption: 'p = momentum (kg·m/s), m = mass (kg), v = velocity (m/s). Direction is the same as velocity.',
      },
    },
    {
      id: 'h-conservation',
      type: 'heading',
      data: { text: 'Conservation of Momentum', level: 2 },
    },
    {
      id: 'call-key2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Law of Conservation of Momentum',
        text: 'In a <strong>closed system</strong> (no external forces), the <strong>total momentum before a collision</strong> equals the <strong>total momentum after</strong>.<br><br>Total p before = Total p after<br>(m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂)',
      },
    },
    {
      id: 'svg-collision',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="200" fill="#fef9f0" rx="10"/>
  <text x="220" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">Conservation of Momentum — Collision</text>
  <!-- Before -->
  <text x="100" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#374151">BEFORE</text>
  <!-- Object A moving right -->
  <rect x="20" y="60" width="60" height="40" fill="#6366f1" rx="4"/>
  <text x="50" y="84" text-anchor="middle" font-size="11" fill="white">A: 4 kg</text>
  <line x1="80" y1="80" x2="105" y2="80" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="105,80 97,76 97,84" fill="#2563eb"/>
  <text x="92" y="72" font-size="10" fill="#2563eb">u=6 m/s</text>
  <!-- Object B stationary -->
  <rect x="140" y="60" width="60" height="40" fill="#94a3b8" rx="4"/>
  <text x="170" y="84" text-anchor="middle" font-size="11" fill="white">B: 2 kg</text>
  <text x="170" y="52" text-anchor="middle" font-size="10" fill="#374151">u=0</text>
  <text x="110" y="130" font-size="11" fill="#374151">p_total = 4×6 + 2×0 = 24 kg·m/s</text>
  <!-- After -->
  <text x="330" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#374151">AFTER (together)</text>
  <rect x="275" y="60" width="110" height="40" fill="#6366f1" rx="4"/>
  <text x="330" y="84" text-anchor="middle" font-size="11" fill="white">A + B: 6 kg</text>
  <line x1="385" y1="80" x2="415" y2="80" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="415,80 407,76 407,84" fill="#2563eb"/>
  <text x="400" y="72" font-size="10" fill="#2563eb">v = ?</text>
  <text x="295" y="130" font-size="11" fill="#374151">p_total = 6×v = 24  →  v = 4 m/s</text>
  <!-- Arrow showing direction preserved -->
  <line x1="240" y1="78" x2="268" y2="78" stroke="#f59e0b" stroke-width="2.5"/>
  <polygon points="268,78 260,74 260,82" fill="#f59e0b"/>
  <text x="254" y="68" text-anchor="middle" font-size="10" fill="#f59e0b">collision</text>
  <!-- Momentum preserved label -->
  <rect x="80" y="160" width="280" height="28" fill="#fef3c7" rx="6"/>
  <text x="220" y="178" text-anchor="middle" font-size="11" fill="#92400e">Momentum conserved: 24 = 24 kg·m/s ✓</text>
</svg>`,
        caption: 'Before: A (4 kg at 6 m/s) hits stationary B (2 kg). After: they stick → v = 4 m/s.',
      },
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Collision Types', level: 2 },
    },
    {
      id: 'comparisonTable-collisions',
      type: 'comparisonTable',
      data: {
        caption: 'Elastic vs inelastic collisions',
        headers: ['Type', 'Kinetic energy', 'Momentum', 'Example'],
        rows: [
          ['Elastic', 'Conserved', 'Conserved', 'Ideal billiard ball collision'],
          ['Inelastic', 'NOT conserved (some lost as heat/sound)', 'Conserved', 'Car crash, objects sticking together'],
          ['Explosion', 'KE increases (from stored energy)', 'Conserved (total = 0)', 'Rocket launch, gun recoil'],
        ],
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Sign Conventions',
        text: 'Assign a positive direction (e.g. rightward = +) and a negative direction. A ball moving left in a -10 m/s direction has p = m × (−10). Add momenta as signed numbers. The total before = total after (including sign).',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Momentum p = mv (kg·m/s); vector quantity. Conservation of momentum: total p before = total p after in a closed system. Elastic: KE conserved. Inelastic: KE not conserved but momentum still conserved. Explosions: total p = 0 (equal and opposite momenta).' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'p = mv; total momentum conserved in closed systems. Inelastic collisions lose KE but conserve p.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'Define momentum and give its unit and direction property.', answer: 'p = mv (kg·m/s). Momentum is a vector — it has the same direction as velocity.' },
      { id: 'cue-2', blockId: 'call-key2', prompt: 'State the law of conservation of momentum.', answer: 'In a closed system, the total momentum before a collision equals the total momentum after. (No net external force required.)' },
      { id: 'cue-3', blockId: 'svg-collision', prompt: 'A 3 kg trolley at 4 m/s collides with a stationary 1 kg trolley and they stick together. Find their common velocity.', answer: 'Total p before = 3×4 + 1×0 = 12 kg·m/s. After: (3+1)×v = 12. v = 3 m/s.' },
      { id: 'cue-4', blockId: 'comparisonTable-collisions', prompt: 'Explain why kinetic energy is not conserved in an inelastic collision even though momentum is.', answer: 'Some kinetic energy is converted to other forms (heat, sound, deformation) during the collision. Momentum is conserved because Newton\'s 3rd Law ensures equal and opposite impulses act on the objects, but no law requires KE to be conserved.' },
    ],
  },
  evidence: [],
  mentions: [],
};
