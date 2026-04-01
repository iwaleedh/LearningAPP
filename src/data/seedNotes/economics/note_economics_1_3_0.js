export const note_economics_1_3_0 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Distinguish between movements along the supply curve and shifts of the supply curve, and identify the non-price factors that cause supply to shift.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Supply Curve: Movements vs Shifts', level: 2 },
      terms: []
    },
    {
      id: 'key-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Law of Supply',
        text: 'As the <strong>price of a good rises</strong>, the quantity supplied rises (ceteris paribus). This produces an <strong>upward-sloping supply curve</strong>.'
      },
      terms: []
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Movement Along the Supply Curve', level: 3 },
      terms: []
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'A <strong>movement along</strong> the supply curve occurs when the <strong>price of the good itself changes</strong>. A higher price increases the quantity supplied (extension); a lower price decreases it (contraction). The curve itself does <em>not</em> move.' }] } },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Shift of the Supply Curve', level: 3 },
      terms: []
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'A <strong>shift of the supply curve</strong> occurs when any factor <em>other than price</em> changes. A rightward shift means <strong>more is supplied at every price</strong> (increase in supply). A leftward shift means less is supplied at every price (decrease in supply).' }] } },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 280"><rect width="380" height="280" fill="#0f172a"/><text x="190" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Supply Curve: Movement vs Shift</text><!-- Axes --><line x1="50" y1="240" x2="340" y2="240" stroke="#334155" stroke-width="2"/><line x1="50" y1="240" x2="50" y2="30" stroke="#334155" stroke-width="2"/><text x="350" y="244" font-size="11" fill="#334155">Q</text><text x="38" y="25" font-size="11" fill="#334155">P</text><!-- Original S curve --><line x1="80" y1="210" x2="270" y2="60" stroke="#3b82f6" stroke-width="2.5"/><text x="275" y="58" font-size="11" fill="#3b82f6">S</text><!-- Shift right S2 --><line x1="130" y1="210" x2="320" y2="60" stroke="#10b981" stroke-width="2" stroke-dasharray="5,3"/><text x="325" y="58" font-size="11" fill="#10b981">S₂ (right)</text><!-- Shift left S3 --><line x1="40" y1="190" x2="210" y2="60" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,3"/><text x="140" y="56" font-size="11" fill="#ef4444">S₃ (left)</text><!-- Movement arrow along S --><line x1="110" y1="168" x2="170" y2="116" stroke="#f59e0b" stroke-width="2" marker-end="url(#arr)"/><text x="175" y="120" font-size="10" fill="#f59e0b">Movement</text><text x="175" y="132" font-size="10" fill="#f59e0b">(price ↑)</text><!-- Shift arrows --><line x1="240" y1="130" x2="290" y2="130" stroke="#10b981" stroke-width="2" marker-end="url(#arr2)"/><line x1="100" y1="150" x2="60" y2="150" stroke="#ef4444" stroke-width="2" marker-end="url(#arr3)"/><defs><marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f59e0b"/></marker><marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#10b981"/></marker><marker id="arr3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#ef4444"/></marker></defs></svg>',
        caption: 'Movement along S (price change) vs outward/inward shifts (non-price factors)'
      },
      terms: []
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Causes of Supply Shifts', level: 3 },
      terms: []
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Factors that shift supply — increase (right) vs decrease (left)',
        headers: ['Factor', 'Increases Supply (→ Right)', 'Decreases Supply (← Left)'],
        rows: [
          ['Cost of production', 'Input costs fall (cheaper raw materials, lower wages)', 'Input costs rise (oil price spike, wage increases)'],
          ['Technology', 'New technology improves productivity', 'Outdated or loss of technology'],
          ['Taxes & Subsidies', 'Government subsidy granted', 'New indirect tax imposed on producer'],
          ['Number of producers', 'More firms enter the market', 'Firms exit the market'],
          ['Expectations', 'Producers expect lower future prices (sell now)', 'Producers expect higher future prices (hold stock)'],
          ['Natural/weather events', 'Favourable weather (agriculture)', 'Drought, flood, pest, disease']
        ]
      },
      terms: []
    },
    {
      id: 'tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Movement or Shift?',
        text: 'Always ask: <strong>did the price of the good change?</strong> If yes → movement. If a non-price factor changed → shift. In exam diagrams, draw a whole new supply curve for a shift, not just a new point.'
      },
      terms: []
    },
    {
      id: 'warn-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Students often confuse a change in the <em>price of a related good</em> with a movement. A change in the price of an input (e.g. oil) is a <strong>cost change</strong> → shifts supply. A change in the price of the good itself → movement along the existing curve.'
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Always ask: did the price of the good change? If yes \u2192 movement. If a non-price factor changed \u2192 shift. In exam diagrams, draw a whole new supply curve for a shift, not just a new point."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students often confuse a change in the price of a related good with a movement. A change in the price of an input (e.g. oil) is a cost change \u2192 shifts supply. A change in the price of the good itself \u2192 movement along the existing curve."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Just like demand, be precise about supply. A change in the price of the good itself causes a movement along the curve (extension/contraction of supply). Only changes in the costs of production or other non-price factors cause a shift."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'A price change causes a movement along the supply curve; a non-price factor causes a shift. Rightward shift = supply increase; leftward shift = supply decrease.',
    cues: [
      { id: 'cue-1', blockId: 'para-1', prompt: 'What causes a movement along the supply curve?', answer: 'A change in the price of the good itself.' },
      { id: 'cue-2', blockId: 'para-2', prompt: 'What does a rightward shift of the supply curve mean?', answer: 'More is supplied at every price — an increase in supply.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'Give THREE non-price factors that shift supply.', answer: 'Cost of production, technology, taxes/subsidies, number of producers, expectations, natural events (any three).' },
      { id: 'cue-4', blockId: 'tbl-1', prompt: 'How does a new government subsidy affect the supply curve?', answer: 'It shifts supply rightward — more supplied at every price.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_3_0;
