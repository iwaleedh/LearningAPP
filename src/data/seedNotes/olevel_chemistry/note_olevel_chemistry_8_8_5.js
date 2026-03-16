export const note_olevel_chemistry_8_8_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/8 The Periodic Table/8-2-4-transition-elements.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the properties of transition elements and compare them with Group I alkali metals.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Transition Elements', level: 2 }
    },
    {
      id: 'call-location',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Location and Members',
        text: 'Transition elements occupy the <strong>central block</strong> of the periodic table, between Groups 2 and 3 (Periods 4–6).<br/><br/>Common examples for IGCSE:<br/>Ti (titanium), V (vanadium), Cr (chromium), Mn (manganese), Fe (iron), Co (cobalt), Ni (nickel), Cu (copper), Zn (zinc).<br/><br/>Note: Zinc is often considered a transition metal in IGCSE, though strictly it is not by the IUPAC d-block definition.'
      }
    },
    {
      id: 'tbl-properties',
      type: 'comparisonTable',
      data: {
        caption: 'Properties of transition elements vs Group I metals',
        headers: ['Property', 'Transition elements', 'Group I (alkali metals)'],
        rows: [
          ['Density', 'High (e.g. Fe = 7.87 g/cm³)', 'Low (Li, Na, K float on water)'],
          ['Melting point', 'High (most > 1000 °C)', 'Low (Na melts at 98 °C; K at 63 °C)'],
          ['Hardness', 'Hard', 'Soft (easily cut)'],
          ['Reactivity with water', 'Low (e.g. Fe rusts slowly; Cu unreactive)', 'Very high (violent, produce H₂)'],
          ['Variable oxidation states', 'Yes (e.g. Fe²⁺ and Fe³⁺; Cu⁺ and Cu²⁺)', 'No (always +1 only)'],
          ['Coloured compounds', 'Yes (e.g. CuSO₄ = blue, FeSO₄ = pale green)', 'No (compounds colourless/white)'],
          ['Catalytic activity', 'Yes (e.g. Fe in Haber; V₂O₅ in Contact; Pt in car catalysts)', 'Not generally used as catalysts']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Key Differences to Memorise',
        text: 'Transition metals vs alkali metals:<br/>• High/hard/dense vs low/soft/light<br/>• Variable oxidation states vs only +1<br/>• Coloured compounds vs white/colourless<br/>• Used as catalysts vs not<br/>• Slow/no reaction with water vs vigorous/violent<br/><br/>Coloured compound examples to know:<br/>• CuSO₄(aq) — blue<br/>• FeSO₄(aq) — pale green<br/>• Fe₂(SO₄)₃(aq) / Fe(NO₃)₃(aq) — yellow-brown<br/>• CrCl₃(aq) — dark green<br/>• MnO₄⁻(aq) — purple (permanganate)'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Transition elements: high melting points, high density, hard, low reactivity with water. Variable oxidation states (e.g. Fe²⁺/Fe³⁺). Coloured compounds. Act as catalysts. Contrast with alkali metals: soft, light, extremely reactive with water.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Transition metals: hard, dense, high MP, low reactivity with water, variable oxidation states, coloured compounds, catalytic activity. Opposite of Group 1.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-properties', prompt: 'State two ways transition elements differ from Group I metals in terms of physical properties.', answer: 'Transition elements have high melting points and high densities; Group I metals have low melting points and low densities.' },
      { id: 'cue-2', blockId: 'tbl-properties', prompt: 'Give two chemical differences between transition elements and Group I metals.', answer: 'Transition elements have variable oxidation states (e.g. Fe²⁺ and Fe³⁺) and form coloured compounds; Group I metals only form one oxidation state (+1) and their compounds are generally white/colourless.' },
      { id: 'cue-3', blockId: 'call-tip', prompt: 'Give two examples of transition metals used as catalysts and state the process each is used in.', answer: 'Iron (Fe) in the Haber process for making ammonia; vanadium(V) oxide (V₂O₅) in the Contact process for making sulfuric acid.' }
    ]
  },
  evidence: [],
  mentions: []
};
