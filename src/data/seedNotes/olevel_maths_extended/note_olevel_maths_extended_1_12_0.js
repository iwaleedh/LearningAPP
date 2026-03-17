export const note_olevel_maths_extended_1_12_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/prime-factor-decomposition.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand prime numbers, express integers as products of prime factors using factor trees and division, and write the result in index form.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Prime Factor Decomposition', level: 2 } },
    { id: 'p-intro', type: 'paragraph', data: { text: 'A <b>prime number</b> has exactly two factors: 1 and itself. The first few primes are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29... Note that 1 is NOT a prime number (it only has one factor).' } },

    { id: 'callout-key-1', type: 'callout', data: { style: 'key', title: 'Fundamental Theorem of Arithmetic', text: 'Every integer greater than 1 can be written as a unique product of prime factors. This is called <b>prime factor decomposition</b> (or prime factorisation).\n\nFor example: 60 = 2² × 3 × 5' } },

    { id: 'h-tree', type: 'heading', data: { text: 'Method 1: Factor Trees', level: 2 } },
    { id: 'p-tree', type: 'paragraph', data: { text: 'Start with the number and split it into any two factors. Keep splitting until every branch ends in a prime. The primes at the ends are the prime factors.' } },

    { id: 'callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1: Factor Tree', text: 'Find the prime factor decomposition of 180.\n\n180\n= 2 × 90\n= 2 × 2 × 45\n= 2 × 2 × 5 × 9\n= 2 × 2 × 5 × 3 × 3\n\nIn index form: 180 = 2² × 3² × 5\n\n<b>Answer:</b> 2² × 3² × 5' } },

    { id: 'h-division', type: 'heading', data: { text: 'Method 2: Repeated Division', level: 2 } },
    { id: 'p-division', type: 'paragraph', data: { text: 'Divide by the smallest prime that goes in evenly. Repeat until you reach 1. The divisors are your prime factors.' } },

    { id: 'callout-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2: Repeated Division', text: 'Find the prime factor decomposition of 360.\n\n360 ÷ 2 = 180\n180 ÷ 2 = 90\n90 ÷ 2 = 45\n45 ÷ 3 = 15\n15 ÷ 3 = 5\n5 ÷ 5 = 1\n\n360 = 2³ × 3² × 5\n\n<b>Answer:</b> 2³ × 3² × 5' } },

    { id: 'callout-worked-3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3', text: 'Write 1260 as a product of prime factors.\n\n1260 ÷ 2 = 630\n630 ÷ 2 = 315\n315 ÷ 3 = 105\n105 ÷ 3 = 35\n35 ÷ 5 = 7\n7 ÷ 7 = 1\n\n1260 = 2² × 3² × 5 × 7\n\n<b>Answer:</b> 2² × 3² × 5 × 7' } },

    { id: 'h-check', type: 'heading', data: { text: 'Divisibility Tests', level: 3 } },
    { id: 'table-divisibility', type: 'comparisonTable', data: {
      caption: 'Quick divisibility checks',
      headers: ['Divisor', 'Test'],
      rows: [
        ['2', 'Last digit is even (0, 2, 4, 6, 8)'],
        ['3', 'Digit sum is divisible by 3'],
        ['4', 'Last two digits form a number divisible by 4'],
        ['5', 'Last digit is 0 or 5'],
        ['9', 'Digit sum is divisible by 9'],
        ['10', 'Last digit is 0']
      ]
    }},

    { id: 'callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Always write your final answer in <b>index form</b> (e.g. 2³ × 3² × 5) with primes in ascending order. This is the standard expected format.' } },

    { id: 'callout-warning-1', type: 'callout', data: { style: 'warning', title: 'Common Mistake', text: 'Remember: 1 is NOT a prime number. Also, 2 is the only even prime number. Don\'t forget to check if 2 is a factor first.' } },

    { id: 'sum-1', type: 'summary', data: { text: 'Prime factor decomposition expresses a number as a product of primes. Use factor trees or repeated division. Write the answer in index form with primes in ascending order. Every integer > 1 has a unique prime factorisation.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-intro', prompt: 'What is a prime number? Is 1 prime?' },
      { id: 'cue-2', blockId: 'callout-key-1', prompt: 'What does the Fundamental Theorem of Arithmetic state?' },
      { id: 'cue-3', blockId: 'p-tree', prompt: 'How does a factor tree work?' },
      { id: 'cue-4', blockId: 'p-division', prompt: 'How does the repeated division method work?' },
      { id: 'cue-5', blockId: 'table-divisibility', prompt: 'How do you test if a number is divisible by 3?' }
    ],
    summaryText: 'Prime factorisation: break a number into a product of primes using factor trees or repeated division. Write in index form.',
    ready: true
  },
  evidence: []
};
