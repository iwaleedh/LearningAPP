export const note_olevel_maths_extended_7_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Vectors And Transformations/representing-vectors-as-diagrams.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Draw and interpret vector diagrams, add and subtract vectors using the triangle and parallelogram rules, and express position vectors and resultant paths.' }
    },
    {
      id: 'h-drawing',
      type: 'heading',
      data: { text: 'Drawing Vectors on a Grid', level: 2 }
    },
    {
      id: 'p-drawing',
      type: 'paragraph',
      data: { text: 'A vector is drawn as a directed line segment (an arrow). The <strong>length</strong> represents the magnitude and the <strong>arrowhead</strong> shows the direction. On a coordinate grid, the column vector tells you exactly how to draw the arrow.' }
    },
    {
      id: 'h-add',
      type: 'heading',
      data: { text: 'Adding Vectors', level: 2 }
    },
    {
      id: 'p-add',
      type: 'paragraph',
      data: { text: 'To add two vectors, place the second vector\'s tail at the head of the first. The <strong>resultant</strong> vector goes from the start of the first to the end of the second. In column form, simply add corresponding components.' }
    },
    {
      id: 'callout-key-add',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Vector Addition Rule',
        text: 'If <strong>a</strong> = (a₁, a₂) and <strong>b</strong> = (b₁, b₂), then:<br><strong>a</strong> + <strong>b</strong> = (a₁ + b₁, a₂ + b₂)<br><br>Geometrically this is the <strong>triangle rule</strong> — place vectors nose to tail.'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Adding Vectors',
        text: 'If <strong>a</strong> = (3, 1) and <strong>b</strong> = (−1, 4), find <strong>a</strong> + <strong>b</strong>.<br><br><strong>Solution:</strong><br><strong>a</strong> + <strong>b</strong> = (3 + (−1), 1 + 4) = (2, 5)'
      }
    },
    {
      id: 'h-sub',
      type: 'heading',
      data: { text: 'Subtracting Vectors', level: 2 }
    },
    {
      id: 'p-sub',
      type: 'paragraph',
      data: { text: 'To subtract <strong>b</strong> from <strong>a</strong>, reverse <strong>b</strong> then add: <strong>a</strong> − <strong>b</strong> = <strong>a</strong> + (−<strong>b</strong>). In components, subtract corresponding values.' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Vector Paths',
        text: 'In triangle OAB, <span style="text-decoration:overline">OA</span> = <strong>a</strong> and <span style="text-decoration:overline">OB</span> = <strong>b</strong>. Find <span style="text-decoration:overline">AB</span>.<br><br><strong>Solution:</strong><br><span style="text-decoration:overline">AB</span> = <span style="text-decoration:overline">AO</span> + <span style="text-decoration:overline">OB</span> = −<strong>a</strong> + <strong>b</strong> = <strong>b</strong> − <strong>a</strong>'
      }
    },
    {
      id: 'h-scalar-mult',
      type: 'heading',
      data: { text: 'Scalar Multiplication', level: 2 }
    },
    {
      id: 'p-scalar',
      type: 'paragraph',
      data: { text: 'Multiplying a vector by a scalar <em>k</em> scales its magnitude by |<em>k</em>|. If <em>k</em> > 0, direction is preserved; if <em>k</em> < 0, direction is reversed. For example, 3<strong>a</strong> is parallel to <strong>a</strong> and three times as long.' }
    },
    {
      id: 'callout-tip-parallel',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Proving Parallel Vectors',
        text: 'If <strong>p</strong> = <em>k</em><strong>q</strong> for some scalar <em>k</em>, then <strong>p</strong> and <strong>q</strong> are <strong>parallel</strong>. This is a frequent exam question — show one vector is a scalar multiple of the other.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Add vectors by placing them nose to tail (triangle rule) or adding components. Subtract by reversing then adding. Scalar multiples stretch or shrink vectors; if one vector is a scalar multiple of another they are parallel.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Vectors are added by components or the triangle rule. Subtraction reverses the second vector. Scalar multiples produce parallel vectors.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-add', prompt: 'How do you add two column vectors?', answer: 'Add the corresponding components: (a₁+b₁, a₂+b₂).' },
      { id: 'cue-2', blockId: 'p-sub', prompt: 'How do you subtract vector b from vector a?', answer: 'Reverse b then add: a − b = a + (−b). Subtract each component.' },
      { id: 'cue-3', blockId: 'callout-worked-2', prompt: 'In triangle OAB with OA = a and OB = b, what is AB?', answer: 'AB = −a + b = b − a.' },
      { id: 'cue-4', blockId: 'callout-tip-parallel', prompt: 'How do you prove two vectors are parallel?', answer: 'Show one is a scalar multiple of the other: p = kq for some scalar k.' },
      { id: 'cue-5', blockId: 'p-scalar', prompt: 'What happens when you multiply a vector by a negative scalar?', answer: 'The magnitude is scaled and the direction is reversed.' }
    ]
  },
  evidence: []
};
