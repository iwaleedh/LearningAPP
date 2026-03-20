export const note_olevel_chemistry_1_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/1 States Of Matter/1-1-2-states-of-matter.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the three states of matter, explain changes of state using particle theory, and use state symbols correctly in chemical equations.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Changes of State', level: 2 }
    },
    {
      id: 'call-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Changes of State — Names and Directions',
        text: '<strong>Melting:</strong> solid → liquid (heat absorbed)<br/><strong>Freezing:</strong> liquid → solid (heat released)<br/><strong>Boiling / Evaporation:</strong> liquid → gas (heat absorbed)<br/><strong>Condensation:</strong> gas → liquid (heat released)<br/><strong>Sublimation:</strong> solid → gas directly (e.g. iodine, dry ice / CO₂)<br/><strong>Deposition:</strong> gas → solid directly<br/><br/>Changes of state are <strong>physical</strong> changes — no new substance is formed and the change is reversible.'
      }
    },
    {
      id: 'svg-state-changes',
      type: 'svg',
      data: {
        caption: 'Changes of state between solid, liquid, and gas',
        svg: `<svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Arrow heads -->
    <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0,0 L 10,5 L 0,10 z" fill="#ef4444" />
    </marker>
    <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0,0 L 10,5 L 0,10 z" fill="#3b82f6" />
    </marker>
    <marker id="arrow-purple" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0,0 L 10,5 L 0,10 z" fill="#8b5cf6" />
    </marker>

    <!-- State Bubbles -->
    <filter id="shadow">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.2"/>
    </filter>
  </defs>

  <g transform="translate(0, 10)">
    <!-- Legend -->
    <g transform="translate(420, 20)">
      <rect x="0" y="0" width="160" height="70" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" />
      <path d="M 10,15 L 30,15" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)" />
      <text x="40" y="19" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)">Heat absorbed (Endo)</text>
      <path d="M 10,35 L 30,35" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)" />
      <text x="40" y="39" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)">Heat released (Exo)</text>
      <path d="M 10,55 L 30,55" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrow-purple)" stroke-dasharray="4,2" />
      <text x="40" y="59" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)">Direct change</text>
    </g>

    <!-- Circles for states -->
    <g transform="translate(150, 230)">
      <circle cx="0" cy="0" r="50" fill="#0f172a" stroke="#94a3b8" stroke-width="3" filter="url(#shadow)" />
      <text x="0" y="5" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="18" fill="var(--color-text)">SOLID</text>
    </g>
    
    <g transform="translate(450, 230)">
      <circle cx="0" cy="0" r="50" fill="#1c3a64" stroke="#60a5fa" stroke-width="3" filter="url(#shadow)" />
      <text x="0" y="5" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="18" fill="var(--color-text)">LIQUID</text>
    </g>

    <g transform="translate(300, 60)">
      <circle cx="0" cy="0" r="50" fill="#1c3a64" stroke="#38bdf8" stroke-width="3" filter="url(#shadow)" />
      <text x="0" y="5" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="18" fill="var(--color-text)">GAS</text>
    </g>

    <!-- Arrows Solid <-> Liquid -->
    <!-- Melting -->
    <path d="M 210,220 L 390,220" fill="none" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red)" />
    <text x="300" y="212" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#ef4444">Melting</text>
    <!-- Freezing -->
    <path d="M 390,240 L 210,240" fill="none" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrow-blue)" />
    <text x="300" y="255" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#3b82f6">Freezing</text>

    <!-- Arrows Liquid <-> Gas -->
    <!-- Boiling -->
    <path d="M 430,190 L 340,90" fill="none" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red)" />
    <text x="420" y="130" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#ef4444" transform="rotate(-47, 420, 130)">Boiling / Evaporation</text>
    <!-- Condensation -->
    <path d="M 350,110 L 415,185" fill="none" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrow-blue)" />
    <text x="345" y="165" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#3b82f6" transform="rotate(-47, 345, 165)">Condensation</text>

    <!-- Arrows Solid <-> Gas -->
    <!-- Sublimation -->
    <path d="M 120,190 Q 70,80 240,65" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="6,4" marker-end="url(#arrow-red)" />
    <text x="130" y="125" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#ef4444" transform="rotate(45, 130, 125)">Sublimation</text>
    <!-- Deposition -->
    <path d="M 235,50 Q 30,60 105,190" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-dasharray="6,4" marker-end="url(#arrow-blue)" />
    <text x="90" y="145" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#3b82f6" transform="rotate(50, 90, 145)">Deposition</text>
  </g>
</svg>`
      }
    },
    {
      id: 'tbl-changes',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of changes of state',
        headers: ['Change', 'Direction', 'Energy change', 'Example'],
        rows: [
          ['Melting', 'Solid → Liquid', 'Energy absorbed (endothermic)', 'Ice melting at 0°C'],
          ['Freezing', 'Liquid → Solid', 'Energy released (exothermic)', 'Water freezing at 0°C'],
          ['Boiling', 'Liquid → Gas', 'Energy absorbed (endothermic)', 'Water boiling at 100°C'],
          ['Condensation', 'Gas → Liquid', 'Energy released (exothermic)', 'Steam condensing on a window'],
          ['Sublimation', 'Solid → Gas', 'Energy absorbed', 'Iodine crystals forming purple vapour'],
          ['Evaporation', 'Liquid → Gas (at surface)', 'Energy absorbed', 'Puddles drying up at room temperature']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Melting Point and Boiling Point', level: 2 }
    },
    {
      id: 'call-mp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Melting and Boiling Points',
        text: '<strong>Melting point (mp):</strong> the temperature at which a solid changes to a liquid (or vice versa). During melting, temperature stays constant — energy is used to break attractions between particles, not to increase kinetic energy.<br/><br/><strong>Boiling point (bp):</strong> the temperature at which a liquid changes to a gas throughout the bulk liquid. During boiling, temperature stays constant.<br/><br/>A <strong>pure substance</strong> has a sharp, fixed melting point. An <strong>impure substance</strong> melts over a range of temperatures at a lower temperature than the pure substance.'
      }
    },
    {
      id: 'svg-heating-curve',
      type: 'svg',
      data: {
        caption: 'Ideal heating curve of a pure substance showing constant temperature during state changes',
        svg: `<svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="axis-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0,0 L 10,5 L 0,10 z" fill="var(--color-text)" />
    </marker>
  </defs>

  <!-- Axes -->
  <g transform="translate(60, 20)">
    <!-- Y axis (Temperature) -->
    <path d="M 0,280 L 0,-10" fill="none" stroke="var(--color-text)" stroke-width="2" marker-end="url(#axis-arrow)" />
    <text x="-40" y="110" transform="rotate(-90, -40, 110)" text-anchor="middle" font-family="var(--font-sans)" font-size="14" fill="var(--color-text)">Temperature (°C)</text>
    
    <!-- X axis (Time) -->
    <path d="M 0,280 L 500,280" fill="none" stroke="var(--color-text)" stroke-width="2" marker-end="url(#axis-arrow)" />
    <text x="250" y="320" text-anchor="middle" font-family="var(--font-sans)" font-size="14" fill="var(--color-text)">Time (Heat energy added)</text>

    <!-- Curve -->
    <path d="M 0,250 L 80,180 L 220,180 L 320,80 L 460,80 L 500,20" fill="none" stroke="#ef4444" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />

    <!-- Dotted lines for mp and bp -->
    <path d="M -5,180 L 80,180" fill="none" stroke="var(--color-text-secondary)" stroke-width="1.5" stroke-dasharray="4,4" />
    <path d="M -5,80 L 320,80" fill="none" stroke="var(--color-text-secondary)" stroke-width="1.5" stroke-dasharray="4,4" />

    <!-- Labels -->
    <text x="-15" y="184" text-anchor="end" font-family="var(--font-sans)" font-weight="bold" font-size="12" fill="var(--color-text)">Melting point</text>
    <text x="-15" y="84" text-anchor="end" font-family="var(--font-sans)" font-weight="bold" font-size="12" fill="var(--color-text)">Boiling point</text>

    <!-- State Labels -->
    <!-- Solid -->
    <text x="40" y="235" text-anchor="end" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#3b82f6">Solid</text>
    
    <!-- Solid + Liquid -->
    <text x="150" y="170" text-anchor="middle" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)">Melting</text>
    <text x="150" y="200" text-anchor="middle" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">(Solid + Liquid)</text>
    
    <!-- Liquid -->
    <text x="240" y="140" text-anchor="end" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#60a5fa">Liquid</text>
    
    <!-- Liquid + Gas -->
    <text x="390" y="70" text-anchor="middle" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)">Boiling</text>
    <text x="390" y="100" text-anchor="middle" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">(Liquid + Gas)</text>
    
    <!-- Gas -->
    <text x="475" y="45" text-anchor="start" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#38bdf8">Gas</text>
  </g>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'State Symbols in Equations', level: 2 }
    },
    {
      id: 'list-symbols',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>(s)</strong> — solid' },
          { text: '<strong>(l)</strong> — liquid' },
          { text: '<strong>(g)</strong> — gas' },
          { text: '<strong>(aq)</strong> — aqueous (dissolved in water)' }
        ]
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: State Symbols in an Equation',
        text: 'Zinc reacting with dilute hydrochloric acid:<br/><br/>Zn(s) + 2HCl(aq) → ZnCl<sub>2</sub>(aq) + H<sub>2</sub>(g)<br/><br/>The zinc is a solid, HCl is dissolved in water (aqueous), zinc chloride dissolves to form an aqueous solution, and hydrogen gas is produced.'
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Pure vs Impure Melting',
        text: 'A sharp melting point at the expected temperature indicates a pure substance. A range of melting temperatures (lower than expected) indicates an impurity is present. This is used in testing sample purity.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Changes of state (melting, boiling, freezing, condensation, sublimation) are physical changes involving energy transfer at constant temperature. State symbols (s), (l), (g), (aq) are used in equations. Pure substances have sharp, fixed melting points.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Changes of state are physical, reversible changes involving energy at constant temperature; state symbols (s), (l), (g), (aq) label phases in equations.',
    cues: [
      { id: 'cue-1', blockId: 'call-key1', prompt: 'Name all six changes of state and their directions.', answer: 'Melting (solid→liquid), freezing (liquid→solid), boiling (liquid→gas), condensation (gas→liquid), sublimation (solid→gas), deposition (gas→solid).' },
      { id: 'cue-2', blockId: 'call-mp', prompt: 'Why does temperature stay constant during melting?', answer: 'During melting, energy is used to break the attractive forces between particles, not to increase kinetic energy, so temperature remains constant at the melting point.' },
      { id: 'cue-3', blockId: 'list-symbols', prompt: 'What do the state symbols (s), (l), (g) and (aq) mean?', answer: '(s) = solid, (l) = liquid, (g) = gas, (aq) = aqueous (dissolved in water).' },
      { id: 'cue-4', blockId: 'call-mp', prompt: 'How does an impurity affect the melting point of a substance?', answer: 'An impurity lowers and broadens the melting point — the substance melts over a range of temperatures lower than expected, rather than at a sharp fixed temperature.' }
    ]
  },
  evidence: [],
  mentions: []
};
