const fs = require('fs');

const subtopics = [
  'Job, batch, flow and cell production',
  'Productivity measurement',
  'Productivity improvement methods',
  'Efficiency and minimum average cost',
  'Labour vs capital intensity',
  'Capacity utilisation',
  'Inventory control systems',
  'JIT and lean production',
  'Quality control and assurance',
  'TQM and Kaizen'
];

const getNoteContent = (index, subtopic) => {
  const contents = [
    // 2_9_0
    `export const note_business_2_9_0 = {
  blocks: [
    {
      id: "obj-2-9-0",
      type: "objective",
      data: { text: "Understand the key methods of production: job, batch, flow, and cell production, along with their advantages and disadvantages." }
    },
    {
      id: "h-job",
      type: "heading",
      data: { text: "Job Production", level: 2 }
    },
    {
      id: "p-job",
      type: "paragraph",
      data: { text: "Job production involves the creation of single, unique, or bespoke products. Each item is entirely finished before the next one is started. This method is heavily reliant on highly skilled labour and is common in custom manufacturing, such as bespoke tailoring, artisan furniture, and special construction projects." }
    },
    {
      id: "callout-job-pros-cons",
      type: "callout",
      data: {
        style: "key",
        title: "Pros and Cons of Job Production",
        text: "<strong>Pros:</strong> High quality, customizable, high worker motivation. <strong>Cons:</strong> High unit cost, slow production, requires highly skilled, expensive workforce."
      }
    },
    {
      id: "h-batch",
      type: "heading",
      data: { text: "Batch Production", level: 2 }
    },
    {
      id: "p-batch",
      type: "paragraph",
      data: { text: "Batch production involves producing an identical product in groups or 'batches'. Once a batch undergoes one stage of the production process, it moves as a group to the next stage. It is suitable for bakeries, clothing manufacturing, and pharmaceutical production." }
    },
    {
      id: "list-batch",
      type: "list",
      data: {
        style: "bullet",
        items: [
          { text: "Enables some economies of scale compared to job production." },
          { text: "More flexible than flow production, allowing changes between batches." },
          { text: "However, it requires careful coordination and can lead to build-up of work-in-progress if processes are unsynchronised." }
        ]
      }
    },
    {
      id: "h-flow",
      type: "heading",
      data: { text: "Flow Production", level: 2 }
    },
    {
      id: "p-flow",
      type: "paragraph",
      data: { text: "Flow production (or mass production) involves a continuous process of parts and sub-assemblies passing from one stage to another until completion. It relies on standardisation and heavy machinery." }
    },
    {
      id: "callout-flow-features",
      type: "callout",
      data: {
        style: "key",
        title: "Key Characteristics",
        text: "High volume output, low unit costs (benefiting from economies of scale), capital intensive, heavily automated."
      }
    },
    {
      id: "h-cell",
      type: "heading",
      data: { text: "Cell Production", level: 2 }
    },
    {
      id: "p-cell",
      type: "paragraph",
      data: { text: "Cell production splits the production process into self-contained units (or cells). Each cell is responsible for a significant part of the finished product, encouraging team working and job rotation among multi-skilled workers." }
    },
    {
      id: "tbl-production-comparison",
      type: "comparisonTable",
      data: {
        headers: ["Method", "Volume", "Flexibility", "Unit Cost"],
        rows: [
          ["Job", "Low / Custom", "High", "High"],
          ["Batch", "Medium", "Medium", "Medium"],
          ["Flow", "High", "Low", "Low"],
          ["Cell", "Medium/High", "High", "Medium"]
        ],
        caption: "Comparison of Production Methods"
      }
    },
    {
      id: "sum-2-9-0",
      type: "summary",
      data: { text: "Firms must choose their production method based on the nature of the product, target market size, and available capital vs labour. As firms grow, they often transition from job to batch and then to flow production." }
    }
  ],
  recall: {
    enabled: true,
    summaryText: "Firms use Job, Batch, Flow, or Cell production methods based on product uniqueness and volume needs.",
    cues: [
      { id: "c1", prompt: "What is Job Production?", answer: "Manufacturing single, unique products one at a time." },
      { id: "c2", prompt: "Identify a key disadvantage of Flow Production.", answer: "High initial capital setup costs and low flexibility." },
      { id: "c3", prompt: "How does Batch Production differ from Job Production?", answer: "Batch produces a set quantity of identical goods at once, allowing for lower unit costs than Job production." },
      { id: "c4", prompt: "What is Cell Production?", answer: "Organising workers into self-contained teams that complete significant parts of a product." }
    ]
  }
};`, // End 0

    // 2_9_1
    `export const note_business_2_9_1 = {
  blocks: [
    {
      id: "obj-2-9-1",
      type: "objective",
      data: { text: "Learn how productivity is measured and its importance for business competitiveness." }
    },
    {
      id: "h-intro",
      type: "heading",
      data: { text: "Understanding Productivity", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "Productivity is a measure of efficiency. It calculates how effectively resources (inputs like labour and capital) are being converted into outputs (goods or services)." }
    },
    {
      id: "callout-def",
      type: "callout",
      data: {
        style: "key",
        title: "Key Definition",
        text: "Productivity is the ratio of outputs to inputs during a specific period. It is essentially output per worker or per machine."
      }
    },
    {
      id: "h-labour",
      type: "heading",
      data: { text: "Labour Productivity", level: 3 }
    },
    {
      id: "p-labour",
      type: "paragraph",
      data: { text: "Labour productivity is the most common measure. It shows how much output each employee produces." }
    },
    {
      id: "callout-formula-labour",
      type: "callout",
      data: {
        style: "worked",
        title: "Formula: Labour Productivity",
        text: "Labour Productivity = Total Output / Total number of employees"
      }
    },
    {
      id: "h-capital",
      type: "heading",
      data: { text: "Capital Productivity", level: 3 }
    },
    {
      id: "p-capital",
      type: "paragraph",
      data: { text: "Measures the output generated by the machinery and equipment utilized by the firm." }
    },
    {
      id: "callout-formula-capital",
      type: "callout",
      data: {
        style: "worked",
        title: "Formula: Capital Productivity",
        text: "Capital Productivity = Total Output / Capital Employed"
      }
    },
    {
      id: "h-importance",
      type: "heading",
      data: { text: "Importance of High Productivity", level: 2 }
    },
    {
      id: "list-importance",
      type: "list",
      data: {
        style: "bullet",
        items: [
          { text: "Lowers the average unit cost of production." },
          { text: "Allows for higher profit margins or more competitive pricing." },
          { text: "Can lead to higher employee wages (as they produce more wealth for the business)." },
          { text: "Provides a distinct competitive advantage over rivals." }
        ]
      }
    },
    {
      id: "callout-warning-prod",
      type: "callout",
      data: {
        style: "warning",
        title: "Watch Out!",
        text: "Do not confuse productivity with total production. A firm could increase total production by hiring more workers, while its productivity (output per worker) might remain unchanged or even fall."
      }
    },
    {
      id: "sum-2-9-1",
      type: "summary",
      data: { text: "Measuring productivity helps a business track its efficiency. High labour or capital productivity translates directly into lower average costs." }
    }
  ],
  recall: {
    enabled: true,
    summaryText: "Productivity is a measure of efficiency converting inputs to outputs.",
    cues: [
      { id: "c1", prompt: "Define Labour Productivity.", answer: "The amount of output produced per employee over a given time." },
      { id: "c2", prompt: "State the formula for calculating Labour Productivity.", answer: "Total Output / Total number of employees." },
      { id: "c3", prompt: "Why is high productivity beneficial?", answer: "It lowers unit costs, leading to higher profit margins and better competitiveness." },
      { id: "c4", prompt: "Explain the difference between production and productivity.", answer: "Production is the total amount made, whereas productivity is the efficiency measure: output per input unit." }
    ]
  }
};`, // End 1

    // 2_9_2
    `export const note_business_2_9_2 = {
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
};`, // End 2

    // 2_9_3
    `export const note_business_2_9_3 = {
  blocks: [
    {
      id: "obj-2-9-3",
      type: "objective",
      data: { text: "Understand the relationship between efficiency, economies of scale, and the minimum average cost." }
    },
    {
      id: "h-efficiency",
      type: "heading",
      data: { text: "Efficiency in Production", level: 2 }
    },
    {
      id: "p-efficiency",
      type: "paragraph",
      data: { text: "Productive efficiency occurs when a firm operates at its lowest possible average cost. This means utilizing all resources fully without waste." }
    },
    {
      id: "h-average-cost",
      type: "heading",
      data: { text: "Minimum Average Cost", level: 2 }
    },
    {
      id: "p-average-cost",
      type: "paragraph",
      data: { text: "Average cost is calculated by dividing total cost by the quantity produced. Finding the minimum average cost is the ultimate goal for cost-competitiveness." }
    },
    {
      id: "callout-ac-formula",
      type: "callout",
      data: {
        style: "worked",
        title: "Average Cost Formula",
        text: "Average Cost = Total Costs / Quantity Output"
      }
    },
    {
      id: "h-eos",
      type: "heading",
      data: { text: "Economies vs Diseconomies of Scale", level: 2 }
    },
    {
      id: "p-eos",
      type: "paragraph",
      data: { text: "As production scales up, average unit costs initially fall due to Economies of Scale. However, eventually, the firm may become too large and inefficient, leading to Diseconomies of Scale where average unit costs start rising again." }
    },
    {
      id: "list-eos",
      type: "list",
      data: {
        style: "bullet",
        items: [
          { text: "Purchasing Economies: Bulk buying discounts." },
          { text: "Technical Economies: Use of specialized, massive machinery." },
          { text: "Managerial Economies: Hiring specialist managers." }
        ]
      }
    },
    {
      id: "callout-diseconomies",
      type: "callout",
      data: {
        style: "warning",
        title: "Diseconomies of Scale",
        text: "Occur due to poor communication in large entities, alienation of the workforce, and complex coordination."
      }
    },
    {
      id: "tbl-cost-curve",
      type: "comparisonTable",
      data: {
        headers: ["Scale Phase", "Effect on Unit Cost", "Primary Cause"],
        rows: [
          ["Growing (EoScale)", "Decreasing", "Spreading fixed costs, bulk buying"],
          ["Minimum Efficient Scale", "Lowest possible", "Optimal size reached"],
          ["Over-expansion (Diseconomies)", "Increasing", "Communication breakdown, bureaucracy"]
        ],
        caption: "The Life Cycle of Average Costs"
      }
    },
    {
      id: "sum-2-9-3",
      type: "summary",
      data: { text: "A firm aims for productive efficiency at the minimum efficient scale to keep average costs as low as possible without tipping into diseconomies of scale." }
    }
  ],
  recall: {
    enabled: true,
    summaryText: "Efficiency seeks the minimum average unit cost by balancing economies and diseconomies of scale.",
    cues: [
      { id: "c1", prompt: "Define Average Cost.", answer: "Total costs divided by the total number of items produced." },
      { id: "c2", prompt: "What are economies of scale?", answer: "A reduction in average unit cost as the scale of production increases." },
      { id: "c3", prompt: "Give an example of a technical economy of scale.", answer: "Using large, heavily automated machinery that would be too expensive for a small output." },
      { id: "c4", prompt: "Why do diseconomies of scale occur?", answer: "Due to over-expansion causing poor communication and loss of control, increasing unit costs." }
    ]
  }
};`, // End 3

    // 2_9_4
    `export const note_business_2_9_4 = {
  blocks: [
    {
      id: "obj-2-9-4",
      type: "objective",
      data: { text: "Assess the differences, advantages, and drawbacks of labour-intensive versus capital-intensive operations." }
    },
    {
      id: "h-intensity",
      type: "heading",
      data: { text: "Labour vs Capital Intensity", level: 2 }
    },
    {
      id: "p-intensity",
      type: "paragraph",
      data: { text: "Organisations must decide the optimal mix of human effort and machinery. This depends on wage rates vs capital costs, and the types of products being manufactured." }
    },
    {
      id: "h-labour",
      type: "heading",
      data: { text: "Labour-Intensive Production", level: 3 }
    },
    {
      id: "p-labour",
      type: "paragraph",
      data: { text: "A process heavily reliant on a workforce rather than machinery. Common in service industries (e.g., hospitality, consultancy) and customized production." }
    },
    {
      id: "list-labour",
      type: "list",
      data: {
        style: "bullet",
        items: [
          { text: "Pros: High flexibility, low initial setup costs, can adapt to custom customer requests." },
          { text: "Cons: Subject to human error, potentially higher ongoing variable costs (wages), susceptible to strikes." }
        ]
      }
    },
    {
      id: "h-capital",
      type: "heading",
      data: { text: "Capital-Intensive Production", level: 3 }
    },
    {
      id: "p-capital",
      type: "paragraph",
      data: { text: "A process heavily reliant on machinery and automation. Dominates flow production and mass manufacturing." }
    },
    {
      id: "list-capital",
      type: "list",
      data: {
        style: "bullet",
        items: [
          { text: "Pros: Mass output, high standardisation, lower long-term unit costs, no fatigue." },
          { text: "Cons: Massive initial outlay, inflexible (hard to switch products), high maintenance costs." }
        ]
      }
    },
    {
      id: "tbl-intensity",
      type: "comparisonTable",
      data: {
        headers: ["Feature", "Labour Intensive", "Capital Intensive"],
        rows: [
          ["Fixed Costs", "Low", "Extremely High"],
          ["Variable Costs", "High (Wages)", "Low"],
          ["Flexibility", "High", "Low"],
          ["Quality Consistency", "Varies based on skill", "Highly consistent"]
        ],
        caption: "Comparing Intensity Methods"
      }
    },
    {
      id: "sum-2-9-4",
      type: "summary",
      data: { text: "Choosing between labour and capital intensity involves trading off high setup costs and inflexibility for speed and long-term cost benefits against the flexibility and low initial costs of a human workforce." }
    }
  ],
  recall: {
    enabled: true,
    summaryText: "Firms decide the mix of labour vs capital intensity depending on cost and product type.",
    cues: [
      { id: "c1", prompt: "Define capital-intensive production.", answer: "Production heavily reliant on machinery rather than workers." },
      { id: "c2", prompt: "Give an advantage of labour-intensive production.", answer: "Lower setup costs and higher flexibility to customise goods." },
      { id: "c3", prompt: "Identify a disadvantage of capital-intensive production.", answer: "High initial fixed costs and difficulty altering the production process." },
      { id: "c4", prompt: "Why might a firm switch from labour to capital intensive?", answer: "Rising wage costs or a desire to massively increase output volume to achieve economies of scale." }
    ]
  }
};`, // End 4

    // 2_9_5
    `export const note_business_2_9_5 = {
  blocks: [
    {
      id: "obj-2-9-5",
      type: "objective",
      data: { text: "Understand capacity utilisation, calculate it, and evaluate the implications of over- and under-utilisation." }
    },
    {
      id: "h-def",
      type: "heading",
      data: { text: "Capacity Utilisation", level: 2 }
    },
    {
      id: "p-def",
      type: "paragraph",
      data: { text: "Capacity utilisation measures the extent to which a firm's potential operational capacity is actually being used. It is expressed as a percentage." }
    },
    {
      id: "callout-formula-cap",
      type: "callout",
      data: {
        style: "worked",
        title: "Formula: Capacity Utilisation",
        text: "(Current Output / Maximum possible output) × 100"
      }
    },
    {
      id: "h-under",
      type: "heading",
      data: { text: "Under-utilisation (Spare Capacity)", level: 3 }
    },
    {
      id: "p-under",
      type: "paragraph",
      data: { text: "Operating below 100%. While having some spare capacity allows flexibility for sudden orders and time for machine maintenance, operating at a very low percentage means fixed costs are spread over fewer units, driving up unit costs." }
    },
    {
      id: "h-over",
      type: "heading",
      data: { text: "Over-utilisation (Overstretching)", level: 3 }
    },
    {
      id: "p-over",
      type: "paragraph",
      data: { text: "Operating at 100% or beyond standard maximum (using overtime). While unit costs are minimized, it leads to machine breakdowns, staff burnout, and an inability to accept new, unexpected orders." }
    },
    {
      id: "list-improving",
      type: "list",
      data: {
        style: "bullet",
        items: [
          { text: "To fix under-utilisation: Subcontract spare space, increase marketing to pull demand, rationalize (downsize)." },
          { text: "To fix over-utilisation: Outsource work, invest in larger premises/more machines, hire more shift workers." }
        ]
      }
    },
    {
      id: "sum-2-9-5",
      type: "summary",
      data: { text: "The ideal capacity utilisation is often around 90-95%, balancing low unit costs with enough slack to maintain equipment and handle unexpected spikes in demand." }
    }
  ],
  recall: {
    enabled: true,
    summaryText: "Capacity utilisation measures how much of maximum output is actually produced.",
    cues: [
      { id: "c1", prompt: "What is the formula for capacity utilisation?", answer: "(Current Output / Maximum possible output) × 100." },
      { id: "c2", prompt: "What is a disadvantage of 100% capacity utilisation?", answer: "No time for machinery maintenance and zero flexibility to take rush orders." },
      { id: "c3", prompt: "Why does low capacity utilisation increase unit costs?", answer: "Fixed costs are spread over fewer units." },
      { id: "c4", prompt: "Name one way to reduce under-utilisation.", answer: "Rationalisation (downsizing resources) or aggressive marketing to increase demand." }
    ]
  }
};`, // End 5

    // 2_9_6
    `export const note_business_2_9_6 = {
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
};`, // End 6

    // 2_9_7
    `export const note_business_2_9_7 = {
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
};`, // End 7

    // 2_9_8
    `export const note_business_2_9_8 = {
  blocks: [
    {
      id: "obj-2-9-8",
      type: "objective",
      data: { text: "Distinguish between Quality Control and Quality Assurance." }
    },
    {
      id: "h-quality",
      type: "heading",
      data: { text: "The Concept of Quality", level: 2 }
    },
    {
      id: "p-quality",
      type: "paragraph",
      data: { text: "Quality means meeting or exceeding customer expectations. Poor quality leads to returns, damaged reputation, and wasted material." }
    },
    {
      id: "h-qc",
      type: "heading",
      data: { text: "Quality Control (QC)", level: 3 }
    },
    {
      id: "p-qc",
      type: "paragraph",
      data: { text: "Quality Control is an 'inspect-at-the-end' approach. Specially trained inspectors check samples of finished products to ensure they meet the standard." }
    },
    {
      id: "list-qc",
      type: "list",
      data: {
        style: "bullet",
        items: [
          { text: "Pro: Protects customer from receiving faulty goods." },
          { text: "Con: Highly wasteful (faulty goods are fully made before being scrapped), does not identify *why* the fault occurred." }
        ]
      }
    },
    {
      id: "h-qa",
      type: "heading",
      data: { text: "Quality Assurance (QA)", level: 3 }
    },
    {
      id: "p-qa",
      type: "paragraph",
      data: { text: "Quality Assurance focuses on the process. Quality is checked at every single stage of production by the workers themselves. The aim is zero defects ('getting it right first time')." }
    },
    {
      id: "tbl-qa-qc",
      type: "comparisonTable",
      data: {
        headers: ["Quality Control", "Quality Assurance"],
        rows: [
          ["Finding faults", "Preventing faults"],
          ["Done by inspectors", "Done by all employees"],
          ["Higher waste", "Minimal waste"],
          ["Checked at the end", "Checked at every stage"]
        ],
        caption: "QC versus QA"
      }
    },
    {
      id: "sum-2-9-8",
      type: "summary",
      data: { text: "Modern businesses have largely transitioned from wasteful Quality Control to employee-empowered Quality Assurance processes." }
    }
  ],
  recall: {
    enabled: true,
    summaryText: "Quality Control inspects the final product; Quality Assurance regulates the entire process.",
    cues: [
      { id: "c1", prompt: "Explain Quality Control.", answer: "Checking products at the end of the production process to identify faults." },
      { id: "c2", prompt: "Explain Quality Assurance.", answer: "Designing production processes to ensure quality at every stage, preventing faults from occurring." },
      { id: "c3", prompt: "Why is QA superior to QC regarding costs?", answer: "QA stops faulty products earlier, significantly reducing the waste and scrap seen in QC." },
      { id: "c4", prompt: "Who is responsible for quality in QA?", answer: "All workers and staff involved in the process, not just specialized inspectors." }
    ]
  }
};`, // End 8

    // 2_9_9
    `export const note_business_2_9_9 = {
  blocks: [
    {
      id: "obj-2-9-9",
      type: "objective",
      data: { text: "Evaluate Total Quality Management (TQM) and the philosophy of Kaizen." }
    },
    {
      id: "h-tqm",
      type: "heading",
      data: { text: "Total Quality Management (TQM)", level: 2 }
    },
    {
      id: "p-tqm",
      type: "paragraph",
      data: { text: "TQM is a culture-wide commitment to quality. Every single department—from HR and finance to the factory floor—focuses on improvement. Quality is built into every aspect of the organization." }
    },
    {
      id: "list-tqm",
      type: "list",
      data: {
        style: "bullet",
        items: [
          { text: "Internal Customers: Staff treat colleagues sequentially next to them as 'customers', ensuring their output is flawless." },
          { text: "Zero Defects: Seeking perfection." },
          { text: "Requires heavy investment in training and a dramatic shift in corporate culture." }
        ]
      }
    },
    {
      id: "h-kaizen",
      type: "heading",
      data: { text: "Kaizen: Continuous Improvement", level: 2 }
    },
    {
      id: "p-kaizen",
      type: "paragraph",
      data: { text: "Kaizen translates to 'continuous improvement'. Instead of seeking massive technological leaps, Kaizen relies on small, ongoing improvements generated by the workforce." }
    },
    {
      id: "callout-kaizen-benefits",
      type: "callout",
      data: {
        style: "key",
        title: "Why Kaizen Works",
        text: "Because ideas come from workers on the floor, they are cheap to implement and highly practical. It also vastly improves worker motivation via participation."
      }
    },
    {
      id: "h-quality-circles",
      type: "heading",
      data: { text: "Quality Circles", level: 3 }
    },
    {
      id: "p-qc-circles",
      type: "paragraph",
      data: { text: "A key operational tool in TQM/Kaizen is Quality Circles: small groups of workers across departments meeting regularly to discuss issues and propose solutions to management." }
    },
    {
      id: "sum-2-9-9",
      type: "summary",
      data: { text: "TQM and Kaizen represent shifts away from dictatorial management toward collaborative, continuous, culture-wide commitments to achieving zero defects and supreme customer satisfaction." }
    }
  ],
  recall: {
    enabled: true,
    summaryText: "TQM requires a culture of quality everywhere, while Kaizen emphasizes small continuous improvements.",
    cues: [
      { id: "c1", prompt: "What is Total Quality Management (TQM)?", answer: "A culture-wide philosophy where all departments and employees are committed to achieving zero defects." },
      { id: "c2", prompt: "Explain the concept of 'internal customers' in TQM.", answer: "Treating the next employee in the production chain as a customer who must receive perfect work." },
      { id: "c3", prompt: "What is Kaizen?", answer: "The systematic approach of making small, steady, continuous improvements to production." },
      { id: "c4", prompt: "What are Quality Circles?", answer: "Groups of workers who meet regularly to discuss and solve production and operational problems." }
    ]
  }
};`  // End 9
  ];

  return contents[index];
};

for (let i = 0; i < 10; i++) {
  const content = getNoteContent(i, subtopics[i]);
  fs.writeFileSync(`/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/business/note_2_9_${i}.js`, content);
}

console.log("Successfully generated all Business Unit 2 Topic 9 notes.");
