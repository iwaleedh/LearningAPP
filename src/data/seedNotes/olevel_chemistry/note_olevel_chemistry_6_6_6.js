export const note_olevel_chemistry_6_6_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-2-1-reversible-reactions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define a reversible reaction and describe examples including ammonium chloride and hydrated salts.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Reversible Reactions', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition',
        text: 'A <strong>reversible reaction</strong> is one that can proceed in both the forward <strong>and</strong> the backward direction.<br/><br/>Shown using the <strong>⇌ symbol</strong> (double half-arrows).<br/><br/>General form: A + B ⇌ C + D<br/>• Forward reaction: A + B → C + D<br/>• Reverse reaction: C + D → A + B'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Key Examples', level: 2 }
    },
    {
      id: 'tbl-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Examples of reversible reactions',
        headers: ['Example', 'Forward', 'Reverse', 'Observation'],
        rows: [
          ['Ammonium chloride', 'NH₄Cl(s) → NH₃(g) + HCl(g) on heating', 'NH₃(g) + HCl(g) → NH₄Cl(s) on cooling', 'White ring forms higher up the tube; white solid re-forms on cooling'],
          ['Hydrated copper(II) sulfate', 'CuSO₄·5H₂O(s) → CuSO₄(s) + 5H₂O(g) on heating', 'CuSO₄(s) + 5H₂O → CuSO₄·5H₂O on adding water', 'Blue crystals → white powder; add water → blue again'],
          ['Cobalt(II) chloride / water', 'CoCl₂·6H₂O(pink) ⇌ CoCl₂(blue) + 6H₂O with heat/drying', 'Blue CoCl₂ → pink on absorbing water', 'Pink/blue colour change; used as humidity indicator'],
          ['Bicarbonate decomposition', '2NaHCO₃(s) ⇌ Na₂CO₃(s) + H₂O(g) + CO₂(g) on heating', 'Reverse on cooling', 'Decomposes then reforms']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Key Point',
        text: 'When a reversible reaction takes place in a <strong>closed system</strong> (nothing can escape), dynamic equilibrium is eventually reached.<br/><br/>In an <strong>open system</strong> (products escape), the reaction may go to completion in the forward direction.<br/><br/>E.g. Heating NH₄Cl in an open tube: gases escape → no equilibrium → all solid decomposes eventually.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'A reversible reaction uses ⇌ and can go in both directions. Key examples: NH₄Cl(s) ⇌ NH₃(g) + HCl(g); CuSO₄·5H₂O ⇌ CuSO₄ + 5H₂O; CoCl₂·6H₂O ⇌ CoCl₂ + 6H₂O. In a closed system, this leads to equilibrium.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Reversible reaction: ⇌ in both directions. NH₄Cl, CuSO₄·5H₂O, CoCl₂·6H₂O are classic examples.',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'What symbol is used to represent a reversible reaction, and what does it mean?', answer: 'The ⇌ symbol (double half-arrows), meaning the reaction can proceed in both the forward and the reverse direction.' },
      { id: 'cue-2', blockId: 'tbl-examples', prompt: 'Describe what you observe when blue hydrated copper(II) sulfate is heated and then water is added to the product.', answer: 'On heating, the blue crystals (CuSO₄·5H₂O) lose water and turn into a white powder (anhydrous CuSO₄). On adding water, the white powder turns blue again as the hydrated salt re-forms.' },
      { id: 'cue-3', blockId: 'tbl-examples', prompt: 'Write the reversible equation for the thermal decomposition of ammonium chloride.', answer: 'NH₄Cl(s) ⇌ NH₃(g) + HCl(g)' }
    ]
  },
  evidence: [],
  mentions: []
};
