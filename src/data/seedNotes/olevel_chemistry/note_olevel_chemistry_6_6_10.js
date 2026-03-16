export const note_olevel_chemistry_6_6_10 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-3-1-oxidation-and-reduction.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define oxidation and reduction in terms of oxygen gain/loss and electron transfer, and identify oxidising and reducing agents.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Oxidation and Reduction (Oxygen Definition)', level: 2 }
    },
    {
      id: 'call-o-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Original (Oxygen) Definitions',
        text: '<strong>Oxidation</strong> = gain of oxygen (or loss of hydrogen)<br/><strong>Reduction</strong> = loss of oxygen (or gain of hydrogen)<br/><br/>Oxidising agent = substance that gives oxygen to another → is itself reduced.<br/>Reducing agent = substance that removes oxygen → is itself oxidised.<br/><br/>Examples:<br/>• CuO + H₂ → Cu + H₂O: CuO is reduced (loses O); H₂ is oxidised (gains O)<br/>• 2Mg + O₂ → 2MgO: Mg is oxidised<br/>• C + 2CuO → 2Cu + CO₂: carbon is the reducing agent (takes O from CuO)'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Redox in Terms of Electron Transfer', level: 2 }
    },
    {
      id: 'call-e-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Electron Transfer Definitions',
        text: '<strong>Oxidation</strong> = loss of electrons<br/><strong>Reduction</strong> = gain of electrons<br/><br/>Mnemonic: <strong>OIL RIG</strong><br/>Oxidation Is Loss (of electrons); Reduction Is Gain (of electrons)<br/><br/>Examples:<br/>• Na → Na⁺ + e⁻ → sodium is <strong>oxidised</strong><br/>• Cl₂ + 2e⁻ → 2Cl⁻ → chlorine is <strong>reduced</strong><br/>• Mg + Cl₂ → MgCl₂: Mg loses 2e⁻ (oxidised); Cl gains e⁻ (reduced)'
      }
    },
    {
      id: 'tbl-agents',
      type: 'comparisonTable',
      data: {
        caption: 'Oxidising and Reducing Agents',
        headers: ['Name', 'Definition (electron)', 'Examples'],
        rows: [
          ['Oxidising agent', 'Accepts electrons (causes oxidation of another); is itself reduced', 'Cl₂, O₂, F₂, H₂O₂, conc. H₂SO₄, KMnO₄, K₂Cr₂O₇, MnO₂'],
          ['Reducing agent', 'Donates electrons (causes reduction of another); is itself oxidised', 'H₂, C (charcoal/coke), CO, metals (Na, Mg, Zn, Fe), NH₃']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Worked Identification',
        text: 'In: Fe + CuSO₄ → FeSO₄ + Cu<br/><br/>Step 1: which species changes in charge/electrons?<br/>• Fe: 0 → +2 (loses 2e⁻) → Fe is <strong>oxidised</strong>; Fe is the <strong>reducing agent</strong><br/>• Cu²⁺: +2 → 0 (gains 2e⁻) → Cu is <strong>reduced</strong>; Cu²⁺ is the <strong>oxidising agent</strong>'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Oxidation: gain of O or loss of electrons. Reduction: loss of O or gain of electrons. OIL RIG. Oxidising agent is reduced (gains e⁻); reducing agent is oxidised (loses e⁻). Redox reactions always occur together — you cannot have one without the other.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'OIL RIG: Oxidation Is Loss; Reduction Is Gain. Oxidising agent accepts electrons (gets reduced); reducing agent donates electrons (gets oxidised).',
    cues: [
      { id: 'cue-1', blockId: 'call-e-def', prompt: 'State the mnemonic OIL RIG and explain what each part means.', answer: 'OIL RIG: Oxidation Is Loss (of electrons); Reduction Is Gain (of electrons).' },
      { id: 'cue-2', blockId: 'call-o-def', prompt: 'In the reaction CuO + H₂ → Cu + H₂O, which substance is oxidised and which is reduced? Give a reason.', answer: 'H₂ is oxidised (gains oxygen to form H₂O). CuO is reduced (loses oxygen to form Cu).' },
      { id: 'cue-3', blockId: 'tbl-agents', prompt: 'State the difference between an oxidising agent and a reducing agent in terms of electron transfer.', answer: 'An oxidising agent accepts electrons (and is itself reduced). A reducing agent donates electrons (and is itself oxidised).' }
    ]
  },
  evidence: [],
  mentions: []
};
