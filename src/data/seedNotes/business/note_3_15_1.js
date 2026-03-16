export const note_business_3_15_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand how to interpret the components and significance of a statement of financial position (balance sheet).' } },
    { id: 'h-1', type: 'heading', data: { text: 'The Statement of Financial Position', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'The statement of financial position, traditionally known as the balance sheet, provides a snapshot of a business\'s financial health at a specific point in time. It details the assets the business owns, the liabilities it owes, and the equity invested by shareholders.' } },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Key Equation', text: 'Assets = Liabilities + Equity. The fundamental accounting equation ensures that the statement of financial position always "balances".' } },
    { id: 'h-2', type: 'heading', data: { text: 'Key Components', level: 3 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '\**Non-current Assets:\** Items intended for long-term use (e.g., premises, machinery, vehicles, intangibles like goodwill).' },
      { text: '\**Current Assets:\** Short-term items that can quickly be converted to cash (e.g., inventory, trade receivables, cash at bank).' },
      { text: '\**Current Liabilities:\** Short-term debts payable within a year (e.g., trade payables, overdrafts).' },
      { text: '\**Non-current Liabilities:\** Long-term debts payable over more than a year (e.g., bank loans, mortgages).' },
      { text: '\**Total Equity:\** The capital invested by shareholders plus retained earnings.' }
    ] } },
    { id: 'tbl-1', type: 'comparisonTable', data: {
      caption: 'Assets vs Liabilities',
      headers: ['Type', 'Definition', 'Examples'],
      rows: [
        ['Current Assets', 'Owned items easily converted to cash within 1 year', 'Cash, Inventory, Receivables'],
        ['Non-current Assets', 'Owned items held for long-term use (>1 year)', 'Property, Equipment, Intangibles'],
        ['Current Liabilities', 'Owed debts payable within 1 year', 'Overdraft, Payables, Short-term loan'],
        ['Non-current Liab.', 'Owed debts payable in >1 year', 'Mortgage, Long-term bank loan']
      ]
    } },
    { id: 'call-2', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Net Current Assets (Working Capital) is Current Assets minus Current Liabilities. It shows the short-term financial liquidity of the firm.' } },
    { id: 'h-3', type: 'heading', data: { text: 'Interpreting the Statement', level: 3 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'Analyzing the statement of financial position helps stakeholders assess the liquidity and solvency of a company. A strong position shows high equity, manageable debt levels (gearing), and sufficient working capital to cover short-term liabilities.' } },
    { id: 'p-3', type: 'paragraph', data: { text: 'Conversely, relying too heavily on overdrafts (high current liabilities) compared to liquid assets suggests a weak liquidity position and potential cash flow difficulties.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'The statement of financial position is a snapshot showing Assets (what is owned), Liabilities (what is owed), and Equity. Interpretation involves assessing liquidity (working capital) and long-term financial stability.' } },
    { id: 'enr-callout-apple', type: 'callout', data: { style: 'worked', title: 'Real World: Apple Balance Sheet (2023, simplified)', text: 'Non-current assets £45bn (property, equipment, intangibles). Current assets £143bn (cash £29bn, receivables £29bn, other). Total assets £352bn. Current liabilities £145bn. Net assets £62bn. Observation: Apple holds more current liabilities than current assets — but its $29bn cash holding and exceptional earnings capacity make this entirely safe. Context always matters when interpreting a balance sheet.' } },
    { id: 'enr-callout-snapshot', type: 'callout', data: { style: 'warning', title: 'Balance Sheets are a Snapshot — Be Careful', text: 'A balance sheet shows the position at ONE point in time. A company can look financially healthy on 31 March but be insolvent by 1 April if a large debt falls due. Always check liquidity ratios AND read the notes to the accounts for contingent liabilities.' } },
    { id: 'enr-callout-tip2', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Asset & Liability Classification', text: 'Non-current assets = long-term (equipment, land, patents held >1 year). Current assets = short-term (cash, inventory, receivables due soon). Long-term liabilities = bonds/loans due in 5+ years. Current liabilities = creditors, overdraft due within 1 year. Net assets = Total assets − Total liabilities = Equity (shareholders\' funds).' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-1', prompt: 'What does the statement of financial position show?', answer: 'A snapshot of a business\'s assets, liabilities, and equity at a specific point in time.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Define non-current assets and provide an example.', answer: 'Assets intended for long-term use in the business, such as machinery, premises, or vehicles.' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'What are current liabilities?', answer: 'Short-term debts that the business must pay within one year, e.g., overdrafts or trade payables.' },
      { id: 'cue-4', blockId: 'call-2', prompt: 'How is working capital (net current assets) calculated?', answer: 'Current Assets minus Current Liabilities.' },
      { id: 'cue-5', blockId: 'call-1', prompt: 'What is the fundamental accounting equation?', answer: 'Assets = Liabilities + Equity' }
    ],
    summaryText: 'Statement of financial position details assets, liabilities, and equity at a point in time, indicating working capital and long-term stability.'
  }
};