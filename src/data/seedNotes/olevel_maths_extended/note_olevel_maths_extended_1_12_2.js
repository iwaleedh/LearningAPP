export const note_olevel_maths_extended_1_12_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/hcf-and-lcm.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Find the Highest Common Factor (HCF) and Lowest Common Multiple (LCM) of two or more numbers using prime factor decomposition and Venn diagrams.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'HCF and LCM', level: 2 } },
    { id: 'p-intro', type: 'paragraph', data: { text: 'The HCF and LCM are found efficiently using prime factor decomposition. These are essential tools for simplifying fractions, solving word problems, and working with algebraic expressions.' } },

    { id: 'h-hcf', type: 'heading', data: { text: 'Highest Common Factor (HCF)', level: 2 } },
    { id: 'callout-key-1', type: 'callout', data: { style: 'key', title: 'HCF Method', text: 'The HCF is the product of all <b>common</b> prime factors, each taken to its <b>lowest</b> power.\n\n1. Write each number as a product of primes.\n2. Identify primes that appear in ALL decompositions.\n3. For each common prime, take the smallest index.\n4. Multiply these together.' } },

    { id: 'callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1', text: 'Find the HCF of 84 and 120.\n\n84 = 2² × 3 × 7\n120 = 2³ × 3 × 5\n\nCommon primes: 2 and 3\nSmallest powers: 2² and 3¹\n\nHCF = 2² × 3 = 4 × 3 = 12\n\n<b>Answer:</b> HCF = 12' } },

    { id: 'h-lcm', type: 'heading', data: { text: 'Lowest Common Multiple (LCM)', level: 2 } },
    { id: 'callout-key-2', type: 'callout', data: { style: 'key', title: 'LCM Method', text: 'The LCM is the product of ALL prime factors that appear in either number, each taken to its <b>highest</b> power.\n\n1. Write each number as a product of primes.\n2. List every prime that appears in any decomposition.\n3. For each prime, take the highest index.\n4. Multiply these together.' } },

    { id: 'callout-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2', text: 'Find the LCM of 84 and 120.\n\n84 = 2² × 3 × 7\n120 = 2³ × 3 × 5\n\nAll primes: 2, 3, 5, 7\nHighest powers: 2³, 3¹, 5¹, 7¹\n\nLCM = 2³ × 3 × 5 × 7 = 8 × 3 × 5 × 7 = 840\n\n<b>Answer:</b> LCM = 840' } },

    { id: 'h-venn', type: 'heading', data: { text: 'Venn Diagram Method', level: 2 } },
    { id: 'p-venn', type: 'paragraph', data: { text: 'Draw a Venn diagram with two overlapping circles. Place the common prime factors (HCF) in the overlap. Place remaining factors in the individual sections. The HCF is the product of the overlap. The LCM is the product of everything in the diagram.' } },

    { id: 'callout-worked-3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3: Venn Diagram', text: 'Find the HCF and LCM of 60 and 90.\n\n60 = 2² × 3 × 5\n90 = 2 × 3² × 5\n\nVenn diagram:\n• 60 only: extra 2 (since 60 has 2² but common is 2¹)\n• Overlap (common, lowest): 2 × 3 × 5 = 30\n• 90 only: extra 3 (since 90 has 3² but common is 3¹)\n\nHCF = 2 × 3 × 5 = 30\nLCM = 2 × (2 × 3 × 5) × 3 = 2² × 3² × 5 = 180\n\n<b>Answer:</b> HCF = 30, LCM = 180' } },

    { id: 'h-relationship', type: 'heading', data: { text: 'The HCF–LCM Relationship', level: 2 } },
    { id: 'callout-key-3', type: 'callout', data: { style: 'key', title: 'Important Formula', text: 'For any two numbers a and b:\n\nHCF(a, b) × LCM(a, b) = a × b\n\nThis is useful for checking your answer or finding one if you know the other.' } },

    { id: 'h-word', type: 'heading', data: { text: 'Word Problems', level: 2 } },
    { id: 'callout-worked-4', type: 'callout', data: { style: 'worked', title: 'Worked Example 4', text: 'Two lighthouses flash every 8 seconds and 12 seconds. They both flash together at time 0. After how many seconds will they next flash together?\n\nThis asks for the LCM of 8 and 12.\n8 = 2³\n12 = 2² × 3\nLCM = 2³ × 3 = 24\n\n<b>Answer:</b> After 24 seconds' } },

    { id: 'callout-worked-5', type: 'callout', data: { style: 'worked', title: 'Worked Example 5', text: 'Tiles measuring 8 cm × 12 cm are used to tile a rectangle. What is the smallest square that can be made?\n\nThis asks for the LCM of 8 and 12.\nLCM = 24\n\nThe smallest square has side length 24 cm.\n\n<b>Answer:</b> 24 cm × 24 cm' } },

    { id: 'callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'HCF problems involve grouping/sharing equally (use HCF). LCM problems involve repeating events that coincide (use LCM). The clue is in the context: "largest group" &rarr; HCF, "next time together" &rarr; LCM.' } },

    { id: 'sum-1', type: 'summary', data: { text: 'HCF: product of common primes at lowest powers. LCM: product of all primes at highest powers. Check: HCF × LCM = product of the two numbers. HCF is for equal grouping, LCM is for coinciding events.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-1', prompt: 'How do you find the HCF from prime decompositions?' },
      { id: 'cue-2', blockId: 'callout-key-2', prompt: 'How do you find the LCM from prime decompositions?' },
      { id: 'cue-3', blockId: 'callout-key-3', prompt: 'What is the relationship between HCF, LCM, and the product of two numbers?' },
      { id: 'cue-4', blockId: 'callout-tip-1', prompt: 'When do you use HCF vs LCM in word problems?' },
      { id: 'cue-5', blockId: 'callout-worked-1', prompt: 'Find the HCF of 84 and 120.' }
    ],
    summaryText: 'HCF: common primes at lowest powers. LCM: all primes at highest powers. HCF × LCM = a × b. HCF for grouping, LCM for coinciding.',
    ready: true
  },
  evidence: []
};
