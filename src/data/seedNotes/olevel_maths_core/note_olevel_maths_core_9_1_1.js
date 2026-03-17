export const note_olevel_maths_core_9_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Statistics/tally-charts-and-frequency-tables.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Record data using tally marks. Construct and complete frequency tables for ungrouped and grouped data. Calculate relative frequency and use frequency tables to read off key information.',
      },
    },
    {
      id: 'h-tally',
      type: 'heading',
      data: { text: 'Tally Marks', level: 2 },
    },
    {
      id: 'p-tally',
      type: 'paragraph',
      data: {
        text: '<b>Tally marks</b> are a quick way to count data as it is collected. Each item is recorded as a vertical stroke (|). Every <b>fifth</b> mark is drawn diagonally across the previous four (||||̶), making it easy to count in groups of five.',
      },
    },
    {
      id: 'list-tally',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '|||| = 4 items' },
          { text: '<del>||||</del> = 5 items (the fifth stroke crosses the four)' },
          { text: '<del>||||</del> || = 7 items' },
          { text: '<del>||||</del> <del>||||</del> ||| = 13 items' },
        ],
      },
    },
    {
      id: 'h-freq',
      type: 'heading',
      data: { text: 'Frequency Tables', level: 2 },
    },
    {
      id: 'p-freq',
      type: 'paragraph',
      data: {
        text: 'A <b>frequency table</b> organises raw data into a table showing each data value, the tally, and the total count (<b>frequency</b>). Always include a total row to check you have accounted for all data values.',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Constructing a frequency table',
        text: 'The shoe sizes of 20 students are recorded:<br><b>5 7 6 8 7 7 5 6 8 7 9 6 7 8 7 6 5 7 8 9</b><br><br>Construct a frequency table.<br><br><table style="border-collapse:collapse;font-size:0.9em"><tr style="background:#f0f0f0"><th style="padding:4px 10px;border:1px solid #ccc">Shoe size</th><th style="padding:4px 10px;border:1px solid #ccc">Tally</th><th style="padding:4px 10px;border:1px solid #ccc">Frequency</th></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">5</td><td style="padding:4px 10px;border:1px solid #ccc">|||</td><td style="padding:4px 10px;border:1px solid #ccc">3</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">6</td><td style="padding:4px 10px;border:1px solid #ccc">||||</td><td style="padding:4px 10px;border:1px solid #ccc">4</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">7</td><td style="padding:4px 10px;border:1px solid #ccc">|||| ||</td><td style="padding:4px 10px;border:1px solid #ccc">7</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">8</td><td style="padding:4px 10px;border:1px solid #ccc">||||</td><td style="padding:4px 10px;border:1px solid #ccc">4</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">9</td><td style="padding:4px 10px;border:1px solid #ccc">||</td><td style="padding:4px 10px;border:1px solid #ccc">2</td></tr><tr style="font-weight:bold"><td style="padding:4px 10px;border:1px solid #ccc">Total</td><td style="padding:4px 10px;border:1px solid #ccc"></td><td style="padding:4px 10px;border:1px solid #ccc">20</td></tr></table>',
      },
    },
    {
      id: 'h-rel',
      type: 'heading',
      data: { text: 'Relative Frequency', level: 2 },
    },
    {
      id: 'p-rel',
      type: 'paragraph',
      data: {
        text: '<b>Relative frequency</b> (also called <b>proportion</b>) shows each frequency as a fraction or decimal of the total. It tells you what proportion of the data falls in each category.',
      },
    },
    {
      id: 'eq-rel',
      type: 'equation',
      data: {
        html: 'Relative frequency = <span class="nb-frac"><span class="nb-num">frequency</span><span class="nb-den">total frequency</span></span>',
        caption: 'Relative frequency formula',
      },
    },
    {
      id: 'p-rel2',
      type: 'paragraph',
      data: {
        text: 'Using the shoe size data above: relative frequency of size 7 = 7/20 = 0.35. This means 35% of students wear size 7. The relative frequencies of all values must sum to <b>1</b> (or 100%).',
      },
    },
    {
      id: 'h-grouped',
      type: 'heading',
      data: { text: 'Grouped Frequency Tables', level: 2 },
    },
    {
      id: 'p-grouped',
      type: 'paragraph',
      data: {
        text: 'When data has a wide range of values, individual values are combined into <b>class intervals</b>. Grouped frequency tables are used for continuous data (e.g. heights, times) and for large ranges of discrete data.',
      },
    },
    {
      id: 'list-grouped',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Class intervals should be <b>equal width</b> where possible (e.g. each interval spans 10)' },
          { text: 'Use inequality notation for continuous data: <b>40 ≤ t < 50</b> means "t is at least 40 but less than 50"' },
          { text: 'Each value belongs to <b>exactly one</b> class interval — no overlaps' },
          { text: 'You <b>cannot</b> find individual values from a grouped table — only the class they are in' },
        ],
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Grouped frequency table',
        text: 'Twenty test scores (out of 100) are: 61, 72, 45, 88, 53, 77, 65, 90, 42, 58, 71, 83, 67, 49, 76, 85, 62, 70, 55, 78<br><br>Complete a grouped frequency table with class width 10.<br><br><table style="border-collapse:collapse;font-size:0.9em"><tr style="background:#f0f0f0"><th style="padding:4px 10px;border:1px solid #ccc">Score (s)</th><th style="padding:4px 10px;border:1px solid #ccc">Tally</th><th style="padding:4px 10px;border:1px solid #ccc">Frequency</th></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">40 ≤ s &lt; 50</td><td style="padding:4px 10px;border:1px solid #ccc">|||</td><td style="padding:4px 10px;border:1px solid #ccc">3</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">50 ≤ s &lt; 60</td><td style="padding:4px 10px;border:1px solid #ccc">|||</td><td style="padding:4px 10px;border:1px solid #ccc">3</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">60 ≤ s &lt; 70</td><td style="padding:4px 10px;border:1px solid #ccc">||||</td><td style="padding:4px 10px;border:1px solid #ccc">4</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">70 ≤ s &lt; 80</td><td style="padding:4px 10px;border:1px solid #ccc">|||| |</td><td style="padding:4px 10px;border:1px solid #ccc">6</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">80 ≤ s &lt; 90</td><td style="padding:4px 10px;border:1px solid #ccc">|||</td><td style="padding:4px 10px;border:1px solid #ccc">3</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">90 ≤ s &lt; 100</td><td style="padding:4px 10px;border:1px solid #ccc">|</td><td style="padding:4px 10px;border:1px solid #ccc">1</td></tr><tr style="font-weight:bold"><td style="padding:4px 10px;border:1px solid #ccc">Total</td><td style="padding:4px 10px;border:1px solid #ccc"></td><td style="padding:4px 10px;border:1px solid #ccc">20</td></tr></table>',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip — checking your table',
        text: 'Always check that your frequencies add up to the total number of data values. If they don\'t match, you have made an error in the tally. Also check that every boundary value is in exactly one class: with notation like <b>40 ≤ s &lt; 50</b>, the value 50 goes in the <b>next</b> class (50 ≤ s &lt; 60), not this one.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Tally marks record data as you collect it (groups of 5). Frequency tables show data value, tally, and count. Relative frequency = frequency ÷ total (must sum to 1). Grouped tables use class intervals for continuous data or wide-range discrete data — use ≤ and &lt; to define boundaries clearly.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Tally marks group in fives. Relative frequency = freq/total. Grouped tables use class intervals with inequality notation.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-tally',
        prompt: 'How are tally marks grouped, and why?',
        answer: 'In groups of five: four vertical strokes then a diagonal fifth. This makes counting easier as you count in fives.',
      },
      {
        id: 'cue-2',
        blockId: 'eq-rel',
        prompt: 'What is relative frequency and how is it calculated?',
        answer: 'Relative frequency = frequency ÷ total frequency. It shows the proportion of data in each category. All relative frequencies must sum to 1.',
      },
      {
        id: 'cue-3',
        blockId: 'h-grouped',
        prompt: 'When would you use a grouped frequency table instead of an ungrouped one?',
        answer: 'When the data is continuous (like height or time) or when there is a large range of discrete values, making individual tallies impractical.',
      },
      {
        id: 'cue-4',
        blockId: 'callout-we2',
        prompt: 'Why do class intervals for continuous data use notation like 40 ≤ s < 50?',
        answer: 'So every value belongs to exactly one class. With this notation, the value 50 belongs to the next class (50 ≤ s < 60), so there is no overlap or gap.',
      },
      {
        id: 'cue-5',
        blockId: 'callout-we1',
        prompt: 'In the shoe size example, what is the relative frequency of size 7?',
        answer: '7/20 = 0.35 (or 35%). Seven students out of 20 wore size 7.',
      },
    ],
  },
  evidence: [],
};
