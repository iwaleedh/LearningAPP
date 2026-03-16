export const note_business_1_4_11 = {
  pdfPath: '/notes/business/wbs11-4.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and evaluate four leadership styles — <b>Autocratic</b>, <b>Democratic</b>, <b>Laissez-faire</b>, and <b>Paternalistic</b> — and link them to McGregor\'s Theory X and Theory Y. Assess when each style is most and least appropriate.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'What Is Leadership?', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<b>Leadership</b> is the ability to influence and direct a group of people towards achieving goals. The <b>leadership style</b> is the approach a manager takes to directing, motivating, and communicating with their team. There is no single best style — the appropriate style depends on the situation, the workforce, the task, and the organisational culture.' }
    },
    {
      id: 'h-autocratic',
      type: 'heading',
      data: { text: 'Autocratic (Authoritarian) Leadership', level: 2 }
    },
    {
      id: 'p-autocratic',
      type: 'paragraph',
      data: { text: 'An <b>autocratic leader</b> makes decisions independently, without consulting staff. Instructions are given top-down; employees are expected to comply. The leader holds all authority and control.' }
    },
    {
      id: 'list-autocratic',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantages:</b> Fast decision-making (no consultation); clear direction and accountability; effective in crises or when discipline is critical; works when staff are unskilled or new' },
          { text: '<b>Disadvantages:</b> Demotivates staff — reduces autonomy and engagement; high staff turnover; ignores staff expertise and ideas; may lead to resentment and industrial relations problems' },
          { text: '<b>McGregor link:</b> Reflects <b>Theory X</b> assumptions — workers must be directed, controlled, and threatened to perform' }
        ]
      }
    },
    {
      id: 'callout-auto-eg',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'When Autocratic is Appropriate',
        text: '<b>Military operations:</b> Split-second life-or-death decisions cannot involve committee consultation — the commander must decide.<br><b>Emergency room crisis:</b> A surgeon must direct the surgical team clearly and immediately.<br><b>New business with unskilled employees:</b> Staff need clear instructions until they develop competence. The risk: if maintained too long after staff are experienced, it damages morale.'
      }
    },
    {
      id: 'h-democratic',
      type: 'heading',
      data: { text: 'Democratic Leadership', level: 2 }
    },
    {
      id: 'p-democratic',
      type: 'paragraph',
      data: { text: 'A <b>democratic leader</b> involves employees in decision-making, listens to views, and seeks input before deciding. The leader retains the final decision-making authority but values the team\'s expertise and ideas. Also called <b>participative leadership</b>.' }
    },
    {
      id: 'list-democratic',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantages:</b> Higher employee motivation (involvement = Herzberg\'s recognition + responsibility); better quality decisions (draws on team expertise); greater commitment to implemented decisions; lower turnover; fosters innovation' },
          { text: '<b>Disadvantages:</b> Slower decision-making — consultation takes time; risk of indecision if consensus is impossible; employees may be frustrated if their input is regularly ignored; ineffective in crises requiring speed' },
          { text: '<b>McGregor link:</b> Reflects <b>Theory Y</b> assumptions — workers are capable, seek responsibility, and can contribute meaningfully to decisions' }
        ]
      }
    },
    {
      id: 'h-laissez-faire',
      type: 'heading',
      data: { text: 'Laissez-faire Leadership', level: 2 }
    },
    {
      id: 'p-laissez-faire',
      type: 'paragraph',
      data: { text: 'A <b>laissez-faire leader</b> provides minimal direction and allows employees to make their own decisions. The leader sets overall goals but delegates virtually all day-to-day authority. The term means "let it be" in French.' }
    },
    {
      id: 'list-laissez-faire',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantages:</b> Maximum autonomy — highly motivating for self-driven, expert staff; promotes creativity and innovation; frees manager for strategic issues' },
          { text: '<b>Disadvantages:</b> Can result in lack of direction and coordination; ineffective with inexperienced or poorly motivated staff; may lead to inconsistency; a poorly implemented version tips into neglect/abdication' },
          { text: '<b>McGregor link:</b> Based entirely on <b>Theory Y</b> — works only if the workforce is genuinely self-motivated and highly skilled' },
          { text: '<b>Best for:</b> R&amp;D teams, design studios, university research groups, experienced professional teams, start-ups with founding experts' }
        ]
      }
    },
    {
      id: 'h-paternalistic',
      type: 'heading',
      data: { text: 'Paternalistic Leadership', level: 2 }
    },
    {
      id: 'p-paternalistic',
      type: 'paragraph',
      data: { text: 'A <b>paternalistic leader</b> acts like a parent figure — making decisions primarily in the perceived best interest of employees rather than consulting them fully. The leader is caring but ultimately directive. Welfare, wellbeing, and employee need are emphasised, but employees have limited real input.' }
    },
    {
      id: 'list-paternalistic',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantages:</b> High employee loyalty — workers feel cared for; strong welfare provision can meet Maslow\'s safety and social needs; stable, low-turnover workforce' },
          { text: '<b>Disadvantages:</b> Employees have limited genuine voice; "we know best" attitude can be condescending; may miss employees\' actual needs; can restrict innovation and change' },
          { text: '<b>McGregor link:</b> Elements of both X and Y — believes in workers\' needs (Y) but retains decision authority (X)' },
          { text: '<b>Historical examples:</b> Cadbury\'s in Victorian Bournville; John Lewis Partnership (hybrid paternalistic-democratic)' }
        ]
      }
    },
    {
      id: 'h-big-comparison',
      type: 'heading',
      data: { text: 'Leadership Styles — Full Comparison', level: 2 }
    },
    {
      id: 'tbl-leadership',
      type: 'comparisonTable',
      data: {
        caption: 'Four Leadership Styles Compared',
        headers: ['Style', 'Decision-Making', 'Staff Input', 'McGregor Link', 'Best Context', 'Key Risk'],
        rows: [
          ['Autocratic', 'Leader decides alone', 'None', 'Theory X', 'Crisis; unskilled workers; military', 'Demotivation; high turnover; ignores expertise'],
          ['Democratic', 'Leader consults, then decides', 'High', 'Theory Y', 'Skilled teams; complex projects; change management', 'Slow; indecision possible; consultation fatigue'],
          ['Laissez-faire', 'Employees decide', 'Maximum', 'Theory Y (extreme)', 'Expert/creative teams; R&D; start-ups', 'Lack of direction; fails with unmotivated staff'],
          ['Paternalistic', 'Leader decides in workers\' interest', 'Low–moderate (consulted but not empowered)', 'X + Y hybrid', 'High-welfare businesses; family firms; stable environments', 'Condescending; stifles employee voice; misses real needs'],
        ]
      }
    },
    {
      id: 'h-situational',
      type: 'heading',
      data: { text: 'Situational Leadership', level: 2 }
    },
    {
      id: 'p-situational',
      type: 'paragraph',
      data: { text: 'Most effective leaders adapt their style to the situation — this is the <b>situational (contingency) approach</b>. The same manager might be autocratic during a fire alarm evacuation, democratic when redesigning a new product process, and laissez-faire when managing an expert R&D team. The key variables are: <b>urgency of the decision</b>, <b>skill and experience of the team</b>, <b>nature of the task</b>, and <b>organisational culture</b>.' }
    },
    {
      id: 'callout-mcgregor-link',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Linking Leadership Style to McGregor\'s Theory X and Y',
        text: '<b>Theory X</b> assumptions → autocratic or paternalistic styles: workers need direction, control, and incentives. Management must supervise closely.<br><b>Theory Y</b> assumptions → democratic or laissez-faire styles: workers are self-motivated, seek responsibility, and can be trusted with autonomy.<br>Remember McGregor\'s self-fulfilling prophecy: autocratic management can turn Theory Y workers into Theory X workers over time by removing autonomy and trust.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When evaluating leadership styles in a case study: (1) identify the nature of the workforce (skill level, experience, motivation); (2) identify the task/context (routine, creative, crisis?); (3) identify the time available for decision-making. Always state the style is "appropriate because…" or "inappropriate because…" linked to the specific scenario. Examiners reward contextual judgement, not generic lists.'
      }
    },
    {
      id: 'checklist-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'Can define all four leadership styles and give an example context for each', checked: false },
          { text: 'Can link autocratic to Theory X and democratic/laissez-faire to Theory Y', checked: false },
          { text: 'Can evaluate when each style is most and least effective', checked: false },
          { text: 'Can explain the self-fulfilling prophecy of management style', checked: false },
          { text: 'Can apply situational leadership concept to a business scenario', checked: false }
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '<b>Autocratic:</b> leader decides alone; fast but demotivating; Theory X. <b>Democratic:</b> consults staff; slower but higher quality/motivation; Theory Y. <b>Laissez-faire:</b> employees decide; maximises autonomy and creativity; only works with expert/motivated staff; Theory Y (extreme). <b>Paternalistic:</b> decides in workers\' interest; loyal workforce but limited voice; X/Y hybrid. Best leaders adapt style to situation (contingency approach). All link to McGregor: X → control; Y → empower.' }
    },
    {
      "id": "enr-t4b-p-leadership-practice",
      "type": "paragraph",
      "data": {
        "text": "Effective leaders rarely rely on a single style. The <b>situational (contingency) approach</b> argues that the best leaders adapt their style to the demands of the moment. A manager might use <b>autocratic</b> style during a product recall crisis (speed is essential), shift to <b>democratic</b> style when redesigning a core process (team expertise adds value), and use <b>laissez-faire</b> when a specialist R&amp;D team develops a new product. Leadership style is not a fixed personality trait — it is a strategic choice responsive to context, team capability, and urgency."
      }
    },
    {
      "id": "enr-t4b-list-style-when",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          { "text": "<b>Autocratic:</b> crisis situations, new/unskilled workforce, emergency services, tight deadlines with no time for consultation" },
          { "text": "<b>Democratic:</b> experienced teams, creative problem-solving, building commitment to change, where decision quality matters more than speed" },
          { "text": "<b>Laissez-faire:</b> expert professionals (R&amp;D teams, architects, surgeons, consultants) requiring creative autonomy to produce best outcomes" },
          { "text": "<b>Paternalistic:</b> inexperienced or vulnerable workers needing guidance and reassurance; contexts where loyalty and long-term stability are priorities" }
        ]
      }
    },
    {
      "id": "enr-t4b-callout-jobs-apple",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Real World: Steve Jobs (Autocratic) vs Google (Democratic)",
        "text": "<b>Steve Jobs at Apple</b> was famously autocratic — he made all major product decisions personally, dismissed ideas instantly, and maintained total creative control. This produced the iMac, iPod, iPhone, and iPad. But it also created a culture entirely dependent on one person's vision, with high staff turnover. When Jobs died in 2011, Apple faced a leadership continuity challenge.<br><br><b>Google's founders</b> built a democratic culture: engineers pitch ideas internally, 20% time enables bottom-up innovation, and managers are evaluated partly by their team's satisfaction scores. This produced a more resilient, scalable innovation culture — though decision-making is slower than at Apple under Jobs."
      }
    },
    {
      "id": "enr-t4b-callout-student-11",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Student Perspective: Which Teacher Style Works Best for You?",
        "text": "Think about two different teachers: one who tells you exactly what to write, how to structure every answer, and marks you strictly (autocratic) — and one who sets the brief and trusts you to find your own approach (laissez-faire or democratic). Which style produced better results for you? Your answer likely depends on your confidence and experience in the subject — which is precisely the contingency argument: the right leadership style depends on the skill and motivation level of the people being led."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Autocratic = decides alone; fast; Theory X. Democratic = consults; motivating; Theory Y. Laissez-faire = employees decide; creative; needs expert staff; Theory Y. Paternalistic = decides in workers\' interest; caring but controlling; X/Y hybrid. Self-fulfilling prophecy: autocratic style creates Theory X workers. Situational leadership = adapt style to context.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-leadership', prompt: 'Describe the autocratic leadership style. When is it appropriate and what is its main risk?', answer: 'Autocratic leaders make decisions alone without consulting staff. Appropriate: crisis situations, emergencies, unskilled/new workforce needing clear direction. Risk: demotivates experienced staff by removing autonomy; high turnover; ignores team expertise.' },
      { id: 'cue-2', blockId: 'p-democratic', prompt: 'What is democratic leadership? Give ONE advantage and ONE disadvantage.', answer: 'Democratic leaders consult staff before making decisions — they seek input and value team expertise. Advantage: higher motivation (Herzberg: responsibility/recognition); better decisions using team knowledge. Disadvantage: slower — cannot be used in time-critical situations.' },
      { id: 'cue-3', blockId: 'list-laissez-faire', prompt: 'When is laissez-faire leadership most effective and when does it fail?', answer: 'Most effective with highly skilled, self-motivated, expert employees (e.g. R&D teams, designers, professional consultants). Fails when staff are inexperienced, poorly motivated, or lack clarity about goals — results in loss of direction and poor coordination.' },
      { id: 'cue-4', blockId: 'callout-mcgregor-link', prompt: 'How do McGregor\'s Theory X and Theory Y link to leadership style?', answer: 'Theory X assumptions (workers dislike work; need control) → autocratic or paternalistic leadership. Theory Y assumptions (workers are self-motivated) → democratic or laissez-faire. McGregor\'s self-fulfilling prophecy: treating workers autocratically creates disengaged Theory X behaviour over time.' },
      { id: 'cue-5', blockId: 'p-paternalistic', prompt: 'What distinguishes paternalistic leadership from democratic leadership?', answer: 'Paternalistic: leader makes decisions in workers\' perceived best interest — caring but not empowering. Staff welfare is prioritised but genuine input is limited. Democratic: leader genuinely consults and uses staff input to inform decisions. Paternalistic is more directive despite the focus on wellbeing.' },
      { id: 'cue-6', blockId: 'p-situational', prompt: 'What is the situational approach to leadership and what factors should influence the style?', answer: 'Situational (contingency) leadership = adapting the style to the situation. Key factors: (1) urgency of the decision; (2) skill and experience level of the team; (3) nature of the task (routine vs creative); (4) organisational culture. A leader may use all four styles at different times.' }
    ]
  },
  evidence: [],
  mentions: []
};
