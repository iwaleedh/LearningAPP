export const note_business_2_7_5 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Interpret break-even charts.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Visualising Break-even', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'A **break-even chart** graphically represents costs and revenue across different levels of output. It provides a visual tool for managers to see at a glance where profit is made, where losses occur, and the exact break-even point.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Key Lines on a Break-Even Chart', level: 3 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '**Fixed Costs (FC) Line:** A horizontal line. It remains standard regardless of the output on the X-axis.' },
      { text: '**Total Costs (TC) Line:** Starts at the point where the Fixed Costs line meets the Y-axis (since at output zero, TC = FC) and slopes upwards as variable costs are added alongside production.' },
      { text: '**Total Revenue (TR) Line:** Starts at Zero on the origin (because if 0 items are sold, 0 revenue is made) and slopes upwards steeply. The slope represents the selling price.' }
    ]}},
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'The Break-Even Intersection', text: 'The break-even point is the exact co-ordinate where the Total Revenue (TR) line intersects the Total Cost (TC) line. Dropping a line straight down from this intersection to the X-axis gives the break-even output.' } },
    { id: 'p-2', type: 'paragraph', data: { text: 'Areas on the chart to identify:' } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [
      { text: '**Area of Loss:** The space to the left of the break-even point, where the TC line is higher than the TR line.' },
      { text: '**Area of Profit:** The space to the right of the break-even point, where the TR line rises above the TC line.' },
      { text: '**Margin of Safety:** The horizontal distance along the X-axis between the actual output level and the break-even point.' }
    ]}},
    { id: 'call-2', type: 'callout', data: { style: 'tip', title: 'Chart Manipulation', text: 'If a firm raises its price, the TR line gets steeper, shifting the break-even point to the left (fewer sales needed). If Variable Costs rise, the TC line gets steeper, pushing the break-even point to the right.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Break-even charts map TR and TC to visually identify the break-even point, margin of safety, and areas of profit and loss.' } },
    { id: 'enr-t7a-h-limitations', type: 'heading', data: { text: 'Limitations of Break-Even Analysis', level: 3 } },
    { id: 'enr-t7a-list-limitations', type: 'list', data: { style: 'bullet', items: [
      { text: '<strong>Assumes all output is sold:</strong> In practice, unsold stock builds up, so actual revenue may be lower than the TR line suggests.' },
      { text: '<strong>Assumes a constant selling price:</strong> Businesses often discount bulk orders or run promotions, changing the slope of the TR line.' },
      { text: '<strong>Assumes variable costs are constant per unit:</strong> Bulk-purchasing economies of scale can lower unit VC at higher outputs, flattening the TC line.' },
      { text: '<strong>Static snapshot:</strong> A break-even chart reflects one moment; any change in price, cost structure, or market conditions requires an entirely new chart to remain valid.' }
    ] } },
    { id: 'enr-t7a-call-business-plan', type: 'callout', data: { style: 'key', title: 'Real World: Break-Even in Business Plans', text: 'When a start-up approaches a <strong>bank for a loan or an investor for equity</strong>, lenders routinely require break-even analysis as part of the business plan. It demonstrates the minimum sales level required for viability, lets lenders gauge default risk, and shows the margin of safety under different demand scenarios. A well-modelled break-even analysis significantly increases the credibility of a funding application.' } },
    { id: 'enr-t7a-call-student', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Drawing Break-Even Charts', text: 'Always label all three lines (FC, TC, TR), mark the BEP clearly with a dot, and drop a dotted vertical line to the x-axis to show the break-even output. If the question states an actual output level, draw a bracket on the x-axis between that output and the BEP to represent the <strong>margin of safety</strong>. Missing these labels costs easy marks.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Break-even charts plot output (x-axis) vs cost/revenue (y-axis). The intersection of total cost and revenue lines is the break-even point. Interpret the gap between lines: below BEP = loss (loss triangle shaded); above BEP = profit. Visual interpretation adds sophistication."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Misreading break-even charts: e.g., reading profit where loss exists, or confusing fixed cost line with total cost line. In exams, carefully label axes and lines. When asked to 'analyse a break-even chart,' describe the cost structure, identify BEP, and assess profitability margins."
      }
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Break-even occurs where the TR and TC lines intersect. Profit lies to the right, loss to the left.',
    cues: [
      { id: 'c-1', blockId: 'list-1', prompt: 'Why does the Total Cost line not start at zero?', answer: 'Because even at zero output, the business still incurs Fixed Costs.' },
      { id: 'c-2', blockId: 'call-1', prompt: 'How is the break-even point identified on a chart?', answer: 'It is the point where the Total Revenue line crosses the Total Cost line.' },
      { id: 'c-3', blockId: 'list-2', prompt: 'Where is the area of profit shown on the chart?', answer: 'It is the area to the right of the break-even point, where the TR line is above the TC line.' },
      { id: 'c-4', blockId: 'call-2', prompt: 'What happens to the break-even point on a chart if selling price increases?', answer: 'The Total Revenue line steeper, shifting the break-even point to the left (it requires fewer units to break even).' }
    ]
  },
  evidence: []
};