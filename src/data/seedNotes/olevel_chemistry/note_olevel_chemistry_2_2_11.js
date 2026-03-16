export const note_olevel_chemistry_2_2_11 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-4-2-siliconiv-oxide.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the giant covalent structure of silicon(IV) oxide (SiO₂) and explain its physical properties.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Silicon(IV) Oxide — Giant Covalent Structure', level: 2 }
    },
    {
      id: 'call-structure',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Structure of Silicon(IV) oxide (SiO₂)',
        text: 'Silicon(IV) oxide (sand/quartz) has a <strong>giant covalent (macromolecular) structure</strong>.<br/><br/>Each <strong>silicon atom</strong> is bonded to <strong>4 oxygen atoms</strong> in a tetrahedral arrangement. Each oxygen atom is bonded to 2 silicon atoms, bridging between them. This creates a continuous 3D network of Si–O covalent bonds.<br/><br/>The formula SiO₂ represents the <strong>empirical ratio</strong> of silicon to oxygen (1:2) — not a discrete molecule.<br/><br/>There are no free electrons and no ions.'
      }
    },
    {
      id: 'svg-sio2-structure',
      type: 'svg',
      data: {
        caption: 'Structure of Silicon(IV) oxide. Grey atoms = Silicon, Red atoms = Oxygen.',
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Silicon Atom (grey) -->
    <radialGradient id="si-atom" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#94a3b8" />
      <stop offset="100%" stop-color="#475569" />
    </radialGradient>
    <!-- Oxygen Atom (red) -->
    <radialGradient id="o-atom" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#f87171" />
      <stop offset="100%" stop-color="#dc2626" />
    </radialGradient>
  </defs>

  <g transform="translate(120, 30)">
    <!-- Bonds (Draw first so they go behind atoms) -->
    <!-- Central Si to its 4 Oxygens -->
    <line x1="60" y1="80" x2="60" y2="40" stroke="var(--color-text-tertiary)" stroke-width="3" stroke-linecap="round"/>
    <line x1="60" y1="80" x2="20" y2="110" stroke="var(--color-text-tertiary)" stroke-width="3" stroke-linecap="round"/>
    <line x1="60" y1="80" x2="100" y2="110" stroke="var(--color-text-tertiary)" stroke-width="3" stroke-linecap="round"/>
    <line x1="60" y1="80" x2="60" y2="140" stroke="var(--color-text-tertiary)" stroke-width="3" stroke-linecap="round"/>

    <!-- Extending the network from Oxygens to next Silicon -->
    <!-- Top Oxygen -->
    <line x1="60" y1="40" x2="100" y2="10" stroke="var(--color-text-tertiary)" stroke-width="3" stroke-linecap="round"/>
    <line x1="60" y1="40" x2="20" y2="10" stroke="var(--color-text-tertiary)" stroke-width="3" stroke-linecap="round"/>
    
    <!-- Left Oxygen -->
    <line x1="20" y1="110" x2="-20" y2="80" stroke="var(--color-text-tertiary)" stroke-width="3" stroke-linecap="round"/>
    <line x1="20" y1="110" x2="-10" y2="150" stroke="var(--color-text-tertiary)" stroke-width="3" stroke-linecap="round"/>

    <!-- Right Oxygen -->
    <line x1="100" y1="110" x2="140" y2="80" stroke="var(--color-text-tertiary)" stroke-width="3" stroke-linecap="round"/>
    <line x1="100" y1="110" x2="130" y2="150" stroke="var(--color-text-tertiary)" stroke-width="3" stroke-linecap="round"/>

    <!-- Atoms -->
    <!-- Outer/Connecting Silicons -->
    <circle cx="100" cy="10" r="10" fill="url(#si-atom)"/>
    <circle cx="20" cy="10" r="10" fill="url(#si-atom)"/>
    <circle cx="-20" cy="80" r="10" fill="url(#si-atom)"/>
    <circle cx="-10" cy="150" r="10" fill="url(#si-atom)"/>
    <circle cx="140" cy="80" r="10" fill="url(#si-atom)"/>
    <circle cx="130" cy="150" r="10" fill="url(#si-atom)"/>

    <!-- The 4 Oxygens -->
    <circle cx="60" cy="40" r="8" fill="url(#o-atom)"/>
    <circle cx="20" cy="110" r="8" fill="url(#o-atom)"/>
    <circle cx="100" cy="110" r="8" fill="url(#o-atom)"/>
    <circle cx="60" cy="140" r="8" fill="url(#o-atom)"/>

    <!-- Central Silicon -->
    <circle cx="60" cy="80" r="10" fill="url(#si-atom)"/>

    <!-- Legend -->
    <circle cx="-60" cy="180" r="10" fill="url(#si-atom)"/>
    <text x="-40" y="185" font-family="var(--font-sans)" font-size="14" fill="var(--color-text)">Silicon (bonded to 4 O)</text>
    
    <circle cx="-60" cy="205" r="8" fill="url(#o-atom)"/>
    <text x="-40" y="210" font-family="var(--font-sans)" font-size="14" fill="var(--color-text)">Oxygen (bonded to 2 Si)</text>
  </g>
</svg>`
      }
    },
    {
      id: 'tbl-props',
      type: 'comparisonTable',
      data: {
        caption: 'Properties of silicon(IV) oxide explained',
        headers: ['Property', 'Observation', 'Explanation'],
        rows: [
          ['Melting point', 'Very high (~1610°C)', 'Giant network of many strong Si–O covalent bonds throughout; needs enormous energy to break'],
          ['Hardness', 'Hard solid', 'Rigid, extensive covalent network with no easy cleavage planes'],
          ['Electrical conductivity', 'Non-conductor', 'No free electrons or ions to carry charge'],
          ['Solubility', 'Insoluble in water', 'Strong covalent bonds cannot be overcome by water molecules'],
          ['State at RT', 'Solid', 'Giant covalent lattice, strong forces keep atoms in fixed positions']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Comparing SiO₂ with Diamond', level: 2 }
    },
    {
      id: 'call-compare',
      type: 'callout',
      data: {
        style: 'key',
        title: 'SiO₂ vs Diamond',
        text: 'Both are giant covalent structures with very high melting points and no electrical conductivity.<br/><br/><strong>Diamond:</strong> C–C bonds only; each C bonded to 4 other C; hardest natural substance<br/><strong>SiO₂:</strong> Si–O–Si bonds; each Si bonded to 4 O; slightly less hard than diamond but still very hard<br/><br/>The key difference: SiO₂ contains two different elements (Si and O), while diamond contains only carbon. SiO₂ is the main component of sand and quartz.'
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Silicon(IV) oxide and diamond are both giant covalent structures. Give the same type of explanation for their high melting points: "many strong covalent bonds throughout the giant structure require a large amount of energy to break." Do not confuse with ionic compounds or metals.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Silicon(IV) oxide (SiO₂) is a giant covalent structure where each Si is tetrahedrally bonded to 4 O atoms in a continuous 3D network. This gives it a very high melting point, hardness, and inability to conduct electricity — similar to diamond.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'SiO₂ is a giant covalent network (Si bonded to 4 O in 3D) with very high melting point, hardness, and non-conduction — similar to diamond.',
    cues: [
      { id: 'cue-1', blockId: 'call-structure', prompt: 'Describe the structure of silicon(IV) oxide.', answer: 'Giant covalent (macromolecular) structure: each Si is bonded to 4 O in a tetrahedral arrangement, each O bridges 2 Si atoms, forming a continuous 3D network of Si–O covalent bonds.' },
      { id: 'cue-2', blockId: 'tbl-props', prompt: 'Why does silicon(IV) oxide have a very high melting point?', answer: 'It has a giant network of many strong Si–O covalent bonds throughout the structure. A very large amount of energy is needed to break all these bonds.' },
      { id: 'cue-3', blockId: 'tbl-props', prompt: 'Why does silicon(IV) oxide not conduct electricity?', answer: 'There are no free electrons or free ions in the structure. All electrons are used in strong covalent bonds.' }
    ]
  },
  evidence: [],
  mentions: []
};
