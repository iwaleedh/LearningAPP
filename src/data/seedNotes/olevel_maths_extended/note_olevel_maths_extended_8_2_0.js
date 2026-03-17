export const note_olevel_maths_extended_8_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Probability/possibility-sample-space-diagrams.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use possibility (sample space) diagrams to list all outcomes for two events and calculate probabilities from them.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Sample Space Diagrams', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'A <strong>sample space diagram</strong> (also called a possibility diagram) is a grid that shows <em>all possible outcomes</em> when two events happen. One event is shown on each axis. The total number of outcomes = rows × columns.' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Two Dice',
        text: 'Two fair dice are rolled. Find P(sum = 7).<br><br><strong>Solution:</strong><br>Draw a 6×6 grid showing all 36 outcomes. The pairs summing to 7 are: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = <strong>6 outcomes</strong><br><br>P(sum = 7) = <span class="nb-frac"><span class="nb-num">6</span><span class="nb-den">36</span></span> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">6</span></span>'
      }
    },
    {
      id: 'callout-key-method',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Using a Sample Space Diagram',
        text: '1. List all outcomes for Event 1 along one axis<br>2. List all outcomes for Event 2 along the other axis<br>3. Fill in the grid (usually sums, products, or pairs)<br>4. Count favourable outcomes and divide by total'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Spinner and Coin',
        text: 'A spinner has numbers 1, 2, 3. A coin has H or T. List all outcomes.<br><br><strong>Solution:</strong><br>Outcomes: (1,H), (1,T), (2,H), (2,T), (3,H), (3,T)<br>Total = 3 × 2 = <strong>6 outcomes</strong><br>P(even number and H) = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">6</span></span> [only (2,H)]'
      }
    },
    {
      id: 'callout-tip-systematic',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always be <strong>systematic</strong> when listing outcomes. A grid ensures you don\'t miss any. The total number of outcomes for two independent events is always the product of their individual outcomes.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'A sample space diagram shows all possible outcomes for two events in a grid. Count favourable outcomes and divide by the total. Total outcomes = rows × columns.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Sample space diagrams list all outcomes for two events in a grid. Probability = favourable ÷ total.',
    cues: [
      { id: 'cue-1', blockId: 'p-def', prompt: 'What is a sample space diagram?', answer: 'A grid showing all possible outcomes for two events.' },
      { id: 'cue-2', blockId: 'callout-worked-1', prompt: 'How many outcomes are there when rolling two dice?', answer: '6 × 6 = 36 outcomes.' },
      { id: 'cue-3', blockId: 'callout-worked-1', prompt: 'What is P(sum = 7) when rolling two dice?', answer: '6/36 = 1/6.' },
      { id: 'cue-4', blockId: 'callout-tip-systematic', prompt: 'How do you find total outcomes for two independent events?', answer: 'Multiply the number of outcomes for each event.' }
    ]
  },
  evidence: []
};
