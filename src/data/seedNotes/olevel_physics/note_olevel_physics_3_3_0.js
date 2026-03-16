export const note_olevel_physics_3_3_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-3-1-sound-waves.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the nature of sound waves as longitudinal mechanical waves requiring a medium. State the audible frequency range and compare the speed of sound in different media.' },
    },
    {
      id: 'h-nature',
      type: 'heading',
      data: { text: 'The Nature of Sound', level: 2 },
    },
    {
      id: 'para-nature',
      type: 'paragraph',
      data: { text: 'Sound is a <strong>longitudinal, mechanical wave</strong>. It is produced when a vibrating object (e.g. a speaker cone, vocal cords, a guitar string) causes nearby air molecules to vibrate back and forth. These vibrations are transmitted through the medium as alternating regions of high pressure (<strong>compressions</strong>) and low pressure (<strong>rarefactions</strong>).' },
    },
    {
      id: 'list-nature',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Longitudinal</strong> — particles oscillate parallel to the direction of energy transfer' },
          { text: '<strong>Mechanical</strong> — requires a medium (particles to vibrate); cannot travel through a vacuum' },
          { text: '<strong>Transfers energy</strong> without transferring matter; particles vibrate about fixed positions' },
          { text: '<strong>Speed</strong> depends on the properties of the medium (elasticity and density)' },
        ],
      },
    },
    {
      id: 'svg-sound',
      type: 'svg',
      data: {
        caption: 'Sound wave from a vibrating speaker showing compressions (C) and rarefactions (R)',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" width="500" height="200">
  <style>text{font-family:Arial,sans-serif;font-size:11px;fill:#1e293b;}</style>
  <!-- Speaker -->
  <polygon points="25,70 25,130 50,130 70,150 70,50 50,70" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
  <text x="35" y="165" fill="#64748b" font-size="10">Speaker</text>
  <!-- Vibration indicator -->
  <line x1="15" y1="95" x2="15" y2="105" stroke="#ef4444" stroke-width="3"/>
  <line x1="8" y1="90" x2="8" y2="110" stroke="#ef4444" stroke-width="2" opacity="0.6"/>
  <!-- Wave compressions and rarefactions -->
  <!-- C1 at ~100 -->
  <rect x="85" y="55" width="26" height="90" fill="#6366f1" opacity="0.4" rx="3"/>
  <!-- R1 at ~130 -->
  <rect x="120" y="55" width="44" height="90" fill="#e0e7ff" opacity="0.3" rx="3"/>
  <!-- C2 at ~175 -->
  <rect x="173" y="55" width="26" height="90" fill="#6366f1" opacity="0.4" rx="3"/>
  <!-- R2 at ~210 -->
  <rect x="208" y="55" width="44" height="90" fill="#e0e7ff" opacity="0.3" rx="3"/>
  <!-- C3 at ~263 -->
  <rect x="261" y="55" width="26" height="90" fill="#6366f1" opacity="0.4" rx="3"/>
  <!-- R3 at ~298 -->
  <rect x="296" y="55" width="44" height="90" fill="#e0e7ff" opacity="0.3" rx="3"/>
  <!-- C4 -->
  <rect x="349" y="55" width="26" height="90" fill="#6366f1" opacity="0.4" rx="3"/>
  <!-- R4 -->
  <rect x="384" y="55" width="44" height="90" fill="#e0e7ff" opacity="0.3" rx="3"/>
  <!-- Dots representing air molecules -->
  <circle cx="98" cy="100" r="3" fill="#6366f1"/>
  <circle cx="106" cy="100" r="3" fill="#6366f1"/>
  <circle cx="98" cy="88" r="3" fill="#6366f1"/>
  <circle cx="106" cy="112" r="3" fill="#6366f1"/>
  <circle cx="142" cy="100" r="3" fill="#6366f1" opacity="0.5"/>
  <circle cx="155" cy="100" r="3" fill="#6366f1" opacity="0.4"/>
  <circle cx="168" cy="100" r="3" fill="#6366f1" opacity="0.4"/>
  <!-- Labels -->
  <text x="98" y="50" text-anchor="middle" fill="#4338ca" font-weight="bold" font-size="12">C</text>
  <text x="142" y="50" text-anchor="middle" fill="#7e838f" font-size="12">R</text>
  <text x="186" y="50" text-anchor="middle" fill="#4338ca" font-weight="bold" font-size="12">C</text>
  <text x="230" y="50" text-anchor="middle" fill="#7e838f" font-size="12">R</text>
  <!-- Direction arrow -->
  <line x1="82" y1="175" x2="440" y2="175" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="440,175 432,171 432,179" fill="#94a3b8"/>
  <text x="260" y="192" text-anchor="middle" fill="#64748b">Direction of wave travel →</text>
</svg>`,
      },
    },
    {
      id: 'h-vacuum',
      type: 'heading',
      data: { text: 'Sound Cannot Travel in a Vacuum', level: 2 },
    },
    {
      id: 'para-vacuum',
      type: 'paragraph',
      data: { text: 'The <strong>bell jar experiment</strong> demonstrates this: a ringing bell or buzzer is placed inside a glass bell jar. As air is pumped out, the sound fades even though the bell can still be seen vibrating. In a complete vacuum, no sound is heard. This proves sound requires a medium.' },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Sound Cannot Travel Through Vacuum',
        text: 'Sound needs particles to transfer energy through compressions and rarefactions. A vacuum has no particles, so sound cannot propagate. This is why explosions in space are silent (unlike in films!).',
      },
    },
    {
      id: 'h-speed',
      type: 'heading',
      data: { text: 'Speed of Sound in Different Media', level: 2 },
    },
    {
      id: 'para-speed',
      type: 'paragraph',
      data: { text: 'Sound travels faster in media where particles are closer together (denser) and interact more strongly. Rigid solids transmit vibration most efficiently; gases are least efficient.' },
    },
    {
      id: 'tbl-speeds',
      type: 'comparisonTable',
      data: {
        caption: 'Approximate speed of sound in different media',
        headers: ['Medium', 'Speed of Sound', 'Notes'],
        rows: [
          ['Air (at 20 °C)', '≈ 340 m/s', 'Speed increases with temperature (~+0.6 m/s per °C)'],
          ['Water', '≈ 1500 m/s', 'Used by sonar systems and marine animals'],
          ['Steel', '≈ 5100 m/s', 'Rigid bonds transmit vibration very efficiently'],
          ['Vacuum', '0 m/s', 'Sound cannot travel — no medium'],
        ],
      },
    },
    {
      id: 'h-range',
      type: 'heading',
      data: { text: 'Frequency Range of Sound', level: 2 },
    },
    {
      id: 'tbl-range',
      type: 'comparisonTable',
      data: {
        caption: 'Classification by frequency',
        headers: ['Name', 'Frequency Range', 'Examples'],
        rows: [
          ['Infrasound', '< 20 Hz', 'Earthquakes, elephant communication, wind turbines'],
          ['Audible sound', '20 Hz – 20 000 Hz', 'Human hearing range; speech, music'],
          ['Ultrasound', '> 20 000 Hz (20 kHz)', 'Medical scanning, sonar, bats, dogs'],
        ],
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The human audible range is 20 Hz to 20 kHz (20 000 Hz). Ultrasound (above 20 kHz) is used in medicine and SONAR. Infrasound (below 20 Hz) can be detected by animals like elephants for long-range communication.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Sound is a longitudinal mechanical wave propagated as compressions and rarefactions. It cannot travel through a vacuum. Speed of sound in air ≈ 340 m/s; faster in liquids and fastest in solids. Human audible range: 20 Hz to 20 kHz. Above 20 kHz = ultrasound; below 20 Hz = infrasound.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Sound = longitudinal mechanical wave. Needs medium (no vacuum). Speed: air ≈340 m/s, water ≈1500 m/s. Audible: 20 Hz–20 kHz.',
    cues: [
      { id: 'cue-1', blockId: 'para-nature', prompt: 'Why is sound described as a longitudinal mechanical wave?', answer: 'Longitudinal because particles oscillate parallel to the direction of energy transfer. Mechanical because it requires a material medium — it cannot travel through a vacuum.' },
      { id: 'cue-2', blockId: 'para-vacuum', prompt: 'Describe the bell jar experiment and what it proves.', answer: 'A ringing bell is placed in a bell jar. As air is pumped out, the sound fades to nothing even though the bell can still be seen vibrating. This proves that sound requires a medium (air particles) to travel.' },
      { id: 'cue-3', blockId: 'tbl-speeds', prompt: 'In which medium does sound travel fastest — air, water, or steel? Why?', answer: 'Steel. Sound travels fastest in solids because the particles are very close together and bonded rigidly, allowing vibrations to be transmitted very efficiently. Air has widely spaced particles, so sound is slowest.' },
      { id: 'cue-4', blockId: 'tbl-range', prompt: 'What is the human audible range? What is ultrasound?', answer: 'Humans can hear frequencies from 20 Hz to 20 000 Hz (20 kHz). Ultrasound is any sound with frequency above 20 kHz — beyond human hearing.' },
    ],
  },
  evidence: [],
  mentions: [],
};
