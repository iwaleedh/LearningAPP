export const note_olevel_maths_core_9_3_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Statistics/reading-and-interpreting-statistical-diagrams.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Construct and interpret frequency polygons. Understand the difference between bar charts and histograms. Read cumulative frequency graphs to find median and quartiles.',
      },
    },
    {
      id: 'h-fp',
      type: 'heading',
      data: { text: 'Frequency Polygons', level: 2 },
    },
    {
      id: 'p-fp',
      type: 'paragraph',
      data: {
        text: 'A <b>frequency polygon</b> is drawn by plotting frequency at the <b>midpoint</b> of each class interval, then joining the points with straight lines. It shows the shape of the distribution and is particularly useful for comparing two data sets on the same axes.',
      },
    },
    {
      id: 'list-fp-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Find the <b>midpoint</b> of each class interval' },
          { text: 'Plot a point at (midpoint, frequency) for each class' },
          { text: 'Join the points with <b>straight lines</b>' },
          { text: 'Optionally: extend lines to the x-axis (at the midpoint of the empty class before the first and after the last)' },
        ],
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Frequency polygon coordinates',
        text: 'Heights of 36 students (same data as frequency table in the averages note):<br><br><table style="border-collapse:collapse;font-size:0.9em"><tr style="background:#f0f0f0"><th style="padding:4px 10px;border:1px solid #ccc">Class (cm)</th><th style="padding:4px 10px;border:1px solid #ccc">Freq</th><th style="padding:4px 10px;border:1px solid #ccc">Midpoint</th><th style="padding:4px 10px;border:1px solid #ccc">Point to plot</th></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">150–155</td><td style="padding:4px 10px;border:1px solid #ccc">4</td><td style="padding:4px 10px;border:1px solid #ccc">152.5</td><td style="padding:4px 10px;border:1px solid #ccc">(152.5, 4)</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">155–160</td><td style="padding:4px 10px;border:1px solid #ccc">9</td><td style="padding:4px 10px;border:1px solid #ccc">157.5</td><td style="padding:4px 10px;border:1px solid #ccc">(157.5, 9)</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">160–165</td><td style="padding:4px 10px;border:1px solid #ccc">12</td><td style="padding:4px 10px;border:1px solid #ccc">162.5</td><td style="padding:4px 10px;border:1px solid #ccc">(162.5, 12)</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">165–170</td><td style="padding:4px 10px;border:1px solid #ccc">8</td><td style="padding:4px 10px;border:1px solid #ccc">167.5</td><td style="padding:4px 10px;border:1px solid #ccc">(167.5, 8)</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">170–175</td><td style="padding:4px 10px;border:1px solid #ccc">3</td><td style="padding:4px 10px;border:1px solid #ccc">172.5</td><td style="padding:4px 10px;border:1px solid #ccc">(172.5, 3)</td></tr></table>',
      },
    },
    {
      id: 'h-hist',
      type: 'heading',
      data: { text: 'Histograms', level: 2 },
    },
    {
      id: 'p-hist',
      type: 'paragraph',
      data: {
        text: 'A <b>histogram</b> is used exclusively for <b>continuous data</b>. Unlike a bar chart, histogram bars have <b>no gaps</b> between them. For equal class widths, the height of each bar represents the frequency.',
      },
    },
    {
      id: 'tbl-hist-bar',
      type: 'comparisonTable',
      data: {
        caption: 'Histogram vs bar chart',
        headers: ['Feature', 'Bar Chart', 'Histogram'],
        rows: [
          ['Data type', 'Discrete or qualitative', 'Continuous only'],
          ['Gaps between bars', 'Yes — data is in separate categories', 'No — continuous data has no gaps'],
          ['x-axis', 'Category labels', 'A continuous scale (e.g. height in cm)'],
          ['Bar height represents', 'Frequency', 'Frequency (equal class widths) or frequency density (unequal widths)'],
        ],
      },
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Frequency density (for unequal class widths)',
        text: 'Frequency density = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle"><span style="border-bottom:1px solid;padding:0 4px;font-size:0.9em">frequency</span><span style="padding:0 4px;font-size:0.9em">class width</span></span><br><br>For equal class widths, frequency density is proportional to frequency, so plotting frequency directly is equivalent.',
      },
    },
    {
      id: 'h-cumfreq',
      type: 'heading',
      data: { text: 'Cumulative Frequency Graphs', level: 2 },
    },
    {
      id: 'p-cumfreq',
      type: 'paragraph',
      data: {
        text: 'A <b>cumulative frequency graph</b> (S-curve or ogive) plots the <b>running total</b> of frequencies against the <b>upper boundary</b> of each class. The shape is typically an S-curve. From it you can read off the median (at total/2) and the quartiles (at total/4 and 3×total/4).',
      },
    },
    {
      id: 'list-cumfreq',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Add a cumulative frequency column: add each frequency to the running total' },
          { text: 'Plot points: (upper class boundary, cumulative frequency) for each class' },
          { text: 'Plot (lower boundary of first class, 0) as the starting point' },
          { text: 'Join points with a smooth S-shaped curve' },
          { text: 'To read the median: draw a horizontal line from cumulative freq = n/2 to the curve, then read down to the x-axis' },
        ],
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Cumulative frequency table',
        text: 'Heights of 36 students (same data):<br><br><table style="border-collapse:collapse;font-size:0.9em"><tr style="background:#f0f0f0"><th style="padding:4px 10px;border:1px solid #ccc">Height &lt; (cm)</th><th style="padding:4px 10px;border:1px solid #ccc">Cumulative Frequency</th></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">150</td><td style="padding:4px 10px;border:1px solid #ccc">0</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">155</td><td style="padding:4px 10px;border:1px solid #ccc">4</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">160</td><td style="padding:4px 10px;border:1px solid #ccc">13</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">165</td><td style="padding:4px 10px;border:1px solid #ccc">25</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">170</td><td style="padding:4px 10px;border:1px solid #ccc">33</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">175</td><td style="padding:4px 10px;border:1px solid #ccc">36</td></tr></table><br>To read the median: draw a horizontal from <b>18</b> (= 36/2) across to the curve, then down. This gives a median of approximately <b>162.5 cm</b>.',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip — reading the cumulative frequency graph',
        text: 'When reading the median and quartiles from a cumulative frequency graph:<br>• Median: go across from cumulative frequency = <b>n/2</b><br>• Lower quartile (Q1): go across from <b>n/4</b><br>• Upper quartile (Q3): go across from <b>3n/4</b><br><br>Use a ruler for accuracy. The IQR = Q3 − Q1.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Frequency polygon: plot (midpoint, frequency), join with lines. Histogram: bars touch (continuous data); for unequal widths use frequency density. Cumulative frequency graph (S-curve): plot (upper boundary, cumulative freq); read median at n/2, Q1 at n/4, Q3 at 3n/4.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Frequency polygon: plot midpoints. Histogram: bars touch, continuous data. Cumulative frequency: S-curve; read median at n/2.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-fp-steps',
        prompt: 'How do you draw a frequency polygon from a grouped frequency table?',
        answer: 'Find the midpoint of each class, plot (midpoint, frequency), then join the points with straight lines.',
      },
      {
        id: 'cue-2',
        blockId: 'tbl-hist-bar',
        prompt: 'What is the key difference between a histogram and a bar chart?',
        answer: 'Histogram bars have no gaps (for continuous data). Bar chart bars have gaps (for discrete or qualitative data).',
      },
      {
        id: 'cue-3',
        blockId: 'callout-key',
        prompt: 'What is frequency density and when must it be used?',
        answer: 'Frequency density = frequency ÷ class width. It is used in histograms when class widths are not equal.',
      },
      {
        id: 'cue-4',
        blockId: 'callout-we2',
        prompt: 'In the cumulative frequency table (n=36), at which cumulative frequency do you read the median?',
        answer: 'At cumulative frequency = 36/2 = 18. Draw across from 18 on the y-axis to the curve, then down to the x-axis.',
      },
      {
        id: 'cue-5',
        blockId: 'callout-tip',
        prompt: 'From a cumulative frequency graph with n = 80, at what cumulative frequency values do you read Q1, median, and Q3?',
        answer: 'Q1 at 20 (= 80/4), median at 40 (= 80/2), Q3 at 60 (= 3×80/4).',
      },
    ],
  },
  evidence: [],
};
