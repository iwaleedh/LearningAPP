export const note_business_1_4_9 = {
  pdfPath: '/notes/business/wbs11-4.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the range of <b>financial motivation methods</b> available to businesses — time-rate, piece-rate, performance-related pay, bonus, commission, profit-sharing, and fringe benefits — and evaluate their effectiveness in motivating employees.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Financial vs Non-Financial Motivation', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<b>Financial motivation methods</b> use money (or monetary value) to incentivise workers. They are most closely aligned with <b>Taylor\'s</b> view that workers are primarily motivated by pay, and they address Maslow\'s lower-level needs (physiological and safety). However, Herzberg argues that pay is a <b>hygiene factor</b> — it prevents dissatisfaction but does not create lasting motivation. This creates an important evaluative tension in the topic.' }
    },
    {
      id: 'h-time-rate',
      type: 'heading',
      data: { text: 'Time-Rate Pay', level: 3 }
    },
    {
      id: 'p-time-rate',
      type: 'paragraph',
      data: { text: '<b>Time-rate</b> (or salary) pays workers a set amount per hour worked, or an annual salary regardless of output. It is the most common method.' }
    },
    {
      id: 'list-time-rate',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantages:</b> Simple to administer; predictable cost for business; predictable income for worker; suits roles where output is hard to measure (e.g. teacher, nurse)' },
          { text: '<b>Disadvantages:</b> No direct link between effort and reward — workers paid the same regardless of productivity; can encourage minimum effort (moral hazard)' }
        ]
      }
    },
    {
      id: 'h-piece-rate',
      type: 'heading',
      data: { text: 'Piece-Rate Pay', level: 3 }
    },
    {
      id: 'p-piece-rate',
      type: 'paragraph',
      data: { text: '<b>Piece-rate</b> pays workers a fixed sum for each unit produced. Directly links pay to output — consistent with Taylor\'s Scientific Management.' }
    },
    {
      id: 'list-piece-rate',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantages:</b> Strong financial incentive to increase output; variable cost for business (only pay for output produced)' },
          { text: '<b>Disadvantages:</b> Quality may be sacrificed for quantity; workers have insecure income (bad if demand is variable); not suitable where work speed cannot be controlled by the individual; can be stressful' }
        ]
      }
    },
    {
      id: 'h-prp',
      type: 'heading',
      data: { text: 'Performance-Related Pay (PRP)', level: 3 }
    },
    {
      id: 'p-prp',
      type: 'paragraph',
      data: { text: '<b>Performance-Related Pay (PRP)</b> links a pay rise or bonus to an individual\'s performance assessment (e.g. an annual appraisal rating). Common in professional and managerial roles.' }
    },
    {
      id: 'list-prp',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantages:</b> Rewards high-performers; creates accountability; can retain top talent; aligns individual goals with business targets' },
          { text: '<b>Disadvantages:</b> Appraisal process can be subjective and perceived as unfair; creates internal competition that may damage teamwork; if too many receive high ratings, the incentive is diluted; can increase stress' }
        ]
      }
    },
    {
      id: 'h-bonus-commission',
      type: 'heading',
      data: { text: 'Bonuses and Commission', level: 3 }
    },
    {
      id: 'p-bonus',
      type: 'paragraph',
      data: { text: 'A <b>bonus</b> is a one-off payment on top of base pay, often linked to meeting targets (sales, profit, project completion). <b>Commission</b> is a payment proportional to sales made — typically a percentage of revenue. Both are common in sales roles.' }
    },
    {
      id: 'list-bonus',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantages:</b> Strong motivation to hit targets; variable cost (only paid when targets met); attracts sales-oriented personalities' },
          { text: '<b>Disadvantages:</b> Can encourage mis-selling or unethical behaviour (financial services scandals); income unstable for employees; may lead to short-termism' }
        ]
      }
    },
    {
      id: 'h-profit-sharing',
      type: 'heading',
      data: { text: 'Profit-Sharing', level: 3 }
    },
    {
      id: 'p-profit-sharing',
      type: 'paragraph',
      data: { text: 'Under <b>profit-sharing</b>, a proportion of the business\'s annual profit is distributed to all employees (or a defined group). Payments may be cash or shares.' }
    },
    {
      id: 'list-profit-sharing',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantages:</b> Gives all employees a stake in business performance; encourages collective effort; links Maslow\'s esteem and Herzberg\'s achievement' },
          { text: '<b>Disadvantages:</b> Profit depends on many factors outside individual control — individual effort is diluted by market conditions; can create a free-rider problem (individual contributes little but shares equally)' }
        ]
      }
    },
    {
      id: 'h-fringe',
      type: 'heading',
      data: { text: 'Fringe Benefits (Perks)', level: 3 }
    },
    {
      id: 'p-fringe',
      type: 'paragraph',
      data: { text: '<b>Fringe benefits</b> are non-cash financial rewards that have monetary value.' }
    },
    {
      id: 'list-fringe',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Examples: company car, private health insurance, pension contributions, subsidised meals, gym membership, share options, childcare vouchers' },
          { text: '<b>Advantages:</b> Tax advantages for both employer and employee in some cases; can be highly valued by employees and aid retention; differentiates the employer in recruitment' },
          { text: '<b>Disadvantages:</b> Cost; may not be valued equally by all employees (childcare irrelevant to those without children)' }
        ]
      }
    },
    {
      id: 'tbl-financial',
      type: 'comparisonTable',
      data: {
        caption: 'Financial Motivation Methods Summary',
        headers: ['Method', 'How It Works', 'Best For', 'Key Limitation'],
        rows: [
          ['Time-rate', 'Fixed pay per hour/year', 'Professional roles; where output is hard to measure', 'No incentive to increase output; moral hazard'],
          ['Piece-rate', 'Pay per unit produced', 'Manufacturing; repetitive tasks', 'Quality risk; income instability for workers'],
          ['PRP', 'Pay rise linked to appraisal rating', 'Managerial and professional roles', 'Subjective appraisals; damages teamwork'],
          ['Bonus', 'One-off payment on target achievement', 'Project-based work; team targets', 'May encourage short-termism or unethical behaviour'],
          ['Commission', '% of sales revenue earned', 'Sales roles', 'Mis-selling risk; volatile income'],
          ['Profit-sharing', 'Share of company profit paid to employees', 'All staff; motivates collective performance', 'Individual contribution diluted; free-rider problem'],
          ['Fringe benefits', 'Non-cash perks (car, health, pension)', 'Attracting and retaining talent', 'Cost; not equally valued by all employees'],
        ]
      }
    },
    {
      id: 'callout-herzberg-link',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Linking to Herzberg',
        text: 'All financial methods are <b>hygiene factors</b> in Herzberg\'s framework — inadequate pay creates dissatisfaction, and appropriate pay removes dissatisfaction. But pay increments alone will NOT generate lasting motivation. Businesses that rely solely on financial methods may find that performance plateaus after an initial boost. This is why leading employers combine financial with non-financial motivators (see note 1.4.10).'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When evaluating financial methods, link to: (1) the motivation theory that supports/challenges it (Taylor supports piece-rate; Herzberg challenges it as insufficient); (2) the type of work (piece-rate suits manufacturing, not healthcare); (3) potential negative consequences (commission → mis-selling, piece-rate → quality sacrifice). Strong answers always evaluate appropriateness in context.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Financial motivation methods: <b>time-rate</b> (predictable, no output link); <b>piece-rate</b> (output-linked, quality risk); <b>PRP</b> (appraisal-linked, motivates individuals); <b>bonus</b> (target-linked, short-termism risk); <b>commission</b> (% of sales, mis-selling risk); <b>profit-sharing</b> (collective stake, free-rider problem); <b>fringe benefits</b> (perks, aid retention). Per Herzberg: all are hygiene factors — necessary but not sufficient for motivation.' }
    },
    {
      "id": "enr-t4b-p-taylor-piecerate",
      "type": "paragraph",
      "data": {
        "text": "Frederick Taylor's <b>Scientific Management</b> (1911) is the theoretical foundation for piece-rate pay. Taylor used <b>time-and-motion studies</b> — stopwatch observations of workers performing tasks — to identify the most efficient method, then set output targets accordingly. Workers who met or exceeded targets received higher pay; those below were retrained or dismissed. Taylor believed money was the primary motivator and that workers required close direction — assumptions McGregor later categorised as <b>Theory X</b>."
      }
    },
    {
      "id": "enr-t4b-list-piecerate-context",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          { "text": "<b>Most appropriate:</b> repetitive manufacturing, seasonal packing, and agricultural harvesting — where output is easily counted and quality is standardised" },
          { "text": "<b>Least appropriate:</b> healthcare (quality over quantity is critical); professional services (output is not discrete); creative roles (creativity cannot be timed)" },
          { "text": "<b>Quality risk:</b> workers rush to maximise units, sacrificing quality standards" },
          { "text": "<b>Exploitation risk:</b> businesses set low piece rates; workers must produce very high volumes to earn adequate wages" },
          { "text": "<b>Income instability:</b> if demand falls, output falls and worker income drops — threatening Maslow's safety (level 2) needs" }
        ]
      }
    },
    {
      "id": "enr-t4b-callout-garment",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Real World: Garment Workers in Bangladesh — Piece-Rate in Practice",
        "text": "In Bangladesh, the world's second-largest garment exporter, factory workers are typically paid approximately $0.16 per T-shirt completed. Workers must complete hundreds of garments per shift to reach minimum wage. This mirrors Taylor's Scientific Management exactly: tasks are broken into simple steps (cut, sew, press, fold), workers are highly specialised, and pay is per unit. Advantage: production costs stay low enough for global brands like H&amp;M and Zara to source competitively. Disadvantage: extreme quality pressure, physical strain, and unsafe conditions driven entirely by speed incentives."
      }
    },
    {
      "id": "enr-t4b-callout-student-9",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Student Perspective: Pay Per Page vs Hourly Rate",
        "text": "Imagine a part-time job paid you per page of notes typed rather than per hour. You'd rush through each page as fast as possible — accuracy and quality would drop. You'd also have income anxiety on slow days. Now imagine a flat hourly rate — predictable and calm, but no incentive to work harder. This is exactly the Taylor/Herzberg tension: piece-rate increases output short-term but risks quality and long-term engagement. Which pay system would you prefer — and what does your answer reveal about your motivational drivers?"
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "Performance-related pay (PRP) and piece-rate suit sales and manufacturing (measurable output); bonus and profit-sharing suit team-based roles (cooperation). Examiners expect you to justify method choice with output metric: 'piece-rate works because output is easily measurable' or 'PRP fails in customer service because quality is hard to quantify.'"
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "PRP looks good but kills collaboration \u2014 sales teams compete instead of share leads. Piece-rate encourages quantity over quality, requiring inspection costs. Time-rate appears cheap but enables low productivity and 'working to the clock.' Don't list methods without critically evaluating hidden costs: demotivation, quality loss, administration burden."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Time-rate = fixed per hour. Piece-rate = per unit (quality risk). PRP = pay rise via appraisal. Bonus = one-off on targets. Commission = % of sales. Profit-sharing = share of profit (free-rider risk). Fringe benefits = non-cash perks. All = Herzberg hygiene factors: prevent dissatisfaction but do NOT create motivation alone.',
    cues: [
      { id: 'cue-1', blockId: 'p-piece-rate', prompt: 'What is piece-rate pay? Give ONE advantage and ONE disadvantage.', answer: 'Piece-rate = workers paid a fixed amount per unit produced. Advantage: strong financial incentive to increase output; variable cost for the business. Disadvantage: workers may sacrifice quality for speed; income is unstable if demand fluctuates.' },
      { id: 'cue-2', blockId: 'p-prp', prompt: 'What is performance-related pay and what is its main risk?', answer: 'PRP links a pay rise or bonus to an individual\'s performance appraisal rating. Main risks: appraisals can be subjective and perceived as unfair; it can create internal competition that damages teamwork and collaborative culture.' },
      { id: 'cue-3', blockId: 'p-profit-sharing', prompt: 'What is profit-sharing and what is the free-rider problem it creates?', answer: 'Profit-sharing distributes a portion of annual profit to all employees. Free-rider problem: an individual can contribute minimal effort but still receive the same share as hard workers — because profit is shared collectively. Individual incentive is diluted.' },
      { id: 'cue-4', blockId: 'callout-herzberg-link', prompt: 'Using Herzberg\'s theory, explain why increasing wages alone may not motivate workers.', answer: 'Herzberg classifies pay as a hygiene factor: if pay is too low, it causes dissatisfaction. If adequate, it removes dissatisfaction — but it does NOT create positive motivation. True motivation comes from intrinsic motivators like achievement, recognition, and responsibility, which financial methods alone cannot provide.' },
      { id: 'cue-5', blockId: 'tbl-financial', prompt: 'Which financial motivation method is most appropriate for a sales team and what is the risk?', answer: 'Commission (% of sales generated) is most common in sales as it directly links effort to reward and attracts target-driven personalities. Risk: it can encourage mis-selling or aggressive tactics to hit targets — a significant concern in regulated industries like financial services.' }
    ]
  },
  evidence: [],
  mentions: []
};
