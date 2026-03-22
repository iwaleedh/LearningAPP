export const note_economics_1_5_0 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define market failure, identify the main sources of market failure, and understand why free markets may not achieve an efficient allocation of resources.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Sources of Market Failure', level: 2 },
      terms: []
    },
    {
      id: 'key-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Market Failure',
        text: '<strong>Market failure</strong> occurs when the free market <strong>fails to allocate resources efficiently</strong>, leading to an outcome that is not Pareto optimal — i.e. it is possible to make someone better off without making anyone worse off. The result is a misallocation of resources: too much or too little of a good is produced.'
      },
      terms: []
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Main Sources of Market Failure', level: 3 },
      terms: []
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Externalities:</strong> Third-party effects not reflected in market prices. Negative externalities (e.g. pollution) lead to overproduction; positive externalities (e.g. education) lead to underproduction.' },
          { text: '<strong>Public goods:</strong> Non-excludable and non-rival goods (e.g. national defence, street lighting). The free market undersupplies or fails to supply them due to the free-rider problem.' },
          { text: '<strong>Information failure:</strong> Asymmetric or imperfect information means buyers/sellers make suboptimal decisions (e.g. insurance markets, second-hand cars).' },
          { text: '<strong>Market power / monopoly:</strong> A dominant firm restricts output and raises prices above competitive levels, causing allocative inefficiency.' },
          { text: '<strong>Merit goods:</strong> Goods with positive externalities that are underprovided/underconsumed by the market (e.g. education, healthcare).' },
          { text: '<strong>Demerit goods:</strong> Goods with negative externalities that are overprovided/overconsumed (e.g. cigarettes, alcohol).' }
        ]
      },
      terms: []
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Types of market failure — summary',
        headers: ['Type of Failure', 'Cause', 'Market Outcome', 'Example'],
        rows: [
          ['Negative externality', 'External costs not priced in', 'Overproduction', 'Carbon emissions from factories'],
          ['Positive externality', 'External benefits not rewarded', 'Underproduction/consumption', 'Vaccination, education'],
          ['Public good', 'Non-excludability → free-rider problem', 'Undersupply or zero supply', 'National defence, lighthouses'],
          ['Asymmetric information', 'One party knows more than the other', 'Adverse selection/moral hazard', 'Used cars, insurance'],
          ['Market power', 'Monopoly restricts output', 'Price > MC (allocative inefficiency)', 'Utility companies'],
          ['Merit good', 'Individuals undervalue long-term benefits', 'Underconsumption', 'Preventive healthcare'],
          ['Demerit good', 'Individuals ignore external/internal costs', 'Overconsumption', 'Tobacco, gambling']
        ]
      },
      terms: []
    },
    {
      id: 'tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'In evaluative answers on market failure, always distinguish between <strong>market failure</strong> (a problem with the free market) and <strong>government failure</strong> (a problem with government intervention). Acknowledging both sides is expected at higher marks.'
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "In evaluative answers on market failure, always distinguish between market failure (a problem with the free market) and government failure (a problem with government intervention). Acknowledging both sides is expected at higher marks."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Define market failure precisely as a misallocation of resources, resulting in a net welfare loss to society. Give a clear example from the data extract to secure your application mark."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Market failure occurs when free markets misallocate resources. Key sources: externalities, public goods, information failure, market power, and merit/demerit goods. Each causes over- or under-production.',
    cues: [
      { id: 'cue-1', blockId: 'key-1', prompt: 'Define market failure.', answer: 'Market failure occurs when the free market fails to allocate resources efficiently, resulting in over- or under-production of goods.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Name four main sources of market failure.', answer: 'Externalities, public goods, information failure, market power (any four from the list above).' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'Why do negative externalities lead to overproduction?', answer: 'External costs are not reflected in the market price, so the good is priced too low and more than the socially optimal quantity is produced.' },
      { id: 'cue-4', blockId: 'tbl-1', prompt: 'Give an example of a merit good and explain why it is underprovided.', answer: 'Education — individuals may undervalue its long-term benefits and external returns to society, leading to underconsumption relative to the social optimum.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_5_0;
