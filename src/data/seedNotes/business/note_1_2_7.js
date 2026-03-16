export const note_business_1_2_7 = {
  noteId: 'note:business:1:2:7',
  subject: 'business',
  unitCode: 'WBS11',
  unitId: 1,
  topicId: 2,
  subtopicIndex: 7,
  title: 'Elasticity and total revenue',
  pdfPath: '/notes/business/wbs11-2.pdf',
  blocks: [
      { id: 'obj-1', type: 'objective', data: { text: 'Understand the relationship between price changes, demand elasticity, and total revenue.' } },
      { id: 'h-1', type: 'heading', data: { text: 'Total Revenue and PED', level: 2 } },
      { id: 'p-1', type: 'paragraph', data: { text: '<strong>Total Revenue (TR)</strong> is calculated by multiplying selling price by quantity sold (TR = Price × Quantity).' } },
      { id: 'p-2', type: 'paragraph', data: { text: 'When a firm changes its price, two opposing forces act on Total Revenue. If price rises, the firm earns more per unit sold, but sells fewer units. Whether TR ultimately rises or falls dictates the firms optimal pricing strategy, relying entirely on PED.' } },
      { id: 'l-1', type: 'list', data: { style: 'bullet', items: [
        { text: '<strong>When Demand is INELASTIC:</strong> Quantity drops by a smaller percentage than the price increase. The higher price outweighs lost volume -> <strong>Raising prices INCREASES Total Revenue</strong>.' },
        { text: '<strong>When Demand is ELASTIC:</strong> Quantity drops by a larger percentage than the price increase. The lost volume outweighs the higher price -> <strong>Raising prices DECREASES Total Revenue</strong>.' },
        { text: '<strong>Lowering Prices:</strong> If inelastic, cutting price lowers TR. If elastic, cutting price boosts TR.' }
      ]}},
      { id: 'c-1', type: 'callout', data: { style: 'worked', title: 'Inelastic Revenue Example', text: 'Price rises by 10%. PED is -0.5 (inelastic). Sales volume will drop by only 5%. \nSince the 10% gain in price compensates for a mere 5% loss in customers, Total Revenue rises.' } },
      { id: 's-1', type: 'summary', data: { text: 'For firms with price-inelastic products (heavy branding, monopolies, necessities), price skimming or consistent price hikes maximize revenue. Firms with elastic products must focus on competitive, lower pricing to gain necessary volume.' } },
      { id: 'enr-t2b-tr-elastic', type: 'callout', data: { style: 'worked', title: 'Worked Example: Elastic Demand and Revenue', text: 'A firm cuts its price by 10%. PED is -2.5 (price elastic).\nStep 1: % change in QD = -2.5 × -10% = +25%\nStep 2: Original TR = 100 units × £10 = £1,000. After cut: 125 units × £9 = £1,125\nConclusion: Because demand is price elastic, the large gain in volume more than compensates for the lower unit price — Total Revenue RISES by £125.' } },
      { id: 'enr-t2b-tr-strategy', type: 'paragraph', data: { text: 'Businesses use PED data to select the most effective pricing strategy. <strong>Price skimming</strong> — charging a high initial price — suits products with price inelastic demand (e.g. new iPhone launches or essential medicines). <strong>Penetration pricing</strong> — charging a low price to rapidly win market share — suits products with price elastic demand, where a lower price attracts a proportionally larger rise in sales volume, boosting Total Revenue.' } },
      { id: 'enr-t2b-tr-brand', type: 'callout', data: { style: 'tip', title: 'Real World: Petrol Companies', text: 'Petrol has very few short-run substitutes — most drivers cannot quickly switch to an electric vehicle or public transport. When oil prices spiked in 2022, BP and Shell passed on cost increases to consumers yet still recorded rising total revenues, because the percentage fall in quantity demanded was far smaller than the percentage rise in price. This illustrates price inelastic demand in action.' } },
      { id: 'enr-t2b-tr-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Always State Both Effects', text: 'When discussing the impact of a price change on total revenue, always identify TWO opposing effects: (1) Price effect — more or less earned per unit; (2) Volume effect — more or fewer units sold. Then state which effect dominates, based on whether demand is price elastic or price inelastic.' } }
    ],
  recall: {
    enabled: true,
    summaryText: "The relationship between price elasticity of demand (PED) and total revenue helps an organization predict how a change in selling price will impact its overall sales income.",
    cues: [
      { id: 'cue_1', blockId: 'p-1', prompt: 'What is the formula for Total Revenue?', answer: 'Total Revenue = Selling Price × Quantity Sold.' },
      { id: 'cue_2', blockId: 'l-1', prompt: 'If a business sells an inelastic product, should they raise or lower prices to maximize revenue?', answer: 'They should raise prices, as the percentage drop in quantity will be smaller than the percentage increase in price.' },
      { id: 'cue_3', blockId: 'l-1', prompt: 'If demand is elastic, what happens to revenue when price increases?', answer: 'Total Revenue falls, because consumers substantially cut back on purchases.' },
      { id: 'cue_4', blockId: 'l-1', prompt: 'When does cutting prices increase Total Revenue?', answer: 'When demand is price elastic (PED < -1).' }
    ],
    ready: true
  },
  evidence: [],
  mentions: [],
  createdAt: '2026-03-15T21:21:19.188Z',
  lastEditedAt: '2026-03-15T21:21:19.188Z'
};
