export const note_economics_1_3_1 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify and explain the key determinants of supply using the STEPCN mnemonic, and analyse how each factor affects the supply curve.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Determinants of Supply', level: 2 },
      terms: []
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'The supply of a good or service is influenced by several non-price factors. The mnemonic <strong>STEPCN</strong> is a useful way to remember them: <strong>S</strong>ubstitutes in production, <strong>T</strong>echnology, <strong>E</strong>xpectations, <strong>P</strong>rice of inputs, <strong>C</strong>osts (taxes/subsidies), <strong>N</strong>umber of firms.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Each Determinant Explained', level: 3 },
      terms: []
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Cost of raw materials / inputs:</strong> Higher input costs (e.g. oil, steel, labour) reduce profitability, shifting supply <em>left</em>. Lower input costs shift supply <em>right</em>.' },
          { text: '<strong>Technology:</strong> Improved production technology increases output per unit of input → supply shifts <em>right</em>. Examples: automation, better software, improved machinery.' },
          { text: '<strong>Taxes on producers:</strong> An indirect tax (e.g. excise duty) raises production costs → supply shifts <em>left</em> (upward). A <em>subsidy</em> reduces costs → supply shifts <em>right</em> (downward).' },
          { text: '<strong>Expectations of future prices:</strong> If firms expect prices to rise, they may <em>withhold supply</em> now (shift left). If they expect prices to fall, they supply more now (shift right).' },
          { text: '<strong>Number of producers:</strong> More firms entering the market increases market supply (right shift). Firms exiting reduces market supply (left shift).' },
          { text: '<strong>Natural and environmental factors:</strong> Good harvests and favourable weather increase agricultural supply. Droughts, floods, or pests reduce it (left shift).' }
        ]
      },
      terms: []
    },
    {
      id: 'worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Improved Technology',
        text: 'A car manufacturer adopts robotic assembly lines, cutting the cost per car by 20%.<br/><br/>Effect: At every price level, the firm can now produce more cars profitably. The supply curve shifts <strong>rightward</strong>. At the original price P₁, quantity supplied rises from Q₁ to Q₂.<br/><br/>Market outcome: If demand is unchanged, the equilibrium price falls and equilibrium quantity rises.'
      },
      terms: []
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Summary of Effects', level: 3 },
      terms: []
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Supply determinants and their direction of effect on the supply curve',
        headers: ['Determinant', 'Change', 'Effect on Supply', 'Direction of Shift'],
        rows: [
          ['Input costs', 'Fall', 'Lower production costs → more profitable', 'Right (increase)'],
          ['Input costs', 'Rise', 'Higher production costs → less profitable', 'Left (decrease)'],
          ['Technology', 'Improves', 'Higher productivity → more output per £', 'Right (increase)'],
          ['Indirect tax', 'Imposed', 'Raises cost for producer', 'Left (decrease)'],
          ['Subsidy', 'Granted', 'Reduces cost for producer', 'Right (increase)'],
          ['Number of firms', 'Increases', 'More producers add to market supply', 'Right (increase)'],
          ['Expectations (price)', 'Expected to rise', 'Withhold supply now', 'Left (decrease)'],
          ['Natural events', 'Favourable', 'Better yields/production conditions', 'Right (increase)']
        ]
      },
      terms: []
    },
    {
      id: 'tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'In a 4+ mark question, <strong>chain your analysis</strong>: state the determinant → explain why it affects costs or profitability → state which direction supply shifts → state the effect on equilibrium price and quantity.'
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "In a 4+ mark question, chain your analysis: state the determinant \u2192 explain why it affects costs or profitability \u2192 state which direction supply shifts \u2192 state the effect on equilibrium price and quantity."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "When analysing a shift in supply, use the acronym PINTSWC (Productivity, Indirect Taxes, Number of firms, Technology, Subsidies, Weather, Costs of production). If extracting from a case study, explicitly quote which determinant applies."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Supply is determined by STEPCN: input costs, technology, taxes/subsidies, expectations, number of producers, and natural factors. Each shifts the supply curve left or right.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'What does STEPCN stand for in the context of supply determinants?', answer: 'Substitutes in production, Technology, Expectations, Price of inputs, Costs (taxes/subsidies), Number of firms.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Why does improved technology shift the supply curve rightward?', answer: 'It raises productivity, lowering the cost per unit, making production more profitable at every price.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'How does a government subsidy affect the supply curve?', answer: 'It reduces producers\' costs, shifting supply rightward (increase in supply).' },
      { id: 'cue-4', blockId: 'list-1', prompt: 'If firms expect the price of a good to rise next month, what happens to current supply?', answer: 'They withhold supply now to sell later at a higher price, shifting current supply leftward.' },
      { id: 'cue-5', blockId: 'tbl-1', prompt: 'What effect does an increase in the number of firms have on market supply?', answer: 'Market supply increases — the supply curve shifts rightward.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_3_1;
