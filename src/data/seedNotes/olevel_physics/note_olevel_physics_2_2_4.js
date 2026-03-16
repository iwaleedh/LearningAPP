export const note_olevel_physics_2_2_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/2 Thermal Physics/2-2-5-measuring-latent-heat.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Describe the experimental method for measuring the specific latent heat of fusion of ice; explain the control experiment; calculate Lf from collected data; and identify sources of error.'
      }
    },
    {
      id: 'h-setup',
      type: 'heading',
      data: { text: 'Measuring Latent Heat of Fusion of Ice', level: 2 }
    },
    {
      id: 'p-setup',
      type: 'paragraph',
      data: {
        text: 'To measure <strong>Lf for ice</strong>, crushed ice is placed in a funnel above a beaker. An <strong>electrical immersion heater</strong> is inserted into the ice. When switched on, the heater melts ice at a faster rate. By comparing the meltwater collected <em>with</em> and <em>without</em> the heater, the extra mass melted solely by the electrical energy can be found, eliminating background melting due to room temperature.'
      }
    },
    {
      id: 'svg-apparatus',
      type: 'svg',
      data: {
        caption: 'Apparatus for measuring specific latent heat of fusion of ice',
        svg: `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <!-- Retort stand rail (left) -->
  <rect x="30" y="20" width="8" height="220" rx="3" fill="#aaa"/>
  <rect x="20" y="220" width="28" height="12" rx="3" fill="#aaa"/>

  <!-- Clamp arm -->
  <rect x="38" y="60" width="70" height="8" rx="3" fill="#aaa"/>

  <!-- Funnel -->
  <polygon points="108,50 172,50 155,110 125,110" fill="#d0e8f8" stroke="#6090c8" stroke-width="2"/>
  <!-- Funnel stem -->
  <rect x="133" y="110" width="14" height="30" rx="2" fill="#6090c8"/>

  <!-- Ice in funnel (crushed) -->
  <ellipse cx="140" cy="60" rx="28" ry="14" fill="#cceeff" stroke="#88aacc" stroke-width="1.5"/>
  <text x="118" y="64" fill="#3080b0" font-size="10" font-weight="bold">Ice</text>

  <!-- Heater in Ice -->
  <rect x="136" y="38" width="8" height="45" rx="3" fill="#f08030" stroke="#c05010" stroke-width="1.5"/>
  <!-- Wire up -->
  <line x1="140" y1="38" x2="140" y2="18" stroke="#c44" stroke-width="2"/>

  <!-- Power supply -->
  <rect x="185" y="10" width="100" height="35" rx="6" fill="#f5f5f5" stroke="#888" stroke-width="1.5"/>
  <text x="200" y="32" fill="#333" font-size="11">Power Supply</text>
  <line x1="140" y1="18" x2="185" y2="27" stroke="#c44" stroke-width="2"/>
  <line x1="285" y1="27" x2="300" y2="100" stroke="#c44" stroke-width="2" stroke-dasharray="4,3"/>

  <!-- Beaker (heater) -->
  <rect x="105" y="145" width="68" height="60" rx="4" fill="#e8f8ff" stroke="#6090c8" stroke-width="2"/>
  <!-- Meltwater in beaker -->
  <rect x="108" y="175" width="62" height="27" rx="2" fill="#aaddf8"/>
  <text x="110" y="168" fill="#3080b0" font-size="10">Meltwater</text>
  <text x="109" y="218" fill="#3080b0" font-size="10">Beaker A (heater on)</text>

  <!-- Control funnel + beaker -->
  <polygon points="270,50 334,50 317,110 287,110" fill="#d0e8f8" stroke="#6090c8" stroke-width="2" stroke-dasharray="5,3"/>
  <rect x="295" y="110" width="14" height="30" rx="2" fill="#6090c8" stroke-dasharray="5,3"/>
  <ellipse cx="302" cy="62" rx="28" ry="14" fill="#cceeff" stroke="#88aacc" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="278" y="66" fill="#3080b0" font-size="10" font-weight="bold">Ice</text>
  <text x="268" y="44" fill="#888" font-size="10">(no heater)</text>

  <rect x="267" y="145" width="68" height="60" rx="4" fill="#e8f8ff" stroke="#6090c8" stroke-width="2" stroke-dasharray="5,3"/>
  <rect x="270" y="185" width="62" height="17" rx="2" fill="#aaddf8"/>
  <text x="270" y="218" fill="#3080b0" font-size="10">Beaker B (control)</text>

  <!-- Scale balance icon -->
  <text x="310" y="178" fill="#555" font-size="22">⚖</text>
  <text x="303" y="246" fill="#555" font-size="10">Compare masses</text>
</svg>`
      }
    },
    {
      id: 'h-control',
      type: 'heading',
      data: { text: 'The Control Experiment', level: 2 }
    },
    {
      id: 'p-control',
      type: 'paragraph',
      data: {
        text: 'A <strong>control experiment</strong> is run simultaneously with the same quantity of ice in an identical funnel but <em>without</em> the heater switched on. Any melting in the control experiment is due to heat gained from the surrounding room (not the heater). By <strong>subtracting the control meltwater mass</strong> from the heater meltwater mass, we get only the extra mass melted by the electrical energy.'
      }
    },
    {
      id: 'h-calculation',
      type: 'heading',
      data: { text: 'Calculation', level: 2 }
    },
    {
      id: 'list-calc',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Measure the electrical energy: <strong>Q = P × t</strong> (or Q = I × V × t if using ammeter/voltmeter).' },
          { text: 'Weigh the meltwater from the heater beaker: mass m_heater.' },
          { text: 'Weigh the meltwater from the control beaker: mass m_control.' },
          { text: 'Extra mass due to heater: <strong>m_extra = m_heater − m_control</strong>.' },
          { text: 'Calculate Lf: <strong>Lf = Q ÷ m_extra</strong>.' }
        ]
      }
    },
    {
      id: 'eq-lf',
      type: 'equation',
      data: {
        html: 'L<sub>f</sub> = <span class="nb-frac"><span class="nb-num">Q</span><span class="nb-den">m<sub>extra</sub></span></span> = <span class="nb-frac"><span class="nb-num">P × t</span><span class="nb-den">m<sub>heater</sub> − m<sub>control</sub></span></span>',
        caption: 'Lf = specific latent heat of fusion (J/kg), P = heater power (W), t = time (s)'
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A 60 W heater heats ice for 5 minutes. Beaker A collects 80 g of meltwater; control Beaker B collects 18 g.\n\nQ = P × t = 60 × 300 = 18 000 J\nm_extra = 80 − 18 = 62 g = 0.062 kg\nLf = Q ÷ m_extra = 18 000 ÷ 0.062 = 290 000 J/kg ≈ 2.9 × 10⁵ J/kg\n\n(Accepted value: 3.4 × 10⁵ J/kg; difference due to heat losses)'
      }
    },
    {
      id: 'h-errors',
      type: 'heading',
      data: { text: 'Sources of Error and Improvements', level: 2 }
    },
    {
      id: 'tbl-errors',
      type: 'comparisonTable',
      data: {
        caption: 'Errors and improvements in the latent heat experiment',
        headers: ['Error', 'Effect', 'Improvement'],
        rows: [
          ['Heat gained from warm surroundings', 'Extra melting not accounted for', 'Use control experiment and subtract masses (this IS the improvement)'],
          ['Heater not fully submerged in ice', 'Some energy heats air not ice', 'Ensure heater is buried in crushed ice'],
          ['Water retained in ice / draining slowly', 'm_extra inaccurate', 'Allow sufficient time for drainage; start collecting after steady drip'],
          ['Power supply voltage fluctuates', 'Q calculation inaccurate', 'Use a joulemeter for direct energy reading']
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always explain <em>why</em> the control experiment is needed: to account for background melting caused by room temperature. If the control is not used, Lf will be calculated as too low (because m_extra would be overestimated).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Lf of ice is measured by comparing meltwater from a heater funnel and a control funnel. Extra mass = heater meltwater − control meltwater. Lf = Q ÷ m_extra. The control accounts for background melting from room temperature. Expected Lf ≈ 340 000 J/kg but heat losses give lower values.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Ice funnel + heater + control; m_extra = m_heater − m_control; Lf = P×t ÷ m_extra; control accounts for room-temperature background melting.',
    cues: [
      { id: 'cue-1', blockId: 'p-control', prompt: 'Why is a control experiment (without the heater) needed in the latent heat of fusion experiment?' },
      { id: 'cue-2', blockId: 'eq-lf', prompt: 'Write the equation used to calculate Lf from the ice funnel experiment, defining each term.' },
      { id: 'cue-3', blockId: 'callout-we1', prompt: 'A 60 W heater melts ice for 5 min. Heater beaker: 80 g; control beaker: 18 g. Calculate Lf.' },
      { id: 'cue-4', blockId: 'tbl-errors', prompt: 'Give one source of error in the latent heat experiment and state how it can be reduced.' }
    ]
  },
  evidence: []
};
