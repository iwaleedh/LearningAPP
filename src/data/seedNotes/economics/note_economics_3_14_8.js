export const note_economics_3_14_8 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Distinguish between normal profit, subnormal profit and supernormal profit, and explain their role in industry entry and exit.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Profit Concepts', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Types of Profit Compared', headers: ['Type', 'Condition', 'Economic Profit', 'Long-run signal'], rows: [['Subnormal (loss)', 'TR < TC (incl. OC)', 'Negative', 'Exit industry'], ['Normal profit', 'TR = TC (incl. OC)', 'Zero', 'No entry or exit'], ['Supernormal (abnormal)', 'TR > TC (incl. OC)', 'Positive', 'Entry attracted']] } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Normal Profit Defined', text: '<strong>Normal profit</strong> is the minimum return necessary to keep a firm in an industry in the long run — it equals the <strong>opportunity cost</strong> of the entrepreneur\'s resources.<br/>Economically, normal profit = zero economic profit (TC includes a return to the entrepreneur as a cost).' } },
    { id: 'callout-key2', type: 'callout', data: { style: 'key', title: 'Supernormal Profit', text: '<strong>Supernormal (abnormal) profit</strong> = TR > TC (including all opportunity costs).<br/>In <strong>perfectly competitive</strong> markets: supernormal profit attracts new entrants → supply rises → price falls → profit returns to normal in the long run.<br/>In <strong>monopoly</strong>: barriers to entry prevent new rivals entering → firm retains supernormal profit in the long run.' } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Normal profit condition:</strong> AR = ATC (price equals average total cost, including opportunity cost).' }, { text: '<strong>Supernormal profit condition:</strong> AR > ATC (price exceeds average total cost).' }, { text: '<strong>Subnormal profit condition:</strong> AR < ATC (price below average total cost → economic loss).' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Normal profit is NOT zero accounting profit — it is zero <strong>economic</strong> profit. Accountants include only explicit costs; economists also include implicit (opportunity) costs including entrepreneurial return.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Normal profit: TR = TC including opportunity costs (zero economic profit). Supernormal profit: TR > TC → signals entry in competitive markets but retained in monopoly. Subnormal: TR < TC → signals exit.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Normal profit is NOT zero profit\u2014it's the opportunity cost of capital and entrepreneurship. Supernormal (economic) profit is *above* normal profit. A firm earning exactly its opportunity cost is competitive; earning *more* has supernormal profit. Precision in terminology matters."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Normal profit (AR=AC) includes the opportunity cost of the entrepreneur's time and capital. Supernormal (or abnormal) profit is any profit made above this level. Ensure you define profit strictly in these economic terms, not just accounting terms."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Normal profit = zero economic profit (AR = ATC). Supernormal profit (AR > ATC) attracts entry in PC but is retained in monopoly via barriers. Subnormal profit causes exit.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'What is normal profit and why is it treated as a cost?', answer: 'Normal profit is the minimum return to keep a firm in an industry — it equals the opportunity cost of the entrepreneur\'s resources. Economists include this as a cost, so TR = TC (including normal profit) means zero economic profit.' },
      { id: 'cue-2', blockId: 'callout-key2', prompt: 'Why can a monopolist earn supernormal profit in the long run?', answer: 'Barriers to entry (high capital costs, IP, economies of scale, legal barriers) prevent new competitors from entering and increasing supply. In perfect competition, entry erodes supernormal profit — in monopoly, barriers block this competitive process.' },
    ]
  },
  evidence: [], mentions: []
};
