export const note_economics_3_15_2 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'State and explain the assumptions of perfect competition, and analyse short-run and long-run equilibrium outcomes for firms and the industry.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Perfect Competition', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Perfect competition</strong> is a theoretical market structure that serves as a benchmark for evaluating real markets. It describes the conditions under which markets achieve maximum efficiency. No real market is perfectly competitive, but some agricultural commodity markets and financial markets approximate its conditions.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Assumptions of Perfect Competition', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<strong>Many buyers and sellers</strong>: No single buyer or seller is large enough to influence the market price.' },
          { text: '<strong>Homogeneous (identical) products</strong>: All firms sell exactly the same product — consumers have no preference between suppliers.' },
          { text: '<strong>Perfect information</strong>: All buyers and sellers have complete knowledge of prices and products throughout the market.' },
          { text: '<strong>Free entry and exit</strong>: Firms can enter or leave the industry at zero cost and without restriction in the long run.' },
          { text: '<strong>Price takers</strong>: Each firm accepts the market price as given — the demand curve facing the individual firm is perfectly elastic (horizontal) at the market price.' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Short-Run Equilibrium', level: 2 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'In the short run, a firm in perfect competition maximises profit where <strong>MR = MC</strong>. Because firms are price takers, <strong>MR = AR = P</strong> (the demand curve is horizontal). In the short run, firms can earn <strong>supernormal profit</strong> (if P > AC), <strong>normal profit</strong> (if P = AC), or make a <strong>loss</strong> (if P &lt; AC) depending on the current market price.' }] } },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Price Taker Condition',
        text: 'In perfect competition: MR = AR = P. The demand curve for the individual firm is perfectly elastic (horizontal) at the market price. The firm can sell any quantity at P* but nothing above it.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Perfect Competition Firm Diagram', level: 2 }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13"><rect width="480" height="320" fill="#0f172a" rx="8"/><text x="240" y="22" text-anchor="middle" font-weight="bold" font-size="14">Perfect Competition: Individual Firm (Short Run)</text><!-- Axes --><line x1="60" y1="280" x2="420" y2="280" stroke="#333" stroke-width="2"/><line x1="60" y1="280" x2="60" y2="30" stroke="#333" stroke-width="2"/><text x="430" y="284" font-size="12">Q</text><text x="48" y="26" font-size="12">P,C</text><!-- MC curve: steep U-shape rising right --><path d="M 100 260 Q 180 140 260 120 Q 320 115 380 80" stroke="#e74c3c" stroke-width="2.5" fill="none"/><text x="385" y="76" fill="#e74c3c" font-size="12">MC</text><!-- AC curve: U-shape, bottom higher than MC minimum --><path d="M 100 230 Q 190 160 260 155 Q 320 155 380 170" stroke="#3498db" stroke-width="2.5" fill="none"/><text x="385" y="168" fill="#3498db" font-size="12">AC</text><!-- MR = AR = P horizontal line --><line x1="60" y1="130" x2="400" y2="130" stroke="#27ae60" stroke-width="2.5" stroke-dasharray="6,3"/><text x="404" y="134" fill="#27ae60" font-size="12">MR=AR=P*</text><!-- Profit maximising quantity vertical --><line x1="280" y1="280" x2="280" y2="130" stroke="#888" stroke-width="1.5" stroke-dasharray="4,3"/><text x="273" y="295" font-size="11">Q*</text><!-- Profit area: between P* and AC at Q* --><rect x="140" y="130" width="140" height="25" fill="#27ae60" fill-opacity="0.2" stroke="#27ae60" stroke-width="1"/><text x="195" y="144" fill="#27ae60" font-size="11">Supernormal profit</text><!-- Labels --><text x="55" y="134" text-anchor="end" font-size="11">P*</text></svg>',
        caption: 'Individual firm in perfect competition: horizontal demand/MR/AR at market price P*; profit-maximising output at Q* where MC = MR.'
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Long-Run Equilibrium', level: 2 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: 'If firms earn supernormal profit in the short run, <strong>new firms enter the industry</strong> (attracted by profit). This increases market supply, driving the market price down until <strong>P = AC</strong> (only normal profit). Conversely, if firms make losses, some exit, reducing supply and raising price until normal profit is restored.' }] } },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Long-Run Equilibrium: P = MC = min AC',
        text: 'In long-run equilibrium under perfect competition: P = MR = MC = min AC. This means the firm is simultaneously allocatively efficient (P = MC) and productively efficient (P = min AC).'
      }
    },
    {
      id: 'h-6',
      type: 'heading',
      data: { text: 'Efficiency Outcomes', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Efficiency in perfect competition',
        headers: ['Efficiency Type', 'Short Run', 'Long Run'],
        rows: [
          ['Productive', 'Not necessarily', 'Yes — P = min AC'],
          ['Allocative', 'Not necessarily', 'Yes — P = MC'],
          ['Dynamic', 'Low', 'Low — no profit for R&D investment'],
          ['X-efficiency', 'Yes', 'Yes — competition eliminates slack']
        ]
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Limitation of Perfect Competition',
        text: 'Perfect competition is dynamically inefficient — firms earn only normal profit in the long run and so have little incentive or resources to invest in R&D and innovation. It is also unrealistic as products are rarely identical and information is never perfect.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Perfect competition requires *all* six assumptions: many buyers/sellers, homogeneous products, free entry/exit, perfect information, price-takers, and zero profits in equilibrium. Candidates often skip information and assume firms earn zero by hand-waving; explain the mechanism rigorously."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "In Perfect Competition, you must accurately draw the market and firm diagrams side-by-side. Ensure the firm's AR=MR=D curve is perfectly elastic and originates precisely from the market equilibrium price."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Perfect competition assumes many firms, homogeneous products, perfect information, free entry/exit, and price-taking behaviour. In the long run, only normal profit is earned and both productive and allocative efficiency are achieved.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'List three assumptions of perfect competition.', answer: 'Many buyers/sellers; homogeneous products; perfect information; free entry and exit; price takers.' },
      { id: 'cue-2', blockId: 'para-2', prompt: 'Why is MR = AR = P in perfect competition?', answer: 'Firms are price takers — they face a horizontal demand curve at the market price, so each unit sold adds the same revenue.' },
      { id: 'cue-3', blockId: 'para-3', prompt: 'How does perfect competition eliminate supernormal profit in the long run?', answer: 'Supernormal profit attracts new entrants, which increases supply, reduces market price, and drives profit down to normal.' },
      { id: 'cue-4', blockId: 'call-2', prompt: 'What is the long-run equilibrium condition in perfect competition?', answer: 'P = MR = MC = minimum AC — simultaneously allocatively and productively efficient.' },
      { id: 'cue-5', blockId: 'call-3', prompt: 'Why is perfect competition dynamically inefficient?', answer: 'Firms earn only normal profit in the long run, leaving insufficient resources to invest in R&D and innovation.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_3_15_2;
