export const note_olevel_maths_extended_1_4_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/ordering-fractions-decimals-and-percentages.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Order fractions, decimals, and percentages by converting to a common form and comparing values.' }
    },
    {
      id: 'h-methods',
      type: 'heading',
      data: { text: 'Methods for Ordering', level: 2 }
    },
    {
      id: 'p-methods',
      type: 'paragraph',
      data: { text: 'To compare or order a mixture of fractions, decimals, and percentages, <strong>convert them all to the same form</strong>. You can convert everything to decimals (usually easiest) or everything to fractions with a common denominator.' }
    },
    {
      id: 'callout-key-method',
      type: 'callout',
      data: { style: 'key', title: 'Recommended Method', text: '<strong>Step 1:</strong> Convert all values to decimals.\n<strong>Step 2:</strong> Compare the decimal values.\n<strong>Step 3:</strong> Write the original values in order.' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 1', text: 'Put these in order from smallest to largest: <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">8</span></span>, &nbsp; 42%, &nbsp; 0.4.\n\n<strong>Solution:</strong>\n<span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">8</span></span> = 3 ÷ 8 = 0.375\n42% = 0.42\n0.4 = 0.4\n\nDecimal order: 0.375, 0.4, 0.42\nOriginal order: <strong><span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">8</span></span>, &nbsp; 0.4, &nbsp; 42%</strong>' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 2', text: 'Put in order from largest to smallest: <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">7</span></span>, &nbsp; 70%, &nbsp; 0.72, &nbsp; <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">4</span></span>.\n\n<strong>Solution:</strong>\n<span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">7</span></span> ≈ 0.714\n70% = 0.70\n0.72 = 0.72\n<span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">4</span></span> = 0.75\n\nLargest to smallest: 0.75, 0.72, 0.714, 0.70\nAnswer: <strong><span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">4</span></span>, &nbsp; 0.72, &nbsp; <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">7</span></span>, &nbsp; 70%</strong>' }
    },
    {
      id: 'h-comparing',
      type: 'heading',
      data: { text: 'Comparing on a Number Line', level: 2 }
    },
    {
      id: 'p-comparing',
      type: 'paragraph',
      data: { text: 'You can place fractions, decimals, and percentages on the <strong>same number line</strong> from 0 to 1 (or 0% to 100%) to visualise their relative positions. Values further right are larger.' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'When comparing, add trailing zeros to make decimals the same length: compare 0.375 with 0.400 and 0.420 — it\'s much easier to see the order.' }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: { style: 'warning', title: 'Common Mistake', text: 'Students sometimes think 0.42 > 0.5 because 42 > 5. Always compare digit by digit from left, or pad with zeros so both have the same number of decimal places.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'To order a mix of fractions, decimals, and percentages: convert all to decimals, compare digit by digit (pad with trailing zeros), then write the original values in order.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-method', prompt: 'What is the three-step method for ordering fractions, decimals, and percentages?' },
      { id: 'cue-2', blockId: 'callout-worked-1', prompt: 'Order 3/8, 42%, 0.4 from smallest to largest.' },
      { id: 'cue-3', blockId: 'callout-warning-1', prompt: 'Why might someone incorrectly think 0.42 > 0.5?' },
      { id: 'cue-4', blockId: 'callout-tip-1', prompt: 'How does adding trailing zeros help with comparing decimals?' }
    ],
    summaryText: 'Convert all values to decimals, pad with trailing zeros, and compare digit by digit to put them in order.',
    ready: true
  },
  evidence: []
};
