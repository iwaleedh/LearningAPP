export const note_chemistry_5_18_5 = {
  blocks: [
    {
      id: 'obj-phenol-reactivity',
      type: 'objective',
      data: {
        text: 'Explain the enhanced reactivity of phenol and methylbenzene (toluene) towards electrophilic aromatic substitution compared to benzene; understand directing effects (2,4- vs 3,5-) and the role of electron-donating vs electron-withdrawing groups'
      }
    },
    {
      id: 'h-phenol-bromination',
      type: 'heading',
      data: { text: 'Phenol Bromination: Reactivity Without Catalyst', level: 2 }
    },
    {
      id: 'p-phenol-1',
      type: 'paragraph',
      data: {
        text: 'Phenol (C₆H₅OH) reacts with bromine water (Br₂(aq)) immediately at room temperature without a catalyst. A white precipitate forms, which is 2,4,6-tribromophenol (three bromine atoms on the ring). This is in striking contrast to benzene, which does not react with bromine water under the same conditions and requires a Lewis acid catalyst.'
      }
    },
    {
      id: 'eq-phenol-bromination',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>5</sub>OH + 3Br<sub>2</sub> → 2,4,6−(BrO)<sub>3</sub>C<sub>6</sub>H<sub>2</sub>OH + 3HBr (white precipitate)<br />(room temp, water, no catalyst)'
      }
    },
    {
      id: 'p-phenol-2',
      type: 'paragraph',
      data: {
        text: 'The reason for this enhanced reactivity is the electron-donating effect of the hydroxyl group (−OH). Oxygen is more electronegative than carbon, but it has a lone pair that can donate electron density into the aromatic ring via resonance. This increases the electron density on the ring and makes it much more nucleophilic (more π electrons available to attack an electrophile).'
      }
    },
    {
      id: 'callout-oh-activation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Hydroxyl Group as Electron-Donating',
        text: 'The −OH group has a lone pair on oxygen that resonates into the ring. This pushes electron density onto the carbons, especially at the ortho and para positions. These positions become electron-rich and react readily with electrophiles.'
      }
    },
    {
      id: 'h-directing-effects',
      type: 'heading',
      data: { text: 'Directing Effects: Ortho/Para vs Meta', level: 2 }
    },
    {
      id: 'p-directing-1',
      type: 'paragraph',
      data: {
        text: 'The −OH group is said to be an ortho/para director. This means that incoming electrophiles preferentially attack the ortho and para positions (positions 2,4, and 6 relative to the −OH at position 1). In phenol bromination, all three bromines go into the 2,4,6 positions because these are the most electron-rich. The meta positions (3,5) are less activated.'
      }
    },
    {
      id: 'p-directing-2',
      type: 'paragraph',
      data: {
        text: 'The reason is resonance: the arenium ion intermediate is more stable when the positive charge can be delocalised onto the oxygen atom (via resonance structures). This happens at ortho and para positions but not at meta. Therefore, these positions have lower activation energies and react faster.'
      }
    },
    {
      id: 'callout-directing-mechanism',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Why Ortho/Para Directors Work',
        text: 'Arenium ion from ortho attack: positive charge can be on carbon α to O, allowing O to donate lone pair and delocalise positive charge. Arenium ion from meta attack: positive charge cannot reach O, so less resonance stabilisation. Ortho/para arenium ions are lower energy → lower activation energy → faster reaction at these positions.'
      }
    },
    {
      id: 'h-methylbenzene-reactivity',
      type: 'heading',
      data: { text: 'Methylbenzene (Toluene) Reactivity', level: 2 }
    },
    {
      id: 'p-methylbenzene-1',
      type: 'paragraph',
      data: {
        text: 'Methylbenzene (toluene, C₆H₅CH₃) is also more reactive than benzene towards electrophilic aromatic substitution. The methyl group (−CH₃) is an alkyl group, which is electron-donating through an inductive effect (electron-pushing via σ bonds). This increases electron density on the ring, making it more nucleophilic. However, the activation is weaker than with −OH because alkyl donation is weaker than resonance donation from −OH.'
      }
    },
    {
      id: 'p-methylbenzene-2',
      type: 'paragraph',
      data: {
        text: 'Like the hydroxyl group, the methyl group is an ortho/para director. Incoming electrophiles preferentially attack positions 2, 4, and 6 (ortho and para to the methyl group). The inductive donation of the methyl group is strongest at the ortho and para carbons, and resonance effects in the arenium ion further stabilise these positions.'
      }
    },
    {
      id: 'h-nitro-deactivation',
      type: 'heading',
      data: { text: 'Nitro Group: Electron-Withdrawing and Meta-Directing', level: 2 }
    },
    {
      id: 'p-nitro-1',
      type: 'paragraph',
      data: {
        text: 'The nitro group (−NO₂) is electron-withdrawing. It has a C=O double bond with oxygen (highly electronegative), which pulls electron density away from the ring. This deactivates the ring towards further electrophilic substitution. Nitrobenzene is therefore much less reactive than benzene towards EAS.'
      }
    },
    {
      id: 'p-nitro-2',
      type: 'paragraph',
      data: {
        text: 'Furthermore, the nitro group is a meta director. If substitution does occur on nitrobenzene, electrophiles attack the meta positions (positions 3,5) much more readily than ortho or para. This is because the arenium ion from meta attack avoids placing the positive charge ortho to the strongly electron-withdrawing −NO₂ group. Placing the charge ortho or para to an electron-withdrawing group is destabilising.'
      }
    },
    {
      id: 'callout-deactivating',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Deactivating Groups vs Activating Groups',
        text: 'Activating groups (−OH, −CH₃): electron-donating, increase ring electron density, ortho/para directors. Deactivating groups (−NO₂, −CN): electron-withdrawing, decrease ring electron density, meta directors. Nitrobenzene reacts much more slowly than benzene; methylbenzene reacts much faster.'
      }
    },
    {
      id: 'h-reactivity-order',
      type: 'heading',
      data: { text: 'Reactivity Order for EAS', level: 3 }
    },
    {
      id: 'p-reactivity-order',
      type: 'paragraph',
      data: {
        text: 'For electrophilic aromatic substitution, reactivity increases with increasing electron density on the ring. The approximate order is: phenol >> toluene >> benzene >> nitrobenzene. Phenol is far more reactive (no catalyst needed for bromination); nitrobenzene is far less reactive (very difficult to substitute further). Benzene is intermediate and requires a Lewis acid catalyst for most reactions.'
      }
    },
    {
      id: 'checklist-directing',
      type: 'checklist',
      data: {
        items: [
          { text: 'Phenol reacts with Br₂(aq) at room temp without catalyst', checked: false },
          { text: 'Hydroxyl group (−OH) is electron-donating and ortho/para director', checked: false },
          { text: 'Methyl group (−CH₃) is electron-donating and ortho/para director', checked: false },
          { text: 'Nitro group (−NO₂) is electron-withdrawing and meta director', checked: false },
          { text: 'Reactivity order: phenol >> toluene >> benzene >> nitrobenzene', checked: false }
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
        text: 'Understand: Electron-donating groups (−OH, −CH₃) activate the ring and direct to 2,4-positions. They increase electron density, making electrophilic attack easier.\n\nApply: Predict the major product of nitrating methylbenzene. Explain using directing effects.\n\nAnalyze: Why does phenol react with Br₂(aq) without a catalyst, while benzene requires AlBr₃?\n\nEvaluate: The −NO₂ group is deactivating and meta-directing. Explain why the order of electrophilic substitutions matters in multi-step synthesis.'
      },
      terms: []
    },
    {
      id: 'summary-phenol',
      type: 'summary',
      data: {
        text: 'Phenol is much more reactive than benzene towards electrophilic aromatic substitution because the hydroxyl group donates electron density into the ring via resonance. Phenol reacts with Br₂(aq) immediately at room temperature to form 2,4,6-tribromophenol. The −OH group is an ortho/para director: the arenium ion is more stable when the positive charge can be delocalised onto oxygen. Methylbenzene (toluene) is also more reactive than benzene but less reactive than phenol, and is also ortho/para directing. In contrast, electron-withdrawing groups like −NO₂ deactivate the ring and are meta directors. Reactivity increases with electron density: phenol >> toluene >> benzene >> nitrobenzene.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-phenol-1', prompt: 'Why does phenol react with Br₂(aq) at room temp without catalyst, unlike benzene?' },
      { id: 'cue-2', blockId: 'p-directing-1', prompt: 'What are ortho/para directing effects, and why does −OH direct to positions 2,4,6?' },
      { id: 'cue-3', blockId: 'p-methylbenzene-1', prompt: 'How does a methyl group activate the benzene ring towards EAS?' },
      { id: 'cue-4', blockId: 'p-nitro-1', prompt: 'Why is the nitro group (−NO₂) a deactivating group? How does it affect reactivity?' }
    ],
    summaryText: 'Phenol: −OH donates electrons via resonance → ring highly electron-rich → reacts with Br₂(aq) at room temp (no catalyst). Forms 2,4,6-tribromophenol. −OH is ortho/para director (arenium ion stabilised by O lone pair donation at these positions). Methylbenzene: −CH₃ donates via inductive effect → more reactive than benzene, ortho/para director. Nitrobenzene: −NO₂ withdraws electrons → less reactive than benzene, meta director. Reactivity: phenol >> toluene >> benzene >> nitrobenzene.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Phenol and methylbenzene EAS reactivity and directing effects',
      detail: 'Bromination of phenol with Br₂(aq), activation and deactivation by substituents, ortho/para vs meta directing effects, arenium ion stability',
      year: '2023',
      source: 'chemguide.co.uk — phenol and toluene EAS reactivity',
      tags: ['phenol', 'toluene', 'directing', 'activation', 'deactivation', 'aromaticity']
    }
  ]
};
