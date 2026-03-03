export const note_chemistry_4_15_3 = {
  blocks: [
    {
      id: 'obj-carbonyl-nom',
      type: 'objective',
      data: {
        text: 'Understand carbonyl functional group nomenclature, structure, and physical properties of aldehydes and ketones.'
      }
    },
    {
      id: 'h-carbonyl-structure',
      type: 'heading',
      data: { text: 'Carbonyl Functional Group Structure', level: 2 }
    },
    {
      id: 'p-carbonyl-def',
      type: 'paragraph',
      data: {
        text: 'The carbonyl group is a C=O double bond. It consists of a σ bond (overlap of sp² hybrid orbitals) and a π bond (overlap of p orbitals). The C=O bond is polar: the oxygen is more electronegative than carbon, so the C=Oδ⁺–δ⁻ dipole is strong. This polarity makes carbonyls susceptible to nucleophilic attack. Aldehydes have the carbonyl at the end of a chain (R–CHO), while ketones have it in the middle (R–CO–R).'
      }
    },
    {
      id: 'equation-carbonyl-structure',
      type: 'equation',
      data: {
        html: 'Aldehyde: R–C(=O)H  |  Ketone: R–C(=O)–R′  |  Both: C=O polar bond (C<sup>δ+</sup>–O<sup>δ−</sup>)',
        caption: 'Structure of aldehydes and ketones. The C=O group is polar and sp² hybridised, making the carbon susceptible to nucleophilic attack at the electrophilic carbon.'
      }
    },
    {
      id: 'h-aldehyde-naming',
      type: 'heading',
      data: { text: 'Aldehyde Nomenclature', level: 2 }
    },
    {
      id: 'p-aldehyde-suffix',
      type: 'paragraph',
      data: {
        text: 'Aldehydes are named using the suffix –al (IUPAC). The carbon of the aldehyde group is always C1. Examples: methanal (HCHO), ethanal (CH₃CHO), propanal (CH₃CH₂CHO), butanal (CH₃CH₂CH₂CHO). If the aldehyde is attached to a ring, the suffix is –carbaldehyde: cyclohexanecarbaldehyde. If there are other functional groups with higher priority (e.g., carboxylic acid, alcohol), the aldehyde is named as a prefix: formyl– (CHO) or oxo– (for internal aldehydes).'
      }
    },
    {
      id: 'list-aldehyde-examples',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'HCHO: methanal (simplest aldehyde)',
          'CH₃CHO: ethanal (acetaldehyde)',
          'CH₃CH₂CHO: propanal',
          'CH₃CH(OH)CHO: 2-hydroxypropanal',
          'CHO attached to benzene ring: benzaldehyde (C₆H₅CHO)'
        ]
      }
    },
    {
      id: 'h-ketone-naming',
      type: 'heading',
      data: { text: 'Ketone Nomenclature', level: 2 }
    },
    {
      id: 'p-ketone-suffix',
      type: 'paragraph',
      data: {
        text: 'Ketones are named using the suffix –one. The position of the carbonyl is indicated by a number: propanone (CH₃–CO–CH₃), butanone (CH₃–CO–CH₂–CH₃), pentan-2-one (CH₃–CO–CH₂–CH₂–CH₃). The carbon chain is numbered to give the carbonyl the lowest number. If other functional groups are present with higher priority, the ketone is named as a prefix using oxo–: 3-oxobutanoic acid.'
      }
    },
    {
      id: 'list-ketone-examples',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'CH₃COCH₃: propanone (acetone)',
          'CH₃COCH₂CH₃: butanone (methyl ethyl ketone, MEK)',
          'CH₃COCH₂CH₂CH₃: pentan-2-one',
          'CH₃CH₂COCH₂CH₃: pentan-3-one',
          'C₆H₅COCH₃: phenylmethanone (acetophenone)'
        ]
      }
    },
    {
      id: 'callout-naming-priority',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Functional Group Priority',
        text: 'In IUPAC nomenclature, carboxylic acids and aldehydes have higher priority than ketones. If a molecule contains both CHO and C=O groups, it is named as an aldehyde (–al suffix) and the ketone becomes an oxo prefix. Similarly, alcohols (–OH) have higher priority than aldehydes/ketones: a compound with both CHO and OH is named as an aldehyde with a hydroxy prefix. Remember: carboxylic acid > aldehyde > ketone > alcohol > alkene > alkane.'
      }
    },
    {
      id: 'h-physical-properties',
      type: 'heading',
      data: { text: 'Physical Properties of Aldehydes & Ketones', level: 2 }
    },
    {
      id: 'table-properties',
      type: 'comparisonTable',
      data: {
        headers: ['Property', 'Aldehydes', 'Ketones', 'Alkanes (for comparison)'],
        rows: [
          ['Boiling point', 'Higher than alkanes; lower than alcohols', 'Higher than alkanes; lower than alcohols', 'Baseline'],
          ['Polarity', 'Polar (C=O dipole)', 'Polar (C=O dipole)', 'Non-polar'],
          ['Solubility in water', 'Small: soluble (H-bonding with O); larger: limited', 'Small: soluble; larger: limited', 'Insoluble'],
          ['Volatility', 'Volatile; strong odours (pungent)', 'Volatile; characteristic odours', 'Various odours'],
          ['Hydrogen bonding', 'Can accept H-bonds but cannot donate (no H on O)', 'Can accept H-bonds but cannot donate', 'None']
        ],
        caption: 'Physical properties of aldehydes and ketones. Both are polar and volatile, but less polar than alcohols (no O–H bond).'
      }
    },
    {
      id: 'p-properties-detail',
      type: 'paragraph',
      data: {
        text: 'The C=O bond is polarised, making aldehydes and ketones polar molecules. This explains their higher boiling points compared to alkanes of similar molecular weight. However, they are less polar than alcohols because they lack an O–H bond for hydrogen bonding donation (they can only accept H-bonds). Small aldehydes and ketones (up to ~5 carbons) are soluble in water because they form hydrogen bonds with water molecules. Larger molecules are less soluble as the hydrocarbon tail dominates. Both aldehydes and ketones are volatile liquids with characteristic odours: formaldehyde has a pungent, irritating smell (used in disinfectants); acetaldehyde smells fruity; acetone is used as a solvent with a sharp, sweet odour.'
      }
    },
    {
      id: 'p-aldehyde-vs-ketone',
      type: 'paragraph',
      data: {
        text: 'Aldehydes are generally more reactive than ketones in nucleophilic addition reactions. This is because the aldehyde carbon is less sterically hindered (only one alkyl group) compared to the ketone carbon (two alkyl groups). The presence of only a hydrogen atom on the aldehyde carbon makes it more accessible to nucleophiles. This difference in reactivity is exploited in chemical tests: Tollens reagent and Fehling reagent can distinguish aldehydes from ketones because only aldehydes are oxidised under these mild conditions (see Carbonyl Reactions note).'
      }
    },
    {
      id: 'checklist-carbonyl-nom',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can name aldehydes using the –al suffix with correct numbering.', checked: false },
          { text: 'I can name ketones using the –one suffix with correct numbering.', checked: false },
          { text: 'I understand that aldehydes are more reactive than ketones in addition reactions.', checked: false },
          { text: 'I can predict physical properties (boiling point, solubility) from structure.', checked: false }
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
        text: 'Understand: Aldehydes have C=O at the terminal carbon (−CHO); ketones have C=O between two carbons. The carbonyl group is polar, making it susceptible to nucleophilic addition.\n\nApply: Name CH₃COCH₂CH₃ and CH₃CH₂CHO. Which is an aldehyde and which is a ketone?\n\nAnalyze: Why are aldehydes more easily oxidised than ketones? Relate to the position of the C=O group.\n\nEvaluate: Methanal (HCHO) has no alkyl groups on the carbonyl. How does this affect its reactivity compared to other aldehydes?'
      },
      terms: []
    },
    {
      id: 'summary-carbonyl-nom',
      type: 'summary',
      data: {
        text: 'Aldehydes (R–CHO, suffix –al) have carbonyl at the chain end; ketones (R–CO–R′, suffix –one) have it in the middle. Both have polar C=O bonds, giving higher boiling points than alkanes but lower than alcohols. Small aldehydes/ketones are water-soluble (H-bonding acceptors); larger ones are not. Aldehydes are more reactive than ketones in nucleophilic addition because of lower steric hindrance. Functional group priority: aldehyde > ketone > alcohol.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-carbonyl-def',
        prompt: 'What is the carbonyl functional group and why is it polar?'
      },
      {
        id: 'cue-2',
        blockId: 'p-aldehyde-suffix',
        prompt: 'How do you name aldehydes? Give three examples.'
      },
      {
        id: 'cue-3',
        blockId: 'p-ketone-suffix',
        prompt: 'How do you name ketones and what is the position numbering rule?'
      },
      {
        id: 'cue-4',
        blockId: 'table-properties',
        prompt: 'Compare boiling points and solubility of aldehydes vs alkanes and alcohols.'
      },
      {
        id: 'cue-5',
        blockId: 'p-aldehyde-vs-ketone',
        prompt: 'Why are aldehydes more reactive than ketones in nucleophilic addition?'
      }
    ],
    summaryText: 'Aldehydes (R–CHO, suffix –al) and ketones (R–CO–R′, suffix –one) contain the polar C=O group. Aldehydes have carbonyl at the chain end; ketones in the middle. Both are polar, volatile, and water-soluble if small. Aldehydes are more reactive than ketones due to lower steric hindrance around the carbonyl carbon. Physical properties: higher boiling points than alkanes, lower than alcohols; can accept H-bonds but not donate.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Formaldehyde in industry and biology',
      detail: 'Formaldehyde (HCHO, methanal) is one of the most produced chemicals worldwide, used in disinfectants, resins, and embalming fluids. It is also produced naturally in living cells during metabolic reactions. Despite its utility, formaldehyde is classified as a carcinogen, illustrating the importance of understanding reactive functional groups and their hazards.',
      year: '2023',
      source: 'Industrial Chemistry & Biochemistry',
      tags: ['nomenclature', 'aldehydes', 'functional groups', 'reactivity']
    }
  ]
};
