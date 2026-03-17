export const note_olevel_maths_core_9_2_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Statistics/averages-from-tables.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Find the mode, median, and mean from a frequency table. Find the mean from a grouped frequency table using midpoint values. Use cumulative frequency to locate the median position.',
      },
    },
    {
      id: 'h-freq-table',
      type: 'heading',
      data: { text: 'Averages from a Frequency Table', level: 2 },
    },
    {
      id: 'p-freq-table',
      type: 'paragraph',
      data: {
        text: 'When data is presented in a frequency table, you do not need the raw data to find the averages. Work from the table directly.',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Mode, median and mean from a frequency table',
        text: '<table style="border-collapse:collapse;font-size:0.9em;margin-bottom:8px"><tr style="background:#f0f0f0"><th style="padding:4px 10px;border:1px solid #ccc">Score (x)</th><th style="padding:4px 10px;border:1px solid #ccc">Frequency (f)</th><th style="padding:4px 10px;border:1px solid #ccc">xf</th><th style="padding:4px 10px;border:1px solid #ccc">Cumulative freq.</th></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">1</td><td style="padding:4px 10px;border:1px solid #ccc">3</td><td style="padding:4px 10px;border:1px solid #ccc">3</td><td style="padding:4px 10px;border:1px solid #ccc">3</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">2</td><td style="padding:4px 10px;border:1px solid #ccc">5</td><td style="padding:4px 10px;border:1px solid #ccc">10</td><td style="padding:4px 10px;border:1px solid #ccc">8</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">3</td><td style="padding:4px 10px;border:1px solid #ccc">8</td><td style="padding:4px 10px;border:1px solid #ccc">24</td><td style="padding:4px 10px;border:1px solid #ccc">16</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">4</td><td style="padding:4px 10px;border:1px solid #ccc">4</td><td style="padding:4px 10px;border:1px solid #ccc">16</td><td style="padding:4px 10px;border:1px solid #ccc">20</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">5</td><td style="padding:4px 10px;border:1px solid #ccc">2</td><td style="padding:4px 10px;border:1px solid #ccc">10</td><td style="padding:4px 10px;border:1px solid #ccc">22</td></tr><tr style="font-weight:bold"><td style="padding:4px 10px;border:1px solid #ccc">Total</td><td style="padding:4px 10px;border:1px solid #ccc">22</td><td style="padding:4px 10px;border:1px solid #ccc">63</td><td style="padding:4px 10px;border:1px solid #ccc"></td></tr></table><b>Mode:</b> x = 3 (highest frequency = 8)<br><b>Median:</b> n = 22, so median is between the 11th and 12th values. Cumulative frequency reaches 8 after x = 2, and 16 after x = 3. So both the 11th and 12th values are in x = 3. <b>Median = 3</b><br><b>Mean:</b> Σxf ÷ Σf = 63 ÷ 22 = <b>2.86</b> (3 s.f.)',
      },
    },
    {
      id: 'callout-key-mean',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Mean from a frequency table',
        text: 'Mean = <b>Σxf ÷ Σf</b><br><br>where x = data value, f = frequency, xf = x × f<br><br>Add a column for xf to your table. Sum the xf column (Σxf) and divide by the total frequency (Σf).',
      },
    },
    {
      id: 'h-grouped',
      type: 'heading',
      data: { text: 'Mean from a Grouped Frequency Table', level: 2 },
    },
    {
      id: 'p-grouped',
      type: 'paragraph',
      data: {
        text: 'In a grouped frequency table, individual values are not known — only the class interval. To estimate the mean, use the <b>midpoint</b> of each class interval as the value of x.',
      },
    },
    {
      id: 'list-midpoint',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Midpoint = (lower boundary + upper boundary) ÷ 2' },
          { text: 'For class 150 ≤ h &lt; 155: midpoint = (150 + 155) ÷ 2 = 152.5' },
          { text: 'This gives an <b>estimate</b> of the mean, not an exact value' },
        ],
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Mean from a grouped frequency table',
        text: 'The heights of 36 students are recorded:<br><br><table style="border-collapse:collapse;font-size:0.9em;margin-bottom:8px"><tr style="background:#f0f0f0"><th style="padding:4px 10px;border:1px solid #ccc">Height, h (cm)</th><th style="padding:4px 10px;border:1px solid #ccc">Freq (f)</th><th style="padding:4px 10px;border:1px solid #ccc">Midpoint (x)</th><th style="padding:4px 10px;border:1px solid #ccc">fx</th></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">150 ≤ h &lt; 155</td><td style="padding:4px 10px;border:1px solid #ccc">4</td><td style="padding:4px 10px;border:1px solid #ccc">152.5</td><td style="padding:4px 10px;border:1px solid #ccc">610</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">155 ≤ h &lt; 160</td><td style="padding:4px 10px;border:1px solid #ccc">9</td><td style="padding:4px 10px;border:1px solid #ccc">157.5</td><td style="padding:4px 10px;border:1px solid #ccc">1417.5</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">160 ≤ h &lt; 165</td><td style="padding:4px 10px;border:1px solid #ccc">12</td><td style="padding:4px 10px;border:1px solid #ccc">162.5</td><td style="padding:4px 10px;border:1px solid #ccc">1950</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">165 ≤ h &lt; 170</td><td style="padding:4px 10px;border:1px solid #ccc">8</td><td style="padding:4px 10px;border:1px solid #ccc">167.5</td><td style="padding:4px 10px;border:1px solid #ccc">1340</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">170 ≤ h &lt; 175</td><td style="padding:4px 10px;border:1px solid #ccc">3</td><td style="padding:4px 10px;border:1px solid #ccc">172.5</td><td style="padding:4px 10px;border:1px solid #ccc">517.5</td></tr><tr style="font-weight:bold"><td style="padding:4px 10px;border:1px solid #ccc">Total</td><td style="padding:4px 10px;border:1px solid #ccc">36</td><td style="padding:4px 10px;border:1px solid #ccc">—</td><td style="padding:4px 10px;border:1px solid #ccc">5835</td></tr></table><b>Estimated mean</b> = 5835 ÷ 36 = <b>162.1 cm</b> (1 d.p.)<br><b>Modal class:</b> 160 ≤ h &lt; 165 (highest frequency = 12)',
      },
    },
    {
      id: 'h-compare',
      type: 'heading',
      data: { text: 'Comparison: Discrete vs Grouped Table', level: 2 },
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Frequency table types compared',
        headers: ['Feature', 'Discrete frequency table', 'Grouped frequency table'],
        rows: [
          ['Mode', 'The x value with highest frequency', 'Modal class (the class with highest frequency)'],
          ['Median', 'Found from cumulative frequency — find middle position', 'Identify which class contains the median'],
          ['Mean', 'Σxf ÷ Σf (exact value)', 'Σxf ÷ Σf using midpoints (estimate only)'],
          ['Individual values?', 'Yes — known exactly', 'No — only the class interval is known'],
        ],
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip — show your working table',
        text: 'In exams, always add an xf column (and a midpoint column for grouped data) to the given table. Show all intermediate products. If you make a slip in one product, the examiner can still award method marks if your table structure is correct.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'For frequency tables: Mode = value with highest f. Median position = (n+1)/2; use cumulative frequency to find which value it falls in. Mean = Σxf ÷ Σf. For grouped tables: use midpoints to estimate the mean; state the modal class (not a single mode value).',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Mean from table: add xf column, then Σxf ÷ Σf. Grouped table: use midpoints. Modal class = highest frequency class.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-key-mean',
        prompt: 'Write the formula for calculating the mean from a frequency table.',
        answer: 'Mean = Σxf ÷ Σf. Multiply each value by its frequency, sum those products, and divide by total frequency.',
      },
      {
        id: 'cue-2',
        blockId: 'callout-we1',
        prompt: 'In the frequency table example (n=22), how do you find the median?',
        answer: 'Median is between the 11th and 12th values. Use cumulative frequency to identify which value contains position 11.5. Here both the 11th and 12th values are in x=3, so median = 3.',
      },
      {
        id: 'cue-3',
        blockId: 'p-grouped',
        prompt: 'Why do you use midpoints when finding the mean from a grouped frequency table?',
        answer: 'Because individual values are not known — only the class interval. The midpoint is the best single representative value for the class, giving an estimate of the mean.',
      },
      {
        id: 'cue-4',
        blockId: 'callout-we2',
        prompt: 'What is the estimated mean for the heights table (Σf=36, Σfx=5835)?',
        answer: 'Estimated mean = 5835 ÷ 36 = 162.1 cm (1 d.p.).',
      },
      {
        id: 'cue-5',
        blockId: 'tbl-compare',
        prompt: 'What is the difference between "mode" from a discrete table vs a grouped table?',
        answer: 'For discrete tables you give the mode value (e.g. x = 3). For grouped tables you give the modal class (e.g. 160 ≤ h < 165) — not a single value.',
      },
    ],
  },
  evidence: [],
};
