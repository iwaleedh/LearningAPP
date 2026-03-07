/**
 * Seed note: Chemistry · Unit 1 · Topic 4 · Subtopic 4
 * "Alkanes as fuels — combustion"
 * Source: Pearson Edexcel IAL Chemistry — Section 4B.2
 */
export const note_chemistry_1_4_4 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Write balanced equations for complete and incomplete combustion of alkanes. Understand the environmental problems caused by combustion products. Know the role of catalytic converters.' },
      terms: []
    },
    {
      id: 'h-complete',
      type: 'heading',
      data: { text: 'Complete Combustion', level: 2 },
      terms: []
    },
    {
      id: 'callout-complete',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Complete Combustion of Alkanes',
        text: 'When an alkane burns in <strong>excess oxygen</strong>, complete combustion occurs, producing only <strong>CO₂</strong> and <strong>H₂O</strong>.<br/><br/>General equation for CₙH₂ₙ₊₂:<br/>CₙH₂ₙ₊₂ + (3n+1)/2 O₂ → n CO₂ + (n+1) H₂O<br/><br/><strong>Example (methane):</strong><br/>CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)<br/><br/><strong>Example (octane):</strong><br/>C₈H₁₈(l) + 25/2 O₂(g) → 8CO₂(g) + 9H₂O(l)'
      },
      terms: ['Complete combustion']
    },
    {
      id: 'h-incomplete',
      type: 'heading',
      data: { text: 'Incomplete Combustion', level: 2 },
      terms: []
    },
    {
      id: 'callout-incomplete',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Incomplete Combustion — limited oxygen',
        text: 'When oxygen supply is limited, incomplete combustion occurs producing <strong>carbon monoxide (CO)</strong> and/or <strong>carbon soot (C)</strong> as well as H₂O.<br/><br/><strong>Example:</strong><br/>2CH₄(g) + 3O₂(g) → 2CO(g) + 4H₂O(l)  (producing CO)<br/>CH₄(g) + O₂(g) → C(s) + 2H₂O(l)  (producing soot)'
      },
      terms: ['Incomplete combustion', 'Carbon monoxide']
    },
    {
      id: 'table-problems',
      type: 'comparisonTable',
      data: {
        caption: 'Environmental problems from combustion of alkane fuels',
        headers: ['Pollutant', 'Source', 'Environmental/Health Problem', 'Solution'],
        rows: [
          ['<strong>CO₂</strong>', 'Complete combustion', 'Major greenhouse gas → global warming/climate change', 'Reduce fossil fuel use; carbon capture'],
          ['<strong>CO</strong>', 'Incomplete combustion', 'Toxic — binds irreversibly to haemoglobin, reducing O₂ transport', 'Catalytic converter; ensure efficient combustion'],
          ['<strong>Soot (C particles)</strong>', 'Incomplete combustion', 'Respiratory problems; contributes to particulate pollution', 'Catalytic converter; sufficient O₂'],
          ['<strong>NOₓ (NO, NO₂)</strong>', 'High temperature combustion (N₂ + O₂ reaction in engines)', 'Acid rain; photochemical smog; respiratory irritant', 'Catalytic converter; reduce combustion temperatures'],
          ['<strong>SO₂</strong>', 'Combustion of S-containing fuels', 'Acid rain (SO₂ + H₂O → H₂SO₄)', 'Desulfurisation of fuels; catalytic converter']
        ]
      },
      terms: ['Greenhouse gas', 'Acid rain']
    },
    {
      id: 'callout-converter',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Catalytic Converter',
        text: 'Catalytic converters are fitted to car exhausts. They contain a platinum/rhodium catalyst that converts harmful gases to less harmful ones:<br/><br/>• CO + ½O₂ → CO₂ (CO to CO₂)<br/>• 2NOₓ → N₂ + xO₂ (NOₓ to N₂)<br/>• Unburned hydrocarbons + O₂ → CO₂ + H₂O<br/><br/>Overall: oxidises CO and hydrocarbons; reduces NOₓ to N₂.'
      },
      terms: ['Catalytic converter']
    },
    {
      id: 'h-alternative-fuels',
      type: 'heading',
      data: { text: 'Alternative Fuels & Carbon Neutrality', level: 2 },
      terms: []
    },
    {
      id: 'callout-carbon-neutral',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Carbon Neutrality',
        text: 'A fuel is considered <strong>carbon neutral</strong> if burning it produces a zero net effect on the amount of CO₂ in the atmosphere. This happens if the CO₂ absorbed by the plants during photosynthesis while they were growing equals the CO₂ released when the biofuel is burned.'
      },
      terms: ['Carbon neutral', 'Biofuel']
    },
    {
      id: 'table-alt-fuels',
      type: 'comparisonTable',
      data: {
        caption: 'Comparing Alternative Fuels',
        headers: ['Factor', 'Bioethanol (Biofuel)', 'Natural Gas (Fossil Fuel)', 'Hydrogen (H₂)'],
        rows: [
          ['<strong>Source</strong>', 'Sugarcane / crops (renewable)', 'Underground (finite / non-renewable)', 'Water (electrolysis: requires energy)'],
          ['<strong>Land Use</strong>', 'High (needs large areas to grow crops)', 'Zero (drilled underground)', 'Zero'],
          ['<strong>Yield</strong>', 'Low but increasing', 'Very high', 'High, but costs energy to produce'],
          ['<strong>Transport / Storage</strong>', 'Transported easily like petrol', 'Requires pipelines', 'Requires pressurised tanks (explosive risk)'],
          ['<strong>Carbon Neutral?</strong>', 'Close to neutral', 'Definitely NOT carbon neutral', 'Burns to make only H₂O (no CO₂), but energy to make H₂ usually comes from fossil fuels!']
        ]
      },
      terms: ['Alternative fuel']
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-complete', prompt: 'Write a balanced equation for the complete combustion of propane (C₃H₈).' },
      { id: 'c2', blockId: 'callout-incomplete', prompt: 'What products are formed in incomplete combustion? When does incomplete combustion occur?' },
      { id: 'c3', blockId: 'table-problems', prompt: 'State two environmental problems caused by burning fossil fuels and explain how each is caused.' },
      { id: 'c4', blockId: 'callout-converter', prompt: 'Explain how a catalytic converter reduces pollution from car exhaust fumes.' },
      { id: 'c5', blockId: 'callout-carbon-neutral', prompt: 'What is meant by the term "carbon neutral"?' },
      { id: 'c6', blockId: 'table-alt-fuels', prompt: 'Compare bioethanol, natural gas, and hydrogen as fuels in terms of land use, transport, and carbon neutrality.' }
    ],
    summaryText: 'Complete combustion: alkane + O₂ → CO₂ + H₂O. Incomplete: also produces CO (toxic, binds to haemoglobin) and/or soot. Pollutants: CO₂, CO, NOₓ, SO₂. Catalytic converter: converts CO→CO₂ and NOₓ→N₂. Alternative fuels (bioethanol, H₂) aim to be closer to carbon neutral than fossil fuels but have land/storage issues.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_4_4;