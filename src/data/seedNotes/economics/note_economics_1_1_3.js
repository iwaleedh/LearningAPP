export const note_economics_1_1_3 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain scarcity as the fundamental economic problem, define and calculate opportunity cost, and apply the concept to real-world decision-making.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Scarcity: The Fundamental Economic Problem', level: 2 },
      terms: []
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definition: Scarcity',
        text: '<strong>Scarcity</strong> arises because <strong>human wants are unlimited</strong> but the <strong>resources available to satisfy them are finite</strong>. As a result, not all wants can be satisfied simultaneously, and choices must be made about how to allocate resources. Scarcity is a universal condition — it applies to all individuals, firms, and governments regardless of their wealth.'
      },
      terms: []
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'The four <strong>factors of production</strong> — land, labour, capital, and enterprise — are all scarce to varying degrees. Because resources are limited, using them for one purpose means they cannot simultaneously be used for another. This is the origin of <strong>opportunity cost</strong>.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Opportunity Cost', level: 2 },
      terms: []
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definition: Opportunity Cost',
        text: '<strong>Opportunity cost</strong> is the <strong>value of the next best alternative forgone</strong> when a decision is made. It represents the real cost of any choice — not just the financial cost, but the benefit given up from the next best option.'
      },
      terms: []
    },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        html: 'Opportunity Cost = <strong>Value of the Next Best Alternative Forgone</strong>',
        caption: 'Opportunity cost is not about money spent — it is about benefits sacrificed'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Examples of Opportunity Cost', level: 2 },
      terms: []
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Opportunity Cost Examples at Different Levels',
        headers: ['Level', 'Decision Made', 'Opportunity Cost'],
        rows: [
          ['<strong>Individual</strong>', 'Spend Saturday studying economics', 'Leisure time with friends forgone'],
          ['<strong>Firm</strong>', 'Invest £2m in a new factory', 'Interest that £2m could have earned if saved, or investment in R&amp;D'],
          ['<strong>Government</strong>', 'Spend £10bn on a new motorway', 'Hospitals, schools, or tax cuts that could have been funded instead'],
          ['<strong>Consumer</strong>', 'Buy a new smartphone for £800', 'Holiday, savings, or other purchases worth £800 forgone']
        ]
      },
      terms: []
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Government Budget',
        text: 'A government has £50 billion of additional tax revenue. It can:<br/><br/>Option A: Build a new high-speed rail line (chosen)<br/>Option B: Fund 20,000 new NHS nurses<br/>Option C: Cut income tax<br/><br/><strong>Opportunity cost</strong> of choosing Option A = the value of Option B (20,000 nurses), assuming this is the next best alternative.<br/><br/>Note: Opportunity cost is always the <em>single</em> next best option, not all foregone alternatives combined.'
      },
      terms: []
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Scarcity, Choice, and the Economic Problem', level: 2 },
      terms: []
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<strong>Scarcity</strong> means resources are insufficient to satisfy all wants.' },
          { text: '<strong>Choice</strong> is required because we cannot have everything — we must prioritise.' },
          { text: '<strong>Opportunity cost</strong> is incurred with every choice — something is always given up.' },
          { text: '<strong>Resource allocation</strong> determines who gets what and how resources are used.' }
        ]
      },
      terms: []
    },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Opportunity cost is <strong>not</strong> "the money spent" — it is the value of the <em>best alternative</em> that was not chosen. For example, if you spend £100 on a concert ticket, the opportunity cost is not £100 in cash — it is whatever you would otherwise have done with that £100 (e.g. savings, a textbook, a meal out).'
      },
      terms: []
    },
    {
      id: 'call-5',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When asked to identify opportunity cost, always specify the <strong>specific alternative forgone</strong>, not just "something else." Vague answers like "other things" will not gain full marks. Relate it to the context provided in the question.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Scarcity — unlimited wants facing finite resources — forces every individual, firm, and government to make choices. Every choice incurs an opportunity cost: the value of the next best alternative forgone.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'Why does scarcity affect all individuals and governments, regardless of wealth?', answer: 'Because human wants are unlimited — even the richest individuals and governments cannot satisfy every possible want, so choices must always be made.' },
      { id: 'cue-2', blockId: 'call-2', prompt: 'Define opportunity cost.', answer: 'The value of the next best alternative forgone when a decision is made — the real cost of any choice in terms of benefits sacrificed.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'A government builds a motorway instead of funding hospitals. What is the opportunity cost?', answer: 'The healthcare improvements (or other spending such as schools or tax cuts) that could have been funded instead — specifically, the next best alternative.' },
      { id: 'cue-4', blockId: 'call-3', prompt: 'If three options are available, how do you identify the opportunity cost of the chosen option?', answer: 'The opportunity cost is only the single next best option (second-best choice), not the sum of all foregone alternatives.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_1_3;
