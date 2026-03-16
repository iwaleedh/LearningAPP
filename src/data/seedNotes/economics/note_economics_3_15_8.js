export const note_economics_3_15_8 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain natural monopoly, illustrate its cost structure, and evaluate the argument for public ownership or regulation.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Natural Monopoly', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Definition', text: 'A <strong>natural monopoly</strong> exists when the minimum efficient scale (MES) is so large relative to market demand that a <strong>single firm</strong> can supply the whole market at lower average cost than two or more firms could.' } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>LRAC still falling</strong> at the level of industry demand — economies of scale are not exhausted.' }, { text: 'Arises in industries with <strong>very high fixed costs</strong> and low marginal costs: water pipes, electricity grids, railway infrastructure, broadband cables.' }, { text: '<strong>Duplicating the network</strong> (e.g. two sets of water pipes) would raise total costs — it is economically wasteful.' }, { text: 'One firm naturally emerges — the largest firm has lowest costs and can undercut rivals until it dominates.' }] } },
    { id: 'h-2', type: 'heading', data: { text: 'Regulation Options', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Approaches to Natural Monopoly', headers: ['Approach', 'How it works', 'Advantage', 'Limitation'], rows: [['Public ownership (nationalisation)', 'Government owns and operates the utility', 'Can set P = MC or P = ATC for public interest', 'Political interference; X-inefficiency risk'], ['Price regulation (price cap)', 'Regulator sets maximum price (RPI - X formula)', 'Incentivises efficiency; protects consumers', 'Information asymmetry — firm may hide costs'], ['Profit regulation', 'Cap on rate of return on capital', 'Limits monopoly profit', 'Reduces incentive to invest; gold-plating'], ['Forced access (open network)', 'Monopoly infrastructure opened to competitors', 'Increases competition in market', 'May reduce incentive to build infrastructure']] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'UK examples: Ofwat (water), Ofgem (energy), Ofcom (telecoms). The <strong>RPI - X</strong> formula forces firms to cut prices by X% above inflation each year, incentivising efficiency improvements. A popular exam question.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Natural monopoly: LRAC still falling at market equilibrium output — single firm is most efficient. Examples: utilities. Regulation options: price caps (RPI–X), profit caps, public ownership, forced network access.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Natural monopoly: LRAC falls throughout market demand range — one firm is cheapest. High fixed costs (water pipes, railways). Regulated via price caps (RPI–X) or nationalisation.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'What defines a natural monopoly?', answer: 'A natural monopoly exists when the MES is so large that one firm can supply the entire market at lower average cost than multiple firms. The LRAC continues falling across the range of market demand, making a single supplier economically efficient.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'Explain the RPI – X price cap formula for regulating natural monopolies.', answer: 'The RPI – X formula sets the maximum annual price rise at the retail price index (inflation) minus an efficiency factor X. This allows price rises up to inflation but forces efficiency savings, incentivising the regulated firm to cut costs while protecting consumers from monopoly pricing.' },
    ]
  },
  evidence: [], mentions: []
};
