export const note_olevel_maths_extended_7_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Vectors And Transformations/introduction-to-vectors.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand what a vector is, distinguish between scalars and vectors, and use correct vector notation.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Introduction to Vectors', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'A <strong>vector</strong> is a quantity that has both <em>magnitude</em> (size) and <em>direction</em>. A <strong>scalar</strong> is a quantity that has only magnitude. For example, speed is a scalar but velocity is a vector because velocity includes direction.' }
    },
    {
      id: 'callout-key-types',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Scalars vs Vectors',
        text: '<strong>Scalars:</strong> distance, speed, mass, temperature, time, area<br><strong>Vectors:</strong> displacement, velocity, acceleration, force, momentum'
      }
    },
    {
      id: 'h-notation',
      type: 'heading',
      data: { text: 'Vector Notation', level: 2 }
    },
    {
      id: 'p-notation',
      type: 'paragraph',
      data: { text: 'Vectors can be written in several ways:' }
    },
    {
      id: 'list-notation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Bold lowercase letter:</strong> <strong>a</strong>, <strong>b</strong> (in handwriting, underline: <u>a</u>)' },
          { text: '<strong>Column vector:</strong> written as a pair showing horizontal and vertical components' },
          { text: '<strong>Two-letter notation:</strong> <span style="text-decoration:overline">AB</span> means the vector from point A to point B' }
        ]
      }
    },
    {
      id: 'callout-key-column',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Column Vectors',
        text: 'A column vector is written as a pair of numbers in a column. The top number gives the horizontal movement (positive = right, negative = left). The bottom number gives the vertical movement (positive = up, negative = down).<br><br>Example: The vector (3, −2) means move 3 right and 2 down.'
      }
    },
    {
      id: 'h-equal',
      type: 'heading',
      data: { text: 'Equal and Negative Vectors', level: 2 }
    },
    {
      id: 'p-equal',
      type: 'paragraph',
      data: { text: 'Two vectors are <strong>equal</strong> if they have the same magnitude and direction — they do not need to start at the same point. The <strong>negative</strong> of a vector has the same magnitude but <em>opposite direction</em>: if <strong>a</strong> = (3, 2) then −<strong>a</strong> = (−3, −2).' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'If <strong>a</strong> = (4, −1), write down:<br>(a) −<strong>a</strong><br>(b) 2<strong>a</strong><br><br><strong>Solution:</strong><br>(a) −<strong>a</strong> = (−4, 1) — reverse both components<br>(b) 2<strong>a</strong> = (8, −2) — multiply both components by 2'
      }
    },
    {
      id: 'callout-tip-zero',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Zero Vector',
        text: 'The <strong>zero vector</strong> (0, 0) has magnitude 0 and no direction. It results when a vector is added to its negative: <strong>a</strong> + (−<strong>a</strong>) = <strong>0</strong>.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'A vector has both magnitude and direction. Vectors are written using bold letters, column notation, or two-letter notation. Equal vectors have the same magnitude and direction. The negative of a vector reverses its direction.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Vectors have magnitude and direction; scalars have magnitude only. Column vectors show horizontal and vertical components.',
    cues: [
      { id: 'cue-1', blockId: 'p-def', prompt: 'What is the difference between a scalar and a vector?', answer: 'A scalar has magnitude only; a vector has both magnitude and direction.' },
      { id: 'cue-2', blockId: 'callout-key-column', prompt: 'In a column vector, what do the top and bottom numbers represent?', answer: 'The top number is horizontal movement (positive = right); the bottom is vertical movement (positive = up).' },
      { id: 'cue-3', blockId: 'p-equal', prompt: 'What does the negative of a vector mean?', answer: 'It has the same magnitude but opposite direction — reverse both components.' },
      { id: 'cue-4', blockId: 'callout-key-types', prompt: 'Give two examples each of scalars and vectors.', answer: 'Scalars: distance, speed. Vectors: displacement, velocity.' },
      { id: 'cue-5', blockId: 'callout-worked-1', prompt: 'If a = (4, −1), what is 2a?', answer: '2a = (8, −2) — multiply each component by the scalar.' }
    ]
  },
  evidence: []
};
