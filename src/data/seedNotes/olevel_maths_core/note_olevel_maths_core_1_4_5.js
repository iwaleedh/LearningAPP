export const note_olevel_maths_core_1_4_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/fractions-of-amounts.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Find a fraction of a quantity; compare fractions of different amounts.' }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Finding a Fraction of an Amount', level: 2 }
    },
    {
      id: 'p-method',
      type: 'paragraph',
      data: { text: 'To find <strong><sup>a</sup>/<sub>b</sub> of a quantity</strong>: divide by the denominator (b) to find <sup>1</sup>/<sub>b</sub> of the amount, then multiply by the numerator (a) to find <sup>a</sup>/<sub>b</sub>.' }
    },
    {
      id: 'callout-key-method',
      type: 'callout',
      data: { style: 'key', title: 'Formula', text: '<span class="nb-frac"><span class="nb-num">a</span><span class="nb-den">b</span></span> of Q = Q × <span class="nb-frac"><span class="nb-num">a</span><span class="nb-den">b</span></span> = <span class="nb-frac"><span class="nb-num">Q × a</span><span class="nb-den">b</span></span><br><br>Equivalently: (Q ÷ b) × a' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1: 3/4 of 60',
        text: 'Step 1: 1/4 of 60 = 60 ÷ 4 = 15<br>Step 2: 3/4 = 3 × 15 = <strong>45</strong><br><br>Or: 60 × 3/4 = 180/4 = 45 ✓'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2: 2/5 of $140',
        text: 'Step 1: 1/5 of $140 = 140 ÷ 5 = $28<br>Step 2: 2/5 = 2 × $28 = <strong>$56</strong>'
      }
    },
    {
      id: 'h-compare',
      type: 'heading',
      data: { text: 'Comparing Fractions of Different Amounts', level: 2 }
    },
    {
      id: 'p-compare',
      type: 'paragraph',
      data: { text: 'To compare fractions of different amounts, calculate both values and compare the results.' }
    },
    {
      id: 'callout-worked-compare',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Which is More?',
        text: 'Compare <strong>3/5 of $80</strong> vs <strong>2/3 of $90</strong>:<br><br>3/5 of $80 = 3 × (80÷5) = 3 × 16 = $48<br>2/3 of $90 = 2 × (90÷3) = 2 × 30 = $60<br><br>$60 > $48, so <strong>2/3 of $90 is more</strong>.'
      }
    },
    {
      id: 'h-real-life',
      type: 'heading',
      data: { text: 'Real-Life Applications', level: 2 }
    },
    {
      id: 'list-reallife',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Finding a sale discount: 1/4 off $48 → save $12' },
          { text: 'Sharing: 3/7 of a group of 35 → 15 people' },
          { text: 'Recipes: 2/3 of 300 ml → 200 ml' }
        ]
      }
    },
    {
      id: 'callout-tip-check',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Always check your answer is less than the original amount (for proper fractions). If 1/4 of 80 = 80, you made an error — it should be 20. Also, fractions of amounts always involve <em>multiplication</em>, not addition.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'To find a/b of Q: divide Q by b, then multiply by a. Or equivalently: Q × a/b. Always compare by calculating both amounts when determining which fraction of an amount is larger.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-method', prompt: 'Explain the "divide then multiply" method for finding a fraction of an amount.' },
      { id: 'cue-2', blockId: 'callout-worked-1', prompt: 'Find 2/5 of 85. Show your working.' },
      { id: 'cue-3', blockId: 'callout-worked-2', prompt: 'What is 3/8 of $240?' },
      { id: 'cue-4', blockId: 'h-compare', prompt: 'Which is greater: 2/3 of 60 kg or 3/4 of 48 kg?' },
      { id: 'cue-5', blockId: 'h-real-life', prompt: 'A class of 30 students has 3/5 attending a trip. How many students attend?' }
    ],
    summaryText: 'Fraction of amount: ÷ by denominator, × by numerator (or multiply quantity × fraction directly).',
    ready: true
  },
  evidence: []
};
