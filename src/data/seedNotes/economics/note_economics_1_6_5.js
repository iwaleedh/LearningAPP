export const note_economics_1_6_5 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain state provision and regulation as forms of government intervention, compare them to market provision, and evaluate their advantages and disadvantages.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'State Provision of Goods and Services', level: 2 }, terms: [] },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'State Provision', text: '<strong>State provision</strong> means the government directly produces or delivers goods and services, typically funded by <strong>taxation</strong>.<br/>It is used for:<br/>• <strong>Public goods</strong>: non-excludable and non-rivalrous goods the market will not provide (national defence, lighthouses)<br/>• <strong>Merit goods</strong>: goods under-consumed if left to the market (healthcare, education)<br/>• <strong>Natural monopolies</strong>: industries with high fixed costs where one provider is most efficient (water, railways)' }, terms: [] },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'State vs market provision', headers: ['Dimension', 'State provision', 'Private market'], rows: [['Access equity', 'Universal access regardless of income', 'Access depends on ability to pay → inequality'], ['Efficiency', 'May suffer productive inefficiency (no profit motive)', 'Profit motive incentivises efficiency'], ['Price', 'Often free or subsidised at point of use', 'Market price — may exclude low incomes'], ['Quality', 'Can be consistent but may lack competition incentive', 'Competition drives quality improvements'], ['Accountability', 'Democratic accountability; subject to political pressure', 'Consumer sovereignty']] }, terms: [] },
    { id: 'h-2', type: 'heading', data: { text: 'Regulation', level: 2 }, terms: [] },
    { id: 'call-2', type: 'callout', data: { style: 'key', title: 'Regulation Definition', text: '<strong>Regulation</strong> involves rules and standards imposed by government on firms and consumers to correct market failure without direct production by the state.<br/><br/>Types include: <strong>price regulation</strong> (price caps for monopolies), <strong>quality standards</strong> (food safety, building codes), <strong>quantity controls</strong> (fishing quotas, emission limits), <strong>entry regulation</strong> (licensing doctors, financial advisers).' }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Price caps</strong> (e.g. CPI − X rule for utilities): prevent monopoly exploitation while retaining private ownership and management incentives.' }, { text: '<strong>Quality standards</strong>: e.g. food hygiene regulations, drug safety approvals — corrects information asymmetry and protects consumers.' }, { text: '<strong>Quantity restrictions</strong>: fishing quotas prevent over-exploitation of a common resource (tragedy of the commons).' }, { text: '<strong>Entry regulation/licensing</strong>: ensures only qualified professionals enter professions (doctors, lawyers), reducing information asymmetry.' }] }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: 'Evaluation: Limitations', level: 2 }, terms: [] },
    { id: 'call-3', type: 'callout', data: { style: 'warning', title: 'Problems with State Provision and Regulation', text: '<strong>State provision</strong>: productive inefficiency (no profit motive); bureaucratic waste; political interference; crowding out private investment.<br/><br/><strong>Regulation</strong>: regulatory capture (regulators side with the industry they oversee); compliance costs for business; may stifle innovation; government lacks full information to set rules correctly.' }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'State provision directly provides public and merit goods but may lack efficiency incentives. Regulation corrects market failures via rules without direct production but risks regulatory capture and information problems.' }, terms: [] },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'State provision: government produces good directly. Regulation: rules on private firms. Both correct market failures but have limitations.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'For what three types of good is state provision most commonly justified?', answer: 'Public goods (non-excludable, non-rivalrous), merit goods (under-consumed in free market), and natural monopolies.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'What is the main efficiency weakness of state provision compared to private markets?', answer: 'Absence of profit motive reduces incentive to minimise costs — public enterprises may be productively inefficient.' },
      { id: 'cue-3', blockId: 'call-2', prompt: 'What is a price cap and how does it address monopoly power?', answer: 'A regulatory limit on a monopoly\'s price (e.g. CPI − X for utilities) prevents exploitation of consumers while keeping the firm privately owned.' },
      { id: 'cue-4', blockId: 'call-3', prompt: 'What is regulatory capture?', answer: 'When a regulator develops such close ties with the industry it oversees that it begins to act in that industry\'s interests rather than the public interest.' },
    ]
  },
  evidence: [],
  mentions: []
};
