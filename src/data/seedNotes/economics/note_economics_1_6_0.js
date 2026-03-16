export const note_economics_1_6_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the purposes of government intervention in markets and provide an overview of the main types of intervention available to governments.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'Why Governments Intervene in Markets', level: 2 }, terms: [] },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Core Purposes of Intervention', text: 'Governments intervene to:<br/>1. Correct <strong>market failures</strong> (externalities, public goods, information gaps, merit/demerit goods)<br/>2. Promote <strong>equity</strong> — redistribute income and wealth<br/>3. Achieve <strong>macroeconomic stability</strong> — control inflation, unemployment, and growth<br/>4. <strong>Protect consumers, workers, and the environment</strong>' }, terms: [] },
    { id: 'h-2', type: 'heading', data: { text: 'Market Failures Requiring Intervention', level: 2 }, terms: [] },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Market failures and appropriate interventions', headers: ['Market failure', 'Type', 'Intervention type'], rows: [['Air pollution from factories', 'Negative externality', 'Carbon taxes, pollution permits, regulation'], ['Vaccination (society benefits)', 'Positive externality', 'Subsidy, free provision'], ['National defence, lighthouses', 'Public goods', 'Government provision funded by tax'], ['Healthcare (information asymmetry)', 'Information failure', 'Public provision, regulation, information campaigns'], ['Alcohol, cigarettes (demerit goods)', 'Over-consumption', 'Indirect taxes, advertising bans, minimum unit pricing'], ['Education (under-valued)', 'Merit good / positive externality', 'Free state provision, subsidies, compulsory attendance']] }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: 'Overview of Intervention Tools', level: 2 }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Indirect taxes</strong>: raise the price of demerit goods (cigarettes, alcohol, petrol) to reduce consumption.' }, { text: '<strong>Subsidies</strong>: lower the effective price of merit goods (vaccines, public transport) to increase consumption.' }, { text: '<strong>Price controls</strong>: maximum prices (rent controls) and minimum prices (minimum wage, agricultural floor prices).' }, { text: '<strong>Regulation</strong>: rules imposed on producers and consumers (emission standards, food safety, banking capital ratios).' }, { text: '<strong>Direct provision</strong>: state provides public/merit goods directly (NHS, schools, defence).' }, { text: '<strong>Information provision</strong>: government corrects information failures (food labels, health warnings, consumer rights enforcement).' }, { text: '<strong>Property rights</strong>: assigning rights to internalise externalities (Coase theorem, tradable permits).' }] }, terms: [] },
    { id: 'call-2', type: 'callout', data: { style: 'tip', title: 'Evaluation: Government Failure', text: 'Intervention is justified when market failure causes deadweight loss. However, government intervention can itself cause <strong>government failure</strong> if it creates new inefficiencies, has unintended consequences, or involves regulatory capture — sometimes making things worse than the original market failure.' }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'Government intervention corrects market failures (externalities, public goods, information gaps, merit/demerit goods) and promotes equity and stability. Tools include taxes, subsidies, price controls, regulation, direct provision, and information campaigns.' }, terms: [] },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Governments intervene to fix market failures, promote equity, and ensure macroeconomic stability.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'List four reasons governments intervene in markets.', answer: 'Correct market failures, promote equity, achieve macroeconomic stability, and protect consumers/workers/environment.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'What intervention is typically used to correct a negative externality like air pollution?', answer: 'Carbon/pollution taxes, tradable pollution permits, or direct regulation (emission standards).' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'Name three different types of government intervention tools.', answer: 'Indirect taxes, subsidies, price controls, regulation, direct provision, information campaigns, or property rights allocation.' },
      { id: 'cue-4', blockId: 'call-2', prompt: 'What is government failure and why is it relevant to intervention analysis?', answer: 'Government failure is when intervention creates new inefficiencies or unintended consequences — meaning intervention may not always improve on the market outcome.' },
    ]
  },
  evidence: [],
  mentions: []
};
