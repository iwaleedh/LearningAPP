export const note_olevel_maths_extended_2_10_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/inverse-functions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Find the inverse of a function algebraically and understand the relationship between a function and its inverse.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Inverse Functions', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'The <strong>inverse function</strong> f⁻¹ reverses what f does. If f takes <em>x</em> to <em>y</em>, then f⁻¹ takes <em>y</em> back to <em>x</em>. It "undoes" the original function.' }
    },
    {
      id: 'callout-key-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Properties',
        text: '• f⁻¹(f(<em>x</em>)) = <em>x</em> &nbsp;and&nbsp; f(f⁻¹(<em>x</em>)) = <em>x</em><br>• The graph of f⁻¹ is a <strong>reflection</strong> of the graph of f in the line <em>y</em> = <em>x</em><br>• Domain of f⁻¹ = Range of f, and Range of f⁻¹ = Domain of f<br>• f⁻¹ does NOT mean <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">f(<em>x</em>)</span></span>'
      }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Finding the Inverse Algebraically', level: 2 }
    },
    {
      id: 'list-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Write <em>y</em> = f(<em>x</em>)' },
          { text: 'Swap <em>x</em> and <em>y</em>' },
          { text: 'Rearrange to make <em>y</em> the subject' },
          { text: 'Write f⁻¹(<em>x</em>) = the new expression' }
        ]
      }
    },
    {
      id: 'callout-worked-linear',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Linear',
        text: 'Find f⁻¹(<em>x</em>) for f(<em>x</em>) = 3<em>x</em> − 5.<br><br><em>y</em> = 3<em>x</em> − 5<br>Swap: <em>x</em> = 3<em>y</em> − 5<br><em>x</em> + 5 = 3<em>y</em><br><em>y</em> = <span class="nb-frac"><span class="nb-num"><em>x</em> + 5</span><span class="nb-den">3</span></span><br><br><strong>f⁻¹(<em>x</em>) = <span class="nb-frac"><span class="nb-num"><em>x</em> + 5</span><span class="nb-den">3</span></span></strong>'
      }
    },
    {
      id: 'callout-worked-frac',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — With Fractions',
        text: 'Find f⁻¹(<em>x</em>) for f(<em>x</em>) = <span class="nb-frac"><span class="nb-num">2<em>x</em> + 1</span><span class="nb-den"><em>x</em> − 3</span></span><br><br><em>y</em> = <span class="nb-frac"><span class="nb-num">2<em>x</em> + 1</span><span class="nb-den"><em>x</em> − 3</span></span><br><br>Swap: <em>x</em> = <span class="nb-frac"><span class="nb-num">2<em>y</em> + 1</span><span class="nb-den"><em>y</em> − 3</span></span><br><br><em>x</em>(<em>y</em> − 3) = 2<em>y</em> + 1<br><em>xy</em> − 3<em>x</em> = 2<em>y</em> + 1<br><em>xy</em> − 2<em>y</em> = 3<em>x</em> + 1<br><em>y</em>(<em>x</em> − 2) = 3<em>x</em> + 1<br><em>y</em> = <span class="nb-frac"><span class="nb-num">3<em>x</em> + 1</span><span class="nb-den"><em>x</em> − 2</span></span><br><br><strong>f⁻¹(<em>x</em>) = <span class="nb-frac"><span class="nb-num">3<em>x</em> + 1</span><span class="nb-den"><em>x</em> − 2</span></span></strong>'
      }
    },
    {
      id: 'h-verify',
      type: 'heading',
      data: { text: 'Verifying Your Inverse', level: 2 }
    },
    {
      id: 'p-verify',
      type: 'paragraph',
      data: { text: 'Check by computing f⁻¹(f(<em>x</em>)) — the result should simplify to <em>x</em>. Or test with a number: if f(2) = 7, then f⁻¹(7) should equal 2.' }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Writing f⁻¹(<em>x</em>) = 1/f(<em>x</em>) — WRONG! The −1 is not a power, it means inverse<br>• Forgetting to swap <em>x</em> and <em>y</em><br>• Errors when rearranging fractions — collect all <em>y</em> terms on one side and factor'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'For rational functions (fractions), after swapping: multiply out the denominator, group <em>y</em> terms on one side, factor out <em>y</em>, then divide. Show each step clearly.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'To find the inverse: write y = f(x), swap x and y, rearrange for y. The inverse reverses the function: f⁻¹(f(x)) = x. Its graph is a reflection in y = x. f⁻¹ does NOT mean 1/f(x).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Inverse f⁻¹ undoes f. Method: y = f(x), swap x and y, solve for y. Graph reflects in y = x.',
    cues: [
      { id: 'cue-1', blockId: 'list-steps', prompt: 'What are the four steps to find f⁻¹(x)?', answer: '1. Write y = f(x), 2. Swap x and y, 3. Rearrange for y, 4. Write f⁻¹(x) = result.' },
      { id: 'cue-2', blockId: 'callout-key-def', prompt: 'Where is the graph of f⁻¹ relative to f?', answer: 'It is a reflection of f in the line y = x.' },
      { id: 'cue-3', blockId: 'callout-worked-linear', prompt: 'Find f⁻¹(x) if f(x) = 3x − 5.', answer: 'f⁻¹(x) = (x + 5)/3.' },
      { id: 'cue-4', blockId: 'callout-warning', prompt: 'Does f⁻¹(x) mean 1/f(x)?', answer: 'No! f⁻¹ means the inverse function, not the reciprocal.' },
      { id: 'cue-5', blockId: 'p-verify', prompt: 'How can you verify your inverse is correct?', answer: 'Check that f⁻¹(f(x)) = x, or test with a number.' }
    ]
  },
  evidence: []
};
