export const note_olevel_maths_extended_2_4_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/solving-linear-equations.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Solve linear equations involving brackets, fractions, and unknowns on both sides by applying inverse operations to isolate the variable.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Solving Linear Equations', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>linear equation</strong> contains a variable raised only to the power of 1 (no <em>x</em>², <em>x</em>³, etc.). To solve, use <strong>inverse operations</strong> to isolate the variable on one side of the equation.' }
    },
    {
      id: 'callout-key-principle',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Balance Principle',
        text: 'Whatever you do to one side of the equation, you must do to the other side.<br><br>Inverse operations:<br>• Addition ↔ Subtraction<br>• Multiplication ↔ Division'
      }
    },
    {
      id: 'h-simple',
      type: 'heading',
      data: { text: 'One-Step and Two-Step Equations', level: 2 }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Solve 3<em>x</em> + 7 = 22<br><br>3<em>x</em> + 7 = 22<br>3<em>x</em> = 22 − 7 = 15 &nbsp;&nbsp;(subtract 7 from both sides)<br><em>x</em> = 15 ÷ 3 = <strong>5</strong> &nbsp;&nbsp;(divide both sides by 3)'
      }
    },
    {
      id: 'h-both',
      type: 'heading',
      data: { text: 'Unknowns on Both Sides', level: 2 }
    },
    {
      id: 'callout-worked-both',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'Solve 5<em>x</em> − 3 = 2<em>x</em> + 12<br><br>5<em>x</em> − 2<em>x</em> = 12 + 3 &nbsp;&nbsp;(collect <em>x</em> terms on left, numbers on right)<br>3<em>x</em> = 15<br><em>x</em> = <strong>5</strong>'
      }
    },
    {
      id: 'h-brackets',
      type: 'heading',
      data: { text: 'Equations with Brackets', level: 2 }
    },
    {
      id: 'callout-worked-bracket',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3',
        text: 'Solve 4(2<em>x</em> − 1) = 3(<em>x</em> + 4)<br><br>Expand: 8<em>x</em> − 4 = 3<em>x</em> + 12<br>8<em>x</em> − 3<em>x</em> = 12 + 4<br>5<em>x</em> = 16<br><em>x</em> = <span class="nb-frac"><span class="nb-num">16</span><span class="nb-den">5</span></span> = <strong>3.2</strong>'
      }
    },
    {
      id: 'h-fractions',
      type: 'heading',
      data: { text: 'Equations with Fractions', level: 2 }
    },
    {
      id: 'p-fractions',
      type: 'paragraph',
      data: { text: 'Multiply every term by the <strong>lowest common denominator (LCD)</strong> to eliminate fractions, then solve as normal.' }
    },
    {
      id: 'callout-worked-frac',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4',
        text: 'Solve <span class="nb-frac"><span class="nb-num"><em>x</em> + 1</span><span class="nb-den">3</span></span> = <span class="nb-frac"><span class="nb-num"><em>x</em> − 2</span><span class="nb-den">2</span></span><br><br>LCD = 6. Multiply both sides by 6:<br>2(<em>x</em> + 1) = 3(<em>x</em> − 2)<br>2<em>x</em> + 2 = 3<em>x</em> − 6<br>2 + 6 = 3<em>x</em> − 2<em>x</em><br><em>x</em> = <strong>8</strong>'
      }
    },
    {
      id: 'callout-warning-sign',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'When multiplying to clear fractions, multiply <em>every</em> term on <em>both</em> sides — not just the fractions.'
      }
    },
    {
      id: 'callout-tip-check',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Always Check',
        text: 'Substitute your answer back into the <strong>original equation</strong> to verify both sides are equal. This catches sign and arithmetic errors.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'To solve a linear equation: expand brackets &rarr; clear fractions (multiply by LCD) &rarr; collect variable terms on one side, numbers on the other &rarr; divide by the coefficient. Always check by substituting back.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Solve linear equations using inverse operations: expand, clear fractions, collect like terms, isolate the variable.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-principle', prompt: 'What is the balance principle in equations?', answer: 'Whatever you do to one side, you must do the same to the other side.' },
      { id: 'cue-2', blockId: 'callout-worked-both', prompt: 'Solve 5x − 3 = 2x + 12.', answer: '3x = 15, so x = 5.' },
      { id: 'cue-3', blockId: 'p-fractions', prompt: 'How do you deal with fractions in an equation?', answer: 'Multiply every term by the LCD to eliminate the fractions.' },
      { id: 'cue-4', blockId: 'callout-worked-bracket', prompt: 'Solve 4(2x − 1) = 3(x + 4).', answer: '8x − 4 = 3x + 12 &rarr; 5x = 16 &rarr; x = 3.2' }
    ]
  },
  evidence: []
};
