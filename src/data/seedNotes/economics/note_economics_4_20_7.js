export const note_economics_4_20_7 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Distinguish between revaluation and appreciation of a currency, and analyse their effects on trade flows, inflation, and economic growth.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Revaluation vs Appreciation', level: 2 }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Key Definitions', level: 3 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Revaluation vs Appreciation',
        headers: ['Concept', 'Definition', 'Exchange Rate System', 'Example'],
        rows: [
          ['Revaluation', 'A deliberate, policy-driven increase in the official fixed exchange rate by the government or central bank', 'Fixed exchange rate only', 'China\'s RMB revalued by 2.1% against the USD in July 2005 under US pressure'],
          ['Appreciation', 'A market-driven increase in a floating currency\'s value due to changes in supply and demand', 'Floating or managed float', 'GBP appreciated against EUR 2013-2015 as UK economy outperformed Eurozone']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Effects of a Rise in the Exchange Rate (Revaluation or Appreciation)', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Exports become more expensive</strong> in foreign currency terms — quantity of exports demanded falls (assuming PED > 0)' },
          { text: '<strong>Imports become cheaper</strong> in domestic currency terms — quantity of imports rises' },
          { text: '<strong>Current account deteriorates</strong> — subject to Marshall-Lerner condition and J-curve dynamics' },
          { text: '<strong>Import-cost inflation falls</strong> — cheaper imported goods and raw materials push down the price level (disinflationary)' },
          { text: '<strong>Aggregate demand may fall</strong> — lower export revenues and higher import spending reduce net exports (X-M) component of AD' },
          { text: '<strong>SRAS shifts right</strong> — cheaper imported inputs reduce production costs, shifting SRAS right (beneficial supply-side effect)' },
          { text: '<strong>Living standards of import consumers rise</strong> — cheaper imports increase real purchasing power' }
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'When Might Revaluation Be Desirable?', level: 3 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'A country may choose to revalue if: (1) it faces imported inflation from a rapidly depreciating currency it is pegged to; (2) it wants to increase the purchasing power of domestic consumers; (3) it faces international pressure over a large trade surplus (as China did from the US); (4) it is importing raw materials and a stronger currency reduces input costs. However, revaluation risks damaging export competitiveness and growth.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Case Study: China\'s RMB Revaluation 2005',
        text: 'China maintained a strict peg to the USD for years, accumulating a massive current account surplus. Under intense US pressure (Congress threatened tariffs), China revalued the RMB by 2.1% in July 2005 and moved to a managed float against a basket of currencies. The RMB subsequently appreciated gradually. The US argued the RMB remained undervalued; China argued the surplus reflected structural savings rates, not currency manipulation.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Distinguish Mechanism from System',
        text: 'The key distinction is mechanism: revaluation = deliberate policy decision in a fixed system; appreciation = market forces in a floating system. The economic effects on trade, inflation and AD are identical — what differs is the cause and the degree of control the government has.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Revaluation is a deliberate policy increase in a fixed exchange rate; appreciation is a market-driven rise in a floating rate; both make exports more expensive and imports cheaper, reducing net exports and import-cost inflation.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-1',
        prompt: 'What is the difference between revaluation and appreciation?',
        answer: 'Revaluation is a deliberate government/central bank decision to increase the fixed exchange rate. Appreciation is a market-driven rise in a floating currency\'s value. Both increase the currency\'s value but through different mechanisms — one is policy, the other is market forces.'
      },
      {
        id: 'cue-2',
        blockId: 'list-1',
        prompt: 'State three macroeconomic effects of a currency appreciation.',
        answer: 'Exports become more expensive abroad (X falls); imports become cheaper in domestic terms (M rises); current account worsens; import-cost inflation falls (disinflationary); AD falls as net exports decrease; SRAS shifts right as imported input costs fall.'
      },
      {
        id: 'cue-3',
        blockId: 'call-1',
        prompt: 'Why did China revalue the RMB in 2005 and what was the policy context?',
        answer: 'China\'s large current account surplus with the US triggered political pressure — Congress threatened retaliatory tariffs. China revalued by 2.1% and moved to a managed float, allowing gradual subsequent appreciation. The US argued the RMB remained substantially undervalued.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_20_7;
