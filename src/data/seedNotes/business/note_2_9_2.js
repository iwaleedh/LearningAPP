export const note_business_2_9_2 = {
  blocks: [
    {
      id: "obj-2-9-2",
      type: "objective",
      data: { text: "Evaluate the various methods businesses can use to improve productivity." }
    },
    {
      id: "h-methods",
      type: "heading",
      data: { text: "Core Methods to Improve Productivity", level: 2 }
    },
    {
      id: "p-methods",
      type: "paragraph",
      data: { text: "Firms can approach productivity enhancement through investments in long-term physical assets, process overhauls, or improvement of their workforce." }
    },
    {
      id: "list-methods",
      type: "list",
      data: {
        style: "bullet",
        items: [
          { text: "Implementing new technology and automation (increasing capital productivity)." },
          { text: "Improving workforce training and skills." },
          { text: "Implementing leaner production methods." },
          { text: "Enhancing employee motivation." }
        ]
      }
    },
    {
      id: "h-tech",
      type: "heading",
      data: { text: "Technology and Automation", level: 3 }
    },
    {
      id: "p-tech",
      type: "paragraph",
      data: { text: "By investing in new, faster machinery or AI software, the output possible from a static number of employees increases dramatically. However, this is capital intensive." }
    },
    {
      id: "h-training",
      type: "heading",
      data: { text: "Training and Development", level: 3 }
    },
    {
      id: "p-training",
      type: "paragraph",
      data: { text: "A better-trained workforce makes fewer mistakes, works faster, and comes up with more efficient ways of working. This directly impacts both productivity and quality." }
    },
    {
      id: "h-motivation",
      type: "heading",
      data: { text: "Motivation", level: 3 }
    },
    {
      id: "p-motivation",
      type: "paragraph",
      data: { text: "Using financial (e.g., piece rate, performance-related pay) and non-financial (job rotation, empowerment) motivational tools can encourage staff to increase their output." }
    },
    {
      id: "callout-motivation",
      type: "callout",
      data: {
        style: "key",
        title: "The Link with Motivation Theory",
        text: "Using theories like Taylor's 'Scientific Management' (where financial reward drives efficiency) or Herzberg's 'Two-Factor theory' to adapt work environment directly influences labour productivity."
      }
    },
    {
      id: "callout-limitations",
      type: "callout",
      data: {
        style: "warning",
        title: "Limitations of Pushing Productivity",
        text: "Pushing employees too hard can increase stress, reduce quality (as tasks are rushed), and increase staff turnover. It is essential to balance speed with quality."
      }
    },
    {
      "id": "enr-t9a-h-jit",
      "type": "heading",
      "data": { "text": "Just-in-Time (JIT) vs Just-in-Case (JIC)", "level": 2 }
    },
    {
      "id": "enr-t9a-p-jit",
      "type": "paragraph",
      "data": {
        "text": "<strong>Just-in-Time (JIT)</strong> is a lean production approach where stock and components are ordered and delivered only when needed for production, eliminating storage costs and reducing waste. <strong>Just-in-Case (JIC)</strong> maintains large buffer stocks to guard against supply chain disruptions. JIT boosts productivity by freeing up capital and floor space; JIC prioritises security of supply at a higher ongoing cost."
      }
    },
    {
      "id": "enr-t9a-tbl-jit-jic",
      "type": "comparisonTable",
      "data": {
        "headers": ["Feature", "Just-in-Time (JIT)", "Just-in-Case (JIC)"],
        "rows": [
          ["Stock holding", "Minimal — ordered as needed", "High buffer stocks maintained"],
          ["Storage costs", "Very low", "High (warehousing, insurance)"],
          ["Risk", "Supply disruption halts production", "Low risk of stockout"],
          ["Capital tied up", "Minimal", "Significant"],
          ["Best for", "Stable, predictable demand (e.g. Toyota)", "Unpredictable/critical demand (e.g. NHS PPE)"]
        ],
        "caption": "JIT vs JIC Comparison"
      }
    },
    {
      "id": "svg-stock-control",
      "type": "svg",
      "data": {
        "svg": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 280' font-family='Arial,sans-serif'><rect width='420' height='280' fill='#0f172a' rx='8'/><text x='210' y='18' text-anchor='middle' font-size='12' font-weight='bold' fill='#1e293b'>Stock Control Graph</text><line x1='50' y1='240' x2='390' y2='240' stroke='#334155' stroke-width='1.5'/><line x1='50' y1='30' x2='50' y2='245' stroke='#334155' stroke-width='1.5'/><text x='220' y='258' text-anchor='middle' font-size='10' fill='#64748b'>Time</text><text x='18' y='140' font-size='10' fill='#64748b' transform='rotate(-90,18,140)'>Stock Level (units)</text><polyline points='50,60 140,60 140,200 200,200 200,60 290,60 290,200 350,200 350,90' stroke='#6366f1' stroke-width='2.5' fill='none'/><line x1='50' y1='200' x2='390' y2='200' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='5'/><text x='393' y='203' font-size='9' fill='#f59e0b'>Reorder</text><text x='393' y='213' font-size='9' fill='#f59e0b'>Level</text><line x1='50' y1='225' x2='390' y2='225' stroke='#ef4444' stroke-width='1.5' stroke-dasharray='5'/><text x='393' y='228' font-size='9' fill='#ef4444'>Buffer</text><line x1='50' y1='60' x2='390' y2='60' stroke='#10b981' stroke-width='1.5' stroke-dasharray='5'/><text x='393' y='63' font-size='9' fill='#10b981'>Max</text><text x='393' y='73' font-size='9' fill='#10b981'>Stock</text><line x1='140' y1='200' x2='140' y2='240' stroke='#94a3b8' stroke-width='1' stroke-dasharray='3'/><text x='145' y='253' font-size='8' fill='#94a3b8'>Order placed</text><line x1='200' y1='60' x2='200' y2='240' stroke='#94a3b8' stroke-width='1' stroke-dasharray='3'/><text x='205' y='253' font-size='8' fill='#94a3b8'>Delivery</text><rect x='140' y='230' width='60' height='8' rx='2' fill='#1e293b'/><text x='170' y='237' text-anchor='middle' font-size='7' fill='#64748b'>Lead time</text></svg>",
        "caption": "Stock control graph showing maximum stock, reorder level, buffer stock, and lead time"
      }
    },
    {
      "id": "enr-t9a-callout-brand-2",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Real Business: Toyota — Pioneering JIT",
        "text": "Toyota developed the JIT system as part of the Toyota Production System (TPS) in the 1950s. Components arrive at the assembly line precisely when needed, meaning Toyota holds virtually zero buffer stock. This eliminates warehousing costs, surfaces quality defects immediately (a faulty part cannot be buried in stock), and frees up enormous capital — a productivity and efficiency model now copied worldwide."
      }
    },
    {
      "id": "enr-t9a-callout-student-2",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Think About It",
        "text": "JIT = your fridge at the end of the week — you've used everything and shop just before you run out. JIC = a pantry stocked with six months of tinned food, just in case. JIT saves money and space; JIC provides security. The COVID-19 pandemic exposed JIT's vulnerability: the NHS ran out of PPE precisely because it had moved to a lean, low-stock model — a powerful exam argument for why JIC still matters in critical sectors."
      }
    },
    {
      id: "sum-2-9-2",
      type: "summary",
      data: { text: "Productivity improvement comes from multi-faceted approaches ranging from technological investments to staff training and motivational techniques." }
    }
  ],
  recall: {
    enabled: true,
    summaryText: "Firms improve productivity through training, motivation, technology, and superior management.",
    cues: [
      { id: "c1", prompt: "How does technology improve productivity?", answer: "Machinery can work faster, without fatigue, leading to higher output per hour." },
      { id: "c2", prompt: "Identify a risk of pushing for higher labour productivity.", answer: "Increased stress can lead to careless mistakes, reducing quality and increasing waste." },
      { id: "c3", prompt: "How does better training impact efficiency?", answer: "It allows workers to perform tasks faster and with fewer errors." },
      { id: "c4", prompt: "Name one financial method to improve motivation.", answer: "Piece-rate pay or performance bonuses." }
    ]
  }
};