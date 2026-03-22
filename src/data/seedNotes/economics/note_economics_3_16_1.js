export const note_economics_3_16_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Analyse factors that affect the price elasticity of demand for labour (PED_L) and explain its implications for wage bargaining.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Labour Demand Elasticity', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Definition', text: '<strong>Price elasticity of demand for labour</strong> measures how responsive the quantity of labour demanded is to a change in the wage rate.<br/>PED_L = % change in quantity of labour demanded ÷ % change in wage rate.<br/>Usually negative (downward-sloping demand); measured as an absolute value.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Marshall\'s Laws of Derived Demand', level: 2 } },
    { id: 'callout-key2', type: 'callout', data: { style: 'key', title: 'Four Determinants (Marshall)', text: 'Labour demand is <strong>more inelastic</strong> when:<br/>1. <strong>Demand for the final product is inelastic</strong> — wage rises are passed on as higher prices with little fall in demand.<br/>2. <strong>Labour costs are a small share of total costs</strong> — wage rises have minor impact on total cost.<br/>3. <strong>It is difficult to substitute labour with capital</strong> — few technological alternatives exist.<br/>4. <strong>Capital supply is inelastic</strong> — even if substitution is desirable, capital is hard to obtain quickly.' } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Elastic vs Inelastic Labour Demand', headers: ['Characteristic', 'More Elastic', 'More Inelastic'], rows: [['Product demand elasticity', 'Elastic product demand', 'Inelastic product demand'], ['Labour\'s share of costs', 'Large share of total costs', 'Small share of total costs'], ['Capital substitutability', 'Easy to substitute', 'Difficult to substitute'], ['Time horizon', 'Long run', 'Short run']] } },
    { id: 'list-impl', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Trade union bargaining power</strong>: workers in industries with inelastic labour demand can push for higher wages with less employment loss — e.g. doctors, pilots.' }, { text: '<strong>Minimum wage impact</strong>: larger employment losses in elastic labour demand industries; smaller losses in inelastic ones.' }, { text: '<strong>Automation risk</strong>: more likely if labour demand is elastic (easy substitution with capital).' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Apply to minimum wage debates: <strong>"If labour demand for low-skill workers is elastic (easy to automate), a minimum wage rise may cause significant unemployment; if inelastic, employment effects are small."</strong>' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Labour demand elasticity (Marshall\'s laws): more inelastic if product demand inelastic, labour is small share of costs, capital substitution difficult, or in short run. Affects union bargaining and minimum wage employment impact.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students confuse labour demand elasticity with price elasticity of demand. Labour demand elasticity depends on: product demand elasticity, proportion of labour costs in total costs, and ease of factor substitution \u2014 not product price sensitivity."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Labour demand inelastic when: product demand inelastic, labour small share of costs, capital cannot substitute easily, short run. Inelastic demand = higher wages sustainable without big employment fall.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key2', prompt: 'State Marshall\'s four laws of derived demand for labour.', answer: 'Labour demand is more inelastic when: (1) demand for the final product is inelastic; (2) labour costs are a small proportion of total costs; (3) capital cannot easily substitute for labour; (4) supply of substitute capital is inelastic.' },
      { id: 'cue-2', blockId: 'list-impl', prompt: 'How does labour demand elasticity affect trade union wage bargaining?', answer: 'Unions in industries with inelastic labour demand (e.g. doctors, pilots) can negotiate higher wages without large employment losses, since firms cannot easily replace workers. In elastic demand industries, wage rises lead to significant job losses, weakening union bargaining power.' },
    ]
  },
  evidence: [], mentions: []
};
