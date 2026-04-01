export const note_olevel_physics_5_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/5 Nuclear Physics/5-2-1-detection-of-radiation.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Describe how ionising radiation is detected; explain background radiation and why it must be subtracted from measurements.' } },
    { id: 'h-detectors', type: 'heading', data: { text: 'Radiation Detectors', level: 2 } },
    { id: 'h-gm', type: 'heading', data: { text: 'Geiger-Müller (GM) Tube', level: 3 } },
    { id: 'para-gm', type: 'paragraph', data: { text: 'The <strong>Geiger-Müller tube</strong> is the most common laboratory detector for ionising radiation. It consists of a sealed tube containing a low-pressure inert gas (usually argon) with a thin mica window at one end and a central anode wire. When ionising radiation enters, it ionises the gas atoms. The freed electrons are accelerated towards the anode by a high voltage (≈400 V), causing a cascade of further ionisations (an avalanche). Each cascade produces a brief pulse of electric current, counted electronically and shown on a rate-meter or digital counter.' } },
    { id: 'svg-gm-tube', type: 'svg', data: { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 230" width="480" height="230">
  <rect width="480" height="230" fill="#0f172a" rx="8"/>
  <text x="240" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Geiger-Müller Tube (cross-section)</text>
  <!-- Tube body -->
  <rect x="100" y="60" width="260" height="120" rx="10" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
  <!-- Mica window -->
  <rect x="96" y="80" width="10" height="80" rx="3" fill="#78350f" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="80" y="118" text-anchor="middle" font-size="9" fill="#d97706">mica</text>
  <text x="80" y="130" text-anchor="middle" font-size="9" fill="#d97706">window</text>
  <!-- Central anode wire -->
  <line x1="106" y1="120" x2="360" y2="120" stroke="#dc2626" stroke-width="2.5"/>
  <text x="235" y="110" text-anchor="middle" font-size="9" fill="#dc2626">anode wire (+)</text>
  <!-- Cathode cylinder edge -->
  <text x="235" y="175" text-anchor="middle" font-size="9" fill="#475569">cathode (−) cylinder wall</text>
  <!-- Argon gas label -->
  <text x="235" y="98" text-anchor="middle" font-size="9" fill="#1d4ed8">Low-pressure argon gas</text>
  <!-- Ionisation event -->
  <circle cx="200" cy="135" r="4" fill="#f97316"/>
  <text x="200" y="148" text-anchor="middle" font-size="8" fill="#f97316">ion pair</text>
  <!-- Arrow to anode -->
  <line x1="200" y1="133" x2="200" y2="123" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arr-red)"/>
  <!-- Incoming radiation arrow -->
  <line x1="60" y1="120" x2="96" y2="120" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr-purple)"/>
  <text x="40" y="112" text-anchor="middle" font-size="9" fill="#1d4ed8">α, β</text>
  <text x="40" y="124" text-anchor="middle" font-size="9" fill="#1d4ed8">or γ</text>
  <!-- Output -->
  <rect x="360" y="100" width="80" height="40" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="400" y="117" text-anchor="middle" font-size="10" fill="#10b981">Counter /</text>
  <text x="400" y="131" text-anchor="middle" font-size="10" fill="#10b981">Rate-meter</text>
  <line x1="360" y1="120" x2="350" y2="120" stroke="#10b981" stroke-width="1.5"/>
  <defs>
    <marker id="arr-red" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker>
    <marker id="arr-purple" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#1d4ed8"/></marker>
  </defs>
</svg>`, caption: 'GM tube: radiation enters through mica window, ionises low-pressure gas, producing a pulse counted electronically.' } },
    { id: 'h-other-detectors', type: 'heading', data: { text: 'Other Detectors', level: 2 } },
    { id: 'list-other', type: 'list', data: { style: 'bullet', items: [
      { text: '<strong>Cloud chamber:</strong> Supercooled vapour condenses along the trail of ions left by radiation, making particle tracks visible. Alpha particles leave short, thick, straight tracks; beta particles leave thin, curving tracks.' },
      { text: '<strong>Photographic film badge:</strong> Worn by radiation workers. Film darkens in proportion to radiation received; different filters detect different types. Used to monitor accumulated dose.' },
      { text: '<strong>Spark counter:</strong> High voltage between wire and gauze. Radiation ionises the air, causing sparks, which can be counted.' },
    ]}},
    { id: 'h-background', type: 'heading', data: { text: 'Background Radiation', level: 2 } },
    { id: 'call-bg', type: 'callout', data: { style: 'key', title: 'Background Radiation', text: 'Background radiation is the ionising radiation present in the environment, independent of any laboratory source. It is always detected even when no source is present and must be measured and subtracted from any experimental readings.' } },
    { id: 'tbl-bg', type: 'comparisonTable', data: { caption: 'Sources of background radiation and approximate contributions (UK)', headers: ['Source', 'Approx. % of total'], rows: [
      ['Radon gas from rocks and soil', '50%'],
      ['Medical uses (X-rays, etc.)', '15%'],
      ['Food and drink (inc. K-40)', '12%'],
      ['Cosmic rays from space', '10%'],
      ['Gamma rays from ground and buildings', '8%'],
      ['Nuclear industry / fallout', '<1%'],
    ]}},
    { id: 'para-correction', type: 'paragraph', data: { text: 'To correct measured activity: measure background count-rate first (with no source), then <strong>corrected count-rate = measured count-rate − background count-rate</strong>. This is essential for accurate half-life measurements.' } },
    { id: 'call-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Background radiation is due to natural and artificial sources. In exam questions about half-life experiments, always check whether background has been subtracted. If a graph of count-rate vs time does not pass through zero, background has not been subtracted.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'GM tube (most common detector): ionising radiation produces pulses, counted electronically. Background radiation is always present (mainly radon gas, cosmic rays). Always subtract background count-rate before analysing results.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'GM tube detects radiation as current pulses. Background always present; subtract before analysis.',
    cues: [
      { id: 'cue-1', blockId: 'para-gm', prompt: 'How does a GM tube detect radiation?', answer: 'Radiation ionises gas inside the tube; freed electrons avalanche to the anode, producing a current pulse that is counted.' },
      { id: 'cue-2', blockId: 'svg-gm-tube', prompt: 'What is the purpose of the mica window in a GM tube?', answer: 'It seals the tube while being thin enough for alpha particles (which are easily absorbed) to pass through and be detected.' },
      { id: 'cue-3', blockId: 'call-bg', prompt: 'What is background radiation and why must it be subtracted?', answer: 'Background radiation is always-present ionising radiation from the environment. It must be subtracted so that only the count-rate from the source under investigation is measured.' },
      { id: 'cue-4', blockId: 'tbl-bg', prompt: 'Name the two largest sources of background radiation in the UK.', answer: 'Radon gas from rocks and soil (~50%), and medical uses such as X-rays (~15%).' },
      { id: 'cue-5', blockId: 'list-other', prompt: 'How does a cloud chamber make particle tracks visible?', answer: 'Supercooled vapour condenses along the trail of ions left by the radiation, forming a visible track.' },
    ],
  },
  evidence: [], mentions: [],
};
