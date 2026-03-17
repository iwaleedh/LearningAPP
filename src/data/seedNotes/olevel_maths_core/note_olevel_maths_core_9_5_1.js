export const note_olevel_maths_core_9_5_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Statistics/quartiles-and-interquartile-range.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Find the lower quartile (Q1), upper quartile (Q3), and interquartile range (IQR) for a data set. Understand the five-number summary. Interpret box plots and construct them from a data set.',
      },
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'Quartiles', level: 2 },
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: {
        text: 'Quartiles divide an ordered data set into <b>four equal parts</b>. The three dividing values are Q1, Q2 (= median), and Q3. They summarise the distribution and are not affected by extreme outliers.',
      },
    },
    {
      id: 'tbl-quartiles',
      type: 'comparisonTable',
      data: {
        caption: 'Quartile positions',
        headers: ['Quartile', 'Full name', 'Position in ordered data', 'Meaning'],
        rows: [
          ['Q1', 'Lower quartile', '¼ of the way through', '25% of values are below Q1'],
          ['Q2', 'Median', '½ of the way through', '50% of values are below Q2'],
          ['Q3', 'Upper quartile', '¾ of the way through', '75% of values are below Q3'],
        ],
      },
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'IQR formula',
        text: '<b>IQR = Q3 − Q1</b><br><br>The IQR represents the <b>middle 50%</b> of the data. A small IQR means the central data is closely clustered. A large IQR means greater spread in the central data.',
      },
    },
    {
      id: 'h-finding',
      type: 'heading',
      data: { text: 'Finding Q1 and Q3', level: 2 },
    },
    {
      id: 'p-finding',
      type: 'paragraph',
      data: {
        text: 'Order the data, find the median position, then find Q1 as the median of the <b>lower half</b> and Q3 as the median of the <b>upper half</b>.',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Finding Q1, Q3, IQR',
        text: '<b>Data set A:</b> 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 11 (n = 11)<br><br>Order already done. n = 11.<br>Median position = (11+1)/2 = 6th value → <b>Q2 = 6</b><br><br>Lower half (values 1–5): 1, 2, 3, 4, 5 → Q1 = 3rd value = <b>Q1 = 3</b><br>Upper half (values 7–11): 7, 8, 8, 9, 11 → Q3 = 3rd value = <b>Q3 = 8</b><br><br><b>IQR = Q3 − Q1 = 8 − 3 = 5</b><br><br><b>Data set B:</b> 4, 5, 5, 6, 7, 7, 8, 8, 9, 9, 10 (n = 11)<br>Q2 = 6th value = <b>7</b><br>Lower half: 4,5,5,6,7 → Q1 = <b>5</b><br>Upper half: 8,8,9,9,10 → Q3 = <b>9</b><br><b>IQR = 9 − 5 = 4</b><br><br>Data set B has a smaller IQR (4 vs 5) — the middle 50% is more tightly clustered.',
      },
    },
    {
      id: 'h-fivenumber',
      type: 'heading',
      data: { text: 'Five-Number Summary and Box Plots', level: 2 },
    },
    {
      id: 'list-fns',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Minimum</b> — smallest value' },
          { text: '<b>Q1</b> — lower quartile' },
          { text: '<b>Median (Q2)</b> — middle value' },
          { text: '<b>Q3</b> — upper quartile' },
          { text: '<b>Maximum</b> — largest value' },
        ],
      },
    },
    {
      id: 'p-boxplot',
      type: 'paragraph',
      data: {
        text: 'A <b>box plot</b> (box-and-whisker diagram) displays the five-number summary on a number line. The box spans Q1 to Q3 (the IQR), a line inside the box marks the median, and whiskers extend to the minimum and maximum.',
      },
    },
    {
      id: 'svg-boxplot',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="160" y="14" text-anchor="middle" font-size="10" font-weight="bold" fill="#333">Box Plots for Data Sets A and B</text><line x1="40" y1="110" x2="300" y2="110" stroke="#888" stroke-width="1"/><text x="40" y="120" text-anchor="middle" font-size="7" fill="#555">0</text><text x="80" y="120" text-anchor="middle" font-size="7" fill="#555">2</text><text x="120" y="120" text-anchor="middle" font-size="7" fill="#555">4</text><text x="160" y="120" text-anchor="middle" font-size="7" fill="#555">6</text><text x="200" y="120" text-anchor="middle" font-size="7" fill="#555">8</text><text x="240" y="120" text-anchor="middle" font-size="7" fill="#555">10</text><text x="280" y="120" text-anchor="middle" font-size="7" fill="#555">12</text><line x1="60" y1="43" x2="100" y2="43" stroke="#6366f1" stroke-width="1.5"/><rect x="100" y="32" width="100" height="22" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="2"/><line x1="160" y1="32" x2="160" y2="54" stroke="#6366f1" stroke-width="2.5"/><line x1="200" y1="43" x2="260" y2="43" stroke="#6366f1" stroke-width="1.5"/><line x1="60" y1="37" x2="60" y2="49" stroke="#6366f1" stroke-width="1.5"/><line x1="260" y1="37" x2="260" y2="49" stroke="#6366f1" stroke-width="1.5"/><text x="30" y="47" font-size="8" fill="#6366f1" font-weight="bold">A</text><text x="60" y="30" text-anchor="middle" font-size="7" fill="#555">1</text><text x="100" y="30" text-anchor="middle" font-size="7" fill="#6366f1">Q1=3</text><text x="160" y="30" text-anchor="middle" font-size="7" fill="#6366f1">Med=6</text><text x="200" y="30" text-anchor="middle" font-size="7" fill="#6366f1">Q3=8</text><text x="260" y="30" text-anchor="middle" font-size="7" fill="#555">11</text><line x1="120" y1="73" x2="140" y2="73" stroke="#10b981" stroke-width="1.5"/><rect x="140" y="62" width="100" height="22" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/><line x1="180" y1="62" x2="180" y2="84" stroke="#10b981" stroke-width="2.5"/><line x1="240" y1="73" x2="270" y2="73" stroke="#10b981" stroke-width="1.5"/><line x1="120" y1="67" x2="120" y2="79" stroke="#10b981" stroke-width="1.5"/><line x1="270" y1="67" x2="270" y2="79" stroke="#10b981" stroke-width="1.5"/><text x="30" y="77" font-size="8" fill="#10b981" font-weight="bold">B</text></svg>',
        caption: 'Box plots for Data Set A (blue, IQR=5) and Data Set B (green, IQR=4). Data Set B has a higher median and slightly smaller IQR.',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Comparing using IQR',
        text: 'From the box plots:<br><br>Data Set A: Min=1, Q1=3, Median=6, Q3=8, Max=11 → IQR = 5<br>Data Set B: Min=4, Q1=5, Median=7, Q3=9, Max=10 → IQR = 4<br><br><b>Comparison 1 (average):</b> "On average, Data Set B has higher values. The median for B (7) is higher than for A (6)."<br><b>Comparison 2 (spread):</b> "Data Set B is slightly more consistent in its middle 50%. The IQR for B (4) is smaller than for A (5)."',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip — quartiles from even-sized data sets',
        text: 'For an even number of values (e.g. n=10): the median is the mean of the 5th and 6th values. Q1 is the median of the lower 5 values (3rd value). Q3 is the median of the upper 5 values (8th value overall, or 3rd of the upper half).',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Q1 = lower quartile (median of lower half). Q3 = upper quartile (median of upper half). IQR = Q3 − Q1 (middle 50%). Five-number summary: min, Q1, median, Q3, max. Box plot displays all five. Use IQR (not range) to compare spread when outliers are present.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'IQR = Q3 − Q1. Q1 = median of lower half. Q3 = median of upper half. Box plot: whiskers to min/max, box from Q1 to Q3, line at median.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-key',
        prompt: 'Write the formula for the interquartile range (IQR).',
        answer: 'IQR = Q3 − Q1. It measures the spread of the middle 50% of the data.',
      },
      {
        id: 'cue-2',
        blockId: 'callout-we1',
        prompt: 'For the data set 1,2,3,4,5,6,7,8,8,9,11 (n=11), find Q1, Q3, and IQR.',
        answer: 'Q2 = 6th value = 6. Lower half: 1,2,3,4,5 → Q1 = 3. Upper half: 7,8,8,9,11 → Q3 = 8. IQR = 8−3 = 5.',
      },
      {
        id: 'cue-3',
        blockId: 'list-fns',
        prompt: 'List the five values that make up the five-number summary.',
        answer: 'Minimum, Q1 (lower quartile), Median (Q2), Q3 (upper quartile), Maximum.',
      },
      {
        id: 'cue-4',
        blockId: 'p-boxplot',
        prompt: 'Describe what each part of a box plot represents.',
        answer: 'The box spans Q1 to Q3 (showing the IQR — middle 50%). The vertical line inside the box is the median. The whiskers extend from the box to the minimum and maximum values.',
      },
      {
        id: 'cue-5',
        blockId: 'callout-tip',
        prompt: 'Why use IQR instead of range when comparing spread for data sets with outliers?',
        answer: 'The range is heavily affected by extreme values (outliers). The IQR only considers the middle 50% of the data, so it is not distorted by outliers and gives a fairer measure of spread.',
      },
    ],
  },
  evidence: [],
};
