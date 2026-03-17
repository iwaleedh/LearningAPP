export const note_olevel_maths_core_1_11_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/converting-between-units.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Convert between metric units of length, mass, and capacity using the correct conversion factors.' }
    },
    {
      id: 'h-length',
      type: 'heading',
      data: { text: 'Units of Length', level: 2 }
    },
    {
      id: 'tbl-length',
      type: 'comparisonTable',
      data: {
        caption: 'Metric Length Conversions',
        headers: ['Conversion', 'Multiply by', 'Divide by'],
        rows: [
          ['km → m', '× 1 000', '——'],
          ['m → km', '——', '÷ 1 000'],
          ['m → cm', '× 100', '——'],
          ['cm → m', '——', '÷ 100'],
          ['cm → mm', '× 10', '——'],
          ['mm → cm', '——', '÷ 10']
        ]
      }
    },
    {
      id: 'h-mass',
      type: 'heading',
      data: { text: 'Units of Mass', level: 2 }
    },
    {
      id: 'tbl-mass',
      type: 'comparisonTable',
      data: {
        caption: 'Metric Mass Conversions',
        headers: ['Conversion', 'Factor'],
        rows: [
          ['kg → g', '× 1 000'],
          ['g → kg', '÷ 1 000'],
          ['g → mg', '× 1 000'],
          ['mg → g', '÷ 1 000'],
          ['tonne → kg', '× 1 000'],
          ['kg → tonne', '÷ 1 000']
        ]
      }
    },
    {
      id: 'h-capacity',
      type: 'heading',
      data: { text: 'Units of Capacity and Volume', level: 2 }
    },
    {
      id: 'tbl-capacity',
      type: 'comparisonTable',
      data: {
        caption: 'Capacity Conversions',
        headers: ['Conversion', 'Factor'],
        rows: [
          ['litres → ml', '× 1 000'],
          ['ml → litres', '÷ 1 000'],
          ['cl → ml', '× 10'],
          ['1 litre = 1 000 cm³', 'exactly']
        ]
      }
    },
    {
      id: 'callout-worked-convert',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Unit Conversion Examples',
        text: '3.5 km = 3.5 × 1 000 = <strong>3 500 m</strong><br>450 g = 450 ÷ 1 000 = <strong>0.45 kg</strong><br>2 500 ml = 2 500 ÷ 1 000 = <strong>2.5 litres</strong><br>0.73 m = 0.73 × 100 = <strong>73 cm</strong>'
      }
    },
    {
      id: 'callout-key-convert',
      type: 'callout',
      data: { style: 'key', title: 'Memory Aid: Metric Prefixes', text: 'kilo- = × 1 000, centi- = ÷ 100 (×0.01), milli- = ÷ 1 000 (×0.001)<br>Going to bigger units: divide. Going to smaller units: multiply.' }
    },
    {
      id: 'callout-tip-convert',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip: Same Units', text: 'Ratio problems, speed problems, and area/volume problems all require consistent units. Always convert first, then calculate. Mixing units is the most common source of errors.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Metric conversions use powers of 10. Key factors: km↔m × 1000; m↔cm × 100; cm↔mm × 10. Same for mass (kg↔g × 1000) and capacity (L↔ml × 1000). Convert to same unit before calculating.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'tbl-length', prompt: 'How many mm in 1 cm? How many cm in 1 m? How many m in 1 km?' },
      { id: 'cue-2', blockId: 'tbl-mass', prompt: 'Convert 3.7 kg to grams and 850 mg to grams.' },
      { id: 'cue-3', blockId: 'callout-worked-convert', prompt: 'Convert: 3.5 km to m; 450 g to kg; 2 500 ml to litres.' },
      { id: 'cue-4', blockId: 'callout-key-convert', prompt: 'What does the prefix "kilo" mean? How about "milli" and "centi"?' }
    ],
    summaryText: 'Metric: kilo=×1000, centi=÷100, milli=÷1000. Larger units: divide. Smaller units: multiply. Always convert to common units before comparing or calculating.',
    ready: true
  },
  evidence: []
};
