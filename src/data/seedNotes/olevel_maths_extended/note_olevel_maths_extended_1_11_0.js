export const note_olevel_maths_extended_1_11_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/money-calculations.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Solve problems involving profit, loss, discount, tax, simple interest, and compound interest in financial contexts.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Money Calculations', level: 2 } },
    { id: 'p-intro', type: 'paragraph', data: { text: 'Financial mathematics at IGCSE involves profit and loss, percentage increases and decreases, and interest calculations. These skills apply the percentage work from earlier topics to real-world money contexts.' } },

    { id: 'h-profit', type: 'heading', data: { text: 'Profit and Loss', level: 2 } },
    { id: 'callout-key-1', type: 'callout', data: { style: 'key', title: 'Key Formulae', text: 'Profit = Selling price − Cost price\nLoss = Cost price − Selling price\n\nPercentage profit = <span class="nb-frac"><span class="nb-num">Profit</span><span class="nb-den">Cost price</span></span> × 100%\n\nPercentage loss = <span class="nb-frac"><span class="nb-num">Loss</span><span class="nb-den">Cost price</span></span> × 100%\n\n<b>Important:</b> Percentage profit/loss is always calculated on the <b>cost price</b>.' } },

    { id: 'callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1', text: 'A trader buys goods for $80 and sells them for $100. Find the percentage profit.\n\nProfit = $100 − $80 = $20\nPercentage profit = <span class="nb-frac"><span class="nb-num">20</span><span class="nb-den">80</span></span> × 100% = 25%\n\n<b>Answer:</b> 25%' } },

    { id: 'h-discount', type: 'heading', data: { text: 'Discount and Tax', level: 2 } },
    { id: 'p-discount', type: 'paragraph', data: { text: 'A <b>discount</b> reduces the price (a percentage decrease). <b>Tax</b> (e.g. VAT or sales tax) increases the price (a percentage increase). Use multipliers for efficiency.' } },

    { id: 'callout-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2', text: 'A jacket costs $120. It has a 15% discount, then 10% tax is added. Find the final price.\n\nAfter discount: $120 × 0.85 = $102\nAfter tax: $102 × 1.10 = $112.20\n\n<b>Answer:</b> $112.20' } },

    { id: 'h-simple', type: 'heading', data: { text: 'Simple Interest', level: 2 } },
    { id: 'eq-si', type: 'equation', data: { html: 'I = <span class="nb-frac"><span class="nb-num">P × R × T</span><span class="nb-den">100</span></span>', caption: 'Simple interest formula: I = interest, P = principal, R = rate (%), T = time (years)' } },

    { id: 'callout-worked-3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3', text: '$5000 is invested at 4% simple interest per year for 3 years.\n\nI = <span class="nb-frac"><span class="nb-num">5000 × 4 × 3</span><span class="nb-den">100</span></span> = $600\n\nTotal amount = $5000 + $600 = $5600\n\n<b>Answer:</b> $5600' } },

    { id: 'h-compound', type: 'heading', data: { text: 'Compound Interest', level: 2 } },
    { id: 'p-compound', type: 'paragraph', data: { text: 'With <b>compound interest</b>, interest is calculated on the original amount PLUS any interest already earned. This means the amount grows faster each year.' } },
    { id: 'eq-ci', type: 'equation', data: { html: 'A = P(1 + <span class="nb-frac"><span class="nb-num">r</span><span class="nb-den">100</span></span>)<sup>n</sup>', caption: 'A = final amount, P = principal, r = rate (%), n = number of years' } },

    { id: 'callout-worked-4', type: 'callout', data: { style: 'worked', title: 'Worked Example 4', text: '$5000 is invested at 4% compound interest for 3 years.\n\nA = 5000 × (1.04)³\nA = 5000 × 1.124864\nA = $5624.32\n\nCompound interest earned = $5624.32 − $5000 = $624.32\n\nCompare with simple interest ($600) — compound interest earns $24.32 more.\n\n<b>Answer:</b> $5624.32' } },

    { id: 'callout-key-2', type: 'callout', data: { style: 'key', title: 'Depreciation', text: 'Depreciation means a value <b>decreases</b> over time. Use the same compound formula but subtract the rate:\n\nA = P(1 − <span class="nb-frac"><span class="nb-num">r</span><span class="nb-den">100</span></span>)<sup>n</sup>' } },

    { id: 'callout-worked-5', type: 'callout', data: { style: 'worked', title: 'Worked Example 5', text: 'A car worth $20 000 depreciates by 12% each year. Find its value after 4 years.\n\nA = 20 000 × (1 − 0.12)⁴\nA = 20 000 × (0.88)⁴\nA = 20 000 × 0.59969...\nA = $11 993.93\n\n<b>Answer:</b> $11 993.93' } },

    { id: 'callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'When a question asks for "interest earned", subtract the principal from the final amount. When it asks for the "total amount", include the principal. Read carefully!' } },

    { id: 'sum-1', type: 'summary', data: { text: 'Profit/loss percentages are based on cost price. Simple interest: I = PRT/100 (linear growth). Compound interest: A = P(1 + r/100)ⁿ (exponential growth). Depreciation uses (1 − r/100)ⁿ. Use multipliers for discounts and tax.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-1', prompt: 'Percentage profit is calculated on which value — cost or selling price?' },
      { id: 'cue-2', blockId: 'eq-si', prompt: 'What is the simple interest formula?' },
      { id: 'cue-3', blockId: 'eq-ci', prompt: 'What is the compound interest formula?' },
      { id: 'cue-4', blockId: 'callout-key-2', prompt: 'How does the formula change for depreciation?' },
      { id: 'cue-5', blockId: 'callout-worked-4', prompt: 'Why does compound interest earn more than simple interest?' }
    ],
    summaryText: 'Simple interest: I = PRT/100. Compound interest: A = P(1 + r/100)ⁿ. Depreciation: A = P(1 − r/100)ⁿ.',
    ready: true
  },
  evidence: []
};
