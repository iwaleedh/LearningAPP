export const note_olevel_maths_extended_4_4_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Geometry/lines-of-symmetry.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify and draw lines of symmetry in 2D shapes, and determine the number of lines of symmetry for common shapes.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Lines of Symmetry', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>line of symmetry</strong> (also called a <strong>mirror line</strong> or <strong>axis of symmetry</strong>) divides a shape into two halves that are <strong>mirror images</strong> of each other. If you fold the shape along the line, both halves match exactly.' }
    },
    {
      id: 'h-identifying',
      type: 'heading',
      data: { text: 'Identifying Lines of Symmetry', level: 2 }
    },
    {
      id: 'p-identifying',
      type: 'paragraph',
      data: { text: 'To check if a line is a line of symmetry, imagine folding the shape along that line. Every point on one side must land exactly on a corresponding point on the other side.' }
    },
    {
      id: 'table-shapes',
      type: 'comparisonTable',
      data: {
        caption: 'Lines of symmetry in common shapes',
        headers: ['Shape', 'Lines of Symmetry', 'Description'],
        rows: [
          ['Equilateral triangle', '3', 'Through each vertex to midpoint of opposite side'],
          ['Isosceles triangle', '1', 'Through the apex to midpoint of base'],
          ['Scalene triangle', '0', 'No lines of symmetry'],
          ['Square', '4', '2 through midpoints of opposite sides + 2 diagonals'],
          ['Rectangle', '2', 'Through midpoints of opposite sides only'],
          ['Rhombus', '2', 'Along each diagonal'],
          ['Parallelogram', '0', 'No lines of symmetry'],
          ['Kite', '1', 'Along the main diagonal (axis)'],
          ['Regular pentagon', '5', 'Through each vertex to midpoint of opposite side'],
          ['Regular hexagon', '6', '3 through opposite vertices + 3 through midpoints of sides'],
          ['Circle', '∞', 'Every diameter is a line of symmetry']
        ]
      }
    },
    {
      id: 'callout-key-regular',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Regular Polygons',
        text: 'A regular <em>n</em>-sided polygon always has exactly <strong><em>n</em> lines of symmetry</strong>.'
      }
    },
    {
      id: 'h-reflect',
      type: 'heading',
      data: { text: 'Reflection Symmetry on Coordinate Axes', level: 2 }
    },
    {
      id: 'p-reflect',
      type: 'paragraph',
      data: { text: 'Shapes on a coordinate grid may have lines of symmetry along the <em>x</em>-axis, <em>y</em>-axis, the line <em>y</em> = <em>x</em>, or the line <em>y</em> = −<em>x</em>. You may also need to reflect shapes in given mirror lines.' }
    },
    {
      id: 'list-reflect-rules',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Reflection in the <strong><em>x</em>-axis</strong>: (x, y) &rarr; (x, −y)' },
          { text: 'Reflection in the <strong><em>y</em>-axis</strong>: (x, y) &rarr; (−x, y)' },
          { text: 'Reflection in <strong><em>y</em> = <em>x</em></strong>: (x, y) &rarr; (y, x)' },
          { text: 'Reflection in <strong><em>y</em> = −<em>x</em></strong>: (x, y) &rarr; (−y, −x)' }
        ]
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'How many lines of symmetry does a regular octagon have?<br><br>A regular octagon has 8 sides.<br>Number of lines of symmetry = <strong>8</strong>'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Completing a Shape',
        text: 'A shape has a line of symmetry along the <em>y</em>-axis. One vertex is at (3, 4). What is the reflected vertex?<br><br>Reflection in the <em>y</em>-axis: (x, y) &rarr; (−x, y)<br>Reflected vertex: <strong>(−3, 4)</strong>'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'A <strong>rectangle</strong> has 2 lines of symmetry, NOT 4. The diagonals of a rectangle are NOT lines of symmetry (folding along a diagonal does not produce matching halves). Similarly, a <strong>parallelogram</strong> has 0 lines of symmetry.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If you are unsure whether a line is a line of symmetry, use tracing paper to fold the shape, or mark distances perpendicular to the line from both sides — they must be equal for every pair of points.'
      }
    },
    {
      id: 'checklist-exam',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can identify lines of symmetry in common shapes', checked: false },
          { text: 'I know a regular n-gon has n lines of symmetry', checked: false },
          { text: 'I can reflect points in the x-axis, y-axis, y = x and y = −x', checked: false },
          { text: 'I know rectangles have 2 (not 4) lines of symmetry', checked: false }
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'A line of symmetry divides a shape into two mirror-image halves. A regular n-sided polygon has n lines of symmetry. Key reflections: x-axis maps (x,y)&rarr;(x,−y), y-axis maps (x,y)&rarr;(−x,y). A rectangle has 2 lines of symmetry (not 4 — diagonals are not lines of symmetry).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'A line of symmetry divides a shape into two matching halves; regular n-gons have n lines.',
    cues: [
      { id: 'cue-1', blockId: 'p-intro', prompt: 'What is a line of symmetry?', answer: 'A line that divides a shape into two halves that are mirror images of each other.' },
      { id: 'cue-2', blockId: 'callout-key-regular', prompt: 'How many lines of symmetry does a regular n-sided polygon have?', answer: 'n lines of symmetry.' },
      { id: 'cue-3', blockId: 'callout-warning', prompt: 'How many lines of symmetry does a rectangle have and why not 4?', answer: '2 lines (through midpoints of opposite sides). The diagonals are not lines of symmetry because folding along them does not produce matching halves.' },
      { id: 'cue-4', blockId: 'list-reflect-rules', prompt: 'What happens to coordinates when reflecting in the y-axis?', answer: '(x, y) &rarr; (−x, y).' }
    ]
  },
  evidence: []
};
