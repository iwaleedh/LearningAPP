const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'data', 'seedNotes', 'business');
const files = {
  "note_3_13_0.js": `export const note_business_3_13_0 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand the concept of time-series forecasting, including four-period moving averages, variations, and seasonal adjustments.' } },
    { id: 'h1', type: 'heading', data: { text: 'Time-Series Forecasting', level: 2 } },
    { id: 'p1', type: 'paragraph', data: { text: 'Time-series forecasting is a quantitative method used by businesses to predict future sales, revenue, or other metrics based on historical data. By analyzing data collected at regular intervals over time, a business can identify underlying trends.' } },
    { id: 'h2', type: 'heading', data: { text: 'Four-Period Moving Averages', level: 3 } },
    { id: 'p2', type: 'paragraph', data: { text: 'A moving average smooths out short-term fluctuations in time-series data to highlight longer-term trends or cycles. For quarterly data, a four-period moving average is commonly used.' } },
    { id: 'list1', type: 'list', data: { style: 'bullet', items: [
      { text: 'Calculate the total of four consecutive periods.' },
      { text: 'Calculate the next four-period total by dropping the first period and adding the fifth.' },
      { text: 'Find the centered total by adding two consecutive four-period totals.' },
      { text: 'Divide the centered total by 8 to get the centered moving average (trend).' }
    ]} },
    { id: 'call1', type: 'callout', data: { style: 'worked', title: 'Worked Example: Moving Averages', text: 'If quarterly sales are: Q1: 120, Q2: 130, Q3: 150, Q4: 180. The 4-period moving sum is 580. Next year Q1 is 140. Second total is 130+150+180+140 = 600. Centered total = 1180. Trend = 1180 / 8 = 147.5.' } },
    { id: 'h3', type: 'heading', data: { text: 'Extrapolation', level: 3 } },
    { id: 'p3', type: 'paragraph', data: { text: 'Once the trend is identified, it can be extended into the future to predict future values. This process is known as extrapolation, assuming the existing pattern continues.' } },
    { id: 'call2', type: 'callout', data: { style: 'key', title: 'Key Idea', text: 'Extrapolation relies entirely on historical data. It assumes that past trends will continue in the future, which makes it less reliable in rapidly changing markets.' } },
    { id: 'sum', type: 'summary', data: { text: 'Time-series forecasting uses techniques like the four-period moving average to smooth out fluctuations, establish the underlying trend, and permit extrapolation of future performance based on past data.' } }
  ],
  recall: {
    enabled: true,
    summaryText: 'Quantitative predictive method using moving averages and extrapolation.',
    cues: [
      { id: 'c1', blockId: 'p1', prompt: 'What is time-series forecasting?', answer: 'Predicting future values based on historical data collected at regular intervals.' },
      { id: 'c2', blockId: 'p2', prompt: 'Why is a moving average used?', answer: 'To smooth out short-term fluctuations and highlight longer-term trends.' },
      { id: 'c3', blockId: 'p3', prompt: 'What is extrapolation?', answer: 'Extending a trend line into the future to forecast future values.' },
      { id: 'c4', blockId: 'call2', prompt: 'What is a major assumption of extrapolation?', answer: 'That past patterns and trends will continue in the future.' }
    ]
  }
};`,
  "note_3_13_1.js": `export const note_business_3_13_1 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Analyze and interpret scatter graphs and calculate lines of best fit to forecast business performance.' } },
    { id: 'h1', type: 'heading', data: { text: 'Scatter Graphs and Trend Lines', level: 2 } },
    { id: 'p1', type: 'paragraph', data: { text: 'A scatter graph (or scatter plot) plots data points on a horizontal and vertical axis to discover whether a relationship (correlation) exists between two variables. For example, a business might plot advertising spending against sales revenue.' } },
    { id: 'h2', type: 'heading', data: { text: 'Types of Correlation', level: 3 } },
    { id: 'p2', type: 'paragraph', data: { text: 'By examining the pattern of the points, a business can establish the correlation between variables:' } },
    { id: 'list1', type: 'list', data: { style: 'bullet', items: [
      { text: '**Positive correlation:** As one variable increases, the other also increases (e.g., higher marketing spend leads to higher sales).' },
      { text: '**Negative correlation:** As one variable increases, the other decreases (e.g., higher product price leads to lower quantity demanded).' },
      { text: '**Strong correlation:** The points are tightly clustered together in a line.' },
      { text: '**Weak correlation:** The points are widely spread but still display a general direction.' },
      { text: '**No correlation:** No discernible pattern; the variables are not related.' }
    ]} },
    { id: 'call1', type: 'callout', data: { style: 'key', title: 'Key Term: Line of Best Fit', text: 'A line drawn through a scatter graph that best represents the trend in the data. It balances the number of points above and below the line.' } },
    { id: 'h3', type: 'heading', data: { text: 'Extrapolation Using the Trend Line', level: 3 } },
    { id: 'p3', type: 'paragraph', data: { text: 'Once the line of best fit (trend line) is established on a scatter graph, a firm can use it to forecast future values (extrapolation). By extending the line, managers can predict the reliant variable\\'s value given a certain change in the independent variable.' } },
    { id: 'call2', type: 'callout', data: { style: 'warning', title: 'Watch Out: Correlation vs. Causation', text: 'A strong positive correlation does not mean one factor causes the other. A third, unknown factor may be influencing both variables.' } },
    { id: 'sum', type: 'summary', data: { text: 'Scatter graphs are used to identify the correlation between two variables. A line of best fit allows managers to visualize this relationship and extrapolate to forecast future business performance.' } }
  ],
  recall: {
    enabled: true,
    summaryText: 'Scatter graphs evaluate correlation between two variables, enabling forecasting through lines of best fit.',
    cues: [
      { id: 'c1', blockId: 'p1', prompt: 'What is the purpose of a scatter graph?', answer: 'To determine if a relationship (correlation) exists between two variables.' },
      { id: 'c2', blockId: 'list1', prompt: 'What does a strong positive correlation mean?', answer: 'When one variable increases, the other also increases proportionally tightly along a line.' },
      { id: 'c3', blockId: 'call1', prompt: 'What is a line of best fit?', answer: 'A straight line drawn through a scatter graph that represents the general trend of the data points.' },
      { id: 'c4', blockId: 'call2', prompt: 'Why is correlation not causation?', answer: 'Because two variables moving together does not imply one directly causes the other; a third factor may be involved.' }
    ]
  }
};`,
  "note_3_13_2.js": `export const note_business_3_13_2 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Evaluate the limitations of quantitative forecasting techniques and understand why forecasts may prove inaccurate.' } },
    { id: 'h1', type: 'heading', data: { text: 'Limitations of Forecasting', level: 2 } },
    { id: 'p1', type: 'paragraph', data: { text: 'While techniques such as moving averages, scatter graphs, and extrapolation provide mathematical foundations for strategic decisions, they possess significant limitations. Over-reliance on these models can lead to poor business choices.' } },
    { id: 'h2', type: 'heading', data: { text: 'Key Weaknesses', level: 3 } },
    { id: 'list1', type: 'list', data: { style: 'bullet', items: [
      { text: '**Assuming past patterns continue:** Extrapolation is based entirely on historical data. It assumes tomorrow will behave like yesterday, which is rarely true in dynamic industries.' },
      { text: '**External shocks:** Forecasts cannot predict sudden macroeconomic shifts (e.g., recessions, pandemics, severe natural disasters).' },
      { text: '**Action of competitors:** A forecasted sales plan can be quickly derailed when a competitor launches a superior product or slashes prices.' },
      { text: '**Qualitative factors ignored:** Models do not account for shifts in consumer taste, brand loyalty, morale of the workforce, or management intuition.' },
      { text: '**Time horizons:** The further into the future a firm tries to forecast, the greater the margin of error.' }
    ]} },
    { id: 'call1', type: 'callout', data: { style: 'tip', title: 'Evaluating Forecasting', text: 'When evaluating quantitative forecasting, always combine it with qualitative methods like market research, Delphi techniques, and expert judgment.' } },
    { id: 'table', type: 'comparisonTable', data: {
      caption: 'Strengths and Weaknesses of Forecasting',
      headers: ['Strengths', 'Weaknesses'],
      rows: [
        ['Provides an objective foundation for targets', 'Rigid reliance on historical data'],
        ['Helps identify seasonal variations to plan stock and cash flow', 'Usually ignores unpredictable external forces (PESTLE changes)'],
        ['Useful in stable, mature markets with regular patterns', 'Inaccurate in rapidly changing technological markets']
      ]
    }},
    { id: 'sum', type: 'summary', data: { text: 'Forecasting uses past data to inform future expectations, but its limitations—especially vulnerability to external shocks and ignorance of qualitative factors—mean it should be used cautiously.' } }
  ],
  recall: {
    enabled: true,
    summaryText: 'Quantitative forecasting relies on the past, making it vulnerable to market volatility and external shocks.',
    cues: [
      { id: 'c1', blockId: 'list1', prompt: 'Why is the assumption of extrapolation a major weakness?', answer: 'It assumes past trends will continue in the future, which is dangerous in dynamic, changing markets.' },
      { id: 'c2', blockId: 'list1', prompt: 'Mention two external factors neglected by time series forecasting.', answer: 'Competitor actions and macroeconomic shocks (e.g., recession).' },
      { id: 'c3', blockId: 'call1', prompt: 'How can businesses improve the reliability of their forecasts?', answer: 'By combining quantitative forecasting with qualitative insight and market research.' },
      { id: 'c4', blockId: 'list1', prompt: 'How does time horizon affect forecast reliability?', answer: 'The further into the future a forecast attempts to project, the less reliable it becomes.' }
    ]
  }
};`,
  "note_3_13_3.js": `export const note_business_3_13_3 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Calculate and interpret the Payback Period to evaluate investment appraisals.' } },
    { id: 'h1', type: 'heading', data: { text: 'Payback Period', level: 2 } },
    { id: 'p1', type: 'paragraph', data: { text: 'Investment appraisal is the process of evaluating the profitability of an investment project to determine whether it is worthwhile. The **Payback Period** evaluates how long it will take for an investment to generate enough net cash flow to pay back the initial initial cost of the project.' } },
    { id: 'h2', type: 'heading', data: { text: 'Calculating the Payback', level: 3 } },
    { id: 'p2', type: 'paragraph', data: { text: 'If the net cash flow is constant each year, the payback is calculated simply as:' } },
    { id: 'eq', type: 'equation', data: { html: '<p>Payback = <span class="nb-frac"><span class="nb-num">Initial Cost</span><span class="nb-den">Annual Net Cash Flow</span></span></p>', caption: 'Payback period for constant cash flows' } },
    { id: 'p3', type: 'paragraph', data: { text: 'When cash flow varies, you calculate the cumulative cash flow year by year. Once the cumulative cash flow turns positive, the payback happens during that year.' } },
    { id: 'call1', type: 'callout', data: { style: 'worked', title: 'Worked Example: Variable Cash Flow', text: 'Initial cost: £100k.\\nYear 1: £40k (Cum: -£60k).\\nYear 2: £50k (Cum: -£10k).\\nYear 3: £30k (Cum: +£20k).\\nThe £10k is paid back during Year 3.\\nFormula: (Amount needed / Net cash flow in Year 3) × 12 months = (£10k / £30k) × 12 = 4 months.\\nPayback Period: 2 years and 4 months.' } },
    { id: 'h3', type: 'heading', data: { text: 'Advantages and Disadvantages', level: 3 } },
    { id: 'table', type: 'comparisonTable', data: {
      caption: 'Payback Period Evaluation',
      headers: ['Advantages', 'Disadvantages'],
      rows: [
        ['Simple and easy to calculate/understand.', 'Ignores all cash flows generated after the payback period has occurred.'],
        ['Promotes liquidity by identifying projects that pay off the fastest.', 'Does not measure overall profitability of the project.'],
        ['Highly relevant for firms in fast-changing dynamic markets.', 'Ignores the time value of money (unlike NPV).']
      ]
    }},
    { id: 'call2', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Payback is highly favored by businesses with cash flow problems, as rapid payback reduces risk and improves short-term liquidity.' } },
    { id: 'sum', type: 'summary', data: { text: 'The Payback Period measures the time required to recover an initial investment. While simple and focused on liquidity, it ignores long-term profitability and the time value of money.' } }
  ],
  recall: {
    enabled: true,
    summaryText: 'The payback period determines the time to recover an investment cost. Simple but ignores later profitability.',
    cues: [
      { id: 'c1', blockId: 'p1', prompt: 'What is the Payback Period?', answer: 'The length of time it takes for an investment project to generate enough net cash flow to cover its initial cost.' },
      { id: 'c2', blockId: 'eq', prompt: 'What is the formula if net cash flows are constant?', answer: 'Initial Investment Cost / Annual Net Cash Flow.' },
      { id: 'c3', blockId: 'call1', prompt: 'How do you calculate the months required in the payback year?', answer: '(Amount still required to be paid back / Net cash flow in that year) × 12.' },
      { id: 'c4', blockId: 'table', prompt: 'State one advantage and one disadvantage of the payback method.', answer: 'Advantage: simple to calculate and promotes liquidity. Disadvantage: ignores cash flow occurring after the payback point.' }
    ]
  }
};`,
  "note_3_13_4.js": `export const note_business_3_13_4 = {
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
    { id: 'call1', type: 'callout', data: { style: 'worked', title: 'Worked Example: ARR', text: 'Investment: £200k. Project Life: 4 years.\\nNet Cash Flow: Yr1: £80k, Yr2: £100k, Yr3: £120k, Yr4: £60k.\\nTotal Return = £360k.\\nTotal Profit = £360k - £200k = £160k.\\nAverage Annual Profit = £160k / 4 = £40k.\\nARR = (£40k / £200k) × 100 = 20%.' } },
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
    { id: 'sum', type: 'summary', data: { text: 'The ARR calculates the total percentage return of a project, measuring total profitability. It allows for quick comparisons with target interest rates but ignores the time value of money.' } }
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
};`,
  "note_3_13_5.js": `export const note_business_3_13_5 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Calculate and evaluate Net Present Value (NPV) by applying discount factors to future cash flows.' } },
    { id: 'h1', type: 'heading', data: { text: 'Net Present Value (NPV)', level: 2 } },
    { id: 'p1', type: 'paragraph', data: { text: 'Net Present Value (NPV) takes into account the **time value of money**. Money received in the future is worth less than money received today because of inflation and the opportunity cost of interest that could have been earned.' } },
    { id: 'h2', type: 'heading', data: { text: 'Using Discount Factors', level: 3 } },
    { id: 'p2', type: 'paragraph', data: { text: 'To calculate the NPV, future cash flows must be multiplied by a mathematical "discount factor", supplied in an exam table. This converts future revenues into present-day values.' } },
    { id: 'list1', type: 'list', data: { style: 'numbered', items: [
      { text: 'Multiply each year\\'s net cash flow by the specific discount factor for that year.' },
      { text: 'This gives the Present Value (the discounted cash flow) for each year.' },
      { text: 'Add together all the Present Values together across the whole project.' },
      { text: 'Subtract the initial investment cost to find the overall Net Present Value.' }
    ]} },
    { id: 'call1', type: 'callout', data: { style: 'worked', title: 'Worked Example: Net Present Value', text: 'Investment: £500,000.\\nYear 1 Cash Flow: £300,000 (DF: 0.91). PV = £273,000.\\nYear 2 Cash Flow: £400,000 (DF: 0.83). PV = £332,000.\\nTotal Present Values: £605,000.\\nNPV = £605,000 - £500,000 = £105,000.' } },
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
    { id: 'sum', type: 'summary', data: { text: 'Net Present Value is the most sophisticated form of investment appraisal. By discounting future monetary returns to present-day values, it accounts for time and inflation, providing the most realistic picture of a project\\'s worth.' } }
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
};`,
  "note_3_13_6.js": `export const note_business_3_13_6 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand and use decision trees to calculate expected values and guide strategic choices.' } },
    { id: 'h1', type: 'heading', data: { text: 'Decision Trees', level: 2 } },
    { id: 'p1', type: 'paragraph', data: { text: 'Decision trees are mathematical models used by managers to map out the potential outcomes, costs, probabilities, and financial rewards of alternative courses of action. It enables a quantifiable comparison.' } },
    { id: 'h2', type: 'heading', data: { text: 'Structure of a Decision Tree', level: 3 } },
    { id: 'list1', type: 'list', data: { style: 'bullet', items: [
      { text: '**Square nodes:** Represent a decision point where management must choose between options.' },
      { text: '**Circular nodes:** Represent chance nodes where probabilities of different outcomes occur (e.g., high success or low success).' },
      { text: '**Branches:** Lines connecting nodes showing different routes and potential paths.' },
      { text: '**Probabilities:** The estimated chance of a specific outcome happening (always adds up to 1.0).' },
      { text: '**Financial Outcomes:** The predicted net profit or revenue resulting from a branch.' }
    ]} },
    { id: 'h3', type: 'heading', data: { text: 'Calculating Expected Value (EV)', level: 3 } },
    { id: 'p2', type: 'paragraph', data: { text: 'The **Expected Value (EV)** is the average financial outcome of a decision node, calculated by multiplying the possibility of an outcome by the expected financial return.' } },
    { id: 'eq', type: 'equation', data: { html: '<p>EV = (Probability 1 × Return 1) + (Probability 2 × Return 2)</p>', caption: 'Expected Value calculation at a chance node' } },
    { id: 'call1', type: 'callout', data: { style: 'worked', title: 'Example: Expected Value', text: 'Option: Launch a new product.\\nHigh Success: 0.6 probability, £500k return.\\nLow Success: 0.4 probability, £100k return.\\nExpected Value = (0.6 × 500,000) + (0.4 × 100,000) = 300,000 + 40,000 = £340,000.' } },
    { id: 'p3', type: 'paragraph', data: { text: 'To find the **Net Expected Value (Net Gain)**, simply subtract the initial cost of taking that option from the overall Expected Value.' } },
    { id: 'table', type: 'comparisonTable', data: {
      caption: 'Evaluation of Decision Trees',
      headers: ['Strengths', 'Weaknesses'],
      rows: [
        ['Provides logic and a quantitative backing for strategic choices, preventing bias.', 'Assigning probabilities is incredibly subjective and open to management optimism bias.'],
        ['Forces management to thoroughly regard all possible options, including doing nothing.', 'Does not account for qualitative changes, like the impact of a choice on brand reputation.'],
        ['Easy to communicate the financial risks to stakeholders and shareholders.', 'External market environments change quickly; an EV calculated today may be irrelevant tomorrow.']
      ]
    }},
    { id: 'sum', type: 'summary', data: { text: 'Decision trees use probability and financial data to calculate Expected Values and Net Gains for different options. Whilst highly logical, the model heavily relies on the accuracy of the probabilities estimated.' } }
  ],
  recall: {
    enabled: true,
    summaryText: 'Decision trees map options, probabilities, and rewards to calculate expected value and net gain.',
    cues: [
      { id: 'c1', blockId: 'list1', prompt: 'What does a square node represent on a decision tree?', answer: 'A decision point where management must choose between options.' },
      { id: 'c2', blockId: 'list1', prompt: 'What does a circular node represent?', answer: 'A chance node showing uncertain outcomes and probabilities.' },
      { id: 'c3', blockId: 'eq', prompt: 'How do you calculate Expected Value (EV)?', answer: 'Multiply the probability of each outcome by its expected financial return and add them together.' },
      { id: 'c4', blockId: 'table', prompt: 'What is a major limitation of decision trees?', answer: 'The probabilities assigned to outcomes are often subjective estimates, vulnerable to optimism bias.' }
    ]
  }
};`,
  "note_3_13_7.js": `export const note_business_3_13_7 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Interpret Critical Path Analysis (CPA) network diagrams to calculate the earliest and latest possible project completion times.' } },
    { id: 'h1', type: 'heading', data: { text: 'Critical Path Analysis (CPA)', level: 2 } },
    { id: 'p1', type: 'paragraph', data: { text: 'Critical Path Analysis (CPA) is a project management tool used to map out the optimal sequence of tasks required to complete a complex project on time. It is vital for ventures like construction or software development involving simultaneous tasks.' } },
    { id: 'h2', type: 'heading', data: { text: 'Nodes and the Network Diagram', level: 3 } },
    { id: 'p2', type: 'paragraph', data: { text: 'CPA uses network diagrams constructed using circles, called nodes, connected by lines indicating the duration and dependencies of activities.' } },
    { id: 'list1', type: 'list', data: { style: 'bullet', items: [
      { text: '**Nodes:** Each circle is divided into three sections: Node Number (left), Earliest Start Time (EST, top right), and Latest Finish Time (LFT, bottom right).' },
      { text: '**Activities:** Lines usually marked with a letter and representing the actual task.' },
      { text: '**Duration:** The time taken for the activity, written under the line.' },
      { text: '**Dependencies:** Some tasks cannot be initiated until a preceding task concludes. You cannot install a roof until the foundation is laid.' }
    ]} },
    { id: 'h3', type: 'heading', data: { text: 'EST and LFT', level: 3 } },
    { id: 'p3', type: 'paragraph', data: { text: 'The **Earliest Start Time (EST)** is calculated by moving forward (left to right) through the diagram. It adds the duration of tasks to find the earliest point the next task can begin. (If multiple paths meet, use the highest value).' } },
    { id: 'p4', type: 'paragraph', data: { text: 'The **Latest Finish Time (LFT)** is calculated by working backward (right to left) starting from the project EST total. It deducts task durations. (If multiple paths recede, use the lowest value).' } },
    { id: 'call1', type: 'callout', data: { style: 'warning', title: 'Watch Out', text: 'When calculating the EST, always take the highest previous total. The project cannot move forward until ALL dependent lines have completed.' } },
    { id: 'sum', type: 'summary', data: { text: 'CPA maps project tasks dynamically. By finding earliest start and latest finish times, managers can coordinate resources, staff, and materials explicitly efficiently.' } }
  ],
  recall: {
    enabled: true,
    summaryText: 'CPA is a project management tool mapping task orders via EST and LFT to find efficiency.',
    cues: [
      { id: 'c1', blockId: 'p1', prompt: 'What is Critical Path Analysis designed to do?', answer: 'It maps the optimal sequence and timing of tasks needed to complete a complex project efficiently.' },
      { id: 'c2', blockId: 'list1', prompt: 'What information is contained in the three sections of a CPA node?', answer: 'The Node Number, the Earliest Start Time (EST), and the Latest Finish Time (LFT).' },
      { id: 'c3', blockId: 'p3', prompt: 'When moving left-to-right to calculate EST and two paths converge, which time is chosen?', answer: 'The highest value.' },
      { id: 'c4', blockId: 'p4', prompt: 'When moving right-to-left to calculate LFT, how is it determined?', answer: 'By subtracting task durations from the LFT, choosing the lower value if paths split.' }
    ]
  }
};`,
  "note_3_13_8.js": `export const note_business_3_13_8 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Identify the critical path and calculate float times for non-critical activities.' } },
    { id: 'h1', type: 'heading', data: { text: 'Critical Path and Float', level: 2 } },
    { id: 'p1', type: 'paragraph', data: { text: 'Within a Critical Path Analysis (CPA) network diagram, there will be key tasks that define the minimum time the whole project requires, and tasks that have extra flexibility. These are separated into critical activities and float activities.' } },
    { id: 'h2', type: 'heading', data: { text: 'The Critical Path', level: 3 } },
    { id: 'p2', type: 'paragraph', data: { text: 'The critical path is the continuous sequence of activities from start to finish where the **Earliest Start Time (EST) equals the Latest Finish Time (LFT)** at every connecting node. The critical path governs total project completion time.' } },
    { id: 'call1', type: 'callout', data: { style: 'key', title: 'Critical Activities', text: 'Any delay to an activity on the critical path will delay the completion of the entire project.' } },
    { id: 'h3', type: 'heading', data: { text: 'Calculating Float', level: 3 } },
    { id: 'p3', type: 'paragraph', data: { text: 'Total float is the amount of time a non-critical activity can be delayed without delaying the whole project. Activities on the critical path have a float of exactly zero.' } },
    { id: 'eq', type: 'equation', data: { html: '<p>Total Float = LFT (of next node) - EST (of current node) - Duration</p>', caption: 'Calculating Total Float' } },
    { id: 'call2', type: 'callout', data: { style: 'worked', title: 'Worked Example: Float', text: 'Task C connects Node 2 to Node 4.\\nNode 2 EST = 10 days.\\nTask C duration = 6 days.\\nNode 4 LFT = 22 days.\\nTotal Float = 22 - 10 - 6 = 6 days.\\nTask C can be delayed by 6 days without harming the overall timeline.' } },
    { id: 'h3', type: 'heading', data: { text: 'Evaluation of CPA', level: 3 } },
    { id: 'table', type: 'comparisonTable', data: {
      caption: 'Strengths and Weaknesses of CPA',
      headers: ['Strengths', 'Weaknesses'],
      rows: [
        ['Allows managers to identify float tasks to transfer staff to delayed critical tasks.', 'The network diagram is complex to map out and heavily reliant on accurate time estimates.'],
        ['Minimizes working capital tied up via enabling JIT (Just In Time) stock delivery dates.', 'CPA does not guarantee success if components or subcontractors let the firm down.'],
        ['Provides an absolute minimum completion time for stakeholders and clients.', 'Focuses purely on time efficiency; ignores the actual quality of the output.']
      ]
    }},
    { id: 'sum', type: 'summary', data: { text: 'Identifying the critical path highlights where project delays will be fatal to the deadline. Calculating total float permits management to reallocate resources dynamically from non-critical tasks.' } }
  ],
  recall: {
    enabled: true,
    summaryText: 'The critical path shows tasks with zero delay margin. Float calculates spare time on non-critical tasks.',
    cues: [
      { id: 'c1', blockId: 'p2', prompt: 'What defines the critical path in a CPA diagram?', answer: 'The line of activities where the EST and LFT on connecting nodes are completely equal.' },
      { id: 'c2', blockId: 'call1', prompt: 'What happens if a critical activity is delayed?', answer: 'The entire completion time of the overall project is delayed.' },
      { id: 'c3', blockId: 'eq', prompt: 'What is the formula used to calculate total float?', answer: 'Total Float = LFT (of destination node) - EST (of start node) - Duration of the task.' },
      { id: 'c4', blockId: 'table', prompt: 'How does CPA help with stock management?', answer: 'Since exact start times are calculated, supplies can be ordered just-in-time, saving storage costs.' }
    ]
  }
};`,
  "note_3_13_9.js": `export const note_business_3_13_9 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Use contribution costing to make strategic operational decisions including special orders.' } },
    { id: 'h1', type: 'heading', data: { text: 'Contribution as a Decision Tool', level: 2 } },
    { id: 'p1', type: 'paragraph', data: { text: 'Contribution measures how much revenue a product generates towards paying off the fixed overheads of the business. Once fixed costs are paid, contribution then equals pure profit.' } },
    { id: 'h2', type: 'heading', data: { text: 'Calculating Contribution', level: 3 } },
    { id: 'list1', type: 'list', data: { style: 'bullet', items: [
      { text: '**Contribution per unit =** Selling Price per unit - Variable Cost per unit' },
      { text: '**Total Contribution =** Total Revenue - Total Variable Costs (Or: Contribution per unit × Sales volume)' }
    ]} },
    { id: 'h3', type: 'heading', data: { text: 'Special Order Decisions', level: 3 } },
    { id: 'p2', type: 'paragraph', data: { text: 'A frequent exam scenario revolves around accepting or rejecting a "special order"—a large one-off request from a customer offering a lower price than the standard selling price.' } },
    { id: 'p3', type: 'paragraph', data: { text: 'If a business evaluates the special order purely on total cost (including fixed costs), it might reject an offer that is lower than the total cost. However, using contribution logic, the firm only evaluates the Variable Costs.' } },
    { id: 'call1', type: 'callout', data: { style: 'key', title: 'The Golden Rule of Contribution Pricing', text: 'If the firm has spare capacity, any special order should be accepted if the special selling price is greater than the variable cost per unit. This means it provides a positive contribution to fixed costs and final profit.' } },
    { id: 'call2', type: 'callout', data: { style: 'worked', title: 'Special Order Example', text: 'Normal Price: £50.\\nVariable Cost: £20.\\nFixed Costs: £1000.\\nA charity requests a 100-unit bulk order for £30. Since £30 > £20 VC, it generates a £10 contribution per unit. The order will generate £1,000 extra contribution. It should be accepted.' } },
    { id: 'h3', type: 'heading', data: { text: 'Product Discontinuation', level: 3 } },
    { id: 'p4', type: 'paragraph', data: { text: 'If a product is making a net loss, traditional logic says "discontinue it." But using contribution, if the product still makes a **positive contribution**, dropping it would reduce overall company profit, as the fixed costs would simply shift to other product lines to pay off.' } },
    { id: 'sum', type: 'summary', data: { text: 'Contribution analysis separates fixed and variable costing. By focusing pure contribution margin, managers can make profitable tactical choices regarding special low-price orders or product lines operating at a net loss.' } }
  ],
  recall: {
    enabled: true,
    summaryText: 'Contribution = Price - Variable Costs. It is vital for making decisions on special orders and discontinuing products.',
    cues: [
      { id: 'c1', blockId: 'list1', prompt: 'How is contribution per unit calculated?', answer: 'Selling price per unit minus variable cost per unit.' },
      { id: 'c2', blockId: 'p1', prompt: 'What does a contribution go towards paying off?', answer: 'It first goes to paying off the fixed costs of the business, and thereafter contributes strictly to profit.' },
      { id: 'c3', blockId: 'call1', prompt: 'When should a special low-price order be accepted using contribution logic?', answer: 'When there is spare capacity and the special selling price is greater than the variable costs of production.' },
      { id: 'c4', blockId: 'p4', prompt: 'Why might a business keep selling a product that is generating a net loss?', answer: 'Because if the product still creates a positive contribution, ending it would leave remaining products to absorb all fixed costs.' }
    ]
  }
};`,
  "note_3_13_10.js": `export const note_business_3_13_10 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Synthesize the limitations of quantitative strategic decision tools in a broader corporate environment.' } },
    { id: 'h1', type: 'heading', data: { text: 'Tool Limitations and Evidence-based Decision Making', level: 2 } },
    { id: 'p1', type: 'paragraph', data: { text: 'Throughout strategic decision making, tools such as Net Present Value, Decision Trees, and Critical Path Analysis provide managers a numerical advantage. This evidence-based decision-making restricts bias and emotions. However, all tools share universal limitations.' } },
    { id: 'h2', type: 'heading', data: { text: 'Common Broad Limitations', level: 3 } },
    { id: 'list1', type: 'list', data: { style: 'bullet', items: [
      { text: '**The Data Quality Problem:** The model outcome will only be as accurate as the estimates supplied. The GIGO principle applies: "Garbage In, Garbage Out". Inaccurate inputs yield incorrect output models.' },
      { text: '**Internal Qualitative Ignorance:** Tools cannot measure human factors. A highly profitable NPV project may destroy workforce morale or drastically alter corporate culture.' },
      { text: '**External Volatility:** Quantitative models utilize static conditions over time periods (time value of money uses static discount rates). Real-life economic recessions, competitor interference, and legal changes invalidate the mathematical forecasts quickly.' },
      { text: '**Cost and Time:** Implementing intricate CPA software planning or deep Investment Appraisal algorithms consumes significant capital and time.' }
    ]} },
    { id: 'h3', type: 'heading', data: { text: 'Evidence-Based vs. Subjective Decision Making', level: 3 } },
    { id: 'p2', type: 'paragraph', data: { text: 'Many entrepreneurial businesses (such as Steve Jobs at Apple) relied heavily on gut feeling, experience, and subjective intuition. The advantage is an incredibly fast, innovative response.' } },
    { id: 'table', type: 'comparisonTable', data: {
      caption: 'Scientific vs Subjective Strategy',
      headers: ['Evidence-Based (Scientific)', 'Subjective (Hunches)'],
      rows: [
        ['Backed by data, NPV, Decision Trees, and past moving averages.', 'Driven by entrepreneur instincts and intuition.'],
        ['Can be easily justified to stakeholders, banks, and shareholders.', 'Extremely difficult to justify asking for massive bank loans.'],
        ['Can be slow to accumulate the research heavily limiting market pioneer advantage.', 'Promotes incredible agility; firm can be first-to-market and shape the industry.']
      ]
    }},
    { id: 'call1', type: 'callout', data: { style: 'tip', title: 'Exam Application', text: 'In twenty-mark evaluation questions, argue that mathematical models must ALWAYS be paired with qualitative assessment (PESTLE, market research, brand alignment) to formulate an optimal strategy.' } },
    { id: 'sum', type: 'summary', data: { text: 'Strategic tools provide powerful scientific data. However, their reliance on accurate forecasting and static environments necessitates that an experienced management team combines these numerical indicators with human qualitative intuition.' } }
  ],
  recall: {
    enabled: true,
    summaryText: 'Quantitative tools provide scientific backing but rely heavily on data accuracy and ignore qualitative human realities.',
    cues: [
      { id: 'c1', blockId: 'list1', prompt: 'What is meant by the principle "Garbage In, Garbage Out"?', answer: 'If the data or estimates inputted into models like NPV or Decision Trees are inaccurate, the output will also be flawed.' },
      { id: 'c2', blockId: 'list1', prompt: 'Outline one way external volatility harms mathematical decision tools.', answer: 'Changes in the macroeconomy like changing interest rates or unexpected inflation ruin long-term calculations.' },
      { id: 'c3', blockId: 'table', prompt: 'Give one strength and one flaw of subjective, hunch-based decision making.', answer: 'Strength: it is fast and allows first-mover advantage. Flaw: hard to justify to banks and shareholders.' },
      { id: 'c4', blockId: 'call1', prompt: 'How should management counter the limitations of mathematical strategic tools?', answer: 'By combining the empirical math data with qualitative models like PESTLE and market research before acting.' }
    ]
  }
};`
};

for (const name in files) {
  fs.writeFileSync(path.join(dir, name), files[name], 'utf8');
}
