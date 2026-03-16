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
      id: 'svg-hydration',
      type: 'svg',
      data: {
        caption: 'Addition of steam (hydration) to ethene to form ethanol.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200">
    <defs>
        <style>
            .bond { stroke: var(--color-text); stroke-width: 2; }
            .double-bond { stroke: var(--color-text); stroke-width: 2; }
            .atom-c { font-family: var(--font-sans); font-size: 20px; fill: var(--color-text); text-anchor: middle; dominant-baseline: middle; }
            .atom-h { font-family: var(--font-sans); font-size: 20px; fill: #7f8c8d; text-anchor: middle; dominant-baseline: middle; font-weight: bold; }
            .atom-o { font-family: var(--font-sans); font-size: 20px; fill: #e74c3c; text-anchor: middle; dominant-baseline: middle; font-weight: bold; }
            .operator { font-family: var(--font-sans); font-size: 24px; font-weight: bold; fill: var(--color-text); text-anchor: middle; dominant-baseline: middle; }
            .cond-text { font-family: var(--font-sans); font-size: 13px; font-weight: bold; fill: #2980b9; text-anchor: middle; }
        </style>
    </defs>

    <!-- Ethene -->
    <g transform="translate(100, 100)">
        <text x="-25" y="0" class="atom-c">C</text>
        <text x="25" y="0" class="atom-c">C</text>
        
        <line x1="-12" y1="-4" x2="12" y2="-4" class="double-bond"/>
        <line x1="-12" y1="4" x2="12" y2="4" class="double-bond"/>
        
        <text x="-50" y="-30" class="atom-h">H</text>
        <text x="-50" y="30" class="atom-h">H</text>
        <text x="50" y="-30" class="atom-h">H</text>
        <text x="50" y="30" class="atom-h">H</text>
        
        <line x1="-32" y1="-10" x2="-42" y2="-20" class="bond"/>
        <line x1="-32" y1="10" x2="-42" y2="20" class="bond"/>
        <line x1="32" y1="-10" x2="42" y2="-20" class="bond"/>
        <line x1="32" y1="10" x2="42" y2="20" class="bond"/>
        
        <text y="70" class="cond-text" fill="var(--color-text)">Ethene</text>
    </g>

    <text x="190" y="100" class="operator">+</text>

    <!-- Steam (H-OH) -->
    <g transform="translate(250, 100)">
        <text x="-25" y="0" class="atom-h">H</text>
        <text x="10" y="0" class="atom-o">O</text>
        <text x="35" y="0" class="atom-h">H</text>
        <line x1="-10" y1="0" x2="-3" y2="0" class="bond"/>
        <line x1="22" y1="0" x2="25" y2="0" class="bond"/>
        <text x="5" y="70" class="cond-text" fill="var(--color-text)">Steam</text>
    </g>

    <!-- Arrow -->
    <g transform="translate(330, 100)">
        <line x1="0" y1="0" x2="60" y2="0" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow)"/>
        <polygon points="60,-5 60,5 70,0" fill="var(--color-text)"/>
        <text x="35" y="-30" class="cond-text">300°C, 60 atm</text>
        <text x="35" y="-12" class="cond-text">H₃PO₄ cat.</text>
    </g>

    <!-- Ethanol -->
    <g transform="translate(480, 100)">
        <text x="-25" y="0" class="atom-c">C</text>
        <text x="25" y="0" class="atom-c">C</text>
        
        <line x1="-12" y1="0" x2="12" y2="0" class="bond"/>
        
        <!-- H atoms left C -->
        <text x="-50" y="-30" class="atom-h">H</text>
        <text x="-50" y="30" class="atom-h">H</text>
        <text x="-25" y="40" class="atom-h">H</text>
        <line x1="-32" y1="-10" x2="-42" y2="-20" class="bond"/>
        <line x1="-32" y1="10" x2="-42" y2="20" class="bond"/>
        <line x1="-25" y1="15" x2="-25" y2="25" class="bond"/>
        
        <!-- H atoms right C -->
        <text x="50" y="-30" class="atom-h">H</text>
        <text x="50" y="30" class="atom-h">H</text>
        <line x1="32" y1="-10" x2="42" y2="-20" class="bond"/>
        <line x1="32" y1="10" x2="42" y2="20" class="bond"/>

        <!-- OH group bottom right -->
        <text x="25" y="40" class="atom-o">O</text>
        <text x="25" y="70" class="atom-h">H</text>
        <line x1="25" y1="15" x2="25" y2="25" class="bond"/>
        <line x1="25" y1="45" x2="25" y2="55" class="bond"/>

        <text y="100" class="cond-text" fill="var(--color-text)">Ethanol</text>
    </g>
</svg>`
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
