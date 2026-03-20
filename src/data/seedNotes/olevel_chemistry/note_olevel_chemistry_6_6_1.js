export const note_olevel_chemistry_6_6_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-1-2-rates-of-reaction-factors.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'State the factors that affect the rate of a chemical reaction and describe how each one affects the rate.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Factors Affecting Rate of Reaction', level: 2 }
    },
    {
      id: 'tbl-factors',
      type: 'comparisonTable',
      data: {
        caption: 'Factors and their effect on rate',
        headers: ['Factor', 'Effect on Rate', 'Reason'],
        rows: [
          ['Concentration (solutions)', 'Higher concentration → faster', 'More particles per unit volume → more frequent collisions'],
          ['Pressure (gases)', 'Higher pressure → faster', 'Molecules closer together → more frequent collisions'],
          ['Temperature', 'Higher temperature → faster', 'Particles have more kinetic energy → more frequent AND more energetic collisions; more particles exceed Eₐ'],
          ['Surface area (solids)', 'Larger surface area (smaller pieces) → faster', 'More surface exposed for collisions to occur'],
          ['Catalyst', 'Catalyst → faster', 'Provides alternative pathway with lower activation energy; more particles exceed Eₐ']
        ]
      }
    },
    {
      id: 'call-definitions',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rate of Reaction',
        text: '<strong>Rate of reaction</strong> = how quickly reactants are used up or products are formed per unit time.<br/><br/>Can be measured by:<br/>• Volume of gas produced (using gas syringe or measuring tube over water)<br/>• Change in mass (losing gas → mass decreases)<br/>• Colour change intensity<br/>• Disappearance of a solid (e.g. marble chips dissolving in acid)<br/>• Colour cross method (sodium thiosulfate + HCl — cross disappears as precipitate forms)'
      }
    },
    {
      id: 'svg-measuring-rates',
      type: 'svg',
      data: {
        caption: 'Methods for measuring the rate of reaction. Left: Collecting gas using a gas syringe. Right: Measuring mass loss of a gas on a balance.',
        svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />
  
  <line x1="300" y1="20" x2="300" y2="220" stroke="var(--color-border)" stroke-width="2" stroke-dasharray="8,8" />

  <!-- LEFT: Gas Syringe Method -->
  <text x="150" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Method 1: Gas Collection</text>
  
  <!-- Conical Flask -->
  <path d="M 60 180 L 110 180 L 95 120 L 95 90 L 75 90 L 75 120 Z" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
  <!-- Liquid / Reaction mixture -->
  <path d="M 65 180 L 105 180 L 97 140 L 73 140 Z" fill="#0c4a6e" opacity="0.6"/>
  <!-- Marble chips (dots) -->
  <circle cx="75" cy="170" r="3" fill="#475569" />
  <circle cx="85" cy="175" r="4" fill="#475569" />
  <circle cx="95" cy="168" r="3" fill="#475569" />
  
  <!-- Bung / Delivery tube -->
  <rect x="75" y="80" width="20" height="10" fill="#334155" />
  <path d="M 85 80 L 85 60 L 160 60 L 160 95 L 180 95" fill="none" stroke="#94a3b8" stroke-width="4"/>
  
  <!-- Gas Syringe -->
  <rect x="180" y="80" width="80" height="30" fill="none" stroke="#64748b" stroke-width="2"/>
  <!-- Plunger -->
  <rect x="220" y="82" width="60" height="26" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <line x1="280" y1="82" x2="280" y2="108" stroke="#000" stroke-width="2"/>
  <rect x="280" y="90" width="10" height="10" fill="#475569"/>
  <!-- Graduations -->
  <line x1="190" y1="80" x2="190" y2="85" stroke="#64748b" stroke-width="1"/><line x1="200" y1="80" x2="200" y2="85" stroke="#64748b" stroke-width="1"/><line x1="210" y1="80" x2="210" y2="85" stroke="#64748b" stroke-width="1"/><line x1="220" y1="80" x2="220" y2="85" stroke="#64748b" stroke-width="1"/><line x1="230" y1="80" x2="230" y2="85" stroke="#64748b" stroke-width="1"/>
  
  <text x="220" y="130" font-family="var(--font-sans)" font-size="12" fill="var(--color-primary-dark)" text-anchor="middle">Read Gas Vol.</text>
  <text x="85" y="200" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">Acid + Marble</text>


  <!-- RIGHT: Mass Loss Method -->
  <text x="450" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Method 2: Mass Loss</text>
  
  <!-- Scale / Balance -->
  <rect x="400" y="160" width="100" height="30" fill="#94a3b8" rx="4"/>
  <rect x="420" y="155" width="60" height="5" fill="#1e293b" />
  <rect x="430" y="170" width="40" height="15" fill="#1e293b" rx="2"/>
  <text x="450" y="182" font-family="'Courier New', monospace" font-size="12" font-weight="bold" fill="red" text-anchor="middle">45.2 g</text>
  
  <!-- Conical Flask -->
  <path d="M 425 155 L 475 155 L 460 95 L 460 65 L 440 65 L 440 95 Z" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
  <!-- Liquid -->
  <path d="M 430 155 L 470 155 L 462 115 L 438 115 Z" fill="#0c4a6e" opacity="0.6"/>
  
  <!-- Cotton Wool Bung -->
  <path d="M 435 60 Q 445 50 450 60 Q 460 55 465 65 L 435 65 Z" fill="#1e293b" stroke="#cbd5e1" stroke-width="1"/>
  <text x="450" y="47" font-family="var(--font-sans)" font-size="10" fill="#64748b" text-anchor="middle">Cotton wool</text>
  <text x="450" y="55" font-family="var(--font-sans)" font-size="9" fill="#94a3b8" text-anchor="middle">(lets gas out</text>
  <text x="450" y="63" font-family="var(--font-sans)" font-size="9" fill="#94a3b8" text-anchor="middle">keeps spray in)</text>

  <!-- Bubbles & Gas escaping -->
  <circle cx="445" cy="145" r="2" fill="#1e293b" />
  <circle cx="455" cy="135" r="2.5" fill="#1e293b" />
  <circle cx="450" cy="125" r="2" fill="#1e293b" />
  
  <path d="M 440 40 Q 430 30 435 20 M 460 40 Q 470 30 465 20 M 450 40 Q 450 30 450 15" stroke="var(--color-primary-50)" stroke-width="2" fill="none" opacity="0.8"/>
  <text x="500" y="30" font-family="var(--font-sans)" font-size="12" fill="var(--color-primary)" font-style="italic">Gas CO₂ escapes</text>
  
  <!-- Stop-clock -->
  <circle cx="360" cy="70" r="16" fill="#0f172a" stroke="#475569" stroke-width="2"/>
  <line x1="360" y1="70" x2="368" y2="62" stroke="#ef4444" stroke-width="1.5"/>
  <line x1="360" y1="54" x2="360" y2="50" stroke="#475569" stroke-width="2"/>
  <text x="360" y="100" font-family="var(--font-sans)" font-size="10" fill="var(--color-text-secondary)" text-anchor="middle">Stopwatch</text>

</svg>`
      }
    },
    {
      id: 'call-catalyst',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Catalysts',
        text: 'A <strong>catalyst</strong> is a substance that increases the rate of reaction without being used up.<br/><br/>It provides an alternative pathway with lower activation energy (Eₐ).<br/><br/>A catalyst does <strong>NOT</strong>:<br/>• Change ΔH (enthalpy change)<br/>• Get used up<br/>• Change the position of equilibrium<br/><br/>Examples: MnO₂ in decomposition of H₂O₂; Fe in Haber process; Pt/Rh in catalytic converters'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'There are 5 factors: concentration, pressure (gases), temperature, surface area, catalyst. Temperature is the only factor that changes the activation energy profile — more particles exceed Eₐ AND more frequent collisions. Catalysts only lower Eₐ; concentration/pressure/surface area only affect collision frequency.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '5 factors affect rate: concentration, pressure (gases), temperature, surface area, catalyst. Each works by increasing collision frequency or proportion of successful collisions. Catalysts lower Eₐ without being consumed.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: '5 factors: concentration, pressure, temperature, surface area, catalyst. More collisions or more collisions with enough energy = faster rate.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-factors', prompt: 'State five factors that affect the rate of a reaction.', answer: 'Concentration, pressure (gases only), temperature, surface area (solids), and catalyst.' },
      { id: 'cue-2', blockId: 'tbl-factors', prompt: 'Explain why increasing temperature increases the rate of reaction.', answer: 'Particles have more kinetic energy → more frequent collisions AND more particles have energy greater than or equal to the activation energy → more successful collisions per unit time.' },
      { id: 'cue-3', blockId: 'call-catalyst', prompt: 'How does a catalyst increase reaction rate?', answer: 'It provides an alternative pathway with a lower activation energy, so more particles have enough energy to react when they collide.' }
    ]
  },
  evidence: [],
  mentions: []
};
