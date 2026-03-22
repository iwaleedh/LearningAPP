export const note_economics_4_20_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Describe the structure of the balance of payments, explaining the purpose and components of the current account, capital account, and financial account.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Balance of Payments Structure', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Balance of Payments', text: '<strong>Balance of Payments (BoP)</strong>: a record of all economic transactions between UK residents and the rest of the world over a given period. Divided into three main accounts; the sum of all accounts must equal zero (any deficit is financed by a surplus elsewhere).' } },
    { id: 'h-2', type: 'heading', data: { text: 'The Three Accounts', level: 2 } },
    { id: 'tbl-accounts', type: 'comparisonTable', data: { caption: 'Balance of Payments: Three Accounts', headers: ['Account', 'What It Records', 'Key Sub-Components'], rows: [['Current Account', 'Trade in goods and services; income flows; transfers', 'Trade in goods (visible); Trade in services (invisible); Primary income (wages, investment income); Secondary income (remittances, foreign aid)'], ['Capital Account', 'Capital transfers and acquisition/disposal of non-produced non-financial assets', 'Debt forgiveness; migrant transfers; purchase/sale of patents/land. Very small for UK'], ['Financial Account', 'Investment flows, reserve changes, and other financial transactions', 'FDI, portfolio investment, other investment (loans), Reserve assets (official gold/FX reserves)']] } },
    { id: 'h-3', type: 'heading', data: { text: 'The Current Account in Detail', level: 2 } },
    { id: 'list-ca', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Trade in goods</strong>: physical exports minus imports (UK historically in deficit — imports more goods than exports).' }, { text: '<strong>Trade in services</strong>: financial services, insurance, travel, education. UK in <em>surplus</em> — comparative advantage in financial and professional services.' }, { text: '<strong>Primary income</strong>: wages paid to international workers + investment income (dividends, interest, profit from abroad). Large for UK due to overseas investments.' }, { text: '<strong>Secondary income</strong>: current transfers — UK net contributor to EU before Brexit, sends development aid abroad.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Double-Entry Principle', text: 'Every transaction is recorded twice — a credit (+) and a debit (−). E.g. a UK export of goods creates a credit in the current account and a corresponding debit in the financial account (foreign buyer pays, UK receives foreign currency/financial asset). In theory BoP sums to zero; in practice a balancing item corrects measurement error.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'BoP records all UK-world transactions; must sum to zero. Current account: goods (UK deficit), services (UK surplus), primary income, secondary income. Capital account: small — capital transfers. Financial account: FDI, portfolio investment, reserves. Deficit on one account financed by surplus on another.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "The BoP must balance (Current + Capital + Financial accounts = 0). If reporting a 'deficit,' specify which account. Examiners penalise vague statements like 'the UK has a BoP problem'\u2014you must identify current account vs capital issues."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'BoP = current account + capital account + financial account = 0. Current: goods trade (UK deficit), services (UK surplus), primary income, secondary income. Financial: FDI, portfolio investment, reserves.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-accounts', prompt: 'Describe the four sub-components of the current account.', answer: '(1) Trade in goods (visible): physical exports minus imports — UK chronic deficit as manufacturing declined. (2) Trade in services (invisible): UK surplus — comparative advantage in financial services, legal, insurance, education. (3) Primary income: wages of international workers + investment income (dividends, profits from abroad). (4) Secondary income: transfers — foreign aid, remittances. Overall UK current account typically in deficit.' },
    ]
  },
  evidence: [], mentions: []
};
