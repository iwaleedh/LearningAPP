export const note_olevel_chemistry_9_9_8 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/9 Metals/9-3-2-extraction-of-iron-from-hematite.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the extraction of iron from haematite using the blast furnace, including the raw materials, reactions at each zone, and the role of limestone.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Blast Furnace', level: 2 }
    },
    {
      id: 'call-raw',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Raw Materials (fed in at the top)',
        text: '1. <strong>Haematite</strong> (Fe₂O₃) — the iron ore, source of iron<br/>2. <strong>Coke</strong> (impure carbon, C) — fuel and reducing agent<br/>3. <strong>Limestone</strong> (CaCO₃) — removes acidic silica impurities as slag<br/>4. <strong>Hot air</strong> (blast of air) — reacts with coke, provides oxygen<br/><br/>Products:<br/>• <strong>Molten iron</strong> — sinks to bottom and is tapped off<br/>• <strong>Molten slag</strong> (CaSiO₃) — floats above iron, tapped off separately<br/>• <strong>Waste gas</strong> (CO, CO₂, N₂) exhausts from top'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Reactions in the Blast Furnace', level: 2 }
    },
    {
      id: 'call-rxns',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Step-by-step reactions',
        text: '<strong>Step 1 — Coke burns (near bottom, hottest zone):</strong><br/>C + O₂ → CO₂<br/><br/><strong>Step 2 — CO₂ reduced to CO (above step 1):</strong><br/>CO₂ + C → 2CO<br/>(carbon monoxide is the main reducing agent)<br/><br/><strong>Step 3 — Iron ore reduced by CO:</strong><br/>Fe₂O₃ + 3CO → 2Fe + 3CO₂<br/>(iron oxide → molten iron; CO → CO₂)<br/><br/><strong>Step 4 — Limestone decomposes:</strong><br/>CaCO₃ → CaO + CO₂ (thermal decomposition)<br/><br/><strong>Step 5 — Slag forms:</strong><br/>CaO + SiO₂ → CaSiO₃ (slag)<br/>(CaO is basic; SiO₂ is acidic impurity from ore → acid-base reaction → slag floats on iron)'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Key exam points',
        text: '• CO is the <strong>reducing agent</strong>, not C directly at the iron-ore stage.<br/>• Limestone is not a fuel — its role is to <strong>remove the acidic silica (SiO₂)</strong> impurity by forming slag (CaSiO₃).<br/>• Iron produced is <strong>pig iron / cast iron</strong> (~4% carbon); it is brittle. Further refining (basic oxygen process) removes excess C to produce steel.<br/>• Slag is used in road-building and cement manufacture.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Blast furnace: haematite + coke + limestone + hot air → molten iron + slag. Key reactions: C + O₂ → CO₂; CO₂ + C → 2CO; Fe₂O₃ + 3CO → 2Fe + 3CO₂; CaCO₃ → CaO + CO₂; CaO + SiO₂ → CaSiO₃ (slag).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Blast furnace: Fe₂O₃ + 3CO → 2Fe + 3CO₂ (main reaction). Limestone removes silica as slag: CaO + SiO₂ → CaSiO₃.',
    cues: [
      { id: 'cue-1', blockId: 'call-rxns', prompt: 'Write the equation for the reduction of iron oxide in the blast furnace.', answer: 'Fe₂O₃ + 3CO → 2Fe + 3CO₂' },
      { id: 'cue-2', blockId: 'call-raw', prompt: 'What is the role of limestone in the blast furnace?', answer: 'Limestone decomposes to form CaO, which reacts with the acidic silica impurity (SiO₂) to form slag (CaSiO₃). This removes the impurity and the slag floats on top of the molten iron.' },
      { id: 'cue-3', blockId: 'call-rxns', prompt: 'How is carbon monoxide (CO) produced in the blast furnace?', answer: 'First, coke burns in the hot air blast: C + O₂ → CO₂. Then CO₂ reacts with more coke in a hotter zone: CO₂ + C → 2CO.' }
    ]
  },
  evidence: [],
  mentions: []
};
