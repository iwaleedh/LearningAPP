export const note_business_3_15_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Calculate and interpret profitability and liquidity ratios to assess business competitiveness.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Profitability Ratios', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'Profitability ratios measure a company\'s absolute and relative success at generating profit from its operations and revenue. They are critical for investors and managers assessing efficiency.' } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '\**Gross Profit Margin (%):\** (Gross Profit ÷ Revenue) × 100. Measures the percentage of sales revenue left after deducting direct costs of production.' },
      { text: '\**Operating Profit Margin (%):\** (Operating Profit ÷ Revenue) × 100. Indicates how well a business is managing its indirect costs (overheads).' },
      { text: '\**Profit for the Year Margin (%):\** (Profit for the Year ÷ Revenue) × 100. Shows the final percentage of revenue that is retained as net profit.' }
    ] } },
    { id: 'call-1', type: 'callout', data: { style: 'worked', title: 'Calculating Profitability', text: 'Revenue = £800k, Gross Profit = £400k, Operating Profit = £160k. \nGross Profit Margin = (400/800)*100 = 50%.\nOperating Profit Margin = (160/800)*100 = 20%.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Liquidity Ratios', level: 2 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'Liquidity ratios assess a business\'s ability to meet its short-term debt obligations using its short-term assets. A lack of liquidity can lead to insolvency and business failure.' } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [
      { text: '\**Current Ratio:\** Current Assets ÷ Current Liabilities. Evaluates general short-term solvency. A ratio between 1.5:1 and 2:1 is generally considered healthy.' },
      { text: '\**Acid Test (Quick) Ratio:\** (Current Assets - Inventory) ÷ Current Liabilities. A more severe test of liquidity that excludes stock, as inventory can be difficult to sell quickly. A ratio of around 1:1 is desirable.' }
    ] } },
    { id: 'tbl-1', type: 'comparisonTable', data: {
      caption: 'Interpreting Liquidity Ratios',
      headers: ['Ratio Result', 'Indication', 'Potential Action'],
      rows: [
        ['Current Ratio < 1:1', 'Poor liquidity, struggle to pay debts', 'Delay payments, sell assets, obtain loan'],
        ['Current Ratio > 2:1', 'Too much cash tied up in unproductive assets', 'Invest cash, distribute dividends'],
        ['Acid Test < 1:1', 'Severe short-term cash flow risk, reliance on stock', 'Negotiate overdraft, improve trade receivable collection']
      ]
    } },
    { id: 'call-2', type: 'callout', data: { style: 'warning', title: 'Watch Out', text: 'A high current ratio isn\'t always good. It may mean the firm is holding too much idle cash or obsolete stock rather than investing it for growth.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Profitability ratios (gross, operating, and net margins) highlight cost control and efficiency. Liquidity ratios (current and acid test) reveal the short-term financial stability and debt-paying ability of the firm.' } },
    {
      id: 'enr-svg-ratios',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 420"><rect width="500" height="420" fill="#0f172a"/><circle cx="250" cy="200" r="50" fill="#4f46e5" stroke="#3730a3" stroke-width="2"/><text x="250" y="195" text-anchor="middle" font-size="12" fill="#1e293b" font-family="sans-serif" font-weight="bold">Key</text><text x="250" y="212" text-anchor="middle" font-size="12" fill="#1e293b" font-family="sans-serif" font-weight="bold">Ratios</text><circle cx="250" cy="50" r="45" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/><text x="250" y="43" text-anchor="middle" font-size="9" fill="#1d4ed8" font-family="sans-serif">GP Margin</text><text x="250" y="56" text-anchor="middle" font-size="9" fill="#1d4ed8" font-family="sans-serif">GP/Revenue×100</text><circle cx="430" cy="130" r="45" fill="#0a2e1a" stroke="#10b981" stroke-width="2"/><text x="430" y="123" text-anchor="middle" font-size="9" fill="#065f46" font-family="sans-serif">NP Margin</text><text x="430" y="136" text-anchor="middle" font-size="9" fill="#065f46" font-family="sans-serif">NP/Revenue×100</text><circle cx="430" cy="275" r="45" fill="#78350f" stroke="#f59e0b" stroke-width="2"/><text x="430" y="268" text-anchor="middle" font-size="9" fill="#92400e" font-family="sans-serif">ROCE</text><text x="430" y="281" text-anchor="middle" font-size="9" fill="#92400e" font-family="sans-serif">Op.P/Cap.Emp×100</text><circle cx="250" cy="360" r="45" fill="#4a1040" stroke="#ec4899" stroke-width="2"/><text x="250" y="353" text-anchor="middle" font-size="9" fill="#9d174d" font-family="sans-serif">Current Ratio</text><text x="250" y="366" text-anchor="middle" font-size="9" fill="#9d174d" font-family="sans-serif">CA/CL</text><circle cx="65" cy="275" r="45" fill="#2d1b69" stroke="#8b5cf6" stroke-width="2"/><text x="65" y="268" text-anchor="middle" font-size="9" fill="#5b21b6" font-family="sans-serif">Acid Test</text><text x="65" y="281" text-anchor="middle" font-size="9" fill="#5b21b6" font-family="sans-serif">(CA-Inv)/CL</text><line x1="250" y1="150" x2="250" y2="95" stroke="#6b7280" stroke-width="1.5"/><line x1="295" y1="175" x2="388" y2="143" stroke="#6b7280" stroke-width="1.5"/><line x1="295" y1="225" x2="388" y2="258" stroke="#6b7280" stroke-width="1.5"/><line x1="250" y1="250" x2="250" y2="315" stroke="#6b7280" stroke-width="1.5"/><line x1="205" y1="225" x2="110" y2="258" stroke="#6b7280" stroke-width="1.5"/></svg>`,
        caption: 'Five key ratios — profitability (top 3) and liquidity (bottom 2)'
      }
    },
    {
      id: 'enr-callout-context',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Tesco vs LVMH — ratio comparison in context',
        text: 'Tesco GP margin ≈8.7%, Net Profit margin ≈2.1% — high volume, low margin. LVMH GP margin ≈66%, Net Profit margin ≈21% — premium luxury pricing. Neither is "better" — supermarkets and luxury brands have structurally different margins. Context is everything when interpreting ratios.'
      }
    },
    {
      id: 'enr-callout-tip-ratios',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip: ratio comparison framework',
        text: 'Always compare ratios to (1) previous year (trend), (2) industry average, (3) direct competitor. A 5% net profit margin means nothing in isolation. State the comparison → draw a conclusion → evaluate significance. This structure earns AO2+AO3 marks.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'What is the formula for Gross Profit Margin?', answer: '(Gross Profit ÷ Revenue) × 100' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'What does the Operating Profit Margin measure?', answer: 'It measures the proportion of revenue left after deducting both direct costs and overheads; it indicates efficiency in managing indirect costs.' },
      { id: 'cue-3', blockId: 'list-2', prompt: 'What is the formula for the Current Ratio?', answer: 'Current Assets ÷ Current Liabilities' },
      { id: 'cue-4', blockId: 'list-2', prompt: 'How does the Acid Test Ratio differ from the Current Ratio?', answer: 'The Acid Test Ratio excludes inventory from current assets, providing a stricter measure of immediate liquidity.' },
      { id: 'cue-5', blockId: 'tbl-1', prompt: 'What does a Current Ratio of less than 1:1 indicate?', answer: 'Poor liquidity; the business has more short-term debts than short-term assets and may struggle to pay creditors.' }
    ],
    summaryText: 'Profitability ratios measure financial efficiency via margins, while liquidity ratios assess short-term solvency using the current and acid test ratios.'
  }
};