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
      id: 'svg-electroplating',
      type: 'svg',
      data: {
        caption: 'General setup for electroplating. The object to be plated is the cathode, the pure plating metal is the anode, and the electrolyte is a solution containing ions of the plating metal.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250">
    <defs>
        <style>
            .beaker { fill: none; stroke: var(--color-text); stroke-width: 3; stroke-linejoin: round; }
            .solution { fill: rgba(99, 102, 241, 0.2); }
            .anode { fill: #e67e22; stroke: var(--color-text); stroke-width: 2; }
            .cathode { fill: #95a5a6; stroke: var(--color-text); stroke-width: 2; }
            .wire { stroke: var(--color-text); stroke-width: 2; fill: none; }
            .label { font-family: var(--font-sans); font-size: 13px; fill: var(--color-text); }
            .label-bold { font-family: var(--font-sans); font-size: 13px; font-weight: bold; fill: var(--color-text); }
        </style>
    </defs>
    <!-- Beaker and Solution -->
    <path d="M 120 180 L 120 120 L 280 120 L 280 180" class="beaker" transform="translate(0, 40)"/>
    <path d="M 120 140 L 120 220 L 280 220 L 280 140 Z" class="solution"/>
    
    <!-- Electrodes -->
    <rect x="140" y="100" width="20" height="100" class="anode"/>
    <!-- Spoon shape for cathode -->
    <path d="M 235 100 C 235 130 235 150 230 160 C 215 175 225 195 240 195 C 255 195 265 175 250 160 C 245 150 245 130 245 100 Z" class="cathode"/>
    
    <text x="110" y="150" class="label-bold" text-anchor="end">Anode (+)</text>
    <text x="110" y="170" class="label" text-anchor="end">(plating metal)</text>
    
    <text x="290" y="150" class="label-bold" text-anchor="start">Cathode (−)</text>
    <text x="290" y="170" class="label" text-anchor="start">(object to plate)</text>
    
    <text x="200" y="210" class="label" text-anchor="middle">Electrolyte Solution</text>
    
    <!-- Wiring and Battery -->
    <line x1="150" y1="100" x2="150" y2="50" class="wire"/>
    <line x1="150" y1="50" x2="185" y2="50" class="wire"/>
    
    <line x1="240" y1="100" x2="240" y2="50" class="wire"/>
    <line x1="240" y1="50" x2="215" y2="50" class="wire"/>
    
    <!-- Battery -->
    <line x1="185" y1="35" x2="185" y2="65" class="wire" stroke-width="4"/>
    <line x1="195" y1="42" x2="195" y2="58" class="wire" stroke-width="2"/>
    <line x1="195" y1="50" x2="205" y2="50" class="wire"/>
    <line x1="205" y1="35" x2="205" y2="65" class="wire" stroke-width="4"/>
    <line x1="215" y1="42" x2="215" y2="58" class="wire" stroke-width="2"/>
    
    <text x="175" y="45" class="label-bold">+</text>
    <text x="225" y="45" class="label-bold">−</text>
</svg>`
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
