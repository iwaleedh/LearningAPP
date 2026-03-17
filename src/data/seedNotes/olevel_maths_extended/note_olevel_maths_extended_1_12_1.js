export const note_olevel_maths_extended_1_12_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/uses-of-prime-factor-decomposition.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Use prime factor decomposition to determine whether a number is a perfect square or cube, and to find square roots and cube roots of large numbers.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Uses of Prime Factor Decomposition', level: 2 } },
    { id: 'p-intro', type: 'paragraph', data: { text: 'Prime factor decomposition is not just an academic exercise — it has practical uses in identifying perfect squares and cubes, simplifying roots, and solving problems about factors.' } },

    { id: 'h-squares', type: 'heading', data: { text: 'Perfect Squares', level: 2 } },
    { id: 'callout-key-1', type: 'callout', data: { style: 'key', title: 'Perfect Square Test', text: 'A number is a <b>perfect square</b> if every prime in its decomposition appears an <b>even</b> number of times.\n\nExample: 324 = 2² × 3⁴ &rarr; all indices are even &rarr; √324 = 2¹ × 3² = 18 ✓\nExample: 72 = 2³ × 3² &rarr; 2 has odd index &rarr; 72 is NOT a perfect square.' } },

    { id: 'callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1', text: 'Find √1764 using prime factor decomposition.\n\n1764 ÷ 2 = 882\n882 ÷ 2 = 441\n441 ÷ 3 = 147\n147 ÷ 3 = 49\n49 ÷ 7 = 7\n7 ÷ 7 = 1\n\n1764 = 2² × 3² × 7²\n\nAll indices are even, so 1764 is a perfect square.\n√1764 = 2¹ × 3¹ × 7¹ = 42\n\n<b>Answer:</b> √1764 = 42' } },

    { id: 'h-cubes', type: 'heading', data: { text: 'Perfect Cubes', level: 2 } },
    { id: 'callout-key-2', type: 'callout', data: { style: 'key', title: 'Perfect Cube Test', text: 'A number is a <b>perfect cube</b> if every prime in its decomposition appears a number of times that is a <b>multiple of 3</b>.\n\nExample: 216 = 2³ × 3³ &rarr; all indices are multiples of 3 &rarr; ³√216 = 2 × 3 = 6 ✓' } },

    { id: 'callout-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2', text: 'Find ³√2744.\n\n2744 ÷ 2 = 1372\n1372 ÷ 2 = 686\n686 ÷ 2 = 343\n343 ÷ 7 = 49\n49 ÷ 7 = 7\n7 ÷ 7 = 1\n\n2744 = 2³ × 7³\n³√2744 = 2 × 7 = 14\n\n<b>Answer:</b> ³√2744 = 14' } },

    { id: 'h-smallest', type: 'heading', data: { text: 'Finding Smallest Multipliers', level: 2 } },
    { id: 'p-smallest', type: 'paragraph', data: { text: 'A common exam question asks: "What is the smallest number you must multiply n by to make it a perfect square (or cube)?" The answer comes from looking at which primes have odd (or non-multiple-of-3) indices.' } },

    { id: 'callout-worked-3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3', text: 'Find the smallest integer k such that 1350k is a perfect square.\n\n1350 = 2 × 3³ × 5²\n\nFor a perfect square, all indices must be even:\n• 2 has index 1 (odd) &rarr; need one more 2\n• 3 has index 3 (odd) &rarr; need one more 3\n• 5 has index 2 (even) &rarr; fine\n\nk = 2 × 3 = 6\n\nCheck: 1350 × 6 = 8100 = 2² × 3⁴ × 5² ✓ and √8100 = 90\n\n<b>Answer:</b> k = 6' } },

    { id: 'callout-worked-4', type: 'callout', data: { style: 'worked', title: 'Worked Example 4', text: 'Find the smallest integer k such that 500k is a perfect cube.\n\n500 = 2² × 5³\n\nFor a perfect cube, all indices must be multiples of 3:\n• 2 has index 2 &rarr; need one more 2 (to make 2³)\n• 5 has index 3 &rarr; fine\n\nk = 2\n\nCheck: 500 × 2 = 1000 = 2³ × 5³ ✓ and ³√1000 = 10\n\n<b>Answer:</b> k = 2' } },

    { id: 'callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'These questions often say "find the smallest positive integer k such that nk is a perfect square/cube". Always start by decomposing n into primes and check each index.' } },

    { id: 'sum-1', type: 'summary', data: { text: 'Perfect square: all prime indices even (halve indices for the root). Perfect cube: all prime indices multiples of 3 (divide indices by 3 for the root). To find the smallest multiplier, supply the missing factors to make all indices even/multiples of 3.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-1', prompt: 'How do you tell if a number is a perfect square from its prime decomposition?' },
      { id: 'cue-2', blockId: 'callout-key-2', prompt: 'How do you tell if a number is a perfect cube from its prime decomposition?' },
      { id: 'cue-3', blockId: 'callout-worked-1', prompt: 'How do you find √1764 using prime factors?' },
      { id: 'cue-4', blockId: 'p-smallest', prompt: 'How do you find the smallest k to make nk a perfect square?' }
    ],
    summaryText: 'Perfect square: all prime indices even. Perfect cube: all indices multiples of 3. Find smallest multiplier by supplying missing factors.',
    ready: true
  },
  evidence: []
};
