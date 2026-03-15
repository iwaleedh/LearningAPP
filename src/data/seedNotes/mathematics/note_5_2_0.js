export const note_mathematics_5_2_0 = {
  pdfPath: '/notes/mathematics/quantities-and-units-in-mechanics/scalars-and-vectors.pdf',
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand the difference between scalars and vectors, and work with vectors to find magnitude and direction.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Scalars and Vectors', level: 2 }
    },
    {
      id: 'p-1',
      type: 'paragraph',
      data: { text: 'Mechanics uses a variety of different scalar and vector quantities to describe forces and motion. <strong>Scalars</strong> are quantities without direction; they only have a size (magnitude). For example, a speed of 7 m/s, a distance of 5 m, a time of 15 s, or a mass of 12 kg. Scalars can only be positive.' }
    },
    {
      id: 'callout-vectors',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Vectors',
        text: 'Vectors are quantities which also have a direction. This is what makes them more than just a scalar. For instance, two objects with velocities of 7 m/s and -7 m/s are travelling at the same speed but in opposite directions. Vector quantities can have positive or negative components. Examples include displacement, velocity, acceleration, force, and momentum.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Working with Vectors', level: 2 }
    },
    {
      id: 'p-2',
      type: 'paragraph',
      data: { text: 'Vectors will most commonly represent forces, accelerations, or velocities; they can also represent displacement. There are two notations used in A Level mathematics:' }
    },
    {
      id: 'list-notation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Column vectors</strong>: One number written above the other enclosed in brackets. The top number represents the horizontal (x) direction, and the bottom number represents the vertical (y) direction.' },
          { text: '<strong>i and j notation</strong>: <strong>i</strong> and <strong>j</strong> are unit vectors (magnitude 1) in the positive horizontal and positive vertical directions respectively. For example, (-4i + 3j) means 4 units in the negative horizontal direction and 3 units in the positive vertical direction.' }
        ]
      }
    },
    {
      id: 'p-3',
      type: 'paragraph',
      data: { text: 'Pythagoras is used to find the magnitude of a vector. Trigonometry is used to find the direction of a vector. Adding vectors together gives the resultant vector.' }
    },
    {
      id: 'eq-magnitude',
      type: 'equation',
      data: {
        html: '|R| = &radic;(R<sub>x</sub><sup>2</sup> + R<sub>y</sub><sup>2</sup>)',
        caption: 'Magnitude of a resultant vector R'
      }
    },
    {
      id: 'callout-resolving',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Resolving Vectors',
        text: 'Resolving a vector means writing it in component form (as i and j components). Given the magnitude and direction of a vector, you can work out its components using trigonometry (SOHCAHTOA).'
      }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Calculate resultant vector magnitude',
        text: 'Two forces F<sub>1</sub> = -7i + 3j and F<sub>2</sub> = 4i + 6j act on a particle P. Find the magnitude of the resultant force R.\n\nResultant force R = (-7i + 3j) + (4i + 6j) = -3i + 9j\n\n|R| = &radic;((-3)<sup>2</sup> + 9<sup>2</sup>) = &radic;(9 + 81) = &radic;90'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Scalars only have magnitude. Vectors have both magnitude and direction. Pythagoras can be used for finding magnitudes, and vectors can be represented using column or i, j notation.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-1', prompt: 'What is a scalar quantity and give two examples?' },
      { id: 'cue-2', blockId: 'callout-vectors', prompt: 'What is a vector quantity and give two examples?' },
      { id: 'cue-3', blockId: 'list-notation', prompt: 'What are the two common ways of representing vectors?' },
      { id: 'cue-4', blockId: 'p-3', prompt: 'How do you find the magnitude of a vector?' }
    ],
    summaryText: 'Scalars have only size, vectors have both size and direction. Magnitude is found with Pythagoras, vectors use column or unit vector notation.',
    ready: true
  },
  evidence: [],
  mentions: []
};
