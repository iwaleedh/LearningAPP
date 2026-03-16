export const note_economics_3_15_10 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain monopsony in both product and labour markets, analyse its effects on price, wages and output, and evaluate its welfare implications.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Monopsony Characteristics', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'What is Monopsony?', text: 'A <strong>monopsony</strong> is a market with a <strong>single dominant buyer</strong>. The buyer has market power to influence the price it pays for goods, services or labour.<br/>Key contrast: monopoly = market power as a <strong>seller</strong>; monopsony = market power as a <strong>buyer</strong>.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Monopsony in Labour Markets', level: 2 } },
    { id: 'list-labour', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Single employer</strong> (or dominant employer) in a local labour market — e.g. a coal mine in a small town; NHS as the near-sole employer of UK nurses.' }, { text: 'To hire more workers, the monopsonist must <strong>raise wages for all existing workers</strong> → <strong>Marginal Labour Cost (MLC) > Average Labour Cost (ALC/wage)</strong>.' }, { text: 'Monopsonist hires where <strong>MRP = MLC</strong> → employment and wages are <strong>lower</strong> than in a competitive labour market.' }, { text: 'Creates a <strong>wage below competitive rate</strong> — exploit workers → welfare loss (analogous to monopoly in output market).' }] } },
    { id: 'h-2b', type: 'heading', data: { text: 'Monopsony in Product Markets', level: 2 } },
    { id: 'list-product', type: 'list', data: { style: 'bullet', items: [{ text: 'Supermarkets (Tesco, Walmart) as near-monopsonists buying from farmers/suppliers — can force down supplier prices.' }, { text: 'Government as a monopsonist for military equipment, healthcare services.' }, { text: 'Suppliers face lower prices, possibly below ATC → may exit market.' }] } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Monopsony vs Competitive Buyer', headers: ['Feature', 'Competitive Market', 'Monopsony'], rows: [['Price paid / wage', 'Determined by supply & demand', 'Below competitive rate'], ['Quantity purchased', 'Higher', 'Lower'], ['Buyer surplus', 'Normal', 'Higher — buys at artificially low cost'], ['Supplier/worker welfare', 'Normal', 'Worse — receive less than competitive rate']] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'A minimum wage can correct labour market monopsony — raising wages to the competitive equilibrium can actually <strong>increase both wages AND employment</strong> simultaneously (unlike in a competitive market). This is a key evaluation point.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Monopsony: single dominant buyer — lower prices for suppliers, lower wages for workers. MLC > ALC forces equilibrium below competitive level. Minimum wage can correct monopsony exploitation without reducing employment.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Monopsony: one buyer. Labour market monopsony → MLC > ALC → wages and employment below competitive equilibrium. A minimum wage can simultaneously raise wages and employment under monopsony.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'How does a monopsonist differ from a monopolist?', answer: 'A monopolist has market power as a seller (one seller, many buyers) and sets price above MC. A monopsonist has market power as a buyer (one buyer, many sellers) and pays a price below the competitive level. The monopsonist exploits suppliers or workers.' },
      { id: 'cue-2', blockId: 'list-labour', prompt: 'Why does a monopsonist pay wages below the competitive rate?', answer: 'In a monopsony, the single employer faces the entire upward-sloping labour supply curve. To hire more workers, it must raise wages for all workers (not just new ones), making MLC > ALC. The profit-maximising hire level is where MRP = MLC, which is lower employment at a lower wage than the competitive equilibrium.' },
    ]
  },
  evidence: [], mentions: []
};
