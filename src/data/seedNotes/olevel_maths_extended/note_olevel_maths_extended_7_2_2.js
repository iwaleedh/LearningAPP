export const note_olevel_maths_extended_7_2_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Vectors And Transformations/rotations.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Perform rotations about a given centre by a specified angle and direction, and fully describe rotations.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Rotations', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'A <strong>rotation</strong> turns a shape about a fixed point called the <strong>centre of rotation</strong>. Every point moves along a circular arc, staying the same distance from the centre. The shape and size do not change.' }
    },
    {
      id: 'callout-key-props',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Properties of Rotations',
        text: '• Object and image are <strong>congruent</strong><br>• The <strong>centre of rotation</strong> is an invariant point<br>• Distance from the centre to each point is preserved<br>• Positive angles = <strong>anticlockwise</strong>; negative angles = <strong>clockwise</strong>'
      }
    },
    {
      id: 'h-common',
      type: 'heading',
      data: { text: 'Rotations About the Origin', level: 2 }
    },
    {
      id: 'table-rotations',
      type: 'comparisonTable',
      data: {
        caption: 'Common rotations about (0, 0)',
        headers: ['Rotation', 'Rule'],
        rows: [
          ['90° anticlockwise', '(x, y) &rarr; (−y, x)'],
          ['90° clockwise', '(x, y) &rarr; (y, −x)'],
          ['180°', '(x, y) &rarr; (−x, −y)']
        ]
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Rotate the point (2, 5) by 90° clockwise about the origin.<br><br><strong>Solution:</strong><br>Rule: (x, y) &rarr; (y, −x)<br>(2, 5) &rarr; <strong>(5, −2)</strong>'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'Rotate the point (−3, 1) by 180° about the origin.<br><br><strong>Solution:</strong><br>Rule: (x, y) &rarr; (−x, −y)<br>(−3, 1) &rarr; <strong>(3, −1)</strong>'
      }
    },
    {
      id: 'h-describe',
      type: 'heading',
      data: { text: 'Describing a Rotation', level: 2 }
    },
    {
      id: 'p-describe',
      type: 'paragraph',
      data: { text: 'To fully describe a rotation, you need <strong>three</strong> pieces of information:<br>1. The word "<strong>rotation</strong>"<br>2. The <strong>angle</strong> of rotation<br>3. The <strong>direction</strong> (clockwise or anticlockwise)<br>4. The <strong>centre</strong> of rotation' }
    },
    {
      id: 'callout-tip-centre',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Finding the Centre of Rotation',
        text: 'Join a point to its image. Draw the perpendicular bisector of this line. Repeat for another pair. The centre of rotation is where the two perpendicular bisectors intersect. Use tracing paper in the exam to check.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'A rotation turns a shape about a fixed centre. Describe it with: the word "rotation", the angle, the direction, and the centre. The centre is the only invariant point. Object and image are congruent.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Rotations turn shapes about a centre. Specify angle, direction, and centre to describe one.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-props', prompt: 'What is the invariant point in a rotation?', answer: 'The centre of rotation.' },
      { id: 'cue-2', blockId: 'table-rotations', prompt: 'What is the rule for 90° clockwise rotation about the origin?', answer: '(x, y) &rarr; (y, −x).' },
      { id: 'cue-3', blockId: 'table-rotations', prompt: 'What is the rule for 180° rotation about the origin?', answer: '(x, y) &rarr; (−x, −y).' },
      { id: 'cue-4', blockId: 'p-describe', prompt: 'What three things do you need to describe a rotation?', answer: 'Angle, direction (clockwise/anticlockwise), and centre of rotation.' },
      { id: 'cue-5', blockId: 'callout-tip-centre', prompt: 'How do you find the centre of rotation?', answer: 'Draw perpendicular bisectors of lines joining points to their images — the centre is where they intersect.' }
    ]
  },
  evidence: []
};
