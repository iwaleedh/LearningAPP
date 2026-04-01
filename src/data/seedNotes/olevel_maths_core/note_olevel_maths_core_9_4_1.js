export const note_olevel_maths_core_9_4_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Statistics/lines-of-best-fit.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Draw a line of best fit on a scatter graph. Use a line of best fit to interpolate (predict within data range) and extrapolate (predict outside data range). Plot and use the mean point to position the line of best fit accurately.',
      },
    },
    {
      id: 'h-lobf',
      type: 'heading',
      data: { text: 'Line of Best Fit (LOBF)', level: 2 },
    },
    {
      id: 'p-lobf',
      type: 'paragraph',
      data: {
        text: 'A <b>line of best fit</b> is a straight line drawn through the middle of the scatter of points. It models the general trend of the data. It can only be drawn meaningfully when there is <b>strong positive or strong negative correlation</b> — there is no point drawing a LOBF with no correlation.',
      },
    },
    {
      id: 'list-lobf-rules',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Draw a straight line — <b>not a curve</b> and not connecting dots' },
          { text: 'Aim for roughly <b>equal numbers of points above and below</b> the line' },
          { text: 'The line must pass through the <b>mean point</b> (x̄, ȳ)' },
          { text: 'Extend the line across the full range of data (and possibly beyond, for extrapolation)' },
        ],
      },
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The mean point',
        text: 'Calculate the mean of the x-values (x̄) and the mean of the y-values (ȳ). Plot the point (x̄, ȳ) on the scatter graph. The line of best fit <b>must pass through</b> this point.',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Mean point and LOBF',
        text: 'Using the revision hours vs test score data:<br>(1,35),(2,42),(3,55),(4,60),(5,68),(6,75),(7,72),(8,85),(9,88),(10,92)<br><br><b>Mean point:</b><br>x̄ = (1+2+3+4+5+6+7+8+9+10)/10 = 55/10 = <b>5.5</b><br>ȳ = (35+42+55+60+68+75+72+85+88+92)/10 = 672/10 = <b>67.2</b><br><br>Mean point: <b>(5.5, 67.2)</b><br><br>Plot this point on the graph, then draw a straight line through it that balances the points above and below.',
      },
    },
    {
      id: 'svg-lobf',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 215" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="150" y="12" text-anchor="middle" font-size="9" font-weight="bold" fill="#333">Scatter Graph with Line of Best Fit</text><line x1="50" y1="175" x2="290" y2="175" stroke="#888" stroke-width="1"/><line x1="50" y1="175" x2="50" y2="20" stroke="#888" stroke-width="1"/><text x="170" y="208" text-anchor="middle" font-size="8" fill="#555">Hours of Revision</text><text x="14" y="98" text-anchor="middle" font-size="8" fill="#555" transform="rotate(-90,14,98)">Test Score</text><text x="74" y="188" text-anchor="middle" font-size="7" fill="#555">1</text><text x="98" y="188" text-anchor="middle" font-size="7" fill="#555">2</text><text x="122" y="188" text-anchor="middle" font-size="7" fill="#555">3</text><text x="146" y="188" text-anchor="middle" font-size="7" fill="#555">4</text><text x="170" y="188" text-anchor="middle" font-size="7" fill="#555">5</text><text x="194" y="188" text-anchor="middle" font-size="7" fill="#555">6</text><text x="218" y="188" text-anchor="middle" font-size="7" fill="#555">7</text><text x="242" y="188" text-anchor="middle" font-size="7" fill="#555">8</text><text x="266" y="188" text-anchor="middle" font-size="7" fill="#555">9</text><text x="290" y="188" text-anchor="middle" font-size="7" fill="#555">10</text><text x="45" y="177" text-anchor="end" font-size="7" fill="#555">20</text><text x="45" y="155" text-anchor="end" font-size="7" fill="#555">35</text><text x="45" y="127" text-anchor="end" font-size="7" fill="#555">55</text><text x="45" y="99" text-anchor="end" font-size="7" fill="#555">75</text><text x="45" y="71" text-anchor="end" font-size="7" fill="#555">95</text><line x1="50" y1="155" x2="290" y2="155" stroke="#e5e7eb" stroke-width="0.5"/><line x1="50" y1="127" x2="290" y2="127" stroke="#e5e7eb" stroke-width="0.5"/><line x1="50" y1="99" x2="290" y2="99" stroke="#e5e7eb" stroke-width="0.5"/><line x1="50" y1="71" x2="290" y2="71" stroke="#e5e7eb" stroke-width="0.5"/><text x="74" y="157" text-anchor="middle" font-size="10" fill="#3b82f6">×</text><text x="98" y="149" text-anchor="middle" font-size="10" fill="#3b82f6">×</text><text x="122" y="134" text-anchor="middle" font-size="10" fill="#3b82f6">×</text><text x="146" y="130" text-anchor="middle" font-size="10" fill="#3b82f6">×</text><text x="170" y="121" text-anchor="middle" font-size="10" fill="#3b82f6">×</text><text x="194" y="113" text-anchor="middle" font-size="10" fill="#3b82f6">×</text><text x="218" y="117" text-anchor="middle" font-size="10" fill="#3b82f6">×</text><text x="242" y="98" text-anchor="middle" font-size="10" fill="#3b82f6">×</text><text x="266" y="95" text-anchor="middle" font-size="10" fill="#3b82f6">×</text><text x="290" y="86" text-anchor="middle" font-size="10" fill="#3b82f6">×</text><line x1="65" y1="160" x2="290" y2="83" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,2"/><circle cx="170" cy="118" r="5" fill="none" stroke="#f59e0b" stroke-width="2"/><circle cx="170" cy="118" r="2" fill="#f59e0b"/><text x="177" y="112" font-size="7" fill="#f59e0b" font-weight="bold">(5.5, 67.2)</text><text x="36" y="82" font-size="7" fill="#ef4444">LOBF</text></svg>',
        caption: 'Scatter graph with line of best fit (dashed red) passing through the mean point (5.5, 67.2) in orange.',
      },
    },
    {
      id: 'h-interp',
      type: 'heading',
      data: { text: 'Interpolation and Extrapolation', level: 2 },
    },
    {
      id: 'tbl-interp',
      type: 'comparisonTable',
      data: {
        caption: 'Using the line of best fit for predictions',
        headers: ['Term', 'Meaning', 'Reliability'],
        rows: [
          ['Interpolation', 'Reading a value from within the data range using the LOBF', 'More reliable — within known data territory'],
          ['Extrapolation', 'Reading a value from beyond the data range by extending the LOBF', 'Less reliable — the trend may not continue outside the observed range'],
        ],
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Using the LOBF to predict',
        text: 'Using the revision hours vs test score LOBF:<br><br>(a) Estimate the test score for a student who revises for 4.5 hours.<br><b>Read from the LOBF at x = 4.5:</b> draw a vertical line up to the LOBF, then across to the y-axis → score ≈ <b>64</b> (interpolation — reliable)<br><br>(b) Estimate the test score for a student who revises for 12 hours.<br><b>Extend LOBF to x = 12:</b> score ≈ <b>99</b> (extrapolation — less reliable; the test has a maximum of 100, so the trend cannot continue)<br><br>(c) Estimate the hours revised for a student who scored 50.<br><b>Read from LOBF at y = 50:</b> draw horizontal to LOBF, then down to x-axis → ≈ <b>2.5 hours</b> (interpolation)',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip',
        text: '• Always plot the mean point and <b>check your LOBF passes through it</b><br>• When asked "how reliable is this estimate?", state whether it is interpolation or extrapolation, and explain why that affects reliability<br>• The LOBF should NOT start or end at the origin unless the data clearly passes through (0, 0)',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Line of best fit: straight line through mean point (x̄, ȳ), with equal points above and below. Interpolation (within data range) is reliable. Extrapolation (beyond range) is less reliable as the trend may not continue.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'LOBF must pass through mean point (x̄, ȳ). Interpolation = within range (reliable). Extrapolation = beyond range (less reliable).',
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-key',
        prompt: 'What special point must a line of best fit always pass through?',
        answer: 'The mean point (x̄, ȳ) — the point with the mean of the x-values and the mean of the y-values.',
      },
      {
        id: 'cue-2',
        blockId: 'callout-we1',
        prompt: 'For the revision hours data, calculate the mean point.',
        answer: 'x̄ = (1+2+…+10)/10 = 5.5. ȳ = (35+42+55+60+68+75+72+85+88+92)/10 = 67.2. Mean point = (5.5, 67.2).',
      },
      {
        id: 'cue-3',
        blockId: 'tbl-interp',
        prompt: 'What is the difference between interpolation and extrapolation? Which is more reliable?',
        answer: 'Interpolation: predicting within the data range — more reliable. Extrapolation: predicting beyond the data range — less reliable, as the trend may not continue.',
      },
      {
        id: 'cue-4',
        blockId: 'list-lobf-rules',
        prompt: 'Give two rules for correctly drawing a line of best fit.',
        answer: 'It must be a straight line (not a curve). Roughly equal numbers of points should be above and below the line. It must pass through the mean point.',
      },
    ],
  },
  evidence: [],
};
