export const note_olevel_maths_extended_9_5_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/comparing-data-sets.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Compare two or more data sets using appropriate averages (mean, median) and measures of spread (range, IQR), giving conclusions in context.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Comparing Data Sets', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'When comparing data sets you must consider both a <strong>measure of central tendency</strong> (average) and a <strong>measure of spread</strong>. Always relate your comparison to the <strong>context</strong> of the question.' }
    },
    {
      id: 'callout-key-method',
      type: 'callout',
      data: {
        style: 'key',
        title: 'How to Compare — 3-Step Method',
        text: '1. <strong>Compare an average</strong> (mean or median): say which is higher and by how much<br>2. <strong>Compare a measure of spread</strong> (range or IQR): say which is more consistent<br>3. <strong>Interpret in context</strong>: use the scenario from the question'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'Test scores | Class A (median 62, IQR 18) | Class B (median 58, IQR 30)<br><br><strong>Average:</strong> Class A has a higher median (62 vs 58), so on average Class A scored better.<br><strong>Spread:</strong> Class A has a smaller IQR (18 vs 30), so their scores are more consistent.<br><strong>Context:</strong> Class A performed better overall with less variation in results.'
      }
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Choosing the right measures',
        headers: ['Situation', 'Best average', 'Best spread'],
        rows: [
          ['Data with outliers', 'Median', 'IQR'],
          ['Data without outliers', 'Mean', 'Range'],
          ['Grouped data (estimates)', 'Estimated mean', 'IQR from CF curve'],
          ['Comparing two distributions', 'Median (from CF)', 'IQR']
        ]
      }
    },
    {
      id: 'callout-warning-context',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Do not just state numbers — you must <strong>interpret</strong> them. "The mean for A is higher" is not enough. Write: "On average, students in Class A scored higher marks than Class B."'
      }
    },
    {
      id: 'callout-tip-boxplot',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Using Box Plots to Compare',
        text: 'Box plots drawn on the same scale make comparison easy:<br>• Compare medians (position of the line in the box)<br>• Compare IQR (width of the box)<br>• Compare range (length from whisker to whisker)<br>• Look for skew (median position within the box)'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Compare data sets using: (1) an average — mean or median, (2) a measure of spread — range or IQR, (3) interpretation in context. Use median and IQR when there are outliers.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Compare: average + spread + context. Use median and IQR for data with outliers.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-method', prompt: 'What three steps do you follow when comparing data sets?', answer: 'Compare an average, compare a measure of spread, interpret in context.' },
      { id: 'cue-2', blockId: 'table-compare', prompt: 'Which average and spread should you use with outliers?', answer: 'Median and IQR — they are not affected by extreme values.' },
      { id: 'cue-3', blockId: 'callout-warning-context', prompt: 'Why is stating just numbers not enough?', answer: 'You must interpret the numbers in the context of the question.' },
      { id: 'cue-4', blockId: 'callout-tip-boxplot', prompt: 'What can you compare using box plots?', answer: 'Medians, IQR (box width), range (whisker to whisker), and skew.' },
      { id: 'cue-5', blockId: 'callout-key-method', prompt: 'What does a smaller IQR indicate about a data set?', answer: 'The data is more consistent / less spread out.' }
    ]
  },
  evidence: []
};
