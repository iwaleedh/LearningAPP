export const note_business_2_10_6 = {
  pdfPath: '/notes/business/wbs12-10.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand key employment protection laws and evaluate their impact on business costs, flexibility, employee relations and ethical reputation.' }
    },
    {
      id: 'h-emp-intro',
      type: 'heading',
      data: { text: 'Why Employment Law Exists', level: 2 }
    },
    {
      id: 'p-emp-intro',
      type: 'paragraph',
      data: { text: 'Employment protection law establishes minimum rights for workers to prevent exploitation, discrimination and unsafe working conditions. It governs how businesses recruit, pay, manage and dismiss staff. While compliance adds costs and reduces flexibility, it also promotes fairer workplaces, reduces staff turnover and can enhance a firm\'s reputation as a good employer — supporting recruitment and motivation.' }
    },
    {
      id: 'h-key-laws',
      type: 'heading',
      data: { text: 'Key Employment Protection Laws', level: 2 }
    },
    {
      id: 'list-key-laws',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>National Minimum Wage (NMW) / National Living Wage (NLW):</b> Sets legally binding minimum hourly pay rates. The NLW applies to workers aged 23+. Rises in these rates increase labour costs for businesses relying on low-wage workers (e.g. retail, hospitality, care).' },
          { text: '<b>Equality Act 2010:</b> Bans discrimination based on nine "protected characteristics" (age, sex, race, disability, religion, sexuality, gender reassignment, pregnancy, marriage). Firms must ensure equal pay for equal work.' },
          { text: '<b>Working Time Regulations 1998:</b> Maximum 48-hour working week (workers can opt out); minimum 28 days paid annual leave; rest breaks; limits on night work.' },
          { text: '<b>Employment Rights Act 1996:</b> Employees with 2+ years\' service have the right not to be unfairly dismissed; statutory redundancy pay applies after 2 years\' service.' },
          { text: '<b>Health and Safety at Work Act 1974:</b> Employers must provide a safe working environment (covered in detail in note_2_10_9).' }
        ]
      }
    },
    {
      id: 'h-impact-costs',
      type: 'heading',
      data: { text: 'Impact on Business Costs', level: 2 }
    },
    {
      id: 'p-impact-costs',
      type: 'paragraph',
      data: { text: 'Employment legislation increases business costs in several ways. Minimum wage rises directly increase the wage bill for low-paying industries. Statutory paid leave (28 days minimum) means absent workers must still be paid. HR and legal compliance costs rise — businesses need specialists to manage dismissal procedures, discrimination claims and contracts. Redundancy payments add to restructuring costs. Employment tribunals are costly in time and legal fees.' }
    },
    {
      id: 'callout-worked-nmw',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — NLW Rise',
        text: 'A retailer employs 200 workers at the NLW of £10.42/hour (2023) for 40 hours/week. If the NLW rises to £11.44/hour, the weekly wage bill increases by £1.02 × 40h × 200 = £8,160/week. Annually = £424,320 extra in labour costs.'
      }
    },
    {
      id: 'h-impact-positive',
      type: 'heading',
      data: { text: 'Positive Effects for Businesses', level: 2 }
    },
    {
      id: 'list-impact-positive',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Fairness improves motivation:</b> Well-treated, fairly paid staff are more productive and absent less often (reduced absenteeism).' },
          { text: '<b>Reduced turnover:</b> Good employment practices increase staff retention, reducing costly recruitment and training.' },
          { text: '<b>Employer brand:</b> Legal compliance and ethical treatment support reputation, attracting better quality candidates.' },
          { text: '<b>Level playing field:</b> All competing firms must comply, preventing a race to the bottom on wages.' }
        ]
      }
    },
    {
      id: 'table-emp-law-impacts',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of Key Employment Laws and Their Business Impact',
        headers: ['Law', 'Requirement', 'Business Impact'],
        rows: [
          ['National Living Wage', 'Min hourly pay for 23+ workers', 'Higher wage costs, especially in low-pay sectors'],
          ['Equality Act 2010', 'No discrimination; equal pay for equal work', 'HR procedures; risk of tribunal claims if breached'],
          ['Working Time Regulations', '48-hr max week; 28 days leave', 'Rota management; cover costs during holidays'],
          ['Employment Rights Act', 'Unfair dismissal protection (2+ years)', 'Must follow proper dismissal procedures or risk tribunal']
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When evaluating employment law, weigh the <b>short-term cost burden</b> (higher wages, compliance costs) against <b>long-term benefits</b> (motivated staff, lower turnover, reputational advantage). Labour-intensive industries with thin margins (e.g. retail, hospitality) are most affected by NLW rises.'
      }
    },
    {
      id: 'enr-t10a-h-zero',
      type: 'heading',
      data: { text: 'Zero-Hours Contracts', level: 2 }
    },
    {
      id: 'enr-t10a-p-zero',
      type: 'paragraph',
      data: { text: 'A <b>zero-hours contract</b> means the employer is not obliged to offer any minimum number of hours, and the worker is not obliged to accept hours when offered. From the employer\'s perspective, they provide maximum flexibility — staff can be called in only when needed, reducing labour costs during quiet periods. However, they have been criticised for creating <b>worker insecurity</b>: irregular income makes budgeting difficult and workers may feel coerced into accepting unwanted shifts to avoid losing future hours. The 2024 <b>Employment Rights Bill</b> proposed giving workers in this situation the right to request a guaranteed-hours contract after 12 weeks of regular employment patterns.' }
    },
    {
      id: 'enr-t10a-p-gig',
      type: 'paragraph',
      data: { text: 'The <b>gig economy</b> refers to a labour market characterised by short-term, flexible and freelance work mediated by digital platforms (Uber, Deliveroo, Fiverr). Platform companies historically classified workers as <b>independent contractors</b> (self-employed) to avoid obligations like NLW, holiday pay and auto-enrolment pensions. In 2021, the UK Supreme Court ruled that <b>Uber drivers are \'workers\'</b> — a legal status between employee and self-employed — entitling them to NLW and paid holiday. This ruling set a precedent for many gig platforms, significantly increasing their labour costs and challenging the low-cost flexibility at the heart of their business models.' }
    },
    {
      id: 'enr-t10a-callout-brand-6',
      type: 'callout',
      data: {
        style: 'key',
        title: "Real-World Example: Sports Direct's Employment Scandal",
        text: "In 2015, The Guardian revealed that Sports Direct (Mike Ashley's retail chain) was effectively paying warehouse workers below the National Minimum Wage — after accounting for compulsory unpaid security searches adding ~15 minutes per shift, the effective hourly rate fell below the legal minimum. Staff were on zero-hours contracts with no job security. Following a parliamentary inquiry — during which conditions were described as 'Victorian workhouse' standards — Sports Direct was forced to raise pay and improve conditions. This illustrates the severe reputational, legal and political consequences of flouting employment law."
      }
    },
    {
      id: 'enr-t10a-callout-student-6',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Student-Relatable: Know Your Part-Time Job Rights',
        text: 'As a part-time worker aged 18\u201320, you are entitled to the <b>National Minimum Wage</b> (£8.60/hour in 2024, rising annually). You are also entitled to: <b>paid holiday</b> (28 days pro-rata for full-time equivalent); a <b>written statement of terms</b> within two months of starting; <b>payslips</b> showing tax and NI deductions. If your employer pays you late, docks pay without agreement or denies you rest breaks, that is likely an employment law breach. Understanding these obligations from both directions — as a worker and as a future manager — is core exam content.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Employment law protects workers through minimum wages, anti-discrimination rules, working time limits and unfair dismissal rights. It raises business costs (wages, HR, compliance) but can improve motivation, reduce turnover and enhance employer reputation. Labour-intensive businesses in retail and hospitality are most affected by NLW increases.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Employment laws: NLW sets min pay; Equality Act bans discrimination; Working Time Regulations limit hours; Employment Rights Act protects against unfair dismissal. Costs rise but motivated, retained staff benefit business long-term.',
    cues: [
      { id: 'cue-1', blockId: 'list-key-laws', prompt: 'What does the Equality Act 2010 protect employees from?', answer: 'Discrimination based on nine protected characteristics: age, sex, race, disability, religion, sexuality, gender reassignment, pregnancy and marriage. Employers must also ensure equal pay for equal work.' },
      { id: 'cue-2', blockId: 'callout-worked-nmw', prompt: 'If the NLW rises by £1.02/hour and a firm has 200 workers doing 40 hours/week, what is the extra annual wage cost?', answer: 'Extra weekly cost = £1.02 × 40 × 200 = £8,160. Annual extra cost = £8,160 × 52 ≈ £424,320.' },
      { id: 'cue-3', blockId: 'list-key-laws', prompt: 'What does the Working Time Regulations 1998 entitle employees to?', answer: 'Maximum 48-hour working week (with opt-out); minimum 28 days paid annual leave; rest breaks; limits on night work.' },
      { id: 'cue-4', blockId: 'list-impact-positive', prompt: 'Give TWO ways in which good employment practices benefit a business.', answer: '1. Motivated, productive staff with lower absenteeism. 2. Lower staff turnover, reducing expensive recruitment and training costs.' },
      { id: 'cue-5', blockId: 'h-impact-costs', prompt: 'After how many years of service does an employee get unfair dismissal protection? What does this mean for businesses?', answer: 'After 2 years\' continuous service. Dismissed employees can bring a tribunal claim. Businesses must follow lawful dismissal procedures or risk legal costs and compensation awards.' }
    ]
  },
  evidence: [],
  mentions: []
};
