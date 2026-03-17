export const note_olevel_maths_extended_9_4_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/cumulative-frequency.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand cumulative frequency, construct a cumulative frequency table from grouped data, and calculate running totals.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Cumulative Frequency', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: '<strong>Cumulative frequency</strong> is a running total of frequencies. It tells you how many data values are <strong>less than or equal to</strong> the upper boundary of each class.' }
    },
    {
      id: 'callout-key-build',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Building a Cumulative Frequency Table',
        text: 'Add each frequency to the running total:<br><br>| Class | Freq | Cum. Freq |<br>| 0–9 | 4 | 4 |<br>| 10–19 | 7 | 4+7 = 11 |<br>| 20–29 | 12 | 11+12 = 23 |<br>| 30–39 | 9 | 23+9 = 32 |<br>| 40–49 | 3 | 32+3 = 35 |<br><br>The last cumulative frequency should equal the <strong>total number of values</strong>.'
      }
    },
    {
      id: 'callout-tip-plot',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Plotting Points',
        text: 'Plot each cumulative frequency against the <strong>upper class boundary</strong> (not the midpoint). For the class 10–19, plot at x = 19.5 (or 20 if using discrete boundaries).'
      }
    },
    {
      id: 'callout-warning-last',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Error',
        text: 'The final cumulative frequency must equal the total. If it doesn\'t, check your additions. Also remember to start from 0 — plot (lower boundary of first class, 0) before the curve.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Cumulative frequency is a running total of frequencies showing values ≤ each upper boundary. The last value must equal the total. Plot against upper class boundaries.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Cumulative frequency = running total. Plot against upper class boundaries. Last value = total.',
    cues: [
      { id: 'cue-1', blockId: 'p-def', prompt: 'What does cumulative frequency tell you?', answer: 'How many data values are less than or equal to the upper boundary of each class.' },
      { id: 'cue-2', blockId: 'callout-key-build', prompt: 'How do you calculate cumulative frequencies?', answer: 'Add each frequency to a running total.' },
      { id: 'cue-3', blockId: 'callout-tip-plot', prompt: 'What do you plot cumulative frequency against?', answer: 'The upper class boundary of each interval.' },
      { id: 'cue-4', blockId: 'callout-warning-last', prompt: 'What should the final cumulative frequency equal?', answer: 'The total number of data values.' }
    ]
  },
  evidence: []
};
