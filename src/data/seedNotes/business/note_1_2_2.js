export const note_business_1_2_2 = {
  noteId: 'note:business:1:2:2',
  subject: 'business',
  unitCode: 'WBS11',
  unitId: 1,
  topicId: 2,
  subtopicIndex: 2,
  title: 'Demand and supply interaction',
  pdfPath: '/notes/business/wbs11-2.pdf',
  blocks: [
      { id: 'obj-1', type: 'objective', data: { text: 'Explain how demand and supply interact to determine the equilibrium price and quantity.' } },
      { id: 'h-1', type: 'heading', data: { text: 'Market Equilibrium', level: 2 } },
      { id: 'p-1', type: 'paragraph', data: { text: 'In a free market, prices are determined by the interaction of millions of buyers (demand) and sellers (supply). The market achieves balance at a specific point known as <strong>market equilibrium</strong>.' } },
      { id: 'c-1', type: 'callout', data: { style: 'key', title: 'Equilibrium Price (Market Clearing Price)', text: 'The point where the Demand curve and Supply curve intersect. At this price, the exact quantity consumers want to buy is equal to the quantity producers want to sell. There is no excess demand or excess supply.' } },
      { id: 'h-2', type: 'heading', data: { text: 'Disequilibrium', level: 2 } },
      { id: 'p-2', type: 'paragraph', data: { text: 'When prices are not at the equilibrium level, market forces will naturally push the price back towards equilibrium.' } },
      { id: 'l-1', type: 'list', data: { style: 'bullet', items: [
        { text: '<strong>Excess Supply (Surplus):</strong> Occurs when the current price is strictly above the equilibrium price. Sellers cannot sell all their goods, so they must drop prices to attract buyers.' },
        { text: '<strong>Excess Demand (Shortage):</strong> Occurs when the current price is below equilibrium. Consumers demand more than is available, leading to queues. Sellers realize they can raise prices.' }
      ]}},
      { id: 'c-2', type: 'callout', data: { style: 'tip', title: 'Invisible Hand', text: 'You can refer to Adam Smiths invisible hand: the self-regulating nature of the marketplace automatically clears gluts and shortages through price mechanism signals.' } },
      { id: 's-1', type: 'summary', data: { text: 'Prices are the result of supply and demand balancing. When there is a surplus, prices fall; when there is a shortage, prices rise, constantly steering the market towards equilibrium.' } },
      { "id": "enr-p-market-types", "type": "paragraph", "data": { "text": "A <strong>market</strong> is any place that brings buyers and sellers together to trade at an agreed price. Markets can be <strong>physical</strong> (e.g. a McDonald's restaurant, a high-street shop) or <strong>virtual</strong> (e.g. eBay, Amazon, Airbnb). In both cases, supply-and-demand principles determine the equilibrium price." } },
      { "id": "enr-l-dynamic-changes", "type": "list", "data": { "style": "bullet", "items": [
        { "text": "<strong>Rise in demand (D shifts right):</strong> Shortage at old price → price rises → new higher P and Q. Business revenue (P × Q) typically increases." },
        { "text": "<strong>Fall in demand (D shifts left):</strong> Surplus at old price → price falls → new lower P and Q. Business revenue typically falls." },
        { "text": "<strong>Rise in supply (S shifts right):</strong> Surplus at old price → price falls → lower P but higher Q. Effect on revenue depends on demand elasticity." },
        { "text": "<strong>Fall in supply (S shifts left):</strong> Shortage at old price → price rises → higher P but lower Q. Effect on revenue depends on demand elasticity." }
      ] } },
      { "id": "enr-brand-market", "type": "callout", "data": { "style": "tip", "title": "Real World: Tesco During COVID-19", "text": "When the UK entered lockdown in March 2020, demand for grocery staples shifted sharply right. Tesco experienced shortages of pasta, flour and toilet rolls — a classic excess demand situation. Retailers voluntarily capped prices, but delivery slot availability collapsed, illustrating the market seeking a new equilibrium." } },
      { "id": "enr-stud-market", "type": "callout", "data": { "style": "worked", "title": "Student Example: School Canteen Price Rise", "text": "If a canteen raises lunch prices from £2.50 to £3.50, the number of meals sold falls — this is a movement along the demand curve. If a rival sandwich stall opens next door, the canteen's demand curve shifts left entirely. These are two different mechanisms with different diagrams." } }
    ],
  recall: {
    enabled: true,
    summaryText: "The price of a product in a free market is established through the interaction of demand and supply, leading to a market equilibrium where quantity demanded equals quantity supplied.",
    cues: [
      { id: 'cue_1', blockId: 'c-1', prompt: 'What is equilibrium price?', answer: 'The price at which quantity demanded exactly equals quantity supplied, clearing the market.' },
      { id: 'cue_2', blockId: 'l-1', prompt: 'What happens in a market when price is set excessively high?', answer: 'Excess supply (a surplus) occurs, putting downward pressure on prices.' },
      { id: 'cue_3', blockId: 'l-1', prompt: 'Define excess demand.', answer: 'When the quantity demanded exceeds the quantity supplied because the price is below equilibrium, leading to an eventual price rise.' },
      { id: 'cue_4', blockId: 'c-2', prompt: 'What mechanism clears excess supply in a free market?', answer: 'The price mechanism: producers lower prices to get rid of unsold stock, which simultaneously increases quantity demanded until equilibrium is restored.' }
    ],
    ready: true
  },
  evidence: [],
  mentions: [],
  createdAt: '2026-03-15T21:21:19.188Z',
  lastEditedAt: '2026-03-15T21:21:19.188Z'
};
