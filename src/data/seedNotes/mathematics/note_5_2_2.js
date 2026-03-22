export const note_mathematics_5_2_2 = {
  pdfPath: '/notes/mathematics/kinematics/suvat-in-2d.pdf',
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand how to use the 2D suvat equations with vectors for constant acceleration.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'suvat in 2D', level: 2 }
    },
    {
      id: 'p-1',
      type: 'paragraph',
      data: { text: 'For constant 2D acceleration, four of the five suvat formulae can be used with vectors. Remember that time, t, is not a vector, but a scalar.' }
    },
    {
      id: 'callout-suvat',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Vector suvat Equations',
        text: 'v = u + at\ns = &frac12;(u + v)t\ns = ut + &frac12;at<sup>2</sup>\ns = vt &minus; &frac12;at<sup>2</sup>\n\nThe final formula v<sup>2</sup> = u<sup>2</sup> + 2as cannot be written in vector form. Instead, you would use this formula for each component separately.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Displacement from the Origin', level: 3 }
    },
    {
      id: 'p-2',
      type: 'paragraph',
      data: { text: 'You may also find the following formula useful when dealing with position vectors:' }
    },
    {
      id: 'eq-pos',
      type: 'equation',
      data: {
        html: 'r = r<sub>0</sub> + s',
        caption: 'where r is the displacement from the origin, r0 is the initial displacement from the origin, and s is the displacement from the starting position'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'How to use 2D suvat Equations', level: 2 }
    },
    {
      id: 'p-3',
      type: 'paragraph',
      data: { text: 'The skills involved are the same for suvat in 1D. Acceleration must be constant. All the suvat equations connect four of the five quantities_knowing any three allows a fourth to be found. Any vector quantity (s, u, v, a) is split into i and j components. Time remains a scalar. You can solve one vector equation or split into two equations (one for i, one for j) and solve them separately.' }
    },
    {
      id: 'callout-tips',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Parallel Vectors',
        text: 'Sometimes a question says "...a particle is travelling parallel to...". This means its velocity is a scalar multiple of that vector. If an object is travelling parallel to i, the component of velocity in the j direction must be zero.'
      }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: 2D suvat',
        text: 'A drone flies parallel to the ground in a 2D-plane. Starting from rest, the drone flies with constant acceleration. After one minute, the drone\'s velocity is (0.6i &minus; 1.8j) m s<sup class="nb-sup">&minus;1</sup>.\n\n(a) Find the acceleration of the drone.\nUsing v = u + at \n(0.6i &minus; 1.8j) = (0i + 0j) + a(60)\na = (0.6/60)i &minus; (1.8/60)j = (0.01i &minus; 0.03j) m s<sup class="nb-sup">&minus;2</sup>'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Four suvat equations can be expressed in vector form to solve 2D constant acceleration problems. Convert time into seconds, use i and j components, and solve either as vector equations or by splitting into two separate component equations.' }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When using vector suvat equations, remember that 's' represents displacement from the starting point, not distance travelled. If asked for the position vector from the origin, do not forget to add the initial position vector to your calculated displacement."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-suvat', prompt: 'Which suvat equation cannot be written in vector form?' },
      { id: 'cue-2', blockId: 'callout-suvat', prompt: 'Write down the four suvat equations that can be used with vectors.' },
      { id: 'cue-3', blockId: 'eq-pos', prompt: 'What is the formula to find the position vector of a particle (r) using its initial position (r0) and displacement (s)?' },
      { id: 'cue-4', blockId: 'callout-tips', prompt: 'What does it mean if a particle is travelling parallel to the vector i?' }
    ],
    summaryText: 'Four suvat equations work with vectors (v=u+at, s=ut+1/2at^2, etc.). v^2=u^2+2as doesn\'t work in vector form. Use r=r0+s to find position vectors. Travelling parallel to i means the j velocity component is zero.',
    ready: true
  },
  evidence: [],
  mentions: []
};