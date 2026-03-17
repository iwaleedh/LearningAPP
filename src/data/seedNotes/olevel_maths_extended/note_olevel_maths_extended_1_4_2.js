export const note_olevel_maths_extended_1_4_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/basic-percentages.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate a percentage of an amount, express one quantity as a percentage of another, and solve practical percentage problems.' }
    },
    {
      id: 'h-meaning',
      type: 'heading',
      data: { text: 'What Is a Percentage?', level: 2 }
    },
    {
      id: 'p-meaning',
      type: 'paragraph',
      data: { text: 'A <strong>percentage</strong> means "out of 100". The symbol % represents <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">100</span></span>. So 35% means <span class="nb-frac"><span class="nb-num">35</span><span class="nb-den">100</span></span> = 0.35.' }
    },
    {
      id: 'h-of-amount',
      type: 'heading',
      data: { text: 'Finding a Percentage of an Amount', level: 2 }
    },
    {
      id: 'callout-key-method',
      type: 'callout',
      data: { style: 'key', title: 'Method', text: 'To find x% of an amount:\n<strong>Percentage of amount = <span class="nb-frac"><span class="nb-num">x</span><span class="nb-den">100</span></span> × amount</strong>\n\nAlternatively, convert the percentage to a decimal and multiply.' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 1', text: 'Find 15% of $640.\n\n<strong>Solution:</strong>\n15% of $640 = 0.15 × 640 = <strong>$96</strong>\n\nAlternatively: 10% = $64, 5% = $32, so 15% = $64 + $32 = $96.' }
    },
    {
      id: 'h-one-as-other',
      type: 'heading',
      data: { text: 'Expressing One Quantity as a Percentage of Another', level: 2 }
    },
    {
      id: 'callout-key-as-pct',
      type: 'callout',
      data: { style: 'key', title: 'Formula', text: 'Percentage = <span class="nb-frac"><span class="nb-num">part</span><span class="nb-den">whole</span></span> × 100%' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 2', text: 'In a class of 40 students, 14 are boys. What percentage are boys?\n\n<strong>Solution:</strong>\nPercentage = <span class="nb-frac"><span class="nb-num">14</span><span class="nb-den">40</span></span> × 100 = 35%' }
    },
    {
      id: 'h-mental',
      type: 'heading',
      data: { text: 'Mental Percentage Shortcuts', level: 2 }
    },
    {
      id: 'list-shortcuts',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>50%:</strong> divide by 2' },
          { text: '<strong>25%:</strong> divide by 4' },
          { text: '<strong>10%:</strong> divide by 10' },
          { text: '<strong>1%:</strong> divide by 100' },
          { text: '<strong>Build up:</strong> 35% = 25% + 10% or 3 × 10% + 5%' }
        ]
      }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 3', text: 'Find 17.5% of $80.\n\n<strong>Solution:</strong>\n10% of $80 = $8\n5% of $80 = $4\n2.5% of $80 = $2\n17.5% = 10% + 5% + 2.5% = $8 + $4 + $2 = <strong>$14</strong>' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Non-calculator questions often use "build up" — find 10% first, then combine to get the required percentage.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Find a percentage of an amount by multiplying by the decimal equivalent. Express one quantity as a percentage of another using (part/whole) × 100. Use mental shortcuts: find 10%, then build up.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-method', prompt: 'How do you find a percentage of an amount?' },
      { id: 'cue-2', blockId: 'callout-key-as-pct', prompt: 'How do you express one quantity as a percentage of another?' },
      { id: 'cue-3', blockId: 'list-shortcuts', prompt: 'What mental shortcuts can you use for percentage calculations?' },
      { id: 'cue-4', blockId: 'callout-worked-3', prompt: 'Find 17.5% of $80 using the build-up method.' }
    ],
    summaryText: 'Percentages are found by dividing by 100 and multiplying; express as a percentage using (part/whole) × 100.',
    ready: true
  },
  evidence: []
};
