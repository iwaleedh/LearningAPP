export const note_economics_4_22_5 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Evaluate the effects of taxation on work incentives, business investment, and aggregate supply, contrasting supply-side and Keynesian perspectives.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Tax Effects on Incentives and Economic Output', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Taxation affects economic behaviour in multiple ways. The key debate is between <strong>supply-side economists</strong> (who emphasise that high taxes reduce incentives and output) and <strong>Keynesians</strong> (who emphasise that tax revenues fund public services and the multiplier, supporting aggregate demand). The empirical evidence on tax effects is mixed and context-dependent.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Income Tax and Work Incentives', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'A rise in income tax has two opposing effects on labour supply: the <strong>substitution effect</strong> (leisure becomes relatively cheaper than work — so workers choose more leisure) and the <strong>income effect</strong> (workers are poorer after tax — so may work more to maintain their income). If the substitution effect dominates, higher taxes reduce labour supply. Empirical evidence: labour supply among primary earners is quite inelastic (substitution effect small); but labour supply of secondary earners (typically women) is more elastic, so high marginal rates may reduce their participation.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Corporation Tax and Investment', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'Higher corporation tax reduces post-tax profits, potentially discouraging investment by: (1) reducing the internal funds available for investment; (2) reducing the post-tax return on marginal investment projects (some may fall below the cost of capital). The supply-side view is that lower CT rates attract FDI and encourage domestic investment — Ireland\'s 12.5% rate attracted major US tech companies (Apple, Google, Facebook) to locate European headquarters in Dublin. However, the empirical evidence that CT cuts significantly boost investment is mixed — firms\' investment decisions also depend heavily on demand expectations.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Supply-Side vs Keynesian Perspectives', level: 3 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Supply-Side vs Keynesian Views on Taxation',
        headers: ['Issue', 'Supply-Side View', 'Keynesian View'],
        rows: [
          ['High income tax', 'Reduces work incentives; reduces labour supply; shrinks tax base (Laffer curve)', 'Revenue funds public services with positive externalities; automatic stabiliser; multiplier effect on AD'],
          ['High corporation tax', 'Discourages investment; reduces FDI; capital relocates to lower-tax jurisdictions', 'Revenue funds public investment; redistribution from capital to labour supports consumption'],
          ['Tax cuts', 'Boost growth; expand tax base; may be self-financing (supply-side economics)', 'Primarily benefit wealthy; do not significantly raise labour supply at typical tax rates; reduce public service capacity'],
          ['Priority', 'Incentives and efficiency — lower, simpler taxes', 'Distribution and demand management — taxes fund redistribution']
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Substitution and Income Effects',
        text: 'When discussing income tax effects on work incentives, always mention BOTH the substitution effect (higher tax → leisure cheaper → work less) and the income effect (higher tax → poorer → work more). Which dominates is empirically uncertain — for most primary earners the income effect roughly offsets the substitution effect, meaning labour supply is relatively inelastic with respect to income tax.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Higher income tax creates a substitution effect (work less) and income effect (work more) — net effect on labour supply is empirically uncertain; higher corporation tax may reduce investment incentives; supply-siders emphasise incentive costs while Keynesians emphasise the demand-supporting role of tax revenues.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-2',
        prompt: 'Explain the substitution and income effects of a rise in income tax on labour supply.',
        answer: 'Substitution effect: higher income tax makes leisure relatively cheaper than working, so workers substitute leisure for work — they work less. Income effect: higher tax reduces workers\' real income, making them poorer, so they may work more hours to maintain their standard of living. If income effect > substitution effect, labour supply rises despite higher tax.'
      },
      {
        id: 'cue-2',
        blockId: 'para-3',
        prompt: 'How might a lower corporation tax rate attract FDI? Give an example.',
        answer: 'Lower corporation tax increases the post-tax return on investment, making the country more attractive to foreign firms. Ireland\'s 12.5% corporation tax rate attracted major US technology companies (Apple, Google, Facebook) to locate their European headquarters and pay taxes in Dublin — demonstrating that tax competition for mobile capital is real and significant.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_22_5;
