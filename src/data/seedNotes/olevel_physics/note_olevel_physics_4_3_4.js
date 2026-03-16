export const note_olevel_physics_4_3_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-3-5-digital-and-analogue.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Compare analogue and digital signals and understand why digital signals are preferred for communication.' },
    },
    {
      id: 'h-analogue',
      type: 'heading',
      data: { text: 'Analogue Signals', level: 2 },
    },
    {
      id: 'para-analogue',
      type: 'paragraph',
      data: {
        text: 'An <strong>analogue signal</strong> is continuous and can take any value within a range. Examples: sound waves, temperature readings, older radio/TV broadcasts. The signal varies smoothly over time — it can have any amplitude at any instant.',
      },
    },
    {
      id: 'h-digital',
      type: 'heading',
      data: { text: 'Digital Signals', level: 2 },
    },
    {
      id: 'para-digital',
      type: 'paragraph',
      data: {
        text: 'A <strong>digital signal</strong> can only take two discrete values: <strong>0 (low/off)</strong> or <strong>1 (high/on)</strong>. Modern computers, CDs, mobile phones, and internet data all use digital signals. Data is transmitted as a series of pulses.',
      },
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Analogue vs Digital Signal Comparison',
        headers: ['Feature', 'Analogue', 'Digital'],
        rows: [
          ['Values', 'Continuously variable', 'Only 0 or 1'],
          ['Noise immunity', 'Poor — noise adds to signal', 'Good — original 0/1 easily restored'],
          ['Quality degradation', 'Accumulates with distance', 'Regeneration restores signal exactly'],
          ['Examples', 'Microphone, thermostat', 'Computer data, CD, internet'],
          ['Copying', 'Quality lost each copy', 'Perfect copy every time'],
        ],
      },
    },
    {
      id: 'h-noise',
      type: 'heading',
      data: { text: 'Noise and Signal Regeneration', level: 2 },
    },
    {
      id: 'para-noise',
      type: 'paragraph',
      data: {
        text: 'All signals pick up <strong>noise</strong> (random electrical interference) as they travel. For an analogue signal, noise is impossible to remove because it is indistinguishable from the original. For a digital signal, any value above a threshold is read as 1 and below as 0, so noise can be stripped out and the clean 0/1 signal regenerated exactly.',
      },
    },
    {
      id: 'svg-signals',
      type: 'svg',
      data: {
        caption: 'Analogue signal (smooth curve) vs digital signal (square wave pulses)',
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <!-- Analogue panel -->
  <rect x="5" y="5" width="185" height="190" rx="8" fill="#f0f9ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="50" y="22" fill="#6366f1" font-weight="bold" font-size="12">Analogue</text>
  <!-- Axes -->
  <line x1="20" y1="100" x2="180" y2="100" stroke="#9ca3af" stroke-width="1"/>
  <line x1="25" y1="30" x2="25" y2="170" stroke="#9ca3af" stroke-width="1"/>
  <text x="85" y="185" fill="#6b7280" font-size="9">time →</text>
  <text x="7" y="90" fill="#6b7280" font-size="9">V</text>
  <!-- Sine wave -->
  <path d="M25,100 C45,40 65,40 80,100 C95,160 115,160 130,100 C145,40 165,40 175,100" 
        stroke="#6366f1" stroke-width="2.5" fill="none"/>
  <!-- Noisy version -->
  <path d="M25,100 C42,38 60,44 78,102 C92,158 112,162 130,99 C147,37 161,42 175,101" 
        stroke="#ef4444" stroke-width="1.5" fill="none" stroke-dasharray="4,3" opacity="0.7"/>
  <text x="30" y="145" fill="#ef4444" font-size="9">+noise</text>

  <!-- Digital panel -->
  <rect x="210" y="5" width="185" height="190" rx="8" fill="#f0fdf4" stroke="#10b981" stroke-width="1.5"/>
  <text x="265" y="22" fill="#10b981" font-weight="bold" font-size="12">Digital</text>
  <line x1="225" y1="130" x2="385" y2="130" stroke="#9ca3af" stroke-width="1"/>
  <line x1="230" y1="40" x2="230" y2="170" stroke="#9ca3af" stroke-width="1"/>
  <text x="295" y="185" fill="#6b7280" font-size="9">time →</text>
  <text x="212" y="90" fill="#6b7280" font-size="9">V</text>
  <!-- Digital pulses -->
  <polyline points="230,130 230,55 260,55 260,130 280,130 280,55 320,55 320,130 340,130 340,55 375,55 375,130"
            stroke="#10b981" stroke-width="2.5" fill="none"/>
  <text x="236" y="50" fill="#10b981" font-size="9">1</text>
  <text x="236" y="145" fill="#10b981" font-size="9">0</text>
</svg>`,
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Key advantage of digital: noise can be removed by regeneration. Key advantage of analogue: matches the original continuous physical quantity directly. Questions often ask WHY digital is better — the answer is always noise immunity / regeneration.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Analogue = continuous, any value, noise degrades. Digital = 0 or 1 only, noise removed by regeneration, perfect copying. Digital preferred for communications due to noise immunity.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Analogue: continuous, noise degrades. Digital: binary (0/1), noise can be regenerated out.',
    cues: [
      { id: 'cue-1', blockId: 'para-analogue', prompt: 'What is an analogue signal?', answer: 'A continuous signal that can take any value within a range (e.g. sound wave, thermometer reading).' },
      { id: 'cue-2', blockId: 'para-digital', prompt: 'What are the only two possible values in a digital signal?', answer: '0 (low/off) and 1 (high/on).' },
      { id: 'cue-3', blockId: 'para-noise', prompt: 'Why is a digital signal more resistant to noise than an analogue signal?', answer: 'The signal can be regenerated exactly from the 0/1 values; noise changes the amplitude but not the binary interpretation, so it can be stripped out.' },
      { id: 'cue-4', blockId: 'table-compare', prompt: 'State two advantages of digital signals over analogue signals.', answer: '1. Better noise immunity (regeneration). 2. Perfect copying with no quality loss each time.' },
    ],
  },
  evidence: [],
  mentions: [],
};
