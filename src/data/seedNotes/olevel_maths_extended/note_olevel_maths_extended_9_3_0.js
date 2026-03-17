export const note_olevel_maths_extended_9_3_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/scatter-graphs-and-correlation.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Plot scatter graphs, identify the type and strength of correlation, and understand what correlation does and does not imply.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Scatter Graphs and Correlation', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'A <strong>scatter graph</strong> (scatter diagram) plots pairs of data as points on a coordinate grid. It reveals the <strong>relationship</strong> (correlation) between two variables.' }
    },
    {
      id: 'callout-key-types',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Types of Correlation',
        text: '<strong>Positive correlation:</strong> as one variable increases, the other increases (points slope upward left-to-right).<br><br><strong>Negative correlation:</strong> as one increases, the other decreases (points slope downward).<br><br><strong>No correlation:</strong> no pattern between the variables (scattered randomly).'
      }
    },
    {
      id: 'p-strength',
      type: 'paragraph',
      data: { text: 'Correlation can be <strong>strong</strong> (points close to a line), <strong>weak</strong> (points loosely following a trend), or <strong>none</strong> (no trend). Describe both the <strong>type</strong> and the <strong>strength</strong>.' }
    },
    {
      id: 'callout-warning-cause',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Correlation ≠ Causation',
        text: 'Just because two variables are correlated does <strong>not</strong> mean one causes the other. There may be a third hidden variable, or the connection may be coincidental.'
      }
    },
    {
      id: 'callout-tip-outlier',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Outliers',
        text: 'An <strong>outlier</strong> is a point that does not fit the overall pattern. Identify outliers by checking if they lie far from the line of best fit. You may be asked to explain possible reasons.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Scatter graphs show the relationship between two variables. Describe correlation by type (positive/negative/none) and strength (strong/weak). Correlation does not imply causation.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Scatter graphs show correlation: positive, negative, or none; strong or weak.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-types', prompt: 'What are the three types of correlation?', answer: 'Positive (both increase), negative (one up, other down), none (no pattern).' },
      { id: 'cue-2', blockId: 'p-strength', prompt: 'How do you describe the strength of correlation?', answer: 'Strong (points close to a line), weak (loosely following a trend), or none.' },
      { id: 'cue-3', blockId: 'callout-warning-cause', prompt: 'Does correlation imply causation?', answer: 'No — two correlated variables may not have a causal link.' },
      { id: 'cue-4', blockId: 'callout-tip-outlier', prompt: 'What is an outlier on a scatter graph?', answer: 'A point that does not fit the overall pattern, lying far from the line of best fit.' }
    ]
  },
  evidence: []
};
