export const note_chemistry_5_18_0 = {
  blocks: [
    {
      id: 'obj-benzene-structure',
      type: 'objective',
      data: {
        text: 'Explain the structure of benzene using evidence from bond length, enthalpy of hydrogenation, and the delocalised π electron model; understand why Kekulé\'s alternating structure is inadequate'
      }
    },
    {
      id: 'h-kekule-problem',
      type: 'heading',
      data: { text: 'Kekulé Structure and Its Problems', level: 2 }
    },
    {
      id: 'p-kekule-1',
      type: 'paragraph',
      data: {
        text: 'In 1865, Kekulé proposed that benzene (C₆H₆) contains alternating single and double C=C bonds in a hexagonal ring. This structure seems reasonable at first glance: three C=C double bonds and three C−C single bonds arranged alternately. However, experimental evidence reveals fundamental flaws with this structure.'
      }
    },
    {
      id: 'h-evidence-problems',
      type: 'heading',
      data: { text: 'Experimental Evidence Against Kekulé', level: 3 }
    },
    {
      id: 'p-bond-length',
      type: 'paragraph',
      data: {
        text: 'If benzene had the Kekulé structure with alternating single and double bonds, we would expect two different bond lengths. C=C double bonds are shorter (~134 pm) than C−C single bonds (~154 pm). However, X-ray crystallography shows that ALL six C−C bonds in benzene have the SAME length of approximately 140 pm. This is intermediate between a single and double bond, suggesting the bonds are not localised as Kekulé proposed.'
      }
    },
    {
      id: 'callout-bond-lengths',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Benzene Bond Length Evidence',
        text: 'All C−C bonds = 140 pm (between single 154 pm and double 134 pm). This indicates delocalisation, not alternating bonds.'
      }
    },
    {
      id: 'h-hydrogenation-evidence',
      type: 'heading',
      data: { text: 'Enthalpy of Hydrogenation', level: 3 }
    },
    {
      id: 'p-hydrogenation-1',
      type: 'paragraph',
      data: {
        text: 'The second key evidence comes from hydrogenation. If we hydrogenate benzene with three C=C double bonds (Kekulé structure), we would expect ΔH ≈ −360 kJ/mol (three double bonds × 120 kJ/mol per double bond). However, when benzene is actually hydrogenated to cyclohexane, the measured enthalpy change is only ΔH = −208 kJ/mol. This is approximately 152 kJ/mol less exothermic than predicted.'
      }
    },
    {
      id: 'eq-hydrogenation',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>6</sub> + 3H<sub>2</sub> → C<sub>6</sub>H<sub>12</sub><br />ΔH = −208 kJ/mol (actual)<br />ΔH = −360 kJ/mol (expected for 3 double bonds)'
      }
    },
    {
      id: 'p-hydrogenation-2',
      type: 'paragraph',
      data: {
        text: 'This difference in energy is called the stabilisation energy or resonance energy (~150 kJ/mol). It indicates that benzene is MORE stable than a Kekulé structure would be. The "missing" exothermic energy means benzene requires more energy to break up and react than expected.'
      }
    },
    {
      id: 'h-delocalised-model',
      type: 'heading',
      data: { text: 'The Delocalised π Electron Model', level: 2 }
    },
    {
      id: 'p-delocalised-1',
      type: 'paragraph',
      data: {
        text: 'Modern bonding theory explains benzene structure using a delocalised π electron model. In this model, each carbon atom is sp² hybridised, with three sp² hybrid orbitals lying in the plane of the ring (forming σ bonds). The remaining unhybridised p orbital on each carbon atom is perpendicular to the ring plane.'
      }
    },
    {
      id: 'p-delocalised-2',
      type: 'paragraph',
      data: {
        text: 'These six p orbitals overlap sideways to form a continuous π electron system above and below the hexagonal ring. The six π electrons are not localised between specific carbon pairs but are delocalised over all six carbon atoms, creating a "sea" of electron density. This delocalisation provides extra stability compared to the Kekulé structure.'
      }
    },
    {
      id: 'callout-representation',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Representing Benzene',
        text: 'A hexagon with a circle inside represents benzene. The hexagon shows the σ bond skeleton, and the circle symbolises the delocalised π electrons above and below the ring. Avoid drawing alternating single and double bonds—this is incorrect.'
      }
    },
    {
      id: 'checklist-evidence',
      type: 'checklist',
      data: {
        items: [
          { text: 'All C−C bonds in benzene are 140 pm (between single and double)', checked: false },
          { text: 'Hydrogenation ΔH = −208 kJ/mol (less than Kekulé prediction)', checked: false },
          { text: 'Stabilisation energy ≈ 150 kJ/mol explains extra stability', checked: false },
          { text: 'Six p orbitals form continuous π system above/below ring', checked: false },
          { text: 'Hexagon with circle is the correct representation', checked: false }
        ]
      }
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Benzene has equal C–C bond lengths (140 pm) and a lower-than-expected enthalpy of hydrogenation, proving it is NOT three alternating double bonds but a delocalised π system.\n\nApply: Calculate the expected ΔH_hydrogenation for cyclohexatriene vs measured ΔH for benzene. What does the difference represent?\n\nAnalyze: How does X-ray crystallography providing equal bond lengths disprove Kekulé\'s structure?\n\nEvaluate: Was Kekulé wrong, or was his model a useful stepping stone? Discuss the evolution of scientific models.'
      },
      terms: []
    },
    {
      id: 'summary-structure',
      type: 'summary',
      data: {
        text: 'Benzene is not a Kekulé structure with alternating single and double bonds. Evidence from bond lengths (all 140 pm) and enthalpy of hydrogenation (−208 vs −360 kJ/mol) shows benzene has a delocalised π electron system. Six p orbitals form a continuous bonding region above and below the ring, stabilising the molecule by ~150 kJ/mol and giving it exceptional stability and reactivity patterns different from alkenes.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-bond-length', prompt: 'What are the actual bond lengths in benzene, and why does this disprove the Kekulé structure?' },
      { id: 'cue-2', blockId: 'eq-hydrogenation', prompt: 'What is the difference between actual and predicted enthalpy of hydrogenation for benzene, and what does this tell us?' },
      { id: 'cue-3', blockId: 'p-delocalised-2', prompt: 'Explain how delocalisation of π electrons in benzene provides stability.' },
      { id: 'cue-4', blockId: 'callout-representation', prompt: 'How should benzene be represented in structures, and why is the hexagon-with-circle model better?' }
    ],
    summaryText: 'Benzene has equal C−C bonds of 140 pm, intermediate between single and double. Hydrogenation releases only −208 kJ/mol (vs −360 expected), indicating 150 kJ/mol stabilisation energy. Six p orbitals form a delocalised π system above and below the ring, not alternating localised bonds.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Benzene structure and bonding',
      detail: 'X-ray crystallography confirms equal C−C bond lengths; enthalpy of hydrogenation via calorimetry',
      year: '2023',
      source: 'chemguide.co.uk — benzene structure and bonding',
      tags: ['structure', 'bonding', 'delocalisation']
    }
  ]
};
