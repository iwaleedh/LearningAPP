export const note_economics_1_6_4 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the Coase theorem and the role of property rights in internalising externalities, and evaluate the extension of property rights as a market-based solution to market failure.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'The Coase Theorem', level: 2 }, terms: [] },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Coase Theorem', text: 'The <strong>Coase theorem</strong> (Ronald Coase, 1960) states that if <strong>property rights are clearly defined</strong> and <strong>transaction costs are zero</strong> (or low), private parties will negotiate and reach a <strong>socially efficient outcome</strong> without government intervention, regardless of who holds the initial property rights.' }, terms: [] },
    { id: 'h-2', type: 'heading', data: { text: 'How Property Rights Internalise Externalities', level: 2 }, terms: [] },
    { id: 'call-2', type: 'callout', data: { style: 'worked', title: 'Example: Coase Bargaining', text: 'A firm dumps waste into a river, harming a downstream fisherman. There are two scenarios:<br/><br/><strong>Fisherman owns river rights</strong>: firm must negotiate with fisherman and pay for damage → firm internalises pollution cost.<br/><strong>Firm owns rights</strong>: fisherman may pay firm to reduce pollution → fisherman compensates firm for reducing output.<br/><br/>Either way, bargaining leads to the <strong>same socially efficient level of pollution</strong> — the externality is internalised through voluntary exchange.' }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: 'Real-World Applications', level: 2 }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Tradable pollution permits</strong>: create marketable property rights over the right to pollute — closely related to the Coase approach.' }, { text: '<strong>Noise nuisance law</strong>: giving residents legal rights to quiet allows them to seek compensation from noisy businesses.' }, { text: '<strong>Carbon property rights</strong>: voluntary carbon credit schemes give landowners rights over carbon stored in forests — they can sell credits to emitters.' }, { text: '<strong>Fisheries quotas</strong>: individual transferable quotas give fishing boats property rights over a share of the total catch.' }] }, terms: [] },
    { id: 'h-4', type: 'heading', data: { text: 'Limitations of the Coase Approach', level: 2 }, terms: [] },
    { id: 'call-3', type: 'callout', data: { style: 'warning', title: 'Why Coase Bargaining Often Fails in Practice', text: '<strong>High transaction costs</strong>: negotiating with thousands of affected parties (e.g. air pollution hurting millions) is prohibitively costly.<br/><strong>Difficulty defining rights</strong>: who owns the atmosphere? Rights are often legally unclear.<br/><strong>Wealth effects</strong>: who holds the right affects the distribution of benefits — the outcome may be efficient but unfair.<br/><strong>Information problems</strong>: each side may misrepresent preferences during bargaining.' }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'The Coase theorem shows that with zero transaction costs and clear property rights, parties can privately negotiate away externalities. In practice, this fails for large-scale externalities (air pollution, climate change) due to high transaction costs and unclear rights — justifying government intervention.' }, terms: [] },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Coase theorem: clear property rights + zero transaction costs → private bargaining achieves efficiency. Fails in practice for large-scale externalities.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'State the Coase theorem.', answer: 'If property rights are clearly defined and transaction costs are zero, private bargaining will produce a socially efficient outcome regardless of initial rights allocation.' },
      { id: 'cue-2', blockId: 'call-2', prompt: 'Explain how assigning property rights to a fisherman downstream from a polluting factory could internalise the externality.', answer: 'The fisherman can sue or charge the factory for damaging water quality — forcing the factory to factor in pollution costs, reducing pollution toward the social optimum.' },
      { id: 'cue-3', blockId: 'h-4', prompt: 'Why does Coase bargaining fail for climate change?', answer: 'Transaction costs are prohibitively high — billions of people are affected; defining and enforcing rights over the atmosphere is impossible; free-rider problems are severe.' },
      { id: 'cue-4', blockId: 'list-1', prompt: 'How are tradable pollution permits related to the Coase theorem?', answer: 'Permits create marketable property rights over emissions — firms with low abatement costs sell permits (internalising the cost of pollution) in a market-based, Coase-inspired mechanism.' },
    ]
  },
  evidence: [],
  mentions: []
};
