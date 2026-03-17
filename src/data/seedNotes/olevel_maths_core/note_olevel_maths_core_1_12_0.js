export const note_olevel_maths_core_1_12_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/money-calculations.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Solve problems involving profit and loss, percentage profit/loss, VAT, and discounts in real-world money contexts.' }
    },
    {
      id: 'h-profit-loss',
      type: 'heading',
      data: { text: 'Profit and Loss', level: 2 }
    },
    {
      id: 'p-profit-loss',
      type: 'paragraph',
      data: { text: '<strong>Profit</strong> occurs when selling price > cost price. <strong>Loss</strong> occurs when selling price < cost price.' }
    },
    {
      id: 'list-profit-formulae',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Profit = Selling Price − Cost Price' },
          { text: 'Loss = Cost Price − Selling Price' },
          { text: 'Percentage profit = (Profit ÷ Cost Price) × 100' },
          { text: 'Percentage loss = (Loss ÷ Cost Price) × 100' }
        ]
      }
    },
    {
      id: 'callout-key-profit',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Rule: Always Divide by Cost Price',
        text: 'Percentage profit/loss is <em>always</em> expressed as a percentage of the <strong>cost price</strong> (the original amount), not the selling price.'
      }
    },
    {
      id: 'callout-worked-profit',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Percentage Profit',
        text: 'A trader buys goods for $40 and sells them for $52. Find the percentage profit.<br><br>Profit = $52 − $40 = $12<br>% profit = (12 ÷ 40) × 100 = <strong>30%</strong>'
      }
    },
    {
      id: 'h-vat',
      type: 'heading',
      data: { text: 'VAT (Value Added Tax)', level: 2 }
    },
    {
      id: 'p-vat',
      type: 'paragraph',
      data: { text: 'VAT is a tax added to the price of goods. The VAT-inclusive price is found by multiplying the original price by (1 + VAT rate/100).' }
    },
    {
      id: 'callout-worked-vat',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: VAT',
        text: 'A laptop costs $850 before VAT. VAT is charged at 20%. Find the price including VAT.<br><br>VAT amount = 20% × 850 = 0.20 × 850 = $170<br>Price including VAT = 850 + 170 = <strong>$1020</strong><br><br>Or: $850 × 1.20 = <strong>$1020</strong>'
      }
    },
    {
      id: 'h-discount',
      type: 'heading',
      data: { text: 'Discounts', level: 2 }
    },
    {
      id: 'p-discount',
      type: 'paragraph',
      data: { text: 'A discount is a reduction in price. A 15% discount means you pay 85% of the original price.' }
    },
    {
      id: 'callout-worked-discount',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Discount',
        text: 'A jacket originally costs $120. It is reduced by 25%. Find the sale price.<br><br>Discount = 25% × $120 = $30<br>Sale price = $120 − $30 = <strong>$90</strong><br><br>Or using multiplier: $120 × 0.75 = <strong>$90</strong>'
      }
    },
    {
      id: 'callout-tip-money',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Always give money answers to 2 decimal places (e.g. $12.50, not $12.5). Always divide profit/loss by the ORIGINAL cost price for percentages.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Profit = SP − CP. % profit = (profit/CP) × 100. VAT: multiply by (1 + rate/100). Discount: multiply by (1 − rate/100). All percentage changes are based on the original price.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-worked-profit', prompt: 'A trader buys for $40 and sells for $52. Calculate the percentage profit.' },
      { id: 'cue-2', blockId: 'callout-key-profit', prompt: 'In percentage profit calculations, what figure do you always divide by? Why?' },
      { id: 'cue-3', blockId: 'callout-worked-vat', prompt: 'A laptop costs $850. VAT is 20%. Find the final price.' },
      { id: 'cue-4', blockId: 'callout-worked-discount', prompt: 'A $120 jacket has a 25% discount. What is the sale price?' },
      { id: 'cue-5', blockId: 'callout-tip-money', prompt: 'How many decimal places should money answers be given to?' }
    ],
    summaryText: 'Profit/loss as % of cost price. VAT: ×(1+r/100). Discount: ×(1−r/100). Always 2 decimal places for money.',
    ready: true
  },
  evidence: []
};
