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
      id: 'callout-reactivity',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Unreactive to Nucleophiles',
        text: 'Unlike halogenoalkanes, aryl halides are **unreactive towards nucleophilic substitution** under normal conditions. The delocalisation strengthens the C–X bond, making it too difficult to break. Additionally, the electron-rich pi cloud of the benzene ring actively repels approaching nucleophiles.'
      }
    },
    {
      id: 'summary-aryl-halides',
      type: 'summary',
      data: {
        text: 'Aryl halides contain a halogen atom directly bonded to a benzene ring. One of the halogen\'s lone pairs overlaps and delocalises with the ring\'s pi system, giving the C–X bond partial double-bond character and strengthening it. This delocalisation, combined with the repulsive electronegative pi cloud, makes aryl halides heavily resistant to nucleophilic substitution. Physically, they are dense oily liquids that are insoluble in water; boiling points increase down the halogen group due to stronger London dispersion forces.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-bonding', prompt: 'Why is the carbon-halogen bond in chlorobenzene stronger than in chloroalkanes?' },
      { id: 'cue-2', blockId: 'callout-reactivity', prompt: 'State two reasons why aryl halides do not undergo nucleophilic substitution under normal conditions.' },
      { id: 'cue-3', blockId: 'list-physical', prompt: 'Explain the trend in boiling points for chlorobenzene, bromobenzene, and iodobenzene.' }
    ],
    summaryText: 'C–X bond is stronger due to halogen lone pair partially delocalising into the benzene pi system (partial double-bond character). Unreactive to nucleophiles because the C–X bond is strong and the pi cloud repels the nucleophile. Boiling points increase with halogen size due to stronger London dispersion forces.',
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