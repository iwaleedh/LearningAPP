export const note_olevel_maths_extended_2_8_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/multiplying-and-dividing-algebraic-fractions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Multiply and divide algebraic fractions, simplifying by cancelling common factors.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Multiplying & Dividing Algebraic Fractions', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Multiplying and dividing algebraic fractions follows the same rules as numerical fractions. The key advantage is that you can <strong>cancel common factors before multiplying</strong>, making the arithmetic much simpler.' }
    },
    {
      id: 'h-multiply',
      type: 'heading',
      data: { text: 'Multiplying Algebraic Fractions', level: 2 }
    },
    {
      id: 'callout-key-mult',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rule for Multiplication',
        text: '<span class="nb-frac"><span class="nb-num"><em>a</em></span><span class="nb-den"><em>b</em></span></span> × <span class="nb-frac"><span class="nb-num"><em>c</em></span><span class="nb-den"><em>d</em></span></span> = <span class="nb-frac"><span class="nb-num"><em>a</em> × <em>c</em></span><span class="nb-den"><em>b</em> × <em>d</em></span></span><br><br>Multiply numerators together, multiply denominators together. <strong>Cancel common factors first</strong> to simplify.'
      }
    },
    {
      id: 'callout-worked-mult1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Simple Multiplication',
        text: 'Simplify <span class="nb-frac"><span class="nb-num">4<em>x</em>²</span><span class="nb-den">3<em>y</em></span></span> × <span class="nb-frac"><span class="nb-num">9<em>y</em>²</span><span class="nb-den">8<em>x</em></span></span><br><br>Cancel before multiplying:<br>4 and 8 share factor 4: &rarr; 1 and 2<br>9 and 3 share factor 3: &rarr; 3 and 1<br><em>x</em>² and <em>x</em>: &rarr; <em>x</em> and 1<br><em>y</em> and <em>y</em>²: &rarr; 1 and <em>y</em><br><br>= <span class="nb-frac"><span class="nb-num">1 · 3 · <em>x</em> · <em>y</em></span><span class="nb-den">1 · 2 · 1 · 1</span></span> = <span class="nb-frac"><span class="nb-num">3<em>xy</em></span><span class="nb-den">2</span></span>'
      }
    },
    {
      id: 'callout-worked-mult2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — With Factorising',
        text: 'Simplify <span class="nb-frac"><span class="nb-num"><em>x</em>² − 4</span><span class="nb-den">5<em>x</em></span></span> × <span class="nb-frac"><span class="nb-num">10</span><span class="nb-den"><em>x</em> + 2</span></span><br><br>Factorise: <em>x</em>² − 4 = (<em>x</em> + 2)(<em>x</em> − 2)<br><br><span class="nb-frac"><span class="nb-num">(<em>x</em> + 2)(<em>x</em> − 2)</span><span class="nb-den">5<em>x</em></span></span> × <span class="nb-frac"><span class="nb-num">10</span><span class="nb-den">(<em>x</em> + 2)</span></span><br><br>Cancel (<em>x</em> + 2) and 10/5 = 2:<br><br>= <span class="nb-frac"><span class="nb-num">2(<em>x</em> − 2)</span><span class="nb-den"><em>x</em></span></span>'
      }
    },
    {
      id: 'h-divide',
      type: 'heading',
      data: { text: 'Dividing Algebraic Fractions', level: 2 }
    },
    {
      id: 'callout-key-div',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rule for Division',
        text: '<span class="nb-frac"><span class="nb-num"><em>a</em></span><span class="nb-den"><em>b</em></span></span> ÷ <span class="nb-frac"><span class="nb-num"><em>c</em></span><span class="nb-den"><em>d</em></span></span> = <span class="nb-frac"><span class="nb-num"><em>a</em></span><span class="nb-den"><em>b</em></span></span> × <span class="nb-frac"><span class="nb-num"><em>d</em></span><span class="nb-den"><em>c</em></span></span><br><br><strong>Keep</strong> the first fraction, <strong>flip</strong> the second (reciprocal), then <strong>multiply</strong>. (KFC: Keep, Flip, Change)'
      }
    },
    {
      id: 'callout-worked-div',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Division',
        text: 'Simplify <span class="nb-frac"><span class="nb-num"><em>x</em>² + 3<em>x</em></span><span class="nb-den">4</span></span> ÷ <span class="nb-frac"><span class="nb-num"><em>x</em> + 3</span><span class="nb-den">8</span></span><br><br>Flip and multiply:<br><span class="nb-frac"><span class="nb-num"><em>x</em>² + 3<em>x</em></span><span class="nb-den">4</span></span> × <span class="nb-frac"><span class="nb-num">8</span><span class="nb-den"><em>x</em> + 3</span></span><br><br>Factorise: <em>x</em>² + 3<em>x</em> = <em>x</em>(<em>x</em> + 3)<br><br><span class="nb-frac"><span class="nb-num"><em>x</em>(<em>x</em> + 3)</span><span class="nb-den">4</span></span> × <span class="nb-frac"><span class="nb-num">8</span><span class="nb-den">(<em>x</em> + 3)</span></span><br><br>Cancel (<em>x</em> + 3), and 8/4 = 2:<br><br>= <strong>2<em>x</em></strong>'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Forgetting to flip the second fraction when dividing<br>• Trying to cancel across an addition or subtraction sign<br>• Not factorising before attempting to cancel'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always factorise <strong>before</strong> multiplying. This keeps numbers small and makes cancellation obvious. If nothing cancels, double-check your factorisation.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Multiply algebraic fractions: factorise, cancel common factors, then multiply straight across. Divide: flip the second fraction and multiply. Always factorise first to make cancelling easier.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Multiply: top × top, bottom × bottom (cancel first). Divide: keep, flip, change (then multiply).',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-div', prompt: 'How do you divide algebraic fractions?', answer: 'Keep the first, flip the second (reciprocal), then multiply.' },
      { id: 'cue-2', blockId: 'callout-worked-mult2', prompt: 'Simplify (x²−4)/(5x) × 10/(x+2).', answer: 'Factorise x²−4 = (x+2)(x−2), cancel (x+2) and 10/5, gives 2(x−2)/x.' },
      { id: 'cue-3', blockId: 'callout-worked-div', prompt: 'Simplify (x²+3x)/4 ÷ (x+3)/8.', answer: 'Flip and multiply, factorise x²+3x = x(x+3), cancel (x+3), 8/4=2, gives 2x.' },
      { id: 'cue-4', blockId: 'callout-key-mult', prompt: 'What should you always do before multiplying algebraic fractions?', answer: 'Factorise all expressions and cancel common factors first, then multiply.' }
    ]
  },
  evidence: []
};
