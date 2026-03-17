export const note_olevel_maths_core_2_10_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/solving-simultaneous-equations.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Solve a pair of simultaneous linear equations using the elimination method and the substitution method, and check solutions.' }
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What Are Simultaneous Equations?', level: 2 }
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: { text: 'Simultaneous equations are two (or more) equations that are both true at the same time. The solution is the pair of values (x, y) that satisfies <em>both</em> equations simultaneously. Graphically, this is the point where the two lines intersect.' }
    },
    {
      id: 'h-elimination',
      type: 'heading',
      data: { text: 'Method 1: Elimination', level: 2 }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Elimination Method Steps',
        text: '1. If necessary, <strong>multiply</strong> one or both equations so the coefficients of one variable are equal (or equal and opposite).<br>2. <strong>Add or subtract</strong> the equations to eliminate that variable.<br>3. <strong>Solve</strong> the resulting single-variable equation.<br>4. <strong>Substitute back</strong> to find the other variable.<br>5. <strong>Check</strong> both values satisfy both original equations.'
      }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Elimination (Simple)',
        text: 'Solve: 3x + 2y = 13 ...(1) &nbsp; and &nbsp; 5x − 2y = 11 ...(2)<br><br>Step 1: Coefficients of y are already +2 and −2 → add the equations:<br>(1) + (2): 8x = 24<br>x = <strong>3</strong><br><br>Step 2: Substitute x = 3 into (1):<br>3(3) + 2y = 13<br>9 + 2y = 13<br>2y = 4<br>y = <strong>2</strong><br><br>Solution: x = 3, y = 2<br>Check in (2): 5(3) − 2(2) = 15 − 4 = 11 ✓'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Elimination (Multiply First)',
        text: 'Solve: 4x + 3y = 18 ...(1) &nbsp; and &nbsp; 2x − y = 4 ...(2)<br><br>Step 1: Multiply (2) by 3 to match y-coefficient:<br>6x − 3y = 12 ...(2\')<br><br>Step 2: Add (1) + (2\'):<br>10x = 30<br>x = <strong>3</strong><br><br>Step 3: Substitute x = 3 into (2): 2(3) − y = 4 → y = <strong>2</strong><br><br>Check in (1): 4(3) + 3(2) = 12 + 6 = 18 ✓'
      }
    },
    {
      id: 'h-substitution',
      type: 'heading',
      data: { text: 'Method 2: Substitution', level: 2 }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Substitution Method',
        text: 'Solve: y = 2x − 1 ...(1) &nbsp; and &nbsp; 3x + y = 9 ...(2)<br><br>Equation (1) already gives y in terms of x. Substitute into (2):<br>3x + (2x − 1) = 9<br>5x − 1 = 9<br>5x = 10<br>x = <strong>2</strong><br><br>Substitute x = 2 into (1): y = 2(2) − 1 = <strong>3</strong><br><br>Solution: x = 2, y = 3<br>Check in (2): 3(2) + 3 = 9 ✓'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Which Method to Use?',
        text: '• If an equation already has y (or x) isolated (e.g. y = 2x − 1), use <strong>substitution</strong>.<br>• If both equations have matching or easily matchable coefficients, use <strong>elimination</strong>.<br>• Always <strong>check</strong> your solution by substituting x and y into the equation you did not use to find the second variable.'
      }
    },
    {
      id: 'callout-warning1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake: Not Checking the Answer',
        text: 'After finding x and y, always substitute back into <strong>both</strong> original equations to check. A sign error early on can give plausible-looking but incorrect values — the check will catch it.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can solve simultaneous equations by elimination', checked: false },
          { text: 'I can multiply equations to match coefficients before eliminating', checked: false },
          { text: 'I can use substitution when one variable is already isolated', checked: false },
          { text: 'I always substitute back to find the second variable', checked: false },
          { text: 'I check my solution in both original equations', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Solve simultaneous equations by <strong>elimination</strong> (make one coefficient the same, then add or subtract) or <strong>substitution</strong> (rearrange one equation and substitute into the other). Always find both unknowns and check in both original equations.' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'List the 5 steps of the elimination method for simultaneous equations.' },
      { id: 'cue-2', blockId: 'callout-worked1', prompt: 'Solve: 3x + 2y = 13 and 5x − 2y = 11 by elimination.' },
      { id: 'cue-3', blockId: 'callout-worked2', prompt: 'Solve: 4x + 3y = 18 and 2x − y = 4. Which equation do you multiply and by what?' },
      { id: 'cue-4', blockId: 'callout-worked3', prompt: 'Solve using substitution: y = 2x − 1 and 3x + y = 9.' },
      { id: 'cue-5', blockId: 'callout-tip1', prompt: 'How do you decide whether to use elimination or substitution?' },
    ],
    summaryText: 'Elimination: match one coefficient, add/subtract equations, solve, substitute back. Substitution: rearrange one equation, substitute into the other. Always check.',
    ready: true,
  },
  evidence: [],
};
