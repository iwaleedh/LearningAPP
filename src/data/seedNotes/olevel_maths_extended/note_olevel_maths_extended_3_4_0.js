export const note_olevel_maths_extended_3_4_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Coordinate Geometry And Graphs/cubic-graphs.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Recognise, plot and interpret cubic graphs of the form y = ax³ + bx² + cx + d.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Cubic Graphs', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>cubic function</strong> has the highest power of <em>x</em> as <strong>x³</strong>. The general form is <em>y</em> = <em>ax</em>³ + <em>bx</em>² + <em>cx</em> + <em>d</em>. Cubic graphs have a distinctive <strong>S-shaped</strong> curve (or reversed S).' }
    },
    {
      id: 'callout-key-shape',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Shape of Cubic Graphs',
        text: '• If <strong><em>a</em> > 0</strong> (positive): curve goes from bottom-left to top-right — <strong>increasing overall</strong><br>• If <strong><em>a</em> < 0</strong> (negative): curve goes from top-left to bottom-right — <strong>decreasing overall</strong><br><br>Unlike quadratics, cubics have <strong>no line of symmetry</strong> and can have <strong>up to 2 turning points</strong>.'
      }
    },
    {
      id: 'h-simple',
      type: 'heading',
      data: { text: 'Simple Cubic: y = x³', level: 2 }
    },
    {
      id: 'table-cubic',
      type: 'comparisonTable',
      data: {
        caption: 'Table of values for y = x³',
        headers: ['x', '−3', '−2', '−1', '0', '1', '2', '3'],
        rows: [
          ['y', '−27', '−8', '−1', '0', '1', '8', '27']
        ]
      }
    },
    {
      id: 'p-simple',
      type: 'paragraph',
      data: { text: 'The graph of <em>y</em> = <em>x</em>³ passes through the origin, with a <strong>point of inflection</strong> at (0, 0). It is steeper than a quadratic for large values of |<em>x</em>|.' }
    },
    {
      id: 'h-plotting',
      type: 'heading',
      data: { text: 'Plotting Cubic Graphs', level: 2 }
    },
    {
      id: 'list-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Create a table of values across the given range' },
          { text: 'Calculate each <em>y</em>-value carefully (negatives cubed stay negative)' },
          { text: 'Plot the points on the grid' },
          { text: 'Draw a <strong>smooth curve</strong> through all points' }
        ]
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — y = x³ − 3x',
        text: '<table style="border-collapse:collapse;text-align:center"><tr><td style="padding:4px 10px;border:1px solid #999"><em>x</em></td><td style="padding:4px 10px;border:1px solid #999">−3</td><td style="padding:4px 10px;border:1px solid #999">−2</td><td style="padding:4px 10px;border:1px solid #999">−1</td><td style="padding:4px 10px;border:1px solid #999">0</td><td style="padding:4px 10px;border:1px solid #999">1</td><td style="padding:4px 10px;border:1px solid #999">2</td><td style="padding:4px 10px;border:1px solid #999">3</td></tr><tr><td style="padding:4px 10px;border:1px solid #999"><em>y</em></td><td style="padding:4px 10px;border:1px solid #999">−18</td><td style="padding:4px 10px;border:1px solid #999">−2</td><td style="padding:4px 10px;border:1px solid #999">2</td><td style="padding:4px 10px;border:1px solid #999">0</td><td style="padding:4px 10px;border:1px solid #999">−2</td><td style="padding:4px 10px;border:1px solid #999">2</td><td style="padding:4px 10px;border:1px solid #999">18</td></tr></table><br>This cubic has <strong>two turning points</strong>: a local maximum near (−1, 2) and a local minimum near (1, −2). It crosses the x-axis at three points (three roots).'
      }
    },
    {
      id: 'h-roots',
      type: 'heading',
      data: { text: 'Roots of a Cubic', level: 2 }
    },
    {
      id: 'p-roots',
      type: 'paragraph',
      data: { text: 'A cubic equation can have <strong>1 or 3 real roots</strong> (x-intercepts). If the curve just touches the x-axis at a turning point, that counts as a repeated root.' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Recognising a Cubic',
        text: 'In an exam, cubic graphs are identified by their <strong>S-shape</strong> and the fact they extend to ±∞ in opposite directions (unlike quadratics which go to ∞ in the same direction on both sides).'
      }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Remember that (−2)³ = −8, not 8. Cubing a negative number gives a <strong>negative</strong> result — unlike squaring.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Cubic graphs (y = ax³ + bx² + cx + d) have an S-shaped curve. If a > 0, the curve goes from bottom-left to top-right. Cubics can have 1 or 3 real roots and up to 2 turning points. Remember that cubing a negative gives a negative.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Cubic graphs are S-shaped curves that can have up to two turning points.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-shape', prompt: 'How does the sign of a affect a cubic graph?', answer: 'If a > 0, curve goes bottom-left to top-right. If a < 0, top-left to bottom-right.' },
      { id: 'cue-2', blockId: 'p-roots', prompt: 'How many real roots can a cubic have?', answer: '1 or 3 real roots.' },
      { id: 'cue-3', blockId: 'callout-key-shape', prompt: 'How many turning points can a cubic graph have?', answer: 'Up to 2 turning points.' },
      { id: 'cue-4', blockId: 'callout-warning-1', prompt: 'What is (−2)³?', answer: '−8 (cubing a negative gives a negative result).' }
    ]
  },
  evidence: []
};
