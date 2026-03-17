export const note_olevel_maths_extended_1_10_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/converting-between-units.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Convert between metric units of length, mass, and capacity, and understand the relationships between common units.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Converting Between Units', level: 2 } },
    { id: 'p-intro', type: 'paragraph', data: { text: 'The metric system is based on powers of 10, making conversions straightforward. You need to know the standard prefixes and how to convert between units of length, mass, and capacity.' } },

    { id: 'h-length', type: 'heading', data: { text: 'Length', level: 2 } },
    { id: 'table-length', type: 'comparisonTable', data: {
      caption: 'Length conversions',
      headers: ['Conversion', 'Factor'],
      rows: [
        ['1 km = ? m', '1000'],
        ['1 m = ? cm', '100'],
        ['1 cm = ? mm', '10'],
        ['1 m = ? mm', '1000']
      ]
    }},

    { id: 'h-mass', type: 'heading', data: { text: 'Mass', level: 2 } },
    { id: 'table-mass', type: 'comparisonTable', data: {
      caption: 'Mass conversions',
      headers: ['Conversion', 'Factor'],
      rows: [
        ['1 tonne = ? kg', '1000'],
        ['1 kg = ? g', '1000'],
        ['1 g = ? mg', '1000']
      ]
    }},

    { id: 'h-capacity', type: 'heading', data: { text: 'Capacity', level: 2 } },
    { id: 'table-capacity', type: 'comparisonTable', data: {
      caption: 'Capacity conversions',
      headers: ['Conversion', 'Factor'],
      rows: [
        ['1 litre = ? ml', '1000'],
        ['1 litre = ? cm³', '1000'],
        ['1 m³ = ? litres', '1000'],
        ['1 ml = ? cm³', '1']
      ]
    }},

    { id: 'callout-key-1', type: 'callout', data: { style: 'key', title: 'Conversion Rule', text: 'To convert from a <b>larger</b> unit to a <b>smaller</b> unit: <b>multiply</b>.\nTo convert from a <b>smaller</b> unit to a <b>larger</b> unit: <b>divide</b>.\n\nRemember: smaller units need bigger numbers, larger units need smaller numbers.' } },

    { id: 'callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1', text: 'Convert 3.5 km to cm.\n\n3.5 km = 3.5 × 1000 m = 3500 m\n3500 m = 3500 × 100 cm = 350 000 cm\n\n<b>Answer:</b> 350 000 cm' } },

    { id: 'callout-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2', text: 'Convert 4500 ml to litres.\n\n4500 ml ÷ 1000 = 4.5 litres\n\n<b>Answer:</b> 4.5 litres' } },

    { id: 'callout-worked-3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3', text: 'A container holds 2.4 m³ of water. How many litres is this?\n\n1 m³ = 1000 litres\n2.4 m³ = 2.4 × 1000 = 2400 litres\n\n<b>Answer:</b> 2400 litres' } },

    { id: 'callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Always check the units in your answer match what the question asks for. A common mark-losing error is giving the answer in the wrong units.' } },

    { id: 'sum-1', type: 'summary', data: { text: 'Metric conversions use powers of 10. Multiply when going from large to small units, divide when going from small to large. Key links: 1 ml = 1 cm³, 1 litre = 1000 cm³, 1 m³ = 1000 litres.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-1', prompt: 'Do you multiply or divide when converting from a larger to a smaller unit?' },
      { id: 'cue-2', blockId: 'table-length', prompt: 'How many centimetres are in a kilometre?' },
      { id: 'cue-3', blockId: 'table-capacity', prompt: 'How many cm³ are in 1 litre?' },
      { id: 'cue-4', blockId: 'table-capacity', prompt: 'How many litres are in 1 m³?' }
    ],
    summaryText: 'Metric conversions: multiply going large&rarr;small, divide going small&rarr;large. 1 ml = 1 cm³, 1 litre = 1000 cm³, 1 m³ = 1000 litres.',
    ready: true
  },
  evidence: []
};
