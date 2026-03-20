export const note_olevel_business_4_4_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Business/Operations Management/break-even-analysis.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Define break-even output, apply the break-even formula, understand contribution per unit, interpret a break-even chart, and construct a break-even diagram with all key components labelled.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Break-Even Analysis', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: '<b>Break-even analysis</b> is a financial technique that identifies the level of output at which a business\'s total revenue exactly equals its total costs — making neither a profit nor a loss. This output level is called the <b>break-even point (BEP)</b>. Below the break-even point, the business makes a <b>loss</b>; above it, the business makes a <b>profit</b>. Break-even analysis is used by entrepreneurs planning new ventures, managers evaluating pricing decisions, and banks assessing loan applications.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Contribution Per Unit', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: '<b>Contribution per unit</b> is the amount each unit sold "contributes" towards paying fixed costs (and eventually to profit once fixed costs are covered). It is the difference between the selling price and the variable cost per unit.'
      }
    },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        latex: '\\text{Contribution per Unit} = \\text{Selling Price} - \\text{Variable Cost per Unit}',
        caption: 'Contribution per unit: what each sale contributes towards fixed costs and profit'
      }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'For example, if a product sells for $20 and the variable cost is $8, contribution per unit = $20 − $8 = <b>$12</b>. Every unit sold generates $12 to contribute towards the fixed costs.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'The Break-Even Formula', level: 2 }
    },
    {
      id: 'eq-2',
      type: 'equation',
      data: {
        latex: '\\text{Break-Even Output} = \\frac{\\text{Fixed Costs}}{\\text{Contribution per Unit}}',
        caption: 'Break-even output = Fixed Costs ÷ (Selling Price − Variable Cost per Unit)'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Worked Example', level: 3 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Break-Even Calculation',
        text: 'A bakery sells loaves of bread for $4 each. Variable cost per loaf = $1.50. Fixed costs = $1,500 per month.\n\nStep 1: Contribution per unit = $4.00 − $1.50 = $2.50\nStep 2: Break-even output = $1,500 ÷ $2.50 = 600 loaves per month\n\nInterpretation: The bakery must sell 600 loaves per month to cover all costs. If it sells fewer than 600, it makes a loss. If it sells more, it makes a profit.\n\nProfit check at 800 loaves:\n• Revenue = 800 × $4 = $3,200\n• Total variable costs = 800 × $1.50 = $1,200\n• Total costs = $1,500 + $1,200 = $2,700\n• Profit = $3,200 − $2,700 = $500'
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'The Break-Even Chart', level: 2 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: 'A <b>break-even chart</b> is a graph with output on the x-axis and costs/revenue (in $) on the y-axis. It plots three lines: the <b>fixed cost line</b> (horizontal), the <b>total cost line</b> (starts at fixed cost on y-axis, slopes upward), and the <b>revenue line</b> (starts at origin, slopes upward). Where the revenue line crosses the total cost line is the <b>break-even point</b>.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="520" height="340" fill="#0f172a" rx="8"/>
  <!-- Axes -->
  <line x1="70" y1="290" x2="480" y2="290" stroke="#334155" stroke-width="2"/>
  <line x1="70" y1="290" x2="70" y2="30" stroke="#334155" stroke-width="2"/>
  <!-- Axis labels -->
  <text x="275" y="318" text-anchor="middle" font-size="12" fill="#334155">Output (units)</text>
  <text x="20" y="165" text-anchor="middle" font-size="12" fill="#334155" transform="rotate(-90,20,165)">Costs / Revenue ($)</text>
  <!-- Y axis values -->
  <text x="65" y="293" text-anchor="end" font-size="10" fill="#64748b">0</text>
  <text x="65" y="233" text-anchor="end" font-size="10" fill="#64748b">1500</text>
  <text x="65" y="173" text-anchor="end" font-size="10" fill="#64748b">3000</text>
  <text x="65" y="113" text-anchor="end" font-size="10" fill="#64748b">4500</text>
  <text x="65" y="53" text-anchor="end" font-size="10" fill="#64748b">6000</text>
  <!-- X axis values -->
  <text x="150" y="305" text-anchor="middle" font-size="10" fill="#64748b">200</text>
  <text x="230" y="305" text-anchor="middle" font-size="10" fill="#64748b">400</text>
  <text x="310" y="305" text-anchor="middle" font-size="10" fill="#64748b">600</text>
  <text x="390" y="305" text-anchor="middle" font-size="10" fill="#64748b">800</text>
  <text x="470" y="305" text-anchor="middle" font-size="10" fill="#64748b">1000</text>
  <!-- Fixed cost line (horizontal at 1500 = y:233) -->
  <line x1="70" y1="233" x2="480" y2="233" stroke="#6366f1" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="484" y="237" font-size="10" fill="#6366f1">Fixed costs</text>
  <!-- Total cost line: starts at (0,1500)=y:233, at output 1000 total cost=3500, y=233-(2000/6000*260)=233-86.7=146 -->
  <!-- Scale: 6000 maps to 260px height (y from 290 to 30 = 260px). 1500 = 65px from bottom = y:225.
       At output 1000: TC = 1500 + 1000*1.5 = 3000. y = 290 - (3000/6000)*260 = 290-130 = 160 -->
  <line x1="70" y1="233" x2="480" y2="160" stroke="#f59e0b" stroke-width="2.5"/>
  <text x="484" y="164" font-size="10" fill="#f59e0b">Total costs</text>
  <!-- Revenue line: starts at origin (70,290), at output 1000: revenue=4000. y=290-(4000/6000)*260=290-173=117 -->
  <line x1="70" y1="290" x2="480" y2="117" stroke="#10b981" stroke-width="2.5"/>
  <text x="484" y="121" font-size="10" fill="#10b981">Revenue</text>
  <!-- Break-even point: output=600. x = 70 + (600/1000)*(410) = 70+246=316.
       Revenue at 600 = 2400. y = 290-(2400/6000)*260 = 290-104 = 186 -->
  <circle cx="316" cy="186" r="6" fill="#ef4444"/>
  <text x="322" y="183" font-size="10" fill="#ef4444" font-weight="600">BEP</text>
  <!-- Vertical dashed line to x-axis from BEP -->
  <line x1="316" y1="186" x2="316" y2="290" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,2"/>
  <text x="316" y="303" text-anchor="middle" font-size="10" fill="#ef4444">600</text>
  <!-- Loss region label -->
  <text x="193" y="260" text-anchor="middle" font-size="11" fill="#ef4444">Loss</text>
  <!-- Profit region label -->
  <text x="398" y="150" text-anchor="middle" font-size="11" fill="#10b981">Profit</text>
  <!-- Title -->
  <text x="275" y="22" text-anchor="middle" font-size="13" font-weight="600" fill="#1e293b">Break-Even Chart (Bakery Example)</text>
</svg>`,
        caption: 'Break-even chart for the bakery. BEP = 600 loaves. Below 600: loss region. Above 600: profit region.'
      }
    },
    {
      id: 'h-6',
      type: 'heading',
      data: { text: 'Components of the Break-Even Chart', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Fixed cost line</b> — Horizontal line starting from the fixed cost value on the y-axis. Does not change with output.' },
          { text: '<b>Total cost line</b> — Starts at the fixed cost on the y-axis (at zero output, you still pay fixed costs). Slopes upward as variable costs accumulate with each unit produced.' },
          { text: '<b>Revenue line</b> — Starts at the origin (zero output = zero revenue). Slopes upward at a rate equal to the selling price.' },
          { text: '<b>Break-even point</b> — Where the revenue line intersects the total cost line. Can be read off as an output level on the x-axis or as a revenue/cost value on the y-axis.' },
          { text: '<b>Loss region</b> — The area to the left of the BEP where total costs exceed revenue.' },
          { text: '<b>Profit region</b> — The area to the right of the BEP where revenue exceeds total costs.' }
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Exam Tip: Drawing the Break-Even Chart',
        text: 'Always start the total cost line at the fixed cost value (not at zero). The revenue line always starts at the origin. Label ALL lines and clearly mark the BEP. IGCSE examiners award marks for correct construction, labels, and identification of break-even output.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Break-even output is where total revenue = total costs (no profit, no loss). Contribution per unit = Selling price − Variable cost per unit. Break-even output = Fixed costs ÷ Contribution per unit. The break-even chart shows three lines: fixed cost (horizontal), total cost (from FC on y-axis), and revenue (from origin). The BEP is where revenue crosses total costs. Left of BEP = loss; right = profit.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'BEP = Fixed Costs ÷ Contribution per unit. Contribution = Selling price − Variable cost. The break-even chart shows fixed cost, total cost, and revenue lines; BEP is where revenue meets total costs.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-1',
        prompt: 'What is the formula for contribution per unit?',
        answer: 'Contribution per unit = Selling Price − Variable Cost per Unit'
      },
      {
        id: 'cue-2',
        blockId: 'eq-2',
        prompt: 'What is the formula for break-even output?',
        answer: 'Break-even output = Fixed Costs ÷ Contribution per unit'
      },
      {
        id: 'cue-3',
        blockId: 'call-1',
        prompt: 'A bakery sells bread at $4, variable cost $1.50, fixed costs $1,500. What is the break-even output?',
        answer: 'Contribution = $4 − $1.50 = $2.50. Break-even = $1,500 ÷ $2.50 = 600 loaves per month.'
      },
      {
        id: 'cue-4',
        blockId: 'para-4',
        prompt: 'Where does the total cost line start on a break-even chart and why?',
        answer: 'The total cost line starts at the fixed cost value on the y-axis (not at the origin) because even at zero output, fixed costs must still be paid.'
      },
      {
        id: 'cue-5',
        blockId: 'list-1',
        prompt: 'What does the area to the left of the BEP represent on the break-even chart?',
        answer: 'The area to the left of the BEP is the loss region — total costs exceed revenue at these output levels.'
      }
    ]
  },
  evidence: [],
  mentions: []
};
