export const note_economics_4_20_9 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Analyse the macroeconomic effects of exchange rate changes on exports, imports, aggregate demand, inflation, and employment.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Exchange Rate Changes: Macroeconomic Effects', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Changes in the exchange rate have significant effects across all four macroeconomic objectives: economic growth (via AD and SRAS), inflation, employment, and the balance of payments. The direction of effects differs between depreciation (falling rate) and appreciation (rising rate), and between short-run and long-run outcomes.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Macroeconomic Effects: Depreciation vs Appreciation',
        headers: ['Variable', 'Effect of Depreciation', 'Effect of Appreciation'],
        rows: [
          ['Export prices (foreign currency)', 'Fall — exports become cheaper for foreign buyers', 'Rise — exports become more expensive for foreign buyers'],
          ['Export volume / revenue', 'Rise — if PED for exports > 0 (demand is elastic)', 'Fall — if PED for exports > 0'],
          ['Import prices (domestic currency)', 'Rise — imports become more expensive', 'Fall — imports become cheaper'],
          ['Import volume / spending', 'Fall — if PED for imports > 0', 'Rise — if PED for imports > 0'],
          ['Aggregate Demand (AD)', 'Rises — higher X and lower M increase (X-M); demand-pull pressure', 'Falls — lower X and higher M reduce (X-M)'],
          ['Short-Run Aggregate Supply (SRAS)', 'Shifts left — higher imported input costs raise production costs', 'Shifts right — cheaper imports reduce production costs'],
          ['Inflation (CPI)', 'Rises — cost-push from imported goods + demand-pull from AD', 'Falls — cheaper imports reduce price level; disinflationary'],
          ['Employment', 'Rises — higher AD and net exports raise demand for labour', 'Falls — lower AD and competitiveness reduce labour demand'],
          ['Current account balance', 'Improves (medium/long run) — if Marshall-Lerner condition holds', 'Worsens (medium/long run) — if Marshall-Lerner condition holds'],
          ['Real wages / living standards', 'Fall — higher import prices erode purchasing power', 'Rise — cheaper imports increase real purchasing power']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'AD/AS Analysis of Depreciation', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'A depreciation has <strong>two simultaneous effects</strong> on the economy. On the demand side, it shifts AD rightward (higher net exports boost spending). On the supply side, it shifts SRAS leftward (higher imported input costs raise firms\' costs). The net effect on output depends on which effect dominates. If the AD shift is larger, real GDP and the price level both rise. The inflationary impact may prompt the central bank to raise interest rates, partially offsetting the demand boost.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Conflict Between Objectives',
        text: 'Depreciation illustrates the conflict between macroeconomic objectives: it boosts growth and employment (via AD) but worsens inflation (via cost-push). An appreciation reduces inflation but at the cost of lower growth and higher unemployment. Policymakers face a trade-off — they cannot achieve all objectives simultaneously through exchange rate management alone.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Use AD/AS Diagram',
        text: 'For maximum marks, draw an AD/AS diagram showing depreciation: AD shifts right (higher X-M) AND SRAS shifts left (higher import costs). Show price level rising (confirming inflation) and real output rising (if AD shift > SRAS shift). Then evaluate: depends on elasticities, spare capacity, import-dependence of the economy.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Exchange rate appreciation: harms export competitiveness (demand falls, jobs lost in tradables) but helps consumers via cheaper imports and lower inflation. High-scoring essays weigh these trade-offs and discuss distributional impacts across regions."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Depreciation raises exports, reduces imports, boosts AD (growth, employment) and causes cost-push inflation; appreciation does the reverse — improving inflation at the cost of lower growth; both create a conflict between macroeconomic objectives.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-1',
        prompt: 'How does depreciation affect SRAS and why?',
        answer: 'Depreciation shifts SRAS leftward because imported raw materials and components become more expensive in domestic currency, raising firms\' production costs. This is cost-push inflationary pressure — higher price level at each level of output.'
      },
      {
        id: 'cue-2',
        blockId: 'para-2',
        prompt: 'Explain the two simultaneous macroeconomic effects of a depreciation.',
        answer: 'AD shifts right (higher net exports increase aggregate demand) and SRAS shifts left (higher imported input costs raise production costs). The net effect on GDP depends on which effect dominates. Both effects raise the price level, creating inflationary pressure.'
      },
      {
        id: 'cue-3',
        blockId: 'call-1',
        prompt: 'What objective conflict does an exchange rate depreciation illustrate?',
        answer: 'Depreciation boosts growth and employment (via higher net exports and AD) but worsens inflation (via cost-push from higher import prices). Conversely, appreciation reduces inflation but at the cost of lower growth and higher unemployment — showing the trade-off between objectives.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_20_9;
