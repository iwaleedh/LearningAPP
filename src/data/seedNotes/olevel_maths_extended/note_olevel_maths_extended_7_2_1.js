export const note_olevel_maths_extended_7_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Vectors And Transformations/reflections.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Perform reflections in given mirror lines and describe reflections fully including the equation of the mirror line.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Reflections', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'A <strong>reflection</strong> is a transformation that produces a mirror image of a shape in a given <strong>line of reflection</strong> (mirror line). Each point and its image are the same perpendicular distance from the mirror line, on opposite sides.' }
    },
    {
      id: 'callout-key-props',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Properties of Reflections',
        text: '• Object and image are <strong>congruent</strong><br>• The image is <strong>laterally inverted</strong> (flipped)<br>• Points on the mirror line are <strong>invariant</strong> (they don\'t move)<br>• The mirror line is the <strong>perpendicular bisector</strong> of the line joining each point to its image'
      }
    },
    {
      id: 'h-common',
      type: 'heading',
      data: { text: 'Common Mirror Lines', level: 2 }
    },
    {
      id: 'table-lines',
      type: 'comparisonTable',
      data: {
        caption: 'Common mirror lines and their effects',
        headers: ['Mirror Line', 'Rule', 'Effect'],
        rows: [
          ['<em>x</em>-axis (y = 0)', '(x, y) &rarr; (x, −y)', 'Flip vertically'],
          ['<em>y</em>-axis (x = 0)', '(x, y) &rarr; (−x, y)', 'Flip horizontally'],
          ['y = x', '(x, y) &rarr; (y, x)', 'Swap coordinates'],
          ['y = −x', '(x, y) &rarr; (−y, −x)', 'Swap and negate'],
          ['x = k', '(x, y) &rarr; (2k − x, y)', 'Reflect in vertical line'],
          ['y = k', '(x, y) &rarr; (x, 2k − y)', 'Reflect in horizontal line']
        ]
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'Reflect the point (3, 1) in the line y = x.<br><br><strong>Solution:</strong><br>Swap coordinates: (3, 1) &rarr; <strong>(1, 3)</strong>'
      }
    },
    {
      id: 'h-describe',
      type: 'heading',
      data: { text: 'Describing a Reflection', level: 2 }
    },
    {
      id: 'p-describe',
      type: 'paragraph',
      data: { text: 'To fully describe a reflection, state:<br>1. The word "<strong>reflection</strong>"<br>2. The <strong>equation of the mirror line</strong> (e.g. y = 2, x = −1, y = x).' }
    },
    {
      id: 'callout-tip-find',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Finding the Mirror Line',
        text: 'To find the mirror line: pick a point and its image, find the midpoint, then check that the line is the perpendicular bisector of the segment joining them. If the shape flips horizontally &rarr; vertical line (x = k). If it flips vertically &rarr; horizontal line (y = k).'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'A reflection flips a shape across a mirror line. The image is congruent and laterally inverted. Points on the mirror line are invariant. Describe a reflection by naming the transformation and giving the equation of the mirror line.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Reflections flip shapes across a mirror line. Points on the mirror line are invariant. Always give the equation of the mirror line.',
    cues: [
      { id: 'cue-1', blockId: 'p-def', prompt: 'What is a reflection?', answer: 'A transformation that produces a mirror image across a line of reflection.' },
      { id: 'cue-2', blockId: 'callout-key-props', prompt: 'What points are invariant under a reflection?', answer: 'Points that lie on the mirror line.' },
      { id: 'cue-3', blockId: 'table-lines', prompt: 'What is the rule for reflecting in the line y = x?', answer: '(x, y) &rarr; (y, x) — swap the coordinates.' },
      { id: 'cue-4', blockId: 'p-describe', prompt: 'What must you state to describe a reflection?', answer: 'The word "reflection" and the equation of the mirror line.' },
      { id: 'cue-5', blockId: 'callout-tip-find', prompt: 'How do you find the mirror line given object and image?', answer: 'Find the midpoint of a point and its image — the mirror line is the perpendicular bisector.' }
    ]
  },
  evidence: []
};
