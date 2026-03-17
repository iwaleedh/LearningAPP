export const note_olevel_maths_core_9_5_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Statistics/comparing-data-sets.pdf',
    blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Compare two statistical data sets using a measure of average (mean or median) and a measure of spread (range or IQR). Write complete, evidence-based comparison statements in context.',
      },
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'Comparing Data Sets', level: 2 },
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: {
        text: 'Comparing two data sets requires at least <b>two comparison statements</b>: one about <b>average</b> (centre of data) and one about <b>spread</b> (consistency/variability). Each statement must include a <b>specific numerical value</b> from each data set and a <b>conclusion in context</b>.',
      },
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Full comparison requires',
        text: '1. <b>Average comparison:</b> Compare means or medians. State the values and which is higher.<br>2. <b>Spread comparison:</b> Compare ranges or IQRs. State the values and which is more consistent (smaller spread = more consistent).<br>3. <b>Context:</b> Both statements must link back to the real-world scenario.',
      },
    },
    {
      id: 'h-which',
      type: 'heading',
      data: { text: 'Choosing the Right Measures', level: 2 },
    },
    {
      id: 'tbl-choose',
      type: 'comparisonTable',
      data: {
        caption: 'When to use each measure',
        headers: ['Measure', 'Use when…', 'Advantage'],
        rows: [
          ['Mean', 'Data has no extreme outliers and is symmetric', 'Uses all data values'],
          ['Median', 'Data is skewed or has outliers', 'Not affected by extreme values'],
          ['Range', 'Quick measure of spread; no extreme outliers', 'Simple to calculate'],
          ['IQR', 'Data has outliers; you have Q1 and Q3', 'Not affected by extreme values'],
        ],
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Comparing two classes',
        text: 'Two classes took the same exam. Their results are summarised:<br><br><table style="border-collapse:collapse;font-size:0.9em"><tr style="background:#f0f0f0"><th style="padding:4px 12px;border:1px solid #ccc">Statistic</th><th style="padding:4px 12px;border:1px solid #ccc">Class A</th><th style="padding:4px 12px;border:1px solid #ccc">Class B</th></tr><tr><td style="padding:4px 12px;border:1px solid #ccc">Mean</td><td style="padding:4px 12px;border:1px solid #ccc">72</td><td style="padding:4px 12px;border:1px solid #ccc">65</td></tr><tr><td style="padding:4px 12px;border:1px solid #ccc">Median</td><td style="padding:4px 12px;border:1px solid #ccc">74</td><td style="padding:4px 12px;border:1px solid #ccc">63</td></tr><tr><td style="padding:4px 12px;border:1px solid #ccc">Range</td><td style="padding:4px 12px;border:1px solid #ccc">30</td><td style="padding:4px 12px;border:1px solid #ccc">48</td></tr></table><br><b>Comparison 1 (average):</b><br>"On average, Class A performed better. The mean for Class A (72) is higher than the mean for Class B (65)."<br><br><b>Comparison 2 (spread):</b><br>"Class A\'s results are more consistent. The range for Class A (30) is smaller than the range for Class B (48), meaning the marks in Class A are less varied."',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Comparing from raw data',
        text: 'Shop A waiting times (minutes): 2, 3, 3, 4, 5, 5, 6, 7, 8, 7<br>Shop B waiting times (minutes): 1, 1, 2, 3, 3, 8, 9, 10, 11, 12<br><br><b>Shop A:</b> n=10, ordered: 2,3,3,4,5,5,6,7,7,8<br>Mean = (2+3+3+4+5+5+6+7+7+8)/10 = 50/10 = <b>5.0</b><br>Median = (5+5)/2 = <b>5.0</b>, Range = 8−2 = <b>6</b><br><br><b>Shop B:</b> n=10, ordered: 1,1,2,3,3,8,9,10,11,12<br>Mean = (1+1+2+3+3+8+9+10+11+12)/10 = 60/10 = <b>6.0</b><br>Median = (3+8)/2 = <b>5.5</b>, Range = 12−1 = <b>11</b><br><br>Note: The median is a better measure here because Shop B has outliers (8–12).<br><br><b>Comparison 1:</b> "Shop A has a shorter typical wait. The median wait for Shop A (5.0 min) is slightly lower than for Shop B (5.5 min)."<br><b>Comparison 2:</b> "Shop A\'s waiting times are more consistent. The range for Shop A (6 min) is much smaller than for Shop B (11 min)."',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common errors',
        text: '• Stating "Group A is better" without giving numerical evidence — <b>always include values</b><br>• Only comparing average without comparing spread — <b>both are required</b><br>• Writing vague statements like "Group A\'s data is more spread out" — state which measure (range/IQR) and give specific values<br>• Comparing mean when there are clear outliers — consider using the median instead',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Template comparison statements',
        text: '<b>Average:</b> "On average, [Group X] [does/scores/waits] [more/less/better/worse/faster] because [its mean/median] ([value]) is [higher/lower/smaller/larger] than [Group Y]\'s [value]."<br><br><b>Spread:</b> "[Group X]\'s [scores/waiting times/results] are more consistent because [the range/IQR] ([value]) is smaller than [Group Y]\'s ([value]), meaning less variation."',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'To compare data sets: state a measure of average (mean or median) AND a measure of spread (range or IQR) for each group. Use specific numerical values. Link both comparisons to the context. Use median over mean when outliers are present.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Compare two data sets: comment on average (mean/median) AND spread (range/IQR) with numerical values from each set.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-key',
        prompt: 'What are the two required elements of a full data set comparison?',
        answer: '1. A comparison of average (mean or median) — which group is higher/lower on average? 2. A comparison of spread (range or IQR) — which group is more consistent? Both must include specific values.',
      },
      {
        id: 'cue-2',
        blockId: 'callout-we1',
        prompt: 'Write a comparison statement about average for Class A (mean 72) vs Class B (mean 65).',
        answer: '"On average, Class A performed better. The mean for Class A (72) is higher than the mean for Class B (65)."',
      },
      {
        id: 'cue-3',
        blockId: 'tbl-choose',
        prompt: 'When should you use the median instead of the mean to compare data?',
        answer: 'When the data is skewed or contains outliers. The median is not affected by extreme values, so it is a better representative average.',
      },
      {
        id: 'cue-4',
        blockId: 'callout-we2',
        prompt: 'What does a smaller range tell you about a data set?',
        answer: 'A smaller range means the data values are less spread out — the data set is more consistent/less variable.',
      },
    ],
  },
  evidence: [],
};
