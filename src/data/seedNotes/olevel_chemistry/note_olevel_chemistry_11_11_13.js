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
      id: 'svg-thermo-vs-thermoset',
      type: 'svg',
      data: {
        caption: 'Structure of thermosoftening plastics (left) compared to thermosetting plastics with cross-links (right).',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 250">
    <defs>
        <style>
            .chain { fill: none; stroke: var(--color-primary); stroke-width: 8; stroke-linecap: round; }
            .chain-shadow { fill: none; stroke: var(--color-primary-dark); stroke-width: 10; stroke-linecap: round; opacity: 0.3; }
            .imf { stroke: var(--color-text); stroke-width: 2; stroke-dasharray: 5,5; }
            .crosslink { stroke: #e74c3c; stroke-width: 6; stroke-linecap: round; }
            .label { font-family: var(--font-sans); font-size: 16px; fill: var(--color-text); font-weight: bold; text-anchor: middle; }
            .desc { font-family: var(--font-sans); font-size: 12px; fill: var(--color-text-secondary); text-anchor: middle; }
        </style>
    </defs>

    <!-- Thermosoftening plastic -->
    <g transform="translate(150, 100)">
        <text x="0" y="-80" class="label">Thermosoftening Plastic</text>
        <text x="0" y="-60" class="desc">(Thermoplastic)</text>
        
        <!-- Polymer chain 1 -->
        <path d="M-80,-30 Q-40,-40 0,-30 T80,-30" class="chain-shadow"/>
        <path d="M-80,-30 Q-40,-40 0,-30 T80,-30" class="chain"/>
        
        <!-- Polymer chain 2 -->
        <path d="M-80,0 Q-40,10 0,0 T80,0" class="chain-shadow"/>
        <path d="M-80,0 Q-40,10 0,0 T80,0" class="chain"/>

        <!-- Polymer chain 3 -->
        <path d="M-80,30 Q-40,20 0,30 T80,30" class="chain-shadow"/>
        <path d="M-80,30 Q-40,20 0,30 T80,30" class="chain"/>

        <!-- Weak intermolecular forces -->
        <line x1="-50" y1="-32" x2="-50" y2="2" class="imf"/>
        <line x1="20" y1="-28" x2="20" y2="-2" class="imf"/>
        <line x1="-20" y1="5" x2="-20" y2="25" class="imf"/>
        <line x1="50" y1="-5" x2="50" y2="25" class="imf"/>

        <path d="M100,0 L120,0" stroke="var(--color-text-secondary)" stroke-width="1.5" marker-end="url(#arrow)"/>
        <text x="130" y="0" class="desc" text-anchor="start">Weak</text>
        <text x="130" y="15" class="desc" text-anchor="start">forces</text>
        <text x="130" y="30" class="desc" text-anchor="start">(can slide)</text>
    </g>

    <!-- Thermosetting plastic -->
    <g transform="translate(450, 100)">
        <text x="0" y="-80" class="label">Thermosetting Plastic</text>
        
        <!-- Polymer chain 1 -->
        <path d="M-80,-30 Q-40,-20 0,-30 T80,-30" class="chain-shadow"/>
        <path d="M-80,-30 Q-40,-20 0,-30 T80,-30" class="chain"/>
        
        <!-- Polymer chain 2 -->
        <path d="M-80,0 Q-40,0 0,0 T80,0" class="chain-shadow"/>
        <path d="M-80,0 Q-40,0 0,0 T80,0" class="chain"/>

        <!-- Polymer chain 3 -->
        <path d="M-80,30 Q-40,40 0,30 T80,30" class="chain-shadow"/>
        <path d="M-80,30 Q-40,40 0,30 T80,30" class="chain"/>

        <!-- Strong covalent cross-links -->
        <line x1="-50" y1="-28" x2="-50" y2="-1" class="crosslink"/>
        <line x1="-10" y1="-29" x2="-10" y2="0" class="crosslink"/>
        <line x1="30" y1="-30" x2="30" y2="-1" class="crosslink"/>
        <line x1="60" y1="-30" x2="60" y2="2" class="crosslink"/>

        <line x1="-60" y1="1" x2="-60" y2="33" class="crosslink"/>
        <line x1="-20" y1="0" x2="-20" y2="32" class="crosslink"/>
        <line x1="20" y1="0" x2="20" y2="31" class="crosslink"/>
        <line x1="70" y1="-1" x2="70" y2="30" class="crosslink"/>

        <path d="M100,0 L120,0" stroke="var(--color-text-secondary)" stroke-width="1.5" marker-end="url(#arrow)"/>
        <text x="130" y="0" class="desc" text-anchor="start" fill="#e74c3c" font-weight="bold">Strong covalent</text>
        <text x="130" y="15" class="desc" text-anchor="start" fill="#e74c3c" font-weight="bold">cross-links</text>
        <text x="130" y="30" class="desc" text-anchor="start">(rigid 3D network)</text>
    </g>

    <!-- Heating Arrow -->
    <g transform="translate(150, 180)">
        <path d="M-30,0 L30,0" stroke="#e67e22" stroke-width="3" marker-end="url(#arrow-heat)"/>
        <text x="0" y="-10" fill="#e67e22" font-family="var(--font-sans)" font-size="12px" text-anchor="middle" font-weight="bold">HEAT</text>
        <text x="60" y="4" class="desc" fill="var(--color-text)" font-weight="bold">Melts / Softens</text>
    </g>
    
    <g transform="translate(450, 180)">
        <path d="M-30,0 L30,0" stroke="#e67e22" stroke-width="3" marker-end="url(#arrow-heat)"/>
        <text x="0" y="-10" fill="#e67e22" font-family="var(--font-sans)" font-size="12px" text-anchor="middle" font-weight="bold">HEAT</text>
        <text x="60" y="4" class="desc" fill="var(--color-text)" font-weight="bold">Chars (Does NOT melt)</text>
    </g>
</svg>`
      }
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
