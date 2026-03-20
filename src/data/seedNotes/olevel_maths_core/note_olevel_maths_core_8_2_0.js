export const note_olevel_maths_core_8_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Probability/possibility-sample-space-diagrams.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'List all possible outcomes of one or two events. Construct and use sample space diagrams (tables/grids) for two events. Read off probabilities from a sample space diagram.',
      },
    },
    {
      id: 'h-sample-space',
      type: 'heading',
      data: { text: 'Sample Space', level: 2 },
    },
    {
      id: 'p-sample-space',
      type: 'paragraph',
      data: {
        text: 'The <b>sample space</b> is the complete list of all possible outcomes of an experiment. For example, rolling a fair die has sample space {1, 2, 3, 4, 5, 6}. Tossing a coin has sample space {H, T}. Listing the sample space helps you count outcomes accurately.',
      },
    },
    {
      id: 'h-diagram',
      type: 'heading',
      data: { text: 'Sample Space Diagrams', level: 2 },
    },
    {
      id: 'p-diagram',
      type: 'paragraph',
      data: {
        text: 'When <b>two events happen together</b>, the sample space can be shown in a <b>table (grid)</b>. One event goes along the top, the other down the side. Each cell shows a combined outcome. This makes it easy to count favourable outcomes without missing any.',
      },
    },
    {
      id: 'svg-twodice',
      type: 'svg',
      data: {
        caption: 'Sample space diagram for rolling two fair dice — each cell shows (Die 1, Die 2)',
        svg: `<svg viewBox="0 0 370 310" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif" font-size="12">
  <!-- Background -->
  <rect x="0" y="0" width="370" height="310" fill="#0f172a" rx="8"/>
  <!-- Header row background -->
  <rect x="42" y="2" width="326" height="42" fill="#6366f1" rx="4"/>
  <!-- Side column background -->
  <rect x="2" y="44" width="38" height="264" fill="#6366f1" rx="4"/>

  <!-- Header labels: Die 2 -->
  <text x="205" y="14" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="11">Die 2 →</text>
  <text x="96"  y="36" text-anchor="middle" fill="#1e293b" font-weight="bold">1</text>
  <text x="150" y="36" text-anchor="middle" fill="#1e293b" font-weight="bold">2</text>
  <text x="204" y="36" text-anchor="middle" fill="#1e293b" font-weight="bold">3</text>
  <text x="258" y="36" text-anchor="middle" fill="#1e293b" font-weight="bold">4</text>
  <text x="312" y="36" text-anchor="middle" fill="#1e293b" font-weight="bold">5</text>
  <text x="366" y="36" text-anchor="middle" fill="#1e293b" font-weight="bold">6</text>

  <!-- Side labels: Die 1 -->
  <text x="20" y="68"  text-anchor="middle" fill="#1e293b" font-weight="bold">1</text>
  <text x="20" y="112" text-anchor="middle" fill="#1e293b" font-weight="bold">2</text>
  <text x="20" y="156" text-anchor="middle" fill="#1e293b" font-weight="bold">3</text>
  <text x="20" y="200" text-anchor="middle" fill="#1e293b" font-weight="bold">4</text>
  <text x="20" y="244" text-anchor="middle" fill="#1e293b" font-weight="bold">5</text>
  <text x="20" y="288" text-anchor="middle" fill="#1e293b" font-weight="bold">6</text>
  <text x="20" y="25"  text-anchor="middle" fill="#1e293b" font-size="10">↓</text>
  <text x="8"  y="175" text-anchor="middle" fill="#1e293b" font-size="10" writing-mode="tb">Die 1</text>

  <!-- Grid cells: rows=Die1(1-6), cols=Die2(1-6). Highlight sum=7 in amber -->
  <!-- Row 1 -->
  <rect x="42" y="45" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="96" y="45" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="150" y="45" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="204" y="45" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="258" y="45" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="312" y="45" width="54" height="42" fill="#78350f" stroke="#e5e7eb" stroke-width="1"/>
  <text x="69"  y="71" text-anchor="middle" fill="#374151" font-size="11">(1,1)=2</text>
  <text x="123" y="71" text-anchor="middle" fill="#374151" font-size="11">(1,2)=3</text>
  <text x="177" y="71" text-anchor="middle" fill="#374151" font-size="11">(1,3)=4</text>
  <text x="231" y="71" text-anchor="middle" fill="#374151" font-size="11">(1,4)=5</text>
  <text x="285" y="71" text-anchor="middle" fill="#374151" font-size="11">(1,5)=6</text>
  <text x="339" y="71" text-anchor="middle" fill="#b45309" font-weight="bold" font-size="11">(1,6)=7</text>

  <!-- Row 2 -->
  <rect x="42" y="87" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="96" y="87" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="150" y="87" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="204" y="87" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="258" y="87" width="54" height="42" fill="#78350f" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="312" y="87" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <text x="69"  y="113" text-anchor="middle" fill="#374151" font-size="11">(2,1)=3</text>
  <text x="123" y="113" text-anchor="middle" fill="#374151" font-size="11">(2,2)=4</text>
  <text x="177" y="113" text-anchor="middle" fill="#374151" font-size="11">(2,3)=5</text>
  <text x="231" y="113" text-anchor="middle" fill="#374151" font-size="11">(2,4)=6</text>
  <text x="285" y="113" text-anchor="middle" fill="#b45309" font-weight="bold" font-size="11">(2,5)=7</text>
  <text x="339" y="113" text-anchor="middle" fill="#374151" font-size="11">(2,6)=8</text>

  <!-- Row 3 -->
  <rect x="42" y="129" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="96" y="129" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="150" y="129" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="204" y="129" width="54" height="42" fill="#78350f" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="258" y="129" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="312" y="129" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <text x="69"  y="155" text-anchor="middle" fill="#374151" font-size="11">(3,1)=4</text>
  <text x="123" y="155" text-anchor="middle" fill="#374151" font-size="11">(3,2)=5</text>
  <text x="177" y="155" text-anchor="middle" fill="#374151" font-size="11">(3,3)=6</text>
  <text x="231" y="155" text-anchor="middle" fill="#b45309" font-weight="bold" font-size="11">(3,4)=7</text>
  <text x="285" y="155" text-anchor="middle" fill="#374151" font-size="11">(3,5)=8</text>
  <text x="339" y="155" text-anchor="middle" fill="#374151" font-size="11">(3,6)=9</text>

  <!-- Row 4 -->
  <rect x="42" y="171" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="96" y="171" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="150" y="171" width="54" height="42" fill="#78350f" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="204" y="171" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="258" y="171" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="312" y="171" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <text x="69"  y="197" text-anchor="middle" fill="#374151" font-size="11">(4,1)=5</text>
  <text x="123" y="197" text-anchor="middle" fill="#374151" font-size="11">(4,2)=6</text>
  <text x="177" y="197" text-anchor="middle" fill="#b45309" font-weight="bold" font-size="11">(4,3)=7</text>
  <text x="231" y="197" text-anchor="middle" fill="#374151" font-size="11">(4,4)=8</text>
  <text x="285" y="197" text-anchor="middle" fill="#374151" font-size="11">(4,5)=9</text>
  <text x="339" y="197" text-anchor="middle" fill="#374151" font-size="11">(4,6)=10</text>

  <!-- Row 5 -->
  <rect x="42" y="213" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="96" y="213" width="54" height="42" fill="#78350f" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="150" y="213" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="204" y="213" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="258" y="213" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="312" y="213" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <text x="69"  y="239" text-anchor="middle" fill="#374151" font-size="11">(5,1)=6</text>
  <text x="123" y="239" text-anchor="middle" fill="#b45309" font-weight="bold" font-size="11">(5,2)=7</text>
  <text x="177" y="239" text-anchor="middle" fill="#374151" font-size="11">(5,3)=8</text>
  <text x="231" y="239" text-anchor="middle" fill="#374151" font-size="11">(5,4)=9</text>
  <text x="285" y="239" text-anchor="middle" fill="#374151" font-size="11">(5,5)=10</text>
  <text x="339" y="239" text-anchor="middle" fill="#374151" font-size="11">(5,6)=11</text>

  <!-- Row 6 -->
  <rect x="42" y="255" width="54" height="42" fill="#78350f" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="96" y="255" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="150" y="255" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="204" y="255" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="258" y="255" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="312" y="255" width="54" height="42" fill="#1e293b" stroke="#e5e7eb" stroke-width="1"/>
  <text x="69"  y="281" text-anchor="middle" fill="#b45309" font-weight="bold" font-size="11">(6,1)=7</text>
  <text x="123" y="281" text-anchor="middle" fill="#374151" font-size="11">(6,2)=8</text>
  <text x="177" y="281" text-anchor="middle" fill="#374151" font-size="11">(6,3)=9</text>
  <text x="231" y="281" text-anchor="middle" fill="#374151" font-size="11">(6,4)=10</text>
  <text x="285" y="281" text-anchor="middle" fill="#374151" font-size="11">(6,5)=11</text>
  <text x="339" y="281" text-anchor="middle" fill="#374151" font-size="11">(6,6)=12</text>
</svg>`,
      },
    },
    {
      id: 'h-using',
      type: 'heading',
      data: { text: 'Reading Probabilities from the Diagram', level: 2 },
    },
    {
      id: 'p-using',
      type: 'paragraph',
      data: {
        text: 'The diagram above shows all 36 equally likely outcomes when two fair dice are rolled. The <b>amber cells</b> highlight where the sum equals 7. To find a probability: count the favourable cells, then divide by 36 (total outcomes).',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Sum of Two Dice',
        text: 'Two fair dice are rolled. Using the sample space diagram, find:<br>(a) P(sum = 7) &nbsp; (b) P(sum &gt; 10) &nbsp; (c) P(both dice show the same number)<br><br><b>Total outcomes = 6 × 6 = 36</b><br><br>(a) Cells with sum 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) → 6 cells<br><b>P(sum = 7) = 6/36 = 1/6</b><br><br>(b) Cells with sum &gt;10: (5,6),(6,5),(6,6) → 3 cells<br><b>P(sum &gt;10) = 3/36 = 1/12</b><br><br>(c) Cells with equal numbers (doubles): (1,1),(2,2),(3,3),(4,4),(5,5),(6,6) → 6 cells<br><b>P(doubles) = 6/36 = 1/6</b>',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Coin and Dice',
        text: 'A coin and a fair die are tossed/rolled together. List the sample space and find P(Head and even number).<br><br>Sample space: {H1, H2, H3, H4, H5, H6, T1, T2, T3, T4, T5, T6} → <b>12 outcomes</b><br><br>Favourable (Head AND even): {H2, H4, H6} → 3 outcomes<br><b>P(Head and even) = 3/12 = 1/4</b>',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When drawing a sample space table, always label the rows and columns clearly. The total number of cells in a two-event grid = (outcomes of event 1) × (outcomes of event 2).',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: '<b>Sample space = all possible outcomes.</b> For two events, draw a grid table. Total cells = n₁ × n₂. P(event) = favourable cells ÷ total cells. Highlight favourable outcomes in the grid to count them accurately.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Sample space diagrams list all outcomes in a grid; total outcomes = product of individual sample spaces; read P(event) = favourable ÷ total.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-sample-space',
        prompt: 'What is a sample space?',
        answer: 'The complete list of all possible outcomes of an experiment.',
      },
      {
        id: 'cue-2',
        blockId: 'svg-twodice',
        prompt: 'Two fair dice are rolled. How many outcomes are in the sample space?',
        answer: '6 × 6 = 36 equally likely outcomes.',
      },
      {
        id: 'cue-3',
        blockId: 'callout-we1',
        prompt: 'Two fair dice are rolled. What is P(sum = 7)?',
        answer: 'There are 6 ways to get a sum of 7, so P(sum = 7) = 6/36 = 1/6.',
      },
      {
        id: 'cue-4',
        blockId: 'callout-we1',
        prompt: 'Two fair dice are rolled. What is P(both dice show the same number)?',
        answer: 'There are 6 doubles: (1,1) to (6,6), so P(doubles) = 6/36 = 1/6.',
      },
      {
        id: 'cue-5',
        blockId: 'callout-we2',
        prompt: 'A coin and a die are thrown together. How many outcomes are in the sample space?',
        answer: '2 × 6 = 12 equally likely outcomes.',
      },
    ],
  },
  evidence: [],
  mentions: [],
};
