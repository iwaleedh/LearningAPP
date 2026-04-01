export const note_olevel_maths_core_3_1_0 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand the Cartesian coordinate system, identify and plot points in all four quadrants, and read coordinates from a graph.'
      }
    },
    {
      id: 'h-cartesian',
      type: 'heading',
      data: { text: 'The Cartesian Coordinate System', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'The <strong>Cartesian coordinate system</strong> (named after René Descartes) is a method for describing the position of any point on a flat surface using two numbers. It uses two perpendicular number lines called <strong>axes</strong>.'
      }
    },
    {
      id: 'list-axes',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>x-axis</strong> — the horizontal number line (positive values go right, negative values go left)' },
          { text: '<strong>y-axis</strong> — the vertical number line (positive values go up, negative values go down)' },
          { text: '<strong>Origin (O)</strong> — the point where the axes cross, written as (0, 0)' }
        ]
      }
    },
    {
      id: 'callout-coord-notation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Coordinate Notation',
        text: 'Every point is written as <strong>(x, y)</strong> — a pair of numbers called an <strong>ordered pair</strong>. The <em>x</em>-value (horizontal position) is always written first, followed by the <em>y</em>-value (vertical position).<br><br>Memory trick: <strong>"Along the corridor, then up the stairs"</strong> — go across first (x), then up/down (y).'
      }
    },
    {
      id: 'h-quads',
      type: 'heading',
      data: { text: 'The Four Quadrants', level: 2 }
    },
    {
      id: 'p-quads',
      type: 'paragraph',
      data: {
        text: 'The axes divide the plane into four regions called <strong>quadrants</strong>, numbered anticlockwise from the top-right.'
      }
    },
    {
      id: 'table-quads',
      type: 'comparisonTable',
      data: {
        caption: 'Sign conventions in each quadrant',
        headers: ['Quadrant', 'x-sign', 'y-sign', 'Example point'],
        rows: [
          ['1st (top-right)', 'positive (+)', 'positive (+)', '(3, 5)'],
          ['2nd (top-left)', 'negative (−)', 'positive (+)', '(−2, 4)'],
          ['3rd (bottom-left)', 'negative (−)', 'negative (−)', '(−3, −2)'],
          ['4th (bottom-right)', 'positive (+)', 'negative (−)', '(4, −1)']
        ]
      }
    },
    {
      id: 'svg-grid',
      type: 'svg',
      data: {
        caption: 'Four-quadrant grid with labelled points: A(2,3), B(−1,4), C(−2,−2), D(3,−1)',
        svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <defs>
    <marker id="arrowX" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#333"/>
    </marker>
    <marker id="arrowY" markerWidth="8" markerHeight="8" refX="3" refY="6" orient="auto">
      <path d="M0,8 L6,8 L3,0 z" fill="#333"/>
    </marker>
  </defs>
  <!-- Grid lines -->
  <g stroke="#e0e0e0" stroke-width="0.8">
    <line x1="30" y1="30" x2="30" y2="270"/>
    <line x1="60" y1="30" x2="60" y2="270"/>
    <line x1="90" y1="30" x2="90" y2="270"/>
    <line x1="120" y1="30" x2="120" y2="270"/>
    <line x1="150" y1="30" x2="150" y2="270"/>
    <line x1="180" y1="30" x2="180" y2="270"/>
    <line x1="210" y1="30" x2="210" y2="270"/>
    <line x1="240" y1="30" x2="240" y2="270"/>
    <line x1="270" y1="30" x2="270" y2="270"/>
    <line x1="30" y1="30" x2="270" y2="30"/>
    <line x1="30" y1="60" x2="270" y2="60"/>
    <line x1="30" y1="90" x2="270" y2="90"/>
    <line x1="30" y1="120" x2="270" y2="120"/>
    <line x1="30" y1="150" x2="270" y2="150"/>
    <line x1="30" y1="180" x2="270" y2="180"/>
    <line x1="30" y1="210" x2="270" y2="210"/>
    <line x1="30" y1="240" x2="270" y2="240"/>
    <line x1="30" y1="270" x2="270" y2="270"/>
  </g>
  <!-- Axes -->
  <line x1="20" y1="150" x2="275" y2="150" stroke="#333" stroke-width="2" marker-end="url(#arrowX)"/>
  <line x1="150" y1="280" x2="150" y2="15" stroke="#333" stroke-width="2" marker-end="url(#arrowY)"/>
  <!-- Axis labels -->
  <text x="278" y="154" fill="#333" font-weight="bold">x</text>
  <text x="154" y="12" fill="#333" font-weight="bold">y</text>
  <text x="153" y="163" fill="#666">O</text>
  <!-- Tick labels x-axis -->
  <text x="115" y="164" fill="#555" text-anchor="middle">−1</text>
  <text x="85" y="164" fill="#555" text-anchor="middle">−2</text>
  <text x="55" y="164" fill="#555" text-anchor="middle">−3</text>
  <text x="185" y="164" fill="#555" text-anchor="middle">1</text>
  <text x="215" y="164" fill="#555" text-anchor="middle">2</text>
  <text x="245" y="164" fill="#555" text-anchor="middle">3</text>
  <!-- Tick labels y-axis -->
  <text x="140" y="124" fill="#555" text-anchor="end">1</text>
  <text x="140" y="94" fill="#555" text-anchor="end">2</text>
  <text x="140" y="64" fill="#555" text-anchor="end">3</text>
  <text x="140" y="184" fill="#555" text-anchor="end">−1</text>
  <text x="140" y="214" fill="#555" text-anchor="end">−2</text>
  <!-- Quadrant labels (light) -->
  <text x="230" y="80" fill="#1e293b" font-size="9">1st</text>
  <text x="65" y="80" fill="#1e293b" font-size="9">2nd</text>
  <text x="65" y="230" fill="#1e293b" font-size="9">3rd</text>
  <text x="220" y="230" fill="#1e293b" font-size="9">4th</text>
  <!-- Point A(2,3): x=2→215, y=3→60 -->
  <circle cx="215" cy="60" r="4" fill="#3b82f6"/>
  <text x="220" y="57" fill="#3b82f6" font-weight="bold">A(2,3)</text>
  <!-- Point B(-1,4): x=-1→115, y=4→30 -->
  <circle cx="115" cy="30" r="4" fill="#ef4444"/>
  <text x="70" y="27" fill="#ef4444" font-weight="bold">B(−1,4)</text>
  <!-- Point C(-2,-2): x=-2→85, y=-2→210 -->
  <circle cx="85" cy="210" r="4" fill="#10b981"/>
  <text x="32" y="225" fill="#10b981" font-weight="bold">C(−2,−2)</text>
  <!-- Point D(3,-1): x=3→245, y=-1→180 -->
  <circle cx="245" cy="180" r="4" fill="#f59e0b"/>
  <text x="248" y="193" fill="#f59e0b" font-weight="bold">D(3,−1)</text>
</svg>`
      }
    },
    {
      id: 'h-plotting',
      type: 'heading',
      data: { text: 'Plotting and Reading Coordinates', level: 2 }
    },
    {
      id: 'p-plotting',
      type: 'paragraph',
      data: {
        text: 'To <strong>plot a point</strong>, start at the origin (0,0). Move left or right along the x-axis by the x-value, then move up or down by the y-value. Mark the position with a dot or cross.'
      }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Plotting Points',
        text: 'Plot the points P(4, −2) and Q(−3, 1).<br><br><strong>Point P(4, −2):</strong><br>Start at origin. Move <em>4 right</em> along x-axis. Then move <em>2 down</em> (y is negative). Mark P.<br><br><strong>Point Q(−3, 1):</strong><br>Start at origin. Move <em>3 left</em> (x is negative). Then move <em>1 up</em>. Mark Q.'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Reading Coordinates',
        text: 'A point is marked on a grid. It lies 2 units to the left of the y-axis and 5 units above the x-axis.<br><br>x-value = −2 (left of origin)<br>y-value = +5 (above origin)<br><br>∴ The coordinates are <strong>(−2, 5)</strong>.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• Always write coordinates as <strong>(x, y)</strong> — the bracket and comma are required.<br>• Points on the x-axis have y = 0, e.g. (3, 0).<br>• Points on the y-axis have x = 0, e.g. (0, −4).<br>• The origin itself is (0, 0).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'The Cartesian grid has an x-axis (horizontal) and y-axis (vertical) meeting at the origin (0,0). Points are written as (x, y) — go across first, then up/down. The grid is divided into 4 quadrants with different sign combinations. Always move horizontally (x) then vertically (y) when plotting.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Cartesian coordinates (x, y): x is horizontal, y is vertical. Four quadrants have different sign patterns. The origin is (0, 0).',
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-coord-notation',
        prompt: 'In the coordinate (x, y), which value do you write first — the horizontal or vertical position?',
        answer: 'The horizontal position (x-value) is always written first. Memory trick: "Along the corridor, then up the stairs."'
      },
      {
        id: 'cue-2',
        blockId: 'table-quads',
        prompt: 'What are the signs of (x, y) in the 3rd quadrant (bottom-left)?',
        answer: 'Both x and y are negative: (−, −). Example: (−3, −2).'
      },
      {
        id: 'cue-3',
        blockId: 'p-intro',
        prompt: 'What are the coordinates of the origin?',
        answer: 'The origin is at (0, 0) — the point where the x-axis and y-axis cross.'
      },
      {
        id: 'cue-4',
        blockId: 'callout-tip',
        prompt: 'A point lies on the y-axis. What do you know about its x-coordinate?',
        answer: 'Its x-coordinate is 0. Any point on the y-axis has the form (0, y).'
      },
      {
        id: 'cue-5',
        blockId: 'h-quads',
        prompt: 'In which quadrant would the point (−4, 3) lie?',
        answer: 'The 2nd quadrant (top-left) — x is negative, y is positive.'
      }
    ]
  },
  evidence: []
};
