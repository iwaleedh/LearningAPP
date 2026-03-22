export const note_economics_1_5_4 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define and distinguish between public goods, private goods, club goods, and common resources using the criteria of excludability and rivalry.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Public vs Private Goods', level: 2 },
      terms: []
    },
    {
      id: 'key-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Two Key Properties',
        text: '<strong>Excludability:</strong> Is it possible to prevent people who have not paid from consuming the good?<br/><strong>Rivalry (Subtractability):</strong> Does one person\'s consumption reduce the amount available to others?'
      },
      terms: []
    },
    {
      id: 'key-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Pure Public Good',
        text: 'A <strong>pure public good</strong> is both <strong>non-excludable</strong> (cannot prevent non-payers from consuming) and <strong>non-rival</strong> (one person\'s consumption does not reduce availability to others). These properties lead to the <strong>free-rider problem</strong> and market failure.'
      },
      terms: []
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Classification of goods by excludability and rivalry',
        headers: ['Type', 'Excludable?', 'Rival?', 'Examples', 'Provided by?'],
        rows: [
          ['Private good', 'Yes', 'Yes', 'Food, clothing, cars, smartphones', 'Free market'],
          ['Public good', 'No', 'No', 'National defence, street lighting, public fireworks', 'Government (state)'],
          ['Club good', 'Yes', 'No (until congested)', 'Pay-per-view TV, toll roads (uncongested), private parks', 'Private/club'],
          ['Common resource', 'No', 'Yes', 'Fish stocks, public parks, clean air', 'May require regulation']
        ]
      },
      terms: []
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Why Public Goods Cause Market Failure', level: 3 },
      terms: []
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'Because public goods are <strong>non-excludable</strong>, firms cannot charge for them — anyone can consume without paying. Profit-seeking firms therefore have <strong>no incentive to supply</strong> them. The free-rider problem (see Topic 5.5) means these goods are either undersupplied or not supplied at all by private markets.' }] } },
    {
      id: 'key-3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Quasi-Public Goods',
        text: '<strong>Quasi-public goods</strong> have characteristics of both public and private goods. For example, a road is non-rival when uncongested (like a public good), but becomes rival when congested. It can also be made excludable with tolls. <em>Examples:</em> roads, beaches, public parks.'
      },
      terms: []
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>National defence:</strong> Classic pure public good — non-rival (defending one person does not reduce defence for others) and non-excludable (impossible to exclude anyone within borders).' },
          { text: '<strong>Street lighting:</strong> Non-rival (walking under a streetlight does not reduce light for others) and non-excludable (cannot charge individual passers-by).' },
          { text: '<strong>Fish stocks:</strong> Common resource — non-excludable (hard to prevent fishing) but <em>rival</em> (one person\'s catch reduces others\'). Can lead to the "tragedy of the commons."' }
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
        text: 'Many students confuse "public good" with "goods provided by the government." This is wrong. A public good has <strong>specific economic properties</strong> (non-rival + non-excludable). Governments often provide services that are actually private goods (e.g. healthcare — excludable and rival).'
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Many students confuse \"public good\" with \"goods provided by the government.\" This is wrong. A public good has specific economic properties (non-rival + non-excludable). Governments often provide services that are actually private goods (e.g. healthcare \u2014 excludable and rival)."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "A standard evaluation point for externalities is the difficulty of assigning a monetary value to external costs. For example, how do you accurately price the cost of noise pollution on nearby residents? This shows excellent critical reasoning."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Public goods are non-excludable and non-rival (e.g. national defence). Private goods are excludable and rival. Club goods are excludable but non-rival. Common resources are non-excludable but rival. Non-excludability causes the free-rider problem.',
    cues: [
      { id: 'cue-1', blockId: 'key-2', prompt: 'What are the two defining properties of a public good?', answer: 'Non-excludable (cannot prevent non-payers) and non-rival (one person\'s consumption does not reduce availability to others).' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'Give two examples of pure public goods.', answer: 'National defence and street lighting (also: public fireworks, flood defences).' },
      { id: 'cue-3', blockId: 'key-3', prompt: 'What is a quasi-public good? Give an example.', answer: 'A good that has some but not all public good properties. E.g. a road — non-rival when uncongested but becomes rival in a traffic jam.' },
      { id: 'cue-4', blockId: 'tip-1', prompt: 'Why is healthcare NOT a pure public good even though governments often provide it?', answer: 'Healthcare is excludable (you can be charged) and rival (a doctor treating one patient cannot simultaneously treat another), so it is a private good.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_5_4;
