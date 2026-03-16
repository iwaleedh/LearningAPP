export const note_business_2_7_4 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand and calculate the margin of safety.' } },
    { id: 'h-1', type: 'heading', data: { text: 'What is the Margin of Safety?', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'The **margin of safety** represents the difference between actual (or expected) sales and the break-even level of sales. It indicates how much demand could fall before a business begins operating at a loss.' } },
    { id: 'eq-1', type: 'equation', data: { html: 'Margin of Safety = Actual (or Forecast) Sales Volume − Break-even Output', caption: 'Formula for Margin of Safety' } },
    { id: 'call-1', type: 'callout', data: { style: 'worked', title: 'Calculation Example', text: 'A factory’s break-even point is 5,000 units. They are currently producing and selling 8,000 units.<br>Margin of Safety = 8,000 - 5,000 = **3,000 units**.<br>The factory can afford to lose 3,000 sales before it starts making a loss.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Significance of the Margin of Safety', level: 3 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '**Risk Assessment:** A high margin of safety means lower risk, as the business is highly likely to remain profitable even if sales slump.' },
      { text: '**Managerial Decisions:** With a high margin, managers might feel confident giving staff bonuses or investing in expansion.' },
      { text: '**Vulnerability:** A small or negative margin of safety means the business is highly vulnerable to shocks (e.g., losing a major client or an economic downturn).' }
    ]}},
    { id: 'call-2', type: 'callout', data: { style: 'tip', title: 'Evaluating Business Risk', text: 'When evaluating a business scenario, use the margin of safety to argue how secure the firm is. If it is only 5%, point out that any minor drop in demand will push them into a loss.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'The margin of safety measures the gap between current output and the break-even point, serving as a vital indicator of business risk.' } },
    { id: 'enr-t7a-p-mos-pct', type: 'paragraph', data: { text: 'The margin of safety can also be expressed as a <strong>percentage of actual sales</strong>, which makes it easier to compare risk levels across different businesses regardless of size. A margin of safety of 5% is precarious; one of 50% is very comfortable.' } },
    { id: 'enr-t7a-eq-mos-pct', type: 'equation', data: { html: 'Margin of Safety (%) = <span class="nb-frac"><span class="nb-num">Actual Sales − Break-even Sales</span><span class="nb-den">Actual Sales</span></span> × 100', caption: 'Expresses vulnerability as a share of current sales output' } },
    { id: 'enr-t7a-call-ebike', type: 'callout', data: { style: 'worked', title: 'Real Scenario: Electric Bicycle Manufacturer', text: '<p>Annual fixed costs: £42,000 | Selling price: £750 | Variable cost: £350 | Units sold: 240</p><ul><li>Contribution = £750 − £350 = £400</li><li>Break-even = £42,000 ÷ £400 = <strong>105 units</strong></li><li>Margin of safety = 240 − 105 = <strong>135 units</strong></li><li>Margin of safety (%) = (135 ÷ 240) × 100 = <strong>56.25%</strong> — a very comfortable buffer against falling demand.</li></ul>' } },
    { id: 'enr-t7a-call-student', type: 'callout', data: { style: 'tip', title: 'Relatable Example: Phone Case Side Hustle', text: 'You sell hand-painted phone cases online. Your break-even is 30 cases per month; last month you sold 45. Margin of safety = 45 − 30 = <strong>15 cases</strong>. That means you could afford to lose up to 15 sales — perhaps because a competitor launched a similar product — before you start making a loss. Use this figure to decide whether offering a discount promo is safe.' } }
  ],
  recall: {
    enabled: true,
    summaryText: 'Margin of safety = Current Sales - Break-even Sales. Shows how far sales can fall before a loss.',
    cues: [
      { id: 'c-1', blockId: 'p-1', prompt: 'Define the margin of safety.', answer: 'The amount by which current or expected sales exceed the break-even level of output.' },
      { id: 'c-2', blockId: 'eq-1', prompt: 'What is the formula for the margin of safety?', answer: 'Actual/Forecast Sales Volume - Break-even Output.' },
      { id: 'c-3', blockId: 'list-1', prompt: 'What does a large margin of safety imply?', answer: 'The business has lower financial risk and can absorb a significant drop in demand without making a loss.' },
      { id: 'c-4', blockId: 'list-1', prompt: 'How might managers react to a low margin of safety?', answer: 'They may look for ways to reduce costs, pause expansion plans, or launch aggressive marketing campaigns to boost sales.' }
    ]
  },
  evidence: []
};