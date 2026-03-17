export const note_olevel_maths_core_1_5_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/converting-fractions-decimals-and-percentages.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Convert fluently between fractions, decimals, and percentages; recall common conversions.' }
    },
    {
      id: 'h-overview',
      type: 'heading',
      data: { text: 'The Three Representations', level: 2 }
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: { text: 'Any value between 0 and 1 can be written as a <strong>fraction</strong> (e.g. ¾), a <strong>decimal</strong> (e.g. 0.75), or a <strong>percentage</strong> (e.g. 75%). These are three different ways of expressing the same part of a whole.' }
    },
    {
      id: 'h-frac-to-dec',
      type: 'heading',
      data: { text: 'Fraction → Decimal', level: 2 }
    },
    {
      id: 'p-frac-to-dec',
      type: 'paragraph',
      data: { text: 'Divide the numerator by the denominator.' }
    },
    {
      id: 'callout-worked-f2d',
      type: 'callout',
      data: { style: 'worked', title: 'Fraction to Decimal', text: '3/4 → 3 ÷ 4 = <strong>0.75</strong><br>5/8 → 5 ÷ 8 = <strong>0.625</strong><br>1/3 → 1 ÷ 3 = <strong>0.333...</strong> (recurring)' }
    },
    {
      id: 'h-dec-to-pct',
      type: 'heading',
      data: { text: 'Decimal → Percentage', level: 2 }
    },
    {
      id: 'p-dec-to-pct',
      type: 'paragraph',
      data: { text: 'Multiply by 100 (move decimal 2 places to the right).' }
    },
    {
      id: 'callout-worked-d2p',
      type: 'callout',
      data: { style: 'worked', title: 'Decimal to Percentage', text: '0.75 × 100 = <strong>75%</strong><br>0.035 × 100 = <strong>3.5%</strong><br>1.2 × 100 = <strong>120%</strong>' }
    },
    {
      id: 'h-pct-to-dec',
      type: 'heading',
      data: { text: 'Percentage → Decimal', level: 2 }
    },
    {
      id: 'p-pct-to-dec',
      type: 'paragraph',
      data: { text: 'Divide by 100 (move decimal 2 places to the left).' }
    },
    {
      id: 'callout-worked-p2d',
      type: 'callout',
      data: { style: 'worked', title: 'Percentage to Decimal', text: '35% ÷ 100 = <strong>0.35</strong><br>7.5% ÷ 100 = <strong>0.075</strong><br>130% ÷ 100 = <strong>1.3</strong>' }
    },
    {
      id: 'tbl-common',
      type: 'comparisonTable',
      data: {
        caption: 'Common Conversions to Memorise',
        headers: ['Fraction', 'Decimal', 'Percentage'],
        rows: [
          ['1/2', '0.5', '50%'],
          ['1/4', '0.25', '25%'],
          ['3/4', '0.75', '75%'],
          ['1/5', '0.2', '20%'],
          ['1/3', '0.333...', '33.3...%'],
          ['2/3', '0.666...', '66.7%'],
          ['1/10', '0.1', '10%'],
          ['1/8', '0.125', '12.5%']
        ]
      }
    },
    {
      id: 'callout-tip-convert',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip: Direction of Conversion', text: 'F→D: divide top by bottom.<br>D→%: ×100.<br>%→D: ÷100.<br>%→F: write /100 then simplify.<br><br>To compare, always convert to the same form first.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Fraction → decimal: divide. Decimal → %: ×100. % → decimal: ÷100. Memorise key conversions (½=0.5=50%, ¼=0.25=25%, ¾=0.75=75%, ⅓=0.333...=33⅓%).' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-frac-to-dec', prompt: 'Convert 7/8 to a decimal. Show your method.' },
      { id: 'cue-2', blockId: 'h-dec-to-pct', prompt: 'Convert 0.045 to a percentage.' },
      { id: 'cue-3', blockId: 'h-pct-to-dec', prompt: 'Convert 62.5% to a decimal and then to a fraction.' },
      { id: 'cue-4', blockId: 'tbl-common', prompt: 'Without calculating: what is 3/4 as a decimal and percentage? What about 1/3?' },
      { id: 'cue-5', blockId: 'callout-tip-convert', prompt: 'What is the conversion path from percentage to fraction?' }
    ],
    summaryText: 'F→D: divide; D→%: ×100; %→D: ÷100. Learn the core fraction/decimal/percentage equivalences by heart.',
    ready: true
  },
  evidence: []
};
