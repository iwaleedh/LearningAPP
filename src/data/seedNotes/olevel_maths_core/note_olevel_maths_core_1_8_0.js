export const note_olevel_maths_core_1_8_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/laws-of-indices.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply the laws of indices for multiplication, division, power of a power, zero index, and negative indices.' }
    },
    {
      id: 'h-notation',
      type: 'heading',
      data: { text: 'Index Notation', level: 2 }
    },
    {
      id: 'p-notation',
      type: 'paragraph',
      data: { text: 'In aⁿ, <em>a</em> is the <strong>base</strong> and <em>n</em> is the <strong>index</strong> (or exponent or power). aⁿ = a × a × a × ... (n times). E.g. 2⁵ = 2 × 2 × 2 × 2 × 2 = 32.' }
    },
    {
      id: 'h-laws',
      type: 'heading',
      data: { text: 'The Laws of Indices', level: 2 }
    },
    {
      id: 'tbl-laws',
      type: 'comparisonTable',
      data: {
        caption: 'Laws of Indices Summary',
        headers: ['Law', 'Formula', 'Example'],
        rows: [
          ['Multiplication', 'aᵐ × aⁿ = aᵐ⁺ⁿ', '3² × 3⁵ = 3⁷'],
          ['Division', 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ', '5⁷ ÷ 5³ = 5⁴'],
          ['Power of a power', '(aᵐ)ⁿ = aᵐⁿ', '(2³)⁴ = 2¹²'],
          ['Zero index', 'a⁰ = 1', '7⁰ = 1'],
          ['Negative index', 'a⁻ⁿ = 1/aⁿ', '2⁻³ = 1/8'],
        ]
      }
    },
    {
      id: 'callout-worked-mult-div',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Multiplication and Division of Indices',
        text: 'Simplify: x³ × x⁵ × x⁻²<br>= x³⁺⁵⁺⁽⁻²⁾ = x⁶<br><br>Simplify: y⁸ ÷ y³<br>= y⁸⁻³ = y⁵<br><br>Simplify: (3a²b³)²<br>= 3² × a²ˣ² × b³ˣ²  = 9a⁴b⁶'
      }
    },
    {
      id: 'callout-worked-neg',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Negative and Zero Indices',
        text: 'Evaluate: 5⁻²<br>= 1/5² = 1/25<br><br>Evaluate: (3/4)⁻²<br>= (4/3)² = 16/9<br><br>Evaluate: 100⁰<br>= 1 (any non-zero base to the power 0 is 1)'
      }
    },
    {
      id: 'callout-key-laws',
      type: 'callout',
      data: { style: 'key', title: 'Laws in Words', text: 'Multiply → add indices. Divide → subtract indices. Power of power → multiply indices. Zero index → answer is 1. Negative index → flip and make positive.' }
    },
    {
      id: 'callout-tip-laws',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tips', text: '1) Laws only apply when the <em>base is the same</em>. You cannot combine 2³ × 3⁴ using index laws.<br>2) a⁻¹ = 1/a; a⁻² = 1/a².<br>3) (2x)³ = 8x³ — apply the power to <em>both</em> the coefficient and the variable.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Index laws: ×→add, ÷→subtract, power of power→multiply. a⁰ = 1. a⁻ⁿ = 1/aⁿ. Only combine indices when the base is the same.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'tbl-laws', prompt: 'State all five laws of indices, with an example of each.' },
      { id: 'cue-2', blockId: 'callout-worked-mult-div', prompt: 'Simplify x³ × x⁵ × x⁻² and y⁸ ÷ y³.' },
      { id: 'cue-3', blockId: 'callout-worked-neg', prompt: 'Evaluate 5⁻² and (3/4)⁻². What is 100⁰?' },
      { id: 'cue-4', blockId: 'callout-tip-laws', prompt: 'Can you combine 2³ × 3⁴ using index laws? Why or why not?' },
      { id: 'cue-5', blockId: 'callout-key-laws', prompt: 'In words: what do you do to the indices when multiplying powers of the same base?' }
    ],
    summaryText: 'Indices: × → add, ÷ → subtract, (aᵐ)ⁿ → multiply, a⁰ = 1, a⁻ⁿ = 1/aⁿ. Same base only.',
    ready: true
  },
  evidence: []
};
