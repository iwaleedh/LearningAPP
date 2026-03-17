export const note_olevel_maths_extended_3_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Coordinate Geometry And Graphs/gradient-of-a-line.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate and interpret the gradient (slope) of a straight line from coordinates or a graph.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Gradient of a Line', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'The <strong>gradient</strong> (or slope) of a line measures how steep it is. It tells you how much the line rises or falls for every unit it moves horizontally. The gradient is usually represented by the letter <strong><em>m</em></strong>.' }
    },
    {
      id: 'callout-key-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Gradient Formula',
        text: 'For two points (<em>x</em>₁, <em>y</em>₁) and (<em>x</em>₂, <em>y</em>₂):<br><br><strong><em>m</em> = <span class="nb-frac"><span class="nb-num"><em>y</em>₂ − <em>y</em>₁</span><span class="nb-den"><em>x</em>₂ − <em>x</em>₁</span></span> = <span class="nb-frac"><span class="nb-num">rise</span><span class="nb-den">run</span></span></strong>'
      }
    },
    {
      id: 'eq-gradient',
      type: 'equation',
      data: {
        html: '<em>m</em> = <span class="nb-frac"><span class="nb-num"><em>y</em>₂ − <em>y</em>₁</span><span class="nb-den"><em>x</em>₂ − <em>x</em>₁</span></span> = <span class="nb-frac"><span class="nb-num">change in <em>y</em></span><span class="nb-den">change in <em>x</em></span></span>',
        caption: 'Gradient formula'
      }
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Types of Gradient', level: 2 }
    },
    {
      id: 'table-types',
      type: 'comparisonTable',
      data: {
        caption: 'Interpreting the sign of the gradient',
        headers: ['Gradient', 'Direction', 'Description'],
        rows: [
          ['Positive (m > 0)', 'Uphill ↗', 'Line slopes upward from left to right'],
          ['Negative (m < 0)', 'Downhill ↘', 'Line slopes downward from left to right'],
          ['Zero (m = 0)', 'Horizontal &rarr;', 'Flat line (y = constant)'],
          ['Undefined', 'Vertical ↑', 'x = constant (division by zero)']
        ]
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Find the gradient of the line through A(1, 3) and B(4, 9).<br><br><em>m</em> = <span class="nb-frac"><span class="nb-num">9 − 3</span><span class="nb-den">4 − 1</span></span> = <span class="nb-frac"><span class="nb-num">6</span><span class="nb-den">3</span></span> = <strong>2</strong><br><br>The line rises 2 units for every 1 unit across — a positive gradient.'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Negative Gradient',
        text: 'Find the gradient of the line through (−2, 7) and (3, −3).<br><br><em>m</em> = <span class="nb-frac"><span class="nb-num">−3 − 7</span><span class="nb-den">3 − (−2)</span></span> = <span class="nb-frac"><span class="nb-num">−10</span><span class="nb-den">5</span></span> = <strong>−2</strong><br><br>The line goes downhill from left to right.'
      }
    },
    {
      id: 'h-from-graph',
      type: 'heading',
      data: { text: 'Finding Gradient from a Graph', level: 2 }
    },
    {
      id: 'list-from-graph',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Pick two points on the line that lie exactly on grid intersections' },
          { text: 'Draw a right-angled triangle between them' },
          { text: 'Count the vertical distance (rise) and horizontal distance (run)' },
          { text: 'Calculate gradient = rise ÷ run' },
          { text: 'Check if the line goes uphill (+) or downhill (−)' }
        ]
      }
    },
    {
      id: 'callout-worked-graph',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — From a Graph',
        text: 'A straight line passes through (0, 1) and (4, 3).<br><br>Rise = 3 − 1 = 2<br>Run = 4 − 0 = 4<br><br><em>m</em> = <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">4</span></span> = <strong>0.5</strong><br><br>The line is relatively gentle — it goes up half a unit for every unit across.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When reading gradient from a graph, pick points that are <strong>far apart</strong> — this reduces rounding errors. The gradient is the same between any two points on a straight line.'
      }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Make sure you subtract in the <strong>same order</strong>: if you do <em>y</em>₂ − <em>y</em>₁ on top, you must do <em>x</em>₂ − <em>x</em>₁ on the bottom. Swapping the order in only one gives the wrong sign.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'The gradient m = (y₂ − y₁)/(x₂ − x₁) measures steepness. Positive gradient = uphill, negative = downhill, zero = horizontal, undefined = vertical. Always subtract in the same order for both coordinates.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Gradient measures steepness as rise/run between two points.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-formula', prompt: 'State the gradient formula.', answer: 'm = (y₂ − y₁) / (x₂ − x₁)' },
      { id: 'cue-2', blockId: 'table-types', prompt: 'What does a negative gradient mean?', answer: 'The line slopes downward from left to right.' },
      { id: 'cue-3', blockId: 'table-types', prompt: 'What is the gradient of a horizontal line?', answer: 'Zero.' },
      { id: 'cue-4', blockId: 'callout-worked-1', prompt: 'Find the gradient of the line through (1, 3) and (4, 9).', answer: 'm = 6/3 = 2' },
      { id: 'cue-5', blockId: 'table-types', prompt: 'Why is the gradient of a vertical line undefined?', answer: 'Because the x-coordinates are equal, making the denominator zero (division by zero).' }
    ]
  },
  evidence: []
};
