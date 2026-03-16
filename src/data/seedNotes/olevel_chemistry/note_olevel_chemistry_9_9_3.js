export const note_olevel_chemistry_9_9_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/9 Metals/9-2-1-reactivity-series.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'State the reactivity series of metals and use it to predict reactions with water, steam, and dilute acids, and to deduce the results of displacement reactions.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Reactivity Series', level: 2 }
    },
    {
      id: 'svg-reactivity-series',
      type: 'svg',
      data: {
        caption: 'The Reactivity Series of metals, showing reaction tendencies with water and acids.',
        svg: `<svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Title -->
  <text x="50" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)">Reactivity Series</text>

  <!-- Reactivity Arrow -->
  <defs>
    <linearGradient id="reactivity-grad" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="50%" stop-color="#eab308" />
      <stop offset="100%" stop-color="#ef4444" />
    </linearGradient>
    <marker id="arrow-up" markerWidth="6" markerHeight="6" refX="3" refY="1" orient="auto">
      <path d="M 1 5 L 3 1 L 5 5 Z" fill="#ef4444"/>
    </marker>
  </defs>

  <rect x="50" y="50" width="20" height="300" fill="url(#reactivity-grad)" />
  <path d="M 60 50 L 60 40" stroke="#ef4444" stroke-width="4" marker-end="url(#arrow-up)" />
  <text x="35" y="200" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" transform="rotate(-90 35,200)" text-anchor="middle">Increasing Reactivity</text>

  <!-- Elements List -->
  <g font-family="var(--font-sans)" font-size="13" font-weight="bold" transform="translate(80, 0)">
    <text y="65" fill="#ef4444">Potassium (K)</text>
    <text y="85" fill="#ea580c">Sodium (Na)</text>
    <text y="105" fill="#ea580c">Calcium (Ca)</text>
    <text y="125" fill="#d97706">Magnesium (Mg)</text>
    <text y="145" fill="#d97706">Aluminium (Al)</text>
    
    <text y="165" fill="#71717a" font-style="italic">Carbon (C) - Non-metal</text>

    <text y="185" fill="#ca8a04">Zinc (Zn)</text>
    <text y="205" fill="#ca8a04">Iron (Fe)</text>
    <text y="225" fill="#ca8a04">Lead (Pb)</text>
    
    <text y="245" fill="#71717a" font-style="italic">Hydrogen (H) - Non-metal</text>

    <text y="265" fill="#3b82f6">Copper (Cu)</text>
    <text y="285" fill="#3b82f6">Silver (Ag)</text>
    <text y="305" fill="#2563eb">Gold (Au)</text>
  </g>

  <!-- Brackets & Labels -->
  <!-- React with cold water -->
  <path d="M 230 55 L 240 55 L 240 105 L 230 105" fill="none" stroke="var(--color-text-secondary)" stroke-width="2" />
  <text x="250" y="85" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)">React with cold water</text>

  <!-- React with acids -->
  <path d="M 235 55 L 400 55 L 400 225 L 235 225" fill="none" stroke="#ca8a04" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="410" y="145" font-family="var(--font-sans)" font-size="12" fill="#ca8a04">React with dilute acid</text>

  <!-- React with oxygen -->
  <path d="M 370 260 L 380 260 L 380 305 L 370 305" fill="none" stroke="#3b82f6" stroke-width="2" />
  <text x="390" y="285" font-family="var(--font-sans)" font-size="12" fill="#3b82f6">Do not react with acid</text>

</svg>`
      }
    },
    {
      id: 'call-series',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Reactivity Series (most →  least reactive)',
        text: '<strong>Potassium (K)</strong><br/><strong>Sodium (Na)</strong><br/><strong>Calcium (Ca)</strong><br/><strong>Magnesium (Mg)</strong><br/><strong>Aluminium (Al)</strong><br/>Carbon (C) — non-metal, included as reducing agent<br/><strong>Zinc (Zn)</strong><br/><strong>Iron (Fe)</strong><br/><strong>Lead (Pb)</strong><br/>Hydrogen (H) — included as reference<br/><strong>Copper (Cu)</strong><br/><strong>Silver (Ag)</strong><br/><strong>Gold (Au)</strong><br/><br/>Mnemonic: <em>Please Send Camels Most Ambitiously Zipping In Large Herds Carrying Small Gems</em>'
      }
    },
    {
      id: 'tbl-reacts',
      type: 'comparisonTable',
      data: {
        caption: 'Reactions of metals with water, steam, and dilute acids',
        headers: ['Metal', 'Cold water', 'Steam', 'Dilute acid'],
        rows: [
          ['K / Na / Ca', 'Vigorous/violent reaction → metal hydroxide + H₂', '—', 'Explosive — too dangerous'],
          ['Mg', 'Very slow with cold water', 'Reacts vigorously → MgO + H₂', 'Reacts quickly → MgCl₂ + H₂'],
          ['Al / Zn / Fe', 'No reaction', 'Some reaction at red heat', 'React (Al slowly due to oxide layer) → salt + H₂'],
          ['Pb', 'No reaction', 'No reaction', 'Very slow reaction'],
          ['Cu / Ag / Au', 'No reaction', 'No reaction', 'No reaction']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Displacement Reactions', level: 2 }
    },
    {
      id: 'call-disp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Displacement Reactions',
        text: 'A <strong>more reactive metal</strong> displaces a <strong>less reactive metal</strong> from its salt solution.<br/><br/>Example: Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)<br/>(zinc displaces copper because zinc is higher in the reactivity series)<br/><br/>Ionic equation: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)<br/><br/>Observations: reddish copper solid forms on zinc; blue colour of CuSO₄ fades.<br/><br/>If a metal and salt solution show no reaction, the metal is below the metal ion in the series.'
      }
    },
    {
      id: 'call-we',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Predicting displacement',
        text: 'Will iron react with copper(II) sulfate solution?<br/><br/>Step 1: Locate Fe and Cu in the reactivity series.<br/>Fe is above Cu → Fe is more reactive than Cu.<br/><br/>Step 2: Write the equation.<br/>Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)<br/><br/>Step 3: State observation.<br/>A reddish-brown solid (copper) forms on the iron surface; the blue solution fades.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Reactivity series: K > Na > Ca > Mg > Al > (C) > Zn > Fe > Pb > (H) > Cu > Ag > Au. More reactive metals displace less reactive metals from solutions. Metals above H react with dilute acid; K/Na/Ca react with cold water.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Reactivity series: K Na Ca Mg Al (C) Zn Fe Pb (H) Cu Ag Au. More reactive displaces less reactive from solutions.',
    cues: [
      { id: 'cue-1', blockId: 'call-series', prompt: 'Write the reactivity series from potassium to gold, including carbon and hydrogen.', answer: 'K > Na > Ca > Mg > Al > (C) > Zn > Fe > Pb > (H) > Cu > Ag > Au' },
      { id: 'cue-2', blockId: 'tbl-reacts', prompt: 'Which metals react with cold water? What are the products?', answer: 'Potassium, sodium, and calcium react with cold water to form metal hydroxide and hydrogen gas.' },
      { id: 'cue-3', blockId: 'call-disp', prompt: 'Predict: will copper react with zinc sulfate solution? Explain.', answer: 'No. Copper is below zinc in the reactivity series, so copper cannot displace zinc from its salt.' }
    ]
  },
  evidence: [],
  mentions: []
};
