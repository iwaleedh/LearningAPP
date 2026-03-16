export const note_olevel_physics_4_3_8 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-3-9-safety-and-household-electricity.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the wiring of a 3-pin plug and explain the functions of fuses, MCBs, RCDs, and earthing in household safety.' },
    },
    {
      id: 'h-plug',
      type: 'heading',
      data: { text: 'The 3-Pin Plug', level: 2 },
    },
    {
      id: 'para-plug',
      type: 'paragraph',
      data: {
        text: 'A UK 3-pin plug contains three wires, each colour-coded for identification. The fuse is located in the live pin of the plug.',
      },
    },
    {
      id: 'table-wires',
      type: 'comparisonTable',
      data: {
        caption: '3-Pin Plug Wire Summary',
        headers: ['Wire', 'Colour', 'Pin', 'Function'],
        rows: [
          ['Live', 'Brown', 'Right (larger)', 'Carries current at high voltage (~230 V) into the appliance'],
          ['Neutral', 'Blue', 'Left (larger)', 'Carries current back to the supply at near 0 V'],
          ['Earth', 'Green/Yellow', 'Top (longest)', 'Safety wire — carries fault current to earth, prevents electric shock'],
        ],
      },
    },
    {
      id: 'svg-plug',
      type: 'svg',
      data: {
        caption: 'UK 3-pin plug wiring diagram',
        svg: `<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <!-- Plug body -->
  <rect x="60" y="30" width="200" height="140" rx="20" fill="#e5e7eb" stroke="#9ca3af" stroke-width="2"/>
  <!-- Cable entry -->
  <rect x="130" y="160" width="60" height="25" rx="4" fill="#d1d5db" stroke="#9ca3af" stroke-width="1.5"/>
  <!-- Earth pin (top) -->
  <rect x="145" y="45" width="18" height="30" rx="3" fill="#374151" stroke="#374151"/>
  <text x="168" y="65" fill="#374151">Earth (Top)</text>
  <!-- Live pin (right) -->
  <rect x="215" y="95" width="18" height="28" rx="3" fill="#374151" stroke="#374151"/>
  <text x="235" y="113" fill="#92400e">Live (R)</text>
  <!-- Neutral pin (left) -->
  <rect x="75" y="95" width="18" height="28" rx="3" fill="#374151" stroke="#374151"/>
  <text x="12" y="113" fill="#1e40af">Neutral (L)</text>
  <!-- Wire colours inside -->
  <!-- Earth wire -->
  <line x1="154" y1="75" x2="154" y2="162" stroke="#16a34a" stroke-width="4"/>
  <line x1="154" y1="162" x2="160" y2="170" stroke="#16a34a" stroke-width="4"/>
  <!-- Neutral wire -->
  <line x1="84" y1="123" x2="84" y2="155" stroke="#2563eb" stroke-width="4"/>
  <line x1="84" y1="155" x2="152" y2="170" stroke="#2563eb" stroke-width="4"/>
  <!-- Live wire + fuse -->
  <rect x="205" y="135" width="25" height="10" rx="3" fill="#fef9c3" stroke="#d97706" stroke-width="2"/>
  <text x="202" y="130" fill="#d97706" font-size="9">fuse</text>
  <line x1="224" y1="123" x2="224" y2="135" stroke="#b45309" stroke-width="4"/>
  <line x1="205" y1="140" x2="175" y2="155" stroke="#b45309" stroke-width="4"/>
  <line x1="175" y1="155" x2="160" y2="170" stroke="#b45309" stroke-width="4"/>
  <!-- Legend -->
  <rect x="5" y="185" width="310" height="40" rx="5" fill="#f9fafb" stroke="#e5e7eb"/>
  <line x1="12" y1="200" x2="30" y2="200" stroke="#16a34a" stroke-width="3"/>
  <text x="34" y="204" fill="#374151">Earth (green/yellow)</text>
  <line x1="120" y1="200" x2="138" y2="200" stroke="#2563eb" stroke-width="3"/>
  <text x="142" y="204" fill="#374151">Neutral (blue)</text>
  <line x1="215" y1="200" x2="233" y2="200" stroke="#b45309" stroke-width="3"/>
  <text x="237" y="204" fill="#374151">Live (brown)</text>
</svg>`,
      },
    },
    {
      id: 'h-fuse',
      type: 'heading',
      data: { text: 'Fuse', level: 2 },
    },
    {
      id: 'para-fuse',
      type: 'paragraph',
      data: {
        text: 'A <strong>fuse</strong> contains a thin wire with a low melting point. If the current exceeds the rated value (e.g. 3 A, 5 A, or 13 A), the wire melts and breaks the circuit. The fuse is placed in the <strong>live wire</strong>. Common ratings: 3 A for devices below 720 W; 13 A for devices 720 W–3 kW.',
      },
    },
    {
      id: 'h-mcb',
      type: 'heading',
      data: { text: 'Miniature Circuit Breaker (MCB)', level: 2 },
    },
    {
      id: 'para-mcb',
      type: 'paragraph',
      data: {
        text: 'An <strong>MCB</strong> uses an electromagnet or bimetal strip to automatically trip (open) a switch when current exceeds a safe level. Unlike a fuse, it can be <strong>reset by pressing a button</strong> and reused. MCBs are used in consumer unit (fusebox) to protect individual circuits.',
      },
    },
    {
      id: 'h-rcd',
      type: 'heading',
      data: { text: 'Residual Current Device (RCD)', level: 2 },
    },
    {
      id: 'para-rcd',
      type: 'paragraph',
      data: {
        text: 'An <strong>RCD</strong> detects differences between the current in the live wire and the neutral wire. In a healthy circuit these are equal; if a person touches a live wire, current leaks to earth — the RCD detects a difference as small as <strong>30 mA</strong> and trips within <strong>30 ms</strong>, far faster than a fuse.',
      },
    },
    {
      id: 'h-earth',
      type: 'heading',
      data: { text: 'Earth Wire', level: 2 },
    },
    {
      id: 'para-earth',
      type: 'paragraph',
      data: {
        text: 'The <strong>earth wire</strong> connects the metal case of an appliance to earth (0 V). If a fault causes the live wire to touch the casing, a large current flows through the earth wire → fuse blows or MCB trips, cutting power. This prevents the casing from becoming "live" and causing an electric shock.',
      },
    },
    {
      id: 'table-safety',
      type: 'comparisonTable',
      data: {
        caption: 'Safety Device Comparison',
        headers: ['Device', 'How it protects', 'Reusable?', 'Speed'],
        rows: [
          ['Fuse', 'Wire melts when current too high', 'No — must replace', 'Slow (~100 ms)'],
          ['MCB', 'Electromagnet trips switch', 'Yes — reset button', 'Moderate'],
          ['RCD', 'Detects imbalance (30 mA)', 'Yes — reset button', 'Fast (<30 ms)'],
          ['Earth wire', 'Low-resistance path for fault current', 'Always present', 'Immediate'],
        ],
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Double insulated appliances (marked ◻◻) do not need an earth wire. The RCD is the fastest and most sensitive safety device. Fuses and MCBs protect against overload; RCDs protect against earth faults and electric shock.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'UK 3-pin plug: live (brown), neutral (blue), earth (green/yellow). Fuse melts on overcurrent; MCB trips and resets; RCD detects 30 mA imbalance in 30 ms. Earth wire diverts fault current safely.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Plug: live=brown, neutral=blue, earth=green/yellow. Fuse melts; MCB trips (reusable); RCD detects 30 mA earth fault in 30 ms.',
    cues: [
      { id: 'cue-1', blockId: 'table-wires', prompt: 'State the colour code for the live, neutral, and earth wires in a UK plug.', answer: 'Live = brown, neutral = blue, earth = green/yellow.' },
      { id: 'cue-2', blockId: 'para-fuse', prompt: 'Why is a fuse placed in the live wire rather than the neutral wire?', answer: 'To disconnect the appliance from the high-voltage live supply when the fuse blows, making the appliance safe.' },
      { id: 'cue-3', blockId: 'para-rcd', prompt: 'How does an RCD protect against electric shock?', answer: 'Detects a difference ≥ 30 mA between live and neutral currents (indicating current leaking to earth through a person) and trips within 30 ms.' },
      { id: 'cue-4', blockId: 'para-earth', prompt: 'Explain how earthing protects a person touching a faulty metal-cased appliance.', answer: 'The earth wire provides a low-resistance path to earth; fault current flows through it, causes the fuse/MCB to blow, cutting the supply before the person can receive a dangerous shock.' },
    ],
  },
  evidence: [],
  mentions: [],
};
