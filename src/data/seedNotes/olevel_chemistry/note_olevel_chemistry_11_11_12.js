export const note_olevel_chemistry_11_11_12 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-3-2-addition-and-condensation-polymers.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe examples of addition and condensation polymers, write equations for their formation, and draw repeat units from monomer structures.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Addition Polymers', level: 2 }
    },
    {
      id: 'tbl-add',
      type: 'comparisonTable',
      data: {
        caption: 'Common addition polymers',
        headers: ['Monomer', 'Polymer', 'Properties and uses'],
        rows: [
          ['Ethene CH₂=CH₂', 'Poly(ethene) [polyethylene]', 'Soft, flexible; bags, bottles, wrapping'],
          ['Propene CH₂=CHCH₃', 'Poly(propene) [polypropylene]', 'Harder than poly(ethene); ropes, crates, carpets'],
          ['Chloroethene (vinyl chloride) CH₂=CHCl', 'Poly(chloroethene) [PVC]', 'Rigid or flexible (with plasticiser); pipes, electrical insulation, clothing'],
          ['Tetrafluoroethene CF₂=CF₂', 'Poly(tetrafluoroethene) [PTFE/Teflon]', 'Non-stick, chemically inert, heat-resistant; non-stick coatings, waterproof fabric']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Condensation Polymers', level: 2 }
    },
    {
      id: 'call-cond',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Nylon and Polyester',
        text: '<strong>Nylon</strong> (polyamide): formed from a diamine + diacid (or diacid chloride)<br/>• Monomers: hexane-1,6-diamine H₂N(CH₂)₆NH₂ + hexanedioic acid HOOC(CH₂)₄COOH<br/>• Linkage: <strong>–CO–NH–</strong> (amide bond/peptide-like bond)<br/>• H₂O released at each step<br/>• Uses: rope, clothing, tights, parachutes, toothbrush bristles<br/><br/><strong>Polyester</strong>: formed from a diol + diacid<br/>• Monomers: ethane-1,2-diol HO(CH₂)₂OH + benzene-1,4-dicarboxylic acid (terephthalic acid)<br/>• Linkage: <strong>–COO–</strong> (ester bond)<br/>• H₂O released at each step<br/>• Example: PET (polyethylene terephthalate) — plastic bottles, polyester clothing (Terylene)'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Drawing repeat units',
        text: 'For addition polymers:<br/>Remove the C=C double bond and add one bond at each end of the unit:<br/>nCH₂=CH₂ → [–CH₂–CH₂–]ₙ<br/>Show square brackets with subscript n and bonds extending beyond.<br/><br/>For condensation, show the repeat unit between the two bonds with the small molecule (H₂O) noted as released.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Addition polymers: poly(ethene), poly(propene), PVC, PTFE — from alkene monomers. Condensation polymers: nylon (–CO–NH– linkage, diamine+diacid), polyester (–COO– linkage, diol+diacid) — release H₂O.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Addition: poly(ethene), PVC, poly(propene), PTFE from alkene monomers. Condensation: nylon (amide bond), polyester (ester bond) — both release H₂O.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-add', prompt: 'Name the monomer for PVC and draw the repeat unit structure.', answer: 'Monomer: chloroethene (CH₂=CHCl). Repeat unit: [–CH₂–CHCl–]ₙ' },
      { id: 'cue-2', blockId: 'call-cond', prompt: 'What type of bond links monomers in nylon, and what small molecule is released during its formation?', answer: 'Amide bond (–CO–NH–). Water (H₂O) is released each time an amide bond forms between the amine and acid groups.' },
      { id: 'cue-3', blockId: 'call-cond', prompt: 'Describe the monomers needed to make a polyester and give an example of a polyester product.', answer: 'A diol (2 –OH groups) and a diacid (2 –COOH groups). Example: PET from ethane-1,2-diol and terephthalic acid, used in plastic bottles and polyester clothing (Terylene).' }
    ]
  },
  evidence: [],
  mentions: []
};
