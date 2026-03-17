export const note_olevel_maths_extended_1_9_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/problem-solving-with-ratios.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Solve multi-step problems involving ratios, including combining ratios, finding unknown quantities, and using ratios with algebra.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Problem Solving with Ratios', level: 2 } },
    { id: 'p-intro', type: 'paragraph', data: { text: 'IGCSE exam questions often require you to work backwards from a ratio, combine two ratios, or use ratios in context. The key skill is translating word problems into ratio calculations.' } },

    { id: 'h-given-one', type: 'heading', data: { text: 'Finding a Quantity When One Part Is Known', level: 2 } },
    { id: 'callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1', text: 'Red and blue beads are in the ratio 3 : 7. There are 21 red beads. How many blue beads are there?\n\n3 parts = 21 beads\n1 part = 7 beads\n7 parts = 7 × 7 = 49 beads\n\n<b>Answer:</b> 49 blue beads' } },

    { id: 'h-combine', type: 'heading', data: { text: 'Combining Ratios', level: 2 } },
    { id: 'p-combine', type: 'paragraph', data: { text: 'When two ratios share a common quantity, you can combine them into a three-part ratio by making the shared quantity equal in both.' } },

    { id: 'callout-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2', text: 'A : B = 2 : 3 and B : C = 4 : 5. Find A : B : C.\n\nB appears as 3 in the first ratio and 4 in the second.\nLCM of 3 and 4 = 12.\n\nScale first ratio by 4: A : B = 8 : 12\nScale second ratio by 3: B : C = 12 : 15\n\n<b>Answer:</b> A : B : C = 8 : 12 : 15' } },

    { id: 'h-difference', type: 'heading', data: { text: 'Using the Difference', level: 2 } },
    { id: 'callout-worked-3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3', text: 'Two numbers are in the ratio 5 : 8. Their difference is 18. Find the numbers.\n\nDifference in parts: 8 − 5 = 3 parts\n3 parts = 18\n1 part = 6\n\nFirst number: 5 × 6 = 30\nSecond number: 8 × 6 = 48\n\nCheck: 48 − 30 = 18 ✓\n\n<b>Answer:</b> 30 and 48' } },

    { id: 'h-change', type: 'heading', data: { text: 'Changing Ratios', level: 2 } },
    { id: 'callout-worked-4', type: 'callout', data: { style: 'worked', title: 'Worked Example 4', text: 'A drink is mixed in the ratio juice : water = 2 : 5. If 150 ml of water is added to 700 ml of drink, find the new ratio.\n\nOriginal: 2 + 5 = 7 parts in 700 ml &rarr; 1 part = 100 ml\nJuice = 200 ml, Water = 500 ml\n\nAfter adding 150 ml water:\nJuice = 200 ml, Water = 500 + 150 = 650 ml\n\nNew ratio: 200 : 650 = 4 : 13\n\n<b>Answer:</b> 4 : 13' } },

    { id: 'h-algebra', type: 'heading', data: { text: 'Ratios with Algebra', level: 2 } },
    { id: 'callout-worked-5', type: 'callout', data: { style: 'worked', title: 'Worked Example 5', text: 'The ratio of (x + 1) to (2x − 3) is 2 : 5. Find x.\n\n<span class="nb-frac"><span class="nb-num">x + 1</span><span class="nb-den">2x − 3</span></span> = <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">5</span></span>\n\nCross multiply: 5(x + 1) = 2(2x − 3)\n5x + 5 = 4x − 6\nx = −11\n\n<b>Answer:</b> x = −11' } },

    { id: 'callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Always re-read the question to check whether it\'s asking for one part, all parts, or the total. Show your working clearly — marks are awarded for method even if arithmetic slips.' } },

    { id: 'callout-warning-1', type: 'callout', data: { style: 'warning', title: 'Common Mistake', text: 'When combining ratios, students often forget to scale both ratios so the common term matches. Always find the LCM of the common value.' } },

    { id: 'sum-1', type: 'summary', data: { text: 'Problem-solving with ratios involves: finding missing quantities from known parts, combining ratios via a common term (use LCM), using differences between parts, and applying algebra to ratio equations by cross-multiplying.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-worked-1', prompt: 'If A:B = 3:7 and A = 21, how do you find B?' },
      { id: 'cue-2', blockId: 'p-combine', prompt: 'How do you combine two ratios like A:B = 2:3 and B:C = 4:5?' },
      { id: 'cue-3', blockId: 'callout-worked-3', prompt: 'Two numbers are in ratio 5:8 with difference 18. How do you find them?' },
      { id: 'cue-4', blockId: 'callout-worked-5', prompt: 'How do you solve a ratio equation involving algebra?' }
    ],
    summaryText: 'Ratio problem-solving: find unknown parts, combine ratios using LCM, use differences, and cross-multiply for algebraic ratios.',
    ready: true
  },
  evidence: []
};
