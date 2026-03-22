export const note_economics_3_17_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the economic justifications for government intervention in product markets, focusing on market failure and equity arguments.' } },
    { id: 'h-1', type: 'heading', data: { text: 'The Case for Intervention in Product Markets', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Market Failure Justification', text: 'Free markets fail to achieve <strong>allocative efficiency</strong> in the presence of externalities, public goods, information failures, and market power — intervention can correct these failures to improve social welfare.' } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Externalities</strong> — markets overproduce negative externalities (pollution, congestion) and underproduce positive externalities (education, vaccination). Government can internalise them via taxes/subsidies.' }, { text: '<strong>Public goods</strong> — non-rival and non-excludable; free-rider problem prevents private provision at optimal level. Government must provide (defence, street lighting).' }, { text: '<strong>Information failure</strong> — consumers and firms lack perfect information; under/over-consumption leads to welfare loss (e.g. unhealthy food, tobacco, under-use of preventive healthcare).' }, { text: '<strong>Monopoly power</strong> — markets with significant monopoly power lead to under-production, higher prices and deadweight welfare loss. Competition regulation corrects this.' }, { text: '<strong>Equity concerns</strong> — even if efficient, markets may produce outcomes that are unacceptably unequal. Government may intervene on distributional grounds (minimum wage, price caps, welfare).' }] } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Market Failures and Appropriate Interventions', headers: ['Market failure', 'Government response', 'Example'], rows: [['Negative externality', 'Tax (Pigouvian)', 'Carbon tax on pollution'], ['Positive externality', 'Subsidy', 'Subsidy on university education'], ['Public good', 'Direct provision', 'National defence, street lighting'], ['Information failure', 'Regulation / information provision', 'Mandatory food labelling, health warnings'], ['Monopoly', 'Competition regulation / price caps', 'CMA investigation, Ofwat price controls']] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Evaluation', text: 'Market failure does not automatically justify intervention — government failure is also possible. Ask: <strong>"Is the intervention cost-effective? Does it create more distortions than it corrects? Does it raise equity concerns?"</strong>' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Intervention justifications: externalities, public goods, information failure, monopoly power, and equity. Each market failure has a targeted policy tool. Evaluate by weighing intervention benefits against government failure risks.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Always link market failure to the case for intervention: monopoly power, information asymmetry, externalities, or inequality. Avoid claiming intervention is needed without identifying the specific market failure first."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Five justifications for product market intervention: (1) negative externalities — tax; (2) positive externalities — subsidy; (3) public goods — direct provision; (4) information failure — regulation; (5) equity — redistribution.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'State five economic justifications for government intervention in product markets.', answer: 'Negative externalities (overconsumption — tax); positive externalities (underconsumption — subsidy); public goods (non-provision — direct supply); information failure (mis-consumption — regulation/information); monopoly power (under-production, high price — competition law); and equity/distribution (intervention for fairness via minimum wage, price caps).' },
    ]
  },
  evidence: [], mentions: []
};
