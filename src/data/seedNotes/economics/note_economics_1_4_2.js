export const note_economics_1_4_2 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define consumer surplus and producer surplus, illustrate them on a supply and demand diagram, and explain their significance as measures of welfare.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Consumer and Producer Surplus', level: 2 },
      terms: []
    },
    {
      id: 'key-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Consumer Surplus',
        text: '<strong>Consumer surplus (CS)</strong> is the difference between the <strong>maximum price a consumer is willing to pay</strong> and the <strong>actual price paid</strong>. It is represented by the area <em>above the price line and below the demand curve</em>.'
      },
      terms: []
    },
    {
      id: 'key-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Producer Surplus',
        text: '<strong>Producer surplus (PS)</strong> is the difference between the <strong>price received</strong> and the <strong>minimum price the producer would accept</strong> (i.e. their marginal cost). It is represented by the area <em>below the price line and above the supply curve</em>.'
      },
      terms: []
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 260"><rect width="300" height="260" fill="#0f172a"/><text x="150" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Consumer and Producer Surplus</text><!-- Axes --><line x1="50" y1="230" x2="275" y2="230" stroke="#334155" stroke-width="2"/><line x1="50" y1="230" x2="50" y2="30" stroke="#334155" stroke-width="2"/><text x="280" y="234" font-size="11" fill="#334155">Q</text><text x="38" y="28" font-size="11" fill="#334155">P</text><!-- Demand line: from (50,50) to (260,220) --><line x1="60" y1="55" x2="255" y2="210" stroke="#ef4444" stroke-width="2.5"/><text x="258" y="210" font-size="11" fill="#ef4444">D</text><!-- Supply line: from (60,210) to (255,55) --><line x1="60" y1="210" x2="255" y2="55" stroke="#6366f1" stroke-width="2.5"/><text x="258" y="55" font-size="11" fill="#6366f1">S</text><!-- Equilibrium at ~(157, 132) --><circle cx="157" cy="132" r="4" fill="#10b981"/><!-- Equilibrium price line --><line x1="50" y1="132" x2="157" y2="132" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4,3"/><text x="25" y="135" font-size="10" fill="#10b981">P*</text><line x1="157" y1="132" x2="157" y2="230" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4,3"/><text x="150" y="245" font-size="10" fill="#10b981">Q*</text><!-- CS triangle shading (approximate polygon) --><polygon points="50,132 157,132 60,55" fill="#ef4444" fill-opacity="0.2" stroke="none"/><text x="78" y="110" font-size="11" fill="#ef4444">CS</text><!-- PS triangle shading --><polygon points="50,132 157,132 60,210" fill="#6366f1" fill-opacity="0.2" stroke="none"/><text x="78" y="168" font-size="11" fill="#6366f1">PS</text></svg>',
        caption: 'CS (red shading) = area above P* below demand curve. PS (blue shading) = area below P* above supply curve.'
      },
      terms: []
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Total Welfare', level: 3 },
      terms: []
    },
    {
      id: 'key-3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Total Welfare (Allocative Efficiency)',
        text: '<strong>Total welfare = Consumer Surplus + Producer Surplus</strong>. This is maximised at the competitive equilibrium (free market). Any deviation from equilibrium (e.g. due to taxes, price controls, or externalities) reduces total welfare, creating a <strong>deadweight loss</strong>.'
      },
      terms: []
    },
    {
      id: 'worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A consumer is willing to pay £50 for a concert ticket but buys it for £30.<br/>Consumer Surplus = £50 − £30 = <strong>£20</strong><br/><br/>A producer\'s minimum acceptable price (marginal cost) for a concert ticket is £15, but receives £30.<br/>Producer Surplus = £30 − £15 = <strong>£15</strong><br/><br/>Total Welfare gained from this transaction = £20 + £15 = <strong>£35</strong>'
      },
      terms: []
    },
    {
      id: 'tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When a tax is imposed, the market price rises and quantity falls. <strong>Both CS and PS shrink.</strong> The tax revenue captured by government is a transfer, but the area that is neither CS, PS, nor tax revenue is the <strong>deadweight loss</strong> — show this clearly in your diagram.'
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "When a tax is imposed, the market price rises and quantity falls. Both CS and PS shrink. The tax revenue captured by government is a transfer, but the area that is neither CS, PS, nor tax revenue is the deadweight loss \u2014 show this clearly in your diagram."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "For questions on the price mechanism, explicitly use the words 'Signalling', 'Rationing', and 'Incentives'. Explain how higher prices signal producers to allocate more resources, logically breaking down the process to earn full analysis marks."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Consumer surplus is the gap between willingness to pay and actual price (area above P*, below D). Producer surplus is the gap between price received and minimum acceptable price (area below P*, above S). Total welfare = CS + PS.',
    cues: [
      { id: 'cue-1', blockId: 'key-1', prompt: 'Define consumer surplus and show it on a diagram description.', answer: 'CS is the difference between max willingness to pay and price paid. It is the triangular area above the price line and below the demand curve.' },
      { id: 'cue-2', blockId: 'key-2', prompt: 'Define producer surplus.', answer: 'PS is the difference between the price received and the minimum price the producer would accept (marginal cost). Area below price line, above supply curve.' },
      { id: 'cue-3', blockId: 'key-3', prompt: 'What is total welfare and when is it maximised?', answer: 'Total welfare = CS + PS. It is maximised at the free-market competitive equilibrium.' },
      { id: 'cue-4', blockId: 'tip-1', prompt: 'What is deadweight loss?', answer: 'The reduction in total welfare (CS + PS) that is not captured as tax revenue — a triangular area on the supply and demand diagram.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_4_2;
