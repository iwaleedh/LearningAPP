export const note_olevel_business_5_5_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Business/Financial Information And Decisions/completing-and-interpreting-cash-flow-forecasts.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Construct a cash flow forecast table, calculate net cash flow and closing balance, interpret results including negative balances, and recommend appropriate solutions to cash flow problems.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Constructing a Cash Flow Forecast', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'A cash flow forecast is laid out as a table with <strong>months as columns</strong> and <strong>categories of inflows/outflows as rows</strong>. The final three rows — Total Inflows, Total Outflows, and Net Cash Flow — are always calculated rows. The Opening Balance and Closing Balance rows complete the picture. This structure is standardised and you must be able to complete it in an exam.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Key Formulas', level: 2 }
    },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        latex: '\\text{Net Cash Flow} = \\text{Total Inflows} - \\text{Total Outflows}',
        caption: 'Step 1: Calculate Net Cash Flow'
      }
    },
    {
      id: 'eq-2',
      type: 'equation',
      data: {
        latex: '\\text{Closing Balance} = \\text{Opening Balance} + \\text{Net Cash Flow}',
        caption: 'Step 2: Calculate Closing Balance'
      }
    },
    {
      id: 'eq-3',
      type: 'equation',
      data: {
        latex: '\\text{Opening Balance}_{\\text{month n}} = \\text{Closing Balance}_{\\text{month n-1}}',
        caption: 'Step 3: The closing balance of one month becomes the opening balance of the next'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'info',
        title: 'Order of Calculation',
        text: 'Always follow this sequence: (1) Sum all inflows to get Total Inflows. (2) Sum all outflows to get Total Outflows. (3) Subtract to get Net Cash Flow. (4) Add Net Cash Flow to Opening Balance to get Closing Balance. (5) Carry Closing Balance forward as next month\'s Opening Balance.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Worked Example', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'A new business, <strong>GreenLeaf Bakery</strong>, prepares the following cash flow forecast for its first three months of trading (January to March). The opening balance in January is $2,000 (the owner\'s initial capital injection).'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'GreenLeaf Bakery — Cash Flow Forecast (Jan–Mar)',
        headers: ['', 'January ($)', 'February ($)', 'March ($)'],
        rows: [
          ['INFLOWS', '', '', ''],
          ['Sales revenue', '3,000', '4,500', '6,000'],
          ['Owner capital injection', '2,000', '0', '0'],
          ['Total Inflows', '5,000', '4,500', '6,000'],
          ['OUTFLOWS', '', '', ''],
          ['Stock / ingredients', '2,500', '2,000', '2,500'],
          ['Wages', '1,500', '1,500', '1,500'],
          ['Rent', '800', '800', '800'],
          ['Utilities', '200', '200', '200'],
          ['Equipment purchase', '3,500', '0', '0'],
          ['Total Outflows', '8,500', '4,500', '5,000'],
          ['Net Cash Flow', '-3,500', '0', '+1,000'],
          ['Opening Balance', '2,000', '-1,500', '-1,500'],
          ['Closing Balance', '-1,500', '-1,500', '-500']
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Calculation Check',
        text: 'January: Net CF = 5,000 − 8,500 = −3,500. Closing = 2,000 + (−3,500) = −1,500. ✓\nFebruary: Net CF = 4,500 − 4,500 = 0. Closing = −1,500 + 0 = −1,500. ✓\nMarch: Net CF = 6,000 − 5,000 = +1,000. Closing = −1,500 + 1,000 = −500. ✓'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Interpreting the Results', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'Looking at the GreenLeaf Bakery forecast, we can draw the following conclusions:'
      }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>January is problematic:</strong> the large equipment purchase in the first month creates a severe negative net cash flow of −$3,500, resulting in a negative closing balance of −$1,500.' },
          { text: '<strong>February shows no improvement:</strong> despite no equipment cost, inflows exactly match outflows (net cash flow = $0), leaving the balance unchanged at −$1,500.' },
          { text: '<strong>March is improving:</strong> sales are growing and with a net cash flow of +$1,000, the closing balance improves to −$500.' },
          { text: '<strong>The trend is positive:</strong> revenue is increasing each month. If growth continues, the business may achieve a positive balance in April or May.' },
          { text: '<strong>Immediate action needed:</strong> the business needs to cover the negative closing balance in January — an overdraft of at least $1,500 is required.' }
        ]
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Interpreting Negative Closing Balances', level: 2 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: 'A <strong>negative closing balance</strong> means the business owes more than it has in its bank account — it is "overdrawn." This does not necessarily mean the business will fail, but it does mean action must be taken. The severity and duration of the negative balance determines how urgent the response needs to be.'
      }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Short-term negative balance:</strong> a one-month dip can usually be managed with a bank overdraft.' },
          { text: '<strong>Persistent negative balance:</strong> if the balance remains negative for several months, more significant action is needed (cutting costs, increasing sales, renegotiating payment terms).' },
          { text: '<strong>Worsening negative balance:</strong> if the balance is getting increasingly negative each month, the business model may be fundamentally unviable and requires major restructuring.' }
        ]
      }
    },
    {
      id: 'h-6',
      type: 'heading',
      data: { text: 'Solutions to Cash Flow Problems', level: 2 }
    },
    {
      id: 'para-5',
      type: 'paragraph',
      data: {
        text: 'When a cash flow forecast reveals a future cash shortfall, a business has two broad strategies: <strong>increase inflows</strong> or <strong>reduce outflows</strong>. Each solution has advantages and disadvantages that must be evaluated in context.'
      }
    },
    {
      id: 'h-7',
      type: 'heading',
      data: { text: 'Solutions to Increase Cash Inflows', level: 3 }
    },
    {
      id: 'list-3',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Arrange a bank overdraft:</strong> provides immediate access to funds; interest is charged only on the amount used. Best for short-term gaps.' },
          { text: '<strong>Apply for a bank loan:</strong> provides a lump sum for larger or longer shortfalls; requires repayment with interest over time.' },
          { text: '<strong>Offer discounts for early payment:</strong> incentivises customers to pay sooner, accelerating cash inflows (though it reduces revenue slightly).' },
          { text: '<strong>Reduce credit terms given to customers:</strong> change from 60-day to 30-day payment terms; speeds up receipts but may lose customers.' },
          { text: '<strong>Sell assets:</strong> raising cash by selling surplus equipment or property.' },
          { text: '<strong>Inject additional owner capital:</strong> the owner puts more personal savings into the business.' },
          { text: '<strong>Factor debts (invoice factoring):</strong> sell outstanding invoices to a factoring company at a discount to get immediate cash.' }
        ]
      }
    },
    {
      id: 'h-8',
      type: 'heading',
      data: { text: 'Solutions to Reduce Cash Outflows', level: 3 }
    },
    {
      id: 'list-4',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Negotiate extended credit from suppliers:</strong> request 60 or 90 days to pay instead of 30 days — delays cash outflows.' },
          { text: '<strong>Reduce stock levels:</strong> order less inventory to avoid cash being tied up in unsold stock ("just-in-time" purchasing).' },
          { text: '<strong>Cut or delay capital expenditure:</strong> postpone buying new equipment; lease instead of buy.' },
          { text: '<strong>Reduce staffing costs:</strong> reduce overtime, freeze recruitment, or use part-time staff.' },
          { text: '<strong>Renegotiate rent or lease terms:</strong> seek a rent reduction or payment holiday from landlord.' },
          { text: '<strong>Delay non-essential expenditure:</strong> postpone marketing campaigns, refurbishment, or training.' }
        ]
      }
    },
    {
      id: 'tbl-2',
      type: 'comparisonTable',
      data: {
        caption: 'Evaluating Cash Flow Solutions',
        headers: ['Solution', 'Benefit', 'Drawback'],
        rows: [
          ['Bank overdraft', 'Quick and flexible', 'High interest rate; bank can demand repayment'],
          ['Early payment discount', 'Speeds up customer payments', 'Reduces revenue per sale'],
          ['Extend supplier credit', 'Delays outflows without interest', 'May damage supplier relationship'],
          ['Reduce stock', 'Frees up tied cash', 'Risk of stockouts and lost sales'],
          ['Sell assets', 'One-off cash boost', 'Loss of the asset; may hurt operations'],
          ['Invoice factoring', 'Immediate cash from debtors', 'Factor charges a fee; lose full invoice value']
        ]
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Exam Tip: Recommend and Justify',
        text: 'In evaluation questions, do not just list solutions. Recommend the most appropriate one for the specific business context given and justify your choice. For example: "GreenLeaf Bakery should arrange a bank overdraft because the negative balance is short-term and likely to resolve within two months as sales grow — a long-term loan would be unnecessarily expensive."'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'A cash flow forecast is constructed by listing monthly inflows and outflows, calculating Net Cash Flow (inflows − outflows), and computing the Closing Balance (opening balance + net cash flow). The closing balance carries forward as the next opening balance. Negative balances signal cash shortfalls requiring action — either increasing inflows (overdraft, discounts, factoring) or reducing outflows (supplier credit, cutting costs, delaying capital spending). Evaluation requires matching the solution to the business\'s specific situation.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Build forecasts step by step: total inflows, total outflows, net cash flow, then closing balance. Negative balances need solutions targeting inflows or outflows.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-1',
        prompt: 'What is the formula for net cash flow in a cash flow forecast?',
        answer: 'Net Cash Flow = Total Inflows − Total Outflows'
      },
      {
        id: 'cue-2',
        blockId: 'eq-2',
        prompt: 'What is the formula for closing balance?',
        answer: 'Closing Balance = Opening Balance + Net Cash Flow'
      },
      {
        id: 'cue-3',
        blockId: 'eq-3',
        prompt: 'How does the opening balance of one month relate to the previous month?',
        answer: 'The opening balance of month n equals the closing balance of month n−1. The chain links all months together.'
      },
      {
        id: 'cue-4',
        blockId: 'para-4',
        prompt: 'What does a negative closing balance mean for a business?',
        answer: 'A negative closing balance means the business\'s bank account is overdrawn — it owes more than it has. Action must be taken to secure finance or cut costs to avoid being unable to pay its obligations.'
      },
      {
        id: 'cue-5',
        blockId: 'list-3',
        prompt: 'Give two ways a business can increase cash inflows to resolve a cash flow problem.',
        answer: 'Any two of: arrange an overdraft, apply for a bank loan, offer discounts for early payment, reduce customer credit terms, sell surplus assets, inject additional owner capital, or use invoice factoring.'
      },
      {
        id: 'cue-6',
        blockId: 'list-4',
        prompt: 'Give two ways a business can reduce cash outflows to improve cash flow.',
        answer: 'Any two of: negotiate extended credit from suppliers, reduce stock levels, delay capital expenditure, reduce staffing costs, renegotiate rent terms, or delay non-essential spending.'
      }
    ]
  },
  evidence: [],
  mentions: []
};
