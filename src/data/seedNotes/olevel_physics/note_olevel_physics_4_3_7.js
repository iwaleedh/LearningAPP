export const note_olevel_physics_4_3_7 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-3-8-ac-and-dc.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Distinguish between alternating current (AC) and direct current (DC) and describe their oscilloscope waveforms.' },
    },
    {
      id: 'h-dc',
      type: 'heading',
      data: { text: 'Direct Current (DC)', level: 2 },
    },
    {
      id: 'para-dc',
      type: 'paragraph',
      data: {
        text: '<strong>Direct current (DC)</strong> flows in one direction only and has a constant (or steady) voltage. Sources include batteries and power packs. On a CRO, DC shows as a <strong>horizontal straight line</strong>. Most electronic components (LEDs, transistors, ICs) require DC.',
      },
    },
    {
      id: 'h-ac',
      type: 'heading',
      data: { text: 'Alternating Current (AC)', level: 2 },
    },
    {
      id: 'para-ac',
      type: 'paragraph',
      data: {
        text: '<strong>Alternating current (AC)</strong> repeatedly reverses direction, producing a sinusoidal waveform. The UK mains supply is AC at <strong>230 V rms</strong> with a frequency of <strong>50 Hz</strong>. On a CRO, AC shows as a <strong>sine wave</strong>.',
      },
    },
    {
      id: 'h-rms',
      type: 'heading',
      data: { text: 'RMS Voltage', level: 2 },
    },
    {
      id: 'para-rms',
      type: 'paragraph',
      data: {
        text: 'The <strong>root mean square (rms)</strong> voltage is the equivalent DC voltage that delivers the same power. For a sinusoidal AC supply:',
      },
    },
    {
      id: 'eq-rms',
      type: 'equation',
      data: {
        html: 'V<sub>rms</sub> = <span class="nb-frac"><span class="nb-num">V<sub>peak</sub></span><span class="nb-den">√2</span></span> ≈ 0.707 × V<sub>peak</sub>',
        caption: 'UK mains: V_peak ≈ 325 V → V_rms = 230 V',
      },
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'AC vs DC Comparison',
        headers: ['Feature', 'AC', 'DC'],
        rows: [
          ['Direction of flow', 'Reverses periodically', 'One direction only'],
          ['Voltage', 'Sinusoidal (varies)', 'Constant (steady)'],
          ['CRO trace', 'Sine wave', 'Horizontal straight line'],
          ['UK mains', '230 V rms, 50 Hz', 'N/A (from batteries)'],
          ['Transmission', 'Easy to step up/down with transformers', 'Cannot use transformers easily'],
          ['Uses', 'Mains supply, motors', 'Electronics, batteries, DC motors'],
        ],
      },
    },
    {
      id: 'svg-waves',
      type: 'svg',
      data: {
        caption: 'CRO traces: AC sine wave (top) and DC flat line (bottom)',
        svg: `<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <!-- AC panel -->
  <rect x="5" y="5" width="180" height="110" rx="8" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
  <text x="60" y="20" fill="#6366f1" font-weight="bold" font-size="11">AC Signal</text>
  <line x1="10" y1="60" x2="180" y2="60" stroke="#334155" stroke-width="1"/>
  <path d="M10,60 C28,20 50,20 70,60 C90,100 112,100 130,60 C148,20 170,20 180,60"
        stroke="#22d3ee" stroke-width="2.5" fill="none"/>
  <text x="10" y="75" fill="#94a3b8" font-size="9">0 V centre</text>
  <text x="10" y="108" fill="#6b7280" font-size="9">Frequency = 50 Hz | 230 V rms</text>

  <!-- DC panel -->
  <rect x="200" y="5" width="175" height="110" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="252" y="20" fill="#10b981" font-weight="bold" font-size="11">DC Signal</text>
  <line x1="205" y1="55" x2="370" y2="55" stroke="#334155" stroke-width="1"/>
  <line x1="205" y1="40" x2="370" y2="40" stroke="#10b981" stroke-width="3"/>
  <text x="205" y="75" fill="#94a3b8" font-size="9">steady voltage</text>
  <text x="205" y="108" fill="#6b7280" font-size="9">e.g. 6 V battery → flat line at +6 V</text>

  <!-- Legend -->
  <rect x="5" y="125" width="370" height="90" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
  <text x="15" y="143" fill="#374151" font-weight="bold" font-size="11">Key Points</text>
  <line x1="15" y1="162" x2="35" y2="162" stroke="#22d3ee" stroke-width="2.5"/>
  <text x="40" y="166" fill="#374151" font-size="10">AC — sine wave, 50 Hz in UK, 230 V rms (peak ≈ 325 V)</text>
  <line x1="15" y1="182" x2="35" y2="182" stroke="#10b981" stroke-width="2.5"/>
  <text x="40" y="186" fill="#374151" font-size="10">DC — horizontal line, constant V, from batteries or rectifiers</text>
  <text x="15" y="205" fill="#6b7280" font-size="9">V_rms = V_peak ÷ √2 ≈ 0.707 × V_peak</text>
</svg>`,
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The 230 V figure for UK mains is the RMS value, not the peak. The actual peak voltage is about 325 V. If an exam question says "mains supply of 230 V", it means 230 V rms. State this explicitly.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'DC: constant voltage, one direction, flat CRO line. AC: reversing direction, sinusoidal trace, 50 Hz / 230 V rms in UK. V_rms = V_peak / √2.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'DC: constant, one direction, flat trace. AC: alternating, sine wave, 50 Hz, 230 V rms in UK.',
    cues: [
      { id: 'cue-1', blockId: 'para-dc', prompt: 'What does a DC signal look like on a CRO?', answer: 'A horizontal straight line (constant voltage, steady level).' },
      { id: 'cue-2', blockId: 'para-ac', prompt: 'State the frequency and rms voltage of the UK mains AC supply.', answer: '50 Hz and 230 V rms.' },
      { id: 'cue-3', blockId: 'eq-rms', prompt: 'What is the peak voltage of a 230 V rms supply?', answer: 'V_peak = V_rms × √2 = 230 × 1.414 ≈ 325 V.' },
      { id: 'cue-4', blockId: 'table-compare', prompt: 'Why is AC used for mains electricity transmission rather than DC?', answer: 'AC voltage can be easily stepped up or down using transformers, making long-distance transmission at high voltage (low current, low energy loss) practical. DC cannot use transformers.' },
    ],
  },
  evidence: [],
  mentions: [],
};
