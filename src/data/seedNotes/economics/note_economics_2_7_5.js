export const note_economics_2_7_5 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Define recession and depression using the technical GDP criterion, identify their economic consequences, and distinguish between the technical and popular uses of the term recession.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Recession Definition', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Technical Definition',
        text: '<strong>Recession</strong>: a period of <strong>two consecutive quarters of negative real GDP growth</strong>.<br/><br/><strong>Depression</strong>: a prolonged and severe recession, typically involving a fall in real GDP of 10% or more, lasting several years, and accompanied by very high unemployment (e.g., the Great Depression of the 1930s).'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Exam Warning',
        text: 'The <strong>technical definition</strong> requires exactly two consecutive quarters of negative growth. In popular usage, people sometimes use "recession" loosely — but in exams you must use the technical two-quarter definition. Note: a slowdown in growth (growth still positive but slower) is <strong>not</strong> a recession.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Causes of Recession', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Fall in aggregate demand</strong> (AD): collapse of consumer confidence, tighter credit conditions, fall in investment' },
          { text: '<strong>External shock</strong>: global financial crisis, oil price spike, pandemic, war' },
          { text: '<strong>Tight monetary policy</strong>: high interest rates reducing borrowing and spending' },
          { text: '<strong>Fiscal austerity</strong>: government spending cuts reducing AD' },
          { text: '<strong>Asset price collapse</strong>: falling house/stock prices reduce household wealth and spending' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Effects of Recession', level: 3 }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Rising unemployment</strong>: firms cut output → lay off workers → cyclical unemployment rises' },
          { text: '<strong>Falling investment</strong>: firms lose confidence; low capacity utilisation reduces incentive to invest' },
          { text: '<strong>Lower tax revenue</strong>: less income, spending, and profit → government receipts fall' },
          { text: '<strong>Higher welfare spending</strong>: unemployment benefits, housing support rise (automatic stabilisers activate)' },
          { text: '<strong>Widening budget deficit</strong>: tax revenues fall and spending rises simultaneously' },
          { text: '<strong>Deflationary pressures</strong>: spare capacity reduces price pressure; risk of deflation' },
          { text: '<strong>Mental health and social costs</strong>: job insecurity, poverty, inequality worsen' }
        ]
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Recession vs Depression',
        headers: ['Feature', 'Recession', 'Depression'],
        rows: [
          ['Technical definition', '2+ consecutive quarters of negative real GDP growth', 'Prolonged recession; GDP falls 10%+ or lasts 3+ years'],
          ['Duration', 'Typically months to 1–2 years', 'Several years'],
          ['GDP fall', 'Modest (e.g., −1% to −3%)', 'Severe (e.g., US GDP fell ~30% in 1929–33)'],
          ['Unemployment', 'Rises significantly', 'Very high (e.g., 25% in US 1930s)'],
          ['Example', 'UK 2008–09 financial crisis', 'Great Depression 1929–1933']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'A recession is technically defined as two consecutive quarters of negative real GDP growth. Effects include rising unemployment, falling investment, lower tax revenues, and widening budget deficits.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Exam Warning",
        text: "The technical definition requires exactly two consecutive quarters of negative growth. In popular usage, people sometimes use recession loosely \u2014 but in exams you must use the technical two-quarter definition. Note: a slowdown in growth (growth still positive but slower) is not a recession."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Recession = two consecutive quarters of negative real GDP growth; causes rising unemployment, falling investment and tax revenues.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'What is the technical definition of a recession?',
        answer: 'Two consecutive quarters of negative real GDP growth.'
      },
      {
        id: 'cue-2',
        blockId: 'call-1',
        prompt: 'How does a depression differ from a recession?',
        answer: 'A depression is a prolonged and severe recession, typically involving a GDP fall of 10%+ lasting several years, with very high unemployment.'
      },
      {
        id: 'cue-3',
        blockId: 'list-2',
        prompt: 'List three economic effects of a recession.',
        answer: 'Rising unemployment; falling investment; lower tax revenues; higher welfare spending; widening budget deficit.'
      },
      {
        id: 'cue-4',
        blockId: 'call-2',
        prompt: 'Is a slowdown in growth (growth still positive) classified as a recession?',
        answer: 'No — growth must be negative for at least two consecutive quarters to constitute a recession.'
      },
      {
        id: 'cue-5',
        blockId: 'list-1',
        prompt: 'Give two causes of a recession.',
        answer: 'A fall in aggregate demand (e.g., collapse in consumer confidence); or an external shock such as a financial crisis, oil price spike, or pandemic.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_7_5;
