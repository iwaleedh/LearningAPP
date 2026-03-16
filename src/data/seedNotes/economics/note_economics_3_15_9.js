export const note_economics_3_15_9 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain third-degree price discrimination, its conditions, and evaluate its effects on consumer and producer surplus.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Third-Degree Price Discrimination', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Definition', text: '<strong>Price discrimination</strong> occurs when a firm charges different prices to different consumers for the <strong>same product</strong>, where the price difference is not due to cost differences.<br/><strong>Third-degree</strong> (most common): different prices to different <strong>groups/segments</strong> of consumers.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Conditions Required', level: 2 } },
    { id: 'list-cond', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Monopoly power (price maker)</strong> — the firm must face a downward-sloping demand curve to set price above MC.' }, { text: '<strong>Ability to segment the market</strong> — identify groups with different price elasticities of demand.' }, { text: '<strong>No resale / arbitrage</strong> — consumers buying at the lower price must not be able to resell to the high-price group (otherwise price discrimination collapses).' }] } },
    { id: 'h-2b', type: 'heading', data: { text: 'How It Works', level: 2 } },
    { id: 'list-how', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Charge higher prices to inelastic groups</strong> (who have fewer alternatives and will pay more) — e.g. business rail travellers, peak-time commuters.' }, { text: '<strong>Charge lower prices to elastic groups</strong> (more sensitive to price) — e.g. students, off-peak travellers, seniors.' }] } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Effects of Third-Degree Price Discrimination', headers: ['Stakeholder', 'Effect', 'Reason'], rows: [['High-price group / consumers', 'Lose consumer surplus', 'Pay price above single-price level'], ['Low-price group / consumers', 'May gain access', 'Some can now afford the product'], ['Producer', 'Higher profit', 'Extracts more surplus than single price'], ['Society overall', 'Ambiguous', 'Output may rise (more people served) but welfare redistribution; inequality concern']] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Examples', text: 'Rail travel (peak vs off-peak), airline seats (economy vs business, advance vs last-minute), cinema (adult vs child vs student), pharmaceuticals (high vs low income countries), gym memberships (student discount).' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Third-degree price discrimination: charge different prices to different consumer groups with different PED. Requires price maker status, market segmentation, and no resale. Boosts producer profit; redistributes consumer surplus.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Third-degree price discrimination: charge each consumer segment a price reflecting its PED. Elastic group → lower price; inelastic → higher. Requires market power, segmentation, and no resale.',
    cues: [
      { id: 'cue-1', blockId: 'list-cond', prompt: 'State three conditions required for price discrimination to operate.', answer: '(1) Monopoly power — firm must be a price maker. (2) Ability to segment the market by PED — identify groups with different elasticities. (3) Impossibility of resale/arbitrage — lower-price consumers cannot resell to higher-price consumers, otherwise discrimination collapses.' },
      { id: 'cue-2', blockId: 'callout-key1', prompt: 'Distinguish between first, second, and third-degree price discrimination.', answer: 'First-degree (perfect): charge every consumer their maximum willingness to pay — eliminates all consumer surplus. Second-degree: price varies by quantity bought (bulk discounts). Third-degree: charge different prices to different consumer groups with different PED — most common in practice.' },
    ]
  },
  evidence: [], mentions: []
};
