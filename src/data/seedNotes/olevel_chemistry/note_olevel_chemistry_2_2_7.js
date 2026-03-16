export const note_olevel_chemistry_2_2_7 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-3-1-covalent-bonds.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe covalent bonding as the sharing of electron pairs, and draw dot-and-cross diagrams for simple covalent molecules including H₂, Cl₂, HCl, H₂O, NH₃, CH₄, CO₂ and N₂.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Covalent Bonding', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition of Covalent Bond',
        text: 'A <strong>covalent bond</strong> is formed by the <strong>sharing of a pair of electrons</strong> between two atoms. Each atom contributes one electron to the shared pair.<br/><br/>Covalent bonds form between <strong>non-metal atoms</strong>. The shared electron pair is attracted to both nuclei simultaneously, creating the bond.<br/><br/>• <strong>Single bond</strong> = 1 shared pair of electrons<br/>• <strong>Double bond</strong> = 2 shared pairs of electrons<br/>• <strong>Triple bond</strong> = 3 shared pairs of electrons'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Common Covalent Molecules', level: 2 }
    },
    {
      id: 'tbl-molecules',
      type: 'comparisonTable',
      data: {
        caption: 'Dot-and-cross information for common covalent molecules',
        headers: ['Molecule', 'Formula', 'Bond type', 'Bonds per molecule', 'Shape'],
        rows: [
          ['Hydrogen', 'H₂', 'Single (H–H)', '1', 'Linear'],
          ['Chlorine', 'Cl₂', 'Single (Cl–Cl)', '1', 'Linear'],
          ['Hydrogen chloride', 'HCl', 'Single (H–Cl)', '1', 'Linear'],
          ['Water', 'H₂O', '2 single (O–H)', '2', 'Bent (angular)'],
          ['Ammonia', 'NH₃', '3 single (N–H)', '3', 'Pyramidal'],
          ['Methane', 'CH₄', '4 single (C–H)', '4', 'Tetrahedral'],
          ['Carbon dioxide', 'CO₂', '2 double (C=O)', '2 double bonds', 'Linear'],
          ['Nitrogen', 'N₂', 'Triple (N≡N)', '1 triple bond', 'Linear']
        ]
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Dot-and-Cross: Water (H₂O)',
        text: 'Oxygen (2,6) needs 2 more electrons to fill its outer shell. Each hydrogen (1) needs 1 more electron.<br/><br/>O shares 1 electron with each H:<br/>• Each H gets a full shell (2 electrons)<br/>• O gets a full outer shell (8 electrons)<br/>• 2 bonding pairs + 2 lone pairs on O<br/><br/>Structure: H—O—H with 2 lone pairs on O<br/>In the diagram: draw O in the centre with 2 pairs of dots (lone pairs) and one × from each H, sharing one dot from O.'
      }
    },
    {
      id: 'svg-h2o',
      type: 'svg',
      data: {
        caption: 'Dot-and-cross diagram for water (H₂O)',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 160">
    <defs>
        <style>
            .nucleus { font-weight: bold; font-family: var(--font-sans); font-size: 16px; text-anchor: middle; dominant-baseline: middle; fill: var(--color-text); }
            .electron-dot { fill: #e74c3c; }
            .electron-cross { stroke: #3498db; stroke-width: 2; stroke-linecap: round; }
            .shell { fill: none; stroke: var(--color-text-tertiary); stroke-width: 1.5; }
        </style>
    </defs>
    <!-- O Atom in center -->
    <text x="150" y="80" class="nucleus">O</text>
    <circle cx="150" cy="80" r="50" class="shell"/>
    
    <!-- H Atoms on sides -->
    <text x="80" y="80" class="nucleus">H</text>
    <circle cx="80" cy="80" r="35" class="shell"/>
    
    <text x="220" y="80" class="nucleus">H</text>
    <circle cx="220" cy="80" r="35" class="shell"/>
    
    <!-- O Lone Pairs (dots) -->
    <circle cx="150" cy="40" r="4" class="electron-dot"/>
    <circle cx="165" cy="43" r="4" class="electron-dot"/>
    
    <circle cx="150" cy="120" r="4" class="electron-dot"/>
    <circle cx="165" cy="117" r="4" class="electron-dot"/>
    
    <!-- Shared pair left (O dot, H cross) -->
    <circle cx="115" cy="74" r="4" class="electron-dot"/>
    <path d="M 111 82 L 119 90 M 119 82 L 111 90" class="electron-cross"/>
    
    <!-- Shared pair right (O dot, H cross) -->
    <circle cx="185" cy="74" r="4" class="electron-dot"/>
    <path d="M 181 82 L 189 90 M 189 82 L 181 90" class="electron-cross"/>
</svg>`
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Dot-and-Cross: Carbon Dioxide (CO₂)',
        text: 'Carbon (2,4) needs 4 more electrons. Oxygen (2,6) needs 2 more electrons.<br/><br/>C shares 2 electrons with each O atom → <strong>double bond</strong> (C=O) on each side.<br/><br/>O=C=O<br/>• C: 4 shared pairs → full outer shell (8 electrons)<br/>• Each O: 2 shared pairs + 2 lone pairs → full outer shell (8 electrons)'
      }
    },
    {
      id: 'svg-co2',
      type: 'svg',
      data: {
        caption: 'Dot-and-cross diagram for carbon dioxide (CO₂)',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 160">
    <defs>
        <style>
            .nucleus { font-weight: bold; font-family: var(--font-sans); font-size: 16px; text-anchor: middle; dominant-baseline: middle; fill: var(--color-text); }
            .electron-dot { fill: #e74c3c; }
            .electron-cross { stroke: #3498db; stroke-width: 2; stroke-linecap: round; }
            .shell { fill: none; stroke: var(--color-text-tertiary); stroke-width: 1.5; }
        </style>
    </defs>
    <!-- C Atom in center -->
    <text x="160" y="80" class="nucleus">C</text>
    <circle cx="160" cy="80" r="50" class="shell"/>
    
    <!-- O Atoms on sides -->
    <text x="75" y="80" class="nucleus">O</text>
    <circle cx="75" cy="80" r="50" class="shell"/>
    
    <text x="245" y="80" class="nucleus">O</text>
    <circle cx="245" cy="80" r="50" class="shell"/>
    
    <!-- Left O Lone Pairs (crosses) -->
    <path d="M 40 40 L 48 48 M 48 40 L 40 48" class="electron-cross"/>
    <path d="M 55 35 L 63 43 M 63 35 L 55 43" class="electron-cross"/>
    
    <path d="M 40 112 L 48 120 M 48 112 L 40 120" class="electron-cross"/>
    <path d="M 55 117 L 63 125 M 63 117 L 55 125" class="electron-cross"/>

    <!-- Right O Lone Pairs (crosses) -->
    <path d="M 272 40 L 280 48 M 280 40 L 272 48" class="electron-cross"/>
    <path d="M 257 35 L 265 43 M 265 35 L 257 43" class="electron-cross"/>
    
    <path d="M 272 112 L 280 120 M 280 112 L 272 120" class="electron-cross"/>
    <path d="M 257 117 L 265 125 M 265 117 L 257 125" class="electron-cross"/>
    
    <!-- Shared pairs left (C dots, O crosses) -->
    <!-- dot-cross 1 -->
    <circle cx="117" cy="65" r="4" class="electron-dot"/>
    <path d="M 113 77 L 121 85 M 121 77 L 113 85" class="electron-cross"/>
    <!-- dot-cross 2 -->
    <circle cx="125" cy="67" r="4" class="electron-dot"/>
    <path d="M 121 79 L 129 87 M 129 79 L 121 87" class="electron-cross"/>

    <!-- Shared pairs right (C dots, O crosses) -->
    <!-- dot-cross 1 -->
    <circle cx="203" cy="65" r="4" class="electron-dot"/>
    <path d="M 199 77 L 207 85 M 207 77 L 199 85" class="electron-cross"/>
    <!-- dot-cross 2 -->
    <circle cx="195" cy="67" r="4" class="electron-dot"/>
    <path d="M 191 79 L 199 87 M 199 79 L 191 87" class="electron-cross"/>
</svg>`
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Drawing Dot-and-Cross Diagrams',
        text: '1. Count outer electrons for each atom using group numbers (e.g. N = Group 15 → 5 outer electrons).<br/>2. Calculate how many bonds each atom needs (atoms need to reach 8 outer electrons, H needs 2).<br/>3. Draw shared pairs between atoms and lone pairs on each atom.<br/>4. Check each atom has a full outer shell in the final diagram.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Covalent bonds form by sharing electron pairs between non-metal atoms. Single bonds share 1 pair; double bonds share 2 pairs; triple bonds share 3 pairs. Each atom achieves a full outer shell through sharing.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Covalent bonds = shared electron pairs between non-metals; single (1 pair), double (2 pairs), triple (3 pairs); each achieves full outer shells via sharing.',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'Define a covalent bond.', answer: 'A covalent bond is formed by the sharing of a pair of electrons between two non-metal atoms. Each atom contributes one electron to the shared pair.' },
      { id: 'cue-2', blockId: 'tbl-molecules', prompt: 'What type of bond is present in N₂ and CO₂?', answer: 'N₂ has a triple bond (N≡N, 3 shared pairs). CO₂ has two double bonds (O=C=O, 2 shared pairs each).' },
      { id: 'cue-3', blockId: 'call-worked1', prompt: 'How many bonding pairs and lone pairs does oxygen have in a water molecule?', answer: '2 bonding pairs (one to each H) and 2 lone pairs on the oxygen atom.' }
    ]
  },
  evidence: [],
  mentions: []
};
