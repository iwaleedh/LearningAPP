export const note_economics_3_13_8 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the three main business objectives — profit maximisation, revenue maximisation and sales maximisation — and analyse the conditions under which each emerges.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Business Objectives', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Profit maximisation</strong>: produce where MR = MC. Traditional assumption; assumed for shareholders/owner-managers with aligned interests. Maximises economic profit.' }, { text: '<strong>Revenue maximisation</strong>: produce where MR = 0 (additional unit adds nothing to total revenue). Baumol\'s model — managers rewarded on revenue-linked bonuses; sales team targets.' }, { text: '<strong>Sales maximisation</strong>: produce the maximum output subject to a minimum profit constraint. Managers seek market share/prestige; output > profit-max; lower price.' }] } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Objective Comparison', headers: ['Objective', 'Output vs Profit-Max', 'Price vs Profit-Max', 'Who pursues?'], rows: [['Profit max', '= Q where MR=MC', 'Highest', 'Owner-managers, PE firms'], ['Revenue max', 'Higher (MR=0)', 'Lower', 'Sales-driven firms, Baumol\'s firm'], ['Sales max', 'Highest (min. profit)', 'Lowest', 'Managerial firms pre takeover']] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Always specify what objective leads to what output/price outcome. <strong>Profit max (MR=MC) → lowest output, highest price.</strong> Sales/revenue max → higher output, lower price → may be better for consumers.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Profit max: MR=MC. Revenue max: MR=0. Sales max: maximum output with minimum profit constraint. Managerial theories (Baumol) arise from separation of ownership and control.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Distinguish carefully: profit maximization (MR=MC, economic profit), revenue maximization (MR=0), and growth maximization (minimize profit per unit to expand). Exam questions often hinge on identifying which objective explains observed behavior in case studies."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "If asked about business objectives, do not just assume profit maximisation (MC=MR). Be prepared to accurately draw the Revenue Maximisation (MR=0) and Sales Volume Maximisation (AC=AR) conditions on a firm revenue/cost diagram."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Profit max: MR=MC. Revenue max: MR=0. Sales max: max output, min profit constraint. Managerial objectives diverge from profit max due to principal-agent problem.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'At what output level does a revenue-maximising firm produce?', answer: 'Where MR = 0 — an additional unit adds nothing to total revenue. Beyond this point, further output reduces total revenue (MR < 0).' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'Compare output and price under profit maximisation vs sales maximisation.', answer: 'Profit maximisation: lower output (MR=MC), higher price. Sales maximisation: highest output (any output giving at least minimum acceptable profit), lowest price. Sales maximisation is better for consumers.' },
    ]
  },
  evidence: [], mentions: []
};
