export const note_olevel_physics_1_2_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-2-4-speed-time-graphs.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Interpret speed–time and velocity–time graphs; calculate acceleration from the gradient; calculate distance from the area under the graph; recognise constant speed, acceleration, and deceleration.' },
    },
    {
      id: 'h-basics',
      type: 'heading',
      data: { text: 'Speed–Time Graphs: Key Principles', level: 2 },
    },
    {
      id: 'para-intro',
      type: 'paragraph',
      data: { text: 'A <strong>speed–time (v–t) graph</strong> plots speed (y-axis) against time (x-axis). It gives more information than a d–t graph: the gradient tells you <strong>acceleration</strong>, and the area under the line gives the <strong>distance</strong> (or displacement) travelled.' },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Two Key Rules for v–t Graphs',
        text: '<strong>1. Gradient = acceleration:</strong>  a = Δv ÷ Δt<br><strong>2. Area under graph = distance travelled</strong><br>(For a v–t graph, count areas of rectangles and triangles)',
      },
    },
    {
      id: 'svg-vtgraph',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 450 310" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="450" height="310" fill="#fff7ed" rx="10"/>
  <text x="225" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#78350f">Speed–Time Graph with Labelled Regions</text>
  <!-- Axes -->
  <line x1="60" y1="260" x2="420" y2="260" stroke="#374151" stroke-width="2"/>
  <line x1="60" y1="40" x2="60" y2="260" stroke="#374151" stroke-width="2"/>
  <polygon points="420,260 410,255 410,265" fill="#374151"/>
  <polygon points="60,40 55,50 65,50" fill="#374151"/>
  <text x="240" y="290" text-anchor="middle" font-size="13" fill="#374151">Time (s)</text>
  <text x="18" y="155" text-anchor="middle" font-size="13" fill="#374151" transform="rotate(-90 18 155)">Speed (m/s)</text>
  <!-- Acceleration phase (0 to 4s: 0 to 20 m/s) -->
  <line x1="60" y1="260" x2="180" y2="140" stroke="#ef4444" stroke-width="2.5"/>
  <!-- Fill area under acceleration phase -->
  <polygon points="60,260 180,140 180,260" fill="#fecaca" opacity="0.6"/>
  <!-- Constant speed phase (4s to 8s: 20 m/s) -->
  <line x1="180" y1="140" x2="300" y2="140" stroke="#16a34a" stroke-width="2.5"/>
  <polygon points="180,260 180,140 300,140 300,260" fill="#bbf7d0" opacity="0.6"/>
  <!-- Deceleration phase (8s to 12s: 20 to 0) -->
  <line x1="300" y1="140" x2="420" y2="260" stroke="#3b82f6" stroke-width="2.5"/>
  <polygon points="300,260 300,140 420,260" fill="#bfdbfe" opacity="0.6"/>
  <!-- Labels on sections -->
  <text x="120" y="220" text-anchor="middle" font-size="11" fill="#b91c1c" font-weight="bold">Accelerating</text>
  <text x="240" y="220" text-anchor="middle" font-size="11" fill="#15803d" font-weight="bold">Constant speed</text>
  <text x="360" y="230" text-anchor="middle" font-size="11" fill="#1d4ed8" font-weight="bold">Decelerating</text>
  <!-- Axis marks -->
  <text x="55" y="264" text-anchor="end" font-size="11" fill="#6b7280">0</text>
  <text x="180" y="274" text-anchor="middle" font-size="11" fill="#6b7280">4</text>
  <text x="300" y="274" text-anchor="middle" font-size="11" fill="#6b7280">8</text>
  <text x="420" y="274" text-anchor="middle" font-size="11" fill="#6b7280">12</text>
  <text x="55" y="144" text-anchor="end" font-size="11" fill="#6b7280">20</text>
  <!-- Gradient annotation -->
  <line x1="60" y1="260" x2="180" y2="260" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="180" y1="140" x2="180" y2="260" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,2"/>
  <text x="120" y="256" text-anchor="middle" font-size="10" fill="#ef4444">Δt = 4 s</text>
  <text x="192" y="205" font-size="10" fill="#ef4444">Δv = 20</text>
</svg>`,
        caption: 'v–t graph: gradient = acceleration; area under graph = distance. Red = accelerating, green = constant speed, blue = decelerating.',
      },
    },
    {
      id: 'h-interpret',
      type: 'heading',
      data: { text: 'Interpreting v–t Graphs', level: 2 },
    },
    {
      id: 'tbl-interpret',
      type: 'comparisonTable',
      data: {
        caption: 'What sections of a v–t graph mean',
        headers: ['Appearance', 'Meaning'],
        rows: [
          ['Horizontal line', 'Constant speed (zero acceleration)'],
          ['Straight line sloping up', 'Constant acceleration (speed increasing uniformly)'],
          ['Straight line sloping down', 'Constant deceleration (speed decreasing uniformly)'],
          ['Line touching x-axis', 'Object is at rest (speed = 0)'],
          ['Steeper slope', 'Greater acceleration or deceleration'],
        ],
      },
    },
    {
      id: 'h-area',
      type: 'heading',
      data: { text: 'Area Under the Graph = Distance', level: 2 },
    },
    {
      id: 'para-area',
      type: 'paragraph',
      data: { text: 'The area enclosed between the speed–time line and the time axis equals the <strong>distance travelled</strong>. For a <em>rectangular</em> section (constant speed): area = base × height = time × speed. For a <em>triangular</em> section (uniform acceleration): area = ½ × base × height.' },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Finding Distance from v–t Graph',
        text: '<strong>From the graph above:</strong><br>Section 1 (0–4 s, accelerates 0→20 m/s): Area = ½ × 4 × 20 = <strong>40 m</strong><br>Section 2 (4–8 s, constant 20 m/s): Area = 4 × 20 = <strong>80 m</strong><br>Section 3 (8–12 s, decelerates 20→0): Area = ½ × 4 × 20 = <strong>40 m</strong><br><strong>Total distance = 40 + 80 + 40 = 160 m</strong>',
      },
    },
    {
      id: 'call-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Area = Distance',
        text: 'Students often forget that the area under a v–t graph gives distance — not the area under a d–t graph. Also remember: for curved v–t graphs, estimate the area by counting grid squares or splitting into approximate triangles/rectangles.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'On a speed–time graph: gradient = acceleration (a = Δv/Δt); area under graph = distance travelled. Horizontal = constant speed; slope upward = acceleration; slope downward = deceleration. Rectangle area = base × height; triangle area = ½ × base × height.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'v–t graph gradient = acceleration; area under graph = distance.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'What two quantities can be found from a speed–time graph?', answer: 'Gradient = acceleration; area under graph = distance (or displacement) travelled.' },
      { id: 'cue-2', blockId: 'tbl-interpret', prompt: 'A v–t graph shows a horizontal line. What does this mean?', answer: 'The object is moving at constant speed — zero acceleration.' },
      { id: 'cue-3', blockId: 'para-area', prompt: 'How do you find the distance from a triangular section of a v–t graph?', answer: 'Area = ½ × base × height = ½ × time × speed change. This equals the distance travelled during that section.' },
      { id: 'cue-4', blockId: 'call-worked', prompt: 'A car accelerates from 0 to 20 m/s in 4 s at constant acceleration. How far does it travel?', answer: 'Distance = area of triangle = ½ × 4 × 20 = 40 m.' },
    ],
  },
  evidence: [],
  mentions: [],
};
