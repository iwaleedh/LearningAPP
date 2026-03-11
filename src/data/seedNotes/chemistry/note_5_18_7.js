export const note_chemistry_5_18_7 = {
  blocks: [
    {
      id: 'obj-phenol-intro',
      type: 'objective',
      data: {
        text: 'Understand the structure of phenol, including the delocalisation of an oxygen lone pair into the benzene ring, and describe its physical properties (melting point, boiling point, and solubility).'
      }
    },
    {
      id: 'h-phenol-structure',
      type: 'heading',
      data: { text: 'Structure of Phenol', level: 2 }
    },
    {
      id: 'p-phenol-intro',
      type: 'paragraph',
      data: {
        text: 'Phenol (C₆H₅OH) is the simplest member of the hydroxyarenes, a family of compounds where an –OH (hydroxyl) group is attached directly to a benzene ring. To understand phenol\'s unique properties compared to typical alcohols, one must look at the bonding interaction between the oxygen atom and the aromatic ring.'
      }
    },
    {
      id: 'callout-lone-pair',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Delocalisation of the Oxygen Lone Pair',
        text: 'The oxygen atom in the –OH group has two lone pairs of electrons. In phenol, one of these lone pairs overlaps with the delocalised pi (π) ring electron system of the benzene ring. This donation of electron density into the ring has two major effects:\n\n1. **Increased Ring Reactivity:** The electron density around the ring increases, making it much more susceptible to electrophilic attack than pure benzene.\n2. **Increased Acidity:** The withdrawal of some electron density away from the oxygen weakens the O–H bond, making the hydrogen significantly more acidic than in a normal alcohol.'
      }
    },
    {
      id: 'h-physical-properties',
      type: 'heading',
      data: { text: 'Physical Properties of Phenol', level: 2 }
    },
    {
      id: 'p-phenol-appearance',
      type: 'paragraph',
      data: {
        text: 'Pure phenol is a white crystalline solid at room temperature that smells strongly of disinfectant (its old name was carbolic acid). It is highly corrosive and causes immediate white blistering upon contact with skin. It is frequently found as slightly wet or pinkish-discoloured crystals due to oxidation in air.'
      }
    },
    {
      id: 'h-mp-bp',
      type: 'heading',
      data: { text: 'Melting and Boiling Points', level: 3 }
    },
    {
      id: 'p-mp-bp-comparison',
      type: 'paragraph',
      data: {
        text: 'To understand its melting and boiling points, phenol (C₆H₅OH) is often compared with methylbenzene (toluene, C₆H₅CH₃). Both molecules have a similar shape and identical number of electrons, meaning their van der Waals (London dispersion) forces are nearly identical. However, phenol has much higher melting and boiling points.'
      }
    },
    {
      id: 'table-phenol-mp',
      type: 'comparisonTable',
      data: {
        caption: 'Boiling and Melting Point Comparison',
        headers: ['Compound', 'Melting Point (°C)', 'Boiling Point (°C)'],
        rows: [
          ['Phenol (C₆H₅OH)', '40 – 43', '182'],
          ['Methylbenzene (C₆H₅CH₃)', '−95', '111']
        ]
      }
    },
    {
      id: 'callout-hydrogen-bonding',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Hydrogen Bonding in Phenol',
        text: 'The significantly higher melting and boiling points of phenol compared to methylbenzene are due almost entirely to **hydrogen bonding**. The highly electronegative oxygen atom creates a permanent dipole, and intermolecular hydrogen bonds can form between a lone pair on the oxygen of one phenol molecule and the slightly positive hydrogen atom of a neighboring molecule\'s –OH group.'
      }
    },
    {
      id: 'h-solubility',
      type: 'heading',
      data: { text: 'Solubility in Water', level: 3 }
    },
    {
      id: 'p-solubility',
      type: 'paragraph',
      data: {
        text: 'Phenol is moderately soluble in water (about 8 g per 100 g of water) because it can form hydrogen bonds with water molecules. Most of the overall molecule is a large, non-polar hydrophobic benzene ring, which disrupts the hydrogen bonding network of water. If more phenol is added than the water can dissolve, the mixture separates into two liquid layers: a top layer consisting of an aqueous phenol solution, and a bottom layer consisting of water dissolved in liquid phenol.'
      }
    },
    {
      id: 'summary-phenol-bg',
      type: 'summary',
      data: {
        text: 'Phenol (C₆H₅OH) features a hydroxyl group directly attached to a benzene ring. One of the oxygen\'s lone pairs overlaps and delocalises into the ring\'s π system, making the ring more reactive to electrophiles and the –OH hydrogen more acidic. Physically, it is a corrosive, white crystalline solid with higher melting and boiling points than similar-sized arenes (like methylbenzene) due to extensive intermolecular hydrogen bonding. It is moderately soluble in water as it can form hydrogen bonds with water molecules.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-lone-pair',
        prompt: 'Describe how the lone pair on the oxygen atom of phenol interacts with the benzene ring and state one effect this has on the ring\'s reactivity.'
      },
      {
        id: 'cue-2',
        blockId: 'callout-hydrogen-bonding',
        prompt: 'Why does phenol have a significantly higher boiling point than methylbenzene (toluene), given they have a similar number of electrons?'
      },
      {
        id: 'cue-3',
        blockId: 'p-solubility',
        prompt: 'Explain why phenol is moderately soluble in water but will form two distinct liquid layers if too much is added.'
      }
    ],
    summaryText: 'The oxygen lone pair delocalises into the benzene π ring system, increasing electron density and making the ring more reactive to electrophiles. Phenol has a much higher boiling point than methylbenzene because its –OH group allows for strong intermolecular hydrogen bonding. It is moderately soluble because it forms H-bonds with water, but the large hydrophobic benzene ring limits solubility, leading to layer separation if saturated.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Structure and Properties of Phenol',
      detail: 'Details on the delocalisation of an oxygen lone pair into the ring, higher-than-expected melting/boiling points due to H-bonding, and its limited aqueous solubility.',
      year: '2023',
      source: 'chemguide.co.uk — Introducing Phenol',
      tags: ['phenol', 'hydroxyarene', 'delocalisation', 'hydrogen bonding']
    }
  ]
};
