export const note_olevel_physics_4_4_8 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-4-9-electromagnetic-devices.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the structure and operation of common electromagnetic devices: relay, electric doorbell, electromagnetic crane, and electromagnetic circuit breaker.' },
    },
    {
      id: 'h-relay',
      type: 'heading',
      data: { text: 'The Relay', level: 2 },
    },
    {
      id: 'para-relay',
      type: 'paragraph',
      data: {
        text: 'A <strong>relay</strong> is an electrically operated switch. It uses a small current in one circuit (the <em>control circuit</em>) to switch a large current in a separate <em>switched circuit</em>. This protects the control circuit (e.g. a microcontroller or sensor) from the high voltages/currents of the device being controlled.',
      },
    },
    {
      id: 'list-relay',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Coil of wire</strong> — wound on a soft iron core; becomes an electromagnet when current flows' },
          { text: '<strong>Soft iron armature</strong> — a pivoted lever attracted towards the electromagnet when current flows' },
          { text: '<strong>Spring</strong> — pulls the armature back (open contacts) when current is switched off' },
          { text: '<strong>Contacts</strong> — closed by the armature to complete the switched circuit' },
        ],
      },
    },
    {
      id: 'para-relay-op',
      type: 'paragraph',
      data: {
        text: '<strong>Operation:</strong> When current flows in the control circuit, the coil magnetises the iron core. The core attracts the soft iron armature, which pivots and pushes the contacts closed. Current then flows in the switched circuit (e.g. motor or lamp). When control current is switched off, the spring returns the armature — contacts open, switched circuit off.',
      },
    },
    {
      id: 'svg-relay',
      type: 'svg',
      data: {
        caption: 'Relay circuit — control coil closes armature contacts to switch load',
        svg: `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <!-- Relay housing box -->
  <rect x="140" y="40" width="160" height="130" rx="8" fill="#0f172a" stroke="#6b7280" stroke-width="2" stroke-dasharray="6"/>
  <text x="195" y="32" fill="#6b7280" font-size="9">RELAY</text>

  <!-- Coil on soft iron core -->
  <rect x="155" y="90" width="50" height="60" rx="4" fill="#2d2f72" stroke="#6366f1" stroke-width="2"/>
  <text x="162" y="118" fill="#4338ca" font-weight="bold">Coil</text>
  <text x="160" y="130" fill="#4338ca">(iron core)</text>
  <!-- Coil turns -->
  <line x1="156" y1="103" x2="204" y2="103" stroke="#6366f1" stroke-width="1.5"/>
  <line x1="156" y1="113" x2="204" y2="113" stroke="#6366f1" stroke-width="1.5"/>
  <line x1="156" y1="123" x2="204" y2="123" stroke="#6366f1" stroke-width="1.5"/>
  <line x1="156" y1="133" x2="204" y2="133" stroke="#6366f1" stroke-width="1.5"/>

  <!-- Armature (horizontal bar, pivots left) -->
  <rect x="210" y="80" width="80" height="14" rx="3" fill="#1e293b" stroke="#374151" stroke-width="2"/>
  <text x="230" y="72" fill="#374151" font-weight="bold">Armature</text>
  <!-- Pivot point -->
  <circle cx="218" cy="87" r="5" fill="#374151"/>
  <text x="212" y="74" fill="#6b7280">pivot</text>
  <!-- Spring (zigzag, below armature right end) -->
  <line x1="285" y1="94" x2="285" y2="105" stroke="#374151" stroke-width="1.5"/>
  <polyline points="285,105 278,110 292,115 278,120 292,125 285,130" stroke="#374151" stroke-width="1.5" fill="none"/>
  <text x="298" y="118" fill="#374151">spring</text>

  <!-- Contacts (two dots, normally open) -->
  <circle cx="255" cy="80" r="5" fill="#10b981"/>
  <circle cx="255" cy="62" r="5" fill="#10b981" stroke="#10b981"/>
  <line x1="255" y1="67" x2="255" y2="75" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3"/>
  <text x="260" y="72" fill="#10b981">Contacts</text>
  <text x="260" y="84" fill="#10b981">(closed when</text>
  <text x="260" y="94" fill="#10b981"> attracted)</text>

  <!-- Control circuit (left) -->
  <line x1="155" y1="100" x2="80" y2="100" stroke="#6366f1" stroke-width="2"/>
  <line x1="155" y1="148" x2="80" y2="148" stroke="#6366f1" stroke-width="2"/>
  <line x1="80" y1="100" x2="80" y2="148" stroke="#6366f1" stroke-width="2"/>
  <rect x="50" y="115" width="30" height="20" rx="3" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="57" y="128" fill="#92400e">Switch</text>
  <text x="55" y="165" fill="#6366f1">Control circuit</text>
  <text x="58" y="177" fill="#6366f1">(low current)</text>

  <!-- Switched circuit (top, with load) -->
  <line x1="255" y1="57" x2="255" y2="20" stroke="#ef4444" stroke-width="2"/>
  <line x1="255" y1="20" x2="380" y2="20" stroke="#ef4444" stroke-width="2"/>
  <line x1="380" y1="20" x2="380" y2="140" stroke="#ef4444" stroke-width="2"/>
  <line x1="380" y1="140" x2="255" y2="140" stroke="#ef4444" stroke-width="2"/>
  <rect x="340" y="50" width="40" height="40" rx="4" fill="#3d1212" stroke="#ef4444" stroke-width="2"/>
  <text x="347" y="70" fill="#b91c1c" font-weight="bold">Load</text>
  <text x="342" y="82" fill="#b91c1c">(motor/</text>
  <text x="344" y="92" fill="#b91c1c">lamp)</text>
  <text x="345" y="155" fill="#ef4444">Switched circuit</text>
  <text x="345" y="165" fill="#ef4444">(high current)</text>
</svg>`,
      },
    },
    {
      id: 'h-doorbell',
      type: 'heading',
      data: { text: 'Electric Doorbell', level: 2 },
    },
    {
      id: 'para-doorbell',
      type: 'paragraph',
      data: {
        text: 'An <strong>electric doorbell</strong> uses a <strong>make-and-break circuit</strong>:',
      },
    },
    {
      id: 'list-doorbell',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Button pressed → current flows through coil → electromagnet magnetises' },
          { text: 'Electromagnet attracts the soft iron armature (striker)' },
          { text: 'Striker hits bell/gong and also <strong>breaks the circuit</strong> at the contact spring' },
          { text: 'Circuit broken → electromagnet loses magnetism → spring pulls striker back' },
          { text: 'Circuit remade → process repeats rapidly, producing continuous ringing' },
        ],
      },
    },
    {
      id: 'h-crane',
      type: 'heading',
      data: { text: 'Electromagnetic Crane', level: 2 },
    },
    {
      id: 'para-crane',
      type: 'paragraph',
      data: {
        text: 'An <strong>electromagnetic crane</strong> has a large electromagnet (soft iron core with coil) powered by DC. When switched on it attracts and lifts iron and steel scrap metal. Switching off the current removes the magnetic field instantly, so the load drops. Soft iron is used because it quickly loses magnetism when current switches off.',
      },
    },
    {
      id: 'h-breaker',
      type: 'heading',
      data: { text: 'Electromagnetic Circuit Breaker', level: 2 },
    },
    {
      id: 'para-breaker',
      type: 'paragraph',
      data: {
        text: 'An <strong>electromagnetic circuit breaker</strong> protects a circuit from overload currents. The circuit current passes through an electromagnet (coil around an iron bolt). If the current exceeds a safe level, the electromagnet becomes strong enough to attract a soft iron armature, which trips a latch — pulling the contacts apart and breaking the circuit. The breaker can be reset (unlike a fuse which must be replaced).',
      },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Idea: Why Soft Iron in All These Devices',
        text: 'Soft iron is used in electromagnet cores (relay, crane, circuit breaker, doorbell) because it is easily magnetised when current flows and quickly loses magnetism when current stops. Hard steel would retain residual magnetism and the devices would not switch off cleanly.',
      },
    },
    {
      id: 'table-devices',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of Electromagnetic Devices',
        headers: ['Device', 'Principle', 'Key feature'],
        rows: [
          ['Relay', 'Small control current magnetises coil → attracts armature → closes main circuit contacts', 'Isolates control and load circuits'],
          ['Doorbell', 'Electromagnet attracts striker → breaks contact → spring returns → repeats', 'Self-interrupting (make-and-break) circuit'],
          ['Crane', 'Large electromagnet attracts iron/steel scrap; current off → drops load', 'Soft iron: instant release when off'],
          ['Circuit breaker', 'Overcurrent → strong electromagnet → trips armature → contacts open', 'Resettable (unlike a fuse)'],
        ],
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'For relay questions: always state that the control circuit and switched circuit are electrically isolated (separated). This is why relays are useful — safe control of high-power devices using low-voltage/current circuits (e.g. microcontrollers, sensors).',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Electromagnetic devices use soft iron electromagnets: relay (control circuit isolates load), doorbell (make-and-break self-oscillation), crane (soft iron releases instantly when off), circuit breaker (overcurrent trips armature, resettable). Soft iron is used throughout for its easy magnetisation and demagnetisation.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Relay: small current → electromagnet → armature closes large circuit. Doorbell: make-and-break self-oscillation. Crane: soft iron releases when off. Circuit breaker: overcurrent trips armature, resettable.',
    cues: [
      { id: 'cue-1', blockId: 'para-relay-op', prompt: 'How does a relay work? Include control circuit, armature, and contacts.', answer: 'Control circuit current → coil magnetises soft iron core → core attracts armature (pivot) → armature closes contacts → switched circuit (load) completes. Spring opens contacts when control current off.' },
      { id: 'cue-2', blockId: 'list-doorbell', prompt: 'Explain why an electric doorbell continues to ring while the button is held down.', answer: 'The electromagnet attracts the striker (closing bell), which breaks the circuit. The coil loses magnetism, spring returns the striker, circuit remakes, process repeats automatically.' },
      { id: 'cue-3', blockId: 'para-crane', prompt: 'Why is soft iron used in the core of an electromagnetic crane, rather than steel?', answer: 'Soft iron loses its magnetism instantly when the current is switched off, so the load drops immediately. Steel would retain residual magnetism and not release the load cleanly.' },
      { id: 'cue-4', blockId: 'para-breaker', prompt: 'How does an electromagnetic circuit breaker protect a circuit?', answer: 'Excessive current strengthens the electromagnet; it attracts the armature which trips a latch, opening the contacts and breaking the circuit. It can be reset after the fault is fixed.' },
    ],
  },
  evidence: [],
  mentions: [],
};
