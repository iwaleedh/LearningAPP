export const note_olevel_maths_extended_9_2_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/reading-and-interpreting-statistical-diagrams.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Read and interpret a range of statistical diagrams including histograms, frequency polygons, and population pyramids.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Reading Statistical Diagrams', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Being able to accurately read values from diagrams is a key exam skill. Always check the <strong>scales</strong> on both axes and look at the <strong>key</strong> or <strong>labels</strong> before answering questions.' }
    },
    {
      id: 'h-histogram',
      type: 'heading',
      data: { text: 'Histograms', level: 2 }
    },
    {
      id: 'p-histogram',
      type: 'paragraph',
      data: { text: 'In a <strong>histogram</strong>, the y-axis shows <strong>frequency density</strong> (not just frequency) and bars touch because the data is continuous. For <strong>equal class widths</strong>, frequency density is proportional to frequency, so bar heights can be read as frequencies.' }
    },
    {
      id: 'callout-key-fd',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Frequency Density',
        text: 'Frequency density = <span class="nb-frac"><span class="nb-num">frequency</span><span class="nb-den">class width</span></span><br><br>Frequency = frequency density × class width = <strong>area of bar</strong>'
      }
    },
    {
      id: 'h-polygon',
      type: 'heading',
      data: { text: 'Frequency Polygons', level: 2 }
    },
    {
      id: 'p-polygon',
      type: 'paragraph',
      data: { text: 'A <strong>frequency polygon</strong> is formed by plotting frequency (or frequency density) at the <strong>midpoint</strong> of each class and joining points with straight lines. It allows easy comparison of two distributions on the same axes.' }
    },
    {
      id: 'callout-tip-read',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Reading Diagrams',
        text: 'Read the question carefully: does it ask for an exact value, a range, a comparison, or an estimate? Use a ruler to read off values accurately. State units where relevant.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'In histograms, area = frequency. Frequency density = frequency ÷ class width. Frequency polygons plot midpoints. Always check scales and labels carefully.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Histogram area = frequency. Frequency density = frequency ÷ class width.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-fd', prompt: 'What is the formula for frequency density?', answer: 'Frequency density = frequency ÷ class width.' },
      { id: 'cue-2', blockId: 'callout-key-fd', prompt: 'How do you find frequency from a histogram bar?', answer: 'Frequency = frequency density × class width (area of bar).' },
      { id: 'cue-3', blockId: 'p-polygon', prompt: 'Where do you plot the points for a frequency polygon?', answer: 'At the midpoint of each class interval.' },
      { id: 'cue-4', blockId: 'p-histogram', prompt: 'Why do histogram bars touch?', answer: 'Because the data is continuous — there are no gaps between class boundaries.' }
    ]
  },
  evidence: []
};
