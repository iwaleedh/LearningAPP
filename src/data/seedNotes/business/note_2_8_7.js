export const note_business_2_8_7 = {
  pdfPath: '/notes/business/wbs12-8.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify and analyse the main external causes of business failure, including economic downturns, increased competition and legislative changes, and evaluate how businesses can respond to or mitigate these threats.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'External Causes of Business Failure', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<b>External causes</b> of business failure arise from the <em>environment outside the firm</em> — forces that management cannot directly control but must respond to. A useful framework for analysing external factors is <b>PESTLE</b> (Political, Economic, Social, Technological, Legal, Environmental). Even a well-managed business with strong internal controls can fail if external conditions deteriorate severely and rapidly. However, businesses that identify and adapt to external threats early are far more likely to survive.' }
    },
    {
      id: 'h-economic',
      type: 'heading',
      data: { text: '1. Economic Downturn (Recession)', level: 2 }
    },
    {
      id: 'p-economic',
      type: 'paragraph',
      data: { text: 'A <b>recession</b> is defined as two consecutive quarters of negative GDP growth. During a recession, consumer and business confidence falls, disposable incomes decline, and spending on non-essential goods and services contracts sharply. This reduces revenue for many firms. If revenue falls below the breakeven point and costs cannot be reduced quickly enough, losses accumulate. Businesses with high fixed costs, low cash reserves or heavy debt are most vulnerable to economic downturns.' }
    },
    {
      id: 'list-economic',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Reduced consumer spending</b> — demand for luxury goods, leisure and non-essentials collapses first.' },
          { text: '<b>Falling business investment</b> — corporate clients cut spending, reducing B2B revenues.' },
          { text: '<b>Rising unemployment</b> — fewer consumers with income to spend, further suppressing demand.' },
          { text: '<b>Tighter credit availability</b> — banks become risk-averse, making it harder for businesses to borrow.' },
          { text: '<b>Currency fluctuations</b> — recessions often coincide with currency depreciation, raising import costs for businesses reliant on foreign inputs.' }
        ]
      }
    },
    {
      id: 'h-competition',
      type: 'heading',
      data: { text: '2. Increased Competition', level: 2 }
    },
    {
      id: 'p-competition',
      type: 'paragraph',
      data: { text: 'Intense competition can erode a business\\\'s market share, force price reductions (compressing margins) and reduce overall profitability. New entrants may offer lower prices or superior products; existing competitors may innovate more rapidly; globalisation exposes domestic businesses to low-cost international competitors. If a business fails to differentiate its offering or reduce costs to remain competitive, it can lose customers, revenue and ultimately viability.' }
    },
    {
      id: 'list-competition',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>New market entrants</b> — disruptive new competitors with innovative business models (e.g. streaming services vs DVD rental).' },
          { text: '<b>Price wars</b> — competitors aggressively cut prices, forcing all firms to reduce margins to stay competitive.' },
          { text: '<b>International competition</b> — low-cost producers in developing economies displace higher-cost domestic firms.' },
          { text: '<b>Substitute products</b> — technological change creates substitutes that make existing products obsolete.' },
          { text: '<b>Loss of competitive advantage</b> — unique selling points become replicated by competitors over time.' }
        ]
      }
    },
    {
      id: 'h-legislation',
      type: 'heading',
      data: { text: '3. Legislation and Regulation Changes', level: 2 }
    },
    {
      id: 'p-legislation',
      type: 'paragraph',
      data: { text: 'New laws and regulations can significantly increase a business\\\'s costs or restrict its ability to operate. Employment legislation (e.g. minimum wage increases, worker rights) raises labour costs. Environmental regulations may require costly investment in cleaner production. Tax changes (corporation tax rises, VAT changes) directly affect profitability. In some cases, regulation can effectively ban an existing product or service, forcing business model transformation. Businesses that fail to comply also face fines and reputational damage.' }
    },
    {
      id: 'h-other',
      type: 'heading',
      data: { text: '4. Other External Causes', level: 2 }
    },
    {
      id: 'list-other',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Changing consumer tastes</b> — shifts in preferences (e.g. towards ethical or sustainable products) can make established products obsolete if businesses fail to adapt.' },
          { text: '<b>Rising input costs</b> — inflation in raw material, energy or labour costs squeezes margins if prices cannot be raised correspondingly.' },
          { text: '<b>Technological disruption</b> — new technologies render existing products or services redundant (e.g. digital cameras replacing film photography).' },
          { text: '<b>Supply chain disruptions</b> — natural disasters, pandemics or geopolitical events interrupt the supply of key inputs.' },
          { text: '<b>Interest rate rises</b> — higher rates increase the cost of borrowing, raising debt servicing costs and reducing consumer spending on credit.' }
        ]
      }
    },
    {
      id: 'tbl-pestle',
      type: 'comparisonTable',
      data: {
        caption: 'External Causes Mapped to PESTLE Framework',
        headers: ['PESTLE Factor', 'Example Threat', 'Possible Business Response'],
        rows: [
          ['Political', 'Trade tariffs on imported materials', 'Source materials domestically; lobby government'],
          ['Economic', 'Recession reduces consumer spending', 'Cut costs; diversify into recession-resistant products; target value segments'],
          ['Social', 'Shift to healthier eating habits', 'Reformulate products; develop healthier ranges'],
          ['Technological', 'Online competitors disrupting retail', 'Invest in e-commerce; enhance in-store experience'],
          ['Legal', 'New minimum wage legislation increases costs', 'Improve labour productivity; automate; adjust pricing'],
          ['Environmental', 'Carbon emissions regulations', 'Invest in greener production; develop eco-friendly products']
        ]
      }
    },
    {
      id: 'tbl-internal-external',
      type: 'comparisonTable',
      data: {
        caption: 'Internal vs External Causes of Business Failure',
        headers: ['Feature', 'Internal Causes', 'External Causes'],
        rows: [
          ['Origin', 'Within the firm', 'Outside the firm'],
          ['Controllability', 'Directly within management\'s control', 'Cannot be controlled; only managed/mitigated'],
          ['Examples', 'Poor cash flow, overtrading, bad management', 'Recession, competition, new laws, rising costs'],
          ['Prevention', 'Better planning, monitoring and governance', 'Scenario planning, diversification, contingency reserves'],
          ['Warning signs', 'Financial ratios deteriorating; operational problems', 'Market data; economic indicators; regulatory announcements']
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Internal vs External',
        text: 'Many high-mark questions ask you to assess whether internal or external causes are more responsible for a specific business failure. Avoid being one-sided — most failures involve both. A strong answer acknowledges the interaction: e.g. "The recession (external) reduced demand, but the business\'s failure to maintain adequate cash reserves (internal) made it unable to survive the downturn."'
      }
    },
    {
      "id": "enr-t8b-h-digital",
      "type": "heading",
      "data": { "text": "Digital Disruption as an External Cause", "level": 2 }
    },
    {
      "id": "enr-t8b-p-digital",
      "type": "paragraph",
      "data": { "text": "<b>Digital disruption</b> describes the process by which digital technologies create new products, services and business models that rapidly displace established incumbents. For businesses in traditional sectors — retail, travel, entertainment, banking, transport — the internet, mobile commerce and platform economics have fundamentally altered what customers expect and how they choose to buy. Businesses that failed to recognise or respond to digital disruption in time have been particularly vulnerable: high fixed-cost bases (physical stores, print infrastructure, staff-heavy operations) became liabilities when digital competitors offered equivalent services at far lower marginal costs. The pace of digital change means that a profitable business model today may be commercially unviable within five years, making continuous strategic review an existential necessity." }
    },
    {
      "id": "enr-t8b-callout-brand-blockbuster",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Real World: Blockbuster vs Netflix — A Classic Disruption Failure",
        "text": "At its peak in 2004, Blockbuster operated 9,000 stores globally with 60,000 employees. Netflix launched in 1997 as a DVD-by-mail service before pivoting to online streaming in 2007. Blockbuster's management dismissed the threat — they had the opportunity to acquire Netflix for $50 million in 2000 and declined. By 2010, Blockbuster filed for bankruptcy; by 2013 all but one store had closed. The failure combined an external cause (technological change making physical DVD rental obsolete) with critical internal failures (poor strategic decisions, excessive debt from a leveraged buyout, refusal to cannibalise the existing business model). This example is a favourite exam case: always note that both external disruption AND internal management response determined the outcome."
      }
    },
    {
      "id": "enr-t8b-callout-student-dvd",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Student Example: Imagining a DVD Rental Shop",
        "text": "Picture starting a DVD rental shop in 2005: steady demand, a signed 5-year shop lease, staff hired, DVD library purchased. By 2010, Netflix streaming launches in the UK; by 2013, most of your customers have cancelled. Your fixed costs — shop lease, staff wages, DVD replacement — are fully locked in, while revenue has collapsed because the product your entire business was built around is now technologically obsolete. You did nothing wrong internally; the world simply changed around you faster than you could adapt. This illustrates pure external disruption: even perfect internal management cannot always survive a sufficiently rapid and fundamental shift in external technology or consumer behaviour."
      }
    },
    {
      "id": "enr-t8b-list-mitigation",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          { "text": "<b>Diversification</b> — operating across multiple markets or product lines reduces dependence on any single revenue stream; if one contracts, others compensate." },
          { "text": "<b>Scenario planning</b> — building financial models for multiple possible futures (recession, supply disruption, regulatory change) enables faster, more confident responses when threats materialise." },
          { "text": "<b>Maintaining cash reserves</b> — a liquidity buffer (cash holdings or unused credit facilities) allows the business to absorb external shocks without immediate insolvency." },
          { "text": "<b>Continuous PESTLE monitoring</b> — regularly scanning the external environment for emerging threats early, before they become crises that demand reactive rather than proactive responses." },
          { "text": "<b>Building strategic flexibility</b> — keeping fixed costs lean through outsourcing and flexible staffing reduces vulnerability to sudden revenue falls and makes pivoting easier." }
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'External causes of business failure are forces outside management\'s direct control. The most significant are: <b>economic downturns</b> (recessions reducing revenue), <b>increased competition</b> (eroding market share and margins), and <b>legislative changes</b> (increasing costs or restricting operations). Other external threats include changing consumer preferences, rising input costs, technological disruption and supply chain shocks. Businesses can mitigate these through diversification, scenario planning, financial reserves and continuous adaptation of strategy.' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Distinguish between CYCLICAL failure (recession hits all firms \u2013 response: cost control or seek merger) and STRUCTURAL failure (industry declining \u2013 response: exit or radical pivot). External causes demand different strategies."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Simply stating external causes (recession, competition, regulation) without evaluating mitigation ignores firm agency. Even in downturns, better-managed firms survive. Show how firms can hedge risk, diversify, or lobby regulators to adapt."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'External causes include economic recession, increased competition, legislative changes, rising costs and technological disruption — all outside direct management control.',
    cues: [
      { id: 'cue-1', blockId: 'p-economic', prompt: 'Define a recession and explain how it can cause a business to fail.', answer: 'A recession is two consecutive quarters of negative GDP growth. It reduces consumer confidence and spending, lowering business revenues. If revenue falls below the breakeven point and costs cannot be cut quickly, losses accumulate and insolvency may follow.' },
      { id: 'cue-2', blockId: 'p-competition', prompt: 'Explain two ways increased competition can threaten a business\'s survival.', answer: 'New competitors may offer lower prices, forcing all firms to cut margins (price war). Alternatively, substitutes created by technological change can make existing products obsolete, wiping out demand entirely.' },
      { id: 'cue-3', blockId: 'p-legislation', prompt: 'How can legislative changes increase a business\'s likelihood of failure?', answer: 'New laws (e.g. minimum wage rises, environmental regulations) increase operating costs. If these cannot be passed onto customers through higher prices, profit margins are squeezed. Non-compliance also risks fines and reputational damage.' },
      { id: 'cue-4', blockId: 'list-other', prompt: 'Why are rising input costs an external cause of business failure?', answer: 'Rising raw material, energy or labour costs increase the cost of sales, squeezing gross profit margins. If pricing power is limited (elastic demand or competitive market), higher costs cannot be passed to customers, reducing profitability.' },
      { id: 'cue-5', blockId: 'tbl-pestle', prompt: 'Using the PESTLE framework, give one example of a Social external threat to a business.', answer: 'A shift in consumer preferences towards healthier eating could make a fast food product range obsolete if the business fails to reformulate products or develop healthier alternatives.' },
      { id: 'cue-6', blockId: 'tbl-internal-external', prompt: 'Assess whether internal or external causes are more responsible for business failure. Give a balanced argument.', answer: 'External shocks (recessions, new competitors) create the conditions for failure, but internal weaknesses (poor cash flow, inadequate planning) determine whether a business survives. Businesses that maintained strong reserves and adaptable strategies often survived the same external shocks that destroyed their competitors — suggesting internal factors are ultimately decisive.' }
    ]
  },
  evidence: [],
  mentions: []
};
