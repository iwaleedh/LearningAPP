export const note_olevel_maths_extended_9_4_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/drawing-cumulative-frequency-diagrams.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Draw cumulative frequency curves (ogives) accurately, joining plotted points with a smooth curve.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Drawing Cumulative Frequency Diagrams', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A cumulative frequency diagram (or <strong>ogive</strong>) is an S-shaped curve drawn by plotting cumulative frequency against upper class boundaries and joining the points with a <strong>smooth curve</strong>.' }
    },
    {
      id: 'callout-key-steps',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Steps to Draw',
        text: '1. Calculate cumulative frequencies from the grouped frequency table<br>2. Plot (upper class boundary, cumulative frequency) for each class<br>3. Plot a starting point at (lower boundary of first class, 0)<br>4. Join the points with a <strong>smooth curve</strong> (not straight lines)<br>5. Label axes: x-axis = variable (with units), y-axis = Cumulative Frequency'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: '| Mass (kg) | 40 ≤ m < 50 | 50 ≤ m < 60 | 60 ≤ m < 70 | 70 ≤ m < 80 | 80 ≤ m < 90 |<br>| Freq | 5 | 12 | 20 | 10 | 3 |<br>| Cum freq | 5 | 17 | 37 | 47 | 50 |<br><br>Plot: (40, 0), (50, 5), (60, 17), (70, 37), (80, 47), (90, 50)<br>Draw a smooth S-shaped curve through these points.'
      }
    },
    {
      id: 'callout-tip-smooth',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Use a smooth freehand curve, not straight lines between points. The curve should be S-shaped. Read values carefully from the curve using a ruler.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Plot (upper boundary, cumulative frequency) starting from (lower boundary of first class, 0). Join with a smooth S-shaped curve. Label axes clearly.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Plot cumulative frequency against upper boundaries. Start at zero. Join with smooth S-curve.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-steps', prompt: 'What x-value do you plot for each cumulative frequency?', answer: 'The upper class boundary.' },
      { id: 'cue-2', blockId: 'callout-key-steps', prompt: 'What starting point should a cumulative frequency curve have?', answer: '(Lower boundary of first class, 0).' },
      { id: 'cue-3', blockId: 'callout-tip-smooth', prompt: 'Should you use straight lines or a curve?', answer: 'A smooth freehand curve (S-shaped).' },
      { id: 'cue-4', blockId: 'callout-key-steps', prompt: 'What goes on the y-axis of a cumulative frequency diagram?', answer: 'Cumulative frequency.' }
    ]
  },
  evidence: []
};
