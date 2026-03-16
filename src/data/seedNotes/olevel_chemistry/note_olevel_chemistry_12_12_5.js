export const note_olevel_chemistry_12_12_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/12 Experimental Techniques And Chemical Analysis/12-2-3-separation-and-purification-techniques.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe and explain the principles of filtration, crystallisation, simple distillation, fractional distillation and use them to separate appropriate mixtures.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Filtration', level: 2 }
    },
    {
      id: 'call-filter',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Filtration — Separating Insoluble Solid from Liquid',
        text: '<strong>Principle:</strong> An insoluble solid is retained by the filter paper while the liquid passes through as the filtrate.<br/><br/><strong>Apparatus:</strong> filter paper in a funnel, beaker<br/><strong>Product:</strong> residue (insoluble solid on paper) + filtrate (liquid collected below)<br/><br/><strong>Example:</strong> separating sand from sand + saltwater mixture<br/><br/><strong>To purify the solid:</strong> wash the residue with distilled water to remove soluble impurities.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Crystallisation', level: 2 }
    },
    {
      id: 'call-cryst',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Crystallisation — Obtaining Soluble Solid from Solution',
        text: '<strong>Principle:</strong> Dissolve solid in minimum hot solvent → filter to remove insoluble impurities → evaporate to reduce volume → cool slowly → crystals form → filter off crystals → dry<br/><br/><strong>Why cool slowly?</strong> Slow cooling gives larger, purer crystals; rapid cooling gives small impure crystals<br/><br/><strong>Why not evaporate to dryness?</strong> Excessive heating may decompose the product or lead to inclusion of all impurities; evaporating the solution only partially encourages crystal growth on cooling<br/><br/><strong>Examples:</strong> purifying copper(II) sulfate, sodium chloride, potassium nitrate'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Simple Distillation', level: 2 }
    },
    {
      id: 'call-simple-dist',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Simple Distillation — Volatile Liquid from Solution',
        text: '<strong>Principle:</strong> Heating evaporates the solvent; vapour passes through condenser → cooled back to liquid (distillate) collected in receiver. Solid solute (non-volatile) remains in flask.<br/><br/><strong>Apparatus:</strong> round-bottom flask, thermometer (at side arm), Liebig condenser, collection flask<br/><strong>Example:</strong> obtaining pure water from seawater or ink solution<br/><br/><strong>Limitation:</strong> Only works if one component is much more volatile; cannot separate two miscible liquids with similar boiling points.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Fractional Distillation', level: 2 }
    },
    {
      id: 'call-frac-dist',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Fractional Distillation — Separating Miscible Liquids',
        text: '<strong>Principle:</strong> Two miscible liquids with different boiling points are separated by repeated evaporation and condensation in a fractionating column.<br/><br/><strong>Key difference from simple distillation:</strong> A fractionating column (packed column with large surface area) allows vapour to condense and re-evaporate many times. Lower boiling point liquid reaches the top faster.<br/><br/><strong>Examples:</strong><br/>• Ethanol (b.p. 78 °C) from water (b.p. 100 °C) in fermented solutions<br/>• Crude oil refining — separating petrol (low b.p.) from diesel (high b.p.)'
      }
    },
    {
      id: 'tbl-summary',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of separation techniques',
        headers: ['Technique', 'Separation needed', 'Key principle'],
        rows: [
          ['Filtration', 'Insoluble solid from liquid', 'Size: solid particles too large to pass through filter paper'],
          ['Crystallisation', 'Soluble solid from solution', 'Solubility decreases on cooling — solid crystallises out'],
          ['Simple distillation', 'Volatile liquid from non-volatile solid (or solution)', 'Large difference in boiling points; solvent evaporates then condenses'],
          ['Fractional distillation', 'Two miscible liquids with different boiling points', 'Repeated condensation/evaporation in fractionating column']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Filtration: insoluble solid from liquid. Crystallisation: soluble solid from solution (evaporate → cool slowly). Simple distillation: volatile liquid from solution. Fractional distillation: two miscible liquids with different boiling points (fractionating column). Choose technique based on physical properties of components.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Filtration (insoluble solid), crystallisation (soluble solid), simple distillation (volatile liquid from solution), fractional distillation (miscible liquids with different b.p.).',
    cues: [
      { id: 'cue-1', blockId: 'call-cryst', prompt: 'Describe the crystallisation process for obtaining a pure solid from a solution.', answer: 'Dissolve solid in minimum hot solvent, filter to remove insoluble impurities, evaporate partially to concentrate, cool slowly to form crystals, filter off crystals, wash and dry.' },
      { id: 'cue-2', blockId: 'call-frac-dist', prompt: 'What is the purpose of the fractionating column in fractional distillation?', answer: 'It provides a large surface area where vapour repeatedly condenses and re-evaporates. The component with the lower boiling point rises to the top first, allowing separation of miscible liquids with different boiling points.' },
      { id: 'cue-3', blockId: 'tbl-summary', prompt: 'How would you separate a mixture of salt solution from sand?', answer: 'First filter to remove the insoluble sand (filtration), then crystallise the filtrate to recover the salt (evaporate solution then cool to let crystals form, filter and dry).' }
    ]
  },
  evidence: [],
  mentions: []
};
