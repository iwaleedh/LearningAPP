export const note_olevel_business_4_4_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Business/Operations Management/production-processes-lean-production.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Define lean production and explain its key techniques (JIT, kaizen, cell production, time-based management). Evaluate the advantages and disadvantages of adopting lean production methods.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Lean Production', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: '<b>Lean production</b> is an approach to manufacturing that aims to <b>eliminate all forms of waste</b> from the production process. Originating from the Toyota Production System in Japan, it focuses on producing the right amount of the right product at the right time — minimising costs while maintaining or improving quality. "Waste" (called <i>muda</i> in Japanese) includes overproduction, waiting time, unnecessary transportation, excess stock, defective products, unnecessary motion, and underused worker talent.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Seven Wastes (Muda)',
        text: 'Lean production targets seven types of waste: (1) Overproduction, (2) Waiting, (3) Transportation, (4) Over-processing, (5) Excess inventory/stock, (6) Unnecessary motion, (7) Defects/rework.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Just-In-Time (JIT) Stock Management', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: '<b>Just-in-time (JIT)</b> is a stock management system in which materials and components are ordered and delivered exactly when they are needed in the production process — no earlier, no later. There are no buffer stocks; the goal is to hold <b>zero inventory</b>. This eliminates the costs of holding stock (warehousing, insurance, obsolescence) but requires extremely reliable suppliers and precise production scheduling. JIT was pioneered by Toyota and is widely used in modern manufacturing.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'JIT vs Traditional (Buffer Stock) Approach',
        headers: ['Factor', 'JIT', 'Buffer Stock / Traditional'],
        rows: [
          ['Stock held', 'Near zero — ordered as needed', 'Significant buffer stock maintained'],
          ['Storage costs', 'Very low', 'High (warehousing, insurance)'],
          ['Supplier relationship', 'Close, trusted, long-term partners', 'Multiple suppliers, arm\'s-length'],
          ['Risk of stockout', 'High if supplier fails', 'Low — buffer provides cover'],
          ['Working capital tied up in stock', 'Minimal', 'Substantial'],
          ['Flexibility to demand changes', 'Lower — tight scheduling', 'Higher — stocks can absorb change'],
          ['Quality pressure on suppliers', 'Very high — no room for faulty parts', 'More tolerance for defects']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Kaizen (Continuous Improvement)', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: '<b>Kaizen</b> is a Japanese philosophy meaning <b>"continuous improvement"</b>. Rather than seeking occasional dramatic leaps in quality or efficiency, kaizen encourages workers at every level to make small, incremental improvements on an ongoing basis. Kaizen teams (quality circles) meet regularly to identify inefficiencies, suggest improvements, and implement changes. Every worker is considered an expert on their own job and is empowered to suggest improvements. The cumulative effect of many small improvements is significant over time.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'success',
        title: 'Benefits of Kaizen',
        text: 'Kaizen empowers workers, improves morale, reduces waste, improves quality gradually, and fosters a culture of innovation. Because changes are small, they are less risky and more accepted than large-scale restructuring.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Cell Production', level: 2 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: '<b>Cell production</b> organises workers into small, self-contained groups (cells) that are each responsible for completing a whole unit of work or a significant sub-assembly. Each cell contains all the equipment and workers needed to complete that part of the product. Workers within a cell are multi-skilled and rotate tasks, which reduces boredom, improves quality (each cell is responsible for its own output), and enables easier identification of problems. Cell production combines the efficiency of specialisation with the motivation benefits of teamwork.'
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Time-Based Management', level: 2 }
    },
    {
      id: 'para-5',
      type: 'paragraph',
      data: {
        text: '<b>Time-based management</b> focuses on reducing the time taken at every stage of business activity — from product development through to delivery. Key measures include: <ul><li><b>Reducing lead time</b> — The time between ordering and receiving materials, or between order and delivery to customer.</li><li><b>Reducing production cycle time</b> — How long it takes to produce one unit.</li><li><b>Rapid product development</b> — Getting new products to market faster than competitors (time-to-market).</li></ul>Faster throughput reduces costs, improves customer satisfaction, and allows the business to respond quickly to market changes.'
      }
    },
    {
      id: 'h-6',
      type: 'heading',
      data: { text: 'Advantages and Disadvantages of Lean Production', level: 2 }
    },
    {
      id: 'tbl-2',
      type: 'comparisonTable',
      data: {
        caption: 'Advantages and Disadvantages of Lean Production',
        headers: ['Advantages', 'Disadvantages'],
        rows: [
          ['Reduced stock-holding costs (less capital tied up in inventory)', 'Highly dependent on reliable, punctual suppliers — any delay disrupts production'],
          ['Less waste of materials, time, and effort', 'Requires significant cultural change — workers and managers must embrace new ways of working'],
          ['Improved quality (problems identified and fixed quickly)', 'Initial implementation is costly and time-consuming'],
          ['More motivated workers (through kaizen and cell production)', 'JIT leaves no safety buffer — a stockout can halt production immediately'],
          ['Lower unit costs over time', 'Difficult to manage in industries with highly variable demand'],
          ['Faster response to customer needs (time-based management)', 'Requires close supplier relationships that take time to develop']
        ]
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Supplier Reliability Risk',
        text: 'JIT production is only as strong as its weakest supplier. If a key supplier fails to deliver on time (e.g. due to a transport strike or natural disaster), the entire production line may halt. The 2011 Japan earthquake disrupted JIT supply chains for Toyota and other manufacturers worldwide.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Lean production aims to eliminate waste from the production process. Key techniques include JIT (zero stock, deliver as needed), kaizen (continuous incremental improvement), cell production (self-contained multi-skilled teams), and time-based management (reducing lead times). Benefits include lower costs, less waste, and better quality; risks include supplier dependency and cultural resistance to change.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Lean production eliminates waste. JIT holds zero stock; kaizen makes continuous small improvements; cell production uses multi-skilled teams; time-based management cuts lead times.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-1',
        prompt: 'What is lean production and where did it originate?',
        answer: 'Lean production is an approach that eliminates all forms of waste from the production process. It originated from the Toyota Production System in Japan.'
      },
      {
        id: 'cue-2',
        blockId: 'para-2',
        prompt: 'What is just-in-time (JIT) stock management?',
        answer: 'JIT is a system where materials are ordered and delivered exactly when needed — no buffer stock is held. This eliminates storage costs but requires reliable suppliers.'
      },
      {
        id: 'cue-3',
        blockId: 'para-3',
        prompt: 'What does "kaizen" mean and how does it work?',
        answer: 'Kaizen means "continuous improvement". Workers at all levels make small, regular improvements to processes. Quality circles meet to identify and implement changes incrementally.'
      },
      {
        id: 'cue-4',
        blockId: 'para-4',
        prompt: 'What is cell production and why does it improve worker motivation?',
        answer: 'Cell production groups multi-skilled workers into self-contained teams each responsible for a whole unit of work. Workers rotate tasks, reducing boredom and giving ownership of quality.'
      },
      {
        id: 'cue-5',
        blockId: 'tbl-2',
        prompt: 'What is the main risk of adopting JIT as part of lean production?',
        answer: 'JIT is highly dependent on reliable suppliers. If a supplier fails to deliver on time, there is no buffer stock, so production halts immediately.'
      }
    ]
  },
  evidence: [],
  mentions: []
};
