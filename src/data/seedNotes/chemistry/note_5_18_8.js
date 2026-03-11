export const note_chemistry_5_18_8 = {
  blocks: [
    {
      id: 'obj-phenol-acidity',
      type: 'objective',
      data: {
        text: 'Understand the weak acidity of phenol, explaining the stability of the phenoxide ion, and describe its reactions with bases, carbonates, and sodium metal.'
      }
    },
    {
      id: 'h-acidity',
      type: 'heading',
      data: { text: 'The Acidity of Phenol', level: 2 }
    },
    {
      id: 'p-weak-acid',
      type: 'paragraph',
      data: {
        text: 'Compounds containing an –OH group attached to a hydrocarbon, such as alcohols and phenols, are generally very weakly acidic. However, unlike typical aliphatic alcohols (which are essentially neutral), phenol is sufficiently acidic to display recognizable acidic properties in solution.'
      }
    },
    {
      id: 'eq-dissociation',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>5</sub>OH(aq) + H<sub>2</sub>O(l) ⇌ C<sub>6</sub>H<sub>5</sub>O<sup>−</sup>(aq) + H<sub>3</sub>O<sup>+</sup>(aq)'
      }
    },
    {
      id: 'callout-phenoxide-stability',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why is Phenol Acidic?',
        text: 'Phenol can lose a hydrogen ion because the resulting **phenoxide ion (C₆H₅O⁻)** is stabilised. One of the lone pairs on the oxygen overlaps and delocalises into the benzene ring\'s π electron system. \n\nThis spreads the negative charge around the ring rather than leaving it entirely localised on the oxygen atom. Spreading the charge stabilizes the ion, making its formation more likely. However, because oxygen is highly electronegative, it still draws much of the charge back, meaning phenol remains only a **weak acid** (pH 5–6).'
      }
    },
    {
      id: 'h-reactions',
      type: 'heading',
      data: { text: 'Reactions as an Acid', level: 2 }
    },
    {
      id: 'list-reactions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**With Sodium Hydroxide (NaOH):** Phenol reacts with strong bases like NaOH solution to form a colourless salt solution of sodium phenoxide and water. \n\nC₆H₅OH + NaOH → C₆H₅O⁻Na⁺ + H₂O',
          '**With Metallic Sodium (Na):** Like other acids, hot molten phenol reacts with highly reactive metals (such as sodium) to give off hydrogen gas (effervescence) and leave sodium phenoxide. \n\n2C₆H₅OH + 2Na → 2C₆H₅O⁻Na⁺ + H₂'
        ]
      }
    },
    {
      id: 'callout-carbonates',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Distinguishing Phenol (No Reaction with Carbonates)',
        text: 'A critical distinguishing test is reacting the acid with sodium carbonate (Na₂CO₃) or sodium hydrogencarbonate (NaHCO₃). \n\nMost organic acids (like carboxylic acids) react to produce effervescence of carbon dioxide (CO₂). **Phenol is not acidic enough** to completely displace CO₂ from carbonates. Therefore, **no CO₂ gas is produced**. This is the standard test to differentiate a phenol from a carboxylic acid.'
      }
    },
    {
      id: 'summary-phenol-acidity',
      type: 'summary',
      data: {
        text: 'Phenol is a weak acid because its conjugate base, the phenoxide ion, is stabilised by the delocalisation of the oxygen\'s negative charge into the benzene ring. It reacts with strong bases (NaOH) and reactive metals (Na) to form sodium phenoxide, but it is not acidic enough to liberate CO₂ gas from sodium carbonate or hydrogencarbonate. This lack of reaction with carbonates is a key chemical test distinguishing phenols from carboxylic acids.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-phenoxide-stability',
        prompt: 'Explain why phenol is more acidic than a typical aliphatic alcohol.'
      },
      {
        id: 'cue-2',
        blockId: 'list-reactions',
        prompt: 'Write the equation for the reaction between phenol and sodium hydroxide.'
      },
      {
        id: 'cue-3',
        blockId: 'callout-carbonates',
        prompt: 'What reagent can be used to distinguish between phenol and a carboxylic acid, and what is the expected observation for each?'
      }
    ],
    summaryText: 'Phenol is more acidic because the phenoxide ion is stabilised by delocalising the negative charge from the oxygen into the benzene π ring. Equation: C₆H₅OH + NaOH → C₆H₅ONa + H₂O. Add sodium carbonate (Na₂CO₃); carboxylic acids will produce CO₂ gas (effervescence), whereas phenol is not strongly acidic enough and will produce no CO₂.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Acidity of Phenol',
      detail: 'Explanation of phenoxide stability via delocalisation and comparative reactions with NaOH and Na2CO3.',
      year: '2023',
      source: 'chemguide.co.uk — The Acidity of Phenol',
      tags: ['phenol', 'acidity', 'phenoxide', 'sodium carbonate']
    }
  ]
};
