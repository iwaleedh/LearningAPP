export const note_olevel_maths_core_2_4_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/expanding-and-simplifying-single-brackets.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Expand single brackets by multiplying each term inside by the term outside, then collect like terms to simplify the resulting expression.' }
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What is Expanding?', level: 2 }
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: { text: '<strong>Expanding</strong> removes brackets by multiplying the term outside the bracket by <em>every</em> term inside. This is the reverse of factorising. After expanding, you often collect like terms to simplify.' }
    },
    {
      id: 'equation-rule',
      type: 'equation',
      data: { html: 'a(b + c) = ab + ac', caption: 'Distributive law — the foundation of expanding brackets' }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Rule: Multiply EVERY Term Inside',
        text: 'The term outside the bracket multiplies <strong>every single term</strong> inside the bracket — not just the first one.<br><br>3(2x + 4) = 3 × 2x + 3 × 4 = 6x + 12<br><br>5(3y − 2) = 5 × 3y + 5 × (−2) = 15y − 10<br><br>Always keep track of signs: multiplying by a negative outside the bracket <em>flips all signs</em> inside.'
      }
    },
    {
      id: 'h-positive',
      type: 'heading',
      data: { text: 'Expanding with a Positive Term Outside', level: 2 }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Positive Coefficient Outside',
        text: '<strong>(a)</strong> 3(2x + 4)<br>= 3 × 2x + 3 × 4<br>= <strong>6x + 12</strong><br><br><strong>(b)</strong> 5(a − 7)<br>= 5 × a + 5 × (−7)<br>= <strong>5a − 35</strong><br><br><strong>(c)</strong> 4x(3x + 2)<br>= 4x × 3x + 4x × 2<br>= 12x² + 8x<br>= <strong>12x² + 8x</strong><br>(4x × 3x = 12x² because x × x = x²)'
      }
    },
    {
      id: 'h-negative',
      type: 'heading',
      data: { text: 'Expanding with a Negative Term Outside', level: 2 }
    },
    {
      id: 'p-negative',
      type: 'paragraph',
      data: { text: 'When the term outside is negative, multiplying flips the sign of every term inside the bracket.' }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Negative Outside',
        text: '<strong>(a)</strong> −2(3x − 5)<br>= −2 × 3x + (−2) × (−5)<br>= −6x + 10<br>= <strong>−6x + 10</strong><br><br><strong>(b)</strong> −(4a + 7)<br>= −1 × 4a + (−1) × 7<br>= −4a − 7<br>= <strong>−4a − 7</strong><br>(−1 times everything inside flips all signs)<br><br><strong>(c)</strong> −3x(x − 4)<br>= −3x × x + (−3x) × (−4)<br>= −3x² + 12x'
      }
    },
    {
      id: 'h-expand-collect',
      type: 'heading',
      data: { text: 'Expand then Collect Like Terms', level: 2 }
    },
    {
      id: 'p-expand-collect',
      type: 'paragraph',
      data: { text: 'Many questions ask you to expand multiple brackets and then collect like terms. Always expand first, then look for terms that can be combined.' }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Expand and Simplify',
        text: '<strong>(a)</strong> 3(2x + 1) + 4(x − 5)<br>Expand: 6x + 3 + 4x − 20<br>Collect: (6x + 4x) + (3 − 20)<br>= <strong>10x − 17</strong><br><br><strong>(b)</strong> 5(y + 3) − 2(y + 4)<br>Expand: 5y + 15 − 2y − 8<br>Collect: (5y − 2y) + (15 − 8)<br>= <strong>3y + 7</strong><br><br><strong>(c)</strong> 2(3x − 1) − (x + 7)<br>Expand: 6x − 2 − x − 7<br>Collect: (6x − x) + (−2 − 7)<br>= <strong>5x − 9</strong>'
      }
    },
    {
      id: 'callout-warning1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake: −(x + 7)',
        text: '−(x + 7) is −1(x + 7) = −x − 7. Students often incorrectly write −(x + 7) = −x + 7.<br><br>Remember: the negative OUTSIDE changes the sign of EVERY term inside. Both the x and the 7 get a minus sign.'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Check by Substituting a Number',
        text: 'After expanding, check your answer by substituting a simple value like x = 1 into both the original expression and your answer — they should give the same result.<br><br>Original: 3(2x+1) + 4(x−5) at x=1 → 3(3) + 4(−4) = 9 − 16 = −7<br>Answer: 10x − 17 at x=1 → 10 − 17 = −7 ✓'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I multiply EVERY term inside the bracket by the term outside', checked: false },
          { text: 'I handle negative outside brackets correctly (signs flip)', checked: false },
          { text: 'I correctly expand a(b+c) = ab + ac', checked: false },
          { text: 'I expand first, then collect like terms to simplify', checked: false },
          { text: 'I know −(x+7) = −x − 7 (not −x + 7)', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'To expand a bracket, multiply the outside term by <strong>every</strong> term inside. A negative outside bracket <em>flips all signs</em> inside. After expanding multiple brackets, collect like terms to give the final simplified expression.' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'Expand 3(2x + 4). How many multiplications do you perform?' },
      { id: 'cue-2', blockId: 'callout-worked2', prompt: 'Expand −2(3x − 5). What happens to the signs?' },
      { id: 'cue-3', blockId: 'callout-warning1', prompt: 'What is −(x + 7) expanded? What is the common mistake?' },
      { id: 'cue-4', blockId: 'callout-worked3', prompt: 'Expand and simplify: 5(y + 3) − 2(y + 4).' },
      { id: 'cue-5', blockId: 'callout-tip1', prompt: 'How can you check your expansion by substituting x = 1?' },
    ],
    summaryText: 'Expanding a bracket means multiplying every term inside by the outside term; a negative outside flips all signs inside.',
    ready: true,
  },
  evidence: [],
};
