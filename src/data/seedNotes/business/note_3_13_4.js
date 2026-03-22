export const note_business_3_13_4 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Calculate the Average Rate of Return (ARR) and use it to appraise the profitability of a business investment.' } },
    { id: 'h1', type: 'heading', data: { text: 'Average Rate of Return (ARR)', level: 2 } },
    { id: 'p1', type: 'paragraph', data: { text: 'The Average Rate of Return (ARR) looks at the total accounting return for a project. It measures the total profit or return from an investment as a percentage of the initial investment cost. A business will set a target ARR; if the project exceeds this, it may be approved.' } },
    { id: 'h2', type: 'heading', data: { text: 'ARR Calculation Steps', level: 3 } },
    { id: 'list1', type: 'list', data: { style: 'numbered', items: [
      { text: 'Calculate the total net cash flow over the life of the project.' },
      { text: 'Subtract the initial cost of the investment to find the total profit.' },
      { text: 'Divide the total profit by the life of the project (in years) to find the average annual profit.' },
      { text: 'Divide the average annual profit by the initial investment cost, and multiply by 100 to express as a percentage.' }
    ]} },
    { id: 'call1', type: 'callout', data: { style: 'worked', title: 'Worked Example: ARR', text: 'Investment: £200k. Project Life: 4 years.\nNet Cash Flow: Yr1: £80k, Yr2: £100k, Yr3: £120k, Yr4: £60k.\nTotal Return = £360k.\nTotal Profit = £360k - £200k = £160k.\nAverage Annual Profit = £160k / 4 = £40k.\nARR = (£40k / £200k) × 100 = 20%.' } },
    { id: 'h3', type: 'heading', data: { text: 'Advantages and Disadvantages of ARR', level: 3 } },
    { id: 'table', type: 'comparisonTable', data: {
      caption: 'Evaluation of Average Rate of Return',
      headers: ['Strengths', 'Weaknesses'],
      rows: [
        ['Focuses firmly on total profitability over the entire lifespan of the project.', 'Like Payback, it completely ignores the time value of money (inflation impacts).'],
        ['Includes all cash flows (unlike payback).', 'A high return far in the future carries heavy risk that ARR obscures.'],
        ['Provides an easy percentage that can be directly compared against interest rates.', 'Does not focus on the timing of cash flows, dangerous for poor liquidity firms.']
      ]
    }},
    { id: 'call2', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'When a question asks for ARR, the denominator is the initial investment, not the total cash inflows over the project.' } },
    { id: 'sum', type: 'summary', data: { text: 'The ARR calculates the total percentage return of a project, measuring total profitability. It allows for quick comparisons with target interest rates but ignores the time value of money.' } },
    { id: 'enr-callout-arr1', type: 'callout', data: { style: 'worked', title: 'Worked Example: ARR Calculation', text: 'Investment appraisal: £50,000 machine. Total returns over 5 years = £80,000.\nTotal net return = £80,000 - £50,000 = £30,000.\nAverage annual return = £30,000 ÷ 5 = £6,000.\nARR = (£6,000 ÷ £50,000) × 100 = 12%.\nThe firm\'s required return is 10%, so ARR > 10% — accept the investment.' } },
    { id: 'enr-callout-arr2', type: 'callout', data: { style: 'worked', title: 'Everyday Example: Online Reselling Business', text: 'A student invests £1,000 in a small online business (reselling trainers). Over 3 years earns total £1,600.\nNet return = £600. Average annual return = £200.\nARR = (£200 ÷ £1,000) × 100 = 20%.\nHigher than a bank\'s 5% interest rate — go ahead.' } },
    { id: 'enr-tip-arr', type: 'callout', data: { style: 'tip', title: 'Exam Tip: ARR Evaluation', text: 'ARR gives a %, making it easy to compare against alternatives (bank rate, other projects). But it uses average profit, not actual cash flows, and ignores timing — so large late profits look the same as early ones.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "When calculating ARR, be clear on numerator: Use average annual profit (total profit \u00f7 years) or annual operating profit, and denominator: Average capital (initial + residual) \u00f7 2. Consistent methodology throughout shows competence; examiners mark down inconsistency."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Calculating ARR incorrectly by using total profit (not average) or end-capital (not average). These errors significantly understate or overstate the return. Always show full workings so examiners see your method and can award part-marks if needed."
      }
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'ARR measures average annual profit as a percentage of initial investment. Focuses on total profit.',
    cues: [
      { id: 'c1', blockId: 'p1', prompt: 'What does the Average Rate of Return (ARR) represent?', answer: 'The average annual profit of an investment project, expressed as a percentage of the initial investment cost.' },
      { id: 'c2', blockId: 'list1', prompt: 'What is the first major step in calculating the ARR profit?', answer: 'Determining total profit: summing all the net cash flows and subtracting the initial cost.' },
      { id: 'c3', blockId: 'table', prompt: 'State a key benefit of using ARR over the payback period.', answer: 'ARR accounts for all cash flows over the entire life of the project to determine total profitability.' },
      { id: 'c4', blockId: 'table', prompt: 'State a key limitation of ARR.', answer: 'It ignores the time value of money, meaning later cash flows are worth less due to inflation.' }
    ]
  }
};