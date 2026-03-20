export const note_olevel_physics_4_4_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-4-2-force-on-a-current.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'State and apply Fleming\'s Left-Hand Rule to determine the direction of force on a current-carrying conductor in a magnetic field.' },
    },
    {
      id: 'h-motor-effect',
      type: 'heading',
      data: { text: 'The Motor Effect', level: 2 },
    },
    {
      id: 'para-motor-effect',
      type: 'paragraph',
      data: {
        text: 'When a current-carrying conductor is placed in a <strong>magnetic field</strong>, it experiences a <strong>force</strong> (unless the wire is parallel to the field). This is called the <strong>motor effect</strong>. The force arises because the two magnetic fields (from the magnet and from the current) interact.',
      },
    },
    {
      id: 'h-factors',
      type: 'heading',
      data: { text: 'Factors Affecting the Force', level: 2 },
    },
    {
      id: 'list-factors',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Force increases with greater <strong>magnetic field strength (B)</strong>.' },
          { text: 'Force increases with greater <strong>current (I)</strong>.' },
          { text: 'Force increases with greater <strong>length of wire (L)</strong> in the field.' },
          { text: 'Force is <strong>zero</strong> if the wire is parallel to the field.' },
          { text: 'Force is <strong>maximum</strong> if the wire is perpendicular to the field.' },
        ],
      },
    },
    {
      id: 'eq-force',
      type: 'equation',
      data: {
        html: 'F = B I L',
        caption: 'F = force (N), B = magnetic flux density (T), I = current (A), L = length of wire in field (m)',
      },
    },
    {
      id: 'h-flhr',
      type: 'heading',
      data: { text: 'Fleming\'s Left-Hand Rule', level: 2 },
    },
    {
      id: 'para-flhr',
      type: 'paragraph',
      data: {
        text: 'Use the <strong>left hand</strong> (for motors/force on current in a field):',
      },
    },
    {
      id: 'list-flhr',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>thuMb</strong> → direction of <strong>Motion (Force)</strong>' },
          { text: '<strong>First finger</strong> → direction of magnetic <strong>Field</strong> (N to S)' },
          { text: '<strong>seCond finger</strong> → direction of <strong>Current</strong> (conventional, + to −)' },
        ],
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Memory: FBI Left',
        text: 'Left hand: F (thumb) B (first finger) I (second finger) — "FBI" for Force, B-field, current (I).',
      },
    },
    {
      id: 'svg-flhr',
      type: 'svg',
      data: {
        caption: 'Fleming\'s Left-Hand Rule — thumb=Force, index=Field, middle=Current',
        svg: `<svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <!-- Hand outline (stylised) -->
  <!-- Palm -->
  <rect x="120" y="110" width="80" height="70" rx="15" fill="#44370a" stroke="#d97706" stroke-width="2"/>
  <!-- Thumb (pointing right/upward = Force) -->
  <rect x="175" y="75" width="20" height="50" rx="10" fill="#44370a" stroke="#d97706" stroke-width="2" transform="rotate(-30,185,100)"/>
  <!-- Index finger (pointing up = Field B) -->
  <rect x="155" y="40" width="18" height="75" rx="9" fill="#0e4a56" stroke="#0891b2" stroke-width="2"/>
  <!-- Middle finger (pointing right = Current I) -->
  <rect x="178" y="105" width="18" height="70" rx="9" fill="#0a3020" stroke="#16a34a" stroke-width="2" transform="rotate(90,187,140)"/>
  <!-- Ring and pinky (folded) -->
  <rect x="198" y="100" width="14" height="40" rx="7" fill="#44370a" stroke="#d97706" stroke-width="1.5"/>
  <rect x="213" y="105" width="12" height="35" rx="6" fill="#44370a" stroke="#d97706" stroke-width="1.5"/>
  <!-- Labels -->
  <text x="8" y="55" fill="#0891b2" font-weight="bold">B — Magnetic</text>
  <text x="8" y="70" fill="#0891b2">Field direction</text>
  <line x1="155" y1="65" x2="90" y2="65" stroke="#0891b2" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="230" y="155" fill="#16a34a" font-weight="bold">I — Current</text>
  <text x="230" y="170" fill="#16a34a">direction</text>
  <line x1="225" y1="148" x2="230" y2="158" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="195" y="85" fill="#d97706" font-weight="bold">F —</text>
  <text x="195" y="100" fill="#d97706">Force</text>
  <!-- 3 arrows showing directions -->
  <text x="25" y="190" fill="#374151" font-size="10">↑ Field (B) &nbsp;&nbsp; → Force (F) &nbsp;&nbsp; ⊙ Current (I) out of page</text>
  <rect x="5" y="178" width="330" height="35" rx="5" fill="#0f172a" stroke="#e5e7eb" stroke-width="1"/>
  <text x="15" y="193" fill="#374151" font-size="9">Example: B upward, I out of page → Force to the RIGHT</text>
  <text x="15" y="208" fill="#374151" font-size="9">Use left hand: first↑ (B), middle⊙ (I) → thumb points right (F)</text>
</svg>`,
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A wire carries 3 A in a magnetic field of 0.4 T. The wire has 5 cm in the field.\nF = BIL = 0.4 × 3 × 0.05 = 0.06 N',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Motor effect: F = BIL. Fleming\'s Left-Hand Rule: thumb=Force, first=B-field, second=Current. Force increases with B, I, and L.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'F = BIL; Fleming\'s LHR: thumb=Force, first finger=B field, second finger=current (conventional).',
    cues: [
      { id: 'cue-1', blockId: 'eq-force', prompt: 'Write the formula for the force on a current-carrying wire in a magnetic field.', answer: 'F = BIL (force = magnetic field strength × current × length of wire in field).' },
      { id: 'cue-2', blockId: 'list-flhr', prompt: 'State Fleming\'s Left-Hand Rule.', answer: 'Left hand: thuMb = Motion/Force, First finger = B-Field, seCond finger = Current.' },
      { id: 'cue-3', blockId: 'call-worked', prompt: 'A 0.2 m wire carries 5 A in a 0.3 T field. Calculate the force.', answer: 'F = 0.3 × 5 × 0.2 = 0.3 N.' },
      { id: 'cue-4', blockId: 'list-factors', prompt: 'State two ways to increase the force on a current in a magnetic field.', answer: 'Increase the current (I); increase the magnetic field strength (B); increase the length of wire in the field (L).' },
    ],
  },
  evidence: [],
  mentions: [],
};
