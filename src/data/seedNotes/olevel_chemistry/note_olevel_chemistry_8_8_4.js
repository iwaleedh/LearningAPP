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
