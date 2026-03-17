export const note_olevel_maths_extended_9_2_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/comparing-statistical-diagrams.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Compare different statistical diagrams and evaluate their advantages and limitations for representing data.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Comparing Statistical Diagrams', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Different diagrams suit different types of data and different purposes. Choosing the right diagram depends on the <strong>type of data</strong> (discrete/continuous/categorical) and what you want to <strong>show</strong> (frequencies, proportions, trends, comparisons).' }
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Diagram suitability',
        headers: ['Diagram', 'Best for', 'Limitations'],
        rows: [
          ['Bar chart', 'Comparing categories (discrete)', 'Cannot show proportions easily'],
          ['Pie chart', 'Showing proportions of a whole', 'Hard to compare exact values; needs total'],
          ['Pictogram', 'Simple visual impact for audiences', 'Not precise; limited data size'],
          ['Stem-and-leaf', 'Showing distribution + raw data', 'Unwieldy for large data sets'],
          ['Histogram', 'Continuous grouped data; unequal widths', 'Can\'t read individual values'],
          ['Frequency polygon', 'Comparing two distributions', 'Less immediate visual impact'],
          ['Cumulative frequency', 'Finding median, quartiles, percentiles', 'Cannot see individual frequencies']
        ]
      }
    },
    {
      id: 'callout-tip-exam',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Comparing Data Sets',
        text: 'When asked to compare, always reference:<br>1. An <strong>average</strong> (mean, median, or mode) — says which is higher/lower<br>2. A <strong>measure of spread</strong> (range or IQR) — says which is more consistent<br>3. Use the <strong>context</strong> (e.g. "Class A scored higher on average but their results were more spread out").'
      }
    },
    {
      id: 'callout-warning-mislead',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Misleading Diagrams',
        text: 'Diagrams can mislead if:<br>• The y-axis doesn\'t start at 0 (exaggerates differences)<br>• 3D effects distort proportions in pie charts<br>• Scale is inconsistent or unlabelled<br>• Pictogram symbols are different sizes'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Choose diagrams based on data type and purpose. Compare data sets using an average and a measure of spread, in context. Watch for misleading features in diagrams.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Different diagrams suit different data types. Compare data using average + spread in context.',
    cues: [
      { id: 'cue-1', blockId: 'table-compare', prompt: 'What diagram is best for showing proportions?', answer: 'Pie chart.' },
      { id: 'cue-2', blockId: 'table-compare', prompt: 'What diagram is best for continuous data with unequal class widths?', answer: 'Histogram.' },
      { id: 'cue-3', blockId: 'callout-tip-exam', prompt: 'When comparing data sets, what two things must you reference?', answer: 'An average (mean/median) and a measure of spread (range/IQR), in context.' },
      { id: 'cue-4', blockId: 'callout-warning-mislead', prompt: 'Name two ways diagrams can be misleading.', answer: 'Y-axis not starting at 0; inconsistent or unlabelled scales.' }
    ]
  },
  evidence: []
};
