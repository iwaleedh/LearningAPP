export const note_business_2_7_6 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Evaluate the limitations of break-even analysis.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Limitations and Assumptions of Break-even Analysis', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'While break-even analysis is an excellent starting point for business planning, it relies on several simplistic assumptions that usually do not reflect the complexities of the real world.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Key Limitations', level: 3 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '**Assumes all stock is sold:** The model assumes that every item produced will be sold, ignoring unsold inventory and stock wastage which do not generate revenue.' },
      { text: '**Static prices:** It assumes the selling price remains constant at all levels of output. In reality, to sell higher quantities, a business may have to offer discounts or bulk-buy deals (meaning the TR line should curve, not be straight).' },
      { text: '**Linear costs:** It assumes variable costs stay the same. It ignores economies of scale (where bulk buying materials lowers average VC) or capacity limits (where staff overtime suddenly increases VC).' },
      { text: '**Ignores qualitative factors:** Break-even only looks at numbers. It ignores staff motivation, brand loyalty, or the quality of the product—all of which affect actual success.' },
      { text: '**Single product focus:** It is difficult to use for businesses that sell multiple products with different prices and varying costs.' }
    ]}},
    { id: 'call-1', type: 'callout', data: { style: 'warning', title: 'Dynamic environments', text: 'Break-even only shows a snapshot based on expected data. If rent unexpectedly rises or a new competitor halves their prices, the entire break-even analysis must be recalculated immediately.' } },
    { id: 'call-2', type: 'callout', data: { style: 'tip', title: 'Evaluation Skill', text: 'When evaluating an investment decision (like whether to launch a new product), acknowledge that break-even is highly useful for setting targets (e.g. knowing minimum viable sales), but emphasize that because of these unrealistic assumptions, it should only be one part of a wider business plan.' } },
    { "id": "enr-t7b-h-contrib", "type": "heading", "data": { "text": "Contribution per Unit and the Break-Even Formula", "level": 3 } },
    { "id": "enr-t7b-p-contrib", "type": "paragraph", "data": { "text": "<b>Contribution per unit</b> is the amount each unit sold contributes towards covering fixed costs — once fixed costs are fully covered, every additional unit contributes directly to profit. It is calculated as: Selling price − Variable cost per unit." } },
    { "id": "enr-t7b-eq-bep", "type": "equation", "data": { "html": "Break-Even Point = <span class=\"nb-frac\"><span class=\"nb-num\">Fixed Costs</span><span class=\"nb-den\">Contribution per Unit</span></span>", "caption": "Units that must be sold to cover all costs" } },
    { "id": "enr-t7b-p-mos", "type": "paragraph", "data": { "text": "The <b>margin of safety</b> is the buffer between actual output and break-even output. It shows how far sales can fall before the business starts making a loss — a higher margin of safety means lower risk." } },
    { "id": "enr-t7b-eq-mos", "type": "equation", "data": { "html": "Margin of Safety = Actual Output − Break-Even Output", "caption": "Expressed in units; tells management how much of a demand cushion exists" } },
    { "id": "enr-t7b-call-brand", "type": "callout", "data": { "style": "worked", "title": "Real World: Canterbury Glamping", "text": "Canterbury Glamping charges £95 per pod per night with variable costs of £19 and annual fixed costs of £55,000.<br><ul><li>Contribution = £95 − £19 = £76 per pod</li><li>BEP = £55,000 ÷ £76 = 724 pods per year</li><li>If they actually rent 900 pods: Margin of Safety = 900 − 724 = <b>176 pods</b></li></ul>This buffer of 176 pods means occupancy must fall by over 19% before the business makes a loss — a reassuring figure for investors." } },
    { "id": "enr-t7b-call-student", "type": "callout", "data": { "style": "tip", "title": "Think of it like exam marks", "text": "The break-even point is like your exam pass mark (e.g. 40%). The margin of safety is how far above that you scored. If you scored 68% with a pass mark of 40%, your margin of safety is 28 marks — you had room to spare before failing. The higher the margin, the less stressful the situation." } },
    { id: 'sum-1', type: 'summary', data: { text: 'Break-even analysis is limited because it assumes constant selling prices, constant variable costs, and that all production is successfully sold.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Key limitations: break-even assumes constant price and variable cost per unit (ignores bulk discounts, economies of scale), assumes linear relationships (unrealistic), ignores cash timing (profit \u2260 cash), and assumes single-product scenarios. Name and explain these assumptions explicitly."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Over-relying on break-even analysis in real scenarios. A firm breaking even in profit terms may face cash-flow crisis if customers delay payment or if upfront investment in inventory is required. Always triangulate break-even with cash-flow forecasts."
      }
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Break-even assumes constant prices, linear costs, no unsold stock, and usually looks at single products.',
    cues: [
      { id: 'c-1', blockId: 'list-1', prompt: 'State one limitation regarding sales in break-even analysis.', answer: 'It assumes that all goods produced are sold, ignoring unsold inventory.' },
      { id: 'c-2', blockId: 'list-1', prompt: 'Why is the assumption of a constant selling price unrealistic?', answer: 'Because businesses often have to offer discounts to achieve higher sales volumes.' },
      { id: 'c-3', blockId: 'list-1', prompt: 'How do economies of scale limit break-even analysis?', answer: 'Break-even assumes variable costs are constant, but economies of scale can reduce variable costs at higher outputs.' },
      { id: 'c-4', blockId: 'call-2', prompt: 'Why is break-even analysis still useful despite its flaws?', answer: 'It provides a clear baseline target and helps assess the preliminary viability and risk margin of an idea before launch.' }
    ]
  },
  evidence: []
};