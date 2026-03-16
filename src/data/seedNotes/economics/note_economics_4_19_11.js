export const note_economics_4_19_11 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Evaluate the overall economic impact of protectionism on domestic and world economies, including effects on efficiency, prices, employment, growth, and international relations.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Impacts of Protectionism', level: 2 } },
    { id: 'h-2', type: 'heading', data: { text: 'Costs of Protectionism', level: 2 } },
    { id: 'list-costs', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Higher consumer prices</strong>: tariffs/quotas raise import prices, reducing real consumer purchasing power.' }, { text: '<strong>Allocative inefficiency</strong>: production shifts from most efficient global producers to protected domestic firms — resources misallocated.' }, { text: '<strong>Retaliatory tariff spirals</strong>: protection invites retaliation, escalating into trade wars — 1930s Smoot-Hawley tariffs contributed to collapse of world trade and deeper Depression.' }, { text: '<strong>Reduced competition</strong>: protected industries lack incentive to innovate or reduce costs — X-inefficiency rises.' }, { text: '<strong>Reduced export market access</strong>: retaliation closes foreign markets to domestic exporters.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Potential Benefits (Short Run)', level: 2 } },
    { id: 'list-benefits', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Domestic employment protection</strong>: import-competing industries maintain employment in short run (though costly per job saved).' }, { text: '<strong>Government revenue</strong>: tariffs provide fiscal revenue — important for LDCs with narrow tax bases.' }, { text: '<strong>Improving current account</strong>: reduces import volumes, improving trade balance in short run (though retaliation may offset).' }] } },
    { id: 'tbl-net', type: 'comparisonTable', data: { caption: 'Net Assessment of Protectionism', headers: ['Group', 'Effect'], rows: [['Domestic consumers', 'Lose: higher prices, less choice, lower real incomes'], ['Protected domestic producers', 'Gain: higher prices, expanded output, protected profits'], ['Government', 'Gain (tariff revenue) but loses efficiency and risks retaliation'], ['Exporters', 'Lose if partners retaliate'], ['World economy', 'Net welfare loss: trade below optimal level; resources misallocated globally']] } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'US-China Trade War 2018', text: 'US imposed 25% tariffs on $360bn of Chinese goods (2018–). China retaliated. Studies found: US consumers and importing firms bore ~90% of the tariff cost (not China). US manufacturing jobs in protected sectors rose slightly but losses in exporting sectors and downstream industries partially offset gains. Real GDP impact was negative for both sides.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Protectionism costs: higher consumer prices, allocative inefficiency, reduced competition, retaliation risk. Short-run benefits: employment, revenue, CA improvement. Net effect: welfare loss for world economy as trade falls below comparative advantage level. Smoot-Hawley tariffs (1930s) demonstrated catastrophic downside of protection escalation.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Protectionism impacts: consumers pay more; domestic producers gain in short run; allocative inefficiency; reduced competition (X-inefficiency). Retaliation risk (1930s Smoot-Hawley). Net: world welfare loss; US-China trade war 2018 cost US consumers ~90% of tariff.',
    cues: [
      { id: 'cue-1', blockId: 'list-costs', prompt: 'Evaluate the economic case against protectionism.', answer: 'Free trade theory: comparative advantage means global resources allocated to most efficient uses → maximum world output. Protectionism: (1) raises consumer prices, reducing real incomes; (2) allocates production to less efficient domestic firms; (3) reduces competition, allowing X-inefficiency; (4) triggers retaliation, reducing world trade (1930s Smoot-Hawley → trade collapse + Depression). US-China trade war: US consumers bore ~90% of tariff cost. Long-run costs exceed short-run employment gains.' },
    ]
  },
  evidence: [], mentions: []
};
