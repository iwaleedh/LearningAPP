export const note_business_1_4_2 = {
  pdfPath: '/notes/business/wbs11-4.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Distinguish between <b>dismissal</b> and <b>redundancy</b> as methods of ending employment, understand fair vs unfair dismissal, and evaluate their business and legal implications.' }
    },
    {
      id: 'h-ending',
      type: 'heading',
      data: { text: 'Ending the Employment Relationship', level: 2 }
    },
    {
      id: 'p-ending',
      type: 'paragraph',
      data: { text: 'Employment can end in several ways: resignation (employee\'s choice), retirement, end of a fixed-term contract, <b>dismissal</b> (employer ends employment due to the employee\'s conduct or capability), or <b>redundancy</b> (the job itself no longer exists). Businesses must follow the correct legal process to avoid costly employment tribunal claims.' }
    },
    {
      id: 'h-dismissal',
      type: 'heading',
      data: { text: 'Dismissal', level: 2 }
    },
    {
      id: 'p-dismissal',
      type: 'paragraph',
      data: { text: '<b>Dismissal</b> occurs when an employer <i>ends an employee\'s contract</i> because of something related to the employee — their conduct, capability, or continued employment breaching a legal requirement. For dismissal to be <b>fair</b>, the employer must have a valid reason and follow a fair procedure (e.g. warnings, investigation, right to appeal).' }
    },
    {
      id: 'h-fair-reasons',
      type: 'heading',
      data: { text: 'Fair Reasons for Dismissal', level: 3 }
    },
    {
      id: 'list-fair',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Conduct</b> — repeated misconduct after warnings (e.g. persistent lateness, dishonesty)' },
          { text: '<b>Gross misconduct</b> — serious offence allowing instant (summary) dismissal without notice (e.g. theft, violence, gross insubordination, serious breach of safety)' },
          { text: '<b>Capability</b> — employee is genuinely unable to do the job to the required standard, even after training and support' },
          { text: '<b>Legal requirement</b> — continued employment would break the law (e.g. driver losing their licence)' },
          { text: '<b>Some other substantial reason (SOSR)</b> — e.g. unreasonable refusal to accept a business reorganisation' }
        ]
      }
    },
    {
      id: 'h-unfair',
      type: 'heading',
      data: { text: 'Unfair Dismissal', level: 3 }
    },
    {
      id: 'p-unfair',
      type: 'paragraph',
      data: { text: 'Dismissal is <b>unfair</b> if there is no valid reason, or if the employer failed to follow a fair procedure (e.g. no warnings given, no investigation, no right to appeal). Employees with qualifying service (typically 2 years in the UK/Edexcel context) can make a claim to an employment tribunal. Remedies include reinstatement or financial compensation.' }
    },
    {
      id: 'callout-constructive',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Constructive Dismissal',
        text: '<b>Constructive dismissal</b> occurs when the employer does not formally dismiss the employee, but makes working conditions so intolerable that the employee feels forced to resign. The employee is then treated as having been unfairly dismissed and may claim at an employment tribunal. Examples: demoting someone without reason, changing working hours drastically, bullying by management.'
      }
    },
    {
      id: 'h-redundancy',
      type: 'heading',
      data: { text: 'Redundancy', level: 2 }
    },
    {
      id: 'p-redundancy',
      type: 'paragraph',
      data: { text: '<b>Redundancy</b> occurs when a job role no longer exists — because the business is closing, relocating, or restructuring (e.g. technology replaces the role). The employee is not at fault. Businesses must follow a fair redundancy process: consult employees, use objective selection criteria, consider alternatives (redeployment, reduced hours), and pay a <b>statutory redundancy payment</b> if the employee has 2+ years of service.' }
    },
    {
      id: 'tbl-vs',
      type: 'comparisonTable',
      data: {
        caption: 'Dismissal vs Redundancy',
        headers: ['Feature', 'Dismissal', 'Redundancy'],
        rows: [
          ['Cause', 'Employee\'s conduct, capability, or legal issue', 'The job role no longer exists'],
          ['Employee fault?', 'Yes (in most cases)', 'No — not the employee\'s fault'],
          ['Notice required?', 'Yes (except gross misconduct)', 'Yes — consultation required'],
          ['Payment', 'No redundancy pay; possible compensation if unfair', 'Statutory redundancy pay (2+ years service)'],
          ['Fair procedure required?', 'Yes — warnings, investigation, appeal', 'Yes — consultation, objective criteria, consider alternatives'],
          ['Legal risk if done badly', 'Unfair dismissal claim at employment tribunal', 'Wrongful redundancy / discrimination claim'],
        ]
      }
    },
    {
      id: 'h-voluntary-comp',
      type: 'heading',
      data: { text: 'Voluntary vs Compulsory Redundancy', level: 3 }
    },
    {
      id: 'list-vol-comp',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Voluntary redundancy:</b> Employer invites employees to apply for redundancy; often offered with enhanced pay above the statutory minimum. Less disruptive to morale as individuals self-select.' },
          { text: '<b>Compulsory redundancy:</b> Employer selects specific employees. Must use fair, objective criteria (e.g. length of service, skills, attendance). Using age or union membership as criteria would be discriminatory and illegal.' }
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'A common exam question asks you to distinguish dismissal from redundancy. The key difference: dismissal is about the <i>person</i> (their behaviour or ability); redundancy is about the <i>job</i> (the role is no longer needed). Also be ready to explain why a business might prefer voluntary redundancy — it avoids compulsory selection, reduces morale damage, and often attracts employees who were already planning to leave.'
      }
    },
    {
      id: 'callout-warn',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Never say a business can sack someone to save money as a cost-cutting measure — this would be dismissal without a valid reason (unfair dismissal). If the role itself is being cut, that is redundancy. The distinction matters legally and in exams.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '<b>Dismissal</b> ends employment due to the employee\'s conduct or capability — must have a valid reason and fair process. <b>Gross misconduct</b> allows instant dismissal. <b>Unfair dismissal</b> occurs without valid reason or fair process. <b>Redundancy</b> occurs when the role no longer exists — the employee is not at fault and is entitled to statutory redundancy pay (after 2+ years). Voluntary redundancy is less damaging to morale than compulsory selection.' }
    },
    {
      id: 'enr-t4a-h-orgdesign',
      type: 'heading',
      data: { text: 'Organisational Structure — Context for Redundancy', level: 2 }
    },
    {
      id: 'enr-t4a-p-orgdesign',
      type: 'paragraph',
      data: { text: 'A business <b>organisational structure</b> determines how authority and communication flow. A <b>tall structure</b> has many levels of hierarchy and a narrow <b>span of control</b> (each manager supervises few staff) — common in large organisations such as banks. A <b>flat structure</b> has fewer management layers and a wider span of control — typical of start-ups. When businesses <b>restructure</b> (e.g. flattening from a tall to a flat structure to reduce costs), middle-management roles are often removed, triggering compulsory redundancy. Understanding structure therefore helps explain why redundancies happen.' }
    },
    {
      id: 'enr-t4a-svg-org-structure',
      type: 'svg',
      data: {
        svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 280' font-family='Arial,sans-serif'><rect width='420' height='280' fill='#0f172a' rx='8'/><text x='210' y='18' text-anchor='middle' font-size='12' font-weight='bold' fill='#1e293b'>Tall vs Flat Organisational Structure</text><text x='105' y='36' text-anchor='middle' font-size='11' fill='#6366f1' font-weight='bold'>Tall Structure</text><rect x='80' y='44' width='50' height='22' rx='3' fill='#6366f1'/><text x='105' y='59' text-anchor='middle' font-size='9' fill='#1e293b'>CEO</text><line x1='105' y1='66' x2='105' y2='76'/><rect x='55' y='76' width='50' height='20' rx='3' fill='#8b5cf6'/><text x='80' y='90' text-anchor='middle' font-size='9' fill='#1e293b'>Manager</text><rect x='110' y='76' width='50' height='20' rx='3' fill='#8b5cf6'/><text x='135' y='90' text-anchor='middle' font-size='9' fill='#1e293b'>Manager</text><line x1='105' y1='76' x2='80' y2='76'/><line x1='105' y1='76' x2='135' y2='76'/><line x1='80' y1='96' x2='80' y2='106'/><line x1='135' y1='96' x2='135' y2='106'/><rect x='55' y='106' width='50' height='20' rx='3' fill='#2d1b69'/><text x='80' y='120' text-anchor='middle' font-size='9' fill='#1e293b'>Supervisor</text><rect x='110' y='106' width='50' height='20' rx='3' fill='#2d1b69'/><text x='135' y='120' text-anchor='middle' font-size='9' fill='#1e293b'>Supervisor</text><line x1='80' y1='126' x2='80' y2='136'/><line x1='135' y1='126' x2='135' y2='136'/><rect x='55' y='136' width='50' height='20' rx='3' fill='#2d1b69'/><text x='80' y='150' text-anchor='middle' font-size='8' fill='#1e293b'>Worker</text><rect x='110' y='136' width='50' height='20' rx='3' fill='#2d1b69'/><text x='135' y='150' text-anchor='middle' font-size='8' fill='#1e293b'>Worker</text><text x='105' y='175' text-anchor='middle' font-size='9' fill='#64748b'>Narrow span of control</text><text x='105' y='187' text-anchor='middle' font-size='9' fill='#64748b'>More levels of hierarchy</text><text x='315' y='36' text-anchor='middle' font-size='11' fill='#10b981' font-weight='bold'>Flat Structure</text><rect x='290' y='44' width='50' height='22' rx='3' fill='#065f46'/><text x='315' y='59' text-anchor='middle' font-size='9' fill='#1e293b'>CEO</text><line x1='315' y1='66' x2='315' y2='76'/><rect x='225' y='76' width='45' height='20' rx='3' fill='#065f46'/><rect x='275' y='76' width='45' height='20' rx='3' fill='#065f46'/><rect x='325' y='76' width='45' height='20' rx='3' fill='#065f46'/><rect x='375' y='76' width='40' height='20' rx='3' fill='#065f46'/><text x='247' y='90' text-anchor='middle' font-size='8' fill='#1e293b'>Worker</text><text x='297' y='90' text-anchor='middle' font-size='8' fill='#1e293b'>Worker</text><text x='347' y='90' text-anchor='middle' font-size='8' fill='#1e293b'>Worker</text><text x='395' y='90' text-anchor='middle' font-size='8' fill='#1e293b'>Worker</text><line x1='315' y1='76' x2='247' y2='76'/><line x1='315' y1='76' x2='297' y2='76'/><line x1='315' y1='76' x2='347' y2='76'/><line x1='315' y1='76' x2='395' y2='76'/><text x='315' y='115' text-anchor='middle' font-size='9' fill='#64748b'>Wide span of control</text><text x='315' y='127' text-anchor='middle' font-size='9' fill='#64748b'>Fewer management levels</text></svg>",
        caption: 'Tall vs Flat organisational structures: spans of control and hierarchy levels'
      }
    },
    {
      id: 'enr-t4a-callout-ryanair',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Brand Example — Ryanair Mass Redundancy',
        text: 'During the COVID-19 pandemic, Ryanair announced plans to make up to 3,000 staff redundant as air travel collapsed. The airline applied <b>compulsory redundancy</b> using objective selection criteria including length of service and skills. Simultaneously, Ryanair sought to negotiate new, lower-pay contracts with remaining pilots and cabin crew — using the threat of further redundancy as leverage. This illustrates how redundancy is often intertwined with wider organisational restructuring, and how businesses may use legally permitted Hard HRM approaches even in sensitive situations.'
      }
    },
    {
      id: 'enr-t4a-callout-student2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Relatable Example — School Hierarchy',
        text: 'A school has a clear <b>tall structure</b>: head teacher → deputy heads → heads of department → teachers → teaching assistants. Each level has a defined span of control. If two schools merged and removed one layer of management — say, assistant headteacher roles — those role-holders would be made <b>redundant</b>. The restructuring drove the redundancy, not any fault of the individuals. This is the real-world link between organisational design and redundancy law.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Dismissal = employer ends contract due to employee conduct/capability. Must be fair (valid reason + fair procedure). Gross misconduct = instant dismissal. Redundancy = job no longer exists, not employee\'s fault. 5 fair reasons for dismissal: conduct, gross misconduct, capability, legal requirement, SOSR.',
    cues: [
      { id: 'cue-1', blockId: 'p-dismissal', prompt: 'What is the difference between dismissal and redundancy?', answer: 'Dismissal ends employment due to something about the employee (conduct/capability). Redundancy ends employment because the job role no longer exists — the employee is not at fault.' },
      { id: 'cue-2', blockId: 'list-fair', prompt: 'Name FOUR fair reasons for dismissal.', answer: '1. Conduct (repeated misconduct after warnings). 2. Gross misconduct (e.g. theft — allows instant dismissal). 3. Capability (inability to do the job even after support). 4. Legal requirement (e.g. driver loses licence). Also: SOSR.' },
      { id: 'cue-3', blockId: 'callout-constructive', prompt: 'What is constructive dismissal? Give an example.', answer: 'Constructive dismissal is when an employer makes conditions so intolerable that the employee feels forced to resign. Example: drastically changing working hours without agreement, bullying by management, or unexplained demotion.' },
      { id: 'cue-4', blockId: 'p-redundancy', prompt: 'What is redundancy and what entitlement does an employee have?', answer: 'Redundancy occurs when a job role no longer exists (business closing, restructuring, or technology replacing the role). Employees with 2+ years of service are entitled to statutory redundancy pay. The employer must consult, use fair selection criteria, and consider alternatives.' },
      { id: 'cue-5', blockId: 'list-vol-comp', prompt: 'What is voluntary redundancy and why might an employer prefer it?', answer: 'Voluntary redundancy invites employees to apply for redundancy (often with enhanced pay). Employers prefer it because individuals self-select, it avoids compulsory selection (and legal challenge), and it is less damaging to remaining staff morale.' }
    ]
  },
  evidence: [],
  mentions: []
};
