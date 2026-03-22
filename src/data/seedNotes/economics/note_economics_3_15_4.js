export const note_economics_3_15_4 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Explain interdependence in oligopoly, the kinked demand curve model, and how game theory (prisoner\'s dilemma) explains pricing behaviour.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Oligopoly: Key Features', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'An <strong>oligopoly</strong> is a market dominated by a <strong>few large firms</strong>, typically with a CR4 above 60%. Key examples include supermarkets (Tesco, Sainsbury\'s, Asda, Morrisons), mobile networks, airlines, and oil companies. The defining feature of oligopoly is <strong>interdependence</strong>: each firm\'s decisions affect and are affected by the decisions of rival firms.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Interdependence', level: 2 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Interdependence</strong> means that before making any decision — on price, output, advertising, or product development — an oligopolist must consider how its rivals will <strong>react</strong>. This strategic thinking makes oligopoly analysis much more complex than other market structures and cannot be captured by a simple supply-and-demand framework.' }] } },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Interdependence',
        text: 'Interdependence: each firm\'s profit depends not only on its own decisions but also on the reactions of its competitors. This leads to strategic behaviour — firms use game theory thinking, anticipating rivals\' moves before acting.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'The Kinked Demand Curve Model', level: 2 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: 'Developed by Sweezy (1939), the <strong>kinked demand curve model</strong> explains why prices in oligopoly tend to be <strong>stable</strong> even when costs change. It rests on two asymmetric assumptions about rival behaviour:<br/><br/>1. If a firm <strong>raises its price</strong>, rivals will <strong>not follow</strong> — customers switch to cheaper rivals, making demand <strong>elastic</strong> above the current price.<br/>2. If a firm <strong>cuts its price</strong>, rivals <strong>match the cut</strong> to avoid losing market share — demand is therefore <strong>inelastic</strong> below the current price.' }] } },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13"><rect width="480" height="340" fill="#0f172a" rx="8"/><text x="240" y="22" text-anchor="middle" font-weight="bold" font-size="14">Kinked Demand Curve (Sweezy Model)</text><!-- Axes --><line x1="60" y1="290" x2="420" y2="290" stroke="#333" stroke-width="2"/><line x1="60" y1="290" x2="60" y2="30" stroke="#333" stroke-width="2"/><text x="428" y="294" font-size="12">Q</text><text x="46" y="28" font-size="12">P</text><!-- Demand curve: kinked at (240, 140) --><line x1="80" y1="60" x2="240" y2="140" stroke="#2980b9" stroke-width="2.5"/><line x1="240" y1="140" x2="400" y2="270" stroke="#2980b9" stroke-width="2.5"/><text x="404" y="268" fill="#2980b9" font-size="12">D (AR)</text><!-- Kink label --><circle cx="240" cy="140" r="5" fill="#e74c3c"/><text x="248" y="135" fill="#e74c3c" font-size="12">Kink at P*</text><!-- MR curve: discontinuous --><line x1="80" y1="60" x2="160" y2="200" stroke="#8e44ad" stroke-width="2.5"/><line x1="160" y1="200" x2="160" y2="290" stroke="#8e44ad" stroke-width="2" stroke-dasharray="5,3"/><line x1="160" y1="290" x2="400" y2="210" stroke="#8e44ad" stroke-width="2.5"/><text x="404" y="208" fill="#8e44ad" font-size="12">MR</text><!-- Gap in MR --><rect x="155" y="200" width="10" height="90" fill="#0f172a"/><text x="163" y="248" fill="#8e44ad" font-size="11">Gap</text><!-- MC curve: can shift within gap --><line x1="60" y1="180" x2="420" y2="180" stroke="#e74c3c" stroke-width="2" stroke-dasharray="6,3"/><text x="423" y="184" fill="#e74c3c" font-size="12">MC</text><!-- MC2 within gap --><line x1="60" y1="240" x2="420" y2="240" stroke="#e74c3c" stroke-width="2" stroke-dasharray="6,3"/><text x="423" y="244" fill="#e74c3c" font-size="12">MC\'</text><!-- Horizontal/vertical guides --><line x1="60" y1="140" x2="240" y2="140" stroke="#aaa" stroke-width="1" stroke-dasharray="4,3"/><line x1="240" y1="290" x2="240" y2="140" stroke="#aaa" stroke-width="1" stroke-dasharray="4,3"/><text x="40" y="144" font-size="11">P*</text><text x="232" y="306" font-size="11">Q*</text><!-- Annotation --><text x="120" y="320" fill="#555" font-size="11">Price stable at P* even as MC shifts between the gap in MR</text></svg>',
        caption: 'Kinked demand curve: elastic above P* (rivals don\'t follow price rises), inelastic below P* (rivals match price cuts). Discontinuous MR means price is stable at P* even if MC shifts within the gap.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Game Theory: The Prisoner\'s Dilemma', level: 2 }
    },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: 'Game theory provides a more general framework for oligopoly behaviour. The <strong>prisoner\'s dilemma</strong> shows why competing firms often end up in a situation worse for both of them, even when cooperation would produce better joint outcomes. Applied to pricing: if both firms keep prices high, both earn high profits. But each has an incentive to undercut — if one cuts and the other does not, the cutter gains. The dominant strategy leads both to cut prices, resulting in a <strong>Nash equilibrium</strong> with lower profits for all.' }] } },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Prisoner\'s Dilemma payoff matrix — two oligopolists pricing high or low',
        headers: ['', 'Firm B: High Price', 'Firm B: Low Price'],
        rows: [
          ['Firm A: High Price', 'A: £10m, B: £10m (best joint)', 'A: £2m, B: £15m'],
          ['Firm A: Low Price', 'A: £15m, B: £2m', 'A: £5m, B: £5m (Nash equilibrium)']
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Nash Equilibrium',
        text: 'A Nash equilibrium is a set of strategies where no player can improve their outcome by changing strategy alone (given the other\'s strategy). In the prisoner\'s dilemma, both firms choose low price — this is the Nash equilibrium even though both would be better off pricing high.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Oligopolists are *interdependent*\u2014each firm's decisions affect rivals' profits and strategies. Candidates often analyze oligopolies as if they were monopolies (ignore rivals) or perfect competitors (ignore interdependence). Always discuss reaction functions, kinked demands, or collusion."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Oligopoly is defined by interdependence — firms must anticipate rivals\' reactions. The kinked demand curve explains price stability. Game theory (prisoner\'s dilemma) shows why competitive outcomes emerge even when cooperation would benefit all.',
    cues: [
      { id: 'cue-1', blockId: 'para-2', prompt: 'What is the key defining feature of oligopoly?', answer: 'Interdependence — each firm\'s decisions affect and are affected by rivals\' reactions.' },
      { id: 'cue-2', blockId: 'para-3', prompt: 'Why does the kinked demand curve have a kink?', answer: 'Rivals do not follow price rises (elastic demand above P*) but do match price cuts (inelastic demand below P*).' },
      { id: 'cue-3', blockId: 'svg-1', prompt: 'Why is the MR curve discontinuous in the kinked demand model?', answer: 'The kink in the demand/AR curve creates a vertical gap in MR. This gap means price is stable even if costs shift within that range.' },
      { id: 'cue-4', blockId: 'para-4', prompt: 'What is the prisoner\'s dilemma outcome in oligopoly pricing?', answer: 'Both firms end up cutting prices (Nash equilibrium) even though both would earn more by keeping prices high — individual incentives undermine collective benefit.' },
      { id: 'cue-5', blockId: 'tbl-1', prompt: 'In a two-firm payoff matrix, what is the dominant strategy for each firm?', answer: 'To set a low price — regardless of what the rival does, cutting price yields a higher individual payoff, leading to a Nash equilibrium with low prices.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_3_15_4;
