export const note_olevel_maths_core_2_4_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/expanding-double-brackets.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Expand and simplify the product of two linear brackets using FOIL or the grid method, and recognise and apply the difference of two squares identity.' }
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'Multiplying Two Brackets', level: 2 }
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: { text: 'When multiplying two brackets such as (x + 3)(x + 2), each term in the first bracket must multiply <strong>every</strong> term in the second bracket. We use the <strong>FOIL</strong> method (First, Outer, Inner, Last) to organise this.' }
    },
    {
      id: 'h-foil',
      type: 'heading',
      data: { text: 'The FOIL Method', level: 2 }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'FOIL: (a + b)(c + d)',
        text: '<strong>F</strong>irst: multiply the first terms → ac<br><strong>O</strong>uter: multiply the outer terms → ad<br><strong>I</strong>nner: multiply the inner terms → bc<br><strong>L</strong>ast: multiply the last terms → bd<br><br>Result: ac + ad + bc + bd<br>Then collect like terms (the outer and inner are usually like terms).'
      }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Basic Double Brackets',
        text: '<strong>(a)</strong> (x + 3)(x + 2)<br>F: x × x = x²<br>O: x × 2 = 2x<br>I: 3 × x = 3x<br>L: 3 × 2 = 6<br>= x² + 2x + 3x + 6<br>Collect: = <strong>x² + 5x + 6</strong><br><br><strong>(b)</strong> (x + 5)(x − 1)<br>F: x² &nbsp; O: −x &nbsp; I: 5x &nbsp; L: −5<br>= x² + (−x) + 5x + (−5)<br>= <strong>x² + 4x − 5</strong>'
      }
    },
    {
      id: 'h-pattern',
      type: 'heading',
      data: { text: 'The (x + a)(x + b) Pattern', level: 2 }
    },
    {
      id: 'p-pattern',
      type: 'paragraph',
      data: { text: 'For any two brackets of the form (x + a)(x + b), the result always follows the same pattern:' }
    },
    {
      id: 'equation-pattern',
      type: 'equation',
      data: { html: '(x + a)(x + b) = x² + (a + b)x + ab', caption: 'The x² coefficient is 1; the x coefficient is a+b; the constant is a×b' }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Using the Pattern',
        text: '<strong>(a)</strong> (x + 4)(x + 7): a=4, b=7<br>= x² + (4+7)x + (4×7) = <strong>x² + 11x + 28</strong><br><br><strong>(b)</strong> (x − 3)(x − 5): a=−3, b=−5<br>= x² + (−3+(−5))x + (−3)(−5) = <strong>x² − 8x + 15</strong><br><br><strong>(c)</strong> (x + 6)(x − 2): a=6, b=−2<br>= x² + (6+(−2))x + (6)(−2) = <strong>x² + 4x − 12</strong>'
      }
    },
    {
      id: 'h-dots',
      type: 'heading',
      data: { text: 'Difference of Two Squares', level: 2 }
    },
    {
      id: 'p-dots',
      type: 'paragraph',
      data: { text: 'When the two brackets are identical except one has a + and the other has a −, the middle terms cancel out completely. This is called the <strong>difference of two squares</strong>.' }
    },
    {
      id: 'equation-dots',
      type: 'equation',
      data: { html: '(x + a)(x − a) = x² − a²', caption: 'Difference of two squares — the x terms always cancel' }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Difference of Two Squares',
        text: '<strong>(a)</strong> (x + 5)(x − 5)<br>= x² − 5² = <strong>x² − 25</strong><br>(Middle terms: +5x − 5x = 0)<br><br><strong>(b)</strong> (x + 9)(x − 9) = x² − 81<br><br><strong>(c)</strong> (2x + 3)(2x − 3)<br>= (2x)² − 3² = 4x² − 9<br><br><strong>Verify (a) with FOIL:</strong><br>(x+5)(x−5): F=x², O=−5x, I=5x, L=−25<br>= x² − 5x + 5x − 25 = x² − 25 ✓'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Spot the Difference of Two Squares',
        text: 'As soon as you see two brackets that are (something + number)(something − number) — same terms, opposite signs — immediately apply x² − a². This saves time and avoids errors in the middle terms.<br><br>Also, you can use a grid (table) instead of FOIL if you prefer — draw a 2×2 grid and multiply each pair of terms, then collect the four results.'
      }
    },
    {
      id: 'callout-warning1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake: (x + 3)² ≠ x² + 9',
        text: '(x + 3)² means (x + 3)(x + 3), NOT just squaring each term separately.<br><br>(x + 3)² = (x+3)(x+3) = x² + 3x + 3x + 9 = <strong>x² + 6x + 9</strong><br><br>Never "distribute" a power over addition: (x + 3)² ≠ x² + 3² = x² + 9.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I apply FOIL correctly: F, O, I, L then collect', checked: false },
          { text: 'I know (x+a)(x+b) = x² + (a+b)x + ab', checked: false },
          { text: 'I recognise difference of two squares: (x+a)(x−a) = x² − a²', checked: false },
          { text: 'I know (x+3)² = x² + 6x + 9 (not x² + 9)', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Expand double brackets using <strong>FOIL</strong> (First, Outer, Inner, Last) then collect like terms. For (x+a)(x+b), use the pattern x² + (a+b)x + ab. When brackets are (x+a)(x−a), the middle terms cancel giving the <strong>difference of two squares</strong>: x² − a².' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'What does FOIL stand for? Give the four products for (a+b)(c+d).' },
      { id: 'cue-2', blockId: 'callout-worked1', prompt: 'Expand (x + 3)(x + 2) using FOIL. Show all four products.' },
      { id: 'cue-3', blockId: 'equation-dots', prompt: 'State the difference of two squares identity. Expand (x+5)(x−5).' },
      { id: 'cue-4', blockId: 'callout-warning1', prompt: 'What is (x+3)²? Why is it NOT x² + 9?' },
      { id: 'cue-5', blockId: 'equation-pattern', prompt: 'Expand (x − 3)(x − 5) using the (x+a)(x+b) pattern.' },
    ],
    summaryText: 'Use FOIL to expand double brackets, apply (x+a)(x+b) = x²+(a+b)x+ab for efficiency, and spot x²−a² when signs are opposite.',
    ready: true,
  },
  evidence: [],
};
