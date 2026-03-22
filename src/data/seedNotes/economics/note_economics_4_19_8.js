export const note_economics_4_19_8 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Define trade creation and trade diversion, explain using the customs union diagram, and evaluate the net welfare effects of joining a trading bloc.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Trade Creation and Trade Diversion', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Viner\'s Theory (1950)', text: '<strong>Trade creation</strong>: joining a customs union shifts domestic production to a more efficient partner — imports from partner replace higher-cost domestic output. This is welfare-<em>improving</em>: consumers pay lower prices.<br/><br/><strong>Trade diversion</strong>: forming the customs union raises the external tariff, shifting imports away from the most efficient world supplier to a less efficient partner. This is welfare-<em>reducing</em>: partner output replaces cheap world output.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Worked Example', level: 2 } },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Trade Creation vs Trade Diversion', text: 'Before joining EU customs union:<br/>UK makes widgets at £10; Germany at £7; China at £5<br/>UK tariff: 30% → China price with tariff = £6.50, Germany = £9.10<br/>UK imports from Germany (cheapest after tariff)<br/><br/>After joining EU customs union (no tariff on Germany; 30% on China):<br/>Germany price = £7; China with tariff = £6.50<br/>Still imports from Germany → no change in this example<br/><br/>If external tariff rises to 50%: China price = £7.50 > Germany £7<br/><strong>Trade diversion</strong>: UK now buys from Germany (£7) not China (£5) — EU causes diversion to less efficient producer.' } },
    { id: 'h-3', type: 'heading', data: { text: 'Net Welfare Effect', level: 2 } },
    { id: 'list-net', type: 'list', data: { style: 'bullet', items: [{ text: 'Whether a customs union is <strong>net beneficial</strong> depends on whether trade creation effects > trade diversion effects.' }, { text: 'Trade creation is more likely when <strong>partner economies have similar factor endowments and cost structures</strong> to the most efficient world producers.' }, { text: 'Trade diversion is more costly when the <strong>world price difference is large</strong> and the CET is high.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'EU Context', text: 'EU membership generated significant trade creation for the UK (accessing 450m consumer market; reduced trade barriers). But critics argued it diverted UK imports from cheapest world suppliers (e.g. Commonwealth agricultural goods) toward EU partners. Post-Brexit, UK can now strike independent FTAs — but has lost the trade creation benefits from frictionless EU access.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Trade creation (Viner): bloc membership shifts purchases from high-cost domestic to lower-cost partner — welfare gain. Trade diversion: bloc shifts purchases from cheapest world supplier to less-efficient partner due to CET — welfare loss. Net effect depends on relative magnitudes. EU membership generated large trade creation for UK.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Don't confuse trade creation (net welfare gain) with trade diversion (net welfare loss). Their magnitude depends on tariff levels and external bloc efficiency. A bloc can experience both simultaneously\u2014demonstrate you understand the granularity."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Viner (1950): Trade creation = imports replace costly domestic production (welfare gain). Trade diversion = imports shift from cheapest world supplier to bloc partner behind CET (welfare loss). Net welfare positive if trade creation > trade diversion.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'Define trade creation and trade diversion and their welfare effects.', answer: 'Trade creation: joining a customs union causes domestic production to be replaced by cheaper imports from a bloc partner — consumers benefit from lower prices, welfare increases. Trade diversion: the common external tariff diverts imports away from the cheapest world supplier (e.g. China) toward a less efficient bloc partner — welfare falls as consumers pay more than necessary. Net welfare depends on which effect dominates. Generally: low CET and efficient partner → net trade creation; high CET → more diversion.' },
    ]
  },
  evidence: [], mentions: []
};
