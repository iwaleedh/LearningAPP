export const note_economics_4_19_7 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Distinguish between types of trading blocs — free trade areas, customs unions, common markets, and monetary unions — and outline their key features.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Trading Bloc Types', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Trading Bloc Definition', text: '<strong>Trading bloc</strong>: a group of countries that reduce or eliminate trade barriers among themselves, forming a preferential trade arrangement. Blocs are forms of economic integration ranging from shallow to deep.' } },
    { id: 'tbl-blocs', type: 'comparisonTable', data: { caption: 'Types of Trading Bloc — Degrees of Integration', headers: ['Type', 'Internal Tariffs', 'Common External Tariff', 'Factor Mobility', 'Policy Harmonisation', 'Example'], rows: [['Free Trade Area', 'Eliminated', 'No — each member sets own', 'No', 'None', 'NAFTA/USMCA, EFTA'], ['Customs Union', 'Eliminated', 'Yes — common CET', 'No', 'Minimal', 'EU Customs Union'], ['Common Market', 'Eliminated', 'Yes', 'Yes — free movement of labour/capital', 'Moderate', 'EU Single Market'], ['Economic Union', 'Eliminated', 'Yes', 'Yes', 'Significant (fiscal/regulatory)', 'EU'], ['Monetary Union', 'Eliminated', 'Yes', 'Yes', 'Shared central bank + currency', 'Eurozone (19 EU states)']] } },
    { id: 'h-2', type: 'heading', data: { text: 'Key Examples', level: 2 } },
    { id: 'list-eg', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>EU Single Market</strong>: common market with free movement of goods, services, capital, and labour. World\'s largest single trading bloc by GDP.' }, { text: '<strong>USMCA</strong> (formerly NAFTA): free trade area between US, Canada, Mexico. Complex rules of origin determine whether goods qualify for preferential tariffs.' }, { text: '<strong>ASEAN</strong>: free trade area among 10 South-East Asian nations; reduces tariffs but limited deeper integration.' }, { text: '<strong>CPTPP</strong>: Comprehensive and Progressive Agreement for Trans-Pacific Partnership; 11 Pacific Rim nations (UK joined 2024).' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Common Exam Distinction', text: 'The key difference between a <strong>free trade area</strong> and a <strong>customs union</strong>: FTAs allow each member to set its own external tariffs (requiring rules of origin), while customs unions have a common external tariff against non-members. A customs union is what made Brexit trade policy complex — UK left the EU\'s common external tariff.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Trading bloc spectrum: FTA (no internal tariffs) → Customs Union (+ common external tariff) → Common Market (+ factor mobility) → Economic Union (+ policy harmonisation) → Monetary Union (+ shared currency). Examples: EU Single Market, USMCA, ASEAN.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Categorise trading blocs precisely: EU = customs union + single market; USMCA = free trade area; ASEAN = looser cooperation. Examiners penalise vague classifications. Use specific examples (rules of origin, tariff externalities) to show deep understanding."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Examiner Tip",
        text: "Memorise the exactly three components of the HDI: life expectancy at birth, mean and expected years of schooling, and GNI per capita (PPP)."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Bloc types: FTA (eliminate internal tariffs, own external policy) → Customs Union (+ common external tariff) → Common Market (+ factor mobility) → Economic Union → Monetary Union. FTA vs CU: key is whether there\'s a common external tariff.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-blocs', prompt: 'Distinguish between a free trade area and a customs union.', answer: 'FTA: members eliminate tariffs on trade with each other but each sets its own external tariffs on imports from non-members. Requires complex rules of origin to prevent trade deflection. Example: USMCA. CU: members eliminate internal tariffs AND adopt a common external tariff (CET) against non-members. Simpler trade rules but members lose autonomy to sign independent trade deals. Example: EU Customs Union. UK leaving the EU CU was core to Brexit trade policy changes.' },
    ]
  },
  evidence: [], mentions: []
};
