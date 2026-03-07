/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 8
 * "Bond length and bond strength"
 * Source: Pearson Edexcel IAL Chemistry — Section 3B.1 / 3B.3
 */
export const note_chemistry_1_3_8 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Understand bond length and bond enthalpy. Know how bond order, atomic radius, and electronegativity affect bond length and bond strength.' },
      terms: []
    },
    {
      id: 'h-bond-length',
      type: 'heading',
      data: { text: 'Bond Length', level: 2 },
      terms: []
    },
    {
      id: 'callout-length',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Bond Length',
        text: '<strong>Bond length</strong> is the average distance between the nuclei of two bonded atoms.<br/><br/>Bond length decreases as:<br/>• <strong>Bond order increases:</strong> triple < double < single (more electron pairs pull nuclei closer)<br/>• <strong>Atomic radius decreases:</strong> smaller atoms → shorter bonds<br/>• <strong>Electronegativity difference increases:</strong> greater pull on electrons → shorter bond'
      },
      terms: ['Bond length']
    },
    {
      id: 'table-len',
      type: 'comparisonTable',
      data: {
        caption: 'Typical bond lengths',
        headers: ['Bond', 'Approximate Bond Length (nm)'],
        rows: [
          ['C–C (single)', '0.154'],
          ['C=C (double)', '0.134'],
          ['C≡C (triple)', '0.120'],
          ['C–H', '0.109'],
          ['C–F', '0.135'],
          ['C–Cl', '0.177']
        ]
      },
      terms: []
    },
    {
      id: 'h-enthalpy',
      type: 'heading',
      data: { text: 'Bond Enthalpy (Bond Energy)', level: 2 },
      terms: []
    },
    {
      id: 'callout-enthalpy',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Bond Enthalpy',
        text: '<strong>Bond enthalpy</strong> (bond energy) is the energy required to break one mole of a specific type of covalent bond in the gaseous state, averaged over a range of similar molecules.<br/><br/>Units: kJ mol⁻¹. Bond breaking is always <strong>endothermic</strong> (+ve); bond forming is always <strong>exothermic</strong> (−ve).'
      },
      terms: ['Bond enthalpy', 'Mean bond enthalpy']
    },
    {
      id: 'callout-strength',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Bond strength relationships',
        text: '• <strong>Higher bond order</strong> → stronger bond (more shared electrons pulling nuclei together)<br/>• <strong>Shorter bond</strong> → generally stronger bond<br/>• <strong>More electronegative atoms</strong> → stronger bond<br/><br/>C≡C (837 kJ mol⁻¹) > C=C (612 kJ mol⁻¹) > C–C (348 kJ mol⁻¹)'
      },
      terms: []
    },
    {
      id: 'callout-delta-h',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Using bond enthalpies to estimate ΔH',
        text: 'ΔH ≈ Σ(bonds broken) − Σ(bonds formed)<br/><br/>Example: CH₄ + 2O₂ → CO₂ + 2H₂O<br/>Broken: 4(C–H) + 2(O=O) = 4(413) + 2(498) = 1652 + 996 = 2648 kJ<br/>Formed: 2(C=O) + 4(O–H) = 2(743) + 4(463) = 1486 + 1852 = 3338 kJ<br/>ΔH ≈ 2648 − 3338 = <strong>−690 kJ mol⁻¹</strong><br/><br/>(Negative = exothermic combustion reaction ✓)'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-length', prompt: 'How does bond length change as you go from a single to a double to a triple bond between the same two atoms? Explain why.' },
      { id: 'c2', blockId: 'callout-enthalpy', prompt: 'Define bond enthalpy. Is bond breaking endothermic or exothermic?' },
      { id: 'c3', blockId: 'callout-delta-h', prompt: 'State the formula for estimating ΔH using mean bond enthalpies.' }
    ],
    summaryText: 'Bond length = average internuclear distance. Decreases with higher bond order, smaller atoms, and higher electronegativity. Bond enthalpy = energy to break 1 mol of bond in gas phase (endothermic). ΔH ≈ Σ(bonds broken) − Σ(bonds formed). Shorter bonds are generally stronger.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_3_8;