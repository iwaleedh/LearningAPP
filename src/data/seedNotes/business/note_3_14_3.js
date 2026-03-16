export const note_business_3_14_3 = {
  pdfPath: '/notes/business/wbs13-14.pdf',
  blocks: [
      { id: "obj-1", type: "objective", data: { text: "Analyse the differing objectives of various stakeholder groups and how they can lead to conflict." } },
      { id: "h-1", type: "heading", data: { text: "Differing Objectives", level: 2 } },
      { id: "p-1", type: "paragraph", data: { text: "Because stakeholders have different relationships with a business, their objectives frequently diverge. Understanding these separate motives is crucial for business leaders aiming to navigate complex strategic environments." } },
      { id: "tbl-1", type: "comparisonTable", data: {
        caption: "Summary of Key Stakeholder Objectives",
        headers: ["Stakeholder Group", "Primary Objectives"],
        rows: [
          ["Shareholders", "Maximise profits, high dividends, rising share value"],
          ["Employees", "High wages, job security, good working conditions"],
          ["Customers", "Low prices, high quality, excellent customer service"],
          ["Local Community", "Job creation, low noise/pollution, local investment"],
          ["Government", "Tax revenue, legal compliance, employment levels"]
        ]
      } },
      { id: "h-2", type: "heading", data: { text: "Stakeholder Conflict", level: 2 } },
      { id: "p-2", type: "paragraph", data: { text: "Satisfying one stakeholder group often requires compromising the objectives of another. A classic business challenge is balancing these competing interests." } },
      { id: "c-1", type: "callout", data: { style: "warning", title: "Common Conflicts", text: "<strong>Shareholders vs. Employees:</strong> Shareholders want cost minimization for higher profits; employees want higher wages (which increase costs).\n<strong>Customers vs. Shareholders:</strong> Customers want low prices; shareholders want high margins.\n<strong>Community vs. Shareholders:</strong> Operations (like a 24/7 factory) maximize profits but create noise/pollution for the community." } },
      { id: "h-3", type: "heading", data: { text: "Managing Conflict", level: 3 } },
      { id: "p-3", type: "paragraph", data: { text: "Businesses must prioritise stakeholders based on power and influence. Good communication, negotiation, and compromise (e.g., offering performance bonuses to align employee and shareholder interests) are essential tools for conflict resolution." } },
      { id: "sum-1", type: "summary", data: { text: "Stakeholder objectives naturally conflict, especially regarding financial distribution. Effective management requires prioritizing groups and finding strategic compromises to maintain operational harmony." } },
      { id: "enr-callout-1", type: "callout", data: { style: "worked", title: "Worked Example: Amazon Stakeholder Conflicts", text: "<strong>Shareholders</strong> want maximum profit. <strong>Warehouse workers</strong> want safe conditions and fair pay (2019 strikes over pace targets). <strong>Communities</strong> worry about blighting high streets. <strong>Government</strong> wants tax revenue (Amazon paid £293m UK tax on £23bn revenue in 2023 — a 1.3% effective rate). Each stakeholder has a legitimate but directly conflicting objective, forcing Amazon to make difficult prioritisation decisions." } },
      { id: "enr-callout-2", type: "callout", data: { style: "worked", title: "Everyday Example: A School", text: "<strong>Teachers</strong> want manageable class sizes. <strong>Students</strong> want exciting lessons. <strong>Parents</strong> want good exam results. <strong>Governors</strong> want a balanced budget. All are stakeholders of the same organisation with conflicting objectives — just like a business. The senior leadership team must prioritise and negotiate compromises." } },
      { id: "enr-callout-3", type: "callout", data: { style: "tip", title: "Exam Tip", text: "When answering stakeholder conflict questions: (1) <strong>identify</strong> the conflict, (2) explain <em>why</em> objectives clash, (3) evaluate how the business <em>should</em> prioritise. Context matters: a PLC will prioritise shareholders; a social enterprise will prioritise the community." } }
    ],
  recall: {
      enabled: true,
      ready: true,
      summaryText: "Stakeholders have diverse objectives which often conflict, requiring businesses to negotiate and compromise.",
      cues: [
        { id: "cue-1", blockId: "c-1", prompt: "What is a primary conflict between shareholders and employees?", answer: "Shareholders want to minimize costs for higher profits, while employees want higher wages, which increases costs." },
        { id: "cue-2", blockId: "tbl-1", prompt: "What are the common objectives of the local community?", answer: "Job creation, minimal pollution, and positive local engagement." },
        { id: "cue-3", blockId: "p-3", prompt: "How might a business align management and shareholder objectives?", answer: "By linking executive pay or bonuses to profit targets or share price performance." },
        { id: "cue-4", blockId: "tbl-1", prompt: "What is the typical objective of a customer?", answer: "High-quality products at the lowest possible prices with good service." }
      ]
    },
  evidence: [],
  mentions: []
};
