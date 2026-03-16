export const note_olevel_physics_3_3_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-3-4-ultrasound.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define ultrasound. Apply d = vt / 2 to calculate distances using ultrasound pulses. Describe medical and non-medical uses of ultrasound.' },
    },
    {
      id: 'h-definition',
      type: 'heading',
      data: { text: 'What is Ultrasound?', level: 2 },
    },
    {
      id: 'para-definition',
      type: 'paragraph',
      data: { text: '<strong>Ultrasound</strong> is sound with a frequency <strong>above 20 000 Hz (20 kHz)</strong> — above the upper limit of human hearing. It has the same properties as audible sound: it is longitudinal, requires a medium, and travels at approximately 340 m/s in air and 1500 m/s in tissue/water.' },
    },
    {
      id: 'callout-key-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Ultrasound Frequency',
        text: 'Ultrasound: f > 20 000 Hz (20 kHz)\nMedical ultrasound typically uses frequencies of 1–20 MHz (1 000 000 – 20 000 000 Hz)\nHigher frequency → shorter wavelength → better resolution (sharper image)',
      },
    },
    {
      id: 'h-distance',
      type: 'heading',
      data: { text: 'Calculating Distance Using Ultrasound', level: 2 },
    },
    {
      id: 'para-dist',
      type: 'paragraph',
      data: { text: 'An ultrasound transducer sends out a <strong>pulse</strong>. The pulse reflects off a surface (e.g. tissue boundary) and returns to the transducer. By measuring the time t between sending and receiving the pulse, and knowing the speed v of ultrasound, the distance d to the boundary can be found:' },
    },
    {
      id: 'eq-dist',
      type: 'equation',
      data: {
        html: 'd = <span class="nb-frac"><span class="nb-num">v × t</span><span class="nb-den">2</span></span>',
        caption: 'distance = (speed × time) ÷ 2 — divide by 2 because pulse travels to boundary and back',
      },
    },
    {
      id: 'svg-ultrasound',
      type: 'svg',
      data: {
        caption: 'Ultrasound pulse emitted by probe, reflected at tissue boundary and detected back at probe',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 210" width="480" height="210">
  <style>text{font-family:Arial,sans-serif;font-size:11px;fill:#1e293b;}</style>
  <defs>
    <marker id="ahU" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0,8 3,0 6" fill="#6366f1"/>
    </marker>
    <marker id="ahUr" markerWidth="8" markerHeight="6" refX="1" refY="3" orient="auto">
      <polygon points="8 0,0 3,8 6" fill="#10b981"/>
    </marker>
  </defs>
  <!-- Probe -->
  <rect x="15" y="60" width="40" height="80" fill="#475569" rx="5"/>
  <rect x="55" y="80" width="8" height="40" fill="#6366f1" rx="2"/>
  <text x="35" y="158" text-anchor="middle" fill="#475569">Probe</text>
  <!-- Body region -->
  <rect x="63" y="55" width="280" height="90" fill="#fef3c7" stroke="#f59e0b" stroke-width="1" rx="3"/>
  <text x="160" y="155" text-anchor="middle" fill="#f59e0b">Tissue (v ≈ 1500 m/s)</text>
  <!-- Tissue boundary -->
  <line x1="343" y1="55" x2="343" y2="145" stroke="#ef4444" stroke-width="2" stroke-dasharray="6 3"/>
  <text x="348" y="52" fill="#ef4444" font-size="10">Boundary</text>
  <!-- Outgoing pulse -->
  <line x1="63" y1="92" x2="338" y2="92" stroke="#6366f1" stroke-width="2" marker-end="url(#ahU)" stroke-dasharray="10 5"/>
  <text x="200" y="83" text-anchor="middle" fill="#6366f1">Pulse →</text>
  <!-- Returning echo -->
  <line x1="338" y1="108" x2="63" y2="108" stroke="#10b981" stroke-width="2" marker-end="url(#ahUr)" stroke-dasharray="10 5"/>
  <text x="200" y="124" text-anchor="middle" fill="#10b981">← Echo returns</text>
  <!-- Distance label -->
  <line x1="63" y1="175" x2="342" y2="175" stroke="#64748b" stroke-width="1"/>
  <line x1="63" y1="170" x2="63" y2="180" stroke="#64748b"/>
  <line x1="342" y1="170" x2="342" y2="180" stroke="#64748b"/>
  <text x="202" y="190" text-anchor="middle" fill="#64748b">d</text>
  <!-- Timer -->
  <text x="35" y="200" text-anchor="middle" fill="#1e293b" font-size="10">Timer starts when</text>
  <text x="35" y="210" text-anchor="middle" fill="#1e293b" font-size="10">pulse sent; stops when echo received</text>
  <text x="400" y="100" fill="#1e293b" font-size="10" text-anchor="middle">d = vt/2</text>
</svg>`,
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'An ultrasound pulse travels through tissue (speed = 1500 m/s). The echo from an organ boundary returns after 0.00008 s (80 μs). How far away is the boundary?\n\nd = vt/2 = (1500 × 0.00008) / 2 = 0.12 / 2 = 0.06 m = 6 cm',
      },
    },
    {
      id: 'h-medical',
      type: 'heading',
      data: { text: 'Medical Uses of Ultrasound', level: 2 },
    },
    {
      id: 'list-med',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Prenatal scanning</strong> — safe imaging of developing fetus (no ionising radiation, unlike X-rays)' },
          { text: '<strong>Organ imaging</strong> — liver, kidneys, heart (echocardiogram) and gallbladder scans' },
          { text: '<strong>Breaking kidney stones</strong> (lithotripsy) — focused ultrasound breaks calcified stones without surgery' },
          { text: '<strong>Measuring blood flow</strong> — Doppler ultrasound detects frequency shift of reflected pulses from moving blood cells' },
        ],
      },
    },
    {
      id: 'h-nonmed',
      type: 'heading',
      data: { text: 'Non-Medical Uses', level: 2 },
    },
    {
      id: 'list-nonmed',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>SONAR</strong> (Sound Navigation and Ranging) — ships send pulses downward to map seabed depth or detect submarines; d = vt/2' },
          { text: '<strong>Flaw detection in metals</strong> — ultrasound reflects off cracks or voids inside metal; used in weld inspection and aircraft maintenance' },
          { text: '<strong>Industrial cleaning</strong> — high-frequency vibrations in liquid dislodge dirt from delicate surfaces (e.g. jewellery, surgical instruments)' },
          { text: '<strong>Animal navigation</strong> — bats and dolphins use ultrasound echolocation naturally' },
        ],
      },
    },
    {
      id: 'callout-advantage',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Advantage of Ultrasound over X-rays in Medicine',
        text: 'Ultrasound is non-ionising — it does not damage DNA. This makes it safe for repeated use and for imaging fetuses. X-rays are ionising and can cause cell damage, so they carry more risk.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Ultrasound is sound above 20 kHz. Pulses are sent and the time for the echo to return is used to find distance: d = vt/2. Medical uses include fetal scanning, organ imaging, and kidney stone treatment. Non-medical uses include SONAR, flaw detection, and cleaning. Ultrasound is preferred over X-rays in medicine as it is non-ionising.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Ultrasound f > 20 kHz. d = vt/2. Medical: fetal scans, organ imaging (safe — non-ionising). SONAR maps seabed.',
    cues: [
      { id: 'cue-1', blockId: 'para-definition', prompt: 'Define ultrasound.', answer: 'Ultrasound is sound with a frequency above 20 000 Hz (20 kHz) — above the upper limit of human hearing. It has the same properties as audible sound but a shorter wavelength.' },
      { id: 'cue-2', blockId: 'eq-dist', prompt: 'State the formula for measuring distance using ultrasound and explain the factor of 2.', answer: 'd = vt/2. The factor of 2 is because the pulse has to travel to the boundary and back again, so the total distance travelled is 2d, but we want just d.' },
      { id: 'cue-3', blockId: 'callout-we1', prompt: 'Ultrasound travels at 1500 m/s through tissue. An echo returns after 0.0002 s. How deep is the reflecting boundary?', answer: 'd = vt/2 = (1500 × 0.0002) / 2 = 0.3 / 2 = 0.15 m = 15 cm.' },
      { id: 'cue-4', blockId: 'callout-advantage', prompt: 'Why is ultrasound used instead of X-rays for prenatal scanning?', answer: 'Ultrasound is non-ionising, so it does not damage DNA or harm the developing fetus. X-rays are ionising and can damage cells, making them risky for repeated use or for imaging unborn babies.' },
    ],
  },
  evidence: [],
  mentions: [],
};
