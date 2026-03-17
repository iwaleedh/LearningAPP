export const note_olevel_maths_core_9_4_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Statistics/scatter-graphs-and-correlation.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Plot scatter graphs for bivariate data. Describe correlation as positive, negative, or no correlation. Distinguish between strong and weak correlation. Understand that correlation does not imply causation.',
      },
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What is a Scatter Graph?', level: 2 },
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: {
        text: 'A <b>scatter graph</b> (scatter diagram) displays <b>two variables</b> for the same set of individuals. Each individual produces one point. The pattern of points shows whether the two variables are related (correlated).',
      },
    },
    {
      id: 'list-plot',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Identify the two variables; one goes on each axis (independent/horizontal, dependent/vertical)' },
          { text: 'Choose appropriate scales so all data fits and uses at least half the grid' },
          { text: 'Plot each data pair as a small <b>×</b> or point' },
          { text: 'Do NOT join the points with lines' },
        ],
      },
    },
    {
      id: 'h-corr',
      type: 'heading',
      data: { text: 'Describing Correlation', level: 2 },
    },
    {
      id: 'tbl-corr',
      type: 'comparisonTable',
      data: {
        caption: 'Types of correlation',
        headers: ['Type', 'Pattern of points', 'Meaning'],
        rows: [
          ['Strong positive', 'Close to a straight line going up-right', 'As x increases, y increases proportionally'],
          ['Weak positive', 'General upward trend but points spread out', 'As x increases, y tends to increase, but loosely'],
          ['No correlation', 'Scattered randomly — no pattern', 'No linear relationship between x and y'],
          ['Weak negative', 'General downward trend but spread out', 'As x increases, y tends to decrease, but loosely'],
          ['Strong negative', 'Close to a straight line going down-right', 'As x increases, y decreases proportionally'],
        ],
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Plotting and describing correlation',
        text: 'A student records hours of revision (x) and test score (y):<br><br><table style="border-collapse:collapse;font-size:0.9em"><tr style="background:#f0f0f0"><th style="padding:4px 8px;border:1px solid #ccc">Hours (x)</th><td style="padding:4px 8px;border:1px solid #ccc">1</td><td style="padding:4px 8px;border:1px solid #ccc">2</td><td style="padding:4px 8px;border:1px solid #ccc">3</td><td style="padding:4px 8px;border:1px solid #ccc">4</td><td style="padding:4px 8px;border:1px solid #ccc">5</td><td style="padding:4px 8px;border:1px solid #ccc">6</td><td style="padding:4px 8px;border:1px solid #ccc">7</td><td style="padding:4px 8px;border:1px solid #ccc">8</td><td style="padding:4px 8px;border:1px solid #ccc">9</td><td style="padding:4px 8px;border:1px solid #ccc">10</td></tr><tr><th style="padding:4px 8px;border:1px solid #ccc;background:#f0f0f0">Score (y)</th><td style="padding:4px 8px;border:1px solid #ccc">35</td><td style="padding:4px 8px;border:1px solid #ccc">42</td><td style="padding:4px 8px;border:1px solid #ccc">55</td><td style="padding:4px 8px;border:1px solid #ccc">60</td><td style="padding:4px 8px;border:1px solid #ccc">68</td><td style="padding:4px 8px;border:1px solid #ccc">75</td><td style="padding:4px 8px;border:1px solid #ccc">72</td><td style="padding:4px 8px;border:1px solid #ccc">85</td><td style="padding:4px 8px;border:1px solid #ccc">88</td><td style="padding:4px 8px;border:1px solid #ccc">92</td></tr></table><br>Points plotted: (1,35), (2,42), (3,55) … (10,92)<br><b>Description:</b> "There is a strong positive correlation between hours of revision and test score. As hours of revision increase, test scores tend to increase."',
      },
    },
    {
      id: 'svg-scatter',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 290 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="145" y="12" text-anchor="middle" font-size="9" font-weight="bold" fill="#333">Hours of Revision vs Test Score</text><line x1="50" y1="170" x2="285" y2="170" stroke="#888" stroke-width="1"/><line x1="50" y1="170" x2="50" y2="20" stroke="#888" stroke-width="1"/><text x="145" y="205" text-anchor="middle" font-size="8" fill="#555">Hours of Revision</text><text x="14" y="95" text-anchor="middle" font-size="8" fill="#555" transform="rotate(-90,14,95)">Test Score</text><text x="73" y="183" text-anchor="middle" font-size="7" fill="#555">1</text><text x="96" y="183" text-anchor="middle" font-size="7" fill="#555">2</text><text x="119" y="183" text-anchor="middle" font-size="7" fill="#555">3</text><text x="142" y="183" text-anchor="middle" font-size="7" fill="#555">4</text><text x="165" y="183" text-anchor="middle" font-size="7" fill="#555">5</text><text x="188" y="183" text-anchor="middle" font-size="7" fill="#555">6</text><text x="211" y="183" text-anchor="middle" font-size="7" fill="#555">7</text><text x="234" y="183" text-anchor="middle" font-size="7" fill="#555">8</text><text x="257" y="183" text-anchor="middle" font-size="7" fill="#555">9</text><text x="280" y="183" text-anchor="middle" font-size="7" fill="#555">10</text><text x="45" y="172" text-anchor="end" font-size="7" fill="#555">20</text><text x="45" y="154" text-anchor="end" font-size="7" fill="#555">35</text><text x="45" y="128" text-anchor="end" font-size="7" fill="#555">55</text><text x="45" y="102" text-anchor="end" font-size="7" fill="#555">75</text><text x="45" y="75" text-anchor="end" font-size="7" fill="#555">95</text><line x1="50" y1="154" x2="285" y2="154" stroke="#e5e7eb" stroke-width="0.5"/><line x1="50" y1="128" x2="285" y2="128" stroke="#e5e7eb" stroke-width="0.5"/><line x1="50" y1="102" x2="285" y2="102" stroke="#e5e7eb" stroke-width="0.5"/><line x1="50" y1="75" x2="285" y2="75" stroke="#e5e7eb" stroke-width="0.5"/><text x="73" y="152" text-anchor="middle" font-size="10" fill="#6366f1">×</text><text x="96" y="145" text-anchor="middle" font-size="10" fill="#6366f1">×</text><text x="119" y="131" text-anchor="middle" font-size="10" fill="#6366f1">×</text><text x="142" y="126" text-anchor="middle" font-size="10" fill="#6366f1">×</text><text x="165" y="117" text-anchor="middle" font-size="10" fill="#6366f1">×</text><text x="188" y="110" text-anchor="middle" font-size="10" fill="#6366f1">×</text><text x="211" y="114" text-anchor="middle" font-size="10" fill="#6366f1">×</text><text x="234" y="97" text-anchor="middle" font-size="10" fill="#6366f1">×</text><text x="257" y="93" text-anchor="middle" font-size="10" fill="#6366f1">×</text><text x="280" y="85" text-anchor="middle" font-size="10" fill="#6366f1">×</text></svg>',
        caption: 'Scatter graph showing strong positive correlation between hours of revision and test score.',
      },
    },
    {
      id: 'h-causation',
      type: 'heading',
      data: { text: 'Correlation vs Causation', level: 2 },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Correlation does NOT mean causation',
        text: 'Just because two variables are correlated, it does not mean one <b>causes</b> the other. There may be a <b>third variable</b> affecting both (a confounding variable).<br><br>Example: Ice cream sales and drowning deaths are positively correlated — but ice cream does not cause drowning. Both are linked to a third variable: <b>hot weather</b>.',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip — describing correlation',
        text: 'Use two words: strength (<b>strong/weak/no</b>) + direction (<b>positive/negative</b>). Then give the context.<br><br>Good answer: "There is a strong positive correlation. As the number of hours revised increases, the test score tends to increase."<br><br>Poor answer: "They are related." — No marks.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Scatter graphs display two variables per individual. Describe correlation using strength (strong/weak/no) and direction (positive/negative). Positive: as x increases, y increases. Negative: as x increases, y decreases. Correlation does not imply causation.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Scatter graph: plot (x,y) pairs. Describe correlation: strong/weak + positive/negative. Correlation ≠ causation.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-corr',
        prompt: 'Describe the difference between strong and weak positive correlation.',
        answer: 'Strong positive: points lie close to a straight line sloping upward. Weak positive: general upward trend but points are more spread out/scattered.',
      },
      {
        id: 'cue-2',
        blockId: 'callout-we1',
        prompt: 'Write a full description of the correlation shown in the revision hours vs test score data.',
        answer: 'There is a strong positive correlation. As the number of hours revised increases, the test score tends to increase.',
      },
      {
        id: 'cue-3',
        blockId: 'callout-warning',
        prompt: 'Why does correlation between two variables not mean one causes the other?',
        answer: 'A third (confounding) variable may be causing both. Correlation only shows a statistical relationship, not a cause-and-effect relationship.',
      },
      {
        id: 'cue-4',
        blockId: 'list-plot',
        prompt: 'Give two rules for plotting a scatter graph correctly.',
        answer: 'Do NOT join the points with lines. Plot each data pair as a small × or point; choose scales so all data fits and uses at least half the grid.',
      },
    ],
  },
  evidence: [],
};
