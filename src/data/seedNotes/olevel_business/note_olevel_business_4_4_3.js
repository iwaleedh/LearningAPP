export const note_olevel_business_4_4_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Business/Operations Management/production-processes-inventory.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Identify the types of stock held by businesses, interpret a stock control chart (including reorder level, maximum stock, minimum stock, reorder quantity, and lead time), and evaluate the costs and benefits of holding stock versus using a JIT approach.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Inventory (Stock) Management', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: '<b>Inventory</b> (or stock) refers to the goods and materials a business holds for use in production or for sale. Effective stock management ensures the business always has enough stock to meet demand without holding so much that costs become excessive. Too little stock leads to production stoppages or lost sales; too much stock ties up working capital and increases storage costs. Finding the right balance is the central challenge of inventory management.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Types of Stock', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Raw materials</b> — Inputs not yet used in the production process. For example, steel held by a car manufacturer, cotton held by a clothing factory, or flour held by a bakery.' },
          { text: '<b>Work in progress (WIP)</b> — Partly finished goods currently being processed. For example, a car body on the assembly line, or cloth that has been cut but not yet sewn.' },
          { text: '<b>Finished goods</b> — Completed products waiting to be sold or dispatched to customers. For example, packaged loaves of bread in a bakery\'s warehouse, or assembled smartphones ready for shipping.' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'The Stock Control Chart', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'A <b>stock control chart</b> (also called a stock level diagram) is a graph showing how stock levels change over time, and the key thresholds that trigger reordering. Understanding each element of the chart is essential for IGCSE exam questions.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <!-- Background -->
  <rect width="520" height="300" fill="#f8fafc" rx="8"/>
  <!-- Axes -->
  <line x1="60" y1="260" x2="480" y2="260" stroke="#334155" stroke-width="2"/>
  <line x1="60" y1="260" x2="60" y2="30" stroke="#334155" stroke-width="2"/>
  <!-- Y-axis labels -->
  <text x="55" y="35" text-anchor="end" font-size="11" fill="#64748b">500</text>
  <text x="55" y="100" text-anchor="end" font-size="11" fill="#64748b">400</text>
  <text x="55" y="165" text-anchor="end" font-size="11" fill="#64748b">300</text>
  <text x="55" y="210" text-anchor="end" font-size="11" fill="#64748b">200</text>
  <text x="55" y="240" text-anchor="end" font-size="11" fill="#64748b">100</text>
  <!-- Axis titles -->
  <text x="270" y="290" text-anchor="middle" font-size="12" fill="#334155">Time</text>
  <text x="18" y="150" text-anchor="middle" font-size="12" fill="#334155" transform="rotate(-90,18,150)">Stock Level (units)</text>
  <!-- Maximum stock line -->
  <line x1="60" y1="35" x2="480" y2="35" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="6,3"/>
  <text x="484" y="39" font-size="10" fill="#6366f1">Max stock (500)</text>
  <!-- Reorder level line -->
  <line x1="60" y1="165" x2="480" y2="165" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6,3"/>
  <text x="484" y="169" font-size="10" fill="#f59e0b">Reorder level (300)</text>
  <!-- Minimum (buffer) stock line -->
  <line x1="60" y1="210" x2="480" y2="210" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="6,3"/>
  <text x="484" y="214" font-size="10" fill="#ef4444">Min stock (200)</text>
  <!-- Stock level sawtooth pattern - cycle 1 -->
  <polyline points="60,35 160,165 160,35 260,165 260,35 360,165 360,35 460,165" fill="none" stroke="#10b981" stroke-width="2.5"/>
  <!-- Reorder arrows (vertical lead time indicators) -->
  <line x1="160" y1="165" x2="160" y2="260" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="260" y1="165" x2="260" y2="260" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="360" y1="165" x2="360" y2="260" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,2"/>
  <!-- Lead time brackets below axis -->
  <text x="110" y="278" text-anchor="middle" font-size="9" fill="#94a3b8">Lead time</text>
  <!-- Labels for reorder points -->
  <text x="160" y="275" text-anchor="middle" font-size="9" fill="#f59e0b">Order</text>
  <text x="260" y="275" text-anchor="middle" font-size="9" fill="#f59e0b">Order</text>
  <text x="360" y="275" text-anchor="middle" font-size="9" fill="#f59e0b">Order</text>
  <!-- Reorder quantity brace -->
  <line x1="55" y1="35" x2="55" y2="165" stroke="#6366f1" stroke-width="1"/>
  <text x="12" y="105" font-size="9" fill="#6366f1" transform="rotate(-90,12,105)">Reorder qty</text>
  <!-- Title -->
  <text x="270" y="20" text-anchor="middle" font-size="13" font-weight="600" fill="#1e293b">Stock Control Chart</text>
</svg>`,
        caption: 'A stock control chart showing maximum stock, reorder level, minimum (buffer) stock, lead time, and reorder quantity'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Key Terms on the Stock Control Chart', level: 3 }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Maximum stock level</b> — The highest amount of stock the business is willing to hold at any time (due to storage space and cost constraints).' },
          { text: '<b>Minimum stock level (buffer stock)</b> — The lowest level of stock the business is willing to hold; the safety cushion that protects against unexpected demand or late deliveries.' },
          { text: '<b>Reorder level</b> — The stock level at which a new order is placed. Set above the minimum stock to allow for lead time. When stock reaches this level, an order is triggered automatically.' },
          { text: '<b>Reorder quantity</b> — The amount of stock ordered each time. On the chart, this is the difference between the maximum stock level and the reorder level.' },
          { text: '<b>Lead time</b> — The time between placing an order and receiving the delivery. During the lead time, stock continues to fall, ideally reaching (but not going below) the minimum stock level when the delivery arrives.' }
        ]
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Costs of Holding Stock vs Costs of Running Out', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Costs of Holding Too Much Stock vs Costs of Holding Too Little Stock',
        headers: ['Holding Too Much (Overstock)', 'Holding Too Little (Stockout)'],
        rows: [
          ['Warehousing and storage costs (rent, utilities, security)', 'Production halts — machinery and workers idle but still paid'],
          ['Insurance costs for stored goods', 'Lost sales and revenue — customers go elsewhere'],
          ['Risk of stock becoming obsolete or going out of fashion', 'Damaged customer relationships and reputation'],
          ['Capital tied up in stock cannot be used elsewhere (opportunity cost)', 'Emergency orders from suppliers at premium prices'],
          ['Deterioration risk for perishable goods', 'Possible breach of contract with customers']
        ]
      }
    },
    {
      id: 'h-6',
      type: 'heading',
      data: { text: 'JIT vs Buffer Stock Approach', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'A <b>buffer stock approach</b> maintains a deliberate safety stock level above the minimum to protect against supply disruption or demand spikes. This is the traditional approach and suits businesses where: <ul><li>Demand is unpredictable or seasonal</li><li>Suppliers are unreliable or distant</li><li>Raw materials are subject to price fluctuations (buying in bulk when prices are low)</li><li>Storage costs are relatively low</li></ul>By contrast, <b>JIT</b> holds no buffer stock and orders only when needed, minimising storage costs — but requiring highly reliable suppliers and stable, predictable demand.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Exam Tip: Reading the Stock Control Chart',
        text: 'In the exam you may be asked to: (1) identify key levels on the chart, (2) explain what happens when stock hits the reorder level, (3) draw the effect of a longer lead time (minimum stock rises), or (4) show what happens during a stockout (stock line falls below minimum).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Businesses hold three types of stock: raw materials, work in progress, and finished goods. The stock control chart shows maximum stock, reorder level, minimum/buffer stock, reorder quantity, and lead time. Holding too much stock incurs storage costs and ties up capital; holding too little risks production stoppages and lost sales. JIT minimises stock but requires reliable suppliers, while buffer stock protects against supply disruptions.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Stock control charts show maximum stock, reorder level, buffer stock, reorder quantity, and lead time. Too much stock wastes money; too little risks stockouts. JIT vs buffer stock is a key trade-off.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-1',
        prompt: 'Name the three types of stock a manufacturing business holds.',
        answer: 'Raw materials (inputs not yet used), work in progress (partly finished goods), and finished goods (completed products awaiting sale).'
      },
      {
        id: 'cue-2',
        blockId: 'list-2',
        prompt: 'What is the reorder level and why is it set above the minimum stock level?',
        answer: 'The reorder level is the stock level at which a new order is placed. It is set above the minimum stock to allow for lead time — so stock does not fall below the buffer during delivery.'
      },
      {
        id: 'cue-3',
        blockId: 'list-2',
        prompt: 'What is lead time?',
        answer: 'Lead time is the time between placing an order and receiving the delivery. During lead time, stock continues to fall.'
      },
      {
        id: 'cue-4',
        blockId: 'tbl-1',
        prompt: 'Give two costs of holding too much stock.',
        answer: 'Any two of: warehousing/storage costs, insurance, capital tied up (opportunity cost), risk of obsolescence, deterioration of perishable goods.'
      },
      {
        id: 'cue-5',
        blockId: 'para-3',
        prompt: 'When is a buffer stock approach more appropriate than JIT?',
        answer: 'When demand is unpredictable or seasonal, suppliers are unreliable, raw materials fluctuate in price, or storage costs are low.'
      }
    ]
  },
  evidence: [],
  mentions: []
};
