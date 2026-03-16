export const note_economics_1_1_9 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify and explain the four functions of money, understand the essential characteristics money must possess, and explain why money is necessary for a specialised economy.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Why Money Exists', level: 2 },
      terms: []
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'In a <strong>barter economy</strong>, goods are exchanged directly for other goods. This requires a <strong>double coincidence of wants</strong> — each party must have exactly what the other wants simultaneously. This is extremely inefficient in a complex, specialised economy. <strong>Money</strong> emerged as a solution, acting as an intermediary that separates buying from selling and enables the full gains of specialisation to be achieved.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Four Functions of Money', level: 2 },
      terms: []
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'The Four Functions of Money',
        headers: ['Function', 'Definition', 'Example'],
        rows: [
          ['<strong>Medium of Exchange</strong>', 'Money is accepted in exchange for goods and services, eliminating the need for barter and the double coincidence of wants', 'Using pound sterling to buy groceries rather than bartering labour or goods'],
          ['<strong>Store of Value</strong>', 'Money retains purchasing power over time, allowing people to save and spend at different points in time', 'Saving £5,000 in a bank account for future use — unlike perishable goods, money does not decay (though inflation erodes its value)'],
          ['<strong>Unit of Account</strong>', 'Money provides a common measure for expressing the value of all goods and services, making comparison and exchange straightforward', 'Comparing the price of a car (£20,000) with a bicycle (£500) using a common monetary unit'],
          ['<strong>Standard of Deferred Payment</strong>', 'Money enables borrowing and lending by providing an agreed-upon unit in which future payments will be made', 'Taking out a mortgage — agreeing to repay £1,500/month in future using the same currency']
        ]
      },
      terms: []
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Characteristics Money Must Possess', level: 2 },
      terms: []
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Acceptability:</strong> Widely accepted by all parties in transactions — requires general confidence in its value.' },
          { text: '<strong>Durability:</strong> Must not deteriorate quickly — notes and coins must withstand repeated use.' },
          { text: '<strong>Portability:</strong> Easy to carry and transfer — notes, coins, and digital money score highly.' },
          { text: '<strong>Divisibility:</strong> Can be broken into smaller units to facilitate transactions of varying sizes (pence/cents).' },
          { text: '<strong>Scarcity:</strong> Must be in limited supply relative to goods — if money were freely available in unlimited quantities, it would lose value (hyperinflation).' },
          { text: '<strong>Homogeneity:</strong> Each unit must be identical and interchangeable — one £10 note equals another £10 note.' }
        ]
      },
      terms: []
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Inflation and the Functions of Money', level: 2 },
      terms: []
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'High <strong>inflation</strong> undermines several functions of money simultaneously. As a <strong>store of value</strong>, inflation erodes purchasing power — £100 today buys less next year. As a <strong>unit of account</strong>, rapidly changing prices make it difficult to compare values over time. As a <strong>standard of deferred payment</strong>, inflation benefits borrowers (who repay in devalued money) but harms lenders.' }] } },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Hyperinflation in Zimbabwe',
        text: 'During Zimbabwe\'s hyperinflation (2007-2009), the inflation rate reached 89.7 sextillion percent per month. Money failed as:<br/>— <strong>Store of value:</strong> Workers spent wages immediately before prices rose further — savings became worthless<br/>— <strong>Unit of account:</strong> Prices changed hourly, making comparison meaningless<br/>— <strong>Medium of exchange:</strong> Foreign currencies (USD) replaced the Zimbabwean dollar<br/><br/>This illustrates why price stability is a key macroeconomic objective.'
      },
      terms: []
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If asked to evaluate money as a store of value, mention <strong>inflation</strong> as the key limitation. A strong answer links this to monetary policy — central banks target low inflation (e.g. 2% in the UK) precisely to preserve money\'s ability to function as a store of value.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Money serves four functions: medium of exchange, store of value, unit of account, and standard of deferred payment. It must be acceptable, durable, portable, divisible, scarce, and homogeneous. High inflation undermines these functions.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'State and briefly define the four functions of money.', answer: '1. Medium of exchange (accepted in transactions); 2. Store of value (retains purchasing power over time); 3. Unit of account (common measure of value); 4. Standard of deferred payment (enables borrowing/lending).' },
      { id: 'cue-2', blockId: 'para-1', prompt: 'What is a double coincidence of wants and why does it make barter inefficient?', answer: 'Both parties must simultaneously want what the other offers. In a complex, specialised economy this is nearly impossible, making barter impractical — money solves this.' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'Give three characteristics that money must possess to function effectively.', answer: 'Acceptability (widely trusted), durability (resists wear), divisibility (can be broken into small units), portability (easy to carry), scarcity (limited supply), homogeneity (units are identical).' },
      { id: 'cue-4', blockId: 'call-1', prompt: 'How does hyperinflation undermine the functions of money?', answer: 'It destroys money\'s store of value (savings become worthless), disrupts unit of account (prices change too fast to compare), and can cause money to be abandoned as a medium of exchange in favour of foreign currencies.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_1_9;
