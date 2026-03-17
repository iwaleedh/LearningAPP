export const note_olevel_maths_extended_1_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/addition-and-subtraction.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Perform addition and subtraction of integers and decimals confidently, including carrying and borrowing.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Addition of Whole Numbers', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Addition combines two or more numbers to find their total (or sum). When adding in columns, align the digits by <strong>place value</strong> (units under units, tens under tens, etc.) and work from right to left. If a column\'s total exceeds 9, carry the tens digit into the next column.' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 1', text: 'Calculate 4587 + 2965.\n\n<strong>Solution:</strong>\nUnits: 7 + 5 = 12 &rarr; write 2, carry 1\nTens: 8 + 6 + 1 = 15 &rarr; write 5, carry 1\nHundreds: 5 + 9 + 1 = 15 &rarr; write 5, carry 1\nThousands: 4 + 2 + 1 = 7\nAnswer: <strong>7552</strong>' }
    },
    {
      id: 'h-subtraction',
      type: 'heading',
      data: { text: 'Subtraction of Whole Numbers', level: 2 }
    },
    {
      id: 'p-subtraction',
      type: 'paragraph',
      data: { text: 'Subtraction finds the <strong>difference</strong> between two numbers. Align digits by place value and work from right to left. If you cannot subtract a digit, <strong>borrow</strong> 1 from the next column (which adds 10 to the current column).' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 2', text: 'Calculate 8003 − 2547.\n\n<strong>Solution:</strong>\nUnits: 3 − 7 &rarr; cannot do, borrow from tens.\nBut tens digit is 0, so borrow from hundreds.\nHundreds is also 0, so borrow from thousands.\n8003 becomes 7(9)(9)(13):\n13 − 7 = 6, 9 − 4 = 5, 9 − 5 = 4, 7 − 2 = 5\nAnswer: <strong>5456</strong>' }
    },
    {
      id: 'h-mental',
      type: 'heading',
      data: { text: 'Mental Strategies', level: 2 }
    },
    {
      id: 'list-strategies',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Partitioning:</strong> 67 + 45 = 67 + 40 + 5 = 107 + 5 = 112' },
          { text: '<strong>Compensation:</strong> 198 + 56 = 200 + 56 − 2 = 254' },
          { text: '<strong>Near doubles:</strong> 38 + 39 = 38 + 38 + 1 = 77' },
          { text: '<strong>Counting on:</strong> 85 − 47 &rarr; count from 47 to 85 (38)' }
        ]
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Always <strong>estimate</strong> your answer first to check it is reasonable. For 4587 + 2965, estimate: 4600 + 3000 = 7600, so 7552 is sensible.' }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: { style: 'warning', title: 'Common Mistake', text: 'When borrowing across zeros (like 8003 − 2547), students often forget to reduce each intermediate zero to 9. Practice this type carefully.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'For addition, align by place value and carry when totals exceed 9. For subtraction, borrow from the next column when needed. Use mental strategies like partitioning and compensation for efficient calculation. Always estimate to check.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-intro', prompt: 'What does carrying mean in column addition?' },
      { id: 'cue-2', blockId: 'p-subtraction', prompt: 'What does borrowing mean in subtraction?' },
      { id: 'cue-3', blockId: 'list-strategies', prompt: 'Describe the compensation strategy for mental addition.' },
      { id: 'cue-4', blockId: 'callout-tip-1', prompt: 'Why should you estimate before calculating?' }
    ],
    summaryText: 'Addition uses carrying, subtraction uses borrowing; always align by place value and estimate to check.',
    ready: true
  },
  evidence: []
};
