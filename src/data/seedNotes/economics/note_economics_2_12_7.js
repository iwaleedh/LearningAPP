export const note_economics_2_12_7 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain interventionist supply-side policies — including investment in education, infrastructure, and R&D — and evaluate their effectiveness in raising long-run productive capacity.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Interventionist Supply-Side Policies', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Education and training</strong>: state funding for schools, universities, apprenticeships → raises <strong>human capital</strong> → higher labour productivity; reduces structural unemployment (workers gain transferable skills).' }, { text: '<strong>Infrastructure investment</strong>: roads, rail, broadband, ports reduce business transport costs and enable market integration → private investment is "crowded in".' }, { text: '<strong>R&D subsidies</strong>: fund university research, innovation hubs, knowledge clusters → positive externality of knowledge creation justifies subsidy.' }, { text: '<strong>Industrial policy</strong>: targeted support for strategic sectors (e.g. green energy, biotech, advanced manufacturing) — "picking winners".' }, { text: '<strong>Childcare provision</strong>: enables parents (especially women) to remain in employment → raises labour force participation rate → expands labour supply.' }] } },
    { id: 'callout-warning', type: 'callout', data: { style: 'warning', title: 'Limitations', text: 'Time lags — education systems take 10–20 years to improve productivity. Government failure risk: state may misallocate funds, subsidise unproductive firms ("picking losers"). High fiscal cost in short run.' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Evaluation', text: 'Interventionist policies are justified where market failures exist — education has positive externalities (underinvestment without subsidy), infrastructure has public good characteristics, R&D has non-rivalrous spillovers. These justify intervention beyond what the market provides.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Interventionist supply-side: education, R&D, infrastructure, childcare, industrial policy. Correct market failures, raise human capital, shift LRAS. Long time lags; risk of government failure.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Automatically treating state intervention as efficiency-reducing, while free-market policies as efficiency-enhancing. Interventionist supply-side policies (skills, R&D, infrastructure) correct positive externalities that markets underprovide. Some degree of intervention is efficiency-enhancing. Evaluate policies on merit with reference to market failure theory, not ideology."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Interventionist supply-side: education, R&D subsidies, infrastructure, childcare, industrial policy. Justified by market failures. Long time lags are a key weakness.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'Why does the government subsidise R&D as an interventionist supply-side policy?', answer: 'Knowledge from R&D has positive externalities — it spillovers to other firms and is partially non-excludable. The free market under-invests in R&D because firms cannot capture all returns. Government subsidy corrects this under-investment and raises long-run productive capacity.' },
      { id: 'cue-2', blockId: 'callout-warning', prompt: 'What time lag issue affects interventionist supply-side policies?', answer: 'Education reforms take 10–20 years to affect adult labour productivity. Infrastructure projects take years to plan, build, and deliver productivity benefits. This means supply-side policies are not effective for short-run stabilisation — they require long-term commitment.' },
    ]
  },
  evidence: [], mentions: []
};
