export const note_business_1_2_4 = {
  noteId: 'note:business:1:2:4',
  subject: 'business',
  unitCode: 'WBS11',
  unitId: 1,
  topicId: 2,
  subtopicIndex: 4,
  title: 'Demand-supply diagram analysis',
  pdfPath: '/notes/business/wbs11-2.pdf',
  blocks: [
      { id: 'obj-1', type: 'objective', data: { text: 'Interpret and utilize supply and demand diagrams to illustrate market dynamics.' } },
      { id: 'h-1', type: 'heading', data: { text: 'Drawing Market Diagrams', level: 2 } },
      { id: 'p-1', type: 'paragraph', data: { text: 'Being able to correctly draw and interpret diagrams is a core skill in Economics and Business. A standard diagram requires clearly labeled axes: Price (P) on the y-axis, and Quantity (Q) on the x-axis.' } },
      { id: 'l-1', type: 'list', data: { style: 'numbered', items: [
        { text: 'Draw axes: P (vertical), Q (horizontal).' },
        { text: 'Draw a downward sloping Demand (D) curve and an upward sloping Supply (S) curve.' },
        { text: 'Mark the initial equilibrium intersection as E1, drawing dashed lines to P1 and Q1.' },
        { text: 'Draw the shift (e.g., a new demand curve D2 to the right).' },
        { text: 'Mark the new intersection E2, drawing dashed lines to P2 and Q2.' },
        { text: 'Use arrows to show the direction of shifts and movements in P and Q.' }
      ]}},
      { id: 'c-1', type: 'callout', data: { style: 'warning', title: 'Diagram Check', text: 'Always ensure your labels are precise. Failing to label the original and new curves (e.g., D1 and D2) or the axes will result in lost marks in an exam.' } },
      { id: 'h-2', type: 'heading', data: { text: 'Movements vs. Shifts', level: 2 } },
      { id: 'p-2', type: 'paragraph', data: { text: 'A shift in one curve causes a movement along the other. For instance, if Supply shifts outward, the supply curve moves right, but the old demand curve stays put—consumers merely move down along the demand curve to a new lower-price equilibrium.' } },
      { id: 's-1', type: 'summary', data: { text: 'Diagrams are powerful tools for visualizing market adjustments. They act as graphical summaries of the invisible hand at work coordinating consumer wants with producer costs.' } },
      { "id": "enr-h-yed", "type": "heading", "data": { "text": "Income Elasticity of Demand (YED)", "level": 2 } },
      { "id": "enr-callout-yed-formula", "type": "callout", "data": { "style": "key", "title": "YED Formula", "text": "YED = % change in Quantity Demanded ÷ % change in Income. A <strong>positive YED</strong> indicates a <strong>normal good</strong> (demand rises with income). A <strong>negative YED</strong> indicates an <strong>inferior good</strong> (demand falls as income rises, e.g. own-label goods, public transport). YED > 1 = luxury; 0–1 = necessity." } },
      { "id": "enr-t-yed", "type": "comparisonTable", "data": { "caption": "Interpreting YED values", "headers": ["YED Value", "Type of Good", "Examples", "Business Implication"], "rows": [
        ["Greater than 1", "Luxury (normal)", "Cars, foreign holidays, branded goods", "Income elastic; demand falls hard in recessions"],
        ["0 to 1", "Necessity (normal)", "Bread, milk, fuel, toothpaste", "Income inelastic; relatively recession-proof"],
        ["Less than 0 (negative)", "Inferior", "Own-label goods, public transport, domestic holidays", "Demand rises in recessions; falls during booms"]
      ] } },
      { "id": "enr-brand-yed", "type": "callout", "data": { "style": "tip", "title": "Real World: VW Group's Income-Segmented Portfolio", "text": "Volkswagen Group owns Skoda (budget), VW (mid-range), Audi (premium) and Porsche (luxury). This portfolio strategy is informed by YED analysis: during a recession, demand shifts towards Skoda; during an economic boom, it shifts towards Audi and Porsche. Similarly, Tesco's Value, Standard and Finest ranges serve different income groups simultaneously." } },
      { "id": "enr-stud-yed", "type": "callout", "data": { "style": "worked", "title": "Student Example: Takeaway Meals & Student Income", "text": "A student's income falls from £450 to £405 per week (−10%). Their demand for takeaways drops from 5 to 3 per week (−40%). YED = −40% ÷ −10% = +4. Since YED > 1, takeaways are a luxury normal good — demand is income elastic. During busy exam term when students work fewer hours, takeaway spending falls sharply." } }
    ],
  recall: {
    enabled: true,
    summaryText: "Visualizing markets using supply and demand diagrams is crucial for illustrating theoretical changes in equilibrium to formulate business strategy.",
    cues: [
      { id: 'cue_1', blockId: 'l-1', prompt: 'Which axis represents Price and which represents Quantity?', answer: 'Price is vertical (y-axis) and Quantity is horizontal (x-axis).' },
      { id: 'cue_2', blockId: 'p-2', prompt: 'If the demand curve shifts to the right, what happens along the supply curve?', answer: 'There is an upward movement along the existing supply curve.' },
      { id: 'cue_3', blockId: 'c-1', prompt: 'Why is it important to use arrows and distinct labels in diagrams?', answer: 'To clearly indicate the direction of the market change and ensure full credit in analytical answers.' },
      { id: 'cue_4', blockId: 'l-1', prompt: 'Why does the demand curve slope downwards?', answer: 'Because at lower prices, more consumers are willing and able to purchase the product (inverse relationship).' }
    ],
    ready: true
  },
  evidence: [],
  mentions: [],
  createdAt: '2026-03-15T21:21:19.188Z',
  lastEditedAt: '2026-03-15T21:21:19.188Z'
};
