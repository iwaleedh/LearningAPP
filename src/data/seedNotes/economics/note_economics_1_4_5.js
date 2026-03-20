export const note_economics_1_4_5 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain how a government subsidy shifts the supply curve, analyse the benefits to consumers and producers, and compare subsidy incidence with tax incidence.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Subsidy Incidence', level: 2 },
      terms: []
    },
    {
      id: 'key-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Government Subsidy',
        text: 'A <strong>subsidy</strong> is a payment by the government to producers, reducing their costs of production. This shifts the supply curve <strong>downward/rightward</strong>, reducing the price consumers pay and increasing the quantity traded.'
      },
      terms: []
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 270"><rect width="320" height="270" fill="#0f172a"/><text x="160" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Subsidy: Supply Shift and Benefit Distribution</text><!-- Axes --><line x1="45" y1="240" x2="300" y2="240" stroke="#334155" stroke-width="2"/><line x1="45" y1="240" x2="45" y2="30" stroke="#334155" stroke-width="2"/><text x="305" y="244" font-size="11" fill="#334155">Q</text><text x="33" y="28" font-size="11" fill="#334155">P</text><!-- Demand --><line x1="65" y1="55" x2="275" y2="215" stroke="#ef4444" stroke-width="2.5"/><text x="278" y="215" font-size="11" fill="#ef4444">D</text><!-- Original supply S1 --><line x1="65" y1="215" x2="270" y2="60" stroke="#6366f1" stroke-width="2"/><text x="272" y="60" font-size="11" fill="#6366f1">S₁</text><!-- Supply with subsidy S2 (shifted down ~35) --><line x1="100" y1="220" x2="290" y2="60" stroke="#10b981" stroke-width="2.5"/><text x="292" y="60" font-size="11" fill="#10b981">S₂ (+ subsidy)</text><!-- Old equilibrium ~(167,135) --><circle cx="167" cy="135" r="3" fill="#6366f1"/><!-- New equilibrium ~(192,115) --><circle cx="192" cy="115" r="4" fill="#10b981"/><!-- Pc (consumer pays) lower price --><line x1="45" y1="115" x2="192" y2="115" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><text x="20" y="118" font-size="9" fill="#ef4444">Pc</text><!-- Old P0 --><line x1="45" y1="135" x2="167" y2="135" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><text x="20" y="138" font-size="9" fill="#6366f1">P₀</text><!-- Pp (producer receives) higher --><line x1="45" y1="152" x2="192" y2="152" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><text x="20" y="155" font-size="9" fill="#10b981">Pp</text><!-- Subsidy wedge --><line x1="200" y1="115" x2="200" y2="152" stroke="#334155" stroke-width="1.5"/><text x="205" y="137" font-size="9" fill="#334155">Sub</text><!-- New Q2 --><line x1="192" y1="152" x2="192" y2="240" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><text x="185" y="252" font-size="9" fill="#10b981">Q₂</text><line x1="167" y1="135" x2="167" y2="240" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><text x="160" y="252" font-size="9" fill="#6366f1">Q₁</text></svg>',
        caption: 'Subsidy shifts S rightward to S₂. Consumers pay lower Pc; producers receive higher Pp. Quantity rises from Q₁ to Q₂.'
      },
      terms: []
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Who Benefits from a Subsidy?', level: 3 },
      terms: []
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Consumer benefit:</strong> Price falls from P₀ to Pc (the amount consumers pay per unit). The more inelastic demand is, the less the price falls.' },
          { text: '<strong>Producer benefit:</strong> Producers receive Pp > P₀ (the higher price including the subsidy). The more inelastic supply is, the more producers benefit.' },
          { text: '<strong>Government cost:</strong> Total subsidy cost = subsidy per unit × Q₂ (the full rectangle).' }
        ]
      },
      terms: []
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Indirect tax vs subsidy — comparison of effects',
        headers: ['Feature', 'Indirect Tax', 'Subsidy'],
        rows: [
          ['Supply curve shift', 'Leftward/upward', 'Rightward/downward'],
          ['Consumer price', 'Rises (Pc > P₀)', 'Falls (Pc < P₀)'],
          ['Producer price', 'Falls (Pp < P₀)', 'Rises (Pp > P₀)'],
          ['Quantity traded', 'Falls', 'Rises'],
          ['Government finances', 'Revenue raised', 'Cost incurred'],
          ['Welfare effect', 'Deadweight loss', 'May correct market failure or create inefficiency'],
          ['Use case', 'Demerit goods, externalities', 'Merit goods, positive externalities']
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
        text: 'Like taxes, the distribution of the subsidy benefit between consumers and producers depends on the <strong>relative elasticities of demand and supply</strong>. Inelastic demand means consumers benefit more; inelastic supply means producers benefit more.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'A subsidy reduces producer costs, shifting supply rightward. Consumers pay a lower price (Pc) and producers receive a higher price (Pp). The benefit is shared depending on PED and PES. Government bears the full subsidy cost.',
    cues: [
      { id: 'cue-1', blockId: 'key-1', prompt: 'How does a government subsidy affect the supply curve?', answer: 'It shifts the supply curve rightward/downward, reducing costs for producers and lowering the market price.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'What is the total cost to the government of a subsidy?', answer: 'Total subsidy cost = subsidy per unit × new quantity (Q₂) — the full rectangle on the diagram.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'State two differences between an indirect tax and a subsidy.', answer: 'A tax shifts supply left and raises consumer prices; a subsidy shifts supply right and lowers consumer prices. A tax raises government revenue; a subsidy incurs a government cost.' },
      { id: 'cue-4', blockId: 'tip-1', prompt: 'If demand is inelastic, who benefits more from a subsidy — consumers or producers?', answer: 'Consumers benefit more — the price falls more significantly because demand is unresponsive.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_4_5;
