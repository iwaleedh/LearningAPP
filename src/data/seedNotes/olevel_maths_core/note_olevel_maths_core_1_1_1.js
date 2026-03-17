export const note_olevel_maths_core_1_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/multiples-factors-and-primes.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and find multiples, factors, and prime numbers; identify prime and composite numbers.' }
    },
    {
      id: 'h-multiples',
      type: 'heading',
      data: { text: 'Multiples', level: 2 }
    },
    {
      id: 'p-multiples',
      type: 'paragraph',
      data: { text: 'A <strong>multiple</strong> of a number is the result of multiplying that number by a positive integer. Multiples are the numbers in a number\'s times table.' }
    },
    {
      id: 'callout-key-mult',
      type: 'callout',
      data: { style: 'key', title: 'Multiples', text: 'Multiples of 3: 3, 6, 9, 12, 15, 18, ...<br>Multiples of 7: 7, 14, 21, 28, 35, ...<br>A number always has <em>infinitely many</em> multiples.' }
    },
    {
      id: 'h-factors',
      type: 'heading',
      data: { text: 'Factors', level: 2 }
    },
    {
      id: 'p-factors',
      type: 'paragraph',
      data: { text: 'A <strong>factor</strong> of a number divides into it exactly, with no remainder. Every number has at least two factors: 1 and itself. Factors are always less than or equal to the number.' }
    },
    {
      id: 'callout-worked-factors',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: List All Factors of 24',
        text: 'Find pairs that multiply to give 24:<br><br>1 × 24 = 24<br>2 × 12 = 24<br>3 × 8 = 24<br>4 × 6 = 24<br><br>Factors of 24: <strong>1, 2, 3, 4, 6, 8, 12, 24</strong><br><em>Tip: always list factors in order from smallest to largest.</em>'
      }
    },
    {
      id: 'h-primes',
      type: 'heading',
      data: { text: 'Prime Numbers', level: 2 }
    },
    {
      id: 'p-primes',
      type: 'paragraph',
      data: { text: 'A <strong>prime number</strong> has exactly <em>two</em> factors: 1 and itself. It cannot be divided evenly by any other number. Note: 1 is <strong>not</strong> prime (it has only one factor).' }
    },
    {
      id: 'list-primes',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'First 10 primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29' },
          { text: '2 is the <strong>only even prime number</strong>' },
          { text: '1 is <strong>not</strong> prime — it has only one factor' },
          { text: '4, 6, 8, 9 are <strong>composite</strong> — they have more than two factors' }
        ]
      }
    },
    {
      id: 'callout-tip-primes',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip: Testing for Primes', text: 'To check if n is prime, test divisibility by primes up to √n.<br>e.g. Is 37 prime? Test 2, 3, 5 (since √37 ≈ 6.1).<br>37 ÷ 2 = 18.5, 37 ÷ 3 = 12.3, 37 ÷ 5 = 7.4 — none divide exactly, so 37 is prime.' }
    },
    {
      id: 'h-composite',
      type: 'heading',
      data: { text: 'Composite Numbers', level: 2 }
    },
    {
      id: 'p-composite',
      type: 'paragraph',
      data: { text: 'A <strong>composite number</strong> has more than two factors. Every composite number can be broken down into prime factors. Examples: 4 (factors: 1, 2, 4), 15 (factors: 1, 3, 5, 15).' }
    },
    {
      id: 'tbl-prime-composite',
      type: 'comparisonTable',
      data: {
        caption: 'Prime vs Composite Numbers',
        headers: ['Number', 'Factors', 'Type'],
        rows: [
          ['1', '1 only', 'Neither'],
          ['2', '1, 2', 'Prime'],
          ['7', '1, 7', 'Prime'],
          ['12', '1, 2, 3, 4, 6, 12', 'Composite'],
          ['25', '1, 5, 25', 'Composite']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Multiples are products in a times table (infinite). Factors divide a number exactly (finite). Prime numbers have exactly two factors: 1 and themselves. 1 is neither prime nor composite. 2 is the only even prime.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-multiples', prompt: 'What are the first five multiples of 6?' },
      { id: 'cue-2', blockId: 'h-factors', prompt: 'List all the factors of 36.' },
      { id: 'cue-3', blockId: 'h-primes', prompt: 'Define a prime number. Why is 1 not prime?' },
      { id: 'cue-4', blockId: 'list-primes', prompt: 'What is special about the number 2 among prime numbers?' },
      { id: 'cue-5', blockId: 'h-composite', prompt: 'Is 49 prime or composite? Explain how you know.' }
    ],
    summaryText: 'Multiples are in a times table; factors divide exactly; primes have exactly 2 factors (1 and itself).',
    ready: true
  },
  evidence: []
};
