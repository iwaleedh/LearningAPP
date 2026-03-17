export const note_olevel_maths_extended_1_9_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/ratios.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand, simplify, and use ratios to divide quantities, including three-part ratios and map scales.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Ratios', level: 2 } },
    { id: 'p-intro', type: 'paragraph', data: { text: 'A <b>ratio</b> compares two or more quantities of the same kind. The ratio 3 : 5 means for every 3 parts of one quantity, there are 5 parts of another. Ratios have no units — they express a relative comparison.' } },

    { id: 'h-simplify', type: 'heading', data: { text: 'Simplifying Ratios', level: 2 } },
    { id: 'p-simplify', type: 'paragraph', data: { text: 'Simplify a ratio by dividing all parts by their highest common factor (HCF), just like simplifying a fraction. Both sides must be whole numbers in the final answer.' } },

    { id: 'callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1', text: 'Simplify 24 : 36\n\nHCF of 24 and 36 is 12.\n24 ÷ 12 : 36 ÷ 12 = 2 : 3\n\n<b>Answer:</b> 2 : 3' } },

    { id: 'callout-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2', text: 'Simplify 1.5 : 2.5\n\nMultiply both by 2 to remove decimals: 3 : 5\n\n<b>Answer:</b> 3 : 5' } },

    { id: 'callout-worked-3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3', text: 'Simplify <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span> : <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">6</span></span>\n\nMultiply both by the LCM of denominators (6):\n<span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span> × 6 : <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">6</span></span> × 6 = 4 : 5\n\n<b>Answer:</b> 4 : 5' } },

    { id: 'h-divide', type: 'heading', data: { text: 'Dividing in a Given Ratio', level: 2 } },
    { id: 'p-divide', type: 'paragraph', data: { text: 'To divide a quantity in a ratio, find the total number of parts, calculate the value of one part, then multiply for each share.' } },

    { id: 'callout-worked-4', type: 'callout', data: { style: 'worked', title: 'Worked Example 4', text: 'Divide $240 in the ratio 3 : 5\n\n<b>Total parts:</b> 3 + 5 = 8\n<b>One part:</b> $240 ÷ 8 = $30\n<b>First share:</b> 3 × $30 = $90\n<b>Second share:</b> 5 × $30 = $150\n\nCheck: $90 + $150 = $240 ✓\n\n<b>Answer:</b> $90 and $150' } },

    { id: 'h-three', type: 'heading', data: { text: 'Three-Part Ratios', level: 2 } },
    { id: 'callout-worked-5', type: 'callout', data: { style: 'worked', title: 'Worked Example 5', text: 'A prize of $600 is shared in the ratio 1 : 2 : 3. Find each share.\n\n<b>Total parts:</b> 1 + 2 + 3 = 6\n<b>One part:</b> $600 ÷ 6 = $100\n<b>Shares:</b> $100, $200, $300\n\nCheck: $100 + $200 + $300 = $600 ✓' } },

    { id: 'h-scales', type: 'heading', data: { text: 'Map Scales', level: 2 } },
    { id: 'p-scales', type: 'paragraph', data: { text: 'A map scale like 1 : 25 000 means 1 cm on the map represents 25 000 cm (= 250 m = 0.25 km) in real life. Convert units carefully.' } },

    { id: 'callout-worked-6', type: 'callout', data: { style: 'worked', title: 'Worked Example 6', text: 'A map has scale 1 : 50 000. Two towns are 8 cm apart on the map. What is the real distance?\n\nReal distance = 8 × 50 000 = 400 000 cm\n= 4 000 m = 4 km\n\n<b>Answer:</b> 4 km' } },

    { id: 'callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Always check your answer adds up to the original total. If you\'re dividing $600 in a ratio, the shares must sum to $600.' } },

    { id: 'sum-1', type: 'summary', data: { text: 'Ratios compare quantities. Simplify by dividing by the HCF. To divide in a ratio: find total parts, value of one part, then multiply. Map scales are ratios — convert units carefully (1 km = 100 000 cm).' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-intro', prompt: 'What is a ratio?' },
      { id: 'cue-2', blockId: 'p-simplify', prompt: 'How do you simplify a ratio with fractions?' },
      { id: 'cue-3', blockId: 'p-divide', prompt: 'What are the steps to divide a quantity in a given ratio?' },
      { id: 'cue-4', blockId: 'p-scales', prompt: 'If a map scale is 1:25 000, what does 1 cm on the map represent?' }
    ],
    summaryText: 'Ratios compare quantities. Simplify by dividing by HCF. Divide a quantity by finding total parts and the value of one part.',
    ready: true
  },
  evidence: []
};
