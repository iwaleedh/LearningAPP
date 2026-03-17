export const note_olevel_maths_extended_9_3_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/lines-of-best-fit.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Draw a line of best fit by eye, use it to make estimates (interpolation and extrapolation), and understand the limitations of predictions.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Lines of Best Fit', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'A <strong>line of best fit</strong> is a straight line drawn through a scatter graph that best represents the data trend. It follows the pattern of the data with roughly equal numbers of points on each side.' }
    },
    {
      id: 'callout-key-draw',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Drawing a Line of Best Fit',
        text: '1. The line should follow the <strong>trend</strong> of the data<br>2. Roughly <strong>equal numbers</strong> of points above and below the line<br>3. The line should pass through or near the <strong>mean point</strong> (x̄, ȳ)<br>4. Ignore any obvious <strong>outliers</strong> when drawing'
      }
    },
    {
      id: 'h-interp',
      type: 'heading',
      data: { text: 'Interpolation vs Extrapolation', level: 2 }
    },
    {
      id: 'callout-key-interp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Using the Line of Best Fit',
        text: '<strong>Interpolation:</strong> estimating within the range of the data — generally <strong>reliable</strong>.<br><br><strong>Extrapolation:</strong> estimating outside the range of the data — <strong>unreliable</strong> because the trend may not continue.'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A scatter graph shows hours of sunshine vs ice cream sales for values 2–10 hours. The line of best fit passes through (2, 100) and (10, 500).<br><br><strong>Interpolation:</strong> At 6 hours &rarr; read from line ≈ <strong>300 sales</strong> ✓ reliable<br><strong>Extrapolation:</strong> At 14 hours &rarr; extend line ≈ 700 sales ✗ unreliable'
      }
    },
    {
      id: 'callout-tip-mean',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If given the mean point, plot it and ensure your line passes through it. This anchor point helps accuracy. Use a transparent ruler for best placement.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'A line of best fit represents the data trend with equal points either side. Interpolation (within data range) is reliable; extrapolation (outside) is unreliable. Use the mean point as an anchor.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Line of best fit follows the trend with equal points each side. Interpolation is reliable; extrapolation is not.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-draw', prompt: 'What should a line of best fit pass through?', answer: 'The mean point (x̄, ȳ), with roughly equal points above and below.' },
      { id: 'cue-2', blockId: 'callout-key-interp', prompt: 'What is interpolation?', answer: 'Estimating within the range of data — generally reliable.' },
      { id: 'cue-3', blockId: 'callout-key-interp', prompt: 'Why is extrapolation unreliable?', answer: 'It estimates outside the data range where the trend may not continue.' },
      { id: 'cue-4', blockId: 'callout-key-draw', prompt: 'Should outliers be considered when drawing a line of best fit?', answer: 'No — ignore obvious outliers.' }
    ]
  },
  evidence: []
};
