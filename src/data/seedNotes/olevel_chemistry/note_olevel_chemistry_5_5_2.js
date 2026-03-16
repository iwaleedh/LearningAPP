export const note_olevel_chemistry_5_5_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/5 Chemical Energetics/5-1-3-bond-breaking-and-bond-forming.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use bond energies to calculate the enthalpy change of a reaction and explain why reactions are exothermic or endothermic in terms of bond breaking and bond forming.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Bond Breaking and Bond Forming', level: 2 }
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Energy Changes in Bonds',
        text: '<strong>Bond breaking</strong> requires energy → endothermic<br/><strong>Bond forming</strong> releases energy → exothermic<br/><br/>Overall ΔH depends on which is greater:<br/>• If energy released (forming) > energy absorbed (breaking) → <strong>exothermic reaction (ΔH negative)</strong><br/>• If energy absorbed (breaking) > energy released (forming) → <strong>endothermic reaction (ΔH positive)</strong>'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Calculating ΔH from Bond Energies', level: 2 }
    },
    {
      id: 'call-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Bond Energy Formula',
        text: '<strong>ΔH = Σ(bond energies broken) − Σ(bond energies formed)</strong><br/><br/>Bond energy (kJ/mol) = energy to break 1 mole of a specific covalent bond in the gas phase.<br/><br/>Steps:<br/>1. Draw structural formulae showing all bonds<br/>2. List all bonds broken in reactants and sum their energies<br/>3. List all bonds formed in products and sum their energies<br/>4. ΔH = total broken − total formed'
      }
    },
    {
      id: 'tbl-bonds',
      type: 'comparisonTable',
      data: {
        caption: 'Common bond energies (approximate)',
        headers: ['Bond', 'Energy (kJ/mol)'],
        rows: [
          ['H–H', '436'],
          ['O=O', '498'],
          ['O–H', '463'],
          ['C–H', '412'],
          ['C=C', '612'],
          ['C–C', '348'],
          ['C=O (CO₂)', '805'],
          ['N≡N', '945'],
          ['N–H', '391'],
          ['Cl–Cl', '242'],
          ['H–Cl', '432']
        ]
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: H₂ + Cl₂ → 2HCl',
        text: 'Bonds broken: H–H (436) + Cl–Cl (242) = 678 kJ<br/>Bonds formed: 2 × H–Cl (432) = 864 kJ<br/><br/>ΔH = 678 − 864 = <strong>−186 kJ/mol</strong><br/>Negative → exothermic ✓ (more energy released forming bonds than absorbed breaking them)'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: H₂ + O₂ → H₂O (H₂ + ½O₂ → H₂O)',
        text: 'For: 2H₂ + O₂ → 2H₂O<br/>Bonds broken: 2×(H–H) + O=O = 2×436 + 498 = 1370 kJ<br/>Bonds formed: 4×(O–H) = 4×463 = 1852 kJ<br/><br/>ΔH = 1370 − 1852 = <strong>−482 kJ/mol</strong> (exothermic)'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Bond energies are given in the Data Booklet. Make sure you correctly count every bond — draw out the full structural formula. Remember: ΔH = BROKEN − FORMED (not formed minus broken). A negative answer = exothermic.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Bond breaking = endothermic; bond forming = exothermic. ΔH = Σ(bonds broken) − Σ(bonds formed). Negative ΔH = exothermic (more energy released forming bonds).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Bond breaking needs energy; bond forming releases energy. ΔH = Σbroken − Σformed. Negative = exothermic.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'Is bond breaking exothermic or endothermic? Is bond forming exothermic or endothermic?', answer: 'Bond breaking is endothermic (energy required to break bonds). Bond forming is exothermic (energy released when bonds form).' },
      { id: 'cue-2', blockId: 'call-formula', prompt: 'State the formula for calculating ΔH from bond energies.', answer: 'ΔH = Σ(bond energies broken) − Σ(bond energies formed).' },
      { id: 'cue-3', blockId: 'call-worked1', prompt: 'If Σ(bonds broken)=500 kJ and Σ(bonds formed)=700 kJ, is the reaction exothermic or endothermic?', answer: 'ΔH = 500 − 700 = −200 kJ. Negative → exothermic. More energy released forming bonds than required to break them.' }
    ]
  },
  evidence: [],
  mentions: []
};
