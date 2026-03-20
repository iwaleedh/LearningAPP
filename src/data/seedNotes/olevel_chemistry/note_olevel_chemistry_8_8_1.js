export const note_olevel_chemistry_8_8_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/8 The Periodic Table/8-1-2-periodic-trends.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe and explain periodic trends in atomic radius, ionisation energy, and electronegativity across a period and down a group.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Trends Across a Period (left → right)', level: 2 }
    },
    {
      id: 'tbl-across',
      type: 'comparisonTable',
      data: {
        caption: 'Trends across Period 3 (Na → Cl)',
        headers: ['Property', 'Trend', 'Reason'],
        rows: [
          ['Atomic radius', 'Decreases', 'More protons attract electrons more strongly; electrons added to same shell; electrons pulled closer to nucleus'],
          ['First ionisation energy', 'Generally increases', 'Atomic radius decreases → electrons held more tightly; more protons; less shielding (same shell)'],
          ['Electronegativity', 'Increases', 'More protons attract bonding electrons more strongly; smaller radius → bonding electrons closer']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Trends Down a Group', level: 2 }
    },
    {
      id: 'tbl-down',
      type: 'comparisonTable',
      data: {
        caption: 'Trends down Group 1 or 7',
        headers: ['Property', 'Trend', 'Reason'],
        rows: [
          ['Atomic radius', 'Increases', 'Extra electron shell added each period → larger atom'],
          ['First ionisation energy', 'Decreases', 'Outer electrons are further from nucleus (more shells) and more shielded by inner shells → easier to remove'],
          ['Electronegativity', 'Decreases', 'Outer electrons further away and more shielded → weaker attraction for bonding electrons'],
          ['Metallic character (Group 1)', 'Increases', 'Easier to lose the outer electron → more reactive'],
          ['Reactivity (Group 7)', 'Decreases', 'Harder to gain an electron (outer shell further, more shielding)']
        ]
      }
    },
    {
      id: 'call-summary-trends',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Memory Framework',
        text: '<strong>Key factor = nuclear charge vs. shielding and distance</strong><br/><br/>Across a period → more protons, same shielding → stronger nuclear pull → smaller radius, higher IE, higher electronegativity.<br/><br/>Down a group → more shells → weaker nuclear pull on outer e⁻ → larger radius, lower IE, lower electronegativity.'
      }
    },
    {
      id: 'svg-periodic-trends',
      type: 'svg',
      data: {
        caption: 'Summary of periodic trends in atomic radius, ionisation energy (IE), and electronegativity.',
        svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Periodic Table outline -->
  <path d="M 120 60 L 160 60 L 160 90 L 400 90 L 400 60 L 460 60 L 460 220 L 120 220 Z" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
  <rect x="120" y="40" width="20" height="20" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
  <rect x="440" y="40" width="20" height="20" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>

  <!-- Across a Period -->
  <path d="M 180 30 L 380 30" fill="none" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow-head-blue)" />
  <text x="280" y="20" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Across a Period</text>
  
  <text x="280" y="110" font-family="var(--font-sans)" font-size="12" fill="#1d4ed8" text-anchor="middle">Atomic Radius ↓</text>
  <text x="280" y="130" font-family="var(--font-sans)" font-size="12" fill="#1d4ed8" text-anchor="middle">Ionisation Energy ↑</text>
  <text x="280" y="150" font-family="var(--font-sans)" font-size="12" fill="#1d4ed8" text-anchor="middle">Electronegativity ↑</text>

  <!-- Atoms across -->
  <circle cx="200" cy="70" r="12" fill="#1250a0"/>
  <circle cx="250" cy="70" r="10" fill="#1250a0"/>
  <circle cx="300" cy="70" r="8" fill="#1250a0"/>
  <circle cx="350" cy="70" r="6" fill="#1250a0"/>

  <!-- Down a Group -->
  <path d="M 80 80 L 80 180" fill="none" stroke="#ea580c" stroke-width="3" marker-end="url(#arrow-head-orange)" />
  <text x="50" y="130" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#c2410c" text-anchor="middle" transform="rotate(-90 50 130)">Down a Group</text>

  <!-- Atoms down -->
  <circle cx="140" cy="110" r="8" fill="#fdba74"/>
  <circle cx="140" cy="140" r="11" fill="#fdba74"/>
  <circle cx="140" cy="180" r="15" fill="#fdba74"/>

  <!-- Text for down -->
  <text x="500" y="110" font-family="var(--font-sans)" font-size="12" fill="#c2410c" text-anchor="middle">Atomic Radius ↑</text>
  <text x="500" y="130" font-family="var(--font-sans)" font-size="12" fill="#c2410c" text-anchor="middle">Ionisation Energy ↓</text>
  <text x="500" y="150" font-family="var(--font-sans)" font-size="12" fill="#c2410c" text-anchor="middle">Electronegativity ↓</text>
  <path d="M 470 125 L 420 125" fill="none" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,4" />

  <defs>
    <marker id="arrow-head-blue" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#2563eb"/>
    </marker>
    <marker id="arrow-head-orange" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#ea580c"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Across a period: atomic radius decreases; IE and electronegativity increase. Down a group: atomic radius increases; IE and electronegativity decrease. Key ideas: nuclear charge, shielding, and distance from nucleus determine these trends.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Across period: radius↓, IE↑, electronegativity↑ (more protons, same shields). Down group: radius↑, IE↓, electronegativity↓ (more shells).',
    cues: [
      { id: 'cue-1', blockId: 'tbl-across', prompt: 'Explain why atomic radius decreases across Period 3 from Na to Cl.', answer: 'As proton number increases, the nuclear charge increases, attracting the outer electrons more strongly and pulling them closer to the nucleus. The electrons are added to the same shell so shielding is similar.' },
      { id: 'cue-2', blockId: 'tbl-down', prompt: 'Explain why first ionisation energy decreases down Group 1.', answer: 'Each successive element has an extra electron shell, so the outer electron is further from the nucleus and shielded by more inner shells. The nuclear attraction for the outer electron is weaker, so it is easier to remove.' },
      { id: 'cue-3', blockId: 'tbl-down', prompt: 'Why does electronegativity decrease down Group 7?', answer: 'The outer shell becomes further from the nucleus and more shielded by inner electrons with each period, so the nucleus attracts bonding electrons less strongly.' }
    ]
  },
  evidence: [],
  mentions: []
};
