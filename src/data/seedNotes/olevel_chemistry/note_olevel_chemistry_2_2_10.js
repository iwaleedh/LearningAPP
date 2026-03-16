export const note_olevel_chemistry_2_2_10 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-4-1-diamond-and-graphite.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe and explain the structures and physical properties of diamond and graphite as giant covalent allotropes of carbon.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Allotropes of Carbon', level: 2 }
    },
    {
      id: 'call-allotrope',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Allotropes',
        text: '<strong>Allotropes</strong> are different structural forms of the same element. Carbon exists as several allotropes, the most important being <strong>diamond</strong> and <strong>graphite</strong>.<br/>Both are giant covalent structures — enormous networks of covalently bonded carbon atoms with no discrete molecules.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Diamond', level: 2 }
    },
    {
      id: 'call-diamond',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Diamond Structure and Properties',
        text: '<strong>Structure:</strong> Each carbon atom is bonded to <strong>4 other carbon atoms</strong> in a regular tetrahedral arrangement, forming a giant 3D covalent lattice. This is a strong, rigid structure with no layers and no free electrons.<br/><br/><strong>Properties explained:</strong><br/>• <strong>Very hard</strong> — many strong covalent bonds throughout; no easy plane of cleavage<br/>• <strong>Very high melting point</strong> (3550°C) — enormous network of strong bonds requires huge energy to break<br/>• <strong>Does not conduct electricity</strong> — all 4 outer electrons of each C are involved in bonding; no free electrons<br/>• <strong>Insoluble in most solvents</strong> — strong covalent bonds cannot be overcome by solvents<br/><br/><strong>Uses:</strong> Cutting tools (drill bits, glass cutters), jewellery, abrasives'
      }
    },
    {
      id: 'svg-diamond',
      type: 'svg',
      data: {
        caption: 'Diagram showing the tetrahedral network of carbon atoms in diamond.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180">
    <defs>
        <style>
            .carbon { fill: var(--color-text); }
            .bond { stroke: var(--color-text-tertiary); stroke-width: 3; stroke-linecap: round; }
        </style>
    </defs>
    <g transform="translate(40, -10)">
        <!-- Back bonds -->
        <line x1="100" y1="100" x2="130" y2="70" class="bond"/>
        <line x1="130" y1="70" x2="170" y2="70" class="bond"/>
        <line x1="130" y1="70" x2="130" y2="30" class="bond"/>
        <!-- Nodes -->
        <line x1="100" y1="100" x2="100" y2="40" class="bond"/>
        <line x1="100" y1="100" x2="60" y2="130" class="bond"/>
        <line x1="100" y1="100" x2="140" y2="130" class="bond"/>
        <line x1="140" y1="130" x2="140" y2="170" class="bond"/>
        <line x1="140" y1="130" x2="180" y2="100" class="bond"/>
        <line x1="60" y1="130" x2="60" y2="170" class="bond"/>
        <line x1="60" y1="130" x2="20" y2="100" class="bond"/>
        
        <circle cx="100" cy="40" r="6" class="carbon"/>
        <circle cx="100" cy="100" r="6" class="carbon"/>
        <circle cx="60" cy="130" r="6" class="carbon"/>
        <circle cx="140" cy="130" r="6" class="carbon"/>
        <circle cx="130" cy="70" r="6" class="carbon"/>
        <circle cx="170" cy="70" r="6" class="carbon"/>
        <circle cx="130" cy="30" r="6" class="carbon"/>
        <circle cx="140" cy="170" r="6" class="carbon"/>
        <circle cx="180" cy="100" r="6" class="carbon"/>
        <circle cx="60" cy="170" r="6" class="carbon"/>
        <circle cx="20" cy="100" r="6" class="carbon"/>
    </g>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Graphite', level: 2 }
    },
    {
      id: 'call-graphite',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Graphite Structure and Properties',
        text: '<strong>Structure:</strong> Each carbon atom is bonded to <strong>3 other carbon atoms</strong> in a hexagonal layer (sheet). The layers are held together by weak intermolecular forces (van der Waals forces). The 4th outer electron from each C is delocalised and can move between layers.<br/><br/><strong>Properties explained:</strong><br/>• <strong>Conducts electricity</strong> — delocalised electrons free to move along layers<br/>• <strong>Slippery/soft lubricant</strong> — layers can slide over each other (weak forces between layers)<br/>• <strong>Very high melting point</strong> — strong covalent bonds within layers require lots of energy to break<br/>• <strong>Grey/black</strong> and opaque<br/><br/><strong>Uses:</strong> Electrodes, dry lubricant, pencil lead (with clay).'
      }
    },
    {
      id: 'svg-graphite',
      type: 'svg',
      data: {
        caption: 'Diagram showing the 2D layered structure of graphite. The layers are held together by weak intermolecular forces.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
    <defs>
        <style>
            .carbon { fill: var(--color-text); }
            .bond { stroke: var(--color-text-tertiary); stroke-width: 2.5; stroke-linecap: round; }
            .intermolecular { stroke: var(--color-primary); stroke-width: 2; stroke-dasharray: 4,4; fill: none; }
        </style>
    </defs>
    <!-- Top Layer -->
    <g transform="translate(60, 30)">
        <polygon points="40,0 80,0 100,34.6 80,69.2 40,69.2 20,34.6" class="intermolecular" style="stroke:var(--color-text-tertiary); stroke-dasharray: none; fill: none;"/>
        <polygon points="100,34.6 140,34.6 160,69.2 140,103.8 100,103.8 80,69.2" class="intermolecular" style="stroke:var(--color-text-tertiary); stroke-dasharray: none; fill: none;"/>
        <circle cx="40" cy="0" r="5" class="carbon"/>
        <circle cx="80" cy="0" r="5" class="carbon"/>
        <circle cx="100" cy="34.6" r="5" class="carbon"/>
        <circle cx="80" cy="69.2" r="5" class="carbon"/>
        <circle cx="40" cy="69.2" r="5" class="carbon"/>
        <circle cx="20" cy="34.6" r="5" class="carbon"/>
        <circle cx="140" cy="34.6" r="5" class="carbon"/>
        <circle cx="160" cy="69.2" r="5" class="carbon"/>
        <circle cx="140" cy="103.8" r="5" class="carbon"/>
        <circle cx="100" cy="103.8" r="5" class="carbon"/>
    </g>
    <!-- Weak forces -->
    <line x1="100" y1="30" x2="100" y2="100" class="intermolecular"/>
    <line x1="140" y1="30" x2="140" y2="100" class="intermolecular"/>
    <line x1="80" y1="64.6" x2="80" y2="134.6" class="intermolecular"/>
    <line x1="160" y1="64.6" x2="160" y2="134.6" class="intermolecular"/>
    <line x1="200" y1="64.6" x2="200" y2="134.6" class="intermolecular"/>
    <line x1="140" y1="99.2" x2="140" y2="169.2" class="intermolecular"/>
    
    <!-- Bottom Layer -->
    <g transform="translate(60, 100)">
        <polygon points="40,0 80,0 100,34.6 80,69.2 40,69.2 20,34.6" class="intermolecular" style="stroke:var(--color-text-tertiary); stroke-dasharray: none; fill: none;"/>
        <polygon points="100,34.6 140,34.6 160,69.2 140,103.8 100,103.8 80,69.2" class="intermolecular" style="stroke:var(--color-text-tertiary); stroke-dasharray: none; fill: none;"/>
        <circle cx="40" cy="0" r="5" class="carbon"/>
        <circle cx="80" cy="0" r="5" class="carbon"/>
        <circle cx="100" cy="34.6" r="5" class="carbon"/>
        <circle cx="80" cy="69.2" r="5" class="carbon"/>
        <circle cx="40" cy="69.2" r="5" class="carbon"/>
        <circle cx="20" cy="34.6" r="5" class="carbon"/>
        <circle cx="140" cy="34.6" r="5" class="carbon"/>
        <circle cx="160" cy="69.2" r="5" class="carbon"/>
        <circle cx="140" cy="103.8" r="5" class="carbon"/>
        <circle cx="100" cy="103.8" r="5" class="carbon"/>
    </g>
</svg>`
      }
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Diamond vs Graphite comparison',
        headers: ['Property', 'Diamond', 'Graphite'],
        rows: [
          ['Bonds per C atom', '4 (tetrahedral)', '3 (hexagonal layers)'],
          ['Free electrons', 'None', 'One delocalised per C atom'],
          ['Hardness', 'Hardest natural substance', 'Soft and slippery'],
          ['Electrical conductivity', 'Non-conductor', 'Good conductor'],
          ['Melting point', 'Very high (~3550°C)', 'Very high (sublimes ~3600°C)'],
          ['Structure', 'Giant 3D tetrahedral network', 'Layered hexagonal sheets'],
          ['Uses', 'Cutting tools, jewellery', 'Electrodes, lubricant, pencils']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Diamond (4 bonds/C, tetrahedral, no free electrons) is very hard and non-conducting. Graphite (3 bonds/C, layered, 1 free electron/C) is soft, slippery, and conducts electricity. Both have very high melting points due to many strong covalent bonds.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Diamond: 4 bonds/C, hardest, non-conductor. Graphite: 3 bonds/C + 1 delocalised electron, conducts, slippery layers.',
    cues: [
      { id: 'cue-1', blockId: 'call-diamond', prompt: 'Why is diamond so hard and why does it not conduct electricity?', answer: 'Diamond has each C bonded to 4 others in a rigid 3D tetrahedral network with many strong covalent bonds — very hard. No free electrons exist (all 4 are used in bonding) — cannot conduct.' },
      { id: 'cue-2', blockId: 'call-graphite', prompt: 'Why can graphite conduct electricity while diamond cannot?', answer: 'In graphite, each C only uses 3 outer electrons for bonding. The 4th electron is delocalised and free to move along the layers, carrying electrical charge. Diamond uses all 4 outer electrons in bonds, leaving none free.' },
      { id: 'cue-3', blockId: 'call-graphite', prompt: 'Why is graphite used as a lubricant?', answer: 'Graphite has a layered structure where layers are held together by weak intermolecular forces. The layers can easily slide over each other, making graphite slippery and useful as a dry lubricant.' }
    ]
  },
  evidence: [],
  mentions: []
};
