export const note_business_1_4_5 = {
  pdfPath: '/notes/business/wbs11-4.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and evaluate the different <b>training methods</b> available to businesses — on-the-job and off-the-job — and assess the costs and benefits of investing in employee training.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Why Training Matters', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<b>Training</b> improves employees\' knowledge, skills, and competence. It is a core element of Soft HRM — treating staff as an asset. Well-trained staff produce higher-quality output, need less supervision, and are more adaptable to change. However, training is costly (time, money) and the business risks losing trained staff to competitors (<b>poaching risk</b>). The decision to train must weigh these costs against expected benefits.' }
    },
    {
      id: 'h-categories',
      type: 'heading',
      data: { text: 'Two Main Categories of Training', level: 2 }
    },
    {
      id: 'tbl-on-off',
      type: 'comparisonTable',
      data: {
        caption: 'On-the-Job vs Off-the-Job Training',
        headers: ['Feature', 'On-the-Job', 'Off-the-Job'],
        rows: [
          ['Definition', 'Training carried out at the workplace during normal work', 'Training carried out away from normal work duties'],
          ['Examples', 'Induction, mentoring, job rotation, shadowing, coaching', 'College/university courses, external CPD courses, online learning, apprenticeships'],
          ['Cost', 'Generally lower — no travel or course fees', 'Higher — fees, travel, loss of productivity while away'],
          ['Disruption', 'Lower — work continues alongside training', 'Higher — employee is absent from productive work'],
          ['Relevance', 'Highly job-specific; directly applicable', 'May be more theoretical; needs application back to the job'],
          ['Quality risk', 'Depends on trainer\'s skill; may embed bad habits', 'External experts deliver best-practice, standardised content'],
          ['Best for', 'Practical skills; role-specific procedures; induction', 'Professional qualifications; new knowledge; leadership skills'],
        ]
      }
    },
    {
      id: 'h-on-job',
      type: 'heading',
      data: { text: 'On-the-Job Training Methods', level: 2 }
    },
    {
      id: 'list-on-job',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Induction training</b> — introduces new employees to the company, colleagues, policies, health &amp; safety, and their role. Reduces early turnover.' },
          { text: '<b>Mentoring</b> — experienced colleague guides a less experienced one over time. Builds skills and confidence; good for organisational knowledge. Mentor\'s opportunity cost must be considered.' },
          { text: '<b>Coaching</b> — structured goal-oriented sessions to improve specific skills. More focused than mentoring; often used for performance improvement or leadership development.' },
          { text: '<b>Job rotation</b> — employee moves through different roles/departments. Builds multi-skilling, reduces boredom, and improves understanding of the whole organisation.' },
          { text: '<b>Job shadowing</b> — employee observes a more experienced colleague performing their role. Low cost; good for familiarisation but passive — limited active learning.' },
          { text: '<b>Apprenticeships</b> — structured multi-year programme combining on-the-job experience with formal learning (part-time college/training provider). Government-subsidised in many countries.' }
        ]
      }
    },
    {
      id: 'h-off-job',
      type: 'heading',
      data: { text: 'Off-the-Job Training Methods', level: 2 }
    },
    {
      id: 'list-off-job',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>College / university courses</b> — formal qualifications (e.g. professional accountancy exams, degrees). Provides recognised credentials for career development.' },
          { text: '<b>External CPD workshops and seminars</b> — short courses run by specialist providers. Updates knowledge fast; networking benefit.' },
          { text: '<b>E-learning / online training</b> — flexible self-paced learning. Low marginal cost for large numbers; easy to update. Loses face-to-face interaction and may reduce engagement.' },
          { text: '<b>Conference attendance</b> — exposure to industry developments, best practices, and networking. Expensive; hard to measure return.' }
        ]
      }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Training Investment Decision',
        text: 'A supermarket chain has 5,000 staff. It decides to train 200 supervisors in people management and food safety. It could:<br><b>Option A (Off-the-job):</b> Send each to a 2-day external course at £400 each = £80,000 total. Disruption: 200 absences over 2 days each.<br><b>Option B (On-the-job):</b> Develop an internal coaching programme delivered by 10 senior managers over 4 weeks. Cost: manager time + materials = ~£30,000. No absence but 10 managers diverted.<br>Option B is cheaper and more tailored; Option A ensures external best practice and a recognised certificate. Most large supermarkets use a blended approach.'
      }
    },
    {
      id: 'h-eval',
      type: 'heading',
      data: { text: 'Costs vs Benefits of Training', level: 2 }
    },
    {
      id: 'list-eval',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Benefits:</b> Higher productivity and output quality; lower supervision needed; greater flexibility (multi-skilled); improved staff motivation and retention; better customer service' },
          { text: '<b>Costs:</b> Direct cost (fees, materials, trainer time); indirect cost (lost output while training); <b>poaching risk</b> — competitor steals trained employees (free-rider problem in labour markets)' },
          { text: '<b>Evaluation:</b> Training ROI depends on how long trained staff stay. A business should consider: length of employment contracts, non-compete clauses, and whether qualifications are transferable or firm-specific.' }
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The poaching risk argument is a strong evaluative point: if trained staff leave for better-paid jobs at competitors, the training investment is lost. This is why some business argue for firm-specific training rather than transferable qualifications — it reduces the risk that the employee can immediately apply skills elsewhere. Counter: workers value transferable credentials, so offering them is itself a motivation and retention tool.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '<b>On-the-job training</b> (induction, mentoring, coaching, rotation, shadowing) is cheaper and directly relevant but depends on the trainer\'s skill. <b>Off-the-job training</b> (courses, e-learning, conferences) provides external expertise and recognised qualifications but is more costly and disruptive. Investing in training improves productivity, quality, flexibility, and retention — but carries poaching risk. The best approach blends both methods aligned to business needs.' }
    },
    {
      id: 'enr-t4a-h-leadership',
      type: 'heading',
      data: { text: 'Leadership vs Management', level: 2 }
    },
    {
      id: 'enr-t4a-p-leadership',
      type: 'paragraph',
      data: { text: '<b>Leadership</b> involves setting a vision and inspiring others to achieve it — it is forward-looking and concerned with people and motivation. <b>Management</b> involves organising resources, processes, and day-to-day operations to deliver results — it is concerned with systems and efficiency. Leaders influence; managers control. Leaders focus on the long term and encourage creativity; managers focus on short-term goals and productivity. Effective organisations need both: leaders who provide direction and managers who execute it.' }
    },
    {
      id: 'enr-t4a-tbl-leadership',
      type: 'comparisonTable',
      data: {
        caption: 'Four Leadership Styles',
        headers: ['Style', 'Description', 'Best Used When', 'Limitation'],
        rows: [
          ['Autocratic', 'Leader decides alone; tells staff what to do; tight control', 'Crisis; inexperienced staff; fast decision needed', 'Demotivates staff; stifles creativity; high turnover risk'],
          ['Democratic', 'Leader consults staff and involves them in decisions', 'Creative or skilled teams; complex decisions needing diverse input', 'Slow process; can be indecisive; inappropriate in emergencies'],
          ['Paternalistic', 'Leader consults but ultimately decides unilaterally; prioritises staff welfare', 'Inexperienced or less educated teams needing guidance', 'Can be patronising; limits autonomy; staff may not develop independence'],
          ['Laissez-faire', 'Leader delegates fully; staff are self-directed with minimal supervision', 'Highly skilled, experienced, self-motivated teams (e.g. R&amp;D, creative roles)', 'Risk of no direction; poor performers go unmanaged; potential chaos']
        ]
      }
    },
    {
      id: 'enr-t4a-callout-ryanair-lead',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Brand Example — Ryanair Autocratic Leadership',
        text: 'Michael O&#39;Leary, Ryanair&#39;s long-serving CEO, is a widely cited example of <b>autocratic leadership</b>. He makes strategic decisions quickly with little internal consultation — turning Ryanair into Europe&#39;s largest airline through relentless cost-cutting and aggressive pricing. While effective in a cost-leadership business, this style triggered prolonged industrial disputes with pilots and cabin crew, high staff turnover, and a reputation for low morale. It illustrates the core trade-off: autocratic leadership may maximise efficiency but can seriously undermine motivation and retention.'
      }
    },
    {
      id: 'enr-t4a-callout-student5',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Relatable Example — School Prefect System',
        text: 'Leadership styles appear in school. A head student who consults prefects and the student council before making decisions is acting <b>democratically</b>. One who simply assigns tasks without discussion is acting <b>autocratically</b>. A form tutor who gives sixth-formers complete freedom to manage their own timetable is applying a <b>laissez-faire</b> approach. The same spectrum of leadership styles exists in every school and workplace — and the best leaders know which to use in which situation.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "Map training choice to business need: induction (on-the-job), technical skills (off-the-job classroom), management (mixed). Show ROI calculation \u2014 training cost vs productivity gain vs likelihood of staff leaving before payback. Edexcel expects you to weigh immediate production loss (off-the-job) against long-term capability gains."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Don't ignore opportunity cost of off-the-job training \u2014 production loss while staff attend courses, trainer cost, venue hire. On-the-job looks cheaper but may embed poor practices. Show you've calculated total cost-of-ownership: a \u00a32k course is actually \u00a32k + (output loss during training) + (trainer time)."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'On-the-job: induction, mentoring, coaching, job rotation, shadowing — cheap and relevant but quality depends on trainer. Off-the-job: courses, e-learning, CPD — expert knowledge/qualifications but costly and disruptive. Training benefits: productivity, quality, flexibility, retention. Risk: poaching by competitors.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-on-off', prompt: 'Give TWO advantages and TWO disadvantages of on-the-job training compared to off-the-job.', answer: 'Advantages: lower cost (no fees/travel); less disruption to work. Disadvantages: depends on trainer\'s skill — may embed bad habits; training may be too informal and lack structure compared to external expert delivery.' },
      { id: 'cue-2', blockId: 'list-on-job', prompt: 'What is job rotation and why is it valuable for a business?', answer: 'Job rotation moves employees through different roles or departments. It builds multi-skilling (functional flexibility), reduces monotony and absenteeism, and gives employees a broader understanding of the organisation — increasing adaptability.' },
      { id: 'cue-3', blockId: 'list-on-job', prompt: 'Distinguish between mentoring and coaching.', answer: 'Mentoring = long-term relationship where an experienced colleague guides a less experienced one broadly. Coaching = structured, goal-oriented sessions targeting specific skill improvements. Coaching is more focused; mentoring is broader development.' },
      { id: 'cue-4', blockId: 'list-eval', prompt: 'What is the "poaching risk" in training and how does it affect a business\'s decision?', answer: 'Poaching risk = a business invests in training an employee who then leaves for a better-paid role at a competitor. This means the training cost is lost and the competitor benefits. It creates a free-rider problem and may cause firms to under-invest in training.' },
      { id: 'cue-5', blockId: 'h-eval', prompt: 'List FOUR benefits of investing in training for a business.', answer: '1. Higher productivity and quality of output. 2. Lower supervision costs (skilled staff need less oversight). 3. Greater workforce flexibility through multi-skilling. 4. Improved staff motivation and lower turnover (employees value development opportunities).' }
    ]
  },
  evidence: [],
  mentions: []
};
