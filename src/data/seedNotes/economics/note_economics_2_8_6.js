export const note_economics_2_8_6 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain policy instruments that governments use to incentivise and boost private sector investment, including tax reliefs, subsidies, and planning reforms.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Government Policies to Boost Investment', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Corporation tax cuts</strong>: lower tax on profits → increases net return on investment → raises post-tax MEC → encourages more projects.' }, { text: '<strong>Capital allowances / investment tax relief</strong>: firms deduct cost of new capital against taxable profits — lowers effective cost → boosts investment.' }, { text: '<strong>R&D tax credits</strong>: subsidise research and development expenditure to encourage innovation investment.' }, { text: '<strong>Enterprise Investment Schemes (EIS)</strong>: tax relief for investors in start-up businesses — stimulates FDI into high-risk ventures.' }, { text: '<strong>Infrastructure investment</strong>: government builds roads, broadband, rail — reduces business costs and "crowds in" private investment.' }, { text: '<strong>Planning reform</strong>: streamlining planning permissions reduces delays and costs of building new capacity.' }, { text: '<strong>Trade agreements / single market access</strong>: guaranteed market access increases expected returns on export-oriented investment.' }] } },
    { id: 'callout-warning', type: 'callout', data: { style: 'warning', title: 'Limitations', text: 'Investment is highly influenced by <strong>expectations and confidence</strong>; even zero interest rates may not stimulate investment if firms are pessimistic ("liquidity trap"). Government incentives reduce cost but cannot change expectations of future demand on their own.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Policies to incentivise investment: corporation tax cuts, capital allowances, R&D credits, EIS, infrastructure spending, planning reform. But confidence is equally important — supply-side incentives alone are insufficient if demand outlook is weak.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Investment incentives: corp tax cuts, capital allowances, R&D credits, EIS, infrastructure, planning reform. Confidence remains essential.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'How do capital allowances incentivise investment?', answer: 'Capital allowances allow firms to deduct the cost of new capital from their taxable profits, reducing the effective cost of the investment and increasing the post-tax rate of return (raising MEC).' },
      { id: 'cue-2', blockId: 'callout-warning', prompt: 'Why might investment incentives fail to boost investment?', answer: 'Even with generous tax incentives and low interest rates, if firms are pessimistic about future demand, they will not invest. This is the "liquidity trap" — monetary and fiscal incentives cannot boost investment when confidence is very low.' },
    ]
  },
  evidence: [], mentions: []
};
