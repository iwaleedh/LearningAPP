export const note_business_3_13_1 = {
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
    { id: 'p3', type: 'paragraph', data: { text: 'Once the line of best fit (trend line) is established on a scatter graph, a firm can use it to forecast future values (extrapolation). By extending the line, managers can predict the reliant variable\'s value given a certain change in the independent variable.' } },
    { id: 'call2', type: 'callout', data: { style: 'warning', title: 'Watch Out: Correlation vs. Causation', text: 'A strong positive correlation does not mean one factor causes the other. A third, unknown factor may be influencing both variables.' } },
    { id: 'sum', type: 'summary', data: { text: 'Scatter graphs are used to identify the correlation between two variables. A line of best fit allows managers to visualize this relationship and extrapolate to forecast future business performance.' } },
    { id: 'enr-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example: Extrapolating a Trend Line', text: 'A café plots advertising spend (x) against weekly revenue (y) using a scatter graph. The line of best fit shows a positive correlation — every £100 extra on ads generates £400 extra revenue. Extrapolating: if they spend £500 on ads, predicted revenue = £2,000.' } },
    { id: 'enr-warning', type: 'callout', data: { style: 'warning', title: 'Correlation ≠ Causation', text: 'Correlation does not imply causation. Ice cream sales and drowning rates both rise in summer — they correlate but one does not cause the other. Always check there is a logical causal link before using the trend line for decisions.' } },
    { id: 'enr-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Interpreting Scatter Graphs', text: 'Exam tip: When drawing or interpreting scatter graphs, always state: direction (positive/negative), strength (strong/weak), and whether extrapolation is reliable.' } }
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
};