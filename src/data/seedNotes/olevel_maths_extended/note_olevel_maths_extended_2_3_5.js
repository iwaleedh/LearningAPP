export const note_olevel_maths_extended_2_3_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/factorising-harder-quadratics.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Factorise quadratic expressions of the form ax² + bx + c where a ≠ 1, using the grouping (ac) method.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Factorising Harder Quadratics (a ≠ 1)', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'When the coefficient of <em>x</em>² is not 1 (e.g. 2<em>x</em>² + 7<em>x</em> + 3), we use the <strong>ac method</strong> (sometimes called the grouping method). This is the most reliable method for harder quadratics.' }
    },
    {
      id: 'callout-key-ac',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The ac Method',
        text: 'For <em>ax</em>² + <em>bx</em> + <em>c</em>:<br><br>1. Calculate <em>ac</em> (multiply first coefficient by last)<br>2. Find two numbers that <strong>multiply to <em>ac</em></strong> and <strong>add to <em>b</em></strong><br>3. Split the middle term <em>bx</em> into two terms using these numbers<br>4. <strong>Factor by grouping</strong> — group into two pairs and take out common factors<br>5. Write as a product of two brackets'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Factorise 2<em>x</em>² + 7<em>x</em> + 3<br><br><strong>Step 1:</strong> ac = 2 × 3 = 6<br><strong>Step 2:</strong> Two numbers: multiply to 6, add to 7 &rarr; <strong>1 and 6</strong><br><strong>Step 3:</strong> Split: 2<em>x</em>² + <em>x</em> + 6<em>x</em> + 3<br><strong>Step 4:</strong> Group: <em>x</em>(2<em>x</em> + 1) + 3(2<em>x</em> + 1)<br><strong>Step 5:</strong> Common bracket: <strong>(2<em>x</em> + 1)(<em>x</em> + 3)</strong><br><br>Check: 2<em>x</em>² + 6<em>x</em> + <em>x</em> + 3 = 2<em>x</em>² + 7<em>x</em> + 3 ✓'
      }
    },
    {
      id: 'h-neg',
      type: 'heading',
      data: { text: 'Harder Quadratics with Negative Terms', level: 2 }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'Factorise 3<em>x</em>² − 11<em>x</em> + 6<br><br><strong>Step 1:</strong> ac = 3 × 6 = 18<br><strong>Step 2:</strong> Multiply to 18, add to −11 &rarr; <strong>−2 and −9</strong><br><strong>Step 3:</strong> Split: 3<em>x</em>² − 2<em>x</em> − 9<em>x</em> + 6<br><strong>Step 4:</strong> Group: <em>x</em>(3<em>x</em> − 2) − 3(3<em>x</em> − 2)<br><strong>Step 5:</strong> Common bracket: <strong>(3<em>x</em> − 2)(<em>x</em> − 3)</strong>'
      }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3',
        text: 'Factorise 6<em>x</em>² + <em>x</em> − 12<br><br><strong>Step 1:</strong> ac = 6 × (−12) = −72<br><strong>Step 2:</strong> Multiply to −72, add to 1 &rarr; <strong>9 and −8</strong><br><strong>Step 3:</strong> Split: 6<em>x</em>² + 9<em>x</em> − 8<em>x</em> − 12<br><strong>Step 4:</strong> Group: 3<em>x</em>(2<em>x</em> + 3) − 4(2<em>x</em> + 3)<br><strong>Step 5:</strong> Common bracket: <strong>(2<em>x</em> + 3)(3<em>x</em> − 4)</strong>'
      }
    },
    {
      id: 'callout-warning-grouping',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — Grouping',
        text: 'When factoring the second pair, ensure the bracket matches the first pair exactly. If it doesn\'t, you may need to factor out a <strong>negative</strong> from the second group.<br><br>For example: 3<em>x</em>(2<em>x</em> + 1) + (−4<em>x</em> − 2) &rarr; factor out −2: 3<em>x</em>(2<em>x</em> + 1) − 2(2<em>x</em> + 1) ✓'
      }
    },
    {
      id: 'callout-tip-trial',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Trial and Improvement',
        text: 'Some students prefer trial and improvement: try different bracket combinations and use FOIL to check. This can be faster for small coefficients.<br><br>For 2<em>x</em>² + 7<em>x</em> + 3: the <em>x</em>² term must split as (2<em>x</em>)(x), and 3 splits as (1)(3) or (3)(1). Try combinations until the middle term works.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'For ax² + bx + c where a ≠ 1: use the <strong>ac method</strong> — find two numbers that multiply to ac and add to b, split the middle term, then factor by grouping. Always check by expanding.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'For harder quadratics (a ≠ 1), use the ac method: multiply a×c, find factor pair summing to b, split and group.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-ac', prompt: 'Describe the ac method for factorising ax² + bx + c.', answer: 'Find ac, find two numbers that multiply to ac and add to b, split the middle term, group in pairs and factorise.' },
      { id: 'cue-2', blockId: 'callout-worked-1', prompt: 'Factorise 2x² + 7x + 3.', answer: '(2x + 1)(x + 3)' },
      { id: 'cue-3', blockId: 'callout-worked-3', prompt: 'Factorise 6x² + x − 12.', answer: '(2x + 3)(3x − 4)' },
      { id: 'cue-4', blockId: 'callout-warning-grouping', prompt: 'What should you do if the brackets do not match during grouping?', answer: 'Factor out a negative from the second group so both brackets are identical.' }
    ]
  },
  evidence: []
};
