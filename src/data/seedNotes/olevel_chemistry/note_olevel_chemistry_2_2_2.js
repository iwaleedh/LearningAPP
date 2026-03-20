export const note_olevel_chemistry_2_2_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-1-3-electronic-configuration.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Write electronic configurations for elements 1–20 using shell notation, and relate electron arrangement to the position of elements in the Periodic Table.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Electron Shells and Filling Rules', level: 2 }
    },
    {
      id: 'call-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Shell Capacity Rules',
        text: 'Electrons occupy shells (energy levels) around the nucleus:<br/><strong>Shell 1 (innermost):</strong> maximum 2 electrons<br/><strong>Shell 2:</strong> maximum 8 electrons<br/><strong>Shell 3:</strong> maximum 8 electrons (at IGCSE level)<br/><br/>Electrons fill the lowest energy shell first. The configuration is written as numbers separated by commas or dots, e.g. 2,8,6 for sulfur.'
      }
    },
    {
      id: 'svg-shell-filling',
      type: 'svg',
      data: {
        caption: 'Electron shell filling examples: Helium (2), Oxygen (2,6), and Sodium (2,8,1)',
        svg: `<svg viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Electron point -->
    <radialGradient id="elec" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="100%" stop-color="#b91c1c" />
    </radialGradient>
    <!-- Nucleus -->
    <radialGradient id="nuc" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#94a3b8" />
      <stop offset="100%" stop-color="#475569" />
    </radialGradient>
  </defs>

  <!-- Helium (2) -->
  <g transform="translate(150, 120)">
    <!-- Symbol -->
    <circle cx="0" cy="0" r="14" fill="url(#nuc)" />
    <text x="0" y="4" text-anchor="middle" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#1e293b">He</text>
    
    <!-- Shell 1 -->
    <circle cx="0" cy="0" r="40" fill="none" stroke="var(--color-border)" stroke-width="2" />
    <!-- 2 electrons -->
    <circle cx="0" cy="-40" r="6" fill="url(#elec)" />
    <circle cx="0" cy="40" r="6" fill="url(#elec)" />

    <text x="0" y="90" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="16" fill="var(--color-text)">Helium</text>
    <text x="0" y="110" text-anchor="middle" font-family="var(--font-sans)" font-size="14" fill="var(--color-text-secondary)">Config: 2</text>
  </g>

  <!-- Oxygen (2,6) -->
  <g transform="translate(400, 120)">
    <!-- Symbol -->
    <circle cx="0" cy="0" r="14" fill="url(#nuc)" />
    <text x="0" y="4" text-anchor="middle" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#1e293b">O</text>
    
    <!-- Shell 1 -->
    <circle cx="0" cy="0" r="30" fill="none" stroke="var(--color-border)" stroke-width="2" />
    <!-- 2 electrons -->
    <circle cx="0" cy="-30" r="6" fill="url(#elec)" />
    <circle cx="0" cy="30" r="6" fill="url(#elec)" />

    <!-- Shell 2 -->
    <circle cx="0" cy="0" r="60" fill="none" stroke="var(--color-border)" stroke-width="2" />
    <!-- 6 electrons -->
    <circle cx="0" cy="-60" r="6" fill="url(#elec)" />
    <circle cx="0" cy="60" r="6" fill="url(#elec)" />
    <circle cx="60" cy="0" r="6" fill="url(#elec)" />
    <circle cx="-60" cy="0" r="6" fill="url(#elec)" />
    <circle cx="42.4" cy="-42.4" r="6" fill="url(#elec)" />
    <circle cx="-42.4" cy="42.4" r="6" fill="url(#elec)" />

    <text x="0" y="90" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="16" fill="var(--color-text)">Oxygen</text>
    <text x="0" y="110" text-anchor="middle" font-family="var(--font-sans)" font-size="14" fill="var(--color-text-secondary)">Config: 2, 6</text>
  </g>

  <!-- Sodium (2,8,1) -->
  <g transform="translate(670, 120)">
    <!-- Symbol -->
    <circle cx="0" cy="0" r="14" fill="url(#nuc)" />
    <text x="0" y="4" text-anchor="middle" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#1e293b">Na</text>
    
    <!-- Shell 1 -->
    <circle cx="0" cy="0" r="25" fill="none" stroke="var(--color-border)" stroke-width="2" />
    <circle cx="0" cy="-25" r="6" fill="url(#elec)" />
    <circle cx="0" cy="25" r="6" fill="url(#elec)" />

    <!-- Shell 2 -->
    <circle cx="0" cy="0" r="50" fill="none" stroke="var(--color-border)" stroke-width="2" />
    <!-- 8 electrons -->
    <circle cx="0" cy="-50" r="6" fill="url(#elec)" />
    <circle cx="0" cy="50" r="6" fill="url(#elec)" />
    <circle cx="50" cy="0" r="6" fill="url(#elec)" />
    <circle cx="-50" cy="0" r="6" fill="url(#elec)" />
    <circle cx="35.3" cy="-35.3" r="6" fill="url(#elec)" />
    <circle cx="-35.3" cy="-35.3" r="6" fill="url(#elec)" />
    <circle cx="35.3" cy="35.3" r="6" fill="url(#elec)" />
    <circle cx="-35.3" cy="35.3" r="6" fill="url(#elec)" />

    <!-- Shell 3 -->
    <circle cx="0" cy="0" r="75" fill="none" stroke="var(--color-border)" stroke-width="2" />
    <!-- 1 electron -->
    <circle cx="0" cy="-75" r="6" fill="url(#elec)" />

    <text x="0" y="95" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="16" fill="var(--color-text)">Sodium</text>
    <text x="0" y="115" text-anchor="middle" font-family="var(--font-sans)" font-size="14" fill="var(--color-text-secondary)">Config: 2, 8, 1</text>
  </g>
</svg>`
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Electronic Configurations of Elements 1–20', level: 2 }
    },
    {
      id: 'tbl-configs',
      type: 'comparisonTable',
      data: {
        caption: 'Electronic configurations for elements 1–20',
        headers: ['Element', 'Symbol', 'Z', 'Configuration', 'Group'],
        rows: [
          ['Hydrogen', 'H', '1', '1', '1'],
          ['Helium', 'He', '2', '2', '0 (Group 18)'],
          ['Lithium', 'Li', '3', '2,1', '1'],
          ['Beryllium', 'Be', '4', '2,2', '2'],
          ['Boron', 'B', '5', '2,3', '13'],
          ['Carbon', 'C', '6', '2,4', '14'],
          ['Nitrogen', 'N', '7', '2,5', '15'],
          ['Oxygen', 'O', '8', '2,6', '16'],
          ['Fluorine', 'F', '9', '2,7', '17'],
          ['Neon', 'Ne', '10', '2,8', '18'],
          ['Sodium', 'Na', '11', '2,8,1', '1'],
          ['Magnesium', 'Mg', '12', '2,8,2', '2'],
          ['Aluminium', 'Al', '13', '2,8,3', '13'],
          ['Silicon', 'Si', '14', '2,8,4', '14'],
          ['Phosphorus', 'P', '15', '2,8,5', '15'],
          ['Sulfur', 'S', '16', '2,8,6', '16'],
          ['Chlorine', 'Cl', '17', '2,8,7', '17'],
          ['Argon', 'Ar', '18', '2,8,8', '18'],
          ['Potassium', 'K', '19', '2,8,8,1', '1'],
          ['Calcium', 'Ca', '20', '2,8,8,2', '2']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Electronic Configuration and the Periodic Table', level: 2 }
    },
    {
      id: 'call-period',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Configuration Links to Periodic Table Position',
        text: '<strong>Period number</strong> = number of electron shells occupied<br/><strong>Group number</strong> = number of electrons in the outermost (valence) shell<br/><br/>Examples:<br/>• Na (2,8,1): Period 3 (3 shells), Group 1 (1 outer electron)<br/>• Cl (2,8,7): Period 3, Group 17 (7 outer electrons)<br/>• Ca (2,8,8,2): Period 4 (4 shells), Group 2 (2 outer electrons)<br/><br/>Elements in the <strong>same group have the same number of outer electrons</strong> → similar chemical properties.'
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Electron Count',
        text: 'The total number of electrons in a configuration must equal the atomic number Z. Use this to check your answer. For K (Z=19): 2+8+8+1 = 19 ✓'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Electrons fill shells in order (max 2, 8, 8). Group number = outer electrons; period number = number of shells. Elements in the same group have the same outer shell electron count and similar chemical properties.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Electronic configurations (2, 8, 8 shell filling) link to Periodic Table position: period = shells used, group = outer electrons.',
    cues: [
      { id: 'cue-1', blockId: 'call-key1', prompt: 'State the maximum number of electrons in each of the first three shells.', answer: 'Shell 1: max 2 electrons. Shell 2: max 8 electrons. Shell 3: max 8 electrons (at IGCSE level).' },
      { id: 'cue-2', blockId: 'tbl-configs', prompt: 'Write the electronic configuration of chlorine (Z=17).', answer: '2,8,7 — shell 1 has 2, shell 2 has 8, shell 3 has 7.' },
      { id: 'cue-3', blockId: 'call-period', prompt: 'How does electronic configuration relate to an element\'s period and group?', answer: 'Period number = number of occupied electron shells. Group number = number of electrons in the outermost shell.' }
    ]
  },
  evidence: [],
  mentions: []
};
