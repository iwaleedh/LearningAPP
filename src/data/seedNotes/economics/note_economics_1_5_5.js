export const note_economics_1_5_5 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Define public goods and the free-rider problem, explain why markets under-provide public goods, and evaluate solutions to the free-rider problem.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'Public Goods: Key Characteristics', level: 2 }, terms: [] },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Two Essential Properties', text: '<strong>Non-excludable</strong>: once provided, it is impossible (or prohibitively costly) to prevent anyone from consuming the good, even if they have not paid for it.<br/><br/><strong>Non-rivalrous</strong>: one person\'s consumption of the good does not reduce the amount available for others (zero marginal cost of an extra consumer).' }, terms: [] },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Private vs Public Goods', headers: ['Property', 'Private Good', 'Public Good'], rows: [['Excludable?', 'Yes — non-payers excluded', 'No — impossible to exclude'], ['Rivalrous?', 'Yes — one person\'s use reduces availability', 'No — zero marginal cost of extra consumer'], ['Examples', 'Food, clothing, cars', 'National defence, street lighting, fireworks display'], ['Market provision?', 'Yes — markets work well', 'No — market fails (free-rider problem)']] }, terms: [] },
    { id: 'h-2', type: 'heading', data: { text: 'The Free-Rider Problem', level: 2 }, terms: [] },
    { id: 'call-2', type: 'callout', data: { style: 'key', title: 'Free-Rider Problem', text: 'Because public goods are <strong>non-excludable</strong>, individuals have an incentive to <strong>not pay</strong> while still enjoying the good — they "free-ride" on others\' contributions.<br/><br/>If everyone free-rides → no one pays → the market <strong>under-provides or does not provide</strong> the good at all. This is a fundamental market failure.' }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>National defence</strong>: once provided, all citizens benefit regardless of whether they paid taxes (or whether the army could exclude them).' }, { text: '<strong>Street lighting</strong>: once a street lamp is on, any passerby benefits — no way to exclude non-payers.' }, { text: '<strong>Flood defences</strong>: a flood barrier protects an entire community; impossible to exclude any resident.' }, { text: '<strong>Fireworks display</strong>: everyone nearby can watch without paying.' }] }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: 'Solutions to the Free-Rider Problem', level: 2 }, terms: [] },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Government provision</strong>: the state directly provides public goods, funded through <strong>compulsory taxation</strong> — eliminating the voluntary payment problem.' }, { text: '<strong>Regulation</strong>: compulsory contributions (e.g. licence fees for broadcasting).' }, { text: '<strong>Technology converting non-excludable to excludable</strong>: electronic road pricing, paywall media — can make some quasi-public goods excludable.' }] }, terms: [] },
    { id: 'call-3', type: 'callout', data: { style: 'warning', title: 'Quasi-Public Goods', text: '<strong>Quasi-public goods</strong> (also called near-public goods) have features of both public and private goods. They are technically non-excludable but may become <strong>congested</strong> at high usage (making them somewhat rivalrous).<br/>Examples: roads (free but congestible), beaches (open access but crowded in summer).' }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'Public goods are non-excludable and non-rivalrous. The free-rider problem means markets under-provide them. Government provision funded by taxation is the standard solution.' }, terms: [] },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Public goods: non-excludable + non-rivalrous → free-rider problem → market under-provision → government provides.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'Define non-excludability and non-rivalry.', answer: 'Non-excludable: cannot prevent non-payers from consuming. Non-rivalrous: one person\'s use does not reduce availability for others.' },
      { id: 'cue-2', blockId: 'call-2', prompt: 'Explain the free-rider problem.', answer: 'Individuals have no incentive to pay for public goods because they cannot be excluded whether they pay or not. If everyone free-rides, the good will not be privately provided.' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'Give two examples of public goods and explain why each is non-excludable.', answer: 'National defence: cannot protect only taxpayers. Street lighting: cannot switch off lights for non-payers walking by.' },
      { id: 'cue-4', blockId: 'h-3', prompt: 'Why is government provision financed by taxation the standard solution to the free-rider problem?', answer: 'Taxation is compulsory — it eliminates voluntary payment, ensuring everyone contributes to the funding of public goods.' },
    ]
  },
  evidence: [],
  mentions: []
};
