export const note_olevel_maths_core_9_3_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Statistics/comparing-statistical-diagrams.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Choose the most appropriate statistical diagram for a given data type. Interpret statistical diagrams and make evidence-based comparisons. Describe distributions using centre and spread.',
      },
    },
    {
      id: 'h-choosing',
      type: 'heading',
      data: { text: 'Choosing the Right Statistical Diagram', level: 2 },
    },
    {
      id: 'tbl-choose',
      type: 'comparisonTable',
      data: {
        caption: 'Diagram selecting guide',
        headers: ['Situation', 'Best diagram(s)', 'Reason'],
        rows: [
          ['Qualitative data (categories)', 'Bar chart, pie chart, pictogram', 'Categories are distinct; proportions visible in pie chart'],
          ['Discrete data (ungrouped)', 'Bar chart, pie chart, stem-and-leaf', 'Gaps between bars show data is discrete'],
          ['Continuous data (grouped)', 'Histogram, frequency polygon', 'No gaps; bars touch to show continuity'],
          ['Comparing two groups (small data)', 'Back-to-back stem-and-leaf', 'Individual values are retained; easy to compare'],
          ['Comparing two groups (large data)', 'Frequency polygon (two on same axes), grouped bar chart', 'Shape and distribution can be compared visually'],
          ['Relationship between two variables', 'Scatter graph', 'Shows correlation between two variables'],
          ['Proportions of a whole', 'Pie chart', 'Each sector shows fraction of total'],
          ['Range and IQR (five-number summary)', 'Box plot', 'Shows median, quartiles, min, and max'],
        ],
      },
    },
    {
      id: 'h-comparing',
      type: 'heading',
      data: { text: 'Making Comparisons from Diagrams', level: 2 },
    },
    {
      id: 'p-comparing',
      type: 'paragraph',
      data: {
        text: 'When comparing two statistical diagrams, always comment on <b>centre</b> (median or mean) AND <b>spread</b> (range or IQR). Give specific numerical evidence from the diagrams for each comparison statement.',
      },
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Comparison statement structure',
        text: '<b>On average:</b> "On average, Group X [performs/scores] [better/worse] because their [mean/median] is [value], which is [higher/lower] than Group Y\'s [value]."<br><br><b>Spread:</b> "The results for Group X are [more/less] consistent because the [range/IQR] is [smaller/larger] — [value] compared to [value] for Group Y."',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Comparing two frequency polygons',
        text: 'Two classes sat the same maths test. Their frequency polygons show:<br>• Class A has a peak at 65–70 and is roughly symmetric<br>• Class B has a peak at 55–60 and a longer tail to the right<br><br>From reading off the polygons:<br>Class A: estimated mean ≈ 67, range ≈ 40<br>Class B: estimated mean ≈ 60, range ≈ 55<br><br><b>Comparison:</b><br>"On average, Class A performed better because their mean (≈67) is higher than Class B\'s mean (≈60)."<br>"Class A\'s results are more consistent because the range (≈40) is smaller than Class B\'s range (≈55)."',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Choosing the right diagram',
        text: 'State the most suitable diagram for each situation, giving a reason:<br><br>(a) Displaying the distribution of heights (continuous) of 200 students<br>(b) Showing the proportion of students studying each subject<br>(c) Comparing test scores (small data sets) of boys vs girls<br>(d) Looking for a relationship between hours of sleep and test score<br><br>(a) <b>Histogram</b> — height is continuous; bars should touch to reflect continuous scale<br>(b) <b>Pie chart</b> — shows how the total is split into proportions; easy to read fractions<br>(c) <b>Back-to-back stem-and-leaf</b> — retains individual values; easy to compare medians and ranges<br>(d) <b>Scatter graph</b> — used to investigate correlation between two variables',
      },
    },
    {
      id: 'h-reading',
      type: 'heading',
      data: { text: 'Interpreting Distribution Shape', level: 2 },
    },
    {
      id: 'list-shape',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Symmetric distribution:</b> mean ≈ median; no skew; data equally spread either side of centre' },
          { text: '<b>Positively skewed:</b> long tail to the right; mean > median; more data concentrated at lower values' },
          { text: '<b>Negatively skewed:</b> long tail to the left; mean &lt; median; more data concentrated at higher values' },
          { text: '<b>Uniform distribution:</b> all values approximately equal frequency; flat' },
        ],
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip — full comparison requires two points',
        text: 'A complete comparison must always include <b>two parts</b>:<br>1. A comparison of <b>average</b> (centre) — mean or median<br>2. A comparison of <b>spread</b> — range or IQR<br><br>Each statement must reference <b>specific values</b> from the data. A comparison without numerical evidence will not gain full marks.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Discrete data → bar chart/pie/stem-and-leaf. Continuous data → histogram/frequency polygon. Compare two groups → back-to-back stem-and-leaf or dual frequency polygon. Any comparison requires: comment on average (centre) AND spread, with numerical evidence from the diagrams.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Histogram for continuous; bar chart for discrete; scatter for two variables; pie for proportions. Always compare centre AND spread.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-choose',
        prompt: 'Which diagram is most suitable for comparing two groups of continuous data? Why?',
        answer: 'Two frequency polygons on the same axes — you can directly compare the shapes, peaks, and spreads of the two distributions.',
      },
      {
        id: 'cue-2',
        blockId: 'callout-key',
        prompt: 'What two things must a complete comparison of two data sets include?',
        answer: '1. Comparison of average (mean or median) — comment on centre. 2. Comparison of spread (range or IQR). Both must include specific numerical values.',
      },
      {
        id: 'cue-3',
        blockId: 'callout-we2',
        prompt: 'What diagram would you use to show the proportion of students studying each subject? Why?',
        answer: 'A pie chart — each sector shows the fraction/proportion of the total, making it easy to compare proportions visually.',
      },
      {
        id: 'cue-4',
        blockId: 'list-shape',
        prompt: 'What does a positively skewed distribution look like, and how does it affect the mean and median?',
        answer: 'A long tail to the right (high values). The mean is pulled towards the high outliers, so mean > median.',
      },
    ],
  },
  evidence: [],
};
