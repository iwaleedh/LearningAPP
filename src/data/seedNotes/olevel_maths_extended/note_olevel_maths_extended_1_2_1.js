export const note_olevel_maths_extended_1_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/multiplication-and-division.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Perform multiplication and division of integers using long multiplication, short/long division, and mental methods.' }
    },
    {
      id: 'h-mult',
      type: 'heading',
      data: { text: 'Multiplication', level: 2 }
    },
    {
      id: 'p-mult',
      type: 'paragraph',
      data: { text: 'Multiplication is repeated addition. For <strong>long multiplication</strong>, multiply by each digit of the second number separately, then add the partial products. Remember to add a placeholder zero for each subsequent row.' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 1', text: 'Calculate 346 × 27.\n\n<strong>Solution:</strong>\n346 × 7 = 2422\n346 × 20 = 6920\nAdd: 2422 + 6920 = <strong>9342</strong>' }
    },
    {
      id: 'h-div',
      type: 'heading',
      data: { text: 'Division', level: 2 }
    },
    {
      id: 'p-div',
      type: 'paragraph',
      data: { text: 'Division splits a number into equal parts. In <strong>short division</strong> (bus stop method), divide digit by digit from left to right, carrying remainders. <strong>Long division</strong> is used when dividing by a two-digit (or larger) number.' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 2', text: 'Calculate 8456 ÷ 8.\n\n<strong>Solution (short division):</strong>\n8 ÷ 8 = 1 remainder 0\n4 ÷ 8 = 0 remainder 4\n45 ÷ 8 = 5 remainder 5\n56 ÷ 8 = 7 remainder 0\nAnswer: <strong>1057</strong>' }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 3', text: 'Calculate 1575 ÷ 25.\n\n<strong>Solution (long division):</strong>\n25 into 15 = 0 remainder 15\n25 into 157 = 6 remainder 7\n25 into 75 = 3 remainder 0\nAnswer: <strong>63</strong>' }
    },
    {
      id: 'h-mental',
      type: 'heading',
      data: { text: 'Useful Mental Methods', level: 2 }
    },
    {
      id: 'list-mental',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Multiply by 5:</strong> multiply by 10, then halve (e.g. 48 × 5 = 480 ÷ 2 = 240)' },
          { text: '<strong>Multiply by 25:</strong> multiply by 100, then divide by 4' },
          { text: '<strong>Multiply by 9:</strong> multiply by 10, then subtract the original (e.g. 34 × 9 = 340 − 34 = 306)' },
          { text: '<strong>Divide by 5:</strong> multiply by 2, then divide by 10' }
        ]
      }
    },
    {
      id: 'callout-key-checks',
      type: 'callout',
      data: { style: 'key', title: 'Checking Your Answer', text: 'Use the <strong>inverse operation</strong> to check: if 346 × 27 = 9342, then 9342 ÷ 27 should equal 346. You can also estimate: 350 × 30 = 10 500, so 9342 is reasonable.' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Show your working clearly for multiplication and division. Even if you get the final answer wrong, you can still gain method marks for correct working.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Long multiplication uses partial products; short division carries remainders digit by digit. Use mental shortcuts (multiply by 10 then adjust) for speed. Always check using the inverse operation or estimation.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-mult', prompt: 'Describe the steps of long multiplication.' },
      { id: 'cue-2', blockId: 'p-div', prompt: 'What is the short division (bus stop) method?' },
      { id: 'cue-3', blockId: 'list-mental', prompt: 'How can you quickly multiply a number by 25?' },
      { id: 'cue-4', blockId: 'callout-key-checks', prompt: 'How do you check a multiplication answer using the inverse operation?' }
    ],
    summaryText: 'Long multiplication and short/long division are key written methods; mental shortcuts and estimation provide speed and accuracy checks.',
    ready: true
  },
  evidence: []
};
