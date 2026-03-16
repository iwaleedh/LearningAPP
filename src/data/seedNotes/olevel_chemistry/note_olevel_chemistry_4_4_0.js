export const note_olevel_chemistry_4_4_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/4 Electrochemistry/4-1-1-electrolysis-principles.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe electrolysis as the decomposition of an ionic compound by passing electricity through it when molten or in aqueous solution.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Electrolysis — Key Terms', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definitions',
        text: '<strong>Electrolysis:</strong> decomposition of an ionic compound (electrolyte) by passing direct current (DC) through it when molten or in aqueous solution<br/><br/><strong>Electrolyte:</strong> ionic compound that conducts electricity when molten or dissolved in water<br/><br/><strong>Electrode:</strong> conductor through which electricity enters/leaves the electrolyte<br/><strong>• Anode:</strong> positive electrode (+) — anions are attracted here; oxidation occurs<br/><strong>• Cathode:</strong> negative electrode (−) — cations are attracted here; reduction occurs'
      }
    },
    {
      id: 'call-mnemonic',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Mnemonic: OIL RIG at the electrodes',
        text: '<strong>Oxidation Is Loss (of electrons) → occurs at Anode</strong><br/><strong>Reduction Is Gain (of electrons) → occurs at Cathode</strong><br/><br/>Anions (−) → attracted to Anode (+) → lose electrons (oxidised)<br/>Cations (+) → attracted to Cathode (−) → gain electrons (reduced)<br/><br/>Memory: <strong>AN OX, RED CAT</strong> (Anode Oxidation, Reduction Cathode)'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'How Electrolysis Works', level: 2 }
    },
    {
      id: 'call-how',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Electrolysis Process',
        text: '1. Ions are free to move when compound is <strong>molten</strong> or <strong>dissolved</strong><br/>2. DC current applied — anode (+) and cathode (−) connected to battery<br/>3. <strong>Cations</strong> (+ ions) migrate to the <strong>cathode</strong> (−), gain electrons → reduced<br/>4. <strong>Anions</strong> (− ions) migrate to the <strong>anode</strong> (+), lose electrons → oxidised<br/><br/>Products are deposited at or given off at the electrodes.'
      }
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of electrode processes',
        headers: ['Electrode', 'Charge', 'Ion attracted', 'Process', 'Reaction type'],
        rows: [
          ['Cathode', 'Negative (−)', 'Cations (+)', 'Gain electrons', 'Reduction'],
          ['Anode', 'Positive (+)', 'Anions (−)', 'Lose electrons', 'Oxidation']
        ]
      }
    },
    {
      id: 'call-conditions',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Conditions Required for Electrolysis',
        text: 'The electrolyte must be in a state where ions can move freely:<br/>• <strong>Molten</strong> ionic compound (solid → heated until liquid)<br/>• <strong>Aqueous solution</strong> (dissolved in water)<br/><br/><strong>Solid ionic compounds CANNOT be electrolysed</strong> — ions are fixed in the lattice and cannot move.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Electrolysis uses DC to decompose an electrolyte (molten or aqueous). Cations → cathode (gain e⁻, reduced). Anions → anode (lose e⁻, oxidised). AN OX, RED CAT.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Electrolysis decomposes ionic compounds with DC. Cathode: cations gain electrons (reduction). Anode: anions lose electrons (oxidation). AN OX, RED CAT.',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'Define electrolysis.', answer: 'Decomposition of an ionic compound (electrolyte) by passing direct current (DC) through it when molten or in aqueous solution.' },
      { id: 'cue-2', blockId: 'call-def', prompt: 'What is an electrolyte?', answer: 'An ionic compound that conducts electricity when molten or dissolved in water (because it has free-moving ions).' },
      { id: 'cue-3', blockId: 'tbl-compare', prompt: 'What process occurs at the cathode and anode during electrolysis?', answer: 'Cathode (−): cations gain electrons — reduction. Anode (+): anions lose electrons — oxidation. AN OX RED CAT.' },
      { id: 'cue-4', blockId: 'call-conditions', prompt: 'Why can\'t a solid ionic compound be electrolysed?', answer: 'In the solid state, ions are fixed in the lattice and cannot move — so they cannot carry charge to the electrodes.' }
    ]
  },
  evidence: [],
  mentions: []
};
