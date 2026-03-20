export const note_olevel_physics_1_2_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-2-5-calculating-acceleration-from-speed-time-graphs.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate the acceleration from the gradient of a speed–time graph; calculate distance using area = triangle + rectangle; apply these skills to multi-section v–t graphs.' },
    },
    {
      id: 'h-gradient',
      type: 'heading',
      data: { text: 'Calculating Acceleration: The Gradient', level: 2 },
    },
    {
      id: 'para-gradient',
      type: 'paragraph',
      data: { text: 'The gradient of a speed–time graph tells you the acceleration. Choose two clear points on the straight line, read off their coordinates, then calculate:' },
    },
    {
      id: 'eq-gradient',
      type: 'equation',
      data: {
        html: 'a = gradient = <span class="nb-frac"><span class="nb-num">v₂ − v₁</span><span class="nb-den">t₂ − t₁</span></span>',
        caption: 'Pick two points (t₁, v₁) and (t₂, v₂) on the straight line; a in m/s²',
      },
    },
    {
      id: 'h-area-calc',
      type: 'heading',
      data: { text: 'Calculating Distance: Area Under the Graph', level: 2 },
    },
    {
      id: 'para-area',
      type: 'paragraph',
      data: { text: 'Split the region under a v–t graph into <strong>rectangles</strong> (for constant speed sections) and <strong>triangles</strong> (for acceleration/deceleration sections). Add all the areas together to find the total distance.' },
    },
    {
      id: 'svg-calc',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="300" fill="#1c3a64" rx="10"/>
  <text x="220" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#0c4a6e">Calculating Acceleration and Distance from a v–t Graph</text>
  <!-- Axes -->
  <line x1="60" y1="250" x2="400" y2="250" stroke="#374151" stroke-width="2"/>
  <line x1="60" y1="50" x2="60" y2="250" stroke="#374151" stroke-width="2"/>
  <text x="230" y="278" text-anchor="middle" font-size="12" fill="#374151">Time / s</text>
  <text x="18" y="155" text-anchor="middle" font-size="12" fill="#374151" transform="rotate(-90 18 155)">Speed / m/s</text>
  <!-- Acceleration (0 to 5s: 0 to 20 m/s) -->
  <polygon points="60,250 200,150 200,250" fill="#44370a" opacity="0.7"/>
  <line x1="60" y1="250" x2="200" y2="150" stroke="#d97706" stroke-width="2.5"/>
  <!-- Constant (5 to 12s: 20 m/s) -->
  <polygon points="200,250 200,150 360,150 360,250" fill="#0a3020" opacity="0.7"/>
  <line x1="200" y1="150" x2="360" y2="150" stroke="#16a34a" stroke-width="2.5"/>
  <!-- Axis ticks -->
  <line x1="60" y1="250" x2="60" y2="255" stroke="#374151" stroke-width="1.5"/>
  <line x1="200" y1="250" x2="200" y2="255" stroke="#374151" stroke-width="1.5"/>
  <line x1="360" y1="250" x2="360" y2="255" stroke="#374151" stroke-width="1.5"/>
  <text x="60" y="268" text-anchor="middle" font-size="11" fill="#374151">0</text>
  <text x="200" y="268" text-anchor="middle" font-size="11" fill="#374151">5</text>
  <text x="360" y="268" text-anchor="middle" font-size="11" fill="#374151">12</text>
  <line x1="55" y1="150" x2="60" y2="150" stroke="#374151" stroke-width="1.5"/>
  <text x="50" y="154" text-anchor="end" font-size="11" fill="#374151">20</text>
  <text x="50" y="254" text-anchor="end" font-size="11" fill="#374151">0</text>
  <!-- Area labels -->
  <text x="130" y="235" text-anchor="middle" font-size="11" fill="#92400e" font-weight="bold">A₁ = ½×5×20</text>
  <text x="130" y="248" text-anchor="middle" font-size="11" fill="#92400e" font-weight="bold">= 50 m</text>
  <text x="280" y="210" text-anchor="middle" font-size="11" fill="#166534" font-weight="bold">A₂ = 7×20</text>
  <text x="280" y="223" text-anchor="middle" font-size="11" fill="#166534" font-weight="bold">= 140 m</text>
  <!-- Total distance label -->
  <text x="220" y="292" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Total distance = 50 + 140 = 190 m</text>
  <!-- Gradient dashes for acceleration -->
  <line x1="60" y1="250" x2="200" y2="250" stroke="#d97706" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="200" y1="150" x2="200" y2="250" stroke="#d97706" stroke-width="1" stroke-dasharray="4,2"/>
  <text x="130" y="290" fill="#1e293b" font-size="1">spacer</text>
</svg>`,
        caption: 'Yellow triangle = distance during acceleration; green rectangle = distance at constant speed',
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Full Analysis',
        text: '<strong>From the graph above:</strong><br><strong>Acceleration (0–5 s):</strong> a = (20 − 0)/(5 − 0) = <strong>4 m/s²</strong><br><strong>Constant speed (5–12 s):</strong> a = 0 m/s²<br><br><strong>Distances:</strong><br>Triangle: ½ × 5 × 20 = 50 m<br>Rectangle: 7 × 20 = 140 m<br><strong>Total distance = 190 m</strong>',
      },
    },
    {
      id: 'h-negative',
      type: 'heading',
      data: { text: 'Negative Gradient = Deceleration', level: 2 },
    },
    {
      id: 'para-neg',
      type: 'paragraph',
      data: { text: 'If the slope on a v–t graph goes <em>downward</em>, the acceleration is negative — this is deceleration. The area of the triangle formed is still positive (distance cannot be negative). Example: if speed drops from 30 m/s to 0 in 6 s: a = (0 − 30)/6 = −5 m/s².' },
    },
    {
      id: 'call-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Reading Coordinates',
        text: 'Always use two points <em>on the straight line</em> — not data points that might be off the line. Use the clearest intersections with grid lines for accuracy. Label Δv and Δt on your working.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Acceleration = gradient = (v₂ − v₁)/(t₂ − t₁). Negative gradient → deceleration. Distance = area under v–t graph: triangles for acceleration/deceleration phases (½ × base × height), rectangles for constant speed (length × width).' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'a = gradient = Δv/Δt from v–t graph; distance = total area (triangles + rectangles) under graph.',
    cues: [
      { id: 'cue-1', blockId: 'eq-gradient', prompt: 'How do you calculate acceleration from a v–t graph?', answer: 'Find the gradient: a = (v₂ − v₁) / (t₂ − t₁), using two clear points on the straight section.' },
      { id: 'cue-2', blockId: 'svg-calc', prompt: 'A v–t graph shows a speed increase from 0 to 20 m/s over 5 s, then constant 20 m/s for 7 s. Find total distance.', answer: 'Triangle: ½ × 5 × 20 = 50 m; Rectangle: 7 × 20 = 140 m; Total = 190 m.' },
      { id: 'cue-3', blockId: 'para-neg', prompt: 'A car decelerates from 30 m/s to rest in 6 s. Find the deceleration.', answer: 'a = (0 − 30) / 6 = −5 m/s² (i.e. deceleration of 5 m/s²).' },
      { id: 'cue-4', blockId: 'para-area', prompt: 'Why must you split the area under a v–t graph into triangles and rectangles?', answer: 'Different sections have different shapes: accelerating/decelerating sections form triangles; constant speed sections form rectangles. Adding these areas gives total distance.' },
    ],
  },
  evidence: [],
  mentions: [],
};
