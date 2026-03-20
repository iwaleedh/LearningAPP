export const note_olevel_physics_1_4_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-4-6-circular-motion.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe circular motion; explain that centripetal force is directed towards the centre of the circle; identify factors that affect circular motion speed.' },
    },
    {
      id: 'h-circular',
      type: 'heading',
      data: { text: 'Motion in a Circle', level: 2 },
    },
    {
      id: 'para-circular',
      type: 'paragraph',
      data: { text: 'When an object moves in a circle at constant speed, it is <strong>continuously changing direction</strong> — which means it is always accelerating. This acceleration is directed <em>towards the centre</em> of the circle. A force must therefore act towards the centre: this is the <strong>centripetal force</strong>.' },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Centripetal Force',
        text: 'The resultant force directed towards the centre of a circular path that keeps an object moving in a circle.<br><br>• Greater mass → greater centripetal force needed<br>• Greater speed → greater centripetal force needed<br>• Smaller radius → greater centripetal force needed',
      },
    },
    {
      id: 'svg-circular',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="220" fill="#1c3a64" rx="10"/>
  <text x="220" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">Circular Motion and Centripetal Force</text>
  <!-- Circle path -->
  <circle cx="180" cy="115" r="75" fill="none" stroke="#d1d5db" stroke-width="2" stroke-dasharray="6,4"/>
  <!-- Centre dot -->
  <circle cx="180" cy="115" r="5" fill="#374151"/>
  <text x="190" y="112" font-size="11" fill="#374151">Centre</text>
  <!-- Object on circle (top) -->
  <circle cx="180" cy="40" r="10" fill="#6366f1"/>
  <!-- Centripetal force arrow (towards centre) -->
  <line x1="180" y1="50" x2="180" y2="102" stroke="#ef4444" stroke-width="2.5"/>
  <polygon points="180,102 176,93 184,93" fill="#ef4444"/>
  <text x="188" y="80" font-size="11" fill="#ef4444">Centripetal force</text>
  <!-- Velocity arrow (tangent) -->
  <line x1="180" y1="40" x2="220" y2="40" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="220,40 212,36 212,44" fill="#2563eb"/>
  <text x="225" y="44" font-size="11" fill="#2563eb">v (velocity)</text>
  <!-- Arrow showing tangential velocity at another point -->
  <circle cx="255" cy="115" r="10" fill="#6366f1"/>
  <line x1="255" y1="115" x2="255" y2="150" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="255,150 251,141 259,141" fill="#2563eb"/>
  <text x="262" y="140" font-size="11" fill="#2563eb">v</text>
  <line x1="245" y1="115" x2="195" y2="115" stroke="#ef4444" stroke-width="2.5"/>
  <polygon points="195,115 203,111 203,119" fill="#ef4444"/>
  <text x="205" y="108" font-size="11" fill="#ef4444">F<tspan baseline-shift="sub" font-size="9">c</tspan></text>
  <!-- Examples column -->
  <rect x="310" y="40" width="120" height="150" fill="#1e293b" stroke="#e5e7eb" stroke-width="1" rx="6"/>
  <text x="370" y="58" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">Examples</text>
  <text x="320" y="78" font-size="10" fill="#374151">🌎 Satellite</text>
  <text x="320" y="94" font-size="10" fill="#6b7280">Gravity = centripetal</text>
  <text x="320" y="115" font-size="10" fill="#374151">🚗 Car on a bend</text>
  <text x="320" y="131" font-size="10" fill="#6b7280">Friction = centripetal</text>
  <text x="320" y="152" font-size="10" fill="#374151">🪀 Ball on a string</text>
  <text x="320" y="168" font-size="10" fill="#6b7280">Tension = centripetal</text>
</svg>`,
        caption: 'Centripetal force always points toward the centre; velocity is always tangential (at 90°).',
      },
    },
    {
      id: 'h-examples',
      type: 'heading',
      data: { text: 'Centripetal Force in Practice', level: 2 },
    },
    {
      id: 'comparisonTable-circular',
      type: 'comparisonTable',
      data: {
        caption: 'What provides the centripetal force in different situations',
        headers: ['Situation', 'What provides centripetal force'],
        rows: [
          ['Satellite orbiting Earth', 'Gravity from Earth'],
          ['Car turning a corner', 'Friction between tyres and road'],
          ['Ball on a string (whirled)', 'Tension in the string'],
          ['Electron in orbit (model)', 'Electrostatic attraction to nucleus'],
        ],
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: "Centrifugal Force" is NOT Real',
        text: '"Centrifugal force" (the apparent outward force) is NOT a real force — it is a sensation felt by the rotating object. In all exam answers, describe the <em>centripetal</em> (inward) force pointing towards the centre of the circle.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Circular motion requires a centripetal force directed towards the centre. Speed is constant but velocity changes direction (so acceleration exists). Centripetal force increases with mass, speed, and decreasing radius. Examples: gravity (satellites), friction (cars), tension (strings).' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Centripetal force acts towards centre of circle; needed to change direction (not speed). Bigger speed/mass or smaller radius → greater centripetal force needed.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'What is centripetal force, and in which direction does it act?', answer: 'The resultant force that keeps an object moving in a circle. It acts towards the centre of the circular path.' },
      { id: 'cue-2', blockId: 'para-circular', prompt: 'Why does an object moving in a circle at constant speed still have acceleration?', answer: 'Because it is continuously changing direction — acceleration = rate of change of velocity (a vector), so changing direction means changing velocity, which requires acceleration.' },
      { id: 'cue-3', blockId: 'comparisonTable-circular', prompt: 'What force provides the centripetal force for a car going around a roundabout?', answer: 'Friction between the tyres and the road, directed towards the centre of the roundabout.' },
      { id: 'cue-4', blockId: 'call-tip', prompt: 'A student says "the ball on a string experiences an outward centrifugal force". Is this correct? Explain.', answer: 'No. Centrifugal force is not a real force. The ball experiences only the real centripetal tension in the string, directed inward toward the hand.' },
    ],
  },
  evidence: [],
  mentions: [],
};
