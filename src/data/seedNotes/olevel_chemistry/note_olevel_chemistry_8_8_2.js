export const note_olevel_chemistry_8_8_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/8 The Periodic Table/8-2-1-group-i-properties.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the physical and chemical properties of Group I (alkali metals) and explain trends in reactivity down the group.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Group I: The Alkali Metals', level: 2 }
    },
    {
      id: 'call-properties',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Physical Properties',
        text: 'Members: Li, Na, K, Rb, Cs (and Fr)<br/><br/>• All are <strong>soft metals</strong> (can be cut with a knife)<br/>• <strong>Low density</strong> (Li, Na, K float on water)<br/>• <strong>Low melting/boiling points</strong> compared to other metals<br/>• All decrease in melting point and increase in density down the group<br/>• Stored under oil (to prevent reaction with oxygen and water vapour)'
      }
    },
    {
      id: 'call-reactions',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Chemical Reactions',
        text: '<strong>1. Reaction with water:</strong><br/>2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)<br/>Produces hydroxide (alkaline solution) + hydrogen gas.<br/>• Li: gentle fizzing<br/>• Na: vigorous fizzing, moves on surface<br/>• K: catches fire (lilac flame)<br/><br/><strong>2. Reaction with oxygen (air):</strong><br/>4Na(s) + O₂(g) → 2Na₂O(s) (sodium oxide)<br/>Tarnish rapidly in air — turn from shiny to dull.<br/><br/><strong>3. Reaction with chlorine:</strong><br/>2Na(s) + Cl₂(g) → 2NaCl(s) (white solid)'
      }
    },
    {
      id: 'svg-alkali-water',
      type: 'svg',
      data: {
        caption: 'Reactions of Lithium, Sodium, and Potassium with water. Reactivity increases down the group (Li < Na < K).',
        svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Trough 1: Lithium -->
  <text x="100" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Lithium (Li)</text>
  <path d="M 50 100 L 50 160 Q 50 170 60 170 L 140 170 Q 150 170 150 160 L 150 100" fill="none" stroke="var(--color-text)" stroke-width="2"/>
  <path d="M 50 120 L 150 120 L 150 160 Q 150 168 140 168 L 60 168 Q 50 168 50 160 Z" fill="#0c4a6e"/>
  <!-- Li piece (floats) -->
  <rect x="90" y="115" width="10" height="8" fill="#94a3b8"/>
  <circle cx="100" cy="110" r="2" fill="#1e293b" stroke="#64748b" stroke-width="0.5"/>
  <circle cx="95" cy="105" r="2" fill="#1e293b" stroke="#64748b" stroke-width="0.5"/>
  <circle cx="108" cy="108" r="2" fill="#1e293b" stroke="#64748b" stroke-width="0.5"/>
  <text x="100" y="185" font-family="var(--font-sans)" font-size="12" fill="#64748b" text-anchor="middle">Gentle fizzing</text>
  <text x="100" y="200" font-family="var(--font-sans)" font-size="12" fill="#64748b" text-anchor="middle">Moves slowly</text>

  <!-- Trough 2: Sodium -->
  <text x="300" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Sodium (Na)</text>
  <path d="M 250 100 L 250 160 Q 250 170 260 170 L 340 170 Q 350 170 350 160 L 350 100" fill="none" stroke="var(--color-text)" stroke-width="2"/>
  <path d="M 250 120 L 350 120 L 350 160 Q 350 168 340 168 L 260 168 Q 250 168 250 160 Z" fill="#0c4a6e"/>
  <!-- Na piece melts into a ball -->
  <circle cx="280" cy="116" r="6" fill="#94a3b8"/>
  <!-- Trail / rapid bubbles -->
  <path d="M 320 116 Q 300 125 285 116" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="2,2"/>
  <circle cx="275" cy="100" r="3" fill="#1e293b" stroke="#64748b" stroke-width="0.5"/>
  <circle cx="285" cy="105" r="3" fill="#1e293b" stroke="#64748b" stroke-width="0.5"/>
  <circle cx="270" cy="108" r="3" fill="#1e293b" stroke="#64748b" stroke-width="0.5"/>
  <circle cx="290" cy="98" r="3" fill="#1e293b" stroke="#64748b" stroke-width="0.5"/>
  <text x="300" y="185" font-family="var(--font-sans)" font-size="12" fill="#64748b" text-anchor="middle">Melts into a ball</text>
  <text x="300" y="200" font-family="var(--font-sans)" font-size="12" fill="#64748b" text-anchor="middle">Vigorous fizzing, moves quickly</text>

  <!-- Trough 3: Potassium -->
  <text x="500" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Potassium (K)</text>
  <path d="M 450 100 L 450 160 Q 450 170 460 170 L 540 170 Q 550 170 550 160 L 550 100" fill="none" stroke="var(--color-text)" stroke-width="2"/>
  <path d="M 450 120 L 550 120 L 550 160 Q 550 168 540 168 L 460 168 Q 450 168 450 160 Z" fill="#7dd3fc"/>
  <!-- K piece on fire -->
  <circle cx="500" cy="116" r="5" fill="#94a3b8"/>
  <!-- Lilac flame -->
  <path d="M 490 115 Q 500 80 510 115 Z" fill="#d946ef" opacity="0.8"/>
  <path d="M 495 115 Q 500 90 505 115 Z" fill="#4a1040" opacity="0.9"/>
  <!-- Sparks/smoke -->
  <circle cx="485" cy="100" r="1.5" fill="#d946ef"/>
  <circle cx="515" cy="105" r="1.5" fill="#d946ef"/>
  <circle cx="505" cy="90" r="1.5" fill="#d946ef"/>
  
  <text x="500" y="185" font-family="var(--font-sans)" font-size="12" fill="#d946ef" font-weight="bold" text-anchor="middle">Catches fire immediately</text>
  <text x="500" y="200" font-family="var(--font-sans)" font-size="12" fill="#d946ef" text-anchor="middle">Burns with a lilac flame</text>

  <!-- Reactivity Arrow -->
  <path d="M 80 215 L 520 215" fill="none" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-head-right)" />
  <text x="300" y="210" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">REACTIVITY INCREASES</text>

  <defs>
    <marker id="arrow-head-right" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#ef4444"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'call-trend',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reactivity Trend',
        text: '<strong>Reactivity increases down Group I</strong> (Li &lt; Na &lt; K &lt; Rb &lt; Cs).<br/><br/>Reason: Going down the group, the outer electron is:<br/>• In a shell further from the nucleus<br/>• Shielded by more inner electron shells<br/>→ Weaker attraction from the nucleus → the electron is more easily lost → more reactive (easier oxidation).<br/><br/>Cs is the most reactive alkali metal (explosive with water).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Alkali metals: soft, low-density, low melting point. All react with water → metal hydroxide + H₂. Reactivity increases down the group (Li→Cs) because outer electron is further and more shielded → easier to lose.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Group 1: soft metals. React with water → MOH + H₂. React with O₂ and Cl₂. Reactivity order: Li < Na < K < Cs. Down group: outer e⁻ further + more shielded → easier to lose.',
    cues: [
      { id: 'cue-1', blockId: 'call-reactions', prompt: 'Write the symbol equation for sodium reacting with water.', answer: '2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)' },
      { id: 'cue-2', blockId: 'call-trend', prompt: 'Explain why potassium is more reactive with water than sodium.', answer: 'In potassium, the outer electron is in a higher energy shell, further from the nucleus and shielded by more inner electrons. The nuclear attraction is weaker, so the electron is more easily lost, making K more reactive.' },
      { id: 'cue-3', blockId: 'call-properties', prompt: 'Why are alkali metals stored under oil?', answer: 'They react rapidly with oxygen and water vapour in the air, oxidising on the surface. Oil prevents contact with air and moisture.' }
    ]
  },
  evidence: [],
  mentions: []
};
