export const note_olevel_maths_extended_2_3_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/expanding-triple-brackets.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Expand the product of three linear brackets by expanding two brackets first, then multiplying the result by the third.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Expanding Triple Brackets', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'To expand three brackets, first expand <strong>any two</strong> of the brackets using FOIL, then multiply the resulting quadratic expression by the remaining bracket.' }
    },
    {
      id: 'callout-key-method',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Strategy for Triple Brackets',
        text: "Step 1: Pick any two brackets and expand them using FOIL/grid.<br>Step 2: Simplify (collect like terms) &rarr; you'll have a trinomial.<br>Step 3: Multiply every term of the trinomial by every term of the remaining bracket.<br>Step 4: Collect like terms to get the final cubic expression."
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Expand and simplify (<em>x</em> + 1)(<em>x</em> + 2)(<em>x</em> + 3)<br><br><strong>Step 1:</strong> Expand first two brackets:<br>(<em>x</em> + 1)(<em>x</em> + 2) = <em>x</em>² + 2<em>x</em> + <em>x</em> + 2 = <em>x</em>² + 3<em>x</em> + 2<br><br><strong>Step 2:</strong> Multiply by (<em>x</em> + 3):<br>= <em>x</em>(<em>x</em>² + 3<em>x</em> + 2) + 3(<em>x</em>² + 3<em>x</em> + 2)<br>= <em>x</em>³ + 3<em>x</em>² + 2<em>x</em> + 3<em>x</em>² + 9<em>x</em> + 6<br><br><strong>Step 3:</strong> Collect like terms:<br>= <strong><em>x</em>³ + 6<em>x</em>² + 11<em>x</em> + 6</strong>'
      }
    },
    {
      id: 'h-neg',
      type: 'heading',
      data: { text: 'Triple Brackets with Negative Terms', level: 2 }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'Expand and simplify (<em>x</em> − 1)(<em>x</em> + 3)(<em>x</em> − 2)<br><br><strong>Step 1:</strong> Expand first two:<br>(<em>x</em> − 1)(<em>x</em> + 3) = <em>x</em>² + 3<em>x</em> − <em>x</em> − 3 = <em>x</em>² + 2<em>x</em> − 3<br><br><strong>Step 2:</strong> Multiply by (<em>x</em> − 2):<br>= <em>x</em>(<em>x</em>² + 2<em>x</em> − 3) + (−2)(<em>x</em>² + 2<em>x</em> − 3)<br>= <em>x</em>³ + 2<em>x</em>² − 3<em>x</em> − 2<em>x</em>² − 4<em>x</em> + 6<br><br><strong>Step 3:</strong> Collect like terms:<br>= <strong><em>x</em>³ − 7<em>x</em> + 6</strong>'
      }
    },
    {
      id: 'h-squared',
      type: 'heading',
      data: { text: 'When a Bracket is Squared', level: 2 }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3',
        text: 'Expand and simplify (<em>x</em> + 2)²(<em>x</em> − 1)<br><br><strong>Step 1:</strong> Expand (<em>x</em> + 2)²:<br>= <em>x</em>² + 4<em>x</em> + 4<br><br><strong>Step 2:</strong> Multiply by (<em>x</em> − 1):<br>= <em>x</em>(<em>x</em>² + 4<em>x</em> + 4) − 1(<em>x</em>² + 4<em>x</em> + 4)<br>= <em>x</em>³ + 4<em>x</em>² + 4<em>x</em> − <em>x</em>² − 4<em>x</em> − 4<br><br>= <strong><em>x</em>³ + 3<em>x</em>² − 4</strong>'
      }
    },
    {
      id: 'callout-warning-signs',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'In Step 2 you are expanding a single bracket: the third bracket multiplies <em>every</em> term. Watch for sign errors when the third bracket contains a negative term — each product must have the correct sign.'
      }
    },
    {
      id: 'callout-tip-check',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Checking',
        text: 'For a product of three linear brackets like (<em>x</em> + <em>a</em>)(<em>x</em> + <em>b</em>)(<em>x</em> + <em>c</em>), the final answer should be a <strong>cubic</strong> with 4 terms. The constant term equals <em>a</em> × <em>b</em> × <em>c</em> — use this as a quick check.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'To expand triple brackets: expand any two brackets first (using FOIL), collect like terms, then multiply the result by the third bracket. The answer is always a cubic expression (degree 3). Check the constant term = product of all three constant terms.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Expand triple brackets in two stages: FOIL two brackets first, then multiply the trinomial by the third bracket.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-method', prompt: 'Describe the method for expanding three brackets.', answer: 'Expand any two brackets first, simplify, then multiply the result by the third bracket and collect like terms.' },
      { id: 'cue-2', blockId: 'callout-worked-1', prompt: 'Expand (x + 1)(x + 2)(x + 3).', answer: 'x³ + 6x² + 11x + 6' },
      { id: 'cue-3', blockId: 'callout-tip-check', prompt: 'What is a quick check for the constant term in a triple bracket expansion?', answer: 'The constant term = the product of all three constant terms in the brackets.' },
      { id: 'cue-4', blockId: 'callout-worked-2', prompt: 'What degree is the result of expanding three linear brackets?', answer: 'Degree 3 (a cubic expression).' }
    ]
  },
  evidence: []
};
