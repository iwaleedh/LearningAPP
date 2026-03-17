export const note_olevel_maths_core_2_7_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/forming-equations-from-words.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Translate word problems into algebraic equations by defining unknowns, expressing information algebraically, and solving to answer the question in context.' }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'The Method: Words to Algebra', level: 2 }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Four-Step Method',
        text: '1. <strong>Define:</strong> Choose a letter for the unknown (e.g. "Let n = the number").<br>2. <strong>Express:</strong> Write all other quantities in terms of that letter.<br>3. <strong>Form:</strong> Write an equation using the condition given in the problem.<br>4. <strong>Solve:</strong> Solve the equation and state the answer in context.'
      }
    },
    {
      id: 'h-think',
      type: 'heading',
      data: { text: '"I Think of a Number" Problems', level: 2 }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: I Think of a Number',
        text: '<strong>(a)</strong> "I think of a number. I multiply it by 4 and subtract 3. The result is 21. Find the number."<br>Let n = the number.<br>4n − 3 = 21<br>4n = 24<br>n = <strong>6</strong><br><br><strong>(b)</strong> "I think of a number. I double it and add 7. The result is 3 less than 4 times the number. Find the number."<br>Let n = the number.<br>2n + 7 = 4n − 3<br>7 + 3 = 4n − 2n<br>10 = 2n<br>n = <strong>5</strong><br>Check: 2(5) + 7 = 17; 4(5) − 3 = 17 ✓'
      }
    },
    {
      id: 'h-consecutive',
      type: 'heading',
      data: { text: 'Consecutive Number Problems', level: 2 }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Consecutive Numbers',
        text: '"The sum of three consecutive integers is 63. Find them."<br><br>Let the integers be n, n+1, n+2.<br>n + (n+1) + (n+2) = 63<br>3n + 3 = 63<br>3n = 60<br>n = <strong>20</strong><br><br>Integers: 20, 21, 22.<br>Check: 20 + 21 + 22 = 63 ✓'
      }
    },
    {
      id: 'h-age',
      type: 'heading',
      data: { text: 'Age Problems', level: 2 }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Age Problem',
        text: '"Alice is 3 times as old as Ben. In 5 years, Alice will be twice as old as Ben. How old are they now?"<br><br>Let Ben\'s current age = x.<br>Alice\'s current age = 3x.<br><br>In 5 years: Ben = x+5, Alice = 3x+5.<br>Condition: 3x + 5 = 2(x + 5)<br>3x + 5 = 2x + 10<br>x = <strong>5</strong><br><br>Ben is 5, Alice is 15 now.<br>In 5 years: Ben = 10, Alice = 20. 20 = 2 × 10 ✓'
      }
    },
    {
      id: 'h-money',
      type: 'heading',
      data: { text: 'Money and Cost Problems', level: 2 }
    },
    {
      id: 'callout-worked4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Money Problem',
        text: '"A pen costs $1.20 more than a pencil. Tina buys 3 pens and 2 pencils for $8.40. Find the cost of each."<br><br>Let cost of pencil = x dollars.<br>Cost of pen = x + 1.20 dollars.<br><br>3(x + 1.20) + 2x = 8.40<br>3x + 3.60 + 2x = 8.40<br>5x + 3.60 = 8.40<br>5x = 4.80<br>x = <strong>$0.96</strong><br><br>Pencil = $0.96, Pen = $0.96 + $1.20 = <strong>$2.16</strong><br>Check: 3(2.16) + 2(0.96) = 6.48 + 1.92 = $8.40 ✓'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: State Your Answer in Context',
        text: 'Once you solve for x, always state the full answer in the context of the problem. Don\'t just write "x = 5" — write "Ben is 5 years old and Alice is 15 years old." The final mark is often for the contextual answer, not just the equation.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I define my unknown clearly (Let n = ...)', checked: false },
          { text: 'I express all other quantities in terms of n', checked: false },
          { text: 'I form a valid equation from the condition in the problem', checked: false },
          { text: 'I solve the equation and state the full answer in context', checked: false },
          { text: 'I check that my answer satisfies the original word problem', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Translate word problems by: (1) defining the unknown, (2) expressing all other quantities algebraically, (3) forming an equation from the given condition, (4) solving and answering in context. Always check the answer makes sense in the original situation.' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'What are the four steps for turning a word problem into an equation?' },
      { id: 'cue-2', blockId: 'callout-worked1', prompt: '"I think of a number, double it, add 7, and get 3 less than 4 times the number." Form and solve the equation.' },
      { id: 'cue-3', blockId: 'callout-worked2', prompt: 'Three consecutive integers sum to 63. How do you express them in terms of n? What is the equation?' },
      { id: 'cue-4', blockId: 'callout-worked3', prompt: 'Alice is 3 times Ben\'s age. In 5 years she\'ll be twice his age. How do you write the equation?' },
      { id: 'cue-5', blockId: 'callout-tip1', prompt: 'Why is it important to state your answer in context, not just write x = 5?' },
    ],
    summaryText: 'Define unknowns, express all quantities algebraically, form an equation from the given condition, solve, and state the answer in context.',
    ready: true,
  },
  evidence: [],
};
