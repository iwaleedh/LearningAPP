export const note_olevel_physics_4_3_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-3-1-circuit-symbols.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify and draw standard circuit symbols for all common electrical components.' },
    },
    {
      id: 'h-symbols',
      type: 'heading',
      data: { text: 'Standard Circuit Symbols', level: 2 },
    },
    {
      id: 'para-symbols',
      type: 'paragraph',
      data: {
        text: 'Circuit diagrams use agreed international symbols so engineers and students everywhere can read them. You must be able to recognise and draw all the symbols below.',
      },
    },
    {
      id: 'table-symbols',
      type: 'comparisonTable',
      data: {
        caption: 'Standard IEC/IGCSE circuit symbols',
        headers: ['Component', 'Symbol Description', 'Function'],
        rows: [
          ['Cell', 'Long + short line (long = positive terminal)', 'Single source of EMF'],
          ['Battery', 'Two or more cell symbols in series', 'Multiple cells providing higher EMF'],
          ['Switch (open)', 'Line with gap / lever lifted', 'Breaks the circuit (off)'],
          ['Switch (closed)', 'Continuous line / lever down', 'Completes the circuit (on)'],
          ['Resistor (fixed)', 'Rectangle', 'Fixed opposition to current'],
          ['Variable resistor (rheostat)', 'Rectangle with arrow through it', 'Adjustable resistance'],
          ['LDR', 'Rectangle with arrows pointing inward', 'Resistance decreases with light'],
          ['Thermistor', 'Rectangle with T and diagonal arrow', 'Resistance decreases with temperature'],
          ['Diode', 'Triangle pointing to bar (→|)', 'Allows current in one direction only'],
          ['LED (Light Emitting Diode)', 'Diode symbol with two arrows outward', 'Emits light when forward-biased'],
          ['Lamp (bulb)', 'Circle with X inside', 'Converts electrical energy to light and heat'],
          ['Voltmeter', 'Circle with V', 'Measures potential difference (in parallel)'],
          ['Ammeter', 'Circle with A', 'Measures current (in series)'],
          ['Galvanometer', 'Circle with G', 'Detects small currents'],
          ['Capacitor', 'Two parallel lines (plates)', 'Stores charge'],
          ['Inductor/coil', 'Series of loops', 'Creates magnetic field; used in transformers'],
          ['Earth/ground', 'Horizontal lines decreasing in length', 'Reference point at 0 V'],
          ['Fuse', 'Rectangle with line through', 'Melts if excess current breaks circuit'],
          ['Transformer', 'Two coils with iron core lines between', 'Changes AC voltage'],
        ],
      },
    },
    {
      id: 'svg-symbols',
      type: 'svg',
      data: {
        caption: 'Key circuit symbols: (1) Cell, (2) Resistor, (3) Variable resistor, (4) Lamp, (5) Diode, (6) LED, (7) Switch, (8) LDR',
        svg: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="10">
  <!-- 1. Cell -->
  <g transform="translate(10,10)">
    <line x1="10" y1="25" x2="20" y2="25" stroke="#374151" stroke-width="2"/>
    <line x1="20" y1="15" x2="20" y2="35" stroke="#374151" stroke-width="2.5"/>
    <line x1="25" y1="19" x2="25" y2="31" stroke="#374151" stroke-width="1"/>
    <line x1="25" y1="25" x2="38" y2="25" stroke="#374151" stroke-width="2"/>
    <text x="24" y="48" text-anchor="middle" fill="#475569">Cell</text>
  </g>
  <!-- 2. Resistor -->
  <g transform="translate(60,10)">
    <line x1="0" y1="25" x2="10" y2="25" stroke="#374151" stroke-width="2"/>
    <rect x="10" y="16" width="32" height="18" rx="2" fill="none" stroke="#374151" stroke-width="2"/>
    <line x1="42" y1="25" x2="52" y2="25" stroke="#374151" stroke-width="2"/>
    <text x="26" y="48" text-anchor="middle" fill="#475569">Resistor</text>
  </g>
  <!-- 3. Variable resistor -->
  <g transform="translate(130,10)">
    <line x1="0" y1="25" x2="10" y2="25" stroke="#374151" stroke-width="2"/>
    <rect x="10" y="16" width="32" height="18" rx="2" fill="none" stroke="#374151" stroke-width="2"/>
    <line x1="42" y1="25" x2="52" y2="25" stroke="#374151" stroke-width="2"/>
    <line x1="16" y1="34" x2="36" y2="16" stroke="#374151" stroke-width="1.5"/>
    <line x1="36" y1="10" x2="36" y2="16" stroke="#374151" stroke-width="1.5"/>
    <text x="26" y="48" text-anchor="middle" fill="#475569">Variable R</text>
  </g>
  <!-- 4. Lamp -->
  <g transform="translate(200,10)">
    <line x1="0" y1="25" x2="10" y2="25" stroke="#374151" stroke-width="2"/>
    <circle cx="25" cy="25" r="14" fill="none" stroke="#374151" stroke-width="2"/>
    <line x1="16" y1="16" x2="34" y2="34" stroke="#374151" stroke-width="2"/>
    <line x1="34" y1="16" x2="16" y2="34" stroke="#374151" stroke-width="2"/>
    <line x1="39" y1="25" x2="50" y2="25" stroke="#374151" stroke-width="2"/>
    <text x="25" y="50" text-anchor="middle" fill="#475569">Lamp</text>
  </g>
  <!-- 5. Diode -->
  <g transform="translate(268,10)">
    <line x1="0" y1="25" x2="12" y2="25" stroke="#374151" stroke-width="2"/>
    <polygon points="12,15 12,35 28,25" fill="#374151"/>
    <line x1="28" y1="15" x2="28" y2="35" stroke="#374151" stroke-width="2"/>
    <line x1="28" y1="25" x2="42" y2="25" stroke="#374151" stroke-width="2"/>
    <text x="21" y="48" text-anchor="middle" fill="#475569">Diode</text>
  </g>
  <!-- 6. Switch open -->
  <g transform="translate(330,10)">
    <line x1="0" y1="30" x2="12" y2="30" stroke="#374151" stroke-width="2"/>
    <circle cx="12" cy="30" r="3" fill="#374151"/>
    <circle cx="38" cy="30" r="3" fill="#374151"/>
    <line x1="12" y1="30" x2="34" y2="16" stroke="#374151" stroke-width="2"/>
    <line x1="38" y1="30" x2="50" y2="30" stroke="#374151" stroke-width="2"/>
    <text x="25" y="48" text-anchor="middle" fill="#475569">Switch</text>
  </g>
  <!-- 7. LDR (bottom row) -->
  <g transform="translate(60,110)">
    <line x1="0" y1="25" x2="10" y2="25" stroke="#374151" stroke-width="2"/>
    <rect x="10" y="16" width="32" height="18" rx="2" fill="none" stroke="#374151" stroke-width="2"/>
    <line x1="42" y1="25" x2="52" y2="25" stroke="#374151" stroke-width="2"/>
    <line x1="6" y1="8" x2="16" y2="18" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#ldarr)"/>
    <line x1="16" y1="5" x2="26" y2="15" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#ldarr)"/>
    <text x="26" y="48" text-anchor="middle" fill="#475569">LDR</text>
    <defs>
      <marker id="ldarr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
        <path d="M0,0 L0,5 L5,2.5 z" fill="#f59e0b"/>
      </marker>
    </defs>
  </g>
  <!-- 8. Capacitor -->
  <g transform="translate(145,110)">
    <line x1="0" y1="25" x2="18" y2="25" stroke="#374151" stroke-width="2"/>
    <line x1="18" y1="13" x2="18" y2="37" stroke="#374151" stroke-width="3"/>
    <line x1="24" y1="13" x2="24" y2="37" stroke="#374151" stroke-width="3"/>
    <line x1="24" y1="25" x2="42" y2="25" stroke="#374151" stroke-width="2"/>
    <text x="21" y="50" text-anchor="middle" fill="#475569">Capacitor</text>
  </g>
  <!-- 9. Fuse -->
  <g transform="translate(220,110)">
    <line x1="0" y1="25" x2="10" y2="25" stroke="#374151" stroke-width="2"/>
    <rect x="10" y="16" width="30" height="18" rx="2" fill="none" stroke="#374151" stroke-width="2"/>
    <line x1="10" y1="25" x2="40" y2="25" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,2"/>
    <line x1="40" y1="25" x2="50" y2="25" stroke="#374151" stroke-width="2"/>
    <text x="25" y="48" text-anchor="middle" fill="#475569">Fuse</text>
  </g>
</svg>`,
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Learn to draw each symbol from memory. Examiners often ask you to complete a circuit diagram. A voltmeter (V) in a circle always goes in <em>parallel</em>; an ammeter (A) in a circle always goes in <em>series</em>.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Circuit symbols are internationally standardised. Key symbols: cell, battery, switch, resistor, variable resistor, LDR, thermistor, diode, LED, lamp, voltmeter, ammeter, capacitor, fuse.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Standard circuit symbols: know 15+ components including cell, resistor, LDR, thermistor, diode, LED, lamp, ammeter, voltmeter.',
    cues: [
      { id: 'cue-1', blockId: 'table-symbols', prompt: 'What is the circuit symbol for a fixed resistor?', answer: 'A rectangle.' },
      { id: 'cue-2', blockId: 'table-symbols', prompt: 'How does the symbol for an LDR differ from a normal resistor?', answer: 'An LDR symbol is a resistor rectangle with two arrows pointing inward (representing incoming light).' },
      { id: 'cue-3', blockId: 'table-symbols', prompt: 'Describe the circuit symbol for a diode.', answer: 'A triangle (pointing direction of conventional current flow) with a vertical bar at its point: →|' },
      { id: 'cue-4', blockId: 'table-symbols', prompt: 'What symbol is used for a lamp in a circuit?', answer: 'A circle with an X inside.' },
      { id: 'cue-5', blockId: 'call-tip', prompt: 'Where are voltmeter and ammeter placed in a circuit?', answer: 'Voltmeter in parallel (across component); ammeter in series (in the same path as current).' },
    ],
  },
  evidence: [],
  mentions: [],
};
