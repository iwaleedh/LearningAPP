export const note_olevel_maths_core_9_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Statistics/mean-median-and-mode.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Calculate mean, median, and mode for a list of data values. Identify which average is most appropriate in context. Understand how outliers affect each average.',
      },
    },
    {
      id: 'h-averages',
      type: 'heading',
      data: { text: 'The Three Averages', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'An <b>average</b> is a single value that represents a typical or central value in a data set. There are three common averages at IGCSE: the <b>mean</b>, the <b>median</b>, and the <b>mode</b>.',
      },
    },
    {
      id: 'h-mean',
      type: 'heading',
      data: { text: 'Mean', level: 2 },
    },
    {
      id: 'p-mean',
      type: 'paragraph',
      data: {
        text: 'The <b>mean</b> is calculated by dividing the sum of all values by the number of values. It uses all the data, so it is affected by extreme values (outliers).',
      },
    },
    {
      id: 'eq-mean',
      type: 'equation',
      data: {
        html: 'Mean = <span class="nb-frac"><span class="nb-num">sum of all values</span><span class="nb-den">number of values</span></span>',
        caption: 'Mean formula',
      },
    },
    {
      id: 'h-median',
      type: 'heading',
      data: { text: 'Median', level: 2 },
    },
    {
      id: 'p-median',
      type: 'paragraph',
      data: {
        text: 'The <b>median</b> is the <b>middle value</b> when all data is arranged in order (ascending or descending). It is not affected by outliers.',
      },
    },
    {
      id: 'list-median',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Odd number</b> of values (n): median is the <b>((n+1)/2)th</b> value. E.g. if n = 9, median is the 5th value.' },
          { text: '<b>Even number</b> of values (n): median is the <b>mean of the (n/2)th and (n/2 + 1)th</b> values. E.g. if n = 10, median = mean of 5th and 6th values.' },
        ],
      },
    },
    {
      id: 'h-mode',
      type: 'heading',
      data: { text: 'Mode', level: 2 },
    },
    {
      id: 'p-mode',
      type: 'paragraph',
      data: {
        text: 'The <b>mode</b> is the value that appears most frequently. A data set can have <b>one mode</b>, <b>more than one mode</b> (bimodal/multimodal), or <b>no mode</b> if all values appear the same number of times.',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding mean, median, mode',
        text: 'Find the mean, median, and mode of: &nbsp; <b>4, 7, 3, 7, 5, 8, 7, 2, 6, 5</b><br><br><b>Step 1 — Order the data:</b><br>2, 3, 4, 5, 5, 6, 7, 7, 7, 8<br><br><b>Step 2 — Mean:</b><br>Sum = 2+3+4+5+5+6+7+7+7+8 = 54<br>Mean = 54 ÷ 10 = <b>5.4</b><br><br><b>Step 3 — Median</b> (n = 10, even):<br>Median = mean of 5th and 6th values = (5 + 6) ÷ 2 = <b>5.5</b><br><br><b>Step 4 — Mode:</b><br>7 appears 3 times — more than any other value.<br>Mode = <b>7</b>',
      },
    },
    {
      id: 'h-compare',
      type: 'heading',
      data: { text: 'When to Use Each Average', level: 2 },
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Choosing the appropriate average',
        headers: ['Average', 'Best used when…', 'Weakness'],
        rows: [
          ['Mean', 'Data is symmetrically distributed with no extreme outliers', 'Greatly affected by outliers (extreme values)'],
          ['Median', 'Data has outliers or is skewed; for income/house prices', 'Ignores the actual values of most data points'],
          ['Mode', 'Data is qualitative (e.g. most popular shoe size for stocking)', 'May not exist, or there may be multiple modes'],
        ],
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Effect of an outlier',
        text: 'Annual salaries in a small office: £18 000, £20 000, £21 000, £22 000, £19 000, £95 000<br><br><b>Mean</b> = (18 000 + 20 000 + 21 000 + 22 000 + 19 000 + 95 000) ÷ 6 = 195 000 ÷ 6 = <b>£32 500</b><br><b>Median</b>: ordered: 18 000, 19 000, 20 000, 21 000, 22 000, 95 000 → median = (20 000 + 21 000)/2 = <b>£20 500</b><br><br>The salary of £95 000 is an <b>outlier</b>. The mean of £32 500 is misleading — it is higher than 5 of the 6 salaries. The <b>median</b> (£20 500) is a better representation of a typical salary here.',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip — Finding the median position',
        text: 'A quick way to find the position of the median: use the formula <b>(n + 1) ÷ 2</b>.<br>If n = 10: position = 11/2 = 5.5 → median is halfway between the 5th and 6th values.<br>If n = 11: position = 6 → median is the 6th value.<br><br>Always <b>order the data first</b> before finding the median — do not just pick the middle value from an unordered list.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: '<b>Mean</b> = sum ÷ count (affected by outliers). <b>Median</b> = middle value when ordered ((n+1)/2 position; average of two middles for even n). <b>Mode</b> = most frequent value. Use median when outliers are present; use mode for qualitative data.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Mean = sum ÷ n. Median = middle when ordered. Mode = most frequent. Outliers distort the mean.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-mean',
        prompt: 'What is the formula for the mean and what does it measure?',
        answer: 'Mean = (sum of all values) ÷ (number of values). It measures the arithmetic average — the "fair share" if all data were equalised.',
      },
      {
        id: 'cue-2',
        blockId: 'list-median',
        prompt: 'How do you find the median when there is an even number of values?',
        answer: 'Order the data, then find the mean of the (n/2)th and (n/2 + 1)th values. For example, with n = 10, average the 5th and 6th values.',
      },
      {
        id: 'cue-3',
        blockId: 'callout-we1',
        prompt: 'Find the mean, median, and mode of: 4, 7, 3, 7, 5, 8, 7, 2, 6, 5.',
        answer: 'Ordered: 2,3,4,5,5,6,7,7,7,8. Mean = 54÷10 = 5.4. Median = (5+6)÷2 = 5.5. Mode = 7.',
      },
      {
        id: 'cue-4',
        blockId: 'callout-we2',
        prompt: 'Why is the median preferred over the mean when an outlier is present?',
        answer: 'The mean is pulled towards extreme values, making it unrepresentative. The median is resistant to outliers because it only uses the middle value(s).',
      },
      {
        id: 'cue-5',
        blockId: 'tbl-compare',
        prompt: 'Give one situation where the mode is the most useful average.',
        answer: 'The mode is useful for qualitative data or when the most common item matters — for example, a shoe manufacturer needs to know the most popular shoe size to stock.',
      },
    ],
  },
  evidence: [],
};
