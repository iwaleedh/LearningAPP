export const note_olevel_maths_core_9_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Statistics/range.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Calculate the range as a measure of spread. Use the range to compare the consistency of two data sets. Understand the limitation of range when outliers are present.',
      },
    },
    {
      id: 'h-range',
      type: 'heading',
      data: { text: 'Range as a Measure of Spread', level: 2 },
    },
    {
      id: 'p-range',
      type: 'paragraph',
      data: {
        text: 'Averages (mean, median, mode) tell us about the <b>centre</b> of data, but they say nothing about how <b>spread out</b> the values are. The <b>range</b> is a simple measure of spread.',
      },
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Range formula',
        text: 'Range = <b>largest value − smallest value</b><br><br>A <b>small range</b> means the data is <b>consistent</b> (clustered close together).<br>A <b>large range</b> means the data is <b>spread out</b> (more variable).',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Finding the range',
        text: 'The marks scored by 8 students in a test are: <b>12, 18, 9, 15, 20, 14, 11, 17</b><br><br>Largest = 20, Smallest = 9<br>Range = 20 − 9 = <b>11 marks</b>',
      },
    },
    {
      id: 'h-compare',
      type: 'heading',
      data: { text: 'Comparing Two Data Sets', level: 2 },
    },
    {
      id: 'p-compare',
      type: 'paragraph',
      data: {
        text: 'When comparing two data sets, always comment on <b>both the average (mean or median) and the spread (range)</b>. Comparing only the mean is not a complete comparison.',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Comparing two classes',
        text: 'The test scores (out of 10) for Classes A and B are:<br><b>Class A:</b> 7, 4, 9, 6, 5, 8, 7, 6, 8, 5<br><b>Class B:</b> 3, 9, 6, 10, 5, 7, 8, 2, 9, 6<br><br><b>Class A:</b> Sum = 65, Mean = 65÷10 = 6.5. Range = 9−4 = 5<br><b>Class B:</b> Sum = 65, Mean = 65÷10 = 6.5. Range = 10−2 = 8<br><br><b>Comparison:</b><br>Both classes have the same mean (6.5), so <b>on average</b> they performed equally well.<br>However, Class A has a <b>smaller range</b> (5 compared to 8), so Class A\'s results are <b>more consistent</b>.<br>Class B\'s larger range shows more variation — some students scored very highly (10) while others scored very poorly (2).',
      },
    },
    {
      id: 'h-limit',
      type: 'heading',
      data: { text: 'Limitations of the Range', level: 2 },
    },
    {
      id: 'p-limit',
      type: 'paragraph',
      data: {
        text: 'The range is easy to calculate but has a significant limitation: it is <b>heavily influenced by outliers</b> (extreme values). A single unusually high or low value will make the range large, even if all other data values are tightly clustered.',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Range affected by outlier',
        text: 'Data set: <b>50, 52, 51, 53, 49, 52, 98</b><br><br>Range = 98 − 49 = <b>49</b><br><br>If we remove the outlier (98): new range = 53 − 49 = <b>4</b><br><br>The value 98 inflates the range to 49, even though 6 of the 7 values lie within just 4 units of each other. This shows the range is not always a reliable indicator of typical spread. In such cases, the <b>interquartile range</b> (IQR) is a better measure.',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip — writing comparison statements',
        text: 'When asked to compare data sets, use this structure:<br><br>"On average, [Group X] scored higher/lower <b>because</b> their [mean/median] is [value], compared to [value] for [Group Y]."<br><br>"The data for [Group X] is more/less consistent <b>because</b> the range is [smaller/larger] — [value] compared to [value]."<br><br>You <b>must give numerical evidence</b> to support your comparison.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Range = largest − smallest. It measures spread/variability. A small range → consistent data; large range → spread out data. Always compare mean AND range when comparing two data sets. Limitation: one outlier can make the range misleadingly large.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Range = max − min. Small range = consistent data. Compare mean AND range when comparing datasets.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-key',
        prompt: 'What is the range and what does it measure?',
        answer: 'Range = largest value − smallest value. It measures how spread out the data is (the variability).',
      },
      {
        id: 'cue-2',
        blockId: 'callout-we2',
        prompt: 'In the class example, both classes have mean 6.5. What does the range tell us about their performance?',
        answer: 'Class A has range 5 and Class B has range 8. Class A is more consistent. Class B has more variability — some students scored very high and others very low.',
      },
      {
        id: 'cue-3',
        blockId: 'p-compare',
        prompt: 'What two things should you always compare when comparing two data sets?',
        answer: 'The average (mean or median) to compare centre, and the range to compare spread/consistency.',
      },
      {
        id: 'cue-4',
        blockId: 'callout-we3',
        prompt: 'Why is the range a limited measure of spread?',
        answer: 'It is heavily affected by outliers. One extreme value makes the range large, even if all other data are clustered closely together.',
      },
    ],
  },
  evidence: [],
};
