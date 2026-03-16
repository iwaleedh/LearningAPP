export const note_economics_1_2_0 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the standard assumptions of rational consumer behaviour, explain what is meant by utility maximisation, and appreciate how rationality underpins classical demand theory.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is Rational Choice?', level: 2 },
      terms: []
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definition: Rationality',
        text: 'In standard economics, a <strong>rational consumer</strong> is one who aims to <strong>maximise their utility</strong> (satisfaction or well-being) from their available budget. A <strong>rational firm</strong> aims to <strong>maximise profit</strong>. Rational agents weigh up costs and benefits before making decisions, always choosing the option that leaves them best off according to their own preferences.'
      },
      terms: []
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Core Assumptions of Rational Choice Theory', level: 2 },
      terms: []
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Assumptions of the Rational Consumer Model',
        headers: ['Assumption', 'Meaning', 'Implication'],
        rows: [
          ['<strong>Self-interest</strong>', 'Individuals act to maximise their own utility, not to benefit others', 'Demand curves slope downward — consumers buy more when price falls because more units can be enjoyed within the same budget'],
          ['<strong>Perfect information</strong>', 'Consumers have complete and accurate knowledge of all prices and product quality', 'Consumers can always identify the best-value option and make optimal decisions'],
          ['<strong>Consistent preferences</strong>', 'If A is preferred to B and B to C, then A is preferred to C (transitivity)', 'Consumer choices follow a logical, predictable pattern that can be modelled'],
          ['<strong>Utility maximisation</strong>', 'Consumers allocate spending until the marginal utility per pound spent is equal across all goods', 'Explains the law of demand — additional utility from the last unit declines as quantity consumed rises'],
          ['<strong>Ability to process information</strong>', 'Consumers can evaluate all options and compute the best outcome', 'Models predict consumers consistently choose the utility-maximising bundle']
        ]
      },
      terms: []
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Utility and Consumer Decision-Making', level: 2 },
      terms: []
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Utility',
        text: '<strong>Utility</strong> is the satisfaction or benefit a consumer derives from consuming a good or service. It is not directly measurable in the real world — economists use it as a conceptual tool. <strong>Total utility (TU)</strong> is the total satisfaction from all units consumed. <strong>Marginal utility (MU)</strong> is the additional satisfaction from consuming one more unit.'
      },
      terms: []
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'The Utility-Maximising Rule', level: 2 },
      terms: []
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'A rational consumer maximises utility by spending their budget so that the <strong>marginal utility per pound spent</strong> is equal for all goods purchased. If MU/P is higher for good A than good B, the consumer should buy more of A and less of B, until MU/P is equalised across all goods.' }] } },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        html: 'MU<sub>A</sub> / P<sub>A</sub> = MU<sub>B</sub> / P<sub>B</sub> = ... (for all goods)',
        caption: 'Utility-maximising condition: marginal utility per pound must be equal across all goods consumed'
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Rational Choice and the Demand Curve', level: 2 },
      terms: []
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'The assumption of rational, utility-maximising behaviour underlies the standard downward-sloping demand curve. When the price of a good falls, it becomes relatively cheaper — the MU/P ratio rises for that good, so rational consumers buy more of it until the ratio equalises again. This is the <strong>substitution effect</strong> of a price change, which rational choice theory predicts with precision.' }] } },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The Edexcel IAL exam often asks whether consumer behaviour is "rational." In straightforward demand analysis, assume rationality. However, in questions about <strong>behavioural economics</strong>, acknowledge that real consumers often deviate from rationality due to biases, emotions, and limited information — this is covered in the next subtopic.'
      },
      terms: []
    },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Limitation of Rational Choice Theory',
        text: 'The rational choice model is a <strong>simplification</strong>. In reality: consumers have limited attention and time (bounded rationality); preferences can be inconsistent (e.g. preferring immediate pleasure to long-term welfare); and social influences (advertising, peer pressure) shape choices in ways the model ignores. Behavioural economics has demonstrated systematic departures from rationality.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Rational consumers are assumed to maximise utility given their budget, using consistent preferences and perfect information. The utility-maximising rule equates MU/P across all goods — underpinning the downward-sloping demand curve.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'What does a "rational" consumer aim to do in standard economic theory?', answer: 'Maximise their utility (satisfaction) from their available budget, by choosing the option that leaves them best off according to their own preferences.' },
      { id: 'cue-2', blockId: 'eq-1', prompt: 'State the utility-maximising condition for a consumer choosing between two goods A and B.', answer: 'MU_A / P_A = MU_B / P_B — marginal utility per pound spent must be equal for all goods in the optimal consumption bundle.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'Why does rational choice theory assume perfect information?', answer: 'So consumers can identify the best-value option and make truly optimal decisions — without complete information, they might choose sub-optimal bundles through ignorance.' },
      { id: 'cue-4', blockId: 'call-4', prompt: 'Give two reasons why real consumer behaviour may not match the rational choice model.', answer: 'Bounded rationality (limited time and attention), inconsistent preferences (e.g. impulsive purchases), and social influences (advertising, peer pressure) all cause systematic deviations from rationality.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_2_0;
