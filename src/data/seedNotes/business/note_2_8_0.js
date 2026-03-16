export const note_business_2_8_0 = {
  pdfPath: '/notes/business/wbs12-8.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the structure of an income statement and distinguish between gross profit, operating profit and net profit, including how each is calculated from revenue and costs.' }
    },
    {
      id: 'h-income',
      type: 'heading',
      data: { text: 'The Income Statement', level: 2 }
    },
    {
      id: 'p-income',
      type: 'paragraph',
      data: { text: 'The <b>income statement</b> (also called the profit and loss account) summarises a business\'s revenues and costs over an accounting period — typically one financial year. It reveals three distinct levels of profit, each progressively deducting further categories of cost from revenue. Understanding these three layers is essential for analysing how efficiently a business earns profit at different stages of its operations.' }
    },
    {
      id: 'h-gross',
      type: 'heading',
      data: { text: 'Gross Profit', level: 2 }
    },
    {
      id: 'p-gross',
      type: 'paragraph',
      data: { text: '<b>Gross profit</b> is the profit generated from the core trading activity — selling goods or services — before any overhead expenses are subtracted. It is calculated by deducting the <b>cost of sales</b> (also known as cost of goods sold, COGS) from <b>revenue</b>. Cost of sales includes only <em>direct</em> costs directly attributable to producing what was sold: raw materials, direct labour wages and factory-level production overheads.' }
    },
    {
      id: 'eq-gross',
      type: 'equation',
      data: {
        html: '<b>Gross Profit</b> = Revenue &minus; Cost of Sales',
        caption: 'Revenue = total sales income. Cost of Sales = direct production costs only (materials, direct labour).'
      }
    },
    {
      id: 'h-op',
      type: 'heading',
      data: { text: 'Operating Profit', level: 2 }
    },
    {
      id: 'p-op',
      type: 'paragraph',
      data: { text: '<b>Operating profit</b> shows how much profit a business generates from its normal business operations once <b>operating expenses</b> (overheads) are also deducted. Operating expenses include distribution costs, administrative expenses, rent, management salaries and marketing spend. Because it excludes interest and tax — which depend on financing decisions rather than operations — operating profit allows fair comparison of operational efficiency between businesses regardless of how they are financed.' }
    },
    {
      id: 'eq-op',
      type: 'equation',
      data: {
        html: '<b>Operating Profit</b> = Gross Profit &minus; Operating Expenses',
        caption: 'Also called EBIT (Earnings Before Interest and Tax). Overheads include distribution, admin, rent and salaries.'
      }
    },
    {
      id: 'h-net',
      type: 'heading',
      data: { text: 'Net Profit', level: 2 }
    },
    {
      id: 'p-net',
      type: 'paragraph',
      data: { text: '<b>Net profit</b> is the "bottom line" — the profit remaining after <em>all</em> costs including finance costs (interest on loans) and corporation tax have been deducted. Sometimes called <em>profit for the year</em> or <em>profit after tax</em>, it represents the earnings ultimately belonging to the owners or shareholders. Net profit is used to calculate dividends paid out and retained profits reinvested into the business.' }
    },
    {
      id: 'eq-net',
      type: 'equation',
      data: {
        html: '<b>Net Profit</b> = Operating Profit &minus; Finance Costs (Interest) &minus; Tax',
        caption: 'Net profit = profit for the year = retained profit + dividends paid.'
      }
    },
    {
      id: 'h-structure',
      type: 'heading',
      data: { text: 'Income Statement Structure', level: 2 }
    },
    {
      id: 'tbl-is',
      type: 'comparisonTable',
      data: {
        caption: 'Simplified Income Statement (£000)',
        headers: ['Line Item', 'Amount (£000)', 'Notes'],
        rows: [
          ['Revenue (Turnover)', '5,000', 'Total sales income for the period'],
          ['Less: Cost of Sales', '(3,000)', 'Direct costs of producing goods sold'],
          ['= Gross Profit', '2,000', 'Gross profit margin = 40%'],
          ['Less: Operating Expenses', '(800)', 'Distribution, admin, rent, salaries, marketing'],
          ['= Operating Profit (EBIT)', '1,200', 'Operating profit margin = 24%'],
          ['Less: Finance Costs (Interest)', '(200)', 'Interest payable on loans/bonds'],
          ['Less: Taxation', '(250)', 'Corporation tax payable'],
          ['= Net Profit (Profit for the Year)', '750', 'Net profit margin = 15%']
        ]
      }
    },
    {
      id: 'list-key',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Revenue</b> — total income from sales before any deductions; also called turnover.' },
          { text: '<b>Cost of Sales</b> — direct costs only (materials, direct labour, production overheads).' },
          { text: '<b>Gross Profit</b> — indicates efficiency of core production and pricing; higher is better.' },
          { text: '<b>Operating Expenses</b> — indirect costs (overheads): rent, admin, distribution, marketing.' },
          { text: '<b>Operating Profit</b> — best measure for comparing operational efficiency across firms.' },
          { text: '<b>Finance Costs</b> — interest paid on bank loans, bonds and other debt instruments.' },
          { text: '<b>Net Profit</b> — true profit available for owners; split between dividends and retained profit.' }
        ]
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'Rexford Ltd reports: Revenue = £8,000,000; Cost of Sales = £4,800,000; Operating Expenses = £1,600,000; Interest = £200,000; Tax = £340,000.\n\nStep 1: Gross Profit = £8,000,000 &minus; £4,800,000 = <b>£3,200,000</b>\nStep 2: Operating Profit = £3,200,000 &minus; £1,600,000 = <b>£1,600,000</b>\nStep 3: Net Profit = £1,600,000 &minus; £200,000 &minus; £340,000 = <b>£1,060,000</b>'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always state which profit figure you are discussing — examiners penalise vague references to "profit". The key distinction: <b>gross profit</b> = trading efficiency; <b>operating profit</b> = operational efficiency (excludes financing); <b>net profit</b> = overall return to owners after all costs.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'The income statement presents three profit levels: <b>gross profit</b> (revenue minus cost of sales), <b>operating profit</b> (gross profit minus operating expenses), and <b>net profit</b> (operating profit minus interest and tax). Each level reveals a different layer of cost control and business performance. A business can have high gross profit but low net profit if overheads, interest or tax are disproportionately large.' }
    },
    {
      id: 'svg-profit-ratios',
      type: 'svg',
      data: {
        svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 260' font-family='Arial,sans-serif'><rect width='400' height='260' fill='#f8f9ff' rx='8'/><text x='200' y='18' text-anchor='middle' font-size='12' font-weight='bold' fill='#1e293b'>Key Profitability Ratios</text><rect x='20' y='30' width='170' height='70' rx='6' fill='#dcfce7'/><text x='105' y='54' text-anchor='middle' font-size='11' font-weight='bold' fill='#166534'>Gross Profit Margin</text><text x='105' y='70' text-anchor='middle' font-size='10' fill='#166534'>Gross Profit ÷ Revenue × 100</text><text x='105' y='86' text-anchor='middle' font-size='9' fill='#166534'>Shows: production efficiency</text><rect x='210' y='30' width='170' height='70' rx='6' fill='#e0f2fe'/><text x='295' y='50' text-anchor='middle' font-size='11' font-weight='bold' fill='#075985'>Net Profit Margin</text><text x='295' y='66' text-anchor='middle' font-size='10' fill='#075985'>Net Profit ÷ Revenue × 100</text><text x='295' y='82' text-anchor='middle' font-size='9' fill='#075985'>Shows: overall profitability</text><rect x='20' y='120' width='170' height='70' rx='6' fill='#fef9c3'/><text x='105' y='144' text-anchor='middle' font-size='11' font-weight='bold' fill='#92400e'>Return on Capital</text><text x='105' y='160' text-anchor='middle' font-size='10' fill='#92400e'>Net Profit ÷ Capital × 100</text><text x='105' y='176' text-anchor='middle' font-size='9' fill='#92400e'>Shows: investment efficiency</text><rect x='210' y='120' width='170' height='70' rx='6' fill='#fee2e2'/><text x='295' y='140' text-anchor='middle' font-size='11' font-weight='bold' fill='#991b1b'>Current Ratio</text><text x='295' y='156' text-anchor='middle' font-size='10' fill='#991b1b'>Current Assets ÷ Current Liabilities</text><text x='295' y='172' text-anchor='middle' font-size='9' fill='#991b1b'>Ideal: 1.5–2.0</text><text x='200' y='220' text-anchor='middle' font-size='9' fill='#64748b'>Compare ratios over time and against industry benchmarks</text></svg>`,
        caption: 'Key financial ratios for assessing business profitability and liquidity'
      }
    },
    {
      id: 'enr-t8a-0-h-retained',
      type: 'heading',
      data: { text: 'Retained Profit and Dividends', level: 2 }
    },
    {
      id: 'enr-t8a-0-p-retained',
      type: 'paragraph',
      data: { text: 'Once net profit is calculated, the business must decide how to <b>appropriate</b> it — i.e. how to distribute or use it. Net profit is typically split between <b>dividends</b> (payments made to shareholders as a return on their investment) and <b>retained profit</b> (earnings kept within the business for reinvestment). Retained profit is a key source of internal finance: it avoids interest costs, requires no external approval, and directly strengthens the balance sheet. The split between dividends and retentions depends on shareholder expectations and the company\'s strategic investment plans.' }
    },
    {
      id: 'enr-t8a-0-eq-retained',
      type: 'equation',
      data: {
        html: '<b>Net Profit</b> = Dividends Paid + Retained Profit',
        caption: 'Retained profit is reinvested into the business; dividends are distributed to shareholders.'
      }
    },
    {
      id: 'enr-t8a-0-callout-amazon',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Real Business — Amazon\'s Thin Net Margins',
        text: 'Amazon reported revenue exceeding $500 billion in 2023, yet its net profit margin was around 5–6%. Despite enormous turnover, heavy investment in fulfilment centres, AWS infrastructure and logistics kept costs high. This illustrates a key lesson: a business with massive revenue is not necessarily highly profitable. Absolute profit figures can mislead — always examine <b>profit margins</b> to assess genuine efficiency and returns to owners.'
      }
    },
    {
      id: 'enr-t8a-0-callout-student',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Relatable Example — Phone Case Business',
        text: 'You sell 40 custom phone cases at £30 each. Revenue = £1,200. Cost of cases (direct) = £480. <b>Gross profit = £720 (GPM = 60%).</b> You then pay packaging, postage and an Instagram ad = £320 overheads. <b>Operating profit = £400 (OPM = 33%).</b> After repaying £50 interest on a start-up loan: <b>Net profit = £350 (NPM ≈ 29%).</b> Each layer of the income statement reveals exactly where revenue goes — and which costs you have most control over.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Gross Profit = Revenue − Cost of Sales; Operating Profit = Gross Profit − Operating Expenses; Net Profit = Operating Profit − Interest − Tax.',
    cues: [
      { id: 'cue-1', blockId: 'eq-gross', prompt: 'What is the formula for gross profit?', answer: 'Gross Profit = Revenue − Cost of Sales. It shows profit from core trading before overhead expenses.' },
      { id: 'cue-2', blockId: 'eq-op', prompt: 'How is operating profit calculated and what does it exclude?', answer: 'Operating Profit = Gross Profit − Operating Expenses. It excludes interest and tax, so it reflects operational efficiency independently of financing decisions.' },
      { id: 'cue-3', blockId: 'eq-net', prompt: 'What is net profit and what additional deductions are made from operating profit?', answer: 'Net Profit = Operating Profit − Interest − Tax. It is the profit available to owners after all costs including financing and taxation.' },
      { id: 'cue-4', blockId: 'tbl-is', prompt: 'Why is operating profit preferred over net profit for inter-firm comparison?', answer: 'Operating profit excludes finance costs and tax, which differ between companies due to capital structure decisions rather than operational performance, making it a fairer comparison.' },
      { id: 'cue-5', blockId: 'list-key', prompt: 'Give two examples of operating expenses that reduce gross profit to operating profit.', answer: 'Distribution costs, administrative expenses, marketing/advertising, rent, management salaries — all are operating expenses (overheads).' },
      { id: 'cue-6', blockId: 'callout-we1', prompt: 'A firm has revenue of £8m, cost of sales of £4.8m and operating expenses of £1.6m. Calculate operating profit.', answer: 'Gross Profit = £8m − £4.8m = £3.2m; Operating Profit = £3.2m − £1.6m = £1.6m.' }
    ]
  },
  evidence: [],
  mentions: []
};
