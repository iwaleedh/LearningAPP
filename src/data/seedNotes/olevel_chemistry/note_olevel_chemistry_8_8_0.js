export const note_olevel_chemistry_8_8_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/8 The Periodic Table/8-1-1-the-periodic-table.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the structure of the periodic table and explain how elements are arranged by atomic number and electron configuration.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Structure of the Periodic Table', level: 2 }
    },
    {
      id: 'call-layout',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Layout',
        text: 'Elements are arranged in order of <strong>increasing atomic number (proton number)</strong>.<br/><br/>• <strong>Periods</strong> (rows): 7 periods; elements in the same period have the same number of electron shells.<br/>• <strong>Groups</strong> (columns, numbered 1–0 or I–VII/VIII): elements in the same group have the same number of electrons in their outer shell → similar chemical properties.<br/><br/><strong>Group 0</strong> (or 18): Noble gases — full outer shell, very unreactive.<br/><strong>Groups 1–7</strong>: s- and p-block elements.<br/>Transition metals: large block between Groups 2 and 3.'
      }
    },
    {
      id: 'tbl-groups',
      type: 'comparisonTable',
      data: {
        caption: 'Key groups and their properties',
        headers: ['Group', 'Name', 'Outer electrons', 'Examples'],
        rows: [
          ['1 (I)', 'Alkali metals', '1', 'Li, Na, K, Rb, Cs'],
          ['2 (II)', 'Alkaline earth metals', '2', 'Mg, Ca, Ba'],
          ['7 (VII)', 'Halogens', '7', 'F, Cl, Br, I'],
          ['0 (VIII/18)', 'Noble gases', '8 (He: 2)', 'He, Ne, Ar, Kr']
        ]
      }
    },
    {
      id: 'call-predict',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Predicting Properties from Position',
        text: 'Knowing an element\'s group tells you:<br/>• Number of outer electrons → valency, bond type<br/>• Type of ion formed (metals lose e⁻; non-metals gain e⁻)<br/>• Reactivity trends<br/><br/>Knowing its period tells you:<br/>• Number of electron shells<br/>• Whether it is a metal or non-metal (metals are on the left; non-metals on the right; metalloids along the diagonal)'
      }
    },
    {
      id: 'call-metals-nonmetals',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Metals vs Non-Metals',
        text: '<strong>Metals</strong> (left and centre of periodic table):<br/>• Good conductors of heat and electricity<br/>• Malleable and ductile<br/>• High melting points (most)<br/>• Form positive ions<br/><br/><strong>Non-metals</strong> (right of periodic table):<br/>• Poor conductors (except graphite)<br/>• Brittle when solid<br/>• Form negative ions or covalent compounds<br/>• Lower melting/boiling points (mostly)'
      }
    },
    {
      id: 'svg-periodic-outline',
      type: 'svg',
      data: {
        caption: 'Outline of the Periodic Table showing the division between metals and non-metals.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280">
    <defs>
        <style>
            .metal { fill: rgba(52, 152, 219, 0.3); stroke: var(--color-text); stroke-width: 1.5; }
            .non-metal { fill: rgba(46, 204, 113, 0.3); stroke: var(--color-text); stroke-width: 1.5; }
            .metalloid { fill: rgba(241, 196, 15, 0.5); stroke: var(--color-text); stroke-width: 1.5; }
            .group-label { font-family: var(--font-sans); font-size: 13px; font-weight: bold; fill: var(--color-text); text-anchor: middle; }
            .legend { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text); }
            .line-stair { stroke: #c0392b; stroke-width: 3; fill: none; stroke-linejoin: miter; }
        </style>
    </defs>

    <!-- Base Grid Scale: each block is 25x25 -->
    <g transform="translate(50, 40)">
        
        <!-- Group 1 -->
        <rect x="0" y="0" width="25" height="175" class="metal"/>
        <line x1="0" y1="25" x2="25" y2="25" stroke="var(--color-text)" stroke-width="1.5"/>
        <!-- Group 2 -->
        <rect x="25" y="25" width="25" height="150" class="metal"/>
        
        <!-- Transition Metals block -->
        <rect x="50" y="75" width="250" height="100" class="metal"/>
        
        <!-- p-block outline (Groups 3-0) -->
        <rect x="300" y="25" width="150" height="150" fill="none" stroke="none" />

        <!-- Draw individual p-block columns -->
        <!-- Group 3 -->
        <rect x="300" y="25" width="25" height="150" class="metal"/>
        <!-- Group 4 -->
        <rect x="325" y="25" width="25" height="150" class="metal"/>
        <!-- Group 5 -->
        <rect x="350" y="25" width="25" height="150" class="metal"/>
        <!-- Group 6 -->
        <rect x="375" y="25" width="25" height="150" class="metal"/>
        <!-- Group 7 -->
        <rect x="400" y="25" width="25" height="150" class="non-metal"/>
        <!-- Group 0 -->
        <rect x="425" y="0" width="25" height="175" class="non-metal"/>
        
        <!-- Add the Non-metal and Metalloid sections manually over the p-block -->
        <!-- Gr 3: B -->
        <rect x="300" y="25" width="25" height="25" class="metalloid"/>
        <!-- Gr 4: C, Si -->
        <rect x="325" y="25" width="25" height="25" class="non-metal"/>
        <rect x="325" y="50" width="25" height="25" class="metalloid"/>
        <!-- Gr 5: N, P, As -->
        <rect x="350" y="25" width="25" height="50" class="non-metal"/>
        <rect x="350" y="75" width="25" height="50" class="metalloid"/>
        <!-- Gr 6: O, S, Se -->
        <rect x="375" y="25" width="25" height="75" class="non-metal"/>
        <rect x="375" y="100" width="25" height="50" class="metalloid"/>
        
        <!-- Staircase line -->
        <polyline points="300,25 300,50 325,50 325,75 350,75 350,125 375,125 375,150 400,150 400,175 425,175" class="line-stair"/>

        <!-- Labels -->
        <text x="12.5" y="-10" class="group-label">I</text>
        <text x="37.5" y="-10" class="group-label">II</text>
        <!-- Transition metals text -->
        <text x="175" y="130" class="group-label">Transition Elements</text>
        
        <text x="312.5" y="-10" class="group-label">III</text>
        <text x="337.5" y="-10" class="group-label">IV</text>
        <text x="362.5" y="-10" class="group-label">V</text>
        <text x="387.5" y="-10" class="group-label">VI</text>
        <text x="412.5" y="-10" class="group-label">VII</text>
        <text x="437.5" y="-10" class="group-label">0</text>
    </g>

    <!-- Legend -->
    <g transform="translate(100, 240)">
        <rect x="0" y="0" width="20" height="20" class="metal"/>
        <text x="30" y="15" class="legend">Metals</text>
        
        <rect x="120" y="0" width="20" height="20" class="metalloid"/>
        <text x="150" y="15" class="legend">Metalloids</text>
        
        <rect x="250" y="0" width="20" height="20" class="non-metal"/>
        <text x="280" y="15" class="legend">Non-Metals</text>
        
        <line x1="380" y1="10" x2="410" y2="10" class="line-stair" stroke-width="4"/>
        <text x="420" y="15" class="legend">Staircase</text>
    </g>
</svg>`
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Periodic table: elements ordered by atomic number. Same group = same outer electrons = similar properties. Same period = same number of shells. Metals on left; non-metals on right. Group 0: full outer shell, noble gases. Group 1: 1 outer e⁻ (alkali metals). Group 7: 7 outer e⁻ (halogens).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Periodic table: ordered by atomic number. Groups = same outer electrons. Periods = same shells. Left = metals; right = non-metals.',
    cues: [
      { id: 'cue-1', blockId: 'call-layout', prompt: 'What determines the order of elements in the periodic table?', answer: 'Increasing atomic number (proton number).' },
      { id: 'cue-2', blockId: 'call-layout', prompt: 'Why do elements in the same group have similar chemical properties?', answer: 'They have the same number of electrons in their outer shell, which determines how they react with other substances.' },
      { id: 'cue-3', blockId: 'tbl-groups', prompt: 'How many outer electrons do halogens (Group 7) have, and name two examples.', answer: '7 outer electrons. Examples: chlorine (Cl) and bromine (Br).' }
    ]
  },
  evidence: [],
  mentions: []
};
