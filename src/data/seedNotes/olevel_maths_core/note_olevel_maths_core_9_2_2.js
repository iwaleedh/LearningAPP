export const note_olevel_maths_core_9_2_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Statistics/calculations-with-the-mean.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Use the mean formula in reverse to find the total sum of data. Find a missing value given the mean and all other values. Calculate the combined mean of two groups.',
      },
    },
    {
      id: 'h-reverse',
      type: 'heading',
      data: { text: 'Finding the Total from the Mean', level: 2 },
    },
    {
      id: 'p-reverse',
      type: 'paragraph',
      data: {
        text: 'The mean formula can be rearranged to find the <b>total sum</b> of the data values when the mean and the number of values are known.',
      },
    },
    {
      id: 'eq-total',
      type: 'equation',
      data: {
        html: 'Total = Mean × n',
        caption: 'Rearranged mean formula (n = number of values)',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Finding the total',
        text: 'The mean of 8 numbers is 13.5. Find the sum of the 8 numbers.<br><br>Total = Mean × n = 13.5 × 8 = <b>108</b>',
      },
    },
    {
      id: 'h-missing',
      type: 'heading',
      data: { text: 'Finding a Missing Value', level: 2 },
    },
    {
      id: 'p-missing',
      type: 'paragraph',
      data: {
        text: 'If all values in a data set are known <b>except one</b>, and the mean is given, you can find the missing value by:<br>1. Calculate the required total (mean × n)<br>2. Subtract the sum of the known values',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Finding a missing value',
        text: 'Five values have a mean of 10. Four of the values are 6, 9, 11, and 14. Find the fifth value.<br><br><b>Step 1:</b> Total = 10 × 5 = 50<br><b>Step 2:</b> Sum of known values = 6 + 9 + 11 + 14 = 40<br><b>Step 3:</b> Fifth value = 50 − 40 = <b>10</b>',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Setting up an equation',
        text: 'Seven integers have a mean of 9. Six of them are 5, 12, 8, 7, 11, and 10. Find the seventh value.<br><br>Required total = 9 × 7 = 63<br>Sum of known = 5 + 12 + 8 + 7 + 11 + 10 = 53<br>7th value = 63 − 53 = <b>10</b><br><br><i>Check:</i> (5+12+8+7+11+10+10) ÷ 7 = 63 ÷ 7 = 9 ✓',
      },
    },
    {
      id: 'h-combined',
      type: 'heading',
      data: { text: 'Combining Means of Two Groups', level: 2 },
    },
    {
      id: 'p-combined',
      type: 'paragraph',
      data: {
        text: 'If you know the mean and size of two separate groups, you can find the <b>overall mean</b> by calculating the total of each group, adding the totals, and dividing by the combined number of values. You <b>cannot</b> simply average the two means unless the group sizes are equal.',
      },
    },
    {
      id: 'callout-we4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — Combined mean',
        text: 'Class A has 20 students with a mean mark of 65.<br>Class B has 30 students with a mean mark of 75.<br>Find the overall mean of all 50 students.<br><br>Total marks for Class A = 65 × 20 = 1300<br>Total marks for Class B = 75 × 30 = 2250<br>Combined total = 1300 + 2250 = 3550<br>Overall mean = 3550 ÷ 50 = <b>71</b><br><br><i>Note:</i> The overall mean (71) is NOT the mean of 65 and 75 (which would be 70). The larger class (B) has more influence on the result.',
      },
    },
    {
      id: 'h-effect',
      type: 'heading',
      data: { text: 'Effect of Adding a Constant or Multiplying', level: 2 },
    },
    {
      id: 'tbl-effect',
      type: 'comparisonTable',
      data: {
        caption: 'How operations on data affect the mean',
        headers: ['Operation on every data value', 'Effect on the mean'],
        rows: [
          ['Add a constant c to every value', 'Mean increases by c'],
          ['Subtract a constant c from every value', 'Mean decreases by c'],
          ['Multiply every value by a constant k', 'Mean is multiplied by k'],
          ['Divide every value by a constant k', 'Mean is divided by k'],
        ],
      },
    },
    {
      id: 'callout-we5',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 5 — Effect of scaling',
        text: 'A set of 6 temperatures in °C has a mean of 18°C. All temperatures are then converted to Kelvin by adding 273.<br><br>New mean = 18 + 273 = <b>291 K</b><br><br>The mean simply shifts by the same constant added to each value.',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip',
        text: 'Remember: Mean × n = Total. This is the single most useful rearrangement for "calculations with mean" questions. Always write down the required total first, then subtract what you know.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Total = Mean × n. To find a missing value: total − sum of known values. Combined mean of two groups: (total of group 1 + total of group 2) ÷ combined n. Adding k to every value adds k to the mean; multiplying every value by k multiplies the mean by k.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Total = Mean × n. Missing value = total − sum of knowns. Never average two means unless groups are equal size.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-total',
        prompt: 'How do you find the total sum of a data set if you know the mean and the number of values?',
        answer: 'Total = Mean × n. Multiply the mean by the number of values.',
      },
      {
        id: 'cue-2',
        blockId: 'callout-we2',
        prompt: 'Five values have mean 10. Four are 6, 9, 11, 14. What is the fifth?',
        answer: 'Required total = 10 × 5 = 50. Sum of known = 6+9+11+14 = 40. Fifth value = 50 − 40 = 10.',
      },
      {
        id: 'cue-3',
        blockId: 'callout-we4',
        prompt: 'Class A: 20 students, mean 65. Class B: 30 students, mean 75. What is the overall mean?',
        answer: 'Total A = 20×65 = 1300. Total B = 30×75 = 2250. Overall mean = (1300+2250)÷50 = 3550÷50 = 71.',
      },
      {
        id: 'cue-4',
        blockId: 'tbl-effect',
        prompt: 'If 5 is added to every value in a data set with mean 12, what is the new mean?',
        answer: '12 + 5 = 17. Adding a constant to every value increases the mean by the same constant.',
      },
      {
        id: 'cue-5',
        blockId: 'p-combined',
        prompt: 'Can you find the overall mean by averaging the two group means? When?',
        answer: 'Only if the two groups are the same size. Otherwise you must use: (total₁ + total₂) ÷ (n₁ + n₂).',
      },
    ],
  },
  evidence: [],
};
