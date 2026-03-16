export const note_business_2_7_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Calculate and understand contribution and the break-even point.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Contribution', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: '**Contribution** looks at the profit made on individual products. It is the amount of money left over after variable costs have been subtracted from sales revenue. This remaining money "contributes" towards paying off fixed costs and, eventually, generating profit.' } },
    { id: 'eq-1', type: 'equation', data: { html: 'Contribution per unit = Selling Price per unit − Variable Cost per unit', caption: '' } },
    { id: 'eq-2', type: 'equation', data: { html: 'Total Contribution = Total Sales Revenue − Total Variable Costs', caption: '' } },
    { id: 'call-1', type: 'callout', data: { style: 'worked', title: 'Contribution Example', text: 'A firm sells units at £15 each. The variable cost per unit is £6. <br>Contribution per unit = £15 - £6 = £9. <br>If they sell 1,000 units, Total Contribution = £9,000.' } },
    { id: 'h-2', type: 'heading', data: { text: 'The Break-even Point', level: 2 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'The **break-even point** is the level of output or sales at which total revenue matches total costs. At this point, the business is making neither a profit nor a loss (Profit = £0).' } },
    { id: 'eq-3', type: 'equation', data: { html: 'Break-even Point (units) = Fixed Costs ÷ Contribution per unit', caption: 'Break-even formula' } },
    { id: 'call-2', type: 'callout', data: { style: 'worked', title: 'Break-even Calculation', text: '<p>A cafe sells coffee for £3.00, variable costs are £1.00 per coffee, and fixed costs are £1,500.</p><ul>\n<li>Contribution per unit = £3.00 - £1.00 = £2.00</li>\n<li>Break-even = £1,500 ÷ £2.00 = 750 units</li>\n</ul><p>The cafe must sell 750 coffees to break even.</p>' } },
    { id: 'call-3', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'In exams, calculating contribution first is the most reliable way to find the break-even point. If the answer is a decimal, ALWAYS round up to the next whole number, because you cannot sell a fraction of a product to break even.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Contribution is selling price less variable cost. The break-even point is fixed costs divided by contribution per unit, representing zero profit or loss.' } },
    { id: 'enr-t7a-p-contribution-profit', type: 'paragraph', data: { text: 'An important distinction: <strong>contribution is not profit</strong>. Contribution first goes towards covering all fixed costs. Only once fixed costs are fully met does additional contribution convert to profit. Therefore: <em>Profit = Total Contribution − Fixed Costs</em>. If total contribution is less than fixed costs, the business makes a loss.' } },
    { id: 'enr-t7a-eq-profit', type: 'equation', data: { html: 'Profit = Total Contribution − Fixed Costs', caption: 'Once all fixed costs are covered, every additional unit sold adds directly to profit' } },
    { id: 'enr-t7a-call-glamping', type: 'callout', data: { style: 'worked', title: 'Real Scenario: Canterbury Glamping', text: '<p>Revenue per pod per night: £95 | Variable cost per pod: £19 | Annual fixed costs: £55,000</p><ul><li>Contribution per pod = £95 − £19 = <strong>£76</strong></li><li>Break-even = £55,000 ÷ £76 = 723.68 → rounded up to <strong>724 pod-nights per year</strong></li><li>Above 724 pod-nights, each additional pod night adds £76 to profit</li></ul>' } },
    { id: 'enr-t7a-call-student', type: 'callout', data: { style: 'tip', title: 'Relatable Example: School Tuck Shop', text: 'You sell energy bars at £1.20; variable cost per bar = £0.45. Monthly fixed costs (stall hire + bags) = £52.50.<br>Contribution per bar = £1.20 − £0.45 = <strong>£0.75</strong>.<br>Break-even = £52.50 ÷ £0.75 = <strong>70 bars per month</strong>. Every bar sold above 70 earns you £0.75 in pure profit.' } }
  ],
  recall: {
    enabled: true,
    summaryText: 'Contribution per unit = SP - VC. Break-even = FC / Contribution.',
    cues: [
      { id: 'c-1', blockId: 'eq-1', prompt: 'State the formula for contribution per unit.', answer: 'Selling Price - Variable Cost per unit.' },
      { id: 'c-2', blockId: 'eq-3', prompt: 'What is the formula for the break-even point?', answer: 'Fixed Costs ÷ Contribution per unit.' },
      { id: 'c-3', blockId: 'p-2', prompt: 'What is meant by the break-even point?', answer: 'The level of sales where total revenue exactly equals total costs (no profit, no loss).' },
      { id: 'c-4', blockId: 'p-1', prompt: 'What does total contribution pay for?', answer: 'It first goes towards covering Fixed Costs. Once they are fully covered, it contributes to Profit.' }
    ]
  },
  evidence: []
};