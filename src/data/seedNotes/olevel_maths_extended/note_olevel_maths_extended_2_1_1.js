export const note_olevel_maths_extended_2_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/algebraic-notation.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use correct algebraic notation for multiplication, division, and powers; understand implicit multiplication conventions.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Algebraic Notation Conventions', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Algebra has its own shorthand conventions that differ from arithmetic. These rules make expressions cleaner and avoid confusion with the variable <em>x</em> and the multiplication sign ×.' }
    },
    {
      id: 'callout-key-rules',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Core Notation Rules',
        text: '1. <strong>Omit the × sign:</strong> write 3 × <em>a</em> as <strong>3<em>a</em></strong><br>2. <strong>Number before letter:</strong> write <em>a</em> × 3 as <strong>3<em>a</em></strong> (not <em>a</em>3)<br>3. <strong>Letters in alphabetical order:</strong> write <em>b</em> × <em>a</em> as <strong><em>ab</em></strong><br>4. <strong>Use fractions for division:</strong> write <em>a</em> ÷ <em>b</em> as <span class="nb-frac"><span class="nb-num"><em>a</em></span><span class="nb-den"><em>b</em></span></span><br>5. <strong>Coefficient of 1 is hidden:</strong> write 1<em>x</em> as just <strong><em>x</em></strong><br>6. <strong>Repeated multiplication &rarr; powers:</strong> <em>a</em> × <em>a</em> × <em>a</em> = <strong><em>a</em>³</strong>'
      }
    },
    {
      id: 'h-multiply',
      type: 'heading',
      data: { text: 'Multiplication Notation', level: 2 }
    },
    {
      id: 'table-multiply',
      type: 'comparisonTable',
      data: {
        caption: 'Converting arithmetic to algebraic notation',
        headers: ['Arithmetic form', 'Algebraic form', 'Rule applied'],
        rows: [
          ['5 × y', '5y', 'Omit × sign'],
          ['y × 5', '5y', 'Number before letter'],
          ['p × q', 'pq', 'Alphabetical order'],
          ['a × a', 'a²', 'Repeated multiplication'],
          ['2 × x × x × y', '2x²y', 'All rules combined'],
          ['−1 × m', '−m', 'Coefficient of −1 is just −']
        ]
      }
    },
    {
      id: 'h-division',
      type: 'heading',
      data: { text: 'Division Notation', level: 2 }
    },
    {
      id: 'p-division',
      type: 'paragraph',
      data: { text: 'In algebra, division is always written as a fraction, never with ÷ in formal expressions.' }
    },
    {
      id: 'eq-division',
      type: 'equation',
      data: {
        html: '<em>a</em> ÷ <em>b</em> is written as <span class="nb-frac"><span class="nb-num"><em>a</em></span><span class="nb-den"><em>b</em></span></span> &nbsp;&nbsp;&nbsp; and &nbsp;&nbsp;&nbsp; (2<em>x</em> + 3) ÷ 5 is written as <span class="nb-frac"><span class="nb-num">2<em>x</em> + 3</span><span class="nb-den">5</span></span>',
        caption: 'Division written as fractions'
      }
    },
    {
      id: 'h-powers',
      type: 'heading',
      data: { text: 'Powers (Index Notation)', level: 2 }
    },
    {
      id: 'p-powers',
      type: 'paragraph',
      data: { text: 'When a variable is multiplied by itself, we use <strong>index notation</strong> (powers). The small raised number is called the <strong>index</strong> (plural: indices) or <strong>exponent</strong>.' }
    },
    {
      id: 'list-powers',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<em>a</em> × <em>a</em> = <em>a</em>² &nbsp; (read "a squared")' },
          { text: '<em>a</em> × <em>a</em> × <em>a</em> = <em>a</em>³ &nbsp; (read "a cubed")' },
          { text: '<em>a</em> × <em>a</em> × <em>a</em> × <em>a</em> = <em>a</em>⁴ &nbsp; (read "a to the power 4")' }
        ]
      }
    },
    {
      id: 'callout-warning-power',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — Squaring',
        text: '2<em>a</em>² means 2 × <em>a</em> × <em>a</em> (only <em>a</em> is squared).<br>(2<em>a</em>)² means 2<em>a</em> × 2<em>a</em> = 4<em>a</em>² (both 2 and <em>a</em> are squared).<br><br>The bracket makes a critical difference!'
      }
    },
    {
      id: 'callout-worked-notation',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'Rewrite using correct algebraic notation:<br><br>(a) 4 × <em>a</em> × <em>b</em> × <em>a</em><br>= 4 × <em>a</em> × <em>a</em> × <em>b</em> &nbsp; (rearrange to group like variables)<br>= <strong>4<em>a</em>²<em>b</em></strong><br><br>(b) (<em>x</em> + <em>y</em>) ÷ 3<br>= <strong><span class="nb-frac"><span class="nb-num"><em>x</em> + <em>y</em></span><span class="nb-den">3</span></span></strong>'
      }
    },
    {
      id: 'callout-tip-exam',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'In "show that" questions, always present your final answer using proper algebraic notation — coefficient first, then variables in alphabetical order, division as fractions.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Algebraic notation: omit × signs, put numbers before letters, use alphabetical order, write division as fractions, use index notation for repeated multiplication. Remember: 2a² ≠ (2a)².' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Algebraic notation uses implicit multiplication, fractional division, and index notation for powers.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-rules', prompt: 'How do you write multiplication in algebra?', answer: 'Omit the × sign: 3 × a becomes 3a; put number before letter; letters in alphabetical order.' },
      { id: 'cue-2', blockId: 'eq-division', prompt: 'How is division written in algebraic notation?', answer: 'As a fraction, e.g. a ÷ b = a/b.' },
      { id: 'cue-3', blockId: 'callout-warning-power', prompt: 'What is the difference between 2a² and (2a)²?', answer: '2a² = 2 × a × a; (2a)² = 2a × 2a = 4a². Only a is squared in the first; both 2 and a in the second.' },
      { id: 'cue-4', blockId: 'list-powers', prompt: 'What does a³ mean?', answer: 'a × a × a — a multiplied by itself three times.' }
    ]
  },
  evidence: []
};
