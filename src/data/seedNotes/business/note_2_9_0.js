export const note_business_2_9_0 = {
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
      "id": "enr-t9a-h-choice",
      "type": "heading",
      "data": { "text": "Factors Influencing Choice of Production Method", "level": 2 }
    },
    {
      "id": "enr-t9a-list-choice",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          { "text": "<strong>Level of output required:</strong> High-volume demand favours flow production; low or one-off demand suits job production." },
          { "text": "<strong>Nature of the product:</strong> Standardised, mass-market goods lend themselves to flow; bespoke or specialised products need job or batch." },
          { "text": "<strong>Degree of automation available:</strong> Heavily automated industries will use flow or cell; labour-intensive tasks may require job or batch." },
          { "text": "<strong>Budget and capital availability:</strong> Flow and cell require significant investment; job and batch production have lower setup costs." }
        ]
      }
    },
    {
      "id": "enr-t9a-callout-brand-0",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Real Business: IKEA — Flow Production at Scale",
        "text": "IKEA uses flow production to manufacture its flat-pack furniture, including the iconic Poäng chair. Continuous, automated production lines produce millions of identical units per year, keeping unit costs extremely low. This allows IKEA to price aggressively while still commanding healthy profit margins — a direct result of choosing the right production method for a standardised, mass-market product."
      }
    },
    {
      "id": "enr-t9a-callout-student-0",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Think About It",
        "text": "Ordering a custom birthday cake at a local bakery = <strong>job production</strong> (one unique item, high skill, high unit cost). Buying a Warburtons loaf from Tesco = <strong>flow production</strong> (thousands of identical units per hour, very low cost). The product type — bespoke or identical — almost always determines the production method."
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
};