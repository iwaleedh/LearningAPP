export const note_mathematics_6_1_3 = {
  pdfPath: '/notes/mathematics/data-presentation-and-interpretation/outliers-and-cleaning-data.pdf',
  blocks: [
    {
      id: 'o-1',
      type: 'objective',
      data: {
        text: 'Identify outliers, clean data, and interpret datasets by identifying skewed distributions.'
      }
    },
    {
      id: 'h-outliers',
      type: 'heading',
      data: { text: 'Outliers and Cleaning Data', level: 2 }
    },
    {
      id: 'p-outliers',
      type: 'paragraph',
      data: { text: 'An outlier is an extreme value that lies outside the overall pattern of the data. Often, it is defined formally using boundaries, for example:' }
    },
    {
      id: 'list-outliers',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Values greater than Q₃ + 1.5 × IQR' },
          { text: 'Values less than Q₁ − 1.5 × IQR' },
          { text: 'Values lying more than 2 standard deviations from the mean: μ ± 2σ' }
        ]
      }
    },
    {
      id: 'call-cleaning',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Cleaning Data',
        text: 'Cleaning data involves identifying and dealing with outliers or anomalies by either correcting them if they are errors, or removing them entirely from the dataset before analysis.'
      }
    },
    {
      id: 'h-skewness',
      type: 'heading',
      data: { text: 'Skewness and Interpreting Data', level: 2 }
    },
    {
      id: 'list-skew',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Symmetrical:</strong> Mean ≈ Median ≈ Mode. Q₃ − Q₂ ≈ Q₂ − Q₁' },
          { text: '<strong>Positive Skew:</strong> Mode < Median < Mean. Q₃ − Q₂ > Q₂ − Q₁ (Right tail is longer)' },
          { text: '<strong>Negative Skew:</strong> Mean < Median < Mode. Q₃ − Q₂ < Q₂ − Q₁ (Left tail is longer)' }
        ]
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Outliers are anomalies outside standard limits like Q₃ + 1.5×IQR. Cleaning data removes these errors. Skewness shows the shape: symmetrical (mean≈median), positive skew (mean>median), or negative skew (mean<median).' }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Always show your full working when calculating outlier boundaries (e.g., Q1 - 1.5 * IQR or Q3 + 1.5 * IQR). Even if you misidentify an outlier, you can still gain method marks for correctly establishing the boundary values."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Summary for outliers and skewness.',
    cues: [
      { id: 'cue-1', blockId: 'list-outliers', prompt: 'State the common IQR rule for identifying an outlier.' },
      { id: 'cue-2', blockId: 'call-cleaning', prompt: 'What are two ways of dealing with anomalies when cleaning data?' },
      { id: 'cue-3', blockId: 'list-skew', prompt: 'What relationship between Mean, Median, and Mode indicates positive skew?' },
      { id: 'cue-4', blockId: 'list-skew', prompt: 'How do quartile differences (Q3-Q2 vs Q2-Q1) show a negative skew?' }
    ]
  },
  evidence: [],
  mentions: []
};
