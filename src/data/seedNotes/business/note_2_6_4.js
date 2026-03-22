export const note_business_2_6_4 = {
  pdfPath: '/notes/business/wbs12-6.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Evaluate which finance method is most appropriate for a given business situation by considering the purpose, size, cost, legal form, time horizon, and risk of the business.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Choosing the Right Finance Source', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'There is no single ‘correct’ source of finance. The most appropriate method depends on a range of factors including the <b>amount needed</b>, the <b>purpose</b>, the <b>legal form</b> of the business, the <b>time period</b> for which finance is required, and the business\'s <b>ability to service debt</b>.' }
    },
    {
      id: 'h-factors',
      type: 'heading',
      data: { text: 'Key Factors Affecting the Choice of Finance', level: 2 }
    },
    {
      id: 'h-purpose',
      type: 'heading',
      data: { text: '1. Purpose and Time Horizon', level: 3 }
    },
    {
      id: 'p-purpose',
      type: 'paragraph',
      data: { text: 'The <b>time horizon</b> of the financing need should match the term of the finance. <b>Short-term needs</b> (bridging a seasonal cash gap) call for short-term finance; <b>long-term needs</b> (buying machinery) require long-term finance. Mismatching is a common cause of financial difficulty.' }
    },
    {
      id: 'table-horizon',
      type: 'comparisonTable',
      data: {
        caption: 'Finance Sources by Time Horizon',
        headers: ['Time Horizon', 'Typical Needs', 'Suitable Sources'],
        rows: [
          ['Short-term (< 1 year)', 'Day-to-day cash flow, seasonal stock purchase', 'Overdraft, trade credit, reducing working capital'],
          ['Medium-term (1–5 years)', 'New equipment, vehicle fleet, IT systems', 'Bank loan, leasing, hire purchase, retained profit'],
          ['Long-term (> 5 years)', 'Property, factory, major expansion, R&D', 'Mortgage, debentures, share capital, venture capital']
        ]
      }
    },
    {
      id: 'h-size',
      type: 'heading',
      data: { text: '2. Size and Legal Form of the Business', level: 3 }
    },
    {
      id: 'p-size',
      type: 'paragraph',
      data: { text: 'The legal structure directly restricts available options. A <b>sole trader</b> cannot issue shares and may struggle to raise large sums; a <b>plc</b> can raise millions through a stock exchange listing.' }
    },
    {
      id: 'list-size',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Sole trader / Partnership:</b> owner\'s capital, bank loan (if creditworthy), overdraft, trade credit' },
          { text: '<b>Private Ltd (Ltd):</b> all of the above plus share capital (private placement), venture capital, debentures' },
          { text: '<b>Public Ltd (plc):</b> all of the above plus shares via stock exchange (IPO), large-scale debenture issues' }
        ]
      }
    },
    {
      id: 'h-cost',
      type: 'heading',
      data: { text: '3. Cost of Finance', level: 3 }
    },
    {
      id: 'p-cost',
      type: 'paragraph',
      data: { text: 'Every source of finance has a cost. For debt, the cost is the <b>interest rate</b>. For equity, the cost is the <b>expected return (dividend)</b> or loss of control. Businesses should compare the cost of different options — though the cheapest source is not always the most appropriate.' }
    },
    {
      id: 'list-cost',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Retained profit and owner\'s savings: zero direct financial cost (but opportunity cost applies)' },
          { text: 'Trade credit: zero interest if paid on time, but may involve giving up early-payment discounts' },
          { text: 'Bank loan: interest rate (fixed or variable) — typically lower than an overdraft' },
          { text: 'Overdraft: high interest, though charged only on the amount used' },
          { text: 'Venture capital: significant equity stake — can be very expensive in the long run if the business succeeds' }
        ]
      }
    },
    {
      id: 'h-risk',
      type: 'heading',
      data: { text: '4. Risk and Gearing', level: 3 }
    },
    {
      id: 'p-risk',
      type: 'paragraph',
      data: { text: '<b>Gearing</b> measures the proportion of a business\'s capital that is financed by debt. A <b>highly geared</b> business has a large proportion of debt and is considered riskier — interest must be paid regardless of profitability. Banks will hesitate to lend more to an already highly geared firm.' }
    },
    {
      id: 'list-risk',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'A start-up with no track record and poor credit history will find it hard to obtain a bank loan' },
          { text: 'Businesses with volatile revenues should avoid high levels of fixed debt obligations' },
          { text: 'Lenders require <b>collateral</b> (security) for large loans — small firms may lack sufficient assets' }
        ]
      }
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Choosing a Finance Source',
        text: 'Scenario: A new sole trader needs £5,000 to buy a second-hand van and £1,000 to cover initial cash flow. Analysis: £5,000 for the van is a medium-term, capital purchase — suitable for a small bank loan or owner\'s savings. £1,000 for cash flow is a short-term need — an overdraft is appropriate. An overdraft for the van would be too expensive and risky (can be recalled); a long-term loan for cash flow would be inefficient.'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'In an \'assess\' or \'evaluate\' question on finance, always: (1) identify the most suitable source, (2) explain WHY it fits this context (purpose, size, cost, time horizon), and (3) discuss an alternative and why it is less suitable. Avoid recommending share capital for a sole trader or an overdraft for buying a factory.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can match finance to time horizon: short-term → overdraft/trade credit; medium → bank loan/leasing; long-term → shares/debentures/VC', checked: false },
          { text: 'I can explain why legal form limits finance options (sole traders cannot issue shares)', checked: false },
          { text: 'I can explain the cost of equity finance (dividend expectations + loss of control)', checked: false },
          { text: 'I can define gearing and explain why high gearing makes further borrowing risky', checked: false },
          { text: 'I can apply context: recommend a specific source and justify it against the scenario given', checked: false }
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'The most suitable finance source depends on: <b>purpose and time horizon</b> (match finance term to the need — overdraft for short-term, bank loan for medium, shares/debentures for long-term), <b>legal form</b> (sole traders cannot issue shares), <b>cost</b> (interest vs equity dilution; retained profit has zero direct cost), and <b>risk/gearing</b> (highly geared firms struggle to borrow more). Always justify finance recommendations with reference to the specific business context.' }
    },
    {
      id: 'enr-t6a2-h-bp',
      type: 'heading',
      data: { text: 'The Business Plan — A Prerequisite for Finance', level: 2 }
    },
    {
      id: 'enr-t6a2-p-bp',
      type: 'paragraph',
      data: { text: 'A <b>business plan</b> is a formal written document describing the business, its goals, and the financial evidence supporting its viability. Most lenders — banks, venture capitalists, and business angels — will not commit funding without one. The plan demonstrates that the entrepreneur has researched the market, identified risks, and planned how the money will be used and generated. It reduces the lender\'s risk by replacing uncertainty with evidence, making an informed lending decision possible.' }
    },
    {
      id: 'enr-t6a2-list-bp-components',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Executive summary:</b> a concise 1–2 page overview of the entire plan — the first thing a lender reads; must be compelling enough to prompt further reading' },
          { text: '<b>Business description & USP:</b> what the business does and why it is different from competitors — the unique selling proposition that justifies demand' },
          { text: '<b>Market research:</b> primary and secondary evidence of demand — customer surveys, competitor analysis, market size data' },
          { text: '<b>Financial forecasts:</b> projected profit & loss account, month-by-month cash flow forecast (typically 12 months), and balance sheet projections — shows whether the business can repay the loan' },
          { text: '<b>Break-even analysis:</b> the output or sales level at which revenue covers total costs — demonstrates the business has a viable cost structure' },
          { text: '<b>Funding requirements:</b> states exactly how much is needed, what it will be spent on, and the proposed repayment schedule' }
        ]
      }
    },
    {
      id: 'enr-t6a2-call-dragons',
      type: 'callout',
      data: {
        style: 'worked',
        title: "Real World: Dragons' Den — No Financials, No Deal",
        text: "On BBC's <b>Dragons' Den</b>, entrepreneurs pitch to wealthy investors. One of the most common reasons for rejection — across virtually every series — is the absence of credible financial forecasts. Dragons like Deborah Meaden and Peter Jones routinely ask: 'What are your projected revenues for year one?' or 'What is your break-even point?' Entrepreneurs who cannot answer are seen as financially illiterate and dismissed as too risky. The lesson: without solid financials embedded in a business plan, no serious investor will back you — no matter how compelling the idea. The business plan is the bridge between a good idea and actual investment."
      }
    },
    {
      id: 'enr-t6a2-call-student-bp',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Student Example: Young Enterprise & BTEC Business Plans',
        text: 'If you have taken part in <b>Young Enterprise</b> — the UK\'s leading enterprise education charity — you will have written a real business plan, pitched to judges, and managed actual company finances. In <b>BTEC Business</b>, writing a mock business plan is a core assessed unit. In both cases, you research the market, forecast cash flow, and persuade others your idea deserves funding. Even for a hypothetical school canteen or phone-case business, the skills — USP identification, break-even calculation, cash flow forecasting — are identical to those used to raise real venture capital or secure a bank loan.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Build evaluation frameworks: purpose (working capital vs fixed assets), size (small sole traders can't issue shares), cost (interest vs dilution), and time horizon (long-term projects suit debentures; short-term needs suit overdrafts). Systematic analysis scores higher."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Recommending a single finance source without qualifying constraints. A start-up cannot use share capital\u2014banks won't lend, and debentures are too risky. Always check legal form, creditworthiness, and risk profile before prescribing finance."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Finance suitability depends on purpose, time horizon, business legal form, cost, and gearing. Match the term of finance to the nature of the need.',
    cues: [
      { id: 'cue-1', blockId: 'table-horizon', prompt: 'What finance sources are suitable for a short-term cash flow gap?', answer: 'Overdraft, trade credit, and reducing working capital — all short-term, flexible sources that avoid long-term debt commitments.' },
      { id: 'cue-2', blockId: 'p-size', prompt: 'Why can a sole trader not issue shares to raise finance?', answer: 'A sole trader is not an incorporated company, so legally cannot issue shares. Share capital is only available to Ltd and plc companies.' },
      { id: 'cue-3', blockId: 'p-cost', prompt: 'What is meant by the cost of equity finance?', answer: 'The expected return demanded by shareholders in the form of dividends, plus any loss of control. In the long run, equity can be more expensive than debt if the business is very profitable.' },
      { id: 'cue-4', blockId: 'p-risk', prompt: 'What is gearing and why does it affect the choice of finance?', answer: 'Gearing is the proportion of capital funded by debt. High gearing means high fixed interest payments regardless of profit — making further debt risky and potentially unaffordable.' },
      { id: 'cue-5', blockId: 'call-worked', prompt: 'Why should short-term finance not be used for long-term needs?', answer: 'Short-term finance (e.g. overdraft) can be recalled at any time and carries high interest rates. Using it for a long-term asset like machinery creates financial instability and repayment risk.' }
    ]
  },
  evidence: [],
  mentions: []
};
