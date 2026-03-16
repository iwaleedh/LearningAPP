export const note_olevel_chemistry_4_4_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/4 Electrochemistry/4-2-1-electroplating.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the process of electroplating and its uses.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Electroplating', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What is Electroplating?',
        text: '<strong>Electroplating</strong> is the process of coating an object with a thin layer of metal using electrolysis.<br/><br/><strong>Purpose:</strong><br/>• Decoration (gold, silver plating of jewellery)<br/>• Protection against corrosion (chromium plating of taps, bumpers)<br/>• Reduce cost (cheaper base metal coated with expensive metal)<br/>• Improve wear resistance'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Set-up for Electroplating', level: 2 }
    },
    {
      id: 'call-setup',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Electroplating Set-up',
        text: '• <strong>Cathode (−):</strong> the object to be plated (connects to negative terminal)<br/>• <strong>Anode (+):</strong> the plating metal (connects to positive terminal) — this gradually dissolves to replenish ions<br/>• <strong>Electrolyte:</strong> aqueous solution of the plating metal salt<br/><br/>Example — silver plating:<br/>Cathode = object to be plated<br/>Anode = pure silver<br/>Electrolyte = silver nitrate solution (AgNO₃)<br/><br/>Cathode: Ag⁺ + e⁻ → Ag (silver deposited on object)<br/>Anode: Ag → Ag⁺ + e⁻ (silver anode dissolves, replenishing Ag⁺)'
      }
    },
    {
      id: 'tbl-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Examples of electroplating',
        headers: ['Object / Use', 'Plating metal', 'Electrolyte', 'Reason'],
        rows: [
          ['Jewellery, cutlery', 'Silver (Ag)', 'Silver nitrate (AgNO₃)', 'Decorative; cheaper than solid silver'],
          ['Taps, car bumpers', 'Chromium (Cr)', 'Chromium salt solution', 'Corrosion-resistant and shiny'],
          ['Electronic components', 'Gold (Au)', 'Gold salt solution', 'Good conductivity, won\'t corrode'],
          ['Steel objects', 'Zinc (Zn)', 'Zinc sulfate', 'Galvanising — protects from rust']
        ]
      }
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Copper electroplating',
        text: 'A steel spoon is to be copper plated.<br/><br/>Cathode = steel spoon<br/>Anode = copper metal<br/>Electrolyte = copper(II) sulfate solution (CuSO₄)<br/><br/>At cathode: Cu²⁺ + 2e⁻ → Cu (copper deposits on spoon)<br/>At anode: Cu → Cu²⁺ + 2e⁻ (anode dissolves, [Cu²⁺] stays constant)'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'A key feature of electroplating is that the <strong>anode is made of the plating metal</strong> — it dissolves to maintain the concentration of metal ions in solution. The object to be plated is always the <strong>cathode</strong>. The concentration of the electrolyte stays roughly constant because ions removed at the cathode are replaced from the anode.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Electroplating: object = cathode; plating metal = anode; salt of plating metal = electrolyte. Metal deposits on cathode; anode dissolves. Used for decoration, corrosion protection, reducing cost.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Electroplating: object at cathode; plating metal at anode; salt solution as electrolyte. Metal deposits at cathode, anode dissolves.',
    cues: [
      { id: 'cue-1', blockId: 'call-setup', prompt: 'Describe the set-up for electroplating an object with silver.', answer: 'Object (to be plated) = cathode (−). Pure silver = anode (+). Silver nitrate solution = electrolyte. Ag⁺ + e⁻ → Ag at cathode; Ag → Ag⁺ + e⁻ at anode.' },
      { id: 'cue-2', blockId: 'call-setup', prompt: 'Why does the concentration of the electrolyte stay roughly constant during electroplating?', answer: 'Because the anode (made of the plating metal) dissolves at the same rate as metal is deposited at the cathode, replenishing the metal ions in solution.' },
      { id: 'cue-3', blockId: 'tbl-examples', prompt: 'Give two reasons why objects are electroplated.', answer: 'Decoration (e.g. silver plating jewellery). Protection against corrosion (e.g. chromium plating taps).' }
    ]
  },
  evidence: [],
  mentions: []
};
