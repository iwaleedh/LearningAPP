export const note_economics_4_20_8 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Distinguish between devaluation and depreciation, and analyse their effects on exports, imports, inflation, and aggregate demand.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Devaluation vs Depreciation', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Devaluation vs Depreciation',
        headers: ['Concept', 'Definition', 'Exchange Rate System', 'Example'],
        rows: [
          ['Devaluation', 'A deliberate, policy-driven reduction in the official fixed exchange rate by the government or central bank', 'Fixed exchange rate only', 'UK devalued the pound from $2.80 to $2.40 in November 1967 under Harold Wilson ("pound in your pocket" speech)'],
          ['Depreciation', 'A market-driven fall in a floating currency\'s value due to excess supply over demand', 'Floating or managed float', 'GBP fell ~25% against USD/EUR following the Brexit referendum 2016-2017']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Effects of a Fall in the Exchange Rate', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Exports become cheaper</strong> in foreign currency terms — quantity of exports demanded rises, export revenue in domestic currency may rise (if PED > 0)' },
          { text: '<strong>Imports become more expensive</strong> in domestic currency terms — quantity of imports demanded falls, import spending in domestic currency rises initially (J-curve)' },
          { text: '<strong>Current account may improve</strong> — subject to Marshall-Lerner condition; if |PED_X| + |PED_M| > 1, CA improves in medium/long run' },
          { text: '<strong>Import-cost inflation rises</strong> — more expensive imported goods and raw materials push up the price level (cost-push inflation; SRAS shifts left)' },
          { text: '<strong>Aggregate demand rises</strong> — higher net exports (X-M) increase AD (demand-pull pressure)' },
          { text: '<strong>Real wages fall</strong> — higher import prices erode purchasing power of nominal wages; living standards of consumers fall' },
          { text: '<strong>Debt burden rises</strong> — any foreign-currency denominated debt becomes more expensive to service in domestic currency' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Devaluation as a Policy Tool', level: 3 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Governments historically devalued fixed-rate currencies to restore competitiveness after inflation had eroded it. The 1967 UK devaluation aimed to correct a trade deficit. Under a floating rate, the equivalent policy is to cut interest rates or engage in QE, which typically leads to currency depreciation. Devaluation/depreciation is sometimes called "competitive devaluation" when deliberately used to gain export advantage — if all countries do it simultaneously, the gains cancel out (beggar-thy-neighbour policy).'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Risks of Depreciation/Devaluation',
        text: 'Import-cost inflation can be severe — particularly for import-dependent economies. If the depreciation triggers a wage-price spiral (workers demand higher wages to compensate for higher prices), the initial competitiveness gain is eroded. Foreign-currency debt becomes more expensive to service, potentially triggering sovereign debt crises in emerging markets.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Post-Brexit GBP Depreciation',
        text: 'Following the June 2016 Brexit referendum, GBP depreciated ~15% against USD and EUR almost immediately. Effects: UK goods exports became ~15% cheaper for foreign buyers; imported food, fuel and manufactured goods became more expensive; UK inflation rose from ~0.5% (mid-2016) to 3.1% by late 2017; real wages fell as prices rose faster than nominal wages.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Devaluation = policy-induced fixed-rate decrease; depreciation = floating-rate market decrease. Use correct terms consistently. Explain mechanism: devaluation makes exports cheaper, but if passed to prices, real effects depend on wage-price dynamics."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "A fundamental distinction that examiners look for: income is a flow of money over time, whereas wealth is a stock of assets at a given point in time."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Devaluation is a deliberate fixed-rate reduction; depreciation is a market-driven floating-rate fall; both make exports cheaper and imports dearer, boosting AD and net exports while creating import-cost inflation and eroding real wages.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-1',
        prompt: 'What distinguishes a devaluation from a depreciation?',
        answer: 'Devaluation is a deliberate government/central bank decision to reduce the fixed exchange rate (policy choice). Depreciation is a market-driven fall in a floating currency due to excess supply. Both reduce the currency\'s value but by different mechanisms.'
      },
      {
        id: 'cue-2',
        blockId: 'list-1',
        prompt: 'State four macroeconomic effects of a currency depreciation.',
        answer: 'Exports cheaper for foreign buyers (X rises); imports dearer in domestic currency (M falls); import-cost inflation rises (SRAS shifts left); AD rises as net exports increase; real wages fall as higher import prices erode purchasing power.'
      },
      {
        id: 'cue-3',
        blockId: 'call-2',
        prompt: 'What happened to UK inflation following the post-Brexit depreciation and why?',
        answer: 'UK inflation rose from ~0.5% in mid-2016 to 3.1% by late 2017. The 15% depreciation made imported goods, food, and fuel significantly more expensive in pound terms — classic cost-push inflation. Real wages fell as prices rose faster than nominal wages.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_20_8;
