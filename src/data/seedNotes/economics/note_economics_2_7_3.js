export const note_economics_2_7_3 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Distinguish between total GDP and GDP per capita, understand when each measure is appropriate, and evaluate the limitations of per capita figures.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Total vs Per Capita Output', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definitions',
        text: '<strong>Total GDP</strong>: the aggregate value of all output produced in an economy — measures the overall size of the economy.<br/><br/><strong>GDP per capita</strong>: total GDP divided by the population — measures average output (or income) per person.<br/><br/>GDP per capita = Total GDP / Population'
      }
    },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        latex: '\\text{GDP per capita} = \\frac{\\text{Total GDP}}{\\text{Population}}',
        caption: 'GDP per capita formula'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'When to Use Each Measure', level: 3 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Total GDP vs GDP per capita — use cases and limitations',
        headers: ['Feature', 'Total GDP', 'GDP per capita'],
        rows: [
          ['What it measures', 'Size/power of the whole economy', 'Average standard of living per person'],
          ['Best used for', 'Comparing economic power between countries, trade capacity', 'Comparing living standards and welfare across countries or time'],
          ['Example', 'China has higher total GDP than Switzerland', 'Switzerland has much higher GDP per capita than China'],
          ['Effect of population growth', 'Total GDP can rise while living standards fall if pop grows faster', 'Accounts for population — better for welfare comparisons'],
          ['Key limitation', 'Ignores population size; large countries appear richer', 'Ignores income distribution within the country']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Limitations of GDP per Capita', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Income distribution</strong>: per capita is an average — a highly unequal society may have a high per capita GDP while the majority of people remain poor (e.g., large Gini coefficient)' },
          { text: '<strong>Does not capture non-monetary welfare</strong>: leisure time, environmental quality, public services quality' },
          { text: '<strong>PPP not accounted for</strong>: per capita in market exchange rates does not reflect what money can actually buy in each country' },
          { text: '<strong>Informal economy</strong>: subsistence farming and black market activity not counted — underestimates welfare in developing countries' }
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'Country A: Total GDP = $500bn, Population = 10m → GDP per capita = $50,000<br/>Country B: Total GDP = $2,000bn, Population = 200m → GDP per capita = $10,000<br/><br/>Country B is a bigger economy overall, but Country A\'s residents are on average <strong>5 times better off</strong> in terms of output per person.'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When comparing living standards between countries, always use <strong>real GDP per capita</strong> (adjusted for both inflation and population). Acknowledge the limitation that it ignores income inequality.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Total GDP measures overall economic size; GDP per capita divides by population for average living standards. Per capita is better for welfare comparisons but ignores income distribution.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'GDP per capita = total GDP / population; better for living standards but masks income inequality.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'What is the formula for GDP per capita?',
        answer: 'GDP per capita = Total GDP / Population'
      },
      {
        id: 'cue-2',
        blockId: 'tbl-1',
        prompt: 'Why might a country have high total GDP but low GDP per capita?',
        answer: 'Because it has a very large population — e.g., China has high total GDP but moderate GDP per capita due to its 1.4 billion people.'
      },
      {
        id: 'cue-3',
        blockId: 'list-1',
        prompt: 'What is the main limitation of GDP per capita as a measure of living standards?',
        answer: 'It is an average that ignores the distribution of income — a country with extreme inequality could have high per capita GDP while most people remain poor.'
      },
      {
        id: 'cue-4',
        blockId: 'call-3',
        prompt: 'What is the most appropriate GDP measure for comparing living standards internationally?',
        answer: 'Real GDP per capita adjusted for PPP — this accounts for inflation, population size, and differences in price levels between countries.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_7_3;
