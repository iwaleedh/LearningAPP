export const note_olevel_maths_extended_2_9_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/forming-equations-from-words.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Translate word problems into algebraic equations and solve them.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Forming Equations from Words', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Many exam questions describe a situation in words and ask you to form an equation. The skill is <strong>translating English into algebra</strong> step by step.' }
    },
    {
      id: 'h-keywords',
      type: 'heading',
      data: { text: 'Key Word Translations', level: 2 }
    },
    {
      id: 'table-keywords',
      type: 'comparisonTable',
      data: {
        caption: 'Common keywords and their algebraic meanings',
        headers: ['Words', 'Algebra'],
        rows: [
          ['sum of / more than / increased by', '+'],
          ['difference / less than / decreased by', '−'],
          ['product of / times / of', '×'],
          ['quotient / divided by / per', '÷'],
          ['is / equals / gives / results in', '='],
          ['twice / double', '2×'],
          ['consecutive numbers', '<em>n</em>, <em>n</em> + 1, <em>n</em> + 2, …'],
          ['consecutive even/odd', '<em>n</em>, <em>n</em> + 2, <em>n</em> + 4, …']
        ]
      }
    },
    {
      id: 'callout-key-method',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Step-by-Step Method',
        text: '<strong>1.</strong> Define your variable: "Let <em>x</em> = …"<br><strong>2.</strong> Write each quantity in terms of <em>x</em><br><strong>3.</strong> Form the equation using the relationship described<br><strong>4.</strong> Solve the equation<br><strong>5.</strong> Answer the question in context (not just "<em>x</em> = 7")'
      }
    },
    {
      id: 'callout-worked-age',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Age Problem',
        text: '"Sarah is 5 years older than Tom. The sum of their ages is 31. Find their ages."<br><br>Let Tom\'s age = <em>x</em><br>Sarah\'s age = <em>x</em> + 5<br><br>Equation: <em>x</em> + (<em>x</em> + 5) = 31<br>2<em>x</em> + 5 = 31<br>2<em>x</em> = 26<br><em>x</em> = 13<br><br><strong>Tom is 13, Sarah is 18.</strong>'
      }
    },
    {
      id: 'callout-worked-consec',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Consecutive Numbers',
        text: '"Three consecutive integers have a sum of 72. Find them."<br><br>Let the numbers be <em>n</em>, <em>n</em> + 1, <em>n</em> + 2<br><br><em>n</em> + (<em>n</em> + 1) + (<em>n</em> + 2) = 72<br>3<em>n</em> + 3 = 72<br>3<em>n</em> = 69<br><em>n</em> = 23<br><br><strong>The numbers are 23, 24, 25.</strong>'
      }
    },
    {
      id: 'callout-worked-money',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Money Problem',
        text: '"A pen costs $<em>x</em>. A notebook costs $3 more than a pen. Ahmed buys 4 pens and 2 notebooks and pays $26. Find the cost of a pen."<br><br>Pen = <em>x</em>, Notebook = <em>x</em> + 3<br><br>4<em>x</em> + 2(<em>x</em> + 3) = 26<br>4<em>x</em> + 2<em>x</em> + 6 = 26<br>6<em>x</em> = 20<br><em>x</em> = <span class="nb-frac"><span class="nb-num">10</span><span class="nb-den">3</span></span> ≈ $3.33<br><br><strong>A pen costs $3.33 (to nearest cent).</strong>'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Not defining the variable clearly<br>• Confusing "5 less than <em>x</em>" (<em>x</em> − 5) with "5 less <em>x</em>" (5 − <em>x</em>)<br>• Giving <em>x</em> = 7 as the final answer when the question asks for a specific quantity'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always start by writing "Let <em>x</em> = ..." — this earns a method mark even if you make an error later. And always answer in context: "The length is 12 cm", not just "x = 12".'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'To form equations from words: define a variable, express all quantities in terms of it, use the relationship described to write an equation, solve, and answer in context. Learn the keyword translations (sum &rarr; +, product &rarr; ×, etc.).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Define a variable, express quantities algebraically, form and solve the equation, answer in context.',
    cues: [
      { id: 'cue-1', blockId: 'table-keywords', prompt: 'What does "the sum of" translate to in algebra?', answer: 'Addition (+).' },
      { id: 'cue-2', blockId: 'callout-key-method', prompt: 'What should you always write first when forming an equation?', answer: 'Let x = … (define your variable clearly).' },
      { id: 'cue-3', blockId: 'callout-worked-consec', prompt: 'How do you represent three consecutive integers algebraically?', answer: 'n, n + 1, n + 2.' },
      { id: 'cue-4', blockId: 'callout-warning', prompt: 'What is the difference between "5 less than x" and "5 less x"?', answer: '"5 less than x" = x − 5. "5 less x" = 5 − x.' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'Why should you answer in context, not just give x = 7?', answer: 'The question asks for a real-world quantity (age, cost, length), not just a number.' }
    ]
  },
  evidence: []
};
