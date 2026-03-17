export const note_olevel_maths_extended_2_12_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/direct-proportion.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and use direct proportion relationships, including squared and cubed proportion.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Direct Proportion', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Two quantities are in <strong>direct proportion</strong> when one increases at the same rate as the other. If one doubles, the other doubles. The ratio between them stays constant.' }
    },
    {
      id: 'callout-key-notation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Notation & Formulae',
        text: '<em>y</em> ∝ <em>x</em> &nbsp; means &nbsp; <em>y</em> = <em>kx</em> &nbsp; (direct proportion)<br><br><em>y</em> ∝ <em>x</em>² &nbsp; means &nbsp; <em>y</em> = <em>kx</em>² &nbsp; (proportion to the square)<br><br><em>y</em> ∝ <em>x</em>³ &nbsp; means &nbsp; <em>y</em> = <em>kx</em>³ &nbsp; (proportion to the cube)<br><br><em>y</em> ∝ √<em>x</em> &nbsp; means &nbsp; <em>y</em> = <em>k</em>√<em>x</em> &nbsp; (proportion to the square root)<br><br><em>k</em> is the <strong>constant of proportionality</strong>.'
      }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Method for Solving', level: 2 }
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Write the proportion statement: <em>y</em> ∝ <em>x</em> (or <em>x</em>², √<em>x</em>, etc.)' },
          { text: 'Replace ∝ with = <em>k</em>: &nbsp; <em>y</em> = <em>kx</em>' },
          { text: 'Substitute the given values to find <em>k</em>' },
          { text: 'Write the complete formula with <em>k</em>' },
          { text: 'Use the formula to find unknown values' }
        ]
      }
    },
    {
      id: 'callout-worked-linear',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — y ∝ x',
        text: '<em>y</em> is directly proportional to <em>x</em>. When <em>x</em> = 4, <em>y</em> = 20. Find <em>y</em> when <em>x</em> = 7.<br><br><em>y</em> = <em>kx</em><br>20 = <em>k</em>(4)<br><em>k</em> = 5<br><br>Formula: <em>y</em> = 5<em>x</em><br><br>When <em>x</em> = 7: <em>y</em> = 5(7) = <strong>35</strong>'
      }
    },
    {
      id: 'callout-worked-square',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — y ∝ x²',
        text: '<em>y</em> is proportional to <em>x</em>². When <em>x</em> = 3, <em>y</em> = 36. Find <em>y</em> when <em>x</em> = 5.<br><br><em>y</em> = <em>kx</em>²<br>36 = <em>k</em>(3²) = 9<em>k</em><br><em>k</em> = 4<br><br>Formula: <em>y</em> = 4<em>x</em>²<br><br>When <em>x</em> = 5: <em>y</em> = 4(25) = <strong>100</strong>'
      }
    },
    {
      id: 'h-graphs',
      type: 'heading',
      data: { text: 'Graphs of Direct Proportion', level: 2 }
    },
    {
      id: 'table-graphs',
      type: 'comparisonTable',
      data: {
        caption: 'Graph shapes for direct proportion',
        headers: ['Relationship', 'Graph Shape', 'Key Feature'],
        rows: [
          ['y ∝ x', 'Straight line through origin', 'Gradient = k'],
          ['y ∝ x²', 'Parabola through origin', 'Steeper as x grows'],
          ['y ∝ √x', 'Curve through origin', 'Flattens as x grows']
        ]
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Forgetting the graph must pass through the origin for direct proportion<br>• Using <em>x</em> instead of <em>x</em>² when the question says "proportional to the square of"<br>• Mixing up direct and inverse proportion'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Look for the trigger words: "directly proportional", "varies directly", "y ∝ x". Always find <em>k</em> first, write the formula, then answer the question.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Direct proportion: y = kx (or kx², kx³, k√x). Method: write y = k×(expression), substitute given values to find k, use the formula. Graphs pass through the origin.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'y ∝ x means y = kx. Find k from given values, then use the formula. Graph passes through the origin.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-notation', prompt: 'What does y ∝ x² mean as an equation?', answer: 'y = kx² where k is the constant of proportionality.' },
      { id: 'cue-2', blockId: 'list-method', prompt: 'What is the first step when solving a proportion problem?', answer: 'Write the proportion statement and replace ∝ with = k.' },
      { id: 'cue-3', blockId: 'callout-worked-square', prompt: 'If y ∝ x² and y = 36 when x = 3, find k.', answer: '36 = k(9), so k = 4.' },
      { id: 'cue-4', blockId: 'table-graphs', prompt: 'What does the graph of y ∝ x look like?', answer: 'A straight line through the origin.' }
    ]
  },
  evidence: []
};
