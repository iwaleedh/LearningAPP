export const note_olevel_maths_core_1_5_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/ordering-fractions-decimals-and-percentages.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Order a mixed list of fractions, decimals, and percentages from smallest to largest (or vice versa).' }
    },
    {
      id: 'h-strategy',
      type: 'heading',
      data: { text: 'Strategy: Convert to the Same Form', level: 2 }
    },
    {
      id: 'p-strategy',
      type: 'paragraph',
      data: { text: 'You cannot directly compare a fraction with a decimal or percentage. The safest method is to <strong>convert everything to decimals</strong>, then compare.' }
    },
    {
      id: 'list-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Convert all fractions and percentages to decimals.' },
          { text: 'Line up the decimals (add trailing zeros if helpful).' },
          { text: 'Compare and order.' },
          { text: 'Write the answer in the original forms.' }
        ]
      }
    },
    {
      id: 'callout-worked-order',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Order from Smallest to Largest',
        text: 'Order: <strong>3/5, 0.62, 58%, 5/8</strong><br><br>Convert to decimals:<br>3/5 = 0.600<br>0.62 = 0.620<br>58% = 0.580<br>5/8 = 0.625<br><br>Ordered: 0.580 &lt; 0.600 &lt; 0.620 &lt; 0.625<br><br>Answer: <strong>58% &lt; 3/5 &lt; 0.62 &lt; 5/8</strong>'
      }
    },
    {
      id: 'h-comparing-fractions',
      type: 'heading',
      data: { text: 'Comparing Fractions with Different Denominators', level: 2 }
    },
    {
      id: 'p-comparing-fractions',
      type: 'paragraph',
      data: { text: 'To compare fractions, you can also use a common denominator — find the LCM of the denominators, convert, and compare numerators.' }
    },
    {
      id: 'callout-worked-fracs',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Comparing 4/7 and 5/9',
        text: 'LCM of 7 and 9 = 63<br>4/7 = 36/63<br>5/9 = 35/63<br><br>36/63 &gt; 35/63, so <strong>4/7 &gt; 5/9</strong>'
      }
    },
    {
      id: 'callout-tip-ordering',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Converting everything to decimals is almost always the fastest method. Use your calculator for fraction ÷ in calculator papers. On non-calculator papers, use familiar conversions (quarters, fifths, thirds) as benchmarks.' }
    },
    {
      id: 'callout-key-order',
      type: 'callout',
      data: { style: 'key', title: 'Key Principle', text: 'You can only compare numbers when they are in the same format. <strong>Decimals</strong> are usually the easiest comparison form.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'To order fractions, decimals, and percentages: convert all to decimals, compare, then write answers in original form. For fraction-only comparisons, use a common denominator.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-strategy', prompt: 'What is the most reliable method for ordering a mixed list of fractions, decimals, and percentages?' },
      { id: 'cue-2', blockId: 'callout-worked-order', prompt: 'Order 3/5, 0.62, 58%, 5/8 from smallest to largest. Show the decimal equivalents.' },
      { id: 'cue-3', blockId: 'h-comparing-fractions', prompt: 'How do you compare two fractions with different denominators without using decimals?' },
      { id: 'cue-4', blockId: 'callout-worked-fracs', prompt: 'Which is larger: 4/7 or 5/9? Show your working.' }
    ],
    summaryText: 'Convert to decimals to compare, then rewrite in original form. For fractions only, use LCM of denominators.',
    ready: true
  },
  evidence: []
};
