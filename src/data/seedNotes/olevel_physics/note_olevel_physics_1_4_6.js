export const note_olevel_physics_1_4_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-4-7-friction.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe friction as a force opposing relative motion; explain static and dynamic friction; describe the effect of air resistance on falling objects and terminal velocity.' },
    },
    {
      id: 'h-friction',
      type: 'heading',
      data: { text: 'What is Friction?', level: 2 },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Friction',
        text: '<strong>Friction</strong> is a contact force that opposes relative motion between two surfaces in contact. It acts parallel to the surfaces and in the direction opposite to motion (or intended motion).',
      },
    },
    {
      id: 'para-types',
      type: 'paragraph',
      data: { text: 'Friction exists between solid surfaces as well as between an object and a fluid (air or liquid). The amount of friction depends on the <strong>surface texture</strong> (rough surfaces have more friction) and the <strong>normal force</strong> pressing the surfaces together, but NOT on the area of contact.' },
    },
    {
      id: 'h-air',
      type: 'heading',
      data: { text: 'Air Resistance (Drag)', level: 2 },
    },
    {
      id: 'para-air',
      type: 'paragraph',
      data: { text: '<strong>Air resistance</strong> (drag) is friction between an object and air. It increases with <strong>speed</strong> and with the object\'s <strong>cross-sectional area</strong>. As an object falls faster, air resistance grows until it equals the weight — at that point the object reaches <strong>terminal velocity</strong>.' },
    },
    {
      id: 'svg-terminal',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="240" fill="#0a2e1a" rx="10"/>
  <text x="220" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">Falling Parachutist — Terminal Velocity</text>
  <!-- Stage 1: just dropped -->
  <rect x="25" y="40" width="90" height="170" fill="#1e293b" stroke="#e5e7eb" stroke-width="1.5" rx="6"/>
  <text x="70" y="58" text-anchor="middle" font-size="10" font-weight="bold" fill="#374151">Stage 1</text>
  <!-- Person -->
  <circle cx="70" cy="100" r="10" fill="#6366f1"/>
  <line x1="70" y1="110" x2="70" y2="140" stroke="#6366f1" stroke-width="2.5"/>
  <!-- Weight arrow (down) -->
  <line x1="70" y1="140" x2="70" y2="170" stroke="#ef4444" stroke-width="2.5"/>
  <polygon points="70,170 66,161 74,161" fill="#ef4444"/>
  <text x="78" y="165" font-size="9" fill="#ef4444">W</text>
  <!-- Drag (small up) -->
  <line x1="70" y1="90" x2="70" y2="75" stroke="#2563eb" stroke-width="1.5"/>
  <polygon points="70,75 66,83 74,83" fill="#2563eb"/>
  <text x="78" y="82" font-size="9" fill="#2563eb">D (small)</text>
  <text x="70" y="200" text-anchor="middle" font-size="9" fill="#374151">W &gt; D</text>
  <text x="70" y="212" text-anchor="middle" font-size="9" fill="#ef4444">Accelerating ↓</text>
  <!-- Stage 2: faster, bigger drag -->
  <rect x="175" y="40" width="90" height="170" fill="#1e293b" stroke="#e5e7eb" stroke-width="1.5" rx="6"/>
  <text x="220" y="58" text-anchor="middle" font-size="10" font-weight="bold" fill="#374151">Stage 2</text>
  <circle cx="220" cy="100" r="10" fill="#6366f1"/>
  <line x1="220" y1="110" x2="220" y2="140" stroke="#6366f1" stroke-width="2.5"/>
  <line x1="220" y1="140" x2="220" y2="170" stroke="#ef4444" stroke-width="2.5"/>
  <polygon points="220,170 216,161 224,161" fill="#ef4444"/>
  <text x="228" y="165" font-size="9" fill="#ef4444">W</text>
  <line x1="220" y1="90" x2="220" y2="62" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="220,62 216,70 224,70" fill="#2563eb"/>
  <text x="228" y="76" font-size="9" fill="#2563eb">D (bigger)</text>
  <text x="220" y="200" text-anchor="middle" font-size="9" fill="#374151">W &gt; D still</text>
  <text x="220" y="212" text-anchor="middle" font-size="9" fill="#f59e0b">Still accelerating ↓</text>
  <!-- Stage 3: terminal velocity -->
  <rect x="325" y="40" width="90" height="170" fill="#1e293b" stroke="#16a34a" stroke-width="2" rx="6"/>
  <text x="370" y="58" text-anchor="middle" font-size="10" font-weight="bold" fill="#374151">Stage 3</text>
  <circle cx="370" cy="100" r="10" fill="#6366f1"/>
  <line x1="370" y1="110" x2="370" y2="140" stroke="#6366f1" stroke-width="2.5"/>
  <line x1="370" y1="140" x2="370" y2="168" stroke="#ef4444" stroke-width="2.5"/>
  <polygon points="370,168 366,158 374,158" fill="#ef4444"/>
  <text x="378" y="163" font-size="9" fill="#ef4444">W</text>
  <line x1="370" y1="90" x2="370" y2="63" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="370,63 366,71 374,71" fill="#2563eb"/>
  <text x="378" y="77" font-size="9" fill="#2563eb">D = W</text>
  <text x="370" y="200" text-anchor="middle" font-size="9" fill="#374151">W = D</text>
  <text x="370" y="212" text-anchor="middle" font-size="9" fill="#16a34a">Terminal velocity</text>
</svg>`,
        caption: 'As speed increases, drag grows until drag = weight → terminal velocity (no acceleration).',
      },
    },
    {
      id: 'list-friction-uses',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Useful friction:</strong> brakes, tyres gripping road, walking, writing.' },
          { text: '<strong>Harmful friction:</strong> engine parts wearing down, energy wasted as heat.' },
          { text: '<strong>Reducing friction:</strong> oil/grease lubricants, ball bearings, smooth surfaces, streamlining.' },
        ],
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Terminal Velocity Exam Questions',
        text: 'At terminal velocity: <strong>resultant force = 0</strong>, <strong>acceleration = 0</strong>, but <strong>velocity is constant and NOT zero</strong>. Opening a parachute increases area → drag increases → drag > weight → decelerates to new lower terminal velocity.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Friction opposes relative motion; depends on surfaces and normal force. Air resistance (drag) increases with speed. Terminal velocity reached when drag = weight (constantly at rest net force). Friction: useful (brakes, grip) and harmful (heat, wear); reduce with lubrication and streamlining.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Friction opposes motion. Drag increases with speed → terminal velocity when drag = weight (net force = 0).',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'Define friction and state the direction it acts.', answer: 'Friction is a contact force that opposes relative motion between surfaces. It acts parallel to the surfaces, opposite to the direction of motion (or intended motion).' },
      { id: 'cue-2', blockId: 'para-air', prompt: 'What two factors increase air resistance on a falling object?', answer: 'Increasing speed and increasing cross-sectional area.' },
      { id: 'cue-3', blockId: 'svg-terminal', prompt: 'Explain what terminal velocity is and why it is reached.', answer: 'Terminal velocity is the constant (maximum) velocity of a falling object when drag equals weight — net force = 0, so acceleration = 0, speed remains constant.' },
      { id: 'cue-4', blockId: 'call-tip', prompt: 'A skydiver opens their parachute. Describe what happens to their speed and the forces immediately after opening.', answer: 'Opening increases drag > weight → net upward force → deceleration. Speed decreases until drag falls back to equal weight at a new (lower) terminal velocity.' },
    ],
  },
  evidence: [],
  mentions: [],
};
