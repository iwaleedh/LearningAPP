export const note_olevel_physics_4_3_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-3-7-cathode-ray-oscilloscope.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use a cathode ray oscilloscope to measure the amplitude, period, and frequency of an AC signal.' },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'The Cathode Ray Oscilloscope (CRO)', level: 2 },
    },
    {
      id: 'para-intro',
      type: 'paragraph',
      data: {
        text: 'A <strong>cathode ray oscilloscope (CRO)</strong> displays voltage signals as a trace on a calibrated screen grid. The horizontal axis represents <strong>time</strong> and the vertical axis represents <strong>voltage</strong>. Two key controls determine the scale.',
      },
    },
    {
      id: 'h-controls',
      type: 'heading',
      data: { text: 'Key Controls', level: 2 },
    },
    {
      id: 'table-controls',
      type: 'comparisonTable',
      data: {
        caption: 'CRO Controls',
        headers: ['Control', 'Units', 'What it sets'],
        rows: [
          ['Y-gain (V/div)', 'Volts per division (V/cm)', 'How many volts each vertical grid square represents'],
          ['Time base (time/div)', 'Seconds per division (ms/cm)', 'How many milliseconds each horizontal grid square represents'],
        ],
      },
    },
    {
      id: 'h-reading',
      type: 'heading',
      data: { text: 'Reading the CRO Trace', level: 2 },
    },
    {
      id: 'list-reading',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<strong>Amplitude</strong> = (peak height in divisions) × (Y-gain setting). Peak height = half the full vertical span of the wave.' },
          { text: '<strong>Period (T)</strong> = (number of divisions per cycle) × (time base setting).' },
          { text: '<strong>Frequency (f)</strong> = 1 ÷ T.' },
        ],
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'Y-gain = 2 V/div. Time base = 5 ms/div.\nTrace: peaks are 3 divisions above centre line. One complete cycle spans 4 divisions horizontally.\n\nAmplitude = 3 × 2 = 6 V\nPeriod T = 4 × 5 ms = 20 ms = 0.020 s\nFrequency f = 1/0.020 = 50 Hz',
      },
    },
    {
      id: 'svg-cro',
      type: 'svg',
      data: {
        caption: 'CRO screen showing a sine wave with amplitude and period labelled',
        svg: `<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <!-- Screen border -->
  <rect x="10" y="10" width="260" height="200" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="3"/>
  <!-- Grid lines horizontal -->
  <line x1="10" y1="50" x2="270" y2="50" stroke="#1e3a5f" stroke-width="1"/>
  <line x1="10" y1="90" x2="270" y2="90" stroke="#1e3a5f" stroke-width="1"/>
  <line x1="10" y1="110" x2="270" y2="110" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="3,3"/>
  <!-- centre -->
  <line x1="10" y1="130" x2="270" y2="130" stroke="#1e3a5f" stroke-width="1"/>
  <line x1="10" y1="170" x2="270" y2="170" stroke="#1e3a5f" stroke-width="1"/>
  <!-- Grid lines vertical -->
  <line x1="75" y1="10" x2="75" y2="210" stroke="#1e3a5f" stroke-width="1"/>
  <line x1="140" y1="10" x2="140" y2="210" stroke="#1e3a5f" stroke-width="1"/>
  <line x1="205" y1="10" x2="205" y2="210" stroke="#1e3a5f" stroke-width="1"/>
  <!-- Centre axis -->
  <line x1="10" y1="110" x2="270" y2="110" stroke="#374151" stroke-width="1"/>
  <!-- Sine wave -->
  <path d="M10,110 C30,50 50,50 75,110 C100,170 120,170 140,110 C160,50 180,50 205,110 C230,170 250,170 270,110"
        stroke="#22d3ee" stroke-width="2.5" fill="none"/>
  <!-- Labels -->
  <text x="280" y="115" fill="#6b7280" font-size="10">0 V</text>
  <text x="280" y="55" fill="#22d3ee" font-size="10">+V</text>
  <text x="280" y="175" fill="#22d3ee" font-size="10">−V</text>
  <!-- Amplitude arrow -->
  <line x1="248" y1="55" x2="248" y2="110" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="248" y1="165" x2="248" y2="110" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="252" y="88" fill="#f59e0b" font-size="9">Amplitude</text>
  <!-- Period arrow -->
  <line x1="75" y1="220" x2="205" y2="220" stroke="#10b981" stroke-width="1.5"/>
  <line x1="75" y1="215" x2="75" y2="225" stroke="#10b981" stroke-width="1.5"/>
  <line x1="205" y1="215" x2="205" y2="225" stroke="#10b981" stroke-width="1.5"/>
  <text x="110" y="238" fill="#10b981" font-size="10">Period (T) = 1 cycle</text>
  <!-- Settings box -->
  <rect x="10" y="218" width="120" height="35" rx="4" fill="#1e293b" stroke="#6366f1" stroke-width="1"/>
  <text x="16" y="232" fill="#94a3b8" font-size="9">Y-gain: 2 V/div</text>
  <text x="16" y="246" fill="#94a3b8" font-size="9">Time base: 5 ms/div</text>
</svg>`,
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always count from crest to trough for full amplitude on the screen = 2 × peak. Amplitude = half × full span × Y-gain. For the period, measure ONE complete cycle (crest to next crest) in divisions, then multiply by time base.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'CRO: x-axis = time, y-axis = voltage. Y-gain sets V/div; time base sets time/div. Amplitude = peak divs × Y-gain. Period T = cycle divs × TB. Frequency f = 1/T.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'CRO: x=time (time base), y=voltage (Y-gain). Amplitude = peak divs × Y-gain. Period = cycle divs × time base. f = 1/T.',
    cues: [
      { id: 'cue-1', blockId: 'table-controls', prompt: 'What does the Y-gain control on a CRO set?', answer: 'The number of volts represented by each vertical division (V/div or V/cm).' },
      { id: 'cue-2', blockId: 'list-reading', prompt: 'How do you calculate the period from a CRO trace?', answer: 'Count the number of divisions for one complete cycle, then multiply by the time base setting.' },
      { id: 'cue-3', blockId: 'call-worked', prompt: 'Y-gain = 5 V/div. The peak is 2.5 divisions above the centre. What is the amplitude?', answer: '2.5 × 5 = 12.5 V.' },
      { id: 'cue-4', blockId: 'call-worked', prompt: 'Time base = 10 ms/div. One complete cycle takes 4 divisions. Find T and f.', answer: 'T = 4 × 10 = 40 ms = 0.04 s; f = 1/0.04 = 25 Hz.' },
    ],
  },
  evidence: [],
  mentions: [],
};
