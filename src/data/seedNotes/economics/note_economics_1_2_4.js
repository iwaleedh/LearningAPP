export const note_economics_1_2_4 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Identify and explain the non-price factors that determine demand, and analyse how changes in income, prices of related goods, tastes, expectations, and demographics shift the demand curve.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'Overview of Demand Determinants', level: 2 }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: 'The <strong>demand curve</strong> shows the relationship between price and quantity demanded, ceteris paribus.' }, { text: 'Any factor <em>other</em> than price that changes demand is called a <strong>demand determinant</strong> or <strong>demand shifter</strong>.' }, { text: 'A change in a determinant causes a <strong>shift</strong> of the entire demand curve.' }] }, terms: [] },
    { id: 'h-2', type: 'heading', data: { text: '1. Income', level: 2 }, terms: [] },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Income and Demand', headers: ['Good type', 'Definition', 'Effect of income rise', 'Examples'], rows: [['<strong>Normal good</strong>', 'Demand rises with income', 'Demand curve shifts right', 'Cars, foreign holidays, restaurants'], ['<strong>Inferior good</strong>', 'Demand falls with income', 'Demand curve shifts left', 'Budget supermarket brands, bus journeys, instant noodles'], ['<strong>Luxury good</strong>', 'Demand rises more than proportionally with income (YED > 1)', 'Large rightward shift', 'Designer goods, sports cars, fine dining']] }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: '2. Prices of Related Goods', level: 2 }, terms: [] },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Substitutes</strong>: goods that can replace each other (e.g. Pepsi and Coca-Cola). If the price of a substitute <strong>rises</strong>, demand for the original good <strong>rises</strong> (XED > 0).' }, { text: '<strong>Complements</strong>: goods consumed together (e.g. cars and petrol). If the price of a complement <strong>rises</strong>, demand for the original good <strong>falls</strong> (XED < 0).' }] }, terms: [] },
    { id: 'h-4', type: 'heading', data: { text: '3. Tastes and Preferences', level: 2 }, terms: [] },
    { id: 'list-3', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Advertising</strong> and branding can shift demand curves significantly.' }, { text: '<strong>Fashion and trends</strong>: demand for certain clothing styles shifts with seasons and celebrity endorsements.' }, { text: '<strong>Health consciousness</strong>: growing awareness of obesity shifted demand away from sugary drinks (leftward shift).' }] }, terms: [] },
    { id: 'h-5', type: 'heading', data: { text: '4. Expectations and Demographics', level: 2 }, terms: [] },
    { id: 'list-4', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Consumer expectations</strong>: if consumers expect prices to rise in the future, they may buy now, shifting current demand right (e.g. house purchases before interest rate rise).' }, { text: '<strong>Population size</strong>: a growing population increases demand for most goods, shifting curves right.' }, { text: '<strong>Age structure</strong>: an ageing society shifts demand toward healthcare, retirement housing, and leisure travel for the elderly.' }, { text: '<strong>Income distribution</strong>: more equal distribution boosts demand for mass-market goods; less equal distribution boosts luxury demand.' }] }, terms: [] },
    { id: 'call-1', type: 'callout', data: { style: 'tip', title: 'Mnemonic: PIRATES', text: 'Remember demand determinants as <strong>PIRATES</strong>:<br/><strong>P</strong>rices of related goods | <strong>I</strong>ncome | <strong>R</strong>ates of interest | <strong>A</strong>dvertising/tastes | <strong>T</strong>rends/fashion | <strong>E</strong>xpectations | <strong>S</strong>ize of population/demographics' }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'Demand determinants include income (normal vs inferior goods), prices of substitutes and complements, tastes/advertising, expectations of future prices, and demographic factors. Each shifts the whole demand curve rather than causing a movement along it.' }, terms: [] },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Remember demand determinants as PIRATES:\nP rices of related goods | I ncome | R ates of interest | A dvertising/tastes | T rends/fashion | E xpectations | S ize of population/demographics"
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Demand is shifted by income, related goods prices, tastes, expectations, and demographics.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'What is a normal good and how does rising income affect its demand?', answer: 'A normal good has demand that rises with income — demand curve shifts right.' },
      { id: 'cue-2', blockId: 'h-3', prompt: 'How does a rise in the price of a substitute affect demand for the original good?', answer: 'It increases demand for the original good (demand curve shifts right), since consumers switch to the now-relatively-cheaper original.' },
      { id: 'cue-3', blockId: 'h-4', prompt: 'Give two ways tastes/preferences can change demand.', answer: 'Advertising campaigns can boost demand; health awareness can reduce demand for unhealthy products.' },
      { id: 'cue-4', blockId: 'h-5', prompt: 'How do consumer expectations of future price rises affect current demand?', answer: 'Consumers buy now before prices rise, shifting current demand rightward.' },
    ]
  },
  evidence: [],
  mentions: []
};
