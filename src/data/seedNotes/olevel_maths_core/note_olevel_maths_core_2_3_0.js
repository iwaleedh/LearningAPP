export const note_olevel_maths_core_2_3_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/collecting-like-terms.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify like terms and simplify algebraic expressions by collecting like terms, including expressions with multiple different variables and powers.' }
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What are Like Terms?', level: 2 }
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: { text: '<strong>Like terms</strong> are terms that have exactly the same variable(s) raised to exactly the same power(s). Only like terms can be added or subtracted. The coefficients can differ — it is the variable part that must match.' }
    },
    {
      id: 'tbl-like',
      type: 'comparisonTable',
      data: {
        caption: 'Identifying like and unlike terms',
        headers: ['Pair', 'Like or Unlike?', 'Reason'],
        rows: [
          ['3x and 5x', 'Like', 'Both have variable x to power 1'],
          ['2x² and 7x²', 'Like', 'Both have variable x to power 2'],
          ['4xy and −9xy', 'Like', 'Both have xy (same variables, same powers)'],
          ['3x and 3x²', 'Unlike', 'Different powers of x (x¹ ≠ x²)'],
          ['5x and 5y', 'Unlike', 'Different variables (x ≠ y)'],
          ['6 and −11', 'Like', 'Both are constants (no variable)'],
        ]
      }
    },
    {
      id: 'h-collect',
      type: 'heading',
      data: { text: 'Collecting Like Terms', level: 2 }
    },
    {
      id: 'p-collect',
      type: 'paragraph',
      data: { text: 'To simplify, group the like terms together, then add (or subtract) their coefficients. Think of it like collecting coins of the same denomination.' }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Method: Collecting Like Terms',
        text: '1. Identify all sets of like terms in the expression.<br>2. Group each set together (reorder if helpful).<br>3. Add/subtract the coefficients within each group.<br>4. Write the simplified result.<br><br>You CANNOT add unlike terms — 3x + 2y cannot be simplified further.'
      }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Single Variable',
        text: '<strong>(a)</strong> 3x + 5x = <strong>8x</strong><br>(Both terms are multiples of x; add coefficients: 3+5=8)<br><br><strong>(b)</strong> 7y − 4y = <strong>3y</strong><br><br><strong>(c)</strong> 9a − a = 9a − 1a = <strong>8a</strong><br>(Remember: a = 1a)<br><br><strong>(d)</strong> 5x + 3 − 2x + 8<br>x-terms: 5x − 2x = 3x<br>constants: 3 + 8 = 11<br>= <strong>3x + 11</strong>'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Mixed Powers and Variables',
        text: 'Simplify: 2x² + 3x − x² + 4x − 5<br><br>Step 1 — Group like terms:<br>x²-terms: 2x² − x² = 1x² = x²<br>x-terms: 3x + 4x = 7x<br>constants: −5<br><br>Step 2 — Write result: <strong>x² + 7x − 5</strong>'
      }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Two Variables',
        text: 'Simplify: 5a + 3b − 2a + 7b − 4<br><br>a-terms: 5a − 2a = 3a<br>b-terms: 3b + 7b = 10b<br>constants: −4<br><br>Result: <strong>3a + 10b − 4</strong><br><br>Note: 3a and 10b are unlike terms (different variables) — they cannot be combined further.'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Mark Your Like Terms',
        text: 'In an exam, if an expression looks complicated, use different symbols (underline, circle, box) to mark each group of like terms before collecting them. This prevents mistakes in longer expressions.<br><br>E.g. <u>4x²</u> + 3x − <u>x²</u> + 7 + 5x:<br>Underline x²-terms, circle x-terms, box constants.'
      }
    },
    {
      id: 'callout-warning1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake: Adding Unlike Terms',
        text: 'You cannot add 3x² + 5x — these are unlike terms (different powers).<br>Similarly, 4x + 3y ≠ 7xy.<br>If in doubt, ask: do both terms have <em>exactly</em> the same letters to <em>exactly</em> the same powers? If not → unlike, leave them separate.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can identify which terms are like (same variable, same power)', checked: false },
          { text: 'I can simplify single-variable expressions by collecting like terms', checked: false },
          { text: 'I know that a = 1a (so 9a − a = 8a)', checked: false },
          { text: 'I can simplify expressions with multiple variables (a and b)', checked: false },
          { text: 'I do not add unlike terms (3x² + 5x stays as is)', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '<strong>Like terms</strong> share the same variable(s) and the same power(s). To simplify, group like terms and add or subtract their coefficients. Unlike terms (different variables or different powers) <em>cannot</em> be combined. Remember: a = 1a, so 9a − a = 8a.' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'tbl-like', prompt: 'Are 3x and 3x² like terms? Explain why or why not.' },
      { id: 'cue-2', blockId: 'callout-worked1', prompt: 'Simplify: 9a − a. What is the coefficient of a?' },
      { id: 'cue-3', blockId: 'callout-worked2', prompt: 'Simplify: 2x² + 3x − x² + 4x − 5. Show your grouping.' },
      { id: 'cue-4', blockId: 'callout-warning1', prompt: 'Why can\'t you simplify 3x² + 5x to 8x³?' },
      { id: 'cue-5', blockId: 'callout-worked3', prompt: 'Simplify: 5a + 3b − 2a + 7b − 4.' },
    ],
    summaryText: 'Like terms share the same variable and power; collect them by adding or subtracting coefficients, and never combine unlike terms.',
    ready: true,
  },
  evidence: [],
};
