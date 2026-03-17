export const note_olevel_maths_extended_6_4_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Pythagoras And Trigonometry/periods-and-amplitudes.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and determine the period, amplitude, and transformations of trigonometric graphs of the form y = a sin(bx) + c and y = a cos(bx) + c.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Periods and Amplitudes', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'The basic trig graphs can be <strong>stretched, compressed, reflected, and shifted</strong>. Two key measures describe these transformations: the <strong>amplitude</strong> and the <strong>period</strong>.' }
    },
    {
      id: 'h-amplitude',
      type: 'heading',
      data: { text: 'Amplitude', level: 2 }
    },
    {
      id: 'p-amplitude',
      type: 'paragraph',
      data: { text: 'The <strong>amplitude</strong> is the distance from the centre line (midline) to the maximum (or minimum). For y = a sin x or y = a cos x, the amplitude is <strong>|a|</strong>.' }
    },
    {
      id: 'list-amplitude',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'y = 3 sin x has amplitude <strong>3</strong> — range is −3 to 3' },
          { text: 'y = 0.5 cos x has amplitude <strong>0.5</strong> — range is −0.5 to 0.5' },
          { text: 'If a is <strong>negative</strong>, the graph is reflected in the x-axis (flipped upside down)' }
        ]
      }
    },
    {
      id: 'h-period',
      type: 'heading',
      data: { text: 'Period', level: 2 }
    },
    {
      id: 'p-period',
      type: 'paragraph',
      data: { text: 'The <strong>period</strong> is the horizontal distance for one complete cycle. For y = sin(bx) or y = cos(bx):' }
    },
    {
      id: 'eq-period',
      type: 'equation',
      data: {
        html: 'Period = <span class="nb-frac"><span class="nb-num">360°</span><span class="nb-den">b</span></span>',
        caption: 'Period formula for y = sin(bx) or y = cos(bx)'
      }
    },
    {
      id: 'list-period',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'y = sin 2x has period 360°/2 = <strong>180°</strong> (compressed — 2 cycles in 360°)' },
          { text: 'y = cos 3x has period 360°/3 = <strong>120°</strong> (3 cycles in 360°)' },
          { text: 'y = sin(x/2) has period 360°/(½) = <strong>720°</strong> (stretched — half a cycle in 360°)' }
        ]
      }
    },
    {
      id: 'h-vertical',
      type: 'heading',
      data: { text: 'Vertical Shift', level: 2 }
    },
    {
      id: 'p-vertical',
      type: 'paragraph',
      data: { text: 'Adding a constant c shifts the graph <strong>vertically</strong>: y = sin x + 2 moves the entire graph up by 2 units. The midline becomes y = c instead of y = 0.' }
    },
    {
      id: 'table-summary',
      type: 'comparisonTable',
      data: {
        caption: 'Transformations of y = a sin(bx) + c',
        headers: ['Parameter', 'Effect', 'Example'],
        rows: [
          ['a (amplitude)', 'Vertical stretch by factor |a|; negative reflects in x-axis', 'y = 3 sin x &rarr; range [−3, 3]'],
          ['b (frequency)', 'Horizontal compression; period = 360°/b', 'y = sin 2x &rarr; period 180°'],
          ['c (vertical shift)', 'Shifts graph up (+c) or down (−c)', 'y = sin x + 1 &rarr; midline y = 1']
        ]
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Identifying Parameters',
        text: 'A graph oscillates between y = 5 and y = −1 with a period of 120°. Find a, b, and c for y = a sin(bx) + c.<br><br><strong>Solution:</strong><br>Amplitude a = (5 − (−1))/2 = 6/2 = <strong>3</strong><br>Midline c = (5 + (−1))/2 = 4/2 = <strong>2</strong><br>Period = 360°/b &rarr; 120 = 360/b &rarr; b = <strong>3</strong><br>Equation: y = 3 sin(3x) + 2'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'To find amplitude from a graph: amplitude = (max − min)/2. To find the midline: c = (max + min)/2.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'For y = a sin(bx) + c: amplitude = |a|, period = 360°/b, midline = c. Negative a reflects in the x-axis. Read parameters from a graph using max/min values and cycle width.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-amplitude', prompt: 'What is the amplitude of y = a sin x?', answer: '|a| — the distance from the midline to the maximum.' },
      { id: 'cue-2', blockId: 'eq-period', prompt: 'What is the period of y = sin(bx)?', answer: '360°/b.' },
      { id: 'cue-3', blockId: 'callout-tip', prompt: 'How do you find amplitude and midline from a graph?', answer: 'Amplitude = (max−min)/2. Midline c = (max+min)/2.' },
      { id: 'cue-4', blockId: 'list-amplitude', prompt: 'What happens when a is negative in y = a sin x?', answer: 'The graph is reflected in the x-axis (flipped upside down).' },
      { id: 'cue-5', blockId: 'p-vertical', prompt: 'What does adding c do to y = sin x?', answer: 'Shifts the graph vertically by c units (up if positive, down if negative). Midline moves to y = c.' }
    ],
    summaryText: 'y = a sin(bx)+c: amplitude |a|, period 360°/b, midline y = c. Read from graph: amplitude=(max−min)/2, midline=(max+min)/2.',
    ready: true
  },
  evidence: []
};
