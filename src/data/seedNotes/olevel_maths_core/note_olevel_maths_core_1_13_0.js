export const note_olevel_maths_core_1_13_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/prime-factor-decomposition.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Express any integer as a product of its prime factors using factor trees and the ladder (division) method.' }
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What Is Prime Factor Decomposition?', level: 2 }
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: { text: 'Every integer greater than 1 can be written as a <strong>product of prime numbers</strong>. This is called <strong>prime factor decomposition</strong> (or prime factorisation). The result is unique for every number.' }
    },
    {
      id: 'callout-key-primes',
      type: 'callout',
      data: { style: 'key', title: 'Useful Primes', text: 'First 10 prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.<br>Always start dividing by the <strong>smallest prime</strong> (2) and work upwards.' }
    },
    {
      id: 'h-factor-tree',
      type: 'heading',
      data: { text: 'Method 1: Factor Tree', level: 2 }
    },
    {
      id: 'p-factor-tree',
      type: 'paragraph',
      data: { text: 'Split the number into any two factors. Keep splitting each branch until all leaves are prime numbers. Then write the product of all the primes, using index notation.' }
    },
    {
      id: 'callout-worked-tree',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Factor Tree for 60',
        text: '60 = 2 × 30<br>30 = 2 × 15<br>15 = 3 × 5<br><br>All leaves are prime: 2, 2, 3, 5<br>60 = 2 × 2 × 3 × 5 = <strong>2² × 3 × 5</strong>'
      }
    },
    {
      id: 'h-ladder',
      type: 'heading',
      data: { text: 'Method 2: Ladder (Repeated Division)', level: 2 }
    },
    {
      id: 'p-ladder',
      type: 'paragraph',
      data: { text: 'Divide the number by the smallest prime that goes in exactly. Keep dividing until you reach 1. Read the prime divisors from top to bottom.' }
    },
    {
      id: 'callout-worked-ladder',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Ladder for 360',
        text: '360 ÷ 2 = 180<br>180 ÷ 2 = 90<br>90 ÷ 2 = 45<br>45 ÷ 3 = 15<br>15 ÷ 3 = 5<br>5 ÷ 5 = 1<br><br>360 = 2 × 2 × 2 × 3 × 3 × 5 = <strong>2³ × 3² × 5</strong>'
      }
    },
    {
      id: 'h-checking',
      type: 'heading',
      data: { text: 'Checking Your Answer', level: 2 }
    },
    {
      id: 'p-checking',
      type: 'paragraph',
      data: { text: 'Multiply all prime factors together to verify they give the original number. For 2³ × 3² × 5 = 8 × 9 × 5 = 360. ✓' }
    },
    {
      id: 'callout-tip-index',
      type: 'callout',
      data: { style: 'tip', title: 'Index Notation in Answers', text: 'Always write repeated prime factors using indices (powers). Write 2 × 2 × 3 × 3 × 3 as 2² × 3³. Examiners expect index notation in the final answer.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Prime factor decomposition: express a number as a product of primes in index form. Use factor trees or the ladder method. Verify by multiplying all factors.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-what', prompt: 'What is prime factor decomposition? Why is the result unique?' },
      { id: 'cue-2', blockId: 'callout-worked-tree', prompt: 'Express 60 as a product of prime factors.' },
      { id: 'cue-3', blockId: 'callout-worked-ladder', prompt: 'Express 360 as a product of prime factors using repeated division.' },
      { id: 'cue-4', blockId: 'callout-tip-index', prompt: 'How should you write repeated factors in your final answer? Give an example.' },
      { id: 'cue-5', blockId: 'h-checking', prompt: 'How can you check your prime factor decomposition is correct?' }
    ],
    summaryText: 'Split into primes using factor tree or ladder. Write in index form (e.g. 2³ × 3² × 5). Verify by multiplying back.',
    ready: true
  },
  evidence: []
};
