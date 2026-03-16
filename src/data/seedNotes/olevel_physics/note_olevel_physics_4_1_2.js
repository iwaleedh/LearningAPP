export const note_olevel_physics_4_1_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-1-3-magnetic-fields.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe permanent magnets, magnetic field line patterns, methods of plotting fields, and the Earth\'s magnetic field.' },
    },
    {
      id: 'h-magnets',
      type: 'heading',
      data: { text: 'Permanent Magnets', level: 2 },
    },
    {
      id: 'para-magnets',
      type: 'paragraph',
      data: {
        text: 'A <strong>permanent magnet</strong> has two poles — a <strong>north (N)</strong> pole and a <strong>south (S)</strong> pole. Like poles repel each other; unlike poles attract. The north pole of one magnet attracts the south pole of another. You cannot isolate a single magnetic pole — cutting a magnet always produces two new magnets, each with N and S poles.',
      },
    },
    {
      id: 'call-key-poles',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rule of Magnetic Poles',
        text: '<strong>Like poles repel; unlike poles attract.</strong> N–N and S–S repel. N–S attracts.',
      },
    },
    {
      id: 'h-field-lines',
      type: 'heading',
      data: { text: 'Magnetic Field Lines', level: 2 },
    },
    {
      id: 'para-field-lines',
      type: 'paragraph',
      data: {
        text: 'A <strong>magnetic field</strong> is a region where a magnetic material (or moving charge) experiences a force. Magnetic field lines show the direction of the force experienced by a free north pole at that point:',
      },
    },
    {
      id: 'list-field-rules',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Lines run from the <strong>north pole out</strong> and into the <strong>south pole</strong>' },
          { text: 'Lines never cross' },
          { text: 'Closer lines = <strong>stronger</strong> field' },
          { text: 'Lines are continuous loops (inside the magnet they go S → N)' },
        ],
      },
    },
    {
      id: 'svg-bar-magnet',
      type: 'svg',
      data: {
        caption: 'Magnetic field lines around a bar magnet. Lines emerge from the N pole and enter the S pole.',
        svg: `<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="13">
  <!-- Bar magnet -->
  <rect x="130" y="100" width="70" height="30" rx="0" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
  <rect x="200" y="100" width="70" height="30" rx="0" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="165" y="120" text-anchor="middle" fill="white" font-weight="bold" font-size="14">N</text>
  <text x="235" y="120" text-anchor="middle" fill="white" font-weight="bold" font-size="14">S</text>

  <!-- Field lines arcing above -->
  <path d="M 155 100 Q 190 40 235 100" fill="none" stroke="#6366f1" stroke-width="1.5"/>
  <path d="M 148 100 Q 190 18 242 100" fill="none" stroke="#6366f1" stroke-width="1.5"/>
  <path d="M 162 100 Q 190 58 228 100" fill="none" stroke="#6366f1" stroke-width="1.5"/>
  <!-- Arrow on top arc -->
  <circle cx="190" cy="35" r="3" fill="#6366f1"/>

  <!-- Field lines arcing below -->
  <path d="M 155 130 Q 190 185 235 130" fill="none" stroke="#6366f1" stroke-width="1.5"/>
  <path d="M 148 130 Q 190 205 242 130" fill="none" stroke="#6366f1" stroke-width="1.5"/>
  <path d="M 162 130 Q 190 165 228 130" fill="none" stroke="#6366f1" stroke-width="1.5"/>

  <!-- Arrows indicating direction (near N pole) -->
  <defs>
    <marker id="marr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <path d="M0,0 L0,7 L7,3.5 z" fill="#6366f1"/>
    </marker>
  </defs>
  <!-- Arrow label -->
  <text x="60" y="115" fill="#475569" font-size="11">Field direction →</text>
  <text x="60" y="130" fill="#475569" font-size="11">N pole outward</text>
  <text x="288" y="115" fill="#475569" font-size="11">→ into S pole</text>
</svg>`,
      },
    },
    {
      id: 'h-plotting',
      type: 'heading',
      data: { text: 'Plotting Magnetic Fields', level: 2 },
    },
    {
      id: 'para-plotting',
      type: 'paragraph',
      data: {
        text: 'Magnetic field patterns can be plotted experimentally using:',
      },
    },
    {
      id: 'list-plotting',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Plotting compass:</strong> place compass near magnet; mark where needle points; repeat at many positions to trace field lines.' },
          { text: '<strong>Iron filings:</strong> sprinkle on paper placed over magnet; tap gently — filings align with field and reveal the pattern.' },
        ],
      },
    },
    {
      id: 'h-patterns',
      type: 'heading',
      data: { text: 'Important Field Patterns', level: 2 },
    },
    {
      id: 'table-patterns',
      type: 'comparisonTable',
      data: {
        caption: 'Magnetic field patterns for common configurations',
        headers: ['Configuration', 'Pattern Description'],
        rows: [
          ['Bar magnet', 'Loops from N to S outside; strongest at poles (lines closest)'],
          ['Between two unlike poles (N–S)', 'Curved lines going from N to S; fairly uniform in centre'],
          ['Between two like poles (N–N)', 'Lines curve away; neutral point in centre where field cancels'],
          ['Solenoid (current-carrying coil)', 'Inside: uniform field from S to N; outside: identical to bar magnet'],
        ],
      },
    },
    {
      id: 'h-earth',
      type: 'heading',
      data: { text: "Earth's Magnetic Field", level: 2 },
    },
    {
      id: 'para-earth',
      type: 'paragraph',
      data: {
        text: "The Earth acts like a giant bar magnet. The geographic <strong>North Pole</strong> is near the magnetic <strong>south</strong> pole of Earth's field — this is why the north-seeking pole of a compass is attracted toward geographic north. Earth's field lines enter at the geographic north (magnetic south) and exit near geographic south.",
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Compasses point toward geographic north because the geographic north has Earth\'s magnetic <em>south</em> pole nearby — and unlike poles attract. The <strong>north end</strong> of a compass needle is actually a north-seeking pole.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Magnetic fields radiate from N poles into S poles. Like poles repel, unlike attract. Fields are plotted with compasses or iron filings. A solenoid\'s field resembles a bar magnet. Earth\'s geographic north corresponds to a magnetic south pole.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Magnetic fields: N to S outside magnet; plotted with compass or filings; solenoid like bar magnet; Earth\'s geographic north = magnetic south.',
    cues: [
      { id: 'cue-1', blockId: 'call-key-poles', prompt: 'State the rule for magnetic poles.', answer: 'Like poles repel; unlike poles attract.' },
      { id: 'cue-2', blockId: 'para-field-lines', prompt: 'In which direction do magnetic field lines point outside a magnet?', answer: 'From the north pole, curving around and entering the south pole.' },
      { id: 'cue-3', blockId: 'list-plotting', prompt: 'Name two methods used to plot a magnetic field.', answer: 'A plotting compass (mark direction of needle) or iron filings sprinkled on paper.' },
      { id: 'cue-4', blockId: 'para-earth', prompt: 'Why does the north end of a compass point toward geographic north?', answer: 'Because Earth\'s geographic north is actually near the magnetic south pole — and unlike poles attract, so the compass north-seeking pole is attracted there.' },
    ],
  },
  evidence: [],
  mentions: [],
};
