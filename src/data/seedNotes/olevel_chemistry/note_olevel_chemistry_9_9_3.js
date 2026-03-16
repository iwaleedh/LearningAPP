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
