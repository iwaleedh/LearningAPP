export const note_olevel_maths_extended_2_1_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/collecting-like-terms.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Simplify algebraic expressions by collecting like terms; identify like terms involving powers and multiple variables.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Collecting Like Terms', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<strong>Simplifying</strong> an expression means writing it in a shorter, equivalent form. The most common method is <strong>collecting like terms</strong> — combining terms that have the same variable parts by adding or subtracting their coefficients.' }
    },
    {
      id: 'callout-key-like',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Like Terms',
        text: 'Like terms have <strong>exactly</strong> the same combination of variables raised to the same powers.<br><br>✔ 3<em>x</em> and −5<em>x</em> are like terms<br>✔ 2<em>ab</em> and 7<em>ab</em> are like terms<br>✘ 3<em>x</em> and 3<em>x</em>² are <strong>not</strong> like terms<br>✘ 4<em>xy</em> and 4<em>x</em> are <strong>not</strong> like terms'
      }
    },
    {
      id: 'h-simple',
      type: 'heading',
      data: { text: 'Simplifying Single-Variable Expressions', level: 2 }
    },
    {
      id: 'callout-worked-simple',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Simplify 5<em>x</em> + 3<em>x</em> − 2<em>x</em><br><br>All three terms are like terms (all involve <em>x</em>).<br>Combine coefficients: 5 + 3 − 2 = 6<br><br>Answer: <strong>6<em>x</em></strong>'
      }
    },
    {
      id: 'h-multi',
      type: 'heading',
      data: { text: 'Expressions with Multiple Variable Types', level: 2 }
    },
    {
      id: 'p-multi',
      type: 'paragraph',
      data: { text: 'When an expression has different types of terms, group like terms together first, then simplify each group separately.' }
    },
    {
      id: 'callout-worked-multi',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'Simplify 4<em>a</em> + 3<em>b</em> − 2<em>a</em> + 5<em>b</em> − 7<br><br>Group like terms:<br>• <em>a</em> terms: 4<em>a</em> − 2<em>a</em> = 2<em>a</em><br>• <em>b</em> terms: 3<em>b</em> + 5<em>b</em> = 8<em>b</em><br>• Constants: −7<br><br>Answer: <strong>2<em>a</em> + 8<em>b</em> − 7</strong>'
      }
    },
    {
      id: 'h-powers',
      type: 'heading',
      data: { text: 'Like Terms with Powers', level: 2 }
    },
    {
      id: 'p-powers',
      type: 'paragraph',
      data: { text: 'Remember that <em>x</em>, <em>x</em>², and <em>x</em>³ are all <strong>different</strong> types of terms and cannot be combined with each other.' }
    },
    {
      id: 'callout-worked-powers',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3',
        text: 'Simplify 3<em>x</em>² + 5<em>x</em> − <em>x</em>² + 2<em>x</em> − 4<br><br>Group like terms:<br>• <em>x</em>² terms: 3<em>x</em>² − <em>x</em>² = 2<em>x</em>²<br>• <em>x</em> terms: 5<em>x</em> + 2<em>x</em> = 7<em>x</em><br>• Constants: −4<br><br>Answer: <strong>2<em>x</em>² + 7<em>x</em> − 4</strong>'
      }
    },
    {
      id: 'callout-warning-subtract',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Watch Out — Negative Signs',
        text: 'The sign <em>in front</em> of a term belongs to that term. When collecting like terms, always carry the sign with the term.<br><br>Example: 8<em>y</em> − 3<em>y</em> = 5<em>y</em> &nbsp;(not −5<em>y</em>)'
      }
    },
    {
      id: 'callout-tip-order',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Presentation',
        text: 'Write your simplified answer with terms in descending power order, e.g. <em>x</em>² terms first, then <em>x</em> terms, then constants. This is standard convention and will help you check your work.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'To simplify an expression, collect <strong>like terms</strong> — terms with the same variables raised to the same powers. Add or subtract their coefficients. Always carry the sign in front of each term. Write the answer in descending power order.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Simplify expressions by collecting like terms — combine coefficients of terms with the same variable parts.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-like', prompt: 'What makes two terms "like terms"?', answer: 'They have exactly the same variables raised to the same powers.' },
      { id: 'cue-2', blockId: 'callout-worked-multi', prompt: 'Simplify: 4a + 3b − 2a + 5b − 7', answer: '2a + 8b − 7' },
      { id: 'cue-3', blockId: 'p-powers', prompt: 'Can you combine x and x² terms?', answer: 'No — they are unlike terms because the powers are different.' },
      { id: 'cue-4', blockId: 'callout-worked-powers', prompt: 'Simplify: 3x² + 5x − x² + 2x − 4', answer: '2x² + 7x − 4' }
    ]
  },
  evidence: []
};
