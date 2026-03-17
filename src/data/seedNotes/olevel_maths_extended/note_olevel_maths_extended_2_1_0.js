export const note_olevel_maths_extended_2_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/algebraic-vocabulary.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and use key algebraic vocabulary including variable, constant, coefficient, term, expression, equation, formula, and identity.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Algebraic Vocabulary', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Algebra uses letters to represent unknown or variable quantities. Before working with algebraic expressions and equations, you need to understand the key terminology.' }
    },
    {
      id: 'callout-key-terms',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definitions',
        text: '<strong>Variable</strong> — a letter that represents a value that can change (e.g. <em>x</em>, <em>y</em>).<br><br><strong>Constant</strong> — a fixed number that does not change (e.g. 5, −3, π).<br><br><strong>Coefficient</strong> — the number multiplied by a variable (e.g. in 7<em>x</em>, the coefficient is 7).<br><br><strong>Term</strong> — a single number, variable, or number × variable(s), separated by + or − signs (e.g. 3<em>x</em>², −2<em>y</em>, 5).'
      }
    },
    {
      id: 'h-expression',
      type: 'heading',
      data: { text: 'Expressions, Equations, Formulas and Identities', level: 2 }
    },
    {
      id: 'table-comparison',
      type: 'comparisonTable',
      data: {
        caption: 'The four key algebraic structures',
        headers: ['Name', 'Has = sign?', 'Example', 'True for…'],
        rows: [
          ['Expression', 'No', '3x + 2y − 5', "N/A — it's a phrase, not a sentence"],
          ['Equation', 'Yes', '3x + 2 = 14', 'Specific value(s) of the variable'],
          ['Formula', 'Yes', 'A = πr²', 'Shows relationship between quantities'],
          ['Identity', 'Yes (≡)', '2(x + 3) ≡ 2x + 6', 'All values of the variable']
        ]
      }
    },
    {
      id: 'callout-tip-identity',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Identities',
        text: 'An <strong>identity</strong> uses the ≡ symbol and is true for <em>every</em> value of the variable. An <strong>equation</strong> uses = and is only true for particular value(s).<br><br>Example: 2(x + 1) ≡ 2x + 2 is an identity, but 2x + 2 = 10 is an equation (only true when x = 4).'
      }
    },
    {
      id: 'h-parts',
      type: 'heading',
      data: { text: 'Identifying Parts of an Expression', level: 2 }
    },
    {
      id: 'p-parts',
      type: 'paragraph',
      data: { text: 'Consider the expression <strong>4x² − 3xy + 7y − 9</strong>:' }
    },
    {
      id: 'list-parts',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Terms:</strong> 4x², −3xy, 7y, −9' },
          { text: '<strong>Coefficients:</strong> 4 (of x²), −3 (of xy), 7 (of y)' },
          { text: '<strong>Constant term:</strong> −9' },
          { text: '<strong>Variables:</strong> x, y' }
        ]
      }
    },
    {
      id: 'callout-warning-sign',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'The sign in front of a term belongs to that term. In 5x − 3y, the coefficient of y is <strong>−3</strong>, not 3.'
      }
    },
    {
      id: 'h-like',
      type: 'heading',
      data: { text: 'Like and Unlike Terms', level: 2 }
    },
    {
      id: 'p-like',
      type: 'paragraph',
      data: { text: '<strong>Like terms</strong> have exactly the same variable parts (same letters raised to the same powers). Only like terms can be combined by addition or subtraction.' }
    },
    {
      id: 'table-like',
      type: 'comparisonTable',
      data: {
        caption: 'Like vs unlike terms',
        headers: ['Like terms', 'Unlike terms'],
        rows: [
          ['3x and −5x', '3x and 3x²'],
          ['2ab and 7ab', '2ab and 2a'],
          ['4y² and −y²', '4y² and 4y']
        ]
      }
    },
    {
      id: 'callout-worked-identify',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'State whether each is an expression, equation, formula, or identity:<br><br>(a) V = lwh &rarr; <strong>Formula</strong> (links V to l, w, h)<br>(b) 5x − 3 = 22 &rarr; <strong>Equation</strong> (= sign, true for x = 5 only)<br>(c) 2a + 3b − c &rarr; <strong>Expression</strong> (no = sign)<br>(d) (a + b)² ≡ a² + 2ab + b² &rarr; <strong>Identity</strong> (≡, true for all values)'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Key algebraic vocabulary: a <strong>variable</strong> is a letter representing a changeable value; a <strong>coefficient</strong> is the number in front of a variable; a <strong>term</strong> is separated by + or −; an <strong>expression</strong> has no = sign; an <strong>equation</strong> is true for specific values; a <strong>formula</strong> links quantities; an <strong>identity</strong> (≡) is true for all values. Like terms share the same variable parts.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Algebra uses letters for unknowns. Key terms: variable, constant, coefficient, term, expression, equation, formula, identity.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-terms', prompt: 'What is the difference between a variable and a constant?', answer: 'A variable is a letter representing a value that can change; a constant is a fixed number.' },
      { id: 'cue-2', blockId: 'table-comparison', prompt: 'How do you distinguish an equation from an identity?', answer: 'An equation is true for specific values; an identity (≡) is true for all values of the variable.' },
      { id: 'cue-3', blockId: 'callout-key-terms', prompt: 'In the term 7x², what is the coefficient?', answer: '7 is the coefficient.' },
      { id: 'cue-4', blockId: 'table-comparison', prompt: 'What is an algebraic expression?', answer: 'A collection of terms connected by + or − signs, with no equals sign.' },
      { id: 'cue-5', blockId: 'table-like', prompt: 'What makes terms "like terms"?', answer: 'Like terms have exactly the same variable parts (same letters raised to the same powers).' }
    ]
  },
  evidence: []
};
