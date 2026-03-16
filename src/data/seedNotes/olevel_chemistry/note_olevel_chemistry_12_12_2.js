export const note_olevel_chemistry_12_12_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/12 Experimental Techniques And Chemical Analysis/12-1-3-acid-base-titrations.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe acid-base titration procedure and indicator choice; calculate unknown concentrations from titration results.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Titration Apparatus and Procedure', level: 2 }
    },
    {
      id: 'call-setup',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Titration Setup',
        text: '<strong>Equipment:</strong><br/>• <strong>Burette</strong> — filled with acid or alkali; delivers variable volume<br/>• <strong>Volumetric pipette</strong> — delivers a fixed volume of the other solution into a conical flask<br/>• <strong>Conical flask</strong> — contains the solution being titrated; easy to swirl without spillage<br/>• <strong>White tile</strong> — placed underneath to see colour change clearly<br/>• <strong>Indicator</strong> — added to the conical flask (a few drops)<br/><br/><strong>Procedure:</strong><br/>1. Rinse burette with the solution to be placed in it; fill above 0 cm³ mark<br/>2. Open tap briefly to fill tip; read initial burette reading<br/>3. Use pipette to transfer fixed volume of solution to conical flask; add a few drops of indicator<br/>4. Add solution from burette slowly (dropwise near end point) until permanent colour change<br/>5. Record final burette reading; calculate titre (final − initial)<br/>6. Repeat until concordant titres obtained'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Indicators', level: 2 }
    },
    {
      id: 'tbl-ind',
      type: 'comparisonTable',
      data: {
        caption: 'Common indicators for acid-base titrations',
        headers: ['Indicator', 'Acid colour', 'Alkali colour', 'Best used for'],
        rows: [
          ['Litmus', 'Red', 'Blue', 'Not suitable (colour change too gradual)'],
          ['Methyl orange', 'Red', 'Yellow', 'Strong acid / strong or weak alkali'],
          ['Phenolphthalein', 'Colourless', 'Pink', 'Strong alkali / strong or weak acid'],
          ['Universal indicator', 'Red/orange', 'Blue/purple', 'Rough pH only; NOT used in titrations']
        ]
      }
    },
    {
      id: 'call-concordant',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Concordant Titres',
        text: 'Concordant titres agree to within <strong>0.10 cm³</strong> of each other.<br/><br/><strong>Procedure:</strong><br/>• Run a rough titration first (add quickly) to find the approximate end point<br/>• Repeat adding drop by drop approaching the end point<br/>• Discard the rough titration value<br/>• Average the concordant titres for calculation<br/><br/>Anomalous results (titre clearly different from others) should be identified and rejected.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Calculation from Titration', level: 2 }
    },
    {
      id: 'call-calc',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Titration Calculation Method',
        text: '<strong>General method:</strong><br/>1. Calculate moles of the known reagent: n = c × V (V in dm³)<br/>2. Use mole ratio from the balanced equation to find moles of unknown<br/>3. Calculate concentration of unknown: c = n ÷ V<br/><br/>Always convert volumes from cm³ to dm³ by dividing by 1000.'
      }
    },
    {
      id: 'call-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: '25.0 cm³ of NaOH required 22.5 cm³ of 0.100 mol/dm³ H₂SO₄ to reach end point.<br/>H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O<br/>Find the concentration of NaOH.<br/><br/><strong>Step 1:</strong> n(H₂SO₄) = 0.100 × (22.5 ÷ 1000) = 0.00225 mol<br/><strong>Step 2:</strong> Mole ratio H₂SO₄ : NaOH = 1 : 2<br/>          n(NaOH) = 0.00225 × 2 = 0.00450 mol<br/><strong>Step 3:</strong> c(NaOH) = 0.00450 ÷ (25.0 ÷ 1000) = <strong>0.180 mol/dm³</strong>'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Titration: burette + volumetric pipette + conical flask + indicator. Concordant = within 0.10 cm³; average concordant titres. Calculation: n = cV (V in dm³); apply mole ratio; c = n ÷ V. Methyl orange: strong acid/base. Phenolphthalein: strong alkali.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Titration: burette → conical flask with pipette-measured sample + indicator. Concordant titres (≤0.10 cm³). n = cV; mole ratio → unknown concentration.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-ind', prompt: 'Which indicator is suitable for a strong acid–strong alkali titration? What are its colours in acid and alkali?', answer: 'Either methyl orange (red in acid, yellow in alkali) or phenolphthalein (colourless in acid, pink in alkali) can be used for strong acid–strong alkali titrations.' },
      { id: 'cue-2', blockId: 'call-concordant', prompt: 'What are concordant titres and why is the rough titration excluded from the average?', answer: 'Concordant titres agree to within 0.10 cm³. The rough titration is excluded because it is less precise (solution was added quickly, so the end point may have been exceeded).' },
      { id: 'cue-3', blockId: 'call-we1', prompt: 'Outline the three steps used to calculate an unknown concentration from titration data.', answer: '1. Calculate moles of known reagent: n = cV. 2. Use mole ratio from the equation to find moles of unknown. 3. Calculate concentration: c = n ÷ V (V in dm³).' }
    ]
  },
  evidence: [],
  mentions: []
};
