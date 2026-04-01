export const note_olevel_physics_3_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-2-1-reflection-of-light.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the properties of an image formed in a plane mirror. Construct ray diagrams to show image formation in a plane mirror. Use the law i = r.' },
    },
    {
      id: 'h-image',
      type: 'heading',
      data: { text: 'Image in a Plane Mirror', level: 2 },
    },
    {
      id: 'para-image',
      type: 'paragraph',
      data: { text: 'A plane (flat) mirror produces an image with very specific, predictable properties. The image is formed by the apparent intersection of <em>extended</em> reflected rays (dotted lines behind the mirror). Because the reflected rays only appear to meet — they do not actually converge — the image cannot be projected onto a screen.' },
    },
    {
      id: 'callout-properties',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Properties of Image in a Plane Mirror (VUSISL)',
        text: '• Virtual — cannot be projected onto a screen; rays appear to diverge from behind mirror\n• Upright — image is the same way up as the object\n• Same size — image height = object height\n• Inverted laterally — left and right are swapped (laterally inverted)\n• Same distance — image is as far behind the mirror as the object is in front\n• Located on the same perpendicular line as the object',
      },
    },
    {
      id: 'svg-mirror',
      type: 'svg',
      data: {
        caption: 'Ray diagram showing virtual image formed in a plane mirror (image I is behind the mirror)',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="480" height="300">
  <defs>
    <marker id="ah20" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#3b82f6"/></marker>
    <marker id="ag20" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#10b981"/></marker>
  </defs>
  <style>text{font-family:Arial,sans-serif;font-size:11px;fill:#1e293b;}</style>
  <rect x="240" y="0" width="240" height="300" fill="#1e3a8a" opacity="0.35"/>
  <line x1="240" y1="0" x2="240" y2="300" stroke="#1e40af" stroke-width="3"/>
  <line x1="240" y1="10" x2="254" y2="10" stroke="#94a3b8"/>
  <line x1="240" y1="30" x2="254" y2="30" stroke="#94a3b8"/>
  <line x1="240" y1="50" x2="254" y2="50" stroke="#94a3b8"/>
  <line x1="240" y1="70" x2="254" y2="70" stroke="#94a3b8"/>
  <line x1="240" y1="90" x2="254" y2="90" stroke="#94a3b8"/>
  <line x1="240" y1="110" x2="254" y2="110" stroke="#94a3b8"/>
  <line x1="240" y1="130" x2="254" y2="130" stroke="#94a3b8"/>
  <line x1="240" y1="150" x2="254" y2="150" stroke="#94a3b8"/>
  <line x1="240" y1="170" x2="254" y2="170" stroke="#94a3b8"/>
  <line x1="240" y1="190" x2="254" y2="190" stroke="#94a3b8"/>
  <line x1="240" y1="210" x2="254" y2="210" stroke="#94a3b8"/>
  <line x1="240" y1="230" x2="254" y2="230" stroke="#94a3b8"/>
  <line x1="240" y1="250" x2="254" y2="250" stroke="#94a3b8"/>
  <line x1="240" y1="270" x2="254" y2="270" stroke="#94a3b8"/>
  <text x="248" y="295" fill="#1e40af" font-size="10">Mirror</text>
  <line x1="120" y1="80" x2="120" y2="240" stroke="#f59e0b" stroke-width="3"/>
  <text x="105" y="76" fill="#f59e0b" font-weight="bold">O</text>
  <line x1="360" y1="80" x2="360" y2="240" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="365" y="76" fill="#f59e0b" font-weight="bold">I</text>
  <text x="355" y="258" fill="#f59e0b" font-size="10">(image)</text>
  <line x1="120" y1="80" x2="240" y2="80" stroke="#3b82f6" stroke-width="2" marker-end="url(#ah20)"/>
  <line x1="240" y1="80" x2="60" y2="200" stroke="#10b981" stroke-width="2" marker-end="url(#ag20)"/>
  <line x1="120" y1="160" x2="240" y2="120" stroke="#3b82f6" stroke-width="2" marker-end="url(#ah20)"/>
  <line x1="240" y1="120" x2="90" y2="240" stroke="#10b981" stroke-width="2" marker-end="url(#ag20)"/>
  <line x1="240" y1="80" x2="360" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="240" y1="120" x2="360" y2="120" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="105" y1="160" x2="255" y2="160" stroke="#374151" stroke-width="1" stroke-dasharray="3 2"/>
  <text x="130" y="175" fill="#374151" font-size="10">d (object)</text>
  <text x="258" y="175" fill="#374151" font-size="10">d (image)</text>
  <text x="60" y="290" fill="#3b82f6" font-size="10">→ light from object</text>
  <text x="200" y="290" fill="#10b981" font-size="10">→ reflected rays to eye</text>
</svg>`,
      },
    },
    {
      id: 'h-construction',
      type: 'heading',
      data: { text: 'Constructing a Plane Mirror Ray Diagram', level: 2 },
    },
    {
      id: 'list-construction',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Draw the mirror as a vertical line with hatching on the back (non-reflecting) side' },
          { text: 'Mark the object O in front of the mirror' },
          { text: 'Draw at least two rays from the top of O to different points on the mirror' },
          { text: 'Apply law of reflection (i = r) at each point; draw reflected rays with arrows' },
          { text: 'Extend the reflected rays <em>behind</em> the mirror using dashed lines until they meet' },
          { text: 'Mark the image I at the intersection — it is virtual and the same distance behind the mirror as O is in front' },
        ],
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Technique',
        text: 'Always draw the normal (dashed line, perpendicular to mirror) at the point of incidence. Label angles i and r. Show virtual rays behind mirror as dashed lines and mark the image clearly with "I (virtual)".',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Image in a plane mirror: virtual, upright, same size as object, laterally inverted, and located the same perpendicular distance behind the mirror as the object is in front. Rays from the object reflect off the mirror (i = r); their backward extensions meet to form the virtual image.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Plane mirror image: virtual, upright, same size, laterally inverted, same distance behind mirror.',
    cues: [
      { id: 'cue-1', blockId: 'callout-properties', prompt: 'List four properties of the image formed in a plane mirror.', answer: 'The image is: (1) virtual — cannot be projected; (2) upright — same orientation as object; (3) same size as object; (4) laterally inverted — left and right swapped. Also, it is the same distance behind the mirror as the object is in front.' },
      { id: 'cue-2', blockId: 'para-image', prompt: 'What makes the image in a plane mirror "virtual"?', answer: 'The image is virtual because the reflected rays only appear to diverge from a point behind the mirror — they do not actually converge there. The image cannot be formed on a screen.' },
      { id: 'cue-3', blockId: 'list-construction', prompt: 'Describe the steps to find the image in a plane mirror using a ray diagram.', answer: 'Draw two rays from the object top to the mirror. Apply i = r at each point. Extend reflected rays backward (dashed) behind mirror. The intersection of the dashed lines is the virtual image.' },
      { id: 'cue-4', blockId: 'svg-mirror', prompt: 'An object is placed 15 cm in front of a plane mirror. Where is the image and what size is it?', answer: 'The image is 15 cm behind the mirror (same perpendicular distance). Its size equals the size of the object.' },
    ],
  },
  evidence: [],
  mentions: [],
};
