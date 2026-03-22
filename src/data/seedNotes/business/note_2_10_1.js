export const note_business_2_10_1 = {
  pdfPath: '/notes/business/wbs12-10.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Analyse how changes in the exchange rate affect the costs, revenues and competitiveness of UK businesses that export or import, using appreciation and depreciation examples.' }
    },
    {
      id: 'h-exchange-def',
      type: 'heading',
      data: { text: 'What Is the Exchange Rate?', level: 2 }
    },
    {
      id: 'p-exchange-def',
      type: 'paragraph',
      data: { text: 'The <b>exchange rate</b> is the price of one currency expressed in terms of another. For example, if £1 = $1.25, a UK business selling a product for £100 receives $125 from American buyers. Exchange rates fluctuate constantly due to trade flows, investor confidence, interest rates and government policy. Two key movements are <b>appreciation</b> (the pound rises in value) and <b>depreciation</b> (the pound falls in value).' }
    },
    {
      id: 'callout-key-terms',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Terms',
        text: '<b>Appreciation:</b> The pound buys more foreign currency — £1 buys more dollars/euros than before.<br><b>Depreciation:</b> The pound buys less foreign currency — £1 buys fewer dollars/euros than before.'
      }
    },
    {
      id: 'h-appreciation',
      type: 'heading',
      data: { text: 'Effect of Pound Appreciation (£ rises)', level: 2 }
    },
    {
      id: 'p-appreciation',
      type: 'paragraph',
      data: { text: 'When the pound <b>appreciates</b>, UK exports become <b>more expensive</b> in foreign currency terms — foreign buyers get fewer pounds for their money, so UK goods cost more. This reduces the international price competitiveness of UK exporters, potentially cutting export volumes and revenues. However, UK importers benefit: imports become <b>cheaper</b> in sterling terms, reducing input costs for firms that source materials or components from abroad.' }
    },
    {
      id: 'callout-worked-appreciation',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Appreciation',
        text: 'A UK firm sells a machine for £10,000. When £1 = €1.10, the price in euros is €11,000. If the pound appreciates to £1 = €1.25, the same machine now costs €12,500 — 14% more expensive for the European buyer. The firm loses competitiveness unless it cuts its sterling price.'
      }
    },
    {
      id: 'h-depreciation',
      type: 'heading',
      data: { text: 'Effect of Pound Depreciation (£ falls)', level: 2 }
    },
    {
      id: 'p-depreciation',
      type: 'paragraph',
      data: { text: 'When the pound <b>depreciates</b>, UK exports become <b>cheaper</b> for foreign buyers, boosting price competitiveness and potentially increasing export volumes. However, imports become <b>more expensive</b> in sterling terms — firms that rely on imported raw materials, components or energy face higher costs, squeezing margins. Depreciation can also fuel domestic inflation (cost-push inflation) as import prices rise.' }
    },
    {
      id: 'callout-worked-depreciation',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Depreciation',
        text: 'A UK firm imports steel priced at €5,000 per tonne. When £1 = €1.25, this costs £4,000. If the pound depreciates to £1 = €1.00, the same steel costs £5,000 — a 25% increase in sterling cost. This raises the firm\'s production costs significantly.'
      }
    },
    {
      id: 'table-fx-effects',
      type: 'comparisonTable',
      data: {
        caption: 'Summary: Exchange Rate Change Effects',
        headers: ['Movement', 'Effect on UK Exporters', 'Effect on UK Importers'],
        rows: [
          ['£ appreciates (rises)', '↑ Price abroad → less competitive → ↓ export volume', '↓ Import costs in £ → cheaper inputs'],
          ['£ depreciates (falls)', '↓ Price abroad → more competitive → ↑ export volume', '↑ Import costs in £ → higher input costs']
        ]
      }
    },
    {
      id: 'h-factors',
      type: 'heading',
      data: { text: 'Factors Affecting the Impact', level: 2 }
    },
    {
      id: 'list-factors',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Price elasticity of demand:</b> If demand for UK exports is inelastic, appreciation has less impact on export volumes.' },
          { text: '<b>Proportion of imports in cost base:</b> Firms with many imported inputs suffer more from depreciation.' },
          { text: '<b>Hedging:</b> Firms can use forward contracts to lock in exchange rates and reduce currency risk.' },
          { text: '<b>Time lag:</b> Import/export volumes may take 6–18 months to adjust after a currency movement (J-curve effect).' }
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always state the direction of the exchange rate change clearly, then trace through: foreign price of exports → competitiveness → volume → revenue. Then analyse costs (imported inputs). Conclude by considering PED and hedging to assess the net impact.'
      }
    },
    {
      id: 'enr-t10a-svg-business-cycle',
      type: 'svg',
      data: {
        svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 240' font-family='Arial,sans-serif'><rect width='420' height='240' fill='#0f172a' rx='8'/><text x='210' y='18' text-anchor='middle' font-size='12' font-weight='bold' fill='#1e293b'>The Business Cycle</text><line x1='30' y1='200' x2='400' y2='200' stroke='#334155' stroke-width='1.5'/><line x1='30' y1='25' x2='30' y2='205' stroke='#334155' stroke-width='1.5'/><text x='215' y='218' text-anchor='middle' font-size='10' fill='#64748b'>Time</text><text x='16' y='115' font-size='10' fill='#64748b' transform='rotate(-90,16,115)'>GDP</text><path d='M 35,160 C 80,155 100,80 150,65 C 200,50 220,140 250,160 C 280,180 300,100 340,75 C 360,65 375,90 390,120' stroke='#6366f1' stroke-width='3' fill='none'/><text x='150' y='57' text-anchor='middle' font-size='10' fill='#10b981' font-weight='bold'>Boom</text><text x='250' y='175' text-anchor='middle' font-size='10' fill='#ef4444' font-weight='bold'>Recession</text><text x='340' y='67' text-anchor='middle' font-size='10' fill='#10b981' font-weight='bold'>Recovery</text><text x='80' y='145' text-anchor='middle' font-size='10' fill='#f59e0b' font-weight='bold'>Growth</text><line x1='30' y1='120' x2='400' y2='120' stroke='#94a3b8' stroke-width='1' stroke-dasharray='4'/><text x='405' y='123' font-size='9' fill='#94a3b8'>Trend</text></svg>",
        caption: 'Business cycle: GDP over time showing boom, recession, and recovery phases'
      }
    },
    {
      id: 'enr-t10a-h-jcurve',
      type: 'heading',
      data: { text: 'The J-Curve Effect', level: 2 }
    },
    {
      id: 'enr-t10a-p-jcurve',
      type: 'paragraph',
      data: { text: 'When the pound depreciates, the expected improvement in the trade balance (more exports, fewer imports) does not happen immediately. Existing contracts are honoured at old exchange rates, and firms take time to adjust their sources of supply. The trade balance may <b>worsen before it improves</b>. Graphed over time, this pattern resembles the letter J — hence the <b>J-curve effect</b>. Businesses should be aware that the full benefits of depreciation (improved export competitiveness) may take 6\u201318 months to materialise.' }
    },
    {
      id: 'enr-t10a-h-hedging-detail',
      type: 'heading',
      data: { text: 'Managing Currency Risk: Hedging Strategies', level: 2 }
    },
    {
      id: 'enr-t10a-p-hedging',
      type: 'paragraph',
      data: { text: 'Businesses can reduce exchange rate risk through <b>hedging</b> strategies. A <b>forward contract</b> locks in an exchange rate today for a transaction that will occur in the future — e.g. a UK importer agrees to buy euros at today\'s rate in three months\' time, eliminating the risk of sterling depreciation. <b>Natural hedging</b> occurs when a firm matches its foreign currency revenues and costs — e.g. a manufacturer that exports to the US and also sources US-dollar-priced components naturally offsets currency movements. Larger multinationals may also hold multiple currency bank accounts to match cash flows.' }
    },
    {
      id: 'enr-t10a-callout-brand-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Real-World Example: Jaguar Land Rover & Post-Brexit Depreciation',
        text: 'After the Brexit referendum in June 2016, the pound fell sharply against the euro and dollar. JLR, which manufactures in the UK but earns ~80% of revenues in foreign currencies, initially saw its pound-denominated revenue boosted. However, imported components (aluminium, electronics) became more expensive in sterling terms. JLR estimated Brexit-related costs at £1.2bn over the transition period — illustrating that in heavily import-dependent manufacturing, depreciation has mixed or net-negative effects, and that PED and import intensity determine who wins and who loses.'
      }
    },
    {
      id: 'enr-t10a-callout-student-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Student-Relatable: Holiday Money Abroad',
        text: 'When the pound depreciates, your holiday money goes less far. If £1 = €1.20 before you travel but £1 = €1.05 by the time you arrive, a €50 restaurant meal that used to cost £41.67 now costs £47.62 — nearly £6 more per meal without any price change in the eurozone. This is the same mechanism that makes imports more expensive for businesses. Exchange rate movements affect everyone who buys internationally — from multinationals importing raw materials down to a student buying a coffee in Rome.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'An appreciating pound makes UK exports more expensive abroad (less competitive) but imported inputs cheaper. A depreciating pound boosts export competitiveness but raises import costs. The net impact on a firm depends on its export/import mix, the PED of its products, and whether it hedges against currency risk.' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Demonstrate understanding by calculating the actual price change: if the pound appreciates 10%, UK goods become 10% more expensive to foreign buyers. Use this quantitative approach to score higher marks in evaluation questions."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Many students confuse appreciation with depreciation or forget that exchange rate effects are OPPOSITE for exporters and importers. Appreciation = bad for exporters, good for importers. Keep this crystal clear."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Appreciation: exports costlier abroad (↓ competitiveness), imports cheaper. Depreciation: exports cheaper abroad (↑ competitiveness), imports costlier. Net effect depends on PED and import/export balance.',
    cues: [
      { id: 'cue-1', blockId: 'p-exchange-def', prompt: 'What is the exchange rate and what does appreciation mean?', answer: 'The exchange rate is the price of one currency in terms of another. Appreciation means the pound rises in value — it buys more foreign currency than before.' },
      { id: 'cue-2', blockId: 'callout-worked-appreciation', prompt: 'A UK firm sells goods for £10,000. If £1 rises from €1.10 to €1.25, what happens to the euro price for foreign buyers?', answer: 'The price rises from €11,000 to €12,500 — making the product 14% more expensive and less competitive for European buyers.' },
      { id: 'cue-3', blockId: 'p-depreciation', prompt: 'How does depreciation of the pound help UK exporters?', answer: 'UK exports become cheaper in foreign currency terms, improving price competitiveness abroad and potentially increasing export volumes and revenues.' },
      { id: 'cue-4', blockId: 'table-fx-effects', prompt: 'What is the impact of pound depreciation on UK importers?', answer: 'Import costs rise in sterling terms. Firms that import raw materials or components face higher input costs, squeezing profit margins.' },
      { id: 'cue-5', blockId: 'list-factors', prompt: 'Name TWO ways a firm can reduce the impact of exchange rate movements.', answer: '1. Hedging using forward contracts to lock in exchange rates. 2. Sourcing more inputs domestically to reduce reliance on imports.' }
    ]
  },
  evidence: [],
  mentions: []
};
