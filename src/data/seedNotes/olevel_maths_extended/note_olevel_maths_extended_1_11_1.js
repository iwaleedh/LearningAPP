export const note_olevel_maths_extended_1_11_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/exchange-rates.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Convert between currencies using exchange rates, and solve problems involving commission and best-value comparisons.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Exchange Rates', level: 2 } },
    { id: 'p-intro', type: 'paragraph', data: { text: 'An <b>exchange rate</b> tells you how much of one currency you get for one unit of another. For example, if $1 = €0.85, then 1 US dollar buys 0.85 euros.' } },

    { id: 'h-convert', type: 'heading', data: { text: 'Converting Between Currencies', level: 2 } },
    { id: 'callout-key-1', type: 'callout', data: { style: 'key', title: 'Conversion Rules', text: 'To convert FROM the base currency: <b>multiply</b> by the exchange rate.\nTo convert TO the base currency: <b>divide</b> by the exchange rate.\n\nExample: if $1 = ¥110\n• $50 &rarr; yen: 50 × 110 = ¥5500\n• ¥5500 &rarr; dollars: 5500 ÷ 110 = $50' } },

    { id: 'callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1', text: 'The exchange rate is £1 = $1.35. Convert £450 to dollars.\n\n450 × 1.35 = $607.50\n\n<b>Answer:</b> $607.50' } },

    { id: 'callout-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2', text: 'The exchange rate is £1 = €1.15. Convert €230 to pounds.\n\n230 ÷ 1.15 = £200\n\n<b>Answer:</b> £200' } },

    { id: 'h-commission', type: 'heading', data: { text: 'Commission Charges', level: 2 } },
    { id: 'p-commission', type: 'paragraph', data: { text: 'Currency exchange services often charge a <b>commission</b> (a percentage fee) or give a less favourable exchange rate. You need to account for this in calculations.' } },

    { id: 'callout-worked-3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3', text: 'A bureau de change charges 2% commission. The exchange rate is $1 = €0.82.\nSam wants to exchange $500 to euros.\n\n<b>Step 1:</b> Commission = 2% of $500 = $10\n<b>Step 2:</b> Amount exchanged = $500 − $10 = $490\n<b>Step 3:</b> Euros received = 490 × 0.82 = €401.80\n\n<b>Answer:</b> €401.80' } },

    { id: 'h-comparison', type: 'heading', data: { text: 'Comparing Prices Across Currencies', level: 2 } },
    { id: 'callout-worked-4', type: 'callout', data: { style: 'worked', title: 'Worked Example 4', text: 'A phone costs $699 in the US, £549 in the UK, and €649 in France.\nExchange rates: $1 = £0.77 and $1 = €0.85.\nWhich country offers the best deal?\n\n<b>Convert all to dollars:</b>\nUS: $699\nUK: 549 ÷ 0.77 = $712.99\nFrance: 649 ÷ 0.85 = $763.53\n\n<b>Answer:</b> The US is cheapest at $699.' } },

    { id: 'h-reverse', type: 'heading', data: { text: 'Reverse Exchange Problems', level: 2 } },
    { id: 'callout-worked-5', type: 'callout', data: { style: 'worked', title: 'Worked Example 5', text: 'Maria returns from holiday with €120. The buy-back rate is £1 = €1.18. How many pounds does she receive?\n\n120 ÷ 1.18 = £101.69 (to nearest penny)\n\n<b>Answer:</b> £101.69' } },

    { id: 'callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'In exchange rate questions, always ask yourself: "Am I multiplying or dividing?" If converting FROM the base currency, multiply. If converting TO the base currency, divide.' } },

    { id: 'callout-warning-1', type: 'callout', data: { style: 'warning', title: 'Common Mistake', text: 'When comparing prices, convert everything to the <b>same currency</b> first. Don\'t assume a smaller number means a cheaper price — currencies have different values.' } },

    { id: 'sum-1', type: 'summary', data: { text: 'Exchange rates convert between currencies: multiply to convert FROM the base, divide to convert TO it. Account for commission charges. When comparing prices across countries, convert all to the same currency first.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-1', prompt: 'When do you multiply and when do you divide by the exchange rate?' },
      { id: 'cue-2', blockId: 'p-commission', prompt: 'What is commission in currency exchange?' },
      { id: 'cue-3', blockId: 'callout-worked-3', prompt: 'How do you handle commission when exchanging money?' },
      { id: 'cue-4', blockId: 'callout-worked-4', prompt: 'How do you compare prices in different currencies?' }
    ],
    summaryText: 'Exchange rates: multiply FROM base currency, divide TO base currency. Account for commission. Convert all to the same currency to compare prices.',
    ready: true
  },
  evidence: []
};
