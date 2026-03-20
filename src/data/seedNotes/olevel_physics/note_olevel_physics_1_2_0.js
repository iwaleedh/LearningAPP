export const note_olevel_physics_1_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-2-1-speed-and-velocity.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define speed and velocity; calculate average speed using speed = distance/time; distinguish between average and instantaneous speed; convert between m/s and km/h.' },
    },
    {
      id: 'h-speed-def',
      type: 'heading',
      data: { text: 'Speed', level: 2 },
    },
    {
      id: 'para-speed',
      type: 'paragraph',
      data: { text: '<strong>Speed</strong> is a <em>scalar</em> quantity — it tells you how fast an object is moving but not the direction. The SI unit of speed is <strong>metres per second (m/s)</strong>. Speed is calculated by dividing the distance travelled by the time taken.' },
    },
    {
      id: 'eq-speed',
      type: 'equation',
      data: {
        html: 'speed = <span class="nb-frac"><span class="nb-num">distance</span><span class="nb-den">time</span></span>',
        caption: 'v = d / t, where v is in m/s, d in metres, t in seconds',
      },
    },
    {
      id: 'call-key-speed',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Average vs Instantaneous Speed',
        text: '<strong>Average speed</strong> = total distance ÷ total time for a journey. It does not tell you how fast you were going at any single moment.<br><strong>Instantaneous speed</strong> = speed at one particular instant (what a car speedometer shows). It can be estimated by measuring distance over a very short time interval.',
      },
    },
    {
      id: 'h-velocity',
      type: 'heading',
      data: { text: 'Velocity', level: 2 },
    },
    {
      id: 'para-velocity',
      type: 'paragraph',
      data: { text: '<strong>Velocity</strong> is a <em>vector</em> quantity — it is speed in a specified direction. Two objects can have the same speed but different velocities if they are moving in different directions. For example, a car going north at 20 m/s and a car going south at 20 m/s have the same speed but opposite velocities.' },
    },
    {
      id: 'eq-velocity',
      type: 'equation',
      data: {
        html: 'velocity = <span class="nb-frac"><span class="nb-num">displacement</span><span class="nb-den">time</span></span>',
        caption: 'v = s / t, where s is displacement (m) and t is time (s)',
      },
    },
    {
      id: 'tbl-sv',
      type: 'comparisonTable',
      data: {
        caption: 'Speed vs Velocity',
        headers: ['Feature', 'Speed', 'Velocity'],
        rows: [
          ['Type', 'Scalar', 'Vector'],
          ['Definition', 'Distance per unit time', 'Displacement per unit time'],
          ['Includes direction?', 'No', 'Yes'],
          ['Example', '30 m/s', '30 m/s northward'],
          ['Unit', 'm/s', 'm/s (with direction)'],
        ],
      },
    },
    {
      id: 'h-convert',
      type: 'heading',
      data: { text: 'Converting Units: m/s ↔ km/h', level: 2 },
    },
    {
      id: 'para-convert',
      type: 'paragraph',
      data: { text: 'To convert from <strong>km/h to m/s</strong>: divide by 3.6 (since 1 km = 1000 m and 1 hour = 3600 s). To convert from <strong>m/s to km/h</strong>: multiply by 3.6.' },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: '<strong>Q:</strong> A car travels 150 m in 10 s. What is its average speed? If it then travels at 72 km/h, convert this to m/s.<br><br><strong>A1:</strong> speed = 150 ÷ 10 = <strong>15 m/s</strong><br><strong>A2:</strong> 72 km/h ÷ 3.6 = <strong>20 m/s</strong>',
      },
    },
    {
      id: 'svg-speed',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="400" height="200" fill="#1c3a64" rx="10"/>
  <text x="200" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a5f">Speed Triangle</text>
  <!-- Triangle -->
  <polygon points="200,45 100,155 300,155" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <!-- Labels inside segments -->
  <text x="200" y="90" text-anchor="middle" font-size="18" font-weight="bold" fill="#1d4ed8">v</text>
  <text x="150" y="150" text-anchor="middle" font-size="15" font-weight="bold" fill="#15803d">d</text>
  <text x="250" y="150" text-anchor="middle" font-size="15" font-weight="bold" fill="#b91c1c">t</text>
  <!-- dividing lines -->
  <line x1="200" y1="155" x2="200" y2="115" stroke="#3b82f6" stroke-width="1.5"/>
  <line x1="130" y1="130" x2="270" y2="130" stroke="#3b82f6" stroke-width="1.5"/>
  <!-- Formula hints below -->
  <text x="200" y="178" text-anchor="middle" font-size="12" fill="#374151">Cover the unknown: v = d÷t, d = v×t, t = d÷v</text>
</svg>`,
        caption: 'Speed triangle: cover the unknown quantity to find the formula',
      },
    },
    {
      id: 'call-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always check units! If distance is in km and time is in hours, the speed is in km/h. Convert to m and s if the answer should be in m/s. Divide km/h by 3.6 to get m/s.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Speed (scalar) = distance ÷ time (m/s). Velocity (vector) = displacement ÷ time with direction. Average speed covers a whole journey; instantaneous speed is at one moment. Convert km/h → m/s by dividing by 3.6.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Speed = distance/time (scalar); velocity = displacement/time (vector, includes direction).',
    cues: [
      { id: 'cue-1', blockId: 'eq-speed', prompt: 'Write the equation for speed and state its unit.', answer: 'speed = distance ÷ time; unit is m/s (metres per second).' },
      { id: 'cue-2', blockId: 'tbl-sv', prompt: 'How does velocity differ from speed?', answer: 'Velocity is a vector (has direction); speed is a scalar. Velocity = displacement ÷ time; speed = distance ÷ time.' },
      { id: 'cue-3', blockId: 'call-key-speed', prompt: 'Distinguish between average speed and instantaneous speed.', answer: 'Average speed = total distance ÷ total time for a journey. Instantaneous speed = speed at one particular moment.' },
      { id: 'cue-4', blockId: 'para-convert', prompt: 'A car travels at 90 km/h. What is this in m/s?', answer: '90 ÷ 3.6 = 25 m/s.' },
    ],
  },
  evidence: [],
  mentions: [],
};
