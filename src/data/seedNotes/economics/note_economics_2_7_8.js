export const note_economics_2_7_8 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand how the Consumer Price Index (CPI) is constructed and used to measure inflation, and compare CPI with the Retail Price Index (RPI).'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'CPI Inflation Measurement', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definition',
        text: '<strong>Consumer Price Index (CPI)</strong>: a measure of the average change over time in the prices paid by consumers for a representative basket of goods and services. In the UK, the Bank of England has a 2% CPI inflation target set by the government.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'How CPI Is Constructed', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<strong>Define the basket</strong>: ONS surveys ~7,000 households to determine what a typical household buys (around 700 goods and services, updated annually)' },
          { text: '<strong>Assign weights</strong>: each item is weighted by its share of total household expenditure (e.g., housing more heavily weighted than tobacco)' },
          { text: '<strong>Collect prices</strong>: ONS price collectors visit ~140 areas monthly, collecting ~180,000 prices' },
          { text: '<strong>Calculate index</strong>: weighted average of price changes — Laspeyres-type index (base year = 100)' },
          { text: '<strong>Calculate inflation rate</strong>: percentage change in CPI from the same month of the previous year' }
        ]
      }
    },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        latex: '\\text{Inflation Rate} = \\frac{\\text{CPI}_2 - \\text{CPI}_1}{\\text{CPI}_1} \\times 100',
        caption: 'Annual CPI inflation rate formula'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Uses of CPI', level: 3 }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Monetary policy target</strong>: Bank of England aims for 2% CPI inflation; deviations require a letter to the Chancellor' },
          { text: '<strong>Wage negotiations</strong>: unions use CPI to argue for real wage increases' },
          { text: '<strong>Government benefits uprating</strong>: welfare payments and state pension previously linked to CPI (now triple lock)' },
          { text: '<strong>Index-linked securities</strong>: some government bonds pay interest linked to CPI' }
        ]
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'CPI vs RPI — key differences',
        headers: ['Feature', 'CPI', 'RPI'],
        rows: [
          ['Full name', 'Consumer Price Index', 'Retail Price Index'],
          ['Housing costs', 'Excludes mortgage interest payments and council tax', 'Includes mortgage interest payments and council tax'],
          ['Population covered', 'All private households', 'Excludes top 4% income and pensioner households'],
          ['Formula', 'Geometric mean (lower result)', 'Arithmetic mean (gives higher inflation figure)'],
          ['Used for', 'BoE inflation target, benefits, international comparisons', 'Index-linked gilts, rail fares, private pensions'],
          ['Typical difference', 'Usually ~0.5–1pp lower than RPI', 'Usually higher than CPI (RPIJ uses same formula as CPI)']
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always note that CPI <strong>excludes housing costs</strong> (mortgage interest, council tax). This is why CPI can diverge from the experience of homeowners during periods of rising house prices or interest rates. The Office for National Statistics also publishes CPIH, which includes owner-occupier housing costs.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'CPI measures the average price change of a weighted basket of ~700 goods and services. Inflation rate = % change in CPI. CPI excludes housing costs; RPI includes them and uses an arithmetic formula giving higher readings.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Always note that CPI excludes housing costs (mortgage interest, council tax). This is why CPI can diverge from the experience of homeowners during periods of rising house prices or interest rates. The Office for National Statistics also publishes CPIH, which includes owner-occupier housing costs."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'CPI measures inflation via a weighted basket; inflation rate = % change in CPI year-on-year. UK target = 2%.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-1',
        prompt: 'What is the formula for calculating the annual CPI inflation rate?',
        answer: 'Inflation rate = ((CPI₂ − CPI₁) / CPI₁) × 100'
      },
      {
        id: 'cue-2',
        blockId: 'call-1',
        prompt: 'What is the UK\'s official CPI inflation target?',
        answer: '2%, set by the government and monitored by the Bank of England.'
      },
      {
        id: 'cue-3',
        blockId: 'tbl-1',
        prompt: 'What is the main difference between CPI and RPI?',
        answer: 'CPI excludes housing costs (mortgage interest, council tax) and uses a geometric mean; RPI includes housing costs and uses an arithmetic mean, giving a higher figure.'
      },
      {
        id: 'cue-4',
        blockId: 'list-1',
        prompt: 'How does the ONS determine the weights for items in the CPI basket?',
        answer: 'By surveying around 7,000 households to find what a typical household buys, then weighting each item by its share of total household expenditure.'
      },
      {
        id: 'cue-5',
        blockId: 'list-2',
        prompt: 'Give two uses of CPI data.',
        answer: 'Setting the Bank of England\'s monetary policy target; wage negotiations; uprating government benefits; pricing index-linked bonds.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_7_8;
