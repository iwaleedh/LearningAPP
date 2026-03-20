export const note_olevel_physics_1_2_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-2-3-distance-time-graphs.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Interpret distance–time graphs; calculate speed from the gradient of a distance–time graph; recognise what stationary, constant speed, and changing speed look like on a d–t graph.' },
    },
    {
      id: 'h-basics',
      type: 'heading',
      data: { text: 'Distance–Time Graphs: What They Show', level: 2 },
    },
    {
      id: 'para-intro',
      type: 'paragraph',
      data: { text: 'A <strong>distance–time (d–t) graph</strong> plots distance (y-axis) against time (x-axis). The shape of the line tells you about the object\'s motion. The <strong>gradient</strong> (slope) of the line equals the <strong>speed</strong> of the object.' },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Gradient of d–t graph = Speed',
        text: 'gradient = rise ÷ run = Δd ÷ Δt = speed<br><br>A steeper slope means a greater speed. A negative slope would mean the object is returning toward the start.',
      },
    },
    {
      id: 'svg-dtgraph',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="300" fill="#0f172a" rx="10"/>
  <text x="220" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Distance–Time Graph: Three Types of Motion</text>
  <!-- Axes -->
  <line x1="60" y1="250" x2="400" y2="250" stroke="#374151" stroke-width="2"/>
  <line x1="60" y1="50" x2="60" y2="250" stroke="#374151" stroke-width="2"/>
  <text x="230" y="278" text-anchor="middle" font-size="13" fill="#374151">Time (s)</text>
  <text x="20" y="155" text-anchor="middle" font-size="13" fill="#374151" transform="rotate(-90 20 155)">Distance (m)</text>
  <!-- Gridlines -->
  <line x1="60" y1="200" x2="400" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="60" y1="150" x2="400" y2="150" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="60" y1="100" x2="400" y2="100" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="160" y1="50" x2="160" y2="250" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="260" y1="50" x2="260" y2="250" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="360" y1="50" x2="360" y2="250" stroke="#e2e8f0" stroke-width="1"/>
  <!-- Stationary (horizontal line) -->
  <line x1="60" y1="200" x2="160" y2="200" stroke="#64748b" stroke-width="2.5"/>
  <text x="110" y="191" text-anchor="middle" font-size="11" fill="#475569">Stationary</text>
  <!-- Constant speed (straight diagonal) -->
  <line x1="160" y1="200" x2="260" y2="120" stroke="#16a34a" stroke-width="2.5"/>
  <text x="215" y="148" font-size="11" fill="#15803d">Constant</text>
  <text x="215" y="161" font-size="11" fill="#15803d">speed</text>
  <!-- Faster constant speed (steeper diagonal) -->
  <line x1="260" y1="120" x2="360" y2="60" stroke="#3b82f6" stroke-width="2.5"/>
  <text x="320" y="78" font-size="11" fill="#1d4ed8">Faster</text>
  <text x="320" y="91" font-size="11" fill="#1d4ed8">speed</text>
  <!-- Curve = changing speed -->
  <!-- Not adding curve to keep simplicity, but add annotation -->
  <!-- Axis labels -->
  <text x="55" y="254" text-anchor="end" font-size="10" fill="#6b7280">0</text>
  <text x="160" y="264" text-anchor="middle" font-size="10" fill="#6b7280">2</text>
  <text x="260" y="264" text-anchor="middle" font-size="10" fill="#6b7280">4</text>
  <text x="360" y="264" text-anchor="middle" font-size="10" fill="#6b7280">6</text>
  <!-- Gradient annotation -->
  <line x1="160" y1="200" x2="260" y2="200" stroke="#e74c3c" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="260" y1="200" x2="260" y2="120" stroke="#e74c3c" stroke-width="1" stroke-dasharray="4,2"/>
  <text x="210" y="218" text-anchor="middle" font-size="10" fill="#e74c3c">Δt = 2 s</text>
  <text x="272" y="165" font-size="10" fill="#e74c3c">Δd = 80 m</text>
</svg>`,
        caption: 'Distance–time graph: horizontal = stationary; straight slope = constant speed; steeper slope = faster',
      },
    },
    {
      id: 'h-interpret',
      type: 'heading',
      data: { text: 'Interpreting Sections of a d–t Graph', level: 2 },
    },
    {
      id: 'tbl-interpret',
      type: 'comparisonTable',
      data: {
        caption: 'What each section of a d–t graph means',
        headers: ['Appearance', 'Meaning'],
        rows: [
          ['Horizontal line (zero gradient)', 'Object is stationary'],
          ['Straight line sloping upward', 'Constant speed (moving away from start)'],
          ['Steeper upward slope', 'Greater constant speed'],
          ['Straight line sloping downward', 'Constant speed, returning to start'],
          ['Curve (getting steeper)', 'Accelerating (speed increasing)'],
          ['Curve (getting shallower)', 'Decelerating (speed decreasing)'],
        ],
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Reading a Gradient',
        text: '<strong>Q:</strong> From a d–t graph, an object moves from 20 m to 100 m between t = 2 s and t = 6 s. Find the speed.<br><br><strong>Step 1:</strong> Δd = 100 − 20 = 80 m<br><strong>Step 2:</strong> Δt = 6 − 2 = 4 s<br><strong>Step 3:</strong> speed = Δd/Δt = 80/4 = <strong>20 m/s</strong>',
      },
    },
    {
      id: 'call-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Curved Lines',
        text: 'On a d–t graph, a <strong>curve</strong> means changing speed. To find the <em>instantaneous</em> speed at a point on a curve, draw a tangent at that point and calculate its gradient.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'On a distance–time graph: gradient = speed. Horizontal = stationary; straight slope up = constant speed; steeper = faster; curve = changing speed (acceleration or deceleration). Calculate speed by: gradient = Δd ÷ Δt.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Gradient of d–t graph = speed; horizontal line = stationary; curve = changing speed.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'What does the gradient of a distance–time graph represent?', answer: 'The gradient represents speed (gradient = Δd ÷ Δt = speed).' },
      { id: 'cue-2', blockId: 'tbl-interpret', prompt: 'What does a horizontal line on a d–t graph mean?', answer: 'The object is stationary (not moving) — distance is not changing with time.' },
      { id: 'cue-3', blockId: 'call-worked', prompt: 'From a d–t graph, an object goes from 10 m to 50 m in 4 s. What is its speed?', answer: 'speed = (50−10)/4 = 40/4 = 10 m/s.' },
      { id: 'cue-4', blockId: 'call-tip-1', prompt: 'What does a curved line on a d–t graph indicate and how do you find the instantaneous speed?', answer: 'A curve indicates changing speed (acceleration or deceleration). Draw a tangent to the curve at that point and find the gradient of the tangent.' },
    ],
  },
  evidence: [],
  mentions: [],
};
