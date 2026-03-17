export const note_olevel_maths_core_1_13_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/hcf-and-lcm.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Find the HCF and LCM of two or more numbers using prime factor lists and the Venn diagram method.' }
    },
    {
      id: 'h-hcf',
      type: 'heading',
      data: { text: 'Highest Common Factor (HCF)', level: 2 }
    },
    {
      id: 'p-hcf',
      type: 'paragraph',
      data: { text: 'The <strong>HCF</strong> is the largest factor that divides exactly into all the given numbers. Using prime factors: HCF = product of primes that appear in <em>both</em> (all) lists, using the <em>lower</em> power.' }
    },
    {
      id: 'h-lcm',
      type: 'heading',
      data: { text: 'Lowest Common Multiple (LCM)', level: 2 }
    },
    {
      id: 'p-lcm',
      type: 'paragraph',
      data: { text: 'The <strong>LCM</strong> is the smallest number that is a multiple of all the given numbers. Using prime factors: LCM = product of <em>all</em> primes that appear in <em>either</em> list, using the <em>higher</em> power.' }
    },
    {
      id: 'callout-worked-pf',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: HCF and LCM using Prime Factors',
        text: 'Find the HCF and LCM of 24 and 36.<br><br>24 = 2³ × 3<br>36 = 2² × 3²<br><br><strong>HCF:</strong> Pick common primes with <em>lower</em> power:<br>2² × 3¹ = 4 × 3 = <strong>12</strong><br><br><strong>LCM:</strong> All primes with <em>higher</em> power:<br>2³ × 3² = 8 × 9 = <strong>72</strong>'
      }
    },
    {
      id: 'h-venn',
      type: 'heading',
      data: { text: 'Venn Diagram Method', level: 2 }
    },
    {
      id: 'p-venn',
      type: 'paragraph',
      data: { text: 'Draw two overlapping circles, one for each number. Place each prime factor in the appropriate region: factors only in A go in the left; factors only in B go in the right; shared factors go in the overlap (intersection).' }
    },
    {
      id: 'list-venn-rules',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>HCF</strong> = product of primes in the <em>intersection</em> (overlap)' },
          { text: '<strong>LCM</strong> = product of <em>all</em> primes in the diagram' }
        ]
      }
    },
    {
      id: 'callout-worked-venn',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Venn Diagram for 60 and 90',
        text: '60 = 2² × 3 × 5<br>90 = 2 × 3² × 5<br><br>Left only (factors only in 60): 2 (one extra 2)<br>Overlap (common): 2, 3, 5<br>Right only (factors only in 90): 3 (one extra 3)<br><br>HCF = 2 × 3 × 5 = <strong>30</strong><br>LCM = 2 × 2 × 3 × 3 × 5 = 4 × 9 × 5 = <strong>180</strong>'
      }
    },
    {
      id: 'callout-key-uses',
      type: 'callout',
      data: {
        style: 'key',
        title: 'When to Use HCF vs LCM',
        text: '<strong>HCF:</strong> Sharing/grouping into equal piles (e.g. "what is the largest tile that fits?").<br><strong>LCM:</strong> Events repeating together (e.g. "when will they next occur at the same time?") or finding a common denominator.'
      }
    },
    {
      id: 'callout-tip-verify',
      type: 'callout',
      data: { style: 'tip', title: 'Quick Verify', text: 'HCF × LCM = product of the two numbers. E.g. 12 × 72 = 864 = 24 × 36 ✓. Use this to check your answer.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'HCF: intersecting primes with lower power. LCM: all primes with higher power. Venn method: HCF = overlap product; LCM = all products. HCF × LCM = a × b.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-hcf', prompt: 'What is the HCF? How do you find it using prime factors?' },
      { id: 'cue-2', blockId: 'callout-worked-pf', prompt: 'Find the HCF and LCM of 24 and 36 using prime factors.' },
      { id: 'cue-3', blockId: 'h-venn', prompt: 'Describe the Venn diagram method for finding HCF and LCM.' },
      { id: 'cue-4', blockId: 'callout-key-uses', prompt: 'Give a real-world problem that requires HCF, and one that requires LCM.' },
      { id: 'cue-5', blockId: 'callout-tip-verify', prompt: 'What is the relationship between HCF, LCM, and the original two numbers? Use it to verify HCF=12 and LCM=72 for 24 and 36.' }
    ],
    summaryText: 'HCF = shared primes (lower power). LCM = all primes (higher power). HCF × LCM = product of original numbers.',
    ready: true
  },
  evidence: []
};
