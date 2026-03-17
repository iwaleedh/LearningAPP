export const note_olevel_maths_extended_2_1_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/substitution.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Substitute numerical values into algebraic expressions and formulas, including those involving negative numbers, fractions, and powers.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Substitution', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<strong>Substitution</strong> means replacing variables in an expression or formula with given numerical values, then calculating the result. Always use BIDMAS/BODMAS to evaluate in the correct order.' }
    },
    {
      id: 'callout-key-steps',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Substitution Steps',
        text: '1. Write out the expression<br>2. Replace each variable with its given value <em>in brackets</em><br>3. Apply BIDMAS to calculate the result<br><br>Using brackets around substituted values avoids sign errors, especially with negatives.'
      }
    },
    {
      id: 'h-basic',
      type: 'heading',
      data: { text: 'Basic Substitution', level: 2 }
    },
    {
      id: 'callout-worked-basic',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Find the value of 3<em>x</em> + 2<em>y</em> when <em>x</em> = 4 and <em>y</em> = −5.<br><br>= 3(4) + 2(−5)<br>= 12 + (−10)<br>= 12 − 10<br>= <strong>2</strong>'
      }
    },
    {
      id: 'h-powers',
      type: 'heading',
      data: { text: 'Substitution with Powers', level: 2 }
    },
    {
      id: 'callout-worked-powers',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'Find the value of 2<em>a</em>² − 3<em>a</em> + 1 when <em>a</em> = −3.<br><br>= 2(−3)² − 3(−3) + 1<br>= 2(9) − (−9) + 1<br>= 18 + 9 + 1<br>= <strong>28</strong>'
      }
    },
    {
      id: 'callout-warning-neg',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — Squaring Negatives',
        text: '(−3)² = (−3) × (−3) = <strong>9</strong> &nbsp;(positive)<br>−3² = −(3 × 3) = <strong>−9</strong> &nbsp;(negative)<br><br>Always use brackets when substituting negative numbers into powers.'
      }
    },
    {
      id: 'h-formulas',
      type: 'heading',
      data: { text: 'Substitution into Formulas', level: 2 }
    },
    {
      id: 'callout-worked-formula',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3',
        text: 'The area of a trapezium is given by A = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span>(<em>a</em> + <em>b</em>)<em>h</em>.<br>Find A when <em>a</em> = 5, <em>b</em> = 9, <em>h</em> = 4.<br><br>A = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span>(5 + 9)(4)<br>= <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span> × 14 × 4<br>= 7 × 4<br>= <strong>28</strong>'
      }
    },
    {
      id: 'h-fractions',
      type: 'heading',
      data: { text: 'Substitution with Fractions', level: 2 }
    },
    {
      id: 'callout-worked-frac',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4',
        text: 'Find <span class="nb-frac"><span class="nb-num"><em>x</em>² + <em>y</em></span><span class="nb-den"><em>x</em> − <em>y</em></span></span> when <em>x</em> = 5 and <em>y</em> = 3.<br><br>Numerator: (5)² + 3 = 25 + 3 = 28<br>Denominator: 5 − 3 = 2<br><br>= <span class="nb-frac"><span class="nb-num">28</span><span class="nb-den">2</span></span> = <strong>14</strong>'
      }
    },
    {
      id: 'callout-tip-order',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'For expressions with fractions, calculate the numerator and denominator <em>separately</em>, then divide. This reduces errors and makes your working clear.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Substitution replaces variables with numbers. Always use brackets around substituted values, especially negatives. Remember (−3)² = 9 but −3² = −9. For fractions, evaluate numerator and denominator separately. Follow BIDMAS throughout.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Substitution means replacing variables with given values. Use brackets around negatives and follow BIDMAS.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-steps', prompt: 'What are the steps for substitution?', answer: 'Write the expression, replace each variable with its value in brackets, evaluate using BIDMAS.' },
      { id: 'cue-2', blockId: 'callout-warning-neg', prompt: 'What is the difference between (−3)² and −3²?', answer: '(−3)² = 9 (positive), −3² = −9 (negative).' },
      { id: 'cue-3', blockId: 'callout-worked-basic', prompt: 'Find 3x + 2y when x = 4 and y = −5.', answer: '3(4) + 2(−5) = 12 − 10 = 2' },
      { id: 'cue-4', blockId: 'callout-tip-order', prompt: 'How should you evaluate expressions involving fractions?', answer: 'Calculate numerator and denominator separately, then divide.' }
    ]
  },
  evidence: []
};
