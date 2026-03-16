export const note_economics_4_20_5 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Explain currency market intervention mechanisms and evaluate their effectiveness, including the role of foreign exchange reserves and the risk of speculative attacks.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Currency Market Intervention', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Central banks intervene in foreign exchange markets to influence the value of their currency. Intervention may aim to prevent excessive appreciation (which hurts exporters), prevent depreciation (which causes import-cost inflation), or simply reduce short-term volatility. The effectiveness of intervention depends on reserve levels, credibility, and whether it is sterilised or unsterilised.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Preventing Currency Appreciation', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'To prevent appreciation, the central bank <strong>sells domestic currency</strong> and <strong>buys foreign currency</strong> (accumulating foreign reserves). This increases the supply of domestic currency in the FX market, pushing its price down. This approach can be sustained almost indefinitely because the central bank can print its own currency — there is no theoretical limit to how much domestic currency it can create. China used this approach extensively in the 2000s to keep the RMB undervalued, accumulating over $3 trillion in reserves by 2014.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Preventing Currency Depreciation', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'To prevent depreciation, the central bank <strong>buys domestic currency</strong> and <strong>sells foreign currency reserves</strong>. This reduces supply of domestic currency and increases demand, supporting its value. However, this is limited by the finite stock of foreign reserves — a country can run out. Additionally, if speculators believe the central bank cannot defend the rate, they will sell the currency aggressively (a speculative attack), making defence increasingly costly and ultimately futile.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Black Wednesday 1992 — ERM Speculative Attack',
        text: 'The UK joined the European Exchange Rate Mechanism (ERM) in 1990, pegging sterling at DM 2.95. By 1992, UK interest rates were too high for the domestic recession but necessary to defend the peg. George Soros and other speculators bet that the UK could not sustain the peg — selling £10bn short. The Bank of England raised interest rates to 15% in one day and spent £27bn in reserves trying to defend sterling. It failed — the UK left the ERM on 16 September 1992 (Black Wednesday). Sterling fell 15% and interest rates were cut, triggering an economic recovery.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Sterilised vs Unsterilised Intervention', level: 3 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: '<strong>Sterilised intervention</strong>: the central bank offsets the domestic money supply effect of FX intervention through open market operations (e.g. selling bonds to absorb the extra money created when buying foreign currency). This limits inflationary effects. <strong>Unsterilised intervention</strong>: the FX transaction affects the money supply directly — buying foreign currency increases domestic money supply (potentially inflationary). Sterilised intervention has less lasting impact on the exchange rate than unsterilised.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Currency Intervention: Mechanisms and Limitations',
        headers: ['Goal', 'Action', 'Mechanism', 'Limitation'],
        rows: [
          ['Prevent appreciation', 'Sell domestic currency; buy foreign', 'Increases supply of domestic currency; accumulates reserves', 'Can create domestic inflation; may be labelled currency manipulation by trading partners'],
          ['Prevent depreciation', 'Buy domestic currency; sell foreign reserves', 'Reduces supply of domestic currency; reduces reserves', 'Reserves are finite — cannot be sustained indefinitely; speculative attacks can overwhelm reserves'],
          ['Reduce volatility (managed float)', 'Buy/sell as needed; leaning against the wind', 'Smooths short-term fluctuations', 'Difficult to judge equilibrium rate; intervention may conflict with other policy goals']
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Lesson from Black Wednesday',
        text: 'Speculative attacks succeed when financial markets are larger than central bank reserves and when the economic fundamentals (interest rates, inflation, recession) are inconsistent with the target exchange rate. Credibility is essential — once markets believe the peg cannot be defended, the attack becomes self-fulfilling.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Central banks intervene in FX markets by buying/selling domestic currency; preventing appreciation (sell domestic) is theoretically unlimited; preventing depreciation (buy domestic) is limited by finite reserves and vulnerable to speculative attacks as shown by Black Wednesday 1992.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-2',
        prompt: 'Why can a central bank prevent appreciation indefinitely but not depreciation indefinitely?',
        answer: 'Preventing appreciation requires selling domestic currency — which can be printed without limit. Preventing depreciation requires buying domestic currency using foreign reserves — which are finite and can be exhausted.'
      },
      {
        id: 'cue-2',
        blockId: 'call-1',
        prompt: 'Explain the sequence of events in Black Wednesday 1992 and why the UK failed to defend the ERM peg.',
        answer: 'The UK had joined ERM at DM2.95 but its economy was in recession. High interest rates needed to defend the peg were damaging the economy. Speculators (led by Soros) bet the peg would break. The Bank of England spent £27bn and raised rates to 15% but could not match the scale of speculative selling. The fundamentals were inconsistent with the peg, making defence ultimately impossible.'
      },
      {
        id: 'cue-3',
        blockId: 'para-4',
        prompt: 'What is the difference between sterilised and unsterilised FX intervention?',
        answer: 'Sterilised: the central bank offsets the money supply effect of FX operations through open market operations, limiting inflationary impact but also limiting the exchange rate effect. Unsterilised: the FX transaction directly changes the money supply — more powerful on the exchange rate but potentially inflationary.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_20_5;
