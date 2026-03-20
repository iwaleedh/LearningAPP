export const note_olevel_physics_3_2_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-2-7-electromagnetic-spectrum.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the electromagnetic spectrum in order of wavelength and frequency. State that all EM waves travel at 3 × 10⁸ m/s in vacuum. Relate frequency to wavelength and energy.' },
    },
    {
      id: 'h-em',
      type: 'heading',
      data: { text: 'The Electromagnetic Spectrum', level: 2 },
    },
    {
      id: 'para-em',
      type: 'paragraph',
      data: { text: 'Electromagnetic (EM) waves are <strong>transverse waves</strong> that do not require a medium — they can travel through a vacuum. They are produced by oscillating electric and magnetic fields. All EM waves travel at the <strong>speed of light</strong> c = 3.0 × 10⁸ m/s in a vacuum, regardless of wavelength or frequency.' },
    },
    {
      id: 'svg-spectrum',
      type: 'svg',
      data: {
        caption: 'The electromagnetic spectrum from longest to shortest wavelength (radio waves to gamma rays)',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200" width="520" height="200">
  <style>text{font-family:Arial,sans-serif;font-size:10px;fill:#1e293b;}</style>
  <!-- Spectrum bar -->
  <defs>
    <linearGradient id="specGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#dc2626"/>
      <stop offset="30%" stop-color="#ea580c"/>
      <stop offset="45%" stop-color="#ca8a04"/>
      <stop offset="55%" stop-color="#16a34a"/>
      <stop offset="65%" stop-color="#2563eb"/>
      <stop offset="80%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#be185d"/>
    </linearGradient>
  </defs>
  <!-- Wavelength arrow -->
  <line x1="20" y1="18" x2="500" y2="18" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="500,18 492,14 492,22" fill="#94a3b8"/>
  <polygon points="20,18 28,14 28,22" fill="#94a3b8"/>
  <text x="220" y="13" fill="#64748b" text-anchor="middle" font-size="9">λ decreasing →</text>
  <!-- Frequency arrow -->
  <line x1="20" y1="30" x2="500" y2="30" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="500,30 492,26 492,34" fill="#94a3b8"/>
  <text x="280" y="42" fill="#64748b" text-anchor="middle" font-size="9">← f increasing  |  E increasing  →</text>
  <!-- Colored bands -->
  <rect x="20" y="55" width="72" height="50" fill="#6366f1" opacity="0.18" rx="3"/>
  <rect x="92" y="55" width="66" height="50" fill="#065f46" opacity="0.2" rx="3"/>
  <rect x="158" y="55" width="66" height="50" fill="#78350f" opacity="0.22" rx="3"/>
  <rect x="224" y="55" width="50" height="50" rx="3">
    <animate attributeName="fill" values="#dc2626;#ea580c;#ca8a04;#16a34a;#2563eb;#7c3aed;#dc2626" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.4;0.5;0.4;0.5;0.4;0.5;0.4" dur="4s" repeatCount="indefinite"/>
  </rect>
  <rect x="274" y="55" width="50" height="50" fill="#8b5cf6" opacity="0.2" rx="3"/>
  <rect x="324" y="55" width="80" height="50" fill="#6d28d9" opacity="0.18" rx="3"/>
  <rect x="404" y="55" width="96" height="50" fill="#ef4444" opacity="0.22" rx="3"/>
  <!-- Band labels -->
  <text x="56" y="76" text-anchor="middle" fill="#374151" font-weight="bold">Radio</text>
  <text x="125" y="76" text-anchor="middle" fill="#374151" font-weight="bold">Micro-</text>
  <text x="125" y="88" text-anchor="middle" fill="#374151" font-weight="bold">wave</text>
  <text x="191" y="76" text-anchor="middle" fill="#374151" font-weight="bold">Infra-</text>
  <text x="191" y="88" text-anchor="middle" fill="#374151" font-weight="bold">red</text>
  <text x="249" y="76" text-anchor="middle" fill="#374151" font-weight="bold">Visible</text>
  <text x="299" y="76" text-anchor="middle" fill="#374151" font-weight="bold">Ultra-</text>
  <text x="299" y="88" text-anchor="middle" fill="#374151" font-weight="bold">violet</text>
  <text x="364" y="76" text-anchor="middle" fill="#374151" font-weight="bold">X-rays</text>
  <text x="452" y="76" text-anchor="middle" fill="#374151" font-weight="bold">Gamma</text>
  <text x="452" y="88" text-anchor="middle" fill="#374151" font-weight="bold">rays</text>
  <!-- Wavelength scale -->
  <text x="36" y="118" text-anchor="middle" fill="#64748b" font-size="9">10³ m</text>
  <text x="102" y="118" text-anchor="middle" fill="#64748b" font-size="9">10⁻² m</text>
  <text x="168" y="118" text-anchor="middle" fill="#64748b" font-size="9">10⁻⁵ m</text>
  <text x="249" y="118" text-anchor="middle" fill="#64748b" font-size="9">10⁻⁷ m</text>
  <text x="299" y="118" text-anchor="middle" fill="#64748b" font-size="9">10⁻⁸ m</text>
  <text x="364" y="118" text-anchor="middle" fill="#64748b" font-size="9">10⁻¹⁰ m</text>
  <text x="452" y="118" text-anchor="middle" fill="#64748b" font-size="9">10⁻¹² m</text>
  <text x="260" y="148" fill="#374151" text-anchor="middle" font-size="10">All EM waves travel at c = 3 × 10⁸ m/s in vacuum</text>
  <text x="260" y="165" fill="#374151" text-anchor="middle" font-size="10">Increasing frequency → decreasing wavelength → increasing photon energy</text>
</svg>`,
      },
    },
    {
      id: 'h-table',
      type: 'heading',
      data: { text: 'EM Spectrum Summary Table', level: 2 },
    },
    {
      id: 'tbl-em',
      type: 'comparisonTable',
      data: {
        caption: 'Electromagnetic spectrum — approximate wavelengths, sources and common uses',
        headers: ['Type', 'Approximate λ', 'Source / Detection', 'Key Uses', 'Hazard'],
        rows: [
          ['Radio waves', '> 1 mm to km', 'Electrical oscillations in aerials', 'Broadcasting, communication', 'Low (non-ionising)'],
          ['Microwaves', '1 mm – 10 cm', 'Microwave generators, satellites', 'Cooking, mobile phones, satellites', 'Internal heating of tissue'],
          ['Infrared (IR)', '700 nm – 1 mm', 'Hot objects, IR LEDs', 'Remote controls, thermal cameras, optical fibre', 'Skin burns'],
          ['Visible light', '400 – 700 nm', 'Stars, LEDs, flames', 'Sight, photography, optical fibres', 'Eye damage at high intensity'],
          ['Ultraviolet (UV)', '10 – 400 nm', 'Sun, UV lamps', 'Sterilisation, sunbeds, security marking', 'Skin cancer (ionising at high E)'],
          ['X-rays', '0.01 – 10 nm', 'X-ray tubes (high-energy electrons)', 'Medical imaging, airport security', 'Cell damage, cancer (ionising)'],
          ['Gamma rays (γ)', '< 0.01 nm', 'Radioactive nuclei', 'Cancer treatment (radiotherapy), sterilising equipment', 'Cell damage, cancer (strongly ionising)'],
        ],
      },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Properties of All EM Waves',
        text: '• All travel at c = 3 × 10⁸ m/s in vacuum (and approximately this in air)\n• All are transverse waves\n• Obey v = fλ\n• Can transfer energy\n• Can travel through vacuum\n• Higher frequency → higher energy per photon',
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Memory Aid — Order of EM Spectrum',
        text: '"Raging Martians Invaded Venus Using X-ray Guns"\nRadio – Microwave – Infrared – Visible – Ultraviolet – X-ray – Gamma',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'The EM spectrum (Radio, Microwave, IR, Visible, UV, X-ray, Gamma) consists of transverse waves all travelling at c = 3.0 × 10⁸ m/s in vacuum. Moving from radio to gamma: wavelength decreases, frequency increases, photon energy increases. Higher energy EM waves (UV, X-ray, gamma) can ionise atoms and are more hazardous.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'EM spectrum: Radio→Micro→IR→Visible→UV→X-ray→Gamma. All at c = 3×10⁸ m/s. Higher f → shorter λ → higher energy.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'State three properties shared by all electromagnetic waves.', answer: '(1) All travel at c = 3 × 10⁸ m/s in vacuum. (2) All are transverse waves. (3) All can travel through vacuum. (4) Obey v = fλ.' },
      { id: 'cue-2', blockId: 'tbl-em', prompt: 'List the EM spectrum from longest to shortest wavelength.', answer: 'Radio, Microwave, Infrared, Visible (ROYGBIV), Ultraviolet, X-ray, Gamma.' },
      { id: 'cue-3', blockId: 'tbl-em', prompt: 'Which parts of the EM spectrum are ionising and therefore most dangerous?', answer: 'Ultraviolet (high-energy end), X-rays, and Gamma rays are ionising — they have enough energy to knock electrons from atoms, potentially damaging DNA and causing cancer.' },
      { id: 'cue-4', blockId: 'svg-spectrum', prompt: 'How does photon energy change across the EM spectrum?', answer: 'Photon energy is proportional to frequency. Moving from radio waves to gamma rays: frequency increases, wavelength decreases, and energy per photon increases.' },
    ],
  },
  evidence: [],
  mentions: [],
};
