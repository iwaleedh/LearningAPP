export const note_olevel_maths_extended_2_7_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/linear-simultaneous-equations.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Solve simultaneous linear equations using both the elimination method and the substitution method.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Linear Simultaneous Equations', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<strong>Simultaneous equations</strong> are a pair (or set) of equations with two unknowns. The solution is the pair of values that satisfies <strong>both</strong> equations at the same time.' }
    },
    {
      id: 'h-elimination',
      type: 'heading',
      data: { text: 'Method 1: Elimination', level: 2 }
    },
    {
      id: 'p-elim',
      type: 'paragraph',
      data: { text: 'The idea is to make the coefficients of one variable the <strong>same</strong> (or negatives of each other), then add or subtract the equations to eliminate that variable.' }
    },
    {
      id: 'list-elim-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Label the equations ① and ②' },
          { text: 'Multiply one or both equations so the coefficients of one variable match' },
          { text: 'If same sign: <strong>subtract</strong>. If opposite signs: <strong>add</strong>' },
          { text: 'Solve for the remaining variable' },
          { text: 'Substitute back to find the other variable' },
          { text: '<strong>Check</strong> both values in the other equation' }
        ]
      }
    },
    {
      id: 'callout-worked-elim',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Elimination',
        text: 'Solve: &nbsp; ① 3<em>x</em> + 2<em>y</em> = 16 &nbsp;&nbsp; ② 5<em>x</em> − 2<em>y</em> = 8<br><br>Coefficients of <em>y</em> are +2 and −2 (opposite signs), so <strong>add</strong>:<br>① + ②: &nbsp; 8<em>x</em> = 24 &rarr; <em>x</em> = 3<br><br>Substitute <em>x</em> = 3 into ①: &nbsp; 3(3) + 2<em>y</em> = 16 &rarr; 2<em>y</em> = 7 &rarr; <em>y</em> = 3.5<br><br>Check in ②: 5(3) − 2(3.5) = 15 − 7 = 8 ✓<br><br><strong><em>x</em> = 3, <em>y</em> = 3.5</strong>'
      }
    },
    {
      id: 'callout-worked-elim2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Multiply First',
        text: 'Solve: &nbsp; ① 2<em>x</em> + 3<em>y</em> = 12 &nbsp;&nbsp; ② 5<em>x</em> + 4<em>y</em> = 23<br><br>Multiply ① by 5: &nbsp; 10<em>x</em> + 15<em>y</em> = 60<br>Multiply ② by 2: &nbsp; 10<em>x</em> + 8<em>y</em> = 46<br><br>Subtract: &nbsp; 7<em>y</em> = 14 &rarr; <em>y</em> = 2<br><br>Substitute into ①: 2<em>x</em> + 6 = 12 &rarr; <em>x</em> = 3<br><br><strong><em>x</em> = 3, <em>y</em> = 2</strong>'
      }
    },
    {
      id: 'h-substitution',
      type: 'heading',
      data: { text: 'Method 2: Substitution', level: 2 }
    },
    {
      id: 'list-sub-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Rearrange one equation to make one variable the subject (e.g. <em>y</em> = ...)' },
          { text: 'Substitute this expression into the other equation' },
          { text: 'Solve the resulting equation' },
          { text: 'Substitute back to find the other variable' }
        ]
      }
    },
    {
      id: 'callout-worked-sub',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Substitution',
        text: 'Solve: &nbsp; ① <em>y</em> = 2<em>x</em> − 1 &nbsp;&nbsp; ② 3<em>x</em> + 2<em>y</em> = 12<br><br>Substitute ① into ②:<br>3<em>x</em> + 2(2<em>x</em> − 1) = 12<br>3<em>x</em> + 4<em>x</em> − 2 = 12<br>7<em>x</em> = 14<br><em>x</em> = 2<br><br>Substitute into ①: <em>y</em> = 2(2) − 1 = 3<br><br><strong><em>x</em> = 2, <em>y</em> = 3</strong>'
      }
    },
    {
      id: 'table-methods',
      type: 'comparisonTable',
      data: {
        caption: 'Which method to use?',
        headers: ['Elimination', 'Substitution'],
        rows: [
          ['Best when both equations are in ax + by = c form', 'Best when one equation is already y = ... or x = ...'],
          ['Multiply to match coefficients, then add/subtract', 'Replace one variable with an expression'],
          ['Usually quicker for "standard" pairs', 'Essential for one linear + one quadratic']
        ]
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Subtracting when you should add (or vice versa) — <strong>same signs subtract, opposite signs add</strong><br>• Forgetting to multiply <strong>every term</strong> when scaling an equation<br>• Not checking the answer in <strong>both</strong> original equations'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always write your final answer as <em>x</em> = … and <em>y</em> = … clearly. Check by substituting into the equation you did NOT use for solving.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Simultaneous linear equations can be solved by elimination (match coefficients, add or subtract) or substitution (express one variable in terms of the other, substitute in). Elimination works best for standard form; substitution is best when one equation already has a variable as the subject. Always check your answer.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Two methods: elimination (match coefficients, add/subtract) and substitution (replace one variable). Always check answers in both equations.',
    cues: [
      { id: 'cue-1', blockId: 'list-elim-steps', prompt: 'When eliminating, when do you add and when do you subtract?', answer: 'Same signs &rarr; subtract. Opposite signs &rarr; add.' },
      { id: 'cue-2', blockId: 'callout-worked-elim', prompt: 'Solve: 3x + 2y = 16 and 5x − 2y = 8.', answer: 'Add: 8x = 24, x = 3, y = 3.5.' },
      { id: 'cue-3', blockId: 'table-methods', prompt: 'When is substitution preferred over elimination?', answer: 'When one equation is already in the form y = … or x = …, or for one linear + one quadratic pair.' },
      { id: 'cue-4', blockId: 'callout-worked-sub', prompt: 'Solve: y = 2x − 1 and 3x + 2y = 12.', answer: 'x = 2, y = 3.' },
      { id: 'cue-5', blockId: 'callout-warning', prompt: 'What should you always do after finding the solution?', answer: 'Check by substituting both values into the equation you did not use for solving.' }
    ]
  },
  evidence: []
};
