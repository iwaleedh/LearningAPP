export const note_business_1_4_6 = {
  pdfPath: '/notes/business/wbs11-4.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the main types of organisational structure — hierarchical (tall), flat, matrix, functional, and divisional — and evaluate the advantages and disadvantages of each.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'What is Organisational Structure?', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'An <b>organisational structure</b> defines how tasks are divided, grouped, and coordinated within a business. It shows the hierarchy of authority, the chain of command, and how communication flows. Structure affects efficiency, adaptability, employee motivation, and decision-making speed. As businesses grow, they must decide how to structure themselves to remain effective.' }
    },
    {
      id: 'h-tall',
      type: 'heading',
      data: { text: 'Tall (Hierarchical) Structure', level: 2 }
    },
    {
      id: 'p-tall',
      type: 'paragraph',
      data: { text: 'A <b>tall structure</b> has many levels of management and a long chain of command. Each manager has a narrow span of control (supervises few people). Common in large, traditional organisations such as the military, the civil service, or large manufacturers.' }
    },
    {
      id: 'list-tall',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantages:</b> Clear progression paths for staff; close supervision and control; each manager has specialist knowledge of their small team' },
          { text: '<b>Disadvantages:</b> Slow communication (messages distorted through many layers); expensive (many layers of management salaries); low autonomy for front-line staff — demotivating; slower decision-making' }
        ]
      }
    },
    {
      id: 'h-flat',
      type: 'heading',
      data: { text: 'Flat Structure', level: 2 }
    },
    {
      id: 'p-flat',
      type: 'paragraph',
      data: { text: 'A <b>flat structure</b> has few levels of management and a wide span of control. Communication between management and front-line staff is more direct. Common in small businesses, start-ups, and creative organisations.' }
    },
    {
      id: 'list-flat',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantages:</b> Faster communication; greater employee autonomy (more motivating); less management overhead → lower costs; faster decision-making' },
          { text: '<b>Disadvantages:</b> Managers can be overstretched (too many direct reports); less specialist supervision; limited promotion opportunities may de-motivate career-driven staff; coordination challenges as business grows' }
        ]
      }
    },
    {
      id: 'h-matrix',
      type: 'heading',
      data: { text: 'Matrix Structure', level: 2 }
    },
    {
      id: 'p-matrix',
      type: 'paragraph',
      data: { text: 'A <b>matrix structure</b> organises employees by both function (their specialist department) <i>and</i> by project or product. An employee might report to both a functional manager (e.g. Head of Engineering) and a project manager (e.g. Project Alpha Lead). Used extensively in consultancy, construction, IT, and multinational companies.' }
    },
    {
      id: 'list-matrix',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantages:</b> Pools specialist skills on projects; flexible — teams assembled and disbanded as needed; improves cross-functional communication and collaboration' },
          { text: '<b>Disadvantages:</b> Dual authority creates confusion (who is the real boss?); potential for conflict between functional and project managers; can create role overload for employees; complex to manage' }
        ]
      }
    },
    {
      id: 'h-functional',
      type: 'heading',
      data: { text: 'Functional Structure', level: 2 }
    },
    {
      id: 'p-functional',
      type: 'paragraph',
      data: { text: 'A <b>functional structure</b> groups employees by their specialist function: Marketing, Finance, Operations, HR, etc. Each function has its own hierarchy. This is the most common structure in medium-sized businesses.' }
    },
    {
      id: 'list-functional',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantages:</b> Specialisation and expertise within each function; clear accountability; economies of scale within departments; clear career paths within functions' },
          { text: '<b>Disadvantages:</b> Silo mentality — departments focus on own goals and may not cooperate well; poor coordination across functions; departments may compete for budgets' }
        ]
      }
    },
    {
      id: 'h-divisional',
      type: 'heading',
      data: { text: 'Divisional Structure', level: 2 }
    },
    {
      id: 'p-divisional',
      type: 'paragraph',
      data: { text: 'A <b>divisional structure</b> organises by product, geography, or customer type. Each division operates semi-autonomously with its own functional departments. Used by large multinational organisations (e.g. a car company with separate divisions for different regions or vehicle types).' }
    },
    {
      id: 'list-divisional',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantages:</b> Each division can respond to its market/region; divisional leaders accountable for their own performance; flexibility to close or sell underperforming divisions' },
          { text: '<b>Disadvantages:</b> Duplication of functions (each division has its own finance team, etc.) — loss of economies of scale; divisions may compete for central resources; harder to maintain a unified corporate culture' }
        ]
      }
    },
    {
      id: 'tbl-comparison',
      type: 'comparisonTable',
      data: {
        caption: 'Organisational Structure Summary',
        headers: ['Structure', 'Key Feature', 'Best Suited To', 'Main Risk'],
        rows: [
          ['Tall', 'Many management levels; narrow span of control', 'Large traditional organisations needing close control', 'Slow communication; bureaucracy; high management costs'],
          ['Flat', 'Few levels; wide span of control', 'Small businesses, start-ups, creative industries', 'Managers overstretched; limited promotion paths'],
          ['Matrix', 'Dual reporting — function + project', 'Project-based industries (IT, consulting, construction)', 'Conflicting authority; role confusion'],
          ['Functional', 'Grouped by department (Marketing, Finance, etc.)', 'Medium-sized single-product businesses', 'Silos — poor cross-departmental coordination'],
          ['Divisional', 'Grouped by product/region/customer', 'Large multinationals with diverse product ranges', 'Duplication; loss of economies of scale'],
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Context is Key',
        text: 'Never say one structure is "best" without considering context. A small digital agency suits a flat/matrix structure for agility. A global bank needs divisional structure for regional accountability. In evaluation questions, consider: size, rate of change, need for control vs innovation, and number of products/markets served.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '<b>Tall</b> structures: many layers, narrow span, good control but slow. <b>Flat</b>: few layers, wide span, fast communication but managers stretched. <b>Matrix</b>: dual authority (function + project), flexible but complex. <b>Functional</b>: specialist departments, clear paths but silos. <b>Divisional</b>: by product/region, responsive but costly duplication. Best structure depends on size, strategy, and operating environment.' }
    },
    {
      "id": "enr-t4b-p-structure-motivation",
      "type": "paragraph",
      "data": {
        "text": "Organisational structure directly shapes employee motivation and communication speed. <b>Flat structures</b> increase autonomy and reduce bureaucracy, satisfying Maslow's esteem needs and aligning with McGregor's Theory Y. <b>Tall structures</b> with narrow spans allow close supervision — consistent with Theory X assumptions. When a business delayers or moves to a matrix structure, it signals a shift toward empowerment and decentralised decision-making. Structure is therefore not just an administrative choice — it reflects the business's beliefs about how people are best managed."
      }
    },
    {
      "id": "enr-t4b-list-structure-factors",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          { "text": "<b>Size:</b> large businesses with diverse product lines suit divisional; smaller businesses suit flat" },
          { "text": "<b>Rate of change:</b> fast-moving industries (tech, fashion) benefit from flat or matrix structures for agility" },
          { "text": "<b>Control needs:</b> high-compliance sectors (banking, pharmaceuticals) favour tall, centralised structures" },
          { "text": "<b>Strategy:</b> diversification requires divisional structure; single-product firms suit functional" },
          { "text": "<b>Culture:</b> innovative, creative cultures suit flat/matrix; traditional hierarchies suit tall/functional" }
        ]
      }
    },
    {
      "id": "enr-t4b-callout-spotify",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Real World: Spotify — Squad Model",
        "text": "Spotify replaced traditional departments with small, cross-functional 'Squads' of 6–12 people — effectively a hybrid flat/matrix structure. Each Squad owns a single feature (e.g. Search, Payment) end-to-end. This approach increased innovation speed and reduced bureaucracy. However, as Spotify scaled beyond 10,000 employees, coordination between Squads became complex — illustrating how structure must evolve with business size, and that no single structure is permanently optimal."
      }
    },
    {
      "id": "enr-t4b-callout-student-6",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Student Perspective: Your School as an Organisation",
        "text": "Think about how your school is structured. Subject <b>departments</b> (Maths, Science, English) are a <b>functional structure</b> — specialist expertise and clear roles, but departments can become siloed. When teachers from different subjects run a project week together, that's a <b>matrix structure</b>. A school principal who makes every decision alone is centralised (autocratic); one who empowers heads of department is decentralised (democratic). Which structure makes your school most effective — and why?"
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Tall = many layers, narrow span. Flat = few layers, wide span. Matrix = dual reporting (function + project). Functional = departments (Finance/Marketing etc.). Divisional = by product/region. Each has trade-offs: tall=control vs slow; flat=fast vs overstretched managers; matrix=flexible vs confused authority.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-comparison', prompt: 'What are the main differences between a tall and a flat organisational structure?', answer: 'Tall: many management levels, narrow span of control, slow communication, high management costs but close supervision. Flat: few levels, wide span, faster communication, lower costs, greater employee autonomy — but managers can be overstretched.' },
      { id: 'cue-2', blockId: 'p-matrix', prompt: 'What is a matrix structure and what is its main disadvantage?', answer: 'A matrix structure organises staff by both function (e.g. engineering) AND project. Main disadvantage: dual authority — employees report to two managers (functional + project), which can cause conflict and confusion about priorities.' },
      { id: 'cue-3', blockId: 'list-functional', prompt: 'What is a functional structure? Give ONE advantage and ONE disadvantage.', answer: 'Functional = groups staff by specialist department (Marketing, Finance, HR, etc.). Advantage: deep expertise and clear career paths within functions. Disadvantage: silo mentality — departments focus on own goals and cooperate poorly across functions.' },
      { id: 'cue-4', blockId: 'p-divisional', prompt: 'Why might a large multinational company choose a divisional structure?', answer: 'Divisions (by product, region, or customer type) allow each part of the business to respond to its own market conditions. Divisional managers are accountable for their own performance. However, it creates costly duplication of functions (e.g. each division needs its own HR and finance team).' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'Give TWO factors a business should consider when choosing an organisational structure.', answer: 'Any 2 of: size of the business; rate of change in the environment; need for control vs creative flexibility; number of different products or markets served; management style (centralised vs decentralised decision-making).' }
    ]
  },
  evidence: [],
  mentions: []
};
