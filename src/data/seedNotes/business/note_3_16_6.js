export const note_business_3_16_6 = {
  pdfPath: '/notes/business/wbs13-16.pdf',
  blocks: [
    { type: 'objective', data: { text: 'Evaluate the importance of succession planning in ensuring smooth transitions during leadership change.' } },
    { type: 'heading', data: { text: 'What is Succession Planning?', level: 2 } },
    { type: 'paragraph', data: { text: 'Succession planning is the process of identifying and developing new leaders who can replace old leaders when they leave, retire, or unexpectedly pass away. It is a critical risk mitigation strategy regarding human resources at the executive level.' } },
    { type: 'callout', data: { style: 'key', title: 'Why is it necessary?', text: 'The sudden departure of a CEO or key director can plunge a business into chaos, leading to a drop in share price, strategic paralysis, and a loss of stakeholder confidence. Succession planning creates a pipeline of ready talent.' } },
    { type: 'heading', data: { text: 'The Succession Planning Process', level: 3 } },
    { type: 'list', data: { style: 'numbered', items: [
      { text: 'Identify key positions that are critical to the company\'s survival.' },
      { text: 'Identify potential internal candidates who exhibit the correct culture, skills, and aptitude.' },
      { text: 'Develop these candidates through mentoring, training, and exposure to high-level strategic decision-making.' },
      { text: 'Continuously assess and adapt the candidate pool as the business\'s strategic needs change.' }
    ]}},
    { type: 'comparisonTable', data: {
      caption: 'Internal vs External Succession',
      headers: ['Approach', 'Advantages', 'Disadvantages'],
      rows: [
        ['Internal Promotion', 'Maintains corporate culture, highly motivating for staff, low onboarding time', 'May lack fresh ideas, can cause resentment among passed-over peers'],
        ['External Recruitment', 'Brings fresh perspectives, useful for turnaround situations', 'High onboarding time, high risk of cultural clash, expensive hiring process']
      ]
    }},
    { type: 'callout', data: { style: 'warning', title: 'Family Businesses', text: 'Succession planning is notoriously difficult in family businesses (e.g. passing to a son or daughter), as emotion and entitlement can cloud rational assessment of skills, heavily risking the business\'s future.' } },
    { type: 'summary', data: { text: 'Succession planning ensures strategic continuity by proactively preparing future leaders. Whether identifying internal talent or planning external hires, it protects the firm from the destabilizing shock of a sudden leadership void.' } },
    { id: 'enr-worked-apple', type: 'callout', data: { style: 'worked', title: "Apple's Succession: Steve Jobs → Tim Cook", text: "When Steve Jobs died in 2011, Tim Cook was already COO and had run Apple's operations for 13 years — clearly groomed as successor. Apple's share price hit a $400bn valuation in the year following Jobs' death, evidencing that the market trusted the succession plan. A contrast: when no plan exists, shares typically fall 20–30% on an unexpected CEO departure." } },
    { id: 'enr-worked-school', type: 'callout', data: { style: 'worked', title: 'Everyday Example: School Leadership Gap', text: 'A school fails to plan for the head teacher being ill for a month. No deputy was trained in finance decisions. Budget approval stalls, staff morale falls. Succession planning applies even in small organisations — anyone with unique skills or knowledge creates key-person dependency.' } },
    { id: 'enr-tip-keydep', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Key-Person Dependency', text: 'Succession planning reduces key-person dependency risk. Small businesses are the most vulnerable — if the founder/CEO leaves, there may be no-one who knows the systems, relationships, or strategy. This is a significant risk for investors in small firms.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Succession planning identifies high-potential talent and develops them into future leaders. Key elements: (1) Identify critical roles; (2) Map internal talent pipelines; (3) Create development plans; (4) Cross-train to reduce key person dependencies; (5) Communicate openly (some candidates must know they're being groomed). Examiners reward proactive candidates who recognize succession as RETENTION tool: showing high-potential staff a path to leadership."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Assuming external hire for leadership is always better. External leadership brings fresh ideas BUT faces learning curves (culture, relationships, context). Loss of internal continuity can destabilize teams. Examiners expect balanced view: internal succession is cheaper, faster, and retains culture; external hire is useful for major transformation. Choose based on STRATEGY, not default."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Succession planning prepares future leaders to replace departing ones, ensuring operational stability and maintaining investor confidence.',
    cues: [
      { id: 'c1', prompt: 'What is succession planning?', answer: 'The process of identifying and developing new leaders to replace old leaders when they depart.' },
      { id: 'c2', prompt: 'Why is sudden CEO departure a high risk?', answer: 'It can cause strategic paralysis, panic among investors, and a drop in share prices.' },
      { id: 'c3', prompt: 'What is a major benefit of grooming an internal successor?', answer: 'They already understand the corporate culture, reducing onboarding time and preserving stability.' },
      { id: 'c4', prompt: 'Why might external succession be preferred during a crisis?', answer: 'An external hire brings fresh perspectives and is unburdened by past internal politics, making drastic changes easier.' }
    ]
  },
  evidence: [],
  mentions: []
};