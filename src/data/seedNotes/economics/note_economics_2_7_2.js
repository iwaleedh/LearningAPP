export const note_economics_2_7_2 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Distinguish between real and nominal output, understand the role of price deflators, and apply the conversion formula with a worked example.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Real vs Nominal Output', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definitions',
        text: '<strong>Nominal GDP</strong>: the value of output measured at <em>current prices</em> — i.e., the prices that prevailed in the year of measurement. It rises if either output rises OR prices rise.<br/><br/><strong>Real GDP</strong>: the value of output measured at <em>constant (base-year) prices</em>. It only rises if the actual volume of production increases.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Price Deflator', level: 3 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'A <strong>price deflator</strong> (also called the GDP deflator) is a price index that covers all goods and services in the economy — broader than CPI, which only covers consumer goods. It is used to strip inflation out of nominal GDP.' }] } },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        latex: '\\text{GDP Deflator} = \\frac{\\text{Nominal GDP}}{\\text{Real GDP}} \\times 100',
        caption: 'The GDP deflator as a price index'
      }
    },
    {
      id: 'eq-2',
      type: 'equation',
      data: {
        latex: '\\text{Real GDP} = \\frac{\\text{Nominal GDP}}{\\text{GDP Deflator}} \\times 100',
        caption: 'Deriving real GDP from nominal GDP'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Worked Example', level: 3 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Converting Nominal to Real GDP',
        text: 'Nominal GDP = £2,000bn<br/>CPI (Price Deflator) = 110 (base year = 100)<br/><br/>Real GDP = (2,000 / 110) × 100 = <strong>£1,818bn</strong><br/><br/>Interpretation: Of the £2,000bn nominal GDP, only £1,818bn represents real output growth; the rest (£182bn) reflects price increases.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Real vs Nominal GDP — key differences',
        headers: ['Feature', 'Nominal GDP', 'Real GDP'],
        rows: [
          ['Prices used', 'Current year prices', 'Base year (constant) prices'],
          ['Rises when output rises', 'Yes', 'Yes'],
          ['Rises when prices rise', 'Yes (misleading)', 'No (stripped out)'],
          ['Best for time comparisons', 'No', 'Yes'],
          ['Best for international comparisons', 'No', 'Yes (with PPP adjustment)'],
          ['Affected by inflation', 'Yes', 'No']
        ]
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Never use <strong>nominal GDP</strong> to compare economic performance over time or between countries. If nominal GDP rose by 5% but inflation was 5%, real GDP growth was 0% — no genuine improvement in output.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Nominal GDP is at current prices and includes inflation; real GDP uses constant base-year prices to show only true volume changes. Real GDP = (Nominal GDP / Price Deflator) × 100.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Real GDP adjusts nominal GDP for inflation using a price deflator to measure true output volume changes.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'What is the difference between nominal and real GDP?',
        answer: 'Nominal GDP uses current prices (includes inflation); real GDP uses constant base-year prices (reflects only true output changes).'
      },
      {
        id: 'cue-2',
        blockId: 'eq-2',
        prompt: 'What formula converts nominal GDP to real GDP?',
        answer: 'Real GDP = (Nominal GDP / GDP Deflator) × 100'
      },
      {
        id: 'cue-3',
        blockId: 'call-2',
        prompt: 'If nominal GDP is £2,000bn and the price deflator is 110, what is real GDP?',
        answer: 'Real GDP = (2,000 / 110) × 100 = £1,818bn'
      },
      {
        id: 'cue-4',
        blockId: 'call-3',
        prompt: 'Why is it misleading to compare nominal GDP across years?',
        answer: 'Nominal GDP can rise purely because prices rose, giving the false impression of economic growth even if output did not change.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_7_2;
