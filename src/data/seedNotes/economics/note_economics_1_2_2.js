export const note_economics_1_2_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Distinguish between a movement along a demand curve (caused by a price change) and a shift of the entire demand curve (caused by non-price factors), and identify the key determinants that shift demand.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'Movement Along vs Shift of the Demand Curve', level: 2 }, terms: [] },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Key Distinction', text: 'A <strong>movement along</strong> the demand curve occurs only when the <strong>price of the good itself</strong> changes — quantity demanded rises as price falls (law of demand). A <strong>shift of the demand curve</strong> occurs when any <strong>non-price determinant</strong> changes, moving the entire curve left or right.' }, terms: [] },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Movements vs Shifts', headers: ['Type', 'Cause', 'Effect on curve', 'Example'], rows: [['Movement along', 'Price of good rises/falls', 'Point slides along existing curve', 'Oil price rises → quantity demanded falls'], ['Rightward shift', 'Non-price factor increases demand', 'Whole curve moves right', 'Incomes rise → more cars demanded at every price'], ['Leftward shift', 'Non-price factor reduces demand', 'Whole curve moves left', 'Health scare → less demand for red meat at every price']] }, terms: [] },
    { id: 'h-2', type: 'heading', data: { text: 'Key Non-Price Determinants (Demand Shifters)', level: 2 }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Income</strong>: rising incomes shift demand right for <strong>normal goods</strong> and left for <strong>inferior goods</strong>.' }, { text: '<strong>Price of substitutes</strong>: if the price of a substitute rises, demand for the original good rises (rightward shift).' }, { text: '<strong>Price of complements</strong>: if the price of a complement rises, demand for the original good falls (leftward shift).' }, { text: '<strong>Tastes and preferences</strong>: advertising, fashion trends, and social influences shift demand.' }, { text: '<strong>Expectations</strong>: if consumers expect future prices to rise, current demand increases.' }, { text: '<strong>Population and demographics</strong>: an ageing population shifts demand toward healthcare; population growth shifts demand for most goods right.' }] }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: 'Diagrammatic Representation', level: 2 }, terms: [] },
    { id: 'call-2', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Drawing Diagrams', text: 'When answering exam questions:<br/>• Label axes "Price (£)" and "Quantity Demanded (units per period)"<br/>• For a <strong>movement</strong>: draw an arrow along the existing curve<br/>• For a <strong>shift</strong>: draw a new curve and label it D<sub>2</sub><br/>• Always state the direction (rightward = increase in demand, leftward = decrease)' }, terms: [] },
    { id: 'h-4', type: 'heading', data: { text: 'Common Exam Errors', level: 2 }, terms: [] },
    { id: 'call-3', type: 'callout', data: { style: 'warning', title: 'Common Mistakes', text: '<strong>Do not</strong> say "demand increases" when you mean "quantity demanded increases" — these are different concepts.<br/><strong>Price changes</strong> → movement; <strong>non-price factors</strong> → shift.<br/>A shift right means more is demanded at <em>every</em> price, not just a higher quantity at one price.' }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'Price changes cause movements along the demand curve. Non-price factors (income, prices of related goods, tastes, expectations, demographics) cause shifts of the entire curve. Rightward = demand increase; leftward = demand decrease.' }, terms: [] },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Price → movement along curve; non-price factors → shift of curve.',
    cues: [
      { id: 'cue-1', blockId: 'h-1', prompt: 'What causes a movement ALONG the demand curve?', answer: 'A change in the price of the good itself.' },
      { id: 'cue-2', blockId: 'h-2', prompt: 'Name four non-price determinants that can shift the demand curve.', answer: 'Income, prices of substitutes/complements, tastes/advertising, expectations, demographics.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'If consumer incomes rise, what happens to the demand curve for a normal good?', answer: 'It shifts rightward — more is demanded at every price.' },
      { id: 'cue-4', blockId: 'h-4', prompt: 'What is the key difference between "demand increases" and "quantity demanded increases"?', answer: '"Demand increases" means the whole curve shifts right. "Quantity demanded increases" means a movement along the curve due to a price fall.' },
    ]
  },
  evidence: [],
  mentions: []
};
