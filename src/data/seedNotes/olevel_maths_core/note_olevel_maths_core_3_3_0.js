export const note_olevel_maths_core_3_3_0 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Recognise and sketch the five main graph types: linear, quadratic, reciprocal, cubic, and exponential — and identify their key features.'
      }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Overview of Graph Types', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'In IGCSE Mathematics, you need to recognise the <strong>shape</strong> of the most common types of graph from their equation, without necessarily plotting every point. Each type has a distinctive shape and key features such as intercepts, turning points, and asymptotes.'
      }
    },
    {
      id: 'h-linear',
      type: 'heading',
      data: { text: '1. Linear Graphs — y = mx + c', level: 2 }
    },
    {
      id: 'p-linear',
      type: 'paragraph',
      data: {
        text: 'A <strong>linear graph</strong> is a straight line. Every time x increases by 1, y changes by exactly m. The graph has no curves, turning points, or asymptotes.'
      }
    },
    {
      id: 'h-quadratic',
      type: 'heading',
      data: { text: '2. Quadratic Graphs — y = ax² + bx + c', level: 2 }
    },
    {
      id: 'p-quadratic',
      type: 'paragraph',
      data: {
        text: 'A <strong>quadratic graph</strong> is a smooth U-shape (parabola). If a > 0, the parabola opens <strong>upward</strong> (∪ shape). If a < 0, it opens <strong>downward</strong> (∩ shape). It has one <strong>turning point</strong> (vertex) and is symmetrical about a vertical line through the vertex.'
      }
    },
    {
      id: 'h-reciprocal',
      type: 'heading',
      data: { text: '3. Reciprocal Graphs — y = k/x', level: 2 }
    },
    {
      id: 'p-reciprocal',
      type: 'paragraph',
      data: {
        text: 'A <strong>reciprocal graph</strong> has two branches in <strong>opposite quadrants</strong> (1st and 3rd if k > 0; 2nd and 4th if k < 0). The graph never touches the axes — both axes are <strong>asymptotes</strong> (lines the graph approaches but never reaches). When x = 0, y is undefined.'
      }
    },
    {
      id: 'h-cubic',
      type: 'heading',
      data: { text: '4. Cubic Graphs — y = ax³', level: 2 }
    },
    {
      id: 'p-cubic',
      type: 'paragraph',
      data: {
        text: 'A <strong>cubic graph</strong> produces an S-shaped curve that passes through the origin. If a > 0, the curve goes from bottom-left to top-right. If a < 0, it goes from top-left to bottom-right. More complex cubics (y = ax³ + bx² + ...) may have two turning points.'
      }
    },
    {
      id: 'h-exponential',
      type: 'heading',
      data: { text: '5. Exponential Graphs — y = aˣ', level: 2 }
    },
    {
      id: 'p-exponential',
      type: 'paragraph',
      data: {
        text: 'An <strong>exponential growth graph</strong> (a > 1) starts flat for negative x, rises steeply for positive x, and always passes through (0, 1). An <strong>exponential decay graph</strong> (0 < a < 1) is the mirror image. The x-axis is an asymptote — the graph approaches but never crosses it.'
      }
    },
    {
      id: 'table-summary',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of the five main graph types',
        headers: ['Type', 'Equation example', 'Shape', 'Key features'],
        rows: [
          ['Linear', 'y = 2x − 3', 'Straight line', 'Constant gradient; no turning points'],
          ['Quadratic', 'y = x² − 4', 'Parabola (∪ or ∩)', 'One turning point (vertex); line of symmetry'],
          ['Reciprocal', 'y = 6/x', 'Two branches', 'Asymptotes at x=0 and y=0; never touches axes'],
          ['Cubic', 'y = x³', 'S-curve', 'Passes through origin; both ends go in opposite y-directions'],
          ['Exponential', 'y = 2ˣ', 'Rapid growth curve', 'Passes through (0,1); asymptote y=0']
        ]
      }
    },
    {
      id: 'svg-sketches',
      type: 'svg',
      data: {
        caption: 'Sketch shapes for each of the five graph types',
        svg: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="none">
  <!-- 1. Linear (panel 1, x: 5-75) -->
  <rect x="5" y="5" width="70" height="80" fill="#1c3a64" stroke="#ddd"/>
  <line x1="5" y1="50" x2="75" y2="50" stroke="#999" stroke-width="0.8"/>
  <line x1="40" y1="5" x2="40" y2="85" stroke="#999" stroke-width="0.8"/>
  <line x1="12" y1="78" x2="68" y2="12" stroke="#6366f1" stroke-width="2"/>
  <text x="40" y="97" text-anchor="middle" fill="#6366f1" font-size="9" font-weight="bold">y = mx+c</text>
  <text x="40" y="108" text-anchor="middle" fill="#888" font-size="8">Linear</text>

  <!-- 2. Quadratic (panel 2, x:85-155) -->
  <rect x="85" y="5" width="70" height="80" fill="#532407" stroke="#ddd"/>
  <line x1="85" y1="50" x2="155" y2="50" stroke="#999" stroke-width="0.8"/>
  <line x1="120" y1="5" x2="120" y2="85" stroke="#999" stroke-width="0.8"/>
  <path d="M90,78 Q120,10 150,78" stroke="#ef4444" stroke-width="2"/>
  <text x="120" y="97" text-anchor="middle" fill="#ef4444" font-size="9" font-weight="bold">y = ax²</text>
  <text x="120" y="108" text-anchor="middle" fill="#888" font-size="8">Quadratic</text>

  <!-- 3. Reciprocal (panel 3, x:165-235) -->
  <rect x="165" y="5" width="70" height="80" fill="#0a2e1a" stroke="#ddd"/>
  <line x1="165" y1="45" x2="235" y2="45" stroke="#999" stroke-width="0.8"/>
  <line x1="200" y1="5" x2="200" y2="85" stroke="#999" stroke-width="0.8"/>
  <!-- Branch 1 (top right) -->
  <path d="M205,10 Q210,15 215,20 Q220,27 225,38" stroke="#10b981" stroke-width="2"/>
  <!-- Branch 2 (bottom left) -->
  <path d="M195,80 Q190,73 185,68 Q180,61 175,52" stroke="#10b981" stroke-width="2"/>
  <text x="200" y="97" text-anchor="middle" fill="#10b981" font-size="9" font-weight="bold">y = k/x</text>
  <text x="200" y="108" text-anchor="middle" fill="#888" font-size="8">Reciprocal</text>

  <!-- 4. Cubic (panel 4, x:245-315) -->
  <rect x="245" y="5" width="70" height="80" fill="#44370a" stroke="#ddd"/>
  <line x1="245" y1="45" x2="315" y2="45" stroke="#999" stroke-width="0.8"/>
  <line x1="280" y1="5" x2="280" y2="85" stroke="#999" stroke-width="0.8"/>
  <path d="M252,78 Q265,65 275,45 Q285,25 308,12" stroke="#f59e0b" stroke-width="2"/>
  <text x="280" y="97" text-anchor="middle" fill="#f59e0b" font-size="9" font-weight="bold">y = x³</text>
  <text x="280" y="108" text-anchor="middle" fill="#888" font-size="8">Cubic</text>

  <!-- 5. Exponential (panel 5, x:325-395) -->
  <rect x="325" y="5" width="70" height="80" fill="#2d1b69" stroke="#ddd"/>
  <line x1="325" y1="70" x2="395" y2="70" stroke="#999" stroke-width="0.8"/>
  <line x1="360" y1="5" x2="360" y2="85" stroke="#999" stroke-width="0.8"/>
  <path d="M330,68 Q345,66 355,60 Q362,53 368,42 Q374,30 383,12" stroke="#8b5cf6" stroke-width="2"/>
  <text x="360" y="97" text-anchor="middle" fill="#8b5cf6" font-size="9" font-weight="bold">y = aˣ</text>
  <text x="360" y="108" text-anchor="middle" fill="#888" font-size="8">Exponential</text>
</svg>`
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Matching Equations to Graphs',
        text: 'Quickly identify graph type by looking at the equation:<br>• Highest power x¹ → linear (straight line)<br>• Highest power x² → quadratic (parabola)<br>• Form k/x (or kx⁻¹) → reciprocal (two branches)<br>• Highest power x³ → cubic (S-shape)<br>• Variable in exponent (2ˣ, e ˣ) → exponential'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Watch Out',
        text: '• y = x² is NOT the same as y = 2x — one is quadratic, one is linear.<br>• y = 1/x has an <em>asymptote</em>, not an intercept — it never crosses the axes.<br>• Exponential graphs always pass through (0, 1) when the base varies and the coefficient is 1.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Five key graph types: Linear (y=mx+c, straight line), Quadratic (y=ax², parabola), Reciprocal (y=k/x, two branches with asymptotes), Cubic (y=ax³, S-curve), Exponential (y=aˣ, steep growth curve through (0,1)). Identify graph type from the form of the equation.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: '5 types: Linear (straight), Quadratic (parabola), Reciprocal (2 branches), Cubic (S-curve), Exponential (steep growth). Know each shape.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-quadratic',
        prompt: 'Describe the shape of a quadratic graph. How does the sign of a affect it?',
        answer: 'A parabola. If a > 0 it opens upward (∪); if a < 0 it opens downward (∩).'
      },
      {
        id: 'cue-2',
        blockId: 'p-reciprocal',
        prompt: 'What does a reciprocal graph y = k/x look like? What are the asymptotes?',
        answer: 'Two branches in opposite quadrants. Asymptotes at x = 0 (y-axis) and y = 0 (x-axis) — the graph never crosses either axis.'
      },
      {
        id: 'cue-3',
        blockId: 'p-exponential',
        prompt: 'What coordinates does every exponential graph y = aˣ pass through?',
        answer: '(0, 1) — because a⁰ = 1 for any base a.'
      },
      {
        id: 'cue-4',
        blockId: 'p-cubic',
        prompt: 'Describe the shape of a cubic graph y = ax³.',
        answer: 'An S-shaped curve that passes through the origin. If a > 0, it goes from bottom-left to top-right.'
      },
      {
        id: 'cue-5',
        blockId: 'callout-tip',
        prompt: 'How would you identify a reciprocal function from its equation?',
        answer: 'It is written in the form y = k/x or y = kx⁻¹ — x appears in the denominator.'
      }
    ]
  },
  evidence: []
};
