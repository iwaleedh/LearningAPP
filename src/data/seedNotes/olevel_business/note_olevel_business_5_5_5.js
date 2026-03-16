export const note_olevel_business_5_5_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Business/Financial Information And Decisions/statement-of-profit-or-loss.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Describe the structure of a statement of profit or loss (income statement), identify and define each component, construct a simple income statement, interpret its results, and distinguish between gross and net profit margins.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is a Statement of Profit or Loss?', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'The <strong>statement of profit or loss</strong> (also called the <strong>income statement</strong> or, historically, the "profit and loss account") is a financial statement that shows a business\'s revenues, costs, and resulting profit or loss over a specific accounting period — typically one year. It tells stakeholders whether the business made money or lost money during the period.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point: Period Statement',
        text: 'Unlike the balance sheet (which is a snapshot at one point in time), the income statement covers a period of time — usually 12 months. It answers: "How did the business perform financially over this year?"'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Structure of the Income Statement', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'The income statement is built in three progressive stages, each revealing a deeper layer of profitability. The structure follows a top-down approach, starting with revenue and working down to net profit.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Structure of a Statement of Profit or Loss',
        headers: ['Line Item', 'Notes'],
        rows: [
          ['Revenue (Turnover)', 'Total income from selling goods or services (price × quantity)'],
          ['Less: Cost of Sales (COGS)', 'Direct costs of the goods/services sold — raw materials, direct labour'],
          ['= Gross Profit', 'Revenue − Cost of Sales'],
          ['Less: Expenses (Overheads)', 'Indirect costs: rent, wages, marketing, utilities, depreciation, interest'],
          ['= Net Profit (Operating Profit)', 'Gross Profit − Expenses']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Stage 1: Calculating Gross Profit', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'The first stage calculates <strong>gross profit</strong> by deducting the <strong>cost of sales</strong> from revenue. Cost of sales (also called cost of goods sold — COGS) represents the direct costs attributable to producing or purchasing the goods that were sold during the period.'
      }
    },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        latex: '\\text{Gross Profit} = \\text{Revenue} - \\text{Cost of Sales}',
        caption: 'Gross Profit formula'
      }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: 'For a retailer, cost of sales is the purchase price of goods resold. For a manufacturer, it includes raw materials and direct factory labour. Note that opening stock, purchases, and closing stock are used to calculate cost of sales accurately:'
      }
    },
    {
      id: 'eq-2',
      type: 'equation',
      data: {
        latex: '\\text{Cost of Sales} = \\text{Opening Stock} + \\text{Purchases} - \\text{Closing Stock}',
        caption: 'Cost of Sales detailed formula'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Stage 2: Calculating Net Profit', level: 3 }
    },
    {
      id: 'para-5',
      type: 'paragraph',
      data: {
        text: 'The second stage deducts all operating <strong>expenses</strong> (overheads) from gross profit to arrive at <strong>net profit</strong>. Expenses include all indirect costs that cannot be directly attributed to individual units produced.'
      }
    },
    {
      id: 'eq-3',
      type: 'equation',
      data: {
        latex: '\\text{Net Profit} = \\text{Gross Profit} - \\text{Expenses}',
        caption: 'Net Profit formula'
      }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Rent and rates:</strong> cost of occupying premises.' },
          { text: '<strong>Wages and salaries:</strong> indirect labour costs (office staff, managers).' },
          { text: '<strong>Marketing and advertising:</strong> promoting the business.' },
          { text: '<strong>Utilities:</strong> electricity, gas, water, internet.' },
          { text: '<strong>Depreciation:</strong> reduction in value of fixed assets over time.' },
          { text: '<strong>Interest on loans:</strong> finance costs on borrowed money.' },
          { text: '<strong>Insurance:</strong> premiums paid for business coverage.' }
        ]
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Worked Example: Income Statement', level: 2 }
    },
    {
      id: 'para-6',
      type: 'paragraph',
      data: {
        text: 'Below is a simple income statement for <strong>BlueSky Electronics Ltd</strong> for the year ended 31 December 2025.'
      }
    },
    {
      id: 'tbl-2',
      type: 'comparisonTable',
      data: {
        caption: 'BlueSky Electronics Ltd — Statement of Profit or Loss (Year ended 31 Dec 2025)',
        headers: ['Item', '$', '$'],
        rows: [
          ['Revenue', '', '250,000'],
          ['Less: Cost of Sales', '', ''],
          ['Opening Stock', '20,000', ''],
          ['Add: Purchases', '130,000', ''],
          ['Less: Closing Stock', '(15,000)', ''],
          ['Cost of Sales', '', '(135,000)'],
          ['GROSS PROFIT', '', '115,000'],
          ['Less: Expenses', '', ''],
          ['Rent', '24,000', ''],
          ['Wages', '35,000', ''],
          ['Utilities', '6,000', ''],
          ['Marketing', '8,000', ''],
          ['Depreciation', '5,000', ''],
          ['Interest on loan', '3,000', ''],
          ['Total Expenses', '', '(81,000)'],
          ['NET PROFIT', '', '34,000']
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Check the Calculations',
        text: 'Gross Profit: $250,000 − $135,000 = $115,000 ✓\nCost of Sales: $20,000 + $130,000 − $15,000 = $135,000 ✓\nTotal Expenses: $24k + $35k + $6k + $8k + $5k + $3k = $81,000 ✓\nNet Profit: $115,000 − $81,000 = $34,000 ✓'
      }
    },
    {
      id: 'h-6',
      type: 'heading',
      data: { text: 'Interpreting the Income Statement', level: 2 }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'BlueSky earned $250,000 in revenue but had $135,000 in direct costs, leaving $115,000 gross profit — a 46% gross margin.' },
          { text: 'After $81,000 in overheads, net profit is $34,000 — a 13.6% net margin.' },
          { text: 'The largest expense is wages ($35,000), suggesting labour is a significant overhead.' },
          { text: 'The difference between gross and net profit ($81,000 in expenses) shows the weight of overhead costs on the business.' }
        ]
      }
    },
    {
      id: 'h-7',
      type: 'heading',
      data: { text: 'Gross Profit Margin vs Net Profit Margin', level: 2 }
    },
    {
      id: 'para-7',
      type: 'paragraph',
      data: {
        text: 'Both margins express profit as a percentage of revenue, allowing comparison across periods or between businesses. They are profitability ratios (covered in detail in the Profitability note).'
      }
    },
    {
      id: 'eq-4',
      type: 'equation',
      data: {
        latex: '\\text{Gross Profit Margin} = \\frac{\\text{Gross Profit}}{\\text{Revenue}} \\times 100',
        caption: 'Gross Profit Margin (%)'
      }
    },
    {
      id: 'eq-5',
      type: 'equation',
      data: {
        latex: '\\text{Net Profit Margin} = \\frac{\\text{Net Profit}}{\\text{Revenue}} \\times 100',
        caption: 'Net Profit Margin (%)'
      }
    },
    {
      id: 'tbl-3',
      type: 'comparisonTable',
      data: {
        caption: 'Gross vs Net Profit Margin for BlueSky Electronics',
        headers: ['Ratio', 'Calculation', 'Result', 'Meaning'],
        rows: [
          ['Gross Profit Margin', '$115,000 / $250,000 × 100', '46%', '46 cents of every $1 of revenue becomes gross profit'],
          ['Net Profit Margin', '$34,000 / $250,000 × 100', '13.6%', '13.6 cents of every $1 of revenue becomes net profit']
        ]
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'info',
        title: 'How to Improve Net Profit',
        text: 'A business can improve its net profit by: (1) increasing revenue (raise prices or sell more units), (2) reducing cost of sales (find cheaper suppliers, reduce wastage), (3) reducing overheads (cut unnecessary expenses, negotiate lower rent), or (4) a combination of all three. Always consider the trade-offs of each strategy.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'The statement of profit or loss shows revenue, cost of sales, gross profit, expenses, and net profit for a period. Gross Profit = Revenue − Cost of Sales. Net Profit = Gross Profit − Expenses. Gross profit margin = (GP/Revenue) × 100; net profit margin = (NP/Revenue) × 100. These margins allow comparison of profitability efficiency across time periods and between businesses.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Income statement: Revenue − Cost of Sales = Gross Profit; Gross Profit − Expenses = Net Profit. Margins express these as percentages of revenue.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-1',
        prompt: 'What does a statement of profit or loss show, and over what time period?',
        answer: 'It shows a business\'s revenues, costs, and resulting profit or loss over a specific accounting period (typically one year). It tells stakeholders whether the business made or lost money during that period.'
      },
      {
        id: 'cue-2',
        blockId: 'eq-1',
        prompt: 'What is the formula for gross profit?',
        answer: 'Gross Profit = Revenue − Cost of Sales'
      },
      {
        id: 'cue-3',
        blockId: 'eq-2',
        prompt: 'How is cost of sales calculated when stock figures are available?',
        answer: 'Cost of Sales = Opening Stock + Purchases − Closing Stock'
      },
      {
        id: 'cue-4',
        blockId: 'eq-3',
        prompt: 'What is the formula for net profit?',
        answer: 'Net Profit = Gross Profit − Expenses (overheads). Examples of expenses: rent, wages, utilities, marketing, depreciation, interest.'
      },
      {
        id: 'cue-5',
        blockId: 'eq-4',
        prompt: 'What is the formula for gross profit margin?',
        answer: 'Gross Profit Margin = (Gross Profit / Revenue) × 100. It shows what percentage of each dollar of revenue becomes gross profit.'
      },
      {
        id: 'cue-6',
        blockId: 'eq-5',
        prompt: 'What is the formula for net profit margin?',
        answer: 'Net Profit Margin = (Net Profit / Revenue) × 100. It shows what percentage of each dollar of revenue remains as net profit after all costs.'
      }
    ]
  },
  evidence: [],
  mentions: []
};
