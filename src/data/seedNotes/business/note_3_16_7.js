export const note_business_3_16_7 = {
  pdfPath: '/notes/business/wbs13-16.pdf',
  blocks: [
    { type: 'objective', data: { text: 'Analyse specific contingency risks including IT failures, staffing issues, and general disruptions, and evaluate mitigation strategies.' } },
    { type: 'heading', data: { text: 'Contingency Risks', level: 2 } },
    { type: 'paragraph', data: { text: 'A contingency is a future event or circumstance which is possible but cannot be predicted with certainty. Businesses must draft contingency plans for highly probable operational risks that severely threaten daily functions.' } },
    { type: 'heading', data: { text: '1. IT Risk', level: 3 } },
    { type: 'paragraph', data: { text: 'Modern businesses are completely reliant on data and digital infrastructure.' } },
    { type: 'list', data: { style: 'bullet', items: [
      { text: '<b>Nature of Risk:</b> Cyber-attacks (ransomware), server crashes, data breaches, software bugs.' },
      { text: '<b>Impact:</b> Immediate halt of operations, massive GDPR fines, loss of customer trust.' },
      { text: '<b>Contingency Plan:</b> Cloud backups, secondary server sites, regular cybersecurity drills, and robust firewall/encryption investments.' }
    ]}},
    { type: 'heading', data: { text: '2. Staffing Risk', level: 3 } },
    { type: 'paragraph', data: { text: 'Human capital is both the strength and vulnerability of a firm.' } },
    { type: 'list', data: { style: 'bullet', items: [
      { text: '<b>Nature of Risk:</b> Sudden mass illness (pandemics), industrial action (strikes), severe skill shortages, sudden loss of key personnel.' },
      { text: '<b>Impact:</b> Inability to produce goods, diminished service quality, delayed project delivery.' },
      { text: '<b>Contingency Plan:</b> Cross-training staff so multiple people can perform crucial roles, maintaining strong union relations, utilizing agency/temporary workers.' }
    ]}},
    { type: 'heading', data: { text: '3. Physical and Supply Chain Disruption', level: 3 } },
    { type: 'paragraph', data: { text: 'Geopolitical and environmental factors can break physical operations.' } },
    { type: 'list', data: { style: 'bullet', items: [
      { text: '<b>Nature of Risk:</b> Natural disasters (floods, fires), political instability (wars, blockades), failure of a key supplier.' },
      { text: '<b>Impact:</b> Stockouts, inability to manufacture, physical loss of capital assets.' },
      { text: '<b>Contingency Plan:</b> Dual-sourcing (having multiple suppliers in different countries), holding buffer stock, establishing alternative manufacturing locations.' }
    ]}},
    { type: 'callout', data: { style: 'tip', title: 'Contingency vs BCP', text: 'Remember: A contingency plan deals with *what to do if one specific event happens* (e.g. IT goes down). A BCP is the overarching strategy of *how the business survives no matter what happens*.' } },
    { type: 'summary', data: { text: 'Businesses face persistent contingency risks from IT breakdowns, staffing crises, and physical supply chain disruptions. Effective mitigation requires backup systems, flexible multi-skilled staff, and diversified supply networks.' } },
    { id: 'enr-worked-tsb', type: 'callout', data: { style: 'worked', title: 'TSB Bank IT Migration Failure (2018)', text: 'TSB\'s IT system migration to a new platform went catastrophically wrong. 1.9 million customers were locked out for weeks. TSB lost 80,000 customers, the CEO resigned, and total costs reached £366m. Root cause: inadequate contingency planning for IT migration failure — no tested rollback plan existed.' } },
    { id: 'enr-worked-crowdstrike', type: 'callout', data: { style: 'worked', title: 'CrowdStrike Outage (July 2024)', text: 'A software update error crashed 8.5 million Windows devices worldwide. Airlines, hospitals, and banks were all affected. Microsoft reported $10bn in lost transactions. The event highlighted that even cloud providers need contingency plans for software failures.' } },
    { id: 'enr-tip-cycle', type: 'callout', data: { style: 'tip', title: 'Exam Tip: The Same Planning Cycle', text: 'IT contingency, staffing contingency, supply chain disruption — all require the SAME planning cycle: identify, assess, plan, test, review. The difference is the trigger event. Examiners test whether students can apply contingency planning to a SPECIFIC business scenario.' } }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Key contingency risks encompass IT failure, staffing loss, and supply chain breakdowns; mitigated via backups, staff cross-training, and supplier diversification.',
    cues: [
      { id: 'c1', prompt: 'What is an IT contingency risk and how is it mitigated?', answer: 'Risk like ransomware or data breaches; mitigated by cloud backups and cybersecurity drills.' },
      { id: 'c2', prompt: 'How can a business mitigate the risk of sudden staff shortages?', answer: 'By cross-training employees for multiple roles and utilizing agency workers.' },
      { id: 'c3', prompt: 'What is "dual-sourcing" and why is it used?', answer: 'Using multiple suppliers from different regions to mitigate the risk of one supplier failing.' },
      { id: 'c4', prompt: 'What is the main impact of an IT data breach?', answer: 'Immediate halt of operations, severe regulatory fines, and long-term loss of consumer trust.' }
    ]
  },
  evidence: [],
  mentions: []
};