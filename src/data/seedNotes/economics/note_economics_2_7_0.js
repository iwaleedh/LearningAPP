export const note_economics_2_7_0 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand what GDP measures, how real GDP is calculated by adjusting for inflation, and how to compute the GDP growth rate.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Real GDP Growth', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definitions',
        text: '<strong>GDP (Gross Domestic Product)</strong>: the total market value of all final goods and services produced within a country\'s borders in a given year.<br/><strong>Real GDP</strong>: GDP that has been adjusted for changes in the price level (inflation), so it reflects the true change in the volume of output.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Why Use Real GDP?', level: 3 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'Nominal GDP can rise even when no additional goods or services are produced — simply because prices have risen. <strong>Real GDP removes the effect of inflation</strong>, allowing us to compare economic output across different time periods accurately.' }] } },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        latex: '\\text{Real GDP} = \\frac{\\text{Nominal GDP}}{\\text{Price Index}} \\times 100',
        caption: 'Converting nominal GDP to real GDP using a price deflator'
      }
    },
    {
      id: 'eq-2',
      type: 'equation',
      data: {
        latex: '\\text{GDP Growth Rate} = \\frac{\\text{GDP}_2 - \\text{GDP}_1}{\\text{GDP}_1} \\times 100',
        caption: 'Percentage change in real GDP between two periods'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'GDP Growth Trend', level: 3 }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Real GDP growth over time, showing a recession dip followed by recovery',
        svg: '<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13"><rect width="500" height="300" fill="#f9fafb"/><line x1="60" y1="250" x2="460" y2="250" stroke="#374151" stroke-width="2"/><line x1="60" y1="250" x2="60" y2="30" stroke="#374151" stroke-width="2"/><text x="240" y="285" text-anchor="middle" fill="#374151">Time (Years)</text><text x="18" y="145" text-anchor="middle" fill="#374151" transform="rotate(-90,18,145)">Real GDP</text><polyline points="60,200 110,180 160,160 200,155 230,165 260,185 290,175 340,145 390,115 440,90" stroke="#6366f1" stroke-width="3" fill="none" stroke-linejoin="round"/><circle cx="230" cy="165" r="5" fill="#ef4444"/><circle cx="260" cy="185" r="5" fill="#ef4444"/><text x="220" y="150" fill="#ef4444" font-size="11">Recession</text><text x="215" y="162" fill="#ef4444" font-size="11">dip</text><line x1="220" y1="155" x2="225" y2="163" stroke="#ef4444" stroke-width="1"/><text x="390" y="105" fill="#6366f1" font-size="11">Recovery</text><text x="60" y="22" fill="#374151" font-size="12" font-weight="bold">Real GDP Over Time</text></svg>'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Worked Example', level: 3 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Calculating Real GDP Growth',
        text: 'Year 1: Nominal GDP = £2,000bn, Price Index = 100<br/>Year 2: Nominal GDP = £2,200bn, Price Index = 105<br/><br/>Real GDP Year 1 = 2000/100 × 100 = <strong>£2,000bn</strong><br/>Real GDP Year 2 = 2200/105 × 100 = <strong>£2,095bn</strong><br/><br/>Growth rate = ((2,095 − 2,000) / 2,000) × 100 = <strong>4.75%</strong>'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'In exam questions, always state whether you are using <strong>real or nominal GDP</strong> when making comparisons. Real GDP is the correct measure for comparing economic performance over time or across countries with different price levels.'
      }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Positive growth</strong>: real GDP rising — economy expanding' },
          { text: '<strong>Zero growth</strong>: output stagnant' },
          { text: '<strong>Negative growth</strong>: real GDP falling — contraction; two consecutive quarters = recession' },
          { text: 'UK long-run trend growth rate ≈ 2–2.5% per year' }
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Real GDP adjusts nominal GDP for inflation using a price deflator, providing a true measure of output growth. The growth rate is calculated as the percentage change in real GDP between two periods.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Real GDP removes inflation from nominal GDP to show true output growth; growth rate = % change in real GDP.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-1',
        prompt: 'What is the formula for converting nominal GDP to real GDP?',
        answer: 'Real GDP = (Nominal GDP / Price Index) × 100'
      },
      {
        id: 'cue-2',
        blockId: 'eq-2',
        prompt: 'How do you calculate the GDP growth rate?',
        answer: 'Growth rate = ((GDP₂ − GDP₁) / GDP₁) × 100'
      },
      {
        id: 'cue-3',
        blockId: 'call-1',
        prompt: 'What is the difference between nominal and real GDP?',
        answer: 'Nominal GDP is measured at current prices; real GDP is adjusted for inflation to reflect true changes in output volume.'
      },
      {
        id: 'cue-4',
        blockId: 'list-1',
        prompt: 'What defines a recession in terms of GDP?',
        answer: 'Two consecutive quarters of negative real GDP growth.'
      },
      {
        id: 'cue-5',
        blockId: 'call-3',
        prompt: 'Why should real GDP be used for international comparisons rather than nominal GDP?',
        answer: 'Real GDP removes price level differences (inflation effects), so it reflects actual changes in the volume of output rather than price changes.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_7_0;
