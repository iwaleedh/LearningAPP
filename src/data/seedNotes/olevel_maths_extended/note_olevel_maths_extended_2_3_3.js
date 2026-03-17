export const note_olevel_maths_extended_2_3_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/factorising-out-terms.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Factorise algebraic expressions by taking out the highest common factor (HCF) of all terms.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Factorising — Taking Out Common Factors', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<strong>Factorising</strong> is the reverse of expanding brackets. To factorise, find the <strong>highest common factor (HCF)</strong> of all terms and write it outside a bracket, with the remaining factors inside.' }
    },
    {
      id: 'callout-key-method',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Factorising Steps',
        text: '1. Find the HCF of <strong>all</strong> terms (numbers and variables)<br>2. Write the HCF outside the bracket<br>3. Divide each term by the HCF and write the results inside the bracket<br>4. <strong>Check:</strong> expanding the answer should give back the original expression'
      }
    },
    {
      id: 'h-numeric',
      type: 'heading',
      data: { text: 'Factorising with Numerical HCF', level: 2 }
    },
    {
      id: 'callout-worked-num',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Factorise 6<em>x</em> + 15<br><br>HCF of 6 and 15 = 3<br><br>= 3(2<em>x</em> + 5)<br><br>Check: 3 × 2<em>x</em> + 3 × 5 = 6<em>x</em> + 15 ✓'
      }
    },
    {
      id: 'h-variable',
      type: 'heading',
      data: { text: 'Factorising with Variable HCF', level: 2 }
    },
    {
      id: 'callout-worked-var',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'Factorise 4<em>x</em>² + 10<em>x</em><br><br>HCF of 4 and 10 = 2<br>HCF of <em>x</em>² and <em>x</em> = <em>x</em> (take lowest power)<br>Overall HCF = 2<em>x</em><br><br>= 2<em>x</em>(2<em>x</em> + 5)<br><br>Check: 2<em>x</em> × 2<em>x</em> + 2<em>x</em> × 5 = 4<em>x</em>² + 10<em>x</em> ✓'
      }
    },
    {
      id: 'h-multi',
      type: 'heading',
      data: { text: 'Factorising with Multiple Variables', level: 2 }
    },
    {
      id: 'callout-worked-multi',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3',
        text: 'Factorise 12<em>ab</em>² − 8<em>a</em>²<em>b</em><br><br>Numbers: HCF of 12 and 8 = 4<br>Variable <em>a</em>: HCF of <em>a</em> and <em>a</em>² = <em>a</em><br>Variable <em>b</em>: HCF of <em>b</em>² and <em>b</em> = <em>b</em><br>Overall HCF = 4<em>ab</em><br><br>= 4<em>ab</em>(3<em>b</em> − 2<em>a</em>)<br><br>Check: 4<em>ab</em> × 3<em>b</em> − 4<em>ab</em> × 2<em>a</em> = 12<em>ab</em>² − 8<em>a</em>²<em>b</em> ✓'
      }
    },
    {
      id: 'callout-warning-full',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — Not Fully Factorised',
        text: '6<em>x</em>² + 9<em>x</em> = 3(2<em>x</em>² + 3<em>x</em>) is NOT fully factorised — the terms inside still share a common factor of <em>x</em>.<br><br>Correct: <strong>3<em>x</em>(2<em>x</em> + 3)</strong><br><br>Always take out the <em>highest</em> common factor.'
      }
    },
    {
      id: 'callout-tip-check',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'After factorising, always expand your answer mentally to verify it matches the original expression. If the question says "factorise fully", the terms inside the bracket should share no common factors.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Factorising is the reverse of expanding. Find the HCF of all terms (numbers and variables), write it outside a bracket, divide each term by the HCF and place inside. Always take the <strong>highest</strong> common factor and check by expanding.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Factorising means taking the HCF out of all terms and placing it outside a bracket.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-method', prompt: 'What are the steps to factorise an expression?', answer: 'Find the HCF of all terms, write it outside a bracket, divide each term by the HCF to fill the bracket, then check by expanding.' },
      { id: 'cue-2', blockId: 'callout-worked-var', prompt: 'Factorise 4x² + 10x.', answer: '2x(2x + 5)' },
      { id: 'cue-3', blockId: 'callout-warning-full', prompt: 'What does "factorise fully" mean?', answer: 'Take out the highest common factor so terms inside the bracket share no common factors.' },
      { id: 'cue-4', blockId: 'callout-worked-multi', prompt: 'Factorise 12ab² − 8a²b.', answer: '4ab(3b − 2a)' }
    ]
  },
  evidence: []
};
