export const note_mathematics_5_3_4 = {
  pdfPath: '/notes/mathematics/kinematics/kinematics.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply calculus to kinematics problems involving 2D vectors.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Calculus with 2D vectors', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'The principles of using calculus in 1D kinematics apply directly to 2D vector kinematics. Displacement, velocity, and acceleration are all vectors, usually expressed in <b>i</b> and <b>j</b> components. (Note: Time t is a scalar).' }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>To differentiate a vector</b>: Differentiate the i and j components separately.' },
          { text: '<b>To integrate a vector</b>: Integrate the i and j components separately.' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Constant of Integration',
        text: 'When integrating a vector, the constant of integration +<b>c</b> is a vector! It has both an i-component constant and a j-component constant. You find it by substituting a known vector and equating the separate components.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Position Vector vs Displacement', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: { text: 'In 2D, we normally use the position vector <b>r</b> instead of displacement <b>s</b>.' }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>r</b> = <b>r</b>₀ + <b>s</b>' },
          { text: '<b>r</b>₀ is the initial position vector of the particle.' },
          { text: '<b>s</b> is the displacement of the particle from its initial position.' }
        ]
      }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: { text: 'As with 1D, differentiating position <b>r</b> gives velocity <b>v</b>, and differentiating <b>v</b> gives acceleration <b>a</b>. Integrate <b>v</b> to get displacement <b>s</b>.' }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'note',
        title: 'Magnitude',
        text: 'The magnitude of velocity is speed. The magnitude of displacement is the distance from the starting point.'
      }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Always remember to include the vector constant of integration when integrating velocity to find displacement, or acceleration to find velocity. Use the given initial conditions (e.g., 'when t = 0, the position vector is 2i - j') to explicitly find its precise value."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Calculus in 2D involves differentiating/integrating vector i and j components separately. Remember the integration constant is also a vector.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'How do you differentiate a 2D vector for velocity?', answer: 'Differentiate the i and j components separately.' },
      { id: 'cue-2', blockId: 'call-1', prompt: 'What form does the constant of integration take when integrating a 2D vector?', answer: 'A vector constant with both an i-component and a j-component.' },
      { id: 'cue-3', blockId: 'list-2', prompt: 'What symbol is normally used for the position vector in 2D?', answer: 'r' },
      { id: 'cue-4', blockId: 'call-2', prompt: 'How is the speed found from the 2D velocity vector?', answer: 'By calculating the magnitude of the velocity vector.' }
    ]
  },
  evidence: [],
  mentions: []
};