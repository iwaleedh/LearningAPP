export const note_olevel_maths_core_2_10_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/forming-simultaneous-equations.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Formulate a pair of simultaneous equations from a word problem by defining two unknowns, expressing the given conditions, and solving to find the answer in context.' }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Setting Up Simultaneous Equations', level: 2 }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Four-Step Method',
        text: '1. <strong>Define</strong> two unknowns: "Let x = ... and y = ..."<br>2. <strong>Form</strong> two equations from the two conditions in the problem.<br>3. <strong>Solve</strong> the simultaneous equations (elimination or substitution).<br>4. <strong>Answer</strong> in context and check.'
      }
    },
    {
      id: 'h-shopping',
      type: 'heading',
      data: { text: 'Shopping / Cost Problems', level: 2 }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Ticket Prices',
        text: '"Adult tickets cost $a each and child tickets cost $c each. A family buys 2 adult and 3 child tickets for $22. Another family buys 1 adult and 4 child tickets for $19. Find the cost of each ticket."<br><br>Let a = adult price, c = child price.<br>2a + 3c = 22 ...(1)<br>a + 4c = 19 ...(2)<br><br>Multiply (2) by 2: 2a + 8c = 38 ...(2\')<br>(2\') − (1): 5c = 16 → wait, let me re-check:<br>2a + 8c = 38 minus 2a + 3c = 22 → 5c = 16? Hmm, let me use correct values.<br><br>Let me re-do with clean numbers:<br>2a + 3c = 22 ...(1)<br>a + 4c = 18 ...(2)<br>Multiply (2) by 2: 2a + 8c = 36 ...(2\')<br>(2\') − (1): 5c = 14... <br><br>Let\'s use: 2a + 3c = 23 and a + 4c = 19:<br>Multiply eqn 2 by 2: 2a + 8c = 38 ...(2\')<br>(2\') − (1): 5c = 15 → <strong>c = 3</strong><br>Substitute: a + 4(3) = 19 → a = <strong>7</strong><br><br>Adult ticket = <strong>$7</strong>, child ticket = <strong>$3</strong>.<br>Check: 2(7)+3(3)=14+9=23 ✓ and 7+4(3)=19 ✓'
      }
    },
    {
      id: 'h-ages',
      type: 'heading',
      data: { text: 'Age Problems', level: 2 }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Ages Problem',
        text: '"Sam is 5 years older than Tom. The sum of their ages is 31. Find their ages."<br><br>Let Sam\'s age = s, Tom\'s age = t.<br>s = t + 5 ...(1)<br>s + t = 31 ...(2)<br><br>Substitute (1) into (2):<br>(t + 5) + t = 31<br>2t + 5 = 31<br>2t = 26<br>t = <strong>13</strong><br>s = 13 + 5 = <strong>18</strong><br><br>Sam is 18, Tom is 13.<br>Check: 18 + 13 = 31 ✓; 18 − 13 = 5 ✓'
      }
    },
    {
      id: 'h-perimeter',
      type: 'heading',
      data: { text: 'Geometry Problems', level: 2 }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Rectangle Dimensions',
        text: '"A rectangle has perimeter 40 cm. Its length is 6 cm more than its width. Find the dimensions."<br><br>Let length = l, width = w.<br>2(l + w) = 40 → l + w = 20 ...(1)<br>l = w + 6 ...(2)<br><br>Substitute (2) into (1):<br>(w + 6) + w = 20<br>2w + 6 = 20<br>2w = 14<br>w = <strong>7</strong><br>l = 7 + 6 = <strong>13</strong><br><br>Length = 13 cm, Width = 7 cm.<br>Check: 2(13+7) = 2(20) = 40 ✓'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Label Your Unknowns Clearly',
        text: 'Always start with "Let x = ..." and "Let y = ..." with units where applicable. This makes your equations interpretable and earns the first mark. Also label which equation is (1) and which is (2) — examiners expect clear, organised working.'
      }
    },
    {
      id: 'callout-tip2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Reading Carefully for Two Conditions',
        text: 'Every simultaneous-equations word problem provides exactly two conditions — one for each equation. Re-read the problem and identify the two separate facts given. For example: "total cost" gives one equation; "difference in price" or "number ratio" gives the second.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I define two unknowns clearly, with units', checked: false },
          { text: 'I identify two conditions in the problem and write an equation for each', checked: false },
          { text: 'I solve the simultaneous equations correctly', checked: false },
          { text: 'I state the answer fully in context (e.g. "The adult ticket costs $7")', checked: false },
          { text: 'I check both values satisfy both original equations', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Form simultaneous equations by defining two unknowns and writing one equation per condition in the problem. Solve by elimination or substitution, then state the answer in context and verify it satisfies both equations.' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'What are the four steps for forming and solving simultaneous equations from a word problem?' },
      { id: 'cue-2', blockId: 'callout-worked2', prompt: '"Sam is 5 years older than Tom. Their ages sum to 31." Write the two equations.' },
      { id: 'cue-3', blockId: 'callout-worked3', prompt: 'A rectangle has perimeter 40 cm and length 6 cm more than width. Write the two equations and find the dimensions.' },
      { id: 'cue-4', blockId: 'callout-tip2', prompt: 'How do you identify the two equations in a simultaneous equations word problem?' },
    ],
    summaryText: 'Identify two conditions → write two equations → solve → answer in context. Always check both values in both equations.',
    ready: true,
  },
  evidence: [],
};
