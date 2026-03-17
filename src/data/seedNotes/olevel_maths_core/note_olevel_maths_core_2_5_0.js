export const note_olevel_maths_core_2_5_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/factorising-out-terms.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Factorise expressions by identifying and extracting the highest common factor (HCF), including HCFs that involve both numbers and variable terms.' }
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What is Factorising?', level: 2 }
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: { text: '<strong>Factorising</strong> is the reverse of expanding brackets. Instead of removing brackets, we <em>introduce</em> them by taking out the <strong>highest common factor (HCF)</strong> of all terms. The HCF goes outside the bracket, and what remains goes inside.' }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Steps for Factorising by HCF',
        text: '1. Find the HCF of all the coefficients.<br>2. Find the highest power of each variable common to all terms.<br>3. Write the HCF outside a bracket.<br>4. Divide each original term by the HCF — these results go inside the bracket.<br>5. Check by expanding: you should get back to the original expression.'
      }
    },
    {
      id: 'h-number-hcf',
      type: 'heading',
      data: { text: 'Factorising with Number HCF Only', level: 2 }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Numerical HCF',
        text: '<strong>(a)</strong> Factorise 6x + 9<br>HCF of 6 and 9 is 3.<br>6x + 9 = 3(? + ?) → 6x ÷ 3 = 2x; 9 ÷ 3 = 3<br>= <strong>3(2x + 3)</strong><br>Check: 3(2x + 3) = 6x + 9 ✓<br><br><strong>(b)</strong> Factorise 10y − 15<br>HCF(10, 15) = 5<br>= <strong>5(2y − 3)</strong><br>Check: 5(2y − 3) = 10y − 15 ✓<br><br><strong>(c)</strong> Factorise 4a + 8b − 12<br>HCF(4, 8, 12) = 4<br>= <strong>4(a + 2b − 3)</strong>'
      }
    },
    {
      id: 'h-variable-hcf',
      type: 'heading',
      data: { text: 'Factorising with Variable HCF', level: 2 }
    },
    {
      id: 'p-variable-hcf',
      type: 'paragraph',
      data: { text: 'When every term contains the same variable, include the variable (with its lowest power) in the HCF.' }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Variable HCF',
        text: '<strong>(a)</strong> Factorise x² + 5x<br>HCF = x (both terms have at least x¹)<br>x² ÷ x = x; 5x ÷ x = 5<br>= <strong>x(x + 5)</strong><br>Check: x(x + 5) = x² + 5x ✓<br><br><strong>(b)</strong> Factorise 3x³ − 6x²<br>HCF = 3x² (HCF of coefficients 3,6 is 3; lowest power of x is x²)<br>3x³ ÷ 3x² = x; 6x² ÷ 3x² = 2<br>= <strong>3x²(x − 2)</strong><br>Check: 3x²(x − 2) = 3x³ − 6x² ✓'
      }
    },
    {
      id: 'h-full',
      type: 'heading',
      data: { text: 'Fully Factorising: Number AND Variable HCF', level: 2 }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Combined HCF',
        text: '<strong>(a)</strong> Factorise 12x² − 8x fully<br>HCF of coefficients: HCF(12, 8) = 4<br>HCF of variables: both have x, lowest power = x¹<br>∴ HCF = 4x<br>12x² ÷ 4x = 3x; 8x ÷ 4x = 2<br>= <strong>4x(3x − 2)</strong><br>Check: 4x(3x − 2) = 12x² − 8x ✓<br><br><strong>(b)</strong> Factorise 6a²b + 9ab² fully<br>HCF of coefficients: HCF(6, 9) = 3<br>HCF of a: lowest power = a¹ &nbsp; HCF of b: lowest power = b¹<br>∴ HCF = 3ab<br>6a²b ÷ 3ab = 2a; 9ab² ÷ 3ab = 3b<br>= <strong>3ab(2a + 3b)</strong>'
      }
    },
    {
      id: 'callout-warning1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Always Fully Factorise!',
        text: 'The question says "factorise <em>fully</em>" — you must find the <strong>highest</strong> common factor, not just any common factor.<br><br>12x² − 8x: factorising as 2(6x² − 4x) is NOT fully factorised — 4x is still a factor of the bracket.<br>Fully factorised: <strong>4x(3x − 2)</strong>.'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Always Check by Expanding',
        text: 'After factorising, always <strong>expand your answer</strong> to verify you get back the original expression. This costs 10 seconds and guarantees the mark.<br><br>If you expand 4x(3x − 2) = 12x² − 8x — that matches the original, so correct ✓.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I find the HCF of the numerical coefficients', checked: false },
          { text: 'I include the lowest power of shared variables in the HCF', checked: false },
          { text: 'I divide each term by the HCF to find what goes inside the bracket', checked: false },
          { text: 'I check my answer by expanding back to the original', checked: false },
          { text: 'I ensure my factorisation is fully factorised (HCF is the highest factor)', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Factorise by extracting the <strong>HCF</strong> (highest common factor) of all terms — including both the numerical coefficient HCF and the lowest power of any shared variable. Place the HCF outside the bracket and the divided terms inside. Always check by expanding, and ensure the factorisation is <em>fully</em> done.' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'What are the 5 steps for factorising by HCF?' },
      { id: 'cue-2', blockId: 'callout-worked1', prompt: 'Factorise 6x + 9. What is the HCF and what goes inside the bracket?' },
      { id: 'cue-3', blockId: 'callout-worked2', prompt: 'Factorise x² + 5x. Why is the HCF equal to x, not x²?' },
      { id: 'cue-4', blockId: 'callout-worked3', prompt: 'Factorise 12x² − 8x fully. What is the combined HCF?' },
      { id: 'cue-5', blockId: 'callout-warning1', prompt: 'Why is 2(6x² − 4x) not a fully factorised form of 12x² − 8x?' },
    ],
    summaryText: 'Factorise by taking out the HCF of coefficients and lowest shared variable power, then dividing each term by the HCF to form the bracket.',
    ready: true,
  },
  evidence: [],
};
