export const note_mathematics_6_2_0 = {
  blocks: [
    {
      id: 'obj-6-2-0',
      type: 'objective',
      data: { text: 'Construct and interpret frequency distributions, histograms with unequal class widths, and stem-and-leaf diagrams.' }
    },
    {
      id: 'h-freq-dist',
      type: 'heading',
      data: { text: 'Frequency Distributions', level: 2 }
    },
    {
      id: 'p-freq-dist',
      type: 'paragraph',
      data: { text: 'A frequency distribution table groups raw data into classes and records how often values fall in each class. For continuous data, classes are written as intervals, e.g. 10 \u2264 x < 20.' }
    },
    {
      id: 'h-histogram',
      type: 'heading',
      data: { text: 'Histograms', level: 2 }
    },
    {
      id: 'p-histogram-def',
      type: 'paragraph',
      data: { text: 'A histogram represents continuous grouped data. Unlike a bar chart, the bars touch and the y-axis shows frequency density, not frequency.' }
    },
    {
      id: 'callout-fd-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Frequency Density Formula',
        text: 'Frequency density = Frequency \u00f7 Class width\n\nArea of bar = Frequency (since area = fd \u00d7 class width)\n\nFrequency = Frequency density \u00d7 Class width'
      }
    },
    {
      id: 'callout-worked-hist',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Unequal Class Widths',
        text: 'Class 10\u201320 (width 10): frequency 30 \u2192 fd = 30/10 = 3.0\nClass 20\u201325 (width 5): frequency 15 \u2192 fd = 15/5 = 3.0\nClass 25\u201340 (width 15): frequency 45 \u2192 fd = 45/15 = 3.0\n\nAll bars have the same height here but different widths \u2014 the areas correctly represent the frequencies.'
      }
    },
    {
      id: 'p-read-hist',
      type: 'paragraph',
      data: { text: 'To read a frequency from a histogram: identify the class width, then multiply frequency density by class width. To find total frequency N = \u03a3(fd \u00d7 class width).' }
    },
    {
      id: 'h-stem-leaf',
      type: 'heading',
      data: { text: 'Stem-and-Leaf Diagrams', level: 2 }
    },
    {
      id: 'p-stem-leaf',
      type: 'paragraph',
      data: { text: 'A stem-and-leaf diagram displays individual data values in order. The stem represents the leading digit(s); the leaf represents the final digit. A back-to-back diagram compares two data sets.' }
    },
    {
      id: 'list-stem-leaf-props',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Preserves original data values (unlike a histogram).' },
          { text: 'Easy to find median and quartiles from an ordered diagram.' },
          { text: 'Only practical for small to medium data sets.' }
        ]
      }
    },
    {
      id: 'callout-tip-hist',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always use frequency density on the y-axis of a histogram, never frequency. When class widths are equal the shape is the same, but for unequal widths you must calculate fd.'
      }
    },
    {
      id: 'sum-6-2-0',
      type: 'summary',
      data: { text: 'Frequency density = frequency \u00f7 class width. Area of histogram bar = frequency. Stem-and-leaf diagrams show individual values in order and allow easy calculation of median and quartiles.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-fd-formula', prompt: 'State the formula for frequency density and explain why area \u2192 frequency in a histogram.' },
      { id: 'cue-2', blockId: 'callout-worked-hist', prompt: 'A class 20\u201330 has frequency density 4.5. What is the frequency?' },
      { id: 'cue-3', blockId: 'list-stem-leaf-props', prompt: 'State two advantages of a stem-and-leaf diagram over a frequency table.' }
    ],
    summaryText: 'fd = f/class width; area = frequency. Histograms show continuous grouped data. Stem-and-leaf preserves individual values.',
    ready: true
  },
  evidence: []
};
