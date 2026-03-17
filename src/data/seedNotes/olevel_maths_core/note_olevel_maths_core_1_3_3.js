export const note_olevel_maths_core_1_3_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/operations-with-decimals.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Add, subtract, multiply, and divide decimal numbers correctly, including alignment of decimal points and counting decimal places.' }
    },
    {
      id: 'h-add-sub',
      type: 'heading',
      data: { text: 'Adding and Subtracting Decimals', level: 2 }
    },
    {
      id: 'p-add-sub',
      type: 'paragraph',
      data: { text: 'Write numbers in a column and <strong>align the decimal points</strong>. Add trailing zeros so all numbers have the same number of decimal places. Then add or subtract as with whole numbers, keeping the decimal point in the same position.' }
    },
    {
      id: 'callout-worked-add',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: 14.6 + 3.047',
        text: '&nbsp;&nbsp;14.600<br>+ &nbsp;3.047<br>———————<br>= <strong>17.647</strong><br><br>Add trailing zeros to align decimal places, then add column by column.'
      }
    },
    {
      id: 'h-multiply',
      type: 'heading',
      data: { text: 'Multiplying Decimals', level: 2 }
    },
    {
      id: 'p-multiply',
      type: 'paragraph',
      data: { text: 'To multiply decimals: (1) Ignore the decimal points and multiply as whole numbers. (2) Count the total number of decimal places in <em>both</em> original numbers. (3) Place the decimal point in the answer so it has that total number of decimal places.' }
    },
    {
      id: 'callout-key-mult',
      type: 'callout',
      data: { style: 'key', title: 'Decimal Multiplication Rule', text: 'Total decimal places in answer = sum of decimal places in both numbers.<br>2.4 × 0.3: 1 d.p. + 1 d.p. = 2 d.p.<br>24 × 3 = 72 → answer: 0.72' }
    },
    {
      id: 'callout-worked-mult',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: 5.6 × 2.3',
        text: 'Step 1: 56 × 23 = 1288<br>Step 2: Count d.p.: 5.6 has 1, 2.3 has 1 → total 2 d.p.<br>Step 3: Place decimal → 12.88<br><br>Answer: <strong>12.88</strong><br><br>Check: 5.6 × 2 = 11.2, 5.6 × 0.3 = 1.68 → 11.2 + 1.68 = 12.88 ✓'
      }
    },
    {
      id: 'h-divide',
      type: 'heading',
      data: { text: 'Dividing Decimals', level: 2 }
    },
    {
      id: 'p-divide',
      type: 'paragraph',
      data: { text: 'To divide by a decimal, multiply both dividend and divisor by a power of 10 to make the divisor a whole number, then divide normally.' }
    },
    {
      id: 'callout-worked-div',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: 4.8 ÷ 0.6',
        text: 'Multiply both by 10 to remove decimal from divisor:<br>4.8 ÷ 0.6 = 48 ÷ 6 = <strong>8</strong><br><br>Another example: 3.75 ÷ 0.05<br>Multiply both by 100:<br>375 ÷ 5 = <strong>75</strong>'
      }
    },
    {
      id: 'callout-tip-decimals',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tips for Decimals', text: '<strong>Multiplying by 10, 100, 1000:</strong> move decimal point <em>right</em> by 1, 2, 3 places.<br><strong>Dividing by 10, 100, 1000:</strong> move decimal point <em>left</em> by 1, 2, 3 places.<br>e.g. 3.47 × 100 = 347 &nbsp;|&nbsp; 56.2 ÷ 100 = 0.562' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Add/subtract decimals: align decimal points. Multiply decimals: multiply as whole numbers then count total decimal places. Divide by decimals: multiply both by same power of 10 to make divisor whole, then divide.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-add-sub', prompt: 'Why must you align decimal points when adding 7.3 and 1.045?' },
      { id: 'cue-2', blockId: 'h-multiply', prompt: 'How many decimal places does 3.4 × 0.12 have in the answer? Why?' },
      { id: 'cue-3', blockId: 'callout-worked-mult', prompt: 'Calculate 4.5 × 1.2 using the decimal multiplication method.' },
      { id: 'cue-4', blockId: 'h-divide', prompt: 'How do you change 2.4 ÷ 0.08 into a division by a whole number?' },
      { id: 'cue-5', blockId: 'callout-tip-decimals', prompt: 'What is 0.037 × 1000? What is 450 ÷ 1000?' }
    ],
    summaryText: 'Decimal operations: align points for add/sub; count d.p. for multiply; convert divisor to whole number for divide.',
    ready: true
  },
  evidence: []
};
