export const note_economics_3_15_0 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand and distinguish between allocative, productive, dynamic, and X-efficiency, and identify which market structures achieve each type.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Types of Economic Efficiency', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'Efficiency in economics refers to how well resources are allocated and used. There are four main types relevant to A-Level: <strong>productive efficiency</strong>, <strong>allocative efficiency</strong>, <strong>dynamic efficiency</strong>, and <strong>X-efficiency</strong>. Different market structures achieve these to varying degrees.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Productive Efficiency', level: 2 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'Productive efficiency occurs when a firm produces at the <strong>minimum point of its long-run average cost (LRAC) curve</strong>. At this point, the firm is using its resources in the least wasteful way possible. The condition is: <strong>Price = Minimum Average Cost</strong>.' }] } },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Productive Efficiency Condition',
        text: 'A firm is productively efficient when it produces at the lowest point on its average cost curve (AC = minimum). This means no waste in production — inputs are combined in the most cost-effective way.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Allocative Efficiency', level: 2 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: 'Allocative efficiency occurs when resources are distributed so that consumer welfare is maximised. The condition is <strong>P = MC</strong>: the price paid by consumers equals the marginal cost of producing the last unit. This ensures that the benefit to society of the last unit consumed equals its cost of production.' }] } },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Allocative Efficiency Condition',
        text: 'P = MC. When price exceeds MC, too little is produced from society\'s perspective. When P < MC, too much is produced. Only at P = MC are resources optimally allocated across the economy.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Dynamic Efficiency', level: 2 }
    },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Dynamic efficiency</strong> refers to efficiency over time — specifically, the ability of firms and industries to <strong>innovate, invest in R&amp;D, and adopt new production methods</strong>. It reflects how well an industry improves products and processes in the long run. Firms need sufficient profits (or the threat of competition) to invest in innovation.' }] } },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Dynamic Efficiency vs Static Efficiency',
        text: 'Static efficiency (productive and allocative) looks at a snapshot in time. Dynamic efficiency looks at improvement over time. A monopolist may be statically inefficient but can be dynamically efficient if it uses supernormal profits to fund R&D (the Schumpeterian argument).'
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'X-Efficiency', level: 2 }
    },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>X-efficiency</strong> (Leibenstein, 1966) refers to the degree to which a firm actually minimises its costs in practice. Firms sheltered from competition (e.g. monopolists) may not face sufficient pressure to control costs, leading to <strong>organisational slack or waste</strong>. Competitive markets promote X-efficiency by punishing inefficient firms with losses.' }] } },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'X-Inefficiency',
        text: 'A monopolist may technically operate on its AC curve but still be X-inefficient if its AC curve is higher than it could be with more competitive pressure. Management slack, excess perks, and poor cost control are examples of X-inefficiency.'
      }
    },
    {
      id: 'h-6',
      type: 'heading',
      data: { text: 'Efficiency Summary by Market Structure', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Efficiency achieved by market structure',
        headers: ['Efficiency Type', 'Condition', 'Perfect Competition', 'Monopolistic Competition', 'Oligopoly', 'Monopoly'],
        rows: [
          ['Productive', 'P = min AC', 'Yes (LR)', 'No (excess capacity)', 'Sometimes', 'No'],
          ['Allocative', 'P = MC', 'Yes (LR)', 'No (P > MC)', 'No (P > MC)', 'No (P > MC)'],
          ['Dynamic', 'Innovation over time', 'Low (no profit for R&D)', 'Some', 'Often high', 'Can be high'],
          ['X-efficiency', 'Minimum actual costs', 'Yes (competition forces it)', 'Partially', 'Partially', 'Often no (slack)']
        ]
      }
    },
    {
      id: 'call-5',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Exam Tip: Efficiency in Essays',
        text: 'When evaluating market structures, always address which types of efficiency are achieved. Perfect competition is the benchmark for static efficiency but may lack dynamic efficiency. Monopoly reverses this. This trade-off is central to competition policy debates.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Productive efficiency (min AC) and allocative efficiency (P=MC) are *independent*. Perfect competition achieves both; monopoly achieves neither. Examiners test whether you evaluate market structures on both dimensions, not just one. Draw both curves on your graphs."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Efficiency definitions are heavily tested. Allocative efficiency is strictly P=MC (or AR=MC). Productive efficiency is the lowest point on the AC curve (MC=AC). Dynamic efficiency relates to supernormal profit being reinvested over time."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Productive efficiency requires P = min AC; allocative efficiency requires P = MC; dynamic efficiency relates to innovation over time; X-efficiency is about minimising actual costs under competitive pressure.',
    cues: [
      { id: 'cue-1', blockId: 'para-2', prompt: 'What is the condition for productive efficiency?', answer: 'Production at the minimum point of the LRAC curve — no waste in resource use.' },
      { id: 'cue-2', blockId: 'para-3', prompt: 'What is the condition for allocative efficiency?', answer: 'P = MC — the price consumers pay equals the marginal cost of production.' },
      { id: 'cue-3', blockId: 'para-4', prompt: 'What does dynamic efficiency refer to?', answer: 'Efficiency over time — innovation, R&D investment, and adoption of new production methods.' },
      { id: 'cue-4', blockId: 'para-5', prompt: 'What causes X-inefficiency?', answer: 'Lack of competitive pressure allows management slack, waste, and costs above the minimum possible level.' },
      { id: 'cue-5', blockId: 'tbl-1', prompt: 'Which market structure achieves both productive and allocative efficiency in the long run?', answer: 'Perfect competition — in the long run, P = MC = min AC.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_3_15_0;
