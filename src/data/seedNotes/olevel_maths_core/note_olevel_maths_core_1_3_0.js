export const note_olevel_maths_core_1_3_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/addition-and-subtraction.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Perform addition and subtraction of whole numbers and decimals using column methods; apply mental strategies and estimate to check answers.' }
    },
    {
      id: 'h-column-add',
      type: 'heading',
      data: { text: 'Column Addition', level: 2 }
    },
    {
      id: 'p-column-add',
      type: 'paragraph',
      data: { text: 'In <strong>column addition</strong>, align numbers so digits with the same place value are in the same column. Add from right to left (units first). When a column total ≥ 10, carry the tens digit to the next column.' }
    },
    {
      id: 'callout-worked-add',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Column Addition',
        text: 'Calculate 3 847 + 2 965<br><br>&nbsp;&nbsp;3 8 4 7<br>+ 2 9 6 5<br>——————<br>7 + 5 = 12 → write 2, carry 1<br>4 + 6 + 1 = 11 → write 1, carry 1<br>8 + 9 + 1 = 18 → write 8, carry 1<br>3 + 2 + 1 = 6<br><br>Answer: <strong>6 812</strong>'
      }
    },
    {
      id: 'h-column-sub',
      type: 'heading',
      data: { text: 'Column Subtraction', level: 2 }
    },
    {
      id: 'p-column-sub',
      type: 'paragraph',
      data: { text: 'In <strong>column subtraction</strong>, align digits by place value and subtract from right to left. When subtracting a larger digit from a smaller one, <em>borrow</em> 10 from the next column on the left.' }
    },
    {
      id: 'callout-worked-sub',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Column Subtraction',
        text: 'Calculate 5 304 − 1 867<br><br>&nbsp;&nbsp;5 3 0 4<br>– 1 8 6 7<br>——————<br>4 − 7: borrow → 14 − 7 = 7<br>0 − 1 (borrowed) − 6: borrow → 10 − 7 = 3 (→ written after borrow adjustment)<br>Work through each column carefully.<br><br>Answer: <strong>3 437</strong>'
      }
    },
    {
      id: 'h-decimals',
      type: 'heading',
      data: { text: 'Adding and Subtracting Decimals', level: 2 }
    },
    {
      id: 'p-decimals',
      type: 'paragraph',
      data: { text: 'Align the <strong>decimal points</strong> vertically before adding or subtracting. Add trailing zeros so all numbers have the same number of decimal places, then proceed as with whole numbers.' }
    },
    {
      id: 'callout-worked-dec',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Decimal Addition',
        text: 'Calculate 12.7 + 3.045<br><br>&nbsp;&nbsp;12.700<br>+&nbsp;3.045<br>—————<br>Answer: <strong>15.745</strong><br><br><em>Note: 12.7 was written as 12.700 to match decimal places.</em>'
      }
    },
    {
      id: 'h-check',
      type: 'heading',
      data: { text: 'Checking Answers', level: 2 }
    },
    {
      id: 'list-check',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Inverse operation:</strong> check addition with subtraction and vice versa' },
          { text: '<strong>Estimate:</strong> round to 1 s.f. and add mentally to check order of magnitude' },
          { text: '<strong>Digit sum:</strong> the sum of digits of the answer should be consistent' }
        ]
      }
    },
    {
      id: 'callout-tip-align',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Always align decimal points. A misaligned decimal is one of the most common errors in arithmetic. Write out the columns carefully, especially in non-calculator papers.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Column addition: add right to left, carry when ≥ 10. Column subtraction: subtract right to left, borrow when needed. Decimals: align decimal points first. Always estimate to check answer is reasonable.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-column-add', prompt: 'What does "carrying" mean in column addition? When do you carry?' },
      { id: 'cue-2', blockId: 'callout-worked-add', prompt: 'Calculate 4 736 + 1 895 using column addition.' },
      { id: 'cue-3', blockId: 'h-column-sub', prompt: 'What does "borrowing" mean in column subtraction? When is it needed?' },
      { id: 'cue-4', blockId: 'h-decimals', prompt: 'Why must you align decimal points when adding 5.3 + 2.17?' },
      { id: 'cue-5', blockId: 'h-check', prompt: 'How can you use inverse operations to check a subtraction answer?' }
    ],
    summaryText: 'Add/subtract in columns right to left; carry (addition) or borrow (subtraction); always align decimal points.',
    ready: true
  },
  evidence: []
};
