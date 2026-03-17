export const note_olevel_maths_extended_1_8_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/recurring-decimals.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Convert recurring decimals to fractions using algebraic methods, and understand the relationship between rational numbers and recurring/terminating decimals.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Recurring Decimals', level: 2 } },
    { id: 'p-intro', type: 'paragraph', data: { text: 'A <b>recurring decimal</b> is a decimal that repeats a pattern of digits forever. We write a dot over the first and last digit of the repeating block. For example, 0.333... = 0.3̇ and 0.142857142857... = 0.1̇42857̇.' } },

    { id: 'callout-key-1', type: 'callout', data: { style: 'key', title: 'Key Fact', text: 'Every <b>rational number</b> (a number that can be written as a fraction) either terminates or recurs as a decimal.\n\nEvery <b>irrational number</b> (like √2 or π) has a non-terminating, non-recurring decimal expansion.' } },

    { id: 'h-to-frac', type: 'heading', data: { text: 'Converting Recurring Decimals to Fractions', level: 2 } },
    { id: 'p-method', type: 'paragraph', data: { text: 'The algebraic method uses multiplication by powers of 10 to create an equation where the recurring part cancels out.' } },
    { id: 'list-steps', type: 'list', data: { style: 'numbered', items: [
      { text: 'Let x = the recurring decimal.' },
      { text: 'Multiply x by 10, 100, or 1000 (enough to shift one full repeating block).' },
      { text: 'Subtract the original equation from the new one — the recurring parts cancel.' },
      { text: 'Solve for x and simplify the fraction.' }
    ] } },

    { id: 'callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1: One Recurring Digit', text: 'Convert 0.7̇ to a fraction.\n\nLet x = 0.777...\n10x = 7.777...\n\nSubtract: 10x − x = 7.777... − 0.777...\n9x = 7\nx = <span class="nb-frac"><span class="nb-num">7</span><span class="nb-den">9</span></span>\n\n<b>Answer:</b> <span class="nb-frac"><span class="nb-num">7</span><span class="nb-den">9</span></span>' } },

    { id: 'callout-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2: Two Recurring Digits', text: 'Convert 0.3̇6̇ to a fraction.\n\nLet x = 0.363636...\n100x = 36.363636...\n\nSubtract: 100x − x = 36\n99x = 36\nx = <span class="nb-frac"><span class="nb-num">36</span><span class="nb-den">99</span></span> = <span class="nb-frac"><span class="nb-num">4</span><span class="nb-den">11</span></span>\n\n<b>Answer:</b> <span class="nb-frac"><span class="nb-num">4</span><span class="nb-den">11</span></span>' } },

    { id: 'callout-worked-3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3: Mixed Type', text: 'Convert 0.23̇ to a fraction. (Only the 3 recurs)\n\nLet x = 0.2333...\n10x = 2.333...\n100x = 23.333...\n\nSubtract: 100x − 10x = 23.333... − 2.333...\n90x = 21\nx = <span class="nb-frac"><span class="nb-num">21</span><span class="nb-den">90</span></span> = <span class="nb-frac"><span class="nb-num">7</span><span class="nb-den">30</span></span>\n\n<b>Answer:</b> <span class="nb-frac"><span class="nb-num">7</span><span class="nb-den">30</span></span>' } },

    { id: 'h-useful', type: 'heading', data: { text: 'Useful Patterns', level: 2 } },
    { id: 'table-patterns', type: 'comparisonTable', data: {
      caption: 'Standard recurring decimal conversions',
      headers: ['Recurring Decimal', 'Fraction'],
      rows: [
        ['0.1̇', '<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">9</span></span>'],
        ['0.0̇1̇', '<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">99</span></span>'],
        ['0.0̇01̇', '<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">999</span></span>'],
        ['0.1̇42857̇', '<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">7</span></span>'],
        ['0.0̇9̇', '<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">11</span></span>']
      ]
    }},

    { id: 'callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'The trick is choosing the right powers of 10. If n digits repeat, multiply by 10ⁿ. If there are non-recurring digits before the recurring part, you need two multiplications to align the recurring blocks for subtraction.' } },

    { id: 'callout-warning-1', type: 'callout', data: { style: 'warning', title: 'Common Mistake', text: 'Don\'t forget to simplify the final fraction. Always check if the numerator and denominator share a common factor.' } },

    { id: 'sum-1', type: 'summary', data: { text: 'Recurring decimals can be converted to fractions using algebra: let x equal the decimal, multiply by a suitable power of 10, subtract to eliminate the recurring part, then solve. All recurring decimals are rational numbers.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-intro', prompt: 'What is a recurring decimal?' },
      { id: 'cue-2', blockId: 'callout-key-1', prompt: 'What is the difference between rational and irrational decimal expansions?' },
      { id: 'cue-3', blockId: 'list-steps', prompt: 'What are the steps to convert a recurring decimal to a fraction?' },
      { id: 'cue-4', blockId: 'callout-worked-3', prompt: 'How do you handle a decimal where only some digits recur (e.g. 0.23̇)?' },
      { id: 'cue-5', blockId: 'table-patterns', prompt: 'What fraction is 0.0̇9̇ equal to?' }
    ],
    summaryText: 'Recurring decimals &rarr; fractions: let x = the decimal, multiply by 10ⁿ, subtract to cancel repeating part, solve for x.',
    ready: true
  },
  evidence: []
};
