/**
 * Seed note: Chemistry · Unit 1 · Topic 4 · Subtopic 3
 * "Alkanes from crude oil — fractional distillation and cracking"
 * Source: Pearson Edexcel IAL Chemistry — Section 4B.1
 */
export const note_chemistry_1_4_3 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Know that alkanes are obtained from crude oil by fractional distillation. Know the process of cracking and why it is economically important. Distinguish between thermal cracking and catalytic cracking.' },
      terms: []
    },
    {
      id: 'h-crude',
      type: 'heading',
      data: { text: 'Crude Oil and Fractional Distillation', level: 2 },
      terms: []
    },
    {
      id: 'p-crude',
      type: 'paragraph',
      data: { text: '<strong>Crude oil</strong> is a complex mixture of hydrocarbons (mostly alkanes). It is separated by <strong>fractional distillation</strong>: the crude oil is heated, and the vapours rise up a fractionating column where different fractions condense at different temperatures (based on their boiling points, which depend on chain length).' },
      terms: ['Crude oil', 'Fractional distillation']
    },
    {
      id: 'table-fractions',
      type: 'comparisonTable',
      data: {
        caption: 'Key fractions from fractional distillation of crude oil',
        headers: ['Fraction', 'Approximate C range', 'Boiling point range', 'Use'],
        rows: [
          ['Gases (LPG)', 'C₁–C₄', 'Below 25°C', 'Cooking gas, heating'],
          ['Gasoline (petrol)', 'C₅–C₁₀', '25–60°C', 'Fuel for car engines'],
          ['Naphtha', 'C₅–C₁₀', '60–100°C', 'Chemical feedstock'],
          ['Kerosene', 'C₁₀–C₁₅', '150–250°C', 'Jet fuel'],
          ['Diesel / Gas oil', 'C₁₅–C₂₀', '220–350°C', 'Diesel engines, heating'],
          ['Residue (bitumen)', '>C₂₀', 'Above 350°C', 'Road surfacing, roofing']
        ]
      },
      terms: []
    },
    {
      id: 'callout-trends',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Properties vs Chain Length',
        text: 'As the hydrocarbon chain length increases, London/dispersion forces increase. This causes:<br/>• <strong>Boiling point:</strong> Increases<br/>• <strong>Volatility:</strong> Decreases (doesn\'t evaporate as easily)<br/>• <strong>Viscosity:</strong> Increases (becomes thicker, flows less easily)<br/>• <strong>Flammability:</strong> Decreases (harder to catch fire)<br/>• <strong>Colour:</strong> Becomes darker'
      },
      terms: ['Volatility', 'Viscosity']
    },
    {
      id: 'h-cracking',
      type: 'heading',
      data: { text: 'Cracking', level: 2 },
      terms: []
    },
    {
      id: 'p-cracking',
      type: 'paragraph',
      data: { text: 'There is a greater demand for shorter-chain fractions (petrol) than for longer-chain ones (heavy oils). <strong>Cracking</strong> is the process of breaking large, less useful hydrocarbon molecules into smaller, more useful ones. It also produces alkenes, which are important in manufacturing polymers.' },
      terms: ['Cracking']
    },
    {
      id: 'table-cracking',
      type: 'comparisonTable',
      data: {
        caption: 'Thermal vs Catalytic cracking',
        headers: ['Feature', 'Thermal Cracking', 'Catalytic Cracking'],
        rows: [
          ['Temperature', 'High (~750°C)', 'Lower (~450°C)',],
          ['Pressure', 'High', 'Low (near atmospheric)'],
          ['Catalyst', 'None', 'Zeolite (aluminosilicate)'],
          ['Products', 'More alkenes (useful for polymers)', 'More aromatic hydrocarbons + branched alkanes (good for petrol octane rating)'],
          ['Mechanism', 'Homolytic fission → free radicals', 'Ionic mechanism (carbocations)']
        ]
      },
      terms: ['Thermal cracking', 'Catalytic cracking']
    },
    {
      id: 'callout-example',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example Cracking Equation',
        text: 'C₁₅H₃₂ → C₈H₁₈ + C₅H₁₀ + C₂H₄<br/>(pentadecane → octane + pentene + ethene)<br/><br/>Note: carbon and hydrogen atoms balance. One or more products must be an alkene (unsaturated).'
      },
      terms: []
    },
    {
      id: 'callout-cracking-experiment',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Laboratory Cracking & Preventing Suck-Back',
        text: 'In the lab, medicinal oil (alkane) is heated, passes over a catalyst (e.g., aluminium oxide/porcelain chips), and the alkene gas is collected over water.<br/><strong>Safety hazard ("Suck-back"):</strong> The delivery tube MUST be removed from the water before stopping the heat. If you stop the heat first, the gas inside cools and contracts, sucking cold water back up into the hot glass test tube, which would cause it to shatter.'
      },
      terms: ['Suck-back']
    },
    {
      id: 'h-reforming',
      type: 'heading',
      data: { text: 'Reforming', level: 2 },
      terms: []
    },
    {
      id: 'p-reforming',
      type: 'paragraph',
      data: { text: '<strong>Reforming</strong> is the conversion of straight-chain hydrocarbons into branched-chain or cyclic hydrocarbons. This is done by heating them with a catalyst (usually Platinum, Pt). Alkanes have a tendency to cause "knocking" in car engines when they burn. Branched and cyclic hydrocarbons burn more efficiently and smoothly (reducing knocking).' },
      terms: ['Reforming', 'Knocking']
    },
    {
      id: 'callout-reforming-examples',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Reforming Examples',
        text: '1. <strong>Straight to cyclic:</strong> Pentane → Cyclopentane + H₂<br/>(C₅H₁₂ → C₅H₁₀ + H₂)<br/><br/>2. <strong>Straight to aromatic (benzene ring):</strong> Heptane → Methylbenzene + 4H₂<br/>(C₇H₁₆ → C₇H₈ + 4H₂)'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-trends', prompt: 'Explain how the boiling point, volatility, viscosity, and flammability change as the carbon chain length increases.' },
      { id: 'c2', blockId: 'p-cracking', prompt: 'Why is cracking economically important?' },
      { id: 'c3', blockId: 'callout-cracking-experiment', prompt: 'In a laboratory cracking experiment, why must the delivery tube be removed from the water before the heat is completely taken away?' },
      { id: 'c4', blockId: 'p-reforming', prompt: 'What is reforming, and why are alkanes reformed before being used as engine fuels?' }
    ],
    summaryText: 'Crude oil = mixture of hydrocarbons. Separated by fractional distillation (longer chain = higher bp, more viscous, less volatile, less flammable). Cracking = breaking large alkanes. Lab cracking: remove delivery tube before stopping heat to stop suck-back. Reforming = converts straight chains to branched/cyclic (using Pt catalyst) to burn more efficiently and reduce engine knocking.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_4_3;