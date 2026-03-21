export const note_chemistry_5_18_6 = {
  blocks: [
    {
      id: 'obj-aryl-halides',
      type: 'objective',
      data: {
        text: 'Understand the structure and lack of reactivity of aryl halides (halogenoarenes) due to delocalisation of halogen lone pairs into the benzene ring.'
      }
    },
    {
      id: 'h-aryl-halide-intro',
      type: 'heading',
      data: { text: 'Introduction to Aryl Halides', level: 2 }
    },
    {
      id: 'p-aryl-halide-intro',
      type: 'paragraph',
      data: {
        text: 'An aryl halide (or halogenoarene) has a halogen atom attached *directly* to a benzene ring. Examples include chlorobenzene, bromobenzene, and iodobenzene. Their physical and chemical properties differ significantly from typical halogenoalkanes due to the presence of the aromatic ring.'
      }
    },
    {
      id: 'h-bonding-structure',
      type: 'heading',
      data: { text: 'Structure and Delocalisation', level: 2 }
    },
    {
      id: 'p-bonding',
      type: 'paragraph',
      data: {
        text: 'To understand the properties of chlorobenzene, one must look at the interaction between the halogen atom and the benzene ring. There is an interaction between the delocalised pi electrons in the benzene ring and one of the lone pairs on the halogen atom. This lone pair overlaps with the delocalised ring electron system.'
      }
    },
    {
      id: 'callout-bonding',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Stronger C–X Bond',
        text: 'Because the lone pair on the halogen (e.g. Cl) becomes partially delocalised with the benzene ring\'s pi system, the carbon-halogen bond takes on some **partial double-bond character**. This extra bonding makes the C–X bond stronger than the equivalent C–X bond in an alkyl halide.'
      }
    },
    { type: 'svg', id: 'svg-aryl-halide-bonding', data: { caption: 'p-orbital Overlap in Aryl Halides', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" width="100%" height="auto"><style>text{font-family:sans-serif;font-size:14px;fill:#1e293b;}.bond{stroke:#1e293b;stroke-width:2;fill:none;}.porb{fill:#3b82f6;fill-opacity:0.3;stroke:#2563eb;stroke-width:1.5;}.picloud{fill:#10b981;fill-opacity:0.3;stroke:#059669;stroke-width:1.5;}.overlap{stroke:#ef4444;stroke-width:2;stroke-dasharray:4;fill:none;}</style><g transform="translate(150, 100)"><path class="bond" d="M -40 -20 L 0 -40 L 40 -20 L 40 20 L 0 40 L -40 20 Z" /><ellipse cx="0" cy="0" rx="25" ry="10" class="picloud" /><path class="bond" d="M 0 -40 L 0 -75" /><text x="0" y="-85" text-anchor="middle" font-weight="bold" font-size="16px">Cl</text><ellipse cx="0" cy="-80" rx="6" ry="18" class="porb" transform="rotate(90, 0, -80)" /><path class="overlap" d="M -15 -80 Q -30 -60 -15 -10" /><path class="overlap" d="M 15 -80 Q 30 -60 15 -10" /></g><g transform="translate(300, 60)"><text x="0" y="0" font-weight="bold">Role of the Lone Pair</text><text x="0" y="25" font-size="12px">• A lone pair in a p-orbital on Cl overlaps</text><text x="0" y="45" font-size="12px">  with the delocalised π-system of the ring.</text><text x="0" y="65" font-size="12px">• The C—Cl bond gains partial double-bond character.</text><text x="0" y="85" font-size="12px">• The bond becomes shorter and stronger.</text><text x="0" y="105" font-size="12px">• This makes it extremely hard to break, greatly</text><text x="0" y="125" font-size="12px">  reducing nucleophilic substitution compared to</text><text x="0" y="145" font-size="12px">  haloalkanes.</text></g></svg>' } },
    {
      id: 'p-polarity',
      type: 'paragraph',
      data: {
        text: 'Chlorine is quite electronegative and normally withdraws electron density towards itself via the inductive effect. However, this is partially offset by the movement of the chlorine\'s lone-pair electrons back into the ring via delocalisation. As a result, chlorobenzene is less polar than expected.'
      }
    },
    {
      id: 'h-physical-properties',
      type: 'heading',
      data: { text: 'Physical Properties', level: 2 }
    },
    {
      id: 'list-physical',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Appearance:** Simple aryl halides like chloro-, bromo-, and iodobenzene are oily liquids.',
          '**Boiling Points:** They increase as the halogen atom gets larger (C₆H₅Cl = 132°C, C₆H₅Br = 156°C, C₆H₅I = 189°C) because the growing number of electrons strengthens the London dispersion (van der Waals) forces.',
          '**Solubility:** They are highly insoluble in water. They cannot form hydrogen bonds with water, and breaking the existing hydrogen bonds between water molecules costs more energy than is released by the weak van der Waals dispersion forces formed.'
        ]
      }
    },
    {
      id: 'h-reactions',
      type: 'heading',
      data: { text: 'Reactions of Aryl Halides', level: 2 }
    },
    {
      id: 'p-nucleophilic-substitution',
      type: 'paragraph',
      data: {
        text: 'The most important feature of aryl halides compared to alkyl halides (halogenoalkanes) is their **extreme unreactivity**. While primary and tertiary halogenoalkanes rapidly undergo nucleophilic substitution (S_N2 and S_N1) with nucleophiles like the hydroxide ion (OH⁻), simple aryl halides like chlorobenzene do not react with nucleophiles under normal laboratory conditions.'
      }
    },
    {
      id: 'callout-reactivity',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Why Nucleophilic Substitution Fails',
        text: 'Aryl halides are highly resistant to nucleophilic attack for two main reasons:\n\n1. **Bond Strength:** The delocalisation of an electron lone pair from the halogen atom into the benzene ring gives the carbon-halogen bond some partial double-bond character. This makes the C–X bond significantly stronger and more difficult to break than in a standard halogenoalkane.\n2. **Electron Repulsion:** The approaching nucleophile (like a negative hydroxide ion) is repelled by the high electron density of the delocalised pi cloud above and below the benzene ring.'
      }
    },
    {
      id: 'h-preparation',
      type: 'heading',
      data: { text: 'Preparation of Aryl Halides', level: 2 }
    },
    {
      id: 'p-prep-general',
      type: 'paragraph',
      data: {
        text: 'Chlorobenzene and bromobenzene are structurally made via **electrophilic aromatic substitution** of benzene. Benzene reacts with chlorine (Cl₂) or bromine (Br₂) at room temperature alongside a halogen carrier catalyst such as AlCl₃, AlBr₃, or iron filings (which react to form FeBr₃ _in situ_).'
      }
    },
    {
      id: 'p-prep-iodobenzene',
      type: 'paragraph',
      data: {
        text: 'Iodobenzene is generally not made by direct substitution because the reaction is less feasible. Instead, it is commonly synthesized using a **benzenediazonium** compound.'
      }
    },
    {
      id: 'callout-prep-iodo',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Making Iodobenzene',
        text: 'A cold aqueous solution of **benzenediazonium chloride** is mixed with **potassium iodide** (KI) solution. The diazonium ion reacts with the iodide ion, displacing nitrogen gas to form oily droplets of iodobenzene.\n\nEquation: C₆H₅N₂⁺ + I⁻ → C₆H₅I + N₂\nObservation: Effervescence (bubbling of N₂ gas) and the appearance of a dense, immiscible oily layer.'
      }
    },
    {
      id: 'summary-aryl-halides',
      type: 'summary',
      data: {
        text: 'Aryl halides contain a halogen atom directly bonded to a benzene ring. One of the halogen\'s lone pairs overlaps and delocalises with the ring\'s pi system, giving the C–X bond partial double-bond character and strengthening it. This delocalisation, combined with the repulsive electronegative pi cloud, makes aryl halides heavily resistant to nucleophilic substitution. Physically, they are dense oily liquids that are insoluble in water; boiling points increase down the halogen group due to stronger London dispersion forces. Chlorobenzene and bromobenzene are prepared via direct electrophilic substitution using halogen carriers as catalysts. Iodobenzene is specifically prepared by reacting ice-cold benzenediazonium chloride with potassium iodide.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Distinction: Alkylation vs Acylation",
        text: "F-C Alkylation: R-X + AlCl\u2083 \u2192 alkylbenzene (R chain attached directly to ring); prone to rearrangement. F-C Acylation: R-COCl + AlCl\u2083 \u2192 aromatic ketone (C=O attached to ring); no rearrangement (acylium resonance-stabilized). In synthesis, acylation followed by reduction is preferred to avoid rearrangement."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-bonding', prompt: 'Why is the carbon-halogen bond in chlorobenzene stronger than in chloroalkanes?' },
      { id: 'cue-2', blockId: 'callout-reactivity', prompt: 'State two reasons why aryl halides do not undergo nucleophilic substitution under normal conditions.' },
      { id: 'cue-3', blockId: 'list-physical', prompt: 'Explain the trend in boiling points for chlorobenzene, bromobenzene, and iodobenzene.' },
      { id: 'cue-4', blockId: 'callout-prep-iodo', prompt: 'Give the reagent and conditions required to convert benzenediazonium chloride into iodobenzene. Include an observation.' }
    ],
    summaryText: 'C–X bond is stronger due to halogen lone pair partially delocalising into the benzene pi system (partial double-bond character). Unreactive to nucleophiles because the C–X bond is strong and the pi cloud repels the nucleophile. Boiling points increase with halogen size due to stronger London dispersion forces. Iodobenzene is made by adding potassium iodide (KI) to benzenediazonium chloride → forms C₆H₅I and N₂ gas (effervescence occurs).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Aryl Halides Introduction',
      detail: 'Structural characteristics, lone pair delocalisation, and physical traits of halogenoarenes.',
      year: '2023',
      source: 'chemguide.co.uk — Aryl Halides Background',
      tags: ['halogenoarene', 'aryl halide', 'chlorobenzene', 'delocalisation']
    }
  ]
};