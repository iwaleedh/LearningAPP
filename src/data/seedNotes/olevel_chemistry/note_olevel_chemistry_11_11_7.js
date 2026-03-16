export const note_olevel_chemistry_11_11_7 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-2-4-addition-reactions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe addition reactions of alkenes with hydrogen, bromine/hydrogen bromide, and steam and write balanced equations for these reactions.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Addition Reactions of Alkenes', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Addition Reactions',
        text: 'In an <strong>addition reaction</strong>, atoms add across the C=C double bond — the double bond opens to form a single bond, and two new bonds form to the added atoms.<br/><br/>General shape:<br/>C=C + XY → C(X)–C(Y)<br/><br/>Only ONE product is formed (no other product); this distinguishes addition from substitution (which produces HX byproduct).'
      }
    },
    {
      id: 'tbl-add',
      type: 'comparisonTable',
      data: {
        caption: 'Addition reactions of ethene',
        headers: ['Reagent', 'Conditions', 'Product', 'Equation'],
        rows: [
          ['H₂ (hydrogen)', 'Ni catalyst, ~150–200°C (hydrogenation)', 'Ethane (CH₃CH₃)', 'CH₂=CH₂ + H₂ → CH₃CH₃'],
          ['Br₂ (bromine)', 'Bromine water or bromine in hexane, room temperature', '1,2-Dibromoethane (CH₂BrCH₂Br)', 'CH₂=CH₂ + Br₂ → CH₂BrCH₂Br'],
          ['HBr (hydrogen bromide)', 'Room temperature', 'Bromoethane (CH₃CH₂Br)', 'CH₂=CH₂ + HBr → CH₃CH₂Br'],
          ['H₂O (steam)', 'H₃PO₄ catalyst adsorbed on solid silica, 300°C, 60 atm (hydration)', 'Ethanol (CH₃CH₂OH)', 'CH₂=CH₂ + H₂O → CH₃CH₂OH']
        ]
      }
    },
    {
      id: 'call-hydration',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Hydration — Industrial Production of Ethanol',
        text: '<strong>Equation:</strong> CH₂=CH₂ + H₂O → CH₃CH₂OH<br/><br/><strong>Conditions:</strong> 300°C, ~60 atm, H₃PO₄ catalyst on silica<br/><br/><strong>Source of ethene:</strong> cracking of crude oil fractions (petrochemical route)<br/><br/><strong>This is a continuous process</strong> — raw materials are fed in and products removed continuously. The ethene from crude oil is a non-renewable resource.<br/><br/>Compare with fermentation — also makes ethanol but uses renewable glucose; however, gives a dilute (~15%) solution requiring distillation to concentrate.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Addition reactions open the C=C double bond. With H₂ (Ni catalyst) → alkane. With Br₂ → dibromoalkane. With HBr → bromoalkane. With H₂O (steam, H₃PO₄, 300°C) → alcohol. Hydration of ethene = industrial route to ethanol.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'alkene + H₂ → alkane (Ni). + Br₂ → dibromoalkane. + HBr → bromoalkane. + H₂O (steam, 300°C, H₃PO₄) → alcohol.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-add', prompt: 'Write the equation and conditions for hydrogenation of ethene.', answer: 'CH₂=CH₂ + H₂ → CH₃CH₃ (Ni catalyst, ~150–200°C). The product is ethane.' },
      { id: 'cue-2', blockId: 'call-hydration', prompt: 'Describe the industrial production of ethanol from ethene including conditions.', answer: 'Ethene reacts with steam: CH₂=CH₂ + H₂O → CH₃CH₂OH. Conditions: H₃PO₄ catalyst on silica, 300°C, ~60 atm. This is known as hydration.' },
      { id: 'cue-3', blockId: 'call-def', prompt: 'What is an addition reaction? How does it differ from a substitution reaction?', answer: 'In addition reactions, atoms add across a C=C double bond → only one product formed. In substitution reactions, one atom or group replaces another → two products formed (the substituted molecule and the displaced group, e.g. HCl).' }
    ]
  },
  evidence: [],
  mentions: []
};
