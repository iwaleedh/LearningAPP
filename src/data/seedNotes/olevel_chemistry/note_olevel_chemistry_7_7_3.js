export const note_olevel_chemistry_7_7_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/7 Acids Bases And Salts/7-1-4-classifying-oxides.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Classify oxides as acidic, basic, amphoteric, or neutral and give examples of each.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Types of Oxides', level: 2 }
    },
    {
      id: 'svg-oxides-trend',
      type: 'svg',
      data: {
        caption: 'General trend of oxides across the Periodic Table. Metals form basic oxides, non-metals form acidic oxides, and elements near the boundary often form amphoteric oxides.',
        svg: `<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <text x="300" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Period 3 Oxides Trend</text>

  <!-- Boxes for elements -->
  <g font-family="var(--font-sans)" font-size="12" text-anchor="middle">
    <!-- Na, Mg -->
    <rect x="50" y="60" width="60" height="40" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
    <text x="80" y="85" fill="#1e3a8a" font-weight="bold">Na₂O</text>
    
    <rect x="120" y="60" width="60" height="40" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
    <text x="150" y="85" fill="#1e3a8a" font-weight="bold">MgO</text>

    <!-- Al -->
    <rect x="190" y="60" width="60" height="40" rx="4" fill="#f3e8ff" stroke="#a855f7" stroke-width="2"/>
    <text x="220" y="85" fill="#581c87" font-weight="bold">Al₂O₃</text>

    <!-- Si, P, S, Cl -->
    <rect x="260" y="60" width="60" height="40" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
    <text x="290" y="85" fill="#7f1d1d" font-weight="bold">SiO₂</text>

    <rect x="330" y="60" width="60" height="40" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
    <text x="360" y="85" fill="#7f1d1d" font-weight="bold">P₄O₁₀</text>

    <rect x="400" y="60" width="60" height="40" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
    <text x="430" y="85" fill="#7f1d1d" font-weight="bold">SO₃/SO₂</text>

    <rect x="470" y="60" width="60" height="40" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
    <text x="500" y="85" fill="#7f1d1d" font-weight="bold">Cl₂O₇</text>
  </g>

  <!-- Labels -->
  <text x="115" y="130" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#3b82f6" text-anchor="middle">Basic Oxides</text>
  <text x="115" y="145" font-family="var(--font-sans)" font-size="10" fill="#64748b" text-anchor="middle">(Metals, react with acids)</text>

  <text x="220" y="130" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#a855f7" text-anchor="middle">Amphoteric</text>
  <text x="220" y="145" font-family="var(--font-sans)" font-size="10" fill="#64748b" text-anchor="middle">(Reacts with both)</text>

  <text x="395" y="130" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">Acidic Oxides</text>
  <text x="395" y="145" font-family="var(--font-sans)" font-size="10" fill="#64748b" text-anchor="middle">(Non-metals, react with alkalis)</text>
  
  <!-- Underlines -->
  <path d="M 50 110 L 180 110 L 180 115" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <path d="M 190 110 L 250 110 L 250 115" fill="none" stroke="#a855f7" stroke-width="2"/>
  <path d="M 260 110 L 530 110 L 530 115" fill="none" stroke="#ef4444" stroke-width="2"/>
</svg>`
      }
    },
    {
      id: 'tbl-oxides',
      type: 'comparisonTable',
      data: {
        caption: 'Classification of oxides',
        headers: ['Type', 'Reaction with acid', 'Reaction with alkali', 'Examples'],
        rows: [
          ['Basic oxide', 'Reacts → salt + water', 'Does not react', 'MgO, CaO, CuO, Na₂O, Fe₂O₃, ZnO*'],
          ['Acidic oxide', 'Does not react', 'Reacts → salt + water', 'SO₂, SO₃, CO₂, NO₂, SiO₂, P₄O₁₀'],
          ['Amphoteric oxide', 'Reacts → salt + water', 'Reacts → salt + water', 'Al₂O₃, ZnO, PbO'],
          ['Neutral oxide', 'Does not react', 'Does not react', 'CO, H₂O, NO, N₂O']
        ]
      }
    },
    {
      id: 'call-basic',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Basic Oxides',
        text: '<strong>Basic oxides</strong> are oxides of metals — they react with acids to form salt and water.<br/><br/>CuO(s) + 2HCl(aq) → CuCl₂(aq) + H₂O(l)<br/>CaO(s) + H₂SO₄(aq) → CaSO₄(aq) + H₂O(l)<br/>MgO(s) + 2HNO₃(aq) → Mg(NO₃)₂(aq) + H₂O(l)<br/><br/>Many basic metal oxides are insoluble → not alkalis (except soluble ones like Na₂O, K₂O, CaO which dissolve to give OH⁻).'
      }
    },
    {
      id: 'call-acidic',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Acidic Oxides',
        text: '<strong>Acidic oxides</strong> are oxides of non-metals — they react with alkalis to form salt and water.<br/><br/>CO₂(g) + 2NaOH(aq) → Na₂CO₃(aq) + H₂O(l)<br/>SO₃(g) + 2NaOH(aq) → Na₂SO₄(aq) + H₂O(l)<br/>SO₂(g) + Ca(OH)₂(aq) → CaSO₃(aq) + H₂O(l) (limewater turns milky)<br/><br/>Note: CO₂ dissolves in water to form carbonic acid (H₂CO₃).'
      }
    },
    {
      id: 'call-amphoteric',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Amphoteric Oxides',
        text: '<strong>Amphoteric oxides</strong> react with both acids and bases:<br/><br/>Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O (reacts with acid)<br/>Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄ (reacts with base → aluminate)<br/><br/>ZnO + 2HCl → ZnCl₂ + H₂O (reacts with acid)<br/>ZnO + 2NaOH + H₂O → Na₂[Zn(OH)₄] (reacts with base → zincate)'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Acidic oxides (non-metals): react with bases. Basic oxides (metals): react with acids. Amphoteric oxides (Al₂O₃, ZnO): react with both. Neutral oxides (CO, NO): react with neither.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Basic (metal) oxides + acid → salt+water. Acidic (non-metal) oxides + base → salt+water. Amphoteric (ZnO, Al₂O₃): both. Neutral (CO, NO): neither.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-oxides', prompt: 'State the four types of oxide and give one example of each.', answer: 'Basic (e.g. CuO), acidic (e.g. CO₂), amphoteric (e.g. Al₂O₃/ZnO), neutral (e.g. CO).' },
      { id: 'cue-2', blockId: 'call-acidic', prompt: 'What type of oxide is CO₂, and how does it react with sodium hydroxide?', answer: 'CO₂ is an acidic oxide. It reacts with NaOH: CO₂ + 2NaOH → Na₂CO₃ + H₂O.' },
      { id: 'cue-3', blockId: 'call-amphoteric', prompt: 'Explain why Al₂O₃ is described as amphoteric.', answer: 'Al₂O₃ reacts with both acids (e.g. HCl → AlCl₃ + H₂O) and with alkalis (e.g. NaOH → sodium aluminate). It can behave as both a base and an acid.' }
    ]
  },
  evidence: [],
  mentions: []
};
