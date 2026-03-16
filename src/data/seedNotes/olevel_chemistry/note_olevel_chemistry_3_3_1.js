export const note_olevel_chemistry_3_3_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/3 Stoichiometry/3-1-2-empirical-formulae-and-formulae-of-ionic-compounds.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate the empirical formula of a compound from experimental data and determine formulae of ionic compounds from their names.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Empirical Formula', level: 2 }
    },
    {
      id: 'call-emp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What is an Empirical Formula?',
        text: 'The <strong>empirical formula</strong> is the <strong>simplest whole-number ratio</strong> of atoms of each element in a compound.<br/><br/>It is the most reduced ratio possible.<br/><br/>Examples:<br/>• Glucose C₆H₁₂O₆ → empirical formula CH₂O<br/>• Hydrogen peroxide H₂O₂ → empirical formula HO<br/>• Water H₂O → empirical formula H₂O (already simplest)'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Calculating Empirical Formula from Data', level: 2 }
    },
    {
      id: 'call-steps',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Steps to find empirical formula',
        text: '1. Write the masses (or percentages) of each element<br/>2. Divide each by the element\'s relative atomic mass (Aᵣ) → gives moles<br/>3. Divide each by the smallest number of moles → gives ratio<br/>4. Round to whole numbers (if close) or multiply up if needed'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Empirical formula from masses',
        text: 'A compound contains 2.4 g of carbon and 6.4 g of oxygen.<br/>Aᵣ: C = 12, O = 16<br/><br/>Moles of C = 2.4 ÷ 12 = 0.2 mol<br/>Moles of O = 6.4 ÷ 16 = 0.4 mol<br/><br/>Ratio: C : O = 0.2 : 0.4 = 1 : 2<br/><br/><strong>Empirical formula = CO₂</strong>'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Empirical formula from percentages',
        text: 'Compound: 40% C, 6.7% H, 53.3% O (by mass). Aᵣ: C=12, H=1, O=16<br/><br/>Moles: C = 40/12 = 3.33; H = 6.7/1 = 6.7; O = 53.3/16 = 3.33<br/>Ratio: 3.33 : 6.7 : 3.33 → divide by 3.33 → 1 : 2 : 1<br/><br/><strong>Empirical formula = CH₂O</strong>'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Formulae of Ionic Compounds', level: 2 }
    },
    {
      id: 'call-ionic',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Naming and formulae of ionic compounds',
        text: 'The <strong>name</strong> of an ionic compound tells you the ions present:<br/>• First word = cation (positive ion)<br/>• Second word = anion (negative ion)<br/><br/>Common suffixes:<br/>• "-ide" → simple anion (e.g. chloride = Cl⁻, oxide = O²⁻)<br/>• "-ate" → oxyanion (e.g. sulfate = SO₄²⁻, nitrate = NO₃⁻, carbonate = CO₃²⁻)<br/>• "-ite" → oxyanion with less oxygen (e.g. sulfite = SO₃²⁻)<br/>• Roman numerals → variable charge metals: iron(II) = Fe²⁺, iron(III) = Fe³⁺'
      }
    },
    {
      id: 'tbl-ions',
      type: 'comparisonTable',
      data: {
        caption: 'Common ions and their charges',
        headers: ['Ion name', 'Formula', 'Charge'],
        rows: [
          ['Ammonium', 'NH₄⁺', '+1'],
          ['Sodium', 'Na⁺', '+1'],
          ['Calcium', 'Ca²⁺', '+2'],
          ['Iron(II)', 'Fe²⁺', '+2'],
          ['Iron(III)', 'Fe³⁺', '+3'],
          ['Hydroxide', 'OH⁻', '−1'],
          ['Nitrate', 'NO₃⁻', '−1'],
          ['Chloride', 'Cl⁻', '−1'],
          ['Carbonate', 'CO₃²⁻', '−2'],
          ['Sulfate', 'SO₄²⁻', '−2']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Empirical formula = simplest whole-number ratio of atoms. Calculate by: masses → divide by Aᵣ → divide by smallest → whole number ratio. Ionic formulae from ion charges using cross-over method, ensuring overall neutrality.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Empirical formula = simplest ratio. Steps: mass → ÷Aᵣ → ÷smallest → ratio. Ionic formulae from charges using cross-over method.',
    cues: [
      { id: 'cue-1', blockId: 'call-emp', prompt: 'What is an empirical formula?', answer: 'The simplest whole-number ratio of atoms of each element in a compound.' },
      { id: 'cue-2', blockId: 'call-steps', prompt: 'State the steps to calculate an empirical formula from masses.', answer: '1. Write masses of each element. 2. Divide by Aᵣ to get moles. 3. Divide by smallest mole value. 4. Round to whole numbers.' },
      { id: 'cue-3', blockId: 'call-worked1', prompt: 'A compound has 1.2 g C and 4.8 g O. Find the empirical formula.', answer: 'Moles C = 1.2/12 = 0.1; moles O = 4.8/16 = 0.3. Ratio C:O = 0.1:0.3 = 1:3. Empirical formula = CO₃.' }
    ]
  },
  evidence: [],
  mentions: []
};
