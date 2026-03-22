export const note_business_2_9_4 = {
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
      "id": "enr-t9a-h-quality-workforce",
      "type": "heading",
      "data": { "text": "Quality, Workforce Impact, and the Automation Trend", "level": 2 }
    },
    {
      "id": "enr-t9a-p-quality-workforce",
      "type": "paragraph",
      "data": {
        "text": "<strong>Capital-intensive</strong> production typically delivers highly consistent quality — automated machines repeat identical processes without fatigue or variation, making it ideal for standardised goods. However, they struggle to adapt to bespoke customer requirements or rapid design changes. <strong>Labour-intensive</strong> production allows workers to apply judgement, creativity, and craftsmanship, making it superior for customised or high-skill goods. The trade-off between consistency and adaptability is a key strategic decision."
      }
    },
    {
      "id": "enr-t9a-p-automation-trend",
      "type": "paragraph",
      "data": {
        "text": "Globally, many businesses are shifting from labour-intensive to capital-intensive operations as the cost of automation falls and minimum wages rise. Amazon's fulfilment centres now deploy Kiva autonomous robots alongside human workers, with robots handling approximately 75% of picking tasks at some sites. This hybrid model — capital for repetitive, high-volume tasks; labour for tasks requiring dexterity or judgement — is an increasingly common operational strategy."
      }
    },
    {
      "id": "enr-t9a-callout-brand-4",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Real Business: Amazon — The Labour-to-Capital Shift",
        "text": "Amazon's early warehouses were highly labour intensive: human pickers walked miles per shift to locate and retrieve items. Since acquiring Kiva Systems in 2012, Amazon has deployed over 750,000 robots across its global fulfilment network. Robots bring shelving pods to stationary human pickers, tripling throughput per shift and cutting operating cost per unit by roughly 20%. This capital-intensive transformation has made same-day delivery economically viable at massive scale."
      }
    },
    {
      "id": "enr-t9a-callout-student-4",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Think About It",
        "text": "Compare your school canteen (labour intensive — staff cook, serve, and clean up, high flexibility but high wage costs) with a vending machine in the corridor (capital intensive — large upfront cost, zero ongoing labour, but limited to pre-set products). The canteen offers variety and adaptability; the machine scales cheaply. Neither is universally better — the right answer always depends on volume, customisation needs, and available capital."
      }
    },
    {
      id: "sum-2-9-4",
      type: "summary",
      data: { text: "Choosing between labour and capital intensity involves trading off high setup costs and inflexibility for speed and long-term cost benefits against the flexibility and low initial costs of a human workforce." }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Use sector examples: agriculture is labour-intensive (harvest timing matters), manufacturing is increasingly capital-intensive (robots). Analyse trade-offs: labour-intensive = flexibility, lower CapEx, social costs; capital-intensive = consistency, lower marginal costs."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Oversimplifying capital-intensive as 'always cheaper.' Automation requires large upfront investment \u2013 only pays off at high volumes. A small artisan producer will never recoup automation cost. Match method to scale."
      }
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
};