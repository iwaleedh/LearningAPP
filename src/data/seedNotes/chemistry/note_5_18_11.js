export const note_chemistry_5_18_11 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand the free radical substitution reaction of the methyl side-chain in methylbenzene with halogens.'
      }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: {
        text: 'Methylbenzene (Toluene)',
        level: 2
      }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Methylbenzene consists of a methyl group (–CH₃) attached to a benzene ring. When discussing its reactions with halogens, it is crucial to distinguish between reactions happening <em>on the ring</em> (electrophilic substitution) and those happening <em>on the alkyl side-chain</em> (free radical substitution).'
      }
    },
    {
      id: 'callout-photochemical',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Photochemical Reaction',
        text: 'The reaction between methylbenzene and chlorine happens in the presence of <strong>ultraviolet light</strong>. This is a <strong>photochemical reaction</strong>. <em>(Note: Do not call this photocatalysis; light acts as the energy source, not a substance-based catalyst.)</em> In the absence of light and presence of a catalyst, substitution happens on the benzene ring instead.'
      }
    },
    {
      id: 'eq-main',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub> + Cl<sub>2</sub> → C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>Cl + HCl',
        caption: 'Overall equation for the monosubstitution of methylbenzene by chlorine.'
      }
    },
    {
      id: 'p-product',
      type: 'paragraph',
      data: {
        text: 'The organic product is <strong>(chloromethyl)benzene</strong>. The brackets in the name emphasise that the chlorine is attached to the methyl group, not directly to the benzene ring. One hydrogen atom in the methyl group is replaced by a chlorine atom.'
      }
    },
    {
      id: 'h-mechanism',
      type: 'heading',
      data: {
        text: 'Free Radical Mechanism',
        level: 2
      }
    },
    {
      id: 'p-mechanism-intro',
      type: 'paragraph',
      data: {
        text: 'The reaction follows the exact same three-stage chain mechanism (initiation, propagation, and termination) as the free radical substitution of alkanes (e.g. methane). The benzene ring is largely unreactive under these conditions and acts essentially as a spectator group.'
      }
    },
    {
      id: 'h-init',
      type: 'heading',
      data: {
        text: 'Stage 1: Initiation',
        level: 3
      }
    },
    {
      id: 'p-init',
      type: 'paragraph',
      data: {
        text: 'UV light provides the energy to break the strong Cl–Cl bond via <strong>homolytic fission</strong>, forming two chlorine radicals.'
      }
    },
    {
      id: 'eq-init',
      type: 'equation',
      data: {
        html: 'Cl<sub>2</sub> → 2Cl•'
      }
    },
    {
      id: 'h-prop',
      type: 'heading',
      data: {
        text: 'Stage 2: Propagation',
        level: 3
      }
    },
    {
      id: 'list-prop',
      type: 'list',
      data: {
        style: 'unordered',
        items: [
          'The chlorine radical abstracts a hydrogen atom from the methyl group of methylbenzene, producing hydrogen chloride and a reactive (phenylmethyl) radical: <strong>C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub> + Cl• → C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>• + HCl</strong>',
          'The new radical reacts with another chlorine molecule, reforming the chlorine radical and producing (chloromethyl)benzene: <strong>C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>• + Cl<sub>2</sub> → C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>Cl + Cl•</strong>'
        ]
      }
    },
    {
      id: 'h-term',
      type: 'heading',
      data: {
        text: 'Stage 3: Termination',
        level: 3
      }
    },
    {
      id: 'p-term',
      type: 'paragraph',
      data: {
        text: 'Two radicals collide and combine to form a stable molecule. This stops the chain. Possible collision combinations include:'
      }
    },
    {
      id: 'list-term',
      type: 'list',
      data: {
        style: 'unordered',
        items: [
          'Two chlorine radicals: <strong>2Cl• → Cl<sub>2</sub></strong>',
          'A chlorine radical and a (phenylmethyl) radical: <strong>C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>• + Cl• → C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>Cl</strong>',
          'Two (phenylmethyl) radicals: <strong>2C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>• → C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>CH<sub>2</sub>C<sub>6</sub>H<sub>5</sub></strong> <em>(1,2-diphenylethane)</em>'
        ]
      }
    },
    {
      id: 'callout-multiple-sub',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Multiple Substitution',
        text: 'Like all free radical substitutions, the reaction does not stop at monosubstitution. The remaining hydrogen atoms on the methyl group can also be sequentially replaced by chlorine atoms, producing (dichloromethyl)benzene and (trichloromethyl)benzene in the mixture.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-photochemical',
        prompt: 'What condition is required for the free radical substitution of the methyl group in methylbenzene?'
      },
      {
        id: 'cue-2',
        blockId: 'eq-main',
        prompt: 'Write the overall equation for the reaction of methylbenzene with chlorine under UV light.'
      },
      {
        id: 'cue-3',
        blockId: 'list-prop',
        prompt: 'What are the two propagation steps in the reaction of methylbenzene with chlorine?'
      },
      {
        id: 'cue-4',
        blockId: 'list-term',
        prompt: 'Give an example of a termination step in this reaction that produces a hydrocarbon.'
      }
    ],
    summaryText: 'Methylbenzene reacts with Cl₂ under UV light (photochemical) to give (chloromethyl)benzene via free radical substitution on the side chain. Initiation: Cl₂ → 2Cl•. Propagation: C₆H₅CH₃ + Cl• → C₆H₅CH₂• + HCl, then C₆H₅CH₂• + Cl₂ → C₆H₅CH₂Cl + Cl•. Termination includes pairing of the C₆H₅CH₂• radical to form 1,2-diphenylethane. Multiple substitutions can occur.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Chemguide — Methylbenzene and Chlorine Free Radical Substitution',
      detail: 'Details photochemical side-chain substitution on methylbenzene, emphasizing structural distinctions from ring substitution.',
      year: '2023',
      source: 'chemguide.co.uk',
      tags: ['arenes', 'free radical', 'substitution', 'photochemical']
    }
  ]
};