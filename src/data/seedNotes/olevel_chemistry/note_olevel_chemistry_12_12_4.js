export const note_olevel_chemistry_12_12_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/12 Experimental Techniques And Chemical Analysis/12-2-2-locating-agents-and-rf-values.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define and calculate Rf values; describe the use of locating agents to identify colourless spots on a chromatogram.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Rf Values', level: 2 }
    },
    {
      id: 'call-rf',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rf Value Formula',
        text: '<strong>Rf = distance travelled by spot ÷ distance travelled by solvent front</strong><br/><br/>• Both distances measured from the <strong>pencil baseline</strong><br/>• Rf value is always between 0 and 1 (no units)<br/>• Each substance has a characteristic Rf value for a given solvent and paper type<br/>• Rf values can be used to <strong>identify an unknown</strong> by comparison with known standards run on the same chromatogram under identical conditions'
      }
    },
    {
      id: 'call-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Calculating Rf',
        text: 'A spot travels 4.8 cm from the baseline. The solvent front travels 8.0 cm.<br/><br/>Rf = 4.8 ÷ 8.0 = <strong>0.60</strong><br/><br/>If a reference standard X has Rf = 0.60 under the same conditions → the unknown spot is likely to be X.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Locating Agents for Colourless Spots', level: 2 }
    },
    {
      id: 'tbl-locating',
      type: 'comparisonTable',
      data: {
        caption: 'Common locating agents used in chromatography',
        headers: ['Locating Agent', 'Method of use', 'Result', 'Used for'],
        rows: [
          ['UV lamp', 'Shine UV light on chromatogram in dark room', 'Fluorescent spots glow bright under UV', 'Compounds that absorb UV (e.g. certain drugs, amino acids)'],
          ['Ninhydrin', 'Spray solution onto chromatogram; heat gently', 'Amino acids → purple/brown spots appear', 'Amino acids in protein hydrolysates'],
          ['Iodine vapour', 'Place chromatogram in tank with iodine crystals', 'Organic compounds → brown/yellow spots', 'General organic compounds']
        ]
      }
    },
    {
      id: 'call-comparison',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Identifying Unknowns Using Rf',
        text: '<strong>Method A — compare Rf values:</strong> Calculate Rf for the unknown and compare with Rf values for known substances run under identical conditions.<br/><br/><strong>Method B — run known standards alongside:</strong> Spot known compounds next to the mixture on the same chromatogram and run simultaneously. If spots align, they are likely the same substance.<br/><br/><strong>Limitation:</strong> Two different substances can coincidentally have the same Rf in one solvent. Repeat in a different solvent to confirm identity.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Rf = distance spot ÷ distance solvent front (0–1, no units). Each substance has a characteristic Rf value in a given solvent. Colourless spots revealed by: UV lamp (fluorescence), ninhydrin spray (amino acids → purple/brown), iodine vapour (organic compounds → brown). Confirm identity by comparing Rf with known standards.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Rf = spot distance ÷ solvent front distance (0 to 1; no units). Ninhydrin → amino acids (purple). UV lamp → fluorescent spots. Compare Rf with known standards to identify unknowns.',
    cues: [
      { id: 'cue-1', blockId: 'call-rf', prompt: 'State the formula for Rf value and give its range and units.', answer: 'Rf = distance travelled by spot ÷ distance travelled by solvent front. Range: 0 to 1. No units (it is a ratio).' },
      { id: 'cue-2', blockId: 'tbl-locating', prompt: 'How are amino acids detected on a colourless chromatogram?', answer: 'The chromatogram is sprayed with ninhydrin solution and gently heated. Amino acids produce purple or brown spots.' },
      { id: 'cue-3', blockId: 'call-comparison', prompt: 'Why cannot Rf value alone be used as definitive proof that two substances are the same?', answer: 'Two different substances can have the same Rf value in a given solvent by coincidence. The test should be repeated with a different solvent to confirm identity; if the Rf matches in two different solvents, it is strong evidence they are the same substance.' }
    ]
  },
  evidence: [],
  mentions: []
};
