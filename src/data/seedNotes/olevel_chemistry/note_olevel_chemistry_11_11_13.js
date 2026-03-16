export const note_olevel_chemistry_11_11_13 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-3-3-plastics-and-their-disposal.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe thermosoftening and thermosetting plastics, problems with non-biodegradable plastics, and methods of disposal including recycling.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Types of Plastic', level: 2 }
    },
    {
      id: 'tbl-types',
      type: 'comparisonTable',
      data: {
        caption: 'Thermosoftening (thermoplastics) vs thermosetting plastics',
        headers: ['Property', 'Thermosoftening (thermoplastics)', 'Thermosetting'],
        rows: [
          ['Behaviour on heating', 'Soften and can be reshaped; harden on cooling', 'Do NOT soften — char/decompose on heating'],
          ['Structure', 'Long polymer chains; weak intermolecular forces between chains', 'Chains cross-linked by strong covalent bonds in 3D network'],
          ['Recyclable?', 'Yes — can be melted and remoulded', 'No — cannot be remoulded'],
          ['Examples', 'Poly(ethene), PVC, poly(propene)', 'Bakelite, melamine, epoxy resin'],
          ['Uses', 'Bags, bottles, pipes, clothing', 'Electrical fittings, kitchen worktops, adhesives']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Disposal of Plastics', level: 2 }
    },
    {
      id: 'call-probs',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Problems with Non-biodegradable Plastics',
        text: 'Most plastics are <strong>non-biodegradable</strong> — microorganisms cannot break down the long polymer chains, so they persist in the environment for hundreds of years.<br/><br/><strong>Environmental impacts:</strong><br/>• Accumulate in landfill<br/>• Plastic litter in oceans harms marine life (ingestion, entanglement)<br/>• Microplastics enter food chains<br/>• Release toxic additives<br/>• Unsightly pollution'
      }
    },
    {
      id: 'tbl-disposal',
      type: 'comparisonTable',
      data: {
        caption: 'Methods of plastic disposal',
        headers: ['Method', 'Advantages', 'Disadvantages'],
        rows: [
          ['Landfill', 'Simple; immediate removal of waste', 'Takes up land; plastics persist; leaching of chemicals'],
          ['Incineration (burning)', 'Reduces volume; can generate electricity', 'Releases CO₂, water, and potentially toxic gases (HCl from PVC); air pollution'],
          ['Recycling', 'Reduces raw material use; reduces landfill; conserves resources', 'Sorting plastics is labour-intensive; some plastics not easily recycled; thermosetting cannot be recycled'],
          ['Biodegradable plastics', 'Break down naturally; less persistent', 'Currently expensive; some require industrial composting conditions']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Thermoplastics: soften on heating (recyclable), chain polymers. Thermosetting: hardened by cross-links, cannot be remoulded. Plastics are mostly non-biodegradable → pollution problems. Disposal: landfill, incineration (CO₂/toxic gas), recycling (thermoplastics only).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Thermoplastics: soften/remould (recyclable). Thermosetting: cross-linked, cannot remould. Plastics non-biodegradable → environmental problem.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-types', prompt: 'Explain why thermosetting plastics cannot be recycled by melting.', answer: 'Thermosetting plastics have strong covalent cross-links between chains forming a 3D network. Heating does not break these bonds, so the plastic does not soften — it chars or decomposes instead.' },
      { id: 'cue-2', blockId: 'call-probs', prompt: 'Why are non-biodegradable plastics a major environmental problem?', answer: 'Microorganisms cannot break down the large polymer chains. Plastics persist in landfill and oceans for hundreds of years, causing physical harm to wildlife (ingestion, entanglement) and entering food chains as microplastics.' },
      { id: 'cue-3', blockId: 'tbl-disposal', prompt: 'State one advantage and one disadvantage of incinerating plastic waste.', answer: 'Advantage: reduces volume of waste; can generate electricity. Disadvantage: releases CO₂ (contributes to greenhouse effect) and potentially toxic gases such as HCl from burning PVC.' }
    ]
  },
  evidence: [],
  mentions: []
};
