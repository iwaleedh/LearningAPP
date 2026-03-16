export const note_business_4_18_8 = {
  pdfPath: '/notes/business/business-4-18.pdf',
  blocks: [
    {
      id: 'obj-4-18-8',
      type: 'objective',
      data: { text: 'Understand how global skill shortages impact international competitiveness and location decisions.' }
    },
    {
      id: 'h-skills',
      type: 'heading',
      data: { text: 'Skill Shortages and Competitiveness', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A major constraint on business growth today is the lack of specialized human capital. Skill shortages in industries like STEM, engineering, healthcare, and green-tech directly hinder a firm\'s international competitiveness.' }
    },
    {
      id: 'h-effects',
      type: 'heading',
      data: { text: 'How Shortages Affect Competitiveness', level: 3 }
    },
    {
      id: 'list-effects',
      type: 'list',
      data: { style: 'bullet', items: [
        { text: '<strong>Increased wage costs:</strong> Scarcity of talent drives up salaries as rival firms try to poach qualified workers, eroding cost competitiveness.' },
        { text: '<strong>Stifled innovation:</strong> Lacking R&D engineers or developers slows down product development cycles.' },
        { text: '<strong>Lower productivity:</strong> Less skilled staff implies lower labor productivity and higher defect rates, damaging quality reputations.' }
      ]}
    },
    {
      id: 'h-response',
      type: 'heading',
      data: { text: 'Business Mitigations', level: 3 }
    },
    {
      id: 'p-response',
      type: 'paragraph',
      data: { text: 'To combat this, businesses might utilize heavy internal training programs, offshore units to countries with abundant relevant graduate pipelines (like software engineering in India), or push for automated and capital-intensive production.' }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: { style: 'tip', title: 'Macro Connection', text: 'Governments often intervene to aid businesses suffering from skills shortages by increasing university funding, providing apprenticeships, or easing visa rules for highly skilled foreign workers.' }
    },
    {
      id: 'sum-4-18-8',
      type: 'summary',
      data: { text: 'Global skill shortages degrade a business\'s competitiveness by simultaneously hiking wage costs and restricting its capacity for high-quality production and innovation.' }
    },
    {
      id: 'enr-worked-uktech',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'UK Tech Sector Post-Brexit',
        text: 'UK tech sector post-Brexit: EU immigration restrictions reduced the talent pool for software engineers and data scientists. Average UK tech salary rose 22% between 2021–2023 as firms competed for scarce skills. HSBC, Goldman Sachs and other financial firms moved operations to Frankfurt and Dublin where EU talent could be hired without visa barriers.'
      }
    },
    {
      id: 'enr-worked-germany',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Germany\'s Skilled Workers Shortage',
        text: 'Germany has 700,000 unfilled skilled positions (2024) in engineering, IT and healthcare. The German government responded with a new \'Skilled Immigration Act\' to attract professionals from outside the EU. Shows that skill shortages are a strategic national-level competitiveness issue, not just a business one.'
      }
    },
    {
      id: 'enr-tip-skills',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Skill Shortages and Competitiveness',
        text: 'Skill shortages reduce competitiveness by: raising wage costs, slowing innovation, requiring expensive overseas recruitment. Solutions: invest in training (long-term), immigration reform (political risk), automation (capital cost). Each solution has trade-offs to evaluate.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'A lack of specialized skills globally raises labor costs and caps innovation, forcing firms to offshore or increase automation.',
    cues: [
      { id: 'cue-1', blockId: 'list-effects', prompt: 'How do skill shortages impact a business\'s wage costs?', answer: 'The scarcity of talent means businesses must compete to hire the same individuals, driving up salaries and lowering cost competitiveness.' },
      { id: 'cue-2', blockId: 'list-effects', prompt: 'How do skill shortages impact innovation?', answer: 'Without vital technical staff or R&D engineers, a company\'s capability to develop new products or improve efficiency is blocked.' },
      { id: 'cue-3', blockId: 'p-response', prompt: 'State two ways a business can respond to a domestic skill shortage.', answer: '1) Spend heavily on internal training and apprenticeships.\n2) Offshore the specific department to a country with relevant talent.' },
      { id: 'cue-4', blockId: 'call-tip', prompt: 'How can governments aid businesses facing skill shortages?', answer: 'By investing in education infrastructure or relaxing immigration rules to allow skilled foreign labor into the country.' }
    ]
  },
  evidence: [],
  mentions: []
};