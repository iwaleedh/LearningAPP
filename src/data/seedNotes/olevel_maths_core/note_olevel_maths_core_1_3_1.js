export const note_olevel_maths_core_1_3_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/multiplication-and-division.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Perform long multiplication and long division; check results using estimation and inverse operations.' }
    },
    {
      id: 'h-long-mult',
      type: 'heading',
      data: { text: 'Long Multiplication', level: 2 }
    },
    {
      id: 'p-long-mult',
      type: 'paragraph',
      data: { text: 'Long multiplication is used when multiplying large numbers by multi-digit numbers. Multiply by each digit of the bottom number, shifting one place to the left for each successive digit, then add the rows.' }
    },
    {
      id: 'callout-worked-mult',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Long Multiplication',
        text: 'Calculate 347 × 28<br><br>&nbsp;&nbsp;3 4 7<br>× &nbsp;&nbsp;2 8<br>—————<br>Step 1: 347 × 8 = 2 776<br>Step 2: 347 × 20 = 6 940 &nbsp;(shift left or add a zero)<br>—————<br>Add: 2 776 + 6 940 = <strong>9 716</strong>'
      }
    },
    {
      id: 'h-long-div',
      type: 'heading',
      data: { text: 'Long Division', level: 2 }
    },
    {
      id: 'p-long-div',
      type: 'paragraph',
      data: { text: 'Long division breaks the division into a series of smaller steps: <strong>Divide → Multiply → Subtract → Bring down</strong>. Repeat until no digits remain.' }
    },
    {
      id: 'callout-worked-div',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Long Division',
        text: 'Calculate 784 ÷ 7<br><br>7 goes into 7 → 1 time (1 × 7 = 7), remainder 0<br>Bring down 8 → 08<br>7 goes into 8 → 1 time (1 × 7 = 7), remainder 1<br>Bring down 4 → 14<br>7 goes into 14 → 2 times (2 × 7 = 14), remainder 0<br><br>Answer: <strong>112</strong><br><br>Check: 112 × 7 = 784 ✓'
      }
    },
    {
      id: 'h-remainders',
      type: 'heading',
      data: { text: 'Remainders and Decimals', level: 2 }
    },
    {
      id: 'p-remainders',
      type: 'paragraph',
      data: { text: 'When division does not give a whole number, you can express the leftover as a <strong>remainder</strong> or continue the division with a decimal point to get a decimal answer.' }
    },
    {
      id: 'callout-worked-rem',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Division with Remainder',
        text: 'Calculate 137 ÷ 6<br><br>6 into 13 → 2 times, remainder 1<br>6 into 17 → 2 times, remainder 5<br><br>As remainder: 22 remainder 5 &nbsp;(22 r 5)<br>As decimal: add decimal point, bring down 0 → 50 ÷ 6 = 8 r 2 → 50 ÷ 6...<br><br>Answer: <strong>22.8333...</strong> ≈ 22.83 (2 d.p.)'
      }
    },
    {
      id: 'callout-tip-check',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip: Checking with Inverse', text: 'Always check: answer × divisor = original number<br>e.g. 784 ÷ 7 = 112 → check: 112 × 7 = 784 ✓<br><br>Estimate first: 347 × 28 ≈ 350 × 30 = 10 500, so 9 716 is reasonable.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Long multiplication: multiply by each digit separately then add. Long division: Divide, Multiply, Subtract, Bring down — repeat. Check with inverse operation. Estimate first to confirm reasonableness.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-long-mult', prompt: 'Calculate 246 × 35 using long multiplication.' },
      { id: 'cue-2', blockId: 'h-long-div', prompt: 'What are the four steps in long division?' },
      { id: 'cue-3', blockId: 'callout-worked-div', prompt: 'Calculate 936 ÷ 8 using long division.' },
      { id: 'cue-4', blockId: 'h-remainders', prompt: 'What is 95 ÷ 6? Express as both a remainder and a decimal.' },
      { id: 'cue-5', blockId: 'callout-tip-check', prompt: 'How would you estimate 483 × 19 to check your answer is reasonable?' }
    ],
    summaryText: 'Long multiplication: multiply each digit then add rows. Long division: divide, multiply, subtract, bring down. Check using inverse operations.',
    ready: true
  },
  evidence: []
};
