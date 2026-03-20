export const note_olevel_physics_1_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-1-2-scalars-and-vectors.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Distinguish between scalar and vector quantities; give examples of each; understand that vectors have both magnitude and direction.' },
    },
    {
      id: 'h-definitions',
      type: 'heading',
      data: { text: 'Scalar and Vector Quantities', level: 2 },
    },
    {
      id: 'para-scalar',
      type: 'paragraph',
      data: { text: 'A <strong>scalar quantity</strong> has <em>magnitude only</em> — it is fully described by a number and a unit. No direction is needed. For example, a temperature of 25 °C or a mass of 5 kg are completely described without stating a direction.' },
    },
    {
      id: 'para-vector',
      type: 'paragraph',
      data: { text: 'A <strong>vector quantity</strong> has both <em>magnitude and direction</em>. Without stating the direction, the description is incomplete. For example, "10 m/s" describes a speed, but "10 m/s due north" describes a velocity.' },
    },
    {
      id: 'call-key-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Distinction',
        text: '<strong>Scalar:</strong> magnitude only (e.g. 50 J of energy, 3 kg mass).<br><strong>Vector:</strong> magnitude + direction (e.g. 30 N downward force, 15 m/s northward velocity). Vectors are often represented by arrows — the length shows magnitude, the arrowhead shows direction.',
      },
    },
    {
      id: 'h-examples',
      type: 'heading',
      data: { text: 'Examples of Scalar and Vector Quantities', level: 2 },
    },
    {
      id: 'tbl-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Scalar vs Vector Examples',
        headers: ['Scalar Quantity', 'Vector Counterpart'],
        rows: [
          ['Distance (how far travelled)', 'Displacement (straight-line distance + direction)'],
          ['Speed (how fast)', 'Velocity (speed + direction)'],
          ['Mass (amount of matter)', 'Weight (gravitational force, downward)'],
          ['Energy / Work', 'Force (magnitude + direction of push/pull)'],
          ['Time', '—  (no vector counterpart)'],
          ['Temperature', '— (no vector counterpart)'],
          ['Pressure', '— (no vector counterpart)'],
        ],
      },
    },
    {
      id: 'h-dist-disp',
      type: 'heading',
      data: { text: 'Distance vs Displacement', level: 2 },
    },
    {
      id: 'para-dist-disp',
      type: 'paragraph',
      data: { text: '<strong>Distance</strong> is the total length of the path travelled (scalar). <strong>Displacement</strong> is the straight-line distance from start to finish <em>in a specified direction</em> (vector). If you walk 3 m east then 4 m north, your distance is 7 m but your displacement is 5 m at 53° north of east (by Pythagoras).' },
    },
    {
      id: 'svg-scalarvec',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="420" height="220" fill="#0a2e1a" rx="10"/>
  <text x="210" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#14532d">Distance vs Displacement</text>
  <!-- path walked -->
  <line x1="60" y1="160" x2="200" y2="160" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,3"/>
  <line x1="200" y1="160" x2="200" y2="60" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,3"/>
  <!-- displacement arrow -->
  <line x1="60" y1="160" x2="200" y2="60" stroke="#3b82f6" stroke-width="2.5"/>
  <polygon points="200,60 190,75 205,73" fill="#3b82f6"/>
  <!-- labels -->
  <text x="130" y="180" text-anchor="middle" font-size="12" fill="#b45309">3 m east</text>
  <text x="215" y="115" font-size="12" fill="#b45309">4 m north</text>
  <text x="110" y="100" font-size="12" fill="#1d4ed8" font-weight="bold">5 m (displacement)</text>
  <!-- angle -->
  <path d="M 80 160 A 20 20 0 0 1 80 145" stroke="#3b82f6" stroke-width="1.5" fill="none"/>
  <text x="85" y="148" font-size="10" fill="#1d4ed8">53°</text>
  <!-- start and end dots -->
  <circle cx="60" cy="160" r="5" fill="#16a34a"/>
  <text x="40" y="175" font-size="11" fill="#166534">Start</text>
  <circle cx="200" cy="60" r="5" fill="#dc2626"/>
  <text x="207" y="58" font-size="11" fill="#991b1b">End</text>
  <!-- legend -->
  <line x1="270" y1="130" x2="300" y2="130" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,3"/>
  <text x="308" y="134" font-size="11" fill="#92400e">Distance (7 m total)</text>
  <line x1="270" y1="150" x2="300" y2="150" stroke="#3b82f6" stroke-width="2.5"/>
  <polygon points="300,150 292,145 292,155" fill="#3b82f6"/>
  <text x="308" y="154" font-size="11" fill="#1d4ed8">Displacement (5 m)</text>
</svg>`,
        caption: 'Distance (path length) is scalar; displacement (straight-line, directed) is vector',
      },
    },
    {
      id: 'h-representing',
      type: 'heading',
      data: { text: 'Representing Vectors', level: 2 },
    },
    {
      id: 'list-represent',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Vectors are drawn as <strong>arrows</strong>: length ∝ magnitude, arrowhead shows direction.' },
          { text: 'Equal vectors have the same length and same direction.' },
          { text: 'A negative vector has the same magnitude but opposite direction.' },
          { text: 'In equations, vectors are often written in bold: <strong>F</strong>, <strong>v</strong>, <strong>a</strong>.' },
        ],
      },
    },
    {
      id: 'call-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'In IGCSE exams, you will often be asked to identify whether a quantity is scalar or vector. Remember: if you can ask "in which direction?" and the answer matters, it is a vector. Speed and velocity are the most commonly confused pair.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Scalars have magnitude only (distance, speed, mass, temperature, energy). Vectors have magnitude and direction (displacement, velocity, weight, force, acceleration). Vectors are represented by arrows; distance and displacement, and speed and velocity, are common scalar–vector pairs.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Scalars have magnitude only; vectors have magnitude and direction.',
    cues: [
      { id: 'cue-1', blockId: 'call-key-def', prompt: 'What is the difference between a scalar and a vector quantity?', answer: 'A scalar has magnitude only (e.g. mass, speed). A vector has both magnitude and direction (e.g. force, velocity).' },
      { id: 'cue-2', blockId: 'tbl-examples', prompt: 'Name three scalar quantities and their vector counterparts.', answer: 'Distance → displacement; speed → velocity; mass → weight (gravitational force).' },
      { id: 'cue-3', blockId: 'para-dist-disp', prompt: 'A student walks 3 m east then 4 m north. What is the distance and displacement?', answer: 'Distance = 3 + 4 = 7 m (scalar). Displacement = 5 m at 53° N of E (vector, by Pythagoras: √(3²+4²) = 5 m).' },
      { id: 'cue-4', blockId: 'h-representing', prompt: 'How is a vector represented on a diagram?', answer: 'As an arrow: the length represents the magnitude and the arrowhead shows the direction.' },
    ],
  },
  evidence: [],
  mentions: [],
};
