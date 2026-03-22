export const note_economics_1_6_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Analyse the effects of indirect taxes and subsidies on market outcomes, including price, output, consumer and producer surplus, and deadweight loss, and evaluate their effectiveness as interventions.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'Indirect Taxes', level: 2 }, terms: [] },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Types of Indirect Tax', text: '<strong>Specific (unit) tax</strong>: a fixed amount per unit sold (e.g. £5 per pack of cigarettes) — shifts supply curve <strong>upward by a constant amount</strong>.<br/><br/><strong>Ad valorem tax</strong>: a percentage of the price (e.g. 20% VAT) — shifts supply curve upward by an increasing amount as price rises.' }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: 'An indirect tax shifts the <strong>supply curve upward</strong> (raises costs for producers).' }, { text: 'Market price <strong>rises</strong>; quantity demanded <strong>falls</strong>.' }, { text: 'The <strong>tax revenue</strong> rectangle = tax per unit × quantity sold.' }, { text: 'Creates a <strong>deadweight welfare loss</strong> — triangle between the old and new equilibria.' }] }, terms: [] },
    { id: 'h-2', type: 'heading', data: { text: 'Tax Incidence', level: 2 }, terms: [] },
    { id: 'call-2', type: 'callout', data: { style: 'key', title: 'Tax Incidence', text: '<strong>Tax incidence</strong> refers to who actually bears the burden of an indirect tax.<br/><br/>• <strong>Inelastic demand</strong>: consumers bear most of the tax (price rises a lot). Example: petrol.<br/>• <strong>Elastic demand</strong>: producers bear most of the tax (consumers would switch away if price rose too much). Example: luxury goods.<br/>• The party with the more <strong>inelastic</strong> side of the market bears the greater burden.' }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: 'Subsidies', level: 2 }, terms: [] },
    { id: 'call-3', type: 'callout', data: { style: 'key', title: 'Subsidies', text: 'A <strong>subsidy</strong> is a payment from the government to producers to lower their costs. It shifts the <strong>supply curve downward</strong> (or rightward), reducing market price and increasing quantity sold.<br/><br/>Used for: merit goods, positive externalities (vaccines, public transport, renewable energy), infant industries.' }, terms: [] },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Consumer gain</strong>: price falls, so consumers pay less per unit.' }, { text: '<strong>Producer gain</strong>: they receive the subsidised price plus the subsidy per unit.' }, { text: '<strong>Government cost</strong>: total subsidy = subsidy per unit × quantity sold.' }, { text: 'Subsidy may not reach consumers if supply is inelastic (producers pocket most benefit).' }] }, terms: [] },
    { id: 'h-4', type: 'heading', data: { text: 'Evaluation', level: 2 }, terms: [] },
    { id: 'call-4', type: 'callout', data: { style: 'warning', title: 'Limitations of Taxes and Subsidies', text: '<strong>Taxes</strong>: hard to set the correct rate; may increase black markets; regressively burden low-income consumers (spend higher % on necessities like petrol).<br/><strong>Subsidies</strong>: costly for government; may be inefficient (prop up uncompetitive industries); subsidy benefit may be captured by producers rather than consumers; distorts resource allocation.' }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'Indirect taxes raise price and reduce output, correcting negative externalities but creating deadweight loss. Subsidies lower price and increase output, correcting under-consumption of merit goods. Tax incidence depends on the relative elasticities of supply and demand.' }, terms: [] },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Taxes: hard to set the correct rate; may increase black markets; regressively burden low-income consumers (spend higher % on necessities like petrol).\nSubsidies: costly for government; may be inefficient (prop up uncompetitive industries); subsidy benefit may be captured by producers rather than consumers; distorts resource allocation."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Maximum price lines must be drawn *below* the free market equilibrium to be effective. Ensure you identify the size of the resulting shortage (excess demand) and mention the risk of black markets emerging to clear it."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Tax shifts supply up → higher price, lower quantity, DWL. Subsidy shifts supply down → lower price, higher quantity.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'What is the difference between a specific tax and an ad valorem tax?', answer: 'Specific: fixed £ per unit. Ad valorem: percentage of price. Both shift supply upward but the ad valorem shift increases with price.' },
      { id: 'cue-2', blockId: 'call-2', prompt: 'If demand is inelastic, who bears most of the burden of an indirect tax?', answer: 'Consumers — they are unwilling/unable to reduce quantity much so absorb most of the price rise.' },
      { id: 'cue-3', blockId: 'call-3', prompt: 'How does a subsidy affect market price, quantity, and the supply curve?', answer: 'Subsidy shifts supply curve downward. Market price falls, quantity supplied and demanded rises. Consumer welfare improves.' },
      { id: 'cue-4', blockId: 'call-4', prompt: 'Give two limitations of using subsidies as a policy tool.', answer: 'Costly for government; may be captured by producers rather than consumers; may prop up inefficient industries; distorts resource allocation.' },
    ]
  },
  evidence: [],
  mentions: []
};
