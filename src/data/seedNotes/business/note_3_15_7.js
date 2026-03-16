export const note_business_3_15_7 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Evaluate human resource strategies designed to enhance labour productivity and improve staff retention.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Financial Strategies', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'Firms can manipulate pay structures to incentivize greater output and loyalty. Financial methods appeal to the physiological and security needs of employees.' } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '\**Performance-related pay (PRP):\** Bonuses tied to meeting specific targets or appraisals.' },
      { text: '\**Piece-rate systems:\** Pay linked directly to the volume of output produced.' },
      { text: '\**Profit sharing & Share ownership:\** Gives employees a vested financial interest in the overall success of the company, boosting retention.' },
      { text: '\**Fringe benefits:\** Perks such as company cars, health insurance, or gym memberships.' }
    ] } },
    { id: 'h-2', type: 'heading', data: { text: 'Non-Financial Strategies', level: 2 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'Modern theorists (such as Herzberg and Maslow) emphasize that non-financial rewards are often more effective at driving long-term motivation and retention than purely financial incentives.' } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [
      { text: '\**Job Enlargement:\** Increasing the scope of a job by adding more tasks of a similar complexity level (reduces boredom).' },
      { text: '\**Job Enrichment:\** Giving employees tasks that require higher skill and responsibility, providing opportunities for psychological growth.' },
      { text: '\**Empowerment & Delegation:\** Allowing employees to make their own decisions regarding their work, building trust.' },
      { text: '\**Flexible working:\** Offering remote work, flexitime, or compressed hours to improve work-life balance.' }
    ] } },
    { id: 'tbl-1', type: 'comparisonTable', data: {
      caption: 'Financial vs Non-Financial HR Strategies',
      headers: ['Approach', 'Advantages', 'Disadvantages'],
      rows: [
        ['Financial Methods', 'Immediate impact, clear direct incentives', 'Expensive, impact may wear off over time, can breed resentment'],
        ['Non-Financial Methods', 'Long-lasting motivation, helps meet higher-level needs', 'Takes time to implement, requires trust and good management']
      ]
    } },
    { id: 'call-1', type: 'callout', data: { style: 'warning', title: 'Evaluation Point', text: 'There is no "one-size-fits-all" strategy. The best HR approach depends on the culture of the organisation, the skill level of the workforce, and the company\'s financial resources.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Improving productivity and retention requires a balanced mix of financial incentives (such as PRP and profit sharing) and non-financial strategies (such as empowerment and flexible working) tailored to the specific needs of the workforce.' } },
    {
      id: 'enr-svg-hr-pyramid',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 360"><rect width="500" height="360" fill="#f8fafc"/><polygon points="250,40 30,300 470,300" fill="none" stroke="#e5e7eb" stroke-width="2"/><polygon points="250,40 130,183 370,183" fill="#ede9fe" stroke="#8b5cf6" stroke-width="1.5"/><polygon points="130,183 370,183 420,263 80,263" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/><polygon points="80,263 420,263 470,300 30,300" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/><text x="250" y="125" text-anchor="middle" font-size="10" fill="#5b21b6" font-family="sans-serif" font-weight="bold">EMPOWERMENT</text><text x="250" y="140" text-anchor="middle" font-size="9" fill="#5b21b6" font-family="sans-serif">Autonomy, Purpose, Recognition</text><text x="250" y="230" text-anchor="middle" font-size="10" fill="#1d4ed8" font-family="sans-serif" font-weight="bold">ENGAGEMENT</text><text x="250" y="245" text-anchor="middle" font-size="9" fill="#1d4ed8" font-family="sans-serif">Training, Development &amp; Progression</text><text x="250" y="282" text-anchor="middle" font-size="10" fill="#065f46" font-family="sans-serif" font-weight="bold">FOUNDATION</text><text x="250" y="297" text-anchor="middle" font-size="9" fill="#065f46" font-family="sans-serif">Fair Pay &amp; Conditions (Herzberg Hygiene)</text><text x="250" y="330" text-anchor="middle" font-size="10" fill="#6b7280" font-family="sans-serif">Maslow: Safety → Esteem → Self-Actualisation</text></svg>`,
        caption: 'HR strategy pyramid: build from foundation (fair pay) → engagement (development) → empowerment (autonomy). Aligns with Maslow and Herzberg.'
      }
    },
    {
      id: 'enr-callout-google-hr',
      type: 'callout',
      data: {
        style: 'worked',
        title: "Google's HR strategy — all three pyramid levels",
        text: "Google: (1) Foundation — base salary above market rate, comprehensive health and pension benefits. (2) Engagement — 20% innovation time, internal mobility programme, career development funding. (3) Empowerment — OKR framework giving engineers measurable purpose and agency, peer recognition programmes. Result: consistently top-rated employer on Glassdoor, low staff turnover, multiple products born from employee initiatives (Gmail, Maps)."
      }
    },
    {
      id: 'enr-callout-tip-hr-context',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip: always contextualise HR strategy',
        text: "For 20-mark questions: 'The effectiveness of any HR strategy depends on workforce context — a factory worker may value pay and job security over autonomy; a software engineer may value creative freedom and progression over base pay.' Context-dependent evaluation earns Level 3. Avoid one-size-fits-all answers."
      }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'How does profit sharing help improve retention?', answer: 'It gives employees a vested financial interest in the company\'s long-term success, reducing the likelihood of them leaving.' },
      { id: 'cue-2', blockId: 'list-2', prompt: 'What is the difference between job enlargement and job enrichment?', answer: 'Job enlargement adds more tasks of a similar level to reduce boredom, whereas job enrichment adds more complex tasks with greater responsibility.' },
      { id: 'cue-3', blockId: 'list-2', prompt: 'Give an example of a flexible working arrangement.', answer: 'Remote working, flexitime, or compressed working hours.' },
      { id: 'cue-4', blockId: 'tbl-1', prompt: 'What is a drawback of relying solely on financial methods for motivation?', answer: 'They are expensive, their motivational impact may be short-lived, and they do not fulfil higher-level psychological needs.' }
    ],
    summaryText: 'HR strategies blend financial (PRP, profit sharing) and non-financial (job enrichment, empowerment) methods to boost productivity and lower turnover.'
  }
};