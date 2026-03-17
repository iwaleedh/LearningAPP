export const note_olevel_maths_core_1_11_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/squared-and-cubic-units.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Convert between squared units (area) and cubic units (volume) correctly, understanding why the conversion factor is squared or cubed.' }
    },
    {
      id: 'h-why',
      type: 'heading',
      data: { text: 'Why Are the Conversion Factors Different?', level: 2 }
    },
    {
      id: 'p-why',
      type: 'paragraph',
      data: { text: 'Converting length multiplies by a factor k. Converting <strong>area</strong> multiplies by k² (two length dimensions). Converting <strong>volume</strong> multiplies by k³ (three length dimensions).' }
    },
    {
      id: 'h-area-units',
      type: 'heading',
      data: { text: 'Area Unit Conversions', level: 2 }
    },
    {
      id: 'tbl-area',
      type: 'comparisonTable',
      data: {
        caption: 'Squared Unit Conversions',
        headers: ['Conversion', 'Factor', 'Because'],
        rows: [
          ['1 m² = ? cm²', '1 m² = 10 000 cm²', '100² = 10 000'],
          ['1 cm² = ? mm²', '1 cm² = 100 mm²', '10² = 100'],
          ['1 km² = ? m²', '1 km² = 1 000 000 m²', '1000² = 10⁶'],
          ['1 hectare (ha) = ? m²', '1 ha = 10 000 m²', 'Definition']
        ]
      }
    },
    {
      id: 'callout-worked-area',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Area Conversion Example',
        text: 'Convert 3.5 m² to cm².<br>1 m² = 10 000 cm²<br>3.5 m² = 3.5 × 10 000 = <strong>35 000 cm²</strong>'
      }
    },
    {
      id: 'h-vol-units',
      type: 'heading',
      data: { text: 'Volume Unit Conversions', level: 2 }
    },
    {
      id: 'tbl-vol',
      type: 'comparisonTable',
      data: {
        caption: 'Cubic Unit Conversions',
        headers: ['Conversion', 'Factor', 'Because'],
        rows: [
          ['1 m³ = ? cm³', '1 m³ = 1 000 000 cm³', '100³ = 10⁶'],
          ['1 cm³ = ? mm³', '1 cm³ = 1 000 mm³', '10³ = 1 000'],
          ['1 litre = ? cm³', '1 L = 1 000 cm³', 'Definition'],
          ['1 m³ = ? litres', '1 m³ = 1 000 litres', '1m³ = 10⁶ cm³ = 1000 L']
        ]
      }
    },
    {
      id: 'callout-worked-vol',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Volume Conversion Example',
        text: 'Convert 0.002 m³ to cm³.<br>1 m³ = 1 000 000 cm³<br>0.002 m³ = 0.002 × 1 000 000 = <strong>2 000 cm³</strong>'
      }
    },
    {
      id: 'callout-key-sq-cu',
      type: 'callout',
      data: { style: 'key', title: 'Key Rule', text: 'If the length conversion factor is k:<br>Area factor = k²<br>Volume factor = k³<br><br>Example: km→m: k = 1000 → area: 1 km² = 1000² m² = 10⁶ m²; volume: 1 km³ = 10⁹ m³.' }
    },
    {
      id: 'callout-tip-sq-cu',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Students often forget to square/cube the conversion factor. If converting m to cm (×100): area → ×100² = ×10 000; volume → ×100³ = ×1 000 000.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Area conversions: square the length factor (1 m² = 10 000 cm²). Volume conversions: cube the length factor (1 m³ = 10⁶ cm³). 1 L = 1 000 cm³.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-why', prompt: 'Why do you square the conversion factor for area but cube it for volume?' },
      { id: 'cue-2', blockId: 'tbl-area', prompt: 'How many cm² are in 1 m²? Derive the answer from first principles.' },
      { id: 'cue-3', blockId: 'callout-worked-area', prompt: 'Convert 3.5 m² to cm².' },
      { id: 'cue-4', blockId: 'tbl-vol', prompt: 'How many cm³ are in 1 m³? How many litres in 1 m³?' },
      { id: 'cue-5', blockId: 'callout-tip-sq-cu', prompt: 'You convert cm to m by ÷100. What factor converts cm² to m²? And cm³ to m³?' }
    ],
    summaryText: 'Length k → area k² → volume k³. Core facts: 1 m² = 10 000 cm²; 1 m³ = 1 000 000 cm³; 1 L = 1 000 cm³.',
    ready: true
  },
  evidence: []
};
