export const note_business_2_7_7 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand the purpose and construction of cash-flow forecasting.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Cash-Flow Forecasting', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: '**Cash flow** is the movement of money in and out of a business over a period of time. A **cash-flow forecast** estimates these future inflows and outflows to predict a firm\'s bank balance at the end of each month.' } },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Cash is not Profit', text: 'Profit is recorded when a sale is agreed. Cash inflow is only recorded when the customer actually pays. A business can be profitable but still fail because it runs out of cash to pay its debts (insolvency).' } },
    { id: 'h-2', type: 'heading', data: { text: 'Components of a Cash-Flow Forecast', level: 3 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '**Cash Inflows:** Examples include cash sales, debtors paying, bank loans received, and sale of assets.' },
      { text: '**Cash Outflows:** Examples include paying suppliers, wages, utility bills, rent, and buying equipment.' },
      { text: '**Net Cash Flow:** The difference between total inflows and total outflows for the month (Inflows - Outflows).' },
      { text: '**Opening Balance:** How much money the business has in the bank at the start of the month.' },
      { text: '**Closing Balance:** Look at the Opening Balance and add the Net Cash Flow to calculate the amount left at the end of the month.' }
    ]}},
    { id: 'eq-1', type: 'equation', data: { html: 'Closing Balance = Opening Balance + Net Cash Flow', caption: 'Closing balance calculation' } },
    { id: 'call-2', type: 'callout', data: { style: 'worked', title: 'Example calculation', text: 'Opening balance for May: £500<br>Total Inflows for May: £2,000<br>Total Outflows for May: £1,800<br>Net Cash Flow = £2,000 - £1,800 = +£200<br>Closing Balance for May = £500 + £200 = £700' } },
    { id: 'h-3', type: 'heading', data: { text: 'Uses of a Cash-Flow Forecast', level: 3 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'Creating a forecast allows a business to anticipate cash shortages beforehand. If a negative closing balance is predicted, they can arrange an overdraft with the bank in advance or delay paying some suppliers.' } },
    { "id": "enr-t7b-h-cfprob", "type": "heading", "data": { "text": "Causes and Solutions of Cash-Flow Problems", "level": 3 } },
    { "id": "enr-t7b-list-cfcauses", "type": "list", "data": { "style": "bullet", "items": [
      { "text": "<b>Over-trading:</b> Expanding too rapidly stretches cash reserves — orders are taken but there is not enough cash to pay suppliers or staff to fulfil them." },
      { "text": "<b>Long credit periods to customers:</b> Allowing debtors 60–90 days to pay means revenue is earned on paper months before cash actually arrives." },
      { "text": "<b>Seasonal demand:</b> Ice cream vans and ski resorts earn heavily for a few months but face fixed outflows (rent, insurance) all year round." },
      { "text": "<b>Unexpected costs:</b> Machinery breakdowns, emergency repairs, or sudden tax demands can rapidly drain cash reserves." }
    ]}},
    { "id": "enr-t7b-list-cfsol", "type": "list", "data": { "style": "bullet", "items": [
      { "text": "<b>Bank overdraft:</b> Pre-arranged short-term borrowing that allows the balance to go temporarily negative — fast to access but charges interest." },
      { "text": "<b>Invoice factoring:</b> Selling unpaid customer invoices to a specialist 'factor' at a small discount in exchange for immediate cash." },
      { "text": "<b>Sale and leaseback:</b> Selling a physical asset (e.g. store premises) and simultaneously leasing it back from the purchaser, unlocking a large cash sum." },
      { "text": "<b>Delay supplier payments:</b> Negotiating extended credit terms with suppliers keeps cash in the business longer without borrowing." }
    ]}},
    { "id": "enr-t7b-call-brand", "type": "callout", "data": { "style": "warning", "title": "Real World: HMV and Cash-Flow Collapse", "text": "HMV entered administration in January 2013 despite still recording retail sales. The business was generating revenue, but cash was not arriving fast enough to simultaneously pay suppliers, landlords, and staff wages. This is a textbook example of profitable-but-insolvent trading — a healthy income statement did not prevent cash-flow failure." } },
    { "id": "enr-t7b-call-student", "type": "callout", "data": { "style": "tip", "title": "Relatable: Allowance Timing", "text": "Imagine your £200 monthly allowance arrives on the 30th, but your phone bill is due on the 5th. In total across the month you have enough money, but the timing mismatch means you cannot pay at the critical moment. That is a cash-flow problem — not because you are broke overall, but because the money is not there when you need it." } },
    { id: 'sum-1', type: 'summary', data: { text: 'A cash-flow forecast maps expected daily/monthly money movements to prevent insolvency and arrange finance for projected shortfalls.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Cash-flow forecasting purpose: predict cash inflows (sales collections, loans, asset sales) vs outflows (supplies, wages, tax, loan repayment, fixed costs). Construction involves monthly or quarterly projections, beginning cash + inflows \u2212 outflows = ending cash balance."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Confusing profit with cash flow. A profitable business can have negative cash flow if customers don't pay on time (credit sales) or if fixed assets consume cash. Conversely, negative profit can coexist with positive cash flow (e.g., sale of assets). Always distinguish the two."
      }
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Net cash flow = inflows - outflows. Closing balance = opening balance + net cash flow.',
    cues: [
      { id: 'c-1', blockId: 'call-1', prompt: 'What is the crucial difference between profit and cash flow?', answer: 'Profit considers revenue vs costs, but cash flow tracks the actual timing of money moving into and out of the bank.' },
      { id: 'c-2', blockId: 'eq-1', prompt: 'How do you calculate the closing balance?', answer: 'Opening Balance + Net Cash Flow.' },
      { id: 'c-3', blockId: 'list-1', prompt: 'How is Net Cash Flow calculated?', answer: 'Total Cash Inflows minus Total Cash Outflows.' },
      { id: 'c-4', blockId: 'p-2', prompt: 'Why is it useful to forecast a negative cash flow months in advance?', answer: 'So the business can take pre-emptive action, such as arranging an overdraft or delaying equipment purchases.' }
    ]
  },
  evidence: []
};