export const note_economics_1_5_1 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Distinguish between private, external, and social costs and benefits, apply the formulas for social cost and social benefit, and use these concepts to identify market failure.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Social vs Private Costs and Benefits', level: 2 },
      terms: []
    },
    {
      id: 'key-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Private Costs',
        text: '<strong>Private costs</strong> are the costs borne directly by the <strong>producer or consumer</strong> involved in a transaction. Examples: wages, raw materials, fuel, purchase price.'
      },
      terms: []
    },
    {
      id: 'key-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'External Costs',
        text: '<strong>External costs</strong> (negative externalities) are costs imposed on <strong>third parties</strong> who are not party to the transaction and receive no compensation. Examples: pollution, noise, congestion.'
      },
      terms: []
    },
    {
      id: 'key-3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Social Cost',
        text: '<strong>Social Cost = Private Cost + External Cost</strong>. This is the <em>full cost to society</em> of producing or consuming a good.'
      },
      terms: []
    },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        html: 'Social Cost = Private Cost + External Cost',
        caption: 'The social cost includes all costs to society — private and external'
      }
    },
    {
      id: 'key-4',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Social Benefit',
        text: '<strong>Social Benefit = Private Benefit + External Benefit</strong>. This captures the full benefit to society from consuming or producing a good, including benefits enjoyed by third parties.'
      },
      terms: []
    },
    {
      id: 'eq-2',
      type: 'equation',
      data: {
        html: 'Social Benefit = Private Benefit + External Benefit',
        caption: 'External benefits are enjoyed by third parties not directly involved in the transaction'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Private, external, and social costs and benefits — comparison',
        headers: ['Concept', 'Who bears/enjoys it?', 'Included in market price?', 'Example'],
        rows: [
          ['Private cost', 'Producer/consumer', 'Yes', 'A factory\'s electricity bill'],
          ['External cost', 'Third parties', 'No', 'Pollution affecting local residents'],
          ['Social cost', 'All of society', 'Only partly', 'Factory costs + pollution damage'],
          ['Private benefit', 'Consumer/producer', 'Yes', 'Pleasure from consuming a good'],
          ['External benefit', 'Third parties', 'No', 'Vaccination reducing disease spread'],
          ['Social benefit', 'All of society', 'Only partly', 'Individual + community health gain']
        ]
      },
      terms: []
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Link to Market Failure', level: 3 },
      terms: []
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'Market failure arises when the <strong>market price only reflects private costs/benefits</strong> but ignores external costs/benefits. When Social Cost > Private Cost (negative externality), the market overproduces. When Social Benefit > Private Benefit (positive externality), the market underproduces.' }] } },
    {
      id: 'tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always use the terms MPC (Marginal Private Cost), MEC (Marginal External Cost), and MSC (Marginal Social Cost) when drawing diagrams. <strong>MSC = MPC + MEC</strong>. Similarly, <strong>MSB = MPB + MEB</strong>.'
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Always use the terms MPC (Marginal Private Cost), MEC (Marginal External Cost), and MSC (Marginal Social Cost) when drawing diagrams. MSC = MPC + MEC. Similarly, MSB = MPB + MEB."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "In externality diagrams, firmly establish that Marginal Social Cost (MSC) = Marginal Private Cost (MPC) + Marginal External Cost (MEC). If MSC > MPC, there is a negative production externality to analyse."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Social Cost = Private Cost + External Cost. Social Benefit = Private Benefit + External Benefit. Market failure occurs when prices only reflect private costs/benefits, ignoring external effects.',
    cues: [
      { id: 'cue-1', blockId: 'key-3', prompt: 'Write the formula for social cost.', answer: 'Social Cost = Private Cost + External Cost.' },
      { id: 'cue-2', blockId: 'key-4', prompt: 'Write the formula for social benefit.', answer: 'Social Benefit = Private Benefit + External Benefit.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'Give one example of an external cost and explain why it is not included in the market price.', answer: 'Pollution from a factory — it harms third parties (local residents) but the factory does not pay for this damage, so it is not included in the market price.' },
      { id: 'cue-4', blockId: 'para-1', prompt: 'When does a negative externality cause overproduction?', answer: 'When Social Cost > Private Cost — the market price is too low (ignores external costs), so more than the socially optimal quantity is produced.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_5_1;
