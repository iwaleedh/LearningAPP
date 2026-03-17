export const note_olevel_maths_extended_1_10_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/compound-measures.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand and use compound measures including density, pressure, and population density, and convert between units.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Compound Measures', level: 2 } },
    { id: 'p-intro', type: 'paragraph', data: { text: 'A <b>compound measure</b> combines two or more basic measures. Speed (distance ÷ time) is one example. At IGCSE Extended, you also need to work with density, pressure, and other rates.' } },

    { id: 'h-density', type: 'heading', data: { text: 'Density', level: 2 } },
    { id: 'callout-key-1', type: 'callout', data: { style: 'key', title: 'Density Formula', text: 'Density = <span class="nb-frac"><span class="nb-num">Mass</span><span class="nb-den">Volume</span></span>\n\nMass = Density × Volume\n\nVolume = <span class="nb-frac"><span class="nb-num">Mass</span><span class="nb-den">Density</span></span>\n\nUnits: g/cm³ or kg/m³' } },

    { id: 'callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1', text: 'A gold bar has a mass of 1930 g and a volume of 100 cm³. Find its density.\n\nDensity = <span class="nb-frac"><span class="nb-num">1930</span><span class="nb-den">100</span></span> = 19.3 g/cm³\n\n<b>Answer:</b> 19.3 g/cm³' } },

    { id: 'callout-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2', text: 'Water has density 1 g/cm³. A tank has dimensions 50 cm × 40 cm × 30 cm. Find the mass of water when full.\n\nVolume = 50 × 40 × 30 = 60 000 cm³\nMass = Density × Volume = 1 × 60 000 = 60 000 g = 60 kg\n\n<b>Answer:</b> 60 kg' } },

    { id: 'h-pressure', type: 'heading', data: { text: 'Pressure', level: 2 } },
    { id: 'callout-key-2', type: 'callout', data: { style: 'key', title: 'Pressure Formula', text: 'Pressure = <span class="nb-frac"><span class="nb-num">Force</span><span class="nb-den">Area</span></span>\n\nForce = Pressure × Area\n\nArea = <span class="nb-frac"><span class="nb-num">Force</span><span class="nb-den">Pressure</span></span>\n\nUnits: N/m² (Pascals, Pa) or N/cm²' } },

    { id: 'callout-worked-3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3', text: 'A box weighing 120 N sits on the floor. Its base has area 0.04 m². Find the pressure.\n\nPressure = <span class="nb-frac"><span class="nb-num">120</span><span class="nb-den">0.04</span></span> = 3000 N/m² = 3000 Pa\n\n<b>Answer:</b> 3000 Pa' } },

    { id: 'h-pop', type: 'heading', data: { text: 'Population Density', level: 2 } },
    { id: 'p-pop', type: 'paragraph', data: { text: 'Population density = <span class="nb-frac"><span class="nb-num">Number of people</span><span class="nb-den">Area</span></span>, typically in people per km².' } },

    { id: 'callout-worked-4', type: 'callout', data: { style: 'worked', title: 'Worked Example 4', text: 'A town has a population of 45 000 and covers 15 km².\n\nPopulation density = <span class="nb-frac"><span class="nb-num">45 000</span><span class="nb-den">15</span></span> = 3000 people/km²\n\n<b>Answer:</b> 3000 people per km²' } },

    { id: 'h-other', type: 'heading', data: { text: 'Other Compound Measures', level: 2 } },
    { id: 'table-others', type: 'comparisonTable', data: {
      caption: 'Other common compound measures',
      headers: ['Measure', 'Formula', 'Units'],
      rows: [
        ['Flow rate', 'Volume ÷ Time', 'litres/min, m³/s'],
        ['Fuel consumption', 'Distance ÷ Fuel used', 'km/litre, mpg'],
        ['Unit cost', 'Total cost ÷ Quantity', '$/kg, $/litre']
      ]
    }},

    { id: 'callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'All compound measure formulas follow the same pattern as Speed = Distance ÷ Time. Use a triangle: the top quantity divided by the bottom. Make sure your units match on both sides.' } },

    { id: 'callout-warning-1', type: 'callout', data: { style: 'warning', title: 'Unit Trap', text: 'If density is in g/cm³, mass must be in grams and volume in cm³. Don\'t mix kg with cm³ — convert first!' } },

    { id: 'sum-1', type: 'summary', data: { text: 'Compound measures combine two quantities. Key formulae: Density = Mass/Volume (g/cm³), Pressure = Force/Area (Pa), Speed = Distance/Time. Always check unit consistency before calculating.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-1', prompt: 'What is the formula for density and its units?' },
      { id: 'cue-2', blockId: 'callout-key-2', prompt: 'What is the formula for pressure?' },
      { id: 'cue-3', blockId: 'p-pop', prompt: 'How do you calculate population density?' },
      { id: 'cue-4', blockId: 'callout-warning-1', prompt: 'Why must units be consistent in compound measure calculations?' },
      { id: 'cue-5', blockId: 'callout-worked-2', prompt: 'A tank is 50×40×30 cm. What mass of water (density 1 g/cm³) does it hold?' }
    ],
    summaryText: 'Compound measures: Density = Mass/Volume, Pressure = Force/Area, Speed = Distance/Time. Units must be consistent.',
    ready: true
  },
  evidence: []
};
