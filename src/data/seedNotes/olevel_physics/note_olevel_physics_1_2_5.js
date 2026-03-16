export const note_olevel_physics_1_2_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-2-6-freefall.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe free fall as acceleration under gravity alone; state g ≈ 10 m/s²; calculate velocity and distance during free fall; explain terminal velocity in terms of air resistance and weight.' },
    },
    {
      id: 'h-freefall',
      type: 'heading',
      data: { text: 'Free Fall', level: 2 },
    },
    {
      id: 'para-def',
      type: 'paragraph',
      data: { text: '<strong>Free fall</strong> is the motion of an object when the only force acting on it is gravitational attraction. In the absence of air resistance, all objects near Earth\'s surface — regardless of mass — accelerate downward at the same rate: <strong>g = 10 m/s²</strong>.' },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Acceleration Due to Gravity',
        text: 'g = 10 m/s² (Cambridge IGCSE value)<br>Every second, velocity increases by 10 m/s in the downward direction (if starting from rest).',
      },
    },
    {
      id: 'eq-freefall-v',
      type: 'equation',
      data: {
        html: 'v = g × t',
        caption: 'Velocity of a falling object (starting from rest, no air resistance); v in m/s, t in s',
      },
    },
    {
      id: 'eq-freefall-s',
      type: 'equation',
      data: {
        html: 's = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span> × g × t²',
        caption: 'Distance fallen from rest; s in m, g = 10 m/s², t in s',
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Free Fall',
        text: '<strong>Q:</strong> A ball is dropped from rest. Calculate its velocity and distance fallen after 3 s (ignore air resistance).<br><br><strong>Velocity:</strong> v = g × t = 10 × 3 = <strong>30 m/s</strong><br><strong>Distance:</strong> s = ½ × g × t² = ½ × 10 × 9 = <strong>45 m</strong>',
      },
    },
    {
      id: 'h-terminal',
      type: 'heading',
      data: { text: 'Terminal Velocity', level: 2 },
    },
    {
      id: 'para-terminal',
      type: 'paragraph',
      data: { text: 'In real situations, air resistance acts upward on a falling object. As speed increases, air resistance increases. The object accelerates at a progressively smaller rate. Eventually, when air resistance equals weight, the forces are balanced — resulting in <strong>terminal velocity</strong>: constant maximum speed with zero acceleration.' },
    },
    {
      id: 'svg-terminal',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="300" fill="#faf5ff" rx="10"/>
  <text x="220" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#4c1d95">Terminal Velocity: Speed–Time Graph for a Falling Object</text>
  <!-- Axes -->
  <line x1="60" y1="250" x2="400" y2="250" stroke="#374151" stroke-width="2"/>
  <line x1="60" y1="50" x2="60" y2="250" stroke="#374151" stroke-width="2"/>
  <text x="230" y="278" text-anchor="middle" font-size="12" fill="#374151">Time (s)</text>
  <text x="18" y="155" text-anchor="middle" font-size="12" fill="#374151" transform="rotate(-90 18 155)">Speed (m/s)</text>
  <!-- Curve approaching terminal velocity -->
  <path d="M 60 250 Q 140 180 200 140 Q 260 105 310 95 Q 350 90 400 88" stroke="#7c3aed" stroke-width="3" fill="none"/>
  <!-- Terminal velocity line -->
  <line x1="60" y1="88" x2="400" y2="88" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="6,3"/>
  <text x="405" y="92" font-size="11" fill="#dc2626">Terminal velocity</text>
  <!-- Force arrows at 3 points -->
  <!-- Point 1: just dropped -->
  <circle cx="100" cy="240" r="4" fill="#7c3aed"/>
  <line x1="100" y1="236" x2="100" y2="210" stroke="#ef4444" stroke-width="2"/>
  <polygon points="100,210 96,218 104,218" fill="#ef4444"/>
  <text x="115" y="226" font-size="9" fill="#ef4444">W</text>
  <text x="115" y="238" font-size="9" fill="#3b82f6">↑ Fₐ small</text>
  <!-- Point 2: mid-fall -->
  <circle cx="200" cy="140" r="4" fill="#7c3aed"/>
  <line x1="200" y1="136" x2="200" y2="110" stroke="#ef4444" stroke-width="2"/>
  <polygon points="200,110 196,118 204,118" fill="#ef4444"/>
  <text x="210" y="126" font-size="9" fill="#ef4444">W (same)</text>
  <line x1="200" y1="144" x2="200" y2="164" stroke="#3b82f6" stroke-width="2"/>
  <polygon points="200,164 196,154 204,154" fill="#3b82f6"/>
  <text x="210" y="160" font-size="9" fill="#3b82f6">Fₐ larger</text>
  <!-- Labels below graph -->
  <text x="220" y="295" text-anchor="middle" font-size="11" fill="#6b7280">Curve gets shallower as Fₐ (air resistance) approaches W (weight)</text>
</svg>`,
        caption: 'Terminal velocity is reached when air resistance (upward) equals weight (downward), giving zero net force',
      },
    },
    {
      id: 'list-terminal-stages',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Object begins to fall — weight acts down, small air resistance upward → net force down → accelerates' },
          { text: 'Speed increases → air resistance increases → net force decreases → accelerates but more slowly' },
          { text: 'Eventually air resistance = weight → net force = 0 → constant terminal velocity' },
        ],
      },
    },
    {
      id: 'call-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Parachutist Question',
        text: 'A common exam scenario: when a parachutist opens their parachute, air resistance suddenly increases greatly, so net upward force → rapid deceleration. Then they settle to a new, slower terminal velocity. Describe this in terms of forces, not just "they slow down".',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Free fall: g = 10 m/s² downward, v = gt, s = ½gt² (from rest). Terminal velocity occurs when air resistance equals weight — net force = 0, constant speed, no acceleration. Curve on v–t graph flattens at terminal velocity.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'g = 10 m/s² in free fall; terminal velocity when air resistance = weight (net force = 0).',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'State the value of g used at IGCSE and explain what it means physically.', answer: 'g = 10 m/s². Every second, an object in free fall gains 10 m/s of downward velocity.' },
      { id: 'cue-2', blockId: 'call-worked', prompt: 'An object is dropped from rest. Find its speed and distance fallen after 4 s.', answer: 'v = 10 × 4 = 40 m/s; s = ½ × 10 × 16 = 80 m.' },
      { id: 'cue-3', blockId: 'para-terminal', prompt: 'Explain why terminal velocity is reached as an object falls.', answer: 'Increasing speed → increasing air resistance → net downward force decreases → smaller acceleration. When air resistance = weight, net force = 0 → constant terminal velocity.' },
      { id: 'cue-4', blockId: 'svg-terminal', prompt: 'Describe the shape of the v–t graph for a falling object experiencing air resistance.', answer: 'Starts steep (large acceleration, small air resistance), gradually curves and flattens (decreasing acceleration), approaches a horizontal line at terminal velocity.' },
    ],
  },
  evidence: [],
  mentions: [],
};
