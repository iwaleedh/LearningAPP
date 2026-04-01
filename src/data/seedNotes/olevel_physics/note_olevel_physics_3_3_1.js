export const note_olevel_physics_3_3_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-3-2-speed-of-sound.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe and apply the echo method to measure the speed of sound. Describe the two-microphone and oscilloscope method. Perform calculations using v = 2d / t.' },
    },
    {
      id: 'h-echo',
      type: 'heading',
      data: { text: 'Echo Method', level: 2 },
    },
    {
      id: 'para-echo',
      type: 'paragraph',
      data: { text: 'An <strong>echo</strong> is a reflected sound. By timing how long a sound takes to travel to a reflective surface and return, the speed of sound can be calculated. Since the sound covers twice the distance d to the wall in time t:' },
    },
    {
      id: 'eq-echo',
      type: 'equation',
      data: {
        html: 'v = <span class="nb-frac"><span class="nb-num">2d</span><span class="nb-den">t</span></span>',
        caption: 'speed = (2 × distance to wall) ÷ time for echo to return',
      },
    },
    {
      id: 'svg-echo',
      type: 'svg',
      data: {
        caption: 'Echo method: sound travels to a wall and reflects back; total distance = 2d',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 180" width="480" height="180">
  <style>text{font-family:Arial,sans-serif;font-size:12px;fill:#1e293b;}</style>
  <defs>
    <marker id="ahE" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0,8 3,0 6" fill="#3b82f6"/>
    </marker>
    <marker id="ahEr" markerWidth="8" markerHeight="6" refX="1" refY="3" orient="auto">
      <polygon points="8 0,0 3,8 6" fill="#10b981"/>
    </marker>
  </defs>
  <!-- Person / sound source -->
  <circle cx="70" cy="75" r="12" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
  <line x1="70" y1="87" x2="70" y2="120" stroke="#64748b" stroke-width="1.5"/>
  <line x1="70" y1="100" x2="50" y2="115" stroke="#64748b" stroke-width="1.5"/>
  <line x1="70" y1="100" x2="90" y2="115" stroke="#64748b" stroke-width="1.5"/>
  <line x1="70" y1="120" x2="55" y2="140" stroke="#64748b" stroke-width="1.5"/>
  <line x1="70" y1="120" x2="85" y2="140" stroke="#64748b" stroke-width="1.5"/>
  <!-- Wall -->
  <rect x="390" y="40" width="20" height="120" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="390" y1="50" x2="410" y2="65" stroke="#94a3b8" stroke-width="1"/>
  <line x1="390" y1="70" x2="410" y2="85" stroke="#94a3b8" stroke-width="1"/>
  <line x1="390" y1="90" x2="410" y2="105" stroke="#94a3b8" stroke-width="1"/>
  <line x1="390" y1="110" x2="410" y2="125" stroke="#94a3b8" stroke-width="1"/>
  <line x1="390" y1="130" x2="410" y2="145" stroke="#94a3b8" stroke-width="1"/>
  <text x="400" y="175" text-anchor="middle" fill="#64748b">Wall</text>
  <!-- Outgoing sound ray -->
  <line x1="84" y1="90" x2="385" y2="90" stroke="#3b82f6" stroke-width="2" marker-end="url(#ahE)" stroke-dasharray="8 4"/>
  <text x="230" y="82" text-anchor="middle" fill="#3b82f6">sound pulse →</text>
  <!-- Returning echo -->
  <line x1="385" y1="105" x2="84" y2="105" stroke="#10b981" stroke-width="2" marker-end="url(#ahEr)" stroke-dasharray="8 4"/>
  <text x="230" y="122" text-anchor="middle" fill="#10b981">← echo returns</text>
  <!-- Distance label -->
  <line x1="82" y1="155" x2="388" y2="155" stroke="#64748b" stroke-width="1"/>
  <line x1="82" y1="150" x2="82" y2="160" stroke="#64748b"/>
  <line x1="388" y1="150" x2="388" y2="160" stroke="#64748b"/>
  <text x="235" y="170" text-anchor="middle" fill="#64748b">d (distance to wall)</text>
  <!-- Stop watch -->
  <text x="70" y="165" text-anchor="middle" fill="#1e293b" font-size="11">🕐 Timer</text>
</svg>`,
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Echo Method',
        text: 'A student stands 170 m from a cliff and claps. She hears an echo 1.0 s later. Calculate the speed of sound.\n\nv = 2d / t = (2 × 170) / 1.0 = 340 / 1.0 = 340 m/s',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Find distance',
        text: 'An echo returns after 0.6 s. The speed of sound is 340 m/s. How far away is the reflecting surface?\n\nv = 2d/t → d = vt/2 = 340 × 0.6 / 2 = 102 m',
      },
    },
    {
      id: 'h-practical',
      type: 'heading',
      data: { text: 'Two-Microphone and Oscilloscope Method', level: 2 },
    },
    {
      id: 'para-practical',
      type: 'paragraph',
      data: { text: 'In the laboratory, a more accurate method uses <strong>two microphones</strong> connected to an oscilloscope (or data logger). A sharp sound (e.g. clap) is made and both microphones detect it.' },
    },
    {
      id: 'list-practical',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Measure the distance d between the two microphones with a ruler' },
          { text: 'Make a sharp sound near microphone 1' },
          { text: 'The oscilloscope shows two pulses — the time difference t between them is the time for sound to travel from microphone 1 to microphone 2' },
          { text: 'Calculate: v = d / t' },
        ],
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Improving Accuracy in Echo Method',
        text: '• Clap boards together rather than hands — gives a sharper, cleaner sound\n• Use a large distance to the wall (> 50 m) to reduce timing errors\n• Use an electronic timer or data logger instead of a stopwatch\n• Repeat and average to reduce random error',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Speed of sound can be measured using echoes: v = 2d/t. Alternative lab method: two microphones + timer/oscilloscope → v = d/t between microphones. Speed of sound in air ≈ 340 m/s at room temperature (increases with temperature).' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Echo: v = 2d/t. Two microphones: v = d/t. Speed of sound in air ≈ 340 m/s.',
    cues: [
      { id: 'cue-1', blockId: 'eq-echo', prompt: 'State the formula for the echo method and explain the factor of 2.', answer: 'v = 2d/t. The factor of 2 is because the sound travels from the person to the wall and back again — a total distance of 2d in time t.' },
      { id: 'cue-2', blockId: 'callout-we1', prompt: 'A student hears an echo 0.5 s after clapping. If the wall is 85 m away, what is the speed of sound?', answer: 'v = 2d/t = 2 × 85 / 0.5 = 170 / 0.5 = 340 m/s.' },
      { id: 'cue-3', blockId: 'list-practical', prompt: 'Describe the two-microphone method for finding the speed of sound.', answer: 'Two microphones separated by a measured distance d are connected to an oscilloscope. A sharp sound is made; the oscilloscope shows the time delay t between signals at each microphone. Speed = d/t.' },
      { id: 'cue-4', blockId: 'callout-tip1', prompt: 'Give two ways to improve accuracy in the echo experiment.', answer: 'Use a large distance to the wall (reduces % timing error); use an electronic timer instead of a stopwatch; clap boards (gives a sharper sound); repeat and average.' },
    ],
  },
  evidence: [],
  mentions: [],
};
