export const note_economics_2_7_14 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand the three main accounts within the balance of payments, explain why the overall balance of payments must balance, and interpret current account deficits and surpluses.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Balance of Payments Components', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Balance of Payments',
        text: 'The <strong>Balance of Payments (BoP)</strong> is a record of all financial transactions between a country\'s residents and the rest of the world over a given period.<br/><br/>It consists of three main accounts:<br/>1. <strong>Current Account</strong><br/>2. <strong>Capital Account</strong><br/>3. <strong>Financial Account</strong><br/><br/>By definition, the overall BoP must balance (sum to zero).'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Balance of Payments — main sub-accounts',
        headers: ['Account', 'Sub-components', 'What it records', 'UK position (approx.)'],
        rows: [
          ['Current Account — Trade in Goods', 'Exports of goods (+), imports of goods (−)', 'Physical products: cars, food, machinery, oil', 'UK runs a persistent goods deficit (buys more than it sells)'],
          ['Current Account — Trade in Services', 'Exports of services (+), imports of services (−)', 'Financial, legal, tourism, education, insurance services', 'UK runs a services surplus (financial services, education)'],
          ['Current Account — Primary Income', 'Investment income received − paid; wages to cross-border workers', 'Dividends, interest, and wages between residents and non-residents', 'Can be positive or negative; volatile'],
          ['Current Account — Secondary Income', 'Current transfers in − out', 'Overseas aid, EU budget contributions, remittances received/sent', 'Usually small negative for UK'],
          ['Capital Account', 'Capital transfers (migrants\' assets, debt forgiveness)', 'Transfers of ownership of fixed assets; small in most countries', 'Small positive for UK'],
          ['Financial Account', 'FDI, portfolio investment, other investment, reserve changes', 'Buying/selling of financial assets and liabilities internationally', 'Surplus to finance current account deficit']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Balancing Principle', level: 3 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'The BoP must always balance by accounting identity: a <strong>current account deficit</strong> must be financed by a <strong>financial account surplus</strong> (e.g., selling assets, borrowing from abroad, or drawing down reserves). If the UK imports more than it exports, foreigners must be acquiring UK assets (e.g., buying UK property, government bonds, or companies) to supply the pounds needed.' }] } },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        latex: '\\text{Current Account} + \\text{Capital Account} + \\text{Financial Account} = 0',
        caption: 'Balance of Payments identity (ignoring statistical discrepancy)'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Significance of Current Account Deficit', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'A current account deficit means the country is consuming more than it produces — importing capital or borrowing from abroad to finance it' },
          { text: 'Can be sustainable if financed by inward FDI (productive investment) but concerning if financed by short-term borrowing' },
          { text: 'UK has run a persistent current account deficit for decades — up to −5% of GDP at times' },
          { text: 'A surplus country (e.g., Germany, China) is saving/investing more than consuming — export-led growth model' }
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Focus on the <strong>current account</strong> — this is the most economically significant account. Know its four sub-components. Note that the UK typically has a trade in goods deficit but a trade in services surplus. The financial account is the mirror image of the current account.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'The BoP has three accounts: current (goods, services, primary and secondary income), capital (small transfers), and financial (FDI, portfolio investment). A current account deficit = financial account surplus. The overall BoP always sums to zero.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "The Current Account primarily consists of trade in goods, trade in services, primary income (investment income), and secondary income (transfers). Do not confuse it with the capital or financial accounts."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'BoP: current account (trade goods + services + primary/secondary income) + capital account + financial account = 0.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'What are the three main accounts in the balance of payments?',
        answer: 'Current account, capital account, and financial account.'
      },
      {
        id: 'cue-2',
        blockId: 'tbl-1',
        prompt: 'What are the four sub-components of the current account?',
        answer: 'Trade in goods, trade in services, primary income (investment income and wages), and secondary income (transfers such as overseas aid and remittances).'
      },
      {
        id: 'cue-3',
        blockId: 'eq-1',
        prompt: 'Why must the overall balance of payments sum to zero?',
        answer: 'By accounting identity — a current account deficit must be financed by a financial account surplus (foreign purchase of domestic assets or borrowing).'
      },
      {
        id: 'cue-4',
        blockId: 'list-1',
        prompt: 'On which accounts does the UK typically run surpluses and deficits?',
        answer: 'UK runs a deficit on trade in goods but a surplus on trade in services. The overall current account is in deficit, financed by a financial account surplus.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_7_14;
