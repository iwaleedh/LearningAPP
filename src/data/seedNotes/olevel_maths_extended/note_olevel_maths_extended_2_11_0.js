export const note_olevel_maths_extended_2_11_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/introduction-to-sequences.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand sequences, recognise common types, and use term-to-term and position-to-term rules.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Introduction to Sequences', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>sequence</strong> is an ordered list of numbers following a pattern or rule. Each number in the sequence is called a <strong>term</strong>. The position of a term is denoted <em>n</em> (1st, 2nd, 3rd, ...).' }
    },
    {
      id: 'callout-key-vocab',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Vocabulary',
        text: '<strong>Term-to-term rule:</strong> tells you how to get from one term to the next (e.g. "add 3")<br><strong>Position-to-term rule (nth term):</strong> gives the value of any term directly from its position <em>n</em> (e.g. <em>T</em><sub><em>n</em></sub> = 2<em>n</em> + 1)<br><strong>Common difference:</strong> the constant amount added each time in an arithmetic sequence'
      }
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Common Sequence Types', level: 2 }
    },
    {
      id: 'table-types',
      type: 'comparisonTable',
      data: {
        caption: 'Types of sequences at IGCSE',
        headers: ['Type', 'Example', 'Pattern'],
        rows: [
          ['Arithmetic (linear)', '3, 7, 11, 15, 19, …', 'Add the same number (common difference +4)'],
          ['Geometric', '2, 6, 18, 54, …', 'Multiply by the same number (common ratio ×3)'],
          ['Quadratic', '1, 4, 9, 16, 25, …', 'Second differences are constant'],
          ['Fibonacci-type', '1, 1, 2, 3, 5, 8, …', 'Add the two previous terms'],
          ['Triangular', '1, 3, 6, 10, 15, …', 'Add 2, 3, 4, 5, … (increasing gaps)']
        ]
      }
    },
    {
      id: 'h-arithmetic',
      type: 'heading',
      data: { text: 'Arithmetic Sequences', level: 2 }
    },
    {
      id: 'p-arith',
      type: 'paragraph',
      data: { text: 'An <strong>arithmetic sequence</strong> has a <strong>constant common difference</strong> (<em>d</em>) between consecutive terms. The differences between terms are all the same.' }
    },
    {
      id: 'callout-worked-diff',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding the Common Difference',
        text: 'Sequence: 5, 8, 11, 14, 17, …<br><br>Differences: 8−5=3, 11−8=3, 14−11=3<br><br>Common difference <em>d</em> = <strong>3</strong><br><br>Term-to-term rule: "start at 5, add 3 each time"'
      }
    },
    {
      id: 'h-continuing',
      type: 'heading',
      data: { text: 'Continuing a Sequence', level: 2 }
    },
    {
      id: 'callout-worked-continue',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Extending Patterns',
        text: 'Find the next two terms:<br><br>(a) 2, 5, 8, 11, … &rarr; <em>d</em> = 3 &rarr; next: <strong>14, 17</strong><br><br>(b) 3, 6, 12, 24, … &rarr; ratio = ×2 &rarr; next: <strong>48, 96</strong><br><br>(c) 1, 1, 2, 3, 5, 8, … &rarr; Fibonacci (add previous two) &rarr; next: <strong>13, 21</strong>'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Confusing the term number (<em>n</em>) with the term value — the 5th term is not necessarily 5<br>• Assuming all sequences are arithmetic — always check if the difference is constant<br>• Mixing up "term-to-term rule" and "nth term rule"'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When asked to describe the rule, be precise: "add 3" is a term-to-term rule. An nth term formula like <em>T</em><sub><em>n</em></sub> = 3<em>n</em> + 2 is the position-to-term rule.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'A sequence is an ordered list of numbers. Key types: arithmetic (constant difference), geometric (constant ratio), quadratic (constant second differences), Fibonacci (sum of two previous). Describe using term-to-term rules or nth term formulas.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Sequences follow patterns. Arithmetic = constant difference. Geometric = constant ratio. Two rule types: term-to-term and position-to-term (nth term).',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-vocab', prompt: 'What is the difference between term-to-term and position-to-term rules?', answer: 'Term-to-term tells you how to get the next term from the previous. Position-to-term gives the value directly from n.' },
      { id: 'cue-2', blockId: 'table-types', prompt: 'Name three common types of sequence.', answer: 'Arithmetic (linear), geometric, quadratic.' },
      { id: 'cue-3', blockId: 'callout-worked-diff', prompt: 'What is the common difference in 5, 8, 11, 14?', answer: '3 (each term increases by 3).' },
      { id: 'cue-4', blockId: 'callout-worked-continue', prompt: 'In a Fibonacci-type sequence, how is each term found?', answer: 'By adding the two previous terms.' }
    ]
  },
  evidence: []
};
