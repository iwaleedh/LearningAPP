export const note_business_1_4_4 = {
  pdfPath: '/notes/business/wbs11-4.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the recruitment and selection process: internal vs external recruitment, job descriptions, person specifications, and selection methods (interviews, psychometric tests, assessment centres). Evaluate the costs and benefits of each approach.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'The Recruitment Process', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<b>Recruitment</b> is the process of identifying that a vacancy exists, attracting suitable applicants, and selecting the most appropriate candidate. It is costly — getting it wrong means re-recruiting, lost productivity, and potential legal risk. The process involves: identifying the need → producing a job description and person specification → advertising → shortlisting → selection → offer and induction.' }
    },
    {
      id: 'h-jd-ps',
      type: 'heading',
      data: { text: 'Job Description and Person Specification', level: 2 }
    },
    {
      id: 'tbl-jd-ps',
      type: 'comparisonTable',
      data: {
        caption: 'Job Description vs Person Specification',
        headers: ['Document', 'Content', 'Purpose'],
        rows: [
          ['Job description', 'Job title, main duties, responsibilities, reporting line, location, hours, pay band', 'Defines what the job involves; used to advertise the role and assess fit'],
          ['Person specification', 'Essential and desirable skills, qualifications, experience, personal attributes', 'Defines the ideal candidate; used to shortlist and compare applicants objectively'],
        ]
      }
    },
    {
      id: 'callout-key-jd',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Distinction',
        text: 'The <b>job description</b> describes the <i>job</i>; the <b>person specification</b> describes the <i>person</i> needed to do that job. Together they form the basis for a fair, objective selection process and reduce the risk of discrimination claims.'
      }
    },
    {
      id: 'h-internal-external',
      type: 'heading',
      data: { text: 'Internal vs External Recruitment', level: 2 }
    },
    {
      id: 'tbl-int-ext',
      type: 'comparisonTable',
      data: {
        caption: 'Internal vs External Recruitment',
        headers: ['Feature', 'Internal', 'External'],
        rows: [
          ['Definition', 'Filling vacancy from existing staff (promotion/transfer)', 'Advertising to candidates outside the business'],
          ['Cost', 'Lower — no agency fees; simpler process', 'Higher — advertising, agency, assessment costs'],
          ['Speed', 'Faster — candidate already vetted', 'Slower — larger pool; longer process'],
          ['New ideas', 'Limited — existing culture maintained', 'Fresh perspectives and skills brought in'],
          ['Morale effect', 'Motivates existing staff (career progression visible)', 'May demotivate if staff expected to be promoted'],
          ['Risk', 'Creates another vacancy to fill further down', 'Unknown candidate — risk of poor fit'],
          ['Best for', 'Leadership roles; retaining knowledge; tight budgets', 'New skills, growth, fresh talent, specialist roles'],
        ]
      }
    },
    {
      id: 'h-selection',
      type: 'heading',
      data: { text: 'Selection Methods', level: 2 }
    },
    {
      id: 'p-selection',
      type: 'paragraph',
      data: { text: 'After shortlisting, businesses use various methods to select the best candidate. Different methods assess different capabilities and carry different costs.' }
    },
    {
      id: 'list-selection',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Interview (face-to-face or panel)</b> — most common method. Allows two-way assessment of fit, communication, and motivation. Risk: subjective bias, poor predictive validity if unstructured.' },
          { text: '<b>Psychometric tests</b> — standardised tests measuring personality, aptitude, or cognitive ability (e.g. verbal reasoning). Objective and comparable; useful for large cohorts. Must be validated and non-discriminatory.' },
          { text: '<b>Assessment centres</b> — candidates complete multiple tasks (group exercises, in-tray exercises, presentations, interviews) over one or two days. Expensive but highly predictive; used for graduate and management roles.' },
          { text: '<b>Work trials / portfolio review</b> — candidate completes real or simulated work tasks. Most directly relevant but time-consuming.' },
          { text: '<b>References</b> — checks from previous employers. Provides background information but references are often unreliable (positive bias).' }
        ]
      }
    },
    {
      id: 'callout-worked-selection',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Choosing a Selection Method',
        text: 'A law firm is recruiting a partner. They need to assess: legal knowledge, judgement, client-facing skills, and cultural fit. A single interview is insufficient. They use: (1) written application + CV to shortlist; (2) psychometric reasoning test to assess analytical ability; (3) panel interview with senior partners; (4) reference checks. This multi-stage approach reduces bias and improves predictive accuracy — worth the higher cost for a role where a bad hire costs hundreds of thousands of pounds.'
      }
    },
    {
      id: 'h-induction',
      type: 'heading',
      data: { text: 'Induction', level: 2 }
    },
    {
      id: 'p-induction',
      type: 'paragraph',
      data: { text: 'Once selected, a new employee goes through <b>induction</b> — an introduction to the business, colleagues, policies, and their role. Effective induction reduces early staff turnover (when it is highest), speeds up competence, and integrates the employee into the culture. Poor induction is a common cause of voluntary early departure.' }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When evaluating recruitment methods, always consider: (1) the nature of the role and required skills, (2) the cost the business can afford, (3) the time available, and (4) the risk of a bad hire. A minimum-wage retail role may justify fast, low-cost internal or external advertising; a senior leadership hire justifies extensive assessment centre processes.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Recruitment = identifying need → job description + person spec → advertising → selection → induction. <b>Internal</b> recruitment is cheaper and faster but limits new ideas. <b>External</b> brings fresh talent but costs more. Selection methods: interviews (common, risks bias), psychometric tests (objective), assessment centres (expensive but valid). Good <b>induction</b> reduces early turnover.' }
    },
    {
      id: 'enr-t4a-h-ext-methods',
      type: 'heading',
      data: { text: 'External Recruitment Methods in Detail', level: 2 }
    },
    {
      id: 'enr-t4a-list-ext-methods',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Online job boards</b> (e.g. Indeed, LinkedIn, Glassdoor) — wide reach at relatively low cost; suitable for a broad range of roles; easy to track applications' },
          { text: '<b>Employee referrals</b> — existing staff recommend a candidate, often with a referral bonus. Produces higher-quality candidates and faster hires because a known employee vouches for the applicant' },
          { text: '<b>Headhunting</b> — a specialist agency approaches high-calibre professionals not actively seeking work. Used for senior or niche roles; expensive (fee typically 20–30% of first-year salary)' },
          { text: '<b>Career fairs</b> — hosted by universities or industry bodies to attract graduates and specialists; effective for large-scale graduate recruitment schemes; requires staff investment of time' },
          { text: '<b>Social media recruitment</b> — platforms like LinkedIn and TikTok allow targeted, cost-effective advertising and are increasingly important for reaching younger candidates' }
        ]
      }
    },
    {
      id: 'enr-t4a-callout-amazon-rec',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Brand Example — Amazon Large-Scale Recruitment',
        text: 'Amazon has hired over one million workers in single years during pandemic-driven demand surges. To recruit at this scale, it uses online job boards for warehouse roles, career fairs for graduate and tech roles, an aggressive <b>employee referral programme</b> (with cash bonuses for successful referrals), and social media campaigns targeting entry-level applicants. This multi-channel approach shows how large businesses combine multiple external recruitment methods to match different volume, speed, and role-type requirements simultaneously.'
      }
    },
    {
      id: 'enr-t4a-callout-student4',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Relatable Example — Getting a Part-Time Job',
        text: 'If you have applied for a part-time job via an online job site (Indeed or a retailer website), you have first-hand experience of external recruitment. The application form was the business screening tool; a subsequent interview was the selection stage. If a friend who already works there told you about the vacancy, that was an <b>employee referral</b>. Grounding exam answers in experiences like these makes responses feel specific and credible.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "Compare recruitment methods using cost-per-hire and time-to-productivity metrics. Examiners expect numerical justification: interviews cost \u00a3200, assessment centres \u00a35,000+, tests \u00a3100. Link method choice to role criticality \u2014 assess centres justified for senior roles; not for mass fast-food recruitment."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Don't recommend assessment centres universally \u2014 they carry high sunk cost per candidate and only recover through low turnover. For high-turnover roles (retail, hospitality) they're financially irrational. Match method to labour market context: tight labour market needs fast, cheap interviews; buyer's market allows luxury screening."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Recruitment process: identify vacancy → job description + person spec → advertise → shortlist → select → induct. Internal: cheap/fast but no new ideas. External: costly/slow but fresh talent. Selection: interviews (subjective risk), psychometric tests (objective), assessment centres (expensive but predictive).',
    cues: [
      { id: 'cue-1', blockId: 'tbl-jd-ps', prompt: 'What is the difference between a job description and a person specification?', answer: 'A job description describes the job itself (duties, responsibilities, pay, hours). A person specification describes the ideal candidate (essential/desirable skills, qualifications, experience, attributes).' },
      { id: 'cue-2', blockId: 'tbl-int-ext', prompt: 'Give TWO advantages and TWO disadvantages of internal recruitment compared to external.', answer: 'Advantages of internal: lower cost; faster; motivates staff with visible career progression. Disadvantages: no new ideas/skills brought in; creates another vacancy lower down the organisation.' },
      { id: 'cue-3', blockId: 'list-selection', prompt: 'What is an assessment centre and when might a business use it?', answer: 'An assessment centre uses multiple selection methods over 1–2 days (group exercises, presentations, in-tray tasks, interviews). It is expensive but highly predictive of job performance. Used for graduate or management roles where bad hires are very costly.' },
      { id: 'cue-4', blockId: 'p-induction', prompt: 'Why is an effective induction programme important for a business?', answer: 'Good induction reduces early staff turnover (which is highest in the first few months), speeds up the new employee reaching full competence, and integrates them into the business culture — reducing recruitment costs overall.' },
      { id: 'cue-5', blockId: 'list-selection', prompt: 'What are the advantages and disadvantages of using interviews as a selection method?', answer: 'Advantages: allows two-way assessment; assesses communication and motivation directly. Disadvantages: can be subjective and biased; unstructured interviews have poor predictive validity and may lead to discrimination.' }
    ]
  },
  evidence: [],
  mentions: []
};
