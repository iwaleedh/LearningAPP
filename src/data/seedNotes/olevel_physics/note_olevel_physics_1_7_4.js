export const note_olevel_physics_1_7_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-7-5-work-done.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define work done; recall and apply W = Fd; understand the joule as a unit; relate work done to energy transferred.' },
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'What is Work Done?', level: 2 },
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'Work is done when a <strong>force causes an object to move</strong>. Work done measures the energy transferred by a force. If an object does not move, no work is done — even if a force is applied.' },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Work Done Formula',
        text: 'W = Fd<br><br>W = work done (J)<br>F = force (N)<br>d = distance moved <strong>in the direction of the force</strong> (m)<br><br>1 joule = 1 newton × 1 metre (1 J = 1 N m)',
      },
    },
    {
      id: 'eq-work',
      type: 'equation',
      data: {
        html: 'W = Fd',
        caption: 'Work done (J) = force (N) × distance moved in direction of force (m)',
      },
    },
    {
      id: 'h-lifting',
      type: 'heading',
      data: { text: 'Work Done Against Gravity', level: 2 },
    },
    {
      id: 'p-lifting',
      type: 'paragraph',
      data: { text: 'When lifting an object, the force needed equals the object\'s weight (F = mg). The work done equals the gain in GPE:' },
    },
    {
      id: 'eq-lift',
      type: 'equation',
      data: {
        html: 'W = Fd = mgh = ΔG PE',
        caption: 'Work done against gravity equals the gain in gravitational potential energy',
      },
    },
    {
      id: 'svg-work',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="380" height="210" fill="#fff7ed" rx="10"/>
  <text x="190" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#7c2d12">Work Done by a Force</text>
  <!-- Ground -->
  <line x1="20" y1="170" x2="360" y2="170" stroke="#6b7280" stroke-width="2"/>
  <!-- Box being pushed -->
  <rect x="50" y="130" width="60" height="40" rx="4" fill="#6366f1" opacity="0.85"/>
  <text x="80" y="154" text-anchor="middle" font-size="11" fill="white">Box</text>
  <!-- Arrow for force -->
  <line x1="110" y1="150" x2="200" y2="150" stroke="#dc2626" stroke-width="2.5"/>
  <polygon points="200,150 190,145 190,155" fill="#dc2626"/>
  <text x="155" y="143" text-anchor="middle" font-size="10" fill="#dc2626">F = 50 N</text>
  <!-- Distance arrow -->
  <line x1="80" y1="183" x2="270" y2="183" stroke="#2563eb" stroke-width="1.5"/>
  <polygon points="270,183 262,179 262,187" fill="#2563eb"/>
  <polygon points="80,183 88,179 88,187" fill="#2563eb"/>
  <text x="175" y="197" text-anchor="middle" font-size="10" fill="#2563eb">d = 4 m</text>
  <!-- Box moved position -->
  <rect x="230" y="130" width="60" height="40" rx="4" fill="#6366f1" opacity="0.4"/>
  <text x="260" y="154" text-anchor="middle" font-size="11" fill="#374151">Box</text>
  <!-- Work calc -->
  <text x="190" y="50" text-anchor="middle" font-size="12" fill="#374151">W = Fd = 50 × 4</text>
  <text x="190" y="68" text-anchor="middle" font-size="13" font-weight="bold" fill="#16a34a">W = 200 J</text>
  <!-- Lifting example -->
  <rect x="310" y="140" width="40" height="30" rx="3" fill="#f59e0b" opacity="0.9"/>
  <text x="330" y="159" text-anchor="middle" font-size="9" fill="white">2 kg</text>
  <line x1="330" y1="140" x2="330" y2="80" stroke="#dc2626" stroke-width="2"/>
  <polygon points="330,80 326,90 334,90" fill="#dc2626"/>
  <text x="350" y="113" font-size="9" fill="#dc2626">F = 20 N</text>
  <line x1="298" y1="140" x2="298" y2="80" stroke="#2563eb" stroke-width="1.5"/>
  <polygon points="298,80 295,89 301,89" fill="#2563eb"/>
  <polygon points="298,140 295,131 301,131" fill="#2563eb"/>
  <text x="275" y="112" font-size="9" fill="#2563eb">h = 3 m</text>
  <text x="330" y="70" text-anchor="middle" font-size="9" fill="#16a34a">W = 60 J</text>
</svg>`,
        caption: 'Left: pushing a box 4 m with 50 N → W = 200 J. Right: lifting 2 kg by 3 m → W = 20 × 3 = 60 J.',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Force Must Be in Direction of Motion',
        text: 'Work is only done by the <em>component of force in the direction of motion</em>. Carrying a bag horizontally — the upward force does no work. Only the horizontal push does work. (For IGCSE, however, you simply use perpendicular distance in moment problems — do not confuse this with work done.)',
      },
    },
    {
      id: 'call-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Pulling a suitcase',
        text: 'A person pulls a 30 kg suitcase with a force of 80 N over a distance of 25 m. Calculate the work done.<br><br>W = Fd = 80 × 25 = <strong>2000 J = 2 kJ</strong>',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Work done W = Fd. Force in N, distance in m, work in joules (J). 1 J = energy transferred when 1 N moves 1 m. Work done against gravity = gain in GPE = mgh. No motion = no work done.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'W = Fd. No motion → no work. Lifting: W = mgh. 1 J = 1 N × 1 m.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'State the equation for work done and explain what each symbol represents.', answer: 'W = Fd. W = work done (J), F = force (N), d = distance moved in the direction of the force (m). 1 joule = 1 N × 1 m.' },
      { id: 'cue-2', blockId: 'svg-work', prompt: 'A force of 50 N pushes a box 4 m along the ground. Calculate the work done.', answer: 'W = Fd = 50 × 4 = 200 J.' },
      { id: 'cue-3', blockId: 'eq-lift', prompt: 'Show how work done against gravity links to GPE using equations.', answer: 'Work done = F × d = mg × h = mgh = change in GPE. So W = mgh — work done lifting equals the gain in gravitational potential energy.' },
      { id: 'cue-4', blockId: 'call-we1', prompt: 'A person pulls a suitcase with 80 N over 25 m. Calculate the work done.', answer: 'W = Fd = 80 × 25 = 2000 J = 2 kJ.' },
    ],
  },
  evidence: [],
  mentions: [],
};
