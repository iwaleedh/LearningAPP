export const note_olevel_chemistry_4_4_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/4 Electrochemistry/4-1-2-electrolysis-of-molten-compounds.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Predict and explain the products of electrolysis of molten ionic compounds.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Electrolysis of Molten Compounds', level: 2 }
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Predicting Products: Molten Compounds',
        text: 'When a <strong>pure molten</strong> ionic compound is electrolysed, only the ions from that compound are present — so there is no competition for discharge.<br/><br/><strong>At the cathode (−):</strong> the metal cation is reduced to form the metal<br/><strong>At the anode (+):</strong> the non-metal anion is oxidised to form the non-metal element'
      }
    },
    {
      id: 'tbl-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Products of electrolysis of molten compounds',
        headers: ['Compound', 'Ions present', 'Cathode product', 'Anode product'],
        rows: [
          ['Lead(II) bromide (PbBr₂)', 'Pb²⁺, Br⁻', 'Lead metal (Pb)', 'Bromine gas (Br₂)'],
          ['Sodium chloride (NaCl)', 'Na⁺, Cl⁻', 'Sodium metal (Na)', 'Chlorine gas (Cl₂)'],
          ['Aluminium oxide (Al₂O₃)', 'Al³⁺, O²⁻', 'Aluminium metal (Al)', 'Oxygen gas (O₂)'],
          ['Calcium chloride (CaCl₂)', 'Ca²⁺, Cl⁻', 'Calcium metal (Ca)', 'Chlorine gas (Cl₂)'],
          ['Copper(II) chloride (CuCl₂)', 'Cu²⁺, Cl⁻', 'Copper metal (Cu)', 'Chlorine gas (Cl₂)']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Half Equations at Each Electrode', level: 2 }
    },
    {
      id: 'call-half',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Writing Half Equations',
        text: '<strong>At the cathode (reduction):</strong><br/>Pb²⁺ + 2e⁻ → Pb<br/>Na⁺ + e⁻ → Na<br/>Al³⁺ + 3e⁻ → Al<br/><br/><strong>At the anode (oxidation):</strong><br/>2Br⁻ → Br₂ + 2e⁻<br/>2Cl⁻ → Cl₂ + 2e⁻<br/>2O²⁻ → O₂ + 4e⁻'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Electrolysis of molten PbBr₂',
        text: 'Molten lead(II) bromide (PbBr₂) is electrolysed.<br/><br/>Ions present: Pb²⁺ and Br⁻<br/><br/>Cathode: Pb²⁺ + 2e⁻ → Pb (liquid lead metal deposits)<br/>Anode: 2Br⁻ → Br₂ + 2e⁻ (brown bromine gas evolved)'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'For molten compounds, name the products clearly: at the cathode you get the metal; at the anode you get the non-metal element (as a gas if diatomic). If asked to observe: cathode — metal deposited; anode — gas bubbles. Don\'t confuse "molten" with "aqueous" — different products result!'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Molten ionic compound → cathode produces the metal; anode produces the non-metal element. Write half equations showing electron transfer: cations gain e⁻ at cathode, anions lose e⁻ at anode.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Molten compound: cathode → metal (Pb²⁺+2e⁻→Pb); anode → non-metal gas (2Cl⁻→Cl₂+2e⁻).',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'What products form at each electrode when molten lead(II) bromide is electrolysed?', answer: 'Cathode: lead metal (Pb²⁺ + 2e⁻ → Pb). Anode: bromine gas (2Br⁻ → Br₂ + 2e⁻).' },
      { id: 'cue-2', blockId: 'call-half', prompt: 'Write the half equation for the reduction of Al³⁺ at the cathode.', answer: 'Al³⁺ + 3e⁻ → Al' },
      { id: 'cue-3', blockId: 'call-half', prompt: 'Write the half equation for the oxidation of chloride ions at the anode.', answer: '2Cl⁻ → Cl₂ + 2e⁻' }
    ]
  },
  evidence: [],
  mentions: []
};
