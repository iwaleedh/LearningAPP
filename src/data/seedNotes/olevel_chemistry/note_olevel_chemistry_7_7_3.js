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
