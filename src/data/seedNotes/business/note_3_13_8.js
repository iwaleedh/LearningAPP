export const note_business_3_13_8 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Identify the critical path and calculate float times for non-critical activities.' } },
    { id: 'h1', type: 'heading', data: { text: 'Critical Path and Float', level: 2 } },
    { id: 'p1', type: 'paragraph', data: { text: 'Within a Critical Path Analysis (CPA) network diagram, there will be key tasks that define the minimum time the whole project requires, and tasks that have extra flexibility. These are separated into critical activities and float activities.' } },
    { id: 'h2', type: 'heading', data: { text: 'The Critical Path', level: 3 } },
    { id: 'p2', type: 'paragraph', data: { text: 'The critical path is the continuous sequence of activities from start to finish where the **Earliest Start Time (EST) equals the Latest Finish Time (LFT)** at every connecting node. The critical path governs total project completion time.' } },
    { id: 'call1', type: 'callout', data: { style: 'key', title: 'Critical Activities', text: 'Any delay to an activity on the critical path will delay the completion of the entire project.' } },
    { id: 'h3', type: 'heading', data: { text: 'Calculating Float', level: 3 } },
    { id: 'p3', type: 'paragraph', data: { text: 'Total float is the amount of time a non-critical activity can be delayed without delaying the whole project. Activities on the critical path have a float of exactly zero.' } },
    { id: 'eq', type: 'equation', data: { html: '<p>Total Float = LFT (of next node) - EST (of current node) - Duration</p>', caption: 'Calculating Total Float' } },
    { id: 'call2', type: 'callout', data: { style: 'worked', title: 'Worked Example: Float', text: 'Task C connects Node 2 to Node 4.\nNode 2 EST = 10 days.\nTask C duration = 6 days.\nNode 4 LFT = 22 days.\nTotal Float = 22 - 10 - 6 = 6 days.\nTask C can be delayed by 6 days without harming the overall timeline.' } },
    { id: 'h3', type: 'heading', data: { text: 'Evaluation of CPA', level: 3 } },
    { id: 'table', type: 'comparisonTable', data: {
      caption: 'Strengths and Weaknesses of CPA',
      headers: ['Strengths', 'Weaknesses'],
      rows: [
        ['Allows managers to identify float tasks to transfer staff to delayed critical tasks.', 'The network diagram is complex to map out and heavily reliant on accurate time estimates.'],
        ['Minimizes working capital tied up via enabling JIT (Just In Time) stock delivery dates.', 'CPA does not guarantee success if components or subcontractors let the firm down.'],
        ['Provides an absolute minimum completion time for stakeholders and clients.', 'Focuses purely on time efficiency; ignores the actual quality of the output.']
      ]
    }},
    { id: 'sum', type: 'summary', data: { text: 'Identifying the critical path highlights where project delays will be fatal to the deadline. Calculating total float permits management to reallocate resources dynamically from non-critical tasks.' } },
    {
      id: 'enr-callout-worked-float',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Float calculation worked example',
        text: 'In a 7-day project, Activity C has EST=1, LFT=5, Duration=3. Total Float = LFT − EST − Duration = 5−1−3 = 1 day. Activity C can start up to 1 day late without delaying following activities. The project manager may choose to deploy those workers elsewhere on Day 1 and move them to Activity C on Day 2.'
      }
    },
    {
      id: 'enr-callout-worked-party',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Birthday party planning — everyday float example',
        text: 'Planning a birthday party: Making the cake = critical activity (0 float — must be ready for the party). Sending invites = 2 days float (can be done any time in the 3 days before the party). Buying balloons = 1 day float. Float lets you prioritise activities and reschedule flexible tasks without delaying the event.'
      }
    },
    {
      id: 'enr-callout-tip-float',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip: free float vs total float',
        text: 'Total Float = LFT − EST − Duration (maximum delay without delaying the project). Free Float = delay without delaying the NEXT activity (always ≤ total float). Examiners expect you to: (1) calculate total float, (2) interpret what it means for resource management, (3) distinguish free vs total float in higher-mark questions.'
      }
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'The critical path shows tasks with zero delay margin. Float calculates spare time on non-critical tasks.',
    cues: [
      { id: 'c1', blockId: 'p2', prompt: 'What defines the critical path in a CPA diagram?', answer: 'The line of activities where the EST and LFT on connecting nodes are completely equal.' },
      { id: 'c2', blockId: 'call1', prompt: 'What happens if a critical activity is delayed?', answer: 'The entire completion time of the overall project is delayed.' },
      { id: 'c3', blockId: 'eq', prompt: 'What is the formula used to calculate total float?', answer: 'Total Float = LFT (of destination node) - EST (of start node) - Duration of the task.' },
      { id: 'c4', blockId: 'table', prompt: 'How does CPA help with stock management?', answer: 'Since exact start times are calculated, supplies can be ordered just-in-time, saving storage costs.' }
    ]
  }
};