export const note_economics_3_13_2 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Compare small and medium-sized enterprises (SMEs) with large corporations; analyse the advantages and disadvantages of each size category.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'SMEs vs Large Corporations', level: 2 }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Defining SMEs', level: 3 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'A <strong>small and medium-sized enterprise (SME)</strong> is defined by the EU as a firm with <strong>fewer than 250 employees</strong> and an annual turnover not exceeding <strong>£50 million</strong> (or balance sheet total not exceeding £43 million). Within this category, micro firms have fewer than 10 employees and small firms have fewer than 50. SMEs account for the vast majority of businesses in most economies and represent a crucial source of employment and innovation.' }] } },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'EU classification of firm size',
        headers: ['Category', 'Employees', 'Annual Turnover'],
        rows: [
          ['Micro', 'Fewer than 10', 'Up to £2 million'],
          ['Small', '10 to 49', 'Up to £10 million'],
          ['Medium', '50 to 249', 'Up to £50 million'],
          ['Large', '250 or more', 'Over £50 million']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Advantages of SMEs', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Flexibility</strong>: can adapt quickly to changing market conditions without large bureaucratic structures' },
          { text: '<strong>Niche markets</strong>: able to serve specialist or local markets that are too small to attract large firms' },
          { text: '<strong>Personal service</strong>: closer relationships with customers can build loyalty and differentiation' },
          { text: '<strong>Local knowledge</strong>: deep understanding of local community needs and preferences' },
          { text: '<strong>Motivation</strong>: owner-managed firms often benefit from high owner motivation and entrepreneurial drive' },
          { text: '<strong>Lower overhead</strong>: leaner structures can mean lower average costs in some markets' }
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Disadvantages of SMEs', level: 3 }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Limited economies of scale</strong>: higher average costs than large competitors in mass markets' },
          { text: '<strong>Restricted access to finance</strong>: banks charge higher interest rates; no access to stock market capital' },
          { text: '<strong>Limited R&D capacity</strong>: less able to invest in research and development' },
          { text: '<strong>Vulnerability</strong>: more exposed to demand shocks; failure rates are higher' },
          { text: '<strong>Limited market power</strong>: no ability to influence price in competitive markets' }
        ]
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Advantages of Large Corporations', level: 3 }
    },
    {
      id: 'list-3',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Economies of scale</strong>: lower long-run average costs through bulk buying, specialisation, financial advantages' },
          { text: '<strong>Market power</strong>: ability to influence prices, negotiate with suppliers, deter entry' },
          { text: '<strong>R&D capacity</strong>: large budgets for innovation and new product development' },
          { text: '<strong>Diversification</strong>: spread risk across multiple products, markets or geographies' },
          { text: '<strong>Access to capital</strong>: can issue shares, raise bonds and access large credit facilities' }
        ]
      }
    },
    {
      id: 'h-6',
      type: 'heading',
      data: { text: 'Disadvantages of Large Corporations', level: 3 }
    },
    {
      id: 'list-4',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Diseconomies of scale</strong>: management complexity, communication problems, principal-agent issues' },
          { text: '<strong>Bureaucracy</strong>: slow decision-making, inflexibility' },
          { text: '<strong>Reduced motivation</strong>: workers may feel disconnected from outcomes' },
          { text: '<strong>Regulatory scrutiny</strong>: competition authorities may limit growth strategies' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'An independent local bakery (SME) competes with a large supermarket chain. The bakery has higher average costs but offers personalised service, fresh local produce and a loyal customer base — competing on differentiation rather than price. The supermarket uses economies of scale to offer lower prices but cannot replicate the personal connection.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When asked to evaluate SMEs vs large firms, always consider the <strong>type of market</strong>. In niche markets with personalised products, SMEs may outperform large firms. In capital-intensive, mass-market industries, large firms dominate due to economies of scale.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'SMEs (fewer than 250 employees) benefit from flexibility, niche market focus and personal service but face higher average costs and limited access to finance. Large corporations benefit from economies of scale, market power and R&D capacity but risk diseconomies of scale and bureaucratic inefficiency.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "When comparing SMEs and large corporations, remember that growth stage and resource constraints are key, not firm size alone. Use this to explain why SMEs often innovate despite lower R&D budgets\u2014focus on agility and market niches."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'SMEs are flexible and niche-focused; large corporations benefit from scale but risk bureaucracy and diseconomies.',
    cues: [
      { id: 'cue-1', blockId: 'para-1', prompt: 'What is the EU definition of an SME in terms of employees?', answer: 'Fewer than 250 employees (and turnover not exceeding £50 million).' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Give three advantages of SMEs over large corporations.', answer: 'Flexibility, ability to serve niche markets, personal customer service, local knowledge, high owner motivation.' },
      { id: 'cue-3', blockId: 'list-3', prompt: 'Give three advantages of large corporations over SMEs.', answer: 'Economies of scale, market power, R&D capacity, diversification, better access to capital.' },
      { id: 'cue-4', blockId: 'call-1', prompt: 'How can an SME compete against a large firm despite higher average costs?', answer: 'By differentiating on quality, personalisation, local knowledge or niche expertise rather than competing on price.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_3_13_2;
