export const note_business_1_2_6 = {
  noteId: 'note:business:1:2:6',
  subject: 'business',
  unitCode: 'WBS11',
  unitId: 1,
  topicId: 2,
  subtopicIndex: 6,
  title: 'Income elasticity of demand',
  pdfPath: '/notes/business/wbs11-2.pdf',
  blocks: [
      { id: 'obj-1', type: 'objective', data: { text: 'Calculate Income Elasticity of Demand (YED) and distinguish normal, luxury, and inferior goods.' } },
      { id: 'h-1', type: 'heading', data: { text: 'Defining YED', level: 2 } },
      { id: 'p-1', type: 'paragraph', data: { text: '<strong>Income Elasticity of Demand (YED)</strong> gauges the sensitivity of demand to changes in consumers incomes.' } },
      { id: 'eq-1', type: 'equation', data: { html: "YED = <span class='nb-frac'><span class='nb-num'>% change in Quantity Demanded</span><span class='nb-den'>% change in Income</span></span>", caption: 'Formula for YED' } },
      { id: 'h-2', type: 'heading', data: { text: 'Classifying Goods by YED', level: 2 } },
      { id: 'p-2', type: 'paragraph', data: { text: 'Unlike PED, the sign (+ or -) of YED is critically important, as it determines the nature of the good.' } },
      { id: 't-1', type: 'comparisonTable', data: { 
        caption: 'YED Categories',
        headers: ['Value of YED', 'Type of Good', 'Example'],
        rows: [
          ['Positive (+), between 0 and 1', 'Normal Good (Necessity)', 'Fresh vegetables, basic clothing. Demand rises steadily with income.'],
          ['Positive (+), > 1', 'Luxury Good', 'Designer clothes, overseas holidays. Demand rises rapidly with income.'],
          ['Negative (-)', 'Inferior Good', 'Store-brand beans, cheap bus travel. Demand falls as income rises.']
        ]
      }},
      { id: 'c-1', type: 'callout', data: { style: 'worked', title: 'Example Calculation', text: 'Average incomes rise by 5%. Consequently, sales of a budget smartphone decline by 10%. \nYED = -10% / +5% = -2.0. This negative figure proves the good is inferior.' } },
      { id: 's-1', type: 'summary', data: { text: 'YED is vital for business planning. During economic booms, firms selling luxury goods will thrive. During recessions, firms selling inferior goods will experience a surge in demand.' } },
      { id: 'enr-t2b-yed-cycle', type: 'callout', data: { style: 'key', title: 'The Business Cycle and YED', text: 'The economy moves through cycles of recession and growth, meaning consumer incomes fluctuate over time. In a recession: wages fall — demand for inferior goods rises while demand for luxuries falls. During growth: wages rise — demand for luxuries increases as consumers trade up. Other factors affecting YED include minimum wage legislation, changes in taxation, and shifts in international trade.' } },
      { id: 'enr-t2b-yed-portfolio', type: 'callout', data: { style: 'key', title: 'Product Portfolio Planning by YED', text: 'Resilient businesses hold products across multiple YED levels:\n• Tesco offers "Tesco Finest" (luxury, YED > 1), standard and "Everyday Value" (inferior) ranges to appeal to all income segments.\n• Volkswagen Group owns Skoda (budget), VW (mid-range), Audi (premium) and Porsche (luxury) — targeting consumers at every income level to remain stable across the business cycle.' } },
      { id: 'enr-t2b-yed-brand', type: 'callout', data: { style: 'tip', title: 'Real World: 2008 Recession — Aldi, Lidl and Waitrose', text: 'During the 2008 financial crisis, household incomes fell sharply. Discount grocers Aldi and Lidl — whose own-label goods are inferior goods (negative YED) — saw major sales increases as consumers traded down. Meanwhile, Waitrose launched an "Essentials" budget range to retain shoppers who still valued quality but needed lower prices.' } },
      { id: 'enr-t2b-yed-student', type: 'callout', data: { style: 'tip', title: 'Student Example: The Family Pay Rise', text: 'Imagine your parents receive a significant pay rise. The family switches from supermarket own-brand cereal to Kellogg branded cereal (normal good, positive YED), and from a domestic holiday to a trip abroad (luxury, YED > 1). Meanwhile, demand for budget value ready-meals falls (inferior good, negative YED). Income changes ripple through purchasing decisions across the entire household.' } }
    ],
  recall: {
    enabled: true,
    summaryText: "Income elasticity of demand (YED) measures the responsiveness of quantity demanded to changes in consumer real incomes, categorizing goods as normal, luxury, or inferior.",
    cues: [
      { id: 'cue_1', blockId: 'eq-1', prompt: 'What is the formula for calculating YED?', answer: 'YED = % change in Quantity Demanded / % change in Income' },
      { id: 'cue_2', blockId: 't-1', prompt: 'What does a positive YED value signify?', answer: 'That the product is a normal or luxury good (demand increases as income increases).' },
      { id: 'cue_3', blockId: 'c-1', prompt: 'If YED is -1.5, what kind of good is it?', answer: 'An inferior good.' },
      { id: 'cue_4', blockId: 't-1', prompt: 'What defines a luxury good in terms of YED?', answer: 'It has an income elastic demand (YED > +1), meaning demand grows proportionately faster than income.' },
      { id: 'cue_5', blockId: 's-1', prompt: 'Which type of businesses benefit most during an economic recession?', answer: 'Businesses selling inferior goods, as falling average incomes shift consumer preferences to budget options.' }
    ],
    ready: true
  },
  evidence: [],
  mentions: [],
  createdAt: '2026-03-15T21:21:19.188Z',
  lastEditedAt: '2026-03-15T21:21:19.188Z'
};
