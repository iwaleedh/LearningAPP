export const note_business_1_2_3 = {
  noteId: 'note:business:1:2:3',
  subject: 'business',
  unitCode: 'WBS11',
  unitId: 1,
  topicId: 2,
  subtopicIndex: 3,
  title: 'Market equilibrium changes',
  pdfPath: '/notes/business/wbs11-2.pdf',
  blocks: [
      { id: 'obj-1', type: 'objective', data: { text: 'Analyse the impacts of shifts in supply and demand on equilibrium price and quantity.' } },
      { id: 'h-1', type: 'heading', data: { text: 'Shifting the Equilibrium', level: 2 } },
      { id: 'p-1', type: 'paragraph', data: { text: 'Whenever there is a shift in either the demand or supply curve, the old equilibrium is destroyed. A temporary state of disequilibrium occurs until a new equilibrium price and quantity are established.' } },
      { id: 't-1', type: 'comparisonTable', data: { 
        caption: 'Summary of Shifts',
        headers: ['Curve Shift', 'Effect on Price', 'Effect on Quantity'],
        rows: [
          ['Demand increases (shifts right)', 'Rises', 'Rises'],
          ['Demand decreases (shifts left)', 'Falls', 'Falls'],
          ['Supply increases (shifts right)', 'Falls', 'Rises'],
          ['Supply decreases (shifts left)', 'Rises', 'Falls']
        ]
      }},
      { id: 'h-2', type: 'heading', data: { text: 'Simultaneous Shifts', level: 2 } },
      { id: 'p-2', type: 'paragraph', data: { text: 'Sometimes both supply and demand shift at the same time. The final effect on price or quantity depends on the relative magnitude of the shifts.' } },
      { id: 'c-1', type: 'callout', data: { style: 'worked', title: 'Scenario: Coffee Market', text: 'Demand for coffee rises due to a new health study (Demand shifts Right). At the same time, poor weather destroys coffee crops (Supply shifts Left). \nResult: Price definitely drastically RISES. However, the final Quantity traded depends on which shift was larger (indeterminate without more data).' } },
      { id: 's-1', type: 'summary', data: { text: 'Understanding how external shocks and changing habits alter equilibrium allows businesses to foresee price changes and adjust their production and pricing strategies accordingly.' } },
      { "id": "enr-h-ped", "type": "heading", "data": { "text": "Price Elasticity of Demand (PED)", "level": 2 } },
      { "id": "enr-p-ped", "type": "paragraph", "data": { "text": "<strong>Price Elasticity of Demand (PED)</strong> measures how responsive quantity demanded is to a change in price. PED = % change in QD ÷ % change in Price. The value is always <strong>negative</strong> (inverse relationship between price and QD). If PED is between 0 and –1, demand is <strong>price inelastic</strong>; if PED is below –1, demand is <strong>price elastic</strong>." } },
      { "id": "enr-callout-ped-revenue", "type": "callout", "data": { "style": "key", "title": "PED and Business Revenue", "text": "<strong>Price inelastic (PED 0 to −1):</strong> Raising price increases total revenue (TR = P × Q) — QD falls proportionally less. Best strategy: price skimming. <strong>Price elastic (PED below −1):</strong> Raising price reduces total revenue — QD falls proportionally more. Best strategy: competitive/penetration pricing." } },
      { "id": "enr-svg-ped-graph", "type": "svg", "data": { "svg": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' font-family='Arial,sans-serif'><rect width='400' height='300' fill='#0f172a' rx='8'/><text x='200' y='20' text-anchor='middle' font-size='12' font-weight='bold' fill='#1e293b'>Price Elasticity of Demand</text><g transform='translate(20,0)'><line x1='50' y1='260' x2='180' y2='260' stroke='#334155' stroke-width='1.5'/><line x1='50' y1='40' x2='50' y2='260' stroke='#334155' stroke-width='1.5'/><text x='115' y='278' text-anchor='middle' font-size='9' fill='#64748b'>Qty</text><text x='35' y='155' font-size='9' fill='#64748b' transform='rotate(-90,35,155)'>Price</text><line x1='55' y1='50' x2='170' y2='250' stroke='#3b82f6' stroke-width='2.5'/><text x='115' y='38' font-size='9' fill='#3b82f6' font-weight='bold'>Inelastic (PED&lt;1)</text><text x='40' y='22' font-size='8' fill='#64748b'>e.g. petrol</text></g><g transform='translate(205,0)'><line x1='50' y1='260' x2='180' y2='260' stroke='#334155' stroke-width='1.5'/><line x1='50' y1='40' x2='50' y2='260' stroke='#334155' stroke-width='1.5'/><text x='115' y='278' text-anchor='middle' font-size='9' fill='#64748b'>Qty</text><line x1='55' y1='80' x2='170' y2='250' stroke='#ef4444' stroke-width='2.5'/><text x='115' y='38' font-size='9' fill='#ef4444' font-weight='bold'>Elastic (PED&gt;1)</text><text x='40' y='22' font-size='8' fill='#64748b'>e.g. luxury bags</text></g></svg>", "caption": "PED comparison: inelastic demand (steep curve) vs elastic demand (shallow curve)" } },
      { "id": "enr-brand-ped", "type": "callout", "data": { "style": "tip", "title": "Real World: Petrol (Inelastic Demand)", "text": "Petrol has very few substitutes in the short term — most people cannot quickly switch to cycling or public transport. When oil companies raise fuel prices, the percentage fall in sales is small relative to the price rise. Demand is price inelastic, so total revenue rises when price increases." } },
      { "id": "enr-stud-ped", "type": "callout", "data": { "style": "worked", "title": "Student Example: Cinema Popcorn", "text": "The PED for cinema popcorn is approximately –0.8. If the cinema raises the price by 20%, quantity demanded falls by only 16% (0.8 × 20%). Because demand is inelastic, total revenue increases. This is why cinemas charge premium prices for snacks — captive audiences have few substitutes." } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "Edexcel tests this via supply/demand diagram questions with 6\u20138 marks. When demand shifts RIGHT: new equilibrium has HIGHER price AND higher quantity (examiners expect correct diagram). When supply shifts LEFT: higher price, LOWER quantity. Examiners reward you for explaining the CAUSE (e.g., 'Income rose \u2192 demand shifts right \u2192 shortage forms \u2192 price rises until new equilibrium \u2192 quantity increases'). Always trace the chain of cause-and-effect."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students draw incorrect shift directions or forget to identify both price AND quantity changes at new equilibrium. Common error: 'demand shifted right so price goes up' \u2014 incomplete; you must add 'and quantity also increases.' Another major mistake: confusing which curve SHIFTS vs which direction. Practice: If incomes rise, DEMAND shifts right (not supply left). If costs fall, SUPPLY shifts right (not demand)."
      }
    }
    ],
  recall: {
    enabled: true,
    summaryText: "Changes in the non-price determinants of either demand or supply will shift the curves, resulting in a newly established market equilibrium point with a different price and quantity.",
    cues: [
      { id: 'cue_1', blockId: 't-1', prompt: 'If supply decreases (shifts left) while demand is constant, what happens to price and quantity?', answer: 'Price rises, Quantity falls.' },
      { id: 'cue_2', blockId: 't-1', prompt: 'If demand increases (shifts right) while supply is constant, what happens to price and quantity?', answer: 'Price rises, Quantity rises.' },
      { id: 'cue_3', blockId: 'c-1', prompt: 'Why is the effect on quantity indeterminate if both supply and demand increase simultaneously?', answer: 'Because increased demand pushes quantity up, and increased supply pushes quantity up; without knowing exact shift sizes, price change is ambiguous, but quantity definitely rises.' },
      { id: 'cue_4', blockId: 's-1', prompt: 'If governments grant a subsidy to farmers, what is the effect on market equilibrium food prices?', answer: 'Supply shifts right; equilibrium price falls and equilibrium quantity rises.' }
    ],
    ready: true
  },
  evidence: [],
  mentions: [],
  createdAt: '2026-03-15T21:21:19.188Z',
  lastEditedAt: '2026-03-15T21:21:19.188Z'
};
