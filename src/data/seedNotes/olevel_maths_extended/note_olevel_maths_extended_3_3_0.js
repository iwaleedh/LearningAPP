export const note_olevel_maths_extended_3_3_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Coordinate Geometry And Graphs/quadratic-graphs.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Plot and interpret quadratic graphs of the form y = ax² + bx + c, identifying key features including turning points and the line of symmetry.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Quadratic Graphs', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>quadratic function</strong> has the form <em>y</em> = <em>ax</em>² + <em>bx</em> + <em>c</em> where <em>a</em> ≠ 0. Its graph is a smooth <strong>U-shaped curve</strong> called a <strong>parabola</strong>.' }
    },
    {
      id: 'callout-key-shape',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Shape of a Parabola',
        text: '• If <strong><em>a</em> > 0</strong> (positive): the parabola opens <strong>upward</strong> (∪ shape) — has a <strong>minimum</strong> turning point.<br>• If <strong><em>a</em> < 0</strong> (negative): the parabola opens <strong>downward</strong> (∩ shape) — has a <strong>maximum</strong> turning point.<br><br>The larger |<em>a</em>|, the <strong>narrower</strong> the parabola.'
      }
    },
    {
      id: 'h-features',
      type: 'heading',
      data: { text: 'Key Features of a Quadratic Graph', level: 2 }
    },
    {
      id: 'list-features',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>y-intercept:</strong> the value of <em>c</em> — the point (0, <em>c</em>) where the curve crosses the y-axis' },
          { text: '<strong>x-intercepts (roots):</strong> where <em>y</em> = 0 — found by solving <em>ax</em>² + <em>bx</em> + <em>c</em> = 0' },
          { text: '<strong>Turning point (vertex):</strong> the minimum or maximum point of the curve' },
          { text: '<strong>Line of symmetry:</strong> a vertical line through the turning point, <em>x</em> = −<span class="nb-frac"><span class="nb-num"><em>b</em></span><span class="nb-den">2<em>a</em></span></span>' }
        ]
      }
    },
    {
      id: 'eq-symmetry',
      type: 'equation',
      data: {
        html: 'Line of symmetry: <em>x</em> = −<span class="nb-frac"><span class="nb-num"><em>b</em></span><span class="nb-den">2<em>a</em></span></span>',
        caption: 'Formula for the axis of symmetry'
      }
    },
    {
      id: 'h-plotting',
      type: 'heading',
      data: { text: 'Plotting a Quadratic Graph', level: 2 }
    },
    {
      id: 'list-plotting',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Construct a table of values for the given range of <em>x</em>' },
          { text: 'Calculate <em>y</em> for each <em>x</em>-value' },
          { text: 'Plot all points on the grid' },
          { text: 'Draw a <strong>smooth curve</strong> through the points (NOT straight line segments)' },
          { text: 'Label the graph with its equation' }
        ]
      }
    },
    {
      id: 'callout-worked-plot',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Plotting y = x² − 4x + 3',
        text: '<table style="border-collapse:collapse;text-align:center"><tr><td style="padding:4px 10px;border:1px solid #999"><em>x</em></td><td style="padding:4px 10px;border:1px solid #999">−1</td><td style="padding:4px 10px;border:1px solid #999">0</td><td style="padding:4px 10px;border:1px solid #999">1</td><td style="padding:4px 10px;border:1px solid #999">2</td><td style="padding:4px 10px;border:1px solid #999">3</td><td style="padding:4px 10px;border:1px solid #999">4</td><td style="padding:4px 10px;border:1px solid #999">5</td></tr><tr><td style="padding:4px 10px;border:1px solid #999"><em>y</em></td><td style="padding:4px 10px;border:1px solid #999">8</td><td style="padding:4px 10px;border:1px solid #999">3</td><td style="padding:4px 10px;border:1px solid #999">0</td><td style="padding:4px 10px;border:1px solid #999">−1</td><td style="padding:4px 10px;border:1px solid #999">0</td><td style="padding:4px 10px;border:1px solid #999">3</td><td style="padding:4px 10px;border:1px solid #999">8</td></tr></table><br>y-intercept: (0, 3) &nbsp; x-intercepts: (1, 0) and (3, 0)<br>Line of symmetry: <em>x</em> = −<span class="nb-frac"><span class="nb-num">(−4)</span><span class="nb-den">2(1)</span></span> = 2<br>Turning point: (2, −1) — this is a <strong>minimum</strong> since <em>a</em> = 1 > 0.'
      }
    },
    {
      id: 'h-solving',
      type: 'heading',
      data: { text: 'Solving Equations Using Graphs', level: 2 }
    },
    {
      id: 'p-solving',
      type: 'paragraph',
      data: { text: 'You can use a quadratic graph to solve equations:<br>• <strong>Roots of <em>ax</em>² + <em>bx</em> + <em>c</em> = 0:</strong> read the x-intercepts (where the curve crosses the x-axis).<br>• <strong>Intersection with a line:</strong> draw the line on the same axes and read the x-coordinates of intersection points.' }
    },
    {
      id: 'callout-tip-curve',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• Draw a <strong>smooth curve</strong> — never join points with straight line segments.<br>• The curve should be <strong>symmetrical</strong> about the line of symmetry.<br>• If you\'re asked for the turning point, the line of symmetry gives the x-value; substitute to find y.<br>• Use a <strong>sharp pencil</strong> for accuracy.'
      }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'When squaring negative numbers: (−3)² = 9, not −9. The square is always positive. Be extra careful with terms like −<em>x</em>² which means −(<em>x</em>²), not (−<em>x</em>)².'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Quadratic graphs (y = ax² + bx + c) are parabolas: ∪-shaped if a > 0, ∩-shaped if a < 0. Key features are the y-intercept (c), x-intercepts (roots), turning point, and line of symmetry at x = −b/(2a). Always draw a smooth curve, never straight segments.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Quadratic graphs are parabolas with turning points, roots, and a line of symmetry.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-shape', prompt: 'What shape does a quadratic graph make if a > 0?', answer: 'A ∪-shaped (upward) parabola with a minimum turning point.' },
      { id: 'cue-2', blockId: 'eq-symmetry', prompt: 'State the formula for the line of symmetry.', answer: 'x = −b/(2a)' },
      { id: 'cue-3', blockId: 'list-features', prompt: 'What is the y-intercept of y = ax² + bx + c?', answer: 'The constant c — the point (0, c).' },
      { id: 'cue-4', blockId: 'p-solving', prompt: 'How do you find the roots of a quadratic from its graph?', answer: 'Read the x-coordinates where the curve crosses the x-axis (x-intercepts).' },
      { id: 'cue-5', blockId: 'callout-worked-plot', prompt: 'Find the turning point of y = x² − 4x + 3.', answer: '(2, −1) — minimum since a = 1 > 0.' }
    ]
  },
  evidence: []
};
