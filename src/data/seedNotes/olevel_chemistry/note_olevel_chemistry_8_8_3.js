export const note_olevel_chemistry_8_8_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/8 The Periodic Table/8-2-2-group-vii-properties.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the physical and chemical properties of Group VII (halogens) and explain trends in reactivity down the group.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Group VII: The Halogens', level: 2 }
    },
    {
      id: 'tbl-physical',
      type: 'comparisonTable',
      data: {
        caption: 'Physical properties of halogens at room temperature',
        headers: ['Halogen', 'State (room temp)', 'Colour', 'Trend'],
        rows: [
          ['Fluorine (F₂)', 'Gas', 'Pale yellow', '↑ down the group'],
          ['Chlorine (Cl₂)', 'Gas', 'Yellow-green', ''],
          ['Bromine (Br₂)', 'Liquid', 'Red-brown (orange)', ''],
          ['Iodine (I₂)', 'Solid', 'Grey-black (violet vapour)', '']
        ]
      }
    },
    {
      id: 'call-trend-physical',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Physical Trends Down Group 7',
        text: 'Going down the group (F → Cl → Br → I):<br/>• <strong>Melting and boiling points increase</strong> → state changes gas → liquid → solid<br/>• Colour becomes <strong>darker</strong><br/>• Density increases<br/><br/>Reason: larger molecules → stronger London dispersion forces → more energy needed to overcome intermolecular forces.'
      }
    },
    {
      id: 'svg-halogens',
      type: 'svg',
      data: {
        caption: 'Physical states and colours of the Halogens at room temperature. Note the trend from gas to solid and lighter to darker colour down the group.',
        svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Set of 4 gas jars / flasks -->

  <!-- Fluorine (F2) -->
  <text x="100" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Fluorine (F₂)</text>
  <rect x="75" y="60" width="50" height="120" rx="4" fill="#44370a" opacity="0.4" stroke="var(--color-text)" stroke-width="2"/>
  <rect x="70" y="55" width="60" height="5" fill="#94a3b8"/> <!-- lid -->
  <text x="100" y="100" font-family="var(--font-sans)" font-size="12" fill="#854d0e" opacity="0.6" text-anchor="middle">Pale</text>
  <text x="100" y="115" font-family="var(--font-sans)" font-size="12" fill="#854d0e" opacity="0.6" text-anchor="middle">yellow</text>
  <text x="100" y="130" font-family="var(--font-sans)" font-size="12" fill="#854d0e" opacity="0.6" text-anchor="middle">gas</text>

  <!-- Chlorine (Cl2) -->
  <text x="230" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Chlorine (Cl₂)</text>
  <rect x="205" y="60" width="50" height="120" rx="4" fill="#0a2e1a" opacity="0.6" stroke="var(--color-text)" stroke-width="2"/>
  <rect x="200" y="55" width="60" height="5" fill="#94a3b8"/> <!-- lid -->
  <text x="230" y="100" font-family="var(--font-sans)" font-size="12" fill="#064e3b" text-anchor="middle">Yellow-</text>
  <text x="230" y="115" font-family="var(--font-sans)" font-size="12" fill="#064e3b" text-anchor="middle">green</text>
  <text x="230" y="130" font-family="var(--font-sans)" font-size="12" fill="#064e3b" text-anchor="middle">gas</text>

  <!-- Bromine (Br2) -->
  <text x="360" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Bromine (Br₂)</text>
  <rect x="335" y="60" width="50" height="120" rx="4" fill="#7c2d12" opacity="0.5" stroke="var(--color-text)" stroke-width="2"/>
  <rect x="335" y="130" width="50" height="50" rx="4" fill="#c2410c"/> <!-- liquid -->
  <rect x="330" y="55" width="60" height="5" fill="#94a3b8"/> <!-- lid -->
  <text x="360" y="100" font-family="var(--font-sans)" font-size="12" fill="#9a3412" text-anchor="middle">Red-brown</text>
  <text x="360" y="115" font-family="var(--font-sans)" font-size="12" fill="#9a3412" text-anchor="middle">vapour</text>
  <text x="360" y="155" font-family="var(--font-sans)" font-size="12" fill="#1e293b" text-anchor="middle">Liquid</text>

  <!-- Iodine (I2) -->
  <text x="490" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Iodine (I₂)</text>
  <rect x="465" y="60" width="50" height="120" rx="4" fill="#2d1b69" opacity="0.4" stroke="var(--color-text)" stroke-width="2"/>
  <rect x="460" y="55" width="60" height="5" fill="#94a3b8"/> <!-- lid -->
  <!-- Solid crystals at bottom -->
  <polygon points="475,175 480,165 490,170 485,180" fill="#334155"/>
  <polygon points="490,175 495,160 505,165 500,180" fill="#1e293b"/>
  <polygon points="480,178 485,168 500,175 495,180" fill="#0f172a"/>
  
  <text x="490" y="100" font-family="var(--font-sans)" font-size="12" fill="#6b21a8" text-anchor="middle">Violet</text>
  <text x="490" y="115" font-family="var(--font-sans)" font-size="12" fill="#6b21a8" text-anchor="middle">vapour</text>
  <text x="490" y="150" font-family="var(--font-sans)" font-size="12" fill="#334155" text-anchor="middle">Grey-black</text>
  <text x="490" y="165" font-family="var(--font-sans)" font-size="12" fill="#334155" text-anchor="middle">solid</text>

  <!-- Down group arrow -->
  <path d="M 60 215 L 540 215" fill="none" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow-head)" />
  <text x="300" y="210" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">MELTING POINT &amp; BOILING POINT INCREASE</text>

  <defs>
    <marker id="arrow-head" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="var(--color-text)"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'call-reactions',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Chemical Properties',
        text: '<strong>Reaction with metals</strong> → metal halide:<br/>2Na(s) + Cl₂(g) → 2NaCl(s)<br/>Fe(s) + 3Cl₂(g) → 2FeCl₃(s) (iron wool burns in Cl₂)<br/><br/><strong>Reaction with hydrogen</strong>:<br/>H₂(g) + Cl₂(g) → 2HCl(g) (explodes in UV with F₂; needs catalyst/heat for Br₂, I₂)<br/><br/><strong>Reaction with water</strong> (Cl₂):<br/>Cl₂(g) + H₂O(l) ⇌ HCl(aq) + HClO(aq) → bleaching action (HOCl is the active bleach)'
      }
    },
    {
      id: 'call-reactivity',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reactivity Trend',
        text: '<strong>Reactivity decreases down Group VII</strong> (F &gt; Cl &gt; Br &gt; I).<br/><br/>Reason: Going down the group, the incoming electron is being added to a shell that is:<br/>• Further from the nucleus<br/>• Shielded by more inner shells<br/>→ Less effective nuclear attraction for the incoming electron → harder to gain the electron → less reactive.<br/><br/>F is the most reactive non-metal element in the periodic table.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Halogens: F₂ (pale yellow gas) → Cl₂ (yellow-green gas) → Br₂ (red-brown liquid) → I₂ (grey-black solid). MP/BP increase down group. Reactivity decreases: F > Cl > Br > I (outer shell further, more shielding → harder to gain e⁻).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Halogens: gas→liquid→solid down group; colour darker; MP/BP increase. Reactivity: F>Cl>Br>I. Down group: outer e⁻ further+shielded → harder to gain e⁻.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-physical', prompt: 'State the colour and physical state of chlorine, bromine, and iodine at room temperature.', answer: 'Chlorine: yellow-green gas; bromine: red-brown liquid; iodine: grey-black solid (gives violet vapour on heating).' },
      { id: 'cue-2', blockId: 'call-reactivity', prompt: 'Explain why fluorine is more reactive than chlorine.', answer: 'Fluorine\'s outer shell (n=2) is much closer to the nucleus and less shielded, so the nucleus attracts an incoming electron more strongly. It is easier for fluorine to gain an electron, making it more reactive.' },
      { id: 'cue-3', blockId: 'call-reactions', prompt: 'Write the equation for hydrogen reacting with chlorine.', answer: 'H₂(g) + Cl₂(g) → 2HCl(g)' }
    ]
  },
  evidence: [],
  mentions: []
};
