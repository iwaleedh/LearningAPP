export const note_economics_4_20_11 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Explain price and non-price measures of international competitiveness and evaluate their significance for trade performance.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'International Competitiveness', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: '<strong>International competitiveness</strong> refers to the ability of a country\'s firms to successfully sell goods and services in world markets relative to foreign rivals. It has two dimensions: <strong>price competitiveness</strong> (selling at lower prices) and <strong>non-price competitiveness</strong> (competing on quality, design, reliability, and service). High competitiveness is associated with strong export performance and current account balance.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Price Competitiveness', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: '<strong>Relative prices</strong> compare the price of domestic goods against the same goods produced abroad (converted to a common currency). If UK prices are rising faster than German prices (higher UK inflation), UK goods become relatively more expensive — price competitiveness falls. The <strong>real exchange rate</strong> captures this: REER = Nominal exchange rate × (Domestic price level / Foreign price level). A higher REER means less competitive.'
      }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: '<strong>Relative Unit Labour Costs (RULC)</strong> measure the labour cost per unit of output relative to trading partners. RULC = Wage costs / Labour productivity. A country becomes more price competitive if its productivity grows faster than wages, or if its wage growth is lower than competitors. Germany kept RULC low through wage restraint in the 2000s (Hartz reforms), improving its price competitiveness significantly.'
      }
    },
    {
      id: 'equation-1',
      type: 'equation',
      data: {
        latex: 'RULC = \\frac{\\text{Nominal Wage}}{\\text{Labour Productivity}}',
        caption: 'Relative Unit Labour Costs — lower means better price competitiveness'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Non-Price Competitiveness', level: 3 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: 'Non-price competitiveness includes: <strong>product quality</strong> (design, durability, performance), <strong>reliability and delivery</strong>, <strong>brand reputation</strong>, <strong>after-sales service</strong>, <strong>innovation</strong> (new products). Countries like Germany and Japan compete primarily on non-price grounds — their exports command premium prices and are not highly sensitive to exchange rate movements. This is why German car exports continue even when the euro is strong.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'WEF Global Competitiveness Index', level: 3 }
    },
    {
      id: 'para-5',
      type: 'paragraph',
      data: {
        text: 'The <strong>World Economic Forum (WEF) Global Competitiveness Index</strong> ranks countries on 12 pillars including: institutions, infrastructure, ICT adoption, macroeconomic stability, health, skills, product market competition, labour market flexibility, financial system, market size, business dynamism, and innovation capability. Singapore, Switzerland, and the USA consistently rank highly. The index captures structural factors that determine long-run competitiveness beyond simple price measures.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Price vs Non-Price Competitiveness',
        headers: ['Dimension', 'Measure', 'Determinants', 'Policy to Improve'],
        rows: [
          ['Price competitiveness', 'Relative prices, RULC, real exchange rate', 'Inflation, productivity, exchange rate, wages', 'Depreciation (short-run); productivity growth (long-run); wage restraint'],
          ['Non-price competitiveness', 'WEF index, export quality, market share in high-tech sectors', 'R&D, education, brand, design, after-sales service', 'R&D investment, skills training, industrial policy, design standards']
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'International competitiveness has price (relative prices, RULC, real exchange rate) and non-price (quality, brand, innovation, reliability) dimensions; Germany\'s success illustrates non-price competitiveness sustaining exports despite a strong currency.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-3',
        prompt: 'Define Relative Unit Labour Costs and explain what they measure.',
        answer: 'RULC = Nominal Wage / Labour Productivity. They measure the labour cost of producing one unit of output relative to trading partners. A country improves price competitiveness if productivity grows faster than wages (RULC falls). Germany achieved low RULC through wage restraint in the 2000s.'
      },
      {
        id: 'cue-2',
        blockId: 'para-4',
        prompt: 'Why can a country maintain strong export performance even when its exchange rate is high?',
        answer: 'Non-price competitiveness — quality, reliability, brand reputation, innovation, and after-sales service — means buyers continue to purchase despite higher prices. German luxury cars are a classic example: buyers pay premium prices because of quality and brand, making exports relatively exchange-rate insensitive.'
      },
      {
        id: 'cue-3',
        blockId: 'para-5',
        prompt: 'What does the WEF Global Competitiveness Index measure and which countries rank highly?',
        answer: 'It ranks countries on 12 pillars including infrastructure, institutions, innovation, skills, financial system, and market dynamism. Singapore, Switzerland, and the USA consistently rank highly, reflecting strong structural foundations for long-run international competitiveness.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_20_11;
