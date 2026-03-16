export const note_olevel_business_4_4_7 = {
  pdfPath: '/notes/olevel/CIE IGCSE Business/Operations Management/using-break-even-analysis-to-make-decisions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Define and calculate margin of safety, analyse how changes in price, variable costs, and fixed costs affect the break-even point, evaluate the limitations of break-even analysis, and understand its use in business decisions.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Using Break-Even Analysis to Make Decisions', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Break-even analysis is not just a calculation — it is a decision-making tool. Managers use it to evaluate the financial viability of new products, assess the impact of price changes, negotiate loans with banks, and plan production targets. Understanding how break-even output changes when business conditions change is a key IGCSE skill.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Margin of Safety', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'The <b>margin of safety</b> is the amount by which actual output (or sales) <b>exceeds</b> the break-even output. It measures how much output could fall before the business begins to make a loss. A large margin of safety means the business is well protected; a small margin of safety means it is close to break-even and vulnerable to any drop in sales.'
      }
    },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        latex: '\\text{Margin of Safety} = \\text{Actual Output} - \\text{Break-Even Output}',
        caption: 'Margin of safety — how far above break-even current output is'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Margin of Safety',
        text: 'The bakery has a break-even output of 600 loaves per month. If it currently produces and sells 800 loaves:\n\nMargin of safety = 800 − 600 = 200 loaves\n\nThis means output could fall by up to 200 loaves before the bakery begins to make a loss. If demand fell by 200 loaves (to exactly 600), it would only break even.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'How Changes Affect the Break-Even Point', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'Managers need to understand how different business decisions shift the break-even point. This helps them make informed pricing, sourcing, and capacity decisions.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Effect of Changes on Break-Even Output and the Break-Even Chart',
        headers: ['Change', 'Effect on BEP', 'Effect on Break-Even Chart'],
        rows: [
          [
            'Selling price increases',
            'BEP falls (contribution per unit rises → fewer units needed to cover FC)',
            'Revenue line becomes steeper; crosses TC line earlier (left); margin of safety increases'
          ],
          [
            'Selling price decreases',
            'BEP rises (contribution per unit falls → more units needed)',
            'Revenue line becomes flatter; crosses TC line later (right); margin of safety decreases'
          ],
          [
            'Variable costs increase',
            'BEP rises (contribution per unit falls)',
            'TC line becomes steeper (higher gradient); BEP moves right; margin of safety decreases'
          ],
          [
            'Variable costs decrease',
            'BEP falls (contribution per unit rises)',
            'TC line becomes less steep; BEP moves left; margin of safety increases'
          ],
          [
            'Fixed costs increase',
            'BEP rises (more units needed to cover higher FC)',
            'FC line and TC line both shift upward; BEP moves right'
          ],
          [
            'Fixed costs decrease',
            'BEP falls',
            'FC line and TC line both shift downward; BEP moves left'
          ]
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Uses of Break-Even Analysis', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Pricing decisions</b> — Managers can calculate the BEP at different price points to assess whether a proposed price will be profitable. If the BEP output is unrealistically high, the price may need to be raised.' },
          { text: '<b>New product or business start-up decisions</b> — Entrepreneurs use break-even analysis to assess whether a new venture is viable before investing. It shows the minimum sales target needed.' },
          { text: '<b>Loan applications</b> — Banks and investors require break-even analysis in a business plan to assess financial risk and how quickly the business will become profitable.' },
          { text: '<b>"What-if" scenario planning</b> — Managers can model the effect of cost changes (e.g. a supplier raising prices) on profitability and decide whether to absorb costs or pass them to customers.' },
          { text: '<b>Setting sales targets</b> — The BEP output becomes the minimum sales target; the margin of safety shows how much room there is for underperformance.' }
        ]
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Limitations of Break-Even Analysis', level: 2 }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<b>Assumes all output is sold</b> — Break-even analysis assumes that every unit produced is sold at the listed price. In reality, some units may not sell, or may require discounting, which means actual revenue is lower than predicted.' },
          { text: '<b>Assumes costs are linear</b> — The model assumes variable costs rise at a constant rate per unit (a straight line). In reality, bulk discounts on materials may lower variable costs at higher volumes; alternatively, overtime wages may increase variable cost per unit at high output.' },
          { text: '<b>Assumes a single product at a fixed price</b> — Real businesses sell multiple products at varying prices and to different customer segments, making a single BEP unrealistic.' },
          { text: '<b>Static model</b> — The chart is based on a snapshot in time. Costs and prices change constantly; the break-even chart becomes outdated quickly in volatile markets.' },
          { text: '<b>Ignores qualitative factors</b> — Break-even analysis is purely financial. It does not account for customer loyalty, brand image, employee morale, or market conditions.' },
          { text: '<b>May give false confidence</b> — A business at 200 units above BEP (large margin of safety on paper) may still face cash-flow problems if customers pay late, even if it is technically profitable.' }
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Key Limitation: Assumes Linear Costs',
        text: 'Break-even analysis draws costs as straight lines. In reality, economies of scale reduce average variable costs at high output. Overtime rates increase variable labour costs at capacity. This makes the model an approximation, not a precise prediction.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Margin of safety = Actual output − Break-even output. It shows how much output can fall before a loss is made. Increasing selling price or reducing costs lowers the BEP; decreasing price or raising costs raises it. Break-even analysis is useful for pricing decisions, business planning, and loan applications, but has limitations: it assumes all output is sold, costs are linear, and uses a single selling price.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Margin of safety = Actual output − BEP. Rising prices or falling costs reduce BEP; falling prices or rising costs increase BEP. Break-even is useful but assumes all output is sold and costs are linear.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-1',
        prompt: 'What is the formula for margin of safety?',
        answer: 'Margin of Safety = Actual Output − Break-Even Output'
      },
      {
        id: 'cue-2',
        blockId: 'call-1',
        prompt: 'A business has a BEP of 600 units and currently produces 800 units. What is the margin of safety?',
        answer: 'Margin of safety = 800 − 600 = 200 units. Output could fall by 200 units before the business breaks even.'
      },
      {
        id: 'cue-3',
        blockId: 'tbl-1',
        prompt: 'If a business raises its selling price, what happens to the BEP and why?',
        answer: 'The BEP falls because contribution per unit increases, so fewer units need to be sold to cover fixed costs. The revenue line becomes steeper on the chart.'
      },
      {
        id: 'cue-4',
        blockId: 'list-2',
        prompt: 'Give three limitations of break-even analysis.',
        answer: 'Any three of: assumes all output is sold; assumes costs are linear; uses a single fixed price; is a static model (becomes outdated); ignores qualitative factors; multiple-product businesses are harder to model.'
      },
      {
        id: 'cue-5',
        blockId: 'list-1',
        prompt: 'Give two ways break-even analysis is used in business decisions.',
        answer: 'Any two of: pricing decisions, assessing new product viability, supporting loan applications, "what-if" scenario planning, setting minimum sales targets.'
      }
    ]
  },
  evidence: [],
  mentions: []
};
