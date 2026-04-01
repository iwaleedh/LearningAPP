export const note_olevel_physics_1_4_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-4-1-resultant-forces.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define force and state its SI unit; find the resultant of forces acting along a line and at angles; distinguish between contact and non-contact forces.' },
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What is a Force?', level: 2 },
    },
    {
      id: 'para-what',
      type: 'paragraph',
      data: { text: 'A <strong>force</strong> is a push or pull that can change an object\'s speed, direction, or shape. Forces are <strong>vectors</strong> — they have both magnitude and direction. The SI unit of force is the <strong>newton (N)</strong>.' },
    },
    {
      id: 'call-key-types',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Types of Force',
        text: '<strong>Contact forces</strong> (objects must touch): friction, normal contact force, tension, compression.<br><br><strong>Non-contact forces</strong> (act at a distance): gravitational force (weight), magnetic force, electrostatic force.',
      },
    },
    {
      id: 'h-resultant',
      type: 'heading',
      data: { text: 'Resultant Force', level: 2 },
    },
    {
      id: 'para-resultant',
      type: 'paragraph',
      data: { text: 'The <strong>resultant force</strong> (or net force) is the single force that has the same effect as all forces acting together. Forces can be added by considering their directions:' },
    },
    {
      id: 'list-adding',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Same direction:</strong> add magnitudes. (10 N right + 6 N right = 16 N right)' },
          { text: '<strong>Opposite directions:</strong> subtract. (10 N right + 6 N left = 4 N right)' },
          { text: '<strong>At right angles:</strong> use Pythagoras\' theorem. (3 N + 4 N = 5 N resultant)' },
        ],
      },
    },
    {
      id: 'svg-resultant',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="240" fill="#532407" rx="10"/>
  <text x="220" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">Resultant Forces</text>
  <!-- Case 1: same direction -->
  <text x="10" y="55" font-size="12" fill="#374151" font-weight="bold">Case 1: Same direction</text>
  <rect x="150" y="65" width="24" height="24" fill="#94a3b8" rx="3"/>
  <line x1="174" y1="77" x2="210" y2="77" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="210,77 203,73 203,81" fill="#2563eb"/>
  <text x="192" y="70" text-anchor="middle" font-size="10" fill="#2563eb">10 N</text>
  <line x1="210" y1="77" x2="235" y2="77" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="235,77 228,73 228,81" fill="#2563eb"/>
  <text x="222" y="70" text-anchor="middle" font-size="10" fill="#2563eb">6 N</text>
  <line x1="150" y1="77" x2="235" y2="77" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="250" y="81" font-size="11" fill="#ef4444">= 16 N →</text>
  <!-- Case 2: opposite direction -->
  <text x="10" y="115" font-size="12" fill="#374151" font-weight="bold">Case 2: Opposite directions</text>
  <rect x="150" y="125" width="24" height="24" fill="#94a3b8" rx="3"/>
  <line x1="174" y1="137" x2="210" y2="137" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="210,137 203,133 203,141" fill="#2563eb"/>
  <text x="192" y="130" text-anchor="middle" font-size="10" fill="#2563eb">10 N</text>
  <line x1="150" y1="137" x2="126" y2="137" stroke="#1d4ed8" stroke-width="2.5"/>
  <polygon points="126,137 133,133 133,141" fill="#1d4ed8"/>
  <text x="138" y="130" text-anchor="middle" font-size="10" fill="#1d4ed8">6 N</text>
  <text x="250" y="141" font-size="11" fill="#ef4444">= 4 N →</text>
  <!-- Case 3: right angles -->
  <text x="10" y="180" font-size="12" fill="#374151" font-weight="bold">Case 3: Right angles</text>
  <rect x="150" y="185" width="12" height="12" fill="#94a3b8" rx="2"/>
  <line x1="162" y1="191" x2="195" y2="191" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="195,191 188,187 188,195" fill="#2563eb"/>
  <text x="178" y="186" text-anchor="middle" font-size="10" fill="#2563eb">3 N</text>
  <line x1="156" y1="185" x2="156" y2="160" stroke="#1d4ed8" stroke-width="2.5"/>
  <polygon points="156,160 152,167 160,167" fill="#1d4ed8"/>
  <text x="166" y="172" font-size="10" fill="#1d4ed8">4 N</text>
  <line x1="156" y1="185" x2="195" y2="160" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="260" y="175" font-size="11" fill="#ef4444">= 5 N (Pythagoras)</text>
</svg>`,
        caption: 'Three cases for combining forces: same direction, opposite, and right angles.',
      },
    },
    {
      id: 'h-balance',
      type: 'heading',
      data: { text: 'Balanced and Unbalanced Forces', level: 2 },
    },
    {
      id: 'list-balance',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Balanced (resultant = 0 N):</strong> object stays stationary or moves at constant velocity (Newton\'s 1st law).' },
          { text: '<strong>Unbalanced (resultant ≠ 0 N):</strong> object accelerates in direction of resultant (Newton\'s 2nd law: F = ma).' },
        ],
      },
    },
    {
      id: 'call-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Drawing Force Diagrams',
        text: 'Always draw force arrows starting from the centre of the object, with length proportional to magnitude. Label each arrow with the force name and value in N. The resultant is the vector sum of all arrows.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Force is a push/pull in newtons (N); it is a vector. Contact forces require touch (friction, tension); non-contact forces act at a distance (gravity, magnetic). Add collinear forces algebraically. For perpendicular forces use Pythagoras. Balanced forces → constant velocity; unbalanced → acceleration.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Resultant force = vector sum of all forces. Zero resultant → constant velocity; non-zero → acceleration.',
    cues: [
      { id: 'cue-1', blockId: 'call-key-types', prompt: 'Give two examples each of contact forces and non-contact forces.', answer: 'Contact: friction, tension (or normal reaction, compression). Non-contact: gravity/weight, magnetic force (or electrostatic force).' },
      { id: 'cue-2', blockId: 'para-resultant', prompt: 'Two forces act on a box: 15 N east and 9 N west. What is the resultant force?', answer: '15 − 9 = 6 N east.' },
      { id: 'cue-3', blockId: 'svg-resultant', prompt: 'Forces of 5 N and 12 N act at 90° to each other. Find the resultant.', answer: '√(5² + 12²) = √(25 + 144) = √169 = 13 N.' },
      { id: 'cue-4', blockId: 'list-balance', prompt: 'A car travels at constant velocity on a straight road. What can you say about the resultant force?', answer: 'The resultant force is zero — the forces are balanced (thrust = friction + drag).' },
    ],
  },
  evidence: [],
  mentions: [],
};
