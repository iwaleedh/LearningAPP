export const note_economics_1_6_3 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain how tradable pollution permits work as a market-based approach to correcting negative externalities, and evaluate their advantages and disadvantages compared to taxation.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'Tradable Pollution Permits — How They Work', level: 2 }, terms: [] },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Cap-and-Trade System', text: 'A <strong>tradable pollution permit</strong> (also called a <strong>cap-and-trade</strong> system) works as follows:<br/>1. Government sets a <strong>cap</strong> (total permitted level of pollution)<br/>2. Permits are distributed or auctioned to firms — each permit allows one unit of pollution<br/>3. Firms may <strong>buy and sell</strong> permits in a market<br/>4. Firms that can reduce pollution cheaply will do so and <strong>sell</strong> surplus permits<br/>5. Firms with high abatement costs will <strong>buy</strong> extra permits<br/>6. The cap is tightened over time to progressively reduce pollution' }, terms: [] },
    { id: 'h-2', type: 'heading', data: { text: 'The EU Emissions Trading Scheme (EU ETS)', level: 2 }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: 'The <strong>EU ETS</strong> is the world\'s largest carbon market, covering power stations, heavy industry, and airlines.' }, { text: 'Issues permits denominated in tonnes of CO₂ equivalent.' }, { text: 'Has reduced emissions in covered sectors, though critics argue the cap was set too loosely in early phases (permits were too cheap to incentivise action).' }, { text: 'UK launched its own <strong>UK ETS</strong> after Brexit (2021).' }] }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: 'Advantages of Tradable Permits vs Carbon Tax', level: 2 }, terms: [] },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Tradable permits vs carbon tax', headers: ['Feature', 'Tradable Permits', 'Carbon Tax'], rows: [['Pollution certainty', '✓ Cap guarantees a maximum level of pollution', '✗ Uncertain — tax may not reduce emissions enough'], ['Economic efficiency', '✓ Emission reductions happen where cheapest (cost-effective)', '✓ Similar cost-efficiency if tax is set correctly'], ['Price certainty', '✗ Permit price volatile (can crash if cap too loose)', '✓ Businesses know their carbon cost in advance'], ['Government revenue', '✓ Revenue from permit auctions', '✓ Revenue from tax'], ['Flexibility', '✓ Firms can decide how/when to reduce', '✓ Same']] }, terms: [] },
    { id: 'h-4', type: 'heading', data: { text: 'Evaluation', level: 2 }, terms: [] },
    { id: 'call-2', type: 'callout', data: { style: 'warning', title: 'Limitations of Cap-and-Trade', text: '<strong>Permit price volatility</strong>: if economic recession lowers output, permits become cheap — reducing incentive to innovate green technology.<br/><strong>Carbon leakage</strong>: production may move to non-regulated countries, reducing effectiveness.<br/><strong>Setting the cap</strong>: politically difficult to set a tight enough cap; lobbying from industry can result in too many permits.<br/><strong>Windfall profits</strong>: free permit allocation let energy companies pass on notional permit costs to consumers — generating large windfall profits.' }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'Tradable pollution permits use market mechanisms to achieve a guaranteed pollution cap at least cost. Firms that reduce pollution cheaply sell permits; those with high abatement costs buy them. Main advantage: cost-effectiveness. Main limitation: permit price volatility.' }, terms: [] },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Permit price volatility: if economic recession lowers output, permits become cheap \u2014 reducing incentive to innovate green technology.\nCarbon leakage: production may move to non-regulated countries, reducing effectiveness.\nSetting the cap: politically difficult to set a tight enough cap; lobbying from industry can result in too many permits.\nWindfall profits: free permit allocation let energy companies pass on notional permit costs to consumers \u2014 generating large windfall profits."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Cap-and-trade: government sets pollution cap; firms buy/sell permits; reduction happens where cheapest.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'Explain how a cap-and-trade emissions trading scheme works.', answer: 'Government caps total pollution; distributes permits to firms. Firms trade permits — clean firms sell surplus permits; high-emission firms buy extras. The cap tightens over time.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'What is the key advantage of tradable permits over a carbon tax?', answer: 'Permits provide pollution certainty — the cap guarantees the maximum total emission level. A carbon tax does not guarantee how much emissions will fall.' },
      { id: 'cue-3', blockId: 'call-2', prompt: 'Explain the carbon leakage problem in cap-and-trade.', answer: 'If permits only apply in some countries, firms may relocate production to unregulated countries — total global emissions may not fall.' },
      { id: 'cue-4', blockId: 'h-2', prompt: 'Name the world\'s largest carbon trading market and identify one criticism of its early operation.', answer: 'EU Emissions Trading Scheme (EU ETS). Criticism: cap was set too loosely in early phases — permits were cheap, reducing incentive to cut emissions.' },
    ]
  },
  evidence: [],
  mentions: []
};
