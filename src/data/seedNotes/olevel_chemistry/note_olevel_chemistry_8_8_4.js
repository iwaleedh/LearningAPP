export const note_olevel_chemistry_8_8_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/8 The Periodic Table/8-2-3-group-vii-displacement-reactions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe halogen displacement reactions and use them to determine the reactivity order of halogens.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Halogen Displacement Reactions', level: 2 }
    },
    {
      id: 'call-principle',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Displacement in Halide Solutions',
        text: 'A more reactive halogen <strong>displaces</strong> a less reactive halide ion from solution.<br/><br/>General rule: If Halogen X is more reactive than Halide Y⁻, then:<br/>X₂ + 2Y⁻ → 2X⁻ + Y₂ (displacement occurs)<br/><br/>If X is less reactive than Y: no reaction.<br/><br/>Reactivity order: F₂ &gt; Cl₂ &gt; Br₂ &gt; I₂'
      }
    },
    {
      id: 'tbl-displacement',
      type: 'comparisonTable',
      data: {
        caption: 'Displacement reactions: halogen + halide solution (+ cyclohexane layer)',
        headers: ['Halogen added', 'Added to KBr(aq)', 'Added to KI(aq)', 'Added to KCl(aq)'],
        rows: [
          ['Cl₂(aq)', 'Orange/brown layer (Br₂ displaced)', 'Brown/dark layer (I₂ displaced)', 'No change (Cl already present)'],
          ['Br₂(aq)', 'No reaction (Br < Cl; Br cannot displace Cl)', 'Brown/dark layer (I₂ displaced)', 'No reaction'],
          ['I₂(aq)', 'No reaction', 'No reaction', 'No reaction (I is least reactive)']
        ]
      }
    },
    {
      id: 'call-cyclohexane',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Using Cyclohexane as a Solvent',
        text: 'To make colour changes more obvious, cyclohexane (non-polar organic solvent) is added.<br/><br/>Halogens (non-polar) dissolve better in cyclohexane than in water → colour is more intense in the <strong>top (organic) layer</strong>.<br/><br/>Colour guide in cyclohexane layer:<br/>• Cl₂: very pale yellow (hard to see)<br/>• Br₂: orange<br/>• I₂: purple/violet<br/><br/>If the cyclohexane layer turns orange → Br₂ displaced.<br/>If the cyclohexane layer turns purple → I₂ displaced.'
      }
    },
    {
      id: 'svg-halogen-displacement',
      type: 'svg',
      data: {
        caption: 'Halogen displacement observed using a cyclohexane layer to clearly see the coloured halogen product.',
        svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Test Tube 1 -->
  <text x="150" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Cl₂(aq) added to KBr(aq)</text>
  
  <path d="M 120 70 L 120 180 A 30 30 0 0 0 180 180 L 180 70" fill="none" stroke="var(--color-text)" stroke-width="2"/>
  <ellipse cx="150" cy="70" rx="30" ry="8" fill="none" stroke="var(--color-text)" stroke-width="2"/>

  <!-- Water layer -->
  <path d="M 121 140 Q 150 145 179 140 L 179 180 A 29 29 0 0 1 121 180 Z" fill="#44370a" opacity="0.6"/>
  <text x="150" y="170" font-family="var(--font-sans)" font-size="12" fill="#854d0e" text-anchor="middle">Aqueous layer</text>
  
  <!-- Cyclohexane layer (Orange for Br2) -->
  <path d="M 121 100 Q 150 105 179 100 L 179 140 Q 150 145 121 140 Z" fill="#fdba74"/>
  <text x="150" y="125" font-family="var(--font-sans)" font-size="12" fill="#9a3412" text-anchor="middle">Orange: Br₂</text>

  <text x="150" y="215" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂</text>

  <!-- Test Tube 2 -->
  <text x="450" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Cl₂(aq) added to KI(aq)</text>
  
  <path d="M 420 70 L 420 180 A 30 30 0 0 0 480 180 L 480 70" fill="none" stroke="var(--color-text)" stroke-width="2"/>
  <ellipse cx="450" cy="70" rx="30" ry="8" fill="none" stroke="var(--color-text)" stroke-width="2"/>

  <!-- Water layer -->
  <path d="M 421 140 Q 450 145 479 140 L 479 180 A 29 29 0 0 1 421 180 Z" fill="#7f1d1d" opacity="0.3"/>
  <text x="450" y="170" font-family="var(--font-sans)" font-size="12" fill="#7f1d1d" text-anchor="middle">Aqueous layer</text>
  
  <!-- Cyclohexane layer (Purple for I2) -->
  <path d="M 421 100 Q 450 105 479 100 L 479 140 Q 450 145 421 140 Z" fill="#c084fc"/>
  <text x="450" y="125" font-family="var(--font-sans)" font-size="12" fill="#4c1d95" text-anchor="middle">Purple: I₂</text>

  <text x="450" y="215" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Cl₂ + 2I⁻ → 2Cl⁻ + I₂</text>

  <!-- Labels -->
  <path d="M 40 120 L 110 120" fill="none" stroke="var(--color-text)" stroke-width="1.5" marker-end="url(#tip)"/>
  <text x="50" y="115" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)">Cyclohexane layer</text>

  <defs>
    <marker id="tip" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="var(--color-text)"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'call-ionic',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Ionic Equation Examples',
        text: 'Cl₂ + 2KBr → 2KCl + Br₂<br/>Ionic: Cl₂(aq) + 2Br⁻(aq) → 2Cl⁻(aq) + Br₂(aq)<br/>(Cl₂ displaces Br⁻ → Cl₂ is reduced to 2Cl⁻; Br⁻ oxidised to Br₂ — this is a redox reaction!)<br/><br/>Cl₂ + 2KI → 2KCl + I₂<br/>Ionic: Cl₂(aq) + 2I⁻(aq) → 2Cl⁻(aq) + I₂(aq)'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'More reactive halogen displaces less reactive halide: F > Cl > Br > I. Cl₂ displaces both Br⁻ and I⁻; Br₂ displaces only I⁻; I₂ displaces none. Cyclohexane layer shows orange (Br₂) or purple (I₂) colours more clearly.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Reactivity: Cl > Br > I. Cl₂ + KBr → Br₂ (orange layer); Cl₂ + KI → I₂ (purple layer); Br₂ + KI → I₂ (purple layer). I₂ cannot displace any halide.',
    cues: [
      { id: 'cue-1', blockId: 'call-principle', prompt: 'Write the ionic equation for chlorine reacting with potassium bromide solution.', answer: 'Cl₂(aq) + 2Br⁻(aq) → 2Cl⁻(aq) + Br₂(aq)' },
      { id: 'cue-2', blockId: 'tbl-displacement', prompt: 'What would you observe when bromine water is added to potassium iodide solution, especially with cyclohexane added?', answer: 'Iodine is displaced; the cyclohexane (top) layer turns purple due to dissolved I₂.' },
      { id: 'cue-3', blockId: 'call-cyclohexane', prompt: 'Why is cyclohexane added in halogen displacement experiments?', answer: 'Halogens are non-polar and dissolve in the non-polar cyclohexane, producing a more intense, distinct colour in the organic layer, making the result easier to observe.' }
    ]
  },
  evidence: [],
  mentions: []
};
