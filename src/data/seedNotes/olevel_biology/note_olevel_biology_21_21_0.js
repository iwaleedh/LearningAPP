export const note_olevel_biology_21_21_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/21 Biotechnology And Genetic Modification/21-1-1-usefulness-of-microorganisms.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the uses of microorganisms in food production, medicine, waste treatment, and energy production.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Why Are Microorganisms Useful?', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: '<strong>Microorganisms</strong> (bacteria, fungi, and viruses) are used extensively in biotechnology because they reproduce rapidly, can be genetically modified, and carry out a wide range of chemical reactions. They are used in <strong>food production</strong>, <strong>medicine</strong>, <strong>sewage treatment</strong>, and <strong>energy production</strong>.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Uses of Microorganisms', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Microorganism uses across different industries',
        headers: ['Application', 'Microorganism', 'Product/Role'],
        rows: [
          ['Bread making', 'Yeast (Saccharomyces cerevisiae)', 'Ferments glucose → CO₂ (makes dough rise) + ethanol (evaporates in baking)'],
          ['Beer and wine making', 'Yeast', 'Ferments sugars → ethanol + CO₂ (alcoholic drinks)'],
          ['Yogurt making', 'Lactobacillus bacteria', 'Ferment lactose → lactic acid (thickens and sours milk)'],
          ['Cheese making', 'Bacteria + fungi (moulds for some cheeses)', 'Ferment and mature milk proteins and fats'],
          ['Penicillin production', 'Penicillium mould (fungus)', 'Produces antibiotic penicillin (kills bacteria)'],
          ['Insulin production', 'Genetically modified E. coli bacteria', 'Produce human insulin for treating diabetes'],
          ['Sewage treatment', 'Decomposer bacteria', 'Break down organic matter in sewage aerobically and anaerobically'],
          ['Biogas production', 'Methanogenic bacteria', 'Decompose organic waste anaerobically → methane (biogas fuel)']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Microorganisms as Decomposers', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Role of Decomposers in Ecosystems',
        text: '<strong>Decomposers</strong> (mainly bacteria and fungi) break down dead organisms and waste products into simpler inorganic substances. This is essential for:<br/>• <strong>Nutrient cycling</strong> — returning minerals (e.g. nitrates) to the soil for plant uptake.<br/>• <strong>Carbon cycling</strong> — releasing CO₂ back into the atmosphere via respiration.<br/>• <strong>Sewage treatment</strong> — decomposers break down organic waste in sewage works.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Remember that microorganisms are used both <strong>for food</strong> (yeast in bread/beer, Lactobacillus in yogurt) and <strong>to produce medicines</strong> (Penicillium → penicillin, GM bacteria → insulin). Know specific organism names — examiners often ask for them.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Microorganisms are used in food production (yeast for bread/beer, Lactobacillus for yogurt), medicine (Penicillium for penicillin, GM bacteria for insulin), sewage treatment (decomposer bacteria), and energy production (biogas from methanogenic bacteria). Decomposers also drive nutrient cycling in ecosystems.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Microorganisms: yeast (bread/beer), Lactobacillus (yogurt), Penicillium (penicillin), GM bacteria (insulin), decomposers (sewage/nutrient cycling), methanogenic bacteria (biogas).',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'Name the microorganism used to make yogurt and explain how it works.', answer: 'Lactobacillus bacteria ferment lactose (milk sugar) to produce lactic acid. The acid causes the milk proteins to coagulate, thickening and souring the milk to form yogurt.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'How is insulin produced commercially using microorganisms?', answer: 'The human insulin gene is inserted into E. coli bacteria (genetic modification). The bacteria then produce human insulin, which is extracted and purified for use by diabetics.' },
      { id: 'cue-3', blockId: 'call-1', prompt: 'Why are decomposers essential in ecosystems?', answer: 'Decomposers break down dead organisms and waste, returning minerals (like nitrates) to the soil for plant uptake and releasing CO₂ — essential for nutrient cycling and carbon cycling.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_21_21_0;
