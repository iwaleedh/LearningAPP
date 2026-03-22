export const note_mathematics_6_1_2 = {
  pdfPath: '/notes/mathematics/data-presentation-and-interpretation/data-presentation.pdf',
  blocks: [
    {
      id: 'o-1',
      type: 'objective',
      data: {
        text: 'Interpret and construct histograms, box plots, and cumulative frequency graphs.'
      }
    },
    {
      id: 'h-box',
      type: 'heading',
      data: { text: 'Box Plots', level: 2 }
    },
    {
      id: 'p-box',
      type: 'paragraph',
      data: { text: 'Box plots are used to represent data using five key values: the lowest value, lower quartile (Q₁), median (Q₂), upper quartile (Q₃), and the highest value. They are excellent for comparing distributions.' }
    },
    {
      id: 'h-cf',
      type: 'heading',
      data: { text: 'Cumulative Frequency', level: 2 }
    },
    {
      id: 'p-cf',
      type: 'paragraph',
      data: { text: 'Cumulative frequency is a running total of frequencies. A cumulative frequency graph plots the cumulative frequency against the upper class boundary of each interval. From this curve, you can estimate the median, Q₁, and Q₃.' }
    },
    {
      id: 'h-hist',
      type: 'heading',
      data: { text: 'Histograms', level: 2 }
    },
    {
      id: 'p-hist',
      type: 'paragraph',
      data: { text: 'Histograms are used for continuous grouped data. The area of each bar is proportional to the frequency.' }
    },
    {
      id: 'call-fd',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Frequency Density',
        text: 'Frequency density is plotted on the y-axis. It is calculated as: <span class="nb-frac"><span class="nb-num">Frequency</span><span class="nb-den">Class Width</span></span>.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Box plots represent the 5-number summary. Cumulative frequency graphs allow estimation of median and quartiles. In a histogram, Area = Frequency (or k × Frequency), and Frequency Density = Frequency / Class Width.' }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "In a histogram, remember that frequency is proportional to area, not height! Always use 'Frequency Density = Frequency / Class Width' to determine the height of the bars on the y-axis."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Summary for data presentation.',
    cues: [
      { id: 'cue-1', blockId: 'p-box', prompt: 'What five values are used to construct a box plot?' },
      { id: 'cue-2', blockId: 'p-cf', prompt: 'What values are plotted on the axes for a cumulative frequency graph?' },
      { id: 'cue-3', blockId: 'p-hist', prompt: 'In a histogram, what does the area of a bar represent?' },
      { id: 'cue-4', blockId: 'call-fd', prompt: 'What is the formula for frequency density?' }
    ]
  },
  evidence: [],
  mentions: []
};
