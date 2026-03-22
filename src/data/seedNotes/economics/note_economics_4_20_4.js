export const note_economics_4_20_4 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Compare fixed, managed, and floating exchange rate systems, evaluating their advantages and disadvantages for different types of economy.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Exchange Rate Systems', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'An <strong>exchange rate system</strong> defines how a country\'s currency is valued relative to others. The choice of system involves fundamental trade-offs between exchange rate stability (which helps international trade and investment) and monetary policy independence (the ability to use interest rates to stabilise the domestic economy). Most countries today operate somewhere on a spectrum between the extremes of a completely fixed rate and a freely floating rate.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Fixed Exchange Rate', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'Under a <strong>fixed exchange rate</strong>, the central bank commits to maintaining the currency at a set value against a reference currency or basket. Maintenance requires intervention: buying the domestic currency (selling foreign reserves) when it faces downward pressure, and selling domestic currency (buying foreign reserves) when it faces upward pressure. Interest rates are subordinated to the exchange rate target — they must be raised to attract capital when the currency is under pressure. Examples: the Bretton Woods system (1944-71); Hong Kong dollar peg to USD; Gulf currency pegs.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Managed Float', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'A <strong>managed float</strong> (or "dirty float") allows the exchange rate to fluctuate according to market forces but with central bank intervention to smooth excessive volatility or prevent misalignment. The central bank does not commit to a specific rate but intervenes when the rate moves too far from fundamentals. Most G20 economies officially operate managed floats, though China\'s management has been more active and controversial.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Free Float', level: 3 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: 'Under a <strong>free float</strong>, the exchange rate is determined entirely by market supply and demand with no government or central bank intervention. No country truly operates a pure free float — even the US, UK, and Eurozone intervene occasionally. A free float preserves full monetary policy independence and provides automatic adjustment to external shocks (a deficit causes depreciation which restores competitiveness) but exposes businesses to exchange rate uncertainty.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Exchange Rate Systems: Comparison',
        headers: ['Feature', 'Fixed Rate', 'Managed Float', 'Free Float'],
        rows: [
          ['How maintained', 'Central bank intervention + interest rate changes', 'Discretionary intervention by central bank', 'Market forces only; no intervention'],
          ['Monetary policy independence', 'None — rates set to defend peg', 'Partial — can use rates domestically but may intervene', 'Full — rates set for domestic goals'],
          ['Exchange rate certainty', 'High — businesses can plan long-term', 'Moderate — some volatility permitted', 'Low — volatile; businesses face uncertainty'],
          ['Adjustment mechanism', 'Domestic deflation/unemployment to restore competitiveness', 'Mix of market and managed adjustment', 'Automatic depreciation/appreciation restores balance'],
          ['Reserve requirements', 'Large reserves needed to defend peg', 'Moderate reserves needed for smoothing', 'No reserve requirement'],
          ['Examples', 'Hong Kong USD peg; Eurozone (fixed within)', 'China RMB; most emerging markets', 'Approximately UK £; US $; euro vs others']
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Impossible Trinity (Trilemma)',
        text: 'A country cannot simultaneously have all three of: (1) a fixed exchange rate, (2) free capital mobility, and (3) independent monetary policy. It can only have two. The Eurozone chose fixed rates and capital mobility, giving up monetary independence. The UK chose monetary independence and capital mobility, allowing the exchange rate to float.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always link the choice of exchange rate system to the impossible trinity. A fixed rate is appropriate for small open economies highly dependent on trade (Hong Kong), where exchange rate stability is most valuable. A floating rate suits large diversified economies where monetary independence is more valuable than exchange rate stability.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Distinguish exchange rate regimes clearly: fixed (Bretton Woods, currency board) vs floating (managed intervention vs clean float). Examiners test whether you explain trade-offs: exchange rate regimes constrain monetary policy differently."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Exchange rate systems range from fixed (central bank pegs requiring large reserves and sacrificing monetary independence) through managed floats to free floats (market-determined, full monetary independence but volatile); the impossible trinity means no system can achieve all three of fixed rates, capital mobility, and monetary independence.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-2',
        prompt: 'How does a central bank maintain a fixed exchange rate when the currency faces downward pressure?',
        answer: 'It buys the domestic currency using foreign exchange reserves, and/or raises interest rates to attract capital inflows. Both actions support the currency at the target rate, but require adequate reserves and sacrifice domestic monetary policy goals.'
      },
      {
        id: 'cue-2',
        blockId: 'call-1',
        prompt: 'State the impossible trinity (trilemma) and give an example of a country that has chosen each combination.',
        answer: 'A country cannot simultaneously have a fixed exchange rate, free capital mobility, AND independent monetary policy — only two are possible. The Eurozone chose fixed rates + capital mobility (no monetary independence). The UK chose capital mobility + monetary independence (floating rate). China historically chose fixed rates + monetary independence (capital controls).'
      },
      {
        id: 'cue-3',
        blockId: 'para-4',
        prompt: 'How does a free float provide an automatic external adjustment mechanism?',
        answer: 'A current account deficit causes excess supply of domestic currency, leading to depreciation. Depreciation makes exports cheaper and imports dearer, switching expenditure towards domestic goods and restoring current account balance automatically — without needing government intervention.'
      },
      {
        id: 'cue-4',
        blockId: 'tbl-1',
        prompt: 'Compare the reserve requirements and exchange rate certainty under fixed vs floating systems.',
        answer: 'Fixed systems require large foreign exchange reserves to defend the peg against speculative attacks. Floating systems require no reserves. Fixed systems provide high certainty for businesses; floating systems create exchange rate volatility that businesses must manage through hedging.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_20_4;
