export const note_business_3_13_5 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Calculate and evaluate Net Present Value (NPV) by applying discount factors to future cash flows.' } },
    { id: 'h1', type: 'heading', data: { text: 'Net Present Value (NPV)', level: 2 } },
    { id: 'p1', type: 'paragraph', data: { text: 'Net Present Value (NPV) takes into account the **time value of money**. Money received in the future is worth less than money received today because of inflation and the opportunity cost of interest that could have been earned.' } },
    { id: 'h2', type: 'heading', data: { text: 'Using Discount Factors', level: 3 } },
    { id: 'p2', type: 'paragraph', data: { text: 'To calculate the NPV, future cash flows must be multiplied by a mathematical "discount factor", supplied in an exam table. This converts future revenues into present-day values.' } },
    { id: 'list1', type: 'list', data: { style: 'numbered', items: [
      { text: 'Multiply each year\'s net cash flow by the specific discount factor for that year.' },
      { text: 'This gives the Present Value (the discounted cash flow) for each year.' },
      { text: 'Add together all the Present Values together across the whole project.' },
      { text: 'Subtract the initial investment cost to find the overall Net Present Value.' }
    ]} },
    { id: 'call1', type: 'callout', data: { style: 'worked', title: 'Worked Example: Net Present Value', text: 'Investment: £500,000.\nYear 1 Cash Flow: £300,000 (DF: 0.91). PV = £273,000.\nYear 2 Cash Flow: £400,000 (DF: 0.83). PV = £332,000.\nTotal Present Values: £605,000.\nNPV = £605,000 - £500,000 = £105,000.' } },
    { id: 'h3', type: 'heading', data: { text: 'Evaluating NPV', level: 3 } },
    { id: 'call2', type: 'callout', data: { style: 'key', title: 'Key Idea', text: 'If the NPV is positive, the investment earns a return higher than the discount rate used, meaning it is profitable. If the NPV is negative, it should ideally be rejected.' } },
    { id: 'table', type: 'comparisonTable', data: {
      caption: 'NPV Advantages and Disadvantages',
      headers: ['Strengths', 'Weaknesses'],
      rows: [
        ['The only method that accounts for the time value of money (inflation & interest rates).', 'Calculation is complex, often misunderstood by employees or junior managers.'],
        ['Considered the most accurate and reliable method mathematically for long-term investments.', 'Reliant absolutely on knowing the correct discount factor and accurate cash flow forecasts.'],
        ['Takes all cash flows of the project into consideration.', 'Only comparable accurately if the multiple projects have identical discount factor requirements.']
      ]
    }},
    { id: 'sum', type: 'summary', data: { text: 'Net Present Value is the most sophisticated form of investment appraisal. By discounting future monetary returns to present-day values, it accounts for time and inflation, providing the most realistic picture of a project\'s worth.' } },
    { id: 'enr-svg-npv', type: 'svg', data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 200"><rect width="560" height="200" fill="#0f172a"/><line x1="30" y1="95" x2="530" y2="95" stroke="#ccc" stroke-width="2"/><circle cx="65" cy="95" r="9" fill="#ef4444"/><text x="65" y="99" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#1e293b">0</text><circle cx="165" cy="95" r="9" fill="#6366f1"/><text x="165" y="99" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#1e293b">1</text><circle cx="265" cy="95" r="9" fill="#6366f1"/><text x="265" y="99" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#1e293b">2</text><circle cx="365" cy="95" r="9" fill="#6366f1"/><text x="365" y="99" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#1e293b">3</text><circle cx="465" cy="95" r="9" fill="#6366f1"/><text x="465" y="99" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#1e293b">4</text><line x1="65" y1="104" x2="65" y2="147" stroke="#ef4444" stroke-width="2.5"/><polygon points="59,147 71,147 65,157" fill="#ef4444"/><text x="65" y="170" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ef4444">-£100,000</text><text x="65" y="184" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#ef4444">(Investment)</text><line x1="165" y1="86" x2="165" y2="26" stroke="#10b981" stroke-width="2.5"/><polygon points="159,26 171,26 165,16" fill="#10b981"/><text x="165" y="10" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#10b981">£30k</text><line x1="165" y1="104" x2="165" y2="115" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="3,2"/><text x="165" y="127" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#6366f1">PV=£27.3k</text><line x1="265" y1="86" x2="265" y2="26" stroke="#10b981" stroke-width="2.5"/><polygon points="259,26 271,26 265,16" fill="#10b981"/><text x="265" y="10" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#10b981">£35k</text><line x1="265" y1="104" x2="265" y2="115" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="3,2"/><text x="265" y="127" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#6366f1">PV=£28.9k</text><line x1="365" y1="86" x2="365" y2="26" stroke="#10b981" stroke-width="2.5"/><polygon points="359,26 371,26 365,16" fill="#10b981"/><text x="365" y="10" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#10b981">£40k</text><line x1="365" y1="104" x2="365" y2="115" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="3,2"/><text x="365" y="127" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#6366f1">PV=£30.0k</text><line x1="465" y1="86" x2="465" y2="26" stroke="#10b981" stroke-width="2.5"/><polygon points="459,26 471,26 465,16" fill="#10b981"/><text x="465" y="10" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#10b981">£45k</text><line x1="465" y1="104" x2="465" y2="115" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="3,2"/><text x="465" y="127" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#6366f1">PV=£30.7k</text><rect x="80" y="143" width="400" height="22" rx="3" fill="#0a2e1a" stroke="#10b981" stroke-width="1"/><text x="280" y="158" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#065f46">If sum of PVs &gt; £100k → Positive NPV → Accept</text></svg>', caption: 'NPV timeline — Year 0 investment flows out (red), Years 1–4 cash inflows (green) are discounted to today\'s value' } },
    { id: 'enr-callout-netflix', type: 'callout', data: { style: 'worked', title: 'Real-World Example: Netflix Original Content', text: 'Netflix invests £100m in original content (Stranger Things). Year 1 subscriber revenue £30m, Year 2 £45m, Year 3 £60m. Discount rate 10%.\nPV values: £27.3m, £37.2m, £45.1m.\nTotal PV = £109.6m. NPV = +£9.6m → positive → invest. (Simplified illustration.)' } },
    { id: 'enr-tip-npv', type: 'callout', data: { style: 'tip', title: 'Exam Tip: NPV vs ARR vs Payback', text: 'NPV is the most theoretically sound method — it accounts for the time value of money. But it requires a discount rate (hard to choose) and involves complex calculations. Compare to ARR (simpler, gives a %) and Payback (simplest, liquidity focus).' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "When using NPV, always explain the discount rate choice: Is it firm's cost of capital, target return, or risk-adjusted rate? The rate choice *directly drives* NPV size. A higher rate favors short-term projects; a lower rate favors long-term projects. Show rate logic for sophistication."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Accepting NPV blindly without sensitivity analysis. If NPV is +\u00a350k but break-even if discount rate rises 1%, the project is risky. Test NPV's robustness: What if cash flows fall 10%? What if project takes two years longer? Sensitivity analysis proves strategic caution."
      }
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'NPV calculates the present value of future cash flows using discount factors. Highly accurate but complex.',
    cues: [
      { id: 'c1', blockId: 'p1', prompt: 'Why is money received in the future worth less than money today?', answer: 'Due to inflation eroding purchasing power and the opportunity cost of lost interest.' },
      { id: 'c2', blockId: 'list1', prompt: 'How do you calculate the Present Value for a specific year?', answer: 'You multiply the net cash flow of that year by the corresponding discount factor.' },
      { id: 'c3', blockId: 'call2', prompt: 'What does a positive Net Present Value indicate?', answer: 'That the investment is profitable in real terms, exceeding the discount rate, and should likely go ahead.' },
      { id: 'c4', blockId: 'table', prompt: 'What is the main advantage of using NPV rather than ARR or Payback?', answer: 'NPV is the only method that accounts for the time value of money and inflation.' }
    ]
  }
};