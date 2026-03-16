export const note_olevel_chemistry_11_11_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-2-3-alkenes.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the structure and properties of alkenes, their manufacture by cracking, and the bromine water test for the C=C double bond.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Alkenes', level: 2 }
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Facts about Alkenes',
        text: '<strong>General formula:</strong> CₙH₂ₙ (2H fewer than the corresponding alkane)<br/><strong>Bonding:</strong> Contains one C=C double bond — <strong>unsaturated</strong><br/><br/><strong>First three members:</strong><br/>• Ethene C₂H₄: CH₂=CH₂<br/>• Propene C₃H₆: CH₃–CH=CH₂<br/>• Butene C₄H₈: two isomers (but-1-ene and but-2-ene)<br/><br/><strong>Source:</strong> Produced industrially by <strong>cracking</strong> of alkanes from crude oil.<br/><br/><strong>Reactivity:</strong> More reactive than alkanes due to the C=C double bond. Undergo addition reactions where atoms add across the double bond.'
      }
    },
    {
      id: 'call-br',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Bromine Water Test',
        text: '<strong>Identifying alkenes:</strong><br/>Add bromine water (orange/brown) to the substance.<br/><br/>• With an alkene: bromine water is <strong>decolourised</strong> (turns colourless) — addition reaction:<br/>CH₂=CH₂ + Br₂ → CH₂BrCH₂Br (1,2-dibromoethane)<br/><br/>• With an alkane: bromine water remains orange/brown — no reaction (alkanes are saturated).'
      }
    },
    {
      id: 'svg-bromine-addition',
      type: 'svg',
      data: {
        caption: 'Addition reaction of ethene with bromine water, forming 1,2-dibromoethane (colourless).',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 220">
    <defs>
        <style>
            .bond { stroke: var(--color-text); stroke-width: 2; }
            .double-bond { stroke: var(--color-text); stroke-width: 2; }
            .atom-c { font-family: var(--font-sans); font-size: 20px; fill: var(--color-text); text-anchor: middle; dominant-baseline: middle; }
            .atom-h { font-family: var(--font-sans); font-size: 20px; fill: #7f8c8d; text-anchor: middle; dominant-baseline: middle; font-weight: bold; }
            .atom-br { font-family: var(--font-sans); font-size: 20px; fill: #d35400; text-anchor: middle; dominant-baseline: middle; font-weight: bold; }
            .operator { font-family: var(--font-sans); font-size: 24px; font-weight: bold; fill: var(--color-text); text-anchor: middle; dominant-baseline: middle; }
            .text-label { font-family: var(--font-sans); font-size: 14px; font-weight: bold; fill: var(--color-text); text-anchor: middle; }
            .color-box { stroke: var(--color-text); stroke-width: 1; }
        </style>
    </defs>

    <!-- Ethene -->
    <g transform="translate(100, 100)">
        <text x="-25" y="0" class="atom-c">C</text>
        <text x="25" y="0" class="atom-c">C</text>
        
        <!-- Double bond -->
        <line x1="-12" y1="-4" x2="12" y2="-4" class="double-bond"/>
        <line x1="-12" y1="4" x2="12" y2="4" class="double-bond"/>
        
        <!-- H atoms -->
        <text x="-50" y="-30" class="atom-h">H</text>
        <text x="-50" y="30" class="atom-h">H</text>
        <text x="50" y="-30" class="atom-h">H</text>
        <text x="50" y="30" class="atom-h">H</text>
        
        <!-- C-H bonds -->
        <line x1="-32" y1="-10" x2="-42" y2="-20" class="bond"/>
        <line x1="-32" y1="10" x2="-42" y2="20" class="bond"/>
        <line x1="32" y1="-10" x2="42" y2="-20" class="bond"/>
        <line x1="32" y1="10" x2="42" y2="20" class="bond"/>

        <text y="70" class="text-label">Ethene (colourless)</text>
    </g>

    <!-- Plus -->
    <text x="200" y="100" class="operator">+</text>

    <!-- Bromine -->
    <g transform="translate(270, 100)">
        <text x="-20" y="0" class="atom-br">Br</text>
        <text x="20" y="0" class="atom-br">Br</text>
        <line x1="-5" y1="0" x2="5" y2="0" class="bond"/>
        <text y="70" class="text-label" fill="#d35400">Bromine (orange)</text>
    </g>

    <!-- Arrow -->
    <g transform="translate(340, 100)">
        <line x1="0" y1="0" x2="40" y2="0" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow)"/>
        <polygon points="40,-5 40,5 50,0" fill="var(--color-text)"/>
        <text x="25" y="-15" class="text-label" font-size="12">Addition</text>
    </g>

    <!-- 1,2-dibromoethane -->
    <g transform="translate(480, 100)">
        <text x="-25" y="0" class="atom-c">C</text>
        <text x="25" y="0" class="atom-c">C</text>
        
        <!-- Single C-C bond -->
        <line x1="-12" y1="0" x2="12" y2="0" class="bond"/>
        
        <!-- H atoms -->
        <text x="-50" y="-30" class="atom-h">H</text>
        <text x="-50" y="30" class="atom-h">H</text>
        <text x="50" y="-30" class="atom-h">H</text>
        <text x="50" y="30" class="atom-h">H</text>
        
        <line x1="-32" y1="-10" x2="-42" y2="-20" class="bond"/>
        <line x1="-32" y1="10" x2="-42" y2="20" class="bond"/>
        <line x1="32" y1="-10" x2="42" y2="-20" class="bond"/>
        <line x1="32" y1="10" x2="42" y2="20" class="bond"/>

        <!-- Br atoms top/bottom -->
        <text x="-25" y="-40" class="atom-br">Br</text>
        <text x="25" y="-40" class="atom-br">Br</text>
        
        <line x1="-25" y1="-15" x2="-25" y2="-25" class="bond"/>
        <line x1="25" y1="-15" x2="25" y2="-25" class="bond"/>

        <text y="70" class="text-label">1,2-dibromoethane</text>
        <text y="90" class="text-label">(colourless)</text>
    </g>
</svg>`
      }
    },
    {
      id: 'call-uses',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Importance of Alkenes',
        text: 'Alkenes are very valuable in the chemical industry:<br/><br/>• <strong>Polymers:</strong> ethene → poly(ethene); propene → poly(propene); etc.<br/>• <strong>Ethanol:</strong> ethene + steam → ethanol (industrial manufacture)<br/>• <strong>Other chemicals:</strong> starting materials for numerous other organic compounds<br/><br/>This is why cracking of crude oil fractions to produce alkenes is economically important.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Alkenes (CₙH₂ₙ): contain C=C double bond — unsaturated. Made by cracking alkanes. React with bromine water — decolourises (addition). More reactive than alkanes. Used to make polymers and ethanol.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Alkenes: CₙH₂ₙ, contains C=C (unsaturated). Bromine water decolourised. Made by cracking. Used for polymers/ethanol.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'What is the general formula for alkenes and why are they more reactive than alkanes?', answer: 'CₙH₂ₙ. They contain a C=C double bond which can be broken in addition reactions, making them more reactive than saturated alkanes.' },
      { id: 'cue-2', blockId: 'call-br', prompt: 'Ethene is bubbled into bromine water. State the observation and write an equation for the reaction.', answer: 'The orange bromine water is decolourised (turns colourless). CH₂=CH₂ + Br₂ → CH₂BrCH₂Br' },
      { id: 'cue-3', blockId: 'call-key', prompt: 'How are alkenes produced industrially?', answer: 'By cracking large alkane molecules from crude oil fractions, using high temperatures (~500°C) and a catalyst, which breaks the long chains into shorter alkanes and alkenes.' }
    ]
  },
  evidence: [],
  mentions: []
};
