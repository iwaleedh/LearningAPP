export const note_business_4_17_7 = {
  pdfPath: '/notes/business/wbs14-17.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define and distinguish between tariffs, quotas, subsidies, embargoes and non-tariff barriers; evaluate their effectiveness as protectionist tools and their impact on businesses.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Types of Trade Barriers', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Governments use a range of trade barriers to restrict imports and protect domestic producers. These can be divided into <b>tariff barriers</b> (taxes on imports) and <b>non-tariff barriers</b> (other restrictions such as quotas, subsidies, regulations and embargoes). Each type works differently and has different effects on trade volumes, consumer prices and business profitability.' }
    },
    {
      id: 'h-tariff',
      type: 'heading',
      data: { text: 'Tariffs', level: 2 }
    },
    {
      id: 'p-tariff',
      type: 'paragraph',
      data: { text: 'A <b>tariff</b> is a tax levied on imported goods. It raises the price of imports for domestic buyers, making foreign goods less competitive relative to domestically produced alternatives. Tariffs generate <b>government revenue</b> and protect domestic producers, but they raise prices for consumers and may trigger retaliatory tariffs from trading partners.' }
    },
    {
      id: 'callout-tariff-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Tariff — Worked Example',
        text: 'A Chinese-made steel rod costs £80 to import. The UK government imposes a 25% tariff → import cost rises to £100. UK steel manufacturers selling at £95 are now <b>price-competitive</b>. Effect: UK domestic producers gain sales; consumers pay more; Chinese exporters sell less to the UK; the UK government collects £20 per unit in tax revenue.'
      }
    },
    {
      id: 'list-tariff-effects',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>+ Protects domestic producers</b> — makes imports comparatively more expensive' },
          { text: '<b>+ Generates government revenue</b> — tax collected on each unit imported' },
          { text: '<b>− Raises consumer prices</b> — consumers pay more for both imports and comparable domestic goods' },
          { text: '<b>− May trigger retaliation</b> — trading partners impose their own tariffs (trade war risk)' },
          { text: '<b>− Reduces trade efficiency</b> — prevents countries from fully benefiting from comparative advantage' }
        ]
      }
    },
    {
      id: 'h-quota',
      type: 'heading',
      data: { text: 'Quotas', level: 2 }
    },
    {
      id: 'p-quota',
      type: 'paragraph',
      data: { text: 'A <b>quota</b> is a physical limit on the quantity of a specific good that can be imported over a period of time. Unlike tariffs, quotas do not raise revenue for the government — the benefit of the limited supply goes to the importer who holds the quota licence (or to the foreign exporter if they raise their prices to take advantage of the scarcity). Quotas provide a <b>guaranteed level of protection</b> for domestic producers regardless of price movements.' }
    },
    {
      id: 'list-quota-effects',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>+ Guaranteed protection</b> — limits import volumes with certainty, unlike tariffs which depend on price elasticity' },
          { text: '<b>+ Can be set precisely</b> — government decides exactly how much import competition is allowed' },
          { text: '<b>− No government revenue</b> — quota rents go to importers or foreign exporters, not the government' },
          { text: '<b>− Raises consumer prices</b> — artificial scarcity pushes prices up' },
          { text: '<b>− Administratively complex</b> — requires issuing quota licences and monitoring compliance' }
        ]
      }
    },
    {
      id: 'h-subsidies',
      type: 'heading',
      data: { text: 'Subsidies', level: 2 }
    },
    {
      id: 'p-subsidies',
      type: 'paragraph',
      data: { text: 'A <b>subsidy</b> is a direct financial payment or tax reduction given by the government to domestic producers, enabling them to lower their prices and compete with cheaper foreign rivals. Subsidies do not restrict imports directly — instead, they make domestic firms more competitive. The <b>EU\'s Common Agricultural Policy (CAP)</b> is the world\'s largest subsidy scheme, paying European farmers to ensure food security and stable incomes.' }
    },
    {
      id: 'h-other',
      type: 'heading',
      data: { text: 'Other Trade Barriers', level: 2 }
    },
    {
      id: 'list-other',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Embargo</b> — a complete ban on trade with a specific country, usually for political/security reasons (e.g. US embargo on Cuba, sanctions on Russia)' },
          { text: '<b>Administrative barriers</b> — complex customs procedures, paperwork and delays that make importing difficult and costly' },
          { text: '<b>Technical standards and regulations</b> — requiring imports to meet specific safety, health or environmental standards that foreign producers find expensive to meet' },
          { text: '<b>Voluntary export restraints (VERs)</b> — agreements where an exporting country voluntarily limits its exports to avoid harsher measures (e.g. Japan limiting car exports to the USA in the 1980s)' }
        ]
      }
    },
    {
      id: 'h-compare',
      type: 'heading',
      data: { text: 'Comparing Trade Barriers', level: 2 }
    },
    {
      id: 'table-barriers',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of main types of trade barriers',
        headers: ['Barrier', 'Mechanism', 'Government Revenue?', 'Certainty of Protection', 'Consumer Price Effect'],
        rows: [
          ['Tariff', 'Tax on each unit imported', 'Yes — per unit tax', 'Medium (depends on demand elasticity)', 'Rises'],
          ['Quota', 'Physical limit on import volume', 'No (quota rent to importers)', 'High — volume is fixed', 'Rises (scarcity)'],
          ['Subsidy', 'Payment to domestic producers', 'No — costs the government', 'Medium', 'May fall for domestic goods'],
          ['Embargo', 'Total trade ban', 'No', 'Complete', 'Supply shortages possible'],
          ['Technical standards', 'Regulations foreign goods must meet', 'No', 'Low to medium', 'Can rise if supply falls']
        ]
      }
    },
    {
      id: 'h-biz-impact',
      type: 'heading',
      data: { text: 'Impact on Businesses', level: 2 }
    },
    {
      id: 'p-biz-impact',
      type: 'paragraph',
      data: { text: 'Trade barriers create significant implications for both domestic and foreign businesses. Domestic producers gain greater market share and face less competition. Foreign exporters see their market access reduced. Businesses reliant on imported components face higher input costs. The overall effect depends on the firm\'s position in the supply chain and the elasticity of demand for their products.' }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'A common exam question contrasts tariffs and quotas. Remember: <b>tariffs generate government revenue, quotas guarantee import volume limits</b>. Subsidies help domestic firms without restricting imports directly — they cost the government money but don\'t risk WTO challenges in the same way. Embargoes are extreme and rare outside geopolitical conflict situations.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '<b>Tariff</b> = tax on imports → raises import prices, generates government revenue. <b>Quota</b> = limit on import quantity → guarantees protection, no revenue. <b>Subsidy</b> = payment to domestic producers → lowers their costs, costs the government. <b>Embargo</b> = total import ban → extreme tool, usually political. <b>Non-tariff barriers</b> include technical standards and administrative delays. All trade barriers protect domestic producers at the expense of consumers and trading partners.' }
    },
    {
      id: 'enr-svg-tariff',
      type: 'svg',
      data: {
        svg: "<svg viewBox='0 0 500 380' xmlns='http://www.w3.org/2000/svg' font-family='Inter,sans-serif'><polygon points='157,230 195,230 195,175' fill='#f97316' opacity='0.4'/><polygon points='270,230 338,230 270,175' fill='#f97316' opacity='0.4'/><rect x='195' y='175' width='75' height='55' fill='#065f46' opacity='0.25'/><line x1='70' y1='20' x2='70' y2='350' stroke='#333' stroke-width='2'/><line x1='70' y1='350' x2='460' y2='350' stroke='#333' stroke-width='2'/><text x='265' y='375' text-anchor='middle' font-size='13' fill='#333'>Quantity</text><text x='22' y='185' text-anchor='middle' font-size='13' fill='#333' transform='rotate(-90,22,185)'>Price</text><line x1='80' y1='340' x2='285' y2='45' stroke='#3b82f6' stroke-width='2.5'/><text x='291' y='43' fill='#3b82f6' font-size='12' font-weight='bold'>Sd</text><line x1='115' y1='50' x2='455' y2='325' stroke='#ef4444' stroke-width='2.5'/><text x='440' y='342' fill='#ef4444' font-size='12' font-weight='bold'>D</text><line x1='70' y1='230' x2='350' y2='230' stroke='#555' stroke-width='1.5' stroke-dasharray='5,4'/><text x='60' y='234' text-anchor='end' font-size='11' fill='#333'>Pw</text><line x1='70' y1='175' x2='280' y2='175' stroke='#555' stroke-width='1.5' stroke-dasharray='5,4'/><text x='60' y='179' text-anchor='end' font-size='11' fill='#333'>Pw+t</text><line x1='157' y1='230' x2='157' y2='350' stroke='#aaa' stroke-width='1' stroke-dasharray='4,3'/><line x1='195' y1='175' x2='195' y2='350' stroke='#aaa' stroke-width='1' stroke-dasharray='4,3'/><line x1='270' y1='175' x2='270' y2='350' stroke='#aaa' stroke-width='1' stroke-dasharray='4,3'/><line x1='338' y1='230' x2='338' y2='350' stroke='#aaa' stroke-width='1' stroke-dasharray='4,3'/><text x='157' y='365' text-anchor='middle' font-size='11' fill='#333'>Q&#x2081;</text><text x='195' y='365' text-anchor='middle' font-size='11' fill='#333'>Q&#x2083;</text><text x='270' y='365' text-anchor='middle' font-size='11' fill='#333'>Q&#x2084;</text><text x='338' y='365' text-anchor='middle' font-size='11' fill='#333'>Q&#x2082;</text><text x='175' y='218' text-anchor='middle' font-size='9' fill='#9a3412' font-weight='bold'>DWL</text><text x='304' y='218' text-anchor='middle' font-size='9' fill='#9a3412' font-weight='bold'>DWL</text><text x='233' y='200' text-anchor='middle' font-size='9' fill='#065f46'>Govt Rev.</text><text x='295' y='224' font-size='10' fill='#6366f1'>← imports at Pw</text><text x='275' y='169' font-size='10' fill='#7c3aed'>← imports at Pw+t</text></svg>",
        caption: 'Effect of a tariff: domestic price rises from Pw to Pw+t, domestic production expands (Q1→Q3), imports shrink (Q1–Q2 to Q3–Q4). Orange triangles = deadweight loss; green area = government revenue.'
      }
    },
    {
      id: 'enr-callout-solar',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Case Study: EU Tariffs on Chinese Solar Panels (2013)',
        text: 'The EU imposed 47% tariffs on Chinese solar panels, claiming China was dumping (selling below cost). Result: Chinese solar panel prices rose, EU renewable energy installations fell, and consumers faced higher electricity bills. The domestic solar panel industry was protected but at the expense of the energy transition.'
      }
    },
    {
      id: 'enr-callout-barriers-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Tariff vs Quota vs Subsidy',
        text: '<b>Tariff</b> = tax on imports (raises price, reduces import demand, raises government revenue). <b>Quota</b> = limit on volume of imports (raises price through scarcity, no government revenue). <b>Subsidy</b> = government support for domestic producers (lowers their costs — not a tax on imports). Know the difference and use the correct term in the exam.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Each tool has different pros/cons: tariffs raise revenue for government; quotas limit quantity directly; subsidies support domestic producers but distort pricing; embargoes use political leverage; NTBs (standards, health rules) are hard to challenge. Match the tool to the objective in case studies."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Treating all protectionist tools equally in effectiveness. Non-tariff barriers (safety standards, certification rules) can be as effective\u2014or sometimes more effective\u2014than tariffs but harder to spot and challenge under WTO rules. Don't forget about them in your evaluation."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Tariff = tax on imports. Quota = quantity limit. Subsidy = payment to domestic producers. Embargo = total ban. All raise domestic prices for consumers.',
    cues: [
      { id: 'cue-1', blockId: 'p-tariff', prompt: 'Define a tariff and explain its dual benefit for the government.', answer: 'A tariff is a tax on imported goods. It raises the price of imports (protecting domestic producers) and generates tax revenue for the government — making it the most attractive protectionist tool for governments.' },
      { id: 'cue-2', blockId: 'callout-tariff-worked', prompt: 'Using steel as an example, explain how a tariff changes the competitive position of domestic and foreign producers.', answer: 'A 25% tariff on Chinese steel raises the import price from £80 to £100. UK steel at £95 is now price-competitive. Domestic producers gain market share; Chinese exporters sell less to the UK; consumers pay more.' },
      { id: 'cue-3', blockId: 'p-quota', prompt: 'Why might a government prefer a quota over a tariff for protecting an industry?', answer: 'A quota guarantees a fixed maximum import volume regardless of price changes, giving more certain protection. However, it generates no government revenue, and the benefit of the restricted supply goes to quota holders rather than the government.' },
      { id: 'cue-4', blockId: 'p-subsidies', prompt: 'How do subsidies differ from tariffs and quotas as a protectionist tool?', answer: 'Subsidies make domestic firms more competitive by reducing their costs rather than restricting imports directly. They cost the government money and don\'t raise consumer prices in the same way. The CAP is the prime example — EU farmers receive payments to compete with cheaper world market prices.' },
      { id: 'cue-5', blockId: 'table-barriers', prompt: 'Compare the effect of tariffs and quotas on government revenue and consumer prices.', answer: 'Tariffs generate direct government revenue (a tax collected on every imported unit) and raise consumer prices. Quotas generate no government revenue but restrict supply, which also raises consumer prices — the "quota rent" goes to the importer or foreign exporter.' }
    ]
  },
  evidence: [],
  mentions: []
};
