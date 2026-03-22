export const note_mathematics_5_2_3 = {
  pdfPath: '/notes/mathematics/forces-and-newtons-laws/f-equals-ma-and-vector-notation.pdf',
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand forces in 2D with vector notation, calculate magnitude and direction, and apply F = ma using vectors.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Forces in 2D and Vector Notation', level: 2 }
    },
    {
      id: 'p-1',
      type: 'paragraph',
      data: { text: 'Forces are vectors; they have both magnitude and direction. Magnitude is measured in Newtons, and direction is usually given as an angle (e.g. degrees anti-clockwise from the horizontal). In 2D space, Cartesian coordinates (x, y) relative to a fixed origin O are often used.' }
    },
    {
      id: 'p-2',
      type: 'paragraph',
      data: { text: 'Vector forces can be written using column vectors or i, j notation. For a force F = xi + yj N, its magnitude |F| is found using Pythagoras. Its direction is found using a diagram and trigonometry.' }
    },
    {
      id: 'callout-equil',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Equilibrium',
        text: 'In two dimensions, a particle is in equilibrium if the resultant force acting on it in both directions is zero. For column vectors, a resultant force of zero looks like (0 over 0).'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'F = ma and Vector Notation', level: 2 }
    },
    {
      id: 'p-3',
      type: 'paragraph',
      data: { text: 'The resultant force (F) and acceleration (a) are vectors. For forces and motion in two dimensions, F and a will be made up of two components: a horizontal (x) component and a vertical (y) component.' }
    },
    {
      id: 'eq-fma',
      type: 'equation',
      data: {
        html: 'F<sub class="nb-sub">x</sub>i + F<sub class="nb-sub">y</sub>j = m(a<sub class="nb-sub">x</sub>i + a<sub class="nb-sub">y</sub>j)',
        caption: 'Newton\'s Second Law in 2D vector notation'
      }
    },
    {
      id: 'p-4',
      type: 'paragraph',
      data: { text: 'Remember that F = ma is used when motion is involved. You can use F = ma or appropriate suvat equations to set up and solve separate equations for both the horizontal and vertical components.' }
    },
    {
      id: 'callout-weight',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Weight as a Vector',
        text: 'Weight is a force (vector quantity) W = mg. It always acts vertically downwards, so it only acts in the negative j-direction. W = &minus;mgj N (where g &approx; 9.8 m s<sup class="nb-sup">&minus;2</sup>).'
      }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Applying F = ma',
        text: 'A yacht of mass 3.5 tonnes (3500 kg) is sailing with constant acceleration (0.8i + 0.3j) m s<sup class="nb-sup">&minus;2</sup>.\nThe force from the engine is D N. The yacht experiences water resistance of (&minus;14i &minus; 19j) N.\nFind D.\n\nResultant force = D + (&minus;14i &minus; 19j)\nUsing F = ma:\nD &minus; 14i &minus; 19j = 3500(0.8i + 0.3j)\nD &minus; 14i &minus; 19j = 2800i + 1050j\nD = (2800 + 14)i + (1050 + 19)j\nD = (2814i + 1069j) N'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Forces can be represented as vectors. The magnitude is found with Pythagoras, and direction with trigonometry. F = ma applies to the individual i and j components separately.' }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When using F = ma in 2D, make sure 'F' is the resultant force vector. Add all the force vectors together (i and j components separately) before setting them equal to the mass multiplied by the acceleration vector. Never take the magnitude of individual forces and sum them as scalars."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-equil', prompt: 'What is the condition for a particle to be in equilibrium in 2D?' },
      { id: 'cue-2', blockId: 'p-2', prompt: 'How do you find the magnitude and direction of a force F = xi + yj N?' },
      { id: 'cue-3', blockId: 'p-3', prompt: 'Which quantities in the equation F = ma are vectors and which are scalars?' },
      { id: 'cue-4', blockId: 'callout-weight', prompt: 'How is weight W represented as a vector in 2D problems?' }
    ],
    summaryText: 'Equilibrium means resultant force is zero. Force magnitude uses Pythagoras, direction uses trig. In F=ma, F and a are vectors, m is scalar. Weight acts in the negative j direction (W = -mgj).',
    ready: true
  },
  evidence: [],
  mentions: []
};