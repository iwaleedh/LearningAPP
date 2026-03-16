export const note_economics_2_8_8 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Analyse the determinants of net exports (X – M) and explain how exchange rates, income, and competitiveness affect the trade balance.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Net Exports = X − M', level: 2 } },
    { id: 'callout-def', type: 'callout', data: { style: 'key', title: 'Trade Balance', text: '</strong>Net exports (X − M)</strong>: the value of exports minus the value of imports.<br/>Trade surplus: X > M → positive contribution to AD.<br/>Trade deficit: M > X → negative contribution to AD (reduces GDP).' } },
    { id: 'h-2', type: 'heading', data: { text: 'Determinants of Net Exports', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Factors Affecting Exports and Imports', headers: ['Factor', 'Effect on X', 'Effect on M'], rows: [['Currency depreciation', '↑ X (cheaper for foreigners)', '↓ M (imports dearer for domestic buyers)'], ['Foreign income growth', '↑ X (more demand from abroad)', '—'], ['Domestic income growth', '—', '↑ M (spend more on imports)'], ['Lower domestic inflation', '↑ X (more price-competitive)', '↓ M (domestic goods relatively cheaper)'], ['Trade barriers lifted', 'Variable', '↑ M (cheaper imports enter market)']] } },
    { id: 'h-3', type: 'heading', data: { text: 'Other Determinants', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Non-price competitiveness</strong>: quality, design, brand reputation, after-sales service — affects X regardless of price.' }, { text: '<strong>Protectionism</strong>: tariffs, quotas, and subsidies by trading partners restrict UK exports.' }, { text: '<strong>Marshall-Lerner condition</strong>: currency depreciation only improves the trade balance if the combined price elasticities of demand for exports and imports sum to > 1.' }, { text: '<strong>J-curve effect</strong>: after depreciation, trade balance initially worsens (contracts cover old prices) before improving — short-run inelastic demand.' }] } },
    { id: 'sum-1', type: 'summary', data: { text: 'Net exports is determined by exchange rate, foreign income, domestic income, inflation, and competitiveness. Currency depreciation improves trade balance only if Marshall-Lerner condition holds.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Net exports = X-M. Determinants: exchange rate, domestic/foreign income, inflation, non-price competitiveness. Marshall-Lerner condition for depreciation to help.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'How does currency depreciation affect net exports?', answer: 'Depreciation makes exports cheaper for foreigners (boosting X) and imports more expensive for domestic consumers (reducing M) — improving net exports, provided the Marshall-Lerner condition is satisfied.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'State the Marshall-Lerner condition.', answer: 'Currency depreciation improves the trade balance if the sum of the price elasticities of demand for exports and imports exceeds 1 (PEDx + PEDm > 1). If combined demand is inelastic, depreciation worsens the trade balance.' },
    ]
  },
  evidence: [], mentions: []
};
