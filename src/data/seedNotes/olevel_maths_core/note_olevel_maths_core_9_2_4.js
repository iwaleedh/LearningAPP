export const note_olevel_maths_core_9_2_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Statistics/using-calculators-to-find-averages.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Use a scientific calculator efficiently to compute the mean, median, and range. Lay out statistical working clearly in the exam. Check answers using estimation and identify common errors.',
      },
    },
    {
      id: 'h-layout',
      type: 'heading',
      data: { text: 'Laying Out Statistical Working in the Exam', level: 2 },
    },
    {
      id: 'p-layout',
      type: 'paragraph',
      data: {
        text: 'Even when using a calculator, you must show your method clearly. Examiners award <b>method marks</b> for correct process even if the final answer contains an arithmetic error.',
      },
    },
    {
      id: 'list-layout',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<b>Write the formula</b> you are using (e.g. Mean = Σx ÷ n)' },
          { text: '<b>Substitute values</b> clearly (e.g. Mean = (3+7+5+...)/8)' },
          { text: '<b>Show the sum</b> before dividing (e.g. = 54/10)' },
          { text: '<b>State the answer</b> with correct units and appropriate rounding' },
          { text: '<b>Order data</b> before finding the median — write the ordered list' },
        ],
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Correct exam layout',
        text: '<b>Data:</b> 8, 3, 11, 5, 9, 6, 4, 10<br><br><b>Mean:</b><br>Sum = 8+3+11+5+9+6+4+10 = 56<br>Mean = 56 ÷ 8 = <b>7</b><br><br><b>Median:</b><br>Ordered: 3, 4, 5, 6, 8, 9, 10, 11 (n = 8)<br>Median = (4th + 5th) ÷ 2 = (6 + 8) ÷ 2 = 14 ÷ 2 = <b>7</b><br><br><b>Mode:</b> No mode (all values appear once)<br><br><b>Range:</b> 11 − 3 = <b>8</b>',
      },
    },
    {
      id: 'h-calc',
      type: 'heading',
      data: { text: 'Using the Calculator Efficiently', level: 2 },
    },
    {
      id: 'p-calc',
      type: 'paragraph',
      data: {
        text: 'For long lists of numbers or frequency tables, use your calculator\'s memory and parentheses carefully to avoid errors.',
      },
    },
    {
      id: 'list-calc',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Use <b>( )</b> to group the numerator before dividing: e.g. type (3+7+5+8+4) ÷ 5' },
          { text: 'For frequency tables, calculate each <b>xf product separately</b>, note it down, then add' },
          { text: 'Use the <b>Ans key</b> to continue from the previous result without re-entering numbers' },
          { text: 'Store intermediate totals in <b>memory (M+)</b> to avoid transcription errors' },
        ],
      },
    },
    {
      id: 'h-estimate',
      type: 'heading',
      data: { text: 'Checking with an Estimated Mean', level: 2 },
    },
    {
      id: 'p-estimate',
      type: 'paragraph',
      data: {
        text: 'Before accepting a calculator answer, do a quick mental estimate. Round all values to 1 significant figure, sum them, and divide by n. If your calculator answer is very different from your estimate, re-check the calculation.',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Estimation check',
        text: 'Data: 4.8, 7.2, 3.9, 8.5, 6.3, 5.1<br><br><b>Estimate:</b> Round to 1 s.f.: 5+7+4+9+6+5 = 36, then 36÷6 ≈ 6<br><b>Calculator answer:</b> (4.8+7.2+3.9+8.5+6.3+5.1) ÷ 6 = 35.8 ÷ 6 = 5.97<br><br>Estimate ≈ 6, calculator ≈ 5.97 — these are close, so the answer is plausible. ✓',
      },
    },
    {
      id: 'h-mistakes',
      type: 'heading',
      data: { text: 'Common Errors to Avoid', level: 2 },
    },
    {
      id: 'list-mistakes',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<b>Dividing by the number of distinct values</b> rather than the total frequency in a frequency table. Always use total Σf, not the number of rows.' },
          { text: '<b>Forgetting to order data</b> before finding the median. The middle value of an unordered list is meaningless.' },
          { text: '<b>Finding the wrong median position</b> — always use (n+1)/2. With 10 values, the median is between the 5th and 6th, not the 5th alone.' },
          { text: '<b>Using the class boundaries instead of midpoints</b> when calculating mean from a grouped table.' },
          { text: '<b>Not multiplying frequency by value (xf)</b> when calculating mean from a frequency table — just using x instead of xf.' },
        ],
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common error with frequency tables',
        text: 'If a frequency table shows score 3 appearing 8 times, you must add 3 <b>eight times</b> (i.e. use 3 × 8 = 24), <b>not</b> just add 3 once. Many students forget to account for the frequency when finding the sum, leading to a wrong mean.',
      },
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I always show the sum before dividing when finding the mean', checked: false },
          { text: 'I order the data before finding the median', checked: false },
          { text: 'I use (n+1)/2 to find the median position', checked: false },
          { text: 'When using a frequency table, I divide by Σf (total frequency), not the number of rows', checked: false },
          { text: 'I use midpoints (not boundaries) for grouped frequency tables', checked: false },
          { text: 'I do an estimation check to verify my calculator answer is reasonable', checked: false },
        ],
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Always show full working (formula, substitution, result). Order data before finding median. For frequency tables, divide by Σf not number of rows. For grouped tables, use midpoints. Use estimation to check: round all values and mentally compute the mean to compare with your calculator answer.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Show full working. Order data for median. Divide by Σf in tables. Use midpoints in grouped tables. Estimation checks your calculator.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-layout',
        prompt: 'What are the five steps for laying out mean calculation working in an exam?',
        answer: '1. Write the formula. 2. Substitute values. 3. Show the sum. 4. Give answer with units/rounding. 5. Order data before finding median.',
      },
      {
        id: 'cue-2',
        blockId: 'callout-warning',
        prompt: 'What is the most common error when finding the mean from a frequency table?',
        answer: 'Not multiplying each value by its frequency. You must compute xf (value × frequency) for each row, not just add the values once.',
      },
      {
        id: 'cue-3',
        blockId: 'h-estimate',
        prompt: 'How do you estimate the mean to check your calculator answer?',
        answer: 'Round all values to 1 significant figure, sum them mentally, and divide by n. If the result is close to your calculator answer, it is likely correct.',
      },
      {
        id: 'cue-4',
        blockId: 'list-mistakes',
        prompt: 'Name two common mistakes students make when finding averages from tables.',
        answer: '1. Dividing by the number of rows instead of total frequency (Σf). 2. Using class boundaries instead of midpoints for grouped tables.',
      },
    ],
  },
  evidence: [],
};
