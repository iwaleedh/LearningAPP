export const note_business_2_9_3 = {
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
      "id": "enr-t9a-h-capacity",
      "type": "heading",
      "data": { "text": "Capacity Utilisation", "level": 2 }
    },
    {
      "id": "enr-t9a-p-capacity",
      "type": "paragraph",
      "data": {
        "text": "<strong>Capacity utilisation</strong> measures the extent to which a business uses its maximum possible production output. It is closely linked to efficiency: a firm operating far below full capacity spreads its fixed costs over fewer units, raising average costs and damaging competitiveness."
      }
    },
    {
      "id": "enr-t9a-callout-formula-capacity",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Formula: Capacity Utilisation",
        "text": "Capacity Utilisation (%) = (Current Output ÷ Maximum Possible Output) × 100<br><br><strong>Example:</strong> A factory can produce 10,000 units/month but currently makes 7,500. Capacity utilisation = (7,500 ÷ 10,000) × 100 = <strong>75%</strong>. Fixed costs are now shared over only 75% of potential units — average cost per unit is higher than if the factory ran at full capacity."
      }
    },
    {
      "id": "enr-t9a-p-capacity-implications",
      "type": "paragraph",
      "data": {
        "text": "<strong>Low capacity utilisation</strong> (underutilisation) raises average fixed costs per unit, reduces profitability, and can demoralise a workforce that fears redundancy. <strong>Very high capacity utilisation</strong> (near 100%) minimises unit costs and signals strong demand, but leaves no buffer for unexpected orders — machinery wears faster and staff face intense pressure. Most businesses target 85–90%, balancing cost efficiency with operational flexibility."
      }
    },
    {
      "id": "enr-t9a-callout-brand-3",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Real Business: Ryanair — Maximising Load Factor",
        "text": "Ryanair consistently achieves load factors (seat capacity utilisation) above 93%. By filling nearly every seat on each flight, the fixed cost of operating an aircraft — crew, fuel, airport fees — is shared among more passengers, dramatically lowering cost per passenger. This is capacity utilisation as a direct competitive weapon, enabling Ryanair's ultra-low-fare model."
      }
    },
    {
      "id": "enr-t9a-callout-student-3",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Think About It",
        "text": "Picture a classroom with 30 seats but only 10 students. The rent, heating, and teacher's salary are all fixed costs — now divided by just 10, the 'cost per pupil' is enormous. Fill the room to 28 students and cost per pupil plummets. That is exactly how low capacity utilisation damages a business: the same overheads, far fewer units to absorb them."
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
};