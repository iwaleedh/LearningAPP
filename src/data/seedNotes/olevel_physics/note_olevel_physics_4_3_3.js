export const note_olevel_physics_4_3_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-3-4-action-of-circuit-components.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the action of diodes, LEDs, capacitors, relays, and transistors in circuits and explain their uses.' },
    },
    {
      id: 'h-diode',
      type: 'heading',
      data: { text: 'Diode', level: 2 },
    },
    {
      id: 'para-diode',
      type: 'paragraph',
      data: {
        text: 'A <strong>diode</strong> allows current to flow in one direction only (from anode to cathode). When forward biased the diode conducts; when reverse biased it blocks current. Typical forward voltage drop ≈ 0.7 V for silicon diodes. Diodes are used in rectifier circuits to convert AC to DC.',
      },
    },
    {
      id: 'h-led',
      type: 'heading',
      data: { text: 'Light-Emitting Diode (LED)', level: 2 },
    },
    {
      id: 'para-led',
      type: 'paragraph',
      data: {
        text: 'An <strong>LED</strong> is a special diode that emits light when forward biased. It requires a current-limiting resistor in series to prevent excessive current. LEDs use far less energy than filament bulbs and have a much longer life. They are used in indicator lights, displays, and modern lighting.',
      },
    },
    {
      id: 'call-led-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'LED Remember',
        text: 'LED symbol: a diode triangle with two arrows pointing away (representing emitted light). Always connect a series resistor: R = (V_supply − V_LED) / I_working.',
      },
    },
    {
      id: 'h-capacitor',
      type: 'heading',
      data: { text: 'Capacitor', level: 2 },
    },
    {
      id: 'para-capacitor',
      type: 'paragraph',
      data: {
        text: 'A <strong>capacitor</strong> stores charge on two metal plates separated by an insulator. When connected to a supply it charges up; when the supply is removed it can discharge to release the stored energy. Capacitance (C) is measured in farads (F). Capacitors are used for smoothing rectified DC, timing circuits, and flash circuits.',
      },
    },
    {
      id: 'h-relay',
      type: 'heading',
      data: { text: 'Relay', level: 2 },
    },
    {
      id: 'para-relay',
      type: 'paragraph',
      data: {
        text: 'A <strong>relay</strong> is an electromagnetic switch. A small control current through an electromagnet coil attracts an iron armature that closes (or opens) contacts in a separate, high-current circuit. This allows a low-power signal (e.g. from a transistor or sensor) to switch a high-power device (e.g. motor, lamp, heater) safely.',
      },
    },
    {
      id: 'h-transistor',
      type: 'heading',
      data: { text: 'Transistor (BJT)', level: 2 },
    },
    {
      id: 'para-transistor',
      type: 'paragraph',
      data: {
        text: 'A <strong>bipolar junction transistor (BJT)</strong> has three terminals: <strong>base (B)</strong>, <strong>collector (C)</strong>, and <strong>emitter (E)</strong>. A small base current switches or amplifies a larger collector–emitter current. In switching mode: when base current > threshold, transistor turns ON and current flows from collector to emitter.',
      },
    },
    {
      id: 'table-components',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of Circuit Component Actions',
        headers: ['Component', 'Action', 'Example Use'],
        rows: [
          ['Diode', 'Conducts in one direction only', 'Rectifier (AC → DC)'],
          ['LED', 'Emits light when forward biased', 'Indicator, display'],
          ['Capacitor', 'Stores charge; releases energy', 'Smoothing, timing'],
          ['Relay', 'Small current controls large current', 'Motor switch, safety circuit'],
          ['Transistor (BJT)', 'Base current switches/amplifies collector current', 'Sensor circuits, logic'],
        ],
      },
    },
    {
      id: 'svg-relay',
      type: 'svg',
      data: {
        caption: 'Relay circuit: control circuit (left) and switched circuit (right)',
        svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <!-- Control circuit -->
  <text x="10" y="30" fill="#6366f1" font-weight="bold">Control Circuit</text>
  <!-- Battery symbol -->
  <line x1="30" y1="50" x2="30" y2="150" stroke="#333" stroke-width="2"/>
  <line x1="20" y1="80" x2="40" y2="80" stroke="#333" stroke-width="3"/>
  <line x1="22" y1="90" x2="38" y2="90" stroke="#333" stroke-width="1.5"/>
  <text x="5" y="100" fill="#333" font-size="10">V</text>
  <!-- Wire to coil -->
  <line x1="30" y1="50" x2="100" y2="50" stroke="#333" stroke-width="2"/>
  <line x1="30" y1="150" x2="100" y2="150" stroke="#333" stroke-width="2"/>
  <!-- Coil (electromagnet) -->
  <rect x="100" y="60" width="60" height="80" rx="4" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/>
  <text x="108" y="95" fill="#6366f1">Coil</text>
  <text x="105" y="110" fill="#6366f1" font-size="9">(electromagnet)</text>
  <!-- Core (iron) -->
  <rect x="125" y="145" width="10" height="40" fill="#9ca3af" stroke="#4b5563" stroke-width="1"/>
  <text x="112" y="195" fill="#4b5563" font-size="9">iron core</text>
  <!-- Armature -->
  <line x1="120" y1="185" x2="250" y2="185" stroke="#b45309" stroke-width="3"/>
  <text x="145" y="178" fill="#b45309" font-size="9">armature</text>
  <!-- Pivot -->
  <polygon points="155,185 165,175 165,195" fill="#374151"/>
  <!-- Contacts -->
  <text x="200" y="120" fill="#6366f1" font-weight="bold">Switched Circuit</text>
  <line x1="240" y1="60" x2="240" y2="175" stroke="#666" stroke-width="2"/>
  <line x1="260" y1="60" x2="260" y2="155" stroke="#666" stroke-width="2"/>
  <circle cx="250" cy="175" r="5" fill="#10b981"/>
  <circle cx="260" cy="160" r="5" fill="#10b981" opacity="0.4"/>
  <text x="240" y="145" fill="#10b981" font-size="9">contacts</text>
  <!-- Load (motor) -->
  <rect x="265" y="80" width="40" height="30" rx="5" fill="#fef9c3" stroke="#d97706" stroke-width="2"/>
  <text x="272" y="100" fill="#d97706">Load</text>
  <line x1="305" y1="95" x2="330" y2="95" stroke="#d97706" stroke-width="2"/>
  <line x1="330" y1="60" x2="330" y2="95" stroke="#d97706" stroke-width="2"/>
  <line x1="240" y1="60" x2="330" y2="60" stroke="#d97706" stroke-width="2"/>
</svg>`,
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Key components: diode (one-way), LED (emits light), capacitor (stores charge), relay (electromagnetic switch for high-power loads), transistor (small base current controls large collector current).',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Diode=one-way, LED=light emitting, capacitor=stores charge, relay=electromagnetic switch, transistor=current amplifier/switch.',
    cues: [
      { id: 'cue-1', blockId: 'para-diode', prompt: 'What does a diode do and what is the typical forward voltage drop?', answer: 'Allows current in one direction only; ~0.7 V forward voltage drop (silicon).' },
      { id: 'cue-2', blockId: 'para-relay', prompt: 'Explain how a relay works.', answer: 'Small control current through a coil creates a magnetic field that attracts an armature, closing contacts in a high-power circuit.' },
      { id: 'cue-3', blockId: 'para-transistor', prompt: 'Name the three terminals of a BJT transistor and how it acts as a switch.', answer: 'Base, Collector, Emitter. A small base current switches on a larger collector-emitter current.' },
      { id: 'cue-4', blockId: 'para-capacitor', prompt: 'What is the function of a capacitor?', answer: 'Stores charge (energy) and can release it; used for smoothing, timing, and flash circuits.' },
    ],
  },
  evidence: [],
  mentions: [],
};
