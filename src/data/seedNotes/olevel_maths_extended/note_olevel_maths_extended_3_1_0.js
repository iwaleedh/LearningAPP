export const note_olevel_maths_extended_3_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Coordinate Geometry And Graphs/coordinates.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Read, plot and interpret coordinates in all four quadrants of the Cartesian plane.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Coordinates and the Cartesian Plane', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'The <strong>Cartesian plane</strong> (or coordinate plane) is formed by two perpendicular number lines: the horizontal <strong>x-axis</strong> and the vertical <strong>y-axis</strong>. They intersect at the <strong>origin</strong>, labelled <strong>O (0, 0)</strong>.' }
    },
    {
      id: 'callout-key-coords',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Coordinate Notation',
        text: 'A point is written as an <strong>ordered pair (x, y)</strong>.<br>The <em>x</em>-coordinate (abscissa) gives the horizontal position.<br>The <em>y</em>-coordinate (ordinate) gives the vertical position.<br><br>Example: The point (3, −2) means 3 units right and 2 units down from the origin.'
      }
    },
    {
      id: 'h-quadrants',
      type: 'heading',
      data: { text: 'The Four Quadrants', level: 2 }
    },
    {
      id: 'p-quadrants',
      type: 'paragraph',
      data: { text: 'The axes divide the plane into four regions called <strong>quadrants</strong>, numbered anticlockwise from the top-right.' }
    },
    {
      id: 'table-quadrants',
      type: 'comparisonTable',
      data: {
        caption: 'Signs of coordinates in each quadrant',
        headers: ['Quadrant', 'x-sign', 'y-sign', 'Example'],
        rows: [
          ['1st (top-right)', '+', '+', '(4, 3)'],
          ['2nd (top-left)', '−', '+', '(−2, 5)'],
          ['3rd (bottom-left)', '−', '−', '(−3, −4)'],
          ['4th (bottom-right)', '+', '−', '(6, −1)']
        ]
      }
    },
    {
      id: 'callout-tip-axis',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Points on the Axes',
        text: 'If a point lies <strong>on the x-axis</strong>, its y-coordinate is 0, e.g. (5, 0).<br>If a point lies <strong>on the y-axis</strong>, its x-coordinate is 0, e.g. (0, −3).<br>The origin (0, 0) lies on both axes.'
      }
    },
    {
      id: 'h-plotting',
      type: 'heading',
      data: { text: 'Plotting and Reading Coordinates', level: 2 }
    },
    {
      id: 'list-plotting',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Start at the origin O' },
          { text: 'Move <strong>horizontally</strong> by the x-value (right if positive, left if negative)' },
          { text: 'Move <strong>vertically</strong> by the y-value (up if positive, down if negative)' },
          { text: 'Mark the point and label it' }
        ]
      }
    },
    {
      id: 'callout-worked-plot',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Reading Coordinates',
        text: 'A point P is 4 units to the left of the origin and 3 units above the x-axis. What are its coordinates?<br><br>Left of origin &rarr; x = −4<br>Above x-axis &rarr; y = 3<br><br><strong>P = (−4, 3)</strong> — this is in the 2nd quadrant ✓'
      }
    },
    {
      id: 'h-3d',
      type: 'heading',
      data: { text: '3D Coordinates (Extended)', level: 2 }
    },
    {
      id: 'p-3d',
      type: 'paragraph',
      data: { text: 'In three dimensions, a third axis (the <strong>z-axis</strong>) is added perpendicular to both the x- and y-axes. Points are written as <strong>(x, y, z)</strong>. For example, (2, 3, 5) is 2 units along x, 3 units along y, and 5 units along z.' }
    },
    {
      id: 'callout-worked-3d',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — 3D Coordinates',
        text: 'A cuboid has one vertex at the origin. It has length 4 along the x-axis, width 3 along the y-axis, and height 2 along the z-axis. State the coordinates of the vertex diagonally opposite the origin.<br><br>The opposite vertex is at the maximum of each dimension:<br><strong>(4, 3, 2)</strong>'
      }
    },
    {
      id: 'callout-warning-order',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Always write coordinates as <strong>(x, y)</strong> — horizontal first, then vertical. Mixing up the order gives the wrong point. Remember: <em>"along the corridor and up the stairs"</em>.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Coordinates are ordered pairs (x, y) that locate points on the Cartesian plane. The plane has four quadrants with different sign combinations. In 3D, coordinates are written as (x, y, z). Always write x before y.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Coordinates locate points using ordered pairs on the Cartesian plane.',
    cues: [
      { id: 'cue-1', blockId: 'p-intro', prompt: 'What are the two axes of the Cartesian plane?', answer: 'The horizontal x-axis and the vertical y-axis.' },
      { id: 'cue-2', blockId: 'table-quadrants', prompt: 'In which quadrant are both coordinates negative?', answer: 'The 3rd quadrant (bottom-left).' },
      { id: 'cue-3', blockId: 'callout-tip-axis', prompt: 'What is the y-coordinate of any point on the x-axis?', answer: 'Zero.' },
      { id: 'cue-4', blockId: 'callout-key-coords', prompt: 'In the ordered pair (x, y), which coordinate gives horizontal position?', answer: 'The x-coordinate (abscissa).' },
      { id: 'cue-5', blockId: 'p-3d', prompt: 'How are points written in three dimensions?', answer: 'As (x, y, z) — an ordered triple.' }
    ]
  },
  evidence: []
};
