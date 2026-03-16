export const note_business_3_13_7 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Interpret Critical Path Analysis (CPA) network diagrams to calculate the earliest and latest possible project completion times.' } },
    { id: 'h1', type: 'heading', data: { text: 'Critical Path Analysis (CPA)', level: 2 } },
    { id: 'p1', type: 'paragraph', data: { text: 'Critical Path Analysis (CPA) is a project management tool used to map out the optimal sequence of tasks required to complete a complex project on time. It is vital for ventures like construction or software development involving simultaneous tasks.' } },
    { id: 'h2', type: 'heading', data: { text: 'Nodes and the Network Diagram', level: 3 } },
    { id: 'p2', type: 'paragraph', data: { text: 'CPA uses network diagrams constructed using circles, called nodes, connected by lines indicating the duration and dependencies of activities.' } },
    { id: 'list1', type: 'list', data: { style: 'bullet', items: [
      { text: '**Nodes:** Each circle is divided into three sections: Node Number (left), Earliest Start Time (EST, top right), and Latest Finish Time (LFT, bottom right).' },
      { text: '**Activities:** Lines usually marked with a letter and representing the actual task.' },
      { text: '**Duration:** The time taken for the activity, written under the line.' },
      { text: '**Dependencies:** Some tasks cannot be initiated until a preceding task concludes. You cannot install a roof until the foundation is laid.' }
    ]} },
    { id: 'h3', type: 'heading', data: { text: 'EST and LFT', level: 3 } },
    { id: 'p3', type: 'paragraph', data: { text: 'The **Earliest Start Time (EST)** is calculated by moving forward (left to right) through the diagram. It adds the duration of tasks to find the earliest point the next task can begin. (If multiple paths meet, use the highest value).' } },
    { id: 'p4', type: 'paragraph', data: { text: 'The **Latest Finish Time (LFT)** is calculated by working backward (right to left) starting from the project EST total. It deducts task durations. (If multiple paths recede, use the lowest value).' } },
    { id: 'call1', type: 'callout', data: { style: 'warning', title: 'Watch Out', text: 'When calculating the EST, always take the highest previous total. The project cannot move forward until ALL dependent lines have completed.' } },
    { id: 'sum', type: 'summary', data: { text: 'CPA maps project tasks dynamically. By finding earliest start and latest finish times, managers can coordinate resources, staff, and materials explicitly efficiently.' } },
    {
      id: 'enr-svg-cpa',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 320"><rect width="620" height="320" fill="#f8fafc"/><circle cx="60" cy="160" r="30" fill="white" stroke="#4f46e5" stroke-width="2"/><text x="60" y="155" text-anchor="middle" font-size="9" fill="#4f46e5" font-family="sans-serif">0</text><text x="60" y="168" text-anchor="middle" font-size="9" fill="#4f46e5" font-family="sans-serif">0</text><line x1="50" y1="160" x2="50" y2="160"/><line x1="60" y1="130" x2="60" y2="130"/><line x1="58" y1="145" x2="62" y2="145" stroke="#6b7280" stroke-width="1"/><circle cx="200" cy="100" r="30" fill="white" stroke="#4f46e5" stroke-width="2"/><text x="200" y="95" text-anchor="middle" font-size="9" fill="#4f46e5" font-family="sans-serif">3</text><text x="200" y="108" text-anchor="middle" font-size="9" fill="#4f46e5" font-family="sans-serif">3</text><circle cx="200" cy="240" r="30" fill="white" stroke="#6b7280" stroke-width="2"/><text x="200" y="235" text-anchor="middle" font-size="9" fill="#6b7280" font-family="sans-serif">0</text><text x="200" y="248" text-anchor="middle" font-size="9" fill="#6b7280" font-family="sans-serif">5</text><circle cx="370" cy="160" r="30" fill="white" stroke="#4f46e5" stroke-width="2"/><text x="370" y="155" text-anchor="middle" font-size="9" fill="#4f46e5" font-family="sans-serif">5</text><text x="370" y="168" text-anchor="middle" font-size="9" fill="#4f46e5" font-family="sans-serif">5</text><circle cx="520" cy="160" r="30" fill="white" stroke="#4f46e5" stroke-width="2"/><text x="520" y="155" text-anchor="middle" font-size="9" fill="#4f46e5" font-family="sans-serif">7</text><text x="520" y="168" text-anchor="middle" font-size="9" fill="#4f46e5" font-family="sans-serif">7</text><line x1="90" y1="140" x2="170" y2="108" stroke="#ef4444" stroke-width="3"/><text x="122" y="113" font-size="11" fill="#ef4444" font-family="sans-serif" font-weight="bold">A(3)</text><line x1="90" y1="180" x2="170" y2="228" stroke="#6b7280" stroke-width="2"/><text x="110" y="220" font-size="11" fill="#6b7280" font-family="sans-serif">C(5)</text><line x1="230" y1="100" x2="340" y2="145" stroke="#ef4444" stroke-width="3"/><text x="275" y="110" font-size="11" fill="#ef4444" font-family="sans-serif" font-weight="bold">B(2)</text><line x1="230" y1="240" x2="345" y2="175" stroke="#6b7280" stroke-width="2"/><text x="265" y="230" font-size="11" fill="#6b7280" font-family="sans-serif">D(1)</text><line x1="400" y1="160" x2="490" y2="160" stroke="#ef4444" stroke-width="3"/><text x="435" y="152" font-size="11" fill="#ef4444" font-family="sans-serif" font-weight="bold">E(2)</text><text x="310" y="290" font-size="12" fill="#ef4444" font-family="sans-serif" font-weight="bold">Critical path: 1→2→4→5 = A+B+E = 7 days</text><text x="310" y="308" font-size="10" fill="#6b7280" font-family="sans-serif">Float on path via node 3 = 5−0−5 = 0 days (also critical via D if timed differently)</text></svg>`,
        caption: 'CPA network: critical path (red) = A+B+E = 7 days; EST/LFT shown in node circles'
      }
    },
    {
      id: 'enr-callout-worked-restaurant',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Opening a restaurant — CPA worked example',
        text: 'Activities: A=Fit kitchen (6 days), B=Order furniture (3 days, depends on A), C=Hire staff (4 days, can start Day 0), D=Train staff (2 days, depends on A+C). Critical path = C→D or A→B — whichever is longer. Any delay to a critical activity delays the entire opening. Non-critical activities have float; critical ones have zero float.'
      }
    },
    {
      id: 'enr-callout-tip-cpa',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip: critical path definition',
        text: 'Critical path = the longest path through the network = minimum project duration. Any delay to a critical activity delays the WHOLE project. Non-critical activities have FLOAT time. In exam questions, always identify (1) the critical path route, (2) the minimum project time, (3) the float on any non-critical activity.'
      }
    },
  ],
  recall: {
    enabled: true,
    summaryText: 'CPA is a project management tool mapping task orders via EST and LFT to find efficiency.',
    cues: [
      { id: 'c1', blockId: 'p1', prompt: 'What is Critical Path Analysis designed to do?', answer: 'It maps the optimal sequence and timing of tasks needed to complete a complex project efficiently.' },
      { id: 'c2', blockId: 'list1', prompt: 'What information is contained in the three sections of a CPA node?', answer: 'The Node Number, the Earliest Start Time (EST), and the Latest Finish Time (LFT).' },
      { id: 'c3', blockId: 'p3', prompt: 'When moving left-to-right to calculate EST and two paths converge, which time is chosen?', answer: 'The highest value.' },
      { id: 'c4', blockId: 'p4', prompt: 'When moving right-to-left to calculate LFT, how is it determined?', answer: 'By subtracting task durations from the LFT, choosing the lower value if paths split.' }
    ]
  }
};