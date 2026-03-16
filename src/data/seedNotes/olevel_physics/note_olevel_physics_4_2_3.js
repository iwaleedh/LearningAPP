export const note_olevel_physics_4_2_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-2-4-resistance.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: "Define resistance, apply Ohm's law (R = V/I), and compare ohmic and non-ohmic conductors using I–V graphs." },
    },
    {
      id: 'h-resistance',
      type: 'heading',
      data: { text: 'Resistance', level: 2 },
    },
    {
      id: 'para-resistance',
      type: 'paragraph',
      data: {
        text: '<strong>Resistance</strong> is the opposition to the flow of electric current. A high-resistance component requires a larger voltage to drive the same current. The SI unit is the <strong>ohm (Ω)</strong>.',
      },
    },
    {
      id: 'eq-resistance',
      type: 'equation',
      data: {
        html: 'R = <span class="nb-frac"><span class="nb-num">V</span><span class="nb-den">I</span></span>',
        caption: 'R = resistance (Ω), V = voltage (V), I = current (A) — Ohm\'s Law',
      },
    },
    {
      id: 'call-key-ohm',
      type: 'callout',
      data: {
        style: 'key',
        title: "Ohm's Law",
        text: "For a metallic conductor at <strong>constant temperature</strong>, current is <em>directly proportional</em> to voltage: I ∝ V. The resistance R = V/I remains constant. This is <strong>Ohm's Law</strong>.",
      },
    },
    {
      id: 'h-ohmic',
      type: 'heading',
      data: { text: 'Ohmic Conductors', level: 2 },
    },
    {
      id: 'para-ohmic',
      type: 'paragraph',
      data: {
        text: 'An <strong>ohmic conductor</strong> obeys Ohm\'s law — its I–V graph is a straight line through the origin. Resistance stays constant regardless of voltage or current. Example: a metal wire or fixed resistor at constant temperature.',
      },
    },
    {
      id: 'h-non-ohmic',
      type: 'heading',
      data: { text: 'Non-Ohmic Conductors', level: 2 },
    },
    {
      id: 'para-non-ohmic',
      type: 'paragraph',
      data: {
        text: 'Some components do <em>not</em> obey Ohm\'s law — their resistance changes with current or voltage:',
      },
    },
    {
      id: 'table-non-ohmic',
      type: 'comparisonTable',
      data: {
        caption: 'Examples of non-ohmic conductors',
        headers: ['Component', 'Behaviour', 'I–V Graph Shape'],
        rows: [
          ['Filament lamp', 'Resistance increases as temperature rises (filament heats up)', 'Curved: gradient decreases at high V'],
          ['Diode (semiconductor)', 'Low resistance in forward bias; very high resistance in reverse bias', 'Flat then steep curve; reverse bias essentially zero current'],
          ['Thermistor (NTC)', 'Resistance decreases as temperature increases', 'Curved; steeper gradient at higher V/T'],
          ['LDR', 'Resistance decreases as light intensity increases', 'Changes with light, not a simple V–I relationship'],
        ],
      },
    },
    {
      id: 'svg-iv-graphs',
      type: 'svg',
      data: {
        caption: 'I–V graphs: (A) ohmic resistor, (B) filament lamp (resistance increases), (C) diode (forward then blocked)',
        svg: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="11">
  <!-- Graph A: Ohmic -->
  <g transform="translate(10,10)">
    <rect width="110" height="110" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="10" y1="100" x2="105" y2="100" stroke="#94a3b8" stroke-width="1"/>
    <line x1="10" y1="5" x2="10" y2="105" stroke="#94a3b8" stroke-width="1"/>
    <text x="60" y="112" text-anchor="middle" fill="#64748b" font-size="9">V →</text>
    <text x="4" y="55" text-anchor="middle" fill="#64748b" font-size="9" transform="rotate(-90,4,55)">I →</text>
    <!-- Straight line through origin -->
    <line x1="10" y1="100" x2="105" y2="5" stroke="#6366f1" stroke-width="2"/>
    <text x="55" y="125" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="bold">A: Ohmic</text>
  </g>
  <!-- Graph B: Filament lamp -->
  <g transform="translate(155,10)">
    <rect width="110" height="110" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="10" y1="100" x2="105" y2="100" stroke="#94a3b8" stroke-width="1"/>
    <line x1="10" y1="5" x2="10" y2="105" stroke="#94a3b8" stroke-width="1"/>
    <text x="60" y="112" text-anchor="middle" fill="#64748b" font-size="9">V →</text>
    <text x="4" y="55" text-anchor="middle" fill="#64748b" font-size="9" transform="rotate(-90,4,55)">I →</text>
    <!-- Curve: initially steep then flattens (I increases slowly) -->
    <path d="M10,100 Q40,40 105,20" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <text x="55" y="125" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="bold">B: Filament lamp</text>
  </g>
  <!-- Graph C: Diode -->
  <g transform="translate(300,10)">
    <rect width="110" height="110" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="55" y1="100" x2="105" y2="100" stroke="#94a3b8" stroke-width="1"/>
    <line x1="10" y1="100" x2="55" y2="100" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="3,2"/>
    <line x1="55" y1="5" x2="55" y2="105" stroke="#94a3b8" stroke-width="1"/>
    <text x="80" y="112" text-anchor="middle" fill="#64748b" font-size="9">V fwd →</text>
    <text x="25" y="112" text-anchor="middle" fill="#64748b" font-size="9">← rev V</text>
    <text x="48" y="55" text-anchor="middle" fill="#64748b" font-size="9" transform="rotate(-90,48,55)">I →</text>
    <!-- Forward: stays low then shoots up -->
    <path d="M55,100 L80,99 Q90,95 105,5" fill="none" stroke="#10b981" stroke-width="2"/>
    <!-- Reverse: very low current (flat line along axis) -->
    <line x1="10" y1="102" x2="55" y2="102" stroke="#10b981" stroke-width="1.5"/>
    <text x="55" y="125" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="bold">C: Diode</text>
  </g>
</svg>`,
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A resistor has a voltage of 12 V across it and a current of 0.4 A through it. Calculate its resistance.\n\nR = V/I = 12/0.4 = 30 Ω',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'R = V/I in ohms. Ohmic conductors (metal wire, resistor): straight I–V graph. Non-ohmic (filament lamp, diode): curved/non-linear I–V. Resistance of filament lamp increases as it heats up.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'R = V/I; ohmic: straight I–V at constant temp; non-ohmic: lamp curves (hotter → higher R); diode: one-way.',
    cues: [
      { id: 'cue-1', blockId: 'eq-resistance', prompt: 'State the equation for resistance (Ohm\'s Law).', answer: 'R = V/I, where R is in ohms (Ω), V is in volts, I is in amperes.' },
      { id: 'cue-2', blockId: 'para-ohmic', prompt: 'What does the I–V graph of an ohmic conductor look like?', answer: 'A straight line through the origin — current is directly proportional to voltage; resistance is constant.' },
      { id: 'cue-3', blockId: 'table-non-ohmic', prompt: 'Why does the resistance of a filament lamp increase as voltage increases?', answer: 'Because increased current heats the filament, increasing its temperature, which increases resistance.' },
      { id: 'cue-4', blockId: 'table-non-ohmic', prompt: 'What is the difference in behaviour of a diode in forward and reverse bias?', answer: 'In forward bias, very low resistance — current flows easily. In reverse bias, very high resistance — almost no current flows.' },
    ],
  },
  evidence: [],
  mentions: [],
};
