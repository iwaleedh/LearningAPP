export const note_olevel_chemistry_11_11_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-2-2-alkanes.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the general formula, structure, and reactions of alkanes including complete and incomplete combustion, and substitution with chlorine.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Alkanes', level: 2 }
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Facts about Alkanes',
        text: '<strong>General formula:</strong> CₙH₂ₙ₊₂<br/><strong>Bonding:</strong> Only single bonds (C–C and C–H) — <strong>saturated</strong><br/><strong>First four members:</strong><br/>• Methane CH₄ (gas — main component of natural gas)<br/>• Ethane C₂H₆ (gas)<br/>• Propane C₃H₈ (gas — in LPG)<br/>• Butane C₄H₁₀ (gas — in LPG/lighters)<br/><br/><strong>Properties:</strong><br/>• Relatively unreactive (inert) at room temperature due to strong, non-polar C–C and C–H bonds<br/>• Insoluble in water<br/>• Less dense than water<br/>• Good fuels — combust to give CO₂ and H₂O'
      }
    },
    {
      id: 'svg-alkanes-structures',
      type: 'svg',
      data: {
        caption: 'Displayed formulae of the first four straight-chain alkanes.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 250">
    <defs>
        <style>
            .bond { stroke: var(--color-text); stroke-width: 2; }
            .atom { font-family: var(--font-sans); font-size: 20px; fill: var(--color-text); text-anchor: middle; dominant-baseline: middle; }
            .label { font-family: var(--font-sans); font-size: 16px; font-weight: bold; fill: var(--color-primary); text-anchor: middle; }
            .sub-label { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text-secondary); text-anchor: middle; }
        </style>
    </defs>

    <!-- Methane (n=1) -->
    <g transform="translate(100, 100)">
        <text y="90" class="label">Methane</text>
        <text y="110" class="sub-label">CH₄</text>
        
        <text x="0" y="0" class="atom">C</text>
        <text x="0" y="-40" class="atom">H</text>
        <text x="0" y="40" class="atom">H</text>
        <text x="-40" y="0" class="atom">H</text>
        <text x="40" y="0" class="atom">H</text>

        <line x1="0" y1="-15" x2="0" y2="-25" class="bond"/>
        <line x1="0" y1="15" x2="0" y2="25" class="bond"/>
        <line x1="-15" y1="0" x2="-25" y2="0" class="bond"/>
        <line x1="15" y1="0" x2="25" y2="0" class="bond"/>
    </g>

    <!-- Ethane (n=2) -->
    <g transform="translate(280, 100)">
        <text x="25" y="90" class="label">Ethane</text>
        <text x="25" y="110" class="sub-label">C₂H₆</text>
        
        <text x="0" y="0" class="atom">C</text>
        <text x="50" y="0" class="atom">C</text>
        
        <text x="0" y="-40" class="atom">H</text>
        <text x="0" y="40" class="atom">H</text>
        <text x="-40" y="0" class="atom">H</text>

        <text x="50" y="-40" class="atom">H</text>
        <text x="50" y="40" class="atom">H</text>
        <text x="90" y="0" class="atom">H</text>

        <!-- C-C bond -->
        <line x1="15" y1="0" x2="35" y2="0" class="bond"/>
        
        <!-- C-H bonds for C1 -->
        <line x1="0" y1="-15" x2="0" y2="-25" class="bond"/>
        <line x1="0" y1="15" x2="0" y2="25" class="bond"/>
        <line x1="-15" y1="0" x2="-25" y2="0" class="bond"/>
        
        <!-- C-H bonds for C2 -->
        <line x1="50" y1="-15" x2="50" y2="-25" class="bond"/>
        <line x1="50" y1="15" x2="50" y2="25" class="bond"/>
        <line x1="65" y1="0" x2="75" y2="0" class="bond"/>
    </g>

    <!-- Propane (n=3) -->
    <g transform="translate(500, 100)">
        <text x="50" y="90" class="label">Propane</text>
        <text x="50" y="110" class="sub-label">C₃H₈</text>
        
        <text x="0" y="0" class="atom">C</text>
        <text x="50" y="0" class="atom">C</text>
        <text x="100" y="0" class="atom">C</text>
        
        <!-- H atoms upper -->
        <text x="0" y="-40" class="atom">H</text>
        <text x="50" y="-40" class="atom">H</text>
        <text x="100" y="-40" class="atom">H</text>

        <!-- H atoms lower -->
        <text x="0" y="40" class="atom">H</text>
        <text x="50" y="40" class="atom">H</text>
        <text x="100" y="40" class="atom">H</text>

        <!-- H atoms sides -->
        <text x="-40" y="0" class="atom">H</text>
        <text x="140" y="0" class="atom">H</text>

        <!-- C-C bonds -->
        <line x1="15" y1="0" x2="35" y2="0" class="bond"/>
        <line x1="65" y1="0" x2="85" y2="0" class="bond"/>

        <!-- vertical C-H bonds -->
        <path d="M0,-15 v-10 M50,-15 v-10 M100,-15 v-10 M0,15 v10 M50,15 v10 M100,15 v10" class="bond"/>
        
        <!-- side C-H bonds -->
        <line x1="-15" y1="0" x2="-25" y2="0" class="bond"/>
        <line x1="115" y1="0" x2="125" y2="0" class="bond"/>
    </g>

</svg>`
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Combustion Reactions', level: 2 }
    },
    {
      id: 'call-combust',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Complete vs Incomplete Combustion',
        text: '<strong>Complete combustion</strong> (excess O₂):<br/>CH₄ + 2O₂ → CO₂ + 2H₂O (blue flame, no smoke)<br/>C₃H₈ + 5O₂ → 3CO₂ + 4H₂O<br/><br/><strong>Incomplete combustion</strong> (limited O₂):<br/>Products include carbon monoxide (CO) and/or carbon (soot):<br/>2CH₄ + 3O₂ → 2CO + 4H₂O (yellow/sooty flame)<br/>CH₄ + O₂ → C + 2H₂O (very limited O₂ → soot)<br/><br/><strong>Carbon monoxide (CO):</strong><br/>• Toxic gas — binds to haemoglobin, preventing O₂ transport<br/>• Colourless and odourless — a silent killer; detected by CO alarms'
      }
    },
    {
      id: 'call-subst',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Substitution with Chlorine (Photochemical)',
        text: 'Alkanes react with chlorine in the presence of UV light (sunlight) — a <strong>free radical substitution</strong>:<br/><br/>CH₄ + Cl₂ → CH₃Cl + HCl (UV light)<br/>(methane + chlorine → chloromethane + hydrogen chloride)<br/><br/>Further substitution continues:<br/>CH₃Cl + Cl₂ → CH₂Cl₂ + HCl → CHCl₃ + HCl → CCl₄ + HCl<br/><br/>• Reaction does NOT occur in the dark<br/>• UV light provides energy to break Cl–Cl bond (initiation step)'
      }
    },
    {
      id: 'svg-substitution',
      type: 'svg',
      data: {
        caption: 'Substitution reaction between methane and chlorine yielding chloromethane and hydrogen chloride.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200">
    <defs>
        <style>
            .bond { stroke: var(--color-text); stroke-width: 2; }
            .atom-c { font-family: var(--font-sans); font-size: 20px; fill: var(--color-text); text-anchor: middle; dominant-baseline: middle; }
            .atom-h { font-family: var(--font-sans); font-size: 20px; fill: #7f8c8d; text-anchor: middle; dominant-baseline: middle; font-weight: bold; }
            .atom-cl { font-family: var(--font-sans); font-size: 20px; fill: #27ae60; text-anchor: middle; dominant-baseline: middle; font-weight: bold; }
            .operator { font-family: var(--font-sans); font-size: 24px; font-weight: bold; fill: var(--color-text); text-anchor: middle; dominant-baseline: middle; }
            .uv-text { font-family: var(--font-sans); font-size: 14px; font-weight: bold; fill: #e67e22; text-anchor: middle; }
        </style>
    </defs>

    <!-- Methane -->
    <g transform="translate(80, 100)">
        <text x="0" y="0" class="atom-c">C</text>
        <text x="0" y="-40" class="atom-h">H</text>
        <text x="0" y="40" class="atom-h">H</text>
        <text x="-40" y="0" class="atom-h">H</text>
        <text x="40" y="0" class="atom-h">H</text>
        <path d="M0,-15 v-10 M0,15 v10 M-15,0 h-10 M15,0 h10" class="bond"/>
        <text y="70" class="uv-text" fill="var(--color-text)">Methane</text>
    </g>

    <!-- Plus -->
    <text x="160" y="100" class="operator">+</text>

    <!-- Chlorine -->
    <g transform="translate(230, 100)">
        <text x="-20" y="0" class="atom-cl">Cl</text>
        <text x="20" y="0" class="atom-cl">Cl</text>
        <line x1="-5" y1="0" x2="5" y2="0" class="bond"/>
        <text y="70" class="uv-text" fill="var(--color-text)">Chlorine</text>
    </g>

    <!-- Arrow and UV -->
    <g transform="translate(320, 100)">
        <text y="-15" class="uv-text">UV light</text>
        <line x1="0" y1="0" x2="40" y2="0" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow)"/>
        <polygon points="40,-5 40,5 50,0" fill="var(--color-text)"/>
    </g>

    <!-- Chloromethane -->
    <g transform="translate(440, 100)">
        <text x="0" y="0" class="atom-c">C</text>
        <text x="0" y="-40" class="atom-h">H</text>
        <text x="0" y="40" class="atom-h">H</text>
        <text x="-40" y="0" class="atom-h">H</text>
        <text x="40" y="0" class="atom-cl">Cl</text>
        <path d="M0,-15 v-10 M0,15 v10 M-15,0 h-10 M15,0 h10" class="bond"/>
        <text y="70" class="uv-text" fill="var(--color-text)">Chloromethane</text>
    </g>

    <!-- Plus -->
    <text x="510" y="100" class="operator">+</text>

    <!-- Hydrogen Chloride -->
    <g transform="translate(560, 100)">
        <text x="-15" y="0" class="atom-h">H</text>
        <text x="15" y="0" class="atom-cl">Cl</text>
        <line x1="-3" y1="0" x2="3" y2="0" class="bond"/>
        <text y="70" class="uv-text" fill="var(--color-text)">HCl</text>
    </g>
</svg>`
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Alkanes (CₙH₂ₙ₊₂): saturated, relatively unreactive. Complete combustion → CO₂ + H₂O. Incomplete combustion (limited O₂) → CO (toxic) and/or soot. Substitution with Cl₂ under UV light: CH₄ + Cl₂ → CH₃Cl + HCl.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Alkanes: CₙH₂ₙ₊₂, saturated. Complete combustion → CO₂ + H₂O. Incomplete → CO (toxic). Cl₂ substitution needs UV light.',
    cues: [
      { id: 'cue-1', blockId: 'call-combust', prompt: 'Write the equation for complete combustion of propane.', answer: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O' },
      { id: 'cue-2', blockId: 'call-combust', prompt: 'Why is carbon monoxide produced in incomplete combustion dangerous?', answer: 'Carbon monoxide binds to haemoglobin in red blood cells more strongly than oxygen, preventing oxygen transport. It is colourless and odourless, making it particularly dangerous.' },
      { id: 'cue-3', blockId: 'call-subst', prompt: 'Describe the conditions needed for the substitution of methane with chlorine.', answer: 'UV light (sunlight) is required. Methane + chlorine → chloromethane + hydrogen chloride: CH₄ + Cl₂ → CH₃Cl + HCl. The reaction does NOT occur in the dark.' }
    ]
  },
  evidence: [],
  mentions: []
};
