export const note_olevel_chemistry_3_3_7 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/3 Stoichiometry/3-2-4-calculating-concentration.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate the concentration of a solution in mol/dm³ and g/dm³, and convert between units.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Concentration', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What is Concentration?',
        text: '<strong>Concentration</strong> measures how much solute is dissolved in a given volume of solution.<br/><br/><strong>Molar concentration:</strong> c = n ÷ V<br/>• c = concentration in mol/dm³<br/>• n = moles of solute (mol)<br/>• V = volume of solution in dm³<br/><br/><strong>Mass concentration:</strong> c = m ÷ V<br/>• c in g/dm³<br/>• m = mass of solute in g<br/>• V = volume in dm³<br/><br/>1 dm³ = 1 litre = 1000 cm³'
      }
    },
    {
      id: 'call-convert',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Volume Conversions',
        text: '1 dm³ = 1000 cm³<br/>To convert cm³ → dm³: divide by 1000<br/>e.g. 250 cm³ = 0.25 dm³<br/><br/>To convert dm³ → cm³: multiply by 1000<br/>e.g. 0.5 dm³ = 500 cm³'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Concentration in mol/dm³',
        text: '0.1 mol of NaCl is dissolved in 250 cm³ of solution. Find the concentration in mol/dm³.<br/><br/>V = 250 cm³ ÷ 1000 = 0.25 dm³<br/>c = n ÷ V = 0.1 ÷ 0.25 = <strong>0.4 mol/dm³</strong>'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Moles from concentration and volume',
        text: 'How many moles of HCl are in 50 cm³ of 2 mol/dm³ HCl?<br/><br/>V = 50 ÷ 1000 = 0.05 dm³<br/>n = c × V = 2 × 0.05 = <strong>0.1 mol</strong>'
      }
    },
    {
      id: 'call-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Concentration in g/dm³',
        text: 'A solution contains 5.85 g of NaCl in 500 cm³. Find concentration in g/dm³ and mol/dm³. (Mᵣ NaCl = 58.5)<br/><br/>V = 500 ÷ 1000 = 0.5 dm³<br/>Concentration = 5.85 ÷ 0.5 = <strong>11.7 g/dm³</strong><br/><br/>n = 5.85 ÷ 58.5 = 0.1 mol<br/>c = 0.1 ÷ 0.5 = <strong>0.2 mol/dm³</strong>'
      }
    },
    {
      id: 'call-convert2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Converting between g/dm³ and mol/dm³',
        text: '<strong>mol/dm³ → g/dm³:</strong> multiply by molar mass (M)<br/>c (g/dm³) = c (mol/dm³) × M<br/><br/><strong>g/dm³ → mol/dm³:</strong> divide by molar mass<br/>c (mol/dm³) = c (g/dm³) ÷ M'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always convert cm³ to dm³ before using c = n/V. The most common error is forgetting to convert volume. Remember: concentration × volume = moles, so n = c × V.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'c = n/V (mol/dm³) or c = m/V (g/dm³). Convert cm³ to dm³ by dividing by 1000. n = c × V. Convert: mol/dm³ × Mᵣ = g/dm³.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'c = n/V in mol/dm³. Convert cm³÷1000 to get dm³. n = c×V. g/dm³ = mol/dm³ × Mᵣ.',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'State the formula for molar concentration and its units.', answer: 'c = n ÷ V, where c is in mol/dm³, n is moles, and V is volume in dm³.' },
      { id: 'cue-2', blockId: 'call-worked1', prompt: '0.2 mol of KOH dissolved in 500 cm³. What is the concentration in mol/dm³?', answer: 'V = 0.5 dm³; c = 0.2/0.5 = 0.4 mol/dm³.' },
      { id: 'cue-3', blockId: 'call-convert2', prompt: 'A solution is 0.5 mol/dm³ H₂SO₄ (Mᵣ = 98). What is the concentration in g/dm³?', answer: '0.5 × 98 = 49 g/dm³.' }
    ]
  },
  evidence: [],
  mentions: []
};
