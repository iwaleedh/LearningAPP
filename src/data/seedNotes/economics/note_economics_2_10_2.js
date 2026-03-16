export const note_economics_2_10_2 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Define injections and withdrawals in the circular flow of income, identify each component, and explain how they determine changes in national income.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Injections and Withdrawals', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'The basic circular flow of income between households and firms is modified in a real economy by <strong>injections</strong> — spending that enters the flow from outside — and <strong>withdrawals (leakages)</strong> — income that leaves the flow without being spent on domestic output. The balance between injections and withdrawals determines whether national income rises, falls, or stays the same.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Injections (J = I + G + X)', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Investment (I):</strong> Firms\' spending on capital goods (machinery, buildings, equipment). Investment adds to the circular flow because it generates income for capital goods producers without being funded from current household consumption. It represents spending from the financial sector (savings intermediated through banks).' },
          { text: '<strong>Government spending (G):</strong> Public expenditure on goods and services (schools, hospitals, infrastructure, defence). This injects income into the circular flow independently of household spending decisions. Note: G refers to spending on goods/services, NOT transfer payments like benefits (which are not injections themselves, but redirect income within the flow).' },
          { text: '<strong>Exports (X):</strong> Spending by foreigners on domestically produced goods and services. Export income flows into the domestic circular flow, increasing national income.' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Withdrawals / Leakages (W = S + T + M)', level: 3 }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Saving (S):</strong> The portion of household income not spent on goods or services. Saving represents a leakage from the product market. Savings flow into the financial sector and may return as investment, but not automatically and not necessarily of equal magnitude.' },
          { text: '<strong>Taxation (T):</strong> Income and spending taxes (income tax, VAT, National Insurance) reduce households\' disposable income and firms\' revenues, taking money out of the circular flow to the government. Tax revenues fund government spending (G), but T and G need not be equal.' },
          { text: '<strong>Imports (M):</strong> Household and firm spending on foreign goods and services leaks out of the domestic circular flow — the money flows to foreign producers rather than domestic ones.' }
        ]
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Injections vs Withdrawals: Each Pair',
        headers: ['Injection', 'Corresponding Withdrawal', 'Flow to/from'],
        rows: [
          ['Investment (I)', 'Saving (S)', 'Financial sector / banks'],
          ['Government spending (G)', 'Taxation (T)', 'Government / public sector'],
          ['Exports (X)', 'Imports (M)', 'Rest of the world']
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Effect on National Income', level: 3 }
    },
    {
      id: 'list-3',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'If <strong>J > W</strong> (e.g. I + G + X > S + T + M): national income <strong>rises</strong> (expansionary)' },
          { text: 'If <strong>J = W</strong> (e.g. I + G + X = S + T + M): national income is in <strong>equilibrium</strong> (stable)' },
          { text: 'If <strong>J < W</strong> (e.g. I + G + X < S + T + M): national income <strong>falls</strong> (contractionary)' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Policy Connection',
        text: 'Fiscal policy operates through the J-W framework: increasing G raises J; cutting T reduces W. Both are expansionary. Increasing T raises W; cutting G reduces J. Both are contractionary. Multiplier effects amplify these initial changes in J or W.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Injections (I+G+X) add to the circular flow; withdrawals (S+T+M) remove from it. J>W means rising national income; J=W means equilibrium; J<W means falling income.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'What are the three injections into the circular flow?', answer: 'Investment (I), Government spending (G), and Exports (X).' },
      { id: 'cue-2', blockId: 'list-2', prompt: 'What are the three withdrawals from the circular flow?', answer: 'Saving (S), Taxation (T), and Imports (M).' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'Which injection corresponds to saving as a withdrawal?', answer: 'Investment (I) corresponds to Saving (S) — both flow through the financial sector.' },
      { id: 'cue-4', blockId: 'list-3', prompt: 'What happens to national income if injections exceed withdrawals?', answer: 'National income rises (expansionary effect).' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_10_2;
