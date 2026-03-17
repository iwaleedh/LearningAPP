export const note_olevel_maths_extended_3_4_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Coordinate Geometry And Graphs/exponential-graphs.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Recognise, plot and interpret exponential graphs of the form y = aˣ and y = a⁻ˣ.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Exponential Graphs', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'An <strong>exponential function</strong> has the variable in the <strong>exponent</strong> (power). The most common forms are <em>y</em> = <em>a</em><sup><em>x</em></sup> (growth) and <em>y</em> = <em>a</em><sup>−<em>x</em></sup> (decay), where <em>a</em> > 0 and <em>a</em> ≠ 1.' }
    },
    {
      id: 'callout-key-shapes',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Shapes of Exponential Graphs',
        text: '<strong>Growth (<em>y</em> = <em>a</em><sup><em>x</em></sup> where <em>a</em> > 1):</strong><br>• Curve rises steeply to the right<br>• Approaches 0 from above as <em>x</em> &rarr; −∞ (never reaches 0)<br>• Always passes through (0, 1)<br><br><strong>Decay (<em>y</em> = <em>a</em><sup>−<em>x</em></sup> or 0 < <em>a</em> < 1):</strong><br>• Curve falls steeply, approaching 0 as <em>x</em> &rarr; +∞<br>• Always passes through (0, 1)<br><br>The x-axis (<em>y</em> = 0) is a <strong>horizontal asymptote</strong> for both.'
      }
    },
    {
      id: 'h-growth',
      type: 'heading',
      data: { text: 'Exponential Growth: y = 2ˣ', level: 2 }
    },
    {
      id: 'table-growth',
      type: 'comparisonTable',
      data: {
        caption: 'Table of values for y = 2ˣ',
        headers: ['x', '−3', '−2', '−1', '0', '1', '2', '3', '4'],
        rows: [
          ['y', '⅛', '¼', '½', '1', '2', '4', '8', '16']
        ]
      }
    },
    {
      id: 'p-growth',
      type: 'paragraph',
      data: { text: 'The value of <em>y</em> <strong>doubles</strong> each time <em>x</em> increases by 1. The curve passes through (0, 1) and gets very close to the x-axis on the left but never touches it.' }
    },
    {
      id: 'h-decay',
      type: 'heading',
      data: { text: 'Exponential Decay: y = 2⁻ˣ', level: 2 }
    },
    {
      id: 'table-decay',
      type: 'comparisonTable',
      data: {
        caption: 'Table of values for y = 2⁻ˣ',
        headers: ['x', '−3', '−2', '−1', '0', '1', '2', '3'],
        rows: [
          ['y', '8', '4', '2', '1', '½', '¼', '⅛']
        ]
      }
    },
    {
      id: 'p-decay',
      type: 'paragraph',
      data: { text: 'This is a <strong>reflection</strong> of <em>y</em> = 2<sup><em>x</em></sup> in the y-axis. The value of <em>y</em> <strong>halves</strong> each time <em>x</em> increases by 1.' }
    },
    {
      id: 'h-properties',
      type: 'heading',
      data: { text: 'Key Properties', level: 2 }
    },
    {
      id: 'list-properties',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'All exponential curves pass through <strong>(0, 1)</strong> since <em>a</em>⁰ = 1' },
          { text: 'The y-values are <strong>always positive</strong> — the curve never goes below the x-axis' },
          { text: 'The x-axis is a <strong>horizontal asymptote</strong>' },
          { text: 'There are <strong>no x-intercepts</strong> (the curve never crosses the x-axis)' },
          { text: 'The graph of <em>y</em> = <em>ka</em><sup><em>x</em></sup> passes through (0, <em>k</em>) instead of (0, 1)' }
        ]
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — y = 3 × 2ˣ',
        text: 'Plot <em>y</em> = 3 × 2<sup><em>x</em></sup> for −2 ≤ <em>x</em> ≤ 3.<br><br><table style="border-collapse:collapse;text-align:center"><tr><td style="padding:4px 10px;border:1px solid #999"><em>x</em></td><td style="padding:4px 10px;border:1px solid #999">−2</td><td style="padding:4px 10px;border:1px solid #999">−1</td><td style="padding:4px 10px;border:1px solid #999">0</td><td style="padding:4px 10px;border:1px solid #999">1</td><td style="padding:4px 10px;border:1px solid #999">2</td><td style="padding:4px 10px;border:1px solid #999">3</td></tr><tr><td style="padding:4px 10px;border:1px solid #999"><em>y</em></td><td style="padding:4px 10px;border:1px solid #999">0.75</td><td style="padding:4px 10px;border:1px solid #999">1.5</td><td style="padding:4px 10px;border:1px solid #999">3</td><td style="padding:4px 10px;border:1px solid #999">6</td><td style="padding:4px 10px;border:1px solid #999">12</td><td style="padding:4px 10px;border:1px solid #999">24</td></tr></table><br>This passes through (0, 3) — the "3 ×" shifts the curve upward.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'To distinguish exponential from other curves: exponential graphs are <strong>always above the x-axis</strong>, pass through (0, 1) or (0, <em>k</em>), and increase/decrease by a constant <strong>multiplier</strong> (not a constant amount).'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Exponential graphs (y = aˣ) show rapid growth or decay. They always pass through (0, 1), stay above the x-axis, and have y = 0 as a horizontal asymptote. Growth (a > 1) rises steeply right; decay (a⁻ˣ) falls steeply. The curve y = kaˣ passes through (0, k).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Exponential graphs show rapid growth or decay with a horizontal asymptote at y = 0.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-shapes', prompt: 'What point do all graphs of y = aˣ pass through?', answer: '(0, 1), because a⁰ = 1.' },
      { id: 'cue-2', blockId: 'callout-key-shapes', prompt: 'What is the horizontal asymptote of an exponential graph?', answer: 'The x-axis (y = 0).' },
      { id: 'cue-3', blockId: 'list-properties', prompt: 'Can an exponential graph have negative y-values?', answer: 'No — y-values are always positive for y = aˣ.' },
      { id: 'cue-4', blockId: 'p-decay', prompt: 'How is y = 2⁻ˣ related to y = 2ˣ?', answer: 'It is a reflection of y = 2ˣ in the y-axis.' },
      { id: 'cue-5', blockId: 'callout-worked-1', prompt: 'What point does y = 3 × 2ˣ pass through when x = 0?', answer: '(0, 3)' }
    ]
  },
  evidence: []
};
