export const note_olevel_physics_3_1_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-1-3-wave-equation.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply the wave equation v = fλ to find wave speed, frequency or wavelength. Know approximate values for the speed of sound and speed of light.' },
    },
    {
      id: 'h-equation',
      type: 'heading',
      data: { text: 'The Wave Equation', level: 2 },
    },
    {
      id: 'para-derive',
      type: 'paragraph',
      data: { text: 'In one second, a source producing <em>f</em> waves emits a total waveform of length <em>f × λ</em> (f waves, each of length λ). The front of this waveform has therefore travelled <em>f × λ</em> metres — which equals the wave speed <em>v</em>.' },
    },
    {
      id: 'eq-wave',
      type: 'equation',
      data: {
        html: 'v = f × λ',
        caption: 'wave speed (m/s) = frequency (Hz) × wavelength (m)',
      },
    },
    {
      id: 'callout-rearrange',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rearrangements',
        text: 'f = v ÷ λ    (find frequency)\nλ = v ÷ f    (find wavelength)\n\nUse the triangle: write v on top, f × λ on bottom. Cover the unknown to get the formula.',
      },
    },
    {
      id: 'h-speeds',
      type: 'heading',
      data: { text: 'Standard Wave Speeds', level: 2 },
    },
    {
      id: 'tbl-speeds',
      type: 'comparisonTable',
      data: {
        caption: 'Important wave speeds to memorise',
        headers: ['Wave / Medium', 'Speed', 'Notes'],
        rows: [
          ['Sound in air (20°C)', '≈ 340 m/s', 'Increases with temperature'],
          ['Sound in water', '≈ 1500 m/s', 'Denser/stiffer medium → faster sound'],
          ['Sound in steel', '≈ 5000 m/s', 'Very stiff solid — much faster'],
          ['Light (EM waves) in vacuum', '3.0 × 10⁸ m/s', 'c — the universal constant for all EM waves'],
          ['Light in glass', '≈ 2.0 × 10⁸ m/s', 'Slower in optically dense media'],
        ],
      },
    },
    {
      id: 'h-worked',
      type: 'heading',
      data: { text: 'Worked Examples', level: 2 },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 1 — Find wave speed',
        text: 'A sound wave in air has frequency 680 Hz and wavelength 0.50 m.\nCalculate the wave speed.\n\nv = fλ = 680 × 0.50 = 340 m/s',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 2 — Find frequency',
        text: 'A light wave has wavelength 600 nm (6.0 × 10⁻⁷ m) and speed 3.0 × 10⁸ m/s.\nCalculate the frequency.\n\nf = v / λ = (3.0 × 10⁸) ÷ (6.0 × 10⁻⁷) = 5.0 × 10¹⁴ Hz',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 3 — Find wavelength',
        text: 'A radio station broadcasts at frequency 100 MHz (1.0 × 10⁸ Hz).\nCalculate the wavelength of the wave.\n\nλ = v / f = (3.0 × 10⁸) ÷ (1.0 × 10⁸) = 3.0 m',
      },
    },
    {
      id: 'callout-we4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 4 — Double-step problem',
        text: 'A wave has period 0.005 s and wavelength 1.7 m.\nStep 1: Find frequency.  f = 1/T = 1/0.005 = 200 Hz\nStep 2: Find speed.  v = fλ = 200 × 1.7 = 340 m/s',
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips — Unit Conversions',
        text: 'Convert before calculating:\n• MHz → Hz: multiply by 10⁶ (e.g. 100 MHz = 1 × 10⁸ Hz)\n• nm → m: multiply by 10⁻⁹ (e.g. 500 nm = 5 × 10⁻⁷ m)\n• cm → m: divide by 100\n• km → m: multiply by 1000',
      },
    },
    {
      id: 'checklist-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can state v = fλ and rearrange it for f and λ', checked: false },
          { text: 'I know speed of sound in air ≈ 340 m/s', checked: false },
          { text: 'I know speed of light = 3 × 10⁸ m/s', checked: false },
          { text: 'I can convert units (MHz, nm, etc.) before substituting', checked: false },
        ],
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Wave equation: v = fλ (rearrange to f = v/λ or λ = v/f). Speed of sound in air ≈ 340 m/s; speed of light in vacuum = 3.0 × 10⁸ m/s. Always convert units before substituting values.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'v = fλ. Speed of sound ≈ 340 m/s in air. Speed of light = 3 × 10⁸ m/s in vacuum.',
    cues: [
      { id: 'cue-1', blockId: 'eq-wave', prompt: 'State the wave equation, defining each symbol with its unit.', answer: 'v = fλ. v = wave speed (m/s), f = frequency (Hz), λ = wavelength (m).' },
      { id: 'cue-2', blockId: 'callout-we1', prompt: 'A wave has frequency 200 Hz and wavelength 0.68 m. Calculate its speed.', answer: 'v = fλ = 200 × 0.68 = 136 m/s.' },
      { id: 'cue-3', blockId: 'tbl-speeds', prompt: 'What is the approximate speed of sound in air and the speed of light in vacuum?', answer: 'Speed of sound in air ≈ 340 m/s. Speed of light in vacuum = 3.0 × 10⁸ m/s.' },
      { id: 'cue-4', blockId: 'callout-we2', prompt: 'A light wave has wavelength 400 nm (4.0 × 10⁻⁷ m). Calculate its frequency.', answer: 'f = v/λ = (3.0 × 10⁸) ÷ (4.0 × 10⁻⁷) = 7.5 × 10¹⁴ Hz.' },
    ],
  },
  evidence: [],
  mentions: [],
};
