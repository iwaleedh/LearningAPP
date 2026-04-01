export const note_economics_1_4_0 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define market equilibrium, identify the equilibrium price and quantity using supply and demand analysis, and explain the process by which markets move towards equilibrium.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Market Equilibrium Price and Output', level: 2 },
      terms: []
    },
    {
      id: 'key-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Market Equilibrium',
        text: '<strong>Equilibrium</strong> occurs at the price where <strong>quantity demanded equals quantity supplied (Qd = Qs)</strong>. There is no tendency for price to change — the market clears. The equilibrium price is also called the <strong>market-clearing price</strong>.'
      },
      terms: []
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 260"><rect width="300" height="260" fill="#0f172a"/><text x="150" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Market Equilibrium</text><!-- Axes --><line x1="50" y1="230" x2="280" y2="230" stroke="#334155" stroke-width="2"/><line x1="50" y1="230" x2="50" y2="30" stroke="#334155" stroke-width="2"/><text x="285" y="234" font-size="11" fill="#334155">Q</text><text x="37" y="28" font-size="11" fill="#334155">P</text><!-- Demand curve --><line x1="70" y1="60" x2="260" y2="210" stroke="#ef4444" stroke-width="2.5"/><text x="263" y="210" font-size="11" fill="#ef4444">D</text><!-- Supply curve --><line x1="70" y1="210" x2="260" y2="60" stroke="#3b82f6" stroke-width="2.5"/><text x="263" y="60" font-size="11" fill="#3b82f6">S</text><!-- Equilibrium point --><circle cx="165" cy="135" r="5" fill="#10b981"/><text x="172" y="132" font-size="11" fill="#10b981">E</text><!-- Dashed lines to axes --><line x1="50" y1="135" x2="165" y2="135" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/><line x1="165" y1="135" x2="165" y2="230" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/><text x="30" y="138" font-size="10" fill="#10b981">P*</text><text x="159" y="245" font-size="10" fill="#10b981">Q*</text></svg>',
        caption: 'Supply and demand intersect at equilibrium point E, giving market-clearing price P* and quantity Q*'
      },
      terms: []
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Process of Reaching Equilibrium', level: 3 },
      terms: []
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'At any price <strong>above equilibrium</strong>: Qs > Qd → surplus (excess supply) → producers lower prices to sell stock → price falls towards P*.' },
          { text: 'At any price <strong>below equilibrium</strong>: Qd > Qs → shortage (excess demand) → consumers bid up price → price rises towards P*.' },
          { text: 'At <strong>P*</strong>: Qd = Qs → no surplus or shortage → equilibrium maintained.' }
        ]
      },
      terms: []
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Effects of Shifts on Equilibrium', level: 3 },
      terms: []
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Effect of supply and demand shifts on equilibrium price and quantity',
        headers: ['Change', 'Shift', 'Effect on P*', 'Effect on Q*'],
        rows: [
          ['Demand increases', 'D rightward', 'Rises', 'Rises'],
          ['Demand decreases', 'D leftward', 'Falls', 'Falls'],
          ['Supply increases', 'S rightward', 'Falls', 'Rises'],
          ['Supply decreases', 'S leftward', 'Rises', 'Falls']
        ]
      },
      terms: []
    },
    {
      id: 'tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Diagram Requirements',
        text: 'In exam diagrams, always label: axes (P and Q), both curves (S and D), equilibrium point (E), equilibrium price (P*), and equilibrium quantity (Q*). If a shift occurs, label the new curve S₂ or D₂ and show new P₂ and Q₂ with dashed lines.'
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "In exam diagrams, always label: axes (P and Q), both curves (S and D), equilibrium point (E), equilibrium price (P*), and equilibrium quantity (Q*). If a shift occurs, label the new curve S\u2082 or D\u2082 and show new P\u2082 and Q\u2082 with dashed lines."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "When asked to define market equilibrium, state it is the point where intended demand equals intended supply, or where the market clears with no excess demand or supply. Always annotate the equilibrium price (Pe) and quantity (Qe) clearly on your diagram."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Equilibrium is where Qd = Qs, determining the market-clearing price P* and quantity Q*. Above P* there is a surplus; below P* there is a shortage. Both cause price adjustment back to equilibrium.',
    cues: [
      { id: 'cue-1', blockId: 'key-1', prompt: 'Define market equilibrium.', answer: 'The price at which quantity demanded equals quantity supplied (Qd = Qs) — the market-clearing price.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'What happens at a price above equilibrium?', answer: 'There is excess supply (surplus) — producers lower prices, causing price to fall back to P*.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'What happens to P* and Q* when supply increases (shifts right)?', answer: 'P* falls and Q* rises.' },
      { id: 'cue-4', blockId: 'tbl-1', prompt: 'What happens to equilibrium when demand increases?', answer: 'Both P* and Q* rise.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_4_0;
