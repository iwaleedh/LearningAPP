export const note_business_3_11_3 = {
  pdfPath: '/notes/business/wbs13-11.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply the Ansoff Matrix to advise businesses on growth strategies. Understand each of the four quadrants, assess their relative risk, and evaluate the model\'s usefulness.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'The Ansoff Matrix — Growth Direction Framework', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Developed by Igor Ansoff in 1957, the <b>Ansoff Matrix</b> is a strategic planning tool that helps businesses decide their growth strategy by plotting products (existing vs new) against markets (existing vs new). It produces four strategic options, each carrying a different level of risk.' }
    },
    {
      id: 'tbl-matrix',
      type: 'comparisonTable',
      data: {
        caption: 'Ansoff Matrix — four growth strategies',
        headers: ['', 'Existing Market', 'New Market'],
        rows: [
          ['<b>Existing Product</b>', '✅ Market Penetration (LOW risk)', '⚠️ Market Development (MEDIUM risk)'],
          ['<b>New Product</b>', '⚠️ Product Development (MEDIUM risk)', '❌ Diversification (HIGH risk)']
        ]
      }
    },
    {
      id: 'h-mp',
      type: 'heading',
      data: { text: '1. Market Penetration', level: 2 }
    },
    {
      id: 'p-mp',
      type: 'paragraph',
      data: { text: '<b>Selling existing products to existing markets.</b> This is the lowest-risk strategy as the business already knows its product and customer base. The aim is to <b>increase market share</b> within current markets.' }
    },
    {
      id: 'list-mp',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Methods:</b> lower prices, increased advertising, better distribution, loyalty schemes, promotions.' },
          { text: '<b>Advantage:</b> Lowest risk — familiar territory; builds on existing strengths.' },
          { text: '<b>Limitation:</b> Market may be saturated; growth potential is finite; competitors may retaliate.' },
          { text: '<b>Example:</b> McDonald\'s offering limited-time promotions to attract existing fast-food customers.' }
        ]
      }
    },
    {
      id: 'h-md',
      type: 'heading',
      data: { text: '2. Market Development', level: 2 }
    },
    {
      id: 'p-md',
      type: 'paragraph',
      data: { text: '<b>Selling existing products to new markets.</b> This could mean entering a new geographic market (e.g. internationalisation) or targeting a new customer segment with the same product.' }
    },
    {
      id: 'list-md',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Methods:</b> exporting, franchising, online sales expansion, targeting a new demographic.' },
          { text: '<b>Advantage:</b> The product is proven; new revenue streams without R&D cost.' },
          { text: '<b>Limitation:</b> New markets require market research; cultural differences may require product adaptation; regulatory barriers in new countries.' },
          { text: '<b>Example:</b> Starbucks entering the Chinese market with its existing coffee product range.' }
        ]
      }
    },
    {
      id: 'h-pd',
      type: 'heading',
      data: { text: '3. Product Development', level: 2 }
    },
    {
      id: 'p-pd',
      type: 'paragraph',
      data: { text: '<b>Selling new products to existing markets.</b> The business develops new or improved products for customers it already serves, using its existing brand reputation and customer relationships.' }
    },
    {
      id: 'list-pd',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Methods:</b> R&D investment, product extensions, new product lines, product improvements.' },
          { text: '<b>Advantage:</b> The market is known; existing customer loyalty supports new product launch.' },
          { text: '<b>Limitation:</b> High R&D costs; risk of cannibalisation (new product may eat into existing product sales); time-consuming.' },
          { text: '<b>Example:</b> Apple launching the Apple Watch to its existing iPhone customer base.' }
        ]
      }
    },
    {
      id: 'h-div',
      type: 'heading',
      data: { text: '4. Diversification', level: 2 }
    },
    {
      id: 'p-div',
      type: 'paragraph',
      data: { text: '<b>Selling new products to new markets.</b> This is the <b>highest risk</b> strategy as the business has no experience in either the product or the market. However, successful diversification reduces dependency on a single market.' }
    },
    {
      id: 'list-div',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Related diversification:</b> new product/market related to existing business (e.g. Amazon moving from books to electronics).' },
          { text: '<b>Unrelated (conglomerate) diversification:</b> entirely new industry (e.g. Virgin Group moving from music to airlines to financial services).' },
          { text: '<b>Advantage:</b> Spreads risk; new sources of income; potential for high reward.' },
          { text: '<b>Limitation:</b> Highest failure rate; resource-intensive; management focus divided.' }
        ]
      }
    },
    {
      id: 'tbl-risk',
      type: 'comparisonTable',
      data: {
        caption: 'Comparative risk levels and key features of each Ansoff strategy',
        headers: ['Strategy', 'Risk Level', 'Core Requirement', 'Real Example'],
        rows: [
          ['Market Penetration', 'Low', 'Marketing investment; competitive pricing', 'Coca-Cola increasing advertising spend in mature UK market'],
          ['Market Development', 'Medium', 'Market research; adaptation for new segment', 'Greggs opening stores in petrol stations and airports'],
          ['Product Development', 'Medium', 'R&D investment; innovation capability', 'Netflix launching its own original content (films/series)'],
          ['Diversification', 'High', 'Capital, new expertise, market knowledge', 'Amazon launching Amazon Web Services (cloud computing)']
        ]
      }
    },
    {
      id: 'h-eval',
      type: 'heading',
      data: { text: 'Evaluating the Ansoff Matrix', level: 2 }
    },
    {
      id: 'list-eval',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Strength:</b> Simple and practical — easy to communicate to stakeholders and use in strategic meetings.' },
          { text: '<b>Strength:</b> Highlights the relationship between risk and growth — forces managers to consider risk explicitly.' },
          { text: '<b>Limitation:</b> Assumes only two dimensions (product/market); ignores competitive environment and internal capabilities.' },
          { text: '<b>Limitation:</b> Does not indicate <i>how</i> to enter a market, only that you should — needs to be combined with Porter\'s Five Forces or PESTLE.' },
          { text: '<b>Limitation:</b> Market boundaries are increasingly blurred (e.g. tech firms operate across multiple categories simultaneously).' }
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Choosing a Strategy',
        text: 'When advising which Ansoff strategy a business should pursue, consider: (1) financial resources available, (2) risk appetite of owners/shareholders, (3) current market saturation, (4) strength of existing brand. A risk-averse, cash-constrained business should prefer Market Penetration; a financially strong innovator might pursue Product Development.'
      }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Classifying Strategic Options',
        text: '<b>Scenario:</b> JD Sports currently sells sportswear to UK consumers. It is considering three options:<br><ul><li>Increase social media marketing spend in the UK → <b>Market Penetration</b> (same market, same product).</li><li>Launch a new premium performance range for serious athletes → <b>Product Development</b> (same market, new product).</li><li>Expand stores into the Polish market with the existing product range → <b>Market Development</b> (new market, same product).</li></ul>'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'The Ansoff Matrix presents four growth strategies: <b>Market Penetration</b> (existing/existing — lowest risk), <b>Market Development</b> (existing product/new market — medium risk), <b>Product Development</b> (new product/existing market — medium risk), and <b>Diversification</b> (new/new — highest risk). Strategy selection depends on risk appetite, resources, and competitive positioning. The model is simple and practical but must be combined with other tools for a complete strategic analysis.' }
    },
    {
      id: 'enr-svg-ansoff',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif">
  <rect width="500" height="400" fill="#0f172a" rx="8"/>
  <text x="18" y="200" text-anchor="middle" font-size="13" font-weight="bold" fill="#444" transform="rotate(-90,18,200)">Markets</text>
  <text x="280" y="396" text-anchor="middle" font-size="13" font-weight="bold" fill="#444">Products</text>
  <text x="176" y="44" text-anchor="middle" font-size="12" fill="#666">Existing</text>
  <text x="388" y="44" text-anchor="middle" font-size="12" fill="#666">New</text>
  <text x="52" y="126" text-anchor="middle" font-size="12" fill="#666" transform="rotate(-90,52,126)">New</text>
  <text x="52" y="268" text-anchor="middle" font-size="12" fill="#666" transform="rotate(-90,52,268)">Existing</text>
  <rect x="70" y="55" width="212" height="142" fill="#532407" stroke="#e65100" stroke-width="2" rx="3"/>
  <text x="176" y="82" text-anchor="middle" font-weight="bold" font-size="13" fill="#e65100">Market Development</text>
  <text x="176" y="100" text-anchor="middle" font-size="11" fill="#555">Existing product,</text>
  <text x="176" y="115" text-anchor="middle" font-size="11" fill="#555">new market / region</text>
  <text x="176" y="175" text-anchor="middle" font-size="11" fill="#e65100">&#9888; Medium Risk</text>
  <rect x="282" y="55" width="213" height="142" fill="#3d1212" stroke="#c62828" stroke-width="2" rx="3"/>
  <text x="388" y="82" text-anchor="middle" font-weight="bold" font-size="13" fill="#c62828">Diversification</text>
  <text x="388" y="100" text-anchor="middle" font-size="11" fill="#555">New product,</text>
  <text x="388" y="115" text-anchor="middle" font-size="11" fill="#555">new market</text>
  <text x="388" y="175" text-anchor="middle" font-size="11" fill="#c62828">Highest Risk</text>
  <rect x="70" y="197" width="212" height="143" fill="#0a2e1a" stroke="#2e7d32" stroke-width="2" rx="3"/>
  <text x="176" y="224" text-anchor="middle" font-weight="bold" font-size="13" fill="#2e7d32">Market Penetration</text>
  <text x="176" y="242" text-anchor="middle" font-size="11" fill="#555">Existing product,</text>
  <text x="176" y="257" text-anchor="middle" font-size="11" fill="#555">existing market</text>
  <text x="176" y="317" text-anchor="middle" font-size="11" fill="#2e7d32">Lowest Risk</text>
  <rect x="282" y="197" width="213" height="143" fill="#1c3a64" stroke="#1565c0" stroke-width="2" rx="3"/>
  <text x="388" y="224" text-anchor="middle" font-weight="bold" font-size="13" fill="#1565c0">Product Development</text>
  <text x="388" y="242" text-anchor="middle" font-size="11" fill="#555">New product,</text>
  <text x="388" y="257" text-anchor="middle" font-size="11" fill="#555">existing market</text>
  <text x="388" y="317" text-anchor="middle" font-size="11" fill="#1565c0">&#9888; Medium Risk</text>
  <line x1="70" y1="197" x2="495" y2="197" stroke="#aaa" stroke-width="1.5"/>
  <line x1="282" y1="55" x2="282" y2="340" stroke="#aaa" stroke-width="1.5"/>
  <rect x="70" y="55" width="425" height="285" fill="none" stroke="#ccc" stroke-width="1.2" rx="3"/>
</svg>`,
        caption: 'Ansoff Matrix — four growth strategies by product/market combination'
      }
    },
    {
      id: 'enr-callout-amazon',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Amazon\'s Ansoff Journey',
        text: '<b>Market Penetration:</b> Selling more books online to existing US customers.<br><b>Market Development:</b> Expanding Amazon.com to 58 countries — same products, new international markets.<br><b>Product Development:</b> Launching Kindle, Echo (Alexa), and Prime Video — new products for the existing customer base.<br><b>Diversification:</b> AWS cloud services (new product, new B2B market), Whole Foods acquisition, and Amazon Pharmacy. Each step moves further from Amazon\'s original core — the world\'s most complete Ansoff quadrant traversal.'
      }
    },
    {
      id: 'enr-callout-everyday',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Everyday Analogy — The Cookie Seller',
        text: 'A student with a popular cookie recipe at home:<br><b>Market Penetration</b> = sell to more school friends (same product, same market).<br><b>Market Development</b> = sell at the local market stall (same recipe, new customers).<br><b>Product Development</b> = add new flavours — red velvet, matcha (new product, same market).<br><b>Diversification</b> = open a tutoring service (completely new product and new market). Each step increases risk and requires new skills or capital.'
      }
    },
    {
      id: 'enr-callout-tip-ansoff',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Evaluating Ansoff Strategies',
        text: 'Diversification is the highest risk because the firm has no experience in EITHER the new product OR the new market — it faces a <b>double unknown</b>. Always evaluate <b>WHY</b> a firm chose a particular quadrant: e.g. market saturation may force Product Development; limited capital may rule out Diversification. Strong evaluation links the strategy to the firm\'s specific resources, competitive position, and risk appetite.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Be precise: Market Development is *new markets*, Product Development is *new products*. When analyzing an Ansoff case, explicitly state which quadrant the firm is entering and why (market share gain, revenue growth, risk reduction). This precision impresses examiners."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Underestimating diversification risk. Many students present Diversify as a high-growth opportunity without deeply analyzing why 80% of diversifications fail. Address integration costs, brand stretch, and management capability gaps to show critical evaluation."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Ansoff Matrix: Market Penetration (low risk, existing/existing), Market Development (medium, existing product/new market), Product Development (medium, new product/existing market), Diversification (high risk, new/new). Risk increases as you move away from what you know.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-matrix', prompt: 'Draw and label the Ansoff Matrix, including the risk level for each quadrant.', answer: 'A 2×2 grid. Rows = Existing Product / New Product. Columns = Existing Market / New Market. Quadrants: Market Penetration (low risk), Market Development (medium), Product Development (medium), Diversification (high).' },
      { id: 'cue-2', blockId: 'p-mp', prompt: 'What is market penetration and what tactics does a business use to pursue it?', answer: 'Selling existing products to existing markets. Tactics: lower prices, increased advertising, loyalty schemes, better distribution.' },
      { id: 'cue-3', blockId: 'p-div', prompt: 'Distinguish between related and unrelated diversification with an example of each.', answer: 'Related: new product/market linked to existing business (e.g. Amazon from books to electronics). Unrelated/conglomerate: entirely new industry (e.g. Virgin from music to airlines).' },
      { id: 'cue-4', blockId: 'tbl-risk', prompt: 'Give one real business example for each of the four Ansoff strategies.', answer: 'Market Penetration: Coca-Cola advertising in the UK. Market Development: Greggs in petrol stations. Product Development: Netflix originals. Diversification: Amazon Web Services.' },
      { id: 'cue-5', blockId: 'list-eval', prompt: 'State two limitations of the Ansoff Matrix as a strategic tool.', answer: 'It only considers two dimensions (product and market), ignoring competition and internal capabilities. It does not specify how to enter a market — must be combined with Five Forces or PESTLE.' },
      { id: 'cue-6', blockId: 'callout-tip', prompt: 'What factors should influence which Ansoff strategy a business chooses?', answer: 'Financial resources, risk appetite of owners, current market saturation, and strength of the existing brand.' }
    ]
  },
  evidence: [],
  mentions: []
};
