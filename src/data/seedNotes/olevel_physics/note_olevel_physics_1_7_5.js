export const note_olevel_physics_1_7_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-7-6-power.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define power as the rate of doing work or transferring energy; recall and apply P = W/t and P = Fv; understand the watt; solve problems involving power.' },
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'What is Power?', level: 2 },
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: '<strong>Power</strong> is the <em>rate</em> at which work is done or energy is transferred. A powerful machine does work quickly. Power is measured in <strong>watts (W)</strong> — 1 watt = 1 joule per second.' },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Power Formulae',
        text: 'P = W/t <em>or</em> P = E/t<br><br>P = power (W)<br>W or E = energy transferred / work done (J)<br>t = time (s)<br><br>Also: <strong>P = Fv</strong> (for constant velocity)<br>F = force (N), v = speed (m/s)',
      },
    },
    {
      id: 'eq-power',
      type: 'equation',
      data: {
        html: 'P = <span class="nb-frac"><span class="nb-num">W</span><span class="nb-den">t</span></span>',
        caption: 'Power (W) = work done (J) ÷ time (s)',
      },
    },
    {
      id: 'h-table',
      type: 'heading',
      data: { text: 'Typical Power Ratings', level: 2 },
    },
    {
      id: 'tbl-power',
      type: 'comparisonTable',
      data: {
        caption: 'Typical power ratings of common devices',
        headers: ['Device / Activity', 'Typical Power'],
        rows: [
          ['LED light bulb', '10 W'],
          ['Person walking upstairs', '~300 W'],
          ['Kettle (electric)', '2000–3000 W'],
          ['Car engine', '50–200 kW'],
          ['Jet aircraft engine', '~100 MW'],
        ],
      },
    },
    {
      id: 'call-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 1: Climbing Stairs',
        text: 'A student of mass 60 kg runs up stairs of height 3 m in 4 s. Calculate the power output.<br><br>Work done = mgh = 60 × 10 × 3 = 1800 J<br>P = W/t = 1800 ÷ 4 = <strong>450 W</strong>',
      },
    },
    {
      id: 'call-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 2: Using P = Fv',
        text: 'A car travels at a constant 30 m/s against an air resistance of 800 N. What is the engine\'s power output?<br><br>P = Fv = 800 × 30 = <strong>24 000 W = 24 kW</strong>',
      },
    },
    {
      id: 'svg-power',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="360" height="200" fill="#0a2e1a" rx="10"/>
  <text x="180" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#14532d">Power = Rate of Energy Transfer</text>
  <!-- Person A slow -->
  <rect x="30" y="75" width="120" height="80" rx="6" fill="#1e293b" stroke="#e5e7eb"/>
  <text x="90" y="95" text-anchor="middle" font-size="10" font-weight="bold" fill="#374151">Person A</text>
  <!-- Stick figure -->
  <circle cx="90" cy="115" r="10" fill="#3b82f6" stroke="#374151"/>
  <line x1="90" y1="125" x2="90" y2="150" stroke="#374151" stroke-width="2"/>
  <line x1="74" y1="135" x2="106" y2="135" stroke="#374151" stroke-width="2"/>
  <line x1="90" y1="150" x2="78" y2="164" stroke="#374151" stroke-width="2"/>
  <line x1="90" y1="150" x2="102" y2="164" stroke="#374151" stroke-width="2"/>
  <text x="90" y="178" text-anchor="middle" font-size="9" fill="#3b82f6">1800 J in 8 s</text>
  <text x="90" y="190" text-anchor="middle" font-size="10" font-weight="bold" fill="#3b82f6">P = 225 W</text>
  <!-- Person B fast -->
  <rect x="210" y="75" width="120" height="80" rx="6" fill="#1e293b" stroke="#e5e7eb"/>
  <text x="270" y="95" text-anchor="middle" font-size="10" font-weight="bold" fill="#374151">Person B</text>
  <!-- Stick figure running -->
  <circle cx="270" cy="109" r="10" fill="#10b981" stroke="#374151"/>
  <line x1="270" y1="119" x2="270" y2="145" stroke="#374151" stroke-width="2"/>
  <line x1="252" y1="128" x2="284" y2="130" stroke="#374151" stroke-width="2"/>
  <line x1="270" y1="145" x2="256" y2="160" stroke="#374151" stroke-width="2"/>
  <line x1="270" y1="145" x2="286" y2="158" stroke="#374151" stroke-width="2"/>
  <text x="270" y="178" text-anchor="middle" font-size="9" fill="#10b981">1800 J in 4 s</text>
  <text x="270" y="190" text-anchor="middle" font-size="10" font-weight="bold" fill="#10b981">P = 450 W</text>
  <!-- Same energy arrow -->
  <text x="180" y="55" text-anchor="middle" font-size="10" fill="#f59e0b">Same energy, less time = more power</text>
</svg>`,
        caption: 'Same work done (1800 J), but person B takes half the time → twice the power.',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Unit Confusion',
        text: 'Power is in <strong>watts (W)</strong> — not joules! W = watts (power), J = joules (energy). Also: kW = kilowatts = 1000 W; MW = megawatts = 10⁶ W. Don\'t mix up W (work done, in J) with W (power unit, watts).',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Power P = W/t or E/t. Units: watts (W). 1 W = 1 J/s. Also P = Fv for constant speed. More powerful = same work in less time (or more work in same time). Typical: person ~300–500 W, car engine ~50–200 kW.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'P = W/t. Units: watts (W). 1 W = 1 J/s. Also P = Fv.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'State two equations for power and give the unit of power.', answer: 'P = W/t (or P = E/t) and P = Fv. Power is measured in watts (W). 1 W = 1 joule per second.' },
      { id: 'cue-2', blockId: 'call-we1', prompt: 'A 60 kg student runs up 3 m stairs in 4 s. Calculate the power output.', answer: 'Work = mgh = 60 × 10 × 3 = 1800 J. P = W/t = 1800 ÷ 4 = 450 W.' },
      { id: 'cue-3', blockId: 'svg-power', prompt: 'Two people do 1800 J of work. One takes 8 s, the other 4 s. Compare their powers.', answer: 'Person A: P = 1800/8 = 225 W. Person B: P = 1800/4 = 450 W. Person B has twice the power because they do the same work in half the time.' },
      { id: 'cue-4', blockId: 'call-we2', prompt: 'A car travels at a steady 30 m/s against 800 N air resistance. Find the engine power.', answer: 'At constant velocity, driving force = 800 N. P = Fv = 800 × 30 = 24 000 W = 24 kW.' },
    ],
  },
  evidence: [],
  mentions: [],
};
