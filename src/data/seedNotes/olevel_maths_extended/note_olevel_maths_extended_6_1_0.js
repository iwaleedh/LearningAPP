export const note_olevel_maths_extended_6_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Pythagoras And Trigonometry/pythagoras-theorem.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use Pythagoras\' theorem to find missing sides in right-angled triangles and solve related problems.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Pythagoras\' Theorem', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<strong>Pythagoras\' theorem</strong> states that in any right-angled triangle, the square of the <strong>hypotenuse</strong> (the longest side, opposite the right angle) equals the sum of the squares of the other two sides.' }
    },
    {
      id: 'eq-pythag',
      type: 'equation',
      data: {
        html: 'a² + b² = c²',
        caption: 'Pythagoras\' theorem (c = hypotenuse)'
      }
    },
    {
      id: 'callout-key-hyp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — Identifying the Hypotenuse',
        text: 'The <strong>hypotenuse</strong> is always the longest side and is always opposite the right angle. It is the side you find by <strong>adding</strong> the squares. A shorter side is found by <strong>subtracting</strong>.'
      }
    },
    {
      id: 'h-finding-hyp',
      type: 'heading',
      data: { text: 'Finding the Hypotenuse', level: 2 }
    },
    {
      id: 'callout-worked-hyp',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding the Hypotenuse',
        text: 'A right-angled triangle has shorter sides 6 cm and 8 cm. Find the hypotenuse.<br><br><strong>Solution:</strong><br>c² = 6² + 8²<br>c² = 36 + 64 = 100<br>c = √100<br>c = <strong>10 cm</strong>'
      }
    },
    {
      id: 'h-finding-short',
      type: 'heading',
      data: { text: 'Finding a Shorter Side', level: 2 }
    },
    {
      id: 'callout-worked-short',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding a Shorter Side',
        text: 'A right-angled triangle has hypotenuse 13 cm and one short side 5 cm. Find the other short side.<br><br><strong>Solution:</strong><br>a² + 5² = 13²<br>a² = 169 − 25 = 144<br>a = √144<br>a = <strong>12 cm</strong>'
      }
    },
    {
      id: 'h-problems',
      type: 'heading',
      data: { text: 'Problem-Solving Applications', level: 2 }
    },
    {
      id: 'list-applications',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Distance between two points: use the horizontal and vertical differences as the two shorter sides' },
          { text: 'Diagonal of a rectangle: the diagonal is the hypotenuse of a right-angled triangle formed by the length and width' },
          { text: 'Checking for right angles: if a² + b² = c², the triangle is right-angled' }
        ]
      }
    },
    {
      id: 'callout-worked-distance',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Distance Between Points',
        text: 'Find the distance between (1, 2) and (4, 6).<br><br><strong>Solution:</strong><br>Horizontal: 4 − 1 = 3<br>Vertical: 6 − 2 = 4<br>d² = 3² + 4² = 9 + 16 = 25<br>d = √25 = <strong>5 units</strong>'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Finding the hypotenuse &rarr; add then square root. Finding a shorter side &rarr; subtract then square root. Never add when looking for a shorter side!'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Pythagoras\' theorem: a² + b² = c² where c is the hypotenuse. Add squares to find the hypotenuse; subtract squares to find a shorter side. Also used for distances and diagonals.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-pythag', prompt: 'State Pythagoras\' theorem.', answer: 'a² + b² = c², where c is the hypotenuse.' },
      { id: 'cue-2', blockId: 'callout-key-hyp', prompt: 'How do you identify the hypotenuse?', answer: 'It is the longest side, opposite the right angle.' },
      { id: 'cue-3', blockId: 'callout-tip', prompt: 'When finding a shorter side, do you add or subtract the squares?', answer: 'Subtract — then take the square root.' },
      { id: 'cue-4', blockId: 'list-applications', prompt: 'How can Pythagoras be used to find the distance between two points?', answer: 'Use horizontal and vertical distances as the two shorter sides, then find the hypotenuse.' }
    ],
    summaryText: 'Pythagoras\' theorem: a² + b² = c². Add squares for hypotenuse, subtract for a shorter side.',
    ready: true
  },
  evidence: []
};
