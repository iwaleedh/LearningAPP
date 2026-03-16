export const note_business_2_9_8 = {
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
    },
    {
      "id": "enr-t9b-h-quality-circles",
      "type": "heading",
      "data": { "text": "Quality Circles", "level": 3 }
    },
    {
      "id": "enr-t9b-p-quality-circles",
      "type": "paragraph",
      "data": { "text": "A quality circle is a small, voluntary group of workers (typically 5–10 people) from related departments who meet regularly — usually weekly — to identify, analyse, and propose solutions to quality and operational problems. Solutions are then presented to management for approval and implementation. Quality circles are a bridge between QA principles and Kaizen: they harness front-line knowledge and simultaneously improve motivation through participation in decision-making." }
    },
    {
      "id": "enr-t9b-tbl-quality-tools",
      "type": "comparisonTable",
      "data": {
        "headers": ["Method", "Who checks?", "When?", "Focus"],
        "rows": [
          ["Quality Control (QC)", "Specialist inspectors", "End of production", "Find defects"],
          ["Quality Assurance (QA)", "All workers", "Throughout process", "Prevent defects"],
          ["Quality Circles", "Worker groups", "Regular meetings", "Solve root causes"],
          ["TQM", "Entire organisation", "Continuously", "Culture of zero defects"]
        ],
        "caption": "Four quality management approaches compared"
      }
    },
    {
      "id": "enr-t9b-p-cost-quality",
      "type": "paragraph",
      "data": { "text": "Investing in QA and quality circles increases short-run training and meeting costs, but significantly reduces long-run costs of <strong>rework</strong> (fixing faulty items mid-process), <strong>rejection</strong> (scrapping fully made defective goods), and <strong>after-sales costs</strong> (warranty claims, returns, reputation damage). The preventative approach almost always pays for itself." }
    },
    {
      "id": "enr-t9b-callout-brand-apple",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Real World: Apple's Quality Assurance Philosophy",
        "text": "<strong>Apple</strong> invests heavily in QA throughout its entire supply chain. Before an iPhone reaches consumers, components are tested at the supplier level, then again during assembly at Foxconn, and again at Apple distribution centres. Apple's 'drop test', 'scratch test', and water-resistance tests are all QA processes built into production — not end-of-line QC. This is why Apple's defect rates are among the lowest in consumer electronics, supporting its premium pricing."
      }
    },
    {
      "id": "enr-t9b-callout-student-essay",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Relatable: Writing an Essay — QC vs QA",
        "text": "<strong>Quality Control:</strong> Write your entire essay, then read it once at the end and cross out mistakes. Wasteful — you may have built the whole argument on a flawed premise.<br><strong>Quality Assurance:</strong> Check your plan before you start, review the argument after each paragraph, and proofread word-by-word as you go. Any errors are caught early, saving time and producing a stronger result. That's QA in action."
      }
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
};