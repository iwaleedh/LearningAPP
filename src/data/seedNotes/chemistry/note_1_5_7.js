/**
 * Seed note: Chemistry · Unit 1 · Topic 5 · Subtopic 7
 * "Core Practical 4: preparation of bromoalkane"
 * Source: Pearson Edexcel IAL Chemistry — Core Practical 4
 */
export const note_chemistry_1_5_7 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Describe Core Practical 4: preparing a halogenoalkane (1-bromobutane) from an alcohol by nucleophilic substitution. Describe the procedure, purification steps, and relevant tests.' },
      terms: []
    },
    {
      id: 'h-aim',
      type: 'heading',
      data: { text: 'Aim and Background', level: 2 },
      terms: []
    },
    {
      id: 'callout-aim',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Aim: Prepare 1-bromobutane from butan-1-ol',
        text: '<strong>Equation:</strong><br/>CH₃CH₂CH₂CH₂OH + NaBr + H₂SO₄ → CH₃CH₂CH₂CH₂Br + NaHSO₄ + H₂O<br/><br/>Overall: butan-1-ol + HBr → 1-bromobutane + H₂O<br/>(HBr is generated in situ from NaBr + H₂SO₄)'
      },
      terms: []
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Procedure', level: 2 },
      terms: []
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          'Add butan-1-ol, sodium bromide, and water to a round-bottom flask.',
          'Slowly add concentrated H₂SO₄ (with cooling to avoid violent reaction).',
          'Fit a condenser for reflux and heat gently for 30–45 minutes.',
          'Allow to cool, then add water to separate layers.',
          'Transfer the lower organic layer (1-bromobutane) to a separating funnel.',
          'Wash with H₂SO₄ (remove unreacted alcohol), then NaHCO₃ solution (remove acid), then water.',
          'Dry with anhydrous MgSO₄ or CaCl₂ to remove water.',
          'Filter the drying agent, then distil to collect pure 1-bromobutane at its boiling point (101.6°C).'
        ]
      },
      terms: ['Reflux', 'Separating funnel']
    },
    {
      id: 'table-errors',
      type: 'comparisonTable',
      data: {
        caption: 'Sources of error and improvements in CP4',
        headers: ['Step / Issue', 'Why it matters', 'Improvement'],
        rows: [
          ['Incomplete reaction', 'Poor yield of 1-bromobutane', 'Ensure sufficient reflux time; use excess NaBr'],
          ['Emulsion forms in sep. funnel', 'Difficult to separate layers', 'Add saturated NaCl solution to break emulsion'],
          ['Impurities remain (alcohol)', 'Reduces purity of product', 'Wash twice with H₂SO₄; confirm absence with anhydrous CuSO₄ test'],
          ['Product lost during washing', 'Reduces yield', 'Keep the lower (organic) layer in each washing step']
        ]
      },
      terms: ['Separating funnel', 'Drying agent']
    },
    {
      id: 'callout-tests',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Testing for purity: test for water and halogens',
        text: '<strong>Test for water (in product):</strong> add anhydrous CuSO₄ (white). If water present → turns blue.<br/><br/><strong>Test for Br in product (halogen identification):</strong> dissolve in ethanol, acidify with dilute HNO₃, add AgNO₃(aq).<br/>• Cream precipitate → bromide (AgBr) ✓<br/>• White precipitate → chloride (AgCl)<br/>• Yellow precipitate → iodide (AgI)'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-aim', prompt: 'Write the overall equation for the preparation of 1-bromobutane from butan-1-ol.' },
      { id: 'c2', blockId: 'list-method', prompt: 'State four steps in the purification of 1-bromobutane after the initial reaction, in order.' },
      { id: 'c3', blockId: 'callout-tests', prompt: 'Describe how you would test whether 1-bromobutane contains any water impurity.' }
    ],
    summaryText: 'CP4: butan-1-ol + HBr (from NaBr + H₂SO₄) → 1-bromobutane + H₂O. Maintain reflux, then separate layers (sep. funnel), wash with H₂SO₄/NaHCO₃/water, dry (MgSO₄), distil. Test for water: anhydrous CuSO₄ (white → blue). Test for halide: AgNO₃ in ethanol/HNO₃ (cream ppt = AgBr).',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_5_7;