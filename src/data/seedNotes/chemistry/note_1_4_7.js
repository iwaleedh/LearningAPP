/**
 * Seed note: Chemistry · Unit 1 · Topic 4 · Subtopic 7
 * "Core Practical 3: distillation and thin-layer chromatography"
 * Source: Pearson Edexcel IAL Chemistry — Core Practical 3
 */
export const note_chemistry_1_4_7 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Describe Core Practical 3: distillation of a product mixture to separate organic liquids. Understand the use of thin-layer chromatography (TLC) to monitor reactions and identify products.' },
      terms: []
    },
    {
      id: 'h-distillation',
      type: 'heading',
      data: { text: 'Distillation in Organic Chemistry', level: 2 },
      terms: []
    },
    {
      id: 'p-distillation',
      type: 'paragraph',
      data: { text: '<strong>Distillation</strong> is used to separate a liquid product from a reaction mixture based on differences in boiling points. The mixture is heated; the more volatile (lower boiling point) component evaporates first and is collected in a condenser.' },
      terms: ['Distillation', 'Simple distillation']
    },
    {
      id: 'list-distillation-steps',
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          'Set up a round-bottom flask with a thermometer (bulb at the side arm junction), condenser, and collection flask.',
          'Add the reaction mixture and heat gently. Anti-bumping granules prevent sudden violent boiling.',
          'Collect fractions at the appropriate boiling point range (read from thermometer).',
          'Re-distil if further purification is needed.'
        ]
      },
      terms: []
    },
    {
      id: 'h-tlc',
      type: 'heading',
      data: { text: 'Thin-Layer Chromatography (TLC)', level: 2 },
      terms: []
    },
    {
      id: 'callout-tlc',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What is TLC?',
        text: '<strong>Thin-layer chromatography (TLC)</strong> separates mixtures of compounds based on their different affinities for a stationary phase (silica gel on aluminium foil) relative to a mobile phase (solvent). Components travel different distances → different Rf values.<br/><br/>Used to: monitor reaction progress, check purity of a product, identify compounds by comparison to known standards.'
      },
      terms: ['TLC', 'Rf value', 'Stationary phase', 'Mobile phase']
    },
    {
      id: 'callout-rf',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rf value',
        text: 'Rf = distance travelled by spot ÷ distance travelled by solvent front<br/><br/>Rf values range from 0 to 1. Each compound has a characteristic Rf in a given solvent/plate system — used for identification by comparison to known standards.'
      },
      terms: ['Rf value']
    },
    {
      id: 'list-tlc-method',
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          'Draw a pencil baseline on a TLC plate. Spot the sample(s) and reference compounds using a capillary tube.',
          'Place the plate in a tank with a small amount of solvent (mobile phase). Cover to saturate with solvent vapour.',
          'Allow the solvent to rise to near the top of the plate. Mark the solvent front immediately.',
          'Visualise the spots: use UV light (for UV-active compounds) or iodine vapour (stains organic molecules brown).',
          'Calculate Rf values for each spot.'
        ]
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'p-distillation', prompt: 'Explain how simple distillation separates two liquids of different boiling points.' },
      { id: 'c2', blockId: 'callout-rf', prompt: 'Define Rf value and write the formula for calculating it.' },
      { id: 'c3', blockId: 'callout-tlc', prompt: 'State two uses of TLC in organic chemistry.' },
      { id: 'c4', blockId: 'list-tlc-method', prompt: 'Describe how you would visualise spots on a TLC plate that contain compounds invisible to the naked eye.' }
    ],
    summaryText: 'Distillation: separates liquids by bp difference (more volatile evaporates first, collected in condenser). TLC: separates compounds based on affinity for silica (stationary phase) vs solvent (mobile phase). Rf = spot distance / solvent front distance. Spots visualised by UV or iodine vapour. Rf used for identification.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_4_7;