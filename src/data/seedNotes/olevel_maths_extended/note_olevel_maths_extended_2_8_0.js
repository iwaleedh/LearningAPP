export const note_olevel_maths_extended_2_8_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/simplifying-algebraic-fractions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Simplify algebraic fractions by factorising and cancelling common factors.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Simplifying Algebraic Fractions', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'An <strong>algebraic fraction</strong> is a fraction where the numerator, the denominator, or both contain algebraic expressions. Simplifying means dividing both top and bottom by <strong>common factors</strong> — exactly like simplifying numerical fractions.' }
    },
    {
      id: 'callout-key-rule',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Golden Rule',
        text: 'You can only cancel <strong>factors</strong> (things that are multiplied), never <strong>terms</strong> (things that are added or subtracted). Always factorise first, then cancel.'
      }
    },
    {
      id: 'h-single',
      type: 'heading',
      data: { text: 'Cancelling Single-Term Factors', level: 2 }
    },
    {
      id: 'p-single',
      type: 'paragraph',
      data: { text: 'When the numerator and denominator are monomials, divide each coefficient and variable separately.' }
    },
    {
      id: 'callout-worked-single',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Monomials',
        text: 'Simplify <span class="nb-frac"><span class="nb-num">12<em>x</em>³<em>y</em></span><span class="nb-den">8<em>x</em><em>y</em>²</span></span><br><br>Divide coefficients: 12 ÷ 4 = 3, 8 ÷ 4 = 2<br>Divide <em>x</em>: <em>x</em>³ ÷ <em>x</em> = <em>x</em>²<br>Divide <em>y</em>: <em>y</em> ÷ <em>y</em>² = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den"><em>y</em></span></span><br><br>Result: <span class="nb-frac"><span class="nb-num">3<em>x</em>²</span><span class="nb-den">2<em>y</em></span></span>'
      }
    },
    {
      id: 'h-factorise',
      type: 'heading',
      data: { text: 'Factorising Before Cancelling', level: 2 }
    },
    {
      id: 'p-factorise',
      type: 'paragraph',
      data: { text: 'When the numerator or denominator is a polynomial, <strong>factorise</strong> both fully, then cancel any common brackets.' }
    },
    {
      id: 'list-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Factorise the numerator completely' },
          { text: 'Factorise the denominator completely' },
          { text: 'Cancel any common factors (brackets that appear in both)' },
          { text: 'Write what remains' }
        ]
      }
    },
    {
      id: 'callout-worked-hcf',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Common Factor',
        text: 'Simplify <span class="nb-frac"><span class="nb-num">6<em>x</em> + 12</span><span class="nb-den">3<em>x</em> + 6</span></span><br><br>Factorise top: 6(<em>x</em> + 2)<br>Factorise bottom: 3(<em>x</em> + 2)<br><br>Cancel (<em>x</em> + 2):<br><span class="nb-frac"><span class="nb-num">6</span><span class="nb-den">3</span></span> = <strong>2</strong>'
      }
    },
    {
      id: 'callout-worked-quad',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Quadratic Numerator',
        text: 'Simplify <span class="nb-frac"><span class="nb-num"><em>x</em>² − 9</span><span class="nb-den"><em>x</em> + 3</span></span><br><br>Recognise difference of two squares: <em>x</em>² − 9 = (<em>x</em> + 3)(<em>x</em> − 3)<br><br><span class="nb-frac"><span class="nb-num">(<em>x</em> + 3)(<em>x</em> − 3)</span><span class="nb-den">(<em>x</em> + 3)</span></span><br><br>Cancel (<em>x</em> + 3): = <strong><em>x</em> − 3</strong>'
      }
    },
    {
      id: 'callout-worked-quad2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Both Quadratic',
        text: 'Simplify <span class="nb-frac"><span class="nb-num"><em>x</em>² + 5<em>x</em> + 6</span><span class="nb-den"><em>x</em>² + <em>x</em> − 2</span></span><br><br>Factorise top: (<em>x</em> + 2)(<em>x</em> + 3)<br>Factorise bottom: (<em>x</em> + 2)(<em>x</em> − 1)<br><br>Cancel (<em>x</em> + 2):<br><span class="nb-frac"><span class="nb-num"><em>x</em> + 3</span><span class="nb-den"><em>x</em> − 1</span></span>'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Cancelling <strong>terms</strong> instead of factors: <span class="nb-frac"><span class="nb-num"><em>x</em> + 3</span><span class="nb-den"><em>x</em> + 5</span></span> ≠ <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">5</span></span> — you cannot cancel the <em>x</em> terms!<br>• Forgetting to factorise fully — always check for HCF, difference of two squares, or quadratic factorisation<br>• Not spotting that (<em>a</em> − <em>b</em>) = −(<em>b</em> − <em>a</em>)'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If the question says "simplify", look for something to cancel. The answer will always be simpler than the question — if it\'s not, re-check your factorisation.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'To simplify algebraic fractions: factorise numerator and denominator fully, then cancel common factors. Never cancel individual terms — only factors. Look for HCF, difference of two squares, and quadratic factorisations.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Simplify algebraic fractions by factorising top and bottom fully, then cancelling common factor brackets.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-rule', prompt: 'What is the golden rule when cancelling in algebraic fractions?', answer: 'You can only cancel factors (multiplied), never terms (added/subtracted). Always factorise first.' },
      { id: 'cue-2', blockId: 'callout-worked-quad', prompt: 'How would you simplify (x² − 9) / (x + 3)?', answer: 'Factorise top as (x+3)(x−3), cancel (x+3), giving x − 3.' },
      { id: 'cue-3', blockId: 'list-steps', prompt: 'What are the steps to simplify an algebraic fraction?', answer: '1. Factorise numerator, 2. Factorise denominator, 3. Cancel common factors, 4. Write remaining expression.' },
      { id: 'cue-4', blockId: 'callout-warning', prompt: 'Why can you NOT simplify (x+3)/(x+5) to 3/5?', answer: 'Because x is a term being added, not a factor being multiplied. You can only cancel factors.' },
      { id: 'cue-5', blockId: 'callout-worked-quad2', prompt: 'Simplify (x² + 5x + 6) / (x² + x − 2).', answer: 'Factorise: (x+2)(x+3) / (x+2)(x−1). Cancel (x+2) &rarr; (x+3)/(x−1).' }
    ]
  },
  evidence: []
};
