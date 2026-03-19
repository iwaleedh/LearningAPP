export const exercises_business_3_13 = {
    mcq: [
        {
            id: 'mcq-t13-1',
            stem: 'What is the key principle of time-series forecasting?',
            options: ['Using only historical data without adjustment', 'Identifying trend, seasonal, and cyclical patterns', 'Ignoring past performance completely', 'Using expert opinion only'],
            correctAnswer: 1,
            rationale: 'Time-series forecasting is based on identifying trend, seasonal, and cyclical patterns in historical data. Pure expert opinion (Delphi method) is different. Historical data is used but must be adjusted for patterns.',
            topic: 'Time-series forecasting'
        },
        {
            id: 'mcq-t13-2',
            stem: 'The correlation coefficient in scatter graphs indicates:',
            options: ['How closely two variables are related', 'The difference between highest and lowest values', 'The average of the data points', 'The rate of change over time'],
            correctAnswer: 0,
            rationale: 'The correlation coefficient indicates how closely two variables are related (strength of relationship), ranging from -1 (perfect negative) to +1 (perfect positive). The other options describe range, average, and trend.',
            topic: 'Scatter graphs and trend lines'
        },
        {
            id: 'mcq-t13-3',
            stem: 'Payback period is best described as:',
            options: ['The time until cumulative profit equals initial investment', 'The total profit generated over project life', 'The time to reach 50% of forecasted sales', 'The annual percentage return on investment'],
            correctAnswer: 0,
            rationale: 'Payback period is the time until cumulative profit equals initial investment - when original investment is recovered. Total profit over project life is different concept. 50% of sales is not the payback point (though sometimes used). Annual percentage return is ARR.',
            topic: 'Payback period'
        },
        {
            id: 'mcq-t13-4',
            stem: 'Average Rate of Return (ARR) is calculated as:',
            options: ['Total profit divided by initial investment', 'Average annual profit as percentage of investment', 'Net present value divided by years', 'Discounted cash flows minus investment'],
            correctAnswer: 1,
            rationale: 'ARR is Average Annual Profit as percentage of Initial Investment. Average annual profit divided by initial investment, multiplied by 100 to get percentage. Other options describe different calculations.',
            topic: 'Average rate of return'
        },
        {
            id: 'mcq-t13-5',
            stem: 'Net Present Value (NPV) uses which concept to account for time value of money?',
            options: ['Simple interest calculation', 'Discounting future cash flows', 'Inflation adjustment only', 'Risk adjustment without discounting'],
            correctAnswer: 1,
            rationale: 'NPV uses discounting future cash flows to account for time value of money - cash received sooner is worth more than cash received later. Simple interest and inflation adjustment alone do not properly account for time value.',
            topic: 'Net present value'
        },
        {
            id: 'mcq-t13-6',
            stem: 'In a decision tree, square branches represent:',
            options: ['The most optimistic outcomes', 'The expected monetary value', 'Decision points requiring action', 'The probability of each outcome'],
            correctAnswer: 3,
            rationale: 'In decision trees, square branches represent decision points where a choice must be made. Circles represent outcomes (including values), and probabilities are shown on branches. The most optimistic outcome is not specifically represented by squares.',
            topic: 'Decision trees'
        },
        {
            id: 'mcq-t13-7',
            stem: 'Critical path in network analysis is:',
            options: ['The longest path through the network', 'The path with most activities', 'The shortest possible completion time', 'The path with zero float'],
            correctAnswer: 0,
            rationale: 'Critical path is the longest path through the network, determining the minimum project duration. The path with most activities may not be longest. Shortest possible completion is optimistic. Zero float is characteristic of critical activities, not the path itself.',
            topic: 'Critical path analysis'
        },
        {
            id: 'mcq-t13-8',
            stem: 'Float in critical path analysis is:',
            options: ['The time an activity can be delayed without affecting project', 'The total project slack time', 'The difference between earliest and latest start times', 'The time saved by completing early'],
            correctAnswer: 0,
            rationale: 'Float is the time an activity can be delayed without affecting overall project completion time. It is the difference between the latest possible start and earliest finish times. Total slack is sum of all float across the project. Time saved by completing early is re-applying float, not its definition.',
            topic: 'Float and critical activities'
        },
        {
            id: 'mcq-t13-9',
            stem: 'Contribution is calculated as:',
            options: ['Total revenue minus total costs', 'Selling price minus variable cost per unit', 'Fixed costs plus variable costs', 'Profit minus direct labour only'],
            correctAnswer: 1,
            rationale: 'Contribution is Selling Price minus Variable Cost per unit. It represents the amount each unit contributes toward covering fixed costs and profit. Total revenue minus total costs is profit, not contribution. Fixed costs are not subtracted to get contribution per unit.',
            topic: 'Contribution as a decision tool'
        },
        {
            id: 'mcq-t13-10',
            stem: 'The discount rate in NPV calculation should reflect:',
            options: ['The inflation rate', 'The business cost of capital', 'The risk and time value of money', 'The expected return from similar projects'],
            correctAnswer: 2,
            rationale: 'The discount rate should reflect the business cost of capital (opportunity cost of investment) plus risk adjustment. Higher risk projects use higher discount rates. Inflation alone is insufficient - real returns matter more than nominal. Expected return is benchmark, not cost of capital.',
            topic: 'Net present value'
        },
        {
            id: 'mcq-t13-11',
            stem: 'A project with negative NPV should be:',
            options: ['Accepted because it has high strategic value', 'Rejected as it destroys shareholder value', 'Accepted if IRR exceeds discount rate', 'Rejected if payback is very long'],
            correctAnswer: 1,
            rationale: 'A project with negative NPV should be rejected as it destroys shareholder value - the investment returns less than the cost of capital. Acceptance requires positive NPV (or zero if strategic benefits). IRR exceeding discount rate is equivalent to positive NPV but is not the decision criterion. Long payback is a separate consideration.',
            topic: 'Net present value'
        },
        {
            id: 'mcq-t13-12',
            stem: 'Which investment appraisal method is most suitable for projects with uncertain cash flows?',
            options: ['Payback period', 'Average Rate of Return (ARR)', 'Net Present Value (NPV)', 'Sensitivity analysis'],
            correctAnswer: 0,
            rationale: 'Payback period is most suitable for projects with uncertain cash flows because it focuses on quick recovery of investment, ignoring later uncertain returns. ARR and NPV require forecasting all cash flows which becomes more uncertain further into future. Sensitivity analysis complements payback by showing how changes affect outcomes.',
            topic: 'Forecasting limitations'
        },
        {
            id: 'mcq-t13-13',
            stem: 'In critical path analysis, an activity on the critical path has:',
            options: ['Negative float', 'Zero float', 'Positive float', 'Unlimited float'],
            correctAnswer: 1,
            rationale: 'Critical activities (on the critical path) have zero float because any delay would extend the project duration. Activities not on the critical path have positive float (slack time). Negative float is not possible - float is never negative.',
            topic: 'Float and critical activities'
        },
        {
            id: 'mcq-t13-14',
            stem: 'Which statement is true about correlation in business decision-making?',
            options: ['Perfect positive correlation (r=+1) means variables always move together', 'Zero correlation means no relationship', 'Negative correlation is always undesirable', 'Correlation proves causation'],
            correctAnswer: 1,
            rationale: 'Perfect positive correlation (r=+1) means variables move perfectly together, not just generally. Zero correlation means no statistical relationship. Negative correlation (inverse relationship) is not always undesirable - sometimes it is expected (e.g., complementary products). Correlation does not prove causation - causation requires separate analysis.',
            topic: 'Scatter graphs and trend lines'
        },
        {
            id: 'mcq-t13-15',
            stem: 'Which investment appraisal method ignores time value of money?',
            options: ['Net Present Value (NPV)', 'Payback period', 'Internal Rate of Return (IRR)', 'Average Rate of Return (ARR)'],
            correctAnswer: 1,
            rationale: 'Payback period ignores time value of money by treating all cash flows equally regardless of when received. NPV, IRR, and ARR all explicitly account for time value through discounting. This is a key weakness of payback for long-term projects.',
            topic: 'Tool limitations'
        },
        {
            id: 'mcq-t13-16',
            stem: 'Decision trees are most useful when:',
            options: ['Cash flows are certain', 'Multiple sequential decisions must be made', 'There is only one possible outcome', 'Probabilities are unknown'],
            correctAnswer: 1,
            rationale: 'Decision trees are most useful when multiple sequential decisions must be made under conditions of uncertainty with known probabilities. They become unwieldy with too many branches or when cash flows are certain (simple calculation suffices). Probabilities must be estimated but are known inputs to the model.',
            topic: 'Decision trees'
        },
        {
            id: 'mcq-t13-17',
            stem: 'Sensitivity analysis shows:',
            options: ['The single most important variable', 'How multiple variables affect the decision', 'The probability of success', 'The expected monetary outcome'],
            correctAnswer: 1,
            rationale: 'Sensitivity analysis shows how multiple variables (sales volume, price, costs) affect the decision (NPV, payback) by testing different values one at a time. It identifies which factors have most impact. Single most important variable is result of analysis, not input. Probability and expected value are from decision trees.',
            topic: 'Forecasting limitations'
        },
        {
            id: 'mcq-t13-18',
            stem: 'The Internal Rate of Return (IRR) is the discount rate that:',
            options: ['Makes NPV exactly zero', 'Equals the business cost of capital', 'Is recommended by the finance director', 'Matches the bank interest rate'],
            correctAnswer: 0,
            rationale: 'The IRR is the discount rate that makes NPV exactly zero - the projects return equals the cost of capital. It represents the actual return generated by the project. It is not necessarily equal to cost of capital (should be higher for acceptance) or bank rate.',
            topic: 'Average rate of return'
        },
        {
            id: 'mcq-t13-19',
            stem: 'Which investment appraisal method is considered most theoretically sound?',
            options: ['Payback period', 'Average Rate of Return (ARR)', 'Internal Rate of Return (IRR)', 'Net Present Value (NPV)'],
            correctAnswer: 3,
            rationale: 'Net Present Value (NPV) is considered most theoretically sound because it properly accounts for time value of money through discounting, while considering all cash flows. Payback and ARR ignore time value. IRR is sound but more complex. NPV is the academic gold standard.',
            topic: 'Tool limitations'
        },
        {
            id: 'mcq-t13-20',
            stem: 'Which statement accurately describes moving averages in time-series?',
            options: ['Used when data has no seasonal pattern', 'Calculated by summing points and dividing by 3', 'Used when data has clear seasonal pattern', 'Identical to weighted averages'],
            correctAnswer: 1,
            rationale: 'Moving averages (3-point, 5-point) are used when data has clear seasonal pattern to smooth out fluctuations. They are calculated by averaging 3 or 5 consecutive points. Simple average would not account for seasonality.',
            topic: 'Time-series forecasting'
        },
        {
            id: 'mcq-t13-21',
            stem: 'Contribution analysis is most useful for:',
            options: ['Deciding between mutually exclusive projects', 'Calculating break-even point', 'Evaluating long-term strategic investments', 'Determining optimal production level'],
            correctAnswer: 1,
            rationale: 'Contribution analysis is most useful for calculating break-even point and determining optimal production levels. For mutually exclusive projects, NPV comparison is more appropriate. Long-term strategic evaluation requires broader strategic frameworks. Optimal production level uses contribution but requires cost analysis.',
            topic: 'Contribution as a decision tool'
        },
        {
            id: 'mcq-t13-22',
            stem: 'Seasonal variation in time-series is indicated by:',
            options: ['Consistent sales throughout the year', 'Regular patterns repeating annually (e.g., peak in December)', 'Random unpredictable fluctuations', 'Trend in one direction only'],
            correctAnswer: 1,
            rationale: 'Seasonal variation is indicated by regular patterns repeating annually (such as peak sales in December for retailers, summer for travel). Consistent sales would indicate no seasonality. Random fluctuations are not seasonal. One-direction trend is gradual change, not seasonal pattern.',
            topic: 'Time-series forecasting'
        },
        {
            id: 'mcq-t13-23',
            stem: 'A higher discount rate in NPV calculation will:',
            options: ['Increase the calculated NPV', 'Decrease the calculated NPV', 'Have no effect on NPV if cash flows are zero', 'Always make NPV positive'],
            correctAnswer: 1,
            rationale: 'A higher discount rate will decrease the calculated NPV because future cash flows are discounted more heavily. Lower discount rates increase NPV. The effect is mathematical - higher rates reduce present value of future cash flows.',
            topic: 'Net present value'
        },
        {
            id: 'mcq-t13-24',
            stem: 'The main limitation of all investment appraisal tools is:',
            options: ['They account for all possible future scenarios', 'They rely on estimates and assumptions', 'They eliminate all subjectivity from decisions', 'They are legally required by shareholders'],
            correctAnswer: 1,
            rationale: 'The main limitation is reliance on estimates and assumptions - cash flows, discount rates, probabilities, and project durations are all estimates which can be wrong. Different tools handle uncertainty differently but all share this fundamental limitation. They do not account for all scenarios (though sensitivity analysis helps) and contain subjectivity (choice of discount rate, time horizon). Legal requirement is incorrect.',
            topic: 'Tool limitations'
        },
        {
            id: 'mcq-t13-25',
            stem: 'In critical path analysis, reducing float on critical activities would:',
            options: ['Extend project duration', 'Shorten project duration', 'Have no effect on project completion', 'Increase project costs'],
            correctAnswer: 2,
            rationale: 'Reducing float on critical activities would shorten project duration because critical path determines minimum completion time. Critical activities already have zero float. Increasing float would create positive float (slack). No effect on completion is incorrect - changing float could affect critical path.',
            topic: 'Float and critical activities'
        },
        {
            id: 'mcq-t13-26',
            stem: 'Which investment appraisal method is often criticised for ignoring strategic factors?',
            options: ['Net Present Value (NPV)', 'Internal Rate of Return (IRR)', 'Sensitivity analysis', 'Payback period'],
            correctAnswer: 3,
            rationale: 'Sensitivity analysis is often criticised for ignoring strategic factors (brand fit, market positioning, competitive response) that cannot be quantified. NPV and IRR attempt to quantify all factors through cash flows. Payback explicitly ignores everything except recovery time.',
            topic: 'Tool limitations'
        },
        {
            id: 'mcq-t13-27',
            stem: 'A project with positive NPV should generally be:',
            options: ['Rejected due to excessive risk', 'Accepted as it creates shareholder value', 'Accepted if payback is acceptable', 'Accepted regardless of other factors'],
            correctAnswer: 1,
            rationale: 'A project with positive NPV should generally be accepted as it creates shareholder value (returns exceed cost of capital). Rejection would only occur if NPV is negative (destroying value). Payback and risk are separate considerations alongside NPV.',
            topic: 'Net present value'
        },
        {
            id: 'mcq-t13-28',
            stem: 'What does the slope of a trend line in scatter graphs indicate?',
            options: ['The relationship strength (correlation)', 'The rate of change over time', 'The vertical axis intercept', 'The statistical significance of the relationship'],
            correctAnswer: 1,
            rationale: 'The slope indicates the rate of change over time (trend) - how much the dependent variable changes per unit of time. Correlation is indicated by the scatter pattern (how tight to the line), not the slope specifically. Intercept is where the line crosses the y-axis. Significance is a separate statistical test.',
            topic: 'Scatter graphs and trend lines'
        },
        {
            id: 'mcq-t13-29',
            stem: 'Expected Monetary Value (EMV) in decision trees is calculated as:',
            options: ['The sum of all possible outcomes', 'The weighted average of outcomes using probabilities', 'The outcome with highest probability', 'The best case scenario value only'],
            correctAnswer: 1,
            rationale: 'EMV is the weighted average of outcomes using probabilities - each outcome value multiplied by its probability, then summed. This accounts for likelihood, not just best case or sum of all possibilities.',
            topic: 'Decision trees'
        },
        {
            id: 'mcq-t13-30',
            stem: 'Investment appraisal is most effective when:',
            options: ['Only one tool is used', 'Multiple tools give consistent conclusions', 'The tools with highest values are preferred', 'Management intuition overrides analysis'],
            correctAnswer: 1,
            rationale: 'Investment appraisal is most effective when multiple tools give consistent conclusions - if NPV, payback, ARR, and IRR all indicate acceptance, decision is robust. Relying on single tool or highest values can be misleading. Management intuition should inform but not override systematic analysis.',
            topic: 'Tool limitations'
        }
    ],
    fillblank: [
        {
            id: 'fb-t13-1',
            stem: 'Complete the statement about time-series.',
            template:'\'__BLANK__ forecasting uses historical data to identify trend, seasonal, and cyclical patterns.\'',
            blanks: [{ answer: 'time-series' }],
            rationale: 'Time-series forecasting extracts patterns from historical data to predict future values.'
        },
        {
            id: 'fb-t13-2',
            stem: 'Complete the statement about investment appraisal.',
            template:'\'__BLANK__ period is the time it takes for cumulative profit to equal initial investment.\'',
            blanks: [{ answer: 'payback' }],
            rationale: 'Payback period measures how quickly investment is recovered.'
        },
        {
            id: 'fb-t13-3',
            stem: 'Complete the statement about NPV.',
            template:'\'__BLANK__ uses discounting to account for time value of money when evaluating projects.\'',
            blanks: [{ answer: 'NPV' }],
            rationale: 'NPV (Net Present Value) discounts future cash flows to present value.'
        },
        {
            id: 'fb-t13-4',
            stem: 'Complete the statement about investment return.',
            template:'\'__BLANK__ is average annual profit expressed as a percentage of initial investment.\'',
            blanks: [{ answer: 'ARR' }],
            rationale: 'ARR (Average Rate of Return) shows the percentage return on investment.'
        },
        {
            id: 'fb-t13-5',
            stem: 'Complete the statement about critical path.',
            template:'\'Activities on the __BLANK__ path have zero float and determine minimum project duration.\'',
            blanks: [{ answer: 'critical' }],
            rationale: 'The critical path is the longest path through the network, determining minimum completion time.'
        },
        {
            id: 'fb-t13-6',
            stem: 'Complete the statement about decision tools.',
            template:'\'__BLANK__ shows how changes in key variables affect the investment decision.\'',
            blanks: [{ answer: 'sensitivity analysis' }],
            rationale: 'Sensitivity analysis tests how sensitive outcomes are to changes in assumptions.'
        },
        {
            id: 'fb-t13-7',
            stem: 'Complete the statement about investment.',
            template:'\'__BLANK__ equals selling price minus variable cost per unit.\'',
            blanks: [{ answer: 'contribution' }],
            rationale: 'Contribution is the amount each unit contributes toward fixed costs and profit.'
        },
        {
            id: 'fb-t13-8',
            stem: 'Complete the statement about forecasting.',
            template:'\'__BLANK__ patterns repeat annually, such as peak sales in December for retailers.\'',
            blanks: [{ answer: 'seasonal' }],
            rationale: 'Seasonal variation creates predictable patterns that can be incorporated into forecasts.'
        },
        {
            id: 'fb-t13-9',
            stem: 'Complete the statement about critical path.',
            template:'\'__BLANK__ is the amount of time an activity can be delayed without affecting project completion.\'',
            blanks: [{ answer: 'float' }],
            rationale: 'Float represents slack time - the flexibility available without delaying the project.'
        },
        {
            id: 'fb-t13-10',
            stem: 'Complete the statement about investment tools.',
            template:'\'__BLANK__ is the discount rate that makes NPV exactly zero, representing the projects actual return.\'',
            blanks: [{ answer: 'IRR' }],
            rationale: 'IRR (Internal Rate of Return) is the actual return generated by the investment.'
        },
        {
            id: 'fb-t13-11',
            stem: 'Complete the statement about decision trees.',
            template:'\'__BLANK__ value is the weighted average of possible outcomes using their probabilities.\'',
            blanks: [{ answer: 'expected monetary' }],
            rationale: 'EMV (Expected Monetary Value) calculates the average outcome accounting for likelihood.'
        },
        {
            id: 'fb-t13-12',
            stem: 'Complete the statement about time-series.',
            template:'\'__BLANK__ averages smooth out fluctuations by averaging consecutive data points.\'',
            blanks: [{ answer: 'moving' }],
            rationale: 'Moving averages (3-point or 5-point) reduce random variation while preserving seasonal patterns.'
        },
        {
            id: 'fb-t13-13',
            stem: 'Complete the statement about project networks.',
            template:'\'The __BLANK__ path determines the minimum possible project duration.\'',
            blanks: [{ answer: 'critical' }],
            rationale: 'Critical path analysis identifies the longest path, setting the earliest completion date.'
        },
        {
            id: 'fb-t13-14',
            stem: 'Complete the statement about forecasting limitations.',
            template:'\'All investment appraisal tools rely on __BLANK__ and assumptions about future conditions.\'',
            blanks: [{ answer: 'estimates' }],
            rationale: 'Estimates of cash flows, discount rates, and project parameters create uncertainty in all decisions.'
        },
        {
            id: 'fb-t13-15',
            stem: 'Complete the statement about scatter graphs.',
            template:'\'The correlation coefficient ranges from __BLANK__ to +1, indicating relationship strength.\'',
            blanks: [{ answer: '-1' }],
            rationale: 'Correlation of -1 indicates perfect negative relationship, +1 indicates perfect positive.'
        }
    ],
    dragdrop: [
        {
            id: 'dd-t13-1',
            stem: 'Categorise these by forecasting method.',
            categories: ['Time-Series', 'Qualitative', 'Extrapolation', 'Correlation-Based'],
            items: [
                { text: 'Moving averages', category: 'Time-Series' },
                { text: 'Trend analysis', category: 'Time-Series' },
                { text: 'Seasonal adjustment', category: 'Time-Series' },
                { text: 'Delphi method (expert opinion)', category: 'Qualitative' },
                { text: 'Market research', category: 'Qualitative' },
                { text: 'Sales force opinion', category: 'Qualitative' },
                { text: 'Linear extrapolation', category: 'Extrapolation' },
                { text: 'Scatter graph correlation', category: 'Correlation-Based' },
                { text: 'Causal modeling', category: 'Correlation-Based' },
                { text: 'Leading indicators', category: 'Correlation-Based' }
            ]
        },
        {
            id: 'dd-t13-2',
            stem: 'Categorise these by investment appraisal method.',
            categories: ['Payback Period', 'Accounting Rate of Return', 'Discounted Cash Flow Methods', 'Probabilistic Methods'],
            items: [
                { text: 'Time to recover investment', category: 'Payback Period' },
                { text: 'No time value consideration', category: 'Payback Period' },
                { text: 'Simple to calculate', category: 'Payback Period' },
                { text: 'ARR (average annual return)', category: 'Accounting Rate of Return' },
                { text: 'ROCE (return on capital employed)', category: 'Accounting Rate of Return' },
                { text: 'NPV (discounting)', category: 'Discounted Cash Flow Methods' },
                { text: 'IRR (internal rate of return)', category: 'Discounted Cash Flow Methods' },
                { text: 'Decision trees', category: 'Probabilistic Methods' },
                { text: 'Expected monetary value', category: 'Probabilistic Methods' },
                { text: 'Sensitivity analysis', category: 'Probabilistic Methods' }
            ]
        },
        {
            id: 'dd-t13-3',
            stem: 'Categorise these by suitability for uncertainty.',
            categories: ['Suitable for Uncertain Cash Flows', 'Suitable for Strategic Decisions', 'Suitable for Standard Projects', 'Requires Stable Assumptions'],
            items: [
                { text: 'Payback period', category: 'Suitable for Uncertain Cash Flows' },
                { text: 'Sensitivity analysis', category: 'Suitable for Uncertain Cash Flows' },
                { text: 'NPV (strategic)', category: 'Suitable for Strategic Decisions' },
                { text: 'ARR', category: 'Suitable for Standard Projects' },
                { text: 'NPV (comparative)', category: 'Suitable for Strategic Decisions' },
                { text: 'IRR', category: 'Requires Stable Assumptions' },
                { text: 'Critical path analysis', category: 'Requires Stable Assumptions' }
            ]
        },
        {
            id: 'dd-t13-4',
            stem: 'Categorise these by tool characteristic.',
            categories: ['Accounts for Time Value', 'Ignores Time Value', 'Uses Discount Rates', 'Uses Probabilities', 'Visual/Network Based'],
            items: [
                { text: 'NPV', category: 'Accounts for Time Value' },
                { text: 'IRR', category: 'Accounts for Time Value' },
                { text: 'Discounting mechanism', category: 'Accounts for Time Value' },
                { text: 'Payback period', category: 'Ignores Time Value' },
                { text: 'ARR', category: 'Ignores Time Value' },
                { text: 'Decision trees', category: 'Uses Probabilities' },
                { text: 'Expected monetary value', category: 'Uses Probabilities' },
                { text: 'Critical path analysis', category: 'Visual/Network Based' },
                { text: 'Activity-on-node diagrams', category: 'Visual/Network Based' }
            ]
        },
        {
            id: 'dd-t13-5',
            stem: 'Categorise these by critical path concept.',
            categories: ['Critical Path', 'Float (Slack Time)', 'Early Start', 'Latest Start', 'Dummy Activity'],
            items: [
                { text: 'Longest path through network', category: 'Critical Path' },
                { text: 'Determines minimum duration', category: 'Critical Path' },
                { text: 'Activities on this path', category: 'Critical Path' },
                { text: 'Zero float activities', category: 'Critical Path' },
                { text: 'Delay without affecting completion', category: 'Float (Slack Time)' },
                { text: 'Latest start minus earliest start', category: 'Float (Slack Time)' },
                { text: 'Positive slack time available', category: 'Float (Slack Time)' },
                { text: 'Earliest possible start', category: 'Early Start' },
                { text: 'Latest possible start without delay', category: 'Latest Start' },
                { text: 'Activity with zero duration', category: 'Dummy Activity' }
            ]
        },
        {
            id: 'dd-t13-6',
            stem: 'Categorise these by decision analysis type.',
            categories: ['Single Variable Test (Sensitivity)', 'Multi-Variable Test', 'Scenario Analysis', 'Probabilistic Decision (EMV)', 'Strategic Factor Assessment'],
            items: [
                { text: 'Vary sales volume by 10%', category: 'Single Variable Test (Sensitivity)' },
                { text: 'Vary discount rate by 1%', category: 'Single Variable Test (Sensitivity)' },
                { text: 'Test best/worst/base cases', category: 'Scenario Analysis' },
                { text: 'Vary cost estimates', category: 'Scenario Analysis' },
                { text: 'Calculate expected value with probabilities', category: 'Probabilistic Decision (EMV)' },
                { text: 'Weighted average of outcomes', category: 'Probabilistic Decision (EMV)' },
                { text: 'Assess brand fit', category: 'Strategic Factor Assessment' },
                { text: 'Evaluate market positioning', category: 'Strategic Factor Assessment' },
                { text: 'Consider competitive response', category: 'Strategic Factor Assessment' }
            ]
        },
        {
            id: 'dd-t13-7',
            stem: 'Categorise these by forecasting limitation.',
            categories: ['Data Quality Issues', 'Assumption Problems', 'Model Limitations', 'External Change Factors', 'Strategic Oversights'],
            items: [
                { text: 'Insufficient historical data', category: 'Data Quality Issues' },
                { text: 'Outdated or irrelevant data', category: 'Data Quality Issues' },
                { text: 'No pattern recognition', category: 'Data Quality Issues' },
                { text: 'Unstable discount rate choice', category: 'Assumption Problems' },
                { text: 'Over-optimistic cash flow estimates', category: 'Assumption Problems' },
                { text: 'Fixed time horizon inappropriate', category: 'Assumption Problems' },
                { text: 'Cannot handle rapid change', category: 'Model Limitations' },
                { text: 'Cannot incorporate non-quantifiable factors', category: 'Model Limitations' },
                { text: 'Economic conditions change', category: 'External Change Factors' },
                { text: 'Technology disruption', category: 'External Change Factors' },
                { text: 'Competitor actions not modelled', category: 'External Change Factors' },
                { text: 'Ignores brand and market fit', category: 'Strategic Oversights' },
                { text: 'Excludes strategic synergies', category: 'Strategic Oversights' }
            ]
        },
        {
            id: 'dd-t13-8',
            stem: 'Categorise these by contribution application.',
            categories: ['Break-even Analysis', 'Product Mix Decisions', 'Special Order Decisions', 'Shutdown Decisions'],
            items: [
                { text: 'Calculate break-even point', category: 'Break-even Analysis' },
                { text: 'Determine margin of safety', category: 'Break-even Analysis' },
                { text: 'Fixed cost recovery', category: 'Break-even Analysis' },
                { text: 'Maximise profit by volume', category: 'Product Mix Decisions' },
                { text: 'Compare contribution per unit', category: 'Product Mix Decisions' },
                { text: 'Allocate limited capacity', category: 'Product Mix Decisions' },
                { text: 'Accept premium special order', category: 'Special Order Decisions' },
                { text: 'Calculate special order profitability', category: 'Special Order Decisions' },
                { text: 'Compare revenue to variable costs', category: 'Shutdown Decisions' },
                { text: 'Check if contribution covers avoidable fixed costs', category: 'Shutdown Decisions' }
            ]
        },
        {
            id: 'dd-t13-9',
            stem: 'Categorise these by correlation strength.',
            categories: ['Perfect Positive (r=+1)', 'Strong Positive (0.7 to +0.9)', 'Weak/No Relationship (0 to ±0.3)', 'Perfect Negative (r=-1)'],
            items: [
                { text: 'Complementary products', category: 'Perfect Negative (r=-1)' },
                { text: 'Temperature and ice cream sales', category: 'Perfect Negative (r=-1)' },
                { text: 'Strong positive relationship', category: 'Strong Positive (0.7 to +0.9)' },
                { text: 'Advertising spend and sales', category: 'Strong Positive (0.7 to +0.9)' },
                { text: 'Age and income (weak positive)', category: 'Weak/No Relationship (0 to ±0.3)' },
                { text: 'Random weather event', category: 'Weak/No Relationship (0 to ±0.3)' },
                { text: 'Unrelated product categories', category: 'Weak/No Relationship (0 to ±0.3)' },
                { text: 'Rainfall and umbrella sales', category: 'Perfect Positive (r=+1)' },
                { text: 'Price and quantity demanded', category: 'Perfect Positive (r=+1)' }
            ]
        },
        {
            id: 'dd-t13-10',
            stem: 'Categorise these by NPV decision rule.',
            categories: ['Accept (Positive NPV)', 'Reject (Negative NPV)', 'Indifferent (Zero NPV)', 'Strategic Consideration Required'],
            items: [
                { text: 'NPV > 0', category: 'Accept (Positive NPV)' },
                { text: 'Creates shareholder value', category: 'Accept (Positive NPV)' },
                { text: 'IRR > discount rate', category: 'Accept (Positive NPV)' },
                { text: 'Payback acceptable', category: 'Accept (Positive NPV)' },
                { text: 'NPV < 0', category: 'Reject (Negative NPV)' },
                { text: 'Destroys shareholder value', category: 'Reject (Negative NPV)' },
                { text: 'IRR < discount rate', category: 'Reject (Negative NPV)' },
                { text: 'NPV = 0', category: 'Indifferent (Zero NPV)' },
                { text: 'IRR = discount rate', category: 'Indifferent (Zero NPV)' },
                { text: 'Strategic benefits override negative NPV', category: 'Strategic Consideration Required' },
                { text: 'Entry barrier market benefits', category: 'Strategic Consideration Required' },
                { text: 'Synergies with other projects', category: 'Strategic Consideration Required' }
            ]
        }
    ],
    sequence: [
        {
            id: 'seq-t13-1',
            stem: 'Put the steps in correct order for time-series forecasting:',
            steps: [
                'Collect historical data',
                'Plot data on time-series graph',
                'Identify trend direction',
                'Calculate seasonal variations',
                'Remove trend and seasonality from historical data',
                'Project trend forward',
                'Add seasonal pattern to projected values',
                'Validate forecast against business knowledge'
            ]
        },
        {
            id: 'seq-t13-2',
            stem: 'Put the steps in correct order for NPV calculation:',
            steps: [
                'Identify all relevant cash flows',
                'Determine appropriate time horizon',
                'Select discount rate',
                'Discount each future cash flow to present value',
                'Sum all present values',
                'Subtract initial investment to calculate NPV'
            ]
        },
        {
            id: 'seq-t13-3',
            stem: 'Put the steps in correct order for payback period calculation:',
            steps: [
                'List annual net cash flows',
                'Calculate cumulative cash flows',
                'Identify year when cumulative equals initial investment',
                'Payback period is that year'
            ]
        },
        {
            id: 'seq-t13-4',
            stem: 'Put the steps in correct order for critical path analysis:',
            steps: [
                'List all activities with durations and dependencies',
                'Draw network diagram (activity-on-node)',
                'Identify all possible paths through network',
                'Calculate duration of each path',
                'Identify critical path (longest duration)',
                'Calculate float for non-critical activities',
                'Determine earliest and latest start times'
            ]
        },
        {
            id: 'seq-t13-5',
            stem: 'Put the steps in correct order for decision tree construction:',
            steps: [
                'Identify the initial decision point',
                'Define possible outcomes or branches',
                'Estimate probability of each outcome',
                'Assign monetary value to each outcome',
                'Calculate expected monetary value (EMV)',
                'Draw tree with squares (decisions) and circles (outcomes)'
            ]
        },
        {
            id: 'seq-t13-6',
            stem: 'Put the investment appraisal methods in order of theoretical soundness:',
            steps: [
                'Payback period (least theoretically sound)',
                'Average Rate of Return (better)',
                'Internal Rate of Return (sound)',
                'Net Present Value (most theoretically sound)'
            ]
        },
        {
            id: 'seq-t13-7',
            stem: 'Put the steps in correct order for sensitivity analysis:',
            steps: [
                'Calculate base case outcome (using original estimates)',
                'Identify key uncertain variables',
                'Vary one variable at a time (optimistic/pessimistic)',
                'Recalculate outcome with new variable value',
                'Compare range of outcomes to assess impact',
                'Identify which variable has greatest sensitivity'
            ]
        },
        {
            id: 'seq-t13-8',
            stem: 'Put the steps in correct order for contribution-based special order decision:',
            steps: [
                'Calculate contribution per unit for special order',
                'Calculate total contribution (contribution per unit × quantity)',
                'Identify incremental fixed costs of special order',
                'Calculate net contribution (total contribution minus incremental fixed costs)',
                'Accept if net contribution positive, reject if negative'
            ]
        }
    ],
    keyword: [
        {
            id: 'kw-t13-1',
            stem: 'Explain time-series forecasting and its use in business. [4 marks]',
            marks: 4,
            keywords: ['historical data', 'trend', 'seasonal', 'cyclical', 'patterns', 'moving averages', 'predictions'],
            modelAnswer: 'Time-series forecasting uses historical data to identify patterns for predicting future values: (1) Trend - the long-term direction of data (increasing, decreasing, or stable); (2) Seasonal - regular patterns that repeat annually (e.g., higher sales in December); (3) Cyclical - patterns linked to economic cycles (boom/recession). Moving averages (3-point or 5-point) smooth out random variations while preserving seasonal patterns. This method is useful when historical data exists and patterns are relatively stable, though it cannot predict structural changes or disruptive events.'
        },
        {
            id: 'kw-t13-2',
            stem: 'Compare payback period and Net Present Value (NPV) as investment appraisal methods. [6 marks]',
            marks: 6,
            keywords: ['payback', 'NPV', 'time value', 'discounting', 'cash flows', 'uncertainty', 'risk', 'acceptance criteria'],
            modelAnswer: 'Payback period measures the time to recover initial investment, ignoring time value of money and cash flows beyond payback. Advantages: simple to calculate, easy to understand, focuses on liquidity and risk reduction. Disadvantages: ignores time value (values distant future equal to recent), ignores profitability beyond payback, may reject profitable long-term projects. NPV accounts for time value through discounting and considers all cash flows, representing shareholder value creation. Advantages: theoretically sound, considers project life, incorporates risk through discount rate. Disadvantages: complex calculation, sensitive to discount rate choice, requires accurate long-term forecasts. Choice depends on context: payback for high-risk/uncertain projects or liquidity-constrained businesses; NPV for standard projects where time value matters.'
        },
        {
            id: 'kw-t13-3',
            stem: 'Explain how critical path analysis helps with project management. [4 marks]',
            marks: 4,
            keywords: ['critical path', 'float', 'dependencies', 'minimum duration', 'resource allocation', 'bottlenecks', 'completion time'],
            modelAnswer: 'Critical path analysis helps project management by: (1) Determining minimum duration - the critical path (longest path) sets the earliest possible completion date, enabling realistic scheduling and deadlines; (2) Identifying critical activities - activities with zero float cannot be delayed without extending the project, focusing management attention on key tasks; (3) Resource allocation - float on non-critical activities shows where resources can be flexibly deployed or temporarily reassigned; (4) Managing dependencies - the network diagram shows relationships, preventing activities starting before predecessors finish; (5) Identifying bottlenecks - critical path highlights where the project is most constrained, allowing proactive management. This tool is essential for complex projects with many interdependent activities.'
        },
        {
            id: 'kw-t13-4',
            stem: 'Discuss the limitations of investment appraisal tools. [6 marks]',
            marks: 6,
            keywords: ['estimates', 'assumptions', 'uncertainty', 'discount rate', 'qualitative factors', 'strategic', 'subjective', 'risk'],
            modelAnswer: 'All investment appraisal tools share fundamental limitations: (1) Reliance on estimates - cash flows, project duration, and discount rates are estimates that may be inaccurate; (2) Assumptions about future - tools assume stable conditions that may not hold (constant discount rate, stable markets); (3) Inability to model uncertainty - while sensitivity analysis helps, tools cannot fully capture the range of possible futures; (4) Exclusion of qualitative factors - tools struggle to quantify strategic fit, brand alignment, or competitive response which affect success; (5) Subjective choices - selecting discount rates and time horizons involves management judgment, creating potential for bias; (6) Strategic considerations - some projects (e.g., entry barriers, strategic positioning) have benefits not captured by financial metrics. Despite limitations, using multiple tools together improves decision quality by providing different perspectives.'
        },
        {
            id: 'kw-t13-5',
            stem: 'Explain how contribution analysis supports business decision making. [4 marks]',
            marks: 4,
            keywords: ['contribution', 'break-even', 'fixed costs', 'margin of safety', 'product mix', 'special orders', 'profitability', 'capacity'],
            modelAnswer: 'Contribution analysis supports decision making by: (1) Break-even determination - showing the sales volume needed to cover all costs, revealing margin of safety (buffer between break-even and forecast); (2) Product mix decisions - comparing contribution per unit of different products to determine optimal production allocation when capacity is limited; (3) Pricing decisions - understanding how price and volume affect total contribution to maximise profit; (4) Special order evaluation - accepting one-off customer orders if the contribution exceeds incremental fixed costs, ensuring overall profitability is improved rather than harmed. Contribution per unit is a powerful tool for understanding how each sale contributes to fixed cost recovery and profit generation.'
        },
        {
            id: 'kw-t13-6',
            stem: 'Evaluate the use of decision trees for business decisions. [6 marks]',
            marks: 6,
            keywords: ['decision tree', 'sequential decisions', 'outcomes', 'probabilities', 'expected monetary value', 'uncertainty', 'complexity', 'visual'],
            modelAnswer: 'Decision trees are useful for complex sequential decisions under uncertainty: (1) Structure - they map out decision pathways, showing where choices must be made and what outcomes follow; (2) Probabilities - incorporating likelihood of each outcome allows calculation of Expected Monetary Value (EMV), quantifying risk; (3) Visual presentation - the diagram makes complex decisions accessible and understandable to stakeholders; (4) Flexibility - trees can be updated as new information emerges, unlike fixed calculations. Limitations include: becoming unwieldy with many branches, difficulty in estimating probabilities (subjective), and inability to model strategic or qualitative factors. Best for decisions with clear sequential structure and quantifiable probabilities.'
        },
        {
            id: 'kw-t13-7',
            stem: 'Explain how sensitivity analysis complements other investment appraisal tools. [4 marks]',
            marks: 4,
            keywords: ['sensitivity', 'variables', 'robustness', 'break-even', 'NPV', 'payback', 'risk', 'assumptions'],
            modelAnswer: 'Sensitivity analysis complements other tools by testing the robustness of decisions: (1) Variable testing - systematically changing key assumptions (sales volume, price, costs) one at a time shows how sensitive outcomes (NPV, payback) are to each factor; (2) Risk identification - the variable with greatest impact on the decision represents the primary risk requiring management attention; (3) Break-even movement - showing how break-even point shifts with different assumptions helps in operational planning and pricing; (4) Confidence building - narrow ranges for key variables indicate more predictable outcomes than wide uncertainty ranges. This analysis helps managers understand which assumptions matter most, supporting more informed and confident decisions rather than single-point estimates.'
        },
        {
            id: 'kw-t13-8',
            stem: 'Discuss the role of float in critical path analysis and project management. [4 marks]',
            marks: 4,
            keywords: ['float', 'slack time', 'critical activities', 'resource allocation', 'flexibility', 'dependencies', 'project duration', 'bottlenecks'],
            modelAnswer: 'Float (slack time) plays a vital role in project management: (1) Resource flexibility - positive float on non-critical activities allows resources to be redeployed when needed, accommodating delays without affecting project completion; (2) Risk absorption - buffer time helps absorb unexpected problems (resource shortages, delays in preceding tasks) without extending the critical path; (3) Workload balancing - managers can use float to smooth workloads, avoiding idle periods and overburdening; (4) Dependency management - understanding float helps sequence activities appropriately and respect dependencies. However, excessive float may indicate poor estimation or over-allocation of resources. Zero float on critical activities provides no buffer - these must be managed carefully as delays directly impact project completion.'
        },
        {
            id: 'kw-t13-9',
            stem: 'Evaluate the importance of using multiple investment appraisal tools together. [6 marks]',
            marks: 6,
            keywords: ['multiple tools', 'consistency', 'NPV', 'payback', 'ARR', 'IRR', 'robustness', 'confidence', 'decision quality'],
            modelAnswer: 'Using multiple investment appraisal tools together significantly improves decision quality: (1) Consistency check - when NPV, payback, ARR, and IRR all indicate acceptance (or rejection), confidence in the decision increases; conflicting signals suggest need for deeper analysis; (2) Different perspectives - each tool provides different insights: NPV considers time value and total cash flows, payback focuses on liquidity and risk, ARR provides percentage return measure, IRR shows actual return rate; (3) Robustness testing - sensitivity analysis and scenario testing alongside main tools show how decisions hold up under different assumptions, reducing risk of unexpected outcomes; (4) Tool selection - understanding strengths and weaknesses (payback ignores time value, ARR is simplistic) helps in choosing appropriate tool for specific projects; (5) Combined approach - no single tool is perfect; using multiple methods provides more complete picture than relying on any one alone. While adding complexity, this approach supports better, more defensible decisions in complex situations.'
        }
    ],
    flashcards: [
        {
            id: 'fc-t13-1',
            front: 'What is time-series forecasting?',
            back: 'Using historical data to identify trend, seasonal, and cyclical patterns for predicting future values.',
            topic: 'Time-series forecasting'
        },
        {
            id: 'fc-t13-2',
            front: 'What is payback period?',
            back: 'The time required for cumulative cash inflows to equal the initial investment.',
            topic: 'Payback period'
        },
        {
            id: 'fc-t13-3',
            front: 'What is Net Present Value (NPV)?',
            back: 'The sum of discounted future cash flows minus initial investment, representing shareholder value created.',
            topic: 'Net present value'
        },
        {
            id: 'fc-t13-4',
            front: 'What is Average Rate of Return (ARR)?',
            back: 'Average annual profit expressed as a percentage of initial investment.',
            topic: 'Average rate of return'
        },
        {
            id: 'fc-t13-5',
            front: 'What is the Internal Rate of Return (IRR)?',
            back: 'The discount rate that makes NPV equal zero, representing the projects actual annual return.',
            topic: 'Average rate of return'
        },
        {
            id: 'fc-t13-6',
            front: 'What is a decision tree?',
            back: 'A visual diagram showing decision points, possible outcomes, probabilities, and expected values for sequential decisions under uncertainty.',
            topic: 'Decision trees'
        },
        {
            id: 'fc-t13-7',
            front: 'What is critical path analysis?',
            back: 'A project management technique using network diagrams to identify the longest path (critical path) and float for activities.',
            topic: 'Critical path analysis'
        },
        {
            id: 'fc-t13-8',
            front: 'What is float in project management?',
            back: 'The amount of time an activity can be delayed without affecting overall project completion time (slack time).',
            topic: 'Float and critical activities'
        },
        {
            id: 'fc-t13-9',
            front: 'What is contribution?',
            back: 'Selling price minus variable cost per unit, showing how each unit contributes to fixed costs and profit.',
            topic: 'Contribution as a decision tool'
        },
        {
            id: 'fc-t13-10',
            front: 'What is sensitivity analysis?',
            back: 'Testing how sensitive an investment decision is to changes in key assumptions (sales volume, price, costs) one variable at a time.',
            topic: 'Forecasting limitations'
        },
        {
            id: 'fc-t13-11',
            front: 'What are the main limitations of investment appraisal tools?',
            back: 'Reliance on estimates and assumptions, inability to model uncertainty, exclusion of qualitative/strategic factors, subjective choices.',
            topic: 'Tool limitations'
        },
        {
            id: 'fc-t13-12',
            front: 'What is Expected Monetary Value (EMV)?',
            back: 'The weighted average of possible outcomes in a decision tree, calculated by multiplying each outcome value by its probability.',
            topic: 'Decision trees'
        },
        {
            id: 'fc-t13-13',
            front: 'What is a scatter graph?',
            back: 'A graph plotting two variables to show correlation (relationship) and trend, used for forecasting.',
            topic: 'Scatter graphs and trend lines'
        },
        {
            id: 'fc-t13-14',
            front: 'What are moving averages?',
            back: 'A method to smooth out fluctuations in time-series data by averaging consecutive data points (3-point or 5-point).',
            topic: 'Time-series forecasting'
        },
        {
            id: 'fc-t13-15',
            front: 'What is the correlation coefficient?',
            back: 'A measure ranging from -1 to +1 indicating how strongly two variables are related (perfect positive to perfect negative).',
            topic: 'Scatter graphs and trend lines'
        },
        {
            id: 'fc-t13-16',
            front: 'When should a project be accepted based on NPV?',
            back: 'When NPV is positive (creates shareholder value), assuming no overriding strategic considerations.',
            topic: 'Net present value'
        },
        {
            id: 'fc-t13-17',
            front: 'What are the advantages of payback period?',
            back: 'Simple to calculate, easy to understand, focuses on liquidity and quick recovery of investment, good for high-risk projects.',
            topic: 'Payback period'
        },
        {
            id: 'fc-t13-18',
            front: 'What are the disadvantages of payback period?',
            back: 'Ignores time value of money, ignores cash flows after payback, may reject profitable long-term projects.',
            topic: 'Tool limitations'
        },
        {
            id: 'fc-t13-19',
            front: 'What determines if an activity is on the critical path?',
            back: 'Zero float - any delay would extend the project duration. Critical activities have no slack time.',
            topic: 'Float and critical activities'
        },
        {
            id: 'fc-t13-20',
            front: 'What is seasonal variation?',
            back: 'Regular patterns in data that repeat annually (e.g., peak sales in December for retailers, summer for tourism).',
            topic: 'Time-series forecasting'
        },
        {
            id: 'fc-t13-21',
            front: 'What is the discount rate in NPV?',
            back: 'The rate used to reduce future cash flows to present value, reflecting the cost of capital and risk of the project.',
            topic: 'Net present value'
        },
        {
            id: 'fc-t13-22',
            front: 'What is the difference between critical path and non-critical activities?',
            back: 'Critical path activities have zero float (no slack). Non-critical activities have positive float (delay possible without affecting completion).',
            topic: 'Float and critical activities'
        },
        {
            id: 'fc-t13-23',
            front: 'What is cyclical variation?',
            back: 'Patterns in data linked to economic cycles (boom and recession), typically lasting several years.',
            topic: 'Time-series forecasting'
        },
        {
            id: 'fc-t13-24',
            front: 'How does contribution help with product mix decisions?',
            back: 'By comparing contribution per unit of different products, businesses can determine optimal allocation of limited capacity to maximise total contribution.',
            topic: 'Contribution as a decision tool'
        },
        {
            id: 'fc-t13-25',
            front: 'What is a trend?',
            back: 'The long-term direction of data - increasing, decreasing, or stable over time.',
            topic: 'Time-series forecasting'
        },
        {
            id: 'fc-t13-26',
            front: 'What are the advantages of NPV?',
            back: 'Accounts for time value of money, considers all cash flows, represents shareholder value creation, theoretically sound.',
            topic: 'Net present value'
        },
        {
            id: 'fc-t13-27',
            front: 'What are the disadvantages of NPV?',
            back: 'Complex calculation, sensitive to discount rate choice, requires accurate long-term forecasts, may not capture strategic benefits.',
            topic: 'Tool limitations'
        },
        {
            id: 'fc-t13-28',
            front: 'When is a special order decision appropriate?',
            back: 'When the contribution from accepting a one-off order exceeds the incremental fixed costs incurred, improving overall profitability.',
            topic: 'Contribution as a decision tool'
        },
        {
            id: 'fc-t13-29',
            front: 'What is activity-on-node diagram?',
            back: 'A visual network diagram where activities are represented by nodes and arrows, used for critical path analysis.',
            topic: 'Critical path analysis'
        },
        {
            id: 'fc-t13-30',
            front: 'What is the main purpose of investment appraisal?',
            back: 'To systematically evaluate potential projects or investments using quantitative methods to support informed decision making and resource allocation.',
            topic: 'Tool limitations'
        }
    ]
};
