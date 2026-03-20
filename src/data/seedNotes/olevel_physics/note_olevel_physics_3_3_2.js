export const note_olevel_physics_3_3_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-3-3-pitch-loudness.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain how pitch is related to frequency and how loudness is related to amplitude. Interpret oscilloscope traces of sound waves.' },
    },
    {
      id: 'h-pitch',
      type: 'heading',
      data: { text: 'Pitch', level: 2 },
    },
    {
      id: 'para-pitch',
      type: 'paragraph',
      data: { text: '<strong>Pitch</strong> describes how "high" or "low" a musical note sounds. Pitch is determined by the <strong>frequency</strong> of the sound wave. A higher frequency means more compressions pass a point per second — this is perceived as a higher pitch.' },
    },
    {
      id: 'callout-key-pitch',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Pitch and Frequency',
        text: 'Higher frequency → higher pitch (e.g. a piccolo)\nLower frequency → lower pitch (e.g. a bass guitar)\n\nOn an oscilloscope: higher pitch → waves are closer together (shorter distance between peaks)',
      },
    },
    {
      id: 'h-loud',
      type: 'heading',
      data: { text: 'Loudness', level: 2 },
    },
    {
      id: 'para-loud',
      type: 'paragraph',
      data: { text: '<strong>Loudness</strong> describes how much energy per second the sound wave carries to the ear. Loudness depends on the <strong>amplitude</strong> of the wave — the maximum displacement of air particles. A larger amplitude means particles are displaced more, so more energy is transferred.' },
    },
    {
      id: 'callout-key-loud',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Loudness and Amplitude',
        text: 'Larger amplitude → louder sound\nSmaller amplitude → quieter sound\n\nOn an oscilloscope: louder sound → taller waves (greater vertical height)',
      },
    },
    {
      id: 'h-scope',
      type: 'heading',
      data: { text: 'Reading Oscilloscope Traces', level: 2 },
    },
    {
      id: 'para-scope',
      type: 'paragraph',
      data: { text: 'A microphone connected to an oscilloscope converts sound into an electrical signal. The oscilloscope displays this as a wave trace. On the display: the <strong>horizontal axis</strong> represents time and the <strong>vertical axis</strong> represents displacement (signal voltage / amplitude).' },
    },
    {
      id: 'svg-traces',
      type: 'svg',
      data: {
        caption: 'Four oscilloscope traces showing combinations of high/low pitch and loud/quiet',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 340" width="500" height="340">
  <style>text{font-family:Arial,sans-serif;font-size:11px;fill:#1e293b;}</style>
  <!-- Grid helper: 4 panels in 2x2 -->
  <!-- Panel 1: High pitch, loud (top-left) -->
  <rect x="10" y="10" width="220" height="130" fill="#0f172a" stroke="#e2e8f0" stroke-width="1.5" rx="4"/>
  <text x="15" y="25" font-weight="bold" fill="#6366f1">High pitch, Loud</text>
  <line x1="10" y1="75" x2="230" y2="75" stroke="#e2e8f0" stroke-width="1"/>
  <!-- High pitch (close together) + large amplitude (tall) -->
  <path d="M20,75 C25,75 27,30 35,30 C43,30 45,75 50,75 C55,75 57,120 65,120 C73,120 75,75 80,75 C85,75 87,30 95,30 C103,30 105,75 110,75 C115,75 117,120 125,120 C133,120 135,75 140,75 C145,75 147,30 155,30 C163,30 165,75 170,75 C175,75 177,120 185,120 C193,120 195,75 200,75 C205,75 207,30 215,30 C223,30 225,75 230,75" stroke="#6366f1" stroke-width="2" fill="none"/>
  <text x="120" y="148" text-anchor="middle" fill="#64748b" font-size="10">→ High f, Large A</text>

  <!-- Panel 2: Low pitch, loud (top-right) -->
  <rect x="270" y="10" width="220" height="130" fill="#0f172a" stroke="#e2e8f0" stroke-width="1.5" rx="4"/>
  <text x="275" y="25" font-weight="bold" fill="#10b981">Low pitch, Loud</text>
  <line x1="270" y1="75" x2="490" y2="75" stroke="#e2e8f0" stroke-width="1"/>
  <!-- Low pitch (far apart) + large amplitude (tall) -->
  <path d="M275,75 C285,75 295,30 310,30 C325,30 335,75 345,75 C355,75 365,120 380,120 C395,120 405,75 415,75 C425,75 435,30 450,30 C465,30 475,75 485,75" stroke="#10b981" stroke-width="2" fill="none"/>
  <text x="380" y="148" text-anchor="middle" fill="#64748b" font-size="10">→ Low f, Large A</text>

  <!-- Panel 3: High pitch, quiet (bottom-left) -->
  <rect x="10" y="180" width="220" height="130" fill="#0f172a" stroke="#e2e8f0" stroke-width="1.5" rx="4"/>
  <text x="15" y="195" font-weight="bold" fill="#f59e0b">High pitch, Quiet</text>
  <line x1="10" y1="245" x2="230" y2="245" stroke="#e2e8f0" stroke-width="1"/>
  <!-- High pitch (close together) + small amplitude (short) -->
  <path d="M20,245 C25,245 27,225 35,225 C43,225 45,245 50,245 C55,245 57,265 65,265 C73,265 75,245 80,245 C85,245 87,225 95,225 C103,225 105,245 110,245 C115,245 117,265 125,265 C133,265 135,245 140,245 C145,245 147,225 155,225 C163,225 165,245 170,245 C175,245 177,265 185,265 C193,265 195,245 200,245 C205,245 207,225 215,225 C223,225 225,245 230,245" stroke="#f59e0b" stroke-width="2" fill="none"/>
  <text x="120" y="318" text-anchor="middle" fill="#64748b" font-size="10">→ High f, Small A</text>

  <!-- Panel 4: Low pitch, quiet (bottom-right) -->
  <rect x="270" y="180" width="220" height="130" fill="#0f172a" stroke="#e2e8f0" stroke-width="1.5" rx="4"/>
  <text x="275" y="195" font-weight="bold" fill="#ef4444">Low pitch, Quiet</text>
  <line x1="270" y1="245" x2="490" y2="245" stroke="#e2e8f0" stroke-width="1"/>
  <!-- Low pitch (far apart) + small amplitude (short) -->
  <path d="M275,245 C285,245 295,225 310,225 C325,225 335,245 345,245 C355,245 365,265 380,265 C395,265 405,245 415,245 C425,245 435,225 450,225 C465,225 475,245 485,245" stroke="#ef4444" stroke-width="2" fill="none"/>
  <text x="380" y="318" text-anchor="middle" fill="#64748b" font-size="10">→ Low f, Small A</text>
</svg>`,
      },
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Summary: what changes pitch and loudness',
        headers: ['Quality', 'Determined by', 'Higher value', 'Lower value'],
        rows: [
          ['Pitch', 'Frequency (f)', 'Higher pitch (waves closer together on scope)', 'Lower pitch (waves more spread out)'],
          ['Loudness', 'Amplitude (A)', 'Louder (taller waves on scope)', 'Quieter (shorter waves on scope)'],
        ],
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Reading Oscilloscope Traces',
        text: 'On an oscilloscope trace:\n• To compare PITCH: look at how close together the waves are (horizontal spacing)\n• To compare LOUDNESS: look at how tall the waves are (vertical height)\n• Pitch and loudness are independent — a sound can be high-pitched and quiet, or low-pitched and loud.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Pitch is determined by frequency: higher frequency = higher pitch. Loudness is determined by amplitude: larger amplitude = louder. On an oscilloscope, pitch is shown by how close together the waves are, and loudness by the height of the waves. These two properties are independent of each other.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Pitch ↔ frequency. Loudness ↔ amplitude. Oscilloscope: closely-spaced waves = high pitch; tall waves = loud.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-pitch', prompt: 'What property of a sound wave determines its pitch?', answer: 'Pitch is determined by frequency. Higher frequency produces a higher pitch. On an oscilloscope trace, higher pitch shows waves that are more closely spaced (shorter period).' },
      { id: 'cue-2', blockId: 'callout-key-loud', prompt: 'What property of a sound wave determines its loudness?', answer: 'Loudness is determined by amplitude. A larger amplitude means the air particles are displaced more — more energy is transferred to the ear — producing a louder sound.' },
      { id: 'cue-3', blockId: 'svg-traces', prompt: 'Describe what a low-pitched, loud sound looks like on an oscilloscope.', answer: 'The waves are widely spaced (long period = low frequency = low pitch) and tall (large amplitude = loud).' },
      { id: 'cue-4', blockId: 'tbl-compare', prompt: 'Can a sound have high pitch but low loudness? Explain.', answer: 'Yes. Pitch and loudness are independent: pitch depends on frequency, loudness depends on amplitude. A high-frequency wave can have a small amplitude, making it high-pitched but quiet.' },
    ],
  },
  evidence: [],
  mentions: [],
};
