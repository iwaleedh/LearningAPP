export const note_olevel_chemistry_11_11_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-1-2-homologous-series.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define a homologous series and state its characteristics. Identify alkanes, alkenes, and alcohols as examples.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Homologous Series', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition and Characteristics',
        text: 'A <strong>homologous series</strong> is a family of organic compounds that:<br/><br/>1. <strong>Share the same general formula</strong> (e.g. CₙH₂ₙ₊₂ for alkanes)<br/>2. <strong>Differ by CH₂</strong> between consecutive members<br/>3. Have <strong>similar chemical properties</strong> (same functional group, same types of reactions)<br/>4. Show a <strong>gradual change in physical properties</strong> (e.g. boiling point, viscosity, flammability increase with increasing chain length/relative molecular mass)'
      }
    },
    {
      id: 'tbl-series',
      type: 'comparisonTable',
      data: {
        caption: 'Three important homologous series',
        headers: ['Series', 'General formula', 'Functional group', 'Example'],
        rows: [
          ['Alkanes', 'CₙH₂ₙ₊₂', 'None (C–C and C–H bonds only; saturated)', 'Methane CH₄, Ethane C₂H₆'],
          ['Alkenes', 'CₙH₂ₙ', 'C=C (carbon–carbon double bond; unsaturated)', 'Ethene C₂H₄, Propene C₃H₆'],
          ['Alcohols', 'CₙH₂ₙ₊₁OH', '–OH (hydroxyl group)', 'Methanol CH₃OH, Ethanol C₂H₅OH']
        ]
      }
    },
    {
      id: 'call-trend',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Trend in Physical Properties',
        text: 'As the number of carbon atoms increases in a homologous series:<br/>• <strong>Boiling point increases</strong> (molecules larger → stronger London/van der Waals forces)<br/>• <strong>Viscosity increases</strong> (liquids become thicker)<br/>• <strong>Flammability decreases</strong> slightly<br/>• <strong>Volatility decreases</strong><br/><br/>Methane and ethane are gases; butane and pentane are liquids; larger alkanes are increasingly viscous liquids or waxes.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Homologous series: same general formula; differ by CH₂; similar chemical properties; gradual change in physical properties. Alkanes (CₙH₂ₙ₊₂), alkenes (CₙH₂ₙ), alcohols (CₙH₂ₙ₊₁OH).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Homologous series: same formula pattern, differ by CH₂, similar reactions, gradual physical property change.',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'State four characteristics of a homologous series.', answer: '1. Same general formula. 2. Differ by CH₂ between consecutive members. 3. Similar chemical properties. 4. Gradual change in physical properties (e.g. increasing boiling point).' },
      { id: 'cue-2', blockId: 'tbl-series', prompt: 'State the general formulae for alkanes, alkenes, and alcohols.', answer: 'Alkanes: CₙH₂ₙ₊₂. Alkenes: CₙH₂ₙ. Alcohols: CₙH₂ₙ₊₁OH.' },
      { id: 'cue-3', blockId: 'call-trend', prompt: 'Why does boiling point increase as the chain length increases in a homologous series?', answer: 'Larger molecules have stronger London (van der Waals) dispersion forces, requiring more energy to overcome. Therefore the boiling point increases.' }
    ]
  },
  evidence: [],
  mentions: []
};
