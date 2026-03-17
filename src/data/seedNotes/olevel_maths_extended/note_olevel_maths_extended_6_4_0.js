export const note_olevel_maths_extended_6_4_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Pythagoras And Trigonometry/trigonometric-graphs.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Recognise and sketch the graphs of y = sin x, y = cos x, and y = tan x for 0° ≤ x ≤ 360°.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Trigonometric Graphs', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'The three trigonometric functions produce distinctive wave-shaped graphs. You need to know their key features: shape, range, period, and important values.' }
    },
    {
      id: 'h-sin',
      type: 'heading',
      data: { text: 'The Graph of y = sin x', level: 2 }
    },
    {
      id: 'list-sin',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Starts at the origin (0, 0)' },
          { text: 'Maximum value of <strong>1</strong> at x = 90°' },
          { text: 'Returns to 0 at x = 180°' },
          { text: 'Minimum value of <strong>−1</strong> at x = 270°' },
          { text: 'Returns to 0 at x = 360°' },
          { text: '<strong>Period:</strong> 360°' },
          { text: '<strong>Range:</strong> −1 ≤ y ≤ 1' }
        ]
      }
    },
    {
      id: 'h-cos',
      type: 'heading',
      data: { text: 'The Graph of y = cos x', level: 2 }
    },
    {
      id: 'list-cos',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Starts at (0, <strong>1</strong>)' },
          { text: 'Reaches 0 at x = 90°' },
          { text: 'Minimum value of <strong>−1</strong> at x = 180°' },
          { text: 'Returns to 0 at x = 270°' },
          { text: 'Back to 1 at x = 360°' },
          { text: '<strong>Period:</strong> 360°' },
          { text: '<strong>Range:</strong> −1 ≤ y ≤ 1' }
        ]
      }
    },
    {
      id: 'callout-key-sincos',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — sin and cos Relationship',
        text: 'The cos graph is the <strong>sin graph shifted 90° to the left</strong>: cos x = sin(x + 90°). They have the same shape, period, and range.'
      }
    },
    {
      id: 'h-tan',
      type: 'heading',
      data: { text: 'The Graph of y = tan x', level: 2 }
    },
    {
      id: 'list-tan',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Starts at the origin (0, 0)' },
          { text: '<strong>Asymptotes</strong> (vertical lines the curve never touches) at x = 90° and x = 270°' },
          { text: 'Passes through (180°, 0)' },
          { text: '<strong>Period:</strong> 180° (repeats every 180°, not 360°)' },
          { text: '<strong>Range:</strong> all real numbers (−∞ to ∞)' }
        ]
      }
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of trigonometric graph features',
        headers: ['Feature', 'y = sin x', 'y = cos x', 'y = tan x'],
        rows: [
          ['Period', '360°', '360°', '180°'],
          ['Range', '−1 ≤ y ≤ 1', '−1 ≤ y ≤ 1', 'All real numbers'],
          ['y-intercept', '0', '1', '0'],
          ['Asymptotes', 'None', 'None', 'x = 90°, 270°, ...'],
          ['Maximum', '1 (at 90°)', '1 (at 0°, 360°)', 'None'],
          ['Minimum', '−1 (at 270°)', '−1 (at 180°)', 'None']
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If asked to "sketch" a trig graph, label key values on both axes (0, 90, 180, 270, 360 on x; −1, 0, 1 on y). For tan, draw dashed lines for asymptotes.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'sin x: starts at 0, period 360°, range [−1, 1]. cos x: starts at 1, period 360°, range [−1, 1]. tan x: starts at 0, period 180°, has asymptotes, range (−∞, ∞).' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-sin', prompt: 'What is the period and range of y = sin x?', answer: 'Period 360°, range −1 ≤ y ≤ 1.' },
      { id: 'cue-2', blockId: 'list-tan', prompt: 'What is the period of y = tan x and where are the asymptotes?', answer: 'Period 180°. Asymptotes at x = 90°, 270° (every 180° from 90°).' },
      { id: 'cue-3', blockId: 'callout-key-sincos', prompt: 'How are the sin and cos graphs related?', answer: 'cos x = sin(x + 90°). The cos graph is the sin graph shifted 90° left.' },
      { id: 'cue-4', blockId: 'table-compare', prompt: 'Which trig graph has no maximum or minimum?', answer: 'y = tan x — its range is all real numbers.' }
    ],
    summaryText: 'sin and cos have period 360° and range [−1,1]. tan has period 180°, asymptotes, and unbounded range.',
    ready: true
  },
  evidence: []
};
