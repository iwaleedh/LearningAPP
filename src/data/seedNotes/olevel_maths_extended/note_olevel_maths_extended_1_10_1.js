export const note_olevel_maths_extended_1_10_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/squared-and-cubic-units.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Convert between squared units (area) and cubic units (volume), understanding how the conversion factor changes with dimension.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Squared and Cubic Units', level: 2 } },
    { id: 'p-intro', type: 'paragraph', data: { text: 'When converting area and volume units, the conversion factor must be squared or cubed. This is because area is two-dimensional and volume is three-dimensional.' } },

    { id: 'h-area', type: 'heading', data: { text: 'Area Conversions', level: 2 } },
    { id: 'p-area', type: 'paragraph', data: { text: 'Since 1 m = 100 cm, then 1 m² = 100 × 100 = 10 000 cm². The conversion factor is <b>squared</b>.' } },

    { id: 'table-area', type: 'comparisonTable', data: {
      caption: 'Area conversions',
      headers: ['Conversion', 'Factor'],
      rows: [
        ['1 cm² = ? mm²', '100 (= 10²)'],
        ['1 m² = ? cm²', '10 000 (= 100²)'],
        ['1 km² = ? m²', '1 000 000 (= 1000²)'],
        ['1 hectare = ? m²', '10 000']
      ]
    }},

    { id: 'callout-key-1', type: 'callout', data: { style: 'key', title: 'Why Square the Factor?', text: 'Think of 1 m² as a square with sides 1 m = 100 cm.\nIts area = 100 cm × 100 cm = 10 000 cm².\n\nSo the length conversion factor (×100) gets squared for area (×10 000).' } },

    { id: 'callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1', text: 'Convert 5.2 m² to cm².\n\n1 m² = 10 000 cm²\n5.2 m² = 5.2 × 10 000 = 52 000 cm²\n\n<b>Answer:</b> 52 000 cm²' } },

    { id: 'h-volume', type: 'heading', data: { text: 'Volume Conversions', level: 2 } },
    { id: 'p-volume', type: 'paragraph', data: { text: 'Since 1 m = 100 cm, then 1 m³ = 100 × 100 × 100 = 1 000 000 cm³. The conversion factor is <b>cubed</b>.' } },

    { id: 'table-volume', type: 'comparisonTable', data: {
      caption: 'Volume conversions',
      headers: ['Conversion', 'Factor'],
      rows: [
        ['1 cm³ = ? mm³', '1000 (= 10³)'],
        ['1 m³ = ? cm³', '1 000 000 (= 100³)'],
        ['1 km³ = ? m³', '10⁹ (= 1000³)']
      ]
    }},

    { id: 'callout-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2', text: 'Convert 3 400 000 cm³ to m³.\n\n1 m³ = 1 000 000 cm³\n3 400 000 ÷ 1 000 000 = 3.4 m³\n\n<b>Answer:</b> 3.4 m³' } },

    { id: 'callout-worked-3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3', text: 'A field has an area of 3.5 km². Convert to hectares.\n\n1 km² = 1 000 000 m²\n1 hectare = 10 000 m²\n\n3.5 km² = 3 500 000 m²\n3 500 000 ÷ 10 000 = 350 hectares\n\n<b>Answer:</b> 350 hectares' } },

    { id: 'callout-warning-1', type: 'callout', data: { style: 'warning', title: 'Common Mistake', text: 'The most common error is using the linear conversion factor instead of squaring/cubing it. 1 m = 100 cm does NOT mean 1 m² = 100 cm². It means 1 m² = 10 000 cm².' } },

    { id: 'callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'To check your answer, think about whether it should be a bigger or smaller number. Converting m² to cm² gives a bigger number (multiply). Converting cm³ to m³ gives a smaller number (divide).' } },

    { id: 'sum-1', type: 'summary', data: { text: 'For area conversions, square the linear factor: 1 m² = 10 000 cm². For volume conversions, cube it: 1 m³ = 1 000 000 cm³. Always think dimensionally — area is 2D, volume is 3D.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-area', prompt: 'Why is 1 m² = 10 000 cm² and not 100 cm²?' },
      { id: 'cue-2', blockId: 'table-area', prompt: 'How many m² in 1 hectare?' },
      { id: 'cue-3', blockId: 'p-volume', prompt: 'How many cm³ are in 1 m³?' },
      { id: 'cue-4', blockId: 'callout-key-1', prompt: 'What rule connects length, area, and volume conversion factors?' }
    ],
    summaryText: 'Area: square the conversion factor. Volume: cube it. 1 m² = 10 000 cm², 1 m³ = 1 000 000 cm³.',
    ready: true
  },
  evidence: []
};
