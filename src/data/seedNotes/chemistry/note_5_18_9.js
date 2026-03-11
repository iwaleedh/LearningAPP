export const note_chemistry_5_18_9 = {
  blocks: [
    {
      id: 'obj-phenol-ring-rxns',
      type: 'objective',
      data: {
        text: 'Understand the specific electrophilic substitution reactions of the benzene ring in phenol, including reactions with bromine water and both dilute and concentrated nitric acid.'
      }
    },
    {
      id: 'h-activation',
      type: 'heading',
      data: { text: 'Activation of the Benzene Ring', level: 2 }
    },
    {
      id: 'p-activation',
      type: 'paragraph',
      data: {
        text: 'The –OH group in phenol makes the benzene ring significantly more reactive towards electrophiles than benzene itself. This is because one of the oxygen atom\'s lone pairs overlaps with the delocalised π electron system of the ring.'
      }
    },
    {
      id: 'callout-directing',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Increased Density and 2,4-Directing Effect',
        text: 'This lone-pair donation increases the overall electron density around the ring. The enhanced negative charge strongly attracts incoming electrophiles.\n\nFurthermore, the –OH group is a **2,4-directing group** (ortho/para-directing). It significantly activates the 2- (ortho), 4- (para), and 6- (ortho) positions, meaning substituting electrophiles will preferentially attack these carbons.'
      }
    },
    {
      id: 'h-bromination',
      type: 'heading',
      data: { text: 'Reaction with Bromine Water', level: 2 }
    },
    {
      id: 'p-bromination',
      type: 'paragraph',
      data: {
        text: 'Unlike benzene, which requires pure bromine and a halogen carrier catalyst, phenol readily reacts with bromine water (Br₂(aq)) in the cold without any catalyst.'
      }
    },
    {
      id: 'callout-bromine-test',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Bromination Observation',
        text: 'When bromine water is added to a phenol solution:\n\n1. The orange/brown bromine water is **decolourised**.\n2. A characteristic **white precipitate** of **2,4,6-tribromophenol** instantly forms.\n\nThe multiple substitutions occur simultaneously into all the highly activated 2, 4, and 6 positions.'
      }
    },
    {
      id: 'eq-bromination',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>5</sub>OH(aq) + 3Br<sub>2</sub>(aq) → 2,4,6−(BrO)<sub>3</sub>C<sub>6</sub>H<sub>2</sub>OH(s) + 3HBr(aq)'
      }
    },
    {
      id: 'h-nitration',
      type: 'heading',
      data: { text: 'Reactions with Nitric Acid', level: 2 }
    },
    {
      id: 'p-nitration',
      type: 'paragraph',
      data: {
        text: 'The elevated reactivity of phenol also alters its necessary nitration conditions. Benzene requires a concentrated mixture of nitric and sulphuric acids at 50°C. Phenol reacts even with dilute nitric acid at room temperature.'
      }
    },
    {
      id: 'table-nitration',
      type: 'comparisonTable',
      data: {
        caption: 'Conditions for Phenol Nitration',
        headers: ['Condition', 'Reagents', 'Main Products'],
        rows: [
          ['Mild', 'Dilute HNO₃, room temperature', 'Mixture of **2-nitrophenol** and **4-nitrophenol**'],
          ['Harsh', 'Concentrated HNO₃', 'Multiple substitutions creating **2,4,6-trinitrophenol** (picric acid)']
        ]
      }
    },
    {
      id: 'summary-phenol-ring',
      type: 'summary',
      data: {
        text: 'The delocalisation of an oxygen lone pair into the benzene ring makes phenol highly reactive towards electrophilic substitution. The –OH group is a strong 2,4-directing activator. Phenol rapidly decolourises bromine water in the cold, forming a white precipitate of 2,4,6-tribromophenol. Unlike benzene, phenol reacts with dilute nitric acid at room temperature to yield a mixture of 2- and 4-nitrophenol, and with concentrated nitric acid to yield 2,4,6-trinitrophenol. No strong acid or Lewis acid catalysts are required.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-directing',
        prompt: 'Explain why phenol is much more reactive towards electrophilic substitution than benzene and state its directing effect.'
      },
      {
        id: 'cue-2',
        blockId: 'callout-bromine-test',
        prompt: 'State the reagents, conditions, and two observations for the reaction between phenol and bromine water.'
      },
      {
        id: 'cue-3',
        blockId: 'table-nitration',
        prompt: 'Contrast the products formed when phenol reacts with dilute nitric acid versus concentrated nitric acid.'
      }
    ],
    summaryText: 'The –OH oxygen delocalises a lone pair into the π ring system, increasing electron density and attracting electrophiles. It is a 2,4-directing group. Reagents: Br₂(aq). Conditions: Room temp, no catalyst. Observations: Bromine water decolourises and a white precipitate forms (2,4,6-tribromophenol). Dilute HNO₃ gives a mixture of 2-nitrophenol and 4-nitrophenol; concentrated HNO₃ results in multiple substitutions yielding 2,4,6-trinitrophenol.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Ring Reactions of Phenol',
      detail: 'Discussion of electrophilic substitution without catalysts due to lone-pair activation, detailing specific nitration and bromination differences from benzene.',
      year: '2023',
      source: 'chemguide.co.uk — Phenol Ring Reactions',
      tags: ['phenol', 'electrophilic substitution', 'nitration', 'bromination']
    }
  ]
};
