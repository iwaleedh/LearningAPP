export const note_olevel_maths_core_2_11_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/introduction-to-sequences.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand what a sequence is, describe sequences using term notation, and identify arithmetic sequences by finding their common difference.' }
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What is a Sequence?', level: 2 }
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: { text: 'A <strong>sequence</strong> is an ordered list of numbers that follows a rule. Each number in the list is called a <strong>term</strong>. Terms are labelled using subscript notation: T₁ is the first term, T₂ the second, T₃ the third, and so on. The <em>n</em>th term is written Tₙ.' }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Identifying Terms',
        text: 'Sequence: 3, 7, 11, 15, 19, ...<br><br>T₁ = 3 &nbsp;&nbsp; T₂ = 7 &nbsp;&nbsp; T₃ = 11 &nbsp;&nbsp; T₄ = 15 &nbsp;&nbsp; T₅ = 19<br><br>The three dots (ellipsis) at the end mean the sequence continues indefinitely following the same pattern.'
      }
    },
    {
      id: 'h-arithmetic',
      type: 'heading',
      data: { text: 'Arithmetic Sequences', level: 2 }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Arithmetic Sequence',
        text: 'An <strong>arithmetic sequence</strong> (also called a linear sequence) has a <strong>constant difference</strong> between consecutive terms. This constant is called the <strong>common difference</strong> (d).<br><br>d = Tₙ₊₁ − Tₙ (any term minus the term before it)<br><br>If d > 0, the sequence increases. If d < 0, it decreases.'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Finding the Common Difference',
        text: '<strong>(a)</strong> Sequence: 5, 9, 13, 17, 21, ...<br>d = 9 − 5 = 4 (or 13 − 9 = 4) ✓ Common difference = <strong>+4</strong><br><br><strong>(b)</strong> Sequence: 20, 17, 14, 11, 8, ...<br>d = 17 − 20 = −3 (decreasing) ✓ Common difference = <strong>−3</strong><br><br><strong>(c)</strong> Sequence: 2, 7, 12, 18, 25 — is this arithmetic?<br>7−2=5, 12−7=5, 18−12=6 ← differences not equal! ✗ <strong>Not arithmetic.</strong>'
      }
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Types of Sequences', level: 2 }
    },
    {
      id: 'tbl-types',
      type: 'comparisonTable',
      data: {
        caption: 'Common types of numerical sequences at IGCSE',
        headers: ['Name', 'Pattern', 'Example'],
        rows: [
          ['Arithmetic', 'Add or subtract a constant each time', '3, 7, 11, 15, ... (d = +4)'],
          ['Geometric', 'Multiply by a constant ratio each time', '2, 6, 18, 54, ... (ratio = 3)'],
          ['Square numbers', 'Consecutive perfect squares: n²', '1, 4, 9, 16, 25, ...'],
          ['Cube numbers', 'Consecutive perfect cubes: n³', '1, 8, 27, 64, 125, ...'],
          ['Triangular numbers', 'Add increasing integers: +1, +2, +3, ...', '1, 3, 6, 10, 15, ...'],
          ['Fibonacci-type', 'Each term = sum of two preceding terms', '1, 1, 2, 3, 5, 8, 13, ...'],
        ]
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Check Differences First',
        text: 'When asked to "describe a sequence" or "find the pattern", always start by calculating the differences between consecutive terms:<br>• <strong>Constant differences</strong> → arithmetic sequence (linear)<br>• <strong>Constant ratio</strong> (each term ÷ previous is always the same) → geometric sequence<br>• <strong>Increasing differences</strong> → probably quadratic or triangular'
      }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Recognising the Pattern',
        text: 'What type of sequence is: 1, 4, 9, 16, 25?<br><br>Differences: 3, 5, 7, 9 (increasing by 2 each time → not arithmetic but the terms are 1², 2², 3², 4², 5²)<br>This is the <strong>square number</strong> sequence. Tₙ = n².<br><br>What type is: 3, 6, 12, 24, 48?<br>Ratio: 6/3 = 2, 12/6 = 2, 24/12 = 2 — constant ratio = 2.<br>This is a <strong>geometric sequence</strong> with common ratio 2.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can write terms using T₁, T₂, T₃, ... notation', checked: false },
          { text: 'I can find the common difference of an arithmetic sequence', checked: false },
          { text: 'I can recognise arithmetic, geometric, square, and Fibonacci-type sequences', checked: false },
          { text: 'I know that a sequence is arithmetic only if all consecutive differences are equal', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'A sequence is an ordered list of numbers following a rule. In an <strong>arithmetic sequence</strong>, there is a constant common difference (d) between consecutive terms. Other types include geometric (constant ratio), square, cube, triangular, and Fibonacci sequences.' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'Define an arithmetic sequence. What is the common difference?' },
      { id: 'cue-2', blockId: 'callout-worked2', prompt: 'Find the common difference of: 20, 17, 14, 11, 8.' },
      { id: 'cue-3', blockId: 'tbl-types', prompt: 'What are the patterns for square number and geometric sequences? Give an example of each.' },
      { id: 'cue-4', blockId: 'callout-worked3', prompt: 'Is 3, 6, 12, 24, 48 an arithmetic sequence? What type is it?' },
      { id: 'cue-5', blockId: 'callout-tip1', prompt: 'How do you quickly identify the type of a sequence?' },
    ],
    summaryText: 'A sequence follows a rule. Arithmetic sequences have a constant common difference d. Other types: geometric (constant ratio), square, cube, triangular, Fibonacci.',
    ready: true,
  },
  evidence: [],
};
