export const note_olevel_physics_1_7_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-7-3-gravitational-potential-energy.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Recall and apply the equation GPE = mgh; describe the conversion between gravitational potential energy and kinetic energy; solve problems involving falling objects.' },
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'Gravitational Potential Energy (GPE)', level: 2 },
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'Gravitational potential energy is stored by objects due to their <strong>height in a gravitational field</strong>. Lifting an object does work against gravity, increasing its GPE. This energy is released when the object falls.' },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'GPE Formula',
        text: 'GPE = mgh<br><br>GPE = gravitational potential energy (J)<br>m = mass (kg)<br>g = gravitational field strength (N/kg) = <strong>10 N/kg on Earth</strong><br>h = height above reference level (m)',
      },
    },
    {
      id: 'eq-gpe',
      type: 'equation',
      data: {
        html: 'GPE = mgh',
        caption: 'GPE in joules; g = 10 N/kg near Earth\'s surface',
      },
    },
    {
      id: 'h-convert',
      type: 'heading',
      data: { text: 'GPE ↔ KE Conversion', level: 2 },
    },
    {
      id: 'p-convert',
      type: 'paragraph',
      data: { text: 'When an object falls freely (no friction/air resistance), all its GPE converts to KE. You can use conservation of energy to find the speed at any height by setting GPE lost = KE gained.' },
    },
    {
      id: 'svg-gpe',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 380 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="380" height="230" fill="#0a2e1a" rx="10"/>
  <text x="190" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#14532d">GPE → KE: Roller Coaster</text>
  <!-- Track -->
  <path d="M30,60 Q100,60 130,150 Q160,200 200,200 Q250,200 280,130 Q310,80 350,80" stroke="#94a3b8" stroke-width="3" fill="none"/>
  <!-- Ground -->
  <line x1="0" y1="210" x2="380" y2="210" stroke="#6b7280" stroke-width="2" stroke-dasharray="6,4"/>
  <!-- Cart at top left -->
  <rect x="20" y="42" width="28" height="16" rx="3" fill="#6366f1"/>
  <circle cx="26" cy="59" r="4" fill="#374151"/>
  <circle cx="42" cy="59" r="4" fill="#374151"/>
  <text x="34" y="34" text-anchor="middle" font-size="9" fill="#6366f1">h = 20 m</text>
  <line x1="34" y1="57" x2="34" y2="207" stroke="#6366f1" stroke-dasharray="4,3" stroke-width="1.5"/>
  <text x="48" y="135" font-size="9" fill="#16a34a">GPE = mgh</text>
  <text x="48" y="145" font-size="9" fill="#2563eb">KE = 0</text>
  <!-- Cart at bottom -->
  <rect x="184" y="184" width="28" height="16" rx="3" fill="#065f46"/>
  <circle cx="190" cy="201" r="4" fill="#374151"/>
  <circle cx="206" cy="201" r="4" fill="#374151"/>
  <text x="198" y="178" text-anchor="middle" font-size="9" fill="#16a34a">h = 0</text>
  <text x="215" y="196" font-size="9" fill="#16a34a">GPE = 0</text>
  <text x="215" y="206" font-size="9" fill="#2563eb">KE = mgh</text>
  <!-- Arrow -->
  <path d="M80,70 Q140,80 190,190" stroke="#f59e0b" stroke-width="2" fill="none"/>
  <polygon points="188,192 186,180 195,184" fill="#f59e0b"/>
  <text x="110" y="118" font-size="10" fill="#f59e0b" font-weight="bold">GPE → KE</text>
</svg>`,
        caption: 'All GPE at the top converts to KE at the bottom (frictionless track).',
      },
    },
    {
      id: 'call-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 1: Calculate GPE',
        text: 'A 2 kg book is placed on a shelf 1.5 m high. Calculate the GPE gained.<br><br>GPE = mgh = 2 × 10 × 1.5 = <strong>30 J</strong>',
      },
    },
    {
      id: 'call-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 2: Convert GPE to KE to find speed',
        text: 'A 0.5 kg ball is dropped from a height of 5 m. Find its speed just before hitting the ground (ignore air resistance).<br><br>GPE lost = mgh = 0.5 × 10 × 5 = 25 J<br>KE gained = 25 J<br>½mv² = 25 → v² = 25 ÷ 0.25 = 100<br>v = <strong>10 m/s</strong>',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Reference Level',
        text: 'GPE is always measured <em>relative</em> to a chosen reference height (usually the lowest point = h = 0). Only the <em>change</em> in height matters, not where you set the reference.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'GPE = mgh. g = 10 N/kg on Earth. GPE increases when objects rise; decreases when they fall. In free fall (no friction), GPE lost = KE gained, allowing speed at any height to be calculated from conservation of energy.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'GPE = mgh. Free fall: all GPE converts to KE. Energy conserved when no friction.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'Write the equation for gravitational potential energy and state what each symbol means.', answer: 'GPE = mgh. GPE = gravitational potential energy (J), m = mass (kg), g = gravitational field strength (10 N/kg on Earth), h = height (m).' },
      { id: 'cue-2', blockId: 'call-we1', prompt: 'A 2 kg book is placed on a shelf 1.5 m high. Calculate the GPE gained.', answer: 'GPE = mgh = 2 × 10 × 1.5 = 30 J.' },
      { id: 'cue-3', blockId: 'svg-gpe', prompt: 'Describe the energy changes as a roller coaster moves from the top of a hill to the bottom (frictionless).', answer: 'At the top, the cart has maximum GPE and zero KE. As it descends, GPE converts to KE. At the bottom, GPE = 0 and KE is maximum. Total mechanical energy is conserved.' },
      { id: 'cue-4', blockId: 'call-we2', prompt: 'A 0.5 kg ball is dropped from 5 m. Find its speed just before hitting the ground.', answer: 'GPE lost = 0.5 × 10 × 5 = 25 J = KE gained. ½ × 0.5 × v² = 25, so v² = 100, v = 10 m/s.' },
    ],
  },
  evidence: [],
  mentions: [],
};
