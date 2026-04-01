export const note_business_1_2_0 = {
  noteId: 'note:business:1:2:0',
  subject: 'business',
  unitCode: 'WBS11',
  unitId: 1,
  topicId: 2,
  subtopicIndex: 0,
  title: 'Demand determinants',
  pdfPath: '/notes/business/wbs11-2.pdf',
  blocks: [
      { id: 'obj-1', type: 'objective', data: { text: 'Understand the concept of demand and explain its main determinants.' } },
      { id: 'h-1', type: 'heading', data: { text: 'What is Demand?', level: 2 } },
      { id: 'p-1', type: 'paragraph', data: { text: 'In economics and business, <strong>demand</strong> is the quantity of a good or service that consumers are willing and able to buy at a given price, in a given time period.' } },
      { id: 'c-1', type: 'callout', data: { style: 'key', title: 'Effective Demand', text: 'Demand must be effective, meaning it is backed by the financial ability to pay. Desire without purchasing power does not constitute economic demand.' } },
      { id: 'h-2', type: 'heading', data: { text: 'Determinants of Demand (Factors shifting the demand curve)', level: 2 } },
      { id: 'l-1', type: 'list', data: { style: 'bullet', items: [
        { text: '<strong>Price:</strong> A change in price causes a movement along the demand curve, not a shift. Lower prices generally increase quantity demanded.' },
        { text: '<strong>Incomes:</strong> As incomes rise, demand for normal goods increases. Demand for inferior goods (like value brands) may fall as consumers switch to higher-quality substitutes.' },
        { text: '<strong>Prices of related goods:</strong> Price of substitutes (competing products) and complements (products used together).' },
        { text: '<strong>Changes in Tastes and Fashions:</strong> Consumer preferences driven by trends, media, or health awareness can drastically shift demand.' },
        { text: '<strong>Demographic Changes:</strong> An aging population or population growth affects demand for specific types of goods.' },
        { text: '<strong>Advertising and Branding:</strong> Successful marketing campaigns can increase brand loyalty and demand.' }
      ]}},
      { id: 'c-2', type: 'callout', data: { style: 'warning', title: 'Common Misconception', text: 'Do not confuse a change in price (causes a <strong>movement</strong> along the demand curve) with a change in other determinants (causes a <strong>shift</strong> of the entire demand curve).' } },
      { id: 't-1', type: 'comparisonTable', data: { 
        caption: 'Substitutes vs Complements',
        headers: ['Type of Good', 'Definition', 'Example effect on Demand'],
        rows: [
          ['Substitute', 'An alternative product', 'If price of Coca-Cola rises, demand for Pepsi increases.'],
          ['Complement', 'A product used alongside another', 'If price of printers falls, demand for ink cartridges increases.']
        ]
      }},
      { id: 's-1', type: 'summary', data: { text: 'Demand is determined by various factors beyond just price, including income, related goods, fashion, demographics, and advertising. Understanding these helps businesses forecast sales and plan strategies.' } },
      { "id": "enr-p-seasonality", "type": "paragraph", "data": { "text": "<strong>Seasonality</strong> and <strong>external shocks</strong> also shift the demand curve. Seasonal products (e.g. gas and electricity) see lower demand in warmer months. Unexpected events — such as the Covid-19 pandemic causing panic-buying of toilet rolls — can abruptly shift demand curves to the right, only normalising once the shock passes." } },
      { "id": "enr-svg-supply-demand", "type": "svg", "data": { "svg": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 320' font-family='Arial,sans-serif'><rect width='400' height='320' fill='#0f172a' rx='8'/><text x='200' y='22' text-anchor='middle' font-size='13' font-weight='bold' fill='#1e293b'>Supply and Demand</text><line x1='50' y1='280' x2='370' y2='280' stroke='#334155' stroke-width='2'/><line x1='50' y1='30' x2='50' y2='280' stroke='#334155' stroke-width='2'/><text x='210' y='300' text-anchor='middle' font-size='11' fill='#64748b'>Quantity</text><text x='20' y='160' font-size='11' fill='#64748b' transform='rotate(-90,20,160)'>Price</text><line x1='60' y1='60' x2='350' y2='260' stroke='#ef4444' stroke-width='2.5'/><text x='355' y='258' font-size='11' fill='#ef4444' font-weight='bold'>S</text><line x1='60' y1='260' x2='350' y2='60' stroke='#3b82f6' stroke-width='2.5'/><text x='355' y='58' font-size='11' fill='#3b82f6' font-weight='bold'>D</text><circle cx='205' cy='160' r='6' fill='#10b981'/><text x='215' y='155' font-size='10' fill='#10b981' font-weight='bold'>Equilibrium</text><line x1='50' y1='160' x2='205' y2='160' stroke='#10b981' stroke-width='1' stroke-dasharray='4'/><line x1='205' y1='160' x2='205' y2='280' stroke='#10b981' stroke-width='1' stroke-dasharray='4'/><text x='190' y='294' font-size='9' fill='#10b981'>Q*</text><text x='30' y='163' font-size='9' fill='#10b981'>P*</text></svg>", "caption": "Supply and Demand diagram: equilibrium price (P*) and quantity (Q*) where S and D curves intersect" } },
      { "id": "enr-brand-demand", "type": "callout", "data": { "style": "tip", "title": "Real World: Coca-Cola Advertising", "text": "Coca-Cola spends an average of $4 billion per year on advertising and branding. This sustained investment shifts its demand curve to the right and makes demand more price inelastic. Brand-loyal Coke drinkers refuse to switch to Pepsi even at a higher price, reducing the risk of revenue loss from a price increase." } },
      { "id": "enr-stud-demand", "type": "callout", "data": { "style": "worked", "title": "Student Example: Oat Milk Goes Mainstream", "text": "As plant-based diets became fashionable among health-conscious students, demand for oat milk shifted right — more was demanded at every price. This is a non-price shift driven by changing tastes, not a movement along the existing demand curve." } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "Edexcel always defines Demand = quantity consumers are willing/able to buy at various prices in a given period. Examiners test understanding of determinants: income, tastes, substitutes/complements, age, expectations. In 4\u20136 mark questions, expect 'explain why demand for product X increased' \u2014 answer by identifying ONE determinant and linking it to demand shift. Use the Law of Demand: price \u2191, quantity demanded \u2193."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students confuse 'demand' (willingness/ability to buy) with 'desire/want' (which isn't demand without purchasing power). Common error in essays: 'demand for luxury goods increased' without explaining WHY (income rise, fashion trend, celebrity endorsement). Edexcel expects clear cause-and-effect. Also, many forget that demand curves slope downward for normal goods \u2014 confirm this assumption for every question."
      }
    }
    ],
  recall: {
    enabled: true,
    summaryText: "Demand represents the quantity of a product consumers are willing and able to buy at various prices. Key determinants include price, income, prices of substitutes and complements, fashion and tastes, advertising, and demographics.",
    cues: [
      { id: 'cue_1', blockId: 'c-1', prompt: 'Define effective demand.', answer: 'The willingness to buy a product backed by the <strong>ability to pay</strong> for it.' },
      { id: 'cue_2', blockId: 'h-2', prompt: 'Name 4 non-price determinants of demand.', answer: 'Income, prices of substitutes/complements, fashion/tastes, advertising, demographics.' },
      { id: 'cue_3', blockId: 't-1', prompt: 'How does a rise in the price of a substitute affect demand for a good?', answer: 'It causes an <strong>increase</strong> (outward shift) in the demand for the good.' },
      { id: 'cue_4', blockId: 'l-1', prompt: 'What is an inferior good?', answer: 'A good whose demand falls when consumer incomes rise (e.g., store-brand basics).' }
    ],
    ready: true
  },
  evidence: [],
  mentions: [],
  createdAt: '2026-03-15T21:21:19.178Z',
  lastEditedAt: '2026-03-15T21:21:19.178Z'
};
