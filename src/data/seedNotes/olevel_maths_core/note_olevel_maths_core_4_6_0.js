export const note_olevel_maths_core_4_6_0 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Measure and draw bearings; solve problems involving bearings including back-bearings and multi-step journeys.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'What is a Bearing?', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>bearing</strong> is a direction measured as an angle. Bearings follow three strict rules that must always be applied: (1) always measured <strong>clockwise</strong>, (2) always measured <strong>from North</strong>, and (3) always written as a <strong>three-figure number</strong> (e.g. 045°, not 45°; 090° not 90°).' }
    },
    {
      id: 'list-rules',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<strong>Start at North</strong> at the point you are measuring from.' },
          { text: '<strong>Rotate clockwise</strong> to the direction of travel (or to the target point).' },
          { text: '<strong>Write as three figures</strong>: 000° to 360°. Examples: North = 000°, East = 090°, South = 180°, West = 270°.' }
        ]
      }
    },
    {
      id: 'svg-compass',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 300" width="520" height="300">
  <style>
    text  { font-family: sans-serif; font-size: 12px; fill: #374151; }
    .lbl  { font-weight: 700; fill: #374151; font-size: 13px; }
    .bear { stroke: #ef4444; stroke-width: 2.5; }
    .north{ stroke: #374151; stroke-width: 1.5; stroke-dasharray: 4,3; }
    .arc  { fill: none; stroke: #ef4444; stroke-width: 1.5; }
    .deg  { font-weight: 700; fill: #ef4444; font-size: 13px; }
  </style>
  <!-- LEFT: Compass points at A -->
  <g transform="translate(110,150)">
    <!-- North arrow -->
    <line x1="0" y1="0" x2="0" y2="-80" class="north"/>
    <polygon points="0,-80 -5,-65 5,-65" fill="#374151"/>
    <text x="-5" y="-85" class="lbl">N</text>
    <!-- Other compass arms -->
    <line x1="0" y1="0" x2="80" y2="0" stroke="#9ca3af" stroke-width="1"/>
    <line x1="0" y1="0" x2="0" y2="80" stroke="#9ca3af" stroke-width="1"/>
    <line x1="0" y1="0" x2="-80" y2="0" stroke="#9ca3af" stroke-width="1"/>
    <text x="84" y="5" class="lbl">E 090°</text>
    <text x="-20" y="95" class="lbl">S 180°</text>
    <text x="-110" y="5" class="lbl">W 270°</text>
    <!-- Centre dot -->
    <circle cx="0" cy="0" r="4" fill="#374151"/>
    <text x="-15" y="18" font-size="11">A</text>
  </g>
  <!-- RIGHT: Example bearing 120° from B -->
  <g transform="translate(360,50)">
    <!-- North arm at B -->
    <line x1="0" y1="0" x2="0" y2="100" class="north"/>
    <line x1="0" y1="0" x2="0" y2="-20" class="north"/>
    <polygon points="0,-20 -4,-8 4,-8" fill="#374151"/>
    <text x="-5" y="-26" class="lbl">N</text>
    <text x="6" y="110" font-size="11">B</text>
    <!-- Centre -->
    <circle cx="0" cy="0" r="4" fill="#374151"/>
    <!-- Bearing line 120° (120° clockwise from North = SE direction) -->
    <!-- 120° from North clockwise: sin120=0.866, cos120=-0.5 (measured from y-axis downward) -->
    <!-- Direction vector: (sin(120°), cos(120°)) = (0.866, -0.5) but in SVG y-axis points down -->
    <!-- 120° clockwise from upward = 120° from "up" direction = pointing SE -->
    <!-- In SVG coords: x = r*sin(120°) = 86.6, y = r*cos(120°) = r*0.5 = 50 -->
    <line x1="0" y1="0" x2="87" y2="100" class="bear"/>
    <polygon points="87,100 79,87 91,85" fill="#ef4444"/>
    <text x="93" y="108" fill="#9333ea" font-weight="700">C</text>
    <!-- Arc showing 120° -->
    <path d="M 0 -35 A 35 35 0 0 1 30.3 17.5" class="arc"/>
    <text x="32" y="-5" class="deg">120°</text>
    <text x="-5" y="165" fill="#374151" font-size="11">Bearing of C from B = 120°</text>
  </g>
  <text x="10" y="285" fill="#374151" font-size="11">Always: start at North, rotate clockwise, write 3 digits (e.g. 045° not 45°)</text>
</svg>`,
        caption: 'Left: four main compass bearings. Right: bearing of C from B is 120° (measured clockwise from North at B)'
      }
    },
    {
      id: 'h-reading',
      type: 'heading',
      data: { text: '"Bearing of B from A" — Wording', level: 2 }
    },
    {
      id: 'p-reading',
      type: 'paragraph',
      data: { text: 'The phrase <strong>"bearing of B from A"</strong> means: stand at point A, face North, then rotate clockwise until you are facing B. That angle is the bearing. The <strong>from</strong> tells you where to stand, and you look towards the other point.' }
    },
    {
      id: 'h-back',
      type: 'heading',
      data: { text: 'Back-Bearings (Reverse Bearings)', level: 2 }
    },
    {
      id: 'p-back',
      type: 'paragraph',
      data: { text: 'The <strong>back-bearing</strong> (or return bearing) is the bearing from B back to A. Because the North lines at A and B are parallel (they both point North), the back-bearing differs from the original bearing by <strong>exactly 180°</strong>. This is because the two North lines are parallel so alternate/co-interior angles apply.' }
    },
    {
      id: 'list-back',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'If bearing of B from A < 180°: &nbsp;<strong>back-bearing = bearing + 180°</strong>' },
          { text: 'If bearing of B from A ≥ 180°: &nbsp;<strong>back-bearing = bearing − 180°</strong>' },
          { text: 'Rule of thumb: <em>add or subtract 180°</em>, keeping the result in the range 000°–360°' }
        ]
      }
    },
    {
      id: 'comparisonTable-bearings',
      type: 'comparisonTable',
      data: {
        caption: 'Common bearings and their back-bearings',
        headers: ['Direction', 'Bearing from A', 'Back-bearing from B to A'],
        rows: [
          ['North', '000°', '180°'],
          ['North-East', '045°', '225°'],
          ['East', '090°', '270°'],
          ['South-East', '135°', '315°'],
          ['South', '180°', '000°'],
          ['South-West', '225°', '045°'],
          ['West', '270°', '090°'],
          ['North-West', '315°', '135°']
        ]
      }
    },
    {
      id: 'h-drawing',
      type: 'heading',
      data: { text: 'Drawing Bearings', level: 2 }
    },
    {
      id: 'list-drawing',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Mark the starting point (e.g. A) and draw a North arrow at A pointing straight up.' },
          { text: 'Place the protractor with its centre at A, baseline along the North arrow.' },
          { text: 'Measure the required bearing <strong>clockwise</strong> from North and mark the angle.' },
          { text: 'Draw a ray or line from A in the direction of the marked angle.' },
          { text: 'Label the endpoint (e.g. B) at the required distance if given.' }
        ]
      }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Examples',
        text: '<strong>Example 1 — Back-bearing:</strong><br>The bearing of B from A is 072°. Find the bearing of A from B.<br>072° &lt; 180°, so add 180°: 072° + 180° = <strong>252°</strong><br><br><strong>Example 2 — Multi-step:</strong><br>A ship sails 50 km on a bearing of 040°, then 30 km on a bearing of 130°. Find the bearing to return to the start.<br>Step 1: Draw sketch with North at each point.<br>Step 2: Use the sine and cosine rules (or component method) to find the resultant displacement.<br>Step 3: Find the bearing of the resultant direction and add 180° for return.<br><em>(Full scale drawing or trigonometry will give the answer.)</em><br><br><strong>Example 3 — Reading from diagram:</strong><br>North arrow at P, angle measured clockwise to Q is 305°. Write the bearing of Q from P.<br>Answer: <strong>305°</strong> (already three figures)'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Rules — Bearings',
        text: '1. <strong>Always from North</strong> (pointing up)<br>2. <strong>Always clockwise</strong><br>3. <strong>Always three digits</strong> (045°, not 45°)<br>4. <strong>Back-bearing = original ± 180°</strong> (add if bearing &lt; 180°, subtract if ≥ 180°)<br>5. N = 000°, E = 090°, S = 180°, W = 270°'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• Always draw a <strong>North arrow</strong> at every relevant point — not just the starting point. Missing North arrows lead to wrong angles.<br>• When finding the bearing of A from B, the North at B is a <em>different</em> North line from the one at A — but they are parallel, so back-bearing = original ± 180°.<br>• Write "from" carefully: "bearing of B from A" = stand at A, face North, turn clockwise to B.'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Bearings: measured clockwise from North, written as three figures (000°–360°). N=000°, E=090°, S=180°, W=270°. "Bearing of B from A" — stand at A, rotate clockwise to B. Back-bearing = original ± 180° (add if < 180°, subtract if ≥ 180°).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Bearings: clockwise from North, 3 figures (045°). Back-bearing = original ± 180°. N=000°, E=090°, S=180°, W=270°.',
    cues: [
      { id: 'cue-1', blockId: 'list-rules', prompt: 'State the three rules that MUST always be followed when writing a bearing.' },
      { id: 'cue-2', blockId: 'p-reading', prompt: 'Explain what "bearing of B from A" means in plain terms.' },
      { id: 'cue-3', blockId: 'list-back', prompt: 'The bearing of B from A is 115°. What is the bearing of A from B?' },
      { id: 'cue-4', blockId: 'list-back', prompt: 'The bearing of Q from P is 280°. What is the bearing of P from Q?' },
      { id: 'cue-5', blockId: 'comparisonTable-bearings', prompt: 'What are the bearings for North, East, South, and West?' },
      { id: 'cue-6', blockId: 'list-drawing', prompt: 'List the steps for drawing a given bearing on a diagram.' }
    ]
  },
  evidence: []
};
