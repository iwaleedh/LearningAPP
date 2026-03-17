export const note_olevel_maths_extended_1_4_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/reverse-percentages.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Find the original value before a percentage increase or decrease was applied (reverse percentage problems).' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'What Are Reverse Percentages?', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>reverse percentage</strong> problem gives you the value <em>after</em> a percentage change and asks you to find the <strong>original</strong> value. You must "undo" the percentage change.' }
    },
    {
      id: 'callout-key-method',
      type: 'callout',
      data: { style: 'key', title: 'Method', text: '<strong>Step 1:</strong> Identify the multiplier used.\n  • Increase of x% &rarr; multiplier = 1 + <span class="nb-frac"><span class="nb-num">x</span><span class="nb-den">100</span></span>\n  • Decrease of x% &rarr; multiplier = 1 − <span class="nb-frac"><span class="nb-num">x</span><span class="nb-den">100</span></span>\n<strong>Step 2:</strong> Divide the new value by this multiplier.\n\nOriginal = <span class="nb-frac"><span class="nb-num">new value</span><span class="nb-den">multiplier</span></span>' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 1 — Reverse Increase', text: 'After a 20% price increase, a TV costs $540. Find the original price.\n\n<strong>Solution:</strong>\nMultiplier for 20% increase = 1.20\nOriginal price = <span class="nb-frac"><span class="nb-num">$540</span><span class="nb-den">1.20</span></span> = <strong>$450</strong>' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 2 — Reverse Decrease', text: 'In a sale, prices are reduced by 30%. A jacket now costs $63. Find the original price.\n\n<strong>Solution:</strong>\nMultiplier for 30% decrease = 0.70\nOriginal price = <span class="nb-frac"><span class="nb-num">$63</span><span class="nb-den">0.70</span></span> = <strong>$90</strong>' }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 3 — VAT', text: 'A price including 15% VAT is $92. Find the price before VAT.\n\n<strong>Solution:</strong>\nIncluding VAT means a 15% increase was applied.\nMultiplier = 1.15\nPrice before VAT = <span class="nb-frac"><span class="nb-num">$92</span><span class="nb-den">1.15</span></span> = <strong>$80</strong>' }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: { style: 'warning', title: 'Common Mistake', text: 'Do NOT just calculate the percentage and subtract. If a TV costs $540 after a 20% increase, finding 20% of $540 ($108) and subtracting gives $432 — which is WRONG. You must divide by the multiplier.' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'The key question to ask: "What percentage does the new value represent?" After a 20% increase, the new value is 120% of the original. After a 30% decrease, the new value is 70% of the original.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'In reverse percentage problems, find the multiplier that was applied, then divide the given value by the multiplier to find the original. Never subtract the percentage from the new value directly.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-method', prompt: 'How do you find the original value in a reverse percentage problem?' },
      { id: 'cue-2', blockId: 'callout-warning-1', prompt: 'Why can\'t you just subtract the percentage from the new value?' },
      { id: 'cue-3', blockId: 'callout-worked-2', prompt: 'After a 30% decrease, a jacket costs $63. What was the original price?' },
      { id: 'cue-4', blockId: 'callout-tip-1', prompt: 'After a 20% increase, what percentage of the original does the new value represent?' },
      { id: 'cue-5', blockId: 'callout-worked-3', prompt: 'A price including 15% VAT is $92. How do you find the pre-VAT price?' }
    ],
    summaryText: 'Reverse percentages: divide the new value by the multiplier to find the original. The new value represents (100 ± x)% of the original.',
    ready: true
  },
  evidence: []
};
