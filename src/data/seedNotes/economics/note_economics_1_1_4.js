export const note_economics_1_1_4 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Distinguish between renewable and non-renewable resources, understand their economic implications for sustainability and pricing, and evaluate the significance of resource depletion.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Types of Resources', level: 2 },
      terms: []
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'Resources — the inputs used in production — are classified by whether they can replenish themselves over time. This distinction has profound implications for long-run supply, pricing, and the sustainability of economic activity. All resources are ultimately scarce, but the nature of that scarcity differs significantly between renewable and non-renewable types.' }] } },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Renewable vs Non-Renewable Resources',
        headers: ['Feature', 'Renewable Resources', 'Non-Renewable Resources'],
        rows: [
          ['<strong>Definition</strong>', 'Resources that can be replenished naturally within a human timescale if not overexploited', 'Resources formed over millions of years that cannot be replenished once used'],
          ['<strong>Examples</strong>', 'Solar energy, wind, timber (if managed), fish stocks, water', 'Coal, oil, natural gas, iron ore, copper, uranium'],
          ['<strong>Depletion risk</strong>', 'Low if sustainably managed; high if overexploited (e.g. overfishing)', 'Certain — finite stock that diminishes with use'],
          ['<strong>Price trend</strong>', 'Relatively stable if supply is managed; may fall as technology improves', 'Tends to rise over time as remaining deposits become harder to extract'],
          ['<strong>Environmental impact</strong>', 'Generally lower, but not zero (e.g. land use for wind farms)', 'High — burning fossil fuels produces CO₂, contributing to climate change'],
          ['<strong>Sustainability</strong>', 'Inherently sustainable if managed within natural replenishment rates', 'Not sustainable in the long run without substitution by alternatives']
        ]
      },
      terms: []
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Economic Implications of Non-Renewable Resources', level: 2 },
      terms: []
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Rising extraction costs:</strong> As easily accessible deposits are exhausted, firms must exploit deeper or more remote reserves, raising marginal cost and thus prices.' },
          { text: '<strong>Price volatility:</strong> Non-renewable resources (especially oil) are subject to supply shocks, cartel behaviour (e.g. OPEC), and geopolitical risk, causing sharp price swings.' },
          { text: '<strong>Hotelling\'s Rule:</strong> In theory, the price of a non-renewable resource should rise at the rate of interest over time, reflecting its increasing scarcity.' },
          { text: '<strong>Transition costs:</strong> Shifting from fossil fuels to renewables requires large upfront investment in infrastructure (e.g. EV charging, grid upgrades).' },
          { text: '<strong>Intergenerational equity:</strong> Using non-renewable resources today reduces the stock available for future generations — a key concern in sustainability economics.' }
        ]
      },
      terms: []
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Economic Implications of Renewable Resources', level: 2 },
      terms: []
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Overexploitation risk:</strong> Renewable resources can be depleted if extraction rates exceed replenishment rates (e.g. overfishing of cod in the North Sea).' },
          { text: '<strong>Common resource problem:</strong> Many renewables (fish, clean air, water) are common resources with no clear property rights, leading to the "tragedy of the commons."' },
          { text: '<strong>Falling costs:</strong> Technological progress has dramatically reduced the cost of solar and wind power, making them increasingly competitive with fossil fuels.' },
          { text: '<strong>Positive externalities:</strong> Switching to renewables reduces carbon emissions, generating benefits for society beyond the private market.' }
        ]
      },
      terms: []
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Concept: Sustainability',
        text: '<strong>Sustainable development</strong> meets the needs of the present without compromising the ability of future generations to meet their own needs (Brundtland Commission, 1987). Renewable resources support sustainable development only if managed within their natural replenishment rates.'
      },
      terms: []
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: North Sea Oil vs North Sea Wind',
        text: '<strong>North Sea Oil (non-renewable):</strong> Finite reserves discovered in the 1970s. Production peaked in 1999 and has been declining. Rising extraction costs and climate targets are accelerating the phase-out. Opportunity cost of using oil today = reduced stock for future use.<br/><br/><strong>North Sea Wind (renewable):</strong> Wind farms generate electricity with minimal depletion. The UK\'s offshore wind capacity has expanded rapidly. Cost per MWh has fallen by over 70% since 2012, making it one of the cheapest forms of new electricity generation.'
      },
      terms: []
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Questions on resources often link to <strong>market failure</strong> (externalities, common resources), <strong>government intervention</strong> (carbon taxes, subsidies for renewables), and <strong>sustainability</strong>. Be ready to connect resource type to these broader themes.'
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Questions on resources often link to market failure (externalities, common resources), government intervention (carbon taxes, subsidies for renewables), and sustainability. Be ready to connect resource type to these broader themes."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "When defining the factors of production (Land, Labour, Capital, Enterprise), make sure you also correctly pair them with their rewards (Rent, Wages, Interest, Profit). Confusing capital with money is a common trap; remember that capital refers to man-made aids to production."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Renewable resources replenish naturally and are sustainable if managed properly; non-renewable resources are finite and their use depletes stocks permanently, raising long-run costs and sustainability concerns.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'Give two differences between renewable and non-renewable resources.', answer: 'Renewables replenish naturally (e.g. solar, wind) and are sustainable; non-renewables (e.g. oil, coal) are finite, deplete with use, and tend to rise in price over time.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Why do non-renewable resource prices tend to rise over time?', answer: 'As accessible deposits are exhausted, extraction becomes more costly and difficult. Hotelling\'s Rule also predicts prices rise at the rate of interest to reflect increasing scarcity.' },
      { id: 'cue-3', blockId: 'list-2', prompt: 'Why can renewable resources still be overexploited?', answer: 'If extraction rates exceed the natural replenishment rate (e.g. overfishing), the resource stock declines. Lack of clear property rights (common resource problem) worsens this.' },
      { id: 'cue-4', blockId: 'call-1', prompt: 'What is sustainable development?', answer: 'Meeting the needs of the present without compromising the ability of future generations to meet their own needs (Brundtland Commission, 1987).' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_1_4;
