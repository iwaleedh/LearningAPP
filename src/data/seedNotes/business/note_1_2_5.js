export const note_business_1_2_5 = {
  noteId: 'note:business:1:2:5',
  subject: 'business',
  unitCode: 'WBS11',
  unitId: 1,
  topicId: 2,
  subtopicIndex: 5,
  title: 'Price elasticity of demand',
  pdfPath: '/notes/business/wbs11-2.pdf',
  blocks: [
      { id: 'obj-1', type: 'objective', data: { text: 'Calculate Price Elasticity of Demand (PED) and understand its determinants.' } },
      { id: 'h-1', type: 'heading', data: { text: 'Defining PED', level: 2 } },
      { id: 'p-1', type: 'paragraph', data: { text: '<strong>Price Elasticity of Demand (PED)</strong> measures how sensitive the quantity demanded of a product is to a change in its price.' } },
      { id: 'eq-1', type: 'equation', data: { html: "PED = <span class='nb-frac'><span class='nb-num'>% change in Quantity Demanded</span><span class='nb-den'>% change in Price</span></span>", caption: 'Formula for PED' } },
      { id: 'h-2', type: 'heading', data: { text: 'Interpreting the PED Value', level: 2 } },
      { id: 'p-2', type: 'paragraph', data: { text: 'Because price and quantity move in opposite directions, PED is normally a negative number. However, businesses usually look at the absolute value.' } },
      { id: 'l-1', type: 'list', data: { style: 'bullet', items: [
        { text: '<strong>Price Inelastic (0 to -1):</strong> Demand changes by a smaller percentage than price. The product is a necessity or has strong brand loyalty.' },
        { text: '<strong>Price Elastic (< -1):</strong> Demand changes by a larger percentage than price. The product is non-essential and sensitive to price changes.' },
        { text: '<strong>Unitary Elastic (-1):</strong> The percentage change in demand is exactly equal to the percentage change in price.' }
      ]}},
      { id: 'c-1', type: 'callout', data: { style: 'key', title: 'Determinants of PED', text: '1. Number of close substitutes (more = elastic) \n2. Necessity vs Luxury (necessity = inelastic) \n3. Proportion of income spent (high % = elastic) \n4. Time period (long run = more elastic as people find alternatives).' } },
      { id: 's-1', type: 'summary', data: { text: 'Knowing PED is crucial. If demand is inelastic, a firm can raise prices to boost revenue. If it is elastic, a price cut might be needed to win enough sales volume to raise revenue.' } },
      { id: 'enr-t2b-ped-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example: Cinema Popcorn', text: 'PED for popcorn at a cinema is -0.8. The current price is £5; it rises to £6 (+20%).\nStep 1: State formula — PED = % change in QD / % change in Price\nStep 2: Rearrange — x = -0.8 × 20 = -16%\nConclusion: QD falls by only 16%. Since |PED| = 0.8 < 1 (price inelastic), the revenue gained per unit outweighs the lost volume, so Total Revenue increases.' } },
      { id: 'enr-t2b-ped-brand', type: 'callout', data: { style: 'tip', title: 'Real World: Coca-Cola and Petrol', text: 'Despite tasting nearly identical in blind tests, Coca-Cola marketing investment creates such strong consumer loyalty that buyers refuse to switch to Pepsi even when prices rise — a clear sign of price inelastic demand. Petrol is another classic example: in the short run very few substitutes exist, so BP and Shell can raise prices without losing a proportional volume of sales.' } },
      { id: 'enr-t2b-ped-student', type: 'callout', data: { style: 'tip', title: 'Student Example: Cinema vs Streaming', text: 'If your local cinema raises ticket prices from £10 to £13, you might switch to Netflix or Disney+ instead — there are many substitutes and it is not a necessity, making demand relatively price elastic. Contrast this with essential medication or electricity: no practical substitutes exist, so demand is highly price inelastic.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "PED formula: (% change in quantity demanded) \u00f7 (% change in price). Edexcel always marks for WORKING \u2014 show the calculation step-by-step. Interpret results: |PED| > 1 = elastic (demand sensitive to price); |PED| < 1 = inelastic (demand insensitive). Remember: PED is usually negative (price \u2191, quantity \u2193), but report absolute value. Use PED to predict revenue: elastic demand \u2192 lower price increases revenue; inelastic \u2192 higher price increases revenue."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Candidates forget to convert to PERCENTAGE changes before calculating (use: [(New - Old) \u00f7 Old] \u00d7 100). Edexcel penalizes answers like 'demand changed 50 to 40 units' without showing percentage conversion. Also, many students calculate PED incorrectly as (Price change \u00f7 Quantity change) \u2014 this is backwards. Another trap: interpreting PED = -2 as 'demand decreases by 2%' when it actually means a 1% price increase causes 2% quantity decrease."
      }
    }
    ],
  recall: {
    enabled: true,
    summaryText: "Price Elasticity of Demand (PED) measures the responsiveness of quantity demanded to a change in price, helping businesses determine optimal pricing strategies.",
    cues: [
      { id: 'cue_1', blockId: 'eq-1', prompt: 'What is the formula for calculating PED?', answer: 'PED = % change in Quantity Demanded / % change in Price' },
      { id: 'cue_2', blockId: 'l-1', prompt: 'If a product has a PED of -0.4, is it elastic or inelastic?', answer: 'Price inelastic (between 0 and -1).' },
      { id: 'cue_3', blockId: 'c-1', prompt: 'How does the availability of substitutes affect PED?', answer: 'More close substitutes make demand more price elastic, as consumers can easily switch to rivals if the price rises.' },
      { id: 'cue_4', blockId: 'c-1', prompt: 'Give an example of a good with highly inelastic demand.', answer: 'Basic food staples, electricity, or addictive goods like cigarettes or medication.' },
      { id: 'cue_5', blockId: 'c-1', prompt: 'Why does demand usually become more elastic over time?', answer: 'Because consumers have more time to search for cheaper alternatives or change their habits.' }
    ],
    ready: true
  },
  evidence: [],
  mentions: [],
  createdAt: '2026-03-15T21:21:19.188Z',
  lastEditedAt: '2026-03-15T21:21:19.188Z'
};
