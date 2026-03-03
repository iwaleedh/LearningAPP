export const note_biology_4_6_14 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand forensic methods for estimating time of death (post-mortem interval, PMI) including rigor mortis, livor mortis, algor mortis, entomology, and chemical markers.'
      },
      terms: []
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Forensic Methods for Estimating Time of Death', level: 2 },
      terms: []
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Estimating the post-mortem interval (PMI)—the time elapsed since death—is crucial in forensic investigations. Multiple physical, chemical, and biological methods are used, each with limitations. No single method is perfectly accurate, so multiple indicators are combined to narrow the timeframe.'
      },
      terms: []
    },
    {
      id: 'h-rigor-mortis',
      type: 'heading',
      data: { text: 'Rigor Mortis (Muscle Stiffening)', level: 2 },
      terms: []
    },
    {
      id: 'p-rigor-mortis-1',
      type: 'paragraph',
      data: {
        text: 'Rigor mortis is the stiffening of muscles after death. It occurs because muscle contraction is powered by ATP (adenosine triphosphate). After death, ATP production ceases. Actin and myosin filaments, which are normally separated when ATP is available, become locked together, causing muscle rigidity.'
      },
      terms: []
    },
    {
      id: 'list-rigor-mortis',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Onset: Begins 2–6 hours after death (variable; depends on temperature, physical activity, and individual factors).',
          'Progression: Spreads from small muscles (eyelids, jaw) to larger muscles (limbs, trunk) over ~12 hours.',
          'Peak: Maximum stiffness reached at ~12 hours post-mortem.',
          'Resolution: Rigor mortis resolves (muscles relax) over 24–36 hours as muscle proteins denature in the acidic post-mortem environment.',
          'Limitations: Time of onset is highly variable; affected by temperature (higher temperature accelerates onset), age, physical fitness, and cause of death. Not reliable for precise PMI estimation.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-rigor-mortis',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rigor Mortis as PMI Indicator',
        text: 'Absence of rigor: 0–3 hours. Early rigor (face/jaw): 3–6 hours. Generalised rigor: 6–12 hours. Peak rigor: 12 hours. Rigor resolving: 12–36 hours. Very variable; useful only as rough indicator when combined with other evidence.'
      },
      terms: []
    },
    {
      id: 'h-livor-mortis',
      type: 'heading',
      data: { text: 'Livor Mortis (Blood Pooling)', level: 2 },
      terms: []
    },
    {
      id: 'p-livor-mortis-1',
      type: 'paragraph',
      data: {
        text: 'Livor mortis (algor mortis) is the purplish-red discolouration of skin caused by blood pooling under gravity after death. The heart stops pumping; blood cannot circulate. Red blood cells settle in capillaries of dependent areas (areas touching the ground), creating dark red-purple patches.'
      },
      terms: []
    },
    {
      id: 'list-livor-mortis',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Appearance: Purple-red discolouration in dependent areas (back if lying face-down, lower legs if standing/sitting).',
          'Onset: Begins 15–30 minutes after death; becomes visible within 1–2 hours.',
          'Progression: Becomes increasingly intense and fixed over 6–8 hours.',
          'Fixation: After 8–12 hours, livor mortis becomes fixed (blanching—pressing does not make the colour disappear because haemoglobin has permanently stained vessel walls).',
          'Forensic value: Pattern indicates body position at death; can detect movement of the body post-mortem (livor fixed in one position but body in another = moved after fixation). Can estimate PMI: faint livor = early (1–2 hours), fixed livor = >8 hours.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-livor-mortis',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Livor Mortis as PMI Indicator',
        text: 'Appears: 15–30 minutes. Visible: 1–2 hours. Becomes fixed: 6–12 hours. If body has been moved post-mortem, livor pattern will not match current body position. More reliable than rigor mortis for PMI and body position evidence.'
      },
      terms: []
    },
    {
      id: 'h-algor-mortis',
      type: 'heading',
      data: { text: 'Algor Mortis (Body Cooling)', level: 2 },
      terms: []
    },
    {
      id: 'p-algor-mortis-1',
      type: 'paragraph',
      data: {
        text: 'Algor mortis is the cooling of the body after death from normal body temperature (~37degreesC) to ambient temperature. The body is no longer generating metabolic heat; it loses heat through radiation, conduction, and evaporation.'
      },
      terms: []
    },
    {
      id: 'list-algor-mortis',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Cooling rate: Body cools approximately 1degreesC per hour in moderate environmental temperatures (20degreesC room).',
          'Formula: Estimated PMI (hours) = (37degreesC - rectal temperature) / 1degreesC per hour.',
          'Example: If body temperature is 32degreesC and ambient is 20degreesC, PMI ≈ (37 - 32) / 1 = 5 hours.',
          'Henssge nomogram: More accurate method that accounts for ambient temperature, body mass, clothing, and insulation. Nomogram values give PMI ranges with higher confidence.',
          'Limitations: Highly dependent on environmental temperature, body mass (fat insulates), clothing, air movement. Hypothermia or sepsis (high fever before death) affect cooling rates. Useful mainly for early PMI (first 24 hours).'
        ]
      },
      terms: []
    },
    {
      id: 'callout-algor-mortis',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Algor Mortis as PMI Indicator',
        text: 'Cooling rate ≈1degreesC/hour (depends on environment). Most reliable for PMI <24 hours. Use Henssge nomogram for more accurate estimates (accounts for temperature, body mass, clothing). Limitations: environmental factors affect accuracy.'
      },
      terms: []
    },
    {
      id: 'h-entomology',
      type: 'heading',
      data: { text: 'Entomology: Insect Colonisation and Development', level: 2 },
      terms: []
    },
    {
      id: 'p-entomology-1',
      type: 'paragraph',
      data: {
        text: 'Forensic entomology uses insect colonisation patterns and development stages to estimate PMI. Blowflies are the primary colonisers of exposed bodies; their development from egg to adult is temperature-dependent and predictable.'
      },
      terms: []
    },
    {
      id: 'list-entomology',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Blowfly succession: Blowflies (Calliphoridae family) arrive within hours of death. Flies lay eggs in body openings (mouth, nose, eyes) and wounds.',
          'Development stages: Eggs (hatch in 12–24 hours at 20degreesC) → larva (L1, L2, L3 instars, ~3–5 days total) → puparium (3–10 days) → adult fly (~7–10 days total at 20degreesC).',
          'Temperature effects: Higher temperature accelerates development (approximately doubles rate for each 10degreesC increase, Q₁₀ ≈ 2). Lower temperature slows development.',
          'PMI calculation: If L3 larvae are present, body has been exposed for ~5–7 days. If pupae are present, ~7–10 days. Mathematical models (degree-day calculations) predict development time: Accumulated Degree Days (ADD) = sum of (daily average temperature - threshold temperature) over time. When ADD reaches species-specific value, developmental stage is reached.',
          'Advantages: Useful for PMI >5 days (rigor mortis and algor mortis become unreliable). Can estimate outdoor exposure time. Environmental reconstructed temperature can be inferred if fly species and development stage are known.'
        ]
      },
      terms: []
    },
    {
      id: 'svg-blowfly-dev',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg"><defs><style>.stage { fill: #e0e7ff; stroke: #4f46e5; stroke-width: 2; } .arrow { stroke: #333; stroke-width: 2; fill: none; } .label { font-size: 11px; font-weight: bold; } .time { font-size: 10px; font-style: italic; }</style><defs><marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="#333"/></marker></defs></defs><text x="250" y="25" text-anchor="middle" class="label">BLOWFLY DEVELOPMENT (at ~20degreesC)</text><rect class="stage" x="20" y="60" width="70" height="80" rx="5"/><text x="55" y="85" text-anchor="middle" class="label">Eggs</text><text x="55" y="105" text-anchor="middle" class="time">12–24h</text><path class="arrow" d="M 90 100 L 130 100" marker-end="url(#arrowhead)"/><rect class="stage" x="130" y="60" width="70" height="80" rx="5"/><text x="165" y="80" text-anchor="middle" class="label">L1 Larva</text><text x="165" y="95" text-anchor="middle" class="label">(1st instar)</text><text x="165" y="115" text-anchor="middle" class="time">1–2 days</text><path class="arrow" d="M 200 100 L 240 100" marker-end="url(#arrowhead)"/><rect class="stage" x="240" y="60" width="70" height="80" rx="5"/><text x="275" y="80" text-anchor="middle" class="label">L2/L3 Larva</text><text x="275" y="100" text-anchor="middle" class="label">(2nd/3rd instar)</text><text x="275" y="120" text-anchor="middle" class="time">2–4 days</text><path class="arrow" d="M 310 100 L 350 100" marker-end="url(#arrowhead)"/><rect class="stage" x="350" y="60" width="70" height="80" rx="5"/><text x="385" y="85" text-anchor="middle" class="label">Puparium</text><text x="385" y="105" text-anchor="middle" class="time">3–10 days</text><path class="arrow" d="M 420 100 L 460 100" marker-end="url(#arrowhead)"/><circle cx="485" cy="100" r="15" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="485" y="105" text-anchor="middle" style="font-size: 9px;">Adult</text><text x="250" y="200" text-anchor="middle" class="time">Total: 12–20 days at 20degreesC (faster at higher temperature)</text></svg>',
        caption: 'Blowfly development stages and timeline at 20degreesC; development time varies with temperature'
      },
      terms: []
    },
    {
      id: 'h-chemical-markers',
      type: 'heading',
      data: { text: 'Chemical Markers: Potassium and Decomposition', level: 2 },
      terms: []
    },
    {
      id: 'p-chemical-1',
      type: 'paragraph',
      data: {
        text: 'Chemical composition of body fluids changes after death, providing additional PMI indicators. Vitreous humour (clear fluid in the eye) is particularly useful because it is isolated from bacterial contamination and less subject to post-mortem changes than blood.'
      },
      terms: []
    },
    {
      id: 'list-chemical',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Potassium (K+) in vitreous humour: After death, K+ leaks from cells (no ATP available to maintain ion pumps); vitreous K+ increases linearly with PMI (~1 mmol/L per 24 hours).',
          'Formula: PMI (hours) ≈ (vitreous K+ - baseline) × 24 / 1 mmol/L.',
          'Limitations: High individual variation (baseline K+ varies); bacterial contamination (rare but possible); environmental factors affect rate slightly.',
          'Stomach contents: Digestion of stomach contents halts after death. Stage of digestion indicates time since last meal, not PMI directly, but provides temporal reference. Partially digested food suggests death <3 hours after eating; absent food suggests >4 hours post-meal.'
        ]
      },
      terms: []
    },
    {
      id: 'tbl-pmi-methods',
      type: 'comparisonTable',
      data: {
        headers: ['Method', 'PMI Range', 'Accuracy', 'Advantages', 'Limitations'],
        rows: [
          ['Rigor mortis', '0–36 hours', 'Poor (±3–6 hours)', 'Visible, no equipment needed', 'Highly variable; affected by temperature, age, fitness'],
          ['Livor mortis', '0–12 hours', 'Moderate (±2–3 hours)', 'Indicates body position; identifies movement', 'Becomes fixed after 8–12 hours; plateau effect'],
          ['Algor mortis', '0–24 hours', 'Moderate (±2–3 hours)', 'Objective measurement; good for early PMI', 'Highly temperature-dependent; requires Henssge nomogram'],
          ['Entomology', '5 days–weeks', 'Good (±1–2 days)', 'Best for PMI >5 days; outdoor exposure time', 'Requires insect identification; temperature history needed'],
          ['Vitreous K+', '0–days', 'Moderate (±10–15 hours)', 'Objective chemical measurement; less contaminated', 'Individual variation; slow for early PMI']
        ],
        caption: 'PMI estimation methods: ranges, accuracy, and limitations'
      },
      terms: []
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Multiple PMI methods provide complementary information. Rigor mortis (ATP depletion → actin-myosin locking) peaks at 12 hours but is highly variable. Livor mortis (blood pooling) becomes fixed after 6–12 hours and indicates body position. Algor mortis (cooling) at ~1degreesC/hour is most reliable for early PMI (<24h) using Henssge nomogram. Entomology (blowfly development stages) is best for later PMI (>5 days). Vitreous K+ increases ~1 mmol/L per 24 hours. No single method is perfect; forensic pathologists combine all evidence.',
        apply: 'Body found with fixed livor mortis in lower back but lying face-down. What does this suggest? (Body was moved after livor mortis became fixed, 8+ hours post-mortem)',
        analyze: 'Why is algor mortis less reliable in obese individuals? (Fat acts as insulation, slowing cooling rate)',
        evaluate: 'If blowfly puparia are present and local temperature has been 25degreesC, estimate PMI. Account for Q₁₀ acceleration. (Puparia at 20degreesC takes 3–10 days; at 25degreesC with Q₁₀≈2, development is faster; estimate ~5–7 days)'
      },
      terms: []
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can explain the biological mechanism of rigor mortis', checked: false },
          { text: 'I understand the timeline of rigor mortis (onset to resolution)', checked: false },
          { text: 'I can explain livor mortis and how it indicates body position', checked: false },
          { text: 'I know when livor mortis becomes fixed and its significance', checked: false },
          { text: 'I understand algor mortis and the ~1degreesC/hour cooling rule', checked: false },
          { text: 'I know when to use Henssge nomogram for accurate PMI', checked: false },
          { text: 'I can describe blowfly development stages and timeline', checked: false },
          { text: 'I understand how temperature affects entomological PMI estimates', checked: false },
          { text: 'I know how vitreous K+ and stomach contents aid PMI estimation', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'PMI estimation uses multiple methods: (1) Rigor mortis (ATP depletion → actin-myosin locking): onset 2–6h, peak 12h, resolves 24–36h; highly variable. (2) Livor mortis (blood pooling): visible 1–2h, becomes fixed 6–12h; indicates body position; useful to detect post-mortem movement. (3) Algor mortis (cooling ~1degreesC/hour); Henssge nomogram more accurate, accounts for temperature/mass/clothing; reliable for <24h. (4) Entomology (blowfly development): eggs→L1→L3→puparium→adult over 12–20 days; best for PMI >5 days; temperature-dependent. (5) Vitreous K+ increases ~1 mmol/L per 24 hours; objective chemical marker. All methods combined for confidence.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-rigor-mortis-1', prompt: 'Explain why rigor mortis occurs and what happens at the cellular level.' },
      { id: 'cue-2', blockId: 'list-livor-mortis', prompt: 'Describe the timeline of livor mortis and how to detect post-mortem body movement.' },
      { id: 'cue-3', blockId: 'list-algor-mortis', prompt: 'What is the cooling rule for algor mortis and when should Henssge nomogram be used?' },
      { id: 'cue-4', blockId: 'list-entomology', prompt: 'Describe the blowfly development stages and how to calculate PMI using entomology.' },
      { id: 'cue-5', blockId: 'tbl-pmi-methods', prompt: 'Compare the PMI ranges and accuracy of all five methods.' }
    ],
    summaryText: 'Rigor mortis: ATP depletion → actin-myosin locking; onset 2–6h, peak 12h, resolves 24–36h. Livor mortis: blood pooling in dependent areas; visible 1–2h, fixed 6–12h; indicates position and detects body movement. Algor mortis: cooling ~1degreesC/hour; use Henssge nomogram for accuracy; reliable <24h. Entomology: blowflies lay eggs → L1/L2/L3 → puparium → adult; 12–20 days at 20degreesC; best for >5 days. Vitreous K+: increases ~1 mmol/L per 24h. Combine all methods for confidence.',
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'Forensic Pathology and PMI Estimation', detail: 'Knight B. Forensic Pathology (4th ed.). Edward Arnold', year: '2014', source: 'Edward Arnold', tags: ['post-mortem interval', 'PMI', 'forensic entomology', 'rigor mortis'] }
  ]
};
