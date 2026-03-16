export const note_olevel_physics_4_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-1-1-static-electricity.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand how static electricity is produced, describe electric fields, and explain practical applications and hazards of static charge.' },
    },
    {
      id: 'h-static',
      type: 'heading',
      data: { text: 'Static Electricity', level: 2 },
    },
    {
      id: 'para-intro',
      type: 'paragraph',
      data: {
        text: 'Static electricity arises when <strong>electrons are transferred</strong> between two objects by friction. Objects become charged because electrons (which are negative) move; protons remain fixed in nuclei and do not transfer.',
      },
    },
    {
      id: 'call-key-charge',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Fundamental Rule of Charge',
        text: '<strong>Like charges repel; unlike charges attract.</strong> A positively charged rod repels another positive rod but attracts a negatively charged rod.',
      },
    },
    {
      id: 'h-friction',
      type: 'heading',
      data: { text: 'Charging by Friction', level: 3 },
    },
    {
      id: 'para-friction',
      type: 'paragraph',
      data: {
        text: 'When a polythene rod is rubbed with a cloth, electrons transfer from the cloth <em>to</em> the rod — the rod becomes <strong>negatively charged</strong>, the cloth becomes positively charged. When an acetate rod is rubbed, electrons transfer from the rod to the cloth — the rod becomes <strong>positively charged</strong>.',
      },
    },
    {
      id: 'list-friction',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Only <strong>electrons</strong> are transferred during charging — never protons.' },
          { text: 'The object that <em>gains</em> electrons becomes negatively charged.' },
          { text: 'The object that <em>loses</em> electrons becomes positively charged.' },
          { text: 'Total charge is conserved: charge gained = charge lost.' },
        ],
      },
    },
    {
      id: 'h-induction',
      type: 'heading',
      data: { text: 'Charging by Induction', level: 3 },
    },
    {
      id: 'para-induction',
      type: 'paragraph',
      data: {
        text: 'An object can be charged <strong>without contact</strong> using induction. A charged rod brought near a conductor repels like charges to the far end; if the conductor is then earthed (or split), one part retains an opposite charge. The charged rod does not lose charge in this process.',
      },
    },
    {
      id: 'svg-charges',
      type: 'svg',
      data: {
        caption: 'Like charges repel (top); unlike charges attract (bottom)',
        svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="13">
  <!-- Two positive charges repelling -->
  <rect x="20" y="30" width="60" height="30" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="50" y="50" text-anchor="middle" fill="#ef4444" font-weight="bold">+ +</text>
  <rect x="120" y="30" width="60" height="30" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="150" y="50" text-anchor="middle" fill="#ef4444" font-weight="bold">+ +</text>
  <!-- Repulsion arrows -->
  <line x1="80" y1="45" x2="115" y2="45" stroke="#ef4444" stroke-width="2" marker-end="url(#arr-r)"/>
  <line x1="120" y1="45" x2="85" y2="45" stroke="#ef4444" stroke-width="2" marker-end="url(#arr-r)"/>
  <text x="100" y="82" text-anchor="middle" fill="#ef4444" font-size="12">REPEL</text>

  <!-- Unlike charges attracting -->
  <rect x="20" y="120" width="60" height="30" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="50" y="140" text-anchor="middle" fill="#ef4444" font-weight="bold">+ +</text>
  <rect x="120" y="120" width="60" height="30" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="150" y="140" text-anchor="middle" fill="#3b82f6" font-weight="bold">− −</text>
  <!-- Attraction arrows -->
  <line x1="80" y1="135" x2="118" y2="135" stroke="#6366f1" stroke-width="2" marker-end="url(#arr-a)"/>
  <line x1="120" y1="135" x2="82" y2="135" stroke="#6366f1" stroke-width="2" marker-end="url(#arr-a)"/>
  <text x="100" y="172" text-anchor="middle" fill="#6366f1" font-size="12">ATTRACT</text>

  <defs>
    <marker id="arr-r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#ef4444"/>
    </marker>
    <marker id="arr-a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#6366f1"/>
    </marker>
  </defs>
</svg>`,
      },
    },
    {
      id: 'h-applications',
      type: 'heading',
      data: { text: 'Applications of Static Electricity', level: 2 },
    },
    {
      id: 'table-apps',
      type: 'comparisonTable',
      data: {
        caption: 'Practical applications of static electricity',
        headers: ['Application', 'How static charge is used'],
        rows: [
          ['Photocopier', 'Drum charged electrostatically; toner (oppositely charged) sticks to image areas and transfers to paper'],
          ['Inkjet printer', 'Ink droplets charged and deflected by electric field to the correct position on paper'],
          ['Electrostatic precipitator', 'Charged plates attract oppositely charged smoke/dust particles, removing them from chimney gases'],
          ['Spray painting', 'Paint droplets charged; metal object given opposite charge — paint attracted evenly to all surfaces'],
        ],
      },
    },
    {
      id: 'h-dangers',
      type: 'heading',
      data: { text: 'Dangers of Static Electricity', level: 2 },
    },
    {
      id: 'list-dangers',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Fuel tankers:</strong> friction between fuel and pipe builds static charge; a spark could ignite fuel vapour → explosion. Prevented by earthing the tanker before filling.' },
          { text: '<strong>Lightning:</strong> charge builds up between thundercloud and ground; when pd is large enough, charge discharges rapidly as lightning. Lightning conductors provide a low-resistance path to earth.' },
          { text: '<strong>Electronic components:</strong> static discharge can destroy sensitive chips; handled with earthed wrist straps.' },
        ],
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always say <em>electrons are transferred</em> — never say "protons move" or "positive charge moves away." Positive charge is created by the <em>absence</em> of electrons.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Static charge is produced by friction transferring electrons. Like charges repel; unlike attract. Induction charges without contact. Applications include photocopiers and precipitators; hazards include fuel tanker sparks and lightning.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Static electricity from electron transfer: like repels, unlike attracts; induction, applications, hazards.',
    cues: [
      { id: 'cue-1', blockId: 'para-friction', prompt: 'Why does a polythene rod become negative when rubbed?', answer: 'Electrons transfer from the cloth to the rod, giving it excess electrons and a net negative charge.' },
      { id: 'cue-2', blockId: 'call-key-charge', prompt: 'What is the fundamental rule of electrostatic forces?', answer: 'Like charges repel; unlike charges attract.' },
      { id: 'cue-3', blockId: 'para-induction', prompt: 'How can an object be charged without touching a charged object?', answer: 'By induction: the charged rod repels/attracts electrons in the conductor, and if earthed or split, one part retains an induced opposite charge.' },
      { id: 'cue-4', blockId: 'table-apps', prompt: 'How does an electrostatic precipitator remove smoke particles?', answer: 'Smoke particles pick up charge from charged grids; they are then attracted to oppositely charged plates and stick to them, removing them from the gas.' },
      { id: 'cue-5', blockId: 'list-dangers', prompt: 'How is the danger of sparks from a fuel tanker prevented?', answer: 'The tanker is earthed before filling, so any static charge is safely conducted to earth instead of producing a spark.' },
    ],
  },
  evidence: [],
  mentions: [],
};
