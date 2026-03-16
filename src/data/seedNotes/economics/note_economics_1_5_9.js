export const note_economics_1_5_9 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Apply concepts of market failure (externalities, public goods, asymmetric information, moral hazard) to the specific contexts of transport, health, education, and financial markets.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'Market Failures Across Key Sectors', level: 2 }, terms: [] },
    { id: 'h-2', type: 'heading', data: { text: '1. Transport', level: 2 }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Negative externalities</strong>: car use generates air pollution, noise, and carbon emissions — not paid for by drivers (<strong>negative production/consumption externalities</strong>).' }, { text: '<strong>Road congestion</strong>: roads are quasi-public goods — non-excludable but rivalrous at peak times. No price charged → over-use → congestion.' }, { text: '<strong>Under-provision of public transport</strong>: positive externalities of public transport (reduced congestion, lower emissions) mean private market under-provides — justifying subsidies.' }] }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: '2. Health', level: 2 }, terms: [] },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Asymmetric information</strong>: doctors have far more knowledge than patients (<strong>principal-agent problem</strong>) — patients may over- or under-consume healthcare based on poor information.' }, { text: '<strong>Positive externalities</strong>: vaccinations protect not just the individual but the whole community (<strong>herd immunity</strong>) — markets under-provide vaccines relative to the social optimum.' }, { text: '<strong>Merit good</strong>: healthcare is judged to have greater social value than consumers recognise — private market under-provides without subsidy or public provision.' }, { text: '<strong>Moral hazard in health insurance</strong>: insured patients over-use healthcare (e.g. unnecessary GP visits), increasing costs for insurers.' }] }, terms: [] },
    { id: 'h-4', type: 'heading', data: { text: '3. Education', level: 2 }, terms: [] },
    { id: 'list-3', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Positive externalities</strong>: an educated workforce increases productivity, innovation, and social cohesion — private individuals under-invest relative to the social benefit.' }, { text: '<strong>Merit good</strong>: individuals may undervalue education (especially children and low-income families) → under-consumption without state support.' }, { text: '<strong>Information failure</strong>: school rankings and league tables provide imperfect quality signals; parents in deprived areas may lack resources to access the best schools.' }] }, terms: [] },
    { id: 'h-5', type: 'heading', data: { text: '4. Financial Markets', level: 2 }, terms: [] },
    { id: 'list-4', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Asymmetric information</strong>: financial advisers know more than clients; mortgage brokers knew more than borrowers in 2008 — leading to mis-selling of complex products.' }, { text: '<strong>Moral hazard</strong>: "too big to fail" banks take excessive risks expecting government bailout (2008 crisis illustrated this).' }, { text: '<strong>Speculation and bubbles</strong>: herd behaviour in financial markets creates asset bubbles (dot-com 2001, housing 2008) that cause systemic risk on collapse.' }, { text: '<strong>Negative externalities</strong>: bank collapses impose massive costs on the rest of the economy (recession, unemployment) not borne by the banks themselves.' }] }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'Market failures pervade transport (externalities, congestion), health (asymmetric info, positive externalities, merit goods), education (positive externalities, under-consumption), and finance (moral hazard, speculation, systemic risk). Government intervention is justified in each sector.' }, terms: [] },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Transport: neg. externalities. Health: asymmetric info + positive ext. Education: positive ext + merit good. Finance: moral hazard + speculation.',
    cues: [
      { id: 'cue-1', blockId: 'h-2', prompt: 'Give two market failures in the transport sector.', answer: 'Negative externalities from pollution/congestion (not priced into car use); under-provision of subsidised public transport despite positive externalities.' },
      { id: 'cue-2', blockId: 'h-3', prompt: 'Why is vaccination likely to be under-provided by the free market?', answer: 'Vaccinations have positive externalities (herd immunity). The private benefit is less than the social benefit, so the market under-provides without subsidy.' },
      { id: 'cue-3', blockId: 'h-4', prompt: 'Explain why education is considered a merit good.', answer: 'Individuals underestimate the long-term value of education (especially children), so private demand is below the socially optimal level, justifying state provision.' },
      { id: 'cue-4', blockId: 'h-5', prompt: 'How does moral hazard arise in financial markets?', answer: 'Large banks believe they will be bailed out if they fail ("too big to fail"), so they take excessive risks — a form of moral hazard where risk is shifted onto taxpayers.' },
    ]
  },
  evidence: [],
  mentions: []
};
