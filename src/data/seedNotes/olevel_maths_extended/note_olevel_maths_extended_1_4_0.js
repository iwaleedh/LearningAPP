export const note_olevel_maths_extended_1_4_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/converting-fractions-decimals-and-percentages.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Convert fluently between fractions, decimals, and percentages.' }
    },
    {
      id: 'h-overview',
      type: 'heading',
      data: { text: 'The Three Forms', level: 2 }
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: { text: 'Fractions, decimals, and percentages are three different ways to express the same value. Being able to convert between them is essential for solving real-world problems.' }
    },
    {
      id: 'h-frac-to-dec',
      type: 'heading',
      data: { text: 'Fraction &rarr; Decimal', level: 2 }
    },
    {
      id: 'p-frac-to-dec',
      type: 'paragraph',
      data: { text: '<strong>Divide the numerator by the denominator.</strong> For example, <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">8</span></span> = 3 ÷ 8 = 0.375.' }
    },
    {
      id: 'h-dec-to-frac',
      type: 'heading',
      data: { text: 'Decimal &rarr; Fraction', level: 2 }
    },
    {
      id: 'p-dec-to-frac',
      type: 'paragraph',
      data: { text: 'Write the decimal as a fraction over a power of 10, then simplify. E.g. 0.35 = <span class="nb-frac"><span class="nb-num">35</span><span class="nb-den">100</span></span> = <span class="nb-frac"><span class="nb-num">7</span><span class="nb-den">20</span></span>.' }
    },
    {
      id: 'h-frac-to-pct',
      type: 'heading',
      data: { text: 'Fraction &rarr; Percentage', level: 2 }
    },
    {
      id: 'p-frac-to-pct',
      type: 'paragraph',
      data: { text: '<strong>Multiply the fraction by 100.</strong> E.g. <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">5</span></span> × 100 = 60%.' }
    },
    {
      id: 'h-pct-to-frac',
      type: 'heading',
      data: { text: 'Percentage &rarr; Fraction', level: 2 }
    },
    {
      id: 'p-pct-to-frac',
      type: 'paragraph',
      data: { text: '<strong>Write the percentage over 100, then simplify.</strong> E.g. 45% = <span class="nb-frac"><span class="nb-num">45</span><span class="nb-den">100</span></span> = <span class="nb-frac"><span class="nb-num">9</span><span class="nb-den">20</span></span>.' }
    },
    {
      id: 'h-dec-pct',
      type: 'heading',
      data: { text: 'Decimal ↔ Percentage', level: 2 }
    },
    {
      id: 'p-dec-pct',
      type: 'paragraph',
      data: { text: '<strong>Decimal &rarr; Percentage:</strong> Multiply by 100 (move decimal 2 places right). E.g. 0.72 &rarr; 72%.\n<strong>Percentage &rarr; Decimal:</strong> Divide by 100 (move decimal 2 places left). E.g. 35% &rarr; 0.35.' }
    },
    {
      id: 'table-common',
      type: 'comparisonTable',
      data: {
        caption: 'Common conversions to know',
        headers: ['Fraction', 'Decimal', 'Percentage'],
        rows: [
          ['1/2', '0.5', '50%'],
          ['1/4', '0.25', '25%'],
          ['3/4', '0.75', '75%'],
          ['1/5', '0.2', '20%'],
          ['1/3', '0.333…', '33.3…%'],
          ['2/3', '0.666…', '66.6…%'],
          ['1/8', '0.125', '12.5%'],
          ['1/10', '0.1', '10%']
        ]
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example', text: 'Convert 0.6̇ (0.666…) to a fraction.\n\n<strong>Solution:</strong>\nLet x = 0.666…\n10x = 6.666…\n10x − x = 6.666… − 0.666…\n9x = 6\nx = <span class="nb-frac"><span class="nb-num">6</span><span class="nb-den">9</span></span> = <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span>' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Learn the common conversions in the table above — they appear frequently and save time in exams.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Fraction &rarr; decimal: divide. Decimal &rarr; fraction: write over 10/100/1000 and simplify. Multiply/divide by 100 to convert between decimals and percentages. Recurring decimals can be converted using algebra.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-frac-to-dec', prompt: 'How do you convert a fraction to a decimal?' },
      { id: 'cue-2', blockId: 'p-frac-to-pct', prompt: 'How do you convert a fraction to a percentage?' },
      { id: 'cue-3', blockId: 'p-dec-pct', prompt: 'How do you convert a decimal to a percentage and vice versa?' },
      { id: 'cue-4', blockId: 'callout-worked-1', prompt: 'How do you convert a recurring decimal like 0.666… to a fraction?' },
      { id: 'cue-5', blockId: 'table-common', prompt: 'What are the decimal and percentage forms of 1/4, 1/3, and 1/8?' }
    ],
    summaryText: 'Convert between fractions, decimals, and percentages using division, multiplication by 100, and simplification.',
    ready: true
  },
  evidence: []
};
