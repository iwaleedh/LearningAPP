export const note_olevel_maths_core_1_5_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/percentages-of-amounts.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate a percentage of a given amount using any method, in both calculator and non-calculator contexts.' }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Method: Percentage of an Amount', level: 2 }
    },
    {
      id: 'eq-pct-of',
      type: 'equation',
      data: {
        html: 'x% of y = <span class="nb-frac"><span class="nb-num">x</span><span class="nb-den">100</span></span> × y',
        caption: 'Core formula'
      }
    },
    {
      id: 'callout-worked-basic',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: 35% of 240',
        text: 'Method 1 (formula):<br>35/100 × 240 = 0.35 × 240 = <strong>84</strong><br><br>Method 2 (build up):<br>10% of 240 = 24<br>30% = 72<br>5% = 12<br>35% = 72 + 12 = <strong>84</strong>'
      }
    },
    {
      id: 'h-non-calc',
      type: 'heading',
      data: { text: 'Non-Calculator Strategies', level: 2 }
    },
    {
      id: 'p-non-calc',
      type: 'paragraph',
      data: { text: 'Use the "building block" method: start from 10% (divide by 10), then build other percentages from it.' }
    },
    {
      id: 'tbl-building',
      type: 'comparisonTable',
      data: {
        caption: 'Building Percentages from 10%',
        headers: ['Percentage', 'Method'],
        rows: [
          ['10%', 'Divide by 10'],
          ['5%', 'Divide 10% by 2'],
          ['1%', 'Divide 10% by 10'],
          ['20%', '10% × 2'],
          ['15%', '10% + 5%'],
          ['25%', '10% × 2 + 5%, or ÷4'],
          ['50%', 'Divide by 2'],
          ['75%', '50% + 25%']
        ]
      }
    },
    {
      id: 'callout-worked-noncalc',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Non-Calculator: 17.5% of 320',
        text: '10% of 320 = 32<br>5% of 320 = 16<br>2.5% of 320 = 8<br><br>17.5% = 10% + 5% + 2.5% = 32 + 16 + 8 = <strong>56</strong>'
      }
    },
    {
      id: 'callout-tip-pct-of',
      type: 'callout',
      data: { style: 'tip', title: 'Calculator Shortcut', text: 'On a calculator, multiply the decimal equivalent by the amount. E.g. 35% of 240 → type 0.35 × 240 = 84. Always write the decimal multiplier; don\'t just type "35" by mistake.' }
    },
    {
      id: 'callout-key-pct',
      type: 'callout',
      data: { style: 'key', title: 'Key Formula', text: 'x% of y = (x ÷ 100) × y<br>This is always the backbone of percentage calculations.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Percentage of an amount: (x/100) × y, or convert % to decimal and multiply. On non-calculator: use 10% as a building block (10% = ÷10, 5% = 10%÷2, 1% = 10%÷10, etc.).' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-pct-of', prompt: 'Write the formula for x% of y.' },
      { id: 'cue-2', blockId: 'callout-worked-basic', prompt: 'Calculate 35% of 240 using the decimal multiplier method.' },
      { id: 'cue-3', blockId: 'h-non-calc', prompt: 'Without a calculator, find 17.5% of 320. Show building-block working.' },
      { id: 'cue-4', blockId: 'tbl-building', prompt: 'Explain how to find 15% without a calculator using building blocks.' },
      { id: 'cue-5', blockId: 'callout-tip-pct-of', prompt: 'What decimal do you type for 62% of 800 on a calculator?' }
    ],
    summaryText: 'Percentage of an amount = (x/100) × y. Non-calculator: build from 10% (divide by 10).',
    ready: true
  },
  evidence: []
};
