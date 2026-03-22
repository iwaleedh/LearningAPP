export const note_economics_2_9_2 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Identify and explain the key determinants that shift the Short-Run Aggregate Supply (SRAS) curve, and assess their direction of effect.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Short-Run Aggregate Supply: Determinants', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'The position of the SRAS curve reflects the <strong>costs of production</strong> facing firms. When production costs rise, firms supply less at each price level (SRAS shifts left). When costs fall or productivity improves, firms supply more at each price level (SRAS shifts right). The main determinants are discussed below.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: '1. Wage Rates', level: 3 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Wages</strong> are typically the largest single cost for most firms. An increase in the national minimum wage (NMW), stronger union bargaining leading to pay rises, or a tightening labour market pushing up wages all <strong>increase unit labour costs</strong>. This shifts SRAS <strong>leftward</strong>. Conversely, wage restraint or labour market reforms that hold down wages shift SRAS rightward.' }] } },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: '2. Raw Material and Energy Costs', level: 3 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: 'The price of key inputs — especially <strong>oil, gas, metals, and agricultural commodities</strong> — directly affects costs across virtually all sectors. A sharp rise in oil prices (e.g. the 1973 OPEC oil crisis or the 2022 energy crisis) raises transport, heating, and manufacturing costs, shifting SRAS <strong>leftward</strong>. A fall in commodity prices shifts SRAS <strong>rightward</strong>.' }] } },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: '3. Labour Productivity', level: 3 }
    },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Productivity</strong> measures output per unit of input. Higher labour productivity means more output is produced per hour worked, <strong>lowering unit costs</strong> even if wages remain unchanged. Improved productivity shifts SRAS <strong>rightward</strong>. Declining productivity (e.g. due to poor management, skills shortages) shifts SRAS leftward.' }] } },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: '4. Exchange Rate', level: 3 }
    },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: 'Many firms import raw materials, components, and capital goods. A <strong>depreciation</strong> of the domestic currency makes these imports more expensive in domestic currency terms, raising production costs and shifting SRAS <strong>leftward</strong>. An <strong>appreciation</strong> makes imports cheaper and shifts SRAS rightward.' }] } },
    {
      id: 'h-6',
      type: 'heading',
      data: { text: '5. Indirect Taxes and Subsidies', level: 3 }
    },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Indirect taxes</strong> (VAT, excise duties, business rates) raise firms\' costs and shift SRAS <strong>leftward</strong>. <strong>Subsidies</strong> to firms reduce production costs and shift SRAS <strong>rightward</strong>. For example, a government energy subsidy to manufacturers during a cost crisis would help offset the leftward SRAS shift from rising energy prices.' }] } },
    {
      id: 'h-7',
      type: 'heading',
      data: { text: '6. Government Regulations', level: 3 }
    },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: 'New or stricter <strong>environmental, health, or safety regulations</strong> impose compliance costs on firms, shifting SRAS <strong>leftward</strong>. Deregulation removes these costs and can shift SRAS rightward, though the long-run productivity effects of good regulation are contested.' }] } },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Summary: SRAS Determinants and Direction of Shift',
        headers: ['Determinant', 'Increase/Rise', 'Decrease/Fall'],
        rows: [
          ['Wage rates', 'SRAS shifts LEFT', 'SRAS shifts RIGHT'],
          ['Oil / commodity prices', 'SRAS shifts LEFT', 'SRAS shifts RIGHT'],
          ['Labour productivity', 'SRAS shifts RIGHT', 'SRAS shifts LEFT'],
          ['Exchange rate (appreciation)', 'SRAS shifts RIGHT', 'SRAS shifts LEFT'],
          ['Indirect taxes', 'SRAS shifts LEFT', 'SRAS shifts RIGHT'],
          ['Government subsidies', 'SRAS shifts RIGHT', 'SRAS shifts LEFT'],
          ['Regulations / compliance costs', 'SRAS shifts LEFT (more reg)', 'SRAS shifts RIGHT (less reg)']
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Core Principle',
        text: 'Anything that <strong>increases production costs</strong> per unit shifts SRAS left. Anything that <strong>reduces production costs</strong> or <strong>increases productivity</strong> shifts SRAS right.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "SRAS is determined strictly by the costs of production: wages, raw material prices, exchange rates (affecting imported materials), and business taxes. If answering on SRAS, frame arguments around 'business costs'."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'SRAS shifts left when production costs rise (wages, oil, taxes, depreciation) and right when costs fall or productivity improves.',
    cues: [
      { id: 'cue-1', blockId: 'para-2', prompt: 'How does a rise in the national minimum wage affect SRAS?', answer: 'It increases unit labour costs, shifting SRAS leftward — firms supply less at each price level.' },
      { id: 'cue-2', blockId: 'para-3', prompt: 'Why does an oil price spike shift SRAS leftward?', answer: 'Higher oil prices raise energy and transport costs for virtually all firms, increasing the cost of production.' },
      { id: 'cue-3', blockId: 'para-5', prompt: 'How does a currency depreciation affect SRAS?', answer: 'It makes imported raw materials and components more expensive, raising production costs and shifting SRAS left.' },
      { id: 'cue-4', blockId: 'para-4', prompt: 'Why does higher labour productivity shift SRAS rightward?', answer: 'More output per worker lowers unit costs, meaning firms can supply more at each price level.' },
      { id: 'cue-5', blockId: 'tbl-1', prompt: 'Name two factors that shift SRAS to the right.', answer: 'Higher labour productivity, lower commodity prices, currency appreciation, government subsidies, or deregulation.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_9_2;
