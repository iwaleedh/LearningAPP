export const note_olevel_maths_extended_2_5_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/solving-quadratics-using-a-calculator.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use a scientific calculator to solve quadratic equations; interpret and round calculator outputs appropriately.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Solving Quadratics Using a Calculator', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Many scientific calculators have an <strong>equation solver</strong> mode that solves quadratic (and cubic) equations directly. This is useful for checking your answers and for non-factorisable quadratics when the question doesn\'t require you to show working.' }
    },
    {
      id: 'h-when',
      type: 'heading',
      data: { text: 'When to Use the Calculator', level: 2 }
    },
    {
      id: 'list-when',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'The question says <strong>"Give answers correct to..."</strong> (decimal answers expected)' },
          { text: 'To <strong>check</strong> solutions you found by factorising or the formula' },
          { text: 'When you need quick answers in a <strong>multi-step problem</strong> (e.g. simultaneous equations)' },
          { text: 'When the question does NOT say "show your working" or "by factorising"' }
        ]
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Important',
        text: 'If the question says "solve by factorising" or "show all your working", you MUST use an algebraic method. The calculator alone will not earn method marks in these cases.'
      }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Typical Calculator Steps (Casio fx-991)', level: 2 }
    },
    {
      id: 'list-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Press <strong>MODE</strong> &rarr; select <strong>EQN</strong> (Equation mode)' },
          { text: 'Select degree: <strong>2</strong> for quadratic (or 3 for cubic)' },
          { text: 'Enter the values of <em>a</em>, <em>b</em>, and <em>c</em> in order, pressing = after each' },
          { text: 'The calculator displays <em>x</em>₁ and <em>x</em>₂ (the two solutions)' },
          { text: 'Round your answers to the degree of accuracy stated in the question' }
        ]
      }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Solve 3<em>x</em>² − 5<em>x</em> − 1 = 0, giving answers correct to 2 decimal places.<br><br>Enter: <em>a</em> = 3, <em>b</em> = −5, <em>c</em> = −1<br><br>Calculator gives: <em>x</em>₁ = 1.847… and <em>x</em>₂ = −0.180…<br><br><strong><em>x</em> = 1.85 or <em>x</em> = −0.18</strong> (2 d.p.)'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Rearrange First',
        text: 'Solve 5<em>x</em> = 4 − <em>x</em>², giving answers to 3 significant figures.<br><br>Rearrange: <em>x</em>² + 5<em>x</em> − 4 = 0<br><br>Enter: <em>a</em> = 1, <em>b</em> = 5, <em>c</em> = −4<br><br>Calculator gives: <em>x</em>₁ = 0.7015… and <em>x</em>₂ = −5.7015…<br><br><strong><em>x</em> = 0.702 or <em>x</em> = −5.70</strong> (3 s.f.)'
      }
    },
    {
      id: 'callout-key-error',
      type: 'callout',
      data: {
        style: 'key',
        title: '"Non-Real" or "No Solution"',
        text: 'If the calculator displays "Non-Real" or an error, it means b² − 4ac < 0, so the equation has <strong>no real solutions</strong>. State this as your answer.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Even when using the formula or factorising, use the calculator\'s equation solver to <strong>check</strong> your answers. It takes only seconds and can catch sign errors.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Use the calculator\'s equation solver by entering a, b, c to get both solutions. Always rearrange to the form ax² + bx + c = 0 first. Round to the accuracy stated. If the question asks you to show working, use the formula or factorising instead.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Rearrange to ax² + bx + c = 0, enter a, b, c into the calculator equation solver, and round the output appropriately.',
    cues: [
      { id: 'cue-1', blockId: 'list-steps', prompt: 'What must you do before entering values into the equation solver?', answer: 'Rearrange the equation into the form ax² + bx + c = 0.' },
      { id: 'cue-2', blockId: 'callout-warning', prompt: 'When should you NOT rely on the calculator alone?', answer: 'When the question says "show your working", "solve by factorising", or asks for method.' },
      { id: 'cue-3', blockId: 'callout-key-error', prompt: 'What does it mean if the calculator gives "Non-Real"?', answer: 'The discriminant b² − 4ac is negative, so the quadratic has no real solutions.' },
      { id: 'cue-4', blockId: 'callout-worked2', prompt: 'Solve x² + 5x − 4 = 0 to 3 s.f.', answer: 'x = 0.702 or x = −5.70.' }
    ]
  },
  evidence: []
};
