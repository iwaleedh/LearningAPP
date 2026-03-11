export const note_chemistry_1_4_7 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand the formulae and structures of alkanes and cycloalkanes. Relate their physical properties and reactivity to their bonding and structure.',
      }
    },
    {
      id: 'h-alkanes',
      type: 'heading',
      data: { text: 'Alkanes', level: 2 }
    },
    {
      id: 'p-alkanes',
      type: 'paragraph',
      data: {
        text: 'Alkanes are saturated hydrocarbons containing only carbon-carbon single bonds and carbon-hydrogen bonds. The first four straight-chain alkanes are methane, ethane, propane, and butane, which are all gases at room temperature.'
      }
    },
    {
      id: 'callout-alkane-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'General Formula for Alkanes',
        html: 'Straight-chain and branched alkanes fit the general formula <strong>C<sub>n</sub>H<sub>2n+2</sub></strong>.'
      }
    },
    {
      id: 'h-cycloalkanes',
      type: 'heading',
      data: { text: 'Cycloalkanes', level: 2 }
    },
    {
      id: 'p-cycloalkanes',
      type: 'paragraph',
      data: {
        text: 'Cycloalkanes also contain only C-C and C-H single bonds, but the carbon atoms are joined in a continuous ring. The smallest possible cycloalkane is cyclopropane (C<sub>3</sub>H<sub>6</sub>). To form the ring, two hydrogen atoms are lost compared to the straight chain.'
      }
    },
    {
      id: 'callout-cyclo-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Formula and Shape of Cycloalkanes',
        html: 'The general formula for a cycloalkane is <strong>C<sub>n</sub>H<sub>2n</sub></strong>.<br/><br/>Cycloalkanes (from cyclopentane upwards) are not flat; they exist as "puckered" rings. For example, cyclohexane rapidly flips between "chair" and "boat" conformations to minimise strain.'
      }
    },
    {
      id: 'h-boiling',
      type: 'heading',
      data: { text: 'Physical Properties: Boiling Points', level: 2 }
    },
    {
      id: 'list-boiling',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Chain Length:</strong> Alkanes are non-polar, so the only intermolecular forces are London (Van der Waals) dispersion forces. As molecules get larger, they have more electrons, leading to stronger London forces and higher boiling points.',
          '<strong>Branching:</strong> Branched isomers have lower boiling points than straight-chain isomers. Branching makes molecules shorter and fatter, preventing them from packing as closely together and reducing the strength of London forces.',
          '<strong>Cycloalkanes:</strong> Cycloalkanes have boiling points about 10-20 K higher than their corresponding straight-chain alkanes because the ring structures allow molecules to pack more closely and increase intermolecular contact.'
        ]
      }
    },
    {
      id: 'h-reactivity',
      type: 'heading',
      data: { text: 'Chemical Reactivity', level: 2 }
    },
    {
      id: 'list-reactivity',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Alkanes have strong, almost non-polar C-C and C-H bonds. Because they lack areas of significant positive or negative charge, they do not attract ions or polar reagents, making them generally unreactive.',
          'Their main reactions are combustion (burning), free radical substitution with halogens (under UV light), and cracking.',
          '<strong>Exception for small cycloalkanes:</strong> Cyclopropane is unusually reactive. The ring forces the C-C-C bond angle to 60° (instead of the normal 109.5°). This causes severe repulsion between the bonding electron pairs, making the ring bonds weaker and easier to break.'
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-cyclo-formula',
        prompt: 'State the general formulae for open-chain alkanes and cycloalkanes.'
      },
      {
        id: 'cue-2',
        blockId: 'list-boiling',
        prompt: 'Explain why branched alkanes typically have lower boiling points than their straight-chain isomers.'
      },
      {
        id: 'cue-3',
        blockId: 'list-reactivity',
        prompt: 'Why are alkanes generally very unreactive to polar reagents?'
      },
      {
        id: 'cue-4',
        blockId: 'list-reactivity',
        prompt: 'Explain why cyclopropane is much more reactive than larger cycloalkanes or straight-chain alkanes.'
      }
    ],
    summaryText: 'Alkanes (CnH2n+2) and cycloalkanes (CnH2n) are saturated, non-polar hydrocarbons. Boiling points increase with size due to stronger London forces, but decrease with branching (less surface contact). Cycloalkanes pack better and have higher bps. Alkanes are unreactive because C-C/C-H bonds are strong and non-polar. Small rings like cyclopropane are highly reactive due to 60 degree bond angle ring strain.',
    ready: false
  },
  evidence: []
};
