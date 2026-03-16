export const note_business_2_8_2 = {
  pdfPath: '/notes/business/wbs12-8.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Evaluate methods a business can use to improve profit, including increasing revenue, reducing costs and changing the product mix, and assess the conditions under which each approach is most appropriate.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Methods to Improve Profit', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Since <b>Profit = Revenue &minus; Total Costs</b>, a business can improve profit by increasing revenue, reducing costs, or doing both simultaneously. However, each approach involves trade-offs and risks. For example, raising prices may boost revenue per unit but reduce sales volume; cutting costs may damage product quality or employee morale. The most appropriate method depends on the firm\'s market position, cost structure and strategic objectives.' }
    },
    {
      id: 'h-revenue',
      type: 'heading',
      data: { text: '1. Increasing Revenue', level: 2 }
    },
    {
      id: 'p-revenue',
      type: 'paragraph',
      data: { text: 'Revenue can be increased by raising the <b>price</b> per unit or selling a larger <b>volume</b> of units (or both). Price increases work best when the product is price inelastic — i.e. demand is relatively unresponsive to price changes (e.g. premium brands, essential services). Volume increases can be achieved through promotional activity, entering new markets (domestic or international), launching new products, or improving distribution. Revenue growth is generally the preferred long-term route to improved profitability as it signals business growth rather than cost-cutting.' }
    },
    {
      id: 'list-revenue',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Raise selling price</b> — effective if demand is price inelastic; may reduce volume if elastic.' },
          { text: '<b>Increase sales volume</b> — through advertising, promotions, new market entry or product development.' },
          { text: '<b>Launch new products</b> — diversification reduces reliance on existing revenue streams.' },
          { text: '<b>Enter new markets</b> — geographic expansion (international markets) or new customer segments.' },
          { text: '<b>Improve customer retention</b> — loyalty schemes, better after-sales service; reduces customer acquisition cost.' }
        ]
      }
    },
    {
      id: 'h-costs',
      type: 'heading',
      data: { text: '2. Reducing Costs', level: 2 }
    },
    {
      id: 'p-costs',
      type: 'paragraph',
      data: { text: 'Cost reduction directly improves profit at every level of the income statement. <b>Variable costs</b> (e.g. raw materials, direct labour) can be cut by renegotiating supplier contracts, switching to cheaper suppliers, improving labour productivity, or automating production. <b>Fixed costs</b> (e.g. rent, administration) can be reduced by downsizing, moving to cheaper premises, or outsourcing non-core activities. However, cost-cutting carries risks: cheaper suppliers may deliver lower-quality inputs, redundancies harm morale, and cutting marketing may weaken the brand.' }
    },
    {
      id: 'list-costs',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Reduce cost of sales</b> — renegotiate supplier contracts; source cheaper materials; improve production efficiency.' },
          { text: '<b>Reduce operating expenses</b> — downsize premises; outsource non-core functions; cut admin overhead.' },
          { text: '<b>Improve labour productivity</b> — training, automation, lean production techniques (e.g. just-in-time).' },
          { text: '<b>Economies of scale</b> — increasing production volume lowers average unit cost for larger firms.' },
          { text: '<b>Reduce waste</b> — kaizen (continuous improvement) and lean manufacturing principles.' }
        ]
      }
    },
    {
      id: 'h-mix',
      type: 'heading',
      data: { text: '3. Changing the Product Mix', level: 2 }
    },
    {
      id: 'p-mix',
      type: 'paragraph',
      data: { text: 'The <b>product mix</b> refers to the range of products a business sells. Each product has a different profit margin. By shifting its mix towards higher-margin products (and away from low-margin or loss-making lines), a business can improve overall profitability even with no change in total revenue or costs. Product mix decisions require careful analysis of each product\'s contribution to overhead costs and its strategic importance (e.g. a low-margin product may attract customers who then buy high-margin items).' }
    },
    {
      id: 'list-mix',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Focus on high-margin products</b> — redirect marketing investment and production capacity.' },
          { text: '<b>Discontinue loss-making lines</b> — unless they generate important customer footfall or brand association.' },
          { text: '<b>Add premium variants</b> — premium-priced versions of existing products (e.g. "Pro" editions) improve average selling price.' },
          { text: '<b>Bundle products</b> — packaging low- and high-margin products together can increase overall margin per transaction.' }
        ]
      }
    },
    {
      id: 'tbl-methods',
      type: 'comparisonTable',
      data: {
        caption: 'Comparing Methods to Improve Profit',
        headers: ['Method', 'Advantages', 'Disadvantages / Risks'],
        rows: [
          ['Raise price', 'Immediate profit boost if demand holds', 'May lose price-sensitive customers; competitors may undercut'],
          ['Increase volume', 'Revenue and profit growth simultaneously', 'Requires investment in marketing/production; may increase costs'],
          ['Reduce variable costs', 'Direct improvement in gross profit margin', 'May compromise quality; supplier relationship damage'],
          ['Reduce fixed costs', 'Improves operating profit margin', 'Short-term disruption; potential reputational damage from redundancies'],
          ['Shift product mix', 'Improves profitability without changing revenue', 'Risk of neglecting core products; customers may not buy premium lines']
        ]
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Impact of Cost Reduction',
        text: 'Alpha Ltd: Revenue = £5,000,000; Cost of Sales = £3,000,000; Operating Expenses = £1,200,000.\nCurrent Operating Profit = £5,000,000 &minus; £3,000,000 &minus; £1,200,000 = £800,000 (OPM = 16%)\n\nAlpha renegotiates supplier contracts, reducing Cost of Sales by 5% (saving £150,000).\nNew Operating Profit = £800,000 + £150,000 = <b>£950,000</b> (OPM = <b>19%</b>)\n\nConclusion: Even a modest cost reduction significantly improves operating profit and margin.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'For evaluation questions on methods to improve profit, consider context: a business in a competitive market with price-elastic demand should focus on cost reduction rather than price rises. A business with a strong brand and loyal customers has more scope to raise prices. Always link method to the specific circumstances described in the question.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'A business can improve profit by <b>increasing revenue</b> (raising price or volume), <b>reducing costs</b> (cutting variable or fixed costs), or <b>changing its product mix</b> to favour higher-margin products. Each method carries trade-offs: revenue strategies require investment or favourable market conditions, cost-cutting risks quality or morale, and product mix shifts require careful analysis. The most effective approach depends on the firm\'s market position, elasticity of demand and strategic goals.' }
    },
    {
      id: 'enr-t8a-2-h-tradeoffs',
      type: 'heading',
      data: { text: 'Short-Run vs Long-Run Trade-offs', level: 2 }
    },
    {
      id: 'enr-t8a-2-p-tradeoffs',
      type: 'paragraph',
      data: { text: 'When choosing methods to improve profit, managers must consider the <b>time horizon</b>. Some actions boost profit quickly but create long-term damage; others require short-term investment but deliver sustained profit growth. For example, cutting the marketing budget immediately reduces costs and raises short-run profit, but may erode brand awareness and reduce future sales revenue. Similarly, automating production incurs upfront capital expenditure that depresses profit temporarily but lowers unit costs for years ahead. Evaluation questions often reward students who can identify these <b>opportunity costs</b> and consider which stakeholders are most affected by each approach.' }
    },
    {
      id: 'enr-t8a-2-list-tradeoffs',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Cutting marketing spend</b> — boosts profit now; risks long-run brand erosion and loss of market share.' },
          { text: '<b>Reducing R&D investment</b> — saves costs immediately; shrinks the innovation pipeline and future revenue potential.' },
          { text: '<b>Automation (capital expenditure)</b> — reduces profit short-term via depreciation and loan interest; lowers unit costs long-term.' },
          { text: '<b>Discounting prices</b> — increases volume short-term; may set a floor that is hard to reverse and permanently harms margins.' },
          { text: '<b>Staff redundancies</b> — reduces payroll costs immediately; may harm morale, productivity and employer reputation.' }
        ]
      }
    },
    {
      id: 'enr-t8a-2-callout-jd',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Real Business — JD Sports: Product Mix Shift',
        text: 'JD Sports transformed its profitability in the 2010s by shifting its product mix away from budget sportswear towards premium, exclusive Nike and Adidas lines available only in its stores. By negotiating <b>exclusive distribution deals</b> for high-demand limited-edition products (e.g. Air Jordans, Yeezy ranges), JD could charge premium prices with minimal discounting. This product mix shift dramatically improved gross profit margins without requiring a general price rise across the range — a textbook example of using product mix to drive profitability.'
      }
    },
    {
      id: 'enr-t8a-2-callout-student',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Relatable Example — School Tuck Shop',
        text: 'Imagine you run a school tuck shop selling crisps (GPM 20%) and branded chocolate bars (GPM 15%). A friend suggests adding homemade flapjacks (GPM 65%). By replacing the low-margin chocolates with flapjacks you improve your overall product mix without needing more customers or higher prices. Revenue stays the same but gross profit rises significantly — and flapjacks are unique, giving you a competitive advantage competitors cannot easily copy. This is the product mix strategy in action.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Profit = Revenue − Total Costs. Improve profit by increasing revenue, reducing costs, or changing the product mix to favour higher-margin products.',
    cues: [
      { id: 'cue-1', blockId: 'p-intro', prompt: 'State the fundamental equation linking profit, revenue and costs, and identify the two broad ways to improve profit.', answer: 'Profit = Revenue − Total Costs. Profit can be improved by increasing revenue (price or volume) or by reducing costs (variable or fixed).' },
      { id: 'cue-2', blockId: 'list-revenue', prompt: 'Give three specific ways a business can increase revenue.', answer: 'Raise selling price (if demand is price inelastic); increase sales volume through marketing; enter new markets; launch new products; improve customer retention.' },
      { id: 'cue-3', blockId: 'list-costs', prompt: 'What is the risk of reducing costs by switching to a cheaper supplier?', answer: 'Cheaper suppliers may provide lower-quality inputs, which could reduce product quality, damage brand reputation and ultimately lose customers.' },
      { id: 'cue-4', blockId: 'p-mix', prompt: 'Explain what is meant by changing the product mix to improve profit.', answer: 'Shifting sales towards higher-margin products (and away from low-margin lines) improves overall profitability even without changing total revenue, by increasing the average margin earned per sale.' },
      { id: 'cue-5', blockId: 'tbl-methods', prompt: 'Why might raising prices fail to improve profit in a competitive market?', answer: 'If demand is price elastic, raising prices will reduce sales volume by a proportionally larger amount, so total revenue and profit may actually fall. Competitors may also undercut the price rise.' },
      { id: 'cue-6', blockId: 'callout-we1', prompt: 'If a firm reduces its cost of sales by £150,000, how does this affect operating profit, assuming all other figures remain unchanged?', answer: 'Operating profit increases by exactly £150,000, since cost of sales falls and no other costs change. The operating profit margin also rises.' }
    ]
  },
  evidence: [],
  mentions: []
};
