export const note_chemistry_5_18_10 = {
  blocks: [
    {
      id: 'obj-phenol-other-rxns',
      type: 'objective',
      data: {
        text: 'Describe the combustion of phenol, its esterification reactions with acyl chlorides and acid anhydrides, and the chemical test for phenol using iron(III) chloride.'
      }
    },
    {
      id: 'h-combustion',
      type: 'heading',
      data: { text: 'Combustion of Phenol', level: 2 }
    },
    {
      id: 'p-combustion',
      type: 'paragraph',
      data: {
        text: 'Like all organic compounds, phenol will burn in a plentiful supply of oxygen to produce carbon dioxide and water. However, because phenol (C₆H₅OH) contains a benzene ring, it has a very high proportion of carbon compared to hydrogen.'
      }
    },
    {
      id: 'callout-smoky-flame',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Smoky Flame Observation',
        text: 'When burned in air, there is rarely enough oxygen for complete combustion. The hydrogen reacts with oxygen first, leaving unreacted carbon atoms. This results in phenol burning with an **extremely smoky flame** full of soot (carbon particles).'
      }
    },
    {
      id: 'h-esterification',
      type: 'heading',
      data: { text: 'Esterification of Phenol', level: 2 }
    },
    {
      id: 'p-esterification-slow',
      type: 'paragraph',
      data: {
        text: 'Alcohols react with carboxylic acids to form esters. However, phenol reacts far too slowly with carboxylic acids to be useful. Instead, more reactive acylating agents are used: **acyl chlorides** (acid chlorides) or **acid anhydrides**.'
      }
    },
    {
      id: 'h-acyl-chlorides',
      type: 'heading',
      data: { text: 'Esterification using Acyl Chlorides', level: 3 }
    },
    {
      id: 'p-ethanoyl-chloride',
      type: 'paragraph',
      data: {
        text: 'Phenol reacts with ethanoyl chloride (CH₃COCl) at room temperature to form phenyl ethanoate and steamy fumes of hydrogen chloride gas.'
      }
    },
    {
      id: 'eq-ethanoyl-chloride',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>5</sub>OH + CH<sub>3</sub>COCl → CH<sub>3</sub>COOC<sub>6</sub>H<sub>5</sub> + HCl'
      }
    },
    {
      id: 'callout-sodium-phenoxide',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Using Sodium Phenoxide to Increase Reaction Rate',
        text: 'If a less reactive acyl chloride is used (like benzoyl chloride, C₆H₅COCl), the reaction with phenol is very slow. To speed it up, the phenol is first dissolved in sodium hydroxide (NaOH) to form the more reactive **phenoxide ion** (C₆H₅O⁻). The phenoxide ion then attacks the acyl chloride much faster.'
      }
    },
    {
      id: 'h-acid-anhydrides',
      type: 'heading',
      data: { text: 'Esterification using Acid Anhydrides', level: 3 }
    },
    {
      id: 'p-acid-anhydrides',
      type: 'paragraph',
      data: {
        text: 'Acid anhydrides, such as ethanoic anhydride, are less reactive than acyl chlorides. The mixture must usually be warmed. Reacting phenol with ethanoic anhydride forms phenyl ethanoate and ethanoic acid. Again, converting phenol into sodium phenoxide first increases the reaction speed significantly.'
      }
    },
    {
      id: 'h-iron-test',
      type: 'heading',
      data: { text: 'Testing for Phenol: Iron(III) Chloride', level: 2 }
    },
    {
      id: 'p-iron-test',
      type: 'paragraph',
      data: {
        text: 'A simple chemical test can identify the presence of a phenol group. It relies on the ability of iron(III) ions (Fe³⁺) to form strongly coloured coordinate complexes with phenols.'
      }
    },
    {
      id: 'callout-iron-test-result',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Iron(III) Chloride Test',
        text: 'If a few drops of neutral (or weakly acidic) aqueous iron(III) chloride solution are added to phenol, an **intense violet/purple solution** forms immediately. This strongly coloured complex is characteristic of compounds containing an –OH group directly attached to a benzene ring.'
      }
    },
    {
      id: 'summary-phenol-other',
      type: 'summary',
      data: {
        text: 'Phenol burns in air with a remarkably smoky flame due to its very high carbon-to-hydrogen ratio resulting in incomplete combustion. It does not easily form esters with carboxylic acids; instead, reactions with acyl chlorides (like ethanoyl chloride) or acid anhydrides are used to produce phenyl esters. These esterification reactions are notably faster if the phenol is first converted to a phenoxide ion using NaOH. Finally, an essential laboratory test for phenol is the addition of iron(III) chloride solution, which yields an intense violet-purple solution.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "The Iron(III) Chloride Test",
        text: "Adding FeCl\u2083(aq) to phenol produces **intense violet/purple solution immediately** (characteristic of \u2212OH directly attached to benzene ring); valid diagnostic test for phenols. Phenoxide ion (C\u2086H\u2085O\u207b) reacts with Fe\u00b3\u207a forming violet Fe\u2212phenolate complex; distinguishes phenols from alcohols and carboxylic acids."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-smoky-flame',
        prompt: 'Why does phenol burn with an exceptionally smoky flame compared to many non-aromatic hydrocarbons?'
      },
      {
        id: 'cue-2',
        blockId: 'p-esterification-slow',
        prompt: 'State the two types of organic compounds used to form typical phenyl esters from phenol, since carboxylic acids react too slowly.'
      },
      {
        id: 'cue-3',
        blockId: 'callout-sodium-phenoxide',
        prompt: 'Why is it often advantageous to react phenol with sodium hydroxide before reacting it with a less reactive acyl chloride?'
      },
      {
        id: 'cue-4',
        blockId: 'callout-iron-test-result',
        prompt: 'Name the reagent used as a chemical test for phenol and state the observed positive result.'
      }
    ],
    summaryText: 'Phenol burns with a smoky flame because it has a high proportion of carbon leading to incomplete combustion. Acyl chlorides and acid anhydrides are used to form esters from phenol. Reacting phenol with NaOH first forms the phenoxide ion, which is a stronger nucleophile and reacts much faster with acylating agents. Test for phenol: Add iron(III) chloride (FeCl₃) solution; the observation is the formation of an intense violet-purple solution.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Assorted Reactions of Phenol',
      detail: 'Discussion of incomplete combustion, substituting acyl chlorides/acid anhydrides for carboxylic acids during esterification, and the iron(III) chloride test.',
      year: '2023',
      source: 'chemguide.co.uk — Assorted Reactions of Phenol',
      tags: ['phenol', 'esterification', 'iron(III) chloride test', 'combustion']
    }
  ]
};
