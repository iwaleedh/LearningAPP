export const note_olevel_physics_1_5_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-5-4-finding-centre-of-gravity.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the experimental method to find the centre of gravity of an irregular lamina using a plumb line; explain why this method works.' },
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Finding the Centre of Gravity Experimentally', level: 2 },
    },
    {
      id: 'para-intro',
      type: 'paragraph',
      data: { text: 'For irregular flat shapes (laminas), the centre of gravity cannot be found by symmetry. A <strong>plumb line</strong> experiment is used, based on the fact that a suspended object always hangs with its CoG directly below the pivot.' },
    },
    {
      id: 'svg-plumb',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="250" fill="#1c3a64" rx="10"/>
  <text x="220" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">Plumb Line Method — Finding the CoG</text>
  <!-- Step 1: first hole -->
  <rect x="20" y="35" width="185" height="190" fill="#1e293b" stroke="#e5e7eb" rx="6"/>
  <text x="112" y="52" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">Step 1 — Hang from hole A</text>
  <!-- Irregular shape -->
  <path d="M 55 80 Q 80 65 110 70 Q 140 60 160 80 Q 175 100 165 130 Q 155 155 130 165 Q 100 180 75 165 Q 50 145 55 115 Z" fill="#1e3a8a" stroke="#2563eb" stroke-width="2"/>
  <circle cx="105" cy="70" r="5" fill="#374151"/>
  <text x="112" y="72" font-size="10" fill="#374151">A</text>
  <!-- Plumb line from A -->
  <line x1="105" y1="70" x2="105" y2="200" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3"/>
  <circle cx="105" cy="200" r="8" fill="#ef4444" opacity="0.8"/>
  <text x="118" y="175" font-size="10" fill="#ef4444">Plumb line L1</text>
  <!-- Step 2: second hole -->
  <rect x="230" y="35" width="185" height="190" fill="#1e293b" stroke="#e5e7eb" rx="6"/>
  <text x="322" y="52" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">Step 2 — Hang from hole B</text>
  <!-- Same shape, slightly offset visually -->
  <path d="M 265 80 Q 290 65 320 70 Q 350 60 370 80 Q 385 100 375 130 Q 365 155 340 165 Q 310 180 285 165 Q 260 145 265 115 Z" fill="#1e3a8a" stroke="#2563eb" stroke-width="2"/>
  <circle cx="355" cy="75" r="5" fill="#374151"/>
  <text x="362" y="77" font-size="10" fill="#374151">B</text>
  <!-- Plumb line from B -->
  <line x1="355" y1="75" x2="285" y2="175" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,3"/>
  <!-- L1 still visible -->
  <line x1="315" y1="70" x2="315" y2="200" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3"/>
  <!-- Intersection = CoG -->
  <circle cx="315" cy="130" r="7" fill="#f59e0b"/>
  <text x="325" y="132" font-size="10" fill="#f59e0b" font-weight="bold">CoG</text>
  <text x="322" y="215" text-anchor="middle" font-size="10" fill="#374151">Intersection = CoG</text>
</svg>`,
        caption: 'Hang from hole A, draw plumb line L1. Hang from hole B, draw L2. Intersection = centre of gravity.',
      },
    },
    {
      id: 'h-steps',
      type: 'heading',
      data: { text: 'Step-by-Step Method', level: 2 },
    },
    {
      id: 'list-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Make three small holes near the edges of the irregular lamina (cardboard or thin plastic).' },
          { text: 'Suspend the lamina from hole A using a pin through a clamp stand, so it swings freely.' },
          { text: 'Hang a plumb line (string + small mass) from the same pin. When still, draw a line on the lamina along the plumb line.' },
          { text: 'Repeat steps 2–3 from hole B and from hole C, drawing a line each time.' },
          { text: 'The three lines all intersect at a single point — this is the <strong>centre of gravity</strong>.' },
          { text: 'Verify by balancing the lamina on a pencil point at this location — it should balance.' },
        ],
      },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why It Works',
        text: 'When a free object hangs from a pivot, it reaches equilibrium with the CoG <em>directly below</em> the pivot (gravitational torque is zero only in this position). The plumb line marks this vertical line. Two lines through the CoG intersect at the CoG.',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Third Line as Check',
        text: 'Always draw a third line (from hole C) as a check. If the three lines do not meet at a single point, there is an experimental error (e.g. the lamina was not free to swing, parallax error on the line). In exam questions, two lines are the minimum needed.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'To find CoG of irregular lamina: hang from 3 holes, each time drawing a plumb-line to mark the vertical through the pivot. The three lines intersect at the CoG. Works because the CoG hangs directly below any pivot at equilibrium.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Plumb line method: hang from 3 holes, draw vertical each time — intersection = CoG.',
    cues: [
      { id: 'cue-1', blockId: 'list-steps', prompt: 'Outline the steps to find the CoG of an irregular lamina using a plumb line.', answer: 'Make 3 holes. Hang from hole A with plumb line — draw line on lamina. Repeat from B and C. All three lines intersect at the CoG.' },
      { id: 'cue-2', blockId: 'call-key', prompt: 'Explain why a free-hanging object has its CoG directly below the pivot.', answer: 'At equilibrium, net torque = 0. The only position where gravity creates no torque about the pivot is when the CoG is directly below it — any other position creates a restoring moment.' },
      { id: 'cue-3', blockId: 'call-tip', prompt: 'Why is a third line drawn from a third hole in the plumb line experiment?', answer: 'As a check/verification — if the third line also passes through the same intersection point, the experiment is reliable. If not, there is an experimental error.' },
      { id: 'cue-4', blockId: 'para-intro', prompt: 'Why can\'t you find the CoG of an irregular shape by symmetry?', answer: 'Symmetry only works for regular shapes. Irregular shapes have uneven mass distribution, so the CoG is not at the geometric centre — it must be found experimentally.' },
    ],
  },
  evidence: [],
  mentions: [],
};
