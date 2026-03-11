export const note_chemistry_5_20_6 = {
  blocks: [
    {
      id: 'obj-mechanisms-summary',
      type: 'objective',
      data: {
        text: 'Summarise and classify the key organic reaction mechanisms: free radical, electrophilic, nucleophilic, and elimination pathways.'
      }
    },
    {
      id: 'h-mechanisms-intro',
      type: 'heading',
      data: { text: 'Overview of Organic Mechanisms', level: 2 }
    },
    {
      id: 'p-mechanisms-intro',
      type: 'paragraph',
      data: {
        text: 'In organic chemistry, reaction mechanisms describe the step-by-step sequence of elementary reactions by which an overall chemical change occurs. Knowing the functional group identifies the type of mechanism that a molecule will typically undergo.'
      }
    },
    {
      id: 'h-free-radical',
      type: 'heading',
      data: { text: '1. Free Radical Mechanisms', level: 2 }
    },
    {
      id: 'table-free-radical',
      type: 'comparisonTable',
      data: {
        caption: 'Types of Free Radical Reactions',
        headers: ['Mechanism', 'Typical Reactants', 'Description'],
        rows: [
          ['<strong>Free radical substitution</strong>', 'Alkanes, Alkyl groups (e.g. methyl side-chains)', 'In the presence of UV light, halogens form radicals that substitute hydrogen atoms in saturated chains.'],
          ['<strong>Free radical addition</strong>', 'Alkenes (e.g. ethene)', 'Occurs during addition polymerisation and occasionally in reactions like HBr addition to alkenes under the presence of organic peroxides.']
        ]
      }
    },
    {
      id: 'h-electrophilic',
      type: 'heading',
      data: { text: '2. Electrophilic Mechanisms', level: 2 }
    },
    {
      id: 'p-electrophilic',
      type: 'paragraph',
      data: {
        text: 'Electrophiles are electron-pair acceptors. They are attracted to regions of high electron density (like C=C double bonds or benzene rings).'
      }
    },
    {
      id: 'table-electrophilic',
      type: 'comparisonTable',
      data: {
        caption: 'Types of Electrophilic Reactions',
        headers: ['Mechanism', 'Typical Reactants', 'Description'],
        rows: [
          ['<strong>Electrophilic addition</strong>', 'Alkenes (e.g. ethene, propene)', 'The electron-rich C=C double bond attacks the electrophile, followed by the addition of a nucleophile to the resulting carbocation.'],
          ['<strong>Electrophilic substitution</strong>', 'Arenes (e.g. benzene, phenol)', 'The delocalised pi-electron ring attacks an electrophile. To preserve the stable aromatic ring, a hydrogen ion is eliminated instead of an addition occurring.']
        ]
      }
    },
    {
      id: 'h-nucleophilic',
      type: 'heading',
      data: { text: '3. Nucleophilic Mechanisms', level: 2 }
    },
    {
      id: 'p-nucleophilic',
      type: 'paragraph',
      data: {
        text: 'Nucleophiles are electron-pair donors. They are attracted to electron-deficient (partially positive) carbon atoms, such as those bonded to halogens or oxygen.'
      }
    },
    {
      id: 'table-nucleophilic',
      type: 'comparisonTable',
      data: {
        caption: 'Types of Nucleophilic Reactions',
        headers: ['Mechanism', 'Typical Reactants', 'Description'],
        rows: [
          ['<strong>Nucleophilic substitution</strong>', 'Halogenoalkanes', 'A nucleophile (e.g. OH⁻, CN⁻, NH₃) replaces the halogen atom on the saturated carbon.'],
          ['<strong>Nucleophilic addition</strong>', 'Carbonyl compounds (Aldehydes, Ketones)', 'The nucleophile attacks the partially positive carbonyl carbon (C=O). The pi-bond breaks to form an intermediate that accepts a proton.'],
          ['<strong>Nucleophilic addition / elimination</strong>', 'Acyl chlorides', 'A nucleophile (e.g. H₂O, alcohol, amine) attacks the acyl carbon. The C=O bond temporarily breaks and reforms, eliminating the chloride ion as a leaving group.']
        ]
      }
    },
    {
      id: 'h-elimination',
      type: 'heading',
      data: { text: '4. Elimination Mechanisms', level: 2 }
    },
    {
      id: 'p-elimination',
      type: 'paragraph',
      data: {
        text: 'Elimination reactions involve the removal of atoms or groups from adjacent carbon atoms to form a pi-bond (C=C double bond).'
      }
    },
    {
      id: 'list-elimination-examples',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>From Halogenoalkanes:</strong> Reaction with hot, ethanolic potassium hydroxide (acting as a base) to form an alkene, water, and a halide ion.',
          '<strong>From Alcohols:</strong> Dehydration using hot concentrated phosphoric/sulfuric acid (or aluminium oxide) to form an alkene and water.'
        ]
      }
    },
    {
      id: 'summary-mechanisms',
      type: 'summary',
      data: {
        text: 'All main functional groups have characteristic mechanisms based on their bond polarities and electron densities: alkanes undergo free radical substitution; alkenes undergo electrophilic addition; arenes undergo electrophilic substitution; halogenoalkanes undergo nucleophilic substitution (and elimination); carbonyls undergo nucleophilic addition; and acyl chlorides undergo nucleophilic addition-elimination.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'table-free-radical',
        prompt: 'Which homologous series typically reacts via a free radical substitution mechanism?'
      },
      {
        id: 'cue-2',
        blockId: 'table-electrophilic',
        prompt: 'Explain the difference in typical reaction types between alkenes and arenes, even though both are electron-rich species.'
      },
      {
        id: 'cue-3',
        blockId: 'table-nucleophilic',
        prompt: 'Identify the functional group that undergoes nucleophilic addition / elimination.'
      },
      {
        id: 'cue-4',
        blockId: 'list-elimination-examples',
        prompt: 'Give two examples of functional groups that can undergo elimination reactions to form alkenes.'
      }
    ],
    summaryText: 'Alkanes react via free radical substitution. Alkenes undergo electrophilic addition due to the localized C=C, while arenes undergo electrophilic substitution to preserve the stability of the delocalised pi-ring. Acyl chlorides undergo nucleophilic addition/elimination. Halogenoalkanes (base-induced) and alcohols (acid-catalysed dehydration) can both undergo elimination reactions to form alkenes.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Organic mechanisms menu',
      detail: 'A definitive overview mapping different homologous series to their dominant reaction mechanisms: from free radical processes in alkanes to nucleophilic interactions in acyl chlorides.',
      year: '2023',
      source: 'chemguide.co.uk — Organic mechanisms menu',
      tags: ['mechanisms', 'electrophilic', 'nucleophilic', 'free radical', 'elimination']
    }
  ]
};