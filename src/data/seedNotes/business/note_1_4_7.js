export const note_business_1_4_7 = {
  pdfPath: '/notes/business/wbs11-4.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand key structural concepts: <b>span of control</b>, <b>chain of command</b>, <b>hierarchy</b>, <b>delegation</b>, <b>delayering</b>, and the distinction between <b>centralised</b> and <b>decentralised</b> decision-making.' }
    },
    {
      id: 'h-hierarchy',
      type: 'heading',
      data: { text: 'Hierarchy and Chain of Command', level: 2 }
    },
    {
      id: 'p-hierarchy',
      type: 'paragraph',
      data: { text: 'The <b>hierarchy</b> is the system of ranked authority within a business — who reports to whom. It is typically shown in an organisational chart. The <b>chain of command</b> is the line of authority from the top of the hierarchy (e.g. CEO) down to the front-line worker. Instructions and decisions flow down the chain; information and feedback flow upward.' }
    },
    {
      id: 'list-hierarchy-terms',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Levels of hierarchy:</b> The number of management tiers between the top and the bottom. More levels = taller structure.' },
          { text: '<b>Long chain of command:</b> Message must pass through many layers — slower, risk of distortion or filtering.' },
          { text: '<b>Short chain of command:</b> Fewer layers — faster communication, less distortion; suits flat structures.' }
        ]
      }
    },
    {
      id: 'h-span',
      type: 'heading',
      data: { text: 'Span of Control', level: 2 }
    },
    {
      id: 'p-span',
      type: 'paragraph',
      data: { text: 'The <b>span of control</b> is the number of subordinates that a manager directly supervises. A <b>wide span</b> (e.g. 10 reports) reduces the number of management layers needed but can stretch a manager. A <b>narrow span</b> (e.g. 3 reports) allows close supervision but increases the number of management tiers.' }
    },
    {
      id: 'tbl-span',
      type: 'comparisonTable',
      data: {
        caption: 'Wide vs Narrow Span of Control',
        headers: ['Feature', 'Wide Span of Control', 'Narrow Span of Control'],
        rows: [
          ['Directly reports to manager', 'Many (e.g. 8–15)', 'Few (e.g. 2–4)'],
          ['Structure type', 'Flat organisation', 'Tall organisation'],
          ['Supervision level', 'Low — manager cannot closely supervise all', 'High — close oversight of each report'],
          ['Employee autonomy', 'Greater — more freedom', 'Less — more direction given'],
          ['Communication', 'Faster to CEO (fewer layers)', 'Slower (many layers to pass through)'],
          ['Best when…', 'Staff are experienced/skilled; tasks are routine', 'Staff are new/unskilled; tasks are complex or varied'],
        ]
      }
    },
    {
      id: 'callout-span-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Factors Affecting Optimal Span of Control',
        text: 'A wider span is appropriate when: staff are well-trained and experienced; tasks are repetitive and standardised; the manager is skilled and experienced; technology helps monitor performance. A narrower span is needed when: staff are new or unskilled; tasks are complex or varied; close interaction and guidance is essential.'
      }
    },
    {
      id: 'h-delegation',
      type: 'heading',
      data: { text: 'Delegation', level: 2 }
    },
    {
      id: 'p-delegation',
      type: 'paragraph',
      data: { text: '<b>Delegation</b> is passing authority and responsibility for a task to a more junior employee, while the delegating manager retains overall accountability. Effective delegation frees up management time for strategic work, develops employees\' skills, and can increase motivation (Herzberg\'s theory: responsibility is a motivator). However, the manager must trust the subordinate and communicate clearly.' }
    },
    {
      id: 'list-delegation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Benefits:</b> Frees up senior management time; develops staff skills and confidence; motivates staff (Herzberg); spreads workload' },
          { text: '<b>Risks:</b> Poor delegation can lead to mistakes; requires trust; manager still responsible for outcomes' }
        ]
      }
    },
    {
      id: 'h-delayering',
      type: 'heading',
      data: { text: 'Delayering', level: 2 }
    },
    {
      id: 'p-delayering',
      type: 'paragraph',
      data: { text: '<b>Delayering</b> is removing one or more levels of management from the hierarchy. It reduces costs (fewer managers\' salaries), speeds up communication, and can empower staff — but increases the span of control of remaining managers and may cause redundancies, damaging morale among those who remain.' }
    },
    {
      id: 'callout-delayering-eg',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example — Delayering at a Retailer',
        text: 'A supermarket chain removes the "Regional Operations Manager" tier (50 people) across the UK. Each Store Manager now reports directly to a Divisional Director (span rises from 5 → 20 stores per director). Savings: £4m in salaries per year. Cost: directors are stretched, response to store issues slows, and the 50 made redundant damage morale. Long-term success depends on whether technology (performance dashboards) can compensate for less direct oversight.'
      }
    },
    {
      id: 'h-central-decentral',
      type: 'heading',
      data: { text: 'Centralisation vs Decentralisation', level: 2 }
    },
    {
      id: 'p-central-decentral',
      type: 'paragraph',
      data: { text: 'These terms refer to where decisions are made within the hierarchy.' }
    },
    {
      id: 'tbl-central',
      type: 'comparisonTable',
      data: {
        caption: 'Centralised vs Decentralised Decision-Making',
        headers: ['Feature', 'Centralised', 'Decentralised'],
        rows: [
          ['Where decisions are made', 'At the top (HQ / senior management)', 'Pushed down to departments, branches, or individuals'],
          ['Speed', 'Can be slow — all decisions go to centre', 'Faster at local level — those closest to the issue decide'],
          ['Consistency', 'High — uniform policies and brand standards', 'Lower — local variation may conflict with brand image'],
          ['Staff motivation', 'Lower — little autonomy for front-line staff', 'Higher — staff feel empowered and trusted'],
          ['Risk management', 'Easier — senior team retains control', 'Higher risk — local managers may make costly errors'],
          ['Best for', 'Crisis management; brand-sensitive decisions; legal/financial compliance', 'Customer-facing decisions; diverse markets; large geographic spread'],
        ]
      }
    },
    {
      id: 'callout-warn',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Students often confuse delegation with decentralisation. <b>Delegation</b> is giving specific tasks to subordinates (but the manager keeps accountability). <b>Decentralisation</b> is a structural decision to permanently push decision-making authority down the hierarchy. Delegation can happen in a centralised structure; decentralisation is a permanent structural change.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '<b>Span of control</b> = number of direct reports per manager. Wide span → flat structure; narrow span → tall structure. <b>Chain of command</b> = line of authority from top to bottom. <b>Delegation</b> = passing task authority to subordinates (manager retains accountability). <b>Delayering</b> = removing management tiers to cut costs and flatten structure. <b>Centralisation</b> = decisions at the top (consistent but slow); <b>decentralisation</b> = decisions pushed down (fast and motivating but less consistent).' }
    },
    {
      "id": "enr-t4b-p-empowerment",
      "type": "paragraph",
      "data": {
        "text": "A critical distinction for A-Level exams: <b>delegation</b> passes responsibility for a specific task to a subordinate — the manager assigns the work but retains accountability for the outcome. <b>Empowerment</b> goes further: it grants workers genuine, ongoing authority to make decisions within their role. Empowered workers determine <i>how</i> they complete their work, not just execute instructions. Empowerment reflects McGregor's Theory Y — it assumes workers are trustworthy, self-motivated, and capable of exercising sound judgement without close supervision."
      }
    },
    {
      "id": "enr-t4b-list-decentralisation",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          { "text": "<b>Faster decisions:</b> local managers respond to market changes without waiting for HQ approval" },
          { "text": "<b>Higher motivation:</b> workers feel trusted and valued — Herzberg identifies responsibility as a key motivator" },
          { "text": "<b>Better local knowledge:</b> regional or store managers understand their customers better than head office" },
          { "text": "<b>Reduces senior management burden:</b> allows leaders to focus on strategic priorities" },
          { "text": "<b>Develops future leaders:</b> delegates gain hands-on experience that builds management capability" }
        ]
      }
    },
    {
      "id": "enr-t4b-callout-johnlewis",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Real World: John Lewis Partnership — Empowerment at Scale",
        "text": "John Lewis (UK) is co-owned by its 70,000+ employees, called 'Partners'. All Partners share in annual profits, elect representatives to the Partnership Council, and have a genuine voice in business decisions. This is decentralisation and empowerment at its most extensive — consistent with democratic leadership and McGregor's Theory Y. Retention rates among Partners are significantly above the retail industry average, supporting Herzberg's view that responsibility and recognition (not just pay) create genuine, lasting motivation."
      }
    },
    {
      "id": "enr-t4b-callout-student-7",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Student Perspective: Delegating vs Empowering a Football Team",
        "text": "Imagine you're captain of a football team. <b>Delegation:</b> you tell each player exactly which position to play and what to do at every set-piece — you carry all the tactical decisions yourself. <b>Empowerment:</b> you give players the freedom to adjust their positions during the game and make real-time calls — you trust their judgement. Delegation produces compliance. Empowerment produces initiative. The exam tests whether you can explain this difference clearly and link it to motivation theory."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Span of control = number of direct reports. Wide span = flat; narrow = tall. Chain of command = authority from top to bottom. Delegation = pass task authority down (accountability stays). Delayering = remove management layers. Centralised = top decides; decentralised = lower levels decide.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-span', prompt: 'What is a span of control? Distinguish between wide and narrow spans.', answer: 'Span of control = number of subordinates directly supervised by a manager. Wide span (many reports) → flat structure, more employee autonomy, lower cost. Narrow span (few reports) → tall structure, closer supervision, slower communication.' },
      { id: 'cue-2', blockId: 'callout-span-tip', prompt: 'Give THREE factors that make a wide span of control appropriate.', answer: '1. Staff are well-trained and experienced. 2. Tasks are repetitive and standardised. 3. The manager is experienced and skilled. Also: technology allows remote performance monitoring.' },
      { id: 'cue-3', blockId: 'p-delegation', prompt: 'What is delegation and what are its benefits for a business?', answer: 'Delegation = passing responsibility for a specific task to a subordinate while the manager retains accountability. Benefits: frees management time for strategic work; develops staff skills; increases motivation (Herzberg: responsibility is a motivator); spreads workload.' },
      { id: 'cue-4', blockId: 'p-delayering', prompt: 'What is delayering? Give ONE advantage and ONE disadvantage.', answer: 'Delayering = removing one or more levels of management. Advantage: reduces management salary costs; speeds up communication; empowers remaining staff. Disadvantage: remaining managers\' spans increase (overstretched); redundancies damage morale.' },
      { id: 'cue-5', blockId: 'tbl-central', prompt: 'Compare centralised and decentralised decision-making. When is each appropriate?', answer: 'Centralised = all key decisions at the top. Best for: brand-sensitive decisions, compliance, crisis management. Decentralised = decisions pushed to local/department level. Best for: large geographic spread, customer-facing decisions, diverse markets. Trade-off: consistency (centralised) vs speed and staff motivation (decentralised).' }
    ]
  },
  evidence: [],
  mentions: []
};
