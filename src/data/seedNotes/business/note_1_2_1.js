export const note_business_1_2_1 = {
  noteId: 'note:business:1:2:1',
  subject: 'business',
  unitCode: 'WBS11',
  unitId: 1,
  topicId: 2,
  subtopicIndex: 1,
  title: 'Supply determinants',
  pdfPath: '/notes/business/wbs11-2.pdf',
  blocks: [
      { id: 'obj-1', type: 'objective', data: { text: 'Understand the concept of supply and outline factors that cause supply curves to shift.' } },
      { id: 'h-1', type: 'heading', data: { text: 'What is Supply?', level: 2 } },
      { id: 'p-1', type: 'paragraph', data: { text: '<strong>Supply</strong> is the quantity of a good or service that a producer is willing and able to provide to the market at a given price, over a specific period.' } },
      { id: 'c-1', type: 'callout', data: { style: 'key', title: 'Law of Supply', text: 'As price rises, the quantity supplied generally increases. This is because higher prices provide higher potential profit margins, incentivizing production.' } },
      { id: 'h-2', type: 'heading', data: { text: 'Determinants of Supply', level: 2 } },
      { id: 'l-1', type: 'list', data: { style: 'bullet', items: [
        { text: '<strong>Costs of Production:</strong> Increased costs (e.g., wage increases, raw material prices) reduce supply as profitability drops.' },
        { text: '<strong>New Technology:</strong> Technological advancements increase efficiency and lower unit costs, shifting supply outwards (to the right).' },
        { text: '<strong>Subsidies:</strong> Government grants to producers lower production costs, encouraging greater supply.' },
        { text: '<strong>Taxes (Indirect):</strong> Taxes like VAT increase production costs, leading to a decrease in supply (shift to the left).' },
        { text: '<strong>External Shocks:</strong> Uncontrollable events like natural disasters, extreme weather, or pandemics can severely restrict supply (especially agricultural goods).' }
      ]}},
      { id: 'c-2', type: 'callout', data: { style: 'worked', title: 'Example: Introduction of a Subsidy', text: 'If the government gives electric vehicle (EV) manufacturers a subsidy of £2,000 per car, the cost of producing each car falls. The supply curve for EVs will shift to the right, meaning more EVs are supplied at any given price.' } },
      { id: 's-1', type: 'summary', data: { text: 'Supply is mostly influenced by costs, taxation, and technology. Anything that makes production cheaper or more profitable will increase supply, whereas rising costs or negative external shocks will limit supply.' } },
      { "id": "enr-p-qty-supplied", "type": "callout", "data": { "style": "warning", "title": "Key Term: Quantity Supplied vs Supply", "text": "A change in <strong>price</strong> causes a <em>movement along</em> the supply curve — expressed as a change in <strong>quantity supplied</strong>. Only a change in a non-price factor (costs, technology, taxes, subsidies, shocks) causes the entire <strong>supply curve to shift</strong>. Examiners deduct marks for confusing these two." } },
      { "id": "enr-p-vat", "type": "paragraph", "data": { "text": "A real UK example: the rate of <strong>VAT increased from 17.5% to 20% in January 2011</strong>. This raised the cost of production for all businesses, shifting supply curves to the left across the economy — meaning fewer units were supplied at every given price, putting upward pressure on equilibrium prices." } },
      { "id": "enr-brand-supply", "type": "callout", "data": { "style": "tip", "title": "Real World: Robots in Car Factories", "text": "Toyota, Tesla and Volkswagen have invested heavily in industrial robots to replace manual assembly workers. Automation reduces average labour costs per unit and improves productivity. The result: supply curves for cars shift to the right — more vehicles are produced at any given price, applying downward pressure on prices." } },
      { "id": "enr-stud-supply", "type": "callout", "data": { "style": "worked", "title": "Student Example: Local Pizza Shop", "text": "If a pizza shop cuts its delivery prices in winter, this causes a downward movement along the supply curve (less quantity supplied at a lower price) — not a shift. However, if the shop upgrades to an e-bike cutting fuel costs, the entire supply curve shifts right as production becomes cheaper at every output level." } }
    ],
  recall: {
    enabled: true,
    summaryText: "Supply is the quantity of a product that producers are willing and able to offer at different prices. It is determined by costs of production, new technology, subsidies, taxes, external shocks, and the price of related goods.",
    cues: [
      { id: 'cue_1', blockId: 'c-1', prompt: 'State the Law of Supply.', answer: 'As price increases, the quantity supplied increases, ceteris paribus, due to higher profit incentives.' },
      { id: 'cue_2', blockId: 'l-1', prompt: 'How does a rise in indirect taxes affect supply?', answer: 'It increases production costs, thereby decreasing supply (shifting the curve to the left).' },
      { id: 'cue_3', blockId: 'l-1', prompt: 'Why does new technology increase supply?', answer: 'It improves efficiency and lowers average costs of production, making it more profitable to produce more.' },
      { id: 'cue_4', blockId: 'l-1', prompt: 'Give an example of an external shock affecting supply.', answer: 'A severe drought destroying crop yields, or a factory fire.' }
    ],
    ready: true
  },
  evidence: [],
  mentions: [],
  createdAt: '2026-03-15T21:21:19.187Z',
  lastEditedAt: '2026-03-15T21:21:19.187Z'
};
