export const note_olevel_business_1_1_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Business/Understanding Business Activity/measuring-business-size.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Identify and evaluate different methods of measuring business size, understand why size matters, and appreciate the limitations of each measure.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Why Measure Business Size?', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Measuring business size is important for several reasons. It allows comparisons between competitors in the same industry, helps government identify small and medium-sized enterprises (SMEs) that qualify for financial support, enables investors to assess investment opportunities, and lets businesses track their own growth over time. However, there is <b>no single perfect measure</b> of business size — each measure has its own strengths and limitations, and the most appropriate measure depends on the industry.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Methods of Measuring Business Size', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Measures of Business Size',
        headers: ['Measure', 'Definition', 'Advantages', 'Limitations'],
        rows: [
          [
            'Number of employees',
            'Total headcount of workers employed by the business',
            'Simple to understand; easy to obtain data',
            'Misleading if business uses automation; part-time vs full-time distorts comparison'
          ],
          [
            'Revenue / Turnover',
            'Total income from sales before any costs are deducted',
            'Good for comparing sales performance; widely used',
            'High revenue does not mean high profit; seasonal businesses may fluctuate greatly'
          ],
          [
            'Capital employed',
            'Total value of long-term funds invested in the business (equity + long-term debt)',
            'Reflects the scale of investment and assets',
            'Hard to compare across industries; does not reflect profitability'
          ],
          [
            'Market share',
            'A business\'s sales as a percentage of total industry sales',
            'Shows competitive position within the industry',
            'Requires industry sales data which may be unavailable; global vs local market definition issues'
          ],
          [
            'Market capitalisation',
            'Total market value of a company\'s issued shares (share price × number of shares)',
            'Reflects investor confidence; useful for PLCs',
            'Only applies to listed companies; share prices fluctuate daily'
          ]
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Number of Employees', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'The <b>number of employees</b> is one of the most widely used measures of size, especially for government classification of small and medium-sized enterprises (SMEs). The EU, for example, classifies micro-businesses as fewer than 10 employees, small businesses as 10–49 employees, and medium businesses as 50–249 employees. However, this measure can be misleading in capital-intensive industries (like oil refining or automated manufacturing), where a business may generate billions in revenue with very few employees.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Revenue and Turnover', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: '<b>Revenue</b> (also called turnover) is the total income generated from the sale of goods and services in a given period. It is a very common measure of size, particularly in industries where all firms sell similar products (e.g. supermarkets). However, revenue alone does not indicate how <b>profitable</b> a business is. A business can have very high turnover but still make a loss if its costs are even higher. Revenue is also affected by whether a business operates in a high-price or low-price market.'
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Market Share', level: 2 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: '<b>Market share</b> measures the proportion of total industry sales accounted for by a single business. It is calculated as: <b>Market share (%) = (Business\'s sales ÷ Total market sales) × 100</b>. A high market share indicates a strong competitive position. Market leaders can benefit from <b>economies of scale</b> (lower costs per unit due to large-scale production) and greater <b>bargaining power</b> with suppliers. However, market share depends on how the market is defined — a firm might have a large share of a local market but a tiny share of the global market.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Market Share Formula',
        text: 'Market Share (%) = (Sales of one business ÷ Total market sales) × 100. For example, if a firm sells $50m of products in a $200m market, its market share is 25%.'
      }
    },
    {
      id: 'h-6',
      type: 'heading',
      data: { text: 'Capital Employed and Market Capitalisation', level: 2 }
    },
    {
      id: 'para-5',
      type: 'paragraph',
      data: {
        text: '<b>Capital employed</b> is the total of all long-term funds invested in a business. It gives an idea of the scale of resources at a business\'s disposal but says little about how efficiently those resources are being used. <b>Market capitalisation</b> (share price × total number of shares) is used for publicly listed companies and reflects what investors collectively believe the company is worth. Apple, for example, has one of the world\'s highest market capitalisations. However, share prices can be volatile and may not always reflect the underlying performance of the business.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'info',
        title: 'Choosing the Right Measure',
        text: 'When comparing business sizes, it is important to use the same measure across all businesses and to compare within the same industry. A labour-intensive service business (e.g. a law firm) is best compared by number of employees, while a capital-intensive business (e.g. an oil company) may be better compared by capital employed or revenue.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Business size can be measured by number of employees, revenue, capital employed, market share or market capitalisation. Each measure has advantages and limitations. The appropriate measure depends on the industry and purpose of comparison. Market share is particularly useful for assessing competitive position, while revenue and capital employed give broader financial pictures. No single measure is perfect on its own.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Five main measures of business size each have strengths and limitations; choice of measure depends on context and industry.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-1',
        prompt: 'Name five measures of business size.',
        answer: 'Number of employees, revenue/turnover, capital employed, market share, market capitalisation.'
      },
      {
        id: 'cue-2',
        blockId: 'para-2',
        prompt: 'Why can the number of employees be a misleading measure of business size?',
        answer: 'Capital-intensive businesses (e.g. automated factories) may generate huge revenue with few employees. Also, part-time vs full-time workers distort comparisons.'
      },
      {
        id: 'cue-3',
        blockId: 'call-1',
        prompt: 'How is market share calculated?',
        answer: 'Market Share (%) = (Sales of one business ÷ Total market sales) × 100.'
      },
      {
        id: 'cue-4',
        blockId: 'para-3',
        prompt: 'Why is high revenue not necessarily a sign of business success?',
        answer: 'High revenue does not mean high profit. If costs are greater than revenue, the business makes a loss despite large sales figures.'
      },
      {
        id: 'cue-5',
        blockId: 'para-5',
        prompt: 'What is market capitalisation and to which type of business does it apply?',
        answer: 'Market capitalisation = share price × total number of shares. It applies only to publicly listed companies (PLCs) and reflects investors\' collective valuation of the company.'
      }
    ]
  },
  evidence: [],
  mentions: []
};
