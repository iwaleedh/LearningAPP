export const note_business_3_13_9 = {
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
    { id: 'call2', type: 'callout', data: { style: 'worked', title: 'Special Order Example', text: 'Normal Price: £50.\nVariable Cost: £20.\nFixed Costs: £1000.\nA charity requests a 100-unit bulk order for £30. Since £30 > £20 VC, it generates a £10 contribution per unit. The order will generate £1,000 extra contribution. It should be accepted.' } },
    { id: 'h3', type: 'heading', data: { text: 'Product Discontinuation', level: 3 } },
    { id: 'p4', type: 'paragraph', data: { text: 'If a product is making a net loss, traditional logic says "discontinue it." But using contribution, if the product still makes a **positive contribution**, dropping it would reduce overall company profit, as the fixed costs would simply shift to other product lines to pay off.' } },
    { id: 'sum', type: 'summary', data: { text: 'Contribution analysis separates fixed and variable costing. By focusing pure contribution margin, managers can make profitable tactical choices regarding special low-price orders or product lines operating at a net loss.' } },
    { id: 'enr-worked1', type: 'callout', data: { style: 'worked', title: 'Multi-Product Contribution: Bakery', text: 'A bakery sells 3 products: Croissants (£2.50 price, £1.00 VC = £1.50 contribution), Muffins (£2.00 price, £0.60 VC = £1.40 contribution), Cakes (£8.00 price, £3.50 VC = £4.50 contribution). Fixed costs = £900/month. To break even: FC/avg contribution = 900/2.47 ≈ 364 units. Cakes have highest contribution per unit — consider promoting these.' } },
    { id: 'enr-worked2', type: 'callout', data: { style: 'worked', title: 'Everyday Example: Phone Cases', text: 'Student selling phone cases: sells for £8, material cost £2.50, packaging £0.50. Contribution = £8−£3 = £5 per case. Fixed costs (website, table at market) = £60/month. Break-even = 60/5 = 12 cases/month.' } },
    { id: 'enr-tip1', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Contribution as a Decision Tool', text: 'Contribution per unit tells you which product to focus on AND how many units to sell to cover fixed costs. In make-or-buy decisions: make if contribution > buying-in cost per unit.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "For contribution costing, calculate: Contribution = Price \u2212 Variable Cost. Make decisions based on contribution per unit or contribution per *limiting factor* (e.g., per machine hour if capacity-constrained). Accept special orders if contribution > 0 and spare capacity exists\u2014this operational analysis impresses."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Ignoring fixed costs when analyzing special orders. While contribution analysis is correct, accepting too many low-margin special orders can mean fixed costs aren't covered in total. Always reconcile contribution decisions to full profitability and ensure long-term sustainability."
      }
    }
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
};