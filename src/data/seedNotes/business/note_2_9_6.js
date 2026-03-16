export const note_business_2_9_6 = {
  blocks: [
    {
      id: "obj-2-9-6",
      type: "objective",
      data: { text: "Analyse inventory control systems, interpreting inventory control charts and understanding buffer inventory." }
    },
    {
      id: "h-control",
      type: "heading",
      data: { text: "Inventory Control", level: 2 }
    },
    {
      id: "p-control",
      type: "paragraph",
      data: { text: "Inventory (stock) includes raw materials, work-in-progress, and finished goods. Efficient control means balancing the costs of holding stock against the risk of running out." }
    },
    {
      id: "h-costs",
      type: "heading",
      data: { text: "Costs of Holding vs Costs of Stock-Outs", level: 3 }
    },
    {
      id: "list-costs",
      type: "list",
      data: {
        style: "bullet",
        items: [
          { text: "Holding costs: Storage rent, insurance, security, obsolescence, and opportunity cost of tied-up capital." },
          { text: "Stock-out costs: Lost sales, halted production lines, damaged reputation." }
        ]
      }
    },
    {
      id: "h-charts",
      type: "heading",
      data: { text: "Inventory Control Charts", level: 2 }
    },
    {
      id: "p-charts",
      type: "paragraph",
      data: { text: "These charts help managers automate reordering via standard visual triggers." }
    },
    {
      id: "callout-chart-terms",
      type: "callout",
      data: {
        style: "key",
        title: "Key Chart Terminology",
        text: "<strong>Maximum Level:</strong> The most stock held. <strong>Re-order Level:</strong> The stock level that triggers a new order. <strong>Lead Time:</strong> The time between placing an order and receiving it. <strong>Buffer Stock:</strong> Minimum stock kept for emergencies."
      }
    },
    {
      id: "tbl-inventory",
      type: "comparisonTable",
      data: {
        headers: ["Component", "Function"],
        rows: [
          ["Re-order Quantity", "Amount ordered to return stock to maximum level"],
          ["Lead Time", "Gap on the x-axis indicating delivery delay"],
          ["Buffer Stock", "Safety net to prevent halting production if lead time is delayed"]
        ],
        caption: "Inventory Chart Elements"
      }
    },
    {
      id: "sum-2-9-6",
      type: "summary",
      data: { text: "Effective inventory management depends on accurately predicting lead times and holding appropriate buffer stock to mitigate unforeseen disruptions, minimizing both storage and stock-out costs." }
    },
    {
      "id": "enr-t9b-h-buffer-eval",
      "type": "heading",
      "data": { "text": "Evaluating Buffer Stock", "level": 3 }
    },
    {
      "id": "enr-t9b-tbl-buffer-pros-cons",
      "type": "comparisonTable",
      "data": {
        "headers": ["Advantages of Buffer Stock", "Disadvantages of Buffer Stock"],
        "rows": [
          ["Enables response to unexpected demand surges", "Storage costs (warehousing, security, insurance)"],
          ["Prevents costly production stoppages", "Risk of obsolescence if demand falls"],
          ["Can stabilise supply prices during shortages", "Ties up working capital — an opportunity cost"],
          ["Builds reputation for reliable delivery", "Requires inventory management systems"]
        ],
        "caption": "Buffer stock: 'just-in-case' stock control — weighing security against cost"
      }
    },
    {
      "id": "enr-t9b-p-poor-control",
      "type": "paragraph",
      "data": { "text": "Poor stock control creates problems at both extremes. Holding <strong>too much stock</strong> inflates storage costs, raises the risk of spoilage or shrinkage, and locks up cash that the business could invest elsewhere. Holding <strong>too little stock</strong> risks production stoppages, inability to fulfil sudden demand, and lost sales revenue — all of which damage customer relationships and long-run profitability." }
    },
    {
      "id": "enr-t9b-p-jit-stock",
      "type": "paragraph",
      "data": { "text": "Just-in-time (JIT) stock management takes the opposite approach to buffer stock: raw materials are delivered at the exact moment they are needed for production, eliminating on-site storage entirely. While this maximises cash flow and frees up floor space, it removes the safety net of buffer stock and demands perfectly reliable suppliers." }
    },
    {
      "id": "enr-t9b-callout-brand-amazon",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Real World: Amazon Fulfilment Centres",
        "text": "<strong>Amazon</strong> operates one of the world's most sophisticated inventory control systems. Its fulfilment centres use AI-driven demand forecasting to set precise reorder levels and lead times, automatically triggering purchase orders when stock hits the reorder point. During peak periods (e.g. Black Friday), Amazon pre-positions high buffer stock of popular items weeks in advance to avoid stock-outs, accepting higher holding costs in exchange for guaranteed delivery speed."
      }
    },
    {
      "id": "enr-t9b-callout-student-stationery",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Relatable: Your School's Stationery Cupboard",
        "text": "Think of your school's stationery store. If the office orders new exercise books only when the last one runs out (no buffer), lessons are disrupted while they wait for delivery — that's a stock-out. If they order 5,000 books at once and store them in a room, that room costs money and some books may get damp. The school needs to find the right reorder level: enough buffer to ride out delivery delays, but not so much that storage costs spiral."
      }
    }
  ],
  recall: {
    enabled: true,
    summaryText: "Inventory control balances the high costs of storing goods against the risk of stock-outs.",
    cues: [
      { id: "c1", prompt: "What is Buffer Stock?", answer: "The minimum level of stock retained to deal with emergencies and unexpected demand." },
      { id: "c2", prompt: "Define Lead Time.", answer: "The duration between placing an order with a supplier and actually receiving it." },
      { id: "c3", prompt: "Why avoid holding too much stock?", answer: "It incurs heavy storage costs, insurance, and creates an opportunity cost for capital." },
      { id: "c4", prompt: "What is a 'stock-out' cost?", answer: "Lost sales, halted production lines, and damaged brand reputation." }
    ]
  }
};