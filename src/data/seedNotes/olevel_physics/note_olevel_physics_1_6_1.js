export const note_olevel_physics_1_6_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-6-2-impulse.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define impulse as the product of force and time; state that impulse equals the change in momentum; use impulse to explain safety features and solve problems.' },
    },
    {
      id: 'h-impulse',
      type: 'heading',
      data: { text: 'Impulse', level: 2 },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Impulse',
        text: '<strong>Impulse</strong> is the product of force and the time for which it acts. It equals the change in momentum of the object.<br><br><strong>Impulse = F × t = Δp = m(v − u)</strong><br>Units: N·s (= kg·m/s)',
      },
    },
    {
      id: 'eq-impulse',
      type: 'equation',
      data: {
        html: 'F × t = m(v − u) = Δp',
        caption: 'Impulse (N·s) = change in momentum (kg·m/s). Rearranging: F = Δp/t = ma (Newton\'s 2nd Law).',
      },
    },
    {
      id: 'h-safety',
      type: 'heading',
      data: { text: 'Impulse and Safety Features', level: 2 },
    },
    {
      id: 'para-safety',
      type: 'paragraph',
      data: { text: 'In a collision, the change in momentum is fixed (determined by the initial and final speeds). But the impact force depends on the <em>time over which the collision occurs</em>. Increasing impact time reduces peak force, which reduces injury:' },
    },
    {
      id: 'list-safety',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Crumple zones</strong> in cars: increase collision time → smaller peak force on passengers.' },
          { text: '<strong>Airbags:</strong> extend time of contact with head → reduce force.' },
          { text: '<strong>Crash mats and padding:</strong> soft materials deform, extending impact time.' },
          { text: '<strong>Catching a ball:</strong> pulling hands back as ball is caught increases time → decreases impact force on hands.' },
        ],
      },
    },
    {
      id: 'svg-impulse',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="200" fill="#0a2e1a" rx="10"/>
  <text x="220" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">Impulse = Area under F–t Graph</text>
  <!-- Axes -->
  <line x1="55" y1="155" x2="400" y2="155" stroke="#374151" stroke-width="2"/>
  <line x1="55" y1="155" x2="55" y2="30" stroke="#374151" stroke-width="2"/>
  <polygon points="400,155 392,151 392,159" fill="#374151"/>
  <polygon points="55,30 51,38 59,38" fill="#374151"/>
  <text x="405" y="159" font-size="11" fill="#374151">t (s)</text>
  <text x="40" y="28" font-size="11" fill="#374151">F (N)</text>
  <!-- Hard collision: tall narrow triangle -->
  <path d="M 80 155 L 100 155 L 130 40 L 160 155 Z" fill="#ef4444" opacity="0.5" stroke="#ef4444" stroke-width="2"/>
  <text x="120" y="170" text-anchor="middle" font-size="10" fill="#ef4444">Short time, large F</text>
  <!-- Soft collision: shorter wider shape -->
  <path d="M 220 155 L 230 155 L 255 95 L 310 95 L 335 155 Z" fill="#2563eb" opacity="0.4" stroke="#2563eb" stroke-width="2"/>
  <text x="280" y="170" text-anchor="middle" font-size="10" fill="#2563eb">Longer time, smaller F</text>
  <!-- Equal area labels -->
  <text x="120" y="50" text-anchor="middle" font-size="12" fill="#ef4444">Same</text>
  <text x="285" y="85" text-anchor="middle" font-size="12" fill="#2563eb">area</text>
  <text x="200" y="135" text-anchor="middle" font-size="11" fill="#374151">= same impulse (Δp)</text>
  <!-- Arrow connecting -->
  <line x1="155" y1="95" x2="210" y2="105" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,3"/>
</svg>`,
        caption: 'Both shaded areas (impulse = Δp) are equal. Longer collision time → smaller peak force.',
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A 0.5 kg ball travelling at 12 m/s hits a wall and rebounds at 8 m/s. The contact time is 0.02 s. Calculate the average force on the ball.<br><br>Δp = m(v − u) = 0.5 × (−8 − 12) = 0.5 × (−20) = −10 N·s (taking initial direction as +ve)<br><br>|F| = |Δp| ÷ t = 10 ÷ 0.02 = <strong>500 N</strong>',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Sign Convention for Rebound',
        text: 'When an object bounces back, the velocity reverses sign. If initial = +12 m/s, rebound = −8 m/s. Δp = m(v−u) = 0.5(−8−12) = −10 N·s. The magnitude of impulse is 10 N·s. Always define a positive direction first.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Impulse = Ft = Δp = m(v−u). Same impulse can be achieved with large force over short time or small force over longer time. Safety features (crumple zones, airbags) increase collision time → reduce peak force → less injury. Impulse = area under F–t graph.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Impulse = Ft = Δp. More time → smaller force for same change in momentum (basis of safety features).',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'Define impulse and state its formula and units.', answer: 'Impulse = force × time = F × t (N·s). Also equal to change in momentum Δp = m(v−u) (kg·m/s).' },
      { id: 'cue-2', blockId: 'list-safety', prompt: 'Explain in terms of impulse how crumple zones reduce injury in car crashes.', answer: 'Crumple zones increase the time over which the collision occurs. Since impulse (Δp) is fixed, increasing time reduces the average force on passengers, causing less injury.' },
      { id: 'cue-3', blockId: 'call-worked', prompt: 'A 2 kg object changes velocity from 5 m/s to 1 m/s in 0.4 s. What average force acted on it?', answer: 'Δp = 2 × (1−5) = −8 N·s. F = Δp/t = −8/0.4 = −20 N (20 N opposing motion).' },
      { id: 'cue-4', blockId: 'svg-impulse', prompt: 'What does the area under a force–time graph represent?', answer: 'The impulse (F × t), which equals the change in momentum (Δp).' },
    ],
  },
  evidence: [],
  mentions: [],
};
