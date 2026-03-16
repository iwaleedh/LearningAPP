export const note_olevel_chemistry_9_9_7 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/9 Metals/9-3-1-extraction-of-metals.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the link between position in the reactivity series and the method used to extract a metal from its ore.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Extraction of Metals', level: 2 }
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reactivity Series and Extraction Method',
        text: 'The method used to extract a metal depends on its <strong>position in the reactivity series</strong>:<br/><br/><strong>High reactivity (K, Na, Ca, Mg, Al)</strong> — must use <strong>electrolysis</strong> of molten compounds (cannot be reduced by carbon — they would just re-react)<br/><br/><strong>Medium reactivity (Zn, Fe, Pb)</strong> — extracted by <strong>reduction with carbon (coke)</strong> in a furnace (C is above these metals in reactivity)<br/><br/><strong>Low reactivity (Cu)</strong> — can be obtained by reduction with carbon or more cheaply by other methods (hydrometallurgy, smelting)<br/><br/><strong>Very low (Ag, Au, Pt)</strong> — found <strong>native</strong> (as uncombined elements in nature) — do not need extraction'
      }
    },
    {
      id: 'tbl-extract',
      type: 'comparisonTable',
      data: {
        caption: 'Extraction methods and examples',
        headers: ['Metal', 'Reactivity', 'Method', 'Ore / source'],
        rows: [
          ['Potassium', 'Very high', 'Electrolysis of molten KCl', 'Sylvite (KCl)'],
          ['Sodium', 'Very high', 'Electrolysis of molten NaCl (Downs cell)', 'Rock salt / brine'],
          ['Aluminium', 'High', 'Electrolysis of molten Al₂O₃ in cryolite', 'Bauxite'],
          ['Zinc', 'Medium', 'Reduction by carbon', 'Zinc blende (ZnS)'],
          ['Iron', 'Medium', 'Reduction by CO in blast furnace', 'Haematite (Fe₂O₃)'],
          ['Copper', 'Low-medium', 'Smelting / electrolysis refining', 'Chalcopyrite (CuFeS₂)'],
          ['Gold / Silver', 'Very low', 'Found native — no extraction needed', 'Nuggets in rock']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip: why not use carbon for Al?',
        text: 'Carbon cannot reduce aluminium oxide because:<br/>1. Aluminium is above carbon in the reactivity series.<br/>2. At practical temperatures, the aluminium would re-oxidise before it could be collected.<br/><br/>Electrolysis of molten Al₂O₃ is used instead — the Al₂O₃ must be <strong>molten</strong> so ions can move.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'High reactivity metals (K, Na, Al) → electrolysis. Medium reactivity (Zn, Fe, Pb) → carbon reduction. Low/unreactive (Ag, Au) → found native. The more reactive the metal, the more energy-intensive its extraction.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'High reactivity → electrolysis. Medium → carbon reduction. Low/unreactive → found native.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'Why is electrolysis needed to extract aluminium rather than reduction with carbon?', answer: 'Aluminium is more reactive than carbon in the reactivity series, so carbon cannot reduce aluminium oxide. Electrolysis of molten Al₂O₃ is required instead.' },
      { id: 'cue-2', blockId: 'tbl-extract', prompt: 'State the ore and extraction method for iron.', answer: 'Iron is extracted from haematite (Fe₂O₃) by reduction with carbon monoxide in a blast furnace.' },
      { id: 'cue-3', blockId: 'call-key', prompt: 'Name two metals that can be found in nature as uncombined elements, and state why.', answer: 'Gold and silver are found native because they are so unreactive they do not form compounds with oxygen in nature.' }
    ]
  },
  evidence: [],
  mentions: []
};
