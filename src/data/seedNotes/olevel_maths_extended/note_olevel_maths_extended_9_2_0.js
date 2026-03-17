export const note_olevel_maths_extended_9_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/discrete-and-continuous-data.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Distinguish between discrete and continuous data, and understand how data type affects the choice of statistical diagram.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Discrete and Continuous Data', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'Data can be classified as <strong>discrete</strong> or <strong>continuous</strong>. Understanding the type of data determines which diagram and statistical method to use.' }
    },
    {
      id: 'callout-key-types',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Types of Data',
        text: '<strong>Discrete data</strong> can only take specific (usually whole number) values. Examples: number of children, shoe size, dice score.<br><br><strong>Continuous data</strong> can take any value within a range and is measured. Examples: height, weight, time, temperature.'
      }
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Discrete vs Continuous',
        headers: ['Feature', 'Discrete', 'Continuous'],
        rows: [
          ['Values', 'Specific, countable', 'Any value in a range'],
          ['How obtained', 'Counted', 'Measured'],
          ['Examples', 'Goals scored, cars in car park', 'Height, mass, temperature'],
          ['Diagrams', 'Bar chart, pie chart', 'Histogram, frequency polygon'],
          ['Grouping', 'Optional', 'Always grouped with inequalities']
        ]
      }
    },
    {
      id: 'callout-tip-boundary',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Class Boundaries',
        text: 'Continuous data uses class boundaries with inequalities, e.g. 10 ≤ <em>x</em> < 20. Discrete data uses classes like 10–19. The bars on histograms touch (continuous); bars on bar charts have gaps (discrete).'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Discrete data is counted with specific values; continuous data is measured and can take any value. The type of data determines which diagrams and methods are appropriate.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Discrete data is counted; continuous data is measured. This determines the diagram type.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-types', prompt: 'What is discrete data?', answer: 'Data that can only take specific countable values (e.g. number of children).' },
      { id: 'cue-2', blockId: 'callout-key-types', prompt: 'What is continuous data?', answer: 'Data that can take any value in a range and is measured (e.g. height, time).' },
      { id: 'cue-3', blockId: 'table-compare', prompt: 'Which diagram is used for discrete data?', answer: 'Bar chart (with gaps between bars).' },
      { id: 'cue-4', blockId: 'callout-tip-boundary', prompt: 'Why do histogram bars touch but bar chart bars have gaps?', answer: 'Histograms show continuous data where classes share boundaries; bar charts show separate discrete categories.' }
    ]
  },
  evidence: []
};
