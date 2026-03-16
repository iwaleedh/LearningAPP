export const note_business_2_7_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Determine fixed, variable, and total costs.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Understanding Business Costs', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'To calculate profit and make informed pricing decisions, businesses must accurately identify and separate their costs into **fixed** and **variable** categories.' } },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Fixed Costs (FC)', text: 'Costs that do not change with the level of output or sales. They must be paid even if the business produces nothing.' } },
    { id: 'call-2', type: 'callout', data: { style: 'key', title: 'Variable Costs (VC)', text: 'Costs that change directly in proportion to the level of output or sales. As production increases, variable costs increase.' } },
    { id: 'tbl-1', type: 'comparisonTable', data: {
      headers: ['Feature', 'Fixed Costs', 'Variable Costs'],
      rows: [
        ['Definition', 'Independent of output level', 'Varies directly with output level'],
        ['Examples', 'Rent, insurance, salaries, interest payments', 'Raw materials, piece-rate labour, packaging, delivery costs'],
        ['Payment Frequency', 'Often regular (e.g., monthly)', 'Depends on production runs'],
        ['At Zero Output', 'Still incurred', 'Zero']
      ]
    }},
    { id: 'h-2', type: 'heading', data: { text: 'Total Costs', level: 3 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'The **Total Cost (TC)** is the sum of all fixed and variable costs incurred in the production process.' } },
    { id: 'eq-1', type: 'equation', data: { html: 'Total Cost (TC) = Fixed Costs (FC) + Total Variable Costs (TVC)', caption: 'Equation for Total Cost' } },
    { id: 'eq-2', type: 'equation', data: { html: 'Total Variable Cost = Variable Cost per Unit × Output', caption: 'Equation for Total Variable Cost' } },
    { id: 'call-3', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: '<p>A bakery produces 1,000 loaves of bread. The rent for the building is £500 per month (fixed cost). The ingredients and packaging for each loaf cost £0.30 (variable cost per unit).</p><ul>\n<li>Total Variable Costs = 1,000 × £0.30 = £300</li>\n<li>Total Costs = £500 + £300 = £800</li>\n</ul>' } },
    { id: 'call-4', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'When classifying costs, remember that "salary" is usually a fixed cost (paid regardless of output), while "wages" (especially piece-rate or hourly) are often variable.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Costs are split into fixed (do not change with output) and variable (change with output). Total Cost is the sum of both.' } },
    { id: 'enr-t7a-eq-avg-cost', type: 'equation', data: { html: 'Average Cost (Unit Cost) = <span class="nb-frac"><span class="nb-num">Total Cost (TC)</span><span class="nb-den">Quantity Produced</span></span>', caption: 'Average cost falls as fixed costs are spread across more units (economies of scale)' } },
    { id: 'enr-t7a-p-avg-cost', type: 'paragraph', data: { text: '<strong>Average cost</strong> (unit cost) is how much it costs to produce each individual unit. As output rises, fixed costs are spread over more units, so average cost <em>falls</em> — this is the basis of economies of scale. A business aiming to compete on price should look to drive down its average cost through higher output.' } },
    { id: 'enr-t7a-call-netflix', type: 'callout', data: { style: 'key', title: 'Real Brand: Netflix', text: '<strong>Netflix has enormous fixed costs</strong> — billions annually on content licensing, original productions, and global server infrastructure. Yet its variable cost per additional subscriber is close to zero (no extra staff, no physical materials). Signing up 1 million more subscribers barely changes total costs, meaning each new subscriber generates almost pure contribution. This is why scale matters so much in subscription businesses.' } },
    { id: 'enr-t7a-call-student', type: 'callout', data: { style: 'tip', title: 'Relatable Example: School Bake Sale', text: 'Running a school bake sale: the stall hire fee (£10) is a <strong>fixed cost</strong> — you pay it whether you sell 0 or 100 cupcakes. The flour, sugar, and cases per cupcake are <strong>variable costs</strong>. If each cupcake costs £0.40 in ingredients and you bake 50, Total Costs = £10 + (£0.40 × 50) = £30. Average cost per cupcake = £30 ÷ 50 = £0.60.' } }
  ],
  recall: {
    enabled: true,
    summaryText: 'TC = FC + (VC per unit × output). FC stays same, VC varies.',
    cues: [
      { id: 'c-1', blockId: 'call-1', prompt: 'What are fixed costs?', answer: 'Costs that remain constant regardless of the level of output (e.g., rent, insurance).' },
      { id: 'c-2', blockId: 'call-2', prompt: 'What are variable costs?', answer: 'Costs that change directly with the level of production (e.g., raw materials, packaging).' },
      { id: 'c-3', blockId: 'eq-1', prompt: 'State the formula for Total Costs.', answer: 'Total Cost = Fixed Costs + Total Variable Costs.' },
      { id: 'c-4', blockId: 'tbl-1', prompt: 'Give two examples of variable costs.', answer: 'Raw materials, piece-rate wages, packaging, delivery costs.' }
    ]
  },
  evidence: []
};