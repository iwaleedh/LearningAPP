export const note_olevel_physics_3_2_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-2-5-converging-lens-images.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply the three standard rays to construct ray diagrams for a converging lens. Describe image properties (real/virtual, magnified/same/diminished, upright/inverted) for different object positions.' },
    },
    {
      id: 'h-rays',
      type: 'heading',
      data: { text: 'The Three Construction Rays', level: 2 },
    },
    {
      id: 'para-rays',
      type: 'paragraph',
      data: { text: 'To locate an image, draw any two of these three standard rays from the top of the object. Their intersection (or apparent intersection, if virtual) gives the image position.' },
    },
    {
      id: 'list-rays',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<strong>Ray 1 — Parallel ray:</strong> Travels parallel to the principal axis → after the lens, passes through F on the far side' },
          { text: '<strong>Ray 2 — Centre ray:</strong> Passes through the optical centre O → continues in a straight line without bending' },
          { text: '<strong>Ray 3 — Focus ray:</strong> Passes through F on the near side → after the lens, travels parallel to the principal axis' },
        ],
      },
    },
    {
      id: 'svg-ray-diagram',
      type: 'svg',
      data: {
        caption: 'Ray diagram for a converging lens with object beyond 2F — image is real, inverted and diminished',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 280" width="520" height="280">
  <defs>
    <marker id="ah24" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#3b82f6"/></marker>
    <marker id="ag24" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#10b981"/></marker>
    <marker id="ao24" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#f59e0b"/></marker>
  </defs>
  <style>text{font-family:Arial,sans-serif;font-size:10px;fill:#1e293b;}</style>
  <!-- Principal axis -->
  <line x1="10" y1="140" x2="510" y2="140" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 3"/>
  <!-- Lens -->
  <line x1="280" y1="30" x2="280" y2="260" stroke="#0e7490" stroke-width="2.5"/>
  <text x="285" y="270" fill="#0e7490" font-size="10">Lens (O)</text>
  <!-- F marks -->
  <circle cx="185" cy="140" r="4" fill="#ef4444"/>
  <text x="175" y="132" fill="#ef4444" font-weight="bold">F</text>
  <circle cx="375" cy="140" r="4" fill="#ef4444"/>
  <text x="368" y="132" fill="#ef4444" font-weight="bold">F</text>
  <!-- 2F marks -->
  <circle cx="90" cy="140" r="3" fill="#94a3b8"/>
  <text x="82" y="132" fill="#64748b" font-size="9">2F</text>
  <circle cx="470" cy="140" r="3" fill="#94a3b8"/>
  <text x="462" y="132" fill="#64748b" font-size="9">2F</text>
  <!-- Object (beyond 2F) at x=70 -->
  <line x1="70" y1="140" x2="70" y2="75" stroke="#f59e0b" stroke-width="2.5"/>
  <polygon points="70,75 65,88 75,88" fill="#f59e0b"/>
  <text x="55" y="70" fill="#f59e0b" font-weight="bold">O</text>
  <!-- Ray 1 (parallel → through F) BLUE -->
  <line x1="70" y1="75" x2="280" y2="75" stroke="#3b82f6" stroke-width="1.8" marker-end="url(#ah24)"/>
  <line x1="280" y1="75" x2="460" y2="175" stroke="#3b82f6" stroke-width="1.8" marker-end="url(#ah24)"/>
  <!-- Ray 2 (through O) GREEN -->
  <line x1="70" y1="75" x2="460" y2="188" stroke="#10b981" stroke-width="1.8" marker-end="url(#ag24)"/>
  <!-- Ray 3 (through near F) ORANGE -->
  <line x1="70" y1="75" x2="185" y2="140" stroke="#f59e0b" stroke-width="1.8"/>
  <line x1="185" y1="140" x2="280" y2="108" stroke="#f59e0b" stroke-width="1.8"/>
  <line x1="280" y1="108" x2="460" y2="188" stroke="#f59e0b" stroke-width="1.8" marker-end="url(#ao24)"/>
  <!-- Image at x≈460 (intersection) -->
  <line x1="460" y1="140" x2="460" y2="185" stroke="#ef4444" stroke-width="2.5"/>
  <polygon points="460,140 455,153 465,153" fill="#ef4444" transform="rotate(180,460,140)"/>
  <text x="463" y="165" fill="#ef4444" font-weight="bold">I</text>
  <text x="24" y="42" fill="#374151" font-size="10">Object beyond 2F:</text>
  <text x="24" y="55" fill="#374151" font-size="10">Image is real, inverted,</text>
  <text x="24" y="67" fill="#374151" font-size="10">diminished, beyond F</text>
</svg>`,
      },
    },
    {
      id: 'h-positions',
      type: 'heading',
      data: { text: 'Image Properties vs Object Position', level: 2 },
    },
    {
      id: 'tbl-positions',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of image properties for a converging lens at different object positions',
        headers: ['Object position', 'Image position', 'Nature', 'Orientation', 'Size', 'Application'],
        rows: [
          ['Beyond 2F', 'Between F and 2F', 'Real', 'Inverted', 'Diminished', 'Camera, eye'],
          ['At 2F', 'At 2F (other side)', 'Real', 'Inverted', 'Same size', 'Copy machine (approx.)'],
          ['Between F and 2F', 'Beyond 2F', 'Real', 'Inverted', 'Magnified', 'Projector'],
          ['At F', 'At infinity', '—', '—', '—', 'Searchlight, torch'],
          ['Inside F', 'Same side as object', 'Virtual', 'Upright', 'Magnified', 'Magnifying glass'],
        ],
      },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Real vs Virtual Images',
        text: 'Real image: rays actually converge at the image point → can be projected onto a screen → always inverted.\nVirtual image: rays only appear to diverge from the image point → cannot be projected → always upright.',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Projector',
        text: 'A projector uses a converging lens. The film (object) is placed between F and 2F.\n• Rays are drawn using the 3 construction rules.\n• Image forms beyond 2F on the far side of the lens.\n• Image properties: real (can project onto screen), inverted (film loaded upside down), magnified (larger than film).',
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'You only need TWO of the three construction rays to find the image. Always choose the two easiest ones. Ray 2 (through O) is always the easiest because it goes perfectly straight.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Three construction rays for a converging lens: (1) parallel → through F; (2) through O → straight; (3) through near F → parallel. Object beyond 2F → real, inverted, diminished image. Object inside F → virtual, upright, magnified image (magnifying glass). Object at F → rays emerge parallel (no image).' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Three rays: parallel→F, through O (straight), through near F→parallel. Object inside F → virtual magnified image (magnifying glass).',
    cues: [
      { id: 'cue-1', blockId: 'list-rays', prompt: 'Describe the three standard construction rays for a converging lens.', answer: '(1) Parallel ray → through far F. (2) Ray through optical centre O → undeviated. (3) Ray through near F → emerges parallel to axis.' },
      { id: 'cue-2', blockId: 'tbl-positions', prompt: 'Where must an object be placed for a converging lens to act as a magnifying glass?', answer: 'Inside F (between the lens and the principal focus). The image is virtual, upright and magnified, on the same side as the object.' },
      { id: 'cue-3', blockId: 'tbl-positions', prompt: 'A projector object is placed between F and 2F. Describe the image.', answer: 'The image is real (can be projected on screen), inverted, and magnified — formed beyond 2F on the other side of the lens.' },
      { id: 'cue-4', blockId: 'callout-key1', prompt: 'What is the difference between a real and a virtual image?', answer: 'A real image is formed where rays actually converge — it can be projected onto a screen and is always inverted. A virtual image is where diverging rays appear to originate — it cannot be projected and is always upright.' },
      { id: 'cue-5', blockId: 'tbl-positions', prompt: 'What happens when the object is placed exactly at F?', answer: 'The refracted rays emerge parallel to each other (they never converge). The image is formed at infinity — no image is produced at a finite location.' },
    ],
  },
  evidence: [],
  mentions: [],
};
