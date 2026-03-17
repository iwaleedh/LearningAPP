export const note_olevel_maths_core_1_4_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/adding-and-subtracting-fractions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Add and subtract fractions with the same and different denominators; add and subtract mixed numbers.' }
    },
    {
      id: 'h-same-denom',
      type: 'heading',
      data: { text: 'Same Denominators', level: 2 }
    },
    {
      id: 'p-same-denom',
      type: 'paragraph',
      data: { text: 'When fractions have the <strong>same denominator</strong>, simply add or subtract the numerators. The denominator stays the same.' }
    },
    {
      id: 'callout-key-same',
      type: 'callout',
      data: { style: 'key', title: 'Same Denominator Rule', text: '<span class="nb-frac"><span class="nb-num">a</span><span class="nb-den">c</span></span> + <span class="nb-frac"><span class="nb-num">b</span><span class="nb-den">c</span></span> = <span class="nb-frac"><span class="nb-num">a + b</span><span class="nb-den">c</span></span><br><br>Example: <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">7</span></span> + <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">7</span></span> = <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">7</span></span>' }
    },
    {
      id: 'h-diff-denom',
      type: 'heading',
      data: { text: 'Different Denominators', level: 2 }
    },
    {
      id: 'p-diff-denom',
      type: 'paragraph',
      data: { text: 'When fractions have <strong>different denominators</strong>, first convert them to equivalent fractions with the same denominator (the <strong>Lowest Common Denominator, LCD</strong>) — usually the LCM of the two denominators.' }
    },
    {
      id: 'callout-worked-diff',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: 2/3 + 3/4',
        text: 'Step 1: LCD of 3 and 4 = 12<br>Step 2: Convert both fractions:<br>&nbsp;&nbsp;2/3 = 8/12 &nbsp;(×4)<br>&nbsp;&nbsp;3/4 = 9/12 &nbsp;(×3)<br>Step 3: Add numerators: 8/12 + 9/12 = 17/12<br>Step 4: Convert to mixed: 17/12 = 1 and 5/12<br><br>Answer: <strong>1 5/12</strong>'
      }
    },
    {
      id: 'callout-worked-sub',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: 5/6 − 1/4',
        text: 'Step 1: LCD of 6 and 4 = 12<br>Step 2: Convert:<br>&nbsp;&nbsp;5/6 = 10/12<br>&nbsp;&nbsp;1/4 = 3/12<br>Step 3: Subtract: 10/12 − 3/12 = 7/12<br><br>Answer: <strong>7/12</strong>'
      }
    },
    {
      id: 'h-mixed',
      type: 'heading',
      data: { text: 'Adding and Subtracting Mixed Numbers', level: 2 }
    },
    {
      id: 'p-mixed',
      type: 'paragraph',
      data: { text: 'Method 1: Convert mixed numbers to improper fractions, find LCD, add/subtract, then convert back. Method 2: Handle whole numbers and fractions separately.' }
    },
    {
      id: 'callout-worked-mixed',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: 3 1/2 − 1 2/3',
        text: 'Convert to improper fractions:<br>&nbsp;&nbsp;3 1/2 = 7/2 = 21/6<br>&nbsp;&nbsp;1 2/3 = 5/3 = 10/6<br>Subtract: 21/6 − 10/6 = 11/6<br>Convert back: 11/6 = 1 5/6<br><br>Answer: <strong>1 and 5/6</strong>'
      }
    },
    {
      id: 'callout-tip-lcd',
      type: 'callout',
      data: { style: 'tip', title: 'Finding the LCD Quickly', text: 'To find the LCD of two denominators: if one is a multiple of the other, use the larger one. Otherwise, multiply them (then simplify if possible).<br>LCD of 4 and 6: not multiples → try 4×6=24, or better: LCM(4,6)=12.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Same denominator: just add/subtract numerators. Different denominators: find LCD, make equivalent fractions, then add/subtract. For mixed numbers: convert to improper fractions first — safer and more reliable.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-same-denom', prompt: 'Calculate 5/9 + 2/9 and 7/11 − 3/11.' },
      { id: 'cue-2', blockId: 'h-diff-denom', prompt: 'What is the LCD of 4 and 6? How do you find it?' },
      { id: 'cue-3', blockId: 'callout-worked-diff', prompt: 'Calculate 3/5 + 1/4 using the correct method.' },
      { id: 'cue-4', blockId: 'h-mixed', prompt: 'How do you add mixed numbers? What are the two methods?' },
      { id: 'cue-5', blockId: 'callout-worked-mixed', prompt: 'Calculate 2 3/4 + 1 1/3 as a mixed number.' }
    ],
    summaryText: 'Add/subtract fractions: same denominator → add numerators; different → find LCD first; mixed numbers → convert to improper fractions.',
    ready: true
  },
  evidence: []
};
