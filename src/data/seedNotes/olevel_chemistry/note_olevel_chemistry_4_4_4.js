export const note_olevel_chemistry_4_4_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/4 Electrochemistry/4-1-5-ionic-half-equations.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Write ionic half equations for the reactions at each electrode during electrolysis.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Writing Half Equations', level: 2 }
    },
    {
      id: 'call-rules',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rules for Half Equations',
        text: '<strong>Half equations</strong> show what happens at one electrode:<br/>• Include the ion(s), the product, and the electrons<br/>• Electrons appear on the <strong>left</strong> for reduction (cathode)<br/>• Electrons appear on the <strong>right</strong> for oxidation (anode)<br/>• Must be balanced in terms of atoms AND charge<br/><br/>To balance charge: add electrons (e⁻) to make both sides equal'
      }
    },
    {
      id: 'svg-electrode-surface',
      type: 'svg',
      data: {
        caption: 'Microscopic view of half-equations: Reduction happening at the cathode and Oxidation at the anode.',
        svg: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cathode" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
    <linearGradient id="anode" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fca5a5"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
    <radialGradient id="electron" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="100%" stop-color="#eab308"/>
    </radialGradient>
  </defs>
  
  <rect width="100%" height="100%" fill="var(--color-surface)"/>

  <!-- Left: Cathode Reduction -->
  <rect x="20" y="40" width="80" height="200" fill="url(#cathode)"/>
  <text x="60" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#0284c7" text-anchor="middle">Cathode (-) Reduction</text>

  <!-- Cathode Solution Side -->
  <rect x="100" y="40" width="130" height="200" fill="#0c4a6e" opacity="0.6"/>
  <!-- Cu2+ ion approaching -->
  <circle cx="200" cy="180" r="16" fill="#3b82f6"/>
  <text x="200" y="186" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">Cu²⁺</text>
  <path d="M 180 180 L 140 180" stroke="#0284c7" stroke-width="2" fill="none" stroke-dasharray="4,4"/>
  
  <!-- e- appearing -->
  <circle cx="95" cy="110" r="8" fill="url(#electron)"/>
  <text x="95" y="113" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">e⁻</text>
  <circle cx="95" cy="130" r="8" fill="url(#electron)"/>
  <text x="95" y="133" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">e⁻</text>

  <path d="M 105 120 L 135 140" stroke="#ca8a04" stroke-width="2" fill="none" stroke-dasharray="2,2"/>
  
  <!-- Cu neutral atom deposited -->
  <circle cx="120" cy="150" r="16" fill="#d97706"/>
  <text x="120" y="156" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">Cu</text>

  <text x="115" y="260" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#0369a1" text-anchor="middle">Cu²⁺ + 2e⁻ → Cu</text>


  <!-- Right: Anode Oxidation -->
  <rect x="270" y="40" width="130" height="200" fill="#3d1212" opacity="0.6"/>
  <rect x="400" y="40" width="80" height="200" fill="url(#anode)"/>
  <text x="440" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#ef4444" text-anchor="middle">Anode (+) Oxidation</text>

  <!-- Cl- ions approaching -->
  <circle cx="300" cy="100" r="14" fill="#10b981"/>
  <text x="300" y="105" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Cl⁻</text>
  <circle cx="300" cy="140" r="14" fill="#10b981"/>
  <text x="300" y="145" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Cl⁻</text>
  
  <path d="M 320 120 L 360 120" stroke="#ef4444" stroke-width="2" fill="none" stroke-dasharray="4,4"/>

  <!-- Molecule formed and e- left behind -->
  <g transform="translate(370, 120)">
    <circle cx="0" cy="-8" r="12" fill="#047857"/>
    <circle cx="0" cy="8" r="12" fill="#047857"/>
    <text x="0" y="4" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Cl₂</text>
  </g>

  <!-- Electrons going into Anode -->
  <path d="M 390 120 L 415 160" stroke="#ca8a04" stroke-width="2" fill="none" stroke-dasharray="2,2"/>
  <circle cx="410" cy="170" r="8" fill="url(#electron)"/>
  <text x="410" y="173" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">e⁻</text>
  <circle cx="425" cy="170" r="8" fill="url(#electron)"/>
  <text x="425" y="173" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">e⁻</text>

  <text x="385" y="260" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#b91c1c" text-anchor="middle">2Cl⁻ → Cl₂ + 2e⁻</text>

  <!-- Divider line -->
  <line x1="250" y1="20" x2="250" y2="280" stroke="var(--color-border-light)" stroke-width="2" stroke-dasharray="6,6"/>

</svg>`
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Common Half Equations', level: 2 }
    },
    {
      id: 'tbl-half',
      type: 'comparisonTable',
      data: {
        caption: 'Standard electrode half equations',
        headers: ['Electrode', 'Reaction', 'Type'],
        rows: [
          ['Cathode', 'Cu²⁺ + 2e⁻ → Cu', 'Reduction'],
          ['Cathode', 'Pb²⁺ + 2e⁻ → Pb', 'Reduction'],
          ['Cathode', 'Ag⁺ + e⁻ → Ag', 'Reduction'],
          ['Cathode', 'Al³⁺ + 3e⁻ → Al', 'Reduction'],
          ['Cathode', '2H⁺ + 2e⁻ → H₂', 'Reduction'],
          ['Anode', '2Cl⁻ → Cl₂ + 2e⁻', 'Oxidation'],
          ['Anode', '2Br⁻ → Br₂ + 2e⁻', 'Oxidation'],
          ['Anode', '2I⁻ → I₂ + 2e⁻', 'Oxidation'],
          ['Anode', '4OH⁻ → O₂ + 2H₂O + 4e⁻', 'Oxidation'],
          ['Anode', '2O²⁻ → O₂ + 4e⁻', 'Oxidation (molten)']
        ]
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Balancing a half equation',
        text: 'Write the half equation for the discharge of Fe³⁺ at the cathode.<br/><br/>Fe³⁺ → Fe (iron reduced)<br/>Iron has charge 3+; need 3 electrons to balance:<br/><strong>Fe³⁺ + 3e⁻ → Fe</strong><br/><br/>Check charge: Left = 3+ + 3(−) = 0; Right = 0 ✓'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Balance OH⁻ at anode',
        text: 'Write the half equation for oxidation of OH⁻ to O₂.<br/><br/>OH⁻ → O₂ + H₂O<br/>Balance O: 4OH⁻ → O₂ + 2H₂O<br/>Balance charge: Left = 4(−); Right = 0; need 4e⁻ on right:<br/><strong>4OH⁻ → O₂ + 2H₂O + 4e⁻</strong><br/><br/>Check: Left = −4; Right = 0 − 4 = −4 ✓'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always check two things in a half equation: (1) atoms balanced on each side, (2) charge balanced. The number of electrons added equals the charge change. For diatomic products (H₂, Cl₂, O₂, Br₂), you often need to double everything — make sure electrons are still consistent.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Half equations show electrode reactions. Cathode: ion + e⁻ → atom (reduction). Anode: ion → molecule + e⁻ (oxidation). Must balance atoms and charge. e⁻ cancel between half equations to give the overall equation.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Half equations: cathode (reduction) electrons on left; anode (oxidation) electrons on right. Must balance atoms AND charge.',
    cues: [
      { id: 'cue-1', blockId: 'call-rules', prompt: 'Where do electrons appear in cathode vs anode half equations?', answer: 'Cathode (reduction): electrons on the left side. Anode (oxidation): electrons on the right side.' },
      { id: 'cue-2', blockId: 'tbl-half', prompt: 'Write the half equation for the reduction of Cu²⁺ at the cathode.', answer: 'Cu²⁺ + 2e⁻ → Cu' },
      { id: 'cue-3', blockId: 'tbl-half', prompt: 'Write the half equation for the oxidation of Cl⁻ ions at the anode.', answer: '2Cl⁻ → Cl₂ + 2e⁻' }
    ]
  },
  evidence: [],
  mentions: []
};
