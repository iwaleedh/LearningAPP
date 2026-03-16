export const note_economics_1_4_1 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain how excess demand (shortage) and excess supply (surplus) are eliminated through automatic price adjustment, using supply and demand diagrams.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Excess Demand and Excess Supply', level: 2 },
      terms: []
    },
    {
      id: 'key-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Excess Demand (Shortage)',
        text: '<strong>Excess demand</strong> occurs when <strong>Qd > Qs</strong> at the current price — typically when price is set <em>below</em> the equilibrium. Consumers want more than producers are willing to supply at that price.'
      },
      terms: []
    },
    {
      id: 'key-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Excess Supply (Surplus)',
        text: '<strong>Excess supply</strong> occurs when <strong>Qs > Qd</strong> at the current price — typically when price is set <em>above</em> the equilibrium. Producers are supplying more than consumers wish to buy.'
      },
      terms: []
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 270"><rect width="360" height="270" fill="#f8f9fa"/><text x="180" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Shortage and Surplus Adjustment</text><!-- Axes --><line x1="40" y1="240" x2="330" y2="240" stroke="#334155" stroke-width="2"/><line x1="40" y1="240" x2="40" y2="30" stroke="#334155" stroke-width="2"/><text x="335" y="244" font-size="11" fill="#334155">Q</text><text x="28" y="28" font-size="11" fill="#334155">P</text><!-- Demand --><line x1="60" y1="60" x2="300" y2="220" stroke="#ef4444" stroke-width="2.5"/><text x="303" y="220" font-size="11" fill="#ef4444">D</text><!-- Supply --><line x1="60" y1="220" x2="300" y2="60" stroke="#6366f1" stroke-width="2.5"/><text x="303" y="60" font-size="11" fill="#6366f1">S</text><!-- Equilibrium --><circle cx="180" cy="140" r="4" fill="#10b981"/><line x1="40" y1="140" x2="180" y2="140" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><text x="24" y="143" font-size="9" fill="#10b981">P*</text><!-- High price (surplus) --><line x1="40" y1="90" x2="320" y2="90" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4,2"/><!-- Qs at P_high ~260, Qd at P_high ~100 --><text x="24" y="93" font-size="9" fill="#f59e0b">P_h</text><text x="100" y="83" font-size="9" fill="#6366f1">Qs_h</text><text x="255" y="83" font-size="9" fill="#6366f1">Qd_h</text><text x="140" y="78" font-size="9" fill="#f59e0b">SURPLUS</text><line x1="105" y1="90" x2="253" y2="90" stroke="#f59e0b" stroke-width="2" marker-end="url(#a1)"/><!-- Low price (shortage) --><line x1="40" y1="190" x2="320" y2="190" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,2"/><text x="24" y="193" font-size="9" fill="#ef4444">P_l</text><text x="90" y="186" font-size="9" fill="#ef4444">Qd_l</text><text x="260" y="186" font-size="9" fill="#ef4444">Qs_l</text><text x="140" y="205" font-size="9" fill="#ef4444">SHORTAGE</text><line x1="255" y1="190" x2="107" y2="190" stroke="#ef4444" stroke-width="2" marker-end="url(#a2)"/><defs><marker id="a1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#f59e0b"/></marker><marker id="a2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#ef4444"/></marker></defs></svg>',
        caption: 'Above P*: surplus (Qs > Qd), price falls. Below P*: shortage (Qd > Qs), price rises.'
      },
      terms: []
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Adjustment Mechanism', level: 3 },
      terms: []
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Shortage vs surplus: causes and adjustment process',
        headers: ['', 'Shortage (Excess Demand)', 'Surplus (Excess Supply)'],
        rows: [
          ['Price relative to P*', 'Price below P*', 'Price above P*'],
          ['Qd vs Qs', 'Qd > Qs', 'Qs > Qd'],
          ['Market signal', 'Consumers competing for scarce good', 'Unsold stock accumulating'],
          ['Price direction', 'Price rises', 'Price falls'],
          ['Quantity demanded', 'Contracts (falls) along D', 'Extends (rises) along D'],
          ['Quantity supplied', 'Extends (rises) along S', 'Contracts (falls) along S'],
          ['Outcome', 'Returns to equilibrium P*', 'Returns to equilibrium P*']
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
        text: 'When explaining adjustment, use precise language: say price <strong>"rises/falls"</strong>, quantity demanded <strong>"contracts/extends"</strong>, and quantity supplied <strong>"extends/contracts"</strong>. Avoid saying the curve "moves" — it is a <em>movement along</em> the existing curves.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Excess demand (Qd > Qs) at a below-equilibrium price causes price to rise until equilibrium is restored. Excess supply (Qs > Qd) at an above-equilibrium price causes price to fall back to P*.',
    cues: [
      { id: 'cue-1', blockId: 'key-1', prompt: 'Define excess demand and state when it occurs.', answer: 'Excess demand (shortage) is when Qd > Qs, occurring when price is set below equilibrium.' },
      { id: 'cue-2', blockId: 'key-2', prompt: 'Define excess supply and state when it occurs.', answer: 'Excess supply (surplus) is when Qs > Qd, occurring when price is set above equilibrium.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'How does a shortage eliminate itself in a free market?', answer: 'Competition among consumers bids the price up, causing Qd to fall and Qs to rise until Qd = Qs again.' },
      { id: 'cue-4', blockId: 'tbl-1', prompt: 'How does a surplus eliminate itself in a free market?', answer: 'Unsold stock causes producers to lower prices, causing Qs to fall and Qd to rise until Qd = Qs again.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_4_1;
