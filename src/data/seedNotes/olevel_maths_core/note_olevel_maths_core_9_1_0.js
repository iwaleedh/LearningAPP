export const note_olevel_maths_core_9_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Statistics/discrete-and-continuous-data.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Classify data as qualitative or quantitative. Distinguish between discrete and continuous data with examples. Understand the implications for data collection and choice of statistical diagram.',
      },
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Types of Data', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Before collecting or displaying data, you must identify what <b>type</b> of data it is. The type determines which diagrams and averages are appropriate.',
      },
    },
    {
      id: 'tbl-types',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of data types',
        headers: ['Type', 'Description', 'How obtained', 'Examples'],
        rows: [
          ['Qualitative (categorical)', 'Describes a quality or category — no numerical value', 'Observation / survey', 'Eye colour, nationality, type of car, favourite subject'],
          ['Quantitative — Discrete', 'Numerical; only specific (usually whole number) values possible', 'Counting', 'Number of pets, goals scored, shoe size, number of students'],
          ['Quantitative — Continuous', 'Numerical; can take any value within a range', 'Measuring', 'Height, mass, temperature, time, speed, length'],
        ],
      },
    },
    {
      id: 'h-disc',
      type: 'heading',
      data: { text: 'Discrete Data', level: 2 },
    },
    {
      id: 'p-disc',
      type: 'paragraph',
      data: {
        text: '<b>Discrete data</b> is obtained by <b>counting</b>. It can only take <b>specific, separate values</b> — usually whole numbers. There are gaps between possible values; you cannot have, for example, 2.7 children.',
      },
    },
    {
      id: 'list-disc',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Number of children in a family: 0, 1, 2, 3, … (cannot be 1.5)' },
          { text: 'Score on a dice: only 1, 2, 3, 4, 5, or 6' },
          { text: 'Number of goals in a match: 0, 1, 2, … (always a whole number)' },
          { text: 'Number of cars passing a checkpoint in one hour' },
        ],
      },
    },
    {
      id: 'h-cont',
      type: 'heading',
      data: { text: 'Continuous Data', level: 2 },
    },
    {
      id: 'p-cont',
      type: 'paragraph',
      data: {
        text: '<b>Continuous data</b> is obtained by <b>measuring</b>. It can take <b>any value within a range</b>. Between any two possible values there is always another possible value. Continuous data is always rounded when recorded (e.g. to the nearest mm or tenth of a second).',
      },
    },
    {
      id: 'list-cont',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Height of a student: could be 162.4 cm, 162.41 cm, 162.413 cm, … (any value possible)' },
          { text: 'Mass of an apple: 84 g, 84.3 g, 84.32 g, … depending on precision of balance' },
          { text: 'Time to run 100 m: 12.84 s, 13.02 s, …' },
          { text: 'Temperature at noon: −3.2°C, 15.7°C, …' },
        ],
      },
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key question to classify data',
        text: '<b>Step 1:</b> Is it a number? If <b>No</b> → Qualitative.<br><b>Step 2 (if yes):</b> Is it obtained by counting or measuring?<br>→ <b>Counting</b>: Discrete (only specific values)<br>→ <b>Measuring</b>: Continuous (any value in range)',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Classifying data',
        text: 'Classify each of the following as qualitative, discrete, or continuous.<br><br>(a) The colour of cars in a car park<br>(b) The number of books on a shelf<br>(c) The mass of oranges in a bag<br>(d) The time taken to complete a homework task<br>(e) The number of customers entering a shop each hour<br><br><b>Solutions:</b><br>(a) <b>Qualitative</b> — colour is a category, not a number<br>(b) <b>Discrete</b> — you count books; only whole numbers are possible (you cannot have 3.5 books)<br>(c) <b>Continuous</b> — mass is measured; any value (e.g. 142.7 g, 143.2 g) is possible<br>(d) <b>Continuous</b> — time is measured; any value within a range is possible<br>(e) <b>Discrete</b> — you count customers; only whole numbers are possible',
      },
    },
    {
      id: 'h-diag',
      type: 'heading',
      data: { text: 'Implications for Statistical Diagrams', level: 2 },
    },
    {
      id: 'tbl-diag',
      type: 'comparisonTable',
      data: {
        caption: 'Suitable diagrams for each data type',
        headers: ['Data Type', 'Suitable Diagrams', 'Notes'],
        rows: [
          ['Qualitative', 'Bar chart, pie chart, pictogram', 'Bars have gaps; categories on x-axis'],
          ['Discrete (ungrouped)', 'Bar chart, pie chart, stem-and-leaf diagram', 'Bars have gaps between them'],
          ['Continuous (grouped)', 'Histogram, frequency polygon', 'Histogram bars touch (no gaps); areas represent frequency'],
          ['Any', 'Scatter graph', 'Used to show relationship between two variables'],
        ],
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip — justifying your classification',
        text: 'When asked to explain why data is <b>continuous</b>, write: "It is <b>measured</b> and can take <b>any value</b> within a range."<br>When explaining <b>discrete</b>, write: "It is <b>counted</b> and can only take <b>specific (whole number) values</b>."',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: '<b>Qualitative</b>: categories, no numbers (e.g. colour, nationality). <b>Discrete</b>: counted, whole numbers only (e.g. number of goals). <b>Continuous</b>: measured, any value in a range (e.g. height, time). Use histograms for continuous data, bar charts for discrete/qualitative.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Qualitative = categories; Discrete = counted, whole numbers; Continuous = measured, any value in range.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-types',
        prompt: 'What is the difference between discrete and continuous data?',
        answer: 'Discrete is obtained by counting and can only take specific values (usually whole numbers). Continuous is obtained by measuring and can take any value within a range.',
      },
      {
        id: 'cue-2',
        blockId: 'p-cont',
        prompt: 'Give two examples each of discrete and continuous data.',
        answer: 'Discrete: number of pets, goals scored in a match. Continuous: height of a student, time taken to complete a test.',
      },
      {
        id: 'cue-3',
        blockId: 'callout-key',
        prompt: 'How do you decide if data is qualitative or quantitative?',
        answer: 'Ask: is it a number? If no → qualitative. If yes → quantitative (then determine discrete or continuous).',
      },
      {
        id: 'cue-4',
        blockId: 'tbl-diag',
        prompt: 'Why must the bars of a histogram touch, but bar chart bars have gaps?',
        answer: 'Histograms display continuous data — there are no gaps between values. Bar charts display discrete or qualitative data — gaps show the data is in separate categories.',
      },
      {
        id: 'cue-5',
        blockId: 'callout-we1',
        prompt: 'Is "the number of pages in a book" discrete or continuous? Give a reason.',
        answer: 'Discrete — you count pages, and only whole number values are possible.',
      },
    ],
  },
  evidence: [],
};
