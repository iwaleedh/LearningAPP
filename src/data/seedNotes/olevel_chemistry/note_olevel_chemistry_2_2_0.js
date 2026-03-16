export const note_olevel_chemistry_2_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-1-1-elements-compounds-and-mixtures.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Distinguish between elements, compounds and mixtures, and describe methods used to separate mixtures.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Elements, Compounds and Mixtures', level: 2 }
    },
    {
      id: 'tbl-ecm',
      type: 'comparisonTable',
      data: {
        caption: 'Comparing elements, compounds and mixtures',
        headers: ['', 'Element', 'Compound', 'Mixture'],
        rows: [
          ['Definition', 'Substance containing only one type of atom', 'Substance formed by chemical combination of two or more elements in fixed proportions', 'Two or more substances mixed together but not chemically combined'],
          ['Composition', 'Fixed — one element only', 'Fixed ratio of elements', 'Variable — any proportions'],
          ['Separation', 'Cannot be split by chemical means', 'Split only by chemical reactions', 'Split by physical methods (filtration, distillation, etc.)'],
          ['Properties', 'Has properties of that element', 'Has different properties from its component elements', 'Retains properties of its components'],
          ['Examples', 'Cu, Fe, O₂, Cl₂', 'H₂O, NaCl, CO₂, MgO', 'Air, sea water, brass, crude oil']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Methods of Separation', level: 2 }
    },
    {
      id: 'list-separation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Filtration</strong> — separates an insoluble solid from a liquid (e.g. sand from water). Liquid passes through filter paper; solid remains as residue.' },
          { text: '<strong>Evaporation</strong> — separates a dissolved solid from a solution by heating to evaporate the solvent (e.g. salt from salt water). Used when solid does not decompose on heating.' },
          { text: '<strong>Crystallisation</strong> — separates a dissolved solid by evaporating some solvent then cooling so crystals form. Better than evaporation to dryness — preserves crystal shape.' },
          { text: '<strong>Simple distillation</strong> — separates a pure liquid from a solution (e.g. water from salt solution). The liquid evaporates, vapour condenses in condenser, collected as distillate.' },
          { text: '<strong>Fractional distillation</strong> — separates miscible liquids with different boiling points (e.g. ethanol/water, crude oil fractions). Fractionating column used.' },
          { text: '<strong>Chromatography</strong> — separates dissolved substances with different solubilities in a solvent (e.g. separating dyes in ink). Substances travel different distances up the paper.' }
        ]
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Pure Substance vs Mixture',
        text: 'A <strong>pure substance</strong> has a sharp, fixed melting point. A <strong>mixture</strong> has a melting range lower than expected. This is used as a test for purity in the lab.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Elements contain one type of atom and cannot be split chemically. Compounds are chemically combined elements with fixed proportions. Mixtures are physically combined substances that can be separated by physical methods (filtration, distillation, chromatography).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Elements have one atom type; compounds have fixed chemical combinations; mixtures are physically combined and separable by physical methods.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-ecm', prompt: 'What is the difference between a compound and a mixture?', answer: 'A compound is formed by chemical combination of elements in fixed proportions, with different properties to its components, and can only be split by chemical reactions. A mixture has variable proportions, retains component properties, and can be separated by physical methods.' },
      { id: 'cue-2', blockId: 'list-separation', prompt: 'How would you separate salt from salt water?', answer: 'Evaporation or crystallisation — heat the solution to evaporate the water, leaving salt crystals behind.' },
      { id: 'cue-3', blockId: 'list-separation', prompt: 'What is the difference between simple and fractional distillation?', answer: 'Simple distillation separates a pure liquid from a solution (one volatile component). Fractional distillation separates miscible liquids with different boiling points using a fractionating column.' }
    ]
  },
  evidence: [],
  mentions: []
};
