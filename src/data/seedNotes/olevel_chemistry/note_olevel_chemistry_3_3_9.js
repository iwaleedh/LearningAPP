export const note_olevel_chemistry_3_3_9 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/3 Stoichiometry/3-2-6-empirical-and-molecular-formula.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Determine the molecular formula of a compound from its empirical formula and relative molecular mass.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Empirical vs Molecular Formula', level: 2 }
    },
    {
      id: 'call-diff',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Empirical vs Molecular Formula',
        text: '<strong>Empirical formula:</strong> simplest whole-number ratio of atoms in a compound<br/>e.g. CH₂O<br/><br/><strong>Molecular formula:</strong> actual number of atoms of each element in one molecule<br/>e.g. C₆H₁₂O₆ (glucose)<br/><br/>The molecular formula is always a whole-number multiple of the empirical formula.<br/><br/>Molecular formula = (empirical formula) × n<br/>where n = Mᵣ(molecular) ÷ Mᵣ(empirical)'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Find molecular from empirical',
        text: 'Empirical formula = CH₂. Mᵣ of compound = 56. (Aᵣ: C=12, H=1)<br/><br/>Mᵣ of CH₂ = 12 + 2 = 14<br/>n = 56 ÷ 14 = 4<br/>Molecular formula = (CH₂) × 4 = <strong>C₄H₈</strong>'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: From percentage composition to molecular formula',
        text: 'Compound: 85.7% C, 14.3% H. Mᵣ = 42. (Aᵣ: C=12, H=1)<br/><br/><strong>Step 1 — Empirical formula:</strong><br/>Moles: C = 85.7/12 = 7.14; H = 14.3/1 = 14.3<br/>Ratio: 7.14:14.3 = 1:2 → empirical formula CH₂<br/><br/><strong>Step 2 — Molecular formula:</strong><br/>Mᵣ(CH₂) = 14; n = 42 ÷ 14 = 3<br/><strong>Molecular formula = C₃H₆</strong>'
      }
    },
    {
      id: 'tbl-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Examples of empirical and molecular formulae',
        headers: ['Compound', 'Empirical', 'Molecular', 'Mᵣ(emp)', 'Mᵣ(mol)', 'n'],
        rows: [
          ['Glucose', 'CH₂O', 'C₆H₁₂O₆', '30', '180', '6'],
          ['Ethyne (acetylene)', 'CH', 'C₂H₂', '13', '26', '2'],
          ['Benzene', 'CH', 'C₆H₆', '13', '78', '6'],
          ['Hydrogen peroxide', 'HO', 'H₂O₂', '17', '34', '2']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'n (the multiplier) must always be a whole number. If you get a non-integer, recheck your empirical formula calculation. Note: compounds like water (H₂O) and CO₂ have molecular formula = empirical formula (n=1).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Molecular formula = empirical formula × n, where n = Mᵣ(molecular) ÷ Mᵣ(empirical). Find empirical formula from % composition first, then scale up using the given Mᵣ.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Molecular formula = (empirical formula) × n, where n = Mᵣ(molecule)/Mᵣ(empirical).',
    cues: [
      { id: 'cue-1', blockId: 'call-diff', prompt: 'What is the difference between empirical and molecular formula?', answer: 'Empirical formula is the simplest whole-number ratio of atoms. Molecular formula is the actual number of each atom in one molecule. The molecular formula is a whole-number multiple of the empirical formula.' },
      { id: 'cue-2', blockId: 'call-worked1', prompt: 'Empirical formula CH with Mᵣ = 26. Find the molecular formula.', answer: 'Mᵣ(CH) = 13; n = 26/13 = 2; molecular formula = C₂H₂.' },
      { id: 'cue-3', blockId: 'call-worked2', prompt: 'State the steps to go from % composition to molecular formula.', answer: '1. Convert % to moles (÷Aᵣ). 2. Find simplest whole-number ratio = empirical formula. 3. Calculate n = Mᵣ(molecule)/Mᵣ(empirical). 4. Multiply empirical by n.' }
    ]
  },
  evidence: [],
  mentions: []
};
