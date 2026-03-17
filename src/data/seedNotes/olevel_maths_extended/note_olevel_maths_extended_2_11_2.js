export const note_olevel_maths_extended_2_11_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/quadratic-sequences.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Recognise quadratic sequences and find the nth term formula using second differences.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Quadratic Sequences', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>quadratic sequence</strong> has an nth term formula containing <em>n</em>². Unlike arithmetic sequences, the first differences are <strong>not constant</strong>, but the <strong>second differences</strong> are.' }
    },
    {
      id: 'callout-key-identify',
      type: 'callout',
      data: {
        style: 'key',
        title: 'How to Identify a Quadratic Sequence',
        text: 'Check the differences between terms (1st differences). If these are NOT constant, find the differences of the differences (2nd differences). If the <strong>2nd differences are constant</strong>, the sequence is quadratic.'
      }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Finding the nth Term', level: 2 }
    },
    {
      id: 'p-method',
      type: 'paragraph',
      data: { text: 'The nth term of a quadratic sequence has the form <strong><em>T</em><sub><em>n</em></sub> = <em>an</em>² + <em>bn</em> + <em>c</em></strong>.' }
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Find the 2nd difference. The coefficient <em>a</em> = <span class="nb-frac"><span class="nb-num">2nd difference</span><span class="nb-den">2</span></span>' },
          { text: 'Write out <em>an</em>² for <em>n</em> = 1, 2, 3, …' },
          { text: 'Subtract <em>an</em>² from each term of the original sequence' },
          { text: 'The remaining numbers form a <strong>linear sequence</strong> — find its nth term (= <em>bn</em> + <em>c</em>)' },
          { text: 'Combine: <em>T</em><sub><em>n</em></sub> = <em>an</em>² + <em>bn</em> + <em>c</em>' }
        ]
      }
    },
    {
      id: 'callout-worked-main',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'Find the nth term of: 3, 9, 19, 33, 51, …<br><br>1st differences: 6, 10, 14, 18<br>2nd differences: 4, 4, 4 &rarr; constant ✓<br><br><em>a</em> = 4/2 = 2, so start with 2<em>n</em>²:<br>2(1)²=2, 2(2)²=8, 2(3)²=18, 2(4)²=32, 2(5)²=50<br><br>Subtract from original: 3−2=1, 9−8=1, 19−18=1, 33−32=1, 51−50=1<br><br>Linear part: 1, 1, 1, 1, 1 &rarr; this is just 1 (<em>b</em>=0, <em>c</em>=1)<br><br><strong><em>T</em><sub><em>n</em></sub> = 2<em>n</em>² + 1</strong><br><br>Check: <em>T</em>₃ = 2(9) + 1 = 19 ✓'
      }
    },
    {
      id: 'callout-worked-full',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Full Quadratic',
        text: 'Find the nth term of: 2, 7, 16, 29, 46, …<br><br>1st differences: 5, 9, 13, 17<br>2nd differences: 4, 4, 4 &rarr; <em>a</em> = 2<br><br>2<em>n</em>²: 2, 8, 18, 32, 50<br><br>Subtract: 2−2=0, 7−8=−1, 16−18=−2, 29−32=−3, 46−50=−4<br><br>Linear part: 0, −1, −2, −3, −4 &rarr; <em>d</em> = −1 &rarr; <em>T</em><sub><em>n</em></sub> = −<em>n</em> + 1<br><br>Combine: <strong><em>T</em><sub><em>n</em></sub> = 2<em>n</em>² − <em>n</em> + 1</strong><br><br>Wait — check <em>T</em>₂: 2(4) − 2 + 1 = 7 ✓ &nbsp; Need to verify linear part more carefully:<br>Remaining: 0, −1, −2, −3, −4<br>nth term of this: −<em>n</em> + 1<br><br>So: <em>T</em><sub><em>n</em></sub> = 2<em>n</em>² + (−<em>n</em> + 1) = <strong>2<em>n</em>² − <em>n</em> + 1</strong><br>Check <em>T</em>₁: 2 − 1 + 1 = 2 ✓'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Forgetting to halve the 2nd difference to get <em>a</em><br>• Making arithmetic errors in the subtraction step<br>• Not checking the formula against the original terms'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always check your formula gives the correct first 3 terms. Set up a table with columns: <em>n</em>, <em>an</em>², original, difference, to stay organised.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Quadratic sequences have constant 2nd differences. Formula: Tₙ = an² + bn + c where a = (2nd difference)/2. Find the linear part by subtracting an² from each term. Always verify your formula.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Quadratic = constant 2nd differences. a = (2nd diff)/2. Subtract an² from each term &rarr; linear sequence &rarr; find bn + c.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-identify', prompt: 'How do you identify a quadratic sequence?', answer: 'The second differences are constant (first differences are not).' },
      { id: 'cue-2', blockId: 'list-method', prompt: 'How do you find the value of a in an² + bn + c?', answer: 'a = (2nd difference) ÷ 2.' },
      { id: 'cue-3', blockId: 'callout-worked-main', prompt: 'Find the nth term of 3, 9, 19, 33, 51.', answer: '2nd diff = 4, a = 2. Subtract 2n²: all give 1. So Tₙ = 2n² + 1.' },
      { id: 'cue-4', blockId: 'callout-warning', prompt: 'What common error occurs with the 2nd difference?', answer: 'Forgetting to halve it — the coefficient a = (2nd difference)/2, not the 2nd difference itself.' }
    ]
  },
  evidence: []
};
