export const note_olevel_maths_core_2_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/algebraic-notation.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand algebraic notation: identify variables, constants and coefficients; write algebraic expressions from word descriptions; apply correct algebraic conventions.' }
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What is Algebra?', level: 2 }
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: { text: 'Algebra uses <strong>letters</strong> to represent unknown or changing quantities. Instead of writing "a number plus 5", we write <strong>n + 5</strong>, where <em>n</em> can take any value. This lets us write general rules that work for all numbers.' }
    },
    {
      id: 'h-parts',
      type: 'heading',
      data: { text: 'Parts of an Algebraic Expression', level: 2 }
    },
    {
      id: 'tbl-parts',
      type: 'comparisonTable',
      data: {
        caption: 'Key algebraic vocabulary',
        headers: ['Part', 'Meaning', 'Example in 3x² − 5x + 7'],
        rows: [
          ['Variable', 'A letter representing an unknown value', 'x'],
          ['Coefficient', 'The number multiplied by a variable', '3 (for x²), −5 (for x)'],
          ['Constant', 'A fixed number with no variable', '7'],
          ['Term', 'A single number, variable, or product', '3x², −5x, 7'],
          ['Expression', 'A combination of terms (no = sign)', '3x² − 5x + 7'],
        ]
      }
    },
    {
      id: 'h-conventions',
      type: 'heading',
      data: { text: 'Algebraic Writing Conventions', level: 2 }
    },
    {
      id: 'list-conventions',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Write the coefficient <em>before</em> the variable: <strong>3x</strong>, not x3' },
          { text: 'Drop the × sign between coefficient and variable: <strong>3x</strong> means 3 × x' },
          { text: 'A coefficient of 1 is omitted: write <strong>x</strong>, not 1x' },
          { text: 'A coefficient of −1 is written as just a minus: write <strong>−x</strong>, not −1x' },
          { text: 'Write division as a fraction: <strong><span class="nb-frac"><span class="nb-num">x</span><span class="nb-den">4</span></span></strong>, not x ÷ 4' },
          { text: 'Repeated multiplication uses powers: x × x = <strong>x²</strong>, x × x × x = <strong>x³</strong>' },
        ]
      }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Convention: Coefficient of 1',
        text: 'We never write a coefficient of 1 explicitly.<br>• 1 × x → <strong>x</strong> (not 1x)<br>• 1 × y² → <strong>y²</strong> (not 1y²)<br>• −1 × z → <strong>−z</strong> (not −1z)<br>This is standard mathematical notation across the world.'
      }
    },
    {
      id: 'h-words',
      type: 'heading',
      data: { text: 'Translating Words into Expressions', level: 2 }
    },
    {
      id: 'tbl-words',
      type: 'comparisonTable',
      data: {
        caption: 'Word phrases and their algebraic equivalents',
        headers: ['Word phrase', 'Operation', 'Expression'],
        rows: [
          ['"n more than 5"', 'add', '5 + n'],
          ['"subtract 3 from x"', 'subtract', 'x − 3'],
          ['"3 times y"', 'multiply', '3y'],
          ['"a number divided by 6"', 'divide', 'n/6'],
          ['"double a number, then add 4"', 'multiply then add', '2n + 4'],
          ['"the square of x"', 'power', 'x²'],
          ['"5 less than n"', 'subtract (note order!)', 'n − 5'],
        ]
      }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Writing Expressions',
        text: '<strong>(a)</strong> "Twice a number, decreased by 9" → <strong>2n − 9</strong><br><br><strong>(b)</strong> "The product of 4 and y, added to 3" → <strong>4y + 3</strong><br><br><strong>(c)</strong> Write in correct notation: p × p → <strong>p²</strong><br><br><strong>(d)</strong> Write in correct notation: 1 × m → <strong>m</strong><br><br><strong>(e)</strong> Write in correct notation: t ÷ 5 → <strong><span class="nb-frac"><span class="nb-num">t</span><span class="nb-den">5</span></span></strong><br><br><strong>(f)</strong> "3 more than twice a number" → <strong>2n + 3</strong>'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Watch the Order for "Less Than"',
        text: '"5 less than n" means START with n and subtract 5: <strong>n − 5</strong>.<br>Students often incorrectly write 5 − n. Always ask: "less than WHAT?" — that is your starting point.'
      }
    },
    {
      id: 'callout-warning1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake: 3 × a × b',
        text: 'When multiplying two different variables: a × b = <strong>ab</strong> (not a2b or anything else).<br>Also: 3 × a × b = <strong>3ab</strong> — write the number first, then letters alphabetically.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can identify the coefficient, variable, and constant in a term', checked: false },
          { text: 'I write 1×x as x, and −1×x as −x', checked: false },
          { text: 'I can translate word phrases (including "less than") into expressions', checked: false },
          { text: 'I write division as a fraction in algebra', checked: false },
          { text: 'I write repeated multiplication as a power (e.g. p×p = p²)', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Algebra uses letters (<strong>variables</strong>) to represent unknown quantities. The <strong>coefficient</strong> is the number multiplying a variable; a coefficient of 1 is always omitted. Write expressions by translating word phrases: "more than" → +, "less than" → − (watch the order), "times" → coefficient, "divided by" → fraction.' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'tbl-parts', prompt: 'What is the difference between a coefficient and a constant? Give an example of each from 3x² − 5x + 7.' },
      { id: 'cue-2', blockId: 'callout-key1', prompt: 'Why do we write x instead of 1x in algebra?' },
      { id: 'cue-3', blockId: 'tbl-words', prompt: 'Write the expression for "5 less than n". Why is it not 5 − n?' },
      { id: 'cue-4', blockId: 'list-conventions', prompt: 'How do you write a ÷ 3 in standard algebraic notation?' },
      { id: 'cue-5', blockId: 'callout-worked1', prompt: 'Write "twice a number, decreased by 9" as an expression.' },
    ],
    summaryText: 'Algebraic notation uses letters for unknown values; coefficients are written before variables, and a coefficient of 1 is always dropped.',
    ready: true,
  },
  evidence: [],
};
