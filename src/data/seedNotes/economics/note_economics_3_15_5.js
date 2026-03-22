export const note_economics_3_15_5 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Distinguish between explicit and tacit collusion, explain how cartels operate, why they are unstable, and evaluate the role of price leadership.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Collusion and Cartels', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Collusion</strong> occurs when firms in an oligopoly cooperate rather than compete, typically to restrict output and raise prices — effectively behaving like a joint monopolist. Collusion can be <strong>explicit</strong> (formal agreement) or <strong>tacit</strong> (informal, unspoken coordination).' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Explicit Collusion: Cartels', level: 2 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'A <strong>cartel</strong> is a formal agreement between competing firms to fix prices, restrict output, divide markets, or coordinate on other competitive variables. The most famous example is <strong>OPEC</strong> (Organisation of the Petroleum Exporting Countries), which sets oil production quotas among member states. Cartels are <strong>illegal</strong> under UK and EU competition law and are actively prosecuted by competition authorities.' }] } },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Cartels are Illegal',
        text: 'Cartel behaviour (price-fixing, market-sharing, output restriction) is illegal under the Competition Act 1998 (UK) and Article 101 TFEU (EU). Individuals can face criminal prosecution; firms face fines of up to 10% of global turnover. The UK\'s CMA actively investigates and prosecutes cartels.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Tacit Collusion', level: 2 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Tacit collusion</strong> (or implicit collusion) occurs when firms coordinate behaviour without any formal agreement, typically through repeated interaction and shared understanding of how rivals will behave. It is difficult to detect or prosecute because no explicit communication takes place. Examples include parallel pricing in petrol stations or banks\' interest rate movements.' }] } },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Price Leadership', level: 2 }
    },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Price leadership</strong> is a common form of tacit collusion where one firm (the <strong>dominant firm</strong> or <strong>barometric firm</strong>) sets the price and others follow. The leader is typically the lowest-cost or largest firm. This avoids the coordination problems of formal cartels while achieving a similar outcome — prices above competitive levels.' }] } },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Explicit vs tacit collusion',
        headers: ['Feature', 'Explicit Collusion (Cartel)', 'Tacit Collusion'],
        rows: [
          ['Nature', 'Formal written or verbal agreement', 'Informal, unspoken coordination'],
          ['Legality', 'Clearly illegal', 'Legal grey area — hard to prove'],
          ['Detectability', 'Easier to detect (documents, meetings)', 'Very difficult to detect'],
          ['Example', 'OPEC, lysine cartel, vitamins cartel', 'Petrol station parallel pricing, bank rates'],
          ['Stability', 'Moderate (but incentive to cheat)', 'Can be very stable if market is transparent']
        ]
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Why Cartels are Unstable', level: 2 }
    },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: 'Despite the benefits of cooperation, cartels face powerful incentives to break down. Each member has an incentive to <strong>cheat</strong> on the agreement by producing more than its agreed quota — this raises its individual profit at the expense of other members who honour the deal. This is the classic <strong>prisoner\'s dilemma</strong> applied to cartel members.' }] } },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Incentive to cheat</strong>: Each firm can increase profit by secretly producing above quota while others restrict output.' },
          { text: '<strong>Entry of new firms</strong>: High cartel prices attract new entrants who are not party to the agreement.' },
          { text: '<strong>Detection and prosecution</strong>: Competition authorities offer leniency programmes that reward whistle-blowers, encouraging defection.' },
          { text: '<strong>Different cost structures</strong>: Members have different views on the optimal price/output, creating disagreements.' },
          { text: '<strong>External shocks</strong>: Demand or cost changes make agreed-upon output quotas difficult to sustain.' }
        ]
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Explicit collusion (cartels) is illegal; tacit collusion (price leadership, focal points) is harder to prosecute. Cartels are unstable\u2014incentives to cheat are strong. Examiners reward analyzing *why* cartels break down: individual firm profit if defect > collective profit if cooperate."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "When assessing cartels, explain the conditions that make collusion easier: a small number of firms, similar costs, high entry barriers, and stable demand. Note that the inherent incentive to cheat usually breaks cartels apart."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Explicit collusion (cartels) involves formal price-fixing agreements and is illegal. Tacit collusion involves unspoken coordination including price leadership. Cartels are inherently unstable due to the incentive to cheat (prisoner\'s dilemma).',
    cues: [
      { id: 'cue-1', blockId: 'para-2', prompt: 'What is a cartel and give an example?', answer: 'A cartel is a formal agreement to fix prices or restrict output. OPEC is the most prominent example — it sets oil production quotas among member states.' },
      { id: 'cue-2', blockId: 'call-1', prompt: 'What is the legal consequence of cartel behaviour in the UK?', answer: 'Cartels are illegal under the Competition Act 1998. Firms face fines up to 10% of global turnover and individuals can face criminal prosecution.' },
      { id: 'cue-3', blockId: 'para-3', prompt: 'What is tacit collusion and why is it hard to prosecute?', answer: 'Tacit collusion is informal coordination without explicit agreement — e.g. parallel pricing. It is hard to prosecute because no formal communication takes place.' },
      { id: 'cue-4', blockId: 'para-4', prompt: 'What is price leadership?', answer: 'A form of tacit collusion where a dominant firm sets the price and other firms follow, coordinating prices without a formal agreement.' },
      { id: 'cue-5', blockId: 'para-5', prompt: 'Why do cartels tend to break down over time?', answer: 'Each member has an incentive to cheat by producing above quota to increase individual profit — this prisoner\'s dilemma dynamic undermines collective discipline.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_3_15_5;
