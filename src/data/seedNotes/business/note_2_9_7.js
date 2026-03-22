export const note_business_2_9_7 = {
  blocks: [
    {
      id: "obj-2-9-7",
      type: "objective",
      data: { text: "Explore Just-In-Time (JIT) and Lean Production methodologies." }
    },
    {
      id: "h-lean",
      type: "heading",
      data: { text: "Lean Production", level: 2 }
    },
    {
      id: "p-lean",
      type: "paragraph",
      data: { text: "Lean production is a Japanese approach focused on cutting out waste in terms of time, space, and resources, without compromising quality." }
    },
    {
      id: "h-jit",
      type: "heading",
      data: { text: "Just-In-Time (JIT) Inventory", level: 3 }
    },
    {
      id: "p-jit",
      type: "paragraph",
      data: { text: "JIT is an extreme form of lean production where no buffer stock is held. Components arrive exactly when they are needed on the production line, and finished goods are dispatched immediately to customers." }
    },
    {
      id: "list-jit-reqs",
      type: "list",
      data: {
        style: "bullet",
        items: [
          { text: "Requires excellent, hyper-reliable relationships with suppliers." },
          { text: "Needs a multi-skilled, flexible workforce." },
          { text: "Relies on a zero-defect culture (Total Quality Management)." },
          { text: "Needs highly accurate IT, tracking, and demand-forecasting systems." }
        ]
      }
    },
    {
      id: "tbl-jit-evaluation",
      type: "comparisonTable",
      data: {
        headers: ["Advantages of JIT", "Disadvantages of JIT"],
        rows: [
          ["Massive reduction in storage costs", "Extremely reliant on external suppliers"],
          ["Less working capital tied up", "Vulnerable to external shocks (strikes, weather)"],
          ["Reduces waste and obsolete stock", "Zero buffer means no room for error"]
        ],
        caption: "Pros and Cons of Just-In-Time"
      }
    },
    {
      id: "callout-warning-jit",
      type: "callout",
      data: {
        style: "warning",
        title: "Supply Chain Risk",
        text: "During global crises (like a pandemic), JIT systems are notoriously fragile compared to traditional buffer-heavy models."
      }
    },
    {
      id: "sum-2-9-7",
      type: "summary",
      data: { text: "JIT heavily reduces costs and boosts efficiency, provided that the supply chain is highly reliable and integrated." }
    },
    {
      "id": "enr-t9b-h-cell",
      "type": "heading",
      "data": { "text": "Cell Production", "level": 3 }
    },
    {
      "id": "enr-t9b-p-cell",
      "type": "paragraph",
      "data": { "text": "Cell production is a lean technique in which the factory floor is reorganised into self-contained teams (cells), each responsible for producing a complete unit or sub-assembly from start to finish. Unlike traditional production-line layouts where workers repeat a single task, cell workers are multi-skilled and rotate roles. This increases flexibility, reduces the monotony of repetitive tasks, links directly to Kaizen (each cell can suggest improvements), and means that a fault is caught within the cell rather than reaching the end of the line." }
    },
    {
      "id": "enr-t9b-h-lean-vs-trad",
      "type": "heading",
      "data": { "text": "Lean vs Traditional Production: Key Contrasts", "level": 3 }
    },
    {
      "id": "enr-t9b-tbl-lean-vs-trad",
      "type": "comparisonTable",
      "data": {
        "headers": ["Traditional (Buffer) Approach", "Lean Approach"],
        "rows": [
          ["Large buffer stocks held 'just in case'", "Zero or minimal stock held 'just in time'"],
          ["Workers specialise in one repetitive task", "Multi-skilled workforce; cell production"],
          ["Quality checked at end by inspectors (QC)", "Quality built in at every stage (QA/TQM)"],
          ["Large batch sizes to achieve economies of scale", "Small batch / continuous flow; less waste"],
          ["High working capital tied up in stock", "Low working capital; improved cash flow"]
        ],
        "caption": "Comparing traditional and lean production philosophies"
      }
    },
    {
      "id": "enr-t9b-callout-brand-toyota-lean",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Real World: Toyota Production System (TPS)",
        "text": "<strong>Toyota</strong> is the global benchmark for lean manufacturing. Its Toyota Production System introduced JIT to the world in the 1970s and remains the reason Toyota consistently outperforms rivals on cost and defect rates. Toyota employees submit over <strong>1 million improvement ideas per year</strong> through its Kaizen suggestion system, and management implements approximately <strong>90% of them</strong> — demonstrating how empowering workers to solve small problems compounds into massive efficiency gains."
      }
    },
    {
      "id": "enr-t9b-callout-student-lean",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Relatable: Lean Revision — Cut the Waste",
        "text": "Think of lean production like efficient revision. Re-reading every textbook page (overproduction of notes) and highlighting everything (excess processing) are forms of waste. A lean approach: identify exactly which topics will be examined (JIT — only learn what's needed), use flashcards made by you (zero-defect, self-checked), and tweak your technique after each mock (Kaizen). Same time, far better results."
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Contrast JIT (no buffer = faster cash flow, no waste) with risks (any supplier delay = production halt). Show how Toyota pioneered JIT but required long-term supplier partnerships and reliable logistics. Not plug-and-play."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Treating JIT as universally superior. It works beautifully in stable environments (Japanese manufacturing post-WWII) but fails under disruption (COVID supply chain chaos revealed JIT fragility). Context and resilience matter."
      }
    }
  ],
  recall: {
    enabled: true,
    summaryText: "Lean production cuts waste; JIT specifically minimizes inventory holding completely.",
    cues: [
      { id: "c1", prompt: "Explain Just-In-Time (JIT) inventory.", answer: "A system where materials arrive exactly when required, completely eliminating buffer stock." },
      { id: "c2", prompt: "What is a main benefit of JIT?", answer: "Vastly reduced warehousing and storage costs, freeing up working capital." },
      { id: "c3", prompt: "What makes JIT risky?", answer: "Any delay from suppliers instantly halts the entire production line." },
      { id: "c4", prompt: "What is Lean Production?", answer: "An overarching philosophy attempting to remove all forms of waste from the manufacturing process." }
    ]
  }
};