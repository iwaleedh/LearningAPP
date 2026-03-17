export const note_olevel_maths_core_9_3_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Statistics/pie-charts.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Calculate sector angles for a pie chart. Draw accurate pie charts using a protractor and compass. Extract frequency data from a given pie chart using angle or proportion.',
      },
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What is a Pie Chart?', level: 2 },
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: {
        text: 'A <b>pie chart</b> is a circle divided into <b>sectors</b>. Each sector represents a category; its <b>angle</b> is proportional to the frequency of that category. The entire circle (360°) represents the total.',
      },
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Sector angle formula',
        text: 'Sector angle = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle"><span style="border-bottom:1px solid;padding:0 4px;font-size:0.9em">frequency</span><span style="padding:0 4px;font-size:0.9em">total frequency</span></span> × 360°<br><br>To find frequency from a known angle:<br>Frequency = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle"><span style="border-bottom:1px solid;padding:0 4px;font-size:0.9em">angle</span><span style="padding:0 4px;font-size:0.9em">360°</span></span> × total frequency',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Calculating sector angles',
        text: '30 students chose their favourite sport. Draw a pie chart.<br><br><table style="border-collapse:collapse;font-size:0.9em;margin-bottom:8px"><tr style="background:#f0f0f0"><th style="padding:4px 10px;border:1px solid #ccc">Sport</th><th style="padding:4px 10px;border:1px solid #ccc">Frequency</th><th style="padding:4px 10px;border:1px solid #ccc">Angle calculation</th><th style="padding:4px 10px;border:1px solid #ccc">Angle</th></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">Cricket</td><td style="padding:4px 10px;border:1px solid #ccc">8</td><td style="padding:4px 10px;border:1px solid #ccc">8/30 × 360</td><td style="padding:4px 10px;border:1px solid #ccc">96°</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">Football</td><td style="padding:4px 10px;border:1px solid #ccc">12</td><td style="padding:4px 10px;border:1px solid #ccc">12/30 × 360</td><td style="padding:4px 10px;border:1px solid #ccc">144°</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">Tennis</td><td style="padding:4px 10px;border:1px solid #ccc">6</td><td style="padding:4px 10px;border:1px solid #ccc">6/30 × 360</td><td style="padding:4px 10px;border:1px solid #ccc">72°</td></tr><tr><td style="padding:4px 10px;border:1px solid #ccc">Swimming</td><td style="padding:4px 10px;border:1px solid #ccc">4</td><td style="padding:4px 10px;border:1px solid #ccc">4/30 × 360</td><td style="padding:4px 10px;border:1px solid #ccc">48°</td></tr><tr style="font-weight:bold"><td style="padding:4px 10px;border:1px solid #ccc">Total</td><td style="padding:4px 10px;border:1px solid #ccc">30</td><td style="padding:4px 10px;border:1px solid #ccc">—</td><td style="padding:4px 10px;border:1px solid #ccc">360°</td></tr></table>Always check: angles sum to <b>360°</b>. Here: 96+144+72+48 = 360° ✓',
      },
    },
    {
      id: 'svg-pie',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 310 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="155" y="14" text-anchor="middle" font-size="10" font-weight="bold" fill="#333">Favourite Sports (n = 30)</text><path d="M 155 115 L 155 30 A 85 85 0 0 1 234 119 Z" fill="#6366f1" stroke="white" stroke-width="1.5"/><path d="M 155 115 L 234 119 A 85 85 0 0 1 82 153 Z" fill="#8B5CF6" stroke="white" stroke-width="1.5"/><path d="M 155 115 L 82 153 A 85 85 0 0 1 87 53 Z" fill="#06B6D4" stroke="white" stroke-width="1.5"/><path d="M 155 115 L 87 53 A 85 85 0 0 1 155 30 Z" fill="#10B981" stroke="white" stroke-width="1.5"/><text x="198" y="68" text-anchor="middle" font-size="9" fill="white" font-weight="bold">Cricket</text><text x="198" y="79" text-anchor="middle" font-size="9" fill="white" font-weight="bold">96°</text><text x="172" y="153" text-anchor="middle" font-size="9" fill="white" font-weight="bold">Football</text><text x="172" y="164" text-anchor="middle" font-size="9" fill="white" font-weight="bold">144°</text><text x="94" y="123" text-anchor="middle" font-size="9" fill="white" font-weight="bold">Tennis</text><text x="94" y="134" text-anchor="middle" font-size="9" fill="white" font-weight="bold">72°</text><text x="122" y="63" text-anchor="middle" font-size="9" fill="white" font-weight="bold">Swim</text><text x="122" y="74" text-anchor="middle" font-size="9" fill="white" font-weight="bold">48°</text><rect x="20" y="185" width="12" height="10" fill="#6366f1"/><text x="36" y="194" font-size="8" fill="#333">Cricket (8)</text><rect x="90" y="185" width="12" height="10" fill="#8B5CF6"/><text x="106" y="194" font-size="8" fill="#333">Football (12)</text><rect x="175" y="185" width="12" height="10" fill="#06B6D4"/><text x="191" y="194" font-size="8" fill="#333">Tennis (6)</text><rect x="240" y="185" width="12" height="10" fill="#10B981"/><text x="256" y="194" font-size="8" fill="#333">Swim (4)</text></svg>',
        caption: 'Pie chart for the sport data. Each sector angle is proportional to frequency. Angles sum to 360°.',
      },
    },
    {
      id: 'h-read',
      type: 'heading',
      data: { text: 'Reading Values from a Pie Chart', level: 2 },
    },
    {
      id: 'p-read',
      type: 'paragraph',
      data: {
        text: 'To find a frequency from a pie chart when the total is given: measure the sector angle, then use the reverse formula.',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Reading from a pie chart',
        text: 'A pie chart shows how 120 people travel to work. The sector for "bus" has an angle of 75°. How many people travel by bus?<br><br>Frequency = angle/360 × total = 75/360 × 120 = 0.2083... × 120 = <b>25 people</b>',
      },
    },
    {
      id: 'h-draw',
      type: 'heading',
      data: { text: 'Drawing a Pie Chart (Step-by-Step)', level: 2 },
    },
    {
      id: 'list-draw',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Calculate each sector angle using <b>frequency/total × 360°</b>' },
          { text: 'Check angles sum to <b>360°</b> (allow ±1° for rounding)' },
          { text: 'Draw a circle with a compass and mark the centre' },
          { text: 'Draw a <b>radius</b> (a straight line from centre to circumference)' },
          { text: 'Measure and draw each sector angle using a protractor, starting from the radius' },
          { text: '<b>Label</b> each sector clearly (name and/or angle); add a title' },
        ],
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip — rounding angles',
        text: 'Sector angles must be whole numbers (you cannot draw 96.67°). Round to the nearest degree, then adjust the largest sector so that all angles still add to 360°. Always state the total you are checking against (e.g. "96+144+72+48 = 360° ✓").',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common errors',
        text: '• <b>Using frequency directly as an angle</b> — this only works if there are exactly 360 data values. Always apply the formula.<br>• <b>Not checking angles sum to 360°</b> — always verify before drawing.<br>• <b>Measuring the wrong angle</b> — measure from the last drawn radius, not from the original starting radius, for each subsequent sector.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Pie chart sector angle = (frequency ÷ total) × 360°. Reverse: frequency = (angle ÷ 360°) × total. Angles must sum to 360°. Draw with compass and protractor; label all sectors.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Sector angle = (f/total) × 360°. Reverse: f = (angle/360°) × total. All angles sum to 360°.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-key',
        prompt: 'Write the formula for calculating a sector angle in a pie chart.',
        answer: 'Sector angle = (frequency ÷ total frequency) × 360°.',
      },
      {
        id: 'cue-2',
        blockId: 'callout-we1',
        prompt: 'In the sports pie chart (total 30), what is the angle for Football (frequency 12)?',
        answer: '12/30 × 360 = 144°.',
      },
      {
        id: 'cue-3',
        blockId: 'callout-we2',
        prompt: 'A sector of 75° in a pie chart of 120 people represents how many people?',
        answer: '75/360 × 120 = 25 people.',
      },
      {
        id: 'cue-4',
        blockId: 'list-draw',
        prompt: 'What check must you always do after calculating pie chart sector angles?',
        answer: 'Check that all the angles add up to exactly 360°. If not, check your calculations or adjust the largest sector by the rounding error.',
      },
      {
        id: 'cue-5',
        blockId: 'callout-warning',
        prompt: 'Why can you NOT just use the frequency as the angle in a pie chart?',
        answer: 'Because angles only equal frequencies if there are exactly 360 data values. You must always scale by (frequency/total) × 360°.',
      },
    ],
  },
  evidence: [],
};
