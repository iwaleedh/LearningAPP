export const note_business_3_16_4 = {
  pdfPath: '/notes/business/wbs13-16.pdf',
  blocks: [
    { type: 'objective', data: { text: 'Understand how businesses identify risks and assess their potential impact and probability.' } },
    { type: 'heading', data: { text: 'Risk Management Framework', level: 2 } },
    { type: 'paragraph', data: { text: 'Business change naturally introduces risk. Risk management involves systematically identifying, assessing, and prioritising risks, followed by coordinated efforts to minimise, monitor, and control the probability or impact of unfortunate events.' } },
    { type: 'heading', data: { text: 'Step 1: Risk Identification', level: 3 } },
    { type: 'paragraph', data: { text: 'This involves forecasting the types of risks a business may face. These can be categorised into:' } },
    { type: 'list', data: { style: 'bullet', items: [
      { text: '<b>Strategic Risks:</b> Changes in consumer demand, new competitor technologies.' },
      { text: '<b>Operational Risks:</b> Supply chain failure, IT system breakdowns, staff strikes.' },
      { text: '<b>Financial Risks:</b> Exchange rate fluctuations, interest rate hikes, non-payment by debtors.' },
      { text: '<b>Compliance/Legal Risks:</b> New legislation, health and safety breaches, data protection (GDPR) fines.' }
    ]}},
    { type: 'heading', data: { text: 'Step 2: Risk Assessment (Mapping)', level: 3 } },
    { type: 'paragraph', data: { text: 'Once identified, businesses must evaluate risks based on two primary dimensions: 1) The Probability (likelihood) of the risk occurring, and 2) The Impact (severity) if it does occur.' } },
    { type: 'callout', data: { style: 'key', title: 'The Risk Matrix', text: 'A risk matrix plots probability against impact. Risks categorised as High Probability and High Impact demand immediate strategic focus and mitigation planning.' } },
    { type: 'comparisonTable', data: {
      caption: 'Risk Response Types',
      headers: ['Response', 'Meaning', 'Example'],
      rows: [
        ['Avoidance', 'Eliminating the cause of the risk entirely', 'Not entering a highly volatile foreign market'],
        ['Reduction (Mitigation)', 'Taking steps to lower impact or probability', 'Installing backup servers to reduce IT failure impact'],
        ['Sharing (Transfer)', 'Allocating risk to a third party', 'Purchasing comprehensive business insurance'],
        ['Acceptance', 'Acknowledging the risk and budgeting for it', 'Setting aside cash reserves for minor legal disputes']
      ]
    }},
    { type: 'summary', data: { text: 'Risk identification and assessment are crucial components of change management. By mapping risks by probability and impact, businesses can deploy tailored responses—avoiding, mitigating, sharing, or accepting them.' } },
    { id: 'enr-svg-risk-matrix', type: 'svg', data: { caption: 'Risk Matrix: Probability vs Impact', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"><rect width="500" height="400" fill="#0f172a" rx="6"/><text x="250" y="24" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#1e293b">Risk Matrix</text><rect x="70" y="38" width="207" height="150" fill="#78350f"/><rect x="277" y="38" width="207" height="150" fill="#3d1212"/><rect x="70" y="188" width="207" height="150" fill="#0a2e1a"/><rect x="277" y="188" width="207" height="150" fill="#44370a"/><rect x="70" y="38" width="414" height="300" fill="none" stroke="#94a3b8" stroke-width="2"/><line x1="277" y1="38" x2="277" y2="338" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="70" y1="188" x2="484" y2="188" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3"/><text x="173" y="103" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#92400e">MITIGATE</text><text x="173" y="119" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#92400e">(reduce likelihood)</text><text x="381" y="103" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#b91c1c">AVOID</text><text x="381" y="119" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#b91c1c">major contingency plan</text><text x="173" y="253" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#166534">MONITOR</text><text x="173" y="269" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#166534">low priority</text><text x="381" y="253" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#92400e">TRANSFER</text><text x="381" y="269" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#92400e">(insurance)</text><text x="18" y="191" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#475569" transform="rotate(-90,18,191)">Impact (Low → High)</text><text x="277" y="388" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#475569">Likelihood (Low → High)</text><text x="68" y="346" text-anchor="end" font-family="Inter,sans-serif" font-size="9" fill="#94a3b8">Low</text><text x="68" y="44" text-anchor="end" font-family="Inter,sans-serif" font-size="9" fill="#94a3b8">High</text><text x="70" y="360" text-anchor="start" font-family="Inter,sans-serif" font-size="9" fill="#94a3b8">Low</text><text x="484" y="360" text-anchor="end" font-family="Inter,sans-serif" font-size="9" fill="#94a3b8">High</text><circle cx="420" cy="78" r="8" fill="#ef4444" stroke="white" stroke-width="2"/><text x="420" y="64" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#1e293b">Power cut</text><circle cx="155" cy="90" r="8" fill="#f59e0b" stroke="white" stroke-width="2"/><text x="155" y="76" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#1e293b">Key employee leaves</text><circle cx="400" cy="300" r="8" fill="#f59e0b" stroke="white" stroke-width="2"/><text x="400" y="320" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#1e293b">Small supply delay</text><circle cx="120" cy="295" r="8" fill="#22c55e" stroke="white" stroke-width="2"/><text x="120" y="315" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#1e293b">Minor IT glitch</text></svg>' } },
    { id: 'enr-callout-shell', type: 'callout', data: { style: 'worked', title: 'Shell\'s Scenario Planning (1970s)', text: 'Shell planners imagined a scenario where OPEC cut oil supply. When the 1973 oil shock happened, Shell was the only major oil company with a plan. Shell\'s market share rose while competitors scrambled. Scenario planning saved the company.' } },
    { id: 'enr-callout-exam-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Risk Responses', text: 'Risk assessment = Likelihood × Impact. Four responses: Accept (low risk), Transfer (insurance), Mitigate (reduce likelihood), Avoid (eliminate the activity). Examiners expect you to identify the response AND evaluate its cost vs benefit.' } }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Risk management involves identifying strategic, operational, financial, and compliance risks, and assessing them via probability and impact.',
    cues: [
      { id: 'c1', prompt: 'What are the two key dimensions used in risk assessment?', answer: 'Probability (likelihood of occurring) and Impact (severity if it occurs).' },
      { id: 'c2', prompt: 'Provide an example of an operational risk.', answer: 'Supply chain failure, IT breakdowns, or employee strikes.' },
      { id: 'c3', prompt: 'What does risk transfer (sharing) involve?', answer: 'Allocating the financial burden or responsibility to a third party, such as buying insurance.' },
      { id: 'c4', prompt: 'What is risk mitigation?', answer: 'Taking proactive steps to reduce the likelihood of a risk occurring or lowering its impact.' }
    ]
  },
  evidence: [],
  mentions: []
};