export const note_economics_4_20_6 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Identify and explain the key determinants of exchange rates including trade flows, capital flows, interest rate differentials, inflation differentials, and speculation.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Determinants of Exchange Rates', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'The exchange rate of a floating currency is determined by the supply and demand for that currency in the foreign exchange market. Multiple factors shift these supply and demand curves. In practice, capital flows and speculation dominate short-run exchange rate movements, while trade flows and inflation differentials matter more over the long run.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Trade Flows', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'Exports generate demand for the domestic currency (foreign buyers must purchase it to pay for goods), while imports generate supply of domestic currency (domestic buyers must sell it to buy foreign currency). A trade surplus implies net demand for the domestic currency, tending to cause appreciation. A trade deficit implies net supply, tending to cause depreciation. However, trade flows adjust slowly (weeks to months) compared to capital flows, so their effect on the exchange rate is mainly a long-run influence.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Interest Rate Differentials', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'Higher domestic interest rates attract international capital seeking higher returns, increasing demand for the domestic currency. This is the dominant short-run driver of exchange rates for most major currencies. When the US Federal Reserve raises rates relative to the ECB, capital flows into dollar assets, causing dollar appreciation. <strong>Uncovered interest parity (UIP)</strong> states that exchange rate changes should offset interest rate differentials in equilibrium — but UIP fails empirically in the short run.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Inflation Differentials (Purchasing Power Parity)', level: 3 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: '<strong>Purchasing Power Parity (PPP)</strong> states that exchange rates should adjust to equalise the price of identical goods across countries. If UK inflation is 5% while US inflation is 2%, sterling should depreciate by approximately 3% to maintain UK export price competitiveness. PPP holds well over the very long run (decades) but poorly in the short and medium run due to capital flows, non-traded goods, and sticky prices.'
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Speculation and Market Sentiment', level: 3 }
    },
    {
      id: 'para-5',
      type: 'paragraph',
      data: {
        text: 'Foreign exchange markets are the largest financial markets in the world (>$6 trillion traded daily), and the vast majority of transactions are speculative rather than for trade or investment purposes. Speculators buy currencies they expect to appreciate and sell those they expect to depreciate, creating self-fulfilling dynamics. Political uncertainty (elections, referenda) and economic data releases cause large short-run swings. The pound fell 15% following the Brexit referendum result in June 2016 purely on sentiment.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Exchange Rate Determinants',
        headers: ['Determinant', 'Effect on Currency', 'Time Horizon', 'Example'],
        rows: [
          ['Trade surplus increases (X > M)', 'Appreciation — net demand for domestic currency', 'Long run', 'Chinese RMB faced appreciation pressure from export surplus'],
          ['Interest rates rise relative to foreign', 'Appreciation — capital inflows attracted', 'Short/medium run', 'GBP appreciated when UK rates rose faster than ECB rates'],
          ['Inflation higher than trading partners', 'Depreciation — PPP: exports become less competitive', 'Long run', 'Turkish lira depreciated sharply as Turkish inflation far exceeded US inflation'],
          ['Speculation: positive sentiment', 'Appreciation — speculators buy currency', 'Very short run', 'USD appreciated on Trump election 2016 on expected fiscal stimulus'],
          ['Speculation: negative sentiment', 'Depreciation — speculators sell currency', 'Very short run', 'GBP fell 15% night of Brexit referendum June 2016'],
          ['FDI inflows increase', 'Appreciation — foreign firms buying domestic assets', 'Medium run', 'UK FDI inflows from US tech firms supporting sterling']
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Short Run vs Long Run',
        text: 'In the short run, interest rate differentials and speculation dominate. In the long run, inflation differentials (via PPP) and trade flows dominate. For evaluation, note that exchange rate models perform poorly at short-run prediction because speculative forces overwhelm fundamentals — the exchange rate is notoriously difficult to forecast.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Exchange rates are determined by trade flows (long run), interest rate differentials (short run, capital flows), inflation differentials via PPP (long run), and speculation (very short run); capital flows and speculation dominate in practice.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-3',
        prompt: 'How do interest rate differentials affect exchange rates?',
        answer: 'Higher domestic interest rates attract international capital seeking better returns, increasing demand for the domestic currency and causing appreciation. This is the dominant short-run driver — when the Fed raises rates relative to the ECB, capital flows to dollar assets, appreciating the dollar.'
      },
      {
        id: 'cue-2',
        blockId: 'para-4',
        prompt: 'State the Purchasing Power Parity theory and explain when it holds.',
        answer: 'PPP states exchange rates should adjust to equalise the price of identical goods across countries. If UK inflation is 5% and US is 2%, sterling should depreciate by ~3%. PPP holds well over the very long run (decades) but poorly in the short run due to capital flows and non-traded goods.'
      },
      {
        id: 'cue-3',
        blockId: 'para-5',
        prompt: 'Why is speculation such a powerful driver of short-run exchange rate movements?',
        answer: 'FX markets trade over $6 trillion per day, the vast majority speculative. Speculators who expect appreciation buy the currency, creating self-fulfilling dynamics. Political events like Brexit or elections cause massive sentiment shifts — the pound fell 15% on the Brexit referendum result.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_20_6;
