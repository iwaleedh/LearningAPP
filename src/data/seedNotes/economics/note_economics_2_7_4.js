export const note_economics_2_7_4 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand Purchasing Power Parity (PPP), why market exchange rates mislead international comparisons, and how PPP adjustments improve welfare comparisons.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'PPP Comparisons', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definition',
        text: '<strong>Purchasing Power Parity (PPP)</strong>: a method of comparing incomes across countries by adjusting for differences in price levels. PPP exchange rates equalise the purchasing power of currencies — i.e., what a given sum of money can actually buy in each country.<br/><br/>The idea: if a basket of goods costs $10 in the USA and £7 in the UK, the PPP exchange rate is £1 = $1.43 (regardless of the market exchange rate).'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Why Market Exchange Rates Mislead', level: 3 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'Market exchange rates reflect supply and demand for currencies, speculation, and capital flows — <strong>not</strong> the cost of living. Converting GDP at market rates can severely understate the living standards of countries where prices are low (typically developing countries).' }] } },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — The Big Mac Index',
        text: 'The Economist\'s Big Mac Index is an informal PPP measure.<br/><br/>A Big Mac costs $5.58 in the USA and Rs 190 (≈ $2.30 at market rates) in India.<br/><br/>Using market rates, India\'s GDP looks smaller. Using PPP, the same $2.30 buys far more in India — so Indian incomes go much further.<br/><br/>PPP-adjusted GDP per capita for India is approximately <strong>2.5× higher</strong> than market-rate GDP per capita.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Market exchange rate vs PPP — differences',
        headers: ['Feature', 'Market Exchange Rate', 'PPP Adjustment'],
        rows: [
          ['Based on', 'Supply and demand for currency; financial flows', 'Price level differences between countries'],
          ['Reflects living standards?', 'Poorly — misses price level differences', 'Better — equalises purchasing power'],
          ['Advantage', 'Simple, readily available', 'More accurate for welfare comparisons'],
          ['Limitation', 'Overestimates rich countries, underestimates poor', 'Difficult to calculate; basket of goods differs'],
          ['Used by', 'Financial markets, trade statistics', 'World Bank, IMF, UN for development comparisons']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'PPP GDP per Capita — International Rankings', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'The World Bank uses <strong>GNI per capita (Atlas method)</strong> to classify countries by income group' },
          { text: 'The IMF and World Bank publish <strong>PPP-adjusted GDP per capita</strong> for international comparisons' },
          { text: 'PPP adjustments typically <strong>raise</strong> the relative position of developing countries (where prices are cheaper)' },
          { text: 'PPP adjustments can <strong>lower</strong> the relative position of high-cost developed countries' }
        ]
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When evaluating GDP/GNI comparisons between countries, always consider whether <strong>PPP adjustment</strong> has been applied. State that market exchange rate comparisons understate living standards in low-price countries.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'PPP adjusts GDP figures for differences in price levels between countries, allowing more accurate comparisons of living standards. It corrects the distortion caused by using market exchange rates.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'PPP adjusts for price level differences between countries to make GDP comparisons more meaningful.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'What does PPP stand for and what does it measure?',
        answer: 'Purchasing Power Parity — it adjusts GDP comparisons for differences in price levels between countries, measuring what money can actually buy.'
      },
      {
        id: 'cue-2',
        blockId: 'para-1',
        prompt: 'Why do market exchange rates mislead international income comparisons?',
        answer: 'Market rates reflect currency supply and demand, not the cost of living. They understate living standards in countries where prices are low.'
      },
      {
        id: 'cue-3',
        blockId: 'call-2',
        prompt: 'What informal PPP measure does The Economist use?',
        answer: 'The Big Mac Index — compares the price of a Big Mac in different countries as a measure of relative purchasing power.'
      },
      {
        id: 'cue-4',
        blockId: 'list-1',
        prompt: 'How do PPP adjustments typically change the relative income ranking of developing countries?',
        answer: 'PPP adjustments usually raise the relative position of developing countries because goods and services are cheaper there, so income goes further.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_7_4;
